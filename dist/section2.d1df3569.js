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
})({7:[function(require,module,exports) {
var total = 150,
    totalCorp = 225,
    totalShop = 310,
    tabsLand = document.querySelector("#tabs_land"),
    tabsCorp = document.querySelector("#tabs_corp"),
    tabsShop = document.querySelector("#tabs_shop"),

// >>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<
div = document.getElementsByClassName("add_service"),
    pageBlock = document.querySelector("#page_block"),
    thumbs = document.getElementsByClassName("thumbs"),

// все иконки пальца вверх
iconThumb = document.querySelectorAll(".fa-thumbs-up"),

// все инпуты для очистки при переключении
inputForClear = document.querySelectorAll("input"),

// Все чекбоксы для подсчета
inputAll = document.querySelectorAll("input[type='checkbox']:not(.no)"),

// Все инпуты внизу number
inputAllNumber = document.querySelectorAll("input[type='number']"),

// Палец вверх
thumbUp = document.querySelectorAll(".thumbs"),

// Общая сумма
totalValue = document.querySelector("#total-value"),

// Иконка выбора всех чекбоксов
inputChange = document.querySelector(".tasks"),
    inputChange2 = document.querySelector(".tasks1"),
    inputChange3 = document.querySelector(".tasks2"),

// Все чекбосы первого блока
checkFirstBlock = document.querySelectorAll(".firlst_block"),

// Все чекбосы втоорого блока
checkFirstBlock2 = document.querySelectorAll(".second_block"),

// Все чекбосы третьего блока
checkFirstBlock3 = document.querySelectorAll(".third_block");
console.log(checkFirstBlock);

// >>>>>>>>>>> Delete class !page_land <<<<<<<<<<<

for (var i = 0; i < div.length; i++) {
    if (div[i].classList.contains("page_land")) {
        div[i].style.display = "block";
    } else {
        div[i].style.display = "none";
    }
}
// >>>>>>>>>>>>>>>>>>> Add action on click TAB's <<<<<<<<<<<<<<<<<<<<
var landDefaultPrice = 150,
    corpDefaultPrice = 225,
    shopDefaultShop = 310;

var eraseThumbUp = function eraseThumbUp() {
    return iconThumb.forEach(function (elem) {
        return elem.style.display = "none";
    });
};

window.addEventListener("DOMContentLoaded", function () {
    tabsLand.addEventListener("click", function () {
        tabsLand.classList.add("active");
        tabsCorp.classList.remove("active");
        tabsShop.classList.remove("active");
        textTest = document.querySelector("#text-test");

        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        eraseThumbUp();

        for (var _i = 0; _i < div.length; _i++) {
            if (div[_i].classList.contains("page_land")) {
                div[_i].style.display = "block";
            } else {
                div[_i].style.display = "none";
            }
        }

        for (var _i2 = 0; _i2 < inputForClear.length; _i2++) {
            inputForClear[_i2].value = "";

            if (inputForClear[_i2].checked) {
                inputForClear[_i2].checked = false;
            }
        }
        total = landDefaultPrice;
        totalValue.value = total;
    });

    tabsCorp.addEventListener("click", function () {
        tabsCorp.classList.add("active");
        tabsLand.classList.remove("active");
        tabsShop.classList.remove("active");

        eraseThumbUp();

        for (var _i3 = 0; _i3 < div.length; _i3++) {
            if (div[_i3].classList.contains("page_corp")) {
                div[_i3].style.display = "block";
            } else {
                div[_i3].style.display = "none";
            }
        }

        for (var _i4 = 0; _i4 < inputForClear.length; _i4++) {
            inputForClear[_i4].value = "";

            if (inputForClear[_i4].checked) {
                inputForClear[_i4].checked = false;
            }
        }
        total = corpDefaultPrice;
        totalValue.value = total;
    });

    tabsShop.addEventListener("click", function () {
        tabsShop.classList.add("active");
        tabsLand.classList.remove("active");
        tabsCorp.classList.remove("active");

        eraseThumbUp();

        for (var _i5 = 0; _i5 < div.length; _i5++) {
            if (div[_i5].classList.contains("page_shop")) {
                div[_i5].style.display = "block";
            } else {
                div[_i5].style.display = "none";
            }
        }

        for (var _i6 = 0; _i6 < inputForClear.length; _i6++) {
            inputForClear[_i6].value = "";

            if (inputForClear[_i6].checked) {
                inputForClear[_i6].checked = false;
            }
        }

        total = shopDefaultShop;
        totalValue.value = total;
    });
    // >>>>>>>>>>>>> Yellow Sign COOL MAN <<<<<<<<<<<<<<<<<<<<<<

    var thumbIcon = document.querySelectorAll(".fa-thumbs-up");

    thumbUp.forEach(function (key, i) {
        key.addEventListener("change", function () {
            return key.value.length >= 2 ? thumbIcon[i].style.display = "inline-block" : thumbIcon[i].style.display = "none";
        });
    });
});

// >>>>>>>>>>>>>>>>>>>> Добавление и отнимание 

var _loop = function _loop(_i7) {

    inputAll[_i7].addEventListener("change", function () {

        if (inputAll[_i7].checked) {

            total += +inputAll[_i7].dataset.price;
            totalValue.value = total;
        } else {

            total -= +inputAll[_i7].dataset.price;
            totalValue.value = total;
        }
    });
};

for (var _i7 = 0; _i7 < inputAll.length; _i7++) {
    _loop(_i7);
};

// >>>>>>>>>>>>>>>>>>>   Выделение всех чекбоксов

inputChange.addEventListener("change", function () {

    for (var _i8 = 0; _i8 < checkFirstBlock.length; _i8++) {
        if (inputChange.checked) {
            checkFirstBlock[_i8].checked = "true";
            total += +checkFirstBlock[_i8].dataset.price;
            totalValue.value = total;
        } else {
            checkFirstBlock[_i8].checked = "";
            total -= checkFirstBlock[_i8].dataset.price;
            totalValue.value = total;
        }
    }
});

inputChange2.addEventListener("change", function () {
    for (var _i9 = 0; _i9 < checkFirstBlock2.length; _i9++) {
        if (inputChange2.checked) {
            checkFirstBlock2[_i9].checked = "true";
            total += +checkFirstBlock2[_i9].dataset.price;
            totalValue.value = total;
        } else {
            checkFirstBlock2[_i9].checked = "";
            total -= checkFirstBlock2[_i9].dataset.price;
            totalValue.value = total;
        }
    }
});

inputChange3.addEventListener("change", function () {
    for (var _i10 = 0; _i10 < checkFirstBlock3.length; _i10++) {
        if (inputChange3.checked) {
            checkFirstBlock3[_i10].checked = "true";
            total += +checkFirstBlock3[_i10].dataset.price;
            totalValue.value = total;
        } else {
            checkFirstBlock3[_i10].checked = "";
            total -= checkFirstBlock3[_i10].dataset.price;
            totalValue.value = total;
        }
    }
});

//  >>>>>>>>>>>>>>>>>>>>>> Добавление в и отнимание в inut number

var valuess = Array.from(inputAllNumber).map(function (item) {
    item.addEventListener('input', function () {

        var testSum = total + getTotal();

        if (total < testSum) {
            totalValue.value = testSum;
        } else {
            totalValue.value = testSum;
        }
    });
});
function getTotal() {
    var values = Array.from(inputAllNumber).map(function (item) {
        return +item.value * +item.dataset.price;
    });
    return values.reduce(function (sum, current) {
        return sum + current;
    });
}
},{}],16:[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '52906' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
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
        parents.push(+k);
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
},{}]},{},[16,7], null)
//# sourceMappingURL=/section2.d1df3569.map