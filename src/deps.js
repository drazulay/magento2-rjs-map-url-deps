#! /usr/bin/env node

/**
 * Map a list of non-mixin dependencies to each input url
 *
 * Usage:
 * ./lib.js <url>,<url>,...,<url>
 *
 * Outputs a json object:
 *
 * [{url: "http://mysite.com", dependencies: ["a", "b", ...]}, ...]
 *
 * @author Daniel R. Azulay <daniel.azulay@itonomy.nl>
 */

'use strict';

const puppeteer = require('puppeteer');
const Aigle = require('aigle');
const _ = require('lodash');
Aigle.mixin(_);

/**
 * Query puppeteer instance for required packages
 *
 * @param client
 * @returns {Promise<any[]>}
 */
const queryClient = async client => {
    let {result} = await client.send('Runtime.evaluate', {
        'expression': 'Object.keys(window.require.s.contexts._.defined)',
        'returnByValue': true
    }).catch(async reason => {
        return [reason];
    });

    return Array.from((new Set(result.value))).filter(x => !x.startsWith('mixins!')).sort();
};

/**
 * Retrieve map of dependencies for an url
 *
 * @param url
 * @param browser
 * @returns {Promise<{url: *, dependencies: *}>}
 */
const getUrlDependencies = async (url, browser) => {
    return await browser.newPage().then(async page => {
        return await page._client.send('Runtime.enable').then(async () => {
            return await page.goto(url).then(async () => {
                return {url: url, dependencies: await queryClient(page._client)};
            });
        });
    }).catch(async reason => {
        return reason;
    });
};

/**
 * Retrieve map of dependencies for a list of urls
 *
 * @param urls
 * @returns {Aigle<R>}
 */
const depsMap = urls => {
    return puppeteer.launch().then(async browser => {
        return await Aigle.map(urls, url => getUrlDependencies(url, browser)).then((data) => {
            browser.close();
            return data;
        });
    }).catch(async reason => {
        return reason;
    });
};

/**
 * CLI
 */
if (require.main === module) {
    const argv = require('minimist')(process.argv.slice(2));
    const urls = argv.hasOwnProperty('_') ? argv._.shift() : '';

    Aigle.isEmpty(urls).then((process) => {
        return process
            ? 'Usage: map-url-deps.js <url>,<url>,...,<url>'
            : depsMap(urls.split(',')).then(data => JSON.stringify(data));
    }).then(result => console.log(result)).catch(async reason => console.log(reason));
}

module.exports = { depsMap };