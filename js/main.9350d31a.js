// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"img\\work\\specimens1.png":[function(require,module,exports) {
module.exports = "../img/work/specimens1.b8ba9e12.png";
},{}],"img\\work\\specimens2.png":[function(require,module,exports) {
module.exports = "../img/work/specimens2.a89810ab.png";
},{}],"img\\work\\specimens3.png":[function(require,module,exports) {
module.exports = "../img/work/specimens3.60ecc12c.png";
},{}],"img\\work\\kellogg1.png":[function(require,module,exports) {
module.exports = "../img/work/kellogg1.a77b3421.png";
},{}],"img\\work\\kellogg2.png":[function(require,module,exports) {
module.exports = "../img/work/kellogg2.2836a031.png";
},{}],"img\\work\\pcbasics1.png":[function(require,module,exports) {
module.exports = "../img/work/pcbasics1.e40167ce.png";
},{}],"img\\work\\pcbasics2.png":[function(require,module,exports) {
module.exports = "../img/work/pcbasics2.bb0ebd83.png";
},{}],"img\\work\\pcbasics3.png":[function(require,module,exports) {
module.exports = "../img/work/pcbasics3.d72d2ff3.png";
},{}],"js\\main.js":[function(require,module,exports) {
'use strict';

var _specimens = require('../img/work/specimens1.png');

var _specimens2 = _interopRequireDefault(_specimens);

var _specimens3 = require('../img/work/specimens2.png');

var _specimens4 = _interopRequireDefault(_specimens3);

var _specimens5 = require('../img/work/specimens3.png');

var _specimens6 = _interopRequireDefault(_specimens5);

var _kellogg = require('../img/work/kellogg1.png');

var _kellogg2 = _interopRequireDefault(_kellogg);

var _kellogg3 = require('../img/work/kellogg2.png');

var _kellogg4 = _interopRequireDefault(_kellogg3);

var _pcbasics = require('../img/work/pcbasics1.png');

var _pcbasics2 = _interopRequireDefault(_pcbasics);

var _pcbasics3 = require('../img/work/pcbasics2.png');

var _pcbasics4 = _interopRequireDefault(_pcbasics3);

var _pcbasics5 = require('../img/work/pcbasics3.png');

var _pcbasics6 = _interopRequireDefault(_pcbasics5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projects = [{
  title: "Specimens Monologues",
  info: "Winner of three awards at the Cannes Lions International Festival of Creativity 2018, Specimens Monologues was a project for the Chicago Field Museum of Natural History that emulated museum audio guides, but with a hilarious twist.",
  duties: "Under the guidance of a senior developer, I, with a fellow intern, was tasked with creating the entire application using Create React App. We teamed up with pair programming to ensure the app utilized HTML5 audio as well as seemlessly transitioned between views.",
  image: [_specimens2.default, _specimens4.default, _specimens6.default],
  imageAlt: ["Specimens Home Page", "List of Specimens", "Monologue Text Overlay"],
  tags: ["HTML5/CSS3", "Sass", "JavaScript", "React"]
}, {
  title: "Kellogg's",
  info: "Kellogg's offers a variety of websites showcasing their products for kids and adults to enjoy and buy.",
  duties: "I was responsible for making content and styling updates to various Kellogg's websites through Adobe's CMS, Adobe Experience Manager. I've touched sites including: Eggo Waffles, Rice Krispies, Frosted Mini Wheats, Special K, and others.",
  image: [_kellogg2.default, _kellogg4.default],
  imageAlt: ["Rice Krispies Home Page", "Eggo Waffles Home Page"],
  tags: ["CSS3", "Sass", "CMS", "Adobe Experience Manager"]
}, {
  title: "Intel PC Basics",
  info: "This Intel project was created as a Vue microsite to help those new to PCs understand the basics of PC part usage.",
  duties: "I worked with a senior developer who built out the structure of the microsite. I was tasked with styling the entire project as well as handling the graph animations on the Processors page.",
  image: [_pcbasics2.default, _pcbasics4.default, _pcbasics6.default],
  imageAlt: ["Intel PC Basics Home Page", "PC Parts List", "Processor Comparison Graph"],
  tags: ["HTML5/CSS3", "CSS Animations", "JavaScript", "Vue"]
}];

var renderWork = function renderWork() {
  var markup = '<div class=\'container\'>\n                  <div class=\'row\'>\n                    <div class=\'title twelve columns-sm\'>\n                      <h2>Projects</h2>\n                    </div>\n                    <div class=\'flexbox twelve columns-sm\'>';

  projects.forEach(function (el) {

    function getImages() {
      var markup = '';
      for (var i = 0; i < el.image.length; i++) {
        markup += '<img src=' + el.image[i] + ' alt=\'' + el.imageAlt[i] + '\'/>';
      }
      return markup;
    }

    function getListItem() {
      var markup = '';
      for (var i = 0; i < el.tags.length; i++) {
        markup += '<li>' + el.tags[i] + '</li>';
      }
      return markup;
    }

    markup += '\n    <div class="item">\n      <h4>' + el.title + '</h4>\n      ' + getImages() + '\n      <div class=\'info\'>\n        <p><strong>The Project:</strong> ' + el.info + '</p>\n        <p><strong>Responsibilities:</strong> ' + el.duties + '</p>\n        <ul class=\'tags\'>\n          ' + getListItem() + '\n        </ul>\n      </div>\n    </div>\n    ';
  });

  markup += '</div></div></div>';

  document.getElementById("work").innerHTML = markup;
};

var getYear = function getYear() {
  var currYear = new Date().getFullYear();
  document.getElementById('year').innerHTML = '&copy; ' + currYear + ' Ashley Echols';
};

function init() {
  renderWork();
  getYear();
}

init();
},{"../img/work/specimens1.png":"img\\work\\specimens1.png","../img/work/specimens2.png":"img\\work\\specimens2.png","../img/work/specimens3.png":"img\\work\\specimens3.png","../img/work/kellogg1.png":"img\\work\\kellogg1.png","../img/work/kellogg2.png":"img\\work\\kellogg2.png","../img/work/pcbasics1.png":"img\\work\\pcbasics1.png","../img/work/pcbasics2.png":"img\\work\\pcbasics2.png","../img/work/pcbasics3.png":"img\\work\\pcbasics3.png"}],"C:\\Users\\ashle\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '50355' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\ashle\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js","js\\main.js"], null)
//# sourceMappingURL=/main.9350d31a.map
