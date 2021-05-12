# Magento2 RequireJS Url Dependency Mapper

```diff
-- This code has spent a long time wasting away in obsolesence, so I've archived it. RIP.
```

Map a list of non-mixin requirejs dependencies to each input url.

import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

## Examples

### CLI
```
$ npm run-script map-url-deps 'https://www.mymagento2domain.com'

> magento2-rjs-map-url-deps@1.0.0 map-url-deps /Path/to/code/magento2-rjs-map-url-deps
> src/deps.js "https://www.mymagento2domain.com"

[{"url":"https://www.mymagento2domain.com","dependencies":["FormData","Magento_Theme/js/responsive","Magento_Theme/js/theme","Magento_Ui/js/lib/core/class","Magento_Ui/js/lib/core/events","Magento_Ui/js/lib/core/storage/local","Magento_Ui/js/lib/key-codes","Magento_Ui/js/lib/knockout/bindings/after-render","Magento_Ui/js/lib/knockout/bindings/autoselect","Magento_Ui/js/lib/knockout/bindings/bind-html","Magento_Ui/js/lib/knockout/bindings/bootstrap","Magento_Ui/js/lib/knockout/bindings/collapsible","Magento_Ui/js/lib/knockout/bindings/color-picker","Magento_Ui/js/lib/knockout/bindings/datepicker","Magento_Ui/js/lib/knockout/bindings/fadeVisible","Magento_Ui/js/lib/knockout/bindings/i18n","Magento_Ui/js/lib/knockout/bindings/keyboard","Magento_Ui/js/lib/knockout/bindings/mage-init","Magento_Ui/js/lib/knockout/bindings/optgroup","Magento_Ui/js/lib/knockout/bindings/outer_click","Magento_Ui/js/lib/knockout/bindings/range","Magento_Ui/js/lib/knockout/bindings/resizable","Magento_Ui/js/lib/knockout/bindings/scope","Magento_Ui/js/lib/knockout/bindings/simple-checked","Magento_Ui/js/lib/knockout/bindings/staticChecked","Magento_Ui/js/lib/knockout/bindings/tooltip","Magento_Ui/js/lib/knockout/bootstrap","Magento_Ui/js/lib/knockout/extender/bound-nodes","Magento_Ui/js/lib/knockout/extender/observable_array","Magento_Ui/js/lib/knockout/template/engine","Magento_Ui/js/lib/knockout/template/loader","Magento_Ui/js/lib/knockout/template/observable_source","Magento_Ui/js/lib/knockout/template/renderer","Magento_Ui/js/lib/logger/console-logger","Magento_Ui/js/lib/logger/console-output-handler","Magento_Ui/js/lib/logger/entry","Magento_Ui/js/lib/logger/entry-factory","Magento_Ui/js/lib/logger/formatter","Magento_Ui/js/lib/logger/levels-pool","Magento_Ui/js/lib/logger/logger","Magento_Ui/js/lib/logger/logger-utils","Magento_Ui/js/lib/logger/message-pool","Magento_Ui/js/lib/registry/registry","Magento_Ui/js/lib/view/utils/async","Magento_Ui/js/lib/view/utils/bindings","Magento_Ui/js/lib/view/utils/dom-observer","Magento_Ui/js/modal/confirm","Magento_Ui/js/modal/modal","MutationObserver","domReady","domReady!","es6-collections","jquery","jquery/jquery-migrate","jquery/jquery-storageapi","jquery/jquery-ui-timepicker-addon","jquery/jquery.cookie","jquery/jquery.mobile.custom","jquery/patches/jquery","jquery/patches/jquery-ui","jquery/ui","knockoutjs/knockout","knockoutjs/knockout-es5","knockoutjs/knockout-fast-foreach","knockoutjs/knockout-repeat","mage/apply/main","mage/apply/scripts","mage/bootstrap","mage/calendar","mage/collapsible","mage/common","mage/dataPost","mage/ie-class-fixer","mage/mage","mage/smart-keyboard-handler","mage/tabs","mage/template","mage/translate","mage/translate-inline","mage/utils/arrays","mage/utils/compare","mage/utils/main","mage/utils/misc","mage/utils/objects","mage/utils/strings","mage/utils/template","mage/utils/wrapper","matchMedia","mixins","moment","spectrum","text","text!js-translation.json","text!ui/template/modal/modal-custom.html","text!ui/template/modal/modal-popup.html","text!ui/template/modal/modal-slide.html","text!ui/template/tooltip/tooltip.html","tinycolor","underscore"]}]
```

### JS

```
const {mapDeps} = require('magento2-rjs-map-url-deps');

let depMap = mapDeps(['https://www.mymagento2domain.com']);
```
