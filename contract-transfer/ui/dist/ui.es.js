import * as React from "react";
import React__default, { useEffect, useLayoutEffect, useRef, useState, forwardRef, Fragment, isValidElement, cloneElement, createElement, createContext, useContext, useMemo, useReducer, createRef, useCallback } from "react";
import { useWallet, useInstalledWallets, useUninstalledWallets, useApi, useMetadata, useDeployer } from "useink";
import { isContractInstantiatedEvent, isExtrinsicFailedEvent, formatEventName, asContractInstantiatedEvent, isFinalized, shouldDisableStrict, isPendingSignature, planckToDecimalFormatted } from "useink/utils";
import { useTxNotifications, useNotifications, toNotificationLevel } from "useink/notifications";
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
var jsxRuntime = { exports: {} }, reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min)
    return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var m = React__default, P = Symbol.for("react.element"), k = Symbol.for("react.fragment"), L = Object.prototype.hasOwnProperty, O = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, V = { key: !0, ref: !0, __self: !0, __source: !0 };
  function he(K, de, ce) {
    var pe, B = {}, G = null, $ = null;
    ce !== void 0 && (G = "" + ce), de.key !== void 0 && (G = "" + de.key), de.ref !== void 0 && ($ = de.ref);
    for (pe in de)
      L.call(de, pe) && !V.hasOwnProperty(pe) && (B[pe] = de[pe]);
    if (K && K.defaultProps)
      for (pe in de = K.defaultProps, de)
        B[pe] === void 0 && (B[pe] = de[pe]);
    return { $$typeof: P, type: K, key: G, ref: $, props: B, _owner: O.current };
  }
  return reactJsxRuntime_production_min.Fragment = k, reactJsxRuntime_production_min.jsx = he, reactJsxRuntime_production_min.jsxs = he, reactJsxRuntime_production_min;
}
var reactJsxRuntime_development = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  return hasRequiredReactJsxRuntime_development || (hasRequiredReactJsxRuntime_development = 1, process.env.NODE_ENV !== "production" && function() {
    var m = React__default, P = Symbol.for("react.element"), k = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), he = Symbol.for("react.provider"), K = Symbol.for("react.context"), de = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), ie = Symbol.iterator, fe = "@@iterator";
    function Q(Ee) {
      if (Ee === null || typeof Ee != "object")
        return null;
      var pt = ie && Ee[ie] || Ee[fe];
      return typeof pt == "function" ? pt : null;
    }
    var ue = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function me(Ee) {
      {
        for (var pt = arguments.length, ct = new Array(pt > 1 ? pt - 1 : 0), vt = 1; vt < pt; vt++)
          ct[vt - 1] = arguments[vt];
        ge("error", Ee, ct);
      }
    }
    function ge(Ee, pt, ct) {
      {
        var vt = ue.ReactDebugCurrentFrame, Ct = vt.getStackAddendum();
        Ct !== "" && (pt += "%s", ct = ct.concat([Ct]));
        var Tt = ct.map(function(Pt) {
          return String(Pt);
        });
        Tt.unshift("Warning: " + pt), Function.prototype.apply.call(console[Ee], console, Tt);
      }
    }
    var ve = !1, _e = !1, Te = !1, Ce = !1, Ae = !1, Ie;
    Ie = Symbol.for("react.module.reference");
    function Me(Ee) {
      return !!(typeof Ee == "string" || typeof Ee == "function" || Ee === L || Ee === V || Ae || Ee === O || Ee === ce || Ee === pe || Ce || Ee === $ || ve || _e || Te || typeof Ee == "object" && Ee !== null && (Ee.$$typeof === G || Ee.$$typeof === B || Ee.$$typeof === he || Ee.$$typeof === K || Ee.$$typeof === de || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Ee.$$typeof === Ie || Ee.getModuleId !== void 0));
    }
    function ke(Ee, pt, ct) {
      var vt = Ee.displayName;
      if (vt)
        return vt;
      var Ct = pt.displayName || pt.name || "";
      return Ct !== "" ? ct + "(" + Ct + ")" : ct;
    }
    function at(Ee) {
      return Ee.displayName || "Context";
    }
    function st(Ee) {
      if (Ee == null)
        return null;
      if (typeof Ee.tag == "number" && me("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof Ee == "function")
        return Ee.displayName || Ee.name || null;
      if (typeof Ee == "string")
        return Ee;
      switch (Ee) {
        case L:
          return "Fragment";
        case k:
          return "Portal";
        case V:
          return "Profiler";
        case O:
          return "StrictMode";
        case ce:
          return "Suspense";
        case pe:
          return "SuspenseList";
      }
      if (typeof Ee == "object")
        switch (Ee.$$typeof) {
          case K:
            var pt = Ee;
            return at(pt) + ".Consumer";
          case he:
            var ct = Ee;
            return at(ct._context) + ".Provider";
          case de:
            return ke(Ee, Ee.render, "ForwardRef");
          case B:
            var vt = Ee.displayName || null;
            return vt !== null ? vt : st(Ee.type) || "Memo";
          case G: {
            var Ct = Ee, Tt = Ct._payload, Pt = Ct._init;
            try {
              return st(Pt(Tt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ue = Object.assign, lt = 0, ut, Oe, we, ht, mt, Et, Mt;
    function _t() {
    }
    _t.__reactDisabledLog = !0;
    function ft() {
      {
        if (lt === 0) {
          ut = console.log, Oe = console.info, we = console.warn, ht = console.error, mt = console.group, Et = console.groupCollapsed, Mt = console.groupEnd;
          var Ee = {
            configurable: !0,
            enumerable: !0,
            value: _t,
            writable: !0
          };
          Object.defineProperties(console, {
            info: Ee,
            log: Ee,
            warn: Ee,
            error: Ee,
            group: Ee,
            groupCollapsed: Ee,
            groupEnd: Ee
          });
        }
        lt++;
      }
    }
    function yt() {
      {
        if (lt--, lt === 0) {
          var Ee = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ue({}, Ee, {
              value: ut
            }),
            info: Ue({}, Ee, {
              value: Oe
            }),
            warn: Ue({}, Ee, {
              value: we
            }),
            error: Ue({}, Ee, {
              value: ht
            }),
            group: Ue({}, Ee, {
              value: mt
            }),
            groupCollapsed: Ue({}, Ee, {
              value: Et
            }),
            groupEnd: Ue({}, Ee, {
              value: Mt
            })
          });
        }
        lt < 0 && me("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var gt = ue.ReactCurrentDispatcher, xt;
    function bt(Ee, pt, ct) {
      {
        if (xt === void 0)
          try {
            throw Error();
          } catch (Ct) {
            var vt = Ct.stack.trim().match(/\n( *(at )?)/);
            xt = vt && vt[1] || "";
          }
        return `
` + xt + Ee;
      }
    }
    var wt = !1, At;
    {
      var jt = typeof WeakMap == "function" ? WeakMap : Map;
      At = new jt();
    }
    function kt(Ee, pt) {
      if (!Ee || wt)
        return "";
      {
        var ct = At.get(Ee);
        if (ct !== void 0)
          return ct;
      }
      var vt;
      wt = !0;
      var Ct = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Tt;
      Tt = gt.current, gt.current = null, ft();
      try {
        if (pt) {
          var Pt = function() {
            throw Error();
          };
          if (Object.defineProperty(Pt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Pt, []);
            } catch (Qt) {
              vt = Qt;
            }
            Reflect.construct(Ee, [], Pt);
          } else {
            try {
              Pt.call();
            } catch (Qt) {
              vt = Qt;
            }
            Ee.call(Pt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qt) {
            vt = Qt;
          }
          Ee();
        }
      } catch (Qt) {
        if (Qt && vt && typeof Qt.stack == "string") {
          for (var St = Qt.stack.split(`
`), zt = vt.stack.split(`
`), Dt = St.length - 1, It = zt.length - 1; Dt >= 1 && It >= 0 && St[Dt] !== zt[It]; )
            It--;
          for (; Dt >= 1 && It >= 0; Dt--, It--)
            if (St[Dt] !== zt[It]) {
              if (Dt !== 1 || It !== 1)
                do
                  if (Dt--, It--, It < 0 || St[Dt] !== zt[It]) {
                    var Yt = `
` + St[Dt].replace(" at new ", " at ");
                    return Ee.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", Ee.displayName)), typeof Ee == "function" && At.set(Ee, Yt), Yt;
                  }
                while (Dt >= 1 && It >= 0);
              break;
            }
        }
      } finally {
        wt = !1, gt.current = Tt, yt(), Error.prepareStackTrace = Ct;
      }
      var tr = Ee ? Ee.displayName || Ee.name : "", ur = tr ? bt(tr) : "";
      return typeof Ee == "function" && At.set(Ee, ur), ur;
    }
    function dt(Ee, pt, ct) {
      return kt(Ee, !1);
    }
    function Ot(Ee) {
      var pt = Ee.prototype;
      return !!(pt && pt.isReactComponent);
    }
    function $t(Ee, pt, ct) {
      if (Ee == null)
        return "";
      if (typeof Ee == "function")
        return kt(Ee, Ot(Ee));
      if (typeof Ee == "string")
        return bt(Ee);
      switch (Ee) {
        case ce:
          return bt("Suspense");
        case pe:
          return bt("SuspenseList");
      }
      if (typeof Ee == "object")
        switch (Ee.$$typeof) {
          case de:
            return dt(Ee.render);
          case B:
            return $t(Ee.type, pt, ct);
          case G: {
            var vt = Ee, Ct = vt._payload, Tt = vt._init;
            try {
              return $t(Tt(Ct), pt, ct);
            } catch {
            }
          }
        }
      return "";
    }
    var Gt = Object.prototype.hasOwnProperty, Ht = {}, Bt = ue.ReactDebugCurrentFrame;
    function Ft(Ee) {
      if (Ee) {
        var pt = Ee._owner, ct = $t(Ee.type, Ee._source, pt ? pt.type : null);
        Bt.setExtraStackFrame(ct);
      } else
        Bt.setExtraStackFrame(null);
    }
    function Rt(Ee, pt, ct, vt, Ct) {
      {
        var Tt = Function.call.bind(Gt);
        for (var Pt in Ee)
          if (Tt(Ee, Pt)) {
            var St = void 0;
            try {
              if (typeof Ee[Pt] != "function") {
                var zt = Error((vt || "React class") + ": " + ct + " type `" + Pt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof Ee[Pt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw zt.name = "Invariant Violation", zt;
              }
              St = Ee[Pt](pt, Pt, vt, ct, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Dt) {
              St = Dt;
            }
            St && !(St instanceof Error) && (Ft(Ct), me("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", vt || "React class", ct, Pt, typeof St), Ft(null)), St instanceof Error && !(St.message in Ht) && (Ht[St.message] = !0, Ft(Ct), me("Failed %s type: %s", ct, St.message), Ft(null));
          }
      }
    }
    var Vt = Array.isArray;
    function Lt(Ee) {
      return Vt(Ee);
    }
    function Wt(Ee) {
      {
        var pt = typeof Symbol == "function" && Symbol.toStringTag, ct = pt && Ee[Symbol.toStringTag] || Ee.constructor.name || "Object";
        return ct;
      }
    }
    function qt(Ee) {
      try {
        return Zt(Ee), !1;
      } catch {
        return !0;
      }
    }
    function Zt(Ee) {
      return "" + Ee;
    }
    function Ut(Ee) {
      if (qt(Ee))
        return me("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wt(Ee)), Zt(Ee);
    }
    var Xt = ue.ReactCurrentOwner, Kt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Jt, ar, rr;
    rr = {};
    function dr(Ee) {
      if (Gt.call(Ee, "ref")) {
        var pt = Object.getOwnPropertyDescriptor(Ee, "ref").get;
        if (pt && pt.isReactWarning)
          return !1;
      }
      return Ee.ref !== void 0;
    }
    function mr(Ee) {
      if (Gt.call(Ee, "key")) {
        var pt = Object.getOwnPropertyDescriptor(Ee, "key").get;
        if (pt && pt.isReactWarning)
          return !1;
      }
      return Ee.key !== void 0;
    }
    function yr(Ee, pt) {
      if (typeof Ee.ref == "string" && Xt.current && pt && Xt.current.stateNode !== pt) {
        var ct = st(Xt.current.type);
        rr[ct] || (me('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', st(Xt.current.type), Ee.ref), rr[ct] = !0);
      }
    }
    function gr(Ee, pt) {
      {
        var ct = function() {
          Jt || (Jt = !0, me("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", pt));
        };
        ct.isReactWarning = !0, Object.defineProperty(Ee, "key", {
          get: ct,
          configurable: !0
        });
      }
    }
    function vr(Ee, pt) {
      {
        var ct = function() {
          ar || (ar = !0, me("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", pt));
        };
        ct.isReactWarning = !0, Object.defineProperty(Ee, "ref", {
          get: ct,
          configurable: !0
        });
      }
    }
    var xr = function(Ee, pt, ct, vt, Ct, Tt, Pt) {
      var St = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: P,
        // Built-in properties that belong on the element
        type: Ee,
        key: pt,
        ref: ct,
        props: Pt,
        // Record the component responsible for creating this element.
        _owner: Tt
      };
      return St._store = {}, Object.defineProperty(St._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(St, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: vt
      }), Object.defineProperty(St, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ct
      }), Object.freeze && (Object.freeze(St.props), Object.freeze(St)), St;
    };
    function br(Ee, pt, ct, vt, Ct) {
      {
        var Tt, Pt = {}, St = null, zt = null;
        ct !== void 0 && (Ut(ct), St = "" + ct), mr(pt) && (Ut(pt.key), St = "" + pt.key), dr(pt) && (zt = pt.ref, yr(pt, Ct));
        for (Tt in pt)
          Gt.call(pt, Tt) && !Kt.hasOwnProperty(Tt) && (Pt[Tt] = pt[Tt]);
        if (Ee && Ee.defaultProps) {
          var Dt = Ee.defaultProps;
          for (Tt in Dt)
            Pt[Tt] === void 0 && (Pt[Tt] = Dt[Tt]);
        }
        if (St || zt) {
          var It = typeof Ee == "function" ? Ee.displayName || Ee.name || "Unknown" : Ee;
          St && gr(Pt, It), zt && vr(Pt, It);
        }
        return xr(Ee, St, zt, Ct, vt, Xt.current, Pt);
      }
    }
    var sr = ue.ReactCurrentOwner, or = ue.ReactDebugCurrentFrame;
    function er(Ee) {
      if (Ee) {
        var pt = Ee._owner, ct = $t(Ee.type, Ee._source, pt ? pt.type : null);
        or.setExtraStackFrame(ct);
      } else
        or.setExtraStackFrame(null);
    }
    var nr;
    nr = !1;
    function ir(Ee) {
      return typeof Ee == "object" && Ee !== null && Ee.$$typeof === P;
    }
    function lr() {
      {
        if (sr.current) {
          var Ee = st(sr.current.type);
          if (Ee)
            return `

Check the render method of \`` + Ee + "`.";
        }
        return "";
      }
    }
    function Er(Ee) {
      {
        if (Ee !== void 0) {
          var pt = Ee.fileName.replace(/^.*[\\\/]/, ""), ct = Ee.lineNumber;
          return `

Check your code at ` + pt + ":" + ct + ".";
        }
        return "";
      }
    }
    var hr = {};
    function _r(Ee) {
      {
        var pt = lr();
        if (!pt) {
          var ct = typeof Ee == "string" ? Ee : Ee.displayName || Ee.name;
          ct && (pt = `

Check the top-level render call using <` + ct + ">.");
        }
        return pt;
      }
    }
    function pr(Ee, pt) {
      {
        if (!Ee._store || Ee._store.validated || Ee.key != null)
          return;
        Ee._store.validated = !0;
        var ct = _r(pt);
        if (hr[ct])
          return;
        hr[ct] = !0;
        var vt = "";
        Ee && Ee._owner && Ee._owner !== sr.current && (vt = " It was passed a child from " + st(Ee._owner.type) + "."), er(Ee), me('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ct, vt), er(null);
      }
    }
    function cr(Ee, pt) {
      {
        if (typeof Ee != "object")
          return;
        if (Lt(Ee))
          for (var ct = 0; ct < Ee.length; ct++) {
            var vt = Ee[ct];
            ir(vt) && pr(vt, pt);
          }
        else if (ir(Ee))
          Ee._store && (Ee._store.validated = !0);
        else if (Ee) {
          var Ct = Q(Ee);
          if (typeof Ct == "function" && Ct !== Ee.entries)
            for (var Tt = Ct.call(Ee), Pt; !(Pt = Tt.next()).done; )
              ir(Pt.value) && pr(Pt.value, pt);
        }
      }
    }
    function Sr(Ee) {
      {
        var pt = Ee.type;
        if (pt == null || typeof pt == "string")
          return;
        var ct;
        if (typeof pt == "function")
          ct = pt.propTypes;
        else if (typeof pt == "object" && (pt.$$typeof === de || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        pt.$$typeof === B))
          ct = pt.propTypes;
        else
          return;
        if (ct) {
          var vt = st(pt);
          Rt(ct, Ee.props, "prop", vt, Ee);
        } else if (pt.PropTypes !== void 0 && !nr) {
          nr = !0;
          var Ct = st(pt);
          me("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ct || "Unknown");
        }
        typeof pt.getDefaultProps == "function" && !pt.getDefaultProps.isReactClassApproved && me("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mr(Ee) {
      {
        for (var pt = Object.keys(Ee.props), ct = 0; ct < pt.length; ct++) {
          var vt = pt[ct];
          if (vt !== "children" && vt !== "key") {
            er(Ee), me("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", vt), er(null);
            break;
          }
        }
        Ee.ref !== null && (er(Ee), me("Invalid attribute `ref` supplied to `React.Fragment`."), er(null));
      }
    }
    function fr(Ee, pt, ct, vt, Ct, Tt) {
      {
        var Pt = Me(Ee);
        if (!Pt) {
          var St = "";
          (Ee === void 0 || typeof Ee == "object" && Ee !== null && Object.keys(Ee).length === 0) && (St += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var zt = Er(Ct);
          zt ? St += zt : St += lr();
          var Dt;
          Ee === null ? Dt = "null" : Lt(Ee) ? Dt = "array" : Ee !== void 0 && Ee.$$typeof === P ? (Dt = "<" + (st(Ee.type) || "Unknown") + " />", St = " Did you accidentally export a JSX literal instead of a component?") : Dt = typeof Ee, me("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Dt, St);
        }
        var It = br(Ee, pt, ct, Ct, Tt);
        if (It == null)
          return It;
        if (Pt) {
          var Yt = pt.children;
          if (Yt !== void 0)
            if (vt)
              if (Lt(Yt)) {
                for (var tr = 0; tr < Yt.length; tr++)
                  cr(Yt[tr], Ee);
                Object.freeze && Object.freeze(Yt);
              } else
                me("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cr(Yt, Ee);
        }
        return Ee === L ? Mr(It) : Sr(It), It;
      }
    }
    function Pr(Ee, pt, ct) {
      return fr(Ee, pt, ct, !0);
    }
    function Cr(Ee, pt, ct) {
      return fr(Ee, pt, ct, !1);
    }
    var Ar = Cr, wr = Pr;
    reactJsxRuntime_development.Fragment = L, reactJsxRuntime_development.jsx = Ar, reactJsxRuntime_development.jsxs = wr;
  }()), reactJsxRuntime_development;
}
process.env.NODE_ENV === "production" ? jsxRuntime.exports = requireReactJsxRuntime_production_min() : jsxRuntime.exports = requireReactJsxRuntime_development();
var jsxRuntimeExports = jsxRuntime.exports, i$3 = Object.defineProperty, d$4 = (m, P, k) => P in m ? i$3(m, P, { enumerable: !0, configurable: !0, writable: !0, value: k }) : m[P] = k, r$1 = (m, P, k) => (d$4(m, typeof P != "symbol" ? P + "" : P, k), k);
let o$6 = class {
  constructor() {
    r$1(this, "current", this.detect()), r$1(this, "handoffState", "pending"), r$1(this, "currentId", 0);
  }
  set(P) {
    this.current !== P && (this.handoffState = "pending", this.currentId = 0, this.current = P);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, s$5 = new o$6(), l$2 = (m, P) => {
  s$5.isServer ? useEffect(m, P) : useLayoutEffect(m, P);
};
function s$4(m) {
  let P = useRef(m);
  return l$2(() => {
    P.current = m;
  }, [m]), P;
}
function i$2(m, P) {
  let [k, L] = useState(m), O = s$4(m);
  return l$2(() => L(O.current), [O, L, ...P]), k;
}
function t$2(m) {
  typeof queueMicrotask == "function" ? queueMicrotask(m) : Promise.resolve().then(m).catch((P) => setTimeout(() => {
    throw P;
  }));
}
function o$5() {
  let m = [], P = { addEventListener(k, L, O, V) {
    return k.addEventListener(L, O, V), P.add(() => k.removeEventListener(L, O, V));
  }, requestAnimationFrame(...k) {
    let L = requestAnimationFrame(...k);
    return P.add(() => cancelAnimationFrame(L));
  }, nextFrame(...k) {
    return P.requestAnimationFrame(() => P.requestAnimationFrame(...k));
  }, setTimeout(...k) {
    let L = setTimeout(...k);
    return P.add(() => clearTimeout(L));
  }, microTask(...k) {
    let L = { current: !0 };
    return t$2(() => {
      L.current && k[0]();
    }), P.add(() => {
      L.current = !1;
    });
  }, style(k, L, O) {
    let V = k.style.getPropertyValue(L);
    return Object.assign(k.style, { [L]: O }), this.add(() => {
      Object.assign(k.style, { [L]: V });
    });
  }, group(k) {
    let L = o$5();
    return k(L), this.add(() => L.dispose());
  }, add(k) {
    return m.push(k), () => {
      let L = m.indexOf(k);
      if (L >= 0)
        for (let O of m.splice(L, 1))
          O();
    };
  }, dispose() {
    for (let k of m.splice(0))
      k();
  } };
  return P;
}
function p$2() {
  let [m] = useState(o$5);
  return useEffect(() => () => m.dispose(), [m]), m;
}
let o$4 = function(m) {
  let P = s$4(m);
  return React__default.useCallback((...k) => P.current(...k), [P]);
};
function s$3() {
  let m = typeof document > "u";
  return "useSyncExternalStore" in React ? ((P) => P.useSyncExternalStore)(React)(() => () => {
  }, () => !1, () => !m) : !1;
}
function l$1() {
  let m = s$3(), [P, k] = React.useState(s$5.isHandoffComplete);
  return P && s$5.isHandoffComplete === !1 && k(!1), React.useEffect(() => {
    P !== !0 && k(!0);
  }, [P]), React.useEffect(() => s$5.handoff(), []), m ? !1 : P;
}
var o$3;
let I$1 = (o$3 = React__default.useId) != null ? o$3 : function() {
  let m = l$1(), [P, k] = React__default.useState(m ? () => s$5.nextId() : null);
  return l$2(() => {
    P === null && k(s$5.nextId());
  }, [P]), P != null ? "" + P : void 0;
};
function u$3(m, P, ...k) {
  if (m in P) {
    let O = P[m];
    return typeof O == "function" ? O(...k) : O;
  }
  let L = new Error(`Tried to handle "${m}" but there is no handler defined. Only defined handlers are: ${Object.keys(P).map((O) => `"${O}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(L, u$3), L;
}
function e$1(m) {
  return s$5.isServer ? null : m instanceof Node ? m.ownerDocument : m != null && m.hasOwnProperty("current") && m.current instanceof Node ? m.current.ownerDocument : document;
}
let c$4 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((m) => `${m}:not([tabindex='-1'])`).join(",");
var M$4 = ((m) => (m[m.First = 1] = "First", m[m.Previous = 2] = "Previous", m[m.Next = 4] = "Next", m[m.Last = 8] = "Last", m[m.WrapAround = 16] = "WrapAround", m[m.NoScroll = 32] = "NoScroll", m))(M$4 || {}), N$1 = ((m) => (m[m.Error = 0] = "Error", m[m.Overflow = 1] = "Overflow", m[m.Success = 2] = "Success", m[m.Underflow = 3] = "Underflow", m))(N$1 || {}), F = ((m) => (m[m.Previous = -1] = "Previous", m[m.Next = 1] = "Next", m))(F || {}), T$1 = ((m) => (m[m.Strict = 0] = "Strict", m[m.Loose = 1] = "Loose", m))(T$1 || {});
function h$3(m, P = 0) {
  var k;
  return m === ((k = e$1(m)) == null ? void 0 : k.body) ? !1 : u$3(P, { 0() {
    return m.matches(c$4);
  }, 1() {
    let L = m;
    for (; L !== null; ) {
      if (L.matches(c$4))
        return !0;
      L = L.parentElement;
    }
    return !1;
  } });
}
var w$1 = ((m) => (m[m.Keyboard = 0] = "Keyboard", m[m.Mouse = 1] = "Mouse", m))(w$1 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (m) => {
  m.metaKey || m.altKey || m.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (m) => {
  m.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : m.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function I(m, P = (k) => k) {
  return m.slice().sort((k, L) => {
    let O = P(k), V = P(L);
    if (O === null || V === null)
      return 0;
    let he = O.compareDocumentPosition(V);
    return he & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : he & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function d$3(m, P, k) {
  let L = s$4(P);
  useEffect(() => {
    function O(V) {
      L.current(V);
    }
    return document.addEventListener(m, O, k), () => document.removeEventListener(m, O, k);
  }, [m, k]);
}
function s$2(m, P, k) {
  let L = s$4(P);
  useEffect(() => {
    function O(V) {
      L.current(V);
    }
    return window.addEventListener(m, O, k), () => window.removeEventListener(m, O, k);
  }, [m, k]);
}
function h$2(m, P, k = !0) {
  let L = useRef(!1);
  useEffect(() => {
    requestAnimationFrame(() => {
      L.current = k;
    });
  }, [k]);
  function O(he, K) {
    if (!L.current || he.defaultPrevented)
      return;
    let de = K(he);
    if (de === null || !de.getRootNode().contains(de) || !de.isConnected)
      return;
    let ce = function pe(B) {
      return typeof B == "function" ? pe(B()) : Array.isArray(B) || B instanceof Set ? B : [B];
    }(m);
    for (let pe of ce) {
      if (pe === null)
        continue;
      let B = pe instanceof HTMLElement ? pe : pe.current;
      if (B != null && B.contains(de) || he.composed && he.composedPath().includes(B))
        return;
    }
    return !h$3(de, T$1.Loose) && de.tabIndex !== -1 && he.preventDefault(), P(he, de);
  }
  let V = useRef(null);
  d$3("pointerdown", (he) => {
    var K, de;
    L.current && (V.current = ((de = (K = he.composedPath) == null ? void 0 : K.call(he)) == null ? void 0 : de[0]) || he.target);
  }, !0), d$3("mousedown", (he) => {
    var K, de;
    L.current && (V.current = ((de = (K = he.composedPath) == null ? void 0 : K.call(he)) == null ? void 0 : de[0]) || he.target);
  }, !0), d$3("click", (he) => {
    V.current && (O(he, () => V.current), V.current = null);
  }, !0), d$3("touchend", (he) => O(he, () => he.target instanceof HTMLElement ? he.target : null), !0), s$2("blur", (he) => O(he, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function i$1(m) {
  var P;
  if (m.type)
    return m.type;
  let k = (P = m.as) != null ? P : "button";
  if (typeof k == "string" && k.toLowerCase() === "button")
    return "button";
}
function s$1(m, P) {
  let [k, L] = useState(() => i$1(m));
  return l$2(() => {
    L(i$1(m));
  }, [m.type, m.as]), l$2(() => {
    k || P.current && P.current instanceof HTMLButtonElement && !P.current.hasAttribute("type") && L("button");
  }, [k, P]), k;
}
let u$2 = Symbol();
function y$2(...m) {
  let P = useRef(m);
  useEffect(() => {
    P.current = m;
  }, [m]);
  let k = o$4((L) => {
    for (let O of P.current)
      O != null && (typeof O == "function" ? O(L) : O.current = L);
  });
  return m.every((L) => L == null || (L == null ? void 0 : L[u$2])) ? void 0 : k;
}
function f$3(m) {
  throw new Error("Unexpected object: " + m);
}
var a$2 = ((m) => (m[m.First = 0] = "First", m[m.Previous = 1] = "Previous", m[m.Next = 2] = "Next", m[m.Last = 3] = "Last", m[m.Specific = 4] = "Specific", m[m.Nothing = 5] = "Nothing", m))(a$2 || {});
function x(m, P) {
  let k = P.resolveItems();
  if (k.length <= 0)
    return null;
  let L = P.resolveActiveIndex(), O = L ?? -1, V = (() => {
    switch (m.focus) {
      case 0:
        return k.findIndex((he) => !P.resolveDisabled(he));
      case 1: {
        let he = k.slice().reverse().findIndex((K, de, ce) => O !== -1 && ce.length - de - 1 >= O ? !1 : !P.resolveDisabled(K));
        return he === -1 ? he : k.length - 1 - he;
      }
      case 2:
        return k.findIndex((he, K) => K <= O ? !1 : !P.resolveDisabled(he));
      case 3: {
        let he = k.slice().reverse().findIndex((K) => !P.resolveDisabled(K));
        return he === -1 ? he : k.length - 1 - he;
      }
      case 4:
        return k.findIndex((he) => P.resolveId(he) === m.id);
      case 5:
        return null;
      default:
        f$3(m);
    }
  })();
  return V === -1 ? L : V;
}
function t$1(...m) {
  return Array.from(new Set(m.flatMap((P) => typeof P == "string" ? P.split(" ") : []))).filter(Boolean).join(" ");
}
var S$2 = ((m) => (m[m.None = 0] = "None", m[m.RenderStrategy = 1] = "RenderStrategy", m[m.Static = 2] = "Static", m))(S$2 || {}), j = ((m) => (m[m.Unmount = 0] = "Unmount", m[m.Hidden = 1] = "Hidden", m))(j || {});
function X({ ourProps: m, theirProps: P, slot: k, defaultTag: L, features: O, visible: V = !0, name: he }) {
  let K = N(P, m);
  if (V)
    return c$3(K, k, L, he);
  let de = O ?? 0;
  if (de & 2) {
    let { static: ce = !1, ...pe } = K;
    if (ce)
      return c$3(pe, k, L, he);
  }
  if (de & 1) {
    let { unmount: ce = !0, ...pe } = K;
    return u$3(ce ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return c$3({ ...pe, hidden: !0, style: { display: "none" } }, k, L, he);
    } });
  }
  return c$3(K, k, L, he);
}
function c$3(m, P = {}, k, L) {
  let { as: O = k, children: V, refName: he = "ref", ...K } = g$2(m, ["unmount", "static"]), de = m.ref !== void 0 ? { [he]: m.ref } : {}, ce = typeof V == "function" ? V(P) : V;
  "className" in K && K.className && typeof K.className == "function" && (K.className = K.className(P));
  let pe = {};
  if (P) {
    let B = !1, G = [];
    for (let [$, ie] of Object.entries(P))
      typeof ie == "boolean" && (B = !0), ie === !0 && G.push($);
    B && (pe["data-headlessui-state"] = G.join(" "));
  }
  if (O === Fragment && Object.keys(R(K)).length > 0) {
    if (!isValidElement(ce) || Array.isArray(ce) && ce.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${L} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(K).map((ie) => `  - ${ie}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((ie) => `  - ${ie}`).join(`
`)].join(`
`));
    let B = ce.props, G = typeof (B == null ? void 0 : B.className) == "function" ? (...ie) => t$1(B == null ? void 0 : B.className(...ie), K.className) : t$1(B == null ? void 0 : B.className, K.className), $ = G ? { className: G } : {};
    return cloneElement(ce, Object.assign({}, N(ce.props, R(g$2(K, ["ref"]))), pe, de, w(ce.ref, de.ref), $));
  }
  return createElement(O, Object.assign({}, g$2(K, ["ref"]), O !== Fragment && de, O !== Fragment && pe), ce);
}
function w(...m) {
  return { ref: m.every((P) => P == null) ? void 0 : (P) => {
    for (let k of m)
      k != null && (typeof k == "function" ? k(P) : k.current = P);
  } };
}
function N(...m) {
  if (m.length === 0)
    return {};
  if (m.length === 1)
    return m[0];
  let P = {}, k = {};
  for (let L of m)
    for (let O in L)
      O.startsWith("on") && typeof L[O] == "function" ? (k[O] != null || (k[O] = []), k[O].push(L[O])) : P[O] = L[O];
  if (P.disabled || P["aria-disabled"])
    return Object.assign(P, Object.fromEntries(Object.keys(k).map((L) => [L, void 0])));
  for (let L in k)
    Object.assign(P, { [L](O, ...V) {
      let he = k[L];
      for (let K of he) {
        if ((O instanceof Event || (O == null ? void 0 : O.nativeEvent) instanceof Event) && O.defaultPrevented)
          return;
        K(O, ...V);
      }
    } });
  return P;
}
function D(m) {
  var P;
  return Object.assign(forwardRef(m), { displayName: (P = m.displayName) != null ? P : m.name });
}
function R(m) {
  let P = Object.assign({}, m);
  for (let k in P)
    P[k] === void 0 && delete P[k];
  return P;
}
function g$2(m, P = []) {
  let k = Object.assign({}, m);
  for (let L of P)
    L in k && delete k[L];
  return k;
}
function r(m) {
  let P = m.parentElement, k = null;
  for (; P && !(P instanceof HTMLFieldSetElement); )
    P instanceof HTMLLegendElement && (k = P), P = P.parentElement;
  let L = (P == null ? void 0 : P.getAttribute("disabled")) === "";
  return L && i(k) ? !1 : L;
}
function i(m) {
  if (!m)
    return !1;
  let P = m.previousElementSibling;
  for (; P !== null; ) {
    if (P instanceof HTMLLegendElement)
      return !1;
    P = P.previousElementSibling;
  }
  return !0;
}
function e(m = {}, P = null, k = []) {
  for (let [L, O] of Object.entries(m))
    o$2(k, f$2(P, L), O);
  return k;
}
function f$2(m, P) {
  return m ? m + "[" + P + "]" : P;
}
function o$2(m, P, k) {
  if (Array.isArray(k))
    for (let [L, O] of k.entries())
      o$2(m, f$2(P, L.toString()), O);
  else
    k instanceof Date ? m.push([P, k.toISOString()]) : typeof k == "boolean" ? m.push([P, k ? "1" : "0"]) : typeof k == "string" ? m.push([P, k]) : typeof k == "number" ? m.push([P, `${k}`]) : k == null ? m.push([P, ""]) : e(k, P, m);
}
function p$1(m) {
  var P, k;
  let L = (P = m == null ? void 0 : m.form) != null ? P : m.closest("form");
  if (L) {
    for (let O of L.elements)
      if (O !== m && (O.tagName === "INPUT" && O.type === "submit" || O.tagName === "BUTTON" && O.type === "submit" || O.nodeName === "INPUT" && O.type === "image")) {
        O.click();
        return;
      }
    (k = L.requestSubmit) == null || k.call(L);
  }
}
let a$1 = "div";
var p = ((m) => (m[m.None = 1] = "None", m[m.Focusable = 2] = "Focusable", m[m.Hidden = 4] = "Hidden", m))(p || {});
function s(m, P) {
  let { features: k = 1, ...L } = m, O = { ref: P, "aria-hidden": (k & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(k & 4) === 4 && (k & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: O, theirProps: L, slot: {}, defaultTag: a$1, name: "Hidden" });
}
let c$2 = D(s), n = createContext(null);
n.displayName = "OpenClosedContext";
var d$2 = ((m) => (m[m.Open = 1] = "Open", m[m.Closed = 2] = "Closed", m[m.Closing = 4] = "Closing", m[m.Opening = 8] = "Opening", m))(d$2 || {});
function C() {
  return useContext(n);
}
function c$1({ value: m, children: P }) {
  return React__default.createElement(n.Provider, { value: m }, P);
}
var o$1 = ((m) => (m.Space = " ", m.Enter = "Enter", m.Escape = "Escape", m.Backspace = "Backspace", m.Delete = "Delete", m.ArrowLeft = "ArrowLeft", m.ArrowUp = "ArrowUp", m.ArrowRight = "ArrowRight", m.ArrowDown = "ArrowDown", m.Home = "Home", m.End = "End", m.PageUp = "PageUp", m.PageDown = "PageDown", m.Tab = "Tab", m))(o$1 || {});
function T(m, P, k) {
  let [L, O] = useState(k), V = m !== void 0, he = useRef(V), K = useRef(!1), de = useRef(!1);
  return V && !he.current && !K.current ? (K.current = !0, he.current = V, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !V && he.current && !de.current && (de.current = !0, he.current = V, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [V ? m : L, o$4((ce) => (V || O(ce), P == null ? void 0 : P(ce)))];
}
function t(m) {
  return [m.screenX, m.screenY];
}
function u$1() {
  let m = useRef([-1, -1]);
  return { wasMoved(P) {
    let k = t(P);
    return m.current[0] === k[0] && m.current[1] === k[1] ? !1 : (m.current = k, !0);
  }, update(P) {
    m.current = t(P);
  } };
}
function f$1() {
  let m = useRef(!1);
  return l$2(() => (m.current = !0, () => {
    m.current = !1;
  }), []), m;
}
let d$1 = createContext(null);
function f() {
  let m = useContext(d$1);
  if (m === null) {
    let P = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(P, f), P;
  }
  return m;
}
function M$3() {
  let [m, P] = useState([]);
  return [m.length > 0 ? m.join(" ") : void 0, useMemo(() => function(k) {
    let L = o$4((V) => (P((he) => [...he, V]), () => P((he) => {
      let K = he.slice(), de = K.indexOf(V);
      return de !== -1 && K.splice(de, 1), K;
    }))), O = useMemo(() => ({ register: L, slot: k.slot, name: k.name, props: k.props }), [L, k.slot, k.name, k.props]);
    return React__default.createElement(d$1.Provider, { value: O }, k.children);
  }, [P])];
}
let S$1 = "p";
function h$1(m, P) {
  let k = I$1(), { id: L = `headlessui-description-${k}`, ...O } = m, V = f(), he = y$2(P);
  l$2(() => V.register(L), [L, V.register]);
  let K = { ref: he, ...V.props, id: L };
  return X({ ourProps: K, theirProps: O, slot: V.slot || {}, defaultTag: S$1, name: V.name || "Description" });
}
let y$1 = D(h$1), b$2 = Object.assign(y$1, {}), a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(m) {
  var P, k;
  let L = (P = m.innerText) != null ? P : "", O = m.cloneNode(!0);
  if (!(O instanceof HTMLElement))
    return L;
  let V = !1;
  for (let K of O.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    K.remove(), V = !0;
  let he = V ? (k = O.innerText) != null ? k : "" : L;
  return a.test(he) && (he = he.replace(a, "")), he;
}
function g$1(m) {
  let P = m.getAttribute("aria-label");
  if (typeof P == "string")
    return P.trim();
  let k = m.getAttribute("aria-labelledby");
  if (k) {
    let L = k.split(" ").map((O) => {
      let V = document.getElementById(O);
      if (V) {
        let he = V.getAttribute("aria-label");
        return typeof he == "string" ? he.trim() : o(V).trim();
      }
      return null;
    }).filter(Boolean);
    if (L.length > 0)
      return L.join(", ");
  }
  return o(m).trim();
}
function b$1(m) {
  let P = useRef(""), k = useRef("");
  return o$4(() => {
    let L = m.current;
    if (!L)
      return "";
    let O = L.innerText;
    if (P.current === O)
      return k.current;
    let V = g$1(L).trim().toLowerCase();
    return P.current = O, k.current = V, V;
  });
}
var Be = ((m) => (m[m.Open = 0] = "Open", m[m.Closed = 1] = "Closed", m))(Be || {}), He$1 = ((m) => (m[m.Single = 0] = "Single", m[m.Multi = 1] = "Multi", m))(He$1 || {}), Ge$1 = ((m) => (m[m.Pointer = 0] = "Pointer", m[m.Other = 1] = "Other", m))(Ge$1 || {}), Ne$1 = ((m) => (m[m.OpenListbox = 0] = "OpenListbox", m[m.CloseListbox = 1] = "CloseListbox", m[m.GoToOption = 2] = "GoToOption", m[m.Search = 3] = "Search", m[m.ClearSearch = 4] = "ClearSearch", m[m.RegisterOption = 5] = "RegisterOption", m[m.UnregisterOption = 6] = "UnregisterOption", m[m.RegisterLabel = 7] = "RegisterLabel", m))(Ne$1 || {});
function z(m, P = (k) => k) {
  let k = m.activeOptionIndex !== null ? m.options[m.activeOptionIndex] : null, L = I(P(m.options.slice()), (V) => V.dataRef.current.domRef.current), O = k ? L.indexOf(k) : null;
  return O === -1 && (O = null), { options: L, activeOptionIndex: O };
}
let je = { 1(m) {
  return m.dataRef.current.disabled || m.listboxState === 1 ? m : { ...m, activeOptionIndex: null, listboxState: 1 };
}, 0(m) {
  if (m.dataRef.current.disabled || m.listboxState === 0)
    return m;
  let P = m.activeOptionIndex, { isSelected: k } = m.dataRef.current, L = m.options.findIndex((O) => k(O.dataRef.current.value));
  return L !== -1 && (P = L), { ...m, listboxState: 0, activeOptionIndex: P };
}, 2(m, P) {
  var k;
  if (m.dataRef.current.disabled || m.listboxState === 1)
    return m;
  let L = z(m), O = x(P, { resolveItems: () => L.options, resolveActiveIndex: () => L.activeOptionIndex, resolveId: (V) => V.id, resolveDisabled: (V) => V.dataRef.current.disabled });
  return { ...m, ...L, searchQuery: "", activeOptionIndex: O, activationTrigger: (k = P.trigger) != null ? k : 1 };
}, 3: (m, P) => {
  if (m.dataRef.current.disabled || m.listboxState === 1)
    return m;
  let k = m.searchQuery !== "" ? 0 : 1, L = m.searchQuery + P.value.toLowerCase(), O = (m.activeOptionIndex !== null ? m.options.slice(m.activeOptionIndex + k).concat(m.options.slice(0, m.activeOptionIndex + k)) : m.options).find((he) => {
    var K;
    return !he.dataRef.current.disabled && ((K = he.dataRef.current.textValue) == null ? void 0 : K.startsWith(L));
  }), V = O ? m.options.indexOf(O) : -1;
  return V === -1 || V === m.activeOptionIndex ? { ...m, searchQuery: L } : { ...m, searchQuery: L, activeOptionIndex: V, activationTrigger: 1 };
}, 4(m) {
  return m.dataRef.current.disabled || m.listboxState === 1 || m.searchQuery === "" ? m : { ...m, searchQuery: "" };
}, 5: (m, P) => {
  let k = { id: P.id, dataRef: P.dataRef }, L = z(m, (O) => [...O, k]);
  return m.activeOptionIndex === null && m.dataRef.current.isSelected(P.dataRef.current.value) && (L.activeOptionIndex = L.options.indexOf(k)), { ...m, ...L };
}, 6: (m, P) => {
  let k = z(m, (L) => {
    let O = L.findIndex((V) => V.id === P.id);
    return O !== -1 && L.splice(O, 1), L;
  });
  return { ...m, ...k, activationTrigger: 1 };
}, 7: (m, P) => ({ ...m, labelId: P.id }) }, J = createContext(null);
J.displayName = "ListboxActionsContext";
function _$1(m) {
  let P = useContext(J);
  if (P === null) {
    let k = new Error(`<${m} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(k, _$1), k;
  }
  return P;
}
let q = createContext(null);
q.displayName = "ListboxDataContext";
function U$1(m) {
  let P = useContext(q);
  if (P === null) {
    let k = new Error(`<${m} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(k, U$1), k;
  }
  return P;
}
function Ve(m, P) {
  return u$3(P.type, je, m, P);
}
let Ke = Fragment;
function Qe(m, P) {
  let { value: k, defaultValue: L, form: O, name: V, onChange: he, by: K = (ft, yt) => ft === yt, disabled: de = !1, horizontal: ce = !1, multiple: pe = !1, ...B } = m;
  const G = ce ? "horizontal" : "vertical";
  let $ = y$2(P), [ie = pe ? [] : void 0, fe] = T(k, he, L), [Q, ue] = useReducer(Ve, { dataRef: createRef(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), me = useRef({ static: !1, hold: !1 }), ge = useRef(null), ve = useRef(null), _e = useRef(null), Te = o$4(typeof K == "string" ? (ft, yt) => {
    let gt = K;
    return (ft == null ? void 0 : ft[gt]) === (yt == null ? void 0 : yt[gt]);
  } : K), Ce = useCallback((ft) => u$3(Ae.mode, { 1: () => ie.some((yt) => Te(yt, ft)), 0: () => Te(ie, ft) }), [ie]), Ae = useMemo(() => ({ ...Q, value: ie, disabled: de, mode: pe ? 1 : 0, orientation: G, compare: Te, isSelected: Ce, optionsPropsRef: me, labelRef: ge, buttonRef: ve, optionsRef: _e }), [ie, de, pe, Q]);
  l$2(() => {
    Q.dataRef.current = Ae;
  }, [Ae]), h$2([Ae.buttonRef, Ae.optionsRef], (ft, yt) => {
    var gt;
    ue({ type: 1 }), h$3(yt, T$1.Loose) || (ft.preventDefault(), (gt = Ae.buttonRef.current) == null || gt.focus());
  }, Ae.listboxState === 0);
  let Ie = useMemo(() => ({ open: Ae.listboxState === 0, disabled: de, value: ie }), [Ae, de, ie]), Me = o$4((ft) => {
    let yt = Ae.options.find((gt) => gt.id === ft);
    yt && Oe(yt.dataRef.current.value);
  }), ke = o$4(() => {
    if (Ae.activeOptionIndex !== null) {
      let { dataRef: ft, id: yt } = Ae.options[Ae.activeOptionIndex];
      Oe(ft.current.value), ue({ type: 2, focus: a$2.Specific, id: yt });
    }
  }), at = o$4(() => ue({ type: 0 })), st = o$4(() => ue({ type: 1 })), Ue = o$4((ft, yt, gt) => ft === a$2.Specific ? ue({ type: 2, focus: a$2.Specific, id: yt, trigger: gt }) : ue({ type: 2, focus: ft, trigger: gt })), lt = o$4((ft, yt) => (ue({ type: 5, id: ft, dataRef: yt }), () => ue({ type: 6, id: ft }))), ut = o$4((ft) => (ue({ type: 7, id: ft }), () => ue({ type: 7, id: null }))), Oe = o$4((ft) => u$3(Ae.mode, { 0() {
    return fe == null ? void 0 : fe(ft);
  }, 1() {
    let yt = Ae.value.slice(), gt = yt.findIndex((xt) => Te(xt, ft));
    return gt === -1 ? yt.push(ft) : yt.splice(gt, 1), fe == null ? void 0 : fe(yt);
  } })), we = o$4((ft) => ue({ type: 3, value: ft })), ht = o$4(() => ue({ type: 4 })), mt = useMemo(() => ({ onChange: Oe, registerOption: lt, registerLabel: ut, goToOption: Ue, closeListbox: st, openListbox: at, selectActiveOption: ke, selectOption: Me, search: we, clearSearch: ht }), []), Et = { ref: $ }, Mt = useRef(null), _t = p$2();
  return useEffect(() => {
    Mt.current && L !== void 0 && _t.addEventListener(Mt.current, "reset", () => {
      fe == null || fe(L);
    });
  }, [Mt, fe]), React__default.createElement(J.Provider, { value: mt }, React__default.createElement(q.Provider, { value: Ae }, React__default.createElement(c$1, { value: u$3(Ae.listboxState, { 0: d$2.Open, 1: d$2.Closed }) }, V != null && ie != null && e({ [V]: ie }).map(([ft, yt], gt) => React__default.createElement(c$2, { features: p.Hidden, ref: gt === 0 ? (xt) => {
    var bt;
    Mt.current = (bt = xt == null ? void 0 : xt.closest("form")) != null ? bt : null;
  } : void 0, ...R({ key: ft, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: O, name: ft, value: yt }) })), X({ ourProps: Et, theirProps: B, slot: Ie, defaultTag: Ke, name: "Listbox" }))));
}
let We = "button";
function Xe(m, P) {
  var k;
  let L = I$1(), { id: O = `headlessui-listbox-button-${L}`, ...V } = m, he = U$1("Listbox.Button"), K = _$1("Listbox.Button"), de = y$2(he.buttonRef, P), ce = p$2(), pe = o$4((Q) => {
    switch (Q.key) {
      case o$1.Space:
      case o$1.Enter:
      case o$1.ArrowDown:
        Q.preventDefault(), K.openListbox(), ce.nextFrame(() => {
          he.value || K.goToOption(a$2.First);
        });
        break;
      case o$1.ArrowUp:
        Q.preventDefault(), K.openListbox(), ce.nextFrame(() => {
          he.value || K.goToOption(a$2.Last);
        });
        break;
    }
  }), B = o$4((Q) => {
    switch (Q.key) {
      case o$1.Space:
        Q.preventDefault();
        break;
    }
  }), G = o$4((Q) => {
    if (r(Q.currentTarget))
      return Q.preventDefault();
    he.listboxState === 0 ? (K.closeListbox(), ce.nextFrame(() => {
      var ue;
      return (ue = he.buttonRef.current) == null ? void 0 : ue.focus({ preventScroll: !0 });
    })) : (Q.preventDefault(), K.openListbox());
  }), $ = i$2(() => {
    if (he.labelId)
      return [he.labelId, O].join(" ");
  }, [he.labelId, O]), ie = useMemo(() => ({ open: he.listboxState === 0, disabled: he.disabled, value: he.value }), [he]), fe = { ref: de, id: O, type: s$1(m, he.buttonRef), "aria-haspopup": "listbox", "aria-controls": (k = he.optionsRef.current) == null ? void 0 : k.id, "aria-expanded": he.listboxState === 0, "aria-labelledby": $, disabled: he.disabled, onKeyDown: pe, onKeyUp: B, onClick: G };
  return X({ ourProps: fe, theirProps: V, slot: ie, defaultTag: We, name: "Listbox.Button" });
}
let $e = "label";
function ze(m, P) {
  let k = I$1(), { id: L = `headlessui-listbox-label-${k}`, ...O } = m, V = U$1("Listbox.Label"), he = _$1("Listbox.Label"), K = y$2(V.labelRef, P);
  l$2(() => he.registerLabel(L), [L]);
  let de = o$4(() => {
    var pe;
    return (pe = V.buttonRef.current) == null ? void 0 : pe.focus({ preventScroll: !0 });
  }), ce = useMemo(() => ({ open: V.listboxState === 0, disabled: V.disabled }), [V]);
  return X({ ourProps: { ref: K, id: L, onClick: de }, theirProps: O, slot: ce, defaultTag: $e, name: "Listbox.Label" });
}
let Je = "ul", qe = S$2.RenderStrategy | S$2.Static;
function Ye(m, P) {
  var k;
  let L = I$1(), { id: O = `headlessui-listbox-options-${L}`, ...V } = m, he = U$1("Listbox.Options"), K = _$1("Listbox.Options"), de = y$2(he.optionsRef, P), ce = p$2(), pe = p$2(), B = C(), G = (() => B !== null ? (B & d$2.Open) === d$2.Open : he.listboxState === 0)();
  useEffect(() => {
    var ue;
    let me = he.optionsRef.current;
    me && he.listboxState === 0 && me !== ((ue = e$1(me)) == null ? void 0 : ue.activeElement) && me.focus({ preventScroll: !0 });
  }, [he.listboxState, he.optionsRef]);
  let $ = o$4((ue) => {
    switch (pe.dispose(), ue.key) {
      case o$1.Space:
        if (he.searchQuery !== "")
          return ue.preventDefault(), ue.stopPropagation(), K.search(ue.key);
      case o$1.Enter:
        if (ue.preventDefault(), ue.stopPropagation(), he.activeOptionIndex !== null) {
          let { dataRef: me } = he.options[he.activeOptionIndex];
          K.onChange(me.current.value);
        }
        he.mode === 0 && (K.closeListbox(), o$5().nextFrame(() => {
          var me;
          return (me = he.buttonRef.current) == null ? void 0 : me.focus({ preventScroll: !0 });
        }));
        break;
      case u$3(he.orientation, { vertical: o$1.ArrowDown, horizontal: o$1.ArrowRight }):
        return ue.preventDefault(), ue.stopPropagation(), K.goToOption(a$2.Next);
      case u$3(he.orientation, { vertical: o$1.ArrowUp, horizontal: o$1.ArrowLeft }):
        return ue.preventDefault(), ue.stopPropagation(), K.goToOption(a$2.Previous);
      case o$1.Home:
      case o$1.PageUp:
        return ue.preventDefault(), ue.stopPropagation(), K.goToOption(a$2.First);
      case o$1.End:
      case o$1.PageDown:
        return ue.preventDefault(), ue.stopPropagation(), K.goToOption(a$2.Last);
      case o$1.Escape:
        return ue.preventDefault(), ue.stopPropagation(), K.closeListbox(), ce.nextFrame(() => {
          var me;
          return (me = he.buttonRef.current) == null ? void 0 : me.focus({ preventScroll: !0 });
        });
      case o$1.Tab:
        ue.preventDefault(), ue.stopPropagation();
        break;
      default:
        ue.key.length === 1 && (K.search(ue.key), pe.setTimeout(() => K.clearSearch(), 350));
        break;
    }
  }), ie = i$2(() => {
    var ue, me, ge;
    return (ge = (ue = he.labelRef.current) == null ? void 0 : ue.id) != null ? ge : (me = he.buttonRef.current) == null ? void 0 : me.id;
  }, [he.labelRef.current, he.buttonRef.current]), fe = useMemo(() => ({ open: he.listboxState === 0 }), [he]), Q = { "aria-activedescendant": he.activeOptionIndex === null || (k = he.options[he.activeOptionIndex]) == null ? void 0 : k.id, "aria-multiselectable": he.mode === 1 ? !0 : void 0, "aria-labelledby": ie, "aria-orientation": he.orientation, id: O, onKeyDown: $, role: "listbox", tabIndex: 0, ref: de };
  return X({ ourProps: Q, theirProps: V, slot: fe, defaultTag: Je, features: qe, visible: G, name: "Listbox.Options" });
}
let Ze = "li";
function et(m, P) {
  let k = I$1(), { id: L = `headlessui-listbox-option-${k}`, disabled: O = !1, value: V, ...he } = m, K = U$1("Listbox.Option"), de = _$1("Listbox.Option"), ce = K.activeOptionIndex !== null ? K.options[K.activeOptionIndex].id === L : !1, pe = K.isSelected(V), B = useRef(null), G = b$1(B), $ = s$4({ disabled: O, value: V, domRef: B, get textValue() {
    return G();
  } }), ie = y$2(P, B);
  l$2(() => {
    if (K.listboxState !== 0 || !ce || K.activationTrigger === 0)
      return;
    let Te = o$5();
    return Te.requestAnimationFrame(() => {
      var Ce, Ae;
      (Ae = (Ce = B.current) == null ? void 0 : Ce.scrollIntoView) == null || Ae.call(Ce, { block: "nearest" });
    }), Te.dispose;
  }, [B, ce, K.listboxState, K.activationTrigger, K.activeOptionIndex]), l$2(() => de.registerOption(L, $), [$, L]);
  let fe = o$4((Te) => {
    if (O)
      return Te.preventDefault();
    de.onChange(V), K.mode === 0 && (de.closeListbox(), o$5().nextFrame(() => {
      var Ce;
      return (Ce = K.buttonRef.current) == null ? void 0 : Ce.focus({ preventScroll: !0 });
    }));
  }), Q = o$4(() => {
    if (O)
      return de.goToOption(a$2.Nothing);
    de.goToOption(a$2.Specific, L);
  }), ue = u$1(), me = o$4((Te) => ue.update(Te)), ge = o$4((Te) => {
    ue.wasMoved(Te) && (O || ce || de.goToOption(a$2.Specific, L, 0));
  }), ve = o$4((Te) => {
    ue.wasMoved(Te) && (O || ce && de.goToOption(a$2.Nothing));
  }), _e = useMemo(() => ({ active: ce, selected: pe, disabled: O }), [ce, pe, O]);
  return X({ ourProps: { id: L, ref: ie, role: "option", tabIndex: O === !0 ? void 0 : -1, "aria-disabled": O === !0 ? !0 : void 0, "aria-selected": pe, disabled: void 0, onClick: fe, onFocus: Q, onPointerEnter: me, onMouseEnter: me, onPointerMove: ge, onMouseMove: ge, onPointerLeave: ve, onMouseLeave: ve }, theirProps: he, slot: _e, defaultTag: Ze, name: "Listbox.Option" });
}
let tt$1 = D(Qe), ot = D(Xe), nt = D(ze), it = D(Ye), rt = D(et), Nt = Object.assign(tt$1, { Button: ot, Label: nt, Options: it, Option: rt });
function c(m = 0) {
  let [P, k] = useState(m), L = f$1(), O = useCallback((de) => {
    L.current && k((ce) => ce | de);
  }, [P, L]), V = useCallback((de) => !!(P & de), [P]), he = useCallback((de) => {
    L.current && k((ce) => ce & ~de);
  }, [k, L]), K = useCallback((de) => {
    L.current && k((ce) => ce ^ de);
  }, [k]);
  return { flags: P, addFlag: O, hasFlag: V, removeFlag: he, toggleFlag: K };
}
let d = createContext(null);
function u() {
  let m = useContext(d);
  if (m === null) {
    let P = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(P, u), P;
  }
  return m;
}
function H() {
  let [m, P] = useState([]);
  return [m.length > 0 ? m.join(" ") : void 0, useMemo(() => function(k) {
    let L = o$4((V) => (P((he) => [...he, V]), () => P((he) => {
      let K = he.slice(), de = K.indexOf(V);
      return de !== -1 && K.splice(de, 1), K;
    }))), O = useMemo(() => ({ register: L, slot: k.slot, name: k.name, props: k.props }), [L, k.slot, k.name, k.props]);
    return React__default.createElement(d.Provider, { value: O }, k.children);
  }, [P])];
}
let A = "label";
function h(m, P) {
  let k = I$1(), { id: L = `headlessui-label-${k}`, passive: O = !1, ...V } = m, he = u(), K = y$2(P);
  l$2(() => he.register(L), [L, he.register]);
  let de = { ref: K, ...he.props, id: L };
  return O && ("onClick" in de && (delete de.htmlFor, delete de.onClick), "onClick" in V && delete V.onClick), X({ ourProps: de, theirProps: V, slot: he.slot || {}, defaultTag: A, name: he.name || "Label" });
}
let v$1 = D(h), M$2 = Object.assign(v$1, {}), y = createContext(null);
y.displayName = "GroupContext";
let Y = Fragment;
function Z(m) {
  var P;
  let [k, L] = useState(null), [O, V] = H(), [he, K] = M$3(), de = useMemo(() => ({ switch: k, setSwitch: L, labelledby: O, describedby: he }), [k, L, O, he]), ce = {}, pe = m;
  return React__default.createElement(K, { name: "Switch.Description" }, React__default.createElement(V, { name: "Switch.Label", props: { htmlFor: (P = de.switch) == null ? void 0 : P.id, onClick(B) {
    k && (B.currentTarget.tagName === "LABEL" && B.preventDefault(), k.click(), k.focus({ preventScroll: !0 }));
  } } }, React__default.createElement(y.Provider, { value: de }, X({ ourProps: ce, theirProps: pe, defaultTag: Y, name: "Switch.Group" }))));
}
let ee = "button";
function te(m, P) {
  let k = I$1(), { id: L = `headlessui-switch-${k}`, checked: O, defaultChecked: V = !1, onChange: he, name: K, value: de, form: ce, ...pe } = m, B = useContext(y), G = useRef(null), $ = y$2(G, P, B === null ? null : B.setSwitch), [ie, fe] = T(O, he, V), Q = o$4(() => fe == null ? void 0 : fe(!ie)), ue = o$4((Ce) => {
    if (r(Ce.currentTarget))
      return Ce.preventDefault();
    Ce.preventDefault(), Q();
  }), me = o$4((Ce) => {
    Ce.key === o$1.Space ? (Ce.preventDefault(), Q()) : Ce.key === o$1.Enter && p$1(Ce.currentTarget);
  }), ge = o$4((Ce) => Ce.preventDefault()), ve = useMemo(() => ({ checked: ie }), [ie]), _e = { id: L, ref: $, role: "switch", type: s$1(m, G), tabIndex: 0, "aria-checked": ie, "aria-labelledby": B == null ? void 0 : B.labelledby, "aria-describedby": B == null ? void 0 : B.describedby, onClick: ue, onKeyUp: me, onKeyPress: ge }, Te = p$2();
  return useEffect(() => {
    var Ce;
    let Ae = (Ce = G.current) == null ? void 0 : Ce.closest("form");
    Ae && V !== void 0 && Te.addEventListener(Ae, "reset", () => {
      fe(V);
    });
  }, [G, fe]), React__default.createElement(React__default.Fragment, null, K != null && ie && React__default.createElement(c$2, { features: p.Hidden, ...R({ as: "input", type: "checkbox", hidden: !0, readOnly: !0, form: ce, checked: ie, name: K, value: de }) }), X({ ourProps: _e, theirProps: pe, slot: ve, defaultTag: ee, name: "Switch" }));
}
let ne = D(te), re = Z, Ge = Object.assign(ne, { Group: re, Label: M$2, Description: b$2 });
function l(m) {
  let P = { called: !1 };
  return (...k) => {
    if (!P.called)
      return P.called = !0, m(...k);
  };
}
function g(m, ...P) {
  m && P.length > 0 && m.classList.add(...P);
}
function v(m, ...P) {
  m && P.length > 0 && m.classList.remove(...P);
}
function b(m, P) {
  let k = o$5();
  if (!m)
    return k.dispose;
  let { transitionDuration: L, transitionDelay: O } = getComputedStyle(m), [V, he] = [L, O].map((de) => {
    let [ce = 0] = de.split(",").filter(Boolean).map((pe) => pe.includes("ms") ? parseFloat(pe) : parseFloat(pe) * 1e3).sort((pe, B) => B - pe);
    return ce;
  }), K = V + he;
  if (K !== 0) {
    k.group((ce) => {
      ce.setTimeout(() => {
        P(), ce.dispose();
      }, K), ce.addEventListener(m, "transitionrun", (pe) => {
        pe.target === pe.currentTarget && ce.dispose();
      });
    });
    let de = k.addEventListener(m, "transitionend", (ce) => {
      ce.target === ce.currentTarget && (P(), de());
    });
  } else
    P();
  return k.add(() => P()), k.dispose;
}
function M$1(m, P, k, L) {
  let O = k ? "enter" : "leave", V = o$5(), he = L !== void 0 ? l(L) : () => {
  };
  O === "enter" && (m.removeAttribute("hidden"), m.style.display = "");
  let K = u$3(O, { enter: () => P.enter, leave: () => P.leave }), de = u$3(O, { enter: () => P.enterTo, leave: () => P.leaveTo }), ce = u$3(O, { enter: () => P.enterFrom, leave: () => P.leaveFrom });
  return v(m, ...P.base, ...P.enter, ...P.enterTo, ...P.enterFrom, ...P.leave, ...P.leaveFrom, ...P.leaveTo, ...P.entered), g(m, ...P.base, ...K, ...ce), V.nextFrame(() => {
    v(m, ...P.base, ...K, ...ce), g(m, ...P.base, ...K, ...de), b(m, () => (v(m, ...P.base, ...K), g(m, ...P.base, ...P.entered), he()));
  }), V.dispose;
}
function E({ immediate: m, container: P, direction: k, classes: L, onStart: O, onStop: V }) {
  let he = f$1(), K = p$2(), de = s$4(k);
  l$2(() => {
    m && (de.current = "enter");
  }, [m]), l$2(() => {
    let ce = o$5();
    K.add(ce.dispose);
    let pe = P.current;
    if (pe && de.current !== "idle" && he.current)
      return ce.dispose(), O.current(de.current), ce.add(M$1(pe, L.current, de.current === "enter", () => {
        ce.dispose(), V.current(de.current);
      })), ce.dispose;
  }, [k]);
}
function S(m = "") {
  return m.split(" ").filter((P) => P.trim().length > 1);
}
let _ = createContext(null);
_.displayName = "TransitionContext";
var be = ((m) => (m.Visible = "visible", m.Hidden = "hidden", m))(be || {});
function Se() {
  let m = useContext(_);
  if (m === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return m;
}
function Ne() {
  let m = useContext(M);
  if (m === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return m;
}
let M = createContext(null);
M.displayName = "NestingContext";
function U(m) {
  return "children" in m ? U(m.children) : m.current.filter(({ el: P }) => P.current !== null).filter(({ state: P }) => P === "visible").length > 0;
}
function oe(m, P) {
  let k = s$4(m), L = useRef([]), O = f$1(), V = p$2(), he = o$4(($, ie = j.Hidden) => {
    let fe = L.current.findIndex(({ el: Q }) => Q === $);
    fe !== -1 && (u$3(ie, { [j.Unmount]() {
      L.current.splice(fe, 1);
    }, [j.Hidden]() {
      L.current[fe].state = "hidden";
    } }), V.microTask(() => {
      var Q;
      !U(L) && O.current && ((Q = k.current) == null || Q.call(k));
    }));
  }), K = o$4(($) => {
    let ie = L.current.find(({ el: fe }) => fe === $);
    return ie ? ie.state !== "visible" && (ie.state = "visible") : L.current.push({ el: $, state: "visible" }), () => he($, j.Unmount);
  }), de = useRef([]), ce = useRef(Promise.resolve()), pe = useRef({ enter: [], leave: [], idle: [] }), B = o$4(($, ie, fe) => {
    de.current.splice(0), P && (P.chains.current[ie] = P.chains.current[ie].filter(([Q]) => Q !== $)), P == null || P.chains.current[ie].push([$, new Promise((Q) => {
      de.current.push(Q);
    })]), P == null || P.chains.current[ie].push([$, new Promise((Q) => {
      Promise.all(pe.current[ie].map(([ue, me]) => me)).then(() => Q());
    })]), ie === "enter" ? ce.current = ce.current.then(() => P == null ? void 0 : P.wait.current).then(() => fe(ie)) : fe(ie);
  }), G = o$4(($, ie, fe) => {
    Promise.all(pe.current[ie].splice(0).map(([Q, ue]) => ue)).then(() => {
      var Q;
      (Q = de.current.shift()) == null || Q();
    }).then(() => fe(ie));
  });
  return useMemo(() => ({ children: L, register: K, unregister: he, onStart: B, onStop: G, wait: ce, chains: pe }), [K, he, L, B, G, pe, ce]);
}
function xe() {
}
let Pe = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function se(m) {
  var P;
  let k = {};
  for (let L of Pe)
    k[L] = (P = m[L]) != null ? P : xe;
  return k;
}
function Re(m) {
  let P = useRef(se(m));
  return useEffect(() => {
    P.current = se(m);
  }, [m]), P;
}
let ye = "div", ae = S$2.RenderStrategy;
function De(m, P) {
  var k, L;
  let { beforeEnter: O, afterEnter: V, beforeLeave: he, afterLeave: K, enter: de, enterFrom: ce, enterTo: pe, entered: B, leave: G, leaveFrom: $, leaveTo: ie, ...fe } = m, Q = useRef(null), ue = y$2(Q, P), me = (k = fe.unmount) == null || k ? j.Unmount : j.Hidden, { show: ge, appear: ve, initial: _e } = Se(), [Te, Ce] = useState(ge ? "visible" : "hidden"), Ae = Ne(), { register: Ie, unregister: Me } = Ae;
  useEffect(() => Ie(Q), [Ie, Q]), useEffect(() => {
    if (me === j.Hidden && Q.current) {
      if (ge && Te !== "visible") {
        Ce("visible");
        return;
      }
      return u$3(Te, { hidden: () => Me(Q), visible: () => Ie(Q) });
    }
  }, [Te, Q, Ie, Me, ge, me]);
  let ke = s$4({ base: S(fe.className), enter: S(de), enterFrom: S(ce), enterTo: S(pe), entered: S(B), leave: S(G), leaveFrom: S($), leaveTo: S(ie) }), at = Re({ beforeEnter: O, afterEnter: V, beforeLeave: he, afterLeave: K }), st = l$1();
  useEffect(() => {
    if (st && Te === "visible" && Q.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [Q, Te, st]);
  let Ue = _e && !ve, lt = ve && ge && _e, ut = (() => !st || Ue ? "idle" : ge ? "enter" : "leave")(), Oe = c(0), we = o$4((_t) => u$3(_t, { enter: () => {
    Oe.addFlag(d$2.Opening), at.current.beforeEnter();
  }, leave: () => {
    Oe.addFlag(d$2.Closing), at.current.beforeLeave();
  }, idle: () => {
  } })), ht = o$4((_t) => u$3(_t, { enter: () => {
    Oe.removeFlag(d$2.Opening), at.current.afterEnter();
  }, leave: () => {
    Oe.removeFlag(d$2.Closing), at.current.afterLeave();
  }, idle: () => {
  } })), mt = oe(() => {
    Ce("hidden"), Me(Q);
  }, Ae);
  E({ immediate: lt, container: Q, classes: ke, direction: ut, onStart: s$4((_t) => {
    mt.onStart(Q, _t, we);
  }), onStop: s$4((_t) => {
    mt.onStop(Q, _t, ht), _t === "leave" && !U(mt) && (Ce("hidden"), Me(Q));
  }) });
  let Et = fe, Mt = { ref: ue };
  return lt ? Et = { ...Et, className: t$1(fe.className, ...ke.current.enter, ...ke.current.enterFrom) } : (Et.className = t$1(fe.className, (L = Q.current) == null ? void 0 : L.className), Et.className === "" && delete Et.className), React__default.createElement(M.Provider, { value: mt }, React__default.createElement(c$1, { value: u$3(Te, { visible: d$2.Open, hidden: d$2.Closed }) | Oe.flags }, X({ ourProps: Mt, theirProps: Et, defaultTag: ye, features: ae, visible: Te === "visible", name: "Transition.Child" })));
}
function He(m, P) {
  let { show: k, appear: L = !1, unmount: O = !0, ...V } = m, he = useRef(null), K = y$2(he, P);
  l$1();
  let de = C();
  if (k === void 0 && de !== null && (k = (de & d$2.Open) === d$2.Open), ![!0, !1].includes(k))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [ce, pe] = useState(k ? "visible" : "hidden"), B = oe(() => {
    pe("hidden");
  }), [G, $] = useState(!0), ie = useRef([k]);
  l$2(() => {
    G !== !1 && ie.current[ie.current.length - 1] !== k && (ie.current.push(k), $(!1));
  }, [ie, k]);
  let fe = useMemo(() => ({ show: k, appear: L, initial: G }), [k, L, G]);
  useEffect(() => {
    if (k)
      pe("visible");
    else if (!U(B))
      pe("hidden");
    else {
      let ge = he.current;
      if (!ge)
        return;
      let ve = ge.getBoundingClientRect();
      ve.x === 0 && ve.y === 0 && ve.width === 0 && ve.height === 0 && pe("hidden");
    }
  }, [k, B]);
  let Q = { unmount: O }, ue = o$4(() => {
    var ge;
    G && $(!1), (ge = m.beforeEnter) == null || ge.call(m);
  }), me = o$4(() => {
    var ge;
    G && $(!1), (ge = m.beforeLeave) == null || ge.call(m);
  });
  return React__default.createElement(M.Provider, { value: B }, React__default.createElement(_.Provider, { value: fe }, X({ ourProps: { ...Q, as: Fragment, children: React__default.createElement(le, { ref: K, ...Q, ...V, beforeEnter: ue, beforeLeave: me }) }, theirProps: {}, defaultTag: Fragment, features: ae, visible: ce === "visible", name: "Transition" })));
}
function Fe(m, P) {
  let k = useContext(_) !== null, L = C() !== null;
  return React__default.createElement(React__default.Fragment, null, !k && L ? React__default.createElement(W, { ref: P, ...m }) : React__default.createElement(le, { ref: P, ...m }));
}
let W = D(He), le = D(De), Le = D(Fe), tt = Object.assign(W, { Child: Le, Root: W });
function CheckIcon({
  title: m,
  titleId: P,
  ...k
}, L) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: L,
    "aria-labelledby": P
  }, k), m ? /* @__PURE__ */ React.createElement("title", {
    id: P
  }, m) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$3 = React.forwardRef(CheckIcon), CheckIcon$1 = ForwardRef$3;
function ChevronUpDownIcon({
  title: m,
  titleId: P,
  ...k
}, L) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: L,
    "aria-labelledby": P
  }, k), m ? /* @__PURE__ */ React.createElement("title", {
    id: P
  }, m) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$2 = React.forwardRef(ChevronUpDownIcon), ChevronUpDownIcon$1 = ForwardRef$2;
function MinusIcon({
  title: m,
  titleId: P,
  ...k
}, L) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: L,
    "aria-labelledby": P
  }, k), m ? /* @__PURE__ */ React.createElement("title", {
    id: P
  }, m) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$1 = React.forwardRef(MinusIcon), MinusIcon$1 = ForwardRef$1;
function PlusIcon({
  title: m,
  titleId: P,
  ...k
}, L) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: L,
    "aria-labelledby": P
  }, k), m ? /* @__PURE__ */ React.createElement("title", {
    id: P
  }, m) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = React.forwardRef(PlusIcon), PlusIcon$1 = ForwardRef;
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(m) {
  (function() {
    var P = {}.hasOwnProperty;
    function k() {
      for (var L = [], O = 0; O < arguments.length; O++) {
        var V = arguments[O];
        if (V) {
          var he = typeof V;
          if (he === "string" || he === "number")
            L.push(V);
          else if (Array.isArray(V)) {
            if (V.length) {
              var K = k.apply(null, V);
              K && L.push(K);
            }
          } else if (he === "object") {
            if (V.toString !== Object.prototype.toString && !V.toString.toString().includes("[native code]")) {
              L.push(V.toString());
              continue;
            }
            for (var de in V)
              P.call(V, de) && V[de] && L.push(de);
          }
        }
      }
      return L.join(" ");
    }
    m.exports ? (k.default = k, m.exports = k) : window.classNames = k;
  })();
})(classnames);
var classnamesExports = classnames.exports;
const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports), Accounts = ({ className: m }) => {
  const { setAccount: P, account: k, accounts: L } = useWallet();
  return L != null && L.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: classNames("w-full", m), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-6 text-white", children: "Accounts" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Nt,
      {
        value: k,
        onChange: (O) => {
          P(O);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Nt.Button,
            {
              className: classNames(
                "relative min-w-[200px] w-full cursor-default rounded-lg bg-violet-900 py-2 pl-3 pr-10 text-left",
                "focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white",
                "focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300",
                "sm:text-sm hover:cursor-pointer hover:opacity-80"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block truncate text-white/70", children: (k == null ? void 0 : k.name) || (k == null ? void 0 : k.address) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChevronUpDownIcon$1,
                  {
                    className: "h-5 w-5 text-gray-400",
                    "aria-hidden": "true"
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            tt,
            {
              as: Fragment,
              leave: "transition ease-in duration-100",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Nt.Options,
                {
                  className: classNames(
                    "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-violet-900 py-1 text-base shadow-lg ring-1",
                    "ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  ),
                  children: L == null ? void 0 : L.map((O) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Nt.Option,
                    {
                      className: ({ active: V }) => classNames(
                        "relative cursor-default select-none py-2 pl-10 pr-4 hover:cursor-pointer",
                        V ? "bg-violet-800 text-gray-300" : "text-gray-300"
                      ),
                      value: O,
                      children: () => {
                        const V = k && k.address === (O == null ? void 0 : O.address);
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: `block truncate ${V ? "font-medium" : "font-normal"}`,
                              children: O.name || O.address
                            }
                          ),
                          V && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckIcon$1, { className: "h-5 w-5", "aria-hidden": "true" }) })
                        ] });
                      }
                    },
                    O.address
                  ))
                }
              )
            }
          )
        ] })
      }
    )
  ] }) : null;
}, BigIntInputField = ({
  className: m,
  onDigitChange: P,
  ...k
}) => {
  const L = (O) => {
    /^\d*$/.test(O) && P(BigInt(O));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    InputField,
    {
      className: m,
      ...k,
      onChange: (O) => L(O.target.value)
    }
  );
}, Button = ({
  children: m,
  className: P,
  onClick: k,
  ...L
}) => {
  const O = classNames(
    "bg-warning-500/90 hover:bg-warning-600/90 transition ease-in-out px-6 py-2 border-none block",
    "text-base tracking-wide font-semibold rounded-full disabled:bg-warning-500/60",
    "focus:ring-4 border-warning-600 ring-warning-600 disabled:cursor-not-allowed focus:outline-none focus:ring-offset-0 text-white",
    P
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: O, onClick: k, ...L, children: m });
}, Card = ({ children: m, className: P }) => {
  const k = classNames(
    "text-white/90 lg:max-w-[50%] md:max-w-[65%] max-w-[75%] rounded-2xl bg-white/10 p-3",
    P
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("rotate-x-[50deg]", k), children: m });
}, ConnectButton = ({
  className: m,
  children: P = "Connect Wallet",
  ...k
}) => {
  const { setView: L } = useUI();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: m, onClick: () => L("wallet"), ...k, children: P });
}, ConnectWallet = () => {
  const { account: m, connect: P } = useWallet(), k = useInstalledWallets(), L = useUninstalledWallets();
  return m ? null : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-8 text-white", children: "Connect Wallet" }),
    !m && k.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: k.map((O) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        className: "flex items-center gap-2 w-full",
        onClick: () => {
          P(O.extensionName);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "w-10 mr-2", src: O.logo.src, alt: O.logo.alt }),
          "Connect to ",
          O.extensionName
        ]
      }
    ) }, O.title)) }),
    !m && L.length && k.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold my-6 text-center text-white/80", children: "Please install one of these supported wallets." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: L.map((O) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "flex items-center gap-2 w-full",
          onClick: () => window.open(O.installUrl, "_blank"),
          rel: "noopener noreferrer",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                className: "w-10 mr-2",
                src: O.logo.src,
                alt: O.logo.alt
              }
            ),
            "Install ",
            O.extensionName
          ]
        }
      ) }, O.title)) })
    ] })
  ] });
}, Events = ({ events: m, className: P }) => !m || m.length === 0 ? null : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: classNames("text-xs", P), children: m.map((k) => {
  var L, O;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "li",
    {
      className: classNames(
        "bg-brand-500 rounded-md px-1 py-1 mt-1 w-full",
        isContractInstantiatedEvent(k) && "bg-success-500",
        isExtrinsicFailedEvent(k) && "bg-warning-500"
      ),
      children: isContractInstantiatedEvent(k) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold", children: formatEventName(k) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
          "Deployer: ",
          (L = asContractInstantiatedEvent(k)) == null ? void 0 : L.deployer
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
          "Contract Address:",
          " ",
          (O = asContractInstantiatedEvent(k)) == null ? void 0 : O.contractAddress
        ] })
      ] }) : formatEventName(k)
    },
    k.toString()
  );
}) });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(m, P) {
  return (extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(k, L) {
    k.__proto__ = L;
  } || function(k, L) {
    for (var O in L)
      Object.prototype.hasOwnProperty.call(L, O) && (k[O] = L[O]);
  })(m, P);
};
function __extends(m, P) {
  if (typeof P != "function" && P !== null)
    throw new TypeError("Class extends value " + String(P) + " is not a constructor or null");
  function k() {
    this.constructor = m;
  }
  extendStatics(m, P), m.prototype = P === null ? Object.create(P) : (k.prototype = P.prototype, new k());
}
var __assign = function() {
  return (__assign = Object.assign || function(m) {
    for (var P, k = 1, L = arguments.length; k < L; k++)
      for (var O in P = arguments[k])
        Object.prototype.hasOwnProperty.call(P, O) && (m[O] = P[O]);
    return m;
  }).apply(this, arguments);
};
function __awaiter(m, P, k, L) {
  return new (k || (k = Promise))(function(O, V) {
    function he(ce) {
      try {
        de(L.next(ce));
      } catch (pe) {
        V(pe);
      }
    }
    function K(ce) {
      try {
        de(L.throw(ce));
      } catch (pe) {
        V(pe);
      }
    }
    function de(ce) {
      var pe;
      ce.done ? O(ce.value) : (pe = ce.value, pe instanceof k ? pe : new k(function(B) {
        B(pe);
      })).then(he, K);
    }
    de((L = L.apply(m, P || [])).next());
  });
}
function __generator(m, P) {
  var k, L, O, V, he = { label: 0, sent: function() {
    if (1 & O[0])
      throw O[1];
    return O[1];
  }, trys: [], ops: [] };
  return V = { next: K(0), throw: K(1), return: K(2) }, typeof Symbol == "function" && (V[Symbol.iterator] = function() {
    return this;
  }), V;
  function K(de) {
    return function(ce) {
      return function(pe) {
        if (k)
          throw new TypeError("Generator is already executing.");
        for (; he; )
          try {
            if (k = 1, L && (O = 2 & pe[0] ? L.return : pe[0] ? L.throw || ((O = L.return) && O.call(L), 0) : L.next) && !(O = O.call(L, pe[1])).done)
              return O;
            switch (L = 0, O && (pe = [2 & pe[0], O.value]), pe[0]) {
              case 0:
              case 1:
                O = pe;
                break;
              case 4:
                return he.label++, { value: pe[1], done: !1 };
              case 5:
                he.label++, L = pe[1], pe = [0];
                continue;
              case 7:
                pe = he.ops.pop(), he.trys.pop();
                continue;
              default:
                if (O = he.trys, !((O = O.length > 0 && O[O.length - 1]) || pe[0] !== 6 && pe[0] !== 2)) {
                  he = 0;
                  continue;
                }
                if (pe[0] === 3 && (!O || pe[1] > O[0] && pe[1] < O[3])) {
                  he.label = pe[1];
                  break;
                }
                if (pe[0] === 6 && he.label < O[1]) {
                  he.label = O[1], O = pe;
                  break;
                }
                if (O && he.label < O[2]) {
                  he.label = O[2], he.ops.push(pe);
                  break;
                }
                O[2] && he.ops.pop(), he.trys.pop();
                continue;
            }
            pe = P.call(m, he);
          } catch (B) {
            pe = [6, B], L = 0;
          } finally {
            k = O = 0;
          }
        if (5 & pe[0])
          throw pe[1];
        return { value: pe[0] ? pe[1] : void 0, done: !0 };
      }([de, ce]);
    };
  }
}
function createCommonjsModule(m, P) {
  return m(P = { exports: {} }, P.exports), P.exports;
}
var lottie = createCommonjsModule(function(module, exports) {
  typeof navigator < "u" && function(m, P) {
    module.exports = P();
  }(0, function() {
    var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = !1, initialDefaultFrame = -999999, setWebWorker = function(m) {
      _useWebWorker = !!m;
    }, getWebWorker = function() {
      return _useWebWorker;
    }, setLocationHref = function(m) {
      locationHref = m;
    }, getLocationHref = function() {
      return locationHref;
    };
    function createTag(m) {
      return document.createElement(m);
    }
    function extendPrototype(m, P) {
      var k, L, O = m.length;
      for (k = 0; k < O; k += 1)
        for (var V in L = m[k].prototype)
          Object.prototype.hasOwnProperty.call(L, V) && (P.prototype[V] = L[V]);
    }
    function getDescriptor(m, P) {
      return Object.getOwnPropertyDescriptor(m, P);
    }
    function createProxyFunction(m) {
      function P() {
      }
      return P.prototype = m, P;
    }
    var audioControllerFactory = function() {
      function m(P) {
        this.audios = [], this.audioFactory = P, this._volume = 1, this._isMuted = !1;
      }
      return m.prototype = { addAudio: function(P) {
        this.audios.push(P);
      }, pause: function() {
        var P, k = this.audios.length;
        for (P = 0; P < k; P += 1)
          this.audios[P].pause();
      }, resume: function() {
        var P, k = this.audios.length;
        for (P = 0; P < k; P += 1)
          this.audios[P].resume();
      }, setRate: function(P) {
        var k, L = this.audios.length;
        for (k = 0; k < L; k += 1)
          this.audios[k].setRate(P);
      }, createAudio: function(P) {
        return this.audioFactory ? this.audioFactory(P) : window.Howl ? new window.Howl({ src: [P] }) : { isPlaying: !1, play: function() {
          this.isPlaying = !0;
        }, seek: function() {
          this.isPlaying = !1;
        }, playing: function() {
        }, rate: function() {
        }, setVolume: function() {
        } };
      }, setAudioFactory: function(P) {
        this.audioFactory = P;
      }, setVolume: function(P) {
        this._volume = P, this._updateVolume();
      }, mute: function() {
        this._isMuted = !0, this._updateVolume();
      }, unmute: function() {
        this._isMuted = !1, this._updateVolume();
      }, getVolume: function() {
        return this._volume;
      }, _updateVolume: function() {
        var P, k = this.audios.length;
        for (P = 0; P < k; P += 1)
          this.audios[P].volume(this._volume * (this._isMuted ? 0 : 1));
      } }, function() {
        return new m();
      };
    }(), createTypedArray = function() {
      function m(P, k) {
        var L, O = 0, V = [];
        switch (P) {
          case "int16":
          case "uint8c":
            L = 1;
            break;
          default:
            L = 1.1;
        }
        for (O = 0; O < k; O += 1)
          V.push(L);
        return V;
      }
      return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? function(P, k) {
        return P === "float32" ? new Float32Array(k) : P === "int16" ? new Int16Array(k) : P === "uint8c" ? new Uint8ClampedArray(k) : m(P, k);
      } : m;
    }();
    function createSizedArray(m) {
      return Array.apply(null, { length: m });
    }
    function _typeof$6(m) {
      return (_typeof$6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(P) {
        return typeof P;
      } : function(P) {
        return P && typeof Symbol == "function" && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
      })(m);
    }
    var subframeEnabled = !0, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
    (function() {
      var m, P = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], k = P.length;
      for (m = 0; m < k; m += 1)
        BMMath[P[m]] = Math[P[m]];
    })(), BMMath.random = Math.random, BMMath.abs = function(m) {
      if (_typeof$6(m) === "object" && m.length) {
        var P, k = createSizedArray(m.length), L = m.length;
        for (P = 0; P < L; P += 1)
          k[P] = Math.abs(m[P]);
        return k;
      }
      return Math.abs(m);
    };
    var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = 0.5519;
    function styleDiv(m) {
      m.style.position = "absolute", m.style.top = 0, m.style.left = 0, m.style.display = "block", m.style.transformOrigin = "0 0", m.style.webkitTransformOrigin = "0 0", m.style.backfaceVisibility = "visible", m.style.webkitBackfaceVisibility = "visible", m.style.transformStyle = "preserve-3d", m.style.webkitTransformStyle = "preserve-3d", m.style.mozTransformStyle = "preserve-3d";
    }
    function BMEnterFrameEvent(m, P, k, L) {
      this.type = m, this.currentTime = P, this.totalTime = k, this.direction = L < 0 ? -1 : 1;
    }
    function BMCompleteEvent(m, P) {
      this.type = m, this.direction = P < 0 ? -1 : 1;
    }
    function BMCompleteLoopEvent(m, P, k, L) {
      this.type = m, this.currentLoop = k, this.totalLoops = P, this.direction = L < 0 ? -1 : 1;
    }
    function BMSegmentStartEvent(m, P, k) {
      this.type = m, this.firstFrame = P, this.totalFrames = k;
    }
    function BMDestroyEvent(m, P) {
      this.type = m, this.target = P;
    }
    function BMRenderFrameErrorEvent(m, P) {
      this.type = "renderFrameError", this.nativeError = m, this.currentTime = P;
    }
    function BMConfigErrorEvent(m) {
      this.type = "configError", this.nativeError = m;
    }
    var createElementID = (_count = 0, function() {
      return idPrefix$1 + "__lottie_element_" + (_count += 1);
    }), _count;
    function HSVtoRGB(m, P, k) {
      var L, O, V, he, K, de, ce, pe;
      switch (de = k * (1 - P), ce = k * (1 - (K = 6 * m - (he = Math.floor(6 * m))) * P), pe = k * (1 - (1 - K) * P), he % 6) {
        case 0:
          L = k, O = pe, V = de;
          break;
        case 1:
          L = ce, O = k, V = de;
          break;
        case 2:
          L = de, O = k, V = pe;
          break;
        case 3:
          L = de, O = ce, V = k;
          break;
        case 4:
          L = pe, O = de, V = k;
          break;
        case 5:
          L = k, O = de, V = ce;
      }
      return [L, O, V];
    }
    function RGBtoHSV(m, P, k) {
      var L, O = Math.max(m, P, k), V = Math.min(m, P, k), he = O - V, K = O === 0 ? 0 : he / O, de = O / 255;
      switch (O) {
        case V:
          L = 0;
          break;
        case m:
          L = P - k + he * (P < k ? 6 : 0), L /= 6 * he;
          break;
        case P:
          L = k - m + 2 * he, L /= 6 * he;
          break;
        case k:
          L = m - P + 4 * he, L /= 6 * he;
      }
      return [L, K, de];
    }
    function addSaturationToRGB(m, P) {
      var k = RGBtoHSV(255 * m[0], 255 * m[1], 255 * m[2]);
      return k[1] += P, k[1] > 1 ? k[1] = 1 : k[1] <= 0 && (k[1] = 0), HSVtoRGB(k[0], k[1], k[2]);
    }
    function addBrightnessToRGB(m, P) {
      var k = RGBtoHSV(255 * m[0], 255 * m[1], 255 * m[2]);
      return k[2] += P, k[2] > 1 ? k[2] = 1 : k[2] < 0 && (k[2] = 0), HSVtoRGB(k[0], k[1], k[2]);
    }
    function addHueToRGB(m, P) {
      var k = RGBtoHSV(255 * m[0], 255 * m[1], 255 * m[2]);
      return k[0] += P / 360, k[0] > 1 ? k[0] -= 1 : k[0] < 0 && (k[0] += 1), HSVtoRGB(k[0], k[1], k[2]);
    }
    var rgbToHex = function() {
      var m, P, k = [];
      for (m = 0; m < 256; m += 1)
        P = m.toString(16), k[m] = P.length === 1 ? "0" + P : P;
      return function(L, O, V) {
        return L < 0 && (L = 0), O < 0 && (O = 0), V < 0 && (V = 0), "#" + k[L] + k[O] + k[V];
      };
    }(), setSubframeEnabled = function(m) {
      subframeEnabled = !!m;
    }, getSubframeEnabled = function() {
      return subframeEnabled;
    }, setExpressionsPlugin = function(m) {
      expressionsPlugin = m;
    }, getExpressionsPlugin = function() {
      return expressionsPlugin;
    }, setExpressionInterfaces = function(m) {
      expressionsInterfaces = m;
    }, getExpressionInterfaces = function() {
      return expressionsInterfaces;
    }, setDefaultCurveSegments = function(m) {
      defaultCurveSegments = m;
    }, getDefaultCurveSegments = function() {
      return defaultCurveSegments;
    }, setIdPrefix = function(m) {
      idPrefix$1 = m;
    };
    function createNS(m) {
      return document.createElementNS(svgNS, m);
    }
    function _typeof$5(m) {
      return (_typeof$5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(P) {
        return typeof P;
      } : function(P) {
        return P && typeof Symbol == "function" && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
      })(m);
    }
    var dataManager = function() {
      var m, P, k = 1, L = [], O = { onmessage: function() {
      }, postMessage: function(de) {
        m({ data: de });
      } }, V = { postMessage: function(de) {
        O.onmessage({ data: de });
      } };
      function he() {
        P || ((P = function(de) {
          if (window.Worker && window.Blob && getWebWorker()) {
            var ce = new Blob(["var _workerSelf = self; self.onmessage = ", de.toString()], { type: "text/javascript" }), pe = URL.createObjectURL(ce);
            return new Worker(pe);
          }
          return m = de, O;
        }(function(de) {
          if (V.dataManager || (V.dataManager = function() {
            function pe(Ce, Ae) {
              var Ie, Me, ke, at, st, Ue, lt = Ce.length;
              for (Me = 0; Me < lt; Me += 1)
                if ("ks" in (Ie = Ce[Me]) && !Ie.completed) {
                  if (Ie.completed = !0, Ie.hasMask) {
                    var ut = Ie.masksProperties;
                    for (at = ut.length, ke = 0; ke < at; ke += 1)
                      if (ut[ke].pt.k.i)
                        $(ut[ke].pt.k);
                      else
                        for (Ue = ut[ke].pt.k.length, st = 0; st < Ue; st += 1)
                          ut[ke].pt.k[st].s && $(ut[ke].pt.k[st].s[0]), ut[ke].pt.k[st].e && $(ut[ke].pt.k[st].e[0]);
                  }
                  Ie.ty === 0 ? (Ie.layers = B(Ie.refId, Ae), pe(Ie.layers, Ae)) : Ie.ty === 4 ? G(Ie.shapes) : Ie.ty === 5 && _e(Ie);
                }
            }
            function B(Ce, Ae) {
              var Ie = function(Me, ke) {
                for (var at = 0, st = ke.length; at < st; ) {
                  if (ke[at].id === Me)
                    return ke[at];
                  at += 1;
                }
                return null;
              }(Ce, Ae);
              return Ie ? Ie.layers.__used ? JSON.parse(JSON.stringify(Ie.layers)) : (Ie.layers.__used = !0, Ie.layers) : null;
            }
            function G(Ce) {
              var Ae, Ie, Me;
              for (Ae = Ce.length - 1; Ae >= 0; Ae -= 1)
                if (Ce[Ae].ty === "sh")
                  if (Ce[Ae].ks.k.i)
                    $(Ce[Ae].ks.k);
                  else
                    for (Me = Ce[Ae].ks.k.length, Ie = 0; Ie < Me; Ie += 1)
                      Ce[Ae].ks.k[Ie].s && $(Ce[Ae].ks.k[Ie].s[0]), Ce[Ae].ks.k[Ie].e && $(Ce[Ae].ks.k[Ie].e[0]);
                else
                  Ce[Ae].ty === "gr" && G(Ce[Ae].it);
            }
            function $(Ce) {
              var Ae, Ie = Ce.i.length;
              for (Ae = 0; Ae < Ie; Ae += 1)
                Ce.i[Ae][0] += Ce.v[Ae][0], Ce.i[Ae][1] += Ce.v[Ae][1], Ce.o[Ae][0] += Ce.v[Ae][0], Ce.o[Ae][1] += Ce.v[Ae][1];
            }
            function ie(Ce, Ae) {
              var Ie = Ae ? Ae.split(".") : [100, 100, 100];
              return Ce[0] > Ie[0] || !(Ie[0] > Ce[0]) && (Ce[1] > Ie[1] || !(Ie[1] > Ce[1]) && (Ce[2] > Ie[2] || !(Ie[2] > Ce[2]) && null));
            }
            var fe, Q = function() {
              var Ce = [4, 4, 14];
              function Ae(Ie) {
                var Me, ke, at, st = Ie.length;
                for (Me = 0; Me < st; Me += 1)
                  Ie[Me].ty === 5 && (ke = Ie[Me], at = void 0, at = ke.t.d, ke.t.d = { k: [{ s: at, t: 0 }] });
              }
              return function(Ie) {
                if (ie(Ce, Ie.v) && (Ae(Ie.layers), Ie.assets)) {
                  var Me, ke = Ie.assets.length;
                  for (Me = 0; Me < ke; Me += 1)
                    Ie.assets[Me].layers && Ae(Ie.assets[Me].layers);
                }
              };
            }(), ue = (fe = [4, 7, 99], function(Ce) {
              if (Ce.chars && !ie(fe, Ce.v)) {
                var Ae, Ie = Ce.chars.length;
                for (Ae = 0; Ae < Ie; Ae += 1) {
                  var Me = Ce.chars[Ae];
                  Me.data && Me.data.shapes && (G(Me.data.shapes), Me.data.ip = 0, Me.data.op = 99999, Me.data.st = 0, Me.data.sr = 1, Me.data.ks = { p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 } }, Ce.chars[Ae].t || (Me.data.shapes.push({ ty: "no" }), Me.data.shapes[0].it.push({ p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 }, sk: { k: 0, a: 0 }, sa: { k: 0, a: 0 }, ty: "tr" })));
                }
              }
            }), me = function() {
              var Ce = [5, 7, 15];
              function Ae(Ie) {
                var Me, ke, at, st = Ie.length;
                for (Me = 0; Me < st; Me += 1)
                  Ie[Me].ty === 5 && (ke = Ie[Me], at = void 0, typeof (at = ke.t.p).a == "number" && (at.a = { a: 0, k: at.a }), typeof at.p == "number" && (at.p = { a: 0, k: at.p }), typeof at.r == "number" && (at.r = { a: 0, k: at.r }));
              }
              return function(Ie) {
                if (ie(Ce, Ie.v) && (Ae(Ie.layers), Ie.assets)) {
                  var Me, ke = Ie.assets.length;
                  for (Me = 0; Me < ke; Me += 1)
                    Ie.assets[Me].layers && Ae(Ie.assets[Me].layers);
                }
              };
            }(), ge = function() {
              var Ce = [4, 1, 9];
              function Ae(Me) {
                var ke, at, st, Ue = Me.length;
                for (ke = 0; ke < Ue; ke += 1)
                  if (Me[ke].ty === "gr")
                    Ae(Me[ke].it);
                  else if (Me[ke].ty === "fl" || Me[ke].ty === "st")
                    if (Me[ke].c.k && Me[ke].c.k[0].i)
                      for (st = Me[ke].c.k.length, at = 0; at < st; at += 1)
                        Me[ke].c.k[at].s && (Me[ke].c.k[at].s[0] /= 255, Me[ke].c.k[at].s[1] /= 255, Me[ke].c.k[at].s[2] /= 255, Me[ke].c.k[at].s[3] /= 255), Me[ke].c.k[at].e && (Me[ke].c.k[at].e[0] /= 255, Me[ke].c.k[at].e[1] /= 255, Me[ke].c.k[at].e[2] /= 255, Me[ke].c.k[at].e[3] /= 255);
                    else
                      Me[ke].c.k[0] /= 255, Me[ke].c.k[1] /= 255, Me[ke].c.k[2] /= 255, Me[ke].c.k[3] /= 255;
              }
              function Ie(Me) {
                var ke, at = Me.length;
                for (ke = 0; ke < at; ke += 1)
                  Me[ke].ty === 4 && Ae(Me[ke].shapes);
              }
              return function(Me) {
                if (ie(Ce, Me.v) && (Ie(Me.layers), Me.assets)) {
                  var ke, at = Me.assets.length;
                  for (ke = 0; ke < at; ke += 1)
                    Me.assets[ke].layers && Ie(Me.assets[ke].layers);
                }
              };
            }(), ve = function() {
              var Ce = [4, 4, 18];
              function Ae(Me) {
                var ke, at, st;
                for (ke = Me.length - 1; ke >= 0; ke -= 1)
                  if (Me[ke].ty === "sh")
                    if (Me[ke].ks.k.i)
                      Me[ke].ks.k.c = Me[ke].closed;
                    else
                      for (st = Me[ke].ks.k.length, at = 0; at < st; at += 1)
                        Me[ke].ks.k[at].s && (Me[ke].ks.k[at].s[0].c = Me[ke].closed), Me[ke].ks.k[at].e && (Me[ke].ks.k[at].e[0].c = Me[ke].closed);
                  else
                    Me[ke].ty === "gr" && Ae(Me[ke].it);
              }
              function Ie(Me) {
                var ke, at, st, Ue, lt, ut, Oe = Me.length;
                for (at = 0; at < Oe; at += 1) {
                  if ((ke = Me[at]).hasMask) {
                    var we = ke.masksProperties;
                    for (Ue = we.length, st = 0; st < Ue; st += 1)
                      if (we[st].pt.k.i)
                        we[st].pt.k.c = we[st].cl;
                      else
                        for (ut = we[st].pt.k.length, lt = 0; lt < ut; lt += 1)
                          we[st].pt.k[lt].s && (we[st].pt.k[lt].s[0].c = we[st].cl), we[st].pt.k[lt].e && (we[st].pt.k[lt].e[0].c = we[st].cl);
                  }
                  ke.ty === 4 && Ae(ke.shapes);
                }
              }
              return function(Me) {
                if (ie(Ce, Me.v) && (Ie(Me.layers), Me.assets)) {
                  var ke, at = Me.assets.length;
                  for (ke = 0; ke < at; ke += 1)
                    Me.assets[ke].layers && Ie(Me.assets[ke].layers);
                }
              };
            }();
            function _e(Ce) {
              Ce.t.a.length === 0 && Ce.t.p;
            }
            var Te = { completeData: function(Ce) {
              Ce.__complete || (ge(Ce), Q(Ce), ue(Ce), me(Ce), ve(Ce), pe(Ce.layers, Ce.assets), function(Ae, Ie) {
                if (Ae) {
                  var Me = 0, ke = Ae.length;
                  for (Me = 0; Me < ke; Me += 1)
                    Ae[Me].t === 1 && (Ae[Me].data.layers = B(Ae[Me].data.refId, Ie), pe(Ae[Me].data.layers, Ie));
                }
              }(Ce.chars, Ce.assets), Ce.__complete = !0);
            } };
            return Te.checkColors = ge, Te.checkChars = ue, Te.checkPathProperties = me, Te.checkShapes = ve, Te.completeLayers = pe, Te;
          }()), V.assetLoader || (V.assetLoader = function() {
            function pe(B) {
              var G = B.getResponseHeader("content-type");
              return G && B.responseType === "json" && G.indexOf("json") !== -1 || B.response && _typeof$5(B.response) === "object" ? B.response : B.response && typeof B.response == "string" ? JSON.parse(B.response) : B.responseText ? JSON.parse(B.responseText) : null;
            }
            return { load: function(B, G, $, ie) {
              var fe, Q = new XMLHttpRequest();
              try {
                Q.responseType = "json";
              } catch {
              }
              Q.onreadystatechange = function() {
                if (Q.readyState === 4)
                  if (Q.status === 200)
                    fe = pe(Q), $(fe);
                  else
                    try {
                      fe = pe(Q), $(fe);
                    } catch (ue) {
                      ie && ie(ue);
                    }
              };
              try {
                Q.open(["G", "E", "T"].join(""), B, !0);
              } catch {
                Q.open(["G", "E", "T"].join(""), G + "/" + B, !0);
              }
              Q.send();
            } };
          }()), de.data.type === "loadAnimation")
            V.assetLoader.load(de.data.path, de.data.fullPath, function(pe) {
              V.dataManager.completeData(pe), V.postMessage({ id: de.data.id, payload: pe, status: "success" });
            }, function() {
              V.postMessage({ id: de.data.id, status: "error" });
            });
          else if (de.data.type === "complete") {
            var ce = de.data.animation;
            V.dataManager.completeData(ce), V.postMessage({ id: de.data.id, payload: ce, status: "success" });
          } else
            de.data.type === "loadData" && V.assetLoader.load(de.data.path, de.data.fullPath, function(pe) {
              V.postMessage({ id: de.data.id, payload: pe, status: "success" });
            }, function() {
              V.postMessage({ id: de.data.id, status: "error" });
            });
        })).onmessage = function(de) {
          var ce = de.data, pe = ce.id, B = L[pe];
          L[pe] = null, ce.status === "success" ? B.onComplete(ce.payload) : B.onError && B.onError();
        });
      }
      function K(de, ce) {
        var pe = "processId_" + (k += 1);
        return L[pe] = { onComplete: de, onError: ce }, pe;
      }
      return { loadAnimation: function(de, ce, pe) {
        he();
        var B = K(ce, pe);
        P.postMessage({ type: "loadAnimation", path: de, fullPath: window.location.origin + window.location.pathname, id: B });
      }, loadData: function(de, ce, pe) {
        he();
        var B = K(ce, pe);
        P.postMessage({ type: "loadData", path: de, fullPath: window.location.origin + window.location.pathname, id: B });
      }, completeAnimation: function(de, ce, pe) {
        he();
        var B = K(ce, pe);
        P.postMessage({ type: "complete", animation: de, id: B });
      } };
    }(), ImagePreloader = function() {
      var m = function() {
        var K = createTag("canvas");
        K.width = 1, K.height = 1;
        var de = K.getContext("2d");
        return de.fillStyle = "rgba(0,0,0,0)", de.fillRect(0, 0, 1, 1), K;
      }();
      function P() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function k() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function L(K, de, ce) {
        var pe = "";
        if (K.e)
          pe = K.p;
        else if (de) {
          var B = K.p;
          B.indexOf("images/") !== -1 && (B = B.split("/")[1]), pe = de + B;
        } else
          pe = ce, pe += K.u ? K.u : "", pe += K.p;
        return pe;
      }
      function O(K) {
        var de = 0, ce = setInterval((function() {
          (K.getBBox().width || de > 500) && (this._imageLoaded(), clearInterval(ce)), de += 1;
        }).bind(this), 50);
      }
      function V(K) {
        var de = { assetData: K }, ce = L(K, this.assetsPath, this.path);
        return dataManager.loadData(ce, (function(pe) {
          de.img = pe, this._footageLoaded();
        }).bind(this), (function() {
          de.img = {}, this._footageLoaded();
        }).bind(this)), de;
      }
      function he() {
        this._imageLoaded = P.bind(this), this._footageLoaded = k.bind(this), this.testImageLoaded = O.bind(this), this.createFootageData = V.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return he.prototype = { loadAssets: function(K, de) {
        var ce;
        this.imagesLoadedCb = de;
        var pe = K.length;
        for (ce = 0; ce < pe; ce += 1)
          K[ce].layers || (K[ce].t && K[ce].t !== "seq" ? K[ce].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(K[ce]))) : (this.totalImages += 1, this.images.push(this._createImageData(K[ce]))));
      }, setAssetsPath: function(K) {
        this.assetsPath = K || "";
      }, setPath: function(K) {
        this.path = K || "";
      }, loadedImages: function() {
        return this.totalImages === this.loadedAssets;
      }, loadedFootages: function() {
        return this.totalFootages === this.loadedFootagesCount;
      }, destroy: function() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }, getAsset: function(K) {
        for (var de = 0, ce = this.images.length; de < ce; ) {
          if (this.images[de].assetData === K)
            return this.images[de].img;
          de += 1;
        }
        return null;
      }, createImgData: function(K) {
        var de = L(K, this.assetsPath, this.path), ce = createTag("img");
        ce.crossOrigin = "anonymous", ce.addEventListener("load", this._imageLoaded, !1), ce.addEventListener("error", (function() {
          pe.img = m, this._imageLoaded();
        }).bind(this), !1), ce.src = de;
        var pe = { img: ce, assetData: K };
        return pe;
      }, createImageData: function(K) {
        var de = L(K, this.assetsPath, this.path), ce = createNS("image");
        isSafari ? this.testImageLoaded(ce) : ce.addEventListener("load", this._imageLoaded, !1), ce.addEventListener("error", (function() {
          pe.img = m, this._imageLoaded();
        }).bind(this), !1), ce.setAttributeNS("http://www.w3.org/1999/xlink", "href", de), this._elementHelper.append ? this._elementHelper.append(ce) : this._elementHelper.appendChild(ce);
        var pe = { img: ce, assetData: K };
        return pe;
      }, imageLoaded: P, footageLoaded: k, setCacheType: function(K, de) {
        K === "svg" ? (this._elementHelper = de, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      } }, he;
    }();
    function BaseEvent() {
    }
    BaseEvent.prototype = { triggerEvent: function(m, P) {
      if (this._cbs[m])
        for (var k = this._cbs[m], L = 0; L < k.length; L += 1)
          k[L](P);
    }, addEventListener: function(m, P) {
      return this._cbs[m] || (this._cbs[m] = []), this._cbs[m].push(P), (function() {
        this.removeEventListener(m, P);
      }).bind(this);
    }, removeEventListener: function(m, P) {
      if (P) {
        if (this._cbs[m]) {
          for (var k = 0, L = this._cbs[m].length; k < L; )
            this._cbs[m][k] === P && (this._cbs[m].splice(k, 1), k -= 1, L -= 1), k += 1;
          this._cbs[m].length || (this._cbs[m] = null);
        }
      } else
        this._cbs[m] = null;
    } };
    var markerParser = function() {
      function m(P) {
        for (var k, L = P.split(`\r
`), O = {}, V = 0, he = 0; he < L.length; he += 1)
          (k = L[he].split(":")).length === 2 && (O[k[0]] = k[1].trim(), V += 1);
        if (V === 0)
          throw new Error();
        return O;
      }
      return function(P) {
        for (var k = [], L = 0; L < P.length; L += 1) {
          var O = P[L], V = { time: O.tm, duration: O.dr };
          try {
            V.payload = JSON.parse(P[L].cm);
          } catch {
            try {
              V.payload = m(P[L].cm);
            } catch {
              V.payload = { name: P[L].cm };
            }
          }
          k.push(V);
        }
        return k;
      };
    }(), ProjectInterface = function() {
      function m(P) {
        this.compositions.push(P);
      }
      return function() {
        function P(k) {
          for (var L = 0, O = this.compositions.length; L < O; ) {
            if (this.compositions[L].data && this.compositions[L].data.nm === k)
              return this.compositions[L].prepareFrame && this.compositions[L].data.xt && this.compositions[L].prepareFrame(this.currentFrame), this.compositions[L].compInterface;
            L += 1;
          }
          return null;
        }
        return P.compositions = [], P.currentFrame = 0, P.registerComposition = m, P;
      };
    }(), renderers = {}, registerRenderer = function(m, P) {
      renderers[m] = P;
    };
    function getRenderer(m) {
      return renderers[m];
    }
    function _typeof$4(m) {
      return (_typeof$4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(P) {
        return typeof P;
      } : function(P) {
        return P && typeof Symbol == "function" && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
      })(m);
    }
    var AnimationItem = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0);
    };
    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(m) {
      (m.wrapper || m.container) && (this.wrapper = m.wrapper || m.container);
      var P = "svg";
      m.animType ? P = m.animType : m.renderer && (P = m.renderer);
      var k = getRenderer(P);
      this.renderer = new k(this, m.rendererSettings), this.imagePreloader.setCacheType(P, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = P, m.loop === "" || m.loop === null || m.loop === void 0 || m.loop === !0 ? this.loop = !0 : m.loop === !1 ? this.loop = !1 : this.loop = parseInt(m.loop, 10), this.autoplay = !("autoplay" in m) || m.autoplay, this.name = m.name ? m.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(m, "autoloadSegments") || m.autoloadSegments, this.assetsPath = m.assetsPath, this.initialSegment = m.initialSegment, m.audioFactory && this.audioController.setAudioFactory(m.audioFactory), m.animationData ? this.setupAnimation(m.animationData) : m.path && (m.path.lastIndexOf("\\") !== -1 ? this.path = m.path.substr(0, m.path.lastIndexOf("\\") + 1) : this.path = m.path.substr(0, m.path.lastIndexOf("/") + 1), this.fileName = m.path.substr(m.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(m.path, this.configAnimation, this.onSetupError));
    }, AnimationItem.prototype.onSetupError = function() {
      this.trigger("data_failed");
    }, AnimationItem.prototype.setupAnimation = function(m) {
      dataManager.completeAnimation(m, this.configAnimation);
    }, AnimationItem.prototype.setData = function(m, P) {
      P && _typeof$4(P) !== "object" && (P = JSON.parse(P));
      var k = { wrapper: m, animationData: P }, L = m.attributes;
      k.path = L.getNamedItem("data-animation-path") ? L.getNamedItem("data-animation-path").value : L.getNamedItem("data-bm-path") ? L.getNamedItem("data-bm-path").value : L.getNamedItem("bm-path") ? L.getNamedItem("bm-path").value : "", k.animType = L.getNamedItem("data-anim-type") ? L.getNamedItem("data-anim-type").value : L.getNamedItem("data-bm-type") ? L.getNamedItem("data-bm-type").value : L.getNamedItem("bm-type") ? L.getNamedItem("bm-type").value : L.getNamedItem("data-bm-renderer") ? L.getNamedItem("data-bm-renderer").value : L.getNamedItem("bm-renderer") ? L.getNamedItem("bm-renderer").value : "canvas";
      var O = L.getNamedItem("data-anim-loop") ? L.getNamedItem("data-anim-loop").value : L.getNamedItem("data-bm-loop") ? L.getNamedItem("data-bm-loop").value : L.getNamedItem("bm-loop") ? L.getNamedItem("bm-loop").value : "";
      O === "false" ? k.loop = !1 : O === "true" ? k.loop = !0 : O !== "" && (k.loop = parseInt(O, 10));
      var V = L.getNamedItem("data-anim-autoplay") ? L.getNamedItem("data-anim-autoplay").value : L.getNamedItem("data-bm-autoplay") ? L.getNamedItem("data-bm-autoplay").value : !L.getNamedItem("bm-autoplay") || L.getNamedItem("bm-autoplay").value;
      k.autoplay = V !== "false", k.name = L.getNamedItem("data-name") ? L.getNamedItem("data-name").value : L.getNamedItem("data-bm-name") ? L.getNamedItem("data-bm-name").value : L.getNamedItem("bm-name") ? L.getNamedItem("bm-name").value : "", (L.getNamedItem("data-anim-prerender") ? L.getNamedItem("data-anim-prerender").value : L.getNamedItem("data-bm-prerender") ? L.getNamedItem("data-bm-prerender").value : L.getNamedItem("bm-prerender") ? L.getNamedItem("bm-prerender").value : "") === "false" && (k.prerender = !1), this.setParams(k);
    }, AnimationItem.prototype.includeLayers = function(m) {
      m.op > this.animationData.op && (this.animationData.op = m.op, this.totalFrames = Math.floor(m.op - this.animationData.ip));
      var P, k, L = this.animationData.layers, O = L.length, V = m.layers, he = V.length;
      for (k = 0; k < he; k += 1)
        for (P = 0; P < O; ) {
          if (L[P].id === V[k].id) {
            L[P] = V[k];
            break;
          }
          P += 1;
        }
      if ((m.chars || m.fonts) && (this.renderer.globalData.fontManager.addChars(m.chars), this.renderer.globalData.fontManager.addFonts(m.fonts, this.renderer.globalData.defs)), m.assets)
        for (O = m.assets.length, P = 0; P < O; P += 1)
          this.animationData.assets.push(m.assets[P]);
      this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
    }, AnimationItem.prototype.onSegmentComplete = function(m) {
      this.animationData = m;
      var P = getExpressionsPlugin();
      P && P.initExpressions(this), this.loadNextSegment();
    }, AnimationItem.prototype.loadNextSegment = function() {
      var m = this.animationData.segments;
      if (!m || m.length === 0 || !this.autoloadSegments)
        return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
      var P = m.shift();
      this.timeCompleted = P.time * this.frameRate;
      var k = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, dataManager.loadData(k, this.includeLayers.bind(this), (function() {
        this.trigger("data_failed");
      }).bind(this));
    }, AnimationItem.prototype.loadSegments = function() {
      this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, AnimationItem.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded();
    }, AnimationItem.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, AnimationItem.prototype.configAnimation = function(m) {
      if (this.renderer)
        try {
          this.animationData = m, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(m), m.assets || (m.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(m.assets), this.markers = markerParser(m.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
        } catch (P) {
          this.triggerConfigError(P);
        }
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, AnimationItem.prototype.checkLoaded = function() {
      if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
        this.isLoaded = !0;
        var m = getExpressionsPlugin();
        m && m.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
          this.trigger("DOMLoaded");
        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
      }
    }, AnimationItem.prototype.resize = function(m, P) {
      var k = typeof m == "number" ? m : void 0, L = typeof P == "number" ? P : void 0;
      this.renderer.updateContainerSize(k, L);
    }, AnimationItem.prototype.setSubframe = function(m) {
      this.isSubframeEnabled = !!m;
    }, AnimationItem.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
    }, AnimationItem.prototype.renderFrame = function() {
      if (this.isLoaded !== !1 && this.renderer)
        try {
          this.renderer.renderFrame(this.currentFrame + this.firstFrame);
        } catch (m) {
          this.triggerRenderFrameError(m);
        }
    }, AnimationItem.prototype.play = function(m) {
      m && this.name !== m || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_pause"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
    }, AnimationItem.prototype.pause = function(m) {
      m && this.name !== m || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_play"), this._idle = !0, this.trigger("_idle"), this.audioController.pause());
    }, AnimationItem.prototype.togglePause = function(m) {
      m && this.name !== m || (this.isPaused === !0 ? this.play() : this.pause());
    }, AnimationItem.prototype.stop = function(m) {
      m && this.name !== m || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
    }, AnimationItem.prototype.getMarkerData = function(m) {
      for (var P, k = 0; k < this.markers.length; k += 1)
        if ((P = this.markers[k]).payload && P.payload.name === m)
          return P;
      return null;
    }, AnimationItem.prototype.goToAndStop = function(m, P, k) {
      if (!k || this.name === k) {
        var L = Number(m);
        if (isNaN(L)) {
          var O = this.getMarkerData(m);
          O && this.goToAndStop(O.time, !0);
        } else
          P ? this.setCurrentRawFrameValue(m) : this.setCurrentRawFrameValue(m * this.frameModifier);
        this.pause();
      }
    }, AnimationItem.prototype.goToAndPlay = function(m, P, k) {
      if (!k || this.name === k) {
        var L = Number(m);
        if (isNaN(L)) {
          var O = this.getMarkerData(m);
          O && (O.duration ? this.playSegments([O.time, O.time + O.duration], !0) : this.goToAndStop(O.time, !0));
        } else
          this.goToAndStop(L, P, k);
        this.play();
      }
    }, AnimationItem.prototype.advanceTime = function(m) {
      if (this.isPaused !== !0 && this.isLoaded !== !1) {
        var P = this.currentRawFrame + m * this.frameModifier, k = !1;
        P >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? P >= this.totalFrames ? (this.playCount += 1, this.checkSegments(P % this.totalFrames) || (this.setCurrentRawFrameValue(P % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(P) : this.checkSegments(P > this.totalFrames ? P % this.totalFrames : 0) || (k = !0, P = this.totalFrames - 1) : P < 0 ? this.checkSegments(P % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && this.loop !== !0 ? (k = !0, P = 0) : (this.setCurrentRawFrameValue(this.totalFrames + P % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(P), k && (this.setCurrentRawFrameValue(P), this.pause(), this.trigger("complete"));
      }
    }, AnimationItem.prototype.adjustSegment = function(m, P) {
      this.playCount = 0, m[1] < m[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = m[0] - m[1], this.timeCompleted = this.totalFrames, this.firstFrame = m[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - P)) : m[1] > m[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = m[1] - m[0], this.timeCompleted = this.totalFrames, this.firstFrame = m[0], this.setCurrentRawFrameValue(1e-3 + P)), this.trigger("segmentStart");
    }, AnimationItem.prototype.setSegment = function(m, P) {
      var k = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < m ? k = m : this.currentRawFrame + this.firstFrame > P && (k = P - m)), this.firstFrame = m, this.totalFrames = P - m, this.timeCompleted = this.totalFrames, k !== -1 && this.goToAndStop(k, !0);
    }, AnimationItem.prototype.playSegments = function(m, P) {
      if (P && (this.segments.length = 0), _typeof$4(m[0]) === "object") {
        var k, L = m.length;
        for (k = 0; k < L; k += 1)
          this.segments.push(m[k]);
      } else
        this.segments.push(m);
      this.segments.length && P && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, AnimationItem.prototype.resetSegments = function(m) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), m && this.checkSegments(0);
    }, AnimationItem.prototype.checkSegments = function(m) {
      return !!this.segments.length && (this.adjustSegment(this.segments.shift(), m), !0);
    }, AnimationItem.prototype.destroy = function(m) {
      m && this.name !== m || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null);
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(m) {
      this.currentRawFrame = m, this.gotoFrame();
    }, AnimationItem.prototype.setSpeed = function(m) {
      this.playSpeed = m, this.updaFrameModifier();
    }, AnimationItem.prototype.setDirection = function(m) {
      this.playDirection = m < 0 ? -1 : 1, this.updaFrameModifier();
    }, AnimationItem.prototype.setLoop = function(m) {
      this.loop = m;
    }, AnimationItem.prototype.setVolume = function(m, P) {
      P && this.name !== P || this.audioController.setVolume(m);
    }, AnimationItem.prototype.getVolume = function() {
      return this.audioController.getVolume();
    }, AnimationItem.prototype.mute = function(m) {
      m && this.name !== m || this.audioController.mute();
    }, AnimationItem.prototype.unmute = function(m) {
      m && this.name !== m || this.audioController.unmute();
    }, AnimationItem.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
    }, AnimationItem.prototype.getPath = function() {
      return this.path;
    }, AnimationItem.prototype.getAssetsPath = function(m) {
      var P = "";
      if (m.e)
        P = m.p;
      else if (this.assetsPath) {
        var k = m.p;
        k.indexOf("images/") !== -1 && (k = k.split("/")[1]), P = this.assetsPath + k;
      } else
        P = this.path, P += m.u ? m.u : "", P += m.p;
      return P;
    }, AnimationItem.prototype.getAssetData = function(m) {
      for (var P = 0, k = this.assets.length; P < k; ) {
        if (m === this.assets[P].id)
          return this.assets[P];
        P += 1;
      }
      return null;
    }, AnimationItem.prototype.hide = function() {
      this.renderer.hide();
    }, AnimationItem.prototype.show = function() {
      this.renderer.show();
    }, AnimationItem.prototype.getDuration = function(m) {
      return m ? this.totalFrames : this.totalFrames / this.frameRate;
    }, AnimationItem.prototype.updateDocumentData = function(m, P, k) {
      try {
        this.renderer.getElementByPath(m).updateDocumentData(P, k);
      } catch {
      }
    }, AnimationItem.prototype.trigger = function(m) {
      if (this._cbs && this._cbs[m])
        switch (m) {
          case "enterFrame":
            this.triggerEvent(m, new BMEnterFrameEvent(m, this.currentFrame, this.totalFrames, this.frameModifier));
            break;
          case "drawnFrame":
            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(m, this.drawnFrameEvent);
            break;
          case "loopComplete":
            this.triggerEvent(m, new BMCompleteLoopEvent(m, this.loop, this.playCount, this.frameMult));
            break;
          case "complete":
            this.triggerEvent(m, new BMCompleteEvent(m, this.frameMult));
            break;
          case "segmentStart":
            this.triggerEvent(m, new BMSegmentStartEvent(m, this.firstFrame, this.totalFrames));
            break;
          case "destroy":
            this.triggerEvent(m, new BMDestroyEvent(m, this));
            break;
          default:
            this.triggerEvent(m);
        }
      m === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(m, this.currentFrame, this.totalFrames, this.frameMult)), m === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(m, this.loop, this.playCount, this.frameMult)), m === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(m, this.frameMult)), m === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(m, this.firstFrame, this.totalFrames)), m === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(m, this));
    }, AnimationItem.prototype.triggerRenderFrameError = function(m) {
      var P = new BMRenderFrameErrorEvent(m, this.currentFrame);
      this.triggerEvent("error", P), this.onError && this.onError.call(this, P);
    }, AnimationItem.prototype.triggerConfigError = function(m) {
      var P = new BMConfigErrorEvent(m, this.currentFrame);
      this.triggerEvent("error", P), this.onError && this.onError.call(this, P);
    };
    var animationManager = function() {
      var m = {}, P = [], k = 0, L = 0, O = 0, V = !0, he = !1;
      function K(fe) {
        for (var Q = 0, ue = fe.target; Q < L; )
          P[Q].animation === ue && (P.splice(Q, 1), Q -= 1, L -= 1, ue.isPaused || pe()), Q += 1;
      }
      function de(fe, Q) {
        if (!fe)
          return null;
        for (var ue = 0; ue < L; ) {
          if (P[ue].elem === fe && P[ue].elem !== null)
            return P[ue].animation;
          ue += 1;
        }
        var me = new AnimationItem();
        return B(me, fe), me.setData(fe, Q), me;
      }
      function ce() {
        O += 1, ie();
      }
      function pe() {
        O -= 1;
      }
      function B(fe, Q) {
        fe.addEventListener("destroy", K), fe.addEventListener("_active", ce), fe.addEventListener("_idle", pe), P.push({ elem: Q, animation: fe }), L += 1;
      }
      function G(fe) {
        var Q, ue = fe - k;
        for (Q = 0; Q < L; Q += 1)
          P[Q].animation.advanceTime(ue);
        k = fe, O && !he ? window.requestAnimationFrame(G) : V = !0;
      }
      function $(fe) {
        k = fe, window.requestAnimationFrame(G);
      }
      function ie() {
        !he && O && V && (window.requestAnimationFrame($), V = !1);
      }
      return m.registerAnimation = de, m.loadAnimation = function(fe) {
        var Q = new AnimationItem();
        return B(Q, null), Q.setParams(fe), Q;
      }, m.setSpeed = function(fe, Q) {
        var ue;
        for (ue = 0; ue < L; ue += 1)
          P[ue].animation.setSpeed(fe, Q);
      }, m.setDirection = function(fe, Q) {
        var ue;
        for (ue = 0; ue < L; ue += 1)
          P[ue].animation.setDirection(fe, Q);
      }, m.play = function(fe) {
        var Q;
        for (Q = 0; Q < L; Q += 1)
          P[Q].animation.play(fe);
      }, m.pause = function(fe) {
        var Q;
        for (Q = 0; Q < L; Q += 1)
          P[Q].animation.pause(fe);
      }, m.stop = function(fe) {
        var Q;
        for (Q = 0; Q < L; Q += 1)
          P[Q].animation.stop(fe);
      }, m.togglePause = function(fe) {
        var Q;
        for (Q = 0; Q < L; Q += 1)
          P[Q].animation.togglePause(fe);
      }, m.searchAnimations = function(fe, Q, ue) {
        var me, ge = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), ve = ge.length;
        for (me = 0; me < ve; me += 1)
          ue && ge[me].setAttribute("data-bm-type", ue), de(ge[me], fe);
        if (Q && ve === 0) {
          ue || (ue = "svg");
          var _e = document.getElementsByTagName("body")[0];
          _e.innerText = "";
          var Te = createTag("div");
          Te.style.width = "100%", Te.style.height = "100%", Te.setAttribute("data-bm-type", ue), _e.appendChild(Te), de(Te, fe);
        }
      }, m.resize = function() {
        var fe;
        for (fe = 0; fe < L; fe += 1)
          P[fe].animation.resize();
      }, m.goToAndStop = function(fe, Q, ue) {
        var me;
        for (me = 0; me < L; me += 1)
          P[me].animation.goToAndStop(fe, Q, ue);
      }, m.destroy = function(fe) {
        var Q;
        for (Q = L - 1; Q >= 0; Q -= 1)
          P[Q].animation.destroy(fe);
      }, m.freeze = function() {
        he = !0;
      }, m.unfreeze = function() {
        he = !1, ie();
      }, m.setVolume = function(fe, Q) {
        var ue;
        for (ue = 0; ue < L; ue += 1)
          P[ue].animation.setVolume(fe, Q);
      }, m.mute = function(fe) {
        var Q;
        for (Q = 0; Q < L; Q += 1)
          P[Q].animation.mute(fe);
      }, m.unmute = function(fe) {
        var Q;
        for (Q = 0; Q < L; Q += 1)
          P[Q].animation.unmute(fe);
      }, m.getRegisteredAnimations = function() {
        var fe, Q = P.length, ue = [];
        for (fe = 0; fe < Q; fe += 1)
          ue.push(P[fe].animation);
        return ue;
      }, m;
    }(), BezierFactory = function() {
      var m = { getBezierEasing: function(ce, pe, B, G, $) {
        var ie = $ || ("bez_" + ce + "_" + pe + "_" + B + "_" + G).replace(/\./g, "p");
        if (P[ie])
          return P[ie];
        var fe = new de([ce, pe, B, G]);
        return P[ie] = fe, fe;
      } }, P = {}, k = typeof Float32Array == "function";
      function L(ce, pe) {
        return 1 - 3 * pe + 3 * ce;
      }
      function O(ce, pe) {
        return 3 * pe - 6 * ce;
      }
      function V(ce) {
        return 3 * ce;
      }
      function he(ce, pe, B) {
        return ((L(pe, B) * ce + O(pe, B)) * ce + V(pe)) * ce;
      }
      function K(ce, pe, B) {
        return 3 * L(pe, B) * ce * ce + 2 * O(pe, B) * ce + V(pe);
      }
      function de(ce) {
        this._p = ce, this._mSampleValues = k ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this);
      }
      return de.prototype = { get: function(ce) {
        var pe = this._p[0], B = this._p[1], G = this._p[2], $ = this._p[3];
        return this._precomputed || this._precompute(), pe === B && G === $ ? ce : ce === 0 ? 0 : ce === 1 ? 1 : he(this._getTForX(ce), B, $);
      }, _precompute: function() {
        var ce = this._p[0], pe = this._p[1], B = this._p[2], G = this._p[3];
        this._precomputed = !0, ce === pe && B === G || this._calcSampleValues();
      }, _calcSampleValues: function() {
        for (var ce = this._p[0], pe = this._p[2], B = 0; B < 11; ++B)
          this._mSampleValues[B] = he(0.1 * B, ce, pe);
      }, _getTForX: function(ce) {
        for (var pe = this._p[0], B = this._p[2], G = this._mSampleValues, $ = 0, ie = 1; ie !== 10 && G[ie] <= ce; ++ie)
          $ += 0.1;
        var fe = $ + 0.1 * ((ce - G[--ie]) / (G[ie + 1] - G[ie])), Q = K(fe, pe, B);
        return Q >= 1e-3 ? function(ue, me, ge, ve) {
          for (var _e = 0; _e < 4; ++_e) {
            var Te = K(me, ge, ve);
            if (Te === 0)
              return me;
            me -= (he(me, ge, ve) - ue) / Te;
          }
          return me;
        }(ce, fe, pe, B) : Q === 0 ? fe : function(ue, me, ge, ve, _e) {
          var Te, Ce, Ae = 0;
          do
            (Te = he(Ce = me + (ge - me) / 2, ve, _e) - ue) > 0 ? ge = Ce : me = Ce;
          while (Math.abs(Te) > 1e-7 && ++Ae < 10);
          return Ce;
        }(ce, $, $ + 0.1, pe, B);
      } }, m;
    }(), pooling = { double: function(m) {
      return m.concat(createSizedArray(m.length));
    } }, poolFactory = function(m, P, k) {
      var L = 0, O = m, V = createSizedArray(O);
      return { newElement: function() {
        return L ? V[L -= 1] : P();
      }, release: function(he) {
        L === O && (V = pooling.double(V), O *= 2), k && k(he), V[L] = he, L += 1;
      } };
    }, bezierLengthPool = poolFactory(8, function() {
      return { addedLength: 0, percents: createTypedArray("float32", getDefaultCurveSegments()), lengths: createTypedArray("float32", getDefaultCurveSegments()) };
    }), segmentsLengthPool = poolFactory(8, function() {
      return { lengths: [], totalLength: 0 };
    }, function(m) {
      var P, k = m.lengths.length;
      for (P = 0; P < k; P += 1)
        bezierLengthPool.release(m.lengths[P]);
      m.lengths.length = 0;
    });
    function bezFunction() {
      var m = Math;
      function P(ce, pe, B, G, $, ie) {
        var fe = ce * G + pe * $ + B * ie - $ * G - ie * ce - B * pe;
        return fe > -1e-3 && fe < 1e-3;
      }
      var k = function(ce, pe, B, G) {
        var $, ie, fe, Q, ue, me, ge = getDefaultCurveSegments(), ve = 0, _e = [], Te = [], Ce = bezierLengthPool.newElement();
        for (fe = B.length, $ = 0; $ < ge; $ += 1) {
          for (ue = $ / (ge - 1), me = 0, ie = 0; ie < fe; ie += 1)
            Q = bmPow(1 - ue, 3) * ce[ie] + 3 * bmPow(1 - ue, 2) * ue * B[ie] + 3 * (1 - ue) * bmPow(ue, 2) * G[ie] + bmPow(ue, 3) * pe[ie], _e[ie] = Q, Te[ie] !== null && (me += bmPow(_e[ie] - Te[ie], 2)), Te[ie] = _e[ie];
          me && (ve += me = bmSqrt(me)), Ce.percents[$] = ue, Ce.lengths[$] = ve;
        }
        return Ce.addedLength = ve, Ce;
      };
      function L(ce) {
        this.segmentLength = 0, this.points = new Array(ce);
      }
      function O(ce, pe) {
        this.partialLength = ce, this.point = pe;
      }
      var V, he = (V = {}, function(ce, pe, B, G) {
        var $ = (ce[0] + "_" + ce[1] + "_" + pe[0] + "_" + pe[1] + "_" + B[0] + "_" + B[1] + "_" + G[0] + "_" + G[1]).replace(/\./g, "p");
        if (!V[$]) {
          var ie, fe, Q, ue, me, ge, ve, _e = getDefaultCurveSegments(), Te = 0, Ce = null;
          ce.length === 2 && (ce[0] !== pe[0] || ce[1] !== pe[1]) && P(ce[0], ce[1], pe[0], pe[1], ce[0] + B[0], ce[1] + B[1]) && P(ce[0], ce[1], pe[0], pe[1], pe[0] + G[0], pe[1] + G[1]) && (_e = 2);
          var Ae = new L(_e);
          for (Q = B.length, ie = 0; ie < _e; ie += 1) {
            for (ve = createSizedArray(Q), me = ie / (_e - 1), ge = 0, fe = 0; fe < Q; fe += 1)
              ue = bmPow(1 - me, 3) * ce[fe] + 3 * bmPow(1 - me, 2) * me * (ce[fe] + B[fe]) + 3 * (1 - me) * bmPow(me, 2) * (pe[fe] + G[fe]) + bmPow(me, 3) * pe[fe], ve[fe] = ue, Ce !== null && (ge += bmPow(ve[fe] - Ce[fe], 2));
            Te += ge = bmSqrt(ge), Ae.points[ie] = new O(ge, ve), Ce = ve;
          }
          Ae.segmentLength = Te, V[$] = Ae;
        }
        return V[$];
      });
      function K(ce, pe) {
        var B = pe.percents, G = pe.lengths, $ = B.length, ie = bmFloor(($ - 1) * ce), fe = ce * pe.addedLength, Q = 0;
        if (ie === $ - 1 || ie === 0 || fe === G[ie])
          return B[ie];
        for (var ue = G[ie] > fe ? -1 : 1, me = !0; me; )
          if (G[ie] <= fe && G[ie + 1] > fe ? (Q = (fe - G[ie]) / (G[ie + 1] - G[ie]), me = !1) : ie += ue, ie < 0 || ie >= $ - 1) {
            if (ie === $ - 1)
              return B[ie];
            me = !1;
          }
        return B[ie] + (B[ie + 1] - B[ie]) * Q;
      }
      var de = createTypedArray("float32", 8);
      return { getSegmentsLength: function(ce) {
        var pe, B = segmentsLengthPool.newElement(), G = ce.c, $ = ce.v, ie = ce.o, fe = ce.i, Q = ce._length, ue = B.lengths, me = 0;
        for (pe = 0; pe < Q - 1; pe += 1)
          ue[pe] = k($[pe], $[pe + 1], ie[pe], fe[pe + 1]), me += ue[pe].addedLength;
        return G && Q && (ue[pe] = k($[pe], $[0], ie[pe], fe[0]), me += ue[pe].addedLength), B.totalLength = me, B;
      }, getNewSegment: function(ce, pe, B, G, $, ie, fe) {
        $ < 0 ? $ = 0 : $ > 1 && ($ = 1);
        var Q, ue = K($, fe), me = K(ie = ie > 1 ? 1 : ie, fe), ge = ce.length, ve = 1 - ue, _e = 1 - me, Te = ve * ve * ve, Ce = ue * ve * ve * 3, Ae = ue * ue * ve * 3, Ie = ue * ue * ue, Me = ve * ve * _e, ke = ue * ve * _e + ve * ue * _e + ve * ve * me, at = ue * ue * _e + ve * ue * me + ue * ve * me, st = ue * ue * me, Ue = ve * _e * _e, lt = ue * _e * _e + ve * me * _e + ve * _e * me, ut = ue * me * _e + ve * me * me + ue * _e * me, Oe = ue * me * me, we = _e * _e * _e, ht = me * _e * _e + _e * me * _e + _e * _e * me, mt = me * me * _e + _e * me * me + me * _e * me, Et = me * me * me;
        for (Q = 0; Q < ge; Q += 1)
          de[4 * Q] = m.round(1e3 * (Te * ce[Q] + Ce * B[Q] + Ae * G[Q] + Ie * pe[Q])) / 1e3, de[4 * Q + 1] = m.round(1e3 * (Me * ce[Q] + ke * B[Q] + at * G[Q] + st * pe[Q])) / 1e3, de[4 * Q + 2] = m.round(1e3 * (Ue * ce[Q] + lt * B[Q] + ut * G[Q] + Oe * pe[Q])) / 1e3, de[4 * Q + 3] = m.round(1e3 * (we * ce[Q] + ht * B[Q] + mt * G[Q] + Et * pe[Q])) / 1e3;
        return de;
      }, getPointInSegment: function(ce, pe, B, G, $, ie) {
        var fe = K($, ie), Q = 1 - fe;
        return [m.round(1e3 * (Q * Q * Q * ce[0] + (fe * Q * Q + Q * fe * Q + Q * Q * fe) * B[0] + (fe * fe * Q + Q * fe * fe + fe * Q * fe) * G[0] + fe * fe * fe * pe[0])) / 1e3, m.round(1e3 * (Q * Q * Q * ce[1] + (fe * Q * Q + Q * fe * Q + Q * Q * fe) * B[1] + (fe * fe * Q + Q * fe * fe + fe * Q * fe) * G[1] + fe * fe * fe * pe[1])) / 1e3];
      }, buildBezierData: he, pointOnLine2D: P, pointOnLine3D: function(ce, pe, B, G, $, ie, fe, Q, ue) {
        if (B === 0 && ie === 0 && ue === 0)
          return P(ce, pe, G, $, fe, Q);
        var me, ge = m.sqrt(m.pow(G - ce, 2) + m.pow($ - pe, 2) + m.pow(ie - B, 2)), ve = m.sqrt(m.pow(fe - ce, 2) + m.pow(Q - pe, 2) + m.pow(ue - B, 2)), _e = m.sqrt(m.pow(fe - G, 2) + m.pow(Q - $, 2) + m.pow(ue - ie, 2));
        return (me = ge > ve ? ge > _e ? ge - ve - _e : _e - ve - ge : _e > ve ? _e - ve - ge : ve - ge - _e) > -1e-4 && me < 1e-4;
      } };
    }
    var bez = bezFunction(), PropertyFactory = function() {
      var m = initialDefaultFrame, P = Math.abs;
      function k(G, $) {
        var ie, fe = this.offsetTime;
        this.propType === "multidimensional" && (ie = createTypedArray("float32", this.pv.length));
        for (var Q, ue, me, ge, ve, _e, Te, Ce, Ae, Ie = $.lastIndex, Me = Ie, ke = this.keyframes.length - 1, at = !0; at; ) {
          if (Q = this.keyframes[Me], ue = this.keyframes[Me + 1], Me === ke - 1 && G >= ue.t - fe) {
            Q.h && (Q = ue), Ie = 0;
            break;
          }
          if (ue.t - fe > G) {
            Ie = Me;
            break;
          }
          Me < ke - 1 ? Me += 1 : (Ie = 0, at = !1);
        }
        me = this.keyframesMetadata[Me] || {};
        var st, Ue = ue.t - fe, lt = Q.t - fe;
        if (Q.to) {
          me.bezierData || (me.bezierData = bez.buildBezierData(Q.s, ue.s || Q.e, Q.to, Q.ti));
          var ut = me.bezierData;
          if (G >= Ue || G < lt) {
            var Oe = G >= Ue ? ut.points.length - 1 : 0;
            for (ve = ut.points[Oe].point.length, ge = 0; ge < ve; ge += 1)
              ie[ge] = ut.points[Oe].point[ge];
          } else {
            me.__fnct ? Ae = me.__fnct : (Ae = BezierFactory.getBezierEasing(Q.o.x, Q.o.y, Q.i.x, Q.i.y, Q.n).get, me.__fnct = Ae), _e = Ae((G - lt) / (Ue - lt));
            var we, ht = ut.segmentLength * _e, mt = $.lastFrame < G && $._lastKeyframeIndex === Me ? $._lastAddedLength : 0;
            for (Ce = $.lastFrame < G && $._lastKeyframeIndex === Me ? $._lastPoint : 0, at = !0, Te = ut.points.length; at; ) {
              if (mt += ut.points[Ce].partialLength, ht === 0 || _e === 0 || Ce === ut.points.length - 1) {
                for (ve = ut.points[Ce].point.length, ge = 0; ge < ve; ge += 1)
                  ie[ge] = ut.points[Ce].point[ge];
                break;
              }
              if (ht >= mt && ht < mt + ut.points[Ce + 1].partialLength) {
                for (we = (ht - mt) / ut.points[Ce + 1].partialLength, ve = ut.points[Ce].point.length, ge = 0; ge < ve; ge += 1)
                  ie[ge] = ut.points[Ce].point[ge] + (ut.points[Ce + 1].point[ge] - ut.points[Ce].point[ge]) * we;
                break;
              }
              Ce < Te - 1 ? Ce += 1 : at = !1;
            }
            $._lastPoint = Ce, $._lastAddedLength = mt - ut.points[Ce].partialLength, $._lastKeyframeIndex = Me;
          }
        } else {
          var Et, Mt, _t, ft, yt;
          if (ke = Q.s.length, st = ue.s || Q.e, this.sh && Q.h !== 1)
            G >= Ue ? (ie[0] = st[0], ie[1] = st[1], ie[2] = st[2]) : G <= lt ? (ie[0] = Q.s[0], ie[1] = Q.s[1], ie[2] = Q.s[2]) : function(gt, xt) {
              var bt = xt[0], wt = xt[1], At = xt[2], jt = xt[3], kt = Math.atan2(2 * wt * jt - 2 * bt * At, 1 - 2 * wt * wt - 2 * At * At), dt = Math.asin(2 * bt * wt + 2 * At * jt), Ot = Math.atan2(2 * bt * jt - 2 * wt * At, 1 - 2 * bt * bt - 2 * At * At);
              gt[0] = kt / degToRads, gt[1] = dt / degToRads, gt[2] = Ot / degToRads;
            }(ie, function(gt, xt, bt) {
              var wt, At, jt, kt, dt, Ot = [], $t = gt[0], Gt = gt[1], Ht = gt[2], Bt = gt[3], Ft = xt[0], Rt = xt[1], Vt = xt[2], Lt = xt[3];
              return (At = $t * Ft + Gt * Rt + Ht * Vt + Bt * Lt) < 0 && (At = -At, Ft = -Ft, Rt = -Rt, Vt = -Vt, Lt = -Lt), 1 - At > 1e-6 ? (wt = Math.acos(At), jt = Math.sin(wt), kt = Math.sin((1 - bt) * wt) / jt, dt = Math.sin(bt * wt) / jt) : (kt = 1 - bt, dt = bt), Ot[0] = kt * $t + dt * Ft, Ot[1] = kt * Gt + dt * Rt, Ot[2] = kt * Ht + dt * Vt, Ot[3] = kt * Bt + dt * Lt, Ot;
            }(L(Q.s), L(st), (G - lt) / (Ue - lt)));
          else
            for (Me = 0; Me < ke; Me += 1)
              Q.h !== 1 && (G >= Ue ? _e = 1 : G < lt ? _e = 0 : (Q.o.x.constructor === Array ? (me.__fnct || (me.__fnct = []), me.__fnct[Me] ? Ae = me.__fnct[Me] : (Et = Q.o.x[Me] === void 0 ? Q.o.x[0] : Q.o.x[Me], Mt = Q.o.y[Me] === void 0 ? Q.o.y[0] : Q.o.y[Me], _t = Q.i.x[Me] === void 0 ? Q.i.x[0] : Q.i.x[Me], ft = Q.i.y[Me] === void 0 ? Q.i.y[0] : Q.i.y[Me], Ae = BezierFactory.getBezierEasing(Et, Mt, _t, ft).get, me.__fnct[Me] = Ae)) : me.__fnct ? Ae = me.__fnct : (Et = Q.o.x, Mt = Q.o.y, _t = Q.i.x, ft = Q.i.y, Ae = BezierFactory.getBezierEasing(Et, Mt, _t, ft).get, Q.keyframeMetadata = Ae), _e = Ae((G - lt) / (Ue - lt)))), st = ue.s || Q.e, yt = Q.h === 1 ? Q.s[Me] : Q.s[Me] + (st[Me] - Q.s[Me]) * _e, this.propType === "multidimensional" ? ie[Me] = yt : ie = yt;
        }
        return $.lastIndex = Ie, ie;
      }
      function L(G) {
        var $ = G[0] * degToRads, ie = G[1] * degToRads, fe = G[2] * degToRads, Q = Math.cos($ / 2), ue = Math.cos(ie / 2), me = Math.cos(fe / 2), ge = Math.sin($ / 2), ve = Math.sin(ie / 2), _e = Math.sin(fe / 2);
        return [ge * ve * me + Q * ue * _e, ge * ue * me + Q * ve * _e, Q * ve * me - ge * ue * _e, Q * ue * me - ge * ve * _e];
      }
      function O() {
        var G = this.comp.renderedFrame - this.offsetTime, $ = this.keyframes[0].t - this.offsetTime, ie = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
        if (!(G === this._caching.lastFrame || this._caching.lastFrame !== m && (this._caching.lastFrame >= ie && G >= ie || this._caching.lastFrame < $ && G < $))) {
          this._caching.lastFrame >= G && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
          var fe = this.interpolateValue(G, this._caching);
          this.pv = fe;
        }
        return this._caching.lastFrame = G, this.pv;
      }
      function V(G) {
        var $;
        if (this.propType === "unidimensional")
          $ = G * this.mult, P(this.v - $) > 1e-5 && (this.v = $, this._mdf = !0);
        else
          for (var ie = 0, fe = this.v.length; ie < fe; )
            $ = G[ie] * this.mult, P(this.v[ie] - $) > 1e-5 && (this.v[ie] = $, this._mdf = !0), ie += 1;
      }
      function he() {
        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
          if (this.lock)
            this.setVValue(this.pv);
          else {
            var G;
            this.lock = !0, this._mdf = this._isFirstFrame;
            var $ = this.effectsSequence.length, ie = this.kf ? this.pv : this.data.k;
            for (G = 0; G < $; G += 1)
              ie = this.effectsSequence[G](ie);
            this.setVValue(ie), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
          }
      }
      function K(G) {
        this.effectsSequence.push(G), this.container.addDynamicProperty(this);
      }
      function de(G, $, ie, fe) {
        this.propType = "unidimensional", this.mult = ie || 1, this.data = $, this.v = ie ? $.k * ie : $.k, this.pv = $.k, this._mdf = !1, this.elem = G, this.container = fe, this.comp = G.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = he, this.setVValue = V, this.addEffect = K;
      }
      function ce(G, $, ie, fe) {
        var Q;
        this.propType = "multidimensional", this.mult = ie || 1, this.data = $, this._mdf = !1, this.elem = G, this.container = fe, this.comp = G.comp, this.k = !1, this.kf = !1, this.frameId = -1;
        var ue = $.k.length;
        for (this.v = createTypedArray("float32", ue), this.pv = createTypedArray("float32", ue), this.vel = createTypedArray("float32", ue), Q = 0; Q < ue; Q += 1)
          this.v[Q] = $.k[Q] * this.mult, this.pv[Q] = $.k[Q];
        this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = he, this.setVValue = V, this.addEffect = K;
      }
      function pe(G, $, ie, fe) {
        this.propType = "unidimensional", this.keyframes = $.k, this.keyframesMetadata = [], this.offsetTime = G.data.st, this.frameId = -1, this._caching = { lastFrame: m, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = !0, this.kf = !0, this.data = $, this.mult = ie || 1, this.elem = G, this.container = fe, this.comp = G.comp, this.v = m, this.pv = m, this._isFirstFrame = !0, this.getValue = he, this.setVValue = V, this.interpolateValue = k, this.effectsSequence = [O.bind(this)], this.addEffect = K;
      }
      function B(G, $, ie, fe) {
        var Q;
        this.propType = "multidimensional";
        var ue, me, ge, ve, _e = $.k.length;
        for (Q = 0; Q < _e - 1; Q += 1)
          $.k[Q].to && $.k[Q].s && $.k[Q + 1] && $.k[Q + 1].s && (ue = $.k[Q].s, me = $.k[Q + 1].s, ge = $.k[Q].to, ve = $.k[Q].ti, (ue.length === 2 && (ue[0] !== me[0] || ue[1] !== me[1]) && bez.pointOnLine2D(ue[0], ue[1], me[0], me[1], ue[0] + ge[0], ue[1] + ge[1]) && bez.pointOnLine2D(ue[0], ue[1], me[0], me[1], me[0] + ve[0], me[1] + ve[1]) || ue.length === 3 && (ue[0] !== me[0] || ue[1] !== me[1] || ue[2] !== me[2]) && bez.pointOnLine3D(ue[0], ue[1], ue[2], me[0], me[1], me[2], ue[0] + ge[0], ue[1] + ge[1], ue[2] + ge[2]) && bez.pointOnLine3D(ue[0], ue[1], ue[2], me[0], me[1], me[2], me[0] + ve[0], me[1] + ve[1], me[2] + ve[2])) && ($.k[Q].to = null, $.k[Q].ti = null), ue[0] === me[0] && ue[1] === me[1] && ge[0] === 0 && ge[1] === 0 && ve[0] === 0 && ve[1] === 0 && (ue.length === 2 || ue[2] === me[2] && ge[2] === 0 && ve[2] === 0) && ($.k[Q].to = null, $.k[Q].ti = null));
        this.effectsSequence = [O.bind(this)], this.data = $, this.keyframes = $.k, this.keyframesMetadata = [], this.offsetTime = G.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = ie || 1, this.elem = G, this.container = fe, this.comp = G.comp, this.getValue = he, this.setVValue = V, this.interpolateValue = k, this.frameId = -1;
        var Te = $.k[0].s.length;
        for (this.v = createTypedArray("float32", Te), this.pv = createTypedArray("float32", Te), Q = 0; Q < Te; Q += 1)
          this.v[Q] = m, this.pv[Q] = m;
        this._caching = { lastFrame: m, lastIndex: 0, value: createTypedArray("float32", Te) }, this.addEffect = K;
      }
      return { getProp: function(G, $, ie, fe, Q) {
        var ue;
        if ($.k.length)
          if (typeof $.k[0] == "number")
            ue = new ce(G, $, fe, Q);
          else
            switch (ie) {
              case 0:
                ue = new pe(G, $, fe, Q);
                break;
              case 1:
                ue = new B(G, $, fe, Q);
            }
        else
          ue = new de(G, $, fe, Q);
        return ue.effectsSequence.length && Q.addDynamicProperty(ue), ue;
      } };
    }();
    function DynamicPropertyContainer() {
    }
    DynamicPropertyContainer.prototype = { addDynamicProperty: function(m) {
      this.dynamicProperties.indexOf(m) === -1 && (this.dynamicProperties.push(m), this.container.addDynamicProperty(this), this._isAnimated = !0);
    }, iterateDynamicProperties: function() {
      var m;
      this._mdf = !1;
      var P = this.dynamicProperties.length;
      for (m = 0; m < P; m += 1)
        this.dynamicProperties[m].getValue(), this.dynamicProperties[m]._mdf && (this._mdf = !0);
    }, initDynamicPropertyContainer: function(m) {
      this.container = m, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
    } };
    var pointPool = poolFactory(8, function() {
      return createTypedArray("float32", 2);
    });
    function ShapePath() {
      this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
    }
    ShapePath.prototype.setPathData = function(m, P) {
      this.c = m, this.setLength(P);
      for (var k = 0; k < P; )
        this.v[k] = pointPool.newElement(), this.o[k] = pointPool.newElement(), this.i[k] = pointPool.newElement(), k += 1;
    }, ShapePath.prototype.setLength = function(m) {
      for (; this._maxLength < m; )
        this.doubleArrayLength();
      this._length = m;
    }, ShapePath.prototype.doubleArrayLength = function() {
      this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
    }, ShapePath.prototype.setXYAt = function(m, P, k, L, O) {
      var V;
      switch (this._length = Math.max(this._length, L + 1), this._length >= this._maxLength && this.doubleArrayLength(), k) {
        case "v":
          V = this.v;
          break;
        case "i":
          V = this.i;
          break;
        case "o":
          V = this.o;
          break;
        default:
          V = [];
      }
      (!V[L] || V[L] && !O) && (V[L] = pointPool.newElement()), V[L][0] = m, V[L][1] = P;
    }, ShapePath.prototype.setTripleAt = function(m, P, k, L, O, V, he, K) {
      this.setXYAt(m, P, "v", he, K), this.setXYAt(k, L, "o", he, K), this.setXYAt(O, V, "i", he, K);
    }, ShapePath.prototype.reverse = function() {
      var m = new ShapePath();
      m.setPathData(this.c, this._length);
      var P = this.v, k = this.o, L = this.i, O = 0;
      this.c && (m.setTripleAt(P[0][0], P[0][1], L[0][0], L[0][1], k[0][0], k[0][1], 0, !1), O = 1);
      var V, he = this._length - 1, K = this._length;
      for (V = O; V < K; V += 1)
        m.setTripleAt(P[he][0], P[he][1], L[he][0], L[he][1], k[he][0], k[he][1], V, !1), he -= 1;
      return m;
    }, ShapePath.prototype.length = function() {
      return this._length;
    };
    var shapePool = (factory = poolFactory(4, function() {
      return new ShapePath();
    }, function(m) {
      var P, k = m._length;
      for (P = 0; P < k; P += 1)
        pointPool.release(m.v[P]), pointPool.release(m.i[P]), pointPool.release(m.o[P]), m.v[P] = null, m.i[P] = null, m.o[P] = null;
      m._length = 0, m.c = !1;
    }), factory.clone = function(m) {
      var P, k = factory.newElement(), L = m._length === void 0 ? m.v.length : m._length;
      for (k.setLength(L), k.c = m.c, P = 0; P < L; P += 1)
        k.setTripleAt(m.v[P][0], m.v[P][1], m.o[P][0], m.o[P][1], m.i[P][0], m.i[P][1], P);
      return k;
    }, factory), factory;
    function ShapeCollection() {
      this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
    }
    ShapeCollection.prototype.addShape = function(m) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = m, this._length += 1;
    }, ShapeCollection.prototype.releaseShapes = function() {
      var m;
      for (m = 0; m < this._length; m += 1)
        shapePool.release(this.shapes[m]);
      this._length = 0;
    };
    var shapeCollectionPool = (ob = { newShapeCollection: function() {
      return _length ? pool[_length -= 1] : new ShapeCollection();
    }, release: function(m) {
      var P, k = m._length;
      for (P = 0; P < k; P += 1)
        shapePool.release(m.shapes[P]);
      m._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = m, _length += 1;
    } }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob), ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
      function m(G, $, ie) {
        var fe, Q, ue, me, ge, ve, _e, Te, Ce, Ae = ie.lastIndex, Ie = this.keyframes;
        if (G < Ie[0].t - this.offsetTime)
          fe = Ie[0].s[0], ue = !0, Ae = 0;
        else if (G >= Ie[Ie.length - 1].t - this.offsetTime)
          fe = Ie[Ie.length - 1].s ? Ie[Ie.length - 1].s[0] : Ie[Ie.length - 2].e[0], ue = !0;
        else {
          for (var Me, ke, at, st = Ae, Ue = Ie.length - 1, lt = !0; lt && (Me = Ie[st], !((ke = Ie[st + 1]).t - this.offsetTime > G)); )
            st < Ue - 1 ? st += 1 : lt = !1;
          if (at = this.keyframesMetadata[st] || {}, Ae = st, !(ue = Me.h === 1)) {
            if (G >= ke.t - this.offsetTime)
              Te = 1;
            else if (G < Me.t - this.offsetTime)
              Te = 0;
            else {
              var ut;
              at.__fnct ? ut = at.__fnct : (ut = BezierFactory.getBezierEasing(Me.o.x, Me.o.y, Me.i.x, Me.i.y).get, at.__fnct = ut), Te = ut((G - (Me.t - this.offsetTime)) / (ke.t - this.offsetTime - (Me.t - this.offsetTime)));
            }
            Q = ke.s ? ke.s[0] : Me.e[0];
          }
          fe = Me.s[0];
        }
        for (ve = $._length, _e = fe.i[0].length, ie.lastIndex = Ae, me = 0; me < ve; me += 1)
          for (ge = 0; ge < _e; ge += 1)
            Ce = ue ? fe.i[me][ge] : fe.i[me][ge] + (Q.i[me][ge] - fe.i[me][ge]) * Te, $.i[me][ge] = Ce, Ce = ue ? fe.o[me][ge] : fe.o[me][ge] + (Q.o[me][ge] - fe.o[me][ge]) * Te, $.o[me][ge] = Ce, Ce = ue ? fe.v[me][ge] : fe.v[me][ge] + (Q.v[me][ge] - fe.v[me][ge]) * Te, $.v[me][ge] = Ce;
      }
      function P() {
        var G = this.comp.renderedFrame - this.offsetTime, $ = this.keyframes[0].t - this.offsetTime, ie = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, fe = this._caching.lastFrame;
        return fe !== -999999 && (fe < $ && G < $ || fe > ie && G > ie) || (this._caching.lastIndex = fe < G ? this._caching.lastIndex : 0, this.interpolateShape(G, this.pv, this._caching)), this._caching.lastFrame = G, this.pv;
      }
      function k() {
        this.paths = this.localShapeCollection;
      }
      function L(G) {
        (function($, ie) {
          if ($._length !== ie._length || $.c !== ie.c)
            return !1;
          var fe, Q = $._length;
          for (fe = 0; fe < Q; fe += 1)
            if ($.v[fe][0] !== ie.v[fe][0] || $.v[fe][1] !== ie.v[fe][1] || $.o[fe][0] !== ie.o[fe][0] || $.o[fe][1] !== ie.o[fe][1] || $.i[fe][0] !== ie.i[fe][0] || $.i[fe][1] !== ie.i[fe][1])
              return !1;
          return !0;
        })(this.v, G) || (this.v = shapePool.clone(G), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
      }
      function O() {
        if (this.elem.globalData.frameId !== this.frameId)
          if (this.effectsSequence.length)
            if (this.lock)
              this.setVValue(this.pv);
            else {
              var G, $;
              this.lock = !0, this._mdf = !1, G = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
              var ie = this.effectsSequence.length;
              for ($ = 0; $ < ie; $ += 1)
                G = this.effectsSequence[$](G);
              this.setVValue(G), this.lock = !1, this.frameId = this.elem.globalData.frameId;
            }
          else
            this._mdf = !1;
      }
      function V(G, $, ie) {
        this.propType = "shape", this.comp = G.comp, this.container = G, this.elem = G, this.data = $, this.k = !1, this.kf = !1, this._mdf = !1;
        var fe = ie === 3 ? $.pt.k : $.ks.k;
        this.v = shapePool.clone(fe), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = k, this.effectsSequence = [];
      }
      function he(G) {
        this.effectsSequence.push(G), this.container.addDynamicProperty(this);
      }
      function K(G, $, ie) {
        this.propType = "shape", this.comp = G.comp, this.elem = G, this.container = G, this.offsetTime = G.data.st, this.keyframes = ie === 3 ? $.pt.k : $.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
        var fe = this.keyframes[0].s[0].i.length;
        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, fe), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = k, this._caching = { lastFrame: -999999, lastIndex: 0 }, this.effectsSequence = [P.bind(this)];
      }
      V.prototype.interpolateShape = m, V.prototype.getValue = O, V.prototype.setVValue = L, V.prototype.addEffect = he, K.prototype.getValue = O, K.prototype.interpolateShape = m, K.prototype.setVValue = L, K.prototype.addEffect = he;
      var de = function() {
        var G = roundCorner;
        function $(ie, fe) {
          this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = fe.d, this.elem = ie, this.comp = ie.comp, this.frameId = -1, this.initDynamicPropertyContainer(ie), this.p = PropertyFactory.getProp(ie, fe.p, 1, 0, this), this.s = PropertyFactory.getProp(ie, fe.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
        }
        return $.prototype = { reset: k, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
        }, convertEllToPath: function() {
          var ie = this.p.v[0], fe = this.p.v[1], Q = this.s.v[0] / 2, ue = this.s.v[1] / 2, me = this.d !== 3, ge = this.v;
          ge.v[0][0] = ie, ge.v[0][1] = fe - ue, ge.v[1][0] = me ? ie + Q : ie - Q, ge.v[1][1] = fe, ge.v[2][0] = ie, ge.v[2][1] = fe + ue, ge.v[3][0] = me ? ie - Q : ie + Q, ge.v[3][1] = fe, ge.i[0][0] = me ? ie - Q * G : ie + Q * G, ge.i[0][1] = fe - ue, ge.i[1][0] = me ? ie + Q : ie - Q, ge.i[1][1] = fe - ue * G, ge.i[2][0] = me ? ie + Q * G : ie - Q * G, ge.i[2][1] = fe + ue, ge.i[3][0] = me ? ie - Q : ie + Q, ge.i[3][1] = fe + ue * G, ge.o[0][0] = me ? ie + Q * G : ie - Q * G, ge.o[0][1] = fe - ue, ge.o[1][0] = me ? ie + Q : ie - Q, ge.o[1][1] = fe + ue * G, ge.o[2][0] = me ? ie - Q * G : ie + Q * G, ge.o[2][1] = fe + ue, ge.o[3][0] = me ? ie - Q : ie + Q, ge.o[3][1] = fe - ue * G;
        } }, extendPrototype([DynamicPropertyContainer], $), $;
      }(), ce = function() {
        function G($, ie) {
          this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = $, this.comp = $.comp, this.data = ie, this.frameId = -1, this.d = ie.d, this.initDynamicPropertyContainer($), ie.sy === 1 ? (this.ir = PropertyFactory.getProp($, ie.ir, 0, 0, this), this.is = PropertyFactory.getProp($, ie.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp($, ie.pt, 0, 0, this), this.p = PropertyFactory.getProp($, ie.p, 1, 0, this), this.r = PropertyFactory.getProp($, ie.r, 0, degToRads, this), this.or = PropertyFactory.getProp($, ie.or, 0, 0, this), this.os = PropertyFactory.getProp($, ie.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
        }
        return G.prototype = { reset: k, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
        }, convertStarToPath: function() {
          var $, ie, fe, Q, ue = 2 * Math.floor(this.pt.v), me = 2 * Math.PI / ue, ge = !0, ve = this.or.v, _e = this.ir.v, Te = this.os.v, Ce = this.is.v, Ae = 2 * Math.PI * ve / (2 * ue), Ie = 2 * Math.PI * _e / (2 * ue), Me = -Math.PI / 2;
          Me += this.r.v;
          var ke = this.data.d === 3 ? -1 : 1;
          for (this.v._length = 0, $ = 0; $ < ue; $ += 1) {
            fe = ge ? Te : Ce, Q = ge ? Ae : Ie;
            var at = (ie = ge ? ve : _e) * Math.cos(Me), st = ie * Math.sin(Me), Ue = at === 0 && st === 0 ? 0 : st / Math.sqrt(at * at + st * st), lt = at === 0 && st === 0 ? 0 : -at / Math.sqrt(at * at + st * st);
            at += +this.p.v[0], st += +this.p.v[1], this.v.setTripleAt(at, st, at - Ue * Q * fe * ke, st - lt * Q * fe * ke, at + Ue * Q * fe * ke, st + lt * Q * fe * ke, $, !0), ge = !ge, Me += me * ke;
          }
        }, convertPolygonToPath: function() {
          var $, ie = Math.floor(this.pt.v), fe = 2 * Math.PI / ie, Q = this.or.v, ue = this.os.v, me = 2 * Math.PI * Q / (4 * ie), ge = 0.5 * -Math.PI, ve = this.data.d === 3 ? -1 : 1;
          for (ge += this.r.v, this.v._length = 0, $ = 0; $ < ie; $ += 1) {
            var _e = Q * Math.cos(ge), Te = Q * Math.sin(ge), Ce = _e === 0 && Te === 0 ? 0 : Te / Math.sqrt(_e * _e + Te * Te), Ae = _e === 0 && Te === 0 ? 0 : -_e / Math.sqrt(_e * _e + Te * Te);
            _e += +this.p.v[0], Te += +this.p.v[1], this.v.setTripleAt(_e, Te, _e - Ce * me * ue * ve, Te - Ae * me * ue * ve, _e + Ce * me * ue * ve, Te + Ae * me * ue * ve, $, !0), ge += fe * ve;
          }
          this.paths.length = 0, this.paths[0] = this.v;
        } }, extendPrototype([DynamicPropertyContainer], G), G;
      }(), pe = function() {
        function G($, ie) {
          this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = $, this.comp = $.comp, this.frameId = -1, this.d = ie.d, this.initDynamicPropertyContainer($), this.p = PropertyFactory.getProp($, ie.p, 1, 0, this), this.s = PropertyFactory.getProp($, ie.s, 1, 0, this), this.r = PropertyFactory.getProp($, ie.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
        }
        return G.prototype = { convertRectToPath: function() {
          var $ = this.p.v[0], ie = this.p.v[1], fe = this.s.v[0] / 2, Q = this.s.v[1] / 2, ue = bmMin(fe, Q, this.r.v), me = ue * (1 - roundCorner);
          this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt($ + fe, ie - Q + ue, $ + fe, ie - Q + ue, $ + fe, ie - Q + me, 0, !0), this.v.setTripleAt($ + fe, ie + Q - ue, $ + fe, ie + Q - me, $ + fe, ie + Q - ue, 1, !0), ue !== 0 ? (this.v.setTripleAt($ + fe - ue, ie + Q, $ + fe - ue, ie + Q, $ + fe - me, ie + Q, 2, !0), this.v.setTripleAt($ - fe + ue, ie + Q, $ - fe + me, ie + Q, $ - fe + ue, ie + Q, 3, !0), this.v.setTripleAt($ - fe, ie + Q - ue, $ - fe, ie + Q - ue, $ - fe, ie + Q - me, 4, !0), this.v.setTripleAt($ - fe, ie - Q + ue, $ - fe, ie - Q + me, $ - fe, ie - Q + ue, 5, !0), this.v.setTripleAt($ - fe + ue, ie - Q, $ - fe + ue, ie - Q, $ - fe + me, ie - Q, 6, !0), this.v.setTripleAt($ + fe - ue, ie - Q, $ + fe - me, ie - Q, $ + fe - ue, ie - Q, 7, !0)) : (this.v.setTripleAt($ - fe, ie + Q, $ - fe + me, ie + Q, $ - fe, ie + Q, 2), this.v.setTripleAt($ - fe, ie - Q, $ - fe, ie - Q + me, $ - fe, ie - Q, 3))) : (this.v.setTripleAt($ + fe, ie - Q + ue, $ + fe, ie - Q + me, $ + fe, ie - Q + ue, 0, !0), ue !== 0 ? (this.v.setTripleAt($ + fe - ue, ie - Q, $ + fe - ue, ie - Q, $ + fe - me, ie - Q, 1, !0), this.v.setTripleAt($ - fe + ue, ie - Q, $ - fe + me, ie - Q, $ - fe + ue, ie - Q, 2, !0), this.v.setTripleAt($ - fe, ie - Q + ue, $ - fe, ie - Q + ue, $ - fe, ie - Q + me, 3, !0), this.v.setTripleAt($ - fe, ie + Q - ue, $ - fe, ie + Q - me, $ - fe, ie + Q - ue, 4, !0), this.v.setTripleAt($ - fe + ue, ie + Q, $ - fe + ue, ie + Q, $ - fe + me, ie + Q, 5, !0), this.v.setTripleAt($ + fe - ue, ie + Q, $ + fe - me, ie + Q, $ + fe - ue, ie + Q, 6, !0), this.v.setTripleAt($ + fe, ie + Q - ue, $ + fe, ie + Q - ue, $ + fe, ie + Q - me, 7, !0)) : (this.v.setTripleAt($ - fe, ie - Q, $ - fe + me, ie - Q, $ - fe, ie - Q, 1, !0), this.v.setTripleAt($ - fe, ie + Q, $ - fe, ie + Q - me, $ - fe, ie + Q, 2, !0), this.v.setTripleAt($ + fe, ie + Q, $ + fe - me, ie + Q, $ + fe, ie + Q, 3, !0)));
        }, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
        }, reset: k }, extendPrototype([DynamicPropertyContainer], G), G;
      }(), B = { getShapeProp: function(G, $, ie) {
        var fe;
        return ie === 3 || ie === 4 ? fe = (ie === 3 ? $.pt : $.ks).k.length ? new K(G, $, ie) : new V(G, $, ie) : ie === 5 ? fe = new pe(G, $) : ie === 6 ? fe = new de(G, $) : ie === 7 && (fe = new ce(G, $)), fe.k && G.addDynamicProperty(fe), fe;
      }, getConstructorFunction: function() {
        return V;
      }, getKeyframedConstructorFunction: function() {
        return K;
      } };
      return B;
    }(), Matrix = function() {
      var m = Math.cos, P = Math.sin, k = Math.tan, L = Math.round;
      function O() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function V(Oe) {
        if (Oe === 0)
          return this;
        var we = m(Oe), ht = P(Oe);
        return this._t(we, -ht, 0, 0, ht, we, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function he(Oe) {
        if (Oe === 0)
          return this;
        var we = m(Oe), ht = P(Oe);
        return this._t(1, 0, 0, 0, 0, we, -ht, 0, 0, ht, we, 0, 0, 0, 0, 1);
      }
      function K(Oe) {
        if (Oe === 0)
          return this;
        var we = m(Oe), ht = P(Oe);
        return this._t(we, 0, ht, 0, 0, 1, 0, 0, -ht, 0, we, 0, 0, 0, 0, 1);
      }
      function de(Oe) {
        if (Oe === 0)
          return this;
        var we = m(Oe), ht = P(Oe);
        return this._t(we, -ht, 0, 0, ht, we, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function ce(Oe, we) {
        return this._t(1, we, Oe, 1, 0, 0);
      }
      function pe(Oe, we) {
        return this.shear(k(Oe), k(we));
      }
      function B(Oe, we) {
        var ht = m(we), mt = P(we);
        return this._t(ht, mt, 0, 0, -mt, ht, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, k(Oe), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(ht, -mt, 0, 0, mt, ht, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function G(Oe, we, ht) {
        return ht || ht === 0 || (ht = 1), Oe === 1 && we === 1 && ht === 1 ? this : this._t(Oe, 0, 0, 0, 0, we, 0, 0, 0, 0, ht, 0, 0, 0, 0, 1);
      }
      function $(Oe, we, ht, mt, Et, Mt, _t, ft, yt, gt, xt, bt, wt, At, jt, kt) {
        return this.props[0] = Oe, this.props[1] = we, this.props[2] = ht, this.props[3] = mt, this.props[4] = Et, this.props[5] = Mt, this.props[6] = _t, this.props[7] = ft, this.props[8] = yt, this.props[9] = gt, this.props[10] = xt, this.props[11] = bt, this.props[12] = wt, this.props[13] = At, this.props[14] = jt, this.props[15] = kt, this;
      }
      function ie(Oe, we, ht) {
        return ht = ht || 0, Oe !== 0 || we !== 0 || ht !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, Oe, we, ht, 1) : this;
      }
      function fe(Oe, we, ht, mt, Et, Mt, _t, ft, yt, gt, xt, bt, wt, At, jt, kt) {
        var dt = this.props;
        if (Oe === 1 && we === 0 && ht === 0 && mt === 0 && Et === 0 && Mt === 1 && _t === 0 && ft === 0 && yt === 0 && gt === 0 && xt === 1 && bt === 0)
          return dt[12] = dt[12] * Oe + dt[15] * wt, dt[13] = dt[13] * Mt + dt[15] * At, dt[14] = dt[14] * xt + dt[15] * jt, dt[15] *= kt, this._identityCalculated = !1, this;
        var Ot = dt[0], $t = dt[1], Gt = dt[2], Ht = dt[3], Bt = dt[4], Ft = dt[5], Rt = dt[6], Vt = dt[7], Lt = dt[8], Wt = dt[9], qt = dt[10], Zt = dt[11], Ut = dt[12], Xt = dt[13], Kt = dt[14], Jt = dt[15];
        return dt[0] = Ot * Oe + $t * Et + Gt * yt + Ht * wt, dt[1] = Ot * we + $t * Mt + Gt * gt + Ht * At, dt[2] = Ot * ht + $t * _t + Gt * xt + Ht * jt, dt[3] = Ot * mt + $t * ft + Gt * bt + Ht * kt, dt[4] = Bt * Oe + Ft * Et + Rt * yt + Vt * wt, dt[5] = Bt * we + Ft * Mt + Rt * gt + Vt * At, dt[6] = Bt * ht + Ft * _t + Rt * xt + Vt * jt, dt[7] = Bt * mt + Ft * ft + Rt * bt + Vt * kt, dt[8] = Lt * Oe + Wt * Et + qt * yt + Zt * wt, dt[9] = Lt * we + Wt * Mt + qt * gt + Zt * At, dt[10] = Lt * ht + Wt * _t + qt * xt + Zt * jt, dt[11] = Lt * mt + Wt * ft + qt * bt + Zt * kt, dt[12] = Ut * Oe + Xt * Et + Kt * yt + Jt * wt, dt[13] = Ut * we + Xt * Mt + Kt * gt + Jt * At, dt[14] = Ut * ht + Xt * _t + Kt * xt + Jt * jt, dt[15] = Ut * mt + Xt * ft + Kt * bt + Jt * kt, this._identityCalculated = !1, this;
      }
      function Q() {
        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
      }
      function ue(Oe) {
        for (var we = 0; we < 16; ) {
          if (Oe.props[we] !== this.props[we])
            return !1;
          we += 1;
        }
        return !0;
      }
      function me(Oe) {
        var we;
        for (we = 0; we < 16; we += 1)
          Oe.props[we] = this.props[we];
        return Oe;
      }
      function ge(Oe) {
        var we;
        for (we = 0; we < 16; we += 1)
          this.props[we] = Oe[we];
      }
      function ve(Oe, we, ht) {
        return { x: Oe * this.props[0] + we * this.props[4] + ht * this.props[8] + this.props[12], y: Oe * this.props[1] + we * this.props[5] + ht * this.props[9] + this.props[13], z: Oe * this.props[2] + we * this.props[6] + ht * this.props[10] + this.props[14] };
      }
      function _e(Oe, we, ht) {
        return Oe * this.props[0] + we * this.props[4] + ht * this.props[8] + this.props[12];
      }
      function Te(Oe, we, ht) {
        return Oe * this.props[1] + we * this.props[5] + ht * this.props[9] + this.props[13];
      }
      function Ce(Oe, we, ht) {
        return Oe * this.props[2] + we * this.props[6] + ht * this.props[10] + this.props[14];
      }
      function Ae() {
        var Oe = this.props[0] * this.props[5] - this.props[1] * this.props[4], we = this.props[5] / Oe, ht = -this.props[1] / Oe, mt = -this.props[4] / Oe, Et = this.props[0] / Oe, Mt = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / Oe, _t = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / Oe, ft = new Matrix();
        return ft.props[0] = we, ft.props[1] = ht, ft.props[4] = mt, ft.props[5] = Et, ft.props[12] = Mt, ft.props[13] = _t, ft;
      }
      function Ie(Oe) {
        return this.getInverseMatrix().applyToPointArray(Oe[0], Oe[1], Oe[2] || 0);
      }
      function Me(Oe) {
        var we, ht = Oe.length, mt = [];
        for (we = 0; we < ht; we += 1)
          mt[we] = Ie(Oe[we]);
        return mt;
      }
      function ke(Oe, we, ht) {
        var mt = createTypedArray("float32", 6);
        if (this.isIdentity())
          mt[0] = Oe[0], mt[1] = Oe[1], mt[2] = we[0], mt[3] = we[1], mt[4] = ht[0], mt[5] = ht[1];
        else {
          var Et = this.props[0], Mt = this.props[1], _t = this.props[4], ft = this.props[5], yt = this.props[12], gt = this.props[13];
          mt[0] = Oe[0] * Et + Oe[1] * _t + yt, mt[1] = Oe[0] * Mt + Oe[1] * ft + gt, mt[2] = we[0] * Et + we[1] * _t + yt, mt[3] = we[0] * Mt + we[1] * ft + gt, mt[4] = ht[0] * Et + ht[1] * _t + yt, mt[5] = ht[0] * Mt + ht[1] * ft + gt;
        }
        return mt;
      }
      function at(Oe, we, ht) {
        return this.isIdentity() ? [Oe, we, ht] : [Oe * this.props[0] + we * this.props[4] + ht * this.props[8] + this.props[12], Oe * this.props[1] + we * this.props[5] + ht * this.props[9] + this.props[13], Oe * this.props[2] + we * this.props[6] + ht * this.props[10] + this.props[14]];
      }
      function st(Oe, we) {
        if (this.isIdentity())
          return Oe + "," + we;
        var ht = this.props;
        return Math.round(100 * (Oe * ht[0] + we * ht[4] + ht[12])) / 100 + "," + Math.round(100 * (Oe * ht[1] + we * ht[5] + ht[13])) / 100;
      }
      function Ue() {
        for (var Oe = 0, we = this.props, ht = "matrix3d("; Oe < 16; )
          ht += L(1e4 * we[Oe]) / 1e4, ht += Oe === 15 ? ")" : ",", Oe += 1;
        return ht;
      }
      function lt(Oe) {
        return Oe < 1e-6 && Oe > 0 || Oe > -1e-6 && Oe < 0 ? L(1e4 * Oe) / 1e4 : Oe;
      }
      function ut() {
        var Oe = this.props;
        return "matrix(" + lt(Oe[0]) + "," + lt(Oe[1]) + "," + lt(Oe[4]) + "," + lt(Oe[5]) + "," + lt(Oe[12]) + "," + lt(Oe[13]) + ")";
      }
      return function() {
        this.reset = O, this.rotate = V, this.rotateX = he, this.rotateY = K, this.rotateZ = de, this.skew = pe, this.skewFromAxis = B, this.shear = ce, this.scale = G, this.setTransform = $, this.translate = ie, this.transform = fe, this.applyToPoint = ve, this.applyToX = _e, this.applyToY = Te, this.applyToZ = Ce, this.applyToPointArray = at, this.applyToTriplePoints = ke, this.applyToPointStringified = st, this.toCSS = Ue, this.to2dCSS = ut, this.clone = me, this.cloneFromProps = ge, this.equals = ue, this.inversePoints = Me, this.inversePoint = Ie, this.getInverseMatrix = Ae, this._t = this.transform, this.isIdentity = Q, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
      };
    }();
    function _typeof$3(m) {
      return (_typeof$3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(P) {
        return typeof P;
      } : function(P) {
        return P && typeof Symbol == "function" && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
      })(m);
    }
    var lottie = {};
    function setLocation(m) {
      setLocationHref(m);
    }
    function searchAnimations() {
      animationManager.searchAnimations();
    }
    function setSubframeRendering(m) {
      setSubframeEnabled(m);
    }
    function setPrefix(m) {
      setIdPrefix(m);
    }
    function loadAnimation(m) {
      return animationManager.loadAnimation(m);
    }
    function setQuality(m) {
      if (typeof m == "string")
        switch (m) {
          case "high":
            setDefaultCurveSegments(200);
            break;
          default:
          case "medium":
            setDefaultCurveSegments(50);
            break;
          case "low":
            setDefaultCurveSegments(10);
        }
      else
        !isNaN(m) && m > 1 && setDefaultCurveSegments(m);
    }
    function inBrowser() {
      return typeof navigator < "u";
    }
    function installPlugin(m, P) {
      m === "expressions" && setExpressionsPlugin(P);
    }
    function getFactory(m) {
      switch (m) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix;
        default:
          return null;
      }
    }
    function checkReady() {
      document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations());
    }
    function getQueryVariable(m) {
      for (var P = queryString.split("&"), k = 0; k < P.length; k += 1) {
        var L = P[k].split("=");
        if (decodeURIComponent(L[0]) == m)
          return decodeURIComponent(L[1]);
      }
      return null;
    }
    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.10.2";
    var queryString = "";
    {
      var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || { src: "" };
      queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer");
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    try {
      _typeof$3(exports) !== "object" && (window.bodymovin = lottie);
    } catch (m) {
    }
    var ShapeModifiers = function() {
      var m = {}, P = {};
      return m.registerModifier = function(k, L) {
        P[k] || (P[k] = L);
      }, m.getModifier = function(k, L, O) {
        return new P[k](L, O);
      }, m;
    }();
    function ShapeModifier() {
    }
    function TrimModifier() {
    }
    function PuckerAndBloatModifier() {
    }
    ShapeModifier.prototype.initModifierProperties = function() {
    }, ShapeModifier.prototype.addShapeToModifier = function() {
    }, ShapeModifier.prototype.addShape = function(m) {
      if (!this.closed) {
        m.sh.container.addDynamicProperty(m.sh);
        var P = { shape: m.sh, data: m, localShapeCollection: shapeCollectionPool.newShapeCollection() };
        this.shapes.push(P), this.addShapeToModifier(P), this._isAnimated && m.setAsAnimated();
      }
    }, ShapeModifier.prototype.init = function(m, P) {
      this.shapes = [], this.elem = m, this.initDynamicPropertyContainer(m), this.initModifierProperties(m, P), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, ShapeModifier.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(m, P) {
      this.s = PropertyFactory.getProp(m, P.s, 0, 0.01, this), this.e = PropertyFactory.getProp(m, P.e, 0, 0.01, this), this.o = PropertyFactory.getProp(m, P.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = P.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, TrimModifier.prototype.addShapeToModifier = function(m) {
      m.pathsData = [];
    }, TrimModifier.prototype.calculateShapeEdges = function(m, P, k, L, O) {
      var V = [];
      P <= 1 ? V.push({ s: m, e: P }) : m >= 1 ? V.push({ s: m - 1, e: P - 1 }) : (V.push({ s: m, e: 1 }), V.push({ s: 0, e: P - 1 }));
      var he, K, de = [], ce = V.length;
      for (he = 0; he < ce; he += 1) {
        var pe, B;
        (K = V[he]).e * O < L || K.s * O > L + k || (pe = K.s * O <= L ? 0 : (K.s * O - L) / k, B = K.e * O >= L + k ? 1 : (K.e * O - L) / k, de.push([pe, B]));
      }
      return de.length || de.push([0, 0]), de;
    }, TrimModifier.prototype.releasePathsData = function(m) {
      var P, k = m.length;
      for (P = 0; P < k; P += 1)
        segmentsLengthPool.release(m[P]);
      return m.length = 0, m;
    }, TrimModifier.prototype.processShapes = function(m) {
      var P, k, L, O;
      if (this._mdf || m) {
        var V = this.o.v % 360 / 360;
        if (V < 0 && (V += 1), (P = this.s.v > 1 ? 1 + V : this.s.v < 0 ? 0 + V : this.s.v + V) > (k = this.e.v > 1 ? 1 + V : this.e.v < 0 ? 0 + V : this.e.v + V)) {
          var he = P;
          P = k, k = he;
        }
        P = 1e-4 * Math.round(1e4 * P), k = 1e-4 * Math.round(1e4 * k), this.sValue = P, this.eValue = k;
      } else
        P = this.sValue, k = this.eValue;
      var K, de, ce, pe, B, G = this.shapes.length, $ = 0;
      if (k === P)
        for (O = 0; O < G; O += 1)
          this.shapes[O].localShapeCollection.releaseShapes(), this.shapes[O].shape._mdf = !0, this.shapes[O].shape.paths = this.shapes[O].localShapeCollection, this._mdf && (this.shapes[O].pathsData.length = 0);
      else if (k === 1 && P === 0 || k === 0 && P === 1) {
        if (this._mdf)
          for (O = 0; O < G; O += 1)
            this.shapes[O].pathsData.length = 0, this.shapes[O].shape._mdf = !0;
      } else {
        var ie, fe, Q = [];
        for (O = 0; O < G; O += 1)
          if ((ie = this.shapes[O]).shape._mdf || this._mdf || m || this.m === 2) {
            if (de = (L = ie.shape.paths)._length, B = 0, !ie.shape._mdf && ie.pathsData.length)
              B = ie.totalShapeLength;
            else {
              for (ce = this.releasePathsData(ie.pathsData), K = 0; K < de; K += 1)
                pe = bez.getSegmentsLength(L.shapes[K]), ce.push(pe), B += pe.totalLength;
              ie.totalShapeLength = B, ie.pathsData = ce;
            }
            $ += B, ie.shape._mdf = !0;
          } else
            ie.shape.paths = ie.localShapeCollection;
        var ue, me = P, ge = k, ve = 0;
        for (O = G - 1; O >= 0; O -= 1)
          if ((ie = this.shapes[O]).shape._mdf) {
            for ((fe = ie.localShapeCollection).releaseShapes(), this.m === 2 && G > 1 ? (ue = this.calculateShapeEdges(P, k, ie.totalShapeLength, ve, $), ve += ie.totalShapeLength) : ue = [[me, ge]], de = ue.length, K = 0; K < de; K += 1) {
              me = ue[K][0], ge = ue[K][1], Q.length = 0, ge <= 1 ? Q.push({ s: ie.totalShapeLength * me, e: ie.totalShapeLength * ge }) : me >= 1 ? Q.push({ s: ie.totalShapeLength * (me - 1), e: ie.totalShapeLength * (ge - 1) }) : (Q.push({ s: ie.totalShapeLength * me, e: ie.totalShapeLength }), Q.push({ s: 0, e: ie.totalShapeLength * (ge - 1) }));
              var _e = this.addShapes(ie, Q[0]);
              if (Q[0].s !== Q[0].e) {
                if (Q.length > 1)
                  if (ie.shape.paths.shapes[ie.shape.paths._length - 1].c) {
                    var Te = _e.pop();
                    this.addPaths(_e, fe), _e = this.addShapes(ie, Q[1], Te);
                  } else
                    this.addPaths(_e, fe), _e = this.addShapes(ie, Q[1]);
                this.addPaths(_e, fe);
              }
            }
            ie.shape.paths = fe;
          }
      }
    }, TrimModifier.prototype.addPaths = function(m, P) {
      var k, L = m.length;
      for (k = 0; k < L; k += 1)
        P.addShape(m[k]);
    }, TrimModifier.prototype.addSegment = function(m, P, k, L, O, V, he) {
      O.setXYAt(P[0], P[1], "o", V), O.setXYAt(k[0], k[1], "i", V + 1), he && O.setXYAt(m[0], m[1], "v", V), O.setXYAt(L[0], L[1], "v", V + 1);
    }, TrimModifier.prototype.addSegmentFromArray = function(m, P, k, L) {
      P.setXYAt(m[1], m[5], "o", k), P.setXYAt(m[2], m[6], "i", k + 1), L && P.setXYAt(m[0], m[4], "v", k), P.setXYAt(m[3], m[7], "v", k + 1);
    }, TrimModifier.prototype.addShapes = function(m, P, k) {
      var L, O, V, he, K, de, ce, pe, B = m.pathsData, G = m.shape.paths.shapes, $ = m.shape.paths._length, ie = 0, fe = [], Q = !0;
      for (k ? (K = k._length, pe = k._length) : (k = shapePool.newElement(), K = 0, pe = 0), fe.push(k), L = 0; L < $; L += 1) {
        for (de = B[L].lengths, k.c = G[L].c, V = G[L].c ? de.length : de.length + 1, O = 1; O < V; O += 1)
          if (ie + (he = de[O - 1]).addedLength < P.s)
            ie += he.addedLength, k.c = !1;
          else {
            if (ie > P.e) {
              k.c = !1;
              break;
            }
            P.s <= ie && P.e >= ie + he.addedLength ? (this.addSegment(G[L].v[O - 1], G[L].o[O - 1], G[L].i[O], G[L].v[O], k, K, Q), Q = !1) : (ce = bez.getNewSegment(G[L].v[O - 1], G[L].v[O], G[L].o[O - 1], G[L].i[O], (P.s - ie) / he.addedLength, (P.e - ie) / he.addedLength, de[O - 1]), this.addSegmentFromArray(ce, k, K, Q), Q = !1, k.c = !1), ie += he.addedLength, K += 1;
          }
        if (G[L].c && de.length) {
          if (he = de[O - 1], ie <= P.e) {
            var ue = de[O - 1].addedLength;
            P.s <= ie && P.e >= ie + ue ? (this.addSegment(G[L].v[O - 1], G[L].o[O - 1], G[L].i[0], G[L].v[0], k, K, Q), Q = !1) : (ce = bez.getNewSegment(G[L].v[O - 1], G[L].v[0], G[L].o[O - 1], G[L].i[0], (P.s - ie) / ue, (P.e - ie) / ue, de[O - 1]), this.addSegmentFromArray(ce, k, K, Q), Q = !1, k.c = !1);
          } else
            k.c = !1;
          ie += he.addedLength, K += 1;
        }
        if (k._length && (k.setXYAt(k.v[pe][0], k.v[pe][1], "i", pe), k.setXYAt(k.v[k._length - 1][0], k.v[k._length - 1][1], "o", k._length - 1)), ie > P.e)
          break;
        L < $ - 1 && (k = shapePool.newElement(), Q = !0, fe.push(k), K = 0);
      }
      return fe;
    }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(m, P) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(m, P.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, PuckerAndBloatModifier.prototype.processPath = function(m, P) {
      var k = P / 100, L = [0, 0], O = m._length, V = 0;
      for (V = 0; V < O; V += 1)
        L[0] += m.v[V][0], L[1] += m.v[V][1];
      L[0] /= O, L[1] /= O;
      var he, K, de, ce, pe, B, G = shapePool.newElement();
      for (G.c = m.c, V = 0; V < O; V += 1)
        he = m.v[V][0] + (L[0] - m.v[V][0]) * k, K = m.v[V][1] + (L[1] - m.v[V][1]) * k, de = m.o[V][0] + (L[0] - m.o[V][0]) * -k, ce = m.o[V][1] + (L[1] - m.o[V][1]) * -k, pe = m.i[V][0] + (L[0] - m.i[V][0]) * -k, B = m.i[V][1] + (L[1] - m.i[V][1]) * -k, G.setTripleAt(he, K, de, ce, pe, B, V);
      return G;
    }, PuckerAndBloatModifier.prototype.processShapes = function(m) {
      var P, k, L, O, V, he, K = this.shapes.length, de = this.amount.v;
      if (de !== 0)
        for (k = 0; k < K; k += 1) {
          if (he = (V = this.shapes[k]).localShapeCollection, V.shape._mdf || this._mdf || m)
            for (he.releaseShapes(), V.shape._mdf = !0, P = V.shape.paths.shapes, O = V.shape.paths._length, L = 0; L < O; L += 1)
              he.addShape(this.processPath(P[L], de));
          V.shape.paths = V.localShapeCollection;
        }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    var TransformPropertyFactory = function() {
      var m = [0, 0];
      function P(k, L, O) {
        if (this.elem = k, this.frameId = -1, this.propType = "transform", this.data = L, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(O || k), L.p && L.p.s ? (this.px = PropertyFactory.getProp(k, L.p.x, 0, 0, this), this.py = PropertyFactory.getProp(k, L.p.y, 0, 0, this), L.p.z && (this.pz = PropertyFactory.getProp(k, L.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(k, L.p || { k: [0, 0, 0] }, 1, 0, this), L.rx) {
          if (this.rx = PropertyFactory.getProp(k, L.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(k, L.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(k, L.rz, 0, degToRads, this), L.or.k[0].ti) {
            var V, he = L.or.k.length;
            for (V = 0; V < he; V += 1)
              L.or.k[V].to = null, L.or.k[V].ti = null;
          }
          this.or = PropertyFactory.getProp(k, L.or, 1, degToRads, this), this.or.sh = !0;
        } else
          this.r = PropertyFactory.getProp(k, L.r || { k: 0 }, 0, degToRads, this);
        L.sk && (this.sk = PropertyFactory.getProp(k, L.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(k, L.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(k, L.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(k, L.s || { k: [100, 100, 100] }, 1, 0.01, this), L.o ? this.o = PropertyFactory.getProp(k, L.o, 0, 0.01, k) : this.o = { _mdf: !1, v: 1 }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
      }
      return P.prototype = { applyToMatrix: function(k) {
        var L = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || L, this.a && k.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && k.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && k.skewFromAxis(-this.sk.v, this.sa.v), this.r ? k.rotate(-this.r.v) : k.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? k.translate(this.px.v, this.py.v, -this.pz.v) : k.translate(this.px.v, this.py.v, 0) : k.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }, getValue: function(k) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || k) {
            var L;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var O, V;
              if (L = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime)
                this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (O = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / L, 0), V = this.p.getValueAtTime(this.p.keyframes[0].t / L, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (O = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / L, 0), V = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / L, 0)) : (O = this.p.pv, V = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / L, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                O = [], V = [];
                var he = this.px, K = this.py;
                he._caching.lastFrame + he.offsetTime <= he.keyframes[0].t ? (O[0] = he.getValueAtTime((he.keyframes[0].t + 0.01) / L, 0), O[1] = K.getValueAtTime((K.keyframes[0].t + 0.01) / L, 0), V[0] = he.getValueAtTime(he.keyframes[0].t / L, 0), V[1] = K.getValueAtTime(K.keyframes[0].t / L, 0)) : he._caching.lastFrame + he.offsetTime >= he.keyframes[he.keyframes.length - 1].t ? (O[0] = he.getValueAtTime(he.keyframes[he.keyframes.length - 1].t / L, 0), O[1] = K.getValueAtTime(K.keyframes[K.keyframes.length - 1].t / L, 0), V[0] = he.getValueAtTime((he.keyframes[he.keyframes.length - 1].t - 0.01) / L, 0), V[1] = K.getValueAtTime((K.keyframes[K.keyframes.length - 1].t - 0.01) / L, 0)) : (O = [he.pv, K.pv], V[0] = he.getValueAtTime((he._caching.lastFrame + he.offsetTime - 0.01) / L, he.offsetTime), V[1] = K.getValueAtTime((K._caching.lastFrame + K.offsetTime - 0.01) / L, K.offsetTime));
              } else
                O = V = m;
              this.v.rotate(-Math.atan2(O[1] - V[1], O[0] - V[0]));
            }
            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
          this.frameId = this.elem.globalData.frameId;
        }
      }, precalculateMatrix: function() {
        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
          if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length)
              return;
            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
          }
          this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
        }
      }, autoOrient: function() {
      } }, extendPrototype([DynamicPropertyContainer], P), P.prototype.addDynamicProperty = function(k) {
        this._addDynamicProperty(k), this.elem.addDynamicProperty(k), this._isDirty = !0;
      }, P.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, { getTransformProperty: function(k, L, O) {
        return new P(k, L, O);
      } };
    }();
    function RepeaterModifier() {
    }
    function RoundCornersModifier() {
    }
    function floatEqual(m, P) {
      return 1e5 * Math.abs(m - P) <= Math.min(Math.abs(m), Math.abs(P));
    }
    function floatZero(m) {
      return Math.abs(m) <= 1e-5;
    }
    function lerp(m, P, k) {
      return m * (1 - k) + P * k;
    }
    function lerpPoint(m, P, k) {
      return [lerp(m[0], P[0], k), lerp(m[1], P[1], k)];
    }
    function quadRoots(m, P, k) {
      if (m === 0)
        return [];
      var L = P * P - 4 * m * k;
      if (L < 0)
        return [];
      var O = -P / (2 * m);
      if (L === 0)
        return [O];
      var V = Math.sqrt(L) / (2 * m);
      return [O - V, O + V];
    }
    function polynomialCoefficients(m, P, k, L) {
      return [3 * P - m - 3 * k + L, 3 * m - 6 * P + 3 * k, -3 * m + 3 * P, m];
    }
    function singlePoint(m) {
      return new PolynomialBezier(m, m, m, m, !1);
    }
    function PolynomialBezier(m, P, k, L, O) {
      O && pointEqual(m, P) && (P = lerpPoint(m, L, 1 / 3)), O && pointEqual(k, L) && (k = lerpPoint(m, L, 2 / 3));
      var V = polynomialCoefficients(m[0], P[0], k[0], L[0]), he = polynomialCoefficients(m[1], P[1], k[1], L[1]);
      this.a = [V[0], he[0]], this.b = [V[1], he[1]], this.c = [V[2], he[2]], this.d = [V[3], he[3]], this.points = [m, P, k, L];
    }
    function extrema(m, P) {
      var k = m.points[0][P], L = m.points[m.points.length - 1][P];
      if (k > L) {
        var O = L;
        L = k, k = O;
      }
      for (var V = quadRoots(3 * m.a[P], 2 * m.b[P], m.c[P]), he = 0; he < V.length; he += 1)
        if (V[he] > 0 && V[he] < 1) {
          var K = m.point(V[he])[P];
          K < k ? k = K : K > L && (L = K);
        }
      return { min: k, max: L };
    }
    function intersectData(m, P, k) {
      var L = m.boundingBox();
      return { cx: L.cx, cy: L.cy, width: L.width, height: L.height, bez: m, t: (P + k) / 2, t1: P, t2: k };
    }
    function splitData(m) {
      var P = m.bez.split(0.5);
      return [intersectData(P[0], m.t1, m.t), intersectData(P[1], m.t, m.t2)];
    }
    function boxIntersect(m, P) {
      return 2 * Math.abs(m.cx - P.cx) < m.width + P.width && 2 * Math.abs(m.cy - P.cy) < m.height + P.height;
    }
    function intersectsImpl(m, P, k, L, O, V) {
      if (boxIntersect(m, P))
        if (k >= V || m.width <= L && m.height <= L && P.width <= L && P.height <= L)
          O.push([m.t, P.t]);
        else {
          var he = splitData(m), K = splitData(P);
          intersectsImpl(he[0], K[0], k + 1, L, O, V), intersectsImpl(he[0], K[1], k + 1, L, O, V), intersectsImpl(he[1], K[0], k + 1, L, O, V), intersectsImpl(he[1], K[1], k + 1, L, O, V);
        }
    }
    function crossProduct(m, P) {
      return [m[1] * P[2] - m[2] * P[1], m[2] * P[0] - m[0] * P[2], m[0] * P[1] - m[1] * P[0]];
    }
    function lineIntersection(m, P, k, L) {
      var O = [m[0], m[1], 1], V = [P[0], P[1], 1], he = [k[0], k[1], 1], K = [L[0], L[1], 1], de = crossProduct(crossProduct(O, V), crossProduct(he, K));
      return floatZero(de[2]) ? null : [de[0] / de[2], de[1] / de[2]];
    }
    function polarOffset(m, P, k) {
      return [m[0] + Math.cos(P) * k, m[1] - Math.sin(P) * k];
    }
    function pointDistance(m, P) {
      return Math.hypot(m[0] - P[0], m[1] - P[1]);
    }
    function pointEqual(m, P) {
      return floatEqual(m[0], P[0]) && floatEqual(m[1], P[1]);
    }
    function ZigZagModifier() {
    }
    function setPoint(m, P, k, L, O, V, he) {
      var K = k - Math.PI / 2, de = k + Math.PI / 2, ce = P[0] + Math.cos(k) * L * O, pe = P[1] - Math.sin(k) * L * O;
      m.setTripleAt(ce, pe, ce + Math.cos(K) * V, pe - Math.sin(K) * V, ce + Math.cos(de) * he, pe - Math.sin(de) * he, m.length());
    }
    function getPerpendicularVector(m, P) {
      var k = [P[0] - m[0], P[1] - m[1]], L = 0.5 * -Math.PI;
      return [Math.cos(L) * k[0] - Math.sin(L) * k[1], Math.sin(L) * k[0] + Math.cos(L) * k[1]];
    }
    function getProjectingAngle(m, P) {
      var k = P === 0 ? m.length() - 1 : P - 1, L = (P + 1) % m.length(), O = getPerpendicularVector(m.v[k], m.v[L]);
      return Math.atan2(0, 1) - Math.atan2(O[1], O[0]);
    }
    function zigZagCorner(m, P, k, L, O, V, he) {
      var K = getProjectingAngle(P, k), de = P.v[k % P._length], ce = P.v[k === 0 ? P._length - 1 : k - 1], pe = P.v[(k + 1) % P._length], B = V === 2 ? Math.sqrt(Math.pow(de[0] - ce[0], 2) + Math.pow(de[1] - ce[1], 2)) : 0, G = V === 2 ? Math.sqrt(Math.pow(de[0] - pe[0], 2) + Math.pow(de[1] - pe[1], 2)) : 0;
      setPoint(m, P.v[k % P._length], K, he, L, G / (2 * (O + 1)), B / (2 * (O + 1)));
    }
    function zigZagSegment(m, P, k, L, O, V) {
      for (var he = 0; he < L; he += 1) {
        var K = (he + 1) / (L + 1), de = O === 2 ? Math.sqrt(Math.pow(P.points[3][0] - P.points[0][0], 2) + Math.pow(P.points[3][1] - P.points[0][1], 2)) : 0, ce = P.normalAngle(K);
        setPoint(m, P.point(K), ce, V, k, de / (2 * (L + 1)), de / (2 * (L + 1))), V = -V;
      }
      return V;
    }
    function linearOffset(m, P, k) {
      var L = Math.atan2(P[0] - m[0], P[1] - m[1]);
      return [polarOffset(m, L, k), polarOffset(P, L, k)];
    }
    function offsetSegment(m, P) {
      var k, L, O, V, he, K, de;
      k = (de = linearOffset(m.points[0], m.points[1], P))[0], L = de[1], O = (de = linearOffset(m.points[1], m.points[2], P))[0], V = de[1], he = (de = linearOffset(m.points[2], m.points[3], P))[0], K = de[1];
      var ce = lineIntersection(k, L, O, V);
      ce === null && (ce = L);
      var pe = lineIntersection(he, K, O, V);
      return pe === null && (pe = he), new PolynomialBezier(k, ce, pe, K);
    }
    function joinLines(m, P, k, L, O) {
      var V = P.points[3], he = k.points[0];
      if (L === 3 || pointEqual(V, he))
        return V;
      if (L === 2) {
        var K = -P.tangentAngle(1), de = -k.tangentAngle(0) + Math.PI, ce = lineIntersection(V, polarOffset(V, K + Math.PI / 2, 100), he, polarOffset(he, K + Math.PI / 2, 100)), pe = ce ? pointDistance(ce, V) : pointDistance(V, he) / 2, B = polarOffset(V, K, 2 * pe * roundCorner);
        return m.setXYAt(B[0], B[1], "o", m.length() - 1), B = polarOffset(he, de, 2 * pe * roundCorner), m.setTripleAt(he[0], he[1], he[0], he[1], B[0], B[1], m.length()), he;
      }
      var G = lineIntersection(pointEqual(V, P.points[2]) ? P.points[0] : P.points[2], V, he, pointEqual(he, k.points[1]) ? k.points[3] : k.points[1]);
      return G && pointDistance(G, V) < O ? (m.setTripleAt(G[0], G[1], G[0], G[1], G[0], G[1], m.length()), G) : V;
    }
    function getIntersection(m, P) {
      var k = m.intersections(P);
      return k.length && floatEqual(k[0][0], 1) && k.shift(), k.length ? k[0] : null;
    }
    function pruneSegmentIntersection(m, P) {
      var k = m.slice(), L = P.slice(), O = getIntersection(m[m.length - 1], P[0]);
      return O && (k[m.length - 1] = m[m.length - 1].split(O[0])[0], L[0] = P[0].split(O[1])[1]), m.length > 1 && P.length > 1 && (O = getIntersection(m[0], P[P.length - 1])) ? [[m[0].split(O[0])[0]], [P[P.length - 1].split(O[1])[1]]] : [k, L];
    }
    function pruneIntersections(m) {
      for (var P, k = 1; k < m.length; k += 1)
        P = pruneSegmentIntersection(m[k - 1], m[k]), m[k - 1] = P[0], m[k] = P[1];
      return m.length > 1 && (P = pruneSegmentIntersection(m[m.length - 1], m[0]), m[m.length - 1] = P[0], m[0] = P[1]), m;
    }
    function offsetSegmentSplit(m, P) {
      var k, L, O, V, he = m.inflectionPoints();
      if (he.length === 0)
        return [offsetSegment(m, P)];
      if (he.length === 1 || floatEqual(he[1], 1))
        return k = (O = m.split(he[0]))[0], L = O[1], [offsetSegment(k, P), offsetSegment(L, P)];
      k = (O = m.split(he[0]))[0];
      var K = (he[1] - he[0]) / (1 - he[0]);
      return V = (O = O[1].split(K))[0], L = O[1], [offsetSegment(k, P), offsetSegment(V, P), offsetSegment(L, P)];
    }
    function OffsetPathModifier() {
    }
    function getFontProperties(m) {
      for (var P = m.fStyle ? m.fStyle.split(" ") : [], k = "normal", L = "normal", O = P.length, V = 0; V < O; V += 1)
        switch (P[V].toLowerCase()) {
          case "italic":
            L = "italic";
            break;
          case "bold":
            k = "700";
            break;
          case "black":
            k = "900";
            break;
          case "medium":
            k = "500";
            break;
          case "regular":
          case "normal":
            k = "400";
            break;
          case "light":
          case "thin":
            k = "200";
        }
      return { style: L, weight: m.fWeight || k };
    }
    extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(m, P) {
      this.getValue = this.processKeys, this.c = PropertyFactory.getProp(m, P.c, 0, null, this), this.o = PropertyFactory.getProp(m, P.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(m, P.tr, this), this.so = PropertyFactory.getProp(m, P.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(m, P.tr.eo, 0, 0.01, this), this.data = P, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
    }, RepeaterModifier.prototype.applyTransforms = function(m, P, k, L, O, V) {
      var he = V ? -1 : 1, K = L.s.v[0] + (1 - L.s.v[0]) * (1 - O), de = L.s.v[1] + (1 - L.s.v[1]) * (1 - O);
      m.translate(L.p.v[0] * he * O, L.p.v[1] * he * O, L.p.v[2]), P.translate(-L.a.v[0], -L.a.v[1], L.a.v[2]), P.rotate(-L.r.v * he * O), P.translate(L.a.v[0], L.a.v[1], L.a.v[2]), k.translate(-L.a.v[0], -L.a.v[1], L.a.v[2]), k.scale(V ? 1 / K : K, V ? 1 / de : de), k.translate(L.a.v[0], L.a.v[1], L.a.v[2]);
    }, RepeaterModifier.prototype.init = function(m, P, k, L) {
      for (this.elem = m, this.arr = P, this.pos = k, this.elemsData = L, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(m), this.initModifierProperties(m, P[k]); k > 0; )
        k -= 1, this._elements.unshift(P[k]);
      this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, RepeaterModifier.prototype.resetElements = function(m) {
      var P, k = m.length;
      for (P = 0; P < k; P += 1)
        m[P]._processed = !1, m[P].ty === "gr" && this.resetElements(m[P].it);
    }, RepeaterModifier.prototype.cloneElements = function(m) {
      var P = JSON.parse(JSON.stringify(m));
      return this.resetElements(P), P;
    }, RepeaterModifier.prototype.changeGroupRender = function(m, P) {
      var k, L = m.length;
      for (k = 0; k < L; k += 1)
        m[k]._render = P, m[k].ty === "gr" && this.changeGroupRender(m[k].it, P);
    }, RepeaterModifier.prototype.processShapes = function(m) {
      var P, k, L, O, V, he = !1;
      if (this._mdf || m) {
        var K, de = Math.ceil(this.c.v);
        if (this._groups.length < de) {
          for (; this._groups.length < de; ) {
            var ce = { it: this.cloneElements(this._elements), ty: "gr" };
            ce.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, ce), this._groups.splice(0, 0, ce), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), he = !0;
        }
        for (V = 0, L = 0; L <= this._groups.length - 1; L += 1) {
          if (K = V < de, this._groups[L]._render = K, this.changeGroupRender(this._groups[L].it, K), !K) {
            var pe = this.elemsData[L].it, B = pe[pe.length - 1];
            B.transform.op.v !== 0 ? (B.transform.op._mdf = !0, B.transform.op.v = 0) : B.transform.op._mdf = !1;
          }
          V += 1;
        }
        this._currentCopies = de;
        var G = this.o.v, $ = G % 1, ie = G > 0 ? Math.floor(G) : Math.ceil(G), fe = this.pMatrix.props, Q = this.rMatrix.props, ue = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var me, ge, ve = 0;
        if (G > 0) {
          for (; ve < ie; )
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), ve += 1;
          $ && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, $, !1), ve += $);
        } else if (G < 0) {
          for (; ve > ie; )
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), ve -= 1;
          $ && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -$, !0), ve -= $);
        }
        for (L = this.data.m === 1 ? 0 : this._currentCopies - 1, O = this.data.m === 1 ? 1 : -1, V = this._currentCopies; V; ) {
          if (ge = (k = (P = this.elemsData[L].it)[P.length - 1].transform.mProps.v.props).length, P[P.length - 1].transform.mProps._mdf = !0, P[P.length - 1].transform.op._mdf = !0, P[P.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (L / (this._currentCopies - 1)), ve !== 0) {
            for ((L !== 0 && O === 1 || L !== this._currentCopies - 1 && O === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(Q[0], Q[1], Q[2], Q[3], Q[4], Q[5], Q[6], Q[7], Q[8], Q[9], Q[10], Q[11], Q[12], Q[13], Q[14], Q[15]), this.matrix.transform(ue[0], ue[1], ue[2], ue[3], ue[4], ue[5], ue[6], ue[7], ue[8], ue[9], ue[10], ue[11], ue[12], ue[13], ue[14], ue[15]), this.matrix.transform(fe[0], fe[1], fe[2], fe[3], fe[4], fe[5], fe[6], fe[7], fe[8], fe[9], fe[10], fe[11], fe[12], fe[13], fe[14], fe[15]), me = 0; me < ge; me += 1)
              k[me] = this.matrix.props[me];
            this.matrix.reset();
          } else
            for (this.matrix.reset(), me = 0; me < ge; me += 1)
              k[me] = this.matrix.props[me];
          ve += 1, V -= 1, L += O;
        }
      } else
        for (V = this._currentCopies, L = 0, O = 1; V; )
          k = (P = this.elemsData[L].it)[P.length - 1].transform.mProps.v.props, P[P.length - 1].transform.mProps._mdf = !1, P[P.length - 1].transform.op._mdf = !1, V -= 1, L += O;
      return he;
    }, RepeaterModifier.prototype.addShape = function() {
    }, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(m, P) {
      this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(m, P.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, RoundCornersModifier.prototype.processPath = function(m, P) {
      var k, L = shapePool.newElement();
      L.c = m.c;
      var O, V, he, K, de, ce, pe, B, G, $, ie, fe, Q = m._length, ue = 0;
      for (k = 0; k < Q; k += 1)
        O = m.v[k], he = m.o[k], V = m.i[k], O[0] === he[0] && O[1] === he[1] && O[0] === V[0] && O[1] === V[1] ? k !== 0 && k !== Q - 1 || m.c ? (K = k === 0 ? m.v[Q - 1] : m.v[k - 1], ce = (de = Math.sqrt(Math.pow(O[0] - K[0], 2) + Math.pow(O[1] - K[1], 2))) ? Math.min(de / 2, P) / de : 0, pe = ie = O[0] + (K[0] - O[0]) * ce, B = fe = O[1] - (O[1] - K[1]) * ce, G = pe - (pe - O[0]) * roundCorner, $ = B - (B - O[1]) * roundCorner, L.setTripleAt(pe, B, G, $, ie, fe, ue), ue += 1, K = k === Q - 1 ? m.v[0] : m.v[k + 1], ce = (de = Math.sqrt(Math.pow(O[0] - K[0], 2) + Math.pow(O[1] - K[1], 2))) ? Math.min(de / 2, P) / de : 0, pe = G = O[0] + (K[0] - O[0]) * ce, B = $ = O[1] + (K[1] - O[1]) * ce, ie = pe - (pe - O[0]) * roundCorner, fe = B - (B - O[1]) * roundCorner, L.setTripleAt(pe, B, G, $, ie, fe, ue), ue += 1) : (L.setTripleAt(O[0], O[1], he[0], he[1], V[0], V[1], ue), ue += 1) : (L.setTripleAt(m.v[k][0], m.v[k][1], m.o[k][0], m.o[k][1], m.i[k][0], m.i[k][1], ue), ue += 1);
      return L;
    }, RoundCornersModifier.prototype.processShapes = function(m) {
      var P, k, L, O, V, he, K = this.shapes.length, de = this.rd.v;
      if (de !== 0)
        for (k = 0; k < K; k += 1) {
          if (he = (V = this.shapes[k]).localShapeCollection, V.shape._mdf || this._mdf || m)
            for (he.releaseShapes(), V.shape._mdf = !0, P = V.shape.paths.shapes, O = V.shape.paths._length, L = 0; L < O; L += 1)
              he.addShape(this.processPath(P[L], de));
          V.shape.paths = V.localShapeCollection;
        }
      this.dynamicProperties.length || (this._mdf = !1);
    }, PolynomialBezier.prototype.point = function(m) {
      return [((this.a[0] * m + this.b[0]) * m + this.c[0]) * m + this.d[0], ((this.a[1] * m + this.b[1]) * m + this.c[1]) * m + this.d[1]];
    }, PolynomialBezier.prototype.derivative = function(m) {
      return [(3 * m * this.a[0] + 2 * this.b[0]) * m + this.c[0], (3 * m * this.a[1] + 2 * this.b[1]) * m + this.c[1]];
    }, PolynomialBezier.prototype.tangentAngle = function(m) {
      var P = this.derivative(m);
      return Math.atan2(P[1], P[0]);
    }, PolynomialBezier.prototype.normalAngle = function(m) {
      var P = this.derivative(m);
      return Math.atan2(P[0], P[1]);
    }, PolynomialBezier.prototype.inflectionPoints = function() {
      var m = this.a[1] * this.b[0] - this.a[0] * this.b[1];
      if (floatZero(m))
        return [];
      var P = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / m, k = P * P - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / m;
      if (k < 0)
        return [];
      var L = Math.sqrt(k);
      return floatZero(L) ? L > 0 && L < 1 ? [P] : [] : [P - L, P + L].filter(function(O) {
        return O > 0 && O < 1;
      });
    }, PolynomialBezier.prototype.split = function(m) {
      if (m <= 0)
        return [singlePoint(this.points[0]), this];
      if (m >= 1)
        return [this, singlePoint(this.points[this.points.length - 1])];
      var P = lerpPoint(this.points[0], this.points[1], m), k = lerpPoint(this.points[1], this.points[2], m), L = lerpPoint(this.points[2], this.points[3], m), O = lerpPoint(P, k, m), V = lerpPoint(k, L, m), he = lerpPoint(O, V, m);
      return [new PolynomialBezier(this.points[0], P, O, he, !0), new PolynomialBezier(he, V, L, this.points[3], !0)];
    }, PolynomialBezier.prototype.bounds = function() {
      return { x: extrema(this, 0), y: extrema(this, 1) };
    }, PolynomialBezier.prototype.boundingBox = function() {
      var m = this.bounds();
      return { left: m.x.min, right: m.x.max, top: m.y.min, bottom: m.y.max, width: m.x.max - m.x.min, height: m.y.max - m.y.min, cx: (m.x.max + m.x.min) / 2, cy: (m.y.max + m.y.min) / 2 };
    }, PolynomialBezier.prototype.intersections = function(m, P, k) {
      P === void 0 && (P = 2), k === void 0 && (k = 7);
      var L = [];
      return intersectsImpl(intersectData(this, 0, 1), intersectData(m, 0, 1), 0, P, L, k), L;
    }, PolynomialBezier.shapeSegment = function(m, P) {
      var k = (P + 1) % m.length();
      return new PolynomialBezier(m.v[P], m.o[P], m.i[k], m.v[k], !0);
    }, PolynomialBezier.shapeSegmentInverted = function(m, P) {
      var k = (P + 1) % m.length();
      return new PolynomialBezier(m.v[k], m.i[k], m.o[P], m.v[P], !0);
    }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(m, P) {
      this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(m, P.s, 0, null, this), this.frequency = PropertyFactory.getProp(m, P.r, 0, null, this), this.pointsType = PropertyFactory.getProp(m, P.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
    }, ZigZagModifier.prototype.processPath = function(m, P, k, L) {
      var O = m._length, V = shapePool.newElement();
      if (V.c = m.c, m.c || (O -= 1), O === 0)
        return V;
      var he = -1, K = PolynomialBezier.shapeSegment(m, 0);
      zigZagCorner(V, m, 0, P, k, L, he);
      for (var de = 0; de < O; de += 1)
        he = zigZagSegment(V, K, P, k, L, -he), K = de !== O - 1 || m.c ? PolynomialBezier.shapeSegment(m, (de + 1) % O) : null, zigZagCorner(V, m, de + 1, P, k, L, he);
      return V;
    }, ZigZagModifier.prototype.processShapes = function(m) {
      var P, k, L, O, V, he, K = this.shapes.length, de = this.amplitude.v, ce = Math.max(0, Math.round(this.frequency.v)), pe = this.pointsType.v;
      if (de !== 0)
        for (k = 0; k < K; k += 1) {
          if (he = (V = this.shapes[k]).localShapeCollection, V.shape._mdf || this._mdf || m)
            for (he.releaseShapes(), V.shape._mdf = !0, P = V.shape.paths.shapes, O = V.shape.paths._length, L = 0; L < O; L += 1)
              he.addShape(this.processPath(P[L], de, ce, pe));
          V.shape.paths = V.localShapeCollection;
        }
      this.dynamicProperties.length || (this._mdf = !1);
    }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(m, P) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(m, P.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(m, P.ml, 0, null, this), this.lineJoin = P.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
    }, OffsetPathModifier.prototype.processPath = function(m, P, k, L) {
      var O = shapePool.newElement();
      O.c = m.c;
      var V, he, K, de = m.length();
      m.c || (de -= 1);
      var ce = [];
      for (V = 0; V < de; V += 1)
        K = PolynomialBezier.shapeSegment(m, V), ce.push(offsetSegmentSplit(K, P));
      if (!m.c)
        for (V = de - 1; V >= 0; V -= 1)
          K = PolynomialBezier.shapeSegmentInverted(m, V), ce.push(offsetSegmentSplit(K, P));
      ce = pruneIntersections(ce);
      var pe = null, B = null;
      for (V = 0; V < ce.length; V += 1) {
        var G = ce[V];
        for (B && (pe = joinLines(O, B, G[0], k, L)), B = G[G.length - 1], he = 0; he < G.length; he += 1)
          K = G[he], pe && pointEqual(K.points[0], pe) ? O.setXYAt(K.points[1][0], K.points[1][1], "o", O.length() - 1) : O.setTripleAt(K.points[0][0], K.points[0][1], K.points[1][0], K.points[1][1], K.points[0][0], K.points[0][1], O.length()), O.setTripleAt(K.points[3][0], K.points[3][1], K.points[3][0], K.points[3][1], K.points[2][0], K.points[2][1], O.length()), pe = K.points[3];
      }
      return ce.length && joinLines(O, B, ce[0][0], k, L), O;
    }, OffsetPathModifier.prototype.processShapes = function(m) {
      var P, k, L, O, V, he, K = this.shapes.length, de = this.amount.v, ce = this.miterLimit.v, pe = this.lineJoin;
      if (de !== 0)
        for (k = 0; k < K; k += 1) {
          if (he = (V = this.shapes[k]).localShapeCollection, V.shape._mdf || this._mdf || m)
            for (he.releaseShapes(), V.shape._mdf = !0, P = V.shape.paths.shapes, O = V.shape.paths._length, L = 0; L < O; L += 1)
              he.addShape(this.processPath(P[L], de, pe, ce));
          V.shape.paths = V.localShapeCollection;
        }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    var FontManager = function() {
      var m = { w: 0, size: 0, shapes: [], data: { shapes: [] } }, P = [];
      P = P.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
      var k = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"], L = [65039, 8205];
      function O(K, de) {
        var ce = createTag("span");
        ce.setAttribute("aria-hidden", !0), ce.style.fontFamily = de;
        var pe = createTag("span");
        pe.innerText = "giItT1WQy@!-/#", ce.style.position = "absolute", ce.style.left = "-10000px", ce.style.top = "-10000px", ce.style.fontSize = "300px", ce.style.fontVariant = "normal", ce.style.fontStyle = "normal", ce.style.fontWeight = "normal", ce.style.letterSpacing = "0", ce.appendChild(pe), document.body.appendChild(ce);
        var B = pe.offsetWidth;
        return pe.style.fontFamily = function(G) {
          var $, ie = G.split(","), fe = ie.length, Q = [];
          for ($ = 0; $ < fe; $ += 1)
            ie[$] !== "sans-serif" && ie[$] !== "monospace" && Q.push(ie[$]);
          return Q.join(",");
        }(K) + ", " + de, { node: pe, w: B, parent: ce };
      }
      function V(K, de) {
        var ce, pe = document.body && de ? "svg" : "canvas", B = getFontProperties(K);
        if (pe === "svg") {
          var G = createNS("text");
          G.style.fontSize = "100px", G.setAttribute("font-family", K.fFamily), G.setAttribute("font-style", B.style), G.setAttribute("font-weight", B.weight), G.textContent = "1", K.fClass ? (G.style.fontFamily = "inherit", G.setAttribute("class", K.fClass)) : G.style.fontFamily = K.fFamily, de.appendChild(G), ce = G;
        } else {
          var $ = new OffscreenCanvas(500, 500).getContext("2d");
          $.font = B.style + " " + B.weight + " 100px " + K.fFamily, ce = $;
        }
        return { measureText: function(ie) {
          return pe === "svg" ? (ce.textContent = ie, ce.getComputedTextLength()) : ce.measureText(ie).width;
        } };
      }
      var he = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      return he.isModifier = function(K, de) {
        var ce = K.toString(16) + de.toString(16);
        return k.indexOf(ce) !== -1;
      }, he.isZeroWidthJoiner = function(K, de) {
        return de ? K === L[0] && de === L[1] : K === L[1];
      }, he.isCombinedCharacter = function(K) {
        return P.indexOf(K) !== -1;
      }, he.prototype = { addChars: function(K) {
        if (K) {
          var de;
          this.chars || (this.chars = []);
          var ce, pe, B = K.length, G = this.chars.length;
          for (de = 0; de < B; de += 1) {
            for (ce = 0, pe = !1; ce < G; )
              this.chars[ce].style === K[de].style && this.chars[ce].fFamily === K[de].fFamily && this.chars[ce].ch === K[de].ch && (pe = !0), ce += 1;
            pe || (this.chars.push(K[de]), G += 1);
          }
        }
      }, addFonts: function(K, de) {
        if (K) {
          if (this.chars)
            return this.isLoaded = !0, void (this.fonts = K.list);
          if (!document.body)
            return this.isLoaded = !0, K.list.forEach(function(ge) {
              ge.helper = V(ge), ge.cache = {};
            }), void (this.fonts = K.list);
          var ce, pe = K.list, B = pe.length, G = B;
          for (ce = 0; ce < B; ce += 1) {
            var $, ie, fe = !0;
            if (pe[ce].loaded = !1, pe[ce].monoCase = O(pe[ce].fFamily, "monospace"), pe[ce].sansCase = O(pe[ce].fFamily, "sans-serif"), pe[ce].fPath) {
              if (pe[ce].fOrigin === "p" || pe[ce].origin === 3) {
                if (($ = document.querySelectorAll('style[f-forigin="p"][f-family="' + pe[ce].fFamily + '"], style[f-origin="3"][f-family="' + pe[ce].fFamily + '"]')).length > 0 && (fe = !1), fe) {
                  var Q = createTag("style");
                  Q.setAttribute("f-forigin", pe[ce].fOrigin), Q.setAttribute("f-origin", pe[ce].origin), Q.setAttribute("f-family", pe[ce].fFamily), Q.type = "text/css", Q.innerText = "@font-face {font-family: " + pe[ce].fFamily + "; font-style: normal; src: url('" + pe[ce].fPath + "');}", de.appendChild(Q);
                }
              } else if (pe[ce].fOrigin === "g" || pe[ce].origin === 1) {
                for ($ = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), ie = 0; ie < $.length; ie += 1)
                  $[ie].href.indexOf(pe[ce].fPath) !== -1 && (fe = !1);
                if (fe) {
                  var ue = createTag("link");
                  ue.setAttribute("f-forigin", pe[ce].fOrigin), ue.setAttribute("f-origin", pe[ce].origin), ue.type = "text/css", ue.rel = "stylesheet", ue.href = pe[ce].fPath, document.body.appendChild(ue);
                }
              } else if (pe[ce].fOrigin === "t" || pe[ce].origin === 2) {
                for ($ = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), ie = 0; ie < $.length; ie += 1)
                  pe[ce].fPath === $[ie].src && (fe = !1);
                if (fe) {
                  var me = createTag("link");
                  me.setAttribute("f-forigin", pe[ce].fOrigin), me.setAttribute("f-origin", pe[ce].origin), me.setAttribute("rel", "stylesheet"), me.setAttribute("href", pe[ce].fPath), de.appendChild(me);
                }
              }
            } else
              pe[ce].loaded = !0, G -= 1;
            pe[ce].helper = V(pe[ce], de), pe[ce].cache = {}, this.fonts.push(pe[ce]);
          }
          G === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
        } else
          this.isLoaded = !0;
      }, getCharData: function(K, de, ce) {
        for (var pe = 0, B = this.chars.length; pe < B; ) {
          if (this.chars[pe].ch === K && this.chars[pe].style === de && this.chars[pe].fFamily === ce)
            return this.chars[pe];
          pe += 1;
        }
        return (typeof K == "string" && K.charCodeAt(0) !== 13 || !K) && console && console.warn && !this._warned && (this._warned = !0), m;
      }, getFontByName: function(K) {
        for (var de = 0, ce = this.fonts.length; de < ce; ) {
          if (this.fonts[de].fName === K)
            return this.fonts[de];
          de += 1;
        }
        return this.fonts[0];
      }, measureText: function(K, de, ce) {
        var pe = this.getFontByName(de), B = K.charCodeAt(0);
        if (!pe.cache[B + 1]) {
          var G = pe.helper;
          if (K === " ") {
            var $ = G.measureText("|" + K + "|"), ie = G.measureText("||");
            pe.cache[B + 1] = ($ - ie) / 100;
          } else
            pe.cache[B + 1] = G.measureText(K) / 100;
        }
        return pe.cache[B + 1] * ce;
      }, checkLoadedFonts: function() {
        var K, de, ce, pe = this.fonts.length, B = pe;
        for (K = 0; K < pe; K += 1)
          this.fonts[K].loaded ? B -= 1 : this.fonts[K].fOrigin === "n" || this.fonts[K].origin === 0 ? this.fonts[K].loaded = !0 : (de = this.fonts[K].monoCase.node, ce = this.fonts[K].monoCase.w, de.offsetWidth !== ce ? (B -= 1, this.fonts[K].loaded = !0) : (de = this.fonts[K].sansCase.node, ce = this.fonts[K].sansCase.w, de.offsetWidth !== ce && (B -= 1, this.fonts[K].loaded = !0)), this.fonts[K].loaded && (this.fonts[K].sansCase.parent.parentNode.removeChild(this.fonts[K].sansCase.parent), this.fonts[K].monoCase.parent.parentNode.removeChild(this.fonts[K].monoCase.parent)));
        B !== 0 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }, setIsLoaded: function() {
        this.isLoaded = !0;
      } }, he;
    }();
    function RenderableElement() {
    }
    RenderableElement.prototype = { initRenderable: function() {
      this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
    }, addRenderableComponent: function(m) {
      this.renderableComponents.indexOf(m) === -1 && this.renderableComponents.push(m);
    }, removeRenderableComponent: function(m) {
      this.renderableComponents.indexOf(m) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(m), 1);
    }, prepareRenderableFrame: function(m) {
      this.checkLayerLimits(m);
    }, checkTransparency: function() {
      this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
    }, checkLayerLimits: function(m) {
      this.data.ip - this.data.st <= m && this.data.op - this.data.st > m ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
    }, renderRenderable: function() {
      var m, P = this.renderableComponents.length;
      for (m = 0; m < P; m += 1)
        this.renderableComponents[m].renderFrame(this._isFirstFrame);
    }, sourceRectAtTime: function() {
      return { top: 0, left: 0, width: 100, height: 100 };
    }, getLayerSize: function() {
      return this.data.ty === 5 ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height };
    } };
    var getBlendMode = (blendModeEnums = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" }, function(m) {
      return blendModeEnums[m] || "";
    }), blendModeEnums;
    function SliderEffect(m, P, k) {
      this.p = PropertyFactory.getProp(P, m.v, 0, 0, k);
    }
    function AngleEffect(m, P, k) {
      this.p = PropertyFactory.getProp(P, m.v, 0, 0, k);
    }
    function ColorEffect(m, P, k) {
      this.p = PropertyFactory.getProp(P, m.v, 1, 0, k);
    }
    function PointEffect(m, P, k) {
      this.p = PropertyFactory.getProp(P, m.v, 1, 0, k);
    }
    function LayerIndexEffect(m, P, k) {
      this.p = PropertyFactory.getProp(P, m.v, 0, 0, k);
    }
    function MaskIndexEffect(m, P, k) {
      this.p = PropertyFactory.getProp(P, m.v, 0, 0, k);
    }
    function CheckboxEffect(m, P, k) {
      this.p = PropertyFactory.getProp(P, m.v, 0, 0, k);
    }
    function NoValueEffect() {
      this.p = {};
    }
    function EffectsManager(m, P) {
      var k, L = m.ef || [];
      this.effectElements = [];
      var O, V = L.length;
      for (k = 0; k < V; k += 1)
        O = new GroupEffect(L[k], P), this.effectElements.push(O);
    }
    function GroupEffect(m, P) {
      this.init(m, P);
    }
    function BaseElement() {
    }
    function FrameElement() {
    }
    function FootageElement(m, P, k) {
      this.initFrame(), this.initRenderable(), this.assetData = P.getAssetData(m.refId), this.footageData = P.imageLoader.getAsset(this.assetData), this.initBaseData(m, P, k);
    }
    function AudioElement(m, P, k) {
      this.initFrame(), this.initRenderable(), this.assetData = P.getAssetData(m.refId), this.initBaseData(m, P, k), this._isPlaying = !1, this._canPlay = !1;
      var L = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(L), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = m.tm ? PropertyFactory.getProp(this, m.tm, 0, P.frameRate, this) : { _placeholder: !0 }, this.lv = PropertyFactory.getProp(this, m.au && m.au.lv ? m.au.lv : { k: [100] }, 1, 0.01, this);
    }
    function BaseRenderer() {
    }
    function TransformElement() {
    }
    function MaskElement(m, P, k) {
      this.data = m, this.element = P, this.globalData = k, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var L, O, V = this.globalData.defs, he = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = createSizedArray(he), this.solidPath = "";
      var K, de, ce, pe, B, G, $ = this.masksProperties, ie = 0, fe = [], Q = createElementID(), ue = "clipPath", me = "clip-path";
      for (L = 0; L < he; L += 1)
        if (($[L].mode !== "a" && $[L].mode !== "n" || $[L].inv || $[L].o.k !== 100 || $[L].o.x) && (ue = "mask", me = "mask"), $[L].mode !== "s" && $[L].mode !== "i" || ie !== 0 ? ce = null : ((ce = createNS("rect")).setAttribute("fill", "#ffffff"), ce.setAttribute("width", this.element.comp.data.w || 0), ce.setAttribute("height", this.element.comp.data.h || 0), fe.push(ce)), O = createNS("path"), $[L].mode === "n")
          this.viewData[L] = { op: PropertyFactory.getProp(this.element, $[L].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, $[L], 3), elem: O, lastPath: "" }, V.appendChild(O);
        else {
          var ge;
          if (ie += 1, O.setAttribute("fill", $[L].mode === "s" ? "#000000" : "#ffffff"), O.setAttribute("clip-rule", "nonzero"), $[L].x.k !== 0 ? (ue = "mask", me = "mask", G = PropertyFactory.getProp(this.element, $[L].x, 0, null, this.element), ge = createElementID(), (pe = createNS("filter")).setAttribute("id", ge), (B = createNS("feMorphology")).setAttribute("operator", "erode"), B.setAttribute("in", "SourceGraphic"), B.setAttribute("radius", "0"), pe.appendChild(B), V.appendChild(pe), O.setAttribute("stroke", $[L].mode === "s" ? "#000000" : "#ffffff")) : (B = null, G = null), this.storedData[L] = { elem: O, x: G, expan: B, lastPath: "", lastOperator: "", filterId: ge, lastRadius: 0 }, $[L].mode === "i") {
            de = fe.length;
            var ve = createNS("g");
            for (K = 0; K < de; K += 1)
              ve.appendChild(fe[K]);
            var _e = createNS("mask");
            _e.setAttribute("mask-type", "alpha"), _e.setAttribute("id", Q + "_" + ie), _e.appendChild(O), V.appendChild(_e), ve.setAttribute("mask", "url(" + getLocationHref() + "#" + Q + "_" + ie + ")"), fe.length = 0, fe.push(ve);
          } else
            fe.push(O);
          $[L].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[L] = { elem: O, lastPath: "", op: PropertyFactory.getProp(this.element, $[L].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, $[L], 3), invRect: ce }, this.viewData[L].prop.k || this.drawPath($[L], this.viewData[L].prop.v, this.viewData[L]);
        }
      for (this.maskElement = createNS(ue), he = fe.length, L = 0; L < he; L += 1)
        this.maskElement.appendChild(fe[L]);
      ie > 0 && (this.maskElement.setAttribute("id", Q), this.element.maskedElement.setAttribute(me, "url(" + getLocationHref() + "#" + Q + ")"), V.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(m, P) {
      var k;
      this.data = m, this.effectElements = [], this.initDynamicPropertyContainer(P);
      var L, O = this.data.ef.length, V = this.data.ef;
      for (k = 0; k < O; k += 1) {
        switch (L = null, V[k].ty) {
          case 0:
            L = new SliderEffect(V[k], P, this);
            break;
          case 1:
            L = new AngleEffect(V[k], P, this);
            break;
          case 2:
            L = new ColorEffect(V[k], P, this);
            break;
          case 3:
            L = new PointEffect(V[k], P, this);
            break;
          case 4:
          case 7:
            L = new CheckboxEffect(V[k], P, this);
            break;
          case 10:
            L = new LayerIndexEffect(V[k], P, this);
            break;
          case 11:
            L = new MaskIndexEffect(V[k], P, this);
            break;
          case 5:
            L = new EffectsManager(V[k], P);
            break;
          default:
            L = new NoValueEffect(V[k]);
        }
        L && this.effectElements.push(L);
      }
    }, BaseElement.prototype = { checkMasks: function() {
      if (!this.data.hasMask)
        return !1;
      for (var m = 0, P = this.data.masksProperties.length; m < P; ) {
        if (this.data.masksProperties[m].mode !== "n" && this.data.masksProperties[m].cl !== !1)
          return !0;
        m += 1;
      }
      return !1;
    }, initExpressions: function() {
      var m = getExpressionInterfaces();
      if (m) {
        var P = m("layer"), k = m("effects"), L = m("shape"), O = m("text"), V = m("comp");
        this.layerInterface = P(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
        var he = k.createEffectsInterface(this, this.layerInterface);
        this.layerInterface.registerEffectsInterface(he), this.data.ty === 0 || this.data.xt ? this.compInterface = V(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = L(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = O(this), this.layerInterface.text = this.layerInterface.textInterface);
      }
    }, setBlendMode: function() {
      var m = getBlendMode(this.data.bm);
      (this.baseElement || this.layerElement).style["mix-blend-mode"] = m;
    }, initBaseData: function(m, P, k) {
      this.globalData = P, this.comp = k, this.data = m, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
    }, getType: function() {
      return this.type;
    }, sourceRectAtTime: function() {
    } }, FrameElement.prototype = { initFrame: function() {
      this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
    }, prepareProperties: function(m, P) {
      var k, L = this.dynamicProperties.length;
      for (k = 0; k < L; k += 1)
        (P || this._isParent && this.dynamicProperties[k].propType === "transform") && (this.dynamicProperties[k].getValue(), this.dynamicProperties[k]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
    }, addDynamicProperty: function(m) {
      this.dynamicProperties.indexOf(m) === -1 && this.dynamicProperties.push(m);
    } }, FootageElement.prototype.prepareFrame = function() {
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
      return null;
    }, FootageElement.prototype.renderFrame = function() {
    }, FootageElement.prototype.destroy = function() {
    }, FootageElement.prototype.initExpressions = function() {
      var m = getExpressionInterfaces();
      if (m) {
        var P = m("footage");
        this.layerInterface = P(this);
      }
    }, FootageElement.prototype.getFootageData = function() {
      return this.footageData;
    }, AudioElement.prototype.prepareFrame = function(m) {
      if (this.prepareRenderableFrame(m, !0), this.prepareProperties(m, !0), this.tm._placeholder)
        this._currentTime = m / this.data.sr;
      else {
        var P = this.tm.v;
        this._currentTime = P;
      }
      this._volume = this.lv.v[0];
      var k = this._volume * this._volumeMultiplier;
      this._previousVolume !== k && (this._previousVolume = k, this.audio.volume(k));
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
    }, AudioElement.prototype.show = function() {
    }, AudioElement.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = !1;
    }, AudioElement.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
    }, AudioElement.prototype.resume = function() {
      this._canPlay = !0;
    }, AudioElement.prototype.setRate = function(m) {
      this.audio.rate(m);
    }, AudioElement.prototype.volume = function(m) {
      this._volumeMultiplier = m, this._previousVolume = m * this._volume, this.audio.volume(this._previousVolume);
    }, AudioElement.prototype.getBaseElement = function() {
      return null;
    }, AudioElement.prototype.destroy = function() {
    }, AudioElement.prototype.sourceRectAtTime = function() {
    }, AudioElement.prototype.initExpressions = function() {
    }, BaseRenderer.prototype.checkLayers = function(m) {
      var P, k, L = this.layers.length;
      for (this.completeLayers = !0, P = L - 1; P >= 0; P -= 1)
        this.elements[P] || (k = this.layers[P]).ip - k.st <= m - this.layers[P].st && k.op - k.st > m - this.layers[P].st && this.buildItem(P), this.completeLayers = !!this.elements[P] && this.completeLayers;
      this.checkPendingElements();
    }, BaseRenderer.prototype.createItem = function(m) {
      switch (m.ty) {
        case 2:
          return this.createImage(m);
        case 0:
          return this.createComp(m);
        case 1:
          return this.createSolid(m);
        case 3:
          return this.createNull(m);
        case 4:
          return this.createShape(m);
        case 5:
          return this.createText(m);
        case 6:
          return this.createAudio(m);
        case 13:
          return this.createCamera(m);
        case 15:
          return this.createFootage(m);
        default:
          return this.createNull(m);
      }
    }, BaseRenderer.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.");
    }, BaseRenderer.prototype.createAudio = function(m) {
      return new AudioElement(m, this.globalData, this);
    }, BaseRenderer.prototype.createFootage = function(m) {
      return new FootageElement(m, this.globalData, this);
    }, BaseRenderer.prototype.buildAllItems = function() {
      var m, P = this.layers.length;
      for (m = 0; m < P; m += 1)
        this.buildItem(m);
      this.checkPendingElements();
    }, BaseRenderer.prototype.includeLayers = function(m) {
      var P;
      this.completeLayers = !1;
      var k, L = m.length, O = this.layers.length;
      for (P = 0; P < L; P += 1)
        for (k = 0; k < O; ) {
          if (this.layers[k].id === m[P].id) {
            this.layers[k] = m[P];
            break;
          }
          k += 1;
        }
    }, BaseRenderer.prototype.setProjectInterface = function(m) {
      this.globalData.projectInterface = m;
    }, BaseRenderer.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, BaseRenderer.prototype.buildElementParenting = function(m, P, k) {
      for (var L = this.elements, O = this.layers, V = 0, he = O.length; V < he; )
        O[V].ind == P && (L[V] && L[V] !== !0 ? (k.push(L[V]), L[V].setAsParent(), O[V].parent !== void 0 ? this.buildElementParenting(m, O[V].parent, k) : m.setHierarchy(k)) : (this.buildItem(V), this.addPendingElement(m))), V += 1;
    }, BaseRenderer.prototype.addPendingElement = function(m) {
      this.pendingElements.push(m);
    }, BaseRenderer.prototype.searchExtraCompositions = function(m) {
      var P, k = m.length;
      for (P = 0; P < k; P += 1)
        if (m[P].xt) {
          var L = this.createComp(m[P]);
          L.initExpressions(), this.globalData.projectInterface.registerComposition(L);
        }
    }, BaseRenderer.prototype.getElementById = function(m) {
      var P, k = this.elements.length;
      for (P = 0; P < k; P += 1)
        if (this.elements[P].data.ind === m)
          return this.elements[P];
      return null;
    }, BaseRenderer.prototype.getElementByPath = function(m) {
      var P, k = m.shift();
      if (typeof k == "number")
        P = this.elements[k];
      else {
        var L, O = this.elements.length;
        for (L = 0; L < O; L += 1)
          if (this.elements[L].data.nm === k) {
            P = this.elements[L];
            break;
          }
      }
      return m.length === 0 ? P : P.getElementByPath(m);
    }, BaseRenderer.prototype.setupGlobalData = function(m, P) {
      this.globalData.fontManager = new FontManager(), this.globalData.fontManager.addChars(m.chars), this.globalData.fontManager.addFonts(m.fonts, P), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = m.fr, this.globalData.nm = m.nm, this.globalData.compSize = { w: m.w, h: m.h };
    }, TransformElement.prototype = { initTransform: function() {
      this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: !1, _opMdf: !1, mat: new Matrix() }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
    }, renderTransform: function() {
      if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
        var m, P = this.finalTransform.mat, k = 0, L = this.hierarchy.length;
        if (!this.finalTransform._matMdf)
          for (; k < L; ) {
            if (this.hierarchy[k].finalTransform.mProp._mdf) {
              this.finalTransform._matMdf = !0;
              break;
            }
            k += 1;
          }
        if (this.finalTransform._matMdf)
          for (m = this.finalTransform.mProp.v.props, P.cloneFromProps(m), k = 0; k < L; k += 1)
            m = this.hierarchy[k].finalTransform.mProp.v.props, P.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]);
      }
    }, globalToLocal: function(m) {
      var P = [];
      P.push(this.finalTransform);
      for (var k, L = !0, O = this.comp; L; )
        O.finalTransform ? (O.data.hasMask && P.splice(0, 0, O.finalTransform), O = O.comp) : L = !1;
      var V, he = P.length;
      for (k = 0; k < he; k += 1)
        V = P[k].mat.applyToPointArray(0, 0, 0), m = [m[0] - V[0], m[1] - V[1], 0];
      return m;
    }, mHelper: new Matrix() }, MaskElement.prototype.getMaskProperty = function(m) {
      return this.viewData[m].prop;
    }, MaskElement.prototype.renderFrame = function(m) {
      var P, k = this.element.finalTransform.mat, L = this.masksProperties.length;
      for (P = 0; P < L; P += 1)
        if ((this.viewData[P].prop._mdf || m) && this.drawPath(this.masksProperties[P], this.viewData[P].prop.v, this.viewData[P]), (this.viewData[P].op._mdf || m) && this.viewData[P].elem.setAttribute("fill-opacity", this.viewData[P].op.v), this.masksProperties[P].mode !== "n" && (this.viewData[P].invRect && (this.element.finalTransform.mProp._mdf || m) && this.viewData[P].invRect.setAttribute("transform", k.getInverseMatrix().to2dCSS()), this.storedData[P].x && (this.storedData[P].x._mdf || m))) {
          var O = this.storedData[P].expan;
          this.storedData[P].x.v < 0 ? (this.storedData[P].lastOperator !== "erode" && (this.storedData[P].lastOperator = "erode", this.storedData[P].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[P].filterId + ")")), O.setAttribute("radius", -this.storedData[P].x.v)) : (this.storedData[P].lastOperator !== "dilate" && (this.storedData[P].lastOperator = "dilate", this.storedData[P].elem.setAttribute("filter", null)), this.storedData[P].elem.setAttribute("stroke-width", 2 * this.storedData[P].x.v));
        }
    }, MaskElement.prototype.getMaskelement = function() {
      return this.maskElement;
    }, MaskElement.prototype.createLayerSolidPath = function() {
      var m = "M0,0 ";
      return m += " h" + this.globalData.compSize.w, m += " v" + this.globalData.compSize.h, m += " h-" + this.globalData.compSize.w, m += " v-" + this.globalData.compSize.h + " ";
    }, MaskElement.prototype.drawPath = function(m, P, k) {
      var L, O, V = " M" + P.v[0][0] + "," + P.v[0][1];
      for (O = P._length, L = 1; L < O; L += 1)
        V += " C" + P.o[L - 1][0] + "," + P.o[L - 1][1] + " " + P.i[L][0] + "," + P.i[L][1] + " " + P.v[L][0] + "," + P.v[L][1];
      if (P.c && O > 1 && (V += " C" + P.o[L - 1][0] + "," + P.o[L - 1][1] + " " + P.i[0][0] + "," + P.i[0][1] + " " + P.v[0][0] + "," + P.v[0][1]), k.lastPath !== V) {
        var he = "";
        k.elem && (P.c && (he = m.inv ? this.solidPath + V : V), k.elem.setAttribute("d", he)), k.lastPath = V;
      }
    }, MaskElement.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    };
    var filtersFactory = function() {
      var m = {};
      return m.createFilter = function(P, k) {
        var L = createNS("filter");
        return L.setAttribute("id", P), k !== !0 && (L.setAttribute("filterUnits", "objectBoundingBox"), L.setAttribute("x", "0%"), L.setAttribute("y", "0%"), L.setAttribute("width", "100%"), L.setAttribute("height", "100%")), L;
      }, m.createAlphaToLuminanceFilter = function() {
        var P = createNS("feColorMatrix");
        return P.setAttribute("type", "matrix"), P.setAttribute("color-interpolation-filters", "sRGB"), P.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), P;
      }, m;
    }(), featureSupport = function() {
      var m = { maskType: !0, svgLumaHidden: !0, offscreenCanvas: typeof OffscreenCanvas < "u" };
      return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (m.maskType = !1), /firefox/i.test(navigator.userAgent) && (m.svgLumaHidden = !1), m;
    }(), registeredEffects = {}, idPrefix = "filter_result_";
    function SVGEffects(m) {
      var P, k, L = "SourceGraphic", O = m.data.ef ? m.data.ef.length : 0, V = createElementID(), he = filtersFactory.createFilter(V, !0), K = 0;
      for (this.filters = [], P = 0; P < O; P += 1) {
        k = null;
        var de = m.data.ef[P].ty;
        registeredEffects[de] && (k = new registeredEffects[de].effect(he, m.effectsManager.effectElements[P], m, idPrefix + K, L), L = idPrefix + K, registeredEffects[de].countsAsEffect && (K += 1)), k && this.filters.push(k);
      }
      K && (m.globalData.defs.appendChild(he), m.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + V + ")")), this.filters.length && m.addRenderableComponent(this);
    }
    function registerEffect(m, P, k) {
      registeredEffects[m] = { effect: P, countsAsEffect: k };
    }
    function SVGBaseElement() {
    }
    function HierarchyElement() {
    }
    function RenderableDOMElement() {
    }
    function IImageElement(m, P, k) {
      this.assetData = P.getAssetData(m.refId), this.initElement(m, P, k), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h };
    }
    function ProcessedElement(m, P) {
      this.elem = m, this.pos = P;
    }
    function IShapeElement() {
    }
    SVGEffects.prototype.renderFrame = function(m) {
      var P, k = this.filters.length;
      for (P = 0; P < k; P += 1)
        this.filters[P].renderFrame(m);
    }, SVGBaseElement.prototype = { initRendererElement: function() {
      this.layerElement = createNS("g");
    }, createContainerElements: function() {
      this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
      var m = null;
      if (this.data.td) {
        this.matteMasks = {};
        var P = createNS("g");
        P.setAttribute("id", this.layerId), P.appendChild(this.layerElement), m = P, this.globalData.defs.appendChild(P);
      } else
        this.data.tt ? (this.matteElement.appendChild(this.layerElement), m = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
      if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
        var k = createNS("clipPath"), L = createNS("path");
        L.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
        var O = createElementID();
        if (k.setAttribute("id", O), k.appendChild(L), this.globalData.defs.appendChild(k), this.checkMasks()) {
          var V = createNS("g");
          V.setAttribute("clip-path", "url(" + getLocationHref() + "#" + O + ")"), V.appendChild(this.layerElement), this.transformedElement = V, m ? m.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
        } else
          this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + O + ")");
      }
      this.data.bm !== 0 && this.setBlendMode();
    }, renderElement: function() {
      this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v);
    }, destroyBaseElement: function() {
      this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
    }, getBaseElement: function() {
      return this.data.hd ? null : this.baseElement;
    }, createRenderableComponents: function() {
      this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this);
    }, getMatte: function(m) {
      if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[m]) {
        var P, k, L, O, V = this.layerId + "_" + m;
        if (m === 1 || m === 3) {
          var he = createNS("mask");
          he.setAttribute("id", V), he.setAttribute("mask-type", m === 3 ? "luminance" : "alpha"), (L = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), he.appendChild(L), this.globalData.defs.appendChild(he), featureSupport.maskType || m !== 1 || (he.setAttribute("mask-type", "luminance"), P = createElementID(), k = filtersFactory.createFilter(P), this.globalData.defs.appendChild(k), k.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (O = createNS("g")).appendChild(L), he.appendChild(O), O.setAttribute("filter", "url(" + getLocationHref() + "#" + P + ")"));
        } else if (m === 2) {
          var K = createNS("mask");
          K.setAttribute("id", V), K.setAttribute("mask-type", "alpha");
          var de = createNS("g");
          K.appendChild(de), P = createElementID(), k = filtersFactory.createFilter(P);
          var ce = createNS("feComponentTransfer");
          ce.setAttribute("in", "SourceGraphic"), k.appendChild(ce);
          var pe = createNS("feFuncA");
          pe.setAttribute("type", "table"), pe.setAttribute("tableValues", "1.0 0.0"), ce.appendChild(pe), this.globalData.defs.appendChild(k);
          var B = createNS("rect");
          B.setAttribute("width", this.comp.data.w), B.setAttribute("height", this.comp.data.h), B.setAttribute("x", "0"), B.setAttribute("y", "0"), B.setAttribute("fill", "#ffffff"), B.setAttribute("opacity", "0"), de.setAttribute("filter", "url(" + getLocationHref() + "#" + P + ")"), de.appendChild(B), (L = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), de.appendChild(L), featureSupport.maskType || (K.setAttribute("mask-type", "luminance"), k.appendChild(filtersFactory.createAlphaToLuminanceFilter()), O = createNS("g"), de.appendChild(B), O.appendChild(this.layerElement), de.appendChild(O)), this.globalData.defs.appendChild(K);
        }
        this.matteMasks[m] = V;
      }
      return this.matteMasks[m];
    }, setMatte: function(m) {
      this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + m + ")");
    } }, HierarchyElement.prototype = { initHierarchy: function() {
      this.hierarchy = [], this._isParent = !1, this.checkParenting();
    }, setHierarchy: function(m) {
      this.hierarchy = m;
    }, setAsParent: function() {
      this._isParent = !0;
    }, checkParenting: function() {
      this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
    } }, extendPrototype([RenderableElement, createProxyFunction({ initElement: function(m, P, k) {
      this.initFrame(), this.initBaseData(m, P, k), this.initTransform(m, P, k), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
    }, hide: function() {
      this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0);
    }, show: function() {
      this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0);
    }, renderFrame: function() {
      this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
    }, renderInnerContent: function() {
    }, prepareFrame: function(m) {
      this._mdf = !1, this.prepareRenderableFrame(m), this.prepareProperties(m, this.isInRange), this.checkTransparency();
    }, destroy: function() {
      this.innerElem = null, this.destroyBaseElement();
    } })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
      var m = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", m), this.layerElement.appendChild(this.innerElem);
    }, IImageElement.prototype.sourceRectAtTime = function() {
      return this.sourceRect;
    }, IShapeElement.prototype = { addShapeToModifiers: function(m) {
      var P, k = this.shapeModifiers.length;
      for (P = 0; P < k; P += 1)
        this.shapeModifiers[P].addShape(m);
    }, isShapeInAnimatedModifiers: function(m) {
      for (var P = this.shapeModifiers.length; 0 < P; )
        if (this.shapeModifiers[0].isAnimatedWithShape(m))
          return !0;
      return !1;
    }, renderModifiers: function() {
      if (this.shapeModifiers.length) {
        var m, P = this.shapes.length;
        for (m = 0; m < P; m += 1)
          this.shapes[m].sh.reset();
        for (m = (P = this.shapeModifiers.length) - 1; m >= 0 && !this.shapeModifiers[m].processShapes(this._isFirstFrame); m -= 1)
          ;
      }
    }, searchProcessedElement: function(m) {
      for (var P = this.processedElements, k = 0, L = P.length; k < L; ) {
        if (P[k].elem === m)
          return P[k].pos;
        k += 1;
      }
      return 0;
    }, addProcessedElement: function(m, P) {
      for (var k = this.processedElements, L = k.length; L; )
        if (k[L -= 1].elem === m)
          return void (k[L].pos = P);
      k.push(new ProcessedElement(m, P));
    }, prepareFrame: function(m) {
      this.prepareRenderableFrame(m), this.prepareProperties(m, this.isInRange);
    } };
    var lineCapEnum = { 1: "butt", 2: "round", 3: "square" }, lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
    function SVGShapeData(m, P, k) {
      this.caches = [], this.styles = [], this.transformers = m, this.lStr = "", this.sh = k, this.lvl = P, this._isAnimated = !!k.k;
      for (var L = 0, O = m.length; L < O; ) {
        if (m[L].mProps.dynamicProperties.length) {
          this._isAnimated = !0;
          break;
        }
        L += 1;
      }
    }
    function SVGStyleData(m, P) {
      this.data = m, this.type = m.ty, this.d = "", this.lvl = P, this._mdf = !1, this.closed = m.hd === !0, this.pElem = createNS("path"), this.msElem = null;
    }
    function DashProperty(m, P, k, L) {
      var O;
      this.elem = m, this.frameId = -1, this.dataProps = createSizedArray(P.length), this.renderer = k, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", P.length ? P.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(L);
      var V, he = P.length || 0;
      for (O = 0; O < he; O += 1)
        V = PropertyFactory.getProp(m, P[O].v, 0, 0, this), this.k = V.k || this.k, this.dataProps[O] = { n: P[O].n, p: V };
      this.k || this.getValue(!0), this._isAnimated = this.k;
    }
    function SVGStrokeStyleData(m, P, k) {
      this.initDynamicPropertyContainer(m), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(m, P.o, 0, 0.01, this), this.w = PropertyFactory.getProp(m, P.w, 0, null, this), this.d = new DashProperty(m, P.d || {}, "svg", this), this.c = PropertyFactory.getProp(m, P.c, 1, 255, this), this.style = k, this._isAnimated = !!this._isAnimated;
    }
    function SVGFillStyleData(m, P, k) {
      this.initDynamicPropertyContainer(m), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(m, P.o, 0, 0.01, this), this.c = PropertyFactory.getProp(m, P.c, 1, 255, this), this.style = k;
    }
    function SVGNoStyleData(m, P, k) {
      this.initDynamicPropertyContainer(m), this.getValue = this.iterateDynamicProperties, this.style = k;
    }
    function GradientProperty(m, P, k) {
      this.data = P, this.c = createTypedArray("uint8c", 4 * P.p);
      var L = P.k.k[0].s ? P.k.k[0].s.length - 4 * P.p : P.k.k.length - 4 * P.p;
      this.o = createTypedArray("float32", L), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = L, this.initDynamicPropertyContainer(k), this.prop = PropertyFactory.getProp(m, P.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
    }
    function SVGGradientFillStyleData(m, P, k) {
      this.initDynamicPropertyContainer(m), this.getValue = this.iterateDynamicProperties, this.initGradientData(m, P, k);
    }
    function SVGGradientStrokeStyleData(m, P, k) {
      this.initDynamicPropertyContainer(m), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(m, P.w, 0, null, this), this.d = new DashProperty(m, P.d || {}, "svg", this), this.initGradientData(m, P, k), this._isAnimated = !!this._isAnimated;
    }
    function ShapeGroupData() {
      this.it = [], this.prevViewData = [], this.gr = createNS("g");
    }
    function SVGTransformData(m, P, k) {
      this.transform = { mProps: m, op: P, container: k }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    SVGShapeData.prototype.setAsAnimated = function() {
      this._isAnimated = !0;
    }, SVGStyleData.prototype.reset = function() {
      this.d = "", this._mdf = !1;
    }, DashProperty.prototype.getValue = function(m) {
      if ((this.elem.globalData.frameId !== this.frameId || m) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || m, this._mdf)) {
        var P = 0, k = this.dataProps.length;
        for (this.renderer === "svg" && (this.dashStr = ""), P = 0; P < k; P += 1)
          this.dataProps[P].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[P].p.v : this.dashArray[P] = this.dataProps[P].p.v : this.dashoffset[0] = this.dataProps[P].p.v;
      }
    }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(m, P) {
      for (var k = 0, L = this.o.length / 2; k < L; ) {
        if (Math.abs(m[4 * k] - m[4 * P + 2 * k]) > 0.01)
          return !1;
        k += 1;
      }
      return !0;
    }, GradientProperty.prototype.checkCollapsable = function() {
      if (this.o.length / 2 != this.c.length / 4)
        return !1;
      if (this.data.k.k[0].s)
        for (var m = 0, P = this.data.k.k.length; m < P; ) {
          if (!this.comparePoints(this.data.k.k[m].s, this.data.p))
            return !1;
          m += 1;
        }
      else if (!this.comparePoints(this.data.k.k, this.data.p))
        return !1;
      return !0;
    }, GradientProperty.prototype.getValue = function(m) {
      if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || m) {
        var P, k, L, O = 4 * this.data.p;
        for (P = 0; P < O; P += 1)
          k = P % 4 == 0 ? 100 : 255, L = Math.round(this.prop.v[P] * k), this.c[P] !== L && (this.c[P] = L, this._cmdf = !m);
        if (this.o.length)
          for (O = this.prop.v.length, P = 4 * this.data.p; P < O; P += 1)
            k = P % 2 == 0 ? 100 : 1, L = P % 2 == 0 ? Math.round(100 * this.prop.v[P]) : this.prop.v[P], this.o[P - 4 * this.data.p] !== L && (this.o[P - 4 * this.data.p] = L, this._omdf = !m);
        this._mdf = !m;
      }
    }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(m, P, k) {
      this.o = PropertyFactory.getProp(m, P.o, 0, 0.01, this), this.s = PropertyFactory.getProp(m, P.s, 1, null, this), this.e = PropertyFactory.getProp(m, P.e, 1, null, this), this.h = PropertyFactory.getProp(m, P.h || { k: 0 }, 0, 0.01, this), this.a = PropertyFactory.getProp(m, P.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(m, P.g, this), this.style = k, this.stops = [], this.setGradientData(k.pElem, P), this.setGradientOpacity(P, k), this._isAnimated = !!this._isAnimated;
    }, SVGGradientFillStyleData.prototype.setGradientData = function(m, P) {
      var k = createElementID(), L = createNS(P.t === 1 ? "linearGradient" : "radialGradient");
      L.setAttribute("id", k), L.setAttribute("spreadMethod", "pad"), L.setAttribute("gradientUnits", "userSpaceOnUse");
      var O, V, he, K = [];
      for (he = 4 * P.g.p, V = 0; V < he; V += 4)
        O = createNS("stop"), L.appendChild(O), K.push(O);
      m.setAttribute(P.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + k + ")"), this.gf = L, this.cst = K;
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(m, P) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var k, L, O, V = createNS("mask"), he = createNS("path");
        V.appendChild(he);
        var K = createElementID(), de = createElementID();
        V.setAttribute("id", de);
        var ce = createNS(m.t === 1 ? "linearGradient" : "radialGradient");
        ce.setAttribute("id", K), ce.setAttribute("spreadMethod", "pad"), ce.setAttribute("gradientUnits", "userSpaceOnUse"), O = m.g.k.k[0].s ? m.g.k.k[0].s.length : m.g.k.k.length;
        var pe = this.stops;
        for (L = 4 * m.g.p; L < O; L += 2)
          (k = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), ce.appendChild(k), pe.push(k);
        he.setAttribute(m.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + K + ")"), m.ty === "gs" && (he.setAttribute("stroke-linecap", lineCapEnum[m.lc || 2]), he.setAttribute("stroke-linejoin", lineJoinEnum[m.lj || 2]), m.lj === 1 && he.setAttribute("stroke-miterlimit", m.ml)), this.of = ce, this.ms = V, this.ost = pe, this.maskId = de, P.msElem = he;
      }
    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
    var buildShapeString = function(m, P, k, L) {
      if (P === 0)
        return "";
      var O, V = m.o, he = m.i, K = m.v, de = " M" + L.applyToPointStringified(K[0][0], K[0][1]);
      for (O = 1; O < P; O += 1)
        de += " C" + L.applyToPointStringified(V[O - 1][0], V[O - 1][1]) + " " + L.applyToPointStringified(he[O][0], he[O][1]) + " " + L.applyToPointStringified(K[O][0], K[O][1]);
      return k && P && (de += " C" + L.applyToPointStringified(V[O - 1][0], V[O - 1][1]) + " " + L.applyToPointStringified(he[0][0], he[0][1]) + " " + L.applyToPointStringified(K[0][0], K[0][1]), de += "z"), de;
    }, SVGElementsRenderer = function() {
      var m = new Matrix(), P = new Matrix();
      function k(ce, pe, B) {
        (B || pe.transform.op._mdf) && pe.transform.container.setAttribute("opacity", pe.transform.op.v), (B || pe.transform.mProps._mdf) && pe.transform.container.setAttribute("transform", pe.transform.mProps.v.to2dCSS());
      }
      function L() {
      }
      function O(ce, pe, B) {
        var G, $, ie, fe, Q, ue, me, ge, ve, _e, Te, Ce = pe.styles.length, Ae = pe.lvl;
        for (ue = 0; ue < Ce; ue += 1) {
          if (fe = pe.sh._mdf || B, pe.styles[ue].lvl < Ae) {
            for (ge = P.reset(), _e = Ae - pe.styles[ue].lvl, Te = pe.transformers.length - 1; !fe && _e > 0; )
              fe = pe.transformers[Te].mProps._mdf || fe, _e -= 1, Te -= 1;
            if (fe)
              for (_e = Ae - pe.styles[ue].lvl, Te = pe.transformers.length - 1; _e > 0; )
                ve = pe.transformers[Te].mProps.v.props, ge.transform(ve[0], ve[1], ve[2], ve[3], ve[4], ve[5], ve[6], ve[7], ve[8], ve[9], ve[10], ve[11], ve[12], ve[13], ve[14], ve[15]), _e -= 1, Te -= 1;
          } else
            ge = m;
          if ($ = (me = pe.sh.paths)._length, fe) {
            for (ie = "", G = 0; G < $; G += 1)
              (Q = me.shapes[G]) && Q._length && (ie += buildShapeString(Q, Q._length, Q.c, ge));
            pe.caches[ue] = ie;
          } else
            ie = pe.caches[ue];
          pe.styles[ue].d += ce.hd === !0 ? "" : ie, pe.styles[ue]._mdf = fe || pe.styles[ue]._mdf;
        }
      }
      function V(ce, pe, B) {
        var G = pe.style;
        (pe.c._mdf || B) && G.pElem.setAttribute("fill", "rgb(" + bmFloor(pe.c.v[0]) + "," + bmFloor(pe.c.v[1]) + "," + bmFloor(pe.c.v[2]) + ")"), (pe.o._mdf || B) && G.pElem.setAttribute("fill-opacity", pe.o.v);
      }
      function he(ce, pe, B) {
        K(ce, pe, B), de(ce, pe, B);
      }
      function K(ce, pe, B) {
        var G, $, ie, fe, Q, ue = pe.gf, me = pe.g._hasOpacity, ge = pe.s.v, ve = pe.e.v;
        if (pe.o._mdf || B) {
          var _e = ce.ty === "gf" ? "fill-opacity" : "stroke-opacity";
          pe.style.pElem.setAttribute(_e, pe.o.v);
        }
        if (pe.s._mdf || B) {
          var Te = ce.t === 1 ? "x1" : "cx", Ce = Te === "x1" ? "y1" : "cy";
          ue.setAttribute(Te, ge[0]), ue.setAttribute(Ce, ge[1]), me && !pe.g._collapsable && (pe.of.setAttribute(Te, ge[0]), pe.of.setAttribute(Ce, ge[1]));
        }
        if (pe.g._cmdf || B) {
          G = pe.cst;
          var Ae = pe.g.c;
          for (ie = G.length, $ = 0; $ < ie; $ += 1)
            (fe = G[$]).setAttribute("offset", Ae[4 * $] + "%"), fe.setAttribute("stop-color", "rgb(" + Ae[4 * $ + 1] + "," + Ae[4 * $ + 2] + "," + Ae[4 * $ + 3] + ")");
        }
        if (me && (pe.g._omdf || B)) {
          var Ie = pe.g.o;
          for (ie = (G = pe.g._collapsable ? pe.cst : pe.ost).length, $ = 0; $ < ie; $ += 1)
            fe = G[$], pe.g._collapsable || fe.setAttribute("offset", Ie[2 * $] + "%"), fe.setAttribute("stop-opacity", Ie[2 * $ + 1]);
        }
        if (ce.t === 1)
          (pe.e._mdf || B) && (ue.setAttribute("x2", ve[0]), ue.setAttribute("y2", ve[1]), me && !pe.g._collapsable && (pe.of.setAttribute("x2", ve[0]), pe.of.setAttribute("y2", ve[1])));
        else if ((pe.s._mdf || pe.e._mdf || B) && (Q = Math.sqrt(Math.pow(ge[0] - ve[0], 2) + Math.pow(ge[1] - ve[1], 2)), ue.setAttribute("r", Q), me && !pe.g._collapsable && pe.of.setAttribute("r", Q)), pe.e._mdf || pe.h._mdf || pe.a._mdf || B) {
          Q || (Q = Math.sqrt(Math.pow(ge[0] - ve[0], 2) + Math.pow(ge[1] - ve[1], 2)));
          var Me = Math.atan2(ve[1] - ge[1], ve[0] - ge[0]), ke = pe.h.v;
          ke >= 1 ? ke = 0.99 : ke <= -1 && (ke = -0.99);
          var at = Q * ke, st = Math.cos(Me + pe.a.v) * at + ge[0], Ue = Math.sin(Me + pe.a.v) * at + ge[1];
          ue.setAttribute("fx", st), ue.setAttribute("fy", Ue), me && !pe.g._collapsable && (pe.of.setAttribute("fx", st), pe.of.setAttribute("fy", Ue));
        }
      }
      function de(ce, pe, B) {
        var G = pe.style, $ = pe.d;
        $ && ($._mdf || B) && $.dashStr && (G.pElem.setAttribute("stroke-dasharray", $.dashStr), G.pElem.setAttribute("stroke-dashoffset", $.dashoffset[0])), pe.c && (pe.c._mdf || B) && G.pElem.setAttribute("stroke", "rgb(" + bmFloor(pe.c.v[0]) + "," + bmFloor(pe.c.v[1]) + "," + bmFloor(pe.c.v[2]) + ")"), (pe.o._mdf || B) && G.pElem.setAttribute("stroke-opacity", pe.o.v), (pe.w._mdf || B) && (G.pElem.setAttribute("stroke-width", pe.w.v), G.msElem && G.msElem.setAttribute("stroke-width", pe.w.v));
      }
      return { createRenderFunction: function(ce) {
        switch (ce.ty) {
          case "fl":
            return V;
          case "gf":
            return K;
          case "gs":
            return he;
          case "st":
            return de;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return O;
          case "tr":
            return k;
          case "no":
            return L;
          default:
            return null;
        }
      } };
    }();
    function SVGShapeElement(m, P, k) {
      this.shapes = [], this.shapesData = m.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(m, P, k), this.prevViewData = [];
    }
    function LetterProps(m, P, k, L, O, V) {
      this.o = m, this.sw = P, this.sc = k, this.fc = L, this.m = O, this.p = V, this._mdf = { o: !0, sw: !!P, sc: !!k, fc: !!L, m: !0, p: !0 };
    }
    function TextProperty(m, P) {
      this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = P, this.elem = m, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: !1, strokeColorAnim: !1, strokeWidthAnim: !1, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: !1 }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {
    }, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function() {
    }, SVGShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
      var m, P, k, L, O = this.shapes.length, V = this.stylesList.length, he = [], K = !1;
      for (k = 0; k < V; k += 1) {
        for (L = this.stylesList[k], K = !1, he.length = 0, m = 0; m < O; m += 1)
          (P = this.shapes[m]).styles.indexOf(L) !== -1 && (he.push(P), K = P._isAnimated || K);
        he.length > 1 && K && this.setShapesAsAnimated(he);
      }
    }, SVGShapeElement.prototype.setShapesAsAnimated = function(m) {
      var P, k = m.length;
      for (P = 0; P < k; P += 1)
        m[P].setAsAnimated();
    }, SVGShapeElement.prototype.createStyleElement = function(m, P) {
      var k, L = new SVGStyleData(m, P), O = L.pElem;
      return m.ty === "st" ? k = new SVGStrokeStyleData(this, m, L) : m.ty === "fl" ? k = new SVGFillStyleData(this, m, L) : m.ty === "gf" || m.ty === "gs" ? (k = new (m.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, m, L), this.globalData.defs.appendChild(k.gf), k.maskId && (this.globalData.defs.appendChild(k.ms), this.globalData.defs.appendChild(k.of), O.setAttribute("mask", "url(" + getLocationHref() + "#" + k.maskId + ")"))) : m.ty === "no" && (k = new SVGNoStyleData(this, m, L)), m.ty !== "st" && m.ty !== "gs" || (O.setAttribute("stroke-linecap", lineCapEnum[m.lc || 2]), O.setAttribute("stroke-linejoin", lineJoinEnum[m.lj || 2]), O.setAttribute("fill-opacity", "0"), m.lj === 1 && O.setAttribute("stroke-miterlimit", m.ml)), m.r === 2 && O.setAttribute("fill-rule", "evenodd"), m.ln && O.setAttribute("id", m.ln), m.cl && O.setAttribute("class", m.cl), m.bm && (O.style["mix-blend-mode"] = getBlendMode(m.bm)), this.stylesList.push(L), this.addToAnimatedContents(m, k), k;
    }, SVGShapeElement.prototype.createGroupElement = function(m) {
      var P = new ShapeGroupData();
      return m.ln && P.gr.setAttribute("id", m.ln), m.cl && P.gr.setAttribute("class", m.cl), m.bm && (P.gr.style["mix-blend-mode"] = getBlendMode(m.bm)), P;
    }, SVGShapeElement.prototype.createTransformElement = function(m, P) {
      var k = TransformPropertyFactory.getTransformProperty(this, m, this), L = new SVGTransformData(k, k.o, P);
      return this.addToAnimatedContents(m, L), L;
    }, SVGShapeElement.prototype.createShapeElement = function(m, P, k) {
      var L = 4;
      m.ty === "rc" ? L = 5 : m.ty === "el" ? L = 6 : m.ty === "sr" && (L = 7);
      var O = new SVGShapeData(P, k, ShapePropertyFactory.getShapeProp(this, m, L, this));
      return this.shapes.push(O), this.addShapeToModifiers(O), this.addToAnimatedContents(m, O), O;
    }, SVGShapeElement.prototype.addToAnimatedContents = function(m, P) {
      for (var k = 0, L = this.animatedContents.length; k < L; ) {
        if (this.animatedContents[k].element === P)
          return;
        k += 1;
      }
      this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(m), element: P, data: m });
    }, SVGShapeElement.prototype.setElementStyles = function(m) {
      var P, k = m.styles, L = this.stylesList.length;
      for (P = 0; P < L; P += 1)
        this.stylesList[P].closed || k.push(this.stylesList[P]);
    }, SVGShapeElement.prototype.reloadShapes = function() {
      var m;
      this._isFirstFrame = !0;
      var P = this.itemsData.length;
      for (m = 0; m < P; m += 1)
        this.prevViewData[m] = this.itemsData[m];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), P = this.dynamicProperties.length, m = 0; m < P; m += 1)
        this.dynamicProperties[m].getValue();
      this.renderModifiers();
    }, SVGShapeElement.prototype.searchShapes = function(m, P, k, L, O, V, he) {
      var K, de, ce, pe, B, G, $ = [].concat(V), ie = m.length - 1, fe = [], Q = [];
      for (K = ie; K >= 0; K -= 1) {
        if ((G = this.searchProcessedElement(m[K])) ? P[K] = k[G - 1] : m[K]._render = he, m[K].ty === "fl" || m[K].ty === "st" || m[K].ty === "gf" || m[K].ty === "gs" || m[K].ty === "no")
          G ? P[K].style.closed = !1 : P[K] = this.createStyleElement(m[K], O), m[K]._render && P[K].style.pElem.parentNode !== L && L.appendChild(P[K].style.pElem), fe.push(P[K].style);
        else if (m[K].ty === "gr") {
          if (G)
            for (ce = P[K].it.length, de = 0; de < ce; de += 1)
              P[K].prevViewData[de] = P[K].it[de];
          else
            P[K] = this.createGroupElement(m[K]);
          this.searchShapes(m[K].it, P[K].it, P[K].prevViewData, P[K].gr, O + 1, $, he), m[K]._render && P[K].gr.parentNode !== L && L.appendChild(P[K].gr);
        } else
          m[K].ty === "tr" ? (G || (P[K] = this.createTransformElement(m[K], L)), pe = P[K].transform, $.push(pe)) : m[K].ty === "sh" || m[K].ty === "rc" || m[K].ty === "el" || m[K].ty === "sr" ? (G || (P[K] = this.createShapeElement(m[K], $, O)), this.setElementStyles(P[K])) : m[K].ty === "tm" || m[K].ty === "rd" || m[K].ty === "ms" || m[K].ty === "pb" || m[K].ty === "zz" || m[K].ty === "op" ? (G ? (B = P[K]).closed = !1 : ((B = ShapeModifiers.getModifier(m[K].ty)).init(this, m[K]), P[K] = B, this.shapeModifiers.push(B)), Q.push(B)) : m[K].ty === "rp" && (G ? (B = P[K]).closed = !0 : (B = ShapeModifiers.getModifier(m[K].ty), P[K] = B, B.init(this, m, K, P), this.shapeModifiers.push(B), he = !1), Q.push(B));
        this.addProcessedElement(m[K], K + 1);
      }
      for (ie = fe.length, K = 0; K < ie; K += 1)
        fe[K].closed = !0;
      for (ie = Q.length, K = 0; K < ie; K += 1)
        Q[K].closed = !0;
    }, SVGShapeElement.prototype.renderInnerContent = function() {
      var m;
      this.renderModifiers();
      var P = this.stylesList.length;
      for (m = 0; m < P; m += 1)
        this.stylesList[m].reset();
      for (this.renderShape(), m = 0; m < P; m += 1)
        (this.stylesList[m]._mdf || this._isFirstFrame) && (this.stylesList[m].msElem && (this.stylesList[m].msElem.setAttribute("d", this.stylesList[m].d), this.stylesList[m].d = "M0 0" + this.stylesList[m].d), this.stylesList[m].pElem.setAttribute("d", this.stylesList[m].d || "M0 0"));
    }, SVGShapeElement.prototype.renderShape = function() {
      var m, P, k = this.animatedContents.length;
      for (m = 0; m < k; m += 1)
        P = this.animatedContents[m], (this._isFirstFrame || P.element._isAnimated) && P.data !== !0 && P.fn(P.data, P.element, this._isFirstFrame);
    }, SVGShapeElement.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    }, LetterProps.prototype.update = function(m, P, k, L, O, V) {
      this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
      var he = !1;
      return this.o !== m && (this.o = m, this._mdf.o = !0, he = !0), this.sw !== P && (this.sw = P, this._mdf.sw = !0, he = !0), this.sc !== k && (this.sc = k, this._mdf.sc = !0, he = !0), this.fc !== L && (this.fc = L, this._mdf.fc = !0, he = !0), this.m !== O && (this.m = O, this._mdf.m = !0, he = !0), !V.length || this.p[0] === V[0] && this.p[1] === V[1] && this.p[4] === V[4] && this.p[5] === V[5] && this.p[12] === V[12] && this.p[13] === V[13] || (this.p = V, this._mdf.p = !0, he = !0), he;
    }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(m, P) {
      for (var k in P)
        Object.prototype.hasOwnProperty.call(P, k) && (m[k] = P[k]);
      return m;
    }, TextProperty.prototype.setCurrentData = function(m) {
      m.__complete || this.completeTextData(m), this.currentData = m, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
    }, TextProperty.prototype.searchProperty = function() {
      return this.searchKeyframes();
    }, TextProperty.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, TextProperty.prototype.addEffect = function(m) {
      this.effectsSequence.push(m), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.getValue = function(m) {
      if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || m) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var P = this.currentData, k = this.keysIndex;
        if (this.lock)
          this.setCurrentData(this.currentData);
        else {
          var L;
          this.lock = !0, this._mdf = !1;
          var O = this.effectsSequence.length, V = m || this.data.d.k[this.keysIndex].s;
          for (L = 0; L < O; L += 1)
            V = k !== this.keysIndex ? this.effectsSequence[L](V, V.t) : this.effectsSequence[L](this.currentData, V.t);
          P !== V && this.setCurrentData(V), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
        }
      }
    }, TextProperty.prototype.getKeyframeValue = function() {
      for (var m = this.data.d.k, P = this.elem.comp.renderedFrame, k = 0, L = m.length; k <= L - 1 && !(k === L - 1 || m[k + 1].t > P); )
        k += 1;
      return this.keysIndex !== k && (this.keysIndex = k), this.data.d.k[this.keysIndex].s;
    }, TextProperty.prototype.buildFinalText = function(m) {
      for (var P, k, L = [], O = 0, V = m.length, he = !1; O < V; )
        P = m.charCodeAt(O), FontManager.isCombinedCharacter(P) ? L[L.length - 1] += m.charAt(O) : P >= 55296 && P <= 56319 ? (k = m.charCodeAt(O + 1)) >= 56320 && k <= 57343 ? (he || FontManager.isModifier(P, k) ? (L[L.length - 1] += m.substr(O, 2), he = !1) : L.push(m.substr(O, 2)), O += 1) : L.push(m.charAt(O)) : P > 56319 ? (k = m.charCodeAt(O + 1), FontManager.isZeroWidthJoiner(P, k) ? (he = !0, L[L.length - 1] += m.substr(O, 2), O += 1) : L.push(m.charAt(O))) : FontManager.isZeroWidthJoiner(P) ? (L[L.length - 1] += m.charAt(O), he = !0) : L.push(m.charAt(O)), O += 1;
      return L;
    }, TextProperty.prototype.completeTextData = function(m) {
      m.__complete = !0;
      var P, k, L, O, V, he, K, de = this.elem.globalData.fontManager, ce = this.data, pe = [], B = 0, G = ce.m.g, $ = 0, ie = 0, fe = 0, Q = [], ue = 0, me = 0, ge = de.getFontByName(m.f), ve = 0, _e = getFontProperties(ge);
      m.fWeight = _e.weight, m.fStyle = _e.style, m.finalSize = m.s, m.finalText = this.buildFinalText(m.t), k = m.finalText.length, m.finalLineHeight = m.lh;
      var Te, Ce = m.tr / 1e3 * m.finalSize;
      if (m.sz)
        for (var Ae, Ie, Me = !0, ke = m.sz[0], at = m.sz[1]; Me; ) {
          Ae = 0, ue = 0, k = (Ie = this.buildFinalText(m.t)).length, Ce = m.tr / 1e3 * m.finalSize;
          var st = -1;
          for (P = 0; P < k; P += 1)
            Te = Ie[P].charCodeAt(0), L = !1, Ie[P] === " " ? st = P : Te !== 13 && Te !== 3 || (ue = 0, L = !0, Ae += m.finalLineHeight || 1.2 * m.finalSize), de.chars ? (K = de.getCharData(Ie[P], ge.fStyle, ge.fFamily), ve = L ? 0 : K.w * m.finalSize / 100) : ve = de.measureText(Ie[P], m.f, m.finalSize), ue + ve > ke && Ie[P] !== " " ? (st === -1 ? k += 1 : P = st, Ae += m.finalLineHeight || 1.2 * m.finalSize, Ie.splice(P, st === P ? 1 : 0, "\r"), st = -1, ue = 0) : (ue += ve, ue += Ce);
          Ae += ge.ascent * m.finalSize / 100, this.canResize && m.finalSize > this.minimumFontSize && at < Ae ? (m.finalSize -= 1, m.finalLineHeight = m.finalSize * m.lh / m.s) : (m.finalText = Ie, k = m.finalText.length, Me = !1);
        }
      ue = -Ce, ve = 0;
      var Ue, lt = 0;
      for (P = 0; P < k; P += 1)
        if (L = !1, (Te = (Ue = m.finalText[P]).charCodeAt(0)) === 13 || Te === 3 ? (lt = 0, Q.push(ue), me = ue > me ? ue : me, ue = -2 * Ce, O = "", L = !0, fe += 1) : O = Ue, de.chars ? (K = de.getCharData(Ue, ge.fStyle, de.getFontByName(m.f).fFamily), ve = L ? 0 : K.w * m.finalSize / 100) : ve = de.measureText(O, m.f, m.finalSize), Ue === " " ? lt += ve + Ce : (ue += ve + Ce + lt, lt = 0), pe.push({ l: ve, an: ve, add: $, n: L, anIndexes: [], val: O, line: fe, animatorJustifyOffset: 0 }), G == 2) {
          if ($ += ve, O === "" || O === " " || P === k - 1) {
            for (O !== "" && O !== " " || ($ -= ve); ie <= P; )
              pe[ie].an = $, pe[ie].ind = B, pe[ie].extra = ve, ie += 1;
            B += 1, $ = 0;
          }
        } else if (G == 3) {
          if ($ += ve, O === "" || P === k - 1) {
            for (O === "" && ($ -= ve); ie <= P; )
              pe[ie].an = $, pe[ie].ind = B, pe[ie].extra = ve, ie += 1;
            $ = 0, B += 1;
          }
        } else
          pe[B].ind = B, pe[B].extra = 0, B += 1;
      if (m.l = pe, me = ue > me ? ue : me, Q.push(ue), m.sz)
        m.boxWidth = m.sz[0], m.justifyOffset = 0;
      else
        switch (m.boxWidth = me, m.j) {
          case 1:
            m.justifyOffset = -m.boxWidth;
            break;
          case 2:
            m.justifyOffset = -m.boxWidth / 2;
            break;
          default:
            m.justifyOffset = 0;
        }
      m.lineWidths = Q;
      var ut, Oe, we, ht, mt = ce.a;
      he = mt.length;
      var Et = [];
      for (V = 0; V < he; V += 1) {
        for ((ut = mt[V]).a.sc && (m.strokeColorAnim = !0), ut.a.sw && (m.strokeWidthAnim = !0), (ut.a.fc || ut.a.fh || ut.a.fs || ut.a.fb) && (m.fillColorAnim = !0), ht = 0, we = ut.s.b, P = 0; P < k; P += 1)
          (Oe = pe[P]).anIndexes[V] = ht, (we == 1 && Oe.val !== "" || we == 2 && Oe.val !== "" && Oe.val !== " " || we == 3 && (Oe.n || Oe.val == " " || P == k - 1) || we == 4 && (Oe.n || P == k - 1)) && (ut.s.rn === 1 && Et.push(ht), ht += 1);
        ce.a[V].s.totalChars = ht;
        var Mt, _t = -1;
        if (ut.s.rn === 1)
          for (P = 0; P < k; P += 1)
            _t != (Oe = pe[P]).anIndexes[V] && (_t = Oe.anIndexes[V], Mt = Et.splice(Math.floor(Math.random() * Et.length), 1)[0]), Oe.anIndexes[V] = Mt;
      }
      m.yOffset = m.finalLineHeight || 1.2 * m.finalSize, m.ls = m.ls || 0, m.ascent = ge.ascent * m.finalSize / 100;
    }, TextProperty.prototype.updateDocumentData = function(m, P) {
      P = P === void 0 ? this.keysIndex : P;
      var k = this.copyData({}, this.data.d.k[P].s);
      k = this.copyData(k, m), this.data.d.k[P].s = k, this.recalculate(P), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.recalculate = function(m) {
      var P = this.data.d.k[m].s;
      P.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(P);
    }, TextProperty.prototype.canResizeFont = function(m) {
      this.canResize = m, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.setMinimumFontSize = function(m) {
      this.minimumFontSize = Math.floor(m) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var TextSelectorProp = function() {
      var m = Math.max, P = Math.min, k = Math.floor;
      function L(O, V) {
        this._currentTextLength = -1, this.k = !1, this.data = V, this.elem = O, this.comp = O.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(O), this.s = PropertyFactory.getProp(O, V.s || { k: 0 }, 0, 0, this), this.e = "e" in V ? PropertyFactory.getProp(O, V.e, 0, 0, this) : { v: 100 }, this.o = PropertyFactory.getProp(O, V.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(O, V.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(O, V.ne || { k: 0 }, 0, 0, this), this.sm = PropertyFactory.getProp(O, V.sm || { k: 100 }, 0, 0, this), this.a = PropertyFactory.getProp(O, V.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
      }
      return L.prototype = { getMult: function(O) {
        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
        var V = 0, he = 0, K = 1, de = 1;
        this.ne.v > 0 ? V = this.ne.v / 100 : he = -this.ne.v / 100, this.xe.v > 0 ? K = 1 - this.xe.v / 100 : de = 1 + this.xe.v / 100;
        var ce = BezierFactory.getBezierEasing(V, he, K, de).get, pe = 0, B = this.finalS, G = this.finalE, $ = this.data.sh;
        if ($ === 2)
          pe = ce(pe = G === B ? O >= G ? 1 : 0 : m(0, P(0.5 / (G - B) + (O - B) / (G - B), 1)));
        else if ($ === 3)
          pe = ce(pe = G === B ? O >= G ? 0 : 1 : 1 - m(0, P(0.5 / (G - B) + (O - B) / (G - B), 1)));
        else if ($ === 4)
          G === B ? pe = 0 : (pe = m(0, P(0.5 / (G - B) + (O - B) / (G - B), 1))) < 0.5 ? pe *= 2 : pe = 1 - 2 * (pe - 0.5), pe = ce(pe);
        else if ($ === 5) {
          if (G === B)
            pe = 0;
          else {
            var ie = G - B, fe = -ie / 2 + (O = P(m(0, O + 0.5 - B), G - B)), Q = ie / 2;
            pe = Math.sqrt(1 - fe * fe / (Q * Q));
          }
          pe = ce(pe);
        } else
          $ === 6 ? (G === B ? pe = 0 : (O = P(m(0, O + 0.5 - B), G - B), pe = (1 + Math.cos(Math.PI + 2 * Math.PI * O / (G - B))) / 2), pe = ce(pe)) : (O >= k(B) && (pe = m(0, P(O - B < 0 ? P(G, 1) - (B - O) : G - O, 1))), pe = ce(pe));
        if (this.sm.v !== 100) {
          var ue = 0.01 * this.sm.v;
          ue === 0 && (ue = 1e-8);
          var me = 0.5 - 0.5 * ue;
          pe < me ? pe = 0 : (pe = (pe - me) / ue) > 1 && (pe = 1);
        }
        return pe * this.a.v;
      }, getValue: function(O) {
        this.iterateDynamicProperties(), this._mdf = O || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, O && this.data.r === 2 && (this.e.v = this._currentTextLength);
        var V = this.data.r === 2 ? 1 : 100 / this.data.totalChars, he = this.o.v / V, K = this.s.v / V + he, de = this.e.v / V + he;
        if (K > de) {
          var ce = K;
          K = de, de = ce;
        }
        this.finalS = K, this.finalE = de;
      } }, extendPrototype([DynamicPropertyContainer], L), { getTextSelectorProp: function(O, V, he) {
        return new L(O, V);
      } };
    }();
    function TextAnimatorDataProperty(m, P, k) {
      var L = { propType: !1 }, O = PropertyFactory.getProp, V = P.a;
      this.a = { r: V.r ? O(m, V.r, 0, degToRads, k) : L, rx: V.rx ? O(m, V.rx, 0, degToRads, k) : L, ry: V.ry ? O(m, V.ry, 0, degToRads, k) : L, sk: V.sk ? O(m, V.sk, 0, degToRads, k) : L, sa: V.sa ? O(m, V.sa, 0, degToRads, k) : L, s: V.s ? O(m, V.s, 1, 0.01, k) : L, a: V.a ? O(m, V.a, 1, 0, k) : L, o: V.o ? O(m, V.o, 0, 0.01, k) : L, p: V.p ? O(m, V.p, 1, 0, k) : L, sw: V.sw ? O(m, V.sw, 0, 0, k) : L, sc: V.sc ? O(m, V.sc, 1, 0, k) : L, fc: V.fc ? O(m, V.fc, 1, 0, k) : L, fh: V.fh ? O(m, V.fh, 0, 0, k) : L, fs: V.fs ? O(m, V.fs, 0, 0.01, k) : L, fb: V.fb ? O(m, V.fb, 0, 0.01, k) : L, t: V.t ? O(m, V.t, 0, 0, k) : L }, this.s = TextSelectorProp.getTextSelectorProp(m, P.s, k), this.s.t = P.s.t;
    }
    function TextAnimatorProperty(m, P, k) {
      this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = m, this._renderType = P, this._elem = k, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(k);
    }
    function ITextElement() {
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
      var m, P, k = this._textData.a.length, L = PropertyFactory.getProp;
      for (m = 0; m < k; m += 1)
        P = this._textData.a[m], this._animatorsData[m] = new TextAnimatorDataProperty(this._elem, P, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = { a: L(this._elem, this._textData.p.a, 0, 0, this), f: L(this._elem, this._textData.p.f, 0, 0, this), l: L(this._elem, this._textData.p.l, 0, 0, this), r: L(this._elem, this._textData.p.r, 0, 0, this), p: L(this._elem, this._textData.p.p, 0, 0, this), m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = L(this._elem, this._textData.m.a, 1, 0, this);
    }, TextAnimatorProperty.prototype.getMeasures = function(m, P) {
      if (this.lettersChangedFlag = P, this._mdf || this._isFirstFrame || P || this._hasMaskedPath && this._pathData.m._mdf) {
        this._isFirstFrame = !1;
        var k, L, O, V, he, K, de, ce, pe, B, G, $, ie, fe, Q, ue, me, ge, ve, _e = this._moreOptions.alignment.v, Te = this._animatorsData, Ce = this._textData, Ae = this.mHelper, Ie = this._renderType, Me = this.renderedLetters.length, ke = m.l;
        if (this._hasMaskedPath) {
          if (ve = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var at, st = ve.v;
            for (this._pathData.r.v && (st = st.reverse()), he = { tLength: 0, segments: [] }, V = st._length - 1, ue = 0, O = 0; O < V; O += 1)
              at = bez.buildBezierData(st.v[O], st.v[O + 1], [st.o[O][0] - st.v[O][0], st.o[O][1] - st.v[O][1]], [st.i[O + 1][0] - st.v[O + 1][0], st.i[O + 1][1] - st.v[O + 1][1]]), he.tLength += at.segmentLength, he.segments.push(at), ue += at.segmentLength;
            O = V, ve.v.c && (at = bez.buildBezierData(st.v[O], st.v[0], [st.o[O][0] - st.v[O][0], st.o[O][1] - st.v[O][1]], [st.i[0][0] - st.v[0][0], st.i[0][1] - st.v[0][1]]), he.tLength += at.segmentLength, he.segments.push(at), ue += at.segmentLength), this._pathData.pi = he;
          }
          if (he = this._pathData.pi, K = this._pathData.f.v, G = 0, B = 1, ce = 0, pe = !0, fe = he.segments, K < 0 && ve.v.c)
            for (he.tLength < Math.abs(K) && (K = -Math.abs(K) % he.tLength), B = (ie = fe[G = fe.length - 1].points).length - 1; K < 0; )
              K += ie[B].partialLength, (B -= 1) < 0 && (B = (ie = fe[G -= 1].points).length - 1);
          $ = (ie = fe[G].points)[B - 1], Q = (de = ie[B]).partialLength;
        }
        V = ke.length, k = 0, L = 0;
        var Ue, lt, ut, Oe, we, ht = 1.2 * m.finalSize * 0.714, mt = !0;
        ut = Te.length;
        var Et, Mt, _t, ft, yt, gt, xt, bt, wt, At, jt, kt, dt = -1, Ot = K, $t = G, Gt = B, Ht = -1, Bt = "", Ft = this.defaultPropsArray;
        if (m.j === 2 || m.j === 1) {
          var Rt = 0, Vt = 0, Lt = m.j === 2 ? -0.5 : -1, Wt = 0, qt = !0;
          for (O = 0; O < V; O += 1)
            if (ke[O].n) {
              for (Rt && (Rt += Vt); Wt < O; )
                ke[Wt].animatorJustifyOffset = Rt, Wt += 1;
              Rt = 0, qt = !0;
            } else {
              for (lt = 0; lt < ut; lt += 1)
                (Ue = Te[lt].a).t.propType && (qt && m.j === 2 && (Vt += Ue.t.v * Lt), (we = Te[lt].s.getMult(ke[O].anIndexes[lt], Ce.a[lt].s.totalChars)).length ? Rt += Ue.t.v * we[0] * Lt : Rt += Ue.t.v * we * Lt);
              qt = !1;
            }
          for (Rt && (Rt += Vt); Wt < O; )
            ke[Wt].animatorJustifyOffset = Rt, Wt += 1;
        }
        for (O = 0; O < V; O += 1) {
          if (Ae.reset(), ft = 1, ke[O].n)
            k = 0, L += m.yOffset, L += mt ? 1 : 0, K = Ot, mt = !1, this._hasMaskedPath && (B = Gt, $ = (ie = fe[G = $t].points)[B - 1], Q = (de = ie[B]).partialLength, ce = 0), Bt = "", jt = "", wt = "", kt = "", Ft = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (Ht !== ke[O].line) {
                switch (m.j) {
                  case 1:
                    K += ue - m.lineWidths[ke[O].line];
                    break;
                  case 2:
                    K += (ue - m.lineWidths[ke[O].line]) / 2;
                }
                Ht = ke[O].line;
              }
              dt !== ke[O].ind && (ke[dt] && (K += ke[dt].extra), K += ke[O].an / 2, dt = ke[O].ind), K += _e[0] * ke[O].an * 5e-3;
              var Zt = 0;
              for (lt = 0; lt < ut; lt += 1)
                (Ue = Te[lt].a).p.propType && ((we = Te[lt].s.getMult(ke[O].anIndexes[lt], Ce.a[lt].s.totalChars)).length ? Zt += Ue.p.v[0] * we[0] : Zt += Ue.p.v[0] * we), Ue.a.propType && ((we = Te[lt].s.getMult(ke[O].anIndexes[lt], Ce.a[lt].s.totalChars)).length ? Zt += Ue.a.v[0] * we[0] : Zt += Ue.a.v[0] * we);
              for (pe = !0, this._pathData.a.v && (K = 0.5 * ke[0].an + (ue - this._pathData.f.v - 0.5 * ke[0].an - 0.5 * ke[ke.length - 1].an) * dt / (V - 1), K += this._pathData.f.v); pe; )
                ce + Q >= K + Zt || !ie ? (me = (K + Zt - ce) / de.partialLength, Mt = $.point[0] + (de.point[0] - $.point[0]) * me, _t = $.point[1] + (de.point[1] - $.point[1]) * me, Ae.translate(-_e[0] * ke[O].an * 5e-3, -_e[1] * ht * 0.01), pe = !1) : ie && (ce += de.partialLength, (B += 1) >= ie.length && (B = 0, fe[G += 1] ? ie = fe[G].points : ve.v.c ? (B = 0, ie = fe[G = 0].points) : (ce -= de.partialLength, ie = null)), ie && ($ = de, Q = (de = ie[B]).partialLength));
              Et = ke[O].an / 2 - ke[O].add, Ae.translate(-Et, 0, 0);
            } else
              Et = ke[O].an / 2 - ke[O].add, Ae.translate(-Et, 0, 0), Ae.translate(-_e[0] * ke[O].an * 5e-3, -_e[1] * ht * 0.01, 0);
            for (lt = 0; lt < ut; lt += 1)
              (Ue = Te[lt].a).t.propType && (we = Te[lt].s.getMult(ke[O].anIndexes[lt], Ce.a[lt].s.totalChars), k === 0 && m.j === 0 || (this._hasMaskedPath ? we.length ? K += Ue.t.v * we[0] : K += Ue.t.v * we : we.length ? k += Ue.t.v * we[0] : k += Ue.t.v * we));
            for (m.strokeWidthAnim && (gt = m.sw || 0), m.strokeColorAnim && (yt = m.sc ? [m.sc[0], m.sc[1], m.sc[2]] : [0, 0, 0]), m.fillColorAnim && m.fc && (xt = [m.fc[0], m.fc[1], m.fc[2]]), lt = 0; lt < ut; lt += 1)
              (Ue = Te[lt].a).a.propType && ((we = Te[lt].s.getMult(ke[O].anIndexes[lt], Ce.a[lt].s.totalChars)).length ? Ae.translate(-Ue.a.v[0] * we[0], -Ue.a.v[1] * we[1], Ue.a.v[2] * we[2]) : Ae.translate(-Ue.a.v[0] * we, -Ue.a.v[1] * we, Ue.a.v[2] * we));
            for (lt = 0; lt < ut; lt += 1)
              (Ue = Te[lt].a).s.propType && ((we = Te[lt].s.getMult(ke[O].anIndexes[lt], Ce.a[lt].s.totalChars)).length ? Ae.scale(1 + (Ue.s.v[0] - 1) * we[0], 1 + (Ue.s.v[1] - 1) * we[1], 1) : Ae.scale(1 + (Ue.s.v[0] - 1) * we, 1 + (Ue.s.v[1] - 1) * we, 1));
            for (lt = 0; lt < ut; lt += 1) {
              if (Ue = Te[lt].a, we = Te[lt].s.getMult(ke[O].anIndexes[lt], Ce.a[lt].s.totalChars), Ue.sk.propType && (we.length ? Ae.skewFromAxis(-Ue.sk.v * we[0], Ue.sa.v * we[1]) : Ae.skewFromAxis(-Ue.sk.v * we, Ue.sa.v * we)), Ue.r.propType && (we.length ? Ae.rotateZ(-Ue.r.v * we[2]) : Ae.rotateZ(-Ue.r.v * we)), Ue.ry.propType && (we.length ? Ae.rotateY(Ue.ry.v * we[1]) : Ae.rotateY(Ue.ry.v * we)), Ue.rx.propType && (we.length ? Ae.rotateX(Ue.rx.v * we[0]) : Ae.rotateX(Ue.rx.v * we)), Ue.o.propType && (we.length ? ft += (Ue.o.v * we[0] - ft) * we[0] : ft += (Ue.o.v * we - ft) * we), m.strokeWidthAnim && Ue.sw.propType && (we.length ? gt += Ue.sw.v * we[0] : gt += Ue.sw.v * we), m.strokeColorAnim && Ue.sc.propType)
                for (bt = 0; bt < 3; bt += 1)
                  we.length ? yt[bt] += (Ue.sc.v[bt] - yt[bt]) * we[0] : yt[bt] += (Ue.sc.v[bt] - yt[bt]) * we;
              if (m.fillColorAnim && m.fc) {
                if (Ue.fc.propType)
                  for (bt = 0; bt < 3; bt += 1)
                    we.length ? xt[bt] += (Ue.fc.v[bt] - xt[bt]) * we[0] : xt[bt] += (Ue.fc.v[bt] - xt[bt]) * we;
                Ue.fh.propType && (xt = we.length ? addHueToRGB(xt, Ue.fh.v * we[0]) : addHueToRGB(xt, Ue.fh.v * we)), Ue.fs.propType && (xt = we.length ? addSaturationToRGB(xt, Ue.fs.v * we[0]) : addSaturationToRGB(xt, Ue.fs.v * we)), Ue.fb.propType && (xt = we.length ? addBrightnessToRGB(xt, Ue.fb.v * we[0]) : addBrightnessToRGB(xt, Ue.fb.v * we));
              }
            }
            for (lt = 0; lt < ut; lt += 1)
              (Ue = Te[lt].a).p.propType && (we = Te[lt].s.getMult(ke[O].anIndexes[lt], Ce.a[lt].s.totalChars), this._hasMaskedPath ? we.length ? Ae.translate(0, Ue.p.v[1] * we[0], -Ue.p.v[2] * we[1]) : Ae.translate(0, Ue.p.v[1] * we, -Ue.p.v[2] * we) : we.length ? Ae.translate(Ue.p.v[0] * we[0], Ue.p.v[1] * we[1], -Ue.p.v[2] * we[2]) : Ae.translate(Ue.p.v[0] * we, Ue.p.v[1] * we, -Ue.p.v[2] * we));
            if (m.strokeWidthAnim && (wt = gt < 0 ? 0 : gt), m.strokeColorAnim && (At = "rgb(" + Math.round(255 * yt[0]) + "," + Math.round(255 * yt[1]) + "," + Math.round(255 * yt[2]) + ")"), m.fillColorAnim && m.fc && (jt = "rgb(" + Math.round(255 * xt[0]) + "," + Math.round(255 * xt[1]) + "," + Math.round(255 * xt[2]) + ")"), this._hasMaskedPath) {
              if (Ae.translate(0, -m.ls), Ae.translate(0, _e[1] * ht * 0.01 + L, 0), this._pathData.p.v) {
                ge = (de.point[1] - $.point[1]) / (de.point[0] - $.point[0]);
                var Ut = 180 * Math.atan(ge) / Math.PI;
                de.point[0] < $.point[0] && (Ut += 180), Ae.rotate(-Ut * Math.PI / 180);
              }
              Ae.translate(Mt, _t, 0), K -= _e[0] * ke[O].an * 5e-3, ke[O + 1] && dt !== ke[O + 1].ind && (K += ke[O].an / 2, K += 1e-3 * m.tr * m.finalSize);
            } else {
              switch (Ae.translate(k, L, 0), m.ps && Ae.translate(m.ps[0], m.ps[1] + m.ascent, 0), m.j) {
                case 1:
                  Ae.translate(ke[O].animatorJustifyOffset + m.justifyOffset + (m.boxWidth - m.lineWidths[ke[O].line]), 0, 0);
                  break;
                case 2:
                  Ae.translate(ke[O].animatorJustifyOffset + m.justifyOffset + (m.boxWidth - m.lineWidths[ke[O].line]) / 2, 0, 0);
              }
              Ae.translate(0, -m.ls), Ae.translate(Et, 0, 0), Ae.translate(_e[0] * ke[O].an * 5e-3, _e[1] * ht * 0.01, 0), k += ke[O].l + 1e-3 * m.tr * m.finalSize;
            }
            Ie === "html" ? Bt = Ae.toCSS() : Ie === "svg" ? Bt = Ae.to2dCSS() : Ft = [Ae.props[0], Ae.props[1], Ae.props[2], Ae.props[3], Ae.props[4], Ae.props[5], Ae.props[6], Ae.props[7], Ae.props[8], Ae.props[9], Ae.props[10], Ae.props[11], Ae.props[12], Ae.props[13], Ae.props[14], Ae.props[15]], kt = ft;
          }
          Me <= O ? (Oe = new LetterProps(kt, wt, At, jt, Bt, Ft), this.renderedLetters.push(Oe), Me += 1, this.lettersChangedFlag = !0) : (Oe = this.renderedLetters[O], this.lettersChangedFlag = Oe.update(kt, wt, At, jt, Bt, Ft) || this.lettersChangedFlag);
        }
      }
    }, TextAnimatorProperty.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(m, P, k) {
      this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(m, P, k), this.textProperty = new TextProperty(this, m.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(m.t, this.renderType, this), this.initTransform(m, P, k), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, ITextElement.prototype.prepareFrame = function(m) {
      this._mdf = !1, this.prepareRenderableFrame(m), this.prepareProperties(m, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
    }, ITextElement.prototype.createPathShape = function(m, P) {
      var k, L, O = P.length, V = "";
      for (k = 0; k < O; k += 1)
        P[k].ty === "sh" && (L = P[k].ks.k, V += buildShapeString(L, L.i.length, !0, m));
      return V;
    }, ITextElement.prototype.updateDocumentData = function(m, P) {
      this.textProperty.updateDocumentData(m, P);
    }, ITextElement.prototype.canResizeFont = function(m) {
      this.textProperty.canResizeFont(m);
    }, ITextElement.prototype.setMinimumFontSize = function(m) {
      this.textProperty.setMinimumFontSize(m);
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(m, P, k, L, O) {
      switch (m.ps && P.translate(m.ps[0], m.ps[1] + m.ascent, 0), P.translate(0, -m.ls, 0), m.j) {
        case 1:
          P.translate(m.justifyOffset + (m.boxWidth - m.lineWidths[k]), 0, 0);
          break;
        case 2:
          P.translate(m.justifyOffset + (m.boxWidth - m.lineWidths[k]) / 2, 0, 0);
      }
      P.translate(L, O, 0);
    }, ITextElement.prototype.buildColor = function(m) {
      return "rgb(" + Math.round(255 * m[0]) + "," + Math.round(255 * m[1]) + "," + Math.round(255 * m[2]) + ")";
    }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function() {
    };
    var emptyShapeData = { shapes: [] };
    function SVGTextLottieElement(m, P, k) {
      this.textSpans = [], this.renderType = "svg", this.initElement(m, P, k);
    }
    function ISolidElement(m, P, k) {
      this.initElement(m, P, k);
    }
    function NullElement(m, P, k) {
      this.initFrame(), this.initBaseData(m, P, k), this.initFrame(), this.initTransform(m, P, k), this.initHierarchy();
    }
    function SVGRendererBase() {
    }
    function ICompElement() {
    }
    function SVGCompElement(m, P, k) {
      this.layers = m.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(m, P, k), this.tm = m.tm ? PropertyFactory.getProp(this, m.tm, 0, P.frameRate, this) : { _placeholder: !0 };
    }
    function SVGRenderer(m, P) {
      this.animationItem = m, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
      var k = "";
      if (P && P.title) {
        var L = createNS("title"), O = createElementID();
        L.setAttribute("id", O), L.textContent = P.title, this.svgElement.appendChild(L), k += O;
      }
      if (P && P.description) {
        var V = createNS("desc"), he = createElementID();
        V.setAttribute("id", he), V.textContent = P.description, this.svgElement.appendChild(V), k += " " + he;
      }
      k && this.svgElement.setAttribute("aria-labelledby", k);
      var K = createNS("defs");
      this.svgElement.appendChild(K);
      var de = createNS("g");
      this.svgElement.appendChild(de), this.layerElement = de, this.renderConfig = { preserveAspectRatio: P && P.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: P && P.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: P && P.contentVisibility || "visible", progressiveLoad: P && P.progressiveLoad || !1, hideOnTransparent: !(P && P.hideOnTransparent === !1), viewBoxOnly: P && P.viewBoxOnly || !1, viewBoxSize: P && P.viewBoxSize || !1, className: P && P.className || "", id: P && P.id || "", focusable: P && P.focusable, filterSize: { width: P && P.filterSize && P.filterSize.width || "100%", height: P && P.filterSize && P.filterSize.height || "100%", x: P && P.filterSize && P.filterSize.x || "0%", y: P && P.filterSize && P.filterSize.y || "0%" }, width: P && P.width, height: P && P.height, runExpressions: !P || P.runExpressions === void 0 || P.runExpressions }, this.globalData = { _mdf: !1, frameNum: -1, defs: K, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
    }
    function CVContextData() {
      var m;
      for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix(), this.cO = 1, this.savedOp = createTypedArray("float32", 15), m = 0; m < 15; m += 1)
        this.saved[m] = createTypedArray("float32", 16);
      this._length = 15;
    }
    function ShapeTransformManager() {
      this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
    }, SVGTextLottieElement.prototype.buildTextContents = function(m) {
      for (var P = 0, k = m.length, L = [], O = ""; P < k; )
        m[P] === String.fromCharCode(13) || m[P] === String.fromCharCode(3) ? (L.push(O), O = "") : O += m[P], P += 1;
      return L.push(O), L;
    }, SVGTextLottieElement.prototype.buildShapeData = function(m, P) {
      if (m.shapes && m.shapes.length) {
        var k = m.shapes[0];
        if (k.it) {
          var L = k.it[k.it.length - 1];
          L.s && (L.s.k[0] = P, L.s.k[1] = P);
        }
      }
      return m;
    }, SVGTextLottieElement.prototype.buildNewText = function() {
      var m, P;
      this.addDynamicProperty(this);
      var k = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(k ? k.l.length : 0), k.fc ? this.layerElement.setAttribute("fill", this.buildColor(k.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), k.sc && (this.layerElement.setAttribute("stroke", this.buildColor(k.sc)), this.layerElement.setAttribute("stroke-width", k.sw)), this.layerElement.setAttribute("font-size", k.finalSize);
      var L = this.globalData.fontManager.getFontByName(k.f);
      if (L.fClass)
        this.layerElement.setAttribute("class", L.fClass);
      else {
        this.layerElement.setAttribute("font-family", L.fFamily);
        var O = k.fWeight, V = k.fStyle;
        this.layerElement.setAttribute("font-style", V), this.layerElement.setAttribute("font-weight", O);
      }
      this.layerElement.setAttribute("aria-label", k.t);
      var he, K = k.l || [], de = !!this.globalData.fontManager.chars;
      P = K.length;
      var ce = this.mHelper, pe = this.data.singleShape, B = 0, G = 0, $ = !0, ie = 1e-3 * k.tr * k.finalSize;
      if (!pe || de || k.sz) {
        var fe, Q = this.textSpans.length;
        for (m = 0; m < P; m += 1) {
          if (this.textSpans[m] || (this.textSpans[m] = { span: null, childSpan: null, glyph: null }), !de || !pe || m === 0) {
            if (he = Q > m ? this.textSpans[m].span : createNS(de ? "g" : "text"), Q <= m) {
              if (he.setAttribute("stroke-linecap", "butt"), he.setAttribute("stroke-linejoin", "round"), he.setAttribute("stroke-miterlimit", "4"), this.textSpans[m].span = he, de) {
                var ue = createNS("g");
                he.appendChild(ue), this.textSpans[m].childSpan = ue;
              }
              this.textSpans[m].span = he, this.layerElement.appendChild(he);
            }
            he.style.display = "inherit";
          }
          if (ce.reset(), pe && (K[m].n && (B = -ie, G += k.yOffset, G += $ ? 1 : 0, $ = !1), this.applyTextPropertiesToMatrix(k, ce, K[m].line, B, G), B += K[m].l || 0, B += ie), de) {
            var me;
            if ((fe = this.globalData.fontManager.getCharData(k.finalText[m], L.fStyle, this.globalData.fontManager.getFontByName(k.f).fFamily)).t === 1)
              me = new SVGCompElement(fe.data, this.globalData, this);
            else {
              var ge = emptyShapeData;
              fe.data && fe.data.shapes && (ge = this.buildShapeData(fe.data, k.finalSize)), me = new SVGShapeElement(ge, this.globalData, this);
            }
            if (this.textSpans[m].glyph) {
              var ve = this.textSpans[m].glyph;
              this.textSpans[m].childSpan.removeChild(ve.layerElement), ve.destroy();
            }
            this.textSpans[m].glyph = me, me._debug = !0, me.prepareFrame(0), me.renderFrame(), this.textSpans[m].childSpan.appendChild(me.layerElement), fe.t === 1 && this.textSpans[m].childSpan.setAttribute("transform", "scale(" + k.finalSize / 100 + "," + k.finalSize / 100 + ")");
          } else
            pe && he.setAttribute("transform", "translate(" + ce.props[12] + "," + ce.props[13] + ")"), he.textContent = K[m].val, he.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        }
        pe && he && he.setAttribute("d", "");
      } else {
        var _e = this.textContainer, Te = "start";
        switch (k.j) {
          case 1:
            Te = "end";
            break;
          case 2:
            Te = "middle";
            break;
          default:
            Te = "start";
        }
        _e.setAttribute("text-anchor", Te), _e.setAttribute("letter-spacing", ie);
        var Ce = this.buildTextContents(k.finalText);
        for (P = Ce.length, G = k.ps ? k.ps[1] + k.ascent : 0, m = 0; m < P; m += 1)
          (he = this.textSpans[m].span || createNS("tspan")).textContent = Ce[m], he.setAttribute("x", 0), he.setAttribute("y", G), he.style.display = "inherit", _e.appendChild(he), this.textSpans[m] || (this.textSpans[m] = { span: null, glyph: null }), this.textSpans[m].span = he, G += k.finalLineHeight;
        this.layerElement.appendChild(_e);
      }
      for (; m < this.textSpans.length; )
        this.textSpans[m].span.style.display = "none", m += 1;
      this._sizeChanged = !0;
    }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = !1;
        var m = this.layerElement.getBBox();
        this.bbox = { top: m.y, left: m.x, width: m.width, height: m.height };
      }
      return this.bbox;
    }, SVGTextLottieElement.prototype.getValue = function() {
      var m, P, k = this.textSpans.length;
      for (this.renderedFrame = this.comp.renderedFrame, m = 0; m < k; m += 1)
        (P = this.textSpans[m].glyph) && (P.prepareFrame(this.comp.renderedFrame - this.data.st), P._mdf && (this._mdf = !0));
    }, SVGTextLottieElement.prototype.renderInnerContent = function() {
      if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        var m, P;
        this._sizeChanged = !0;
        var k, L, O, V = this.textAnimator.renderedLetters, he = this.textProperty.currentData.l;
        for (P = he.length, m = 0; m < P; m += 1)
          he[m].n || (k = V[m], L = this.textSpans[m].span, (O = this.textSpans[m].glyph) && O.renderFrame(), k._mdf.m && L.setAttribute("transform", k.m), k._mdf.o && L.setAttribute("opacity", k.o), k._mdf.sw && L.setAttribute("stroke-width", k.sw), k._mdf.sc && L.setAttribute("stroke", k.sc), k._mdf.fc && L.setAttribute("fill", k.fc));
      }
    }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
      var m = createNS("rect");
      m.setAttribute("width", this.data.sw), m.setAttribute("height", this.data.sh), m.setAttribute("fill", this.data.sc), this.layerElement.appendChild(m);
    }, NullElement.prototype.prepareFrame = function(m) {
      this.prepareProperties(m, !0);
    }, NullElement.prototype.renderFrame = function() {
    }, NullElement.prototype.getBaseElement = function() {
      return null;
    }, NullElement.prototype.destroy = function() {
    }, NullElement.prototype.sourceRectAtTime = function() {
    }, NullElement.prototype.hide = function() {
    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(m) {
      return new NullElement(m, this.globalData, this);
    }, SVGRendererBase.prototype.createShape = function(m) {
      return new SVGShapeElement(m, this.globalData, this);
    }, SVGRendererBase.prototype.createText = function(m) {
      return new SVGTextLottieElement(m, this.globalData, this);
    }, SVGRendererBase.prototype.createImage = function(m) {
      return new IImageElement(m, this.globalData, this);
    }, SVGRendererBase.prototype.createSolid = function(m) {
      return new ISolidElement(m, this.globalData, this);
    }, SVGRendererBase.prototype.configAnimation = function(m) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + m.w + " " + m.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", m.w), this.svgElement.setAttribute("height", m.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var P = this.globalData.defs;
      this.setupGlobalData(m, P), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = m;
      var k = createNS("clipPath"), L = createNS("rect");
      L.setAttribute("width", m.w), L.setAttribute("height", m.h), L.setAttribute("x", 0), L.setAttribute("y", 0);
      var O = createElementID();
      k.setAttribute("id", O), k.appendChild(L), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + O + ")"), P.appendChild(k), this.layers = m.layers, this.elements = createSizedArray(m.layers.length);
    }, SVGRendererBase.prototype.destroy = function() {
      var m;
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var P = this.layers ? this.layers.length : 0;
      for (m = 0; m < P; m += 1)
        this.elements[m] && this.elements[m].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, SVGRendererBase.prototype.updateContainerSize = function() {
    }, SVGRendererBase.prototype.findIndexByInd = function(m) {
      var P = 0, k = this.layers.length;
      for (P = 0; P < k; P += 1)
        if (this.layers[P].ind === m)
          return P;
      return -1;
    }, SVGRendererBase.prototype.buildItem = function(m) {
      var P = this.elements;
      if (!P[m] && this.layers[m].ty !== 99) {
        P[m] = !0;
        var k = this.createItem(this.layers[m]);
        if (P[m] = k, getExpressionsPlugin() && (this.layers[m].ty === 0 && this.globalData.projectInterface.registerComposition(k), k.initExpressions()), this.appendElementInPos(k, m), this.layers[m].tt) {
          var L = "tp" in this.layers[m] ? this.findIndexByInd(this.layers[m].tp) : m - 1;
          if (L === -1)
            return;
          if (this.elements[L] && this.elements[L] !== !0) {
            var O = P[L].getMatte(this.layers[m].tt);
            k.setMatte(O);
          } else
            this.buildItem(L), this.addPendingElement(k);
        }
      }
    }, SVGRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var m = this.pendingElements.pop();
        if (m.checkParenting(), m.data.tt)
          for (var P = 0, k = this.elements.length; P < k; ) {
            if (this.elements[P] === m) {
              var L = "tp" in m.data ? this.findIndexByInd(m.data.tp) : P - 1, O = this.elements[L].getMatte(this.layers[P].tt);
              m.setMatte(O);
              break;
            }
            P += 1;
          }
      }
    }, SVGRendererBase.prototype.renderFrame = function(m) {
      if (this.renderedFrame !== m && !this.destroyed) {
        var P;
        m === null ? m = this.renderedFrame : this.renderedFrame = m, this.globalData.frameNum = m, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = m, this.globalData._mdf = !1;
        var k = this.layers.length;
        for (this.completeLayers || this.checkLayers(m), P = k - 1; P >= 0; P -= 1)
          (this.completeLayers || this.elements[P]) && this.elements[P].prepareFrame(m - this.layers[P].st);
        if (this.globalData._mdf)
          for (P = 0; P < k; P += 1)
            (this.completeLayers || this.elements[P]) && this.elements[P].renderFrame();
      }
    }, SVGRendererBase.prototype.appendElementInPos = function(m, P) {
      var k = m.getBaseElement();
      if (k) {
        for (var L, O = 0; O < P; )
          this.elements[O] && this.elements[O] !== !0 && this.elements[O].getBaseElement() && (L = this.elements[O].getBaseElement()), O += 1;
        L ? this.layerElement.insertBefore(k, L) : this.layerElement.appendChild(k);
      }
    }, SVGRendererBase.prototype.hide = function() {
      this.layerElement.style.display = "none";
    }, SVGRendererBase.prototype.show = function() {
      this.layerElement.style.display = "block";
    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(m, P, k) {
      this.initFrame(), this.initBaseData(m, P, k), this.initTransform(m, P, k), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && P.progressiveLoad || this.buildAllItems(), this.hide();
    }, ICompElement.prototype.prepareFrame = function(m) {
      if (this._mdf = !1, this.prepareRenderableFrame(m), this.prepareProperties(m, this.isInRange), this.isInRange || this.data.xt) {
        if (this.tm._placeholder)
          this.renderedFrame = m / this.data.sr;
        else {
          var P = this.tm.v;
          P === this.data.op && (P = this.data.op - 1), this.renderedFrame = P;
        }
        var k, L = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), k = L - 1; k >= 0; k -= 1)
          (this.completeLayers || this.elements[k]) && (this.elements[k].prepareFrame(this.renderedFrame - this.layers[k].st), this.elements[k]._mdf && (this._mdf = !0));
      }
    }, ICompElement.prototype.renderInnerContent = function() {
      var m, P = this.layers.length;
      for (m = 0; m < P; m += 1)
        (this.completeLayers || this.elements[m]) && this.elements[m].renderFrame();
    }, ICompElement.prototype.setElements = function(m) {
      this.elements = m;
    }, ICompElement.prototype.getElements = function() {
      return this.elements;
    }, ICompElement.prototype.destroyElements = function() {
      var m, P = this.layers.length;
      for (m = 0; m < P; m += 1)
        this.elements[m] && this.elements[m].destroy();
    }, ICompElement.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement();
    }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(m) {
      return new SVGCompElement(m, this.globalData, this);
    }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(m) {
      return new SVGCompElement(m, this.globalData, this);
    }, CVContextData.prototype.duplicate = function() {
      var m = 2 * this._length, P = this.savedOp;
      this.savedOp = createTypedArray("float32", m), this.savedOp.set(P);
      var k = 0;
      for (k = this._length; k < m; k += 1)
        this.saved[k] = createTypedArray("float32", 16);
      this._length = m;
    }, CVContextData.prototype.reset = function() {
      this.cArrPos = 0, this.cTr.reset(), this.cO = 1;
    }, CVContextData.prototype.popTransform = function() {
      var m, P = this.saved[this.cArrPos], k = this.cTr.props;
      for (m = 0; m < 16; m += 1)
        k[m] = P[m];
      return P;
    }, CVContextData.prototype.popOpacity = function() {
      var m = this.savedOp[this.cArrPos];
      return this.cO = m, m;
    }, CVContextData.prototype.pop = function() {
      return this.cArrPos -= 1, { transform: this.popTransform(), opacity: this.popOpacity() };
    }, CVContextData.prototype.push = function() {
      var m, P = this.cTr.props;
      this._length <= this.cArrPos && this.duplicate();
      var k = this.saved[this.cArrPos];
      for (m = 0; m < 16; m += 1)
        k[m] = P[m];
      this.savedOp[this.cArrPos] = this.cO, this.cArrPos += 1;
    }, CVContextData.prototype.getTransform = function() {
      return this.cTr;
    }, CVContextData.prototype.getOpacity = function() {
      return this.cO;
    }, CVContextData.prototype.setOpacity = function(m) {
      this.cO = m;
    }, ShapeTransformManager.prototype = { addTransformSequence: function(m) {
      var P, k = m.length, L = "_";
      for (P = 0; P < k; P += 1)
        L += m[P].transform.key + "_";
      var O = this.sequences[L];
      return O || (O = { transforms: [].concat(m), finalTransform: new Matrix(), _mdf: !1 }, this.sequences[L] = O, this.sequenceList.push(O)), O;
    }, processSequence: function(m, P) {
      for (var k, L = 0, O = m.transforms.length, V = P; L < O && !P; ) {
        if (m.transforms[L].transform.mProps._mdf) {
          V = !0;
          break;
        }
        L += 1;
      }
      if (V)
        for (m.finalTransform.reset(), L = O - 1; L >= 0; L -= 1)
          k = m.transforms[L].transform.mProps.v.props, m.finalTransform.transform(k[0], k[1], k[2], k[3], k[4], k[5], k[6], k[7], k[8], k[9], k[10], k[11], k[12], k[13], k[14], k[15]);
      m._mdf = V;
    }, processSequences: function(m) {
      var P, k = this.sequenceList.length;
      for (P = 0; P < k; P += 1)
        this.processSequence(this.sequenceList[P], m);
    }, getNewKey: function() {
      return this.transform_key_count += 1, "_" + this.transform_key_count;
    } };
    var lumaLoader = function() {
      var m = "__lottie_element_luma_buffer", P = null, k = null, L = null;
      function O() {
        var V, he, K;
        P || (V = createNS("svg"), he = createNS("filter"), K = createNS("feColorMatrix"), he.setAttribute("id", m), K.setAttribute("type", "matrix"), K.setAttribute("color-interpolation-filters", "sRGB"), K.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), he.appendChild(K), V.appendChild(he), V.setAttribute("id", m + "_svg"), featureSupport.svgLumaHidden && (V.style.display = "none"), L = V, document.body.appendChild(L), P = createTag("canvas"), (k = P.getContext("2d")).filter = "url(#" + m + ")", k.fillStyle = "rgba(0,0,0,0)", k.fillRect(0, 0, 1, 1));
      }
      return { load: O, get: function(V) {
        return P || O(), P.width = V.width, P.height = V.height, k.filter = "url(#" + m + ")", P;
      } };
    };
    function createCanvas(m, P) {
      if (featureSupport.offscreenCanvas)
        return new OffscreenCanvas(m, P);
      var k = createTag("canvas");
      return k.width = m, k.height = P, k;
    }
    var assetLoader = { loadLumaCanvas: lumaLoader.load, getLumaCanvas: lumaLoader.get, createCanvas };
    function CVEffects() {
    }
    function CVMaskElement(m, P) {
      var k;
      this.data = m, this.element = P, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
      var L = this.masksProperties.length, O = !1;
      for (k = 0; k < L; k += 1)
        this.masksProperties[k].mode !== "n" && (O = !0), this.viewData[k] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[k], 3);
      this.hasMasks = O, O && this.element.addRenderableComponent(this);
    }
    function CVBaseElement() {
    }
    CVEffects.prototype.renderFrame = function() {
    }, CVMaskElement.prototype.renderFrame = function() {
      if (this.hasMasks) {
        var m, P, k, L, O = this.element.finalTransform.mat, V = this.element.canvasContext, he = this.masksProperties.length;
        for (V.beginPath(), m = 0; m < he; m += 1)
          if (this.masksProperties[m].mode !== "n") {
            var K;
            this.masksProperties[m].inv && (V.moveTo(0, 0), V.lineTo(this.element.globalData.compSize.w, 0), V.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), V.lineTo(0, this.element.globalData.compSize.h), V.lineTo(0, 0)), L = this.viewData[m].v, P = O.applyToPointArray(L.v[0][0], L.v[0][1], 0), V.moveTo(P[0], P[1]);
            var de = L._length;
            for (K = 1; K < de; K += 1)
              k = O.applyToTriplePoints(L.o[K - 1], L.i[K], L.v[K]), V.bezierCurveTo(k[0], k[1], k[2], k[3], k[4], k[5]);
            k = O.applyToTriplePoints(L.o[K - 1], L.i[0], L.v[0]), V.bezierCurveTo(k[0], k[1], k[2], k[3], k[4], k[5]);
          }
        this.element.globalData.renderer.save(!0), V.clip();
      }
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
      this.element = null;
    };
    var operationsMap = { 1: "source-in", 2: "source-out", 3: "source-in", 4: "source-out" };
    function CVShapeData(m, P, k, L) {
      this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
      var O, V = 4;
      P.ty === "rc" ? V = 5 : P.ty === "el" ? V = 6 : P.ty === "sr" && (V = 7), this.sh = ShapePropertyFactory.getShapeProp(m, P, V, m);
      var he, K = k.length;
      for (O = 0; O < K; O += 1)
        k[O].closed || (he = { transforms: L.addTransformSequence(k[O].transforms), trNodes: [] }, this.styledShapes.push(he), k[O].elements.push(he));
    }
    function CVShapeElement(m, P, k) {
      this.shapes = [], this.shapesData = m.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(m, P, k);
    }
    function CVTextElement(m, P, k) {
      this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(m, P, k);
    }
    function CVImageElement(m, P, k) {
      this.assetData = P.getAssetData(m.refId), this.img = P.imageLoader.getAsset(this.assetData), this.initElement(m, P, k);
    }
    function CVSolidElement(m, P, k) {
      this.initElement(m, P, k);
    }
    function CanvasRendererBase(m, P) {
      this.animationItem = m, this.renderConfig = { clearCanvas: !P || P.clearCanvas === void 0 || P.clearCanvas, context: P && P.context || null, progressiveLoad: P && P.progressiveLoad || !1, preserveAspectRatio: P && P.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: P && P.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: P && P.contentVisibility || "visible", className: P && P.className || "", id: P && P.id || "" }, this.renderConfig.dpr = P && P.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = P && P.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: !1, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = !1, this.rendererType = "canvas";
    }
    function CVCompElement(m, P, k) {
      this.completeLayers = !1, this.layers = m.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(m, P, k), this.tm = m.tm ? PropertyFactory.getProp(this, m.tm, 0, P.frameRate, this) : { _placeholder: !0 };
    }
    function CanvasRenderer(m, P) {
      this.animationItem = m, this.renderConfig = { clearCanvas: !P || P.clearCanvas === void 0 || P.clearCanvas, context: P && P.context || null, progressiveLoad: P && P.progressiveLoad || !1, preserveAspectRatio: P && P.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: P && P.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: P && P.contentVisibility || "visible", className: P && P.className || "", id: P && P.id || "", runExpressions: !P || P.runExpressions === void 0 || P.runExpressions }, this.renderConfig.dpr = P && P.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = P && P.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: !1, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = !1, this.rendererType = "canvas";
    }
    function HBaseElement() {
    }
    function HSolidElement(m, P, k) {
      this.initElement(m, P, k);
    }
    function HShapeElement(m, P, k) {
      this.shapes = [], this.shapesData = m.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(m, P, k), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 };
    }
    function HTextElement(m, P, k) {
      this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = !1, this.initElement(m, P, k);
    }
    function HCameraElement(m, P, k) {
      this.initFrame(), this.initBaseData(m, P, k), this.initHierarchy();
      var L = PropertyFactory.getProp;
      if (this.pe = L(this, m.pe, 0, 0, this), m.ks.p.s ? (this.px = L(this, m.ks.p.x, 1, 0, this), this.py = L(this, m.ks.p.y, 1, 0, this), this.pz = L(this, m.ks.p.z, 1, 0, this)) : this.p = L(this, m.ks.p, 1, 0, this), m.ks.a && (this.a = L(this, m.ks.a, 1, 0, this)), m.ks.or.k.length && m.ks.or.k[0].to) {
        var O, V = m.ks.or.k.length;
        for (O = 0; O < V; O += 1)
          m.ks.or.k[O].to = null, m.ks.or.k[O].ti = null;
      }
      this.or = L(this, m.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = L(this, m.ks.rx, 0, degToRads, this), this.ry = L(this, m.ks.ry, 0, degToRads, this), this.rz = L(this, m.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = !0, this.finalTransform = { mProp: this };
    }
    function HImageElement(m, P, k) {
      this.assetData = P.getAssetData(m.refId), this.initElement(m, P, k);
    }
    function HybridRendererBase(m, P) {
      this.animationItem = m, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: P && P.className || "", imagePreserveAspectRatio: P && P.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(P && P.hideOnTransparent === !1), filterSize: { width: P && P.filterSize && P.filterSize.width || "400%", height: P && P.filterSize && P.filterSize.height || "400%", x: P && P.filterSize && P.filterSize.x || "-100%", y: P && P.filterSize && P.filterSize.y || "-100%" } }, this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
    }
    function HCompElement(m, P, k) {
      this.layers = m.layers, this.supports3d = !m.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(m, P, k), this.tm = m.tm ? PropertyFactory.getProp(this, m.tm, 0, P.frameRate, this) : { _placeholder: !0 };
    }
    function HybridRenderer(m, P) {
      this.animationItem = m, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: P && P.className || "", imagePreserveAspectRatio: P && P.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(P && P.hideOnTransparent === !1), filterSize: { width: P && P.filterSize && P.filterSize.width || "400%", height: P && P.filterSize && P.filterSize.height || "400%", x: P && P.filterSize && P.filterSize.x || "-100%", y: P && P.filterSize && P.filterSize.y || "-100%" }, runExpressions: !P || P.runExpressions === void 0 || P.runExpressions }, this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
    }
    CVBaseElement.prototype = { createElements: function() {
    }, initRendererElement: function() {
    }, createContainerElements: function() {
      if (this.data.tt >= 1) {
        this.buffers = [];
        var m = this.globalData.canvasContext, P = assetLoader.createCanvas(m.canvas.width, m.canvas.height);
        this.buffers.push(P);
        var k = assetLoader.createCanvas(m.canvas.width, m.canvas.height);
        this.buffers.push(k), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
      }
      this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects();
    }, createContent: function() {
    }, setBlendMode: function() {
      var m = this.globalData;
      if (m.blendMode !== this.data.bm) {
        m.blendMode = this.data.bm;
        var P = getBlendMode(this.data.bm);
        m.canvasContext.globalCompositeOperation = P;
      }
    }, createRenderableComponents: function() {
      this.maskManager = new CVMaskElement(this.data, this);
    }, hideElement: function() {
      this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0);
    }, showElement: function() {
      this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
    }, clearCanvas: function(m) {
      m.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
    }, prepareLayer: function() {
      if (this.data.tt >= 1) {
        var m = this.buffers[0].getContext("2d");
        this.clearCanvas(m), m.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
      }
    }, exitLayer: function() {
      if (this.data.tt >= 1) {
        var m = this.buffers[1], P = m.getContext("2d");
        if (this.clearCanvas(P), P.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
          var k = assetLoader.getLumaCanvas(this.canvasContext.canvas);
          k.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(k, 0, 0);
        }
        this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(m, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
      }
    }, renderFrame: function(m) {
      if (!this.hidden && !this.data.hd && (this.data.td !== 1 || m)) {
        this.renderTransform(), this.renderRenderable(), this.setBlendMode();
        var P = this.data.ty === 0;
        this.prepareLayer(), this.globalData.renderer.save(P), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(P), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
      }
    }, destroy: function() {
      this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
    }, mHelper: new Matrix() }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
    }, CVShapeElement.prototype.createStyleElement = function(m, P) {
      var k = { data: m, type: m.ty, preTransforms: this.transformsManager.addTransformSequence(P), transforms: [], elements: [], closed: m.hd === !0 }, L = {};
      if (m.ty === "fl" || m.ty === "st" ? (L.c = PropertyFactory.getProp(this, m.c, 1, 255, this), L.c.k || (k.co = "rgb(" + bmFloor(L.c.v[0]) + "," + bmFloor(L.c.v[1]) + "," + bmFloor(L.c.v[2]) + ")")) : m.ty !== "gf" && m.ty !== "gs" || (L.s = PropertyFactory.getProp(this, m.s, 1, null, this), L.e = PropertyFactory.getProp(this, m.e, 1, null, this), L.h = PropertyFactory.getProp(this, m.h || { k: 0 }, 0, 0.01, this), L.a = PropertyFactory.getProp(this, m.a || { k: 0 }, 0, degToRads, this), L.g = new GradientProperty(this, m.g, this)), L.o = PropertyFactory.getProp(this, m.o, 0, 0.01, this), m.ty === "st" || m.ty === "gs") {
        if (k.lc = lineCapEnum[m.lc || 2], k.lj = lineJoinEnum[m.lj || 2], m.lj == 1 && (k.ml = m.ml), L.w = PropertyFactory.getProp(this, m.w, 0, null, this), L.w.k || (k.wi = L.w.v), m.d) {
          var O = new DashProperty(this, m.d, "canvas", this);
          L.d = O, L.d.k || (k.da = L.d.dashArray, k.do = L.d.dashoffset[0]);
        }
      } else
        k.r = m.r === 2 ? "evenodd" : "nonzero";
      return this.stylesList.push(k), L.style = k, L;
    }, CVShapeElement.prototype.createGroupElement = function() {
      return { it: [], prevViewData: [] };
    }, CVShapeElement.prototype.createTransformElement = function(m) {
      return { transform: { opacity: 1, _opMdf: !1, key: this.transformsManager.getNewKey(), op: PropertyFactory.getProp(this, m.o, 0, 0.01, this), mProps: TransformPropertyFactory.getTransformProperty(this, m, this) } };
    }, CVShapeElement.prototype.createShapeElement = function(m) {
      var P = new CVShapeData(this, m, this.stylesList, this.transformsManager);
      return this.shapes.push(P), this.addShapeToModifiers(P), P;
    }, CVShapeElement.prototype.reloadShapes = function() {
      var m;
      this._isFirstFrame = !0;
      var P = this.itemsData.length;
      for (m = 0; m < P; m += 1)
        this.prevViewData[m] = this.itemsData[m];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), P = this.dynamicProperties.length, m = 0; m < P; m += 1)
        this.dynamicProperties[m].getValue();
      this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
    }, CVShapeElement.prototype.addTransformToStyleList = function(m) {
      var P, k = this.stylesList.length;
      for (P = 0; P < k; P += 1)
        this.stylesList[P].closed || this.stylesList[P].transforms.push(m);
    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
      var m, P = this.stylesList.length;
      for (m = 0; m < P; m += 1)
        this.stylesList[m].closed || this.stylesList[m].transforms.pop();
    }, CVShapeElement.prototype.closeStyles = function(m) {
      var P, k = m.length;
      for (P = 0; P < k; P += 1)
        m[P].closed = !0;
    }, CVShapeElement.prototype.searchShapes = function(m, P, k, L, O) {
      var V, he, K, de, ce, pe, B = m.length - 1, G = [], $ = [], ie = [].concat(O);
      for (V = B; V >= 0; V -= 1) {
        if ((de = this.searchProcessedElement(m[V])) ? P[V] = k[de - 1] : m[V]._shouldRender = L, m[V].ty === "fl" || m[V].ty === "st" || m[V].ty === "gf" || m[V].ty === "gs")
          de ? P[V].style.closed = !1 : P[V] = this.createStyleElement(m[V], ie), G.push(P[V].style);
        else if (m[V].ty === "gr") {
          if (de)
            for (K = P[V].it.length, he = 0; he < K; he += 1)
              P[V].prevViewData[he] = P[V].it[he];
          else
            P[V] = this.createGroupElement(m[V]);
          this.searchShapes(m[V].it, P[V].it, P[V].prevViewData, L, ie);
        } else
          m[V].ty === "tr" ? (de || (pe = this.createTransformElement(m[V]), P[V] = pe), ie.push(P[V]), this.addTransformToStyleList(P[V])) : m[V].ty === "sh" || m[V].ty === "rc" || m[V].ty === "el" || m[V].ty === "sr" ? de || (P[V] = this.createShapeElement(m[V])) : m[V].ty === "tm" || m[V].ty === "rd" || m[V].ty === "pb" || m[V].ty === "zz" || m[V].ty === "op" ? (de ? (ce = P[V]).closed = !1 : ((ce = ShapeModifiers.getModifier(m[V].ty)).init(this, m[V]), P[V] = ce, this.shapeModifiers.push(ce)), $.push(ce)) : m[V].ty === "rp" && (de ? (ce = P[V]).closed = !0 : (ce = ShapeModifiers.getModifier(m[V].ty), P[V] = ce, ce.init(this, m, V, P), this.shapeModifiers.push(ce), L = !1), $.push(ce));
        this.addProcessedElement(m[V], V + 1);
      }
      for (this.removeTransformFromStyleList(), this.closeStyles(G), B = $.length, V = 0; V < B; V += 1)
        $[V].closed = !0;
    }, CVShapeElement.prototype.renderInnerContent = function() {
      this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
    }, CVShapeElement.prototype.renderShapeTransform = function(m, P) {
      (m._opMdf || P.op._mdf || this._isFirstFrame) && (P.opacity = m.opacity, P.opacity *= P.op.v, P._opMdf = !0);
    }, CVShapeElement.prototype.drawLayer = function() {
      var m, P, k, L, O, V, he, K, de, ce = this.stylesList.length, pe = this.globalData.renderer, B = this.globalData.canvasContext;
      for (m = 0; m < ce; m += 1)
        if (((K = (de = this.stylesList[m]).type) !== "st" && K !== "gs" || de.wi !== 0) && de.data._shouldRender && de.coOp !== 0 && this.globalData.currentGlobalAlpha !== 0) {
          for (pe.save(), V = de.elements, K === "st" || K === "gs" ? (B.strokeStyle = K === "st" ? de.co : de.grd, B.lineWidth = de.wi, B.lineCap = de.lc, B.lineJoin = de.lj, B.miterLimit = de.ml || 0) : B.fillStyle = K === "fl" ? de.co : de.grd, pe.ctxOpacity(de.coOp), K !== "st" && K !== "gs" && B.beginPath(), pe.ctxTransform(de.preTransforms.finalTransform.props), k = V.length, P = 0; P < k; P += 1) {
            for (K !== "st" && K !== "gs" || (B.beginPath(), de.da && (B.setLineDash(de.da), B.lineDashOffset = de.do)), O = (he = V[P].trNodes).length, L = 0; L < O; L += 1)
              he[L].t === "m" ? B.moveTo(he[L].p[0], he[L].p[1]) : he[L].t === "c" ? B.bezierCurveTo(he[L].pts[0], he[L].pts[1], he[L].pts[2], he[L].pts[3], he[L].pts[4], he[L].pts[5]) : B.closePath();
            K !== "st" && K !== "gs" || (B.stroke(), de.da && B.setLineDash(this.dashResetter));
          }
          K !== "st" && K !== "gs" && B.fill(de.r), pe.restore();
        }
    }, CVShapeElement.prototype.renderShape = function(m, P, k, L) {
      var O, V;
      for (V = m, O = P.length - 1; O >= 0; O -= 1)
        P[O].ty === "tr" ? (V = k[O].transform, this.renderShapeTransform(m, V)) : P[O].ty === "sh" || P[O].ty === "el" || P[O].ty === "rc" || P[O].ty === "sr" ? this.renderPath(P[O], k[O]) : P[O].ty === "fl" ? this.renderFill(P[O], k[O], V) : P[O].ty === "st" ? this.renderStroke(P[O], k[O], V) : P[O].ty === "gf" || P[O].ty === "gs" ? this.renderGradientFill(P[O], k[O], V) : P[O].ty === "gr" ? this.renderShape(V, P[O].it, k[O].it) : P[O].ty;
      L && this.drawLayer();
    }, CVShapeElement.prototype.renderStyledShape = function(m, P) {
      if (this._isFirstFrame || P._mdf || m.transforms._mdf) {
        var k, L, O, V = m.trNodes, he = P.paths, K = he._length;
        V.length = 0;
        var de = m.transforms.finalTransform;
        for (O = 0; O < K; O += 1) {
          var ce = he.shapes[O];
          if (ce && ce.v) {
            for (L = ce._length, k = 1; k < L; k += 1)
              k === 1 && V.push({ t: "m", p: de.applyToPointArray(ce.v[0][0], ce.v[0][1], 0) }), V.push({ t: "c", pts: de.applyToTriplePoints(ce.o[k - 1], ce.i[k], ce.v[k]) });
            L === 1 && V.push({ t: "m", p: de.applyToPointArray(ce.v[0][0], ce.v[0][1], 0) }), ce.c && L && (V.push({ t: "c", pts: de.applyToTriplePoints(ce.o[k - 1], ce.i[0], ce.v[0]) }), V.push({ t: "z" }));
          }
        }
        m.trNodes = V;
      }
    }, CVShapeElement.prototype.renderPath = function(m, P) {
      if (m.hd !== !0 && m._shouldRender) {
        var k, L = P.styledShapes.length;
        for (k = 0; k < L; k += 1)
          this.renderStyledShape(P.styledShapes[k], P.sh);
      }
    }, CVShapeElement.prototype.renderFill = function(m, P, k) {
      var L = P.style;
      (P.c._mdf || this._isFirstFrame) && (L.co = "rgb(" + bmFloor(P.c.v[0]) + "," + bmFloor(P.c.v[1]) + "," + bmFloor(P.c.v[2]) + ")"), (P.o._mdf || k._opMdf || this._isFirstFrame) && (L.coOp = P.o.v * k.opacity);
    }, CVShapeElement.prototype.renderGradientFill = function(m, P, k) {
      var L, O = P.style;
      if (!O.grd || P.g._mdf || P.s._mdf || P.e._mdf || m.t !== 1 && (P.h._mdf || P.a._mdf)) {
        var V, he = this.globalData.canvasContext, K = P.s.v, de = P.e.v;
        if (m.t === 1)
          L = he.createLinearGradient(K[0], K[1], de[0], de[1]);
        else {
          var ce = Math.sqrt(Math.pow(K[0] - de[0], 2) + Math.pow(K[1] - de[1], 2)), pe = Math.atan2(de[1] - K[1], de[0] - K[0]), B = P.h.v;
          B >= 1 ? B = 0.99 : B <= -1 && (B = -0.99);
          var G = ce * B, $ = Math.cos(pe + P.a.v) * G + K[0], ie = Math.sin(pe + P.a.v) * G + K[1];
          L = he.createRadialGradient($, ie, 0, K[0], K[1], ce);
        }
        var fe = m.g.p, Q = P.g.c, ue = 1;
        for (V = 0; V < fe; V += 1)
          P.g._hasOpacity && P.g._collapsable && (ue = P.g.o[2 * V + 1]), L.addColorStop(Q[4 * V] / 100, "rgba(" + Q[4 * V + 1] + "," + Q[4 * V + 2] + "," + Q[4 * V + 3] + "," + ue + ")");
        O.grd = L;
      }
      O.coOp = P.o.v * k.opacity;
    }, CVShapeElement.prototype.renderStroke = function(m, P, k) {
      var L = P.style, O = P.d;
      O && (O._mdf || this._isFirstFrame) && (L.da = O.dashArray, L.do = O.dashoffset[0]), (P.c._mdf || this._isFirstFrame) && (L.co = "rgb(" + bmFloor(P.c.v[0]) + "," + bmFloor(P.c.v[1]) + "," + bmFloor(P.c.v[2]) + ")"), (P.o._mdf || k._opMdf || this._isFirstFrame) && (L.coOp = P.o.v * k.opacity), (P.w._mdf || this._isFirstFrame) && (L.wi = P.w.v);
    }, CVShapeElement.prototype.destroy = function() {
      this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
      var m = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(m.l ? m.l.length : 0);
      var P = !1;
      m.fc ? (P = !0, this.values.fill = this.buildColor(m.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = P;
      var k = !1;
      m.sc && (k = !0, this.values.stroke = this.buildColor(m.sc), this.values.sWidth = m.sw);
      var L, O, V, he, K, de, ce, pe, B, G, $, ie, fe = this.globalData.fontManager.getFontByName(m.f), Q = m.l, ue = this.mHelper;
      this.stroke = k, this.values.fValue = m.finalSize + "px " + this.globalData.fontManager.getFontByName(m.f).fFamily, O = m.finalText.length;
      var me = this.data.singleShape, ge = 1e-3 * m.tr * m.finalSize, ve = 0, _e = 0, Te = !0, Ce = 0;
      for (L = 0; L < O; L += 1) {
        he = (V = this.globalData.fontManager.getCharData(m.finalText[L], fe.fStyle, this.globalData.fontManager.getFontByName(m.f).fFamily)) && V.data || {}, ue.reset(), me && Q[L].n && (ve = -ge, _e += m.yOffset, _e += Te ? 1 : 0, Te = !1), B = (ce = he.shapes ? he.shapes[0].it : []).length, ue.scale(m.finalSize / 100, m.finalSize / 100), me && this.applyTextPropertiesToMatrix(m, ue, Q[L].line, ve, _e), $ = createSizedArray(B - 1);
        var Ae = 0;
        for (pe = 0; pe < B; pe += 1)
          if (ce[pe].ty === "sh") {
            for (de = ce[pe].ks.k.i.length, G = ce[pe].ks.k, ie = [], K = 1; K < de; K += 1)
              K === 1 && ie.push(ue.applyToX(G.v[0][0], G.v[0][1], 0), ue.applyToY(G.v[0][0], G.v[0][1], 0)), ie.push(ue.applyToX(G.o[K - 1][0], G.o[K - 1][1], 0), ue.applyToY(G.o[K - 1][0], G.o[K - 1][1], 0), ue.applyToX(G.i[K][0], G.i[K][1], 0), ue.applyToY(G.i[K][0], G.i[K][1], 0), ue.applyToX(G.v[K][0], G.v[K][1], 0), ue.applyToY(G.v[K][0], G.v[K][1], 0));
            ie.push(ue.applyToX(G.o[K - 1][0], G.o[K - 1][1], 0), ue.applyToY(G.o[K - 1][0], G.o[K - 1][1], 0), ue.applyToX(G.i[0][0], G.i[0][1], 0), ue.applyToY(G.i[0][0], G.i[0][1], 0), ue.applyToX(G.v[0][0], G.v[0][1], 0), ue.applyToY(G.v[0][0], G.v[0][1], 0)), $[Ae] = ie, Ae += 1;
          }
        me && (ve += Q[L].l, ve += ge), this.textSpans[Ce] ? this.textSpans[Ce].elem = $ : this.textSpans[Ce] = { elem: $ }, Ce += 1;
      }
    }, CVTextElement.prototype.renderInnerContent = function() {
      var m, P, k, L, O, V, he = this.canvasContext;
      he.font = this.values.fValue, he.lineCap = "butt", he.lineJoin = "miter", he.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
      var K, de = this.textAnimator.renderedLetters, ce = this.textProperty.currentData.l;
      P = ce.length;
      var pe, B, G = null, $ = null, ie = null;
      for (m = 0; m < P; m += 1)
        if (!ce[m].n) {
          if ((K = de[m]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(K.p), this.globalData.renderer.ctxOpacity(K.o)), this.fill) {
            for (K && K.fc ? G !== K.fc && (G = K.fc, he.fillStyle = K.fc) : G !== this.values.fill && (G = this.values.fill, he.fillStyle = this.values.fill), L = (pe = this.textSpans[m].elem).length, this.globalData.canvasContext.beginPath(), k = 0; k < L; k += 1)
              for (V = (B = pe[k]).length, this.globalData.canvasContext.moveTo(B[0], B[1]), O = 2; O < V; O += 6)
                this.globalData.canvasContext.bezierCurveTo(B[O], B[O + 1], B[O + 2], B[O + 3], B[O + 4], B[O + 5]);
            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill();
          }
          if (this.stroke) {
            for (K && K.sw ? ie !== K.sw && (ie = K.sw, he.lineWidth = K.sw) : ie !== this.values.sWidth && (ie = this.values.sWidth, he.lineWidth = this.values.sWidth), K && K.sc ? $ !== K.sc && ($ = K.sc, he.strokeStyle = K.sc) : $ !== this.values.stroke && ($ = this.values.stroke, he.strokeStyle = this.values.stroke), L = (pe = this.textSpans[m].elem).length, this.globalData.canvasContext.beginPath(), k = 0; k < L; k += 1)
              for (V = (B = pe[k]).length, this.globalData.canvasContext.moveTo(B[0], B[1]), O = 2; O < V; O += 6)
                this.globalData.canvasContext.bezierCurveTo(B[O], B[O + 1], B[O + 2], B[O + 3], B[O + 4], B[O + 5]);
            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke();
          }
          K && this.globalData.renderer.restore();
        }
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
      if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
        var m = createTag("canvas");
        m.width = this.assetData.w, m.height = this.assetData.h;
        var P, k, L = m.getContext("2d"), O = this.img.width, V = this.img.height, he = O / V, K = this.assetData.w / this.assetData.h, de = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        he > K && de === "xMidYMid slice" || he < K && de !== "xMidYMid slice" ? P = (k = V) * K : k = (P = O) / K, L.drawImage(this.img, (O - P) / 2, (V - k) / 2, P, k, 0, 0, this.assetData.w, this.assetData.h), this.img = m;
      }
    }, CVImageElement.prototype.renderInnerContent = function() {
      this.canvasContext.drawImage(this.img, 0, 0);
    }, CVImageElement.prototype.destroy = function() {
      this.img = null;
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
      var m = this.canvasContext;
      m.fillStyle = this.data.sc, m.fillRect(0, 0, this.data.sw, this.data.sh);
    }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(m) {
      return new CVShapeElement(m, this.globalData, this);
    }, CanvasRendererBase.prototype.createText = function(m) {
      return new CVTextElement(m, this.globalData, this);
    }, CanvasRendererBase.prototype.createImage = function(m) {
      return new CVImageElement(m, this.globalData, this);
    }, CanvasRendererBase.prototype.createSolid = function(m) {
      return new CVSolidElement(m, this.globalData, this);
    }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(m) {
      if (m[0] !== 1 || m[1] !== 0 || m[4] !== 0 || m[5] !== 1 || m[12] !== 0 || m[13] !== 0)
        if (this.renderConfig.clearCanvas) {
          this.transformMat.cloneFromProps(m);
          var P = this.contextData.getTransform(), k = P.props;
          this.transformMat.transform(k[0], k[1], k[2], k[3], k[4], k[5], k[6], k[7], k[8], k[9], k[10], k[11], k[12], k[13], k[14], k[15]), P.cloneFromProps(this.transformMat.props);
          var L = P.props;
          this.canvasContext.setTransform(L[0], L[1], L[4], L[5], L[12], L[13]);
        } else
          this.canvasContext.transform(m[0], m[1], m[4], m[5], m[12], m[13]);
    }, CanvasRendererBase.prototype.ctxOpacity = function(m) {
      var P = this.contextData.getOpacity();
      if (!this.renderConfig.clearCanvas)
        return this.canvasContext.globalAlpha *= m < 0 ? 0 : m, void (this.globalData.currentGlobalAlpha = P);
      P *= m < 0 ? 0 : m, this.contextData.setOpacity(P), this.globalData.currentGlobalAlpha !== P && (this.canvasContext.globalAlpha = P, this.globalData.currentGlobalAlpha = P);
    }, CanvasRendererBase.prototype.reset = function() {
      this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
    }, CanvasRendererBase.prototype.save = function(m) {
      this.renderConfig.clearCanvas ? (m && this.canvasContext.save(), this.contextData.push()) : this.canvasContext.save();
    }, CanvasRendererBase.prototype.restore = function(m) {
      if (this.renderConfig.clearCanvas) {
        m && (this.canvasContext.restore(), this.globalData.blendMode = "source-over");
        var P = this.contextData.pop(), k = P.transform, L = P.opacity;
        this.canvasContext.setTransform(k[0], k[1], k[4], k[5], k[12], k[13]), this.globalData.currentGlobalAlpha !== L && (this.canvasContext.globalAlpha = L, this.globalData.currentGlobalAlpha = L);
      } else
        this.canvasContext.restore();
    }, CanvasRendererBase.prototype.configAnimation = function(m) {
      if (this.animationItem.wrapper) {
        this.animationItem.container = createTag("canvas");
        var P = this.animationItem.container.style;
        P.width = "100%", P.height = "100%";
        var k = "0px 0px 0px";
        P.transformOrigin = k, P.mozTransformOrigin = k, P.webkitTransformOrigin = k, P["-webkit-transform"] = k, P.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
      } else
        this.canvasContext = this.renderConfig.context;
      this.data = m, this.layers = m.layers, this.transformCanvas = { w: m.w, h: m.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(m, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(m.layers.length), this.updateContainerSize();
    }, CanvasRendererBase.prototype.updateContainerSize = function(m, P) {
      var k, L, O, V;
      if (this.reset(), m ? (k = m, L = P, this.canvasContext.canvas.width = k, this.canvasContext.canvas.height = L) : (this.animationItem.wrapper && this.animationItem.container ? (k = this.animationItem.wrapper.offsetWidth, L = this.animationItem.wrapper.offsetHeight) : (k = this.canvasContext.canvas.width, L = this.canvasContext.canvas.height), this.canvasContext.canvas.width = k * this.renderConfig.dpr, this.canvasContext.canvas.height = L * this.renderConfig.dpr), this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
        var he = this.renderConfig.preserveAspectRatio.split(" "), K = he[1] || "meet", de = he[0] || "xMidYMid", ce = de.substr(0, 4), pe = de.substr(4);
        O = k / L, (V = this.transformCanvas.w / this.transformCanvas.h) > O && K === "meet" || V < O && K === "slice" ? (this.transformCanvas.sx = k / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = k / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = L / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = L / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = ce === "xMid" && (V < O && K === "meet" || V > O && K === "slice") ? (k - this.transformCanvas.w * (L / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : ce === "xMax" && (V < O && K === "meet" || V > O && K === "slice") ? (k - this.transformCanvas.w * (L / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = pe === "YMid" && (V > O && K === "meet" || V < O && K === "slice") ? (L - this.transformCanvas.h * (k / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : pe === "YMax" && (V > O && K === "meet" || V < O && K === "slice") ? (L - this.transformCanvas.h * (k / this.transformCanvas.w)) * this.renderConfig.dpr : 0;
      } else
        this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = k / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = L / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
    }, CanvasRendererBase.prototype.destroy = function() {
      var m;
      for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), m = (this.layers ? this.layers.length : 0) - 1; m >= 0; m -= 1)
        this.elements[m] && this.elements[m].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
    }, CanvasRendererBase.prototype.renderFrame = function(m, P) {
      if ((this.renderedFrame !== m || this.renderConfig.clearCanvas !== !0 || P) && !this.destroyed && m !== -1) {
        var k;
        this.renderedFrame = m, this.globalData.frameNum = m - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || P, this.globalData.projectInterface.currentFrame = m;
        var L = this.layers.length;
        for (this.completeLayers || this.checkLayers(m), k = 0; k < L; k += 1)
          (this.completeLayers || this.elements[k]) && this.elements[k].prepareFrame(m - this.layers[k].st);
        if (this.globalData._mdf) {
          for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), k = L - 1; k >= 0; k -= 1)
            (this.completeLayers || this.elements[k]) && this.elements[k].renderFrame();
          this.renderConfig.clearCanvas !== !0 && this.restore();
        }
      }
    }, CanvasRendererBase.prototype.buildItem = function(m) {
      var P = this.elements;
      if (!P[m] && this.layers[m].ty !== 99) {
        var k = this.createItem(this.layers[m], this, this.globalData);
        P[m] = k, k.initExpressions();
      }
    }, CanvasRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; )
        this.pendingElements.pop().checkParenting();
    }, CanvasRendererBase.prototype.hide = function() {
      this.animationItem.container.style.display = "none";
    }, CanvasRendererBase.prototype.show = function() {
      this.animationItem.container.style.display = "block";
    }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
      var m, P = this.canvasContext;
      for (P.beginPath(), P.moveTo(0, 0), P.lineTo(this.data.w, 0), P.lineTo(this.data.w, this.data.h), P.lineTo(0, this.data.h), P.lineTo(0, 0), P.clip(), m = this.layers.length - 1; m >= 0; m -= 1)
        (this.completeLayers || this.elements[m]) && this.elements[m].renderFrame();
    }, CVCompElement.prototype.destroy = function() {
      var m;
      for (m = this.layers.length - 1; m >= 0; m -= 1)
        this.elements[m] && this.elements[m].destroy();
      this.layers = null, this.elements = null;
    }, CVCompElement.prototype.createComp = function(m) {
      return new CVCompElement(m, this.globalData, this);
    }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(m) {
      return new CVCompElement(m, this.globalData, this);
    }, HBaseElement.prototype = { checkBlendMode: function() {
    }, initRendererElement: function() {
      this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
    }, createContainerElements: function() {
      this.renderableEffectsManager = new CVEffects(), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode();
    }, renderElement: function() {
      var m = this.transformedElement ? this.transformedElement.style : {};
      if (this.finalTransform._matMdf) {
        var P = this.finalTransform.mat.toCSS();
        m.transform = P, m.webkitTransform = P;
      }
      this.finalTransform._opMdf && (m.opacity = this.finalTransform.mProp.o.v);
    }, renderFrame: function() {
      this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
    }, destroy: function() {
      this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
    }, createRenderableComponents: function() {
      this.maskManager = new MaskElement(this.data, this, this.globalData);
    }, addEffects: function() {
    }, setMatte: function() {
    } }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
      var m;
      this.data.hasMask ? ((m = createNS("rect")).setAttribute("width", this.data.sw), m.setAttribute("height", this.data.sh), m.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((m = createTag("div")).style.width = this.data.sw + "px", m.style.height = this.data.sh + "px", m.style.backgroundColor = this.data.sc), this.layerElement.appendChild(m);
    }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
      var m;
      if (this.baseElement.style.fontSize = 0, this.data.hasMask)
        this.layerElement.appendChild(this.shapesContainer), m = this.svgElement;
      else {
        m = createNS("svg");
        var P = this.comp.data ? this.comp.data : this.globalData.compSize;
        m.setAttribute("width", P.w), m.setAttribute("height", P.h), m.appendChild(this.shapesContainer), this.layerElement.appendChild(m);
      }
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = m;
    }, HShapeElement.prototype.getTransformedPoint = function(m, P) {
      var k, L = m.length;
      for (k = 0; k < L; k += 1)
        P = m[k].mProps.v.applyToPointArray(P[0], P[1], 0);
      return P;
    }, HShapeElement.prototype.calculateShapeBoundingBox = function(m, P) {
      var k, L, O, V, he, K = m.sh.v, de = m.transformers, ce = K._length;
      if (!(ce <= 1)) {
        for (k = 0; k < ce - 1; k += 1)
          L = this.getTransformedPoint(de, K.v[k]), O = this.getTransformedPoint(de, K.o[k]), V = this.getTransformedPoint(de, K.i[k + 1]), he = this.getTransformedPoint(de, K.v[k + 1]), this.checkBounds(L, O, V, he, P);
        K.c && (L = this.getTransformedPoint(de, K.v[k]), O = this.getTransformedPoint(de, K.o[k]), V = this.getTransformedPoint(de, K.i[0]), he = this.getTransformedPoint(de, K.v[0]), this.checkBounds(L, O, V, he, P));
      }
    }, HShapeElement.prototype.checkBounds = function(m, P, k, L, O) {
      this.getBoundsOfCurve(m, P, k, L);
      var V = this.shapeBoundingBox;
      O.x = bmMin(V.left, O.x), O.xMax = bmMax(V.right, O.xMax), O.y = bmMin(V.top, O.y), O.yMax = bmMax(V.bottom, O.yMax);
    }, HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }, HShapeElement.prototype.getBoundsOfCurve = function(m, P, k, L) {
      for (var O, V, he, K, de, ce, pe, B = [[m[0], L[0]], [m[1], L[1]]], G = 0; G < 2; ++G)
        V = 6 * m[G] - 12 * P[G] + 6 * k[G], O = -3 * m[G] + 9 * P[G] - 9 * k[G] + 3 * L[G], he = 3 * P[G] - 3 * m[G], V |= 0, he |= 0, (O |= 0) === 0 && V === 0 || (O === 0 ? (K = -he / V) > 0 && K < 1 && B[G].push(this.calculateF(K, m, P, k, L, G)) : (de = V * V - 4 * he * O) >= 0 && ((ce = (-V + bmSqrt(de)) / (2 * O)) > 0 && ce < 1 && B[G].push(this.calculateF(ce, m, P, k, L, G)), (pe = (-V - bmSqrt(de)) / (2 * O)) > 0 && pe < 1 && B[G].push(this.calculateF(pe, m, P, k, L, G))));
      this.shapeBoundingBox.left = bmMin.apply(null, B[0]), this.shapeBoundingBox.top = bmMin.apply(null, B[1]), this.shapeBoundingBox.right = bmMax.apply(null, B[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, B[1]);
    }, HShapeElement.prototype.calculateF = function(m, P, k, L, O, V) {
      return bmPow(1 - m, 3) * P[V] + 3 * bmPow(1 - m, 2) * m * k[V] + 3 * (1 - m) * bmPow(m, 2) * L[V] + bmPow(m, 3) * O[V];
    }, HShapeElement.prototype.calculateBoundingBox = function(m, P) {
      var k, L = m.length;
      for (k = 0; k < L; k += 1)
        m[k] && m[k].sh ? this.calculateShapeBoundingBox(m[k], P) : m[k] && m[k].it ? this.calculateBoundingBox(m[k].it, P) : m[k] && m[k].style && m[k].w && this.expandStrokeBoundingBox(m[k].w, P);
    }, HShapeElement.prototype.expandStrokeBoundingBox = function(m, P) {
      var k = 0;
      if (m.keyframes) {
        for (var L = 0; L < m.keyframes.length; L += 1) {
          var O = m.keyframes[L].s;
          O > k && (k = O);
        }
        k *= m.mult;
      } else
        k = m.v * m.mult;
      P.x -= k, P.xMax += k, P.y -= k, P.yMax += k;
    }, HShapeElement.prototype.currentBoxContains = function(m) {
      return this.currentBBox.x <= m.x && this.currentBBox.y <= m.y && this.currentBBox.width + this.currentBBox.x >= m.x + m.width && this.currentBBox.height + this.currentBBox.y >= m.y + m.height;
    }, HShapeElement.prototype.renderInnerContent = function() {
      if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
        var m = this.tempBoundingBox, P = 999999;
        if (m.x = P, m.xMax = -P, m.y = P, m.yMax = -P, this.calculateBoundingBox(this.itemsData, m), m.width = m.xMax < m.x ? 0 : m.xMax - m.x, m.height = m.yMax < m.y ? 0 : m.yMax - m.y, this.currentBoxContains(m))
          return;
        var k = !1;
        if (this.currentBBox.w !== m.width && (this.currentBBox.w = m.width, this.shapeCont.setAttribute("width", m.width), k = !0), this.currentBBox.h !== m.height && (this.currentBBox.h = m.height, this.shapeCont.setAttribute("height", m.height), k = !0), k || this.currentBBox.x !== m.x || this.currentBBox.y !== m.y) {
          this.currentBBox.w = m.width, this.currentBBox.h = m.height, this.currentBBox.x = m.x, this.currentBBox.y = m.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
          var L = this.shapeCont.style, O = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
          L.transform = O, L.webkitTransform = O;
        }
      }
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
      if (this.isMasked = this.checkMasks(), this.isMasked) {
        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
        var m = createNS("g");
        this.maskedElement.appendChild(m), this.innerElem = m;
      } else
        this.renderType = "html", this.innerElem = this.layerElement;
      this.checkParenting();
    }, HTextElement.prototype.buildNewText = function() {
      var m = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(m.l ? m.l.length : 0);
      var P = this.innerElem.style, k = m.fc ? this.buildColor(m.fc) : "rgba(0,0,0,0)";
      P.fill = k, P.color = k, m.sc && (P.stroke = this.buildColor(m.sc), P.strokeWidth = m.sw + "px");
      var L, O, V = this.globalData.fontManager.getFontByName(m.f);
      if (!this.globalData.fontManager.chars)
        if (P.fontSize = m.finalSize + "px", P.lineHeight = m.finalSize + "px", V.fClass)
          this.innerElem.className = V.fClass;
        else {
          P.fontFamily = V.fFamily;
          var he = m.fWeight, K = m.fStyle;
          P.fontStyle = K, P.fontWeight = he;
        }
      var de, ce, pe, B = m.l;
      O = B.length;
      var G, $ = this.mHelper, ie = "", fe = 0;
      for (L = 0; L < O; L += 1) {
        if (this.globalData.fontManager.chars ? (this.textPaths[fe] ? de = this.textPaths[fe] : ((de = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), de.setAttribute("stroke-linejoin", lineJoinEnum[2]), de.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[fe] ? pe = (ce = this.textSpans[fe]).children[0] : ((ce = createTag("div")).style.lineHeight = 0, (pe = createNS("svg")).appendChild(de), styleDiv(ce)))) : this.isMasked ? de = this.textPaths[fe] ? this.textPaths[fe] : createNS("text") : this.textSpans[fe] ? (ce = this.textSpans[fe], de = this.textPaths[fe]) : (styleDiv(ce = createTag("span")), styleDiv(de = createTag("span")), ce.appendChild(de)), this.globalData.fontManager.chars) {
          var Q, ue = this.globalData.fontManager.getCharData(m.finalText[L], V.fStyle, this.globalData.fontManager.getFontByName(m.f).fFamily);
          if (Q = ue ? ue.data : null, $.reset(), Q && Q.shapes && Q.shapes.length && (G = Q.shapes[0].it, $.scale(m.finalSize / 100, m.finalSize / 100), ie = this.createPathShape($, G), de.setAttribute("d", ie)), this.isMasked)
            this.innerElem.appendChild(de);
          else {
            if (this.innerElem.appendChild(ce), Q && Q.shapes) {
              document.body.appendChild(pe);
              var me = pe.getBBox();
              pe.setAttribute("width", me.width + 2), pe.setAttribute("height", me.height + 2), pe.setAttribute("viewBox", me.x - 1 + " " + (me.y - 1) + " " + (me.width + 2) + " " + (me.height + 2));
              var ge = pe.style, ve = "translate(" + (me.x - 1) + "px," + (me.y - 1) + "px)";
              ge.transform = ve, ge.webkitTransform = ve, B[L].yOffset = me.y - 1;
            } else
              pe.setAttribute("width", 1), pe.setAttribute("height", 1);
            ce.appendChild(pe);
          }
        } else if (de.textContent = B[L].val, de.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked)
          this.innerElem.appendChild(de);
        else {
          this.innerElem.appendChild(ce);
          var _e = de.style, Te = "translate3d(0," + -m.finalSize / 1.2 + "px,0)";
          _e.transform = Te, _e.webkitTransform = Te;
        }
        this.isMasked ? this.textSpans[fe] = de : this.textSpans[fe] = ce, this.textSpans[fe].style.display = "block", this.textPaths[fe] = de, fe += 1;
      }
      for (; fe < this.textSpans.length; )
        this.textSpans[fe].style.display = "none", fe += 1;
    }, HTextElement.prototype.renderInnerContent = function() {
      var m;
      if (this.data.singleShape) {
        if (!this._isFirstFrame && !this.lettersChangedFlag)
          return;
        if (this.isMasked && this.finalTransform._matMdf) {
          this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), m = this.svgElement.style;
          var P = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
          m.transform = P, m.webkitTransform = P;
        }
      }
      if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
        var k, L, O, V, he, K = 0, de = this.textAnimator.renderedLetters, ce = this.textProperty.currentData.l;
        for (L = ce.length, k = 0; k < L; k += 1)
          ce[k].n ? K += 1 : (V = this.textSpans[k], he = this.textPaths[k], O = de[K], K += 1, O._mdf.m && (this.isMasked ? V.setAttribute("transform", O.m) : (V.style.webkitTransform = O.m, V.style.transform = O.m)), V.style.opacity = O.o, O.sw && O._mdf.sw && he.setAttribute("stroke-width", O.sw), O.sc && O._mdf.sc && he.setAttribute("stroke", O.sc), O.fc && O._mdf.fc && (he.setAttribute("fill", O.fc), he.style.color = O.fc));
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
          var pe = this.innerElem.getBBox();
          if (this.currentBBox.w !== pe.width && (this.currentBBox.w = pe.width, this.svgElement.setAttribute("width", pe.width)), this.currentBBox.h !== pe.height && (this.currentBBox.h = pe.height, this.svgElement.setAttribute("height", pe.height)), this.currentBBox.w !== pe.width + 2 || this.currentBBox.h !== pe.height + 2 || this.currentBBox.x !== pe.x - 1 || this.currentBBox.y !== pe.y - 1) {
            this.currentBBox.w = pe.width + 2, this.currentBBox.h = pe.height + 2, this.currentBBox.x = pe.x - 1, this.currentBBox.y = pe.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), m = this.svgElement.style;
            var B = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            m.transform = B, m.webkitTransform = B;
          }
        }
      }
    }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
      var m, P, k, L, O = this.comp.threeDElements.length;
      for (m = 0; m < O; m += 1)
        if ((P = this.comp.threeDElements[m]).type === "3d") {
          k = P.perspectiveElem.style, L = P.container.style;
          var V = this.pe.v + "px", he = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
          k.perspective = V, k.webkitPerspective = V, L.transformOrigin = "0px 0px 0px", L.mozTransformOrigin = "0px 0px 0px", L.webkitTransformOrigin = "0px 0px 0px", k.transform = he, k.webkitTransform = he;
        }
    }, HCameraElement.prototype.createElements = function() {
    }, HCameraElement.prototype.hide = function() {
    }, HCameraElement.prototype.renderFrame = function() {
      var m, P, k = this._isFirstFrame;
      if (this.hierarchy)
        for (P = this.hierarchy.length, m = 0; m < P; m += 1)
          k = this.hierarchy[m].finalTransform.mProp._mdf || k;
      if (k || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
        if (this.mat.reset(), this.hierarchy)
          for (m = P = this.hierarchy.length - 1; m >= 0; m -= 1) {
            var L = this.hierarchy[m].finalTransform.mProp;
            this.mat.translate(-L.p.v[0], -L.p.v[1], L.p.v[2]), this.mat.rotateX(-L.or.v[0]).rotateY(-L.or.v[1]).rotateZ(L.or.v[2]), this.mat.rotateX(-L.rx.v).rotateY(-L.ry.v).rotateZ(L.rz.v), this.mat.scale(1 / L.s.v[0], 1 / L.s.v[1], 1 / L.s.v[2]), this.mat.translate(L.a.v[0], L.a.v[1], L.a.v[2]);
          }
        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
          var O;
          O = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
          var V = Math.sqrt(Math.pow(O[0], 2) + Math.pow(O[1], 2) + Math.pow(O[2], 2)), he = [O[0] / V, O[1] / V, O[2] / V], K = Math.sqrt(he[2] * he[2] + he[0] * he[0]), de = Math.atan2(he[1], K), ce = Math.atan2(he[0], -he[2]);
          this.mat.rotateY(ce).rotateX(-de);
        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
        var pe = !this._prevMat.equals(this.mat);
        if ((pe || this.pe._mdf) && this.comp.threeDElements) {
          var B, G, $;
          for (P = this.comp.threeDElements.length, m = 0; m < P; m += 1)
            if ((B = this.comp.threeDElements[m]).type === "3d") {
              if (pe) {
                var ie = this.mat.toCSS();
                ($ = B.container.style).transform = ie, $.webkitTransform = ie;
              }
              this.pe._mdf && ((G = B.perspectiveElem.style).perspective = this.pe.v + "px", G.webkitPerspective = this.pe.v + "px");
            }
          this.mat.clone(this._prevMat);
        }
      }
      this._isFirstFrame = !1;
    }, HCameraElement.prototype.prepareFrame = function(m) {
      this.prepareProperties(m, !0);
    }, HCameraElement.prototype.destroy = function() {
    }, HCameraElement.prototype.getBaseElement = function() {
      return null;
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
      var m = this.globalData.getAssetsPath(this.assetData), P = new Image();
      this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", m), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(P), P.crossOrigin = "anonymous", P.src = m, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
    }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; )
        this.pendingElements.pop().checkParenting();
    }, HybridRendererBase.prototype.appendElementInPos = function(m, P) {
      var k = m.getBaseElement();
      if (k) {
        var L = this.layers[P];
        if (L.ddd && this.supports3d)
          this.addTo3dContainer(k, P);
        else if (this.threeDElements)
          this.addTo3dContainer(k, P);
        else {
          for (var O, V, he = 0; he < P; )
            this.elements[he] && this.elements[he] !== !0 && this.elements[he].getBaseElement && (V = this.elements[he], O = (this.layers[he].ddd ? this.getThreeDContainerByPos(he) : V.getBaseElement()) || O), he += 1;
          O ? L.ddd && this.supports3d || this.layerElement.insertBefore(k, O) : L.ddd && this.supports3d || this.layerElement.appendChild(k);
        }
      }
    }, HybridRendererBase.prototype.createShape = function(m) {
      return this.supports3d ? new HShapeElement(m, this.globalData, this) : new SVGShapeElement(m, this.globalData, this);
    }, HybridRendererBase.prototype.createText = function(m) {
      return this.supports3d ? new HTextElement(m, this.globalData, this) : new SVGTextLottieElement(m, this.globalData, this);
    }, HybridRendererBase.prototype.createCamera = function(m) {
      return this.camera = new HCameraElement(m, this.globalData, this), this.camera;
    }, HybridRendererBase.prototype.createImage = function(m) {
      return this.supports3d ? new HImageElement(m, this.globalData, this) : new IImageElement(m, this.globalData, this);
    }, HybridRendererBase.prototype.createSolid = function(m) {
      return this.supports3d ? new HSolidElement(m, this.globalData, this) : new ISolidElement(m, this.globalData, this);
    }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(m) {
      for (var P = 0, k = this.threeDElements.length; P < k; ) {
        if (this.threeDElements[P].startPos <= m && this.threeDElements[P].endPos >= m)
          return this.threeDElements[P].perspectiveElem;
        P += 1;
      }
      return null;
    }, HybridRendererBase.prototype.createThreeDContainer = function(m, P) {
      var k, L, O = createTag("div");
      styleDiv(O);
      var V = createTag("div");
      if (styleDiv(V), P === "3d") {
        (k = O.style).width = this.globalData.compSize.w + "px", k.height = this.globalData.compSize.h + "px", k.webkitTransformOrigin = "50% 50%", k.mozTransformOrigin = "50% 50%", k.transformOrigin = "50% 50%";
        var he = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        (L = V.style).transform = he, L.webkitTransform = he;
      }
      O.appendChild(V);
      var K = { container: V, perspectiveElem: O, startPos: m, endPos: m, type: P };
      return this.threeDElements.push(K), K;
    }, HybridRendererBase.prototype.build3dContainers = function() {
      var m, P, k = this.layers.length, L = "";
      for (m = 0; m < k; m += 1)
        this.layers[m].ddd && this.layers[m].ty !== 3 ? (L !== "3d" && (L = "3d", P = this.createThreeDContainer(m, "3d")), P.endPos = Math.max(P.endPos, m)) : (L !== "2d" && (L = "2d", P = this.createThreeDContainer(m, "2d")), P.endPos = Math.max(P.endPos, m));
      for (m = (k = this.threeDElements.length) - 1; m >= 0; m -= 1)
        this.resizerElem.appendChild(this.threeDElements[m].perspectiveElem);
    }, HybridRendererBase.prototype.addTo3dContainer = function(m, P) {
      for (var k = 0, L = this.threeDElements.length; k < L; ) {
        if (P <= this.threeDElements[k].endPos) {
          for (var O, V = this.threeDElements[k].startPos; V < P; )
            this.elements[V] && this.elements[V].getBaseElement && (O = this.elements[V].getBaseElement()), V += 1;
          O ? this.threeDElements[k].container.insertBefore(m, O) : this.threeDElements[k].container.appendChild(m);
          break;
        }
        k += 1;
      }
    }, HybridRendererBase.prototype.configAnimation = function(m) {
      var P = createTag("div"), k = this.animationItem.wrapper, L = P.style;
      L.width = m.w + "px", L.height = m.h + "px", this.resizerElem = P, styleDiv(P), L.transformStyle = "flat", L.mozTransformStyle = "flat", L.webkitTransformStyle = "flat", this.renderConfig.className && P.setAttribute("class", this.renderConfig.className), k.appendChild(P), L.overflow = "hidden";
      var O = createNS("svg");
      O.setAttribute("width", "1"), O.setAttribute("height", "1"), styleDiv(O), this.resizerElem.appendChild(O);
      var V = createNS("defs");
      O.appendChild(V), this.data = m, this.setupGlobalData(m, O), this.globalData.defs = V, this.layers = m.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
    }, HybridRendererBase.prototype.destroy = function() {
      var m;
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
      var P = this.layers ? this.layers.length : 0;
      for (m = 0; m < P; m += 1)
        this.elements[m].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, HybridRendererBase.prototype.updateContainerSize = function() {
      var m, P, k, L, O = this.animationItem.wrapper.offsetWidth, V = this.animationItem.wrapper.offsetHeight, he = O / V;
      this.globalData.compSize.w / this.globalData.compSize.h > he ? (m = O / this.globalData.compSize.w, P = O / this.globalData.compSize.w, k = 0, L = (V - this.globalData.compSize.h * (O / this.globalData.compSize.w)) / 2) : (m = V / this.globalData.compSize.h, P = V / this.globalData.compSize.h, k = (O - this.globalData.compSize.w * (V / this.globalData.compSize.h)) / 2, L = 0);
      var K = this.resizerElem.style;
      K.webkitTransform = "matrix3d(" + m + ",0,0,0,0," + P + ",0,0,0,0,1,0," + k + "," + L + ",0,1)", K.transform = K.webkitTransform;
    }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
      this.resizerElem.style.display = "none";
    }, HybridRendererBase.prototype.show = function() {
      this.resizerElem.style.display = "block";
    }, HybridRendererBase.prototype.initItems = function() {
      if (this.buildAllItems(), this.camera)
        this.camera.setup();
      else {
        var m, P = this.globalData.compSize.w, k = this.globalData.compSize.h, L = this.threeDElements.length;
        for (m = 0; m < L; m += 1) {
          var O = this.threeDElements[m].perspectiveElem.style;
          O.webkitPerspective = Math.sqrt(Math.pow(P, 2) + Math.pow(k, 2)) + "px", O.perspective = O.webkitPerspective;
        }
      }
    }, HybridRendererBase.prototype.searchExtraCompositions = function(m) {
      var P, k = m.length, L = createTag("div");
      for (P = 0; P < k; P += 1)
        if (m[P].xt) {
          var O = this.createComp(m[P], L, this.globalData.comp, null);
          O.initExpressions(), this.globalData.projectInterface.registerComposition(O);
        }
    }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
      this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
    }, HCompElement.prototype.addTo3dContainer = function(m, P) {
      for (var k, L = 0; L < P; )
        this.elements[L] && this.elements[L].getBaseElement && (k = this.elements[L].getBaseElement()), L += 1;
      k ? this.layerElement.insertBefore(m, k) : this.layerElement.appendChild(m);
    }, HCompElement.prototype.createComp = function(m) {
      return this.supports3d ? new HCompElement(m, this.globalData, this) : new SVGCompElement(m, this.globalData, this);
    }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(m) {
      return this.supports3d ? new HCompElement(m, this.globalData, this) : new SVGCompElement(m, this.globalData, this);
    };
    var CompExpressionInterface = function(m) {
      function P(k) {
        for (var L = 0, O = m.layers.length; L < O; ) {
          if (m.layers[L].nm === k || m.layers[L].ind === k)
            return m.elements[L].layerInterface;
          L += 1;
        }
        return null;
      }
      return Object.defineProperty(P, "_name", { value: m.data.nm }), P.layer = P, P.pixelAspect = 1, P.height = m.data.h || m.globalData.compSize.h, P.width = m.data.w || m.globalData.compSize.w, P.pixelAspect = 1, P.frameDuration = 1 / m.globalData.frameRate, P.displayStartTime = 0, P.numLayers = m.layers.length, P;
    }, Expressions = function() {
      var m = {};
      return m.initExpressions = function(P) {
        var k = 0, L = [];
        P.renderer.compInterface = CompExpressionInterface(P.renderer), P.renderer.globalData.projectInterface.registerComposition(P.renderer), P.renderer.globalData.pushExpression = function() {
          k += 1;
        }, P.renderer.globalData.popExpression = function() {
          (k -= 1) === 0 && function() {
            var O, V = L.length;
            for (O = 0; O < V; O += 1)
              L[O].release();
            L.length = 0;
          }();
        }, P.renderer.globalData.registerExpressionProperty = function(O) {
          L.indexOf(O) === -1 && L.push(O);
        };
      }, m;
    }(), MaskManagerInterface = function() {
      function m(P, k) {
        this._mask = P, this._data = k;
      }
      return Object.defineProperty(m.prototype, "maskPath", { get: function() {
        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
      } }), Object.defineProperty(m.prototype, "maskOpacity", { get: function() {
        return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
      } }), function(P) {
        var k, L = createSizedArray(P.viewData.length), O = P.viewData.length;
        for (k = 0; k < O; k += 1)
          L[k] = new m(P.viewData[k], P.masksProperties[k]);
        return function(V) {
          for (k = 0; k < O; ) {
            if (P.masksProperties[k].nm === V)
              return L[k];
            k += 1;
          }
          return null;
        };
      };
    }(), ExpressionPropertyInterface = function() {
      var m = { pv: 0, v: 0, mult: 1 }, P = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
      function k(O, V, he) {
        Object.defineProperty(O, "velocity", { get: function() {
          return V.getVelocityAtTime(V.comp.currentFrame);
        } }), O.numKeys = V.keyframes ? V.keyframes.length : 0, O.key = function(K) {
          if (!O.numKeys)
            return 0;
          var de = "";
          de = "s" in V.keyframes[K - 1] ? V.keyframes[K - 1].s : "e" in V.keyframes[K - 2] ? V.keyframes[K - 2].e : V.keyframes[K - 2].s;
          var ce = he === "unidimensional" ? new Number(de) : Object.assign({}, de);
          return ce.time = V.keyframes[K - 1].t / V.elem.comp.globalData.frameRate, ce.value = he === "unidimensional" ? de[0] : de, ce;
        }, O.valueAtTime = V.getValueAtTime, O.speedAtTime = V.getSpeedAtTime, O.velocityAtTime = V.getVelocityAtTime, O.propertyGroup = V.propertyGroup;
      }
      function L() {
        return m;
      }
      return function(O) {
        return O ? O.propType === "unidimensional" ? function(V) {
          V && "pv" in V || (V = m);
          var he = 1 / V.mult, K = V.pv * he, de = new Number(K);
          return de.value = K, k(de, V, "unidimensional"), function() {
            return V.k && V.getValue(), K = V.v * he, de.value !== K && ((de = new Number(K)).value = K, k(de, V, "unidimensional")), de;
          };
        }(O) : function(V) {
          V && "pv" in V || (V = P);
          var he = 1 / V.mult, K = V.data && V.data.l || V.pv.length, de = createTypedArray("float32", K), ce = createTypedArray("float32", K);
          return de.value = ce, k(de, V, "multidimensional"), function() {
            V.k && V.getValue();
            for (var pe = 0; pe < K; pe += 1)
              ce[pe] = V.v[pe] * he, de[pe] = ce[pe];
            return de;
          };
        }(O) : L;
      };
    }(), TransformExpressionInterface = function(m) {
      function P(he) {
        switch (he) {
          case "scale":
          case "Scale":
          case "ADBE Scale":
          case 6:
            return P.scale;
          case "rotation":
          case "Rotation":
          case "ADBE Rotation":
          case "ADBE Rotate Z":
          case 10:
            return P.rotation;
          case "ADBE Rotate X":
            return P.xRotation;
          case "ADBE Rotate Y":
            return P.yRotation;
          case "position":
          case "Position":
          case "ADBE Position":
          case 2:
            return P.position;
          case "ADBE Position_0":
            return P.xPosition;
          case "ADBE Position_1":
            return P.yPosition;
          case "ADBE Position_2":
            return P.zPosition;
          case "anchorPoint":
          case "AnchorPoint":
          case "Anchor Point":
          case "ADBE AnchorPoint":
          case 1:
            return P.anchorPoint;
          case "opacity":
          case "Opacity":
          case 11:
            return P.opacity;
          default:
            return null;
        }
      }
      var k, L, O, V;
      return Object.defineProperty(P, "rotation", { get: ExpressionPropertyInterface(m.r || m.rz) }), Object.defineProperty(P, "zRotation", { get: ExpressionPropertyInterface(m.rz || m.r) }), Object.defineProperty(P, "xRotation", { get: ExpressionPropertyInterface(m.rx) }), Object.defineProperty(P, "yRotation", { get: ExpressionPropertyInterface(m.ry) }), Object.defineProperty(P, "scale", { get: ExpressionPropertyInterface(m.s) }), m.p ? V = ExpressionPropertyInterface(m.p) : (k = ExpressionPropertyInterface(m.px), L = ExpressionPropertyInterface(m.py), m.pz && (O = ExpressionPropertyInterface(m.pz))), Object.defineProperty(P, "position", { get: function() {
        return m.p ? V() : [k(), L(), O ? O() : 0];
      } }), Object.defineProperty(P, "xPosition", { get: ExpressionPropertyInterface(m.px) }), Object.defineProperty(P, "yPosition", { get: ExpressionPropertyInterface(m.py) }), Object.defineProperty(P, "zPosition", { get: ExpressionPropertyInterface(m.pz) }), Object.defineProperty(P, "anchorPoint", { get: ExpressionPropertyInterface(m.a) }), Object.defineProperty(P, "opacity", { get: ExpressionPropertyInterface(m.o) }), Object.defineProperty(P, "skew", { get: ExpressionPropertyInterface(m.sk) }), Object.defineProperty(P, "skewAxis", { get: ExpressionPropertyInterface(m.sa) }), Object.defineProperty(P, "orientation", { get: ExpressionPropertyInterface(m.or) }), P;
    }, LayerExpressionInterface = function() {
      function m(ce) {
        var pe = new Matrix();
        return ce !== void 0 ? this._elem.finalTransform.mProp.getValueAtTime(ce).clone(pe) : this._elem.finalTransform.mProp.applyToMatrix(pe), pe;
      }
      function P(ce, pe) {
        var B = this.getMatrix(pe);
        return B.props[12] = 0, B.props[13] = 0, B.props[14] = 0, this.applyPoint(B, ce);
      }
      function k(ce, pe) {
        var B = this.getMatrix(pe);
        return this.applyPoint(B, ce);
      }
      function L(ce, pe) {
        var B = this.getMatrix(pe);
        return B.props[12] = 0, B.props[13] = 0, B.props[14] = 0, this.invertPoint(B, ce);
      }
      function O(ce, pe) {
        var B = this.getMatrix(pe);
        return this.invertPoint(B, ce);
      }
      function V(ce, pe) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var B, G = this._elem.hierarchy.length;
          for (B = 0; B < G; B += 1)
            this._elem.hierarchy[B].finalTransform.mProp.applyToMatrix(ce);
        }
        return ce.applyToPointArray(pe[0], pe[1], pe[2] || 0);
      }
      function he(ce, pe) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var B, G = this._elem.hierarchy.length;
          for (B = 0; B < G; B += 1)
            this._elem.hierarchy[B].finalTransform.mProp.applyToMatrix(ce);
        }
        return ce.inversePoint(pe);
      }
      function K(ce) {
        var pe = new Matrix();
        if (pe.reset(), this._elem.finalTransform.mProp.applyToMatrix(pe), this._elem.hierarchy && this._elem.hierarchy.length) {
          var B, G = this._elem.hierarchy.length;
          for (B = 0; B < G; B += 1)
            this._elem.hierarchy[B].finalTransform.mProp.applyToMatrix(pe);
          return pe.inversePoint(ce);
        }
        return pe.inversePoint(ce);
      }
      function de() {
        return [1, 1, 1, 1];
      }
      return function(ce) {
        var pe;
        function B($) {
          switch ($) {
            case "ADBE Root Vectors Group":
            case "Contents":
            case 2:
              return B.shapeInterface;
            case 1:
            case 6:
            case "Transform":
            case "transform":
            case "ADBE Transform Group":
              return pe;
            case 4:
            case "ADBE Effect Parade":
            case "effects":
            case "Effects":
              return B.effect;
            case "ADBE Text Properties":
              return B.textInterface;
            default:
              return null;
          }
        }
        B.getMatrix = m, B.invertPoint = he, B.applyPoint = V, B.toWorld = k, B.toWorldVec = P, B.fromWorld = O, B.fromWorldVec = L, B.toComp = k, B.fromComp = K, B.sampleImage = de, B.sourceRectAtTime = ce.sourceRectAtTime.bind(ce), B._elem = ce;
        var G = getDescriptor(pe = TransformExpressionInterface(ce.finalTransform.mProp), "anchorPoint");
        return Object.defineProperties(B, { hasParent: { get: function() {
          return ce.hierarchy.length;
        } }, parent: { get: function() {
          return ce.hierarchy[0].layerInterface;
        } }, rotation: getDescriptor(pe, "rotation"), scale: getDescriptor(pe, "scale"), position: getDescriptor(pe, "position"), opacity: getDescriptor(pe, "opacity"), anchorPoint: G, anchor_point: G, transform: { get: function() {
          return pe;
        } }, active: { get: function() {
          return ce.isInRange;
        } } }), B.startTime = ce.data.st, B.index = ce.data.ind, B.source = ce.data.refId, B.height = ce.data.ty === 0 ? ce.data.h : 100, B.width = ce.data.ty === 0 ? ce.data.w : 100, B.inPoint = ce.data.ip / ce.comp.globalData.frameRate, B.outPoint = ce.data.op / ce.comp.globalData.frameRate, B._name = ce.data.nm, B.registerMaskInterface = function($) {
          B.mask = new MaskManagerInterface($, ce);
        }, B.registerEffectsInterface = function($) {
          B.effect = $;
        }, B;
      };
    }(), propertyGroupFactory = function(m, P) {
      return function(k) {
        return (k = k === void 0 ? 1 : k) <= 0 ? m : P(k - 1);
      };
    }, PropertyInterface = function(m, P) {
      var k = { _name: m };
      return function(L) {
        return (L = L === void 0 ? 1 : L) <= 0 ? k : P(L - 1);
      };
    }, EffectsExpressionInterface = function() {
      function m(k, L, O, V) {
        function he(B) {
          for (var G = k.ef, $ = 0, ie = G.length; $ < ie; ) {
            if (B === G[$].nm || B === G[$].mn || B === G[$].ix)
              return G[$].ty === 5 ? ce[$] : ce[$]();
            $ += 1;
          }
          throw new Error();
        }
        var K, de = propertyGroupFactory(he, O), ce = [], pe = k.ef.length;
        for (K = 0; K < pe; K += 1)
          k.ef[K].ty === 5 ? ce.push(m(k.ef[K], L.effectElements[K], L.effectElements[K].propertyGroup, V)) : ce.push(P(L.effectElements[K], k.ef[K].ty, V, de));
        return k.mn === "ADBE Color Control" && Object.defineProperty(he, "color", { get: function() {
          return ce[0]();
        } }), Object.defineProperties(he, { numProperties: { get: function() {
          return k.np;
        } }, _name: { value: k.nm }, propertyGroup: { value: de } }), he.enabled = k.en !== 0, he.active = he.enabled, he;
      }
      function P(k, L, O, V) {
        var he = ExpressionPropertyInterface(k.p);
        return k.p.setGroupProperty && k.p.setGroupProperty(PropertyInterface("", V)), function() {
          return L === 10 ? O.comp.compInterface(k.p.v) : he();
        };
      }
      return { createEffectsInterface: function(k, L) {
        if (k.effectsManager) {
          var O, V = [], he = k.data.ef, K = k.effectsManager.effectElements.length;
          for (O = 0; O < K; O += 1)
            V.push(m(he[O], k.effectsManager.effectElements[O], L, k));
          var de = k.data.ef || [], ce = function(pe) {
            for (O = 0, K = de.length; O < K; ) {
              if (pe === de[O].nm || pe === de[O].mn || pe === de[O].ix)
                return V[O];
              O += 1;
            }
            return null;
          };
          return Object.defineProperty(ce, "numProperties", { get: function() {
            return de.length;
          } }), ce;
        }
        return null;
      } };
    }(), ShapePathInterface = function(m, P, k) {
      var L = P.sh;
      function O(he) {
        return he === "Shape" || he === "shape" || he === "Path" || he === "path" || he === "ADBE Vector Shape" || he === 2 ? O.path : null;
      }
      var V = propertyGroupFactory(O, k);
      return L.setGroupProperty(PropertyInterface("Path", V)), Object.defineProperties(O, { path: { get: function() {
        return L.k && L.getValue(), L;
      } }, shape: { get: function() {
        return L.k && L.getValue(), L;
      } }, _name: { value: m.nm }, ix: { value: m.ix }, propertyIndex: { value: m.ix }, mn: { value: m.mn }, propertyGroup: { value: k } }), O;
    }, ShapeExpressionInterface = function() {
      function m($, ie, fe) {
        var Q, ue = [], me = $ ? $.length : 0;
        for (Q = 0; Q < me; Q += 1)
          $[Q].ty === "gr" ? ue.push(P($[Q], ie[Q], fe)) : $[Q].ty === "fl" ? ue.push(k($[Q], ie[Q], fe)) : $[Q].ty === "st" ? ue.push(V($[Q], ie[Q], fe)) : $[Q].ty === "tm" ? ue.push(he($[Q], ie[Q], fe)) : $[Q].ty === "tr" || ($[Q].ty === "el" ? ue.push(de($[Q], ie[Q], fe)) : $[Q].ty === "sr" ? ue.push(ce($[Q], ie[Q], fe)) : $[Q].ty === "sh" ? ue.push(ShapePathInterface($[Q], ie[Q], fe)) : $[Q].ty === "rc" ? ue.push(pe($[Q], ie[Q], fe)) : $[Q].ty === "rd" ? ue.push(B($[Q], ie[Q], fe)) : $[Q].ty === "rp" ? ue.push(G($[Q], ie[Q], fe)) : $[Q].ty === "gf" ? ue.push(L($[Q], ie[Q], fe)) : ue.push(O($[Q], ie[Q])));
        return ue;
      }
      function P($, ie, fe) {
        var Q = function(ge) {
          switch (ge) {
            case "ADBE Vectors Group":
            case "Contents":
            case 2:
              return Q.content;
            default:
              return Q.transform;
          }
        };
        Q.propertyGroup = propertyGroupFactory(Q, fe);
        var ue = function(ge, ve, _e) {
          var Te, Ce = function(Ie) {
            for (var Me = 0, ke = Te.length; Me < ke; ) {
              if (Te[Me]._name === Ie || Te[Me].mn === Ie || Te[Me].propertyIndex === Ie || Te[Me].ix === Ie || Te[Me].ind === Ie)
                return Te[Me];
              Me += 1;
            }
            return typeof Ie == "number" ? Te[Ie - 1] : null;
          };
          Ce.propertyGroup = propertyGroupFactory(Ce, _e), Te = m(ge.it, ve.it, Ce.propertyGroup), Ce.numProperties = Te.length;
          var Ae = K(ge.it[ge.it.length - 1], ve.it[ve.it.length - 1], Ce.propertyGroup);
          return Ce.transform = Ae, Ce.propertyIndex = ge.cix, Ce._name = ge.nm, Ce;
        }($, ie, Q.propertyGroup), me = K($.it[$.it.length - 1], ie.it[ie.it.length - 1], Q.propertyGroup);
        return Q.content = ue, Q.transform = me, Object.defineProperty(Q, "_name", { get: function() {
          return $.nm;
        } }), Q.numProperties = $.np, Q.propertyIndex = $.ix, Q.nm = $.nm, Q.mn = $.mn, Q;
      }
      function k($, ie, fe) {
        function Q(ue) {
          return ue === "Color" || ue === "color" ? Q.color : ue === "Opacity" || ue === "opacity" ? Q.opacity : null;
        }
        return Object.defineProperties(Q, { color: { get: ExpressionPropertyInterface(ie.c) }, opacity: { get: ExpressionPropertyInterface(ie.o) }, _name: { value: $.nm }, mn: { value: $.mn } }), ie.c.setGroupProperty(PropertyInterface("Color", fe)), ie.o.setGroupProperty(PropertyInterface("Opacity", fe)), Q;
      }
      function L($, ie, fe) {
        function Q(ue) {
          return ue === "Start Point" || ue === "start point" ? Q.startPoint : ue === "End Point" || ue === "end point" ? Q.endPoint : ue === "Opacity" || ue === "opacity" ? Q.opacity : null;
        }
        return Object.defineProperties(Q, { startPoint: { get: ExpressionPropertyInterface(ie.s) }, endPoint: { get: ExpressionPropertyInterface(ie.e) }, opacity: { get: ExpressionPropertyInterface(ie.o) }, type: { get: function() {
          return "a";
        } }, _name: { value: $.nm }, mn: { value: $.mn } }), ie.s.setGroupProperty(PropertyInterface("Start Point", fe)), ie.e.setGroupProperty(PropertyInterface("End Point", fe)), ie.o.setGroupProperty(PropertyInterface("Opacity", fe)), Q;
      }
      function O() {
        return function() {
          return null;
        };
      }
      function V($, ie, fe) {
        var Q, ue = propertyGroupFactory(Te, fe), me = propertyGroupFactory(_e, ue);
        function ge(Ce) {
          Object.defineProperty(_e, $.d[Ce].nm, { get: ExpressionPropertyInterface(ie.d.dataProps[Ce].p) });
        }
        var ve = $.d ? $.d.length : 0, _e = {};
        for (Q = 0; Q < ve; Q += 1)
          ge(Q), ie.d.dataProps[Q].p.setGroupProperty(me);
        function Te(Ce) {
          return Ce === "Color" || Ce === "color" ? Te.color : Ce === "Opacity" || Ce === "opacity" ? Te.opacity : Ce === "Stroke Width" || Ce === "stroke width" ? Te.strokeWidth : null;
        }
        return Object.defineProperties(Te, { color: { get: ExpressionPropertyInterface(ie.c) }, opacity: { get: ExpressionPropertyInterface(ie.o) }, strokeWidth: { get: ExpressionPropertyInterface(ie.w) }, dash: { get: function() {
          return _e;
        } }, _name: { value: $.nm }, mn: { value: $.mn } }), ie.c.setGroupProperty(PropertyInterface("Color", ue)), ie.o.setGroupProperty(PropertyInterface("Opacity", ue)), ie.w.setGroupProperty(PropertyInterface("Stroke Width", ue)), Te;
      }
      function he($, ie, fe) {
        function Q(me) {
          return me === $.e.ix || me === "End" || me === "end" ? Q.end : me === $.s.ix ? Q.start : me === $.o.ix ? Q.offset : null;
        }
        var ue = propertyGroupFactory(Q, fe);
        return Q.propertyIndex = $.ix, ie.s.setGroupProperty(PropertyInterface("Start", ue)), ie.e.setGroupProperty(PropertyInterface("End", ue)), ie.o.setGroupProperty(PropertyInterface("Offset", ue)), Q.propertyIndex = $.ix, Q.propertyGroup = fe, Object.defineProperties(Q, { start: { get: ExpressionPropertyInterface(ie.s) }, end: { get: ExpressionPropertyInterface(ie.e) }, offset: { get: ExpressionPropertyInterface(ie.o) }, _name: { value: $.nm } }), Q.mn = $.mn, Q;
      }
      function K($, ie, fe) {
        function Q(me) {
          return $.a.ix === me || me === "Anchor Point" ? Q.anchorPoint : $.o.ix === me || me === "Opacity" ? Q.opacity : $.p.ix === me || me === "Position" ? Q.position : $.r.ix === me || me === "Rotation" || me === "ADBE Vector Rotation" ? Q.rotation : $.s.ix === me || me === "Scale" ? Q.scale : $.sk && $.sk.ix === me || me === "Skew" ? Q.skew : $.sa && $.sa.ix === me || me === "Skew Axis" ? Q.skewAxis : null;
        }
        var ue = propertyGroupFactory(Q, fe);
        return ie.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", ue)), ie.transform.mProps.p.setGroupProperty(PropertyInterface("Position", ue)), ie.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", ue)), ie.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", ue)), ie.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", ue)), ie.transform.mProps.sk && (ie.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", ue)), ie.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", ue))), ie.transform.op.setGroupProperty(PropertyInterface("Opacity", ue)), Object.defineProperties(Q, { opacity: { get: ExpressionPropertyInterface(ie.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(ie.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(ie.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(ie.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(ie.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(ie.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(ie.transform.mProps.sa) }, _name: { value: $.nm } }), Q.ty = "tr", Q.mn = $.mn, Q.propertyGroup = fe, Q;
      }
      function de($, ie, fe) {
        function Q(ge) {
          return $.p.ix === ge ? Q.position : $.s.ix === ge ? Q.size : null;
        }
        var ue = propertyGroupFactory(Q, fe);
        Q.propertyIndex = $.ix;
        var me = ie.sh.ty === "tm" ? ie.sh.prop : ie.sh;
        return me.s.setGroupProperty(PropertyInterface("Size", ue)), me.p.setGroupProperty(PropertyInterface("Position", ue)), Object.defineProperties(Q, { size: { get: ExpressionPropertyInterface(me.s) }, position: { get: ExpressionPropertyInterface(me.p) }, _name: { value: $.nm } }), Q.mn = $.mn, Q;
      }
      function ce($, ie, fe) {
        function Q(ge) {
          return $.p.ix === ge ? Q.position : $.r.ix === ge ? Q.rotation : $.pt.ix === ge ? Q.points : $.or.ix === ge || ge === "ADBE Vector Star Outer Radius" ? Q.outerRadius : $.os.ix === ge ? Q.outerRoundness : !$.ir || $.ir.ix !== ge && ge !== "ADBE Vector Star Inner Radius" ? $.is && $.is.ix === ge ? Q.innerRoundness : null : Q.innerRadius;
        }
        var ue = propertyGroupFactory(Q, fe), me = ie.sh.ty === "tm" ? ie.sh.prop : ie.sh;
        return Q.propertyIndex = $.ix, me.or.setGroupProperty(PropertyInterface("Outer Radius", ue)), me.os.setGroupProperty(PropertyInterface("Outer Roundness", ue)), me.pt.setGroupProperty(PropertyInterface("Points", ue)), me.p.setGroupProperty(PropertyInterface("Position", ue)), me.r.setGroupProperty(PropertyInterface("Rotation", ue)), $.ir && (me.ir.setGroupProperty(PropertyInterface("Inner Radius", ue)), me.is.setGroupProperty(PropertyInterface("Inner Roundness", ue))), Object.defineProperties(Q, { position: { get: ExpressionPropertyInterface(me.p) }, rotation: { get: ExpressionPropertyInterface(me.r) }, points: { get: ExpressionPropertyInterface(me.pt) }, outerRadius: { get: ExpressionPropertyInterface(me.or) }, outerRoundness: { get: ExpressionPropertyInterface(me.os) }, innerRadius: { get: ExpressionPropertyInterface(me.ir) }, innerRoundness: { get: ExpressionPropertyInterface(me.is) }, _name: { value: $.nm } }), Q.mn = $.mn, Q;
      }
      function pe($, ie, fe) {
        function Q(ge) {
          return $.p.ix === ge ? Q.position : $.r.ix === ge ? Q.roundness : $.s.ix === ge || ge === "Size" || ge === "ADBE Vector Rect Size" ? Q.size : null;
        }
        var ue = propertyGroupFactory(Q, fe), me = ie.sh.ty === "tm" ? ie.sh.prop : ie.sh;
        return Q.propertyIndex = $.ix, me.p.setGroupProperty(PropertyInterface("Position", ue)), me.s.setGroupProperty(PropertyInterface("Size", ue)), me.r.setGroupProperty(PropertyInterface("Rotation", ue)), Object.defineProperties(Q, { position: { get: ExpressionPropertyInterface(me.p) }, roundness: { get: ExpressionPropertyInterface(me.r) }, size: { get: ExpressionPropertyInterface(me.s) }, _name: { value: $.nm } }), Q.mn = $.mn, Q;
      }
      function B($, ie, fe) {
        function Q(ge) {
          return $.r.ix === ge || ge === "Round Corners 1" ? Q.radius : null;
        }
        var ue = propertyGroupFactory(Q, fe), me = ie;
        return Q.propertyIndex = $.ix, me.rd.setGroupProperty(PropertyInterface("Radius", ue)), Object.defineProperties(Q, { radius: { get: ExpressionPropertyInterface(me.rd) }, _name: { value: $.nm } }), Q.mn = $.mn, Q;
      }
      function G($, ie, fe) {
        function Q(ge) {
          return $.c.ix === ge || ge === "Copies" ? Q.copies : $.o.ix === ge || ge === "Offset" ? Q.offset : null;
        }
        var ue = propertyGroupFactory(Q, fe), me = ie;
        return Q.propertyIndex = $.ix, me.c.setGroupProperty(PropertyInterface("Copies", ue)), me.o.setGroupProperty(PropertyInterface("Offset", ue)), Object.defineProperties(Q, { copies: { get: ExpressionPropertyInterface(me.c) }, offset: { get: ExpressionPropertyInterface(me.o) }, _name: { value: $.nm } }), Q.mn = $.mn, Q;
      }
      return function($, ie, fe) {
        var Q;
        function ue(me) {
          if (typeof me == "number")
            return (me = me === void 0 ? 1 : me) === 0 ? fe : Q[me - 1];
          for (var ge = 0, ve = Q.length; ge < ve; ) {
            if (Q[ge]._name === me)
              return Q[ge];
            ge += 1;
          }
          return null;
        }
        return ue.propertyGroup = propertyGroupFactory(ue, function() {
          return fe;
        }), Q = m($, ie, ue.propertyGroup), ue.numProperties = Q.length, ue._name = "Contents", ue;
      };
    }(), TextExpressionInterface = function(m) {
      var P, k;
      function L(O) {
        switch (O) {
          case "ADBE Text Document":
            return L.sourceText;
          default:
            return null;
        }
      }
      return Object.defineProperty(L, "sourceText", { get: function() {
        m.textProperty.getValue();
        var O = m.textProperty.currentData.t;
        return O !== P && (P = m.textProperty.currentData.t, (k = new String(O)).value = O || new String(O), Object.defineProperty(k, "style", { get: function() {
          return { fillColor: m.textProperty.currentData.fc };
        } })), k;
      } }), L;
    };
    function _typeof$2(m) {
      return (_typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(P) {
        return typeof P;
      } : function(P) {
        return P && typeof Symbol == "function" && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
      })(m);
    }
    var FootageInterface = (dataInterfaceFactory = function(m) {
      function P(k) {
        return k === "Outline" ? P.outlineInterface() : null;
      }
      return P._name = "Outline", P.outlineInterface = function(k) {
        var L = "", O = k.getFootageData();
        function V(he) {
          if (O[he])
            return L = he, _typeof$2(O = O[he]) === "object" ? V : O;
          var K = he.indexOf(L);
          if (K !== -1) {
            var de = parseInt(he.substr(K + L.length), 10);
            return _typeof$2(O = O[de]) === "object" ? V : O;
          }
          return "";
        }
        return function() {
          return L = "", O = k.getFootageData(), V;
        };
      }(m), P;
    }, function(m) {
      function P(k) {
        return k === "Data" ? P.dataInterface : null;
      }
      return P._name = "Data", P.dataInterface = dataInterfaceFactory(m), P;
    }), dataInterfaceFactory, interfaces = { layer: LayerExpressionInterface, effects: EffectsExpressionInterface, comp: CompExpressionInterface, shape: ShapeExpressionInterface, text: TextExpressionInterface, footage: FootageInterface };
    function getInterface(m) {
      return interfaces[m] || null;
    }
    function _typeof$1(m) {
      return (_typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(P) {
        return typeof P;
      } : function(P) {
        return P && typeof Symbol == "function" && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
      })(m);
    }
    function seedRandom(m, P) {
      var k = this, L = P.pow(256, 6), O = P.pow(2, 52), V = 2 * O;
      function he(pe) {
        var B, G = pe.length, $ = this, ie = 0, fe = $.i = $.j = 0, Q = $.S = [];
        for (G || (pe = [G++]); ie < 256; )
          Q[ie] = ie++;
        for (ie = 0; ie < 256; ie++)
          Q[ie] = Q[fe = 255 & fe + pe[ie % G] + (B = Q[ie])], Q[fe] = B;
        $.g = function(ue) {
          for (var me, ge = 0, ve = $.i, _e = $.j, Te = $.S; ue--; )
            me = Te[ve = 255 & ve + 1], ge = 256 * ge + Te[255 & (Te[ve] = Te[_e = 255 & _e + me]) + (Te[_e] = me)];
          return $.i = ve, $.j = _e, ge;
        };
      }
      function K(pe, B) {
        return B.i = pe.i, B.j = pe.j, B.S = pe.S.slice(), B;
      }
      function de(pe, B) {
        for (var G, $ = pe + "", ie = 0; ie < $.length; )
          B[255 & ie] = 255 & (G ^= 19 * B[255 & ie]) + $.charCodeAt(ie++);
        return ce(B);
      }
      function ce(pe) {
        return String.fromCharCode.apply(0, pe);
      }
      P.seedrandom = function(pe, B, G) {
        var $ = [], ie = de(function ue(me, ge) {
          var ve, _e = [], Te = _typeof$1(me);
          if (ge && Te == "object")
            for (ve in me)
              try {
                _e.push(ue(me[ve], ge - 1));
              } catch {
              }
          return _e.length ? _e : Te == "string" ? me : me + "\0";
        }((B = B === !0 ? { entropy: !0 } : B || {}).entropy ? [pe, ce(m)] : pe === null ? function() {
          try {
            var ue = new Uint8Array(256);
            return (k.crypto || k.msCrypto).getRandomValues(ue), ce(ue);
          } catch {
            var me = k.navigator, ge = me && me.plugins;
            return [+/* @__PURE__ */ new Date(), k, ge, k.screen, ce(m)];
          }
        }() : pe, 3), $), fe = new he($), Q = function() {
          for (var ue = fe.g(6), me = L, ge = 0; ue < O; )
            ue = 256 * (ue + ge), me *= 256, ge = fe.g(1);
          for (; ue >= V; )
            ue /= 2, me /= 2, ge >>>= 1;
          return (ue + ge) / me;
        };
        return Q.int32 = function() {
          return 0 | fe.g(4);
        }, Q.quick = function() {
          return fe.g(4) / 4294967296;
        }, Q.double = Q, de(ce(fe.S), m), (B.pass || G || function(ue, me, ge, ve) {
          return ve && (ve.S && K(ve, fe), ue.state = function() {
            return K(fe, {});
          }), ge ? (P.random = ue, me) : ue;
        })(Q, ie, "global" in B ? B.global : this == P, B.state);
      }, de(P.random(), m);
    }
    function initialize$2(m) {
      seedRandom([], m);
    }
    var propTypes = { SHAPE: "shape" };
    function _typeof(m) {
      return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(P) {
        return typeof P;
      } : function(P) {
        return P && typeof Symbol == "function" && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
      })(m);
    }
    var ExpressionManager = function() {
      var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null, frames = null;
      function $bm_isInstanceOfArray(m) {
        return m.constructor === Array || m.constructor === Float32Array;
      }
      function isNumerable(m, P) {
        return m === "number" || m === "boolean" || m === "string" || P instanceof Number;
      }
      function $bm_neg(m) {
        var P = _typeof(m);
        if (P === "number" || P === "boolean" || m instanceof Number)
          return -m;
        if ($bm_isInstanceOfArray(m)) {
          var k, L = m.length, O = [];
          for (k = 0; k < L; k += 1)
            O[k] = -m[k];
          return O;
        }
        return m.propType ? m.v : -m;
      }
      initialize$2(BMMath);
      var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
      function sum(m, P) {
        var k = _typeof(m), L = _typeof(P);
        if (k === "string" || L === "string" || isNumerable(k, m) && isNumerable(L, P))
          return m + P;
        if ($bm_isInstanceOfArray(m) && isNumerable(L, P))
          return (m = m.slice(0))[0] += P, m;
        if (isNumerable(k, m) && $bm_isInstanceOfArray(P))
          return (P = P.slice(0))[0] = m + P[0], P;
        if ($bm_isInstanceOfArray(m) && $bm_isInstanceOfArray(P)) {
          for (var O = 0, V = m.length, he = P.length, K = []; O < V || O < he; )
            (typeof m[O] == "number" || m[O] instanceof Number) && (typeof P[O] == "number" || P[O] instanceof Number) ? K[O] = m[O] + P[O] : K[O] = P[O] === void 0 ? m[O] : m[O] || P[O], O += 1;
          return K;
        }
        return 0;
      }
      var add = sum;
      function sub(m, P) {
        var k = _typeof(m), L = _typeof(P);
        if (isNumerable(k, m) && isNumerable(L, P))
          return k === "string" && (m = parseInt(m, 10)), L === "string" && (P = parseInt(P, 10)), m - P;
        if ($bm_isInstanceOfArray(m) && isNumerable(L, P))
          return (m = m.slice(0))[0] -= P, m;
        if (isNumerable(k, m) && $bm_isInstanceOfArray(P))
          return (P = P.slice(0))[0] = m - P[0], P;
        if ($bm_isInstanceOfArray(m) && $bm_isInstanceOfArray(P)) {
          for (var O = 0, V = m.length, he = P.length, K = []; O < V || O < he; )
            (typeof m[O] == "number" || m[O] instanceof Number) && (typeof P[O] == "number" || P[O] instanceof Number) ? K[O] = m[O] - P[O] : K[O] = P[O] === void 0 ? m[O] : m[O] || P[O], O += 1;
          return K;
        }
        return 0;
      }
      function mul(m, P) {
        var k, L, O, V = _typeof(m), he = _typeof(P);
        if (isNumerable(V, m) && isNumerable(he, P))
          return m * P;
        if ($bm_isInstanceOfArray(m) && isNumerable(he, P)) {
          for (O = m.length, k = createTypedArray("float32", O), L = 0; L < O; L += 1)
            k[L] = m[L] * P;
          return k;
        }
        if (isNumerable(V, m) && $bm_isInstanceOfArray(P)) {
          for (O = P.length, k = createTypedArray("float32", O), L = 0; L < O; L += 1)
            k[L] = m * P[L];
          return k;
        }
        return 0;
      }
      function div(m, P) {
        var k, L, O, V = _typeof(m), he = _typeof(P);
        if (isNumerable(V, m) && isNumerable(he, P))
          return m / P;
        if ($bm_isInstanceOfArray(m) && isNumerable(he, P)) {
          for (O = m.length, k = createTypedArray("float32", O), L = 0; L < O; L += 1)
            k[L] = m[L] / P;
          return k;
        }
        if (isNumerable(V, m) && $bm_isInstanceOfArray(P)) {
          for (O = P.length, k = createTypedArray("float32", O), L = 0; L < O; L += 1)
            k[L] = m / P[L];
          return k;
        }
        return 0;
      }
      function mod(m, P) {
        return typeof m == "string" && (m = parseInt(m, 10)), typeof P == "string" && (P = parseInt(P, 10)), m % P;
      }
      var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
      function clamp(m, P, k) {
        if (P > k) {
          var L = k;
          k = P, P = L;
        }
        return Math.min(Math.max(m, P), k);
      }
      function radiansToDegrees(m) {
        return m / degToRads;
      }
      var radians_to_degrees = radiansToDegrees;
      function degreesToRadians(m) {
        return m * degToRads;
      }
      var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];
      function length(m, P) {
        if (typeof m == "number" || m instanceof Number)
          return P = P || 0, Math.abs(m - P);
        var k;
        P || (P = helperLengthArray);
        var L = Math.min(m.length, P.length), O = 0;
        for (k = 0; k < L; k += 1)
          O += Math.pow(P[k] - m[k], 2);
        return Math.sqrt(O);
      }
      function normalize(m) {
        return div(m, length(m));
      }
      function rgbToHsl(m) {
        var P, k, L = m[0], O = m[1], V = m[2], he = Math.max(L, O, V), K = Math.min(L, O, V), de = (he + K) / 2;
        if (he === K)
          P = 0, k = 0;
        else {
          var ce = he - K;
          switch (k = de > 0.5 ? ce / (2 - he - K) : ce / (he + K), he) {
            case L:
              P = (O - V) / ce + (O < V ? 6 : 0);
              break;
            case O:
              P = (V - L) / ce + 2;
              break;
            case V:
              P = (L - O) / ce + 4;
          }
          P /= 6;
        }
        return [P, k, de, m[3]];
      }
      function hue2rgb(m, P, k) {
        return k < 0 && (k += 1), k > 1 && (k -= 1), k < 1 / 6 ? m + 6 * (P - m) * k : k < 0.5 ? P : k < 2 / 3 ? m + (P - m) * (2 / 3 - k) * 6 : m;
      }
      function hslToRgb(m) {
        var P, k, L, O = m[0], V = m[1], he = m[2];
        if (V === 0)
          P = he, L = he, k = he;
        else {
          var K = he < 0.5 ? he * (1 + V) : he + V - he * V, de = 2 * he - K;
          P = hue2rgb(de, K, O + 1 / 3), k = hue2rgb(de, K, O), L = hue2rgb(de, K, O - 1 / 3);
        }
        return [P, k, L, m[3]];
      }
      function linear(m, P, k, L, O) {
        if (L !== void 0 && O !== void 0 || (L = P, O = k, P = 0, k = 1), k < P) {
          var V = k;
          k = P, P = V;
        }
        if (m <= P)
          return L;
        if (m >= k)
          return O;
        var he, K = k === P ? 0 : (m - P) / (k - P);
        if (!L.length)
          return L + (O - L) * K;
        var de = L.length, ce = createTypedArray("float32", de);
        for (he = 0; he < de; he += 1)
          ce[he] = L[he] + (O[he] - L[he]) * K;
        return ce;
      }
      function random(m, P) {
        if (P === void 0 && (m === void 0 ? (m = 0, P = 1) : (P = m, m = void 0)), P.length) {
          var k, L = P.length;
          m || (m = createTypedArray("float32", L));
          var O = createTypedArray("float32", L), V = BMMath.random();
          for (k = 0; k < L; k += 1)
            O[k] = m[k] + V * (P[k] - m[k]);
          return O;
        }
        return m === void 0 && (m = 0), m + BMMath.random() * (P - m);
      }
      function createPath(m, P, k, L) {
        var O, V = m.length, he = shapePool.newElement();
        he.setPathData(!!L, V);
        var K, de, ce = [0, 0];
        for (O = 0; O < V; O += 1)
          K = P && P[O] ? P[O] : ce, de = k && k[O] ? k[O] : ce, he.setTripleAt(m[O][0], m[O][1], de[0] + m[O][0], de[1] + m[O][1], K[0] + m[O][0], K[1] + m[O][1], O, !0);
        return he;
      }
      function initiateExpression(elem, data, property) {
        function noOp(m) {
          return m;
        }
        if (!elem.globalData.renderConfig.runExpressions)
          return noOp;
        var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = val.indexOf("random") !== -1, elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", { get: function() {
          return thisProperty.v;
        } }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
        var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== !0, wiggle = (function(m, P) {
          var k, L, O = this.pv.length ? this.pv.length : 1, V = createTypedArray("float32", O), he = Math.floor(5 * time);
          for (k = 0, L = 0; k < he; ) {
            for (L = 0; L < O; L += 1)
              V[L] += -P + 2 * P * BMMath.random();
            k += 1;
          }
          var K = 5 * time, de = K - Math.floor(K), ce = createTypedArray("float32", O);
          if (O > 1) {
            for (L = 0; L < O; L += 1)
              ce[L] = this.pv[L] + V[L] + (-P + 2 * P * BMMath.random()) * de;
            return ce;
          }
          return this.pv + V[0] + (-P + 2 * P * BMMath.random()) * de;
        }).bind(this);
        function loopInDuration(m, P) {
          return loopIn(m, P, !0);
        }
        function loopOutDuration(m, P) {
          return loopOut(m, P, !0);
        }
        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue;
        function lookAt(m, P) {
          var k = [P[0] - m[0], P[1] - m[1], P[2] - m[2]], L = Math.atan2(k[0], Math.sqrt(k[1] * k[1] + k[2] * k[2])) / degToRads;
          return [-Math.atan2(k[1], k[2]) / degToRads, L, 0];
        }
        function easeOut(m, P, k, L, O) {
          return applyEase(easeOutBez, m, P, k, L, O);
        }
        function easeIn(m, P, k, L, O) {
          return applyEase(easeInBez, m, P, k, L, O);
        }
        function ease(m, P, k, L, O) {
          return applyEase(easeInOutBez, m, P, k, L, O);
        }
        function applyEase(m, P, k, L, O, V) {
          O === void 0 ? (O = k, V = L) : P = (P - k) / (L - k), P > 1 ? P = 1 : P < 0 && (P = 0);
          var he = m(P);
          if ($bm_isInstanceOfArray(O)) {
            var K, de = O.length, ce = createTypedArray("float32", de);
            for (K = 0; K < de; K += 1)
              ce[K] = (V[K] - O[K]) * he + O[K];
            return ce;
          }
          return (V - O) * he + O;
        }
        function nearestKey(m) {
          var P, k, L, O = data.k.length;
          if (data.k.length && typeof data.k[0] != "number")
            if (k = -1, (m *= elem.comp.globalData.frameRate) < data.k[0].t)
              k = 1, L = data.k[0].t;
            else {
              for (P = 0; P < O - 1; P += 1) {
                if (m === data.k[P].t) {
                  k = P + 1, L = data.k[P].t;
                  break;
                }
                if (m > data.k[P].t && m < data.k[P + 1].t) {
                  m - data.k[P].t > data.k[P + 1].t - m ? (k = P + 2, L = data.k[P + 1].t) : (k = P + 1, L = data.k[P].t);
                  break;
                }
              }
              k === -1 && (k = P + 1, L = data.k[P].t);
            }
          else
            k = 0, L = 0;
          var V = {};
          return V.index = k, V.time = L / elem.comp.globalData.frameRate, V;
        }
        function key(m) {
          var P, k, L;
          if (!data.k.length || typeof data.k[0] == "number")
            throw new Error("The property has no keyframe at index " + m);
          m -= 1, P = { time: data.k[m].t / elem.comp.globalData.frameRate, value: [] };
          var O = Object.prototype.hasOwnProperty.call(data.k[m], "s") ? data.k[m].s : data.k[m - 1].e;
          for (L = O.length, k = 0; k < L; k += 1)
            P[k] = O[k], P.value[k] = O[k];
          return P;
        }
        function framesToTime(m, P) {
          return P || (P = elem.comp.globalData.frameRate), m / P;
        }
        function timeToFrames(m, P) {
          return m || m === 0 || (m = time), P || (P = elem.comp.globalData.frameRate), m * P;
        }
        function seedRandom(m) {
          BMMath.seedrandom(randSeed + m);
        }
        function sourceRectAtTime() {
          return elem.sourceRectAtTime();
        }
        function substring(m, P) {
          return typeof value == "string" ? P === void 0 ? value.substring(m) : value.substring(m, P) : "";
        }
        function substr(m, P) {
          return typeof value == "string" ? P === void 0 ? value.substr(m) : value.substr(m, P) : "";
        }
        function posterizeTime(m) {
          time = m === 0 ? 0 : Math.floor(time * m) / m, value = valueAtTime(time);
        }
        var index = elem.data.ind;
        !elem.hierarchy || elem.hierarchy.length;
        var parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
        function executeExpression(m) {
          return value = m, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType !== 4 || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), !(!elem.hierarchy || !elem.hierarchy.length) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt);
        }
        return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression;
      }
      return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath], ob;
    }(), expressionHelpers = { searchExpressions: function(m, P, k) {
      P.x && (k.k = !0, k.x = !0, k.initiateExpression = ExpressionManager.initiateExpression, k.effectsSequence.push(k.initiateExpression(m, P, k).bind(k)));
    }, getSpeedAtTime: function(m) {
      var P = this.getValueAtTime(m), k = this.getValueAtTime(m + -0.01), L = 0;
      if (P.length) {
        var O;
        for (O = 0; O < P.length; O += 1)
          L += Math.pow(k[O] - P[O], 2);
        L = 100 * Math.sqrt(L);
      } else
        L = 0;
      return L;
    }, getVelocityAtTime: function(m) {
      if (this.vel !== void 0)
        return this.vel;
      var P, k, L = this.getValueAtTime(m), O = this.getValueAtTime(m + -1e-3);
      if (L.length)
        for (P = createTypedArray("float32", L.length), k = 0; k < L.length; k += 1)
          P[k] = (O[k] - L[k]) / -1e-3;
      else
        P = (O - L) / -1e-3;
      return P;
    }, getValueAtTime: function(m) {
      return m *= this.elem.globalData.frameRate, (m -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < m ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(m, this._cachingAtTime), this._cachingAtTime.lastFrame = m), this._cachingAtTime.value;
    }, getStaticValueAtTime: function() {
      return this.pv;
    }, setGroupProperty: function(m) {
      this.propertyGroup = m;
    } };
    function addPropertyDecorator() {
      function m(B, G, $) {
        if (!this.k || !this.keyframes)
          return this.pv;
        B = B ? B.toLowerCase() : "";
        var ie, fe, Q, ue, me, ge = this.comp.renderedFrame, ve = this.keyframes, _e = ve[ve.length - 1].t;
        if (ge <= _e)
          return this.pv;
        if ($ ? fe = _e - (ie = G ? Math.abs(_e - this.elem.comp.globalData.frameRate * G) : Math.max(0, _e - this.elem.data.ip)) : ((!G || G > ve.length - 1) && (G = ve.length - 1), ie = _e - (fe = ve[ve.length - 1 - G].t)), B === "pingpong") {
          if (Math.floor((ge - fe) / ie) % 2 != 0)
            return this.getValueAtTime((ie - (ge - fe) % ie + fe) / this.comp.globalData.frameRate, 0);
        } else {
          if (B === "offset") {
            var Te = this.getValueAtTime(fe / this.comp.globalData.frameRate, 0), Ce = this.getValueAtTime(_e / this.comp.globalData.frameRate, 0), Ae = this.getValueAtTime(((ge - fe) % ie + fe) / this.comp.globalData.frameRate, 0), Ie = Math.floor((ge - fe) / ie);
            if (this.pv.length) {
              for (ue = (me = new Array(Te.length)).length, Q = 0; Q < ue; Q += 1)
                me[Q] = (Ce[Q] - Te[Q]) * Ie + Ae[Q];
              return me;
            }
            return (Ce - Te) * Ie + Ae;
          }
          if (B === "continue") {
            var Me = this.getValueAtTime(_e / this.comp.globalData.frameRate, 0), ke = this.getValueAtTime((_e - 1e-3) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (ue = (me = new Array(Me.length)).length, Q = 0; Q < ue; Q += 1)
                me[Q] = Me[Q] + (Me[Q] - ke[Q]) * ((ge - _e) / this.comp.globalData.frameRate) / 5e-4;
              return me;
            }
            return Me + (ge - _e) / 1e-3 * (Me - ke);
          }
        }
        return this.getValueAtTime(((ge - fe) % ie + fe) / this.comp.globalData.frameRate, 0);
      }
      function P(B, G, $) {
        if (!this.k)
          return this.pv;
        B = B ? B.toLowerCase() : "";
        var ie, fe, Q, ue, me, ge = this.comp.renderedFrame, ve = this.keyframes, _e = ve[0].t;
        if (ge >= _e)
          return this.pv;
        if ($ ? fe = _e + (ie = G ? Math.abs(this.elem.comp.globalData.frameRate * G) : Math.max(0, this.elem.data.op - _e)) : ((!G || G > ve.length - 1) && (G = ve.length - 1), ie = (fe = ve[G].t) - _e), B === "pingpong") {
          if (Math.floor((_e - ge) / ie) % 2 == 0)
            return this.getValueAtTime(((_e - ge) % ie + _e) / this.comp.globalData.frameRate, 0);
        } else {
          if (B === "offset") {
            var Te = this.getValueAtTime(_e / this.comp.globalData.frameRate, 0), Ce = this.getValueAtTime(fe / this.comp.globalData.frameRate, 0), Ae = this.getValueAtTime((ie - (_e - ge) % ie + _e) / this.comp.globalData.frameRate, 0), Ie = Math.floor((_e - ge) / ie) + 1;
            if (this.pv.length) {
              for (ue = (me = new Array(Te.length)).length, Q = 0; Q < ue; Q += 1)
                me[Q] = Ae[Q] - (Ce[Q] - Te[Q]) * Ie;
              return me;
            }
            return Ae - (Ce - Te) * Ie;
          }
          if (B === "continue") {
            var Me = this.getValueAtTime(_e / this.comp.globalData.frameRate, 0), ke = this.getValueAtTime((_e + 1e-3) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (ue = (me = new Array(Me.length)).length, Q = 0; Q < ue; Q += 1)
                me[Q] = Me[Q] + (Me[Q] - ke[Q]) * (_e - ge) / 1e-3;
              return me;
            }
            return Me + (Me - ke) * (_e - ge) / 1e-3;
          }
        }
        return this.getValueAtTime((ie - ((_e - ge) % ie + _e)) / this.comp.globalData.frameRate, 0);
      }
      function k(B, G) {
        if (!this.k)
          return this.pv;
        if (B = 0.5 * (B || 0.4), (G = Math.floor(G || 5)) <= 1)
          return this.pv;
        var $, ie, fe = this.comp.renderedFrame / this.comp.globalData.frameRate, Q = fe - B, ue = G > 1 ? (fe + B - Q) / (G - 1) : 1, me = 0, ge = 0;
        for ($ = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; me < G; ) {
          if (ie = this.getValueAtTime(Q + me * ue), this.pv.length)
            for (ge = 0; ge < this.pv.length; ge += 1)
              $[ge] += ie[ge];
          else
            $ += ie;
          me += 1;
        }
        if (this.pv.length)
          for (ge = 0; ge < this.pv.length; ge += 1)
            $[ge] /= G;
        else
          $ /= G;
        return $;
      }
      function L(B) {
        this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() });
        var G = this._transformCachingAtTime.v;
        if (G.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
          var $ = this.a.getValueAtTime(B);
          G.translate(-$[0] * this.a.mult, -$[1] * this.a.mult, $[2] * this.a.mult);
        }
        if (this.appliedTransformations < 2) {
          var ie = this.s.getValueAtTime(B);
          G.scale(ie[0] * this.s.mult, ie[1] * this.s.mult, ie[2] * this.s.mult);
        }
        if (this.sk && this.appliedTransformations < 3) {
          var fe = this.sk.getValueAtTime(B), Q = this.sa.getValueAtTime(B);
          G.skewFromAxis(-fe * this.sk.mult, Q * this.sa.mult);
        }
        if (this.r && this.appliedTransformations < 4) {
          var ue = this.r.getValueAtTime(B);
          G.rotate(-ue * this.r.mult);
        } else if (!this.r && this.appliedTransformations < 4) {
          var me = this.rz.getValueAtTime(B), ge = this.ry.getValueAtTime(B), ve = this.rx.getValueAtTime(B), _e = this.or.getValueAtTime(B);
          G.rotateZ(-me * this.rz.mult).rotateY(ge * this.ry.mult).rotateX(ve * this.rx.mult).rotateZ(-_e[2] * this.or.mult).rotateY(_e[1] * this.or.mult).rotateX(_e[0] * this.or.mult);
        }
        if (this.data.p && this.data.p.s) {
          var Te = this.px.getValueAtTime(B), Ce = this.py.getValueAtTime(B);
          if (this.data.p.z) {
            var Ae = this.pz.getValueAtTime(B);
            G.translate(Te * this.px.mult, Ce * this.py.mult, -Ae * this.pz.mult);
          } else
            G.translate(Te * this.px.mult, Ce * this.py.mult, 0);
        } else {
          var Ie = this.p.getValueAtTime(B);
          G.translate(Ie[0] * this.p.mult, Ie[1] * this.p.mult, -Ie[2] * this.p.mult);
        }
        return G;
      }
      function O() {
        return this.v.clone(new Matrix());
      }
      var V = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function(B, G, $) {
        var ie = V(B, G, $);
        return ie.dynamicProperties.length ? ie.getValueAtTime = L.bind(ie) : ie.getValueAtTime = O.bind(ie), ie.setGroupProperty = expressionHelpers.setGroupProperty, ie;
      };
      var he = PropertyFactory.getProp;
      PropertyFactory.getProp = function(B, G, $, ie, fe) {
        var Q = he(B, G, $, ie, fe);
        Q.kf ? Q.getValueAtTime = expressionHelpers.getValueAtTime.bind(Q) : Q.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(Q), Q.setGroupProperty = expressionHelpers.setGroupProperty, Q.loopOut = m, Q.loopIn = P, Q.smooth = k, Q.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(Q), Q.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(Q), Q.numKeys = G.a === 1 ? G.k.length : 0, Q.propertyIndex = G.ix;
        var ue = 0;
        return $ !== 0 && (ue = createTypedArray("float32", G.a === 1 ? G.k[0].s.length : G.k.length)), Q._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: ue }, expressionHelpers.searchExpressions(B, G, Q), Q.k && fe.addDynamicProperty(Q), Q;
      };
      var K = ShapePropertyFactory.getConstructorFunction(), de = ShapePropertyFactory.getKeyframedConstructorFunction();
      function ce() {
      }
      ce.prototype = { vertices: function(B, G) {
        this.k && this.getValue();
        var $, ie = this.v;
        G !== void 0 && (ie = this.getValueAtTime(G, 0));
        var fe = ie._length, Q = ie[B], ue = ie.v, me = createSizedArray(fe);
        for ($ = 0; $ < fe; $ += 1)
          me[$] = B === "i" || B === "o" ? [Q[$][0] - ue[$][0], Q[$][1] - ue[$][1]] : [Q[$][0], Q[$][1]];
        return me;
      }, points: function(B) {
        return this.vertices("v", B);
      }, inTangents: function(B) {
        return this.vertices("i", B);
      }, outTangents: function(B) {
        return this.vertices("o", B);
      }, isClosed: function() {
        return this.v.c;
      }, pointOnPath: function(B, G) {
        var $ = this.v;
        G !== void 0 && ($ = this.getValueAtTime(G, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength($));
        for (var ie, fe = this._segmentsLength, Q = fe.lengths, ue = fe.totalLength * B, me = 0, ge = Q.length, ve = 0; me < ge; ) {
          if (ve + Q[me].addedLength > ue) {
            var _e = me, Te = $.c && me === ge - 1 ? 0 : me + 1, Ce = (ue - ve) / Q[me].addedLength;
            ie = bez.getPointInSegment($.v[_e], $.v[Te], $.o[_e], $.i[Te], Ce, Q[me]);
            break;
          }
          ve += Q[me].addedLength, me += 1;
        }
        return ie || (ie = $.c ? [$.v[0][0], $.v[0][1]] : [$.v[$._length - 1][0], $.v[$._length - 1][1]]), ie;
      }, vectorOnPath: function(B, G, $) {
        B == 1 ? B = this.v.c : B == 0 && (B = 0.999);
        var ie = this.pointOnPath(B, G), fe = this.pointOnPath(B + 1e-3, G), Q = fe[0] - ie[0], ue = fe[1] - ie[1], me = Math.sqrt(Math.pow(Q, 2) + Math.pow(ue, 2));
        return me === 0 ? [0, 0] : $ === "tangent" ? [Q / me, ue / me] : [-ue / me, Q / me];
      }, tangentOnPath: function(B, G) {
        return this.vectorOnPath(B, G, "tangent");
      }, normalOnPath: function(B, G) {
        return this.vectorOnPath(B, G, "normal");
      }, setGroupProperty: expressionHelpers.setGroupProperty, getValueAtTime: expressionHelpers.getStaticValueAtTime }, extendPrototype([ce], K), extendPrototype([ce], de), de.prototype.getValueAtTime = function(B) {
        return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shapePool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), B *= this.elem.globalData.frameRate, (B -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < B ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = B, this.interpolateShape(B, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
      }, de.prototype.initiateExpression = ExpressionManager.initiateExpression;
      var pe = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function(B, G, $, ie, fe) {
        var Q = pe(B, G, $, ie, fe);
        return Q.propertyIndex = G.ix, Q.lock = !1, $ === 3 ? expressionHelpers.searchExpressions(B, G.pt, Q) : $ === 4 && expressionHelpers.searchExpressions(B, G.ks, Q), Q.k && B.addDynamicProperty(Q), Q;
      };
    }
    function initialize$1() {
      addPropertyDecorator();
    }
    function addDecorator() {
      TextProperty.prototype.getExpressionValue = function(m, P) {
        var k = this.calculateExpression(P);
        if (m.t !== k) {
          var L = {};
          return this.copyData(L, m), L.t = k.toString(), L.__complete = !1, L;
        }
        return m;
      }, TextProperty.prototype.searchProperty = function() {
        var m = this.searchKeyframes(), P = this.searchExpressions();
        return this.kf = m || P, this.kf;
      }, TextProperty.prototype.searchExpressions = function() {
        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
      };
    }
    function initialize() {
      addDecorator();
    }
    function SVGComposableEffect() {
    }
    SVGComposableEffect.prototype = { createMergeNode: function(m, P) {
      var k, L, O = createNS("feMerge");
      for (O.setAttribute("result", m), L = 0; L < P.length; L += 1)
        (k = createNS("feMergeNode")).setAttribute("in", P[L]), O.appendChild(k), O.appendChild(k);
      return O;
    } };
    var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
    function SVGTintFilter(m, P, k, L, O) {
      this.filterManager = P;
      var V = createNS("feColorMatrix");
      V.setAttribute("type", "matrix"), V.setAttribute("color-interpolation-filters", "linearRGB"), V.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = V, V.setAttribute("result", L + "_tint_1"), m.appendChild(V), (V = createNS("feColorMatrix")).setAttribute("type", "matrix"), V.setAttribute("color-interpolation-filters", "sRGB"), V.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), V.setAttribute("result", L + "_tint_2"), m.appendChild(V), this.matrixFilter = V;
      var he = this.createMergeNode(L, [O, L + "_tint_1", L + "_tint_2"]);
      m.appendChild(he);
    }
    function SVGFillFilter(m, P, k, L) {
      this.filterManager = P;
      var O = createNS("feColorMatrix");
      O.setAttribute("type", "matrix"), O.setAttribute("color-interpolation-filters", "sRGB"), O.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), O.setAttribute("result", L), m.appendChild(O), this.matrixFilter = O;
    }
    function SVGStrokeEffect(m, P, k) {
      this.initialized = !1, this.filterManager = P, this.elem = k, this.paths = [];
    }
    function SVGTritoneFilter(m, P, k, L) {
      this.filterManager = P;
      var O = createNS("feColorMatrix");
      O.setAttribute("type", "matrix"), O.setAttribute("color-interpolation-filters", "linearRGB"), O.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), m.appendChild(O);
      var V = createNS("feComponentTransfer");
      V.setAttribute("color-interpolation-filters", "sRGB"), V.setAttribute("result", L), this.matrixFilter = V;
      var he = createNS("feFuncR");
      he.setAttribute("type", "table"), V.appendChild(he), this.feFuncR = he;
      var K = createNS("feFuncG");
      K.setAttribute("type", "table"), V.appendChild(K), this.feFuncG = K;
      var de = createNS("feFuncB");
      de.setAttribute("type", "table"), V.appendChild(de), this.feFuncB = de, m.appendChild(V);
    }
    function SVGProLevelsFilter(m, P, k, L) {
      this.filterManager = P;
      var O = this.filterManager.effectElements, V = createNS("feComponentTransfer");
      (O[10].p.k || O[10].p.v !== 0 || O[11].p.k || O[11].p.v !== 1 || O[12].p.k || O[12].p.v !== 1 || O[13].p.k || O[13].p.v !== 0 || O[14].p.k || O[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", V)), (O[17].p.k || O[17].p.v !== 0 || O[18].p.k || O[18].p.v !== 1 || O[19].p.k || O[19].p.v !== 1 || O[20].p.k || O[20].p.v !== 0 || O[21].p.k || O[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", V)), (O[24].p.k || O[24].p.v !== 0 || O[25].p.k || O[25].p.v !== 1 || O[26].p.k || O[26].p.v !== 1 || O[27].p.k || O[27].p.v !== 0 || O[28].p.k || O[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", V)), (O[31].p.k || O[31].p.v !== 0 || O[32].p.k || O[32].p.v !== 1 || O[33].p.k || O[33].p.v !== 1 || O[34].p.k || O[34].p.v !== 0 || O[35].p.k || O[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", V)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (V.setAttribute("color-interpolation-filters", "sRGB"), m.appendChild(V)), (O[3].p.k || O[3].p.v !== 0 || O[4].p.k || O[4].p.v !== 1 || O[5].p.k || O[5].p.v !== 1 || O[6].p.k || O[6].p.v !== 0 || O[7].p.k || O[7].p.v !== 1) && ((V = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), V.setAttribute("result", L), m.appendChild(V), this.feFuncRComposed = this.createFeFunc("feFuncR", V), this.feFuncGComposed = this.createFeFunc("feFuncG", V), this.feFuncBComposed = this.createFeFunc("feFuncB", V));
    }
    function SVGDropShadowEffect(m, P, k, L, O) {
      var V = P.container.globalData.renderConfig.filterSize, he = P.data.fs || V;
      m.setAttribute("x", he.x || V.x), m.setAttribute("y", he.y || V.y), m.setAttribute("width", he.width || V.width), m.setAttribute("height", he.height || V.height), this.filterManager = P;
      var K = createNS("feGaussianBlur");
      K.setAttribute("in", "SourceAlpha"), K.setAttribute("result", L + "_drop_shadow_1"), K.setAttribute("stdDeviation", "0"), this.feGaussianBlur = K, m.appendChild(K);
      var de = createNS("feOffset");
      de.setAttribute("dx", "25"), de.setAttribute("dy", "0"), de.setAttribute("in", L + "_drop_shadow_1"), de.setAttribute("result", L + "_drop_shadow_2"), this.feOffset = de, m.appendChild(de);
      var ce = createNS("feFlood");
      ce.setAttribute("flood-color", "#00ff00"), ce.setAttribute("flood-opacity", "1"), ce.setAttribute("result", L + "_drop_shadow_3"), this.feFlood = ce, m.appendChild(ce);
      var pe = createNS("feComposite");
      pe.setAttribute("in", L + "_drop_shadow_3"), pe.setAttribute("in2", L + "_drop_shadow_2"), pe.setAttribute("operator", "in"), pe.setAttribute("result", L + "_drop_shadow_4"), m.appendChild(pe);
      var B = this.createMergeNode(L, [L + "_drop_shadow_4", O]);
      m.appendChild(B);
    }
    extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(m) {
      if (m || this.filterManager._mdf) {
        var P = this.filterManager.effectElements[0].p.v, k = this.filterManager.effectElements[1].p.v, L = this.filterManager.effectElements[2].p.v / 100;
        this.linearFilter.setAttribute("values", linearFilterValue + " " + L + " 0"), this.matrixFilter.setAttribute("values", k[0] - P[0] + " 0 0 0 " + P[0] + " " + (k[1] - P[1]) + " 0 0 0 " + P[1] + " " + (k[2] - P[2]) + " 0 0 0 " + P[2] + " 0 0 0 1 0");
      }
    }, SVGFillFilter.prototype.renderFrame = function(m) {
      if (m || this.filterManager._mdf) {
        var P = this.filterManager.effectElements[2].p.v, k = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute("values", "0 0 0 0 " + P[0] + " 0 0 0 0 " + P[1] + " 0 0 0 0 " + P[2] + " 0 0 0 " + k + " 0");
      }
    }, SVGStrokeEffect.prototype.initialize = function() {
      var m, P, k, L, O = this.elem.layerElement.children || this.elem.layerElement.childNodes;
      for (this.filterManager.effectElements[1].p.v === 1 ? (L = this.elem.maskManager.masksProperties.length, k = 0) : L = (k = this.filterManager.effectElements[0].p.v - 1) + 1, (P = createNS("g")).setAttribute("fill", "none"), P.setAttribute("stroke-linecap", "round"), P.setAttribute("stroke-dashoffset", 1); k < L; k += 1)
        m = createNS("path"), P.appendChild(m), this.paths.push({ p: m, m: k });
      if (this.filterManager.effectElements[10].p.v === 3) {
        var V = createNS("mask"), he = createElementID();
        V.setAttribute("id", he), V.setAttribute("mask-type", "alpha"), V.appendChild(P), this.elem.globalData.defs.appendChild(V);
        var K = createNS("g");
        for (K.setAttribute("mask", "url(" + getLocationHref() + "#" + he + ")"); O[0]; )
          K.appendChild(O[0]);
        this.elem.layerElement.appendChild(K), this.masker = V, P.setAttribute("stroke", "#fff");
      } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
        if (this.filterManager.effectElements[10].p.v === 2)
          for (O = this.elem.layerElement.children || this.elem.layerElement.childNodes; O.length; )
            this.elem.layerElement.removeChild(O[0]);
        this.elem.layerElement.appendChild(P), this.elem.layerElement.removeAttribute("mask"), P.setAttribute("stroke", "#fff");
      }
      this.initialized = !0, this.pathMasker = P;
    }, SVGStrokeEffect.prototype.renderFrame = function(m) {
      var P;
      this.initialized || this.initialize();
      var k, L, O = this.paths.length;
      for (P = 0; P < O; P += 1)
        if (this.paths[P].m !== -1 && (k = this.elem.maskManager.viewData[this.paths[P].m], L = this.paths[P].p, (m || this.filterManager._mdf || k.prop._mdf) && L.setAttribute("d", k.lastPath), m || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || k.prop._mdf)) {
          var V;
          if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
            var he = 0.01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), K = 0.01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), de = L.getTotalLength();
            V = "0 0 0 " + de * he + " ";
            var ce, pe = de * (K - he), B = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01, G = Math.floor(pe / B);
            for (ce = 0; ce < G; ce += 1)
              V += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01 + " ";
            V += "0 " + 10 * de + " 0 0";
          } else
            V = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01;
          L.setAttribute("stroke-dasharray", V);
        }
      if ((m || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (m || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (m || this.filterManager.effectElements[3].p._mdf)) {
        var $ = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * $[0]) + "," + bmFloor(255 * $[1]) + "," + bmFloor(255 * $[2]) + ")");
      }
    }, SVGTritoneFilter.prototype.renderFrame = function(m) {
      if (m || this.filterManager._mdf) {
        var P = this.filterManager.effectElements[0].p.v, k = this.filterManager.effectElements[1].p.v, L = this.filterManager.effectElements[2].p.v, O = L[0] + " " + k[0] + " " + P[0], V = L[1] + " " + k[1] + " " + P[1], he = L[2] + " " + k[2] + " " + P[2];
        this.feFuncR.setAttribute("tableValues", O), this.feFuncG.setAttribute("tableValues", V), this.feFuncB.setAttribute("tableValues", he);
      }
    }, SVGProLevelsFilter.prototype.createFeFunc = function(m, P) {
      var k = createNS(m);
      return k.setAttribute("type", "table"), P.appendChild(k), k;
    }, SVGProLevelsFilter.prototype.getTableValue = function(m, P, k, L, O) {
      for (var V, he, K = 0, de = Math.min(m, P), ce = Math.max(m, P), pe = Array.call(null, { length: 256 }), B = 0, G = O - L, $ = P - m; K <= 256; )
        he = (V = K / 256) <= de ? $ < 0 ? O : L : V >= ce ? $ < 0 ? L : O : L + G * Math.pow((V - m) / $, 1 / k), pe[B] = he, B += 1, K += 256 / 255;
      return pe.join(" ");
    }, SVGProLevelsFilter.prototype.renderFrame = function(m) {
      if (m || this.filterManager._mdf) {
        var P, k = this.filterManager.effectElements;
        this.feFuncRComposed && (m || k[3].p._mdf || k[4].p._mdf || k[5].p._mdf || k[6].p._mdf || k[7].p._mdf) && (P = this.getTableValue(k[3].p.v, k[4].p.v, k[5].p.v, k[6].p.v, k[7].p.v), this.feFuncRComposed.setAttribute("tableValues", P), this.feFuncGComposed.setAttribute("tableValues", P), this.feFuncBComposed.setAttribute("tableValues", P)), this.feFuncR && (m || k[10].p._mdf || k[11].p._mdf || k[12].p._mdf || k[13].p._mdf || k[14].p._mdf) && (P = this.getTableValue(k[10].p.v, k[11].p.v, k[12].p.v, k[13].p.v, k[14].p.v), this.feFuncR.setAttribute("tableValues", P)), this.feFuncG && (m || k[17].p._mdf || k[18].p._mdf || k[19].p._mdf || k[20].p._mdf || k[21].p._mdf) && (P = this.getTableValue(k[17].p.v, k[18].p.v, k[19].p.v, k[20].p.v, k[21].p.v), this.feFuncG.setAttribute("tableValues", P)), this.feFuncB && (m || k[24].p._mdf || k[25].p._mdf || k[26].p._mdf || k[27].p._mdf || k[28].p._mdf) && (P = this.getTableValue(k[24].p.v, k[25].p.v, k[26].p.v, k[27].p.v, k[28].p.v), this.feFuncB.setAttribute("tableValues", P)), this.feFuncA && (m || k[31].p._mdf || k[32].p._mdf || k[33].p._mdf || k[34].p._mdf || k[35].p._mdf) && (P = this.getTableValue(k[31].p.v, k[32].p.v, k[33].p.v, k[34].p.v, k[35].p.v), this.feFuncA.setAttribute("tableValues", P));
      }
    }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(m) {
      if (m || this.filterManager._mdf) {
        if ((m || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), m || this.filterManager.effectElements[0].p._mdf) {
          var P = this.filterManager.effectElements[0].p.v;
          this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * P[0]), Math.round(255 * P[1]), Math.round(255 * P[2])));
        }
        if ((m || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), m || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
          var k = this.filterManager.effectElements[3].p.v, L = (this.filterManager.effectElements[2].p.v - 90) * degToRads, O = k * Math.cos(L), V = k * Math.sin(L);
          this.feOffset.setAttribute("dx", O), this.feOffset.setAttribute("dy", V);
        }
      }
    };
    var _svgMatteSymbols = [];
    function SVGMatte3Effect(m, P, k) {
      this.initialized = !1, this.filterManager = P, this.filterElem = m, this.elem = k, k.matteElement = createNS("g"), k.matteElement.appendChild(k.layerElement), k.matteElement.appendChild(k.transformedElement), k.baseElement = k.matteElement;
    }
    function SVGGaussianBlurEffect(m, P, k, L) {
      m.setAttribute("x", "-100%"), m.setAttribute("y", "-100%"), m.setAttribute("width", "300%"), m.setAttribute("height", "300%"), this.filterManager = P;
      var O = createNS("feGaussianBlur");
      O.setAttribute("result", L), m.appendChild(O), this.feGaussianBlur = O;
    }
    return SVGMatte3Effect.prototype.findSymbol = function(m) {
      for (var P = 0, k = _svgMatteSymbols.length; P < k; ) {
        if (_svgMatteSymbols[P] === m)
          return _svgMatteSymbols[P];
        P += 1;
      }
      return null;
    }, SVGMatte3Effect.prototype.replaceInParent = function(m, P) {
      var k = m.layerElement.parentNode;
      if (k) {
        for (var L, O = k.children, V = 0, he = O.length; V < he && O[V] !== m.layerElement; )
          V += 1;
        V <= he - 2 && (L = O[V + 1]);
        var K = createNS("use");
        K.setAttribute("href", "#" + P), L ? k.insertBefore(K, L) : k.appendChild(K);
      }
    }, SVGMatte3Effect.prototype.setElementAsMask = function(m, P) {
      if (!this.findSymbol(P)) {
        var k = createElementID(), L = createNS("mask");
        L.setAttribute("id", P.layerId), L.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(P);
        var O = m.globalData.defs;
        O.appendChild(L);
        var V = createNS("symbol");
        V.setAttribute("id", k), this.replaceInParent(P, k), V.appendChild(P.layerElement), O.appendChild(V);
        var he = createNS("use");
        he.setAttribute("href", "#" + k), L.appendChild(he), P.data.hd = !1, P.show();
      }
      m.setMatte(P.layerId);
    }, SVGMatte3Effect.prototype.initialize = function() {
      for (var m = this.filterManager.effectElements[0].p.v, P = this.elem.comp.elements, k = 0, L = P.length; k < L; )
        P[k] && P[k].data.ind === m && this.setElementAsMask(this.elem, P[k]), k += 1;
      this.initialized = !0;
    }, SVGMatte3Effect.prototype.renderFrame = function() {
      this.initialized || this.initialize();
    }, SVGGaussianBlurEffect.prototype.renderFrame = function(m) {
      if (m || this.filterManager._mdf) {
        var P = 0.3 * this.filterManager.effectElements[0].p.v, k = this.filterManager.effectElements[1].p.v, L = k == 3 ? 0 : P, O = k == 2 ? 0 : P;
        this.feGaussianBlur.setAttribute("stdDeviation", L + " " + O);
        var V = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
        this.feGaussianBlur.setAttribute("edgeMode", V);
      }
    }, registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, !0), registerEffect(21, SVGFillFilter, !0), registerEffect(22, SVGStrokeEffect, !1), registerEffect(23, SVGTritoneFilter, !0), registerEffect(24, SVGProLevelsFilter, !0), registerEffect(25, SVGDropShadowEffect, !0), registerEffect(28, SVGMatte3Effect, !1), registerEffect(29, SVGGaussianBlurEffect, !0), lottie;
  });
}), REACT_LOTTIE_PLAYER_VERSION = "3.5.3", LOTTIE_WEB_VERSION = "^5.10.2", PlayerState, PlayerEvent;
function parseSrc(m) {
  if (typeof m == "object")
    return m;
  try {
    return JSON.parse(m);
  } catch {
  }
  try {
    return new URL(m).toString();
  } catch {
  }
  return m;
}
(function(m) {
  m.Loading = "loading", m.Playing = "playing", m.Paused = "paused", m.Stopped = "stopped", m.Frozen = "frozen", m.Error = "error";
})(PlayerState || (PlayerState = {})), function(m) {
  m.Load = "load", m.InstanceSaved = "instanceSaved", m.Error = "error", m.Ready = "ready", m.Play = "play", m.Pause = "pause", m.Stop = "stop", m.Freeze = "freeze", m.Loop = "loop", m.Complete = "complete", m.Frame = "frame";
}(PlayerEvent || (PlayerEvent = {}));
var defaultOptions = { clearCanvas: !1, hideOnTransparent: !0, progressiveLoad: !0 }, Player = function(m) {
  function P(k) {
    var L = m.call(this, k) || this;
    return L.container = null, L.unmounted = !1, L.handleBgChange = function(O) {
      L.setState({ background: O });
    }, L.triggerDownload = function(O, V) {
      var he = document.createElement("a");
      he.href = O, he.download = V, document.body.appendChild(he), he.click(), document.body.removeChild(he);
    }, L.snapshot = function(O) {
      var V;
      O === void 0 && (O = !0);
      var he = L.props.id ? L.props.id : "lottie", K = document.getElementById(he);
      if (L.props.renderer === "svg") {
        if (K) {
          var de = K.querySelector("svg");
          if (de) {
            var ce = new XMLSerializer().serializeToString(de);
            V = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(ce);
          }
        }
        O && L.triggerDownload(V, "snapshot.svg");
      } else if (L.props.renderer === "canvas") {
        if (K) {
          var pe = K.querySelector("canvas");
          pe && (V = pe.toDataURL("image/png"));
        }
        O && L.triggerDownload(V, "snapshot.png");
      }
      return V;
    }, typeof window < "u" && (window.lottie = lottie), L.state = { animationData: null, background: "transparent", containerRef: React.createRef(), debug: !0, instance: null, playerState: PlayerState.Loading, seeker: 0 }, L;
  }
  return __extends(P, m), P.getDerivedStateFromProps = function(k, L) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(O) {
        return k.background !== L.background ? [2, { background: k.background }] : [2, null];
      });
    });
  }, P.prototype.getVersions = function() {
    return { lottieWebVersion: LOTTIE_WEB_VERSION, lottiePlayerVersion: REACT_LOTTIE_PLAYER_VERSION };
  }, P.prototype.componentDidMount = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(k) {
        switch (k.label) {
          case 0:
            return this.unmounted ? [3, 2] : [4, this.createLottie()];
          case 1:
            k.sent(), k.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, P.prototype.componentWillUnmount = function() {
    this.unmounted = !0, this.state.instance && this.state.instance.destroy();
  }, P.prototype.componentDidUpdate = function(k) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(L) {
        switch (L.label) {
          case 0:
            return this.props.src === k.src ? [3, 2] : (this.state.instance && this.state.instance.destroy(), [4, this.createLottie()]);
          case 1:
            L.sent(), L.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, P.prototype.render = function() {
    var k = this, L = this.props, O = L.children, V = L.loop, he = L.style, K = L.onBackgroundChange, de = L.className, ce = this.state, pe = ce.animationData, B = ce.instance, G = ce.playerState, $ = ce.seeker, ie = ce.debug, fe = ce.background;
    return React.createElement("div", { className: "lf-player-container" }, this.state.playerState === PlayerState.Error ? React.createElement("div", { className: "lf-error" }, React.createElement("span", { "aria-label": "error-symbol", role: "img" }, "⚠️")) : React.createElement("div", { id: this.props.id ? this.props.id : "lottie", ref: function(Q) {
      return k.container = Q;
    }, style: __assign({ background: fe, margin: "0 auto", outline: "none", overflow: "hidden" }, he), className: de }), React.Children.map(O, function(Q) {
      return React.isValidElement(Q) ? React.cloneElement(Q, { animationData: pe, background: fe, debug: ie, instance: B, loop: V, pause: function() {
        return k.pause();
      }, play: function() {
        return k.play();
      }, playerState: G, seeker: $, setBackground: function(ue) {
        k.setState({ background: ue }), typeof K == "function" && K(ue);
      }, setSeeker: function(ue, me) {
        return k.setSeeker(ue, me);
      }, stop: function() {
        return k.stop();
      }, toggleDebug: function() {
        return k.toggleDebug();
      }, setLoop: function(ue) {
        return k.setLoop(ue);
      }, colorChangedEvent: function(ue) {
        k.handleBgChange(ue);
      }, snapshot: function() {
        k.snapshot();
      } }) : null;
    }));
  }, P.prototype.toggleDebug = function() {
    this.setState({ debug: !this.state.debug });
  }, P.prototype.createLottie = function() {
    return __awaiter(this, void 0, void 0, function() {
      var k, L, O, V, he, K, de, ce, pe, B, G, $, ie, fe, Q = this;
      return __generator(this, function(ue) {
        switch (ue.label) {
          case 0:
            if (k = this.props, L = k.autoplay, O = k.direction, V = k.loop, he = k.lottieRef, K = k.renderer, de = k.speed, ce = k.src, pe = k.background, B = k.rendererSettings, G = k.hover, $ = this.state.instance, !ce || !this.container)
              return [2];
            ue.label = 1;
          case 1:
            return ue.trys.push([1, 5, , 6]), typeof (ie = parseSrc(ce)) != "string" ? [3, 4] : [4, fetch(ie).catch(function() {
              throw Q.setState({ playerState: PlayerState.Error }), Q.triggerEvent(PlayerEvent.Error), new Error("@LottieFiles/lottie-react: Animation data could not be fetched.");
            })];
          case 2:
            return [4, ue.sent().json().catch(function() {
              throw Q.setState({ playerState: PlayerState.Error }), Q.triggerEvent(PlayerEvent.Error), new Error("@LottieFiles/lottie-react: Animation data could not be fetched.");
            })];
          case 3:
            ie = ue.sent(), ue.label = 4;
          case 4:
            return $ && $.destroy(), fe = lottie.loadAnimation({ rendererSettings: B || defaultOptions, animationData: ie, autoplay: L || !1, container: this.container, loop: V || !1, renderer: K }), de && fe.setSpeed(de), this.setState({ animationData: ie }), this.setState({ instance: fe }, function() {
              Q.triggerEvent(PlayerEvent.InstanceSaved), typeof he == "function" && he(fe), L && Q.play();
            }), fe.addEventListener("enterFrame", function() {
              Q.triggerEvent(PlayerEvent.Frame), Q.setState({ seeker: Math.floor(fe.currentFrame) });
            }), fe.addEventListener("DOMLoaded", function() {
              Q.triggerEvent(PlayerEvent.Load);
            }), fe.addEventListener("data_ready", function() {
              Q.triggerEvent(PlayerEvent.Ready);
            }), fe.addEventListener("data_failed", function() {
              Q.setState({ playerState: PlayerState.Error }), Q.triggerEvent(PlayerEvent.Error);
            }), fe.addEventListener("loopComplete", function() {
              Q.triggerEvent(PlayerEvent.Loop);
            }), fe.addEventListener("complete", function() {
              Q.triggerEvent(PlayerEvent.Complete), Q.setState({ playerState: PlayerState.Paused }), Q.props.keepLastFrame && !Q.props.loop || Q.setSeeker(0);
            }), this.container && (this.container.addEventListener("mouseenter", function() {
              G && Q.state.playerState !== PlayerState.Playing && (Q.props.keepLastFrame && Q.stop(), Q.play());
            }), this.container.addEventListener("mouseleave", function() {
              G && Q.state.playerState === PlayerState.Playing && Q.stop();
            })), de && this.setPlayerSpeed(de), O && this.setPlayerDirection(O), pe && this.setState({ background: pe }), [3, 6];
          case 5:
            return ue.sent(), this.setState({ playerState: PlayerState.Error }), this.triggerEvent(PlayerEvent.Error), [3, 6];
          case 6:
            return [2];
        }
      });
    });
  }, P.prototype.play = function() {
    var k = this.state.instance;
    k && (this.triggerEvent(PlayerEvent.Play), k.play(), this.setState({ playerState: PlayerState.Playing }));
  }, P.prototype.pause = function() {
    var k = this.state.instance;
    k && (this.triggerEvent(PlayerEvent.Pause), k.pause(), this.setState({ playerState: PlayerState.Paused }));
  }, P.prototype.stop = function() {
    var k = this.state.instance;
    k && (this.triggerEvent(PlayerEvent.Stop), k.stop(), this.setState({ playerState: PlayerState.Stopped }));
  }, P.prototype.setPlayerSpeed = function(k) {
    var L = this.state.instance;
    L && L.setSpeed(k);
  }, P.prototype.setPlayerDirection = function(k) {
    var L = this.state.instance;
    L && L.setDirection(k);
  }, P.prototype.setSeeker = function(k, L) {
    L === void 0 && (L = !1);
    var O = this.state, V = O.instance, he = O.playerState;
    V && (L && he === PlayerState.Playing ? V.goToAndPlay(k, !0) : (V.goToAndStop(k, !0), this.triggerEvent(PlayerEvent.Pause), this.setState({ playerState: PlayerState.Paused })));
  }, P.prototype.setLoop = function(k) {
    var L = this.state.instance;
    L && (L.loop = k, this.setState({ instance: L }));
  }, P.prototype.triggerEvent = function(k) {
    var L = this.props.onEvent;
    L && L(k);
  }, P.defaultProps = { loop: !1 }, P;
}(React.Component);
function styleInject(m, P) {
  P === void 0 && (P = {});
  var k = P.insertAt;
  if (m && typeof document < "u") {
    var L = document.head || document.getElementsByTagName("head")[0], O = document.createElement("style");
    O.type = "text/css", k === "top" && L.firstChild ? L.insertBefore(O, L.firstChild) : L.appendChild(O), O.styleSheet ? O.styleSheet.cssText = m : O.appendChild(document.createTextNode(m));
  }
}
var css_248z = `.lf-progress {
  -webkit-appearance: none;
  -moz-apperance: none;
  width: 100%;
  /* margin: 0 10px; */
  height: 4px;
  border-radius: 3px;
  cursor: pointer;
}
.lf-progress:focus {
  outline: none;
  border: none;
}
.lf-progress::-moz-range-track {
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
}
.lf-progress::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  height: 13px;
  width: 13px;
  border: 0;
  border-radius: 50%;
  background: #0fccce;
  cursor: pointer;
}
.lf-progress::-moz-range-thumb {
  -moz-appearance: none !important;
  height: 13px;
  width: 13px;
  border: 0;
  border-radius: 50%;
  background: #0fccce;
  cursor: pointer;
}
.lf-progress::-ms-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
.lf-progress::-ms-fill-lower {
  background: #ccc;
  border-radius: 3px;
}
.lf-progress::-ms-fill-upper {
  background: #ccc;
  border-radius: 3px;
}
.lf-progress::-ms-thumb {
  border: 0;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: #0fccce;
  cursor: pointer;
}
.lf-progress:focus::-ms-fill-lower {
  background: #ccc;
}
.lf-progress:focus::-ms-fill-upper {
  background: #ccc;
}
.lf-player-container :focus {
  outline: 0;
}
.lf-popover {
  position: relative;
}

.lf-popover-content {
  display: inline-block;
  position: absolute;
  opacity: 1;
  visibility: visible;
  transform: translate(0, -10px);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);
}

.lf-popover-content.hidden {
  opacity: 0;
  visibility: hidden;
  transform: translate(0, 0px);
}

.lf-player-btn-container {
  display: flex;
  align-items: center;
}
.lf-player-btn {
  cursor: pointer;
  fill: #999;
  width: 14px;
}

.lf-player-btn.active {
  fill: #555;
}

.lf-popover {
  position: relative;
}

.lf-popover-content {
  display: inline-block;
  position: absolute;
  background-color: #ffffff;
  opacity: 1;

  transform: translate(0, -10px);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);
  padding: 10px;
}

.lf-popover-content.hidden {
  opacity: 0;
  visibility: hidden;
  transform: translate(0, 0px);
}

.lf-arrow {
  position: absolute;
  z-index: -1;
  content: '';
  bottom: -9px;
  border-style: solid;
  border-width: 10px 10px 0px 10px;
}

.lf-left-align,
.lf-left-align .lfarrow {
  left: 0;
  right: unset;
}

.lf-right-align,
.lf-right-align .lf-arrow {
  right: 0;
  left: unset;
}

.lf-text-input {
  border: 1px #ccc solid;
  border-radius: 5px;
  padding: 3px;
  width: 60px;
  margin: 0;
}

.lf-color-picker {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 90px;
}

.lf-color-selectors {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.lf-color-component {
  display: flex;
  flex-direction: row;
  font-size: 12px;
  align-items: center;
  justify-content: center;
}

.lf-color-component strong {
  width: 40px;
}

.lf-color-component input[type='range'] {
  margin: 0 0 0 10px;
}

.lf-color-component input[type='number'] {
  width: 50px;
  margin: 0 0 0 10px;
}

.lf-color-preview {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
}

.lf-preview {
  height: 60px;
  width: 60px;
}

.lf-popover-snapshot {
  width: 150px;
}
.lf-popover-snapshot h5 {
  margin: 5px 0 10px 0;
  font-size: 0.75rem;
}
.lf-popover-snapshot a {
  display: block;
  text-decoration: none;
}
.lf-popover-snapshot a:before {
  content: '⥼';
  margin-right: 5px;
}
.lf-popover-snapshot .lf-note {
  display: block;
  margin-top: 10px;
  color: #999;
}
.lf-player-controls > div {
  margin-right: 5px;
  margin-left: 5px;
}
.lf-player-controls > div:first-child {
  margin-left: 0px;
}
.lf-player-controls > div:last-child {
  margin-right: 0px;
}
`;
styleInject(css_248z);
var ColorPicker = function(m) {
  function P() {
    var k = m !== null && m.apply(this, arguments) || this;
    return k.state = { red: 0, green: 0, blue: 0, rgba: null, hex: "#000000", colorComponents: [] }, k.handleChange = function(L, O) {
      if (L === "r") {
        var V = "#" + (256 | O).toString(16).slice(1) + (256 | k.state.green).toString(16).slice(1) + (256 | k.state.blue).toString(16).slice(1);
        k.setState({ hex: V });
      } else
        L === "g" ? (V = "#" + (256 | k.state.red).toString(16).slice(1) + (256 | O).toString(16).slice(1) + (256 | k.state.blue).toString(16).slice(1), k.setState({ hex: V })) : L === "b" && (V = "#" + (256 | k.state.red).toString(16).slice(1) + (256 | k.state.green).toString(16).slice(1) + (256 | O).toString(16).slice(1), k.setState({ hex: V }));
    }, k.parseColor = function(L) {
      var O;
      if (typeof L == "string") {
        if (L[0] === "#") {
          var V = L.length === 4 ? [L.slice(1, 2), L.slice(2, 3), L.slice(3, 4)].map(function(he) {
            return parseInt("" + he + he, 16);
          }) : [L.slice(1, 3), L.slice(3, 5), L.slice(5, 7)].map(function(he) {
            return parseInt(he, 16);
          });
          k.setState({ colorComponents: V });
        } else
          L.startsWith("rgb") && (V = (O = L.match(/\d+/g)) === null || O === void 0 ? void 0 : O.map(function(he) {
            return parseInt(he);
          })) !== void 0 && k.setState({ colorComponents: V });
        k.state.colorComponents.length && (k.setState({ red: k.state.colorComponents[0] }), k.setState({ green: k.state.colorComponents[1] }), k.setState({ blue: k.state.colorComponents[2] }));
      }
    }, k;
  }
  return __extends(P, m), P.prototype.componentDidUpdate = function(k, L) {
    return this.props.colorChangedEvent && this.state.hex !== L.hex && this.props.colorChangedEvent(this.state.hex), !0;
  }, P.prototype.render = function() {
    var k = this;
    return React.createElement("div", { className: "lf-color-picker" }, React.createElement("div", { className: "lf-color-selectors" }, React.createElement("div", { className: "lf-color-component" }, React.createElement("strong", null, "Red"), React.createElement("input", { type: "range", min: "0", max: "255", value: this.state.red, onChange: function(L) {
      k.setState({ red: L.target.value }), k.handleChange("r", L.target.value);
    } }), React.createElement("input", { className: "lf-text-input", type: "number", min: "0", max: "255", value: this.state.red, onChange: function(L) {
      k.setState({ red: L.target.value }), k.handleChange("r", L.target.value);
    } })), React.createElement("div", { className: "lf-color-component" }, React.createElement("strong", null, "Green"), React.createElement("input", { type: "range", min: "0", max: "255", value: this.state.green, onChange: function(L) {
      k.setState({ green: L.target.value }), k.handleChange("g", L.target.value);
    } }), React.createElement("input", { className: "lf-text-input", type: "number", min: "0", max: "255", value: this.state.green, onChange: function(L) {
      k.setState({ green: L.target.value }), k.handleChange("g", L.target.value);
    } })), React.createElement("div", { className: "lf-color-component" }, React.createElement("strong", null, "Blue"), React.createElement("input", { type: "range", min: "0", max: "255", value: this.state.blue, onChange: function(L) {
      k.setState({ blue: L.target.value }), k.handleChange("b", L.target.value);
    } }), React.createElement("input", { className: "lf-text-input", type: "number", min: "0", max: "255", value: this.state.blue, onChange: function(L) {
      k.setState({ blue: L.target.value }), k.handleChange("b", L.target.value);
    } }))), React.createElement("div", { className: "lf-color-preview" }, React.createElement("div", { className: "lf-preview", style: { background: "rgb(" + this.state.red + ", " + this.state.green + ", " + this.state.blue + ")" } }), React.createElement("div", null, React.createElement("input", { className: "lf-text-input", type: "text", value: this.state.hex, onChange: function(L) {
      k.setState({ hex: L.target.value }), k.parseColor(L.target.value);
    } }))));
  }, P;
}(React.Component), Popover = function(m) {
  var P = m.children, k = m.icon, L = useState(null), O = L[0], V = L[1], he = useState(null), K = he[0], de = he[1], ce = useState(null), pe = ce[0], B = ce[1], G = useState(!1), $ = G[0], ie = G[1];
  return useEffect(function() {
    if (O && K) {
      var fe = O.getBoundingClientRect(), Q = K.getBoundingClientRect(), ue = fe.left + Q.width > window.innerWidth ? -1 : 0;
      B(ue);
    }
  }, [pe, K, O]), React.createElement("div", { className: "lf-popover", onMouseOver: function() {
    ie(!0);
  }, onMouseLeave: function() {
    ie(!1);
  }, ref: function(fe) {
    V(fe);
  } }, React.createElement("div", { className: " lf-player-btn" }, k), React.createElement("div", { className: "lf-popover-content", ref: function(fe) {
    de(fe);
  }, style: { bottom: "22px", right: "0px", zIndex: 2, visibility: $ ? "visible" : "hidden" } }, P));
}, Seeker = function(m) {
  function P(k) {
    var L = m.call(this, k) || this;
    return L.inputRef = React.createRef(), L.handleChange = function() {
      return function(O) {
        var V = O.target.value, he = Math.floor(V / 100 * L.props.max);
        L.props.onChange(he);
      };
    }, L.state = { value: 0 }, L;
  }
  return __extends(P, m), P.prototype.render = function() {
    var k = this.props.value / this.props.max * 100, L = { backgroundImage: "-webkit-gradient(linear, left top, right top, color-stop(" + k + "%, rgba(15, 204, 206, 0.4)), color-stop(" + k + "%, #DAE1E7))" }, O = { position: "absolute", left: 0, marginTop: "8px", width: "20px", display: "block", border: "0px", backgroundColor: this.props.darkTheme ? "#505050" : "rgb(218, 225, 231)", color: this.props.darkTheme ? "#B9B9B9" : "#555", padding: "2px", textAlign: "center", borderRadius: "3px", fontSize: "8px", fontWeight: "bold" }, V = { position: "absolute", right: 0, marginTop: "8px", width: "20px", display: "block", border: "0px", backgroundColor: this.props.darkTheme ? "#505050" : "rgb(218, 225, 231)", color: this.props.darkTheme ? "#B9B9B9" : "#555", padding: "2px", textAlign: "center", borderRadius: "3px", fontSize: "8px", fontWeight: "bold" };
    return React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginRight: "5px", marginLeft: "5px", position: "relative" } }, React.createElement("input", { ref: this.inputRef, id: "track", className: "lf-progress", name: "progress", "aria-label": "progress", type: "range", min: "0", max: "100", step: "0.1", value: k, onInput: this.handleChange(), onChange: this.handleChange(), style: L }), this.props.showLabels && React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, React.createElement("div", { style: O }, this.props.min), React.createElement("div", { style: V }, this.props.max)));
  }, P;
}(React.Component), ControlButtonStyle = { display: "inline-flex", cursor: "pointer" };
(function(m) {
  function P(k) {
    var L = m.call(this, k) || this;
    return L.state = { activeFrame: 0, mouseDown: !1 }, L;
  }
  return __extends(P, m), P.prototype.render = function() {
    var k = this, L = this.props, O = L.instance, V = L.playerState, he = L.seeker, K = L.setLoop, de = L.setSeeker, ce = L.play, pe = L.pause, B = L.stop, G = L.visible, $ = L.buttons;
    if (!O || !G)
      return null;
    var ie = !$ || $.includes("play"), fe = !$ || $.includes("stop"), Q = !$ || $.includes("repeat"), ue = !$ || $.includes("frame"), me = !$ || $.includes("background"), ge = !$ || $.includes("snapshot"), ve = { width: 14, height: 14, viewBox: "0 0 24 24" }, _e = Math.round(O.currentFrame);
    return React.createElement("div", { className: "lf-player-controls", style: { display: "flex", justifyContent: "space-between", height: "60px", alignItems: "center", backgroundColor: this.props.transparentTheme ? "transparent" : this.props.darkTheme ? "#3C3C3C" : "#ffffff", paddingLeft: "10px", paddingRight: "10px" } }, ie && React.createElement("div", { role: "button", "aria-label": V === PlayerState.Playing ? PlayerEvent.Pause : PlayerEvent.Play, tabIndex: 0, onClick: function() {
      V === PlayerState.Playing ? typeof pe == "function" && pe() : typeof ce == "function" && ce();
    }, onKeyDown: function() {
      V === PlayerState.Playing ? typeof pe == "function" && pe() : typeof ce == "function" && ce();
    }, className: "lf-player-btn", style: ControlButtonStyle }, V === PlayerState.Playing ? React.createElement("svg", __assign({}, ve), React.createElement("rect", { height: "22.9", rx: "1.9", width: "7.6", x: "14", y: ".5" }), React.createElement("rect", { height: "22.9", rx: "1.9", width: "7.6", x: "2", y: ".5" })) : React.createElement("svg", __assign({}, ve), React.createElement("path", { d: "M2 3.4C2 1.9 3.5 1 4.8 1.8l16.5 9.6c1.2.7 1.2 2.5 0 3.2L4.8 24.2C3.5 25 2 24.1 2 22.6V3.4z" }))), fe && React.createElement("div", { tabIndex: 0, role: "button", "aria-label": PlayerEvent.Stop, onClick: function() {
      return B && B();
    }, onKeyDown: function() {
      return B && B();
    }, className: V === PlayerState.Stopped ? "lf-player-btn active" : "lf-player-btn", style: ControlButtonStyle }, React.createElement("svg", __assign({}, ve), React.createElement("path", { d: `M2 3.667A1.67 1.67 0 0 1 3.667 2h16.666A1.67 1.67 0 0 1 22 3.667v16.666A1.67 1.67 0 0 1 20.333
            22H3.667A1.67 1.67 0 0 1 2 20.333z` }))), React.createElement(Seeker, { min: 0, step: 1, max: O ? O.totalFrames : 1, value: he || 0, onChange: function(Te) {
      de && k.setState({ activeFrame: Te }, function() {
        de(Te, !1);
      });
    }, onChangeEnd: function(Te) {
      de && k.setState({ activeFrame: Te }, function() {
        de(Te, !1);
      });
    }, showLabels: this.props.showLabels, darkTheme: this.props.darkTheme }), ue && React.createElement("div", { role: "button", className: "lf-player-btn-container" }, React.createElement("input", { style: { outline: "none", border: this.props.darkTheme ? "1px #505050 solid" : "1px #ccc solid", borderRadius: "3px", width: "40px", textAlign: "center", backgroundColor: this.props.darkTheme ? "#505050" : "#ffffff", color: this.props.darkTheme ? "#B9B9B9" : "#999", fontSize: "0.7rem", padding: "0", fontFamily: "inherit" }, type: "text", value: _e, readOnly: !0 })), Q && React.createElement("div", { role: "button", "aria-label": PlayerEvent.Loop, tabIndex: 0, onClick: function() {
      O && K && K(!O.loop);
    }, onKeyDown: function() {
      O && K && K(!O.loop);
    }, className: O.loop ? "lf-player-btn active" : "lf-player-btn", style: ControlButtonStyle }, React.createElement("svg", __assign({}, ve), React.createElement("path", { d: `M12.5 16.8137h-.13v1.8939h4.9696c3.6455 0 6.6113-2.9658 6.6113-6.6116
            0-3.64549-2.9658-6.61131-6.6113-6.61131-.5231 0-.947.42391-.947.94696 0 .52304.4239.94696.947.94696 2.6011 0
            4.7174 2.11634 4.7174 4.71739 0 2.6014-2.1166 4.7177-4.7174 4.7177H12.5zM13.6025
            5.61469v-.13H7.48137C3.83582 5.48469.87 8.45051.87 12.096c0 3.6509 3.17269 6.6117 6.81304 6.6117.52304 0
            .94696-.424.94696-.947 0-.5231-.42392-.947-.94696-.947-2.60804 0-4.91907-2.1231-4.91907-4.7176 0-2.60115
            2.11634-4.71744 4.7174-4.71744h6.12113V5.61469z`, stroke: "#8795A1", strokeWidth: ".26" }), React.createElement("path", { d: `M11.1482
            2.20355h0l-.001-.00116c-.3412-.40061-.9405-.44558-1.33668-.0996h-.00001c-.39526.34519-.43936.94795-.09898
            1.34767l2.51487 3.03683-2.51894 3.06468c-.33872.40088-.29282 1.00363.10347
            1.34723l.08517-.0982-.08517.0982c.17853.1549.39807.2308.61647.2308.2671 0 .5328-.114.72-.3347h0l.0011-.0014
            3.0435-3.68655.0006-.00068c.3035-.35872.3025-.88754-.0019-1.24526l-3.0425-3.65786zM13.9453
            21.7965h0l.001.0011c.3413.4006.9407.4456 1.337.0996h0c.3953-.3452.4395-.9479.099-1.3477l-2.5154-3.0368
            2.5195-3.0647c.3388-.4008.2929-1.0036-.1035-1.3472l-.0852.0982.0852-.0982c-.1786-.1549-.3981-.2308-.6166-.2308-.2671
            0-.5329.114-.7202.3347h0l-.0011.0014-3.0442
            3.6865c-.0001.0003-.0003.0005-.0005.0007-.3036.3587-.3027.8876.0019 1.2453l3.0431 3.6579z`, fill: "#8795A1", stroke: "#8795A1", strokeWidth: ".26" }))), me && React.createElement(Popover, { icon: React.createElement("svg", __assign({}, ve), React.createElement("path", { d: `M12 3.1L6.1 8.6a7.6 7.6 0 00-2.2 4 7.2 7.2 0 00.4 4.4 7.9 7.9 0 003 3.5 8.7 8.7 0 004.7 1.3c1.6 0
            3.2-.5 4.6-1.3s2.4-2 3-3.5a7.2 7.2 0 00.5-4.5 7.6 7.6 0 00-2.2-4L12 3.2zM12 0l7.5 7a9.8 9.8 0 013 5.1
            9.3 9.3 0 01-.6 5.8c-.9 1.8-2.2 3.3-4 4.4A11.2 11.2 0 0112 24a11.2 11.2 0
            01-6-1.7c-1.7-1-3-2.6-3.9-4.4a9.3 9.3 0 01-.6-5.8c.4-2 1.5-3.7 3-5L12 0zM6 14h12c0 1.5-.7 3-1.8 4s-2.6
            1.6-4.2 1.6S9 19 7.8 18s-1.7-2.5-1.7-4z` })) }, React.createElement("div", { slot: "content", className: "lf-popover popover-background" }, React.createElement(ColorPicker, { colorChangedEvent: this.props.colorChangedEvent }))), ge && React.createElement(Popover, { icon: React.createElement("svg", __assign({}, ve), React.createElement("path", { clipRule: "evenodd", d: `M0 3.01A2.983 2.983 0 012.983.027H16.99a2.983 2.983 0 012.983 2.983v14.008a2.982 2.982 0 01-2.983
              2.983H2.983A2.983 2.983 0 010 17.018zm2.983-.941a.941.941 0 00-.942.94v14.01c0
              .52.422.94.942.94H16.99a.94.94 0 00.941-.94V3.008a.941.941 0 00-.94-.94H2.981z`, fillRule: "evenodd" }), React.createElement("path", { d: "M12.229 7.945l-2.07 4.598-2.586-2.605-2.414 2.758v2.146h9.656V11.93z" }), React.createElement("circle", { cx: "7.444", cy: "6.513", r: "2.032" }), React.createElement("path", { d: `M9.561 23.916h11.25a2.929 2.929 0 002.926-2.927V9.954a1.06 1.06 0 10-2.122 0v11.035a.805.805 0
              01-.803.804H9.562a1.061 1.061 0 100 2.123z`, stroke: "#8795a1", strokeWidth: ".215" })) }, React.createElement("div", { slot: "content", className: "lf-popover lf-popover-snapshot", onWheel: function(Te) {
      de && de(_e + (Te.deltaY > 0 ? -1 : 1), !1);
    } }, React.createElement("h5", null, "Frame ", _e), React.createElement("div", { style: { cursor: "pointer", color: "#0FCCCE" }, onClick: this.props.snapshot }, "Download SVG"), React.createElement("div", { style: { cursor: "pointer", color: "#0FCCCE" }, onClick: this.props.snapshot }, "Download PNG"), React.createElement("i", { className: "lf-note" }, "Scroll with mousewheel to find exact frame"))));
  }, P;
})(React.Component);
const LottieEntity = ({ src: m, className: P }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: P, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Player, { autoplay: !0, loop: !0, src: m }) }), formatContractName = (m) => m.toLowerCase().split("_").map((P) => P.charAt(0).toUpperCase() + P.slice(1)).join(" "), DeployerContext = createContext({
  clearContract: () => null
});
function getContractAddress(m) {
  return localStorage.getItem(m);
}
function setContractAddress(m, P) {
  localStorage.setItem(m, P);
}
function removeContractAddress(m) {
  getContractAddress(m) && localStorage.removeItem(m);
}
const DeployerProvider = ({ children: m, metadata: P, constructorArgs: k, constructorName: L, codeHash: O }) => {
  const V = useApi(), { account: he } = useWallet(), K = useMetadata({ requireWasm: !1 }, P), de = useDeployer();
  useTxNotifications(de);
  const ce = useMemo(
    () => {
      var ie;
      return ((ie = P == null ? void 0 : P.contract) == null ? void 0 : ie.name) || "";
    },
    [P]
  ), pe = ce ? `${ce}-address` : "", B = useMemo(() => getContractAddress(pe), [ce]), G = useCallback(() => {
    removeContractAddress(pe);
  }, [ce]), $ = useCallback(() => {
    de.signAndSend(K.abi, L, k, { codeHash: O });
  }, [K.abi]);
  return useEffect(() => {
    V != null && V.api && K.abi && de.dryRun(K.abi, L, k, {
      codeHash: O,
      defaultCaller: !0
    });
  }, [K.abi, V == null ? void 0 : V.api]), useEffect(() => {
    de.contractAddress && de.wasDeployed && isFinalized(de) && setContractAddress(pe, de.contractAddress);
  }, [de.status]), /* @__PURE__ */ jsxRuntimeExports.jsx(
    DeployerContext.Provider,
    {
      value: {
        contractAddress: B || (de.wasDeployed && isFinalized(de) ? de.contractAddress : void 0),
        clearContract: G
      },
      children: B || de.wasDeployed && isFinalized(de) ? m : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row md:justify-center justify-start items-stretch gap-3 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 flex flex-col w-full max-w-md backdrop-blur-sm bg-opacity-70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("hgroup", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: formatContractName(ce) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-bold text-xl", children: de.storageDeposit ? "Let's first deploy the contract!" : "Loading..." })
        ] }),
        de.storageDeposit && /* @__PURE__ */ jsxRuntimeExports.jsx(
          RunResults,
          {
            className: "mt-6 w-full text-xs",
            ...de,
            chainApi: V
          }
        ),
        K.error && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-warning-500 mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "Metadata: " }),
          K.error
        ] }),
        he && de.error && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-warning-500 mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "Deployer: " }),
          de.error
        ] }),
        he ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            disabled: shouldDisableStrict(de) || !de.willBeSuccessful,
            onClick: $,
            className: "w-full mt-6",
            children: isPendingSignature(de) ? "Please sign transaction..." : shouldDisableStrict(de) ? "Deploying..." : "Deploy"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectButton, { className: "w-full mt-6" })
      ] }) }) })
    }
  );
}, useDeployerState = () => useContext(DeployerContext);
var howler = {};
/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
(function(m) {
  (function() {
    var P = function() {
      this.init();
    };
    P.prototype = {
      /**
       * Initialize the global Howler object.
       * @return {Howler}
       */
      init: function() {
        var B = this || k;
        return B._counter = 1e3, B._html5AudioPool = [], B.html5PoolSize = 10, B._codecs = {}, B._howls = [], B._muted = !1, B._volume = 1, B._canPlayEvent = "canplaythrough", B._navigator = typeof window < "u" && window.navigator ? window.navigator : null, B.masterGain = null, B.noAudio = !1, B.usingWebAudio = !0, B.autoSuspend = !0, B.ctx = null, B.autoUnlock = !0, B._setup(), B;
      },
      /**
       * Get/set the global volume for all sounds.
       * @param  {Float} vol Volume from 0.0 to 1.0.
       * @return {Howler/Float}     Returns self or current volume.
       */
      volume: function(B) {
        var G = this || k;
        if (B = parseFloat(B), G.ctx || pe(), typeof B < "u" && B >= 0 && B <= 1) {
          if (G._volume = B, G._muted)
            return G;
          G.usingWebAudio && G.masterGain.gain.setValueAtTime(B, k.ctx.currentTime);
          for (var $ = 0; $ < G._howls.length; $++)
            if (!G._howls[$]._webAudio)
              for (var ie = G._howls[$]._getSoundIds(), fe = 0; fe < ie.length; fe++) {
                var Q = G._howls[$]._soundById(ie[fe]);
                Q && Q._node && (Q._node.volume = Q._volume * B);
              }
          return G;
        }
        return G._volume;
      },
      /**
       * Handle muting and unmuting globally.
       * @param  {Boolean} muted Is muted or not.
       */
      mute: function(B) {
        var G = this || k;
        G.ctx || pe(), G._muted = B, G.usingWebAudio && G.masterGain.gain.setValueAtTime(B ? 0 : G._volume, k.ctx.currentTime);
        for (var $ = 0; $ < G._howls.length; $++)
          if (!G._howls[$]._webAudio)
            for (var ie = G._howls[$]._getSoundIds(), fe = 0; fe < ie.length; fe++) {
              var Q = G._howls[$]._soundById(ie[fe]);
              Q && Q._node && (Q._node.muted = B ? !0 : Q._muted);
            }
        return G;
      },
      /**
       * Handle stopping all sounds globally.
       */
      stop: function() {
        for (var B = this || k, G = 0; G < B._howls.length; G++)
          B._howls[G].stop();
        return B;
      },
      /**
       * Unload and destroy all currently loaded Howl objects.
       * @return {Howler}
       */
      unload: function() {
        for (var B = this || k, G = B._howls.length - 1; G >= 0; G--)
          B._howls[G].unload();
        return B.usingWebAudio && B.ctx && typeof B.ctx.close < "u" && (B.ctx.close(), B.ctx = null, pe()), B;
      },
      /**
       * Check for codec support of specific extension.
       * @param  {String} ext Audio file extention.
       * @return {Boolean}
       */
      codecs: function(B) {
        return (this || k)._codecs[B.replace(/^x-/, "")];
      },
      /**
       * Setup various state values for global tracking.
       * @return {Howler}
       */
      _setup: function() {
        var B = this || k;
        if (B.state = B.ctx && B.ctx.state || "suspended", B._autoSuspend(), !B.usingWebAudio)
          if (typeof Audio < "u")
            try {
              var G = new Audio();
              typeof G.oncanplaythrough > "u" && (B._canPlayEvent = "canplay");
            } catch {
              B.noAudio = !0;
            }
          else
            B.noAudio = !0;
        try {
          var G = new Audio();
          G.muted && (B.noAudio = !0);
        } catch {
        }
        return B.noAudio || B._setupCodecs(), B;
      },
      /**
       * Check for browser support for various codecs and cache the results.
       * @return {Howler}
       */
      _setupCodecs: function() {
        var B = this || k, G = null;
        try {
          G = typeof Audio < "u" ? new Audio() : null;
        } catch {
          return B;
        }
        if (!G || typeof G.canPlayType != "function")
          return B;
        var $ = G.canPlayType("audio/mpeg;").replace(/^no$/, ""), ie = B._navigator ? B._navigator.userAgent : "", fe = ie.match(/OPR\/([0-6].)/g), Q = fe && parseInt(fe[0].split("/")[1], 10) < 33, ue = ie.indexOf("Safari") !== -1 && ie.indexOf("Chrome") === -1, me = ie.match(/Version\/(.*?) /), ge = ue && me && parseInt(me[1], 10) < 15;
        return B._codecs = {
          mp3: !!(!Q && ($ || G.canPlayType("audio/mp3;").replace(/^no$/, ""))),
          mpeg: !!$,
          opus: !!G.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
          ogg: !!G.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
          oga: !!G.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
          wav: !!(G.canPlayType('audio/wav; codecs="1"') || G.canPlayType("audio/wav")).replace(/^no$/, ""),
          aac: !!G.canPlayType("audio/aac;").replace(/^no$/, ""),
          caf: !!G.canPlayType("audio/x-caf;").replace(/^no$/, ""),
          m4a: !!(G.canPlayType("audio/x-m4a;") || G.canPlayType("audio/m4a;") || G.canPlayType("audio/aac;")).replace(/^no$/, ""),
          m4b: !!(G.canPlayType("audio/x-m4b;") || G.canPlayType("audio/m4b;") || G.canPlayType("audio/aac;")).replace(/^no$/, ""),
          mp4: !!(G.canPlayType("audio/x-mp4;") || G.canPlayType("audio/mp4;") || G.canPlayType("audio/aac;")).replace(/^no$/, ""),
          weba: !!(!ge && G.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
          webm: !!(!ge && G.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
          dolby: !!G.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
          flac: !!(G.canPlayType("audio/x-flac;") || G.canPlayType("audio/flac;")).replace(/^no$/, "")
        }, B;
      },
      /**
       * Some browsers/devices will only allow audio to be played after a user interaction.
       * Attempt to automatically unlock audio on the first user interaction.
       * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
       * @return {Howler}
       */
      _unlockAudio: function() {
        var B = this || k;
        if (!(B._audioUnlocked || !B.ctx)) {
          B._audioUnlocked = !1, B.autoUnlock = !1, !B._mobileUnloaded && B.ctx.sampleRate !== 44100 && (B._mobileUnloaded = !0, B.unload()), B._scratchBuffer = B.ctx.createBuffer(1, 1, 22050);
          var G = function($) {
            for (; B._html5AudioPool.length < B.html5PoolSize; )
              try {
                var ie = new Audio();
                ie._unlocked = !0, B._releaseHtml5Audio(ie);
              } catch {
                B.noAudio = !0;
                break;
              }
            for (var fe = 0; fe < B._howls.length; fe++)
              if (!B._howls[fe]._webAudio)
                for (var Q = B._howls[fe]._getSoundIds(), ue = 0; ue < Q.length; ue++) {
                  var me = B._howls[fe]._soundById(Q[ue]);
                  me && me._node && !me._node._unlocked && (me._node._unlocked = !0, me._node.load());
                }
            B._autoResume();
            var ge = B.ctx.createBufferSource();
            ge.buffer = B._scratchBuffer, ge.connect(B.ctx.destination), typeof ge.start > "u" ? ge.noteOn(0) : ge.start(0), typeof B.ctx.resume == "function" && B.ctx.resume(), ge.onended = function() {
              ge.disconnect(0), B._audioUnlocked = !0, document.removeEventListener("touchstart", G, !0), document.removeEventListener("touchend", G, !0), document.removeEventListener("click", G, !0), document.removeEventListener("keydown", G, !0);
              for (var ve = 0; ve < B._howls.length; ve++)
                B._howls[ve]._emit("unlock");
            };
          };
          return document.addEventListener("touchstart", G, !0), document.addEventListener("touchend", G, !0), document.addEventListener("click", G, !0), document.addEventListener("keydown", G, !0), B;
        }
      },
      /**
       * Get an unlocked HTML5 Audio object from the pool. If none are left,
       * return a new Audio object and throw a warning.
       * @return {Audio} HTML5 Audio object.
       */
      _obtainHtml5Audio: function() {
        var B = this || k;
        if (B._html5AudioPool.length)
          return B._html5AudioPool.pop();
        var G = new Audio().play();
        return G && typeof Promise < "u" && (G instanceof Promise || typeof G.then == "function") && G.catch(function() {
          console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
        }), new Audio();
      },
      /**
       * Return an activated HTML5 Audio object to the pool.
       * @return {Howler}
       */
      _releaseHtml5Audio: function(B) {
        var G = this || k;
        return B._unlocked && G._html5AudioPool.push(B), G;
      },
      /**
       * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
       * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
       * @return {Howler}
       */
      _autoSuspend: function() {
        var B = this;
        if (!(!B.autoSuspend || !B.ctx || typeof B.ctx.suspend > "u" || !k.usingWebAudio)) {
          for (var G = 0; G < B._howls.length; G++)
            if (B._howls[G]._webAudio) {
              for (var $ = 0; $ < B._howls[G]._sounds.length; $++)
                if (!B._howls[G]._sounds[$]._paused)
                  return B;
            }
          return B._suspendTimer && clearTimeout(B._suspendTimer), B._suspendTimer = setTimeout(function() {
            if (B.autoSuspend) {
              B._suspendTimer = null, B.state = "suspending";
              var ie = function() {
                B.state = "suspended", B._resumeAfterSuspend && (delete B._resumeAfterSuspend, B._autoResume());
              };
              B.ctx.suspend().then(ie, ie);
            }
          }, 3e4), B;
        }
      },
      /**
       * Automatically resume the Web Audio AudioContext when a new sound is played.
       * @return {Howler}
       */
      _autoResume: function() {
        var B = this;
        if (!(!B.ctx || typeof B.ctx.resume > "u" || !k.usingWebAudio))
          return B.state === "running" && B.ctx.state !== "interrupted" && B._suspendTimer ? (clearTimeout(B._suspendTimer), B._suspendTimer = null) : B.state === "suspended" || B.state === "running" && B.ctx.state === "interrupted" ? (B.ctx.resume().then(function() {
            B.state = "running";
            for (var G = 0; G < B._howls.length; G++)
              B._howls[G]._emit("resume");
          }), B._suspendTimer && (clearTimeout(B._suspendTimer), B._suspendTimer = null)) : B.state === "suspending" && (B._resumeAfterSuspend = !0), B;
      }
    };
    var k = new P(), L = function(B) {
      var G = this;
      if (!B.src || B.src.length === 0) {
        console.error("An array of source files must be passed with any new Howl.");
        return;
      }
      G.init(B);
    };
    L.prototype = {
      /**
       * Initialize a new Howl group object.
       * @param  {Object} o Passed in properties for this group.
       * @return {Howl}
       */
      init: function(B) {
        var G = this;
        return k.ctx || pe(), G._autoplay = B.autoplay || !1, G._format = typeof B.format != "string" ? B.format : [B.format], G._html5 = B.html5 || !1, G._muted = B.mute || !1, G._loop = B.loop || !1, G._pool = B.pool || 5, G._preload = typeof B.preload == "boolean" || B.preload === "metadata" ? B.preload : !0, G._rate = B.rate || 1, G._sprite = B.sprite || {}, G._src = typeof B.src != "string" ? B.src : [B.src], G._volume = B.volume !== void 0 ? B.volume : 1, G._xhr = {
          method: B.xhr && B.xhr.method ? B.xhr.method : "GET",
          headers: B.xhr && B.xhr.headers ? B.xhr.headers : null,
          withCredentials: B.xhr && B.xhr.withCredentials ? B.xhr.withCredentials : !1
        }, G._duration = 0, G._state = "unloaded", G._sounds = [], G._endTimers = {}, G._queue = [], G._playLock = !1, G._onend = B.onend ? [{ fn: B.onend }] : [], G._onfade = B.onfade ? [{ fn: B.onfade }] : [], G._onload = B.onload ? [{ fn: B.onload }] : [], G._onloaderror = B.onloaderror ? [{ fn: B.onloaderror }] : [], G._onplayerror = B.onplayerror ? [{ fn: B.onplayerror }] : [], G._onpause = B.onpause ? [{ fn: B.onpause }] : [], G._onplay = B.onplay ? [{ fn: B.onplay }] : [], G._onstop = B.onstop ? [{ fn: B.onstop }] : [], G._onmute = B.onmute ? [{ fn: B.onmute }] : [], G._onvolume = B.onvolume ? [{ fn: B.onvolume }] : [], G._onrate = B.onrate ? [{ fn: B.onrate }] : [], G._onseek = B.onseek ? [{ fn: B.onseek }] : [], G._onunlock = B.onunlock ? [{ fn: B.onunlock }] : [], G._onresume = [], G._webAudio = k.usingWebAudio && !G._html5, typeof k.ctx < "u" && k.ctx && k.autoUnlock && k._unlockAudio(), k._howls.push(G), G._autoplay && G._queue.push({
          event: "play",
          action: function() {
            G.play();
          }
        }), G._preload && G._preload !== "none" && G.load(), G;
      },
      /**
       * Load the audio file.
       * @return {Howler}
       */
      load: function() {
        var B = this, G = null;
        if (k.noAudio) {
          B._emit("loaderror", null, "No audio support.");
          return;
        }
        typeof B._src == "string" && (B._src = [B._src]);
        for (var $ = 0; $ < B._src.length; $++) {
          var ie, fe;
          if (B._format && B._format[$])
            ie = B._format[$];
          else {
            if (fe = B._src[$], typeof fe != "string") {
              B._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
              continue;
            }
            ie = /^data:audio\/([^;,]+);/i.exec(fe), ie || (ie = /\.([^.]+)$/.exec(fe.split("?", 1)[0])), ie && (ie = ie[1].toLowerCase());
          }
          if (ie || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), ie && k.codecs(ie)) {
            G = B._src[$];
            break;
          }
        }
        if (!G) {
          B._emit("loaderror", null, "No codec support for selected audio sources.");
          return;
        }
        return B._src = G, B._state = "loading", window.location.protocol === "https:" && G.slice(0, 5) === "http:" && (B._html5 = !0, B._webAudio = !1), new O(B), B._webAudio && he(B), B;
      },
      /**
       * Play a sound or resume previous playback.
       * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
       * @param  {Boolean} internal Internal Use: true prevents event firing.
       * @return {Number}          Sound ID.
       */
      play: function(B, G) {
        var $ = this, ie = null;
        if (typeof B == "number")
          ie = B, B = null;
        else {
          if (typeof B == "string" && $._state === "loaded" && !$._sprite[B])
            return null;
          if (typeof B > "u" && (B = "__default", !$._playLock)) {
            for (var fe = 0, Q = 0; Q < $._sounds.length; Q++)
              $._sounds[Q]._paused && !$._sounds[Q]._ended && (fe++, ie = $._sounds[Q]._id);
            fe === 1 ? B = null : ie = null;
          }
        }
        var ue = ie ? $._soundById(ie) : $._inactiveSound();
        if (!ue)
          return null;
        if (ie && !B && (B = ue._sprite || "__default"), $._state !== "loaded") {
          ue._sprite = B, ue._ended = !1;
          var me = ue._id;
          return $._queue.push({
            event: "play",
            action: function() {
              $.play(me);
            }
          }), me;
        }
        if (ie && !ue._paused)
          return G || $._loadQueue("play"), ue._id;
        $._webAudio && k._autoResume();
        var ge = Math.max(0, ue._seek > 0 ? ue._seek : $._sprite[B][0] / 1e3), ve = Math.max(0, ($._sprite[B][0] + $._sprite[B][1]) / 1e3 - ge), _e = ve * 1e3 / Math.abs(ue._rate), Te = $._sprite[B][0] / 1e3, Ce = ($._sprite[B][0] + $._sprite[B][1]) / 1e3;
        ue._sprite = B, ue._ended = !1;
        var Ae = function() {
          ue._paused = !1, ue._seek = ge, ue._start = Te, ue._stop = Ce, ue._loop = !!(ue._loop || $._sprite[B][2]);
        };
        if (ge >= Ce) {
          $._ended(ue);
          return;
        }
        var Ie = ue._node;
        if ($._webAudio) {
          var Me = function() {
            $._playLock = !1, Ae(), $._refreshBuffer(ue);
            var Ue = ue._muted || $._muted ? 0 : ue._volume;
            Ie.gain.setValueAtTime(Ue, k.ctx.currentTime), ue._playStart = k.ctx.currentTime, typeof Ie.bufferSource.start > "u" ? ue._loop ? Ie.bufferSource.noteGrainOn(0, ge, 86400) : Ie.bufferSource.noteGrainOn(0, ge, ve) : ue._loop ? Ie.bufferSource.start(0, ge, 86400) : Ie.bufferSource.start(0, ge, ve), _e !== 1 / 0 && ($._endTimers[ue._id] = setTimeout($._ended.bind($, ue), _e)), G || setTimeout(function() {
              $._emit("play", ue._id), $._loadQueue();
            }, 0);
          };
          k.state === "running" && k.ctx.state !== "interrupted" ? Me() : ($._playLock = !0, $.once("resume", Me), $._clearTimer(ue._id));
        } else {
          var ke = function() {
            Ie.currentTime = ge, Ie.muted = ue._muted || $._muted || k._muted || Ie.muted, Ie.volume = ue._volume * k.volume(), Ie.playbackRate = ue._rate;
            try {
              var Ue = Ie.play();
              if (Ue && typeof Promise < "u" && (Ue instanceof Promise || typeof Ue.then == "function") ? ($._playLock = !0, Ae(), Ue.then(function() {
                $._playLock = !1, Ie._unlocked = !0, G ? $._loadQueue() : $._emit("play", ue._id);
              }).catch(function() {
                $._playLock = !1, $._emit("playerror", ue._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), ue._ended = !0, ue._paused = !0;
              })) : G || ($._playLock = !1, Ae(), $._emit("play", ue._id)), Ie.playbackRate = ue._rate, Ie.paused) {
                $._emit("playerror", ue._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                return;
              }
              B !== "__default" || ue._loop ? $._endTimers[ue._id] = setTimeout($._ended.bind($, ue), _e) : ($._endTimers[ue._id] = function() {
                $._ended(ue), Ie.removeEventListener("ended", $._endTimers[ue._id], !1);
              }, Ie.addEventListener("ended", $._endTimers[ue._id], !1));
            } catch (lt) {
              $._emit("playerror", ue._id, lt);
            }
          };
          Ie.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (Ie.src = $._src, Ie.load());
          var at = window && window.ejecta || !Ie.readyState && k._navigator.isCocoonJS;
          if (Ie.readyState >= 3 || at)
            ke();
          else {
            $._playLock = !0, $._state = "loading";
            var st = function() {
              $._state = "loaded", ke(), Ie.removeEventListener(k._canPlayEvent, st, !1);
            };
            Ie.addEventListener(k._canPlayEvent, st, !1), $._clearTimer(ue._id);
          }
        }
        return ue._id;
      },
      /**
       * Pause playback and save current position.
       * @param  {Number} id The sound ID (empty to pause all in group).
       * @return {Howl}
       */
      pause: function(B) {
        var G = this;
        if (G._state !== "loaded" || G._playLock)
          return G._queue.push({
            event: "pause",
            action: function() {
              G.pause(B);
            }
          }), G;
        for (var $ = G._getSoundIds(B), ie = 0; ie < $.length; ie++) {
          G._clearTimer($[ie]);
          var fe = G._soundById($[ie]);
          if (fe && !fe._paused && (fe._seek = G.seek($[ie]), fe._rateSeek = 0, fe._paused = !0, G._stopFade($[ie]), fe._node))
            if (G._webAudio) {
              if (!fe._node.bufferSource)
                continue;
              typeof fe._node.bufferSource.stop > "u" ? fe._node.bufferSource.noteOff(0) : fe._node.bufferSource.stop(0), G._cleanBuffer(fe._node);
            } else
              (!isNaN(fe._node.duration) || fe._node.duration === 1 / 0) && fe._node.pause();
          arguments[1] || G._emit("pause", fe ? fe._id : null);
        }
        return G;
      },
      /**
       * Stop playback and reset to start.
       * @param  {Number} id The sound ID (empty to stop all in group).
       * @param  {Boolean} internal Internal Use: true prevents event firing.
       * @return {Howl}
       */
      stop: function(B, G) {
        var $ = this;
        if ($._state !== "loaded" || $._playLock)
          return $._queue.push({
            event: "stop",
            action: function() {
              $.stop(B);
            }
          }), $;
        for (var ie = $._getSoundIds(B), fe = 0; fe < ie.length; fe++) {
          $._clearTimer(ie[fe]);
          var Q = $._soundById(ie[fe]);
          Q && (Q._seek = Q._start || 0, Q._rateSeek = 0, Q._paused = !0, Q._ended = !0, $._stopFade(ie[fe]), Q._node && ($._webAudio ? Q._node.bufferSource && (typeof Q._node.bufferSource.stop > "u" ? Q._node.bufferSource.noteOff(0) : Q._node.bufferSource.stop(0), $._cleanBuffer(Q._node)) : (!isNaN(Q._node.duration) || Q._node.duration === 1 / 0) && (Q._node.currentTime = Q._start || 0, Q._node.pause(), Q._node.duration === 1 / 0 && $._clearSound(Q._node))), G || $._emit("stop", Q._id));
        }
        return $;
      },
      /**
       * Mute/unmute a single sound or all sounds in this Howl group.
       * @param  {Boolean} muted Set to true to mute and false to unmute.
       * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
       * @return {Howl}
       */
      mute: function(B, G) {
        var $ = this;
        if ($._state !== "loaded" || $._playLock)
          return $._queue.push({
            event: "mute",
            action: function() {
              $.mute(B, G);
            }
          }), $;
        if (typeof G > "u")
          if (typeof B == "boolean")
            $._muted = B;
          else
            return $._muted;
        for (var ie = $._getSoundIds(G), fe = 0; fe < ie.length; fe++) {
          var Q = $._soundById(ie[fe]);
          Q && (Q._muted = B, Q._interval && $._stopFade(Q._id), $._webAudio && Q._node ? Q._node.gain.setValueAtTime(B ? 0 : Q._volume, k.ctx.currentTime) : Q._node && (Q._node.muted = k._muted ? !0 : B), $._emit("mute", Q._id));
        }
        return $;
      },
      /**
       * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
       *   volume() -> Returns the group's volume value.
       *   volume(id) -> Returns the sound id's current volume.
       *   volume(vol) -> Sets the volume of all sounds in this Howl group.
       *   volume(vol, id) -> Sets the volume of passed sound id.
       * @return {Howl/Number} Returns self or current volume.
       */
      volume: function() {
        var B = this, G = arguments, $, ie;
        if (G.length === 0)
          return B._volume;
        if (G.length === 1 || G.length === 2 && typeof G[1] > "u") {
          var fe = B._getSoundIds(), Q = fe.indexOf(G[0]);
          Q >= 0 ? ie = parseInt(G[0], 10) : $ = parseFloat(G[0]);
        } else
          G.length >= 2 && ($ = parseFloat(G[0]), ie = parseInt(G[1], 10));
        var ue;
        if (typeof $ < "u" && $ >= 0 && $ <= 1) {
          if (B._state !== "loaded" || B._playLock)
            return B._queue.push({
              event: "volume",
              action: function() {
                B.volume.apply(B, G);
              }
            }), B;
          typeof ie > "u" && (B._volume = $), ie = B._getSoundIds(ie);
          for (var me = 0; me < ie.length; me++)
            ue = B._soundById(ie[me]), ue && (ue._volume = $, G[2] || B._stopFade(ie[me]), B._webAudio && ue._node && !ue._muted ? ue._node.gain.setValueAtTime($, k.ctx.currentTime) : ue._node && !ue._muted && (ue._node.volume = $ * k.volume()), B._emit("volume", ue._id));
        } else
          return ue = ie ? B._soundById(ie) : B._sounds[0], ue ? ue._volume : 0;
        return B;
      },
      /**
       * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
       * @param  {Number} from The value to fade from (0.0 to 1.0).
       * @param  {Number} to   The volume to fade to (0.0 to 1.0).
       * @param  {Number} len  Time in milliseconds to fade.
       * @param  {Number} id   The sound id (omit to fade all sounds).
       * @return {Howl}
       */
      fade: function(B, G, $, ie) {
        var fe = this;
        if (fe._state !== "loaded" || fe._playLock)
          return fe._queue.push({
            event: "fade",
            action: function() {
              fe.fade(B, G, $, ie);
            }
          }), fe;
        B = Math.min(Math.max(0, parseFloat(B)), 1), G = Math.min(Math.max(0, parseFloat(G)), 1), $ = parseFloat($), fe.volume(B, ie);
        for (var Q = fe._getSoundIds(ie), ue = 0; ue < Q.length; ue++) {
          var me = fe._soundById(Q[ue]);
          if (me) {
            if (ie || fe._stopFade(Q[ue]), fe._webAudio && !me._muted) {
              var ge = k.ctx.currentTime, ve = ge + $ / 1e3;
              me._volume = B, me._node.gain.setValueAtTime(B, ge), me._node.gain.linearRampToValueAtTime(G, ve);
            }
            fe._startFadeInterval(me, B, G, $, Q[ue], typeof ie > "u");
          }
        }
        return fe;
      },
      /**
       * Starts the internal interval to fade a sound.
       * @param  {Object} sound Reference to sound to fade.
       * @param  {Number} from The value to fade from (0.0 to 1.0).
       * @param  {Number} to   The volume to fade to (0.0 to 1.0).
       * @param  {Number} len  Time in milliseconds to fade.
       * @param  {Number} id   The sound id to fade.
       * @param  {Boolean} isGroup   If true, set the volume on the group.
       */
      _startFadeInterval: function(B, G, $, ie, fe, Q) {
        var ue = this, me = G, ge = $ - G, ve = Math.abs(ge / 0.01), _e = Math.max(4, ve > 0 ? ie / ve : ie), Te = Date.now();
        B._fadeTo = $, B._interval = setInterval(function() {
          var Ce = (Date.now() - Te) / ie;
          Te = Date.now(), me += ge * Ce, me = Math.round(me * 100) / 100, ge < 0 ? me = Math.max($, me) : me = Math.min($, me), ue._webAudio ? B._volume = me : ue.volume(me, B._id, !0), Q && (ue._volume = me), ($ < G && me <= $ || $ > G && me >= $) && (clearInterval(B._interval), B._interval = null, B._fadeTo = null, ue.volume($, B._id), ue._emit("fade", B._id));
        }, _e);
      },
      /**
       * Internal method that stops the currently playing fade when
       * a new fade starts, volume is changed or the sound is stopped.
       * @param  {Number} id The sound id.
       * @return {Howl}
       */
      _stopFade: function(B) {
        var G = this, $ = G._soundById(B);
        return $ && $._interval && (G._webAudio && $._node.gain.cancelScheduledValues(k.ctx.currentTime), clearInterval($._interval), $._interval = null, G.volume($._fadeTo, B), $._fadeTo = null, G._emit("fade", B)), G;
      },
      /**
       * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
       *   loop() -> Returns the group's loop value.
       *   loop(id) -> Returns the sound id's loop value.
       *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
       *   loop(loop, id) -> Sets the loop value of passed sound id.
       * @return {Howl/Boolean} Returns self or current loop value.
       */
      loop: function() {
        var B = this, G = arguments, $, ie, fe;
        if (G.length === 0)
          return B._loop;
        if (G.length === 1)
          if (typeof G[0] == "boolean")
            $ = G[0], B._loop = $;
          else
            return fe = B._soundById(parseInt(G[0], 10)), fe ? fe._loop : !1;
        else
          G.length === 2 && ($ = G[0], ie = parseInt(G[1], 10));
        for (var Q = B._getSoundIds(ie), ue = 0; ue < Q.length; ue++)
          fe = B._soundById(Q[ue]), fe && (fe._loop = $, B._webAudio && fe._node && fe._node.bufferSource && (fe._node.bufferSource.loop = $, $ && (fe._node.bufferSource.loopStart = fe._start || 0, fe._node.bufferSource.loopEnd = fe._stop, B.playing(Q[ue]) && (B.pause(Q[ue], !0), B.play(Q[ue], !0)))));
        return B;
      },
      /**
       * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
       *   rate() -> Returns the first sound node's current playback rate.
       *   rate(id) -> Returns the sound id's current playback rate.
       *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
       *   rate(rate, id) -> Sets the playback rate of passed sound id.
       * @return {Howl/Number} Returns self or the current playback rate.
       */
      rate: function() {
        var B = this, G = arguments, $, ie;
        if (G.length === 0)
          ie = B._sounds[0]._id;
        else if (G.length === 1) {
          var fe = B._getSoundIds(), Q = fe.indexOf(G[0]);
          Q >= 0 ? ie = parseInt(G[0], 10) : $ = parseFloat(G[0]);
        } else
          G.length === 2 && ($ = parseFloat(G[0]), ie = parseInt(G[1], 10));
        var ue;
        if (typeof $ == "number") {
          if (B._state !== "loaded" || B._playLock)
            return B._queue.push({
              event: "rate",
              action: function() {
                B.rate.apply(B, G);
              }
            }), B;
          typeof ie > "u" && (B._rate = $), ie = B._getSoundIds(ie);
          for (var me = 0; me < ie.length; me++)
            if (ue = B._soundById(ie[me]), ue) {
              B.playing(ie[me]) && (ue._rateSeek = B.seek(ie[me]), ue._playStart = B._webAudio ? k.ctx.currentTime : ue._playStart), ue._rate = $, B._webAudio && ue._node && ue._node.bufferSource ? ue._node.bufferSource.playbackRate.setValueAtTime($, k.ctx.currentTime) : ue._node && (ue._node.playbackRate = $);
              var ge = B.seek(ie[me]), ve = (B._sprite[ue._sprite][0] + B._sprite[ue._sprite][1]) / 1e3 - ge, _e = ve * 1e3 / Math.abs(ue._rate);
              (B._endTimers[ie[me]] || !ue._paused) && (B._clearTimer(ie[me]), B._endTimers[ie[me]] = setTimeout(B._ended.bind(B, ue), _e)), B._emit("rate", ue._id);
            }
        } else
          return ue = B._soundById(ie), ue ? ue._rate : B._rate;
        return B;
      },
      /**
       * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
       *   seek() -> Returns the first sound node's current seek position.
       *   seek(id) -> Returns the sound id's current seek position.
       *   seek(seek) -> Sets the seek position of the first sound node.
       *   seek(seek, id) -> Sets the seek position of passed sound id.
       * @return {Howl/Number} Returns self or the current seek position.
       */
      seek: function() {
        var B = this, G = arguments, $, ie;
        if (G.length === 0)
          B._sounds.length && (ie = B._sounds[0]._id);
        else if (G.length === 1) {
          var fe = B._getSoundIds(), Q = fe.indexOf(G[0]);
          Q >= 0 ? ie = parseInt(G[0], 10) : B._sounds.length && (ie = B._sounds[0]._id, $ = parseFloat(G[0]));
        } else
          G.length === 2 && ($ = parseFloat(G[0]), ie = parseInt(G[1], 10));
        if (typeof ie > "u")
          return 0;
        if (typeof $ == "number" && (B._state !== "loaded" || B._playLock))
          return B._queue.push({
            event: "seek",
            action: function() {
              B.seek.apply(B, G);
            }
          }), B;
        var ue = B._soundById(ie);
        if (ue)
          if (typeof $ == "number" && $ >= 0) {
            var me = B.playing(ie);
            me && B.pause(ie, !0), ue._seek = $, ue._ended = !1, B._clearTimer(ie), !B._webAudio && ue._node && !isNaN(ue._node.duration) && (ue._node.currentTime = $);
            var ge = function() {
              me && B.play(ie, !0), B._emit("seek", ie);
            };
            if (me && !B._webAudio) {
              var ve = function() {
                B._playLock ? setTimeout(ve, 0) : ge();
              };
              setTimeout(ve, 0);
            } else
              ge();
          } else if (B._webAudio) {
            var _e = B.playing(ie) ? k.ctx.currentTime - ue._playStart : 0, Te = ue._rateSeek ? ue._rateSeek - ue._seek : 0;
            return ue._seek + (Te + _e * Math.abs(ue._rate));
          } else
            return ue._node.currentTime;
        return B;
      },
      /**
       * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
       * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
       * @return {Boolean} True if playing and false if not.
       */
      playing: function(B) {
        var G = this;
        if (typeof B == "number") {
          var $ = G._soundById(B);
          return $ ? !$._paused : !1;
        }
        for (var ie = 0; ie < G._sounds.length; ie++)
          if (!G._sounds[ie]._paused)
            return !0;
        return !1;
      },
      /**
       * Get the duration of this sound. Passing a sound id will return the sprite duration.
       * @param  {Number} id The sound id to check. If none is passed, return full source duration.
       * @return {Number} Audio duration in seconds.
       */
      duration: function(B) {
        var G = this, $ = G._duration, ie = G._soundById(B);
        return ie && ($ = G._sprite[ie._sprite][1] / 1e3), $;
      },
      /**
       * Returns the current loaded state of this Howl.
       * @return {String} 'unloaded', 'loading', 'loaded'
       */
      state: function() {
        return this._state;
      },
      /**
       * Unload and destroy the current Howl object.
       * This will immediately stop all sound instances attached to this group.
       */
      unload: function() {
        for (var B = this, G = B._sounds, $ = 0; $ < G.length; $++)
          G[$]._paused || B.stop(G[$]._id), B._webAudio || (B._clearSound(G[$]._node), G[$]._node.removeEventListener("error", G[$]._errorFn, !1), G[$]._node.removeEventListener(k._canPlayEvent, G[$]._loadFn, !1), G[$]._node.removeEventListener("ended", G[$]._endFn, !1), k._releaseHtml5Audio(G[$]._node)), delete G[$]._node, B._clearTimer(G[$]._id);
        var ie = k._howls.indexOf(B);
        ie >= 0 && k._howls.splice(ie, 1);
        var fe = !0;
        for ($ = 0; $ < k._howls.length; $++)
          if (k._howls[$]._src === B._src || B._src.indexOf(k._howls[$]._src) >= 0) {
            fe = !1;
            break;
          }
        return V && fe && delete V[B._src], k.noAudio = !1, B._state = "unloaded", B._sounds = [], B = null, null;
      },
      /**
       * Listen to a custom event.
       * @param  {String}   event Event name.
       * @param  {Function} fn    Listener to call.
       * @param  {Number}   id    (optional) Only listen to events for this sound.
       * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
       * @return {Howl}
       */
      on: function(B, G, $, ie) {
        var fe = this, Q = fe["_on" + B];
        return typeof G == "function" && Q.push(ie ? { id: $, fn: G, once: ie } : { id: $, fn: G }), fe;
      },
      /**
       * Remove a custom event. Call without parameters to remove all events.
       * @param  {String}   event Event name.
       * @param  {Function} fn    Listener to remove. Leave empty to remove all.
       * @param  {Number}   id    (optional) Only remove events for this sound.
       * @return {Howl}
       */
      off: function(B, G, $) {
        var ie = this, fe = ie["_on" + B], Q = 0;
        if (typeof G == "number" && ($ = G, G = null), G || $)
          for (Q = 0; Q < fe.length; Q++) {
            var ue = $ === fe[Q].id;
            if (G === fe[Q].fn && ue || !G && ue) {
              fe.splice(Q, 1);
              break;
            }
          }
        else if (B)
          ie["_on" + B] = [];
        else {
          var me = Object.keys(ie);
          for (Q = 0; Q < me.length; Q++)
            me[Q].indexOf("_on") === 0 && Array.isArray(ie[me[Q]]) && (ie[me[Q]] = []);
        }
        return ie;
      },
      /**
       * Listen to a custom event and remove it once fired.
       * @param  {String}   event Event name.
       * @param  {Function} fn    Listener to call.
       * @param  {Number}   id    (optional) Only listen to events for this sound.
       * @return {Howl}
       */
      once: function(B, G, $) {
        var ie = this;
        return ie.on(B, G, $, 1), ie;
      },
      /**
       * Emit all events of a specific type and pass the sound id.
       * @param  {String} event Event name.
       * @param  {Number} id    Sound ID.
       * @param  {Number} msg   Message to go with event.
       * @return {Howl}
       */
      _emit: function(B, G, $) {
        for (var ie = this, fe = ie["_on" + B], Q = fe.length - 1; Q >= 0; Q--)
          (!fe[Q].id || fe[Q].id === G || B === "load") && (setTimeout((function(ue) {
            ue.call(this, G, $);
          }).bind(ie, fe[Q].fn), 0), fe[Q].once && ie.off(B, fe[Q].fn, fe[Q].id));
        return ie._loadQueue(B), ie;
      },
      /**
       * Queue of actions initiated before the sound has loaded.
       * These will be called in sequence, with the next only firing
       * after the previous has finished executing (even if async like play).
       * @return {Howl}
       */
      _loadQueue: function(B) {
        var G = this;
        if (G._queue.length > 0) {
          var $ = G._queue[0];
          $.event === B && (G._queue.shift(), G._loadQueue()), B || $.action();
        }
        return G;
      },
      /**
       * Fired when playback ends at the end of the duration.
       * @param  {Sound} sound The sound object to work with.
       * @return {Howl}
       */
      _ended: function(B) {
        var G = this, $ = B._sprite;
        if (!G._webAudio && B._node && !B._node.paused && !B._node.ended && B._node.currentTime < B._stop)
          return setTimeout(G._ended.bind(G, B), 100), G;
        var ie = !!(B._loop || G._sprite[$][2]);
        if (G._emit("end", B._id), !G._webAudio && ie && G.stop(B._id, !0).play(B._id), G._webAudio && ie) {
          G._emit("play", B._id), B._seek = B._start || 0, B._rateSeek = 0, B._playStart = k.ctx.currentTime;
          var fe = (B._stop - B._start) * 1e3 / Math.abs(B._rate);
          G._endTimers[B._id] = setTimeout(G._ended.bind(G, B), fe);
        }
        return G._webAudio && !ie && (B._paused = !0, B._ended = !0, B._seek = B._start || 0, B._rateSeek = 0, G._clearTimer(B._id), G._cleanBuffer(B._node), k._autoSuspend()), !G._webAudio && !ie && G.stop(B._id, !0), G;
      },
      /**
       * Clear the end timer for a sound playback.
       * @param  {Number} id The sound ID.
       * @return {Howl}
       */
      _clearTimer: function(B) {
        var G = this;
        if (G._endTimers[B]) {
          if (typeof G._endTimers[B] != "function")
            clearTimeout(G._endTimers[B]);
          else {
            var $ = G._soundById(B);
            $ && $._node && $._node.removeEventListener("ended", G._endTimers[B], !1);
          }
          delete G._endTimers[B];
        }
        return G;
      },
      /**
       * Return the sound identified by this ID, or return null.
       * @param  {Number} id Sound ID
       * @return {Object}    Sound object or null.
       */
      _soundById: function(B) {
        for (var G = this, $ = 0; $ < G._sounds.length; $++)
          if (B === G._sounds[$]._id)
            return G._sounds[$];
        return null;
      },
      /**
       * Return an inactive sound from the pool or create a new one.
       * @return {Sound} Sound playback object.
       */
      _inactiveSound: function() {
        var B = this;
        B._drain();
        for (var G = 0; G < B._sounds.length; G++)
          if (B._sounds[G]._ended)
            return B._sounds[G].reset();
        return new O(B);
      },
      /**
       * Drain excess inactive sounds from the pool.
       */
      _drain: function() {
        var B = this, G = B._pool, $ = 0, ie = 0;
        if (!(B._sounds.length < G)) {
          for (ie = 0; ie < B._sounds.length; ie++)
            B._sounds[ie]._ended && $++;
          for (ie = B._sounds.length - 1; ie >= 0; ie--) {
            if ($ <= G)
              return;
            B._sounds[ie]._ended && (B._webAudio && B._sounds[ie]._node && B._sounds[ie]._node.disconnect(0), B._sounds.splice(ie, 1), $--);
          }
        }
      },
      /**
       * Get all ID's from the sounds pool.
       * @param  {Number} id Only return one ID if one is passed.
       * @return {Array}    Array of IDs.
       */
      _getSoundIds: function(B) {
        var G = this;
        if (typeof B > "u") {
          for (var $ = [], ie = 0; ie < G._sounds.length; ie++)
            $.push(G._sounds[ie]._id);
          return $;
        } else
          return [B];
      },
      /**
       * Load the sound back into the buffer source.
       * @param  {Sound} sound The sound object to work with.
       * @return {Howl}
       */
      _refreshBuffer: function(B) {
        var G = this;
        return B._node.bufferSource = k.ctx.createBufferSource(), B._node.bufferSource.buffer = V[G._src], B._panner ? B._node.bufferSource.connect(B._panner) : B._node.bufferSource.connect(B._node), B._node.bufferSource.loop = B._loop, B._loop && (B._node.bufferSource.loopStart = B._start || 0, B._node.bufferSource.loopEnd = B._stop || 0), B._node.bufferSource.playbackRate.setValueAtTime(B._rate, k.ctx.currentTime), G;
      },
      /**
       * Prevent memory leaks by cleaning up the buffer source after playback.
       * @param  {Object} node Sound's audio node containing the buffer source.
       * @return {Howl}
       */
      _cleanBuffer: function(B) {
        var G = this, $ = k._navigator && k._navigator.vendor.indexOf("Apple") >= 0;
        if (k._scratchBuffer && B.bufferSource && (B.bufferSource.onended = null, B.bufferSource.disconnect(0), $))
          try {
            B.bufferSource.buffer = k._scratchBuffer;
          } catch {
          }
        return B.bufferSource = null, G;
      },
      /**
       * Set the source to a 0-second silence to stop any downloading (except in IE).
       * @param  {Object} node Audio node to clear.
       */
      _clearSound: function(B) {
        var G = /MSIE |Trident\//.test(k._navigator && k._navigator.userAgent);
        G || (B.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
      }
    };
    var O = function(B) {
      this._parent = B, this.init();
    };
    O.prototype = {
      /**
       * Initialize a new Sound object.
       * @return {Sound}
       */
      init: function() {
        var B = this, G = B._parent;
        return B._muted = G._muted, B._loop = G._loop, B._volume = G._volume, B._rate = G._rate, B._seek = 0, B._paused = !0, B._ended = !0, B._sprite = "__default", B._id = ++k._counter, G._sounds.push(B), B.create(), B;
      },
      /**
       * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
       * @return {Sound}
       */
      create: function() {
        var B = this, G = B._parent, $ = k._muted || B._muted || B._parent._muted ? 0 : B._volume;
        return G._webAudio ? (B._node = typeof k.ctx.createGain > "u" ? k.ctx.createGainNode() : k.ctx.createGain(), B._node.gain.setValueAtTime($, k.ctx.currentTime), B._node.paused = !0, B._node.connect(k.masterGain)) : k.noAudio || (B._node = k._obtainHtml5Audio(), B._errorFn = B._errorListener.bind(B), B._node.addEventListener("error", B._errorFn, !1), B._loadFn = B._loadListener.bind(B), B._node.addEventListener(k._canPlayEvent, B._loadFn, !1), B._endFn = B._endListener.bind(B), B._node.addEventListener("ended", B._endFn, !1), B._node.src = G._src, B._node.preload = G._preload === !0 ? "auto" : G._preload, B._node.volume = $ * k.volume(), B._node.load()), B;
      },
      /**
       * Reset the parameters of this sound to the original state (for recycle).
       * @return {Sound}
       */
      reset: function() {
        var B = this, G = B._parent;
        return B._muted = G._muted, B._loop = G._loop, B._volume = G._volume, B._rate = G._rate, B._seek = 0, B._rateSeek = 0, B._paused = !0, B._ended = !0, B._sprite = "__default", B._id = ++k._counter, B;
      },
      /**
       * HTML5 Audio error listener callback.
       */
      _errorListener: function() {
        var B = this;
        B._parent._emit("loaderror", B._id, B._node.error ? B._node.error.code : 0), B._node.removeEventListener("error", B._errorFn, !1);
      },
      /**
       * HTML5 Audio canplaythrough listener callback.
       */
      _loadListener: function() {
        var B = this, G = B._parent;
        G._duration = Math.ceil(B._node.duration * 10) / 10, Object.keys(G._sprite).length === 0 && (G._sprite = { __default: [0, G._duration * 1e3] }), G._state !== "loaded" && (G._state = "loaded", G._emit("load"), G._loadQueue()), B._node.removeEventListener(k._canPlayEvent, B._loadFn, !1);
      },
      /**
       * HTML5 Audio ended listener callback.
       */
      _endListener: function() {
        var B = this, G = B._parent;
        G._duration === 1 / 0 && (G._duration = Math.ceil(B._node.duration * 10) / 10, G._sprite.__default[1] === 1 / 0 && (G._sprite.__default[1] = G._duration * 1e3), G._ended(B)), B._node.removeEventListener("ended", B._endFn, !1);
      }
    };
    var V = {}, he = function(B) {
      var G = B._src;
      if (V[G]) {
        B._duration = V[G].duration, ce(B);
        return;
      }
      if (/^data:[^;]+;base64,/.test(G)) {
        for (var $ = atob(G.split(",")[1]), ie = new Uint8Array($.length), fe = 0; fe < $.length; ++fe)
          ie[fe] = $.charCodeAt(fe);
        de(ie.buffer, B);
      } else {
        var Q = new XMLHttpRequest();
        Q.open(B._xhr.method, G, !0), Q.withCredentials = B._xhr.withCredentials, Q.responseType = "arraybuffer", B._xhr.headers && Object.keys(B._xhr.headers).forEach(function(ue) {
          Q.setRequestHeader(ue, B._xhr.headers[ue]);
        }), Q.onload = function() {
          var ue = (Q.status + "")[0];
          if (ue !== "0" && ue !== "2" && ue !== "3") {
            B._emit("loaderror", null, "Failed loading audio file with status: " + Q.status + ".");
            return;
          }
          de(Q.response, B);
        }, Q.onerror = function() {
          B._webAudio && (B._html5 = !0, B._webAudio = !1, B._sounds = [], delete V[G], B.load());
        }, K(Q);
      }
    }, K = function(B) {
      try {
        B.send();
      } catch {
        B.onerror();
      }
    }, de = function(B, G) {
      var $ = function() {
        G._emit("loaderror", null, "Decoding audio data failed.");
      }, ie = function(fe) {
        fe && G._sounds.length > 0 ? (V[G._src] = fe, ce(G, fe)) : $();
      };
      typeof Promise < "u" && k.ctx.decodeAudioData.length === 1 ? k.ctx.decodeAudioData(B).then(ie).catch($) : k.ctx.decodeAudioData(B, ie, $);
    }, ce = function(B, G) {
      G && !B._duration && (B._duration = G.duration), Object.keys(B._sprite).length === 0 && (B._sprite = { __default: [0, B._duration * 1e3] }), B._state !== "loaded" && (B._state = "loaded", B._emit("load"), B._loadQueue());
    }, pe = function() {
      if (k.usingWebAudio) {
        try {
          typeof AudioContext < "u" ? k.ctx = new AudioContext() : typeof webkitAudioContext < "u" ? k.ctx = new webkitAudioContext() : k.usingWebAudio = !1;
        } catch {
          k.usingWebAudio = !1;
        }
        k.ctx || (k.usingWebAudio = !1);
        var B = /iP(hone|od|ad)/.test(k._navigator && k._navigator.platform), G = k._navigator && k._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/), $ = G ? parseInt(G[1], 10) : null;
        if (B && $ && $ < 9) {
          var ie = /safari/.test(k._navigator && k._navigator.userAgent.toLowerCase());
          k._navigator && !ie && (k.usingWebAudio = !1);
        }
        k.usingWebAudio && (k.masterGain = typeof k.ctx.createGain > "u" ? k.ctx.createGainNode() : k.ctx.createGain(), k.masterGain.gain.setValueAtTime(k._muted ? 0 : k._volume, k.ctx.currentTime), k.masterGain.connect(k.ctx.destination)), k._setup();
      }
    };
    m.Howler = k, m.Howl = L, typeof commonjsGlobal < "u" ? (commonjsGlobal.HowlerGlobal = P, commonjsGlobal.Howler = k, commonjsGlobal.Howl = L, commonjsGlobal.Sound = O) : typeof window < "u" && (window.HowlerGlobal = P, window.Howler = k, window.Howl = L, window.Sound = O);
  })();
  /*!
   *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
   *  
   *  howler.js v2.2.3
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   */
  (function() {
    HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(k) {
      var L = this;
      if (!L.ctx || !L.ctx.listener)
        return L;
      for (var O = L._howls.length - 1; O >= 0; O--)
        L._howls[O].stereo(k);
      return L;
    }, HowlerGlobal.prototype.pos = function(k, L, O) {
      var V = this;
      if (!V.ctx || !V.ctx.listener)
        return V;
      if (L = typeof L != "number" ? V._pos[1] : L, O = typeof O != "number" ? V._pos[2] : O, typeof k == "number")
        V._pos = [k, L, O], typeof V.ctx.listener.positionX < "u" ? (V.ctx.listener.positionX.setTargetAtTime(V._pos[0], Howler.ctx.currentTime, 0.1), V.ctx.listener.positionY.setTargetAtTime(V._pos[1], Howler.ctx.currentTime, 0.1), V.ctx.listener.positionZ.setTargetAtTime(V._pos[2], Howler.ctx.currentTime, 0.1)) : V.ctx.listener.setPosition(V._pos[0], V._pos[1], V._pos[2]);
      else
        return V._pos;
      return V;
    }, HowlerGlobal.prototype.orientation = function(k, L, O, V, he, K) {
      var de = this;
      if (!de.ctx || !de.ctx.listener)
        return de;
      var ce = de._orientation;
      if (L = typeof L != "number" ? ce[1] : L, O = typeof O != "number" ? ce[2] : O, V = typeof V != "number" ? ce[3] : V, he = typeof he != "number" ? ce[4] : he, K = typeof K != "number" ? ce[5] : K, typeof k == "number")
        de._orientation = [k, L, O, V, he, K], typeof de.ctx.listener.forwardX < "u" ? (de.ctx.listener.forwardX.setTargetAtTime(k, Howler.ctx.currentTime, 0.1), de.ctx.listener.forwardY.setTargetAtTime(L, Howler.ctx.currentTime, 0.1), de.ctx.listener.forwardZ.setTargetAtTime(O, Howler.ctx.currentTime, 0.1), de.ctx.listener.upX.setTargetAtTime(V, Howler.ctx.currentTime, 0.1), de.ctx.listener.upY.setTargetAtTime(he, Howler.ctx.currentTime, 0.1), de.ctx.listener.upZ.setTargetAtTime(K, Howler.ctx.currentTime, 0.1)) : de.ctx.listener.setOrientation(k, L, O, V, he, K);
      else
        return ce;
      return de;
    }, Howl.prototype.init = function(k) {
      return function(L) {
        var O = this;
        return O._orientation = L.orientation || [1, 0, 0], O._stereo = L.stereo || null, O._pos = L.pos || null, O._pannerAttr = {
          coneInnerAngle: typeof L.coneInnerAngle < "u" ? L.coneInnerAngle : 360,
          coneOuterAngle: typeof L.coneOuterAngle < "u" ? L.coneOuterAngle : 360,
          coneOuterGain: typeof L.coneOuterGain < "u" ? L.coneOuterGain : 0,
          distanceModel: typeof L.distanceModel < "u" ? L.distanceModel : "inverse",
          maxDistance: typeof L.maxDistance < "u" ? L.maxDistance : 1e4,
          panningModel: typeof L.panningModel < "u" ? L.panningModel : "HRTF",
          refDistance: typeof L.refDistance < "u" ? L.refDistance : 1,
          rolloffFactor: typeof L.rolloffFactor < "u" ? L.rolloffFactor : 1
        }, O._onstereo = L.onstereo ? [{ fn: L.onstereo }] : [], O._onpos = L.onpos ? [{ fn: L.onpos }] : [], O._onorientation = L.onorientation ? [{ fn: L.onorientation }] : [], k.call(this, L);
      };
    }(Howl.prototype.init), Howl.prototype.stereo = function(k, L) {
      var O = this;
      if (!O._webAudio)
        return O;
      if (O._state !== "loaded")
        return O._queue.push({
          event: "stereo",
          action: function() {
            O.stereo(k, L);
          }
        }), O;
      var V = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
      if (typeof L > "u")
        if (typeof k == "number")
          O._stereo = k, O._pos = [k, 0, 0];
        else
          return O._stereo;
      for (var he = O._getSoundIds(L), K = 0; K < he.length; K++) {
        var de = O._soundById(he[K]);
        if (de)
          if (typeof k == "number")
            de._stereo = k, de._pos = [k, 0, 0], de._node && (de._pannerAttr.panningModel = "equalpower", (!de._panner || !de._panner.pan) && P(de, V), V === "spatial" ? typeof de._panner.positionX < "u" ? (de._panner.positionX.setValueAtTime(k, Howler.ctx.currentTime), de._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), de._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : de._panner.setPosition(k, 0, 0) : de._panner.pan.setValueAtTime(k, Howler.ctx.currentTime)), O._emit("stereo", de._id);
          else
            return de._stereo;
      }
      return O;
    }, Howl.prototype.pos = function(k, L, O, V) {
      var he = this;
      if (!he._webAudio)
        return he;
      if (he._state !== "loaded")
        return he._queue.push({
          event: "pos",
          action: function() {
            he.pos(k, L, O, V);
          }
        }), he;
      if (L = typeof L != "number" ? 0 : L, O = typeof O != "number" ? -0.5 : O, typeof V > "u")
        if (typeof k == "number")
          he._pos = [k, L, O];
        else
          return he._pos;
      for (var K = he._getSoundIds(V), de = 0; de < K.length; de++) {
        var ce = he._soundById(K[de]);
        if (ce)
          if (typeof k == "number")
            ce._pos = [k, L, O], ce._node && ((!ce._panner || ce._panner.pan) && P(ce, "spatial"), typeof ce._panner.positionX < "u" ? (ce._panner.positionX.setValueAtTime(k, Howler.ctx.currentTime), ce._panner.positionY.setValueAtTime(L, Howler.ctx.currentTime), ce._panner.positionZ.setValueAtTime(O, Howler.ctx.currentTime)) : ce._panner.setPosition(k, L, O)), he._emit("pos", ce._id);
          else
            return ce._pos;
      }
      return he;
    }, Howl.prototype.orientation = function(k, L, O, V) {
      var he = this;
      if (!he._webAudio)
        return he;
      if (he._state !== "loaded")
        return he._queue.push({
          event: "orientation",
          action: function() {
            he.orientation(k, L, O, V);
          }
        }), he;
      if (L = typeof L != "number" ? he._orientation[1] : L, O = typeof O != "number" ? he._orientation[2] : O, typeof V > "u")
        if (typeof k == "number")
          he._orientation = [k, L, O];
        else
          return he._orientation;
      for (var K = he._getSoundIds(V), de = 0; de < K.length; de++) {
        var ce = he._soundById(K[de]);
        if (ce)
          if (typeof k == "number")
            ce._orientation = [k, L, O], ce._node && (ce._panner || (ce._pos || (ce._pos = he._pos || [0, 0, -0.5]), P(ce, "spatial")), typeof ce._panner.orientationX < "u" ? (ce._panner.orientationX.setValueAtTime(k, Howler.ctx.currentTime), ce._panner.orientationY.setValueAtTime(L, Howler.ctx.currentTime), ce._panner.orientationZ.setValueAtTime(O, Howler.ctx.currentTime)) : ce._panner.setOrientation(k, L, O)), he._emit("orientation", ce._id);
          else
            return ce._orientation;
      }
      return he;
    }, Howl.prototype.pannerAttr = function() {
      var k = this, L = arguments, O, V, he;
      if (!k._webAudio)
        return k;
      if (L.length === 0)
        return k._pannerAttr;
      if (L.length === 1)
        if (typeof L[0] == "object")
          O = L[0], typeof V > "u" && (O.pannerAttr || (O.pannerAttr = {
            coneInnerAngle: O.coneInnerAngle,
            coneOuterAngle: O.coneOuterAngle,
            coneOuterGain: O.coneOuterGain,
            distanceModel: O.distanceModel,
            maxDistance: O.maxDistance,
            refDistance: O.refDistance,
            rolloffFactor: O.rolloffFactor,
            panningModel: O.panningModel
          }), k._pannerAttr = {
            coneInnerAngle: typeof O.pannerAttr.coneInnerAngle < "u" ? O.pannerAttr.coneInnerAngle : k._coneInnerAngle,
            coneOuterAngle: typeof O.pannerAttr.coneOuterAngle < "u" ? O.pannerAttr.coneOuterAngle : k._coneOuterAngle,
            coneOuterGain: typeof O.pannerAttr.coneOuterGain < "u" ? O.pannerAttr.coneOuterGain : k._coneOuterGain,
            distanceModel: typeof O.pannerAttr.distanceModel < "u" ? O.pannerAttr.distanceModel : k._distanceModel,
            maxDistance: typeof O.pannerAttr.maxDistance < "u" ? O.pannerAttr.maxDistance : k._maxDistance,
            refDistance: typeof O.pannerAttr.refDistance < "u" ? O.pannerAttr.refDistance : k._refDistance,
            rolloffFactor: typeof O.pannerAttr.rolloffFactor < "u" ? O.pannerAttr.rolloffFactor : k._rolloffFactor,
            panningModel: typeof O.pannerAttr.panningModel < "u" ? O.pannerAttr.panningModel : k._panningModel
          });
        else
          return he = k._soundById(parseInt(L[0], 10)), he ? he._pannerAttr : k._pannerAttr;
      else
        L.length === 2 && (O = L[0], V = parseInt(L[1], 10));
      for (var K = k._getSoundIds(V), de = 0; de < K.length; de++)
        if (he = k._soundById(K[de]), he) {
          var ce = he._pannerAttr;
          ce = {
            coneInnerAngle: typeof O.coneInnerAngle < "u" ? O.coneInnerAngle : ce.coneInnerAngle,
            coneOuterAngle: typeof O.coneOuterAngle < "u" ? O.coneOuterAngle : ce.coneOuterAngle,
            coneOuterGain: typeof O.coneOuterGain < "u" ? O.coneOuterGain : ce.coneOuterGain,
            distanceModel: typeof O.distanceModel < "u" ? O.distanceModel : ce.distanceModel,
            maxDistance: typeof O.maxDistance < "u" ? O.maxDistance : ce.maxDistance,
            refDistance: typeof O.refDistance < "u" ? O.refDistance : ce.refDistance,
            rolloffFactor: typeof O.rolloffFactor < "u" ? O.rolloffFactor : ce.rolloffFactor,
            panningModel: typeof O.panningModel < "u" ? O.panningModel : ce.panningModel
          };
          var pe = he._panner;
          pe ? (pe.coneInnerAngle = ce.coneInnerAngle, pe.coneOuterAngle = ce.coneOuterAngle, pe.coneOuterGain = ce.coneOuterGain, pe.distanceModel = ce.distanceModel, pe.maxDistance = ce.maxDistance, pe.refDistance = ce.refDistance, pe.rolloffFactor = ce.rolloffFactor, pe.panningModel = ce.panningModel) : (he._pos || (he._pos = k._pos || [0, 0, -0.5]), P(he, "spatial"));
        }
      return k;
    }, Sound.prototype.init = function(k) {
      return function() {
        var L = this, O = L._parent;
        L._orientation = O._orientation, L._stereo = O._stereo, L._pos = O._pos, L._pannerAttr = O._pannerAttr, k.call(this), L._stereo ? O.stereo(L._stereo) : L._pos && O.pos(L._pos[0], L._pos[1], L._pos[2], L._id);
      };
    }(Sound.prototype.init), Sound.prototype.reset = function(k) {
      return function() {
        var L = this, O = L._parent;
        return L._orientation = O._orientation, L._stereo = O._stereo, L._pos = O._pos, L._pannerAttr = O._pannerAttr, L._stereo ? O.stereo(L._stereo) : L._pos ? O.pos(L._pos[0], L._pos[1], L._pos[2], L._id) : L._panner && (L._panner.disconnect(0), L._panner = void 0, O._refreshBuffer(L)), k.call(this);
      };
    }(Sound.prototype.reset);
    var P = function(k, L) {
      L = L || "spatial", L === "spatial" ? (k._panner = Howler.ctx.createPanner(), k._panner.coneInnerAngle = k._pannerAttr.coneInnerAngle, k._panner.coneOuterAngle = k._pannerAttr.coneOuterAngle, k._panner.coneOuterGain = k._pannerAttr.coneOuterGain, k._panner.distanceModel = k._pannerAttr.distanceModel, k._panner.maxDistance = k._pannerAttr.maxDistance, k._panner.refDistance = k._pannerAttr.refDistance, k._panner.rolloffFactor = k._pannerAttr.rolloffFactor, k._panner.panningModel = k._pannerAttr.panningModel, typeof k._panner.positionX < "u" ? (k._panner.positionX.setValueAtTime(k._pos[0], Howler.ctx.currentTime), k._panner.positionY.setValueAtTime(k._pos[1], Howler.ctx.currentTime), k._panner.positionZ.setValueAtTime(k._pos[2], Howler.ctx.currentTime)) : k._panner.setPosition(k._pos[0], k._pos[1], k._pos[2]), typeof k._panner.orientationX < "u" ? (k._panner.orientationX.setValueAtTime(k._orientation[0], Howler.ctx.currentTime), k._panner.orientationY.setValueAtTime(k._orientation[1], Howler.ctx.currentTime), k._panner.orientationZ.setValueAtTime(k._orientation[2], Howler.ctx.currentTime)) : k._panner.setOrientation(k._orientation[0], k._orientation[1], k._orientation[2])) : (k._panner = Howler.ctx.createStereoPanner(), k._panner.pan.setValueAtTime(k._stereo, Howler.ctx.currentTime)), k._panner.connect(k._node), k._paused || k._parent.pause(k._id, !0).play(k._id, !0);
    };
  })();
})(howler);
const UIContext = createContext({
  setView: () => null,
  view: "contract",
  showScreen: !0,
  setShowClearContract: () => null,
  showClearContract: !0,
  setPlayAudio: () => null,
  playLedSwitch: () => null,
  playAudio: !0,
  setScreenPosition: () => null,
  screenPosition: void 0
}), UIProvider = ({ children: m }) => {
  const [P, k] = useState(), [L, O] = useState(), [V, he] = useState(!1), [K, de] = useState(!1), [ce, pe] = useState("contract"), B = useMemo(() => ce !== "off", [ce]), [G, $] = useState();
  useEffect(() => {
    O(
      new howler.Howl({
        src: "https://github.com/paritytech/ink-examples/raw/sr/submarine/ui/src/assets/audio/led.wav",
        volume: 0.8,
        html5: !0
      })
    ), k(
      new howler.Howl({
        src: "https://github.com/paritytech/ink-examples/raw/sr/submarine/ui/src/assets/audio/underwater.mp3",
        loop: !0,
        volume: 1,
        html5: !0
      }).on("load", () => {
        de(!0);
      })
    );
  }, []);
  const ie = useCallback(() => {
    K && (L == null || L.play());
  }, [L, K]);
  return useEffect(() => {
    K ? P == null || P.play() : P == null || P.stop();
  }, [K]), /* @__PURE__ */ jsxRuntimeExports.jsx(
    UIContext.Provider,
    {
      value: {
        view: ce,
        setView: pe,
        showScreen: B,
        screenPosition: G,
        setScreenPosition: $,
        showClearContract: V,
        setShowClearContract: he,
        playAudio: K,
        setPlayAudio: de,
        playLedSwitch: ie
      },
      children: m
    }
  );
}, screenMask = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTUyLjQ5IiBoZWlnaHQ9Ijg5NC42OCI+PHBhdGggZD0iTTEwOTUuMDcgMjUxLjAxQzEwMDkuMzUgMTEzLjQyIDgzNS44OCAxNS4wOCA2MzEuMjUuMDJhNy44MyA3LjgzIDAgMCAwLTYuNTMgMi42OGMtOC4yNiA5LjU5LTIxLjA4IDE1LjU3LTM0Ljk2IDE3Ljk2LTMuNDQuNi02Ljk2Ljk4LTEwLjQ4IDEuMTMtLjMxIDEuMjItMS4xOSAyLjI3LTIuMDQgMy4zLS44NiAxLjAyLTEuODIgMi4xNy0xLjgyIDMuMSAwIC41NSAxLjA5IDEuNTggMS44OCAyLjMzIDEuNDYgMS4zOCAzLjI3IDMuMSAzLjI3IDUuNDggMCAyLjEtMS4xOSAzLjc2LTIuMjUgNS4yMi0uNjkuOTQtMS40IDEuOTItMS40IDIuNTkgMCAuMTIgMCAuNDYuNTIgMS4wMy4yNi4zLjQxLjY1LjQzIDEuMDIgMS4zNC42MSAyLjI3IDEuOTcgMi4yNyAzLjU0IDAgMS40NC0uNzggMi43LTEuOTQgMy4zNyAxMi4yNiAxMC44NSAyNC42NiAyMS41OSAxNS43NyAzMy40My41OSAzLjEzLjY5IDYuMjYuMDkgOS40MS0xLjAxIDUuMy0zLjkgOS4wNy03LjY0IDExLjM0IDIuNTIgMi4zIDQuNTMgNC43MiA2LjA5IDcuMiAxMC40MiAxNi42NC40OCAzNi4zMi0xMi4yMyA0Ny4xOGwtLjAyLjAyYTQ1Ljc1MiA0NS43NTIgMCAwIDEtMy44OCAyLjk5Yy01LjAzIDMuNDUtOS45OSA1LjY1LTEzLjY0IDYuODUtMi4zNC43Ni00LjE0IDEuMTEtNS4wOSAxLjExLTEuMTYgMC0uMjUtMS42NCAxLjMyLTQuMjkgMS43LTIuODkgNC4xOC02Ljk2IDUuNjUtMTEuNDUgMS4wOS0zLjMgMS4yNi02LjI1LjktOS4wMi0uNTYtNC4yMi0yLjM2LTguMDMtNC4xLTEyLjA1LTEuMTMtLjYzLTIuMTYtMi4yMy0yLjU4LTQuMjEtLjIyLTEuMDYtLjIzLTIuMDgtLjA3LTIuOTItLjU2LTEuOTctLjk2LTQuMDUtMS4wOS02LjMtLjQzLTcuMTkgMi43NC0xMC45NiA1LjcyLTEyLjkgMS40Ny0uOTYgMi45LTEuNDcgMy44My0xLjczLTMuMzctMS43Ni02LjE4LTQuNTQtNy43NS04LjI5LTEuNjUtMy45NC0xLjYxLTguMjctLjU3LTEyLjc5LTkuMTgtMTEuOTkgMy4wNC0yMi41NiAxNS40NC0zMy41NGEzLjg4NCAzLjg4NCAwIDAgMS0yLjAxLTMuNDFjMC0xLjM1LjY5LTIuNTQgMS43My0zLjI1LS40NC0uNzUtLjY2LTEuNTMtLjY2LTIuMzQgMC0xLjgxIDEuMS0zLjMyIDIuMDYtNC42NS44Mi0xLjEzIDEuNTktMi4xOSAxLjU5LTMuMTYgMC0uODctMS4xLTEuOTItMi4xNy0yLjkzLTEuNC0xLjMzLTIuOTgtMi44My0yLjk4LTQuODggMC0yLjIgMS40Ni0zLjk1IDIuNjMtNS4zNS4yMy0uMjcuNTMtLjYzLjc5LS45Ny01LjM1LS4wMi0xMC42OC0uNTUtMTUuODEtMS41Ny0xMi45LTIuNTktMjQuNTEtOC4zOS0zMS44NS0xNy4zOC0xLjYzLTItNC4xNC0zLjA4LTYuNzEtMi44OUMyMjguNjUgMjEuNjcgMCAyMTMuMjMgMCA0NDYuMzNjMCA0Ni43NCA5LjE5IDkxLjggMjYuMjUgMTM0LjE2bDExLjc4IDEuMDdjMTAuMTUuOTMgMTcuOTIgOS40NCAxNy45MiAxOS42M3YzOC4wOGMxNS41OSAyNS40MiAzNC4xNyA0OS41MSA1NS4zOCA3Mi0uMzMtMy43My0uNTQtNi43Ny0uNTctOC41Ny0uMDQtMi40IDcuMDctNC43NCAxNy4xNi02LjY5bDEuOTgtOS4wMmMuNTMtMi40MSAyLjYxLTQuMjMgNS4xOC00LjUzbDMzLjQ5LTMuOTNjMi41Ni0uMyA1LjA3LjgzIDYuNDUgMi45bDYuNDMgOS42OWM1Ljc0LjEgMTAuMDQuNTggMTEuODQgMS41MSA5LjE2IDQuNzYgMTEuNzggNDMuMDMgMTIuMTkgNTIuODUuMTcgNC4xNy0xNS43IDcuMjctMzQuMTIgOC43NWwuOTkgMTEuODdjMjEuMDMgMTYuMDkgNDMuNjMgMzAuOTMgNjcuNjIgNDQuMzUgMS42NS0uNDYgMy40Ni0uODggNS4zNS0xLjI1LTMuMzUtMTYuMzYtOS4xNC0yOS42NC0yNS43OC00Ni4wMy0yLjMzLTIuMDMgOS41LTE0LjA1IDExLjU3LTExLjc1IDIwLjE4IDE5Ljg4IDI2LjkxIDM2Ljc2IDMwLjY3IDU2LjA2IDguODUtLjEyIDE2LjIyIDEuMyAxNi42MyA1LjA3LjE5IDEuNzkuNDEgMy43Ni42MyA1Ljc5LjAxLjAxLjAxLjAyLjAxLjAzLjQ5IDQuNDMgMS4wMiA5LjE2IDEuNDUgMTIuODMgODYuNDYgNDAuMzEgMTg3LjYzIDYzLjQ4IDI5NS43NSA2My40OHMyMDYuMDItMjIuNDMgMjkxLjU1LTYxLjU0Yy4wMy0uMDEuMDctLjAzLjEtLjA1bDMyLjEtMTUuODJjMzUuMTYtMTguNiA2Ny41My00MC4xNiA5Ni41My02NC4yMmwuNTYtOS40Yy0xNC4yOC0xLjI2LTIxLjU5LTMuNzQtMjMuNjMtOS4xNy0uNjMtMS42OC0xLjI0LTQuMzMtMS43Ny03LjU2bC0zLjcxLS4xYy00Ljc0LS4xMy04LjUxLTQtOC41MS04Ljc1di0xMC4zMmMwLTQuNTMgMy40Ni04LjMyIDcuOTgtOC43MmwyLjA3LS4xOGMuMDEtMy4xMy4xMy02LjA2LjM3LTguNTguODUtOC45NSAxMS40LTEwLjYxIDI1LjQ5LTEwLjc2bDIuNC04LjM2Yy44Ni0zIDMuNjEtNS4wNyA2Ljc0LTUuMDdoMjUuMzRhNy4wMSA3LjAxIDAgMCAxIDYuNSA0LjM2bDMuNjYgOC45OGMxMS45NC4wNSAyMC40NyAxLjA2IDIyLjY0IDYuMTguMTEuMjYuMjEuNTMuMzEuODMgMzYuNS00NC42OSA2My4xMS05NC43NCA3Ny40My0xNDguMzF2LTEwLjg4YzAtNC4wNiAxLjkxLTcuNzIgNC45My0xMC4wNSA0LjcxLTIzLjA4IDcuMTYtNDYuNzUgNy4xNi03MC44NiAwLTcwLjAyLTIwLjYzLTEzNi4yOC01Ny40Mi0xOTUuMzJaIiBzdHlsZT0iZmlsbDojYjhhZWZmIi8+PC9zdmc+", ManageWallet = () => {
  const { account: m, disconnect: P } = useWallet(), { setView: k } = useUI();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConnectWallet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Accounts, {}),
    m && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          className: "mx-auto mt-6 w-full",
          onClick: () => k("contract"),
          children: "View Contract"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mx-auto mt-6 w-full", onClick: P, children: "Disconnect" })
    ] })
  ] });
}, Screen = ({ children: m }) => {
  const { view: P, showScreen: k, screenPosition: L } = useUI();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: classNames("absolute", k && "screenlines"),
      style: {
        maskImage: `url("${screenMask}")`,
        WebkitMaskImage: `url("${screenMask}")`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100%",
        maskRepeat: "no-repeat",
        maskSize: "100%",
        ...L
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-32 h-full overflow-y-scroll", children: [
        P === "contract" && m,
        P === "wallet" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center h-full justify-center w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mx-auto w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ManageWallet, {}) }) })
      ] })
    }
  );
}, ScreenDarkener = () => {
  const { showScreen: m } = useUI();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: classNames(
        "absolute left-0 right-0 top-0 bottom-0 transition duration-75",
        m ? "bg-brand-1000/60" : "bg-transparent"
      )
    }
  );
}, Submarine = () => {
  const {
    setView: m,
    view: P,
    setScreenPosition: k,
    setPlayAudio: L,
    playAudio: O,
    playLedSwitch: V
  } = useUI(), { account: he } = useWallet(), K = "fill-brand-1000 hover:fill-brand-1000/90 cursor-pointer transition duration-75", de = "fill-brand-950 hover:fill-brand-950 cursor-auto", ce = React.useCallback(() => {
    V(), L(!O);
  }, [V, O]), pe = React.useCallback(() => {
    if (V(), P === "off") {
      m("contract");
      return;
    }
    m("off");
  }, [V, P]), B = React.useCallback(() => {
    m("contract"), V();
  }, [V]), G = React.useCallback(() => {
    V(), m("wallet");
  }, [V]), $ = React.useCallback(() => {
    const Q = "https://use.ink/faucet", ue = he ? `${Q}?acc=${he.address}` : Q;
    window.open(ue, "_blank");
  }, [he]), ie = useRef(null), fe = useCallback(() => {
    ie != null && ie.current && k({
      top: ie.current.getBoundingClientRect().top,
      left: ie.current.getBoundingClientRect().left,
      right: ie.current.getBoundingClientRect().right,
      bottom: ie.current.getBoundingClientRect().bottom,
      width: ie.current.getBoundingClientRect().width,
      height: ie.current.getBoundingClientRect().height
    });
  }, []);
  return useEffect(() => (fe(), window.addEventListener("resize", fe), () => window.removeEventListener("resize", fe)), [fe]), /* rome-ignore lint/a11y/noSvgWithoutTitle: We don't want a tooltip to appear */
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1920.01 1830.89",
      width: "100%",
      className: classNames("absolute left-0 right-0 bottom-0", 2),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M960 341.69C353.55 341.69 0 727.6 0 727.6v211.12c116.08 64.47 223.49 108.29 241.27 322.54 17.76 214.12-2.86 401.21-80.96 465.48C92.95 1782.18 0 1781.72 0 1781.72v49.17h1920v-49.17s-92.95.46-160.31-54.98c-78.1-64.27-98.72-251.36-80.96-465.48 17.78-214.25 125.19-258.07 241.27-322.54V727.6s-353.55-385.91-960-385.91Zm-.63 1450.75c-318.26 0-576.25-200.73-576.25-448.35 0-233.1 228.65-424.66 520.97-446.3 2.57-.19 5.08.89 6.71 2.89 20.63 25.27 75.01 25.34 97.04-.22a7.83 7.83 0 0 1 6.53-2.68c292.45 21.53 521.24 213.13 521.24 446.31 0 247.62-257.99 448.35-576.24 448.35Zm591.99-850.05c-68.21-40.12-314.11-176.54-592.99-176.54s-524.79 136.42-593 176.54c-68.2 40.11-87.82 17.95-167.05-47.3s-96.8-99.88-69.87-130.4c23.81-26.99 250.61-259.06 660.33-312.24 4.62-.6 9.15 1.71 11.39 5.8 31.94 58.47 21.68 66.03 158.2 66.03s126.25-7.56 158.19-66.03a11.34 11.34 0 0 1 11.39-5.8c409.72 53.18 636.52 285.25 660.33 312.24 26.93 30.52 9.36 65.15-69.87 130.4s-98.84 87.41-167.05 47.3Z",
            style: {
              fill: "#b8aeff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "#8d7cf7"
            },
            d: "M1049.75 1830.89H868.89l8.92-21.42 81.51-1.93 81.51 1.93 8.92 21.42zM630.52 1807.07c24.89 9.12 50.98 17.07 78.03 23.82h-12.04c-23.13-6.12-45.52-13.13-67.02-21.01-99.06-36.29-176.9-89.16-231.37-157.13l2.34-1.87c54.12 67.54 131.52 120.09 230.06 156.19ZM1519.3 1652.77c-53.4 64.53-138.47 118.29-246.01 155.47-24.75 8.55-50.29 16.12-76.45 22.65h-12.68c30.27-7.15 59.74-15.66 88.15-25.48 107.02-37.01 191.63-90.45 244.68-154.55l2.31 1.91Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M624.55 1822.44c8.17 2.94 16.46 5.76 24.88 8.45h-9.65c-5.47-1.82-10.89-3.7-16.25-5.63-100.79-36.29-179.99-89.14-235.42-157.09l2.33-1.9c55.07 67.52 133.84 120.06 234.11 156.17ZM1529.31 1668.18c-54.37 64.54-140.99 118.31-250.49 155.49-7.34 2.49-14.74 4.9-22.21 7.22h-10.28c10.64-3.18 21.15-6.54 31.53-10.06 108.98-37 195.14-90.46 249.15-154.58l2.3 1.93Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1037.39 300.08H889.05c9.77-5.24 17.38-11.23 23.3-18.56 10.26-12.69 15.47-29.39 18.08-53.17.52-4.72.94-9.72 1.27-15.03.76-12 1.09-25.56 1.22-40.94.05-6.42.07-13.17.07-20.25h53.41c0 10.98-.02 20.96.03 30.08.06 11.21.24 21.12.72 29.99.7 13.36 2.08 24.37 4.74 33.95 3.85 13.88 10.4 24.75 21.53 35.37 6.37 6.1 14.24 12.11 23.97 18.56Z",
            style: {
              fill: "#b8aeff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M986.43 182.21c-11.04 1.81-33.58 3.22-53.51-9.83.05-6.42.07-13.17.07-20.25h53.41c0 10.98-.02 20.96.03 30.08ZM991.89 246.15c-9.69-8.44-28.12-18.19-61.46-17.8.52-4.72.94-9.72 1.27-15.03l55.45-1.12c.7 13.36 2.08 24.37 4.74 33.95Z",
            style: {
              fill: "#9e90fc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M396.38 946.53c-22.59 86.1 72.07 56.15 76.99 129.2-17.47 24.45-23.47 39.42-23.47 39.42-111.39-28.3-117.4-135.86-117.4-135.86l63.88-32.76ZM1523.76 946.59c-62.38 15.54 17.91 96.7-84.95 118.5l44.33 56.59c88.01-36.93 158.73-37.17 134.08-148.71-29.95 0-93.46-26.38-93.46-26.38Z",
            style: {
              fill: "#e2dcfe"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: 925.82,
            y: 193.57,
            width: 67.46,
            height: 26.91,
            rx: 7.04,
            ry: 7.04,
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M867.98 299.62s6.79-28.62-6.22-50.42c16.65-8.47-4.41-16.4-4.41-16.4 20.21-14.52 6.2-31.4 6.2-31.4",
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeLinejoin: "round",
              strokeWidth: 4
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#352994",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: 4
            },
            d: "m871.61 196.58-16.04 8.95"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1099.44 248.55-7.39 6.07a14.183 14.183 0 0 0-5.14 9.95l-2.89 41.25 14.29 7.58 1.12-64.83Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1098.32 305.8c1.89-78.4.97-132.8 8.36-143.42 7.39-10.62 23.1-24.63 23.1-24.63",
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeMiterlimit: 10,
              strokeWidth: 4
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1133.33,
            cy: 133.24,
            rx: 9.13,
            ry: 10.59,
            transform: "rotate(-70.36 1133.363 133.22)",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M979.92 164.62c-39.33 11.24-79.87-9.93-90.55-47.29-4.86-17.03-2.68-34.49 4.86-49.51a73.74 73.74 0 0 1 14.21-19.45c8.79-8.66 19.95-15.36 32.83-19.04 28.33-8.09 57.29.63 75.27 20.11 5.95 6.46 10.7 14.1 13.81 22.7.54 1.47 1.02 2.97 1.46 4.49 10.68 37.36-12.56 76.76-51.89 87.99Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 962.23,
            cy: 101.35,
            rx: 45.89,
            ry: 48.31,
            transform: "rotate(-86.21 962.222 101.351)",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1030.35 72.14-22.92 11.39-10.47-14.5 19.58-19.59c5.95 6.46 10.7 14.1 13.81 22.7ZM927.07 68.98l-9.61 13.05-23.23-14.21a73.74 73.74 0 0 1 14.21-19.45l18.63 20.61Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M959.09 148.67c-34.19-2.17-58.05-37.47-41.66-69.03 8.97-17.26 28.74-27.42 47.96-26.05 34.45 1.98 58.31 37.93 41.61 69.46-9.06 17.12-28.79 27.12-47.91 25.62Zm.2-3.07c17.86 1.23 36.23-8.21 44.52-24.24 15.15-29.26-7.02-61.79-38.68-63.82-31.73-2.35-58.05 27.18-46.9 58.21 6.12 17.02 23.13 28.89 41.06 29.86Z",
            style: {
              fill: "#b8aeff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 960.59,
            cy: 102.71,
            rx: 32.83,
            ry: 31.18,
            transform: "rotate(-15.95 960.322 102.732)",
            style: {
              fill: "#e2dcfe"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M969.75 134.75c-23.14 7.02-47.25-11.09-43.58-35.77 4.68-28.8 42.29-39.4 61.29-17.29 15.78 18.79 5.11 46.46-17.71 53.06Zm-1.18-4.13c26-7.08 32.14-41.42 7.23-54.31-18.54-9.54-42.87 2.36-45.59 23.25-2.84 21.38 18.41 36.72 38.36 31.06Z",
            style: {
              fill: "#352994"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 974.22,
            cy: 92.81,
            rx: 8.75,
            ry: 13.01,
            transform: "rotate(-37.18 974.349 92.79)",
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 950.56,
            cy: 20.61,
            rx: 11.42,
            ry: 8.28,
            transform: "rotate(-17.48 950.782 20.592)",
            style: {
              fill: "#352994"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M971.43 37.93c-.96 0-1.74-.77-1.75-1.73-.1-11.35-1.17-20.4-3.11-26.17-1.36-4.05-3.18-6.49-4.87-6.53h-.04c-2.66 0-6.02 5.61-6.41 12.93-.05.97-.88 1.69-1.84 1.65-.96-.05-1.71-.88-1.65-1.84.49-9.22 4.94-16.33 10.03-16.24 4.14.09 11.13 4.91 11.4 36.17 0 .97-.77 1.76-1.74 1.77h-.01Z",
            style: {
              fill: "#352994"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M992.71 35.32c-.14 0-.29-.02-.43-.05-.94-.24-1.5-1.19-1.26-2.13 2.25-8.81 1.38-15.15-2.5-18.33-5.17-4.24-15.85-3.13-28.57 2.96-.87.42-1.92.05-2.33-.82-.42-.87-.05-1.92.82-2.33 14.18-6.8 25.96-7.71 32.3-2.51 3.49 2.86 6.96 8.98 3.67 21.9-.2.79-.91 1.32-1.7 1.32ZM936.92 42.84c-.68 0-1.33-.4-1.61-1.07-5.24-12.4-6.25-32.76-.07-35.81 4.98-2.47 9.89 6.12 11.5 8.94a1.751 1.751 0 1 1-3.04 1.74c-3.86-6.76-6.21-7.89-6.91-7.54-3.22 1.59-3.43 19.06 1.75 31.31.38.89-.04 1.92-.93 2.29-.22.09-.45.14-.68.14Z",
            style: {
              fill: "#352994"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M915.81 46.26c-.83 0-1.56-.59-1.72-1.43-.08-.44-.17-.91-.27-1.39-1.19-6.07-2.98-15.23 2.61-20.61 4.52-4.35 12.64-5.06 24.83-2.19a1.745 1.745 0 1 1-.8 3.4c-10.79-2.54-18.06-2.11-21.6 1.3-4.22 4.06-2.64 12.1-1.6 17.42.1.5.19.97.27 1.42a1.749 1.749 0 0 1-1.72 2.07Z",
            style: {
              fill: "#352994"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M807.13 220.38c-.14-.16-.26-.31-.39-.46-16.39-19.82 3.58-30.62 18.18-16.19 4.55 4.87-13.24 21.52-17.79 16.65ZM831.65 284.32l-9.91 6.84a9.636 9.636 0 0 0-4 9.65l1.63 8.95 19.47-2.64s-3.92-9.44-7.19-22.8Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M807.13 220.38c-.16-.13-.29-.3-.39-.46-2.15-4.13 14.83-18.99 18.18-16.19 4.55 4.87-13.24 21.52-17.79 16.65Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M816.16 212.59c19.82 19.04 7.24 61.52 21.17 91.09",
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: 4
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1037.39 300.08H889.05c9.77-5.24 17.38-11.23 23.3-18.56h101.07c6.37 6.1 14.24 12.11 23.97 18.56Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1815.4 819.47c31.05 65.69 97.63 53.52 104.6 33.3v-99.44c-43.44-5.85-52.3 64.34-89.75 53.71-5.92 20.88-14.85 12.43-14.85 12.43ZM1785.63 875.65c-.53 51.67 65.87 2.47 79.71 68.65 4.58 21.92-65.27 38.91-65.27 38.91 4.14-67.95-46.65-79.24-46.65-79.24l32.22-28.33Z",
            style: {
              fill: "#e2dcfe"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M142.66 604.71c23.31 41.67-25.12 74.12-85.86 137.68-41.17 43.08-45.87 86.6-12.38 125.01",
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1166.18 333.26c-23.48-32.11-107.6-37.44-195.91-37.44s-163.35-3.34-197.7 36.29l393.62 1.15Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "m1669.4 972.39 61.62 80.04M1777.58 603.71c-23.31 41.67 25.12 74.12 85.86 137.68 45.24 47.34 46.44 95.2 1.33 136.24-40.74 37.07-166.75 132.85-166.75 132.85"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1740.45,
            cy: 976.95,
            r: 13.68,
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1738.91,
            cy: 980.17,
            r: 5.22,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "m196.53 566.53 55.7 63.64M170.53 584.45l56.46 62.56M668.74 369.29c61.39-5.38 80.44 30.14 96.79 65.56"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M269.79 1391.25c42.16-25.69 48.64 30.21 83.54 8.89 6.47 15.98 6.47 32.29 6.47 32.29-55.86 24.73-64.39-32.04-91.88 7.95-9.04-22.39 1.86-49.12 1.86-49.12ZM314.86 500.13c-20.55 47.35 32.69 31.88 33.32 68.73-3.55 13.81-31.43 17.54-31.43 17.54-22.44-44.89-56.85.39-74.19-45.81 17.37-19.45 72.3-40.46 72.3-40.46ZM1130.1 351.98c-31.78 11.42 13.97 44.76-16.05 75.44 9.61 14.19 71.89 10.26 71.89 10.26 22.3-41.11-51.9-47.08-12.06-79.65-38.43-15.65-43.78-6.06-43.78-6.06Z",
            style: {
              fill: "#e2dcfe"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1501.5 1128.18c-.65-.97-1.31-1.93-1.97-2.89-102.26-149.1-305.78-250.73-540.16-250.73s-438.06 101.71-540.29 250.9c-.66.96-1.31 1.92-1.96 2.89-43.52 64.6-68.1 137.96-68.1 215.74 0 259.32 273.26 469.54 610.35 469.54s610.34-210.22 610.34-469.54c0-77.85-24.63-151.27-68.21-215.91Zm-542.13 664.26c-318.26 0-576.25-200.73-576.25-448.35 0-70.71 21.04-137.61 58.53-197.09.78-1.25 1.57-2.5 2.39-3.74 86.83-134.64 258.27-230.53 460.05-245.47 2.57-.19 5.08.89 6.71 2.89 20.63 25.27 75.01 25.34 97.04-.22a7.83 7.83 0 0 1 6.53-2.68c202.12 14.88 373.83 110.99 460.62 245.93.99 1.52 1.95 3.04 2.9 4.57 36.98 59.16 57.72 125.59 57.72 195.8 0 247.62-257.99 448.35-576.24 448.35Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1250.92 1730.9c13.74 1.69 17.42 18.21 17.42 18.21l17.38-8.4c10.23-15.95-2.29-25.83-2.29-25.83l-32.51 16.02Z",
            style: {
              fill: "#b8aeff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            id: "screen-border",
            ref: ie,
            d: "M1535.61 1344.09c0 247.62-257.99 448.35-576.24 448.35s-576.25-200.73-576.25-448.35c0-233.1 228.65-424.66 520.97-446.3 2.57-.19 5.07.89 6.7 2.89 20.63 25.27 75.02 25.34 97.04-.22 1.62-1.88 4.05-2.86 6.53-2.68 292.46 21.53 521.24 213.14 521.24 446.31Z",
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeMiterlimit: 10,
              strokeWidth: 0
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1552.39,
            cy: 1328.25,
            r: 5.64,
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1552.39,
            cy: 1359.93,
            r: 5.64,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 959.32,
            cy: 1803.26,
            rx: 5.12,
            ry: 4.27,
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 927.46,
            cy: 1802.26,
            rx: 5.12,
            ry: 4.27,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 991.27,
            cy: 1802.26,
            rx: 5.12,
            ry: 4.27,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 959.32,
            cy: 886.86,
            rx: 5.12,
            ry: 4.27,
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 927.46,
            cy: 887.86,
            rx: 5.12,
            ry: 4.27,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 991.27,
            cy: 887.86,
            rx: 5.12,
            ry: 4.27,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 365.45,
            cy: 1328.25,
            r: 5.64,
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 365.45,
            cy: 1359.93,
            r: 5.64,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1501.5 1128.18c-1.3.8-2.55 1.58-3.77 2.33-14.11 8.73-21.27 13.4-19.84 17.78-.95-1.53-1.91-3.05-2.9-4.57 2.54-4.82 10.31-9.63 20.9-16.18l3.64-2.24c.66.96 1.32 1.92 1.97 2.89ZM444.04 1143.26c-.82 1.24-1.61 2.49-2.39 3.74-.24-3.34-5.68-6.89-15.86-13.2-2.63-1.63-5.55-3.44-8.67-5.45.65-.97 1.3-1.93 1.96-2.89 3.07 1.96 5.95 3.75 8.55 5.37 7.92 4.91 13.93 8.63 16.41 12.43Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M972.88 918.42c0-17.73-30.23-16.33-30.23-.37",
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "g",
          {
            style: {
              fill: "none",
              opacity: 0.8
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M1138.87 975.57c-28.65-8.03-50.05-19.62-46.56-32.05 3.48-12.43 29.53-16 58.18-7.97 28.65 8.03 49.05 24.62 45.56 37.05-3.48 12.43-28.53 11-57.18 2.97Z",
                style: {
                  fill: "#d2ccff"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1061.78,
            cy: 935.66,
            rx: 8.9,
            ry: 10.7,
            transform: "rotate(-80.31 1061.792 935.653)",
            style: {
              fill: "#d2ccff",
              opacity: 0.8
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1350.08 1043c-7.04 1.72 17.61 26.33 42.66 52.89 25.05 26.56 54.38 60.64 57.63 55.58 8.85-13.78-83.32-112.63-100.29-108.47Z",
            style: {
              fill: "#d2ccff",
              opacity: 0.8
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1251.03 369.24c-61.39-5.38-80.44 31.44-96.79 66.86",
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1431.05 372.38s-11.99 17.82-10.98 19.35c1.01 1.53 19.05-16.85 19.05-16.85l-8.06-2.5ZM1366.93 352.51s-.19 21.48-1.88 22.17c-1.7.69-6.18-24.67-6.18-24.67l8.06 2.5Z",
            style: {
              fill: "#a52b00"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1369.26 334.85c-2.67-4.43-10.05-7.26-10.2 5.1l.18 10.37s31.57 33.01 78.94 24.7l5.61-8.76c2.34-3.47 8.38-12.99-5.08-10.53 8.44-9.07 3.52-14.12-3.24-11.67 5.58-12.52-1.17-13.51-6.36-9.19 3.39-12.08-1.48-15.12-8.38-8.03 1-12.58-6.98-10.2-10.25-4.24-2.2-12.25-9.7-9.1-11.62-.63-6.33-10.46-10.51-5.76-10.95 2.25-6.77-8.86-11.39-3.46-9.7 4.37-5.82-7.59-11.38-2.28-8.95 6.25Z",
            style: {
              fill: "#f74c00"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M1396.63 354.76c-.54 2.47.75 4.72 3.1 5.44 2.37.78 4.66-.41 5.6-2.77.21-.47.75-.68 1.22-.47 1.24.65.03 2.48-.45 3.38-2.61 4-9.14 3.15-11.12-1.04-.8-1.57-.77-3.5-.13-5.08.19-.47.74-.7 1.21-.51.42.16.65.61.55 1.05ZM1406.82 351.48c2.33-7.33 14.13-5.54 15.1 1.75.08 1.17.22 3.89-1.54 3.51-.47-.15-.76-.61-.72-1.08.1-1.39-.27-2.63-1.04-3.6-2.37-3.01-7.91-3.48-9.92.23-.6 1.07-2.25.36-1.89-.8ZM1396.77 348.59c.73-5.73-8.33-8.63-10.95-3.41-.58 1.11-2.28.39-1.89-.8 1.99-6.1 10.78-5.9 13.96-.93 1.08 1.59 1.43 3.72.89 5.54a1.029 1.029 0 0 1-2.01-.4Z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1442.69 367.24c10.93 9.51 14.62 11.55 4.5 17.69-7.02 4.26-16.02 14.9-20.55 18.37-.73.56-1.66-.37-1.11-1.11 7.77-10.53 16.48-23.24 12.47-26.56-5.24-4.34 4.7-8.39 4.7-8.39ZM1359.43 341.38c-14.39 1.67-18.61 1.32-13.74 12.1 3.38 7.48 4.79 21.35 6.56 26.76.29.88 1.58.63 1.55-.29-.46-13.08-.45-28.48 4.73-28.96 6.78-.62.9-9.63.9-9.63ZM1365.69 332.77c-6.15-15.15 3.3-24.98 6.18-27.79.43-.42.46-1.11.04-1.55-.39-.43-1.07-.47-1.51-.09-18.61 15.81-9.31 31.19-9.31 31.19l4.6-1.76Z",
            style: {
              fill: "#f74c00"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1362.53 290.09c.68 14.54 16.78 22.84 28.98 14.92 7.12-4.62 9.79-12.75 8.22-20.04a.856.856 0 0 0-1.2-.61l-20.35 9.36c-.65.3-1.36-.29-1.19-.99l5.4-21.5a.86.86 0 0 0-.84-1.07c-10.26-.08-19.56 8.49-19.02 19.92ZM1442.52 356.58c13.64-9.01 11.4-22.47 10.61-26.41-.12-.59.25-1.17.84-1.3.57-.13 1.14.22 1.3.78 6.41 23.56-9.95 31-9.95 31l-2.79-4.06Z",
            style: {
              fill: "#f74c00"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1469.26 323.15c-8.79 11.61-26.75 9.35-32.34-4.07-3.26-7.84-.87-16.06 4.55-21.18.41-.38 1.05-.3 1.33.17l11.49 19.23c.37.62 1.29.53 1.54-.14l7.7-20.78a.87.87 0 0 1 1.3-.41c8.5 5.74 11.33 18.06 4.42 27.19Z",
            style: {
              fill: "#f74c00"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1437.14 376.02c-27.52 6.61-56.84-5.11-77.11-23.78a.392.392 0 0 1-.01-.55c.14-.15.37-.15.53-.03 10.88 8.3 23.07 15.03 36.03 19.44 9.28 3.19 19.06 4.93 28.87 4.97 3.86.02 7.69-.33 11.54-.82.22-.03.42.12.45.34.02.21-.1.38-.29.43Z",
            style: {
              fill: "#a52b00"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1920 690.59v37.01s-353.55-385.91-960-385.91S0 727.6 0 727.6v-37.01s353.55-375.92 960-375.92 960 375.92 960 375.92Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1678.73 1261.26c-17.76 214.12 2.86 401.21 80.96 465.48 67.36 55.44 160.31 54.98 160.31 54.98v22.18s-101.44.49-174.97-57.96c-85.24-67.75-107.75-264.96-88.35-490.67 19.4-225.85 136.62-272.04 263.32-340v23.45c-116.08 64.47-223.49 108.29-241.27 322.54Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1920 1805.4c-1.22 0-26.58-.1-60.22-7.09-31.68-6.59-77.47-20.82-115.69-51.19-60-47.69-92.95-161.61-95.28-329.46l3-.04c1.11 79.71 9.23 147.82 24.13 202.42 15.98 58.54 39.54 100.51 70.02 124.73 71.81 57.08 171.82 57.62 174.04 57.62v3.01Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1680.23 1261.38c-9.19 110.77-7.63 210.56 4.52 288.58 13.4 86.12 38.94 145.21 75.89 175.62 60.19 49.53 143.98 54.18 159.36 54.6v3c-6.95-.18-27.83-1.18-53.97-6.69-29.61-6.26-72.26-19.76-107.29-48.59-37.55-30.9-63.44-90.61-76.96-177.48-12.18-78.25-13.75-178.28-4.54-289.28 7.6-91.63 31.8-158.08 76.15-209.14 39.57-45.56 90.3-73.26 144-102.59 7.39-4.04 15.02-8.21 22.61-12.41v3.42c-7.11 3.93-14.25 7.83-21.17 11.62-53.46 29.2-103.96 56.77-143.18 101.93-43.91 50.55-67.87 116.46-75.42 207.41Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1811.66 1057.86c-19.75 17.31-36.43 29.02-42.18 22.45-5.75-6.56 5.6-25.92 25.35-43.23 19.75-17.31 40.43-26.02 46.18-19.45 5.75 6.56-9.6 22.92-29.35 40.23Z",
            style: {
              fill: "#d2ccff",
              opacity: 0.8
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1861.14,
            cy: 1001.8,
            rx: 8.41,
            ry: 5.59,
            transform: "rotate(-39.99 1861.046 1001.788)",
            style: {
              fill: "#fff",
              opacity: 0.8
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M174.97 1745.94C101.44 1804.39 0 1803.9 0 1803.9v-22.18s92.95.46 160.31-54.98c78.1-64.27 98.72-251.36 80.96-465.48C223.49 1047.01 116.08 1003.19 0 938.72v-23.45c126.7 67.96 243.92 114.15 263.32 340 19.4 225.71-3.11 422.92-88.35 490.67Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M269.79 1407.12c1.65 96.75-10.94 254.96-80.05 327.44-46.97 47.33-124.43 69.08-189.74 70.84v-2.97c11.29-.17 22.71-1.25 33.98-2.76 54.29-7.46 114.1-27.81 153.41-67.36 27.47-29.04 43.26-67.01 54.59-104.85 20.63-71.44 25.26-146.37 27.82-220.34Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M238.22 1550.42c-13.52 86.87-39.41 146.58-76.95 177.48-35.04 28.83-77.34 42.33-106.66 48.59-27.72 5.91-49.4 6.63-54.61 6.72v-3c11.08-.21 97.25-3.51 159.36-54.63 36.95-30.41 62.49-89.5 75.89-175.62 12.15-78.02 13.71-177.81 4.52-288.58-7.55-90.94-31.46-156.81-75.26-207.28-39.13-45.1-89.57-72.64-142.96-101.79-7.05-3.85-14.31-7.82-21.55-11.82v-3.44c7.71 4.28 15.47 8.52 22.99 12.62 53.63 29.29 104.3 56.96 143.79 102.46 44.24 50.98 68.38 117.39 75.98 209.01 9.21 111 7.64 211.03-4.54 289.28Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M216.44 1307.08c16.52-1.6 20.23 96.68 1.93 97.04-13.08.26-15.96-95.68-1.93-97.04Z",
            style: {
              fill: "#d2ccff",
              opacity: 0.8
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 216.96,
            cy: 1285.9,
            rx: 5.39,
            ry: 7.8,
            transform: "rotate(-1.14 216.446 1281.844)",
            style: {
              fill: "#d2ccff",
              opacity: 0.8
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "m1722.68 568.86-53.01 61.42M1748.96 586.4l-55.69 61.17"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M170.55 971.75c31.99 24.88 51.66 39.73 51.66 39.73",
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "m252.31 974.03-63.59 80.21"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "#8d7cf7"
            },
            d: "m1304.67 1781.04-3.33 13.84-8.68 36.01h-12.25l11.82-40.22 2.83-9.63h9.61z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "#7b69eb"
            },
            d: "m1304.67 1781.04-3.33 13.84-9.11-4.21 2.83-9.63h9.61z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1322.05 1768.01c-.22 3.29-1.32 6.33-3.06 8.93-3.86 5.77-10.9 9.39-18.68 8.86-11.28-.77-19.84-9.99-19.11-20.58.72-10.6 10.46-18.57 21.74-17.8.16.01.33.02.49.04 11.04 1.01 19.33 10.1 18.62 20.55Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1322.05 1768.01c-.22 3.29-1.32 6.33-3.06 8.93-13.5 9.6-22.98-8.36-15.56-29.48 11.04 1.01 19.33 10.1 18.62 20.55Z",
            style: {
              fill: "#7b69eb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1423.56 1578.22-4.08-10.01a7.016 7.016 0 0 0-6.49-4.37h-25.35c-3.13 0-5.88 2.07-6.74 5.08l-3.27 11.37 45.93-2.07Z",
            style: {
              fill: "#3b308f"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1403.05 1681.56c0 4.38-.1 8.47-.32 12.36-.77 14.4-3.01 25.67-6.73 35.99-5.07 14.08-12.92 26.44-23.66 42.64-17.38 26.24-19.05 44.04-19.2 58.34h-16.44c.15-15.34 1.98-37.31 21.93-67.42 10.39-15.68 17.32-26.87 21.67-38.56 3.13-8.36 4.94-16.98 5.76-27.65.37-4.77.53-9.94.53-15.7h16.44Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1402.74 1693.92c-.77 14.4-3.01 25.67-6.73 35.99-3.65-.13-10.26-.99-15.69-5 3.13-8.36 4.94-16.98 5.76-27.65l16.65-3.34Z",
            style: {
              fill: "#3b308f"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1413.56 1641.28s-.29 4.78-.71 11.82l-.42 7.03c-.07 1.09-.13 2.21-.21 3.36-.48 8.05-1.03 17.15-1.51 25.19-.07 1.25-.14 2.49-.23 3.69-.5 8.43-.9 15.18-1.04 17.41-.46 7.65-33.7 5.95-33.22-1.99l.44-7.34.65-10.85.22-3.45 1.5-25.11.21-3.4 1.1-18.35 33.22 1.99Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1412.43 1660.13c-.07 1.09-.13 2.21-.21 3.36-2.52.76-6.31 1.12-10.51 1.12-8.2 0-17.92-1.35-22.68-3.57l.21-3.4c1.63 1.17 7.06 2.97 16.56 3.68 9.37.69 14.89-.3 16.63-1.18ZM1410.72 1688.68c-.07 1.25-.14 2.49-.23 3.69-2.44.97-6.13 1.39-10.22 1.39-8.29 0-18.26-1.74-22.95-4.16l.22-3.45c2.41 2.43 18.48 5.61 28.43 4.19 2.63-.38 4.17-1.04 4.75-1.65Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1413.56 1641.28s-.29 4.78-.71 11.82c-5.96 1.21-14.7 1.55-24.6-2.73-.97 27.42-6.75 42.31-11.58 50.07l3.67-61.15 33.22 1.99Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1447.59 1628.7c-1.1 9.18-16.32 12.69-33.96 13.52h-.09c-6.09.29-12.47.26-18.64.03-24.13-.88-35.67-2.96-38.32-10.02-2.65-7.06-4.83-31.1-3.57-44.2s23.22-10.59 46.66-10.59c4.55 0 8.94-.08 13.09-.15h.01c17.23-.3 30.27-.43 33.01 6.07 3.41 8.08 3.29 32.97 1.82 45.34Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1447.59 1628.7c-1.1 9.18-16.32 12.69-33.96 13.52h-.09c-9.11 0-11.55-12.09-11.55-34.63s1.43-28.9 10.75-30.3h.01c17.23-.3 30.27-.43 33.01 6.07 3.41 8.08 3.29 32.97 1.82 45.34Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1428.48,
            cy: 1608.3,
            rx: 18.05,
            ry: 11.06,
            transform: "rotate(-85.89 1428.589 1608.316)",
            style: {
              fill: "none",
              stroke: "#3a2da3",
              strokeMiterlimit: 10,
              strokeWidth: 6
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1431.77,
            cy: 1608.55,
            rx: 16.85,
            ry: 12.49,
            transform: "rotate(-85.89 1431.884 1608.556)",
            style: {
              fill: "#de493e"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1436.32,
            cy: 1608.55,
            rx: 10.06,
            ry: 7.46,
            transform: "rotate(-85.89 1436.433 1608.559)",
            style: {
              fill: "#ff705e"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1386.55 1603.1v13.54c0 4.89-4.04 8.81-8.93 8.68l-12.58-.35-13.94-.39a8.75 8.75 0 0 1-8.51-8.75v-10.32c0-4.53 3.46-8.32 7.98-8.72l14.46-1.27 12.06-1.06c5.07-.45 9.45 3.55 9.45 8.65Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1365.04 1595.51v29.46l-13.94-.39a8.75 8.75 0 0 1-8.51-8.75v-10.32c0-4.53 3.46-8.32 7.98-8.72l14.46-1.27Z",
            style: {
              fill: "#3b308f"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M644.62 1830.89s-10.15-84.1-13.79-109.64c-3.37-23.6-6.95-39.44-28.16-60.32-2.34-2.03 9.5-14.05 11.57-11.75 24.79 24.41 29.28 44.3 32.91 69.74 3.67 25.71 14.18 111.97 14.18 111.97h-16.71Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M669.39 1791.91c-3.31 6.02-37.55 10.35-43.13 4.3-5.58-6.06 8.1-11.69 8.1-11.69l-5.04-41.41-8.27-3.46a8.462 8.462 0 0 1-5.13-6.78l-1.44-11.78-.85-6.91c-.89-7.64 46.84-13.63 47.9-3.87.19 1.79.41 3.76.63 5.79v.03c.58 5.24 1.22 10.88 1.67 14.72.33 2.91-.86 5.77-3.16 7.59l-5.5 3.75 4.65 39.52s12.87 4.19 9.56 10.2Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M659.83 1781.71s-15.34-.98-25.47 2.81l-2.58-21.19-.37-3.02-2.09-17.2c15.17-4.48 25.86-.92 25.86-.92l1.9 16.12.36 3.08 2.39 20.32Z",
            style: {
              fill: "#3b308f"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M657.44 1761.39c-4.36-.51-14.88-1.22-25.66 1.94l-.37-3.02c10.66-3.04 20.78-2.53 25.67-2l.36 3.08Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M662.16 1716.1c-.79-5.78-48.66-3.03-47.68 4.99l-.85-6.91c-.89-7.64 46.84-13.63 47.9-3.87.19 1.79.41 3.76.63 5.79Z",
            style: {
              fill: "#3b308f"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M657.18 1797.22c-.59-4.78-17.11-3.63-16.44 1.89.68 5.52 17.03 2.89 16.44-1.89Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M588.6 1643.24c.41 9.81-87.86 13.66-89.49 4.57-.06-.36-.13-.75-.2-1.18 4.61-5.48 85.93-8.35 89.69-3.39ZM564.58 1588.89l-6.44-9.7c-1.38-2.07-3.89-3.2-6.45-2.9l-33.49 3.93c-2.56.3-4.64 2.12-5.17 4.53l-2.79 12.67 54.34-8.53Z",
            style: {
              fill: "#3b308f"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M588.6 1643.24c-3.73-4.91-83.52-2.14-89.53 3.25h-.01c-.06.04-.1.1-.15.14-1.7-10.28-4.91-38.76-5.04-46.17-.08-4.81 28.57-9.39 52.33-11 14.27-.96 26.76-.85 30.2.93 9.16 4.75 11.78 43.03 12.2 52.84Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M588.6 1643.24c-3.73-4.91-83.52-2.14-89.53 3.25.65-7.67 17.58-14.5 28.38-18.09 5.58-1.86 9.82-6.27 11.3-11.73l7.45-27.21c14.27-.96 26.76-.85 30.2.93 9.16 4.75 11.78 43.03 12.2 52.84Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 564.46,
            cy: 1605.48,
            rx: 7.1,
            ry: 6.68,
            transform: "rotate(-64.55 564.43 1605.453)",
            style: {
              fill: "#ff705e"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 556.92,
            cy: 1625.71,
            rx: 6.13,
            ry: 5.75,
            transform: "rotate(-61.39 556.882 1625.666)",
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M569.3 1830.89h-65.45l23.2-31.63a44.52 44.52 0 0 0 8.56-29.03l-2.73-45.74-.18-3-.93-15.62-.18-3-3.22-53.85c-.18-3.24 25.58-4.63 25.75-1.39l4.58 55.24.24 3 1.3 15.62.25 3 2.57 31.07.32 3.82 5.92 71.51Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "#3b308f"
            },
            d: "M558.94 1705.87h-27.17l-.18-3h27.11l.24 3zM560.49 1724.49h-27.61l-.18-3h27.54l.25 3zM553.51 1768.69a11.067 11.067 0 0 0-3.47 8.56l2.38 53.64h-3l-2.38-53.51c-.18-4.09 1.42-8.05 4.41-10.87l11.61-10.95.32 3.82-9.87 9.31Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 533.06,
            cy: 1813.6,
            rx: 8.12,
            ry: 6.02,
            transform: "rotate(-56.31 533.057 1813.604)",
            style: {
              fill: "#6aa9fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M784 1830.89H683.91c1.82-5.64 4.72-10.8 8.42-15.35 16.68-20.61 49.51-28.99 71.59-14.84 9.21 5.9 16.55 15.71 20.07 30.19Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M731.39 1828.26c-18.89 3.08-35.74-2.56-39.05-12.72 16.68-20.61 49.51-28.99 71.59-14.84.12.41.22.83.29 1.25 1.84 11.27-12.85 23.05-32.83 26.31Z",
            style: {
              fill: "#6b5bd4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M741.59 1812.42c-3.33 2.61-8.05 5-13.54 6.61-3.55 1.03-7.01 1.64-10.14 1.81-7.23.43-12.77-1.34-13.83-4.95-1.52-5.17 6.76-12.15 18.48-15.59 11.72-3.44 22.45-2.04 23.97 3.13.81 2.76-1.16 6.01-4.94 8.98Z",
            style: {
              fill: "#3b308f"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M741.59 1812.42c-3.33 2.61-8.05 5-13.54 6.61-3.55 1.03-7.01 1.64-10.14 1.81-.37-.32-.64-.69-.8-1.12-1.13-2.98 3.43-7.47 10.19-10.02 6.75-2.55 13.14-2.2 14.27.77.23.59.23 1.25.02 1.95Z",
            style: {
              fill: "#6aa9fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1261.43 1830.89h-131.37c1.29-19.78 13.5-30.61 30.69-32.62 1.96-.23 3.99-.35 6.08-.35h72.11c11.42 0 22.14 15.68 22.49 32.97Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1186.61 1830.89h-56.56c1.29-19.78 13.5-30.61 30.69-32.62h.02c14.74.01 27.27 14.35 25.85 32.62Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1230.39 1813.71a4.81 4.81 0 0 1-4.04 2.25l-44.46.24-.02-3.06 44.46-.24c.6 0 1.14-.31 1.47-.83.35-.54.39-1.18.11-1.75-1.32-2.81-4.7-8.12-12.75-12.4h5.83c5.75 4.1 8.49 8.53 9.69 11.1.71 1.52.6 3.26-.3 4.69Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1242.91,
            cy: 1817.81,
            rx: 5.26,
            ry: 5.88,
            transform: "rotate(-61.57 1242.976 1817.847)",
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M562.06 916.24c5.7 0 11.66 3.44 15.21 9.4 5.02 8.42 3.32 18.68-3.79 22.92-1.28.77-2.66 1.27-4.08 1.56-.35 1.1-.79 2.18-1.29 3.22l3.51 1.2c1.32.45 2.06 1.89 1.57 3.2-2.87 7.68-13.41 16.17-28.38 16.64h-.08c-1.28 0-2.36-.97-2.5-2.25l-.59-5.43c-.7-.13-1.39-.29-2.08-.47-.43 2.52-1.49 4.61-3.19 6.22-2.18 2.07-4.93 2.82-6.94 3.09-.81.11-1.49.13-1.98.13-.45 0-.73-.02-.78-.03a2.658 2.658 0 0 1-2.42-2.88 2.656 2.656 0 0 1 2.65-2.43h.58c.94 0 3.55-.16 5.25-1.79 1.04-.99 1.61-2.47 1.72-4.38-1.83-.98-3.52-2.2-5.04-3.61-2.31-1.13-4.68-3.69-6.29-7.09-1.7-3.61-2.11-7.28-1.34-9.81-.3-11.16 7.29-21.43 18.69-24.19 1.94-.47 3.89-.7 5.8-.7 2.21 0 4.38.3 6.46.87h.46c.64-.59 1.34-1.13 2.11-1.59 2.08-1.24 4.39-1.82 6.74-1.82m0-5c-3.31 0-6.52.87-9.3 2.53-.29.17-.58.36-.86.55a29.38 29.38 0 0 0-12.59.3c-13.16 3.19-22.52 15.07-22.52 28.43-.86 3.71-.22 8.23 1.82 12.56 1.9 4.03 4.75 7.29 7.91 9.08.25.22.5.44.75.65h-.37c-4 0-7.28 3.01-7.63 7a7.67 7.67 0 0 0 6.97 8.29c.16.01.59.04 1.21.04.86 0 1.75-.06 2.63-.17 2.47-.32 5.93-1.24 8.94-3.72a7.493 7.493 0 0 0 5.7 2.62h.24c7.81-.25 15.17-2.47 21.29-6.42 5.6-3.62 9.73-8.4 11.62-13.48.7-1.88.61-3.93-.25-5.76-.23-.48-.5-.93-.82-1.35 4.3-2.86 7.14-7.4 8.05-12.89.91-5.49-.26-11.32-3.29-16.4-4.35-7.3-11.83-11.84-19.51-11.84Z",
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M529.44 975.52c-1.54.2-2.66.11-2.76.11-1.46-.13-2.55-1.41-2.42-2.88s1.41-2.54 2.88-2.42c.02 0 3.51.23 5.61-1.78 1.23-1.18 1.81-3.02 1.73-5.49-.05-1.47 1.1-2.7 2.57-2.74a2.658 2.658 0 0 1 2.74 2.57c.13 4.06-1.02 7.27-3.41 9.54-2.18 2.07-4.93 2.82-6.94 3.09ZM541.57 965.96l.67 6.16a2.522 2.522 0 0 0 2.58 2.25c14.98-.47 25.52-8.96 28.38-16.64.49-1.3-.26-2.75-1.57-3.2l-3.76-1.29-26.3 12.72Z",
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 546.17,
            cy: 942.93,
            rx: 24.39,
            ry: 24.14,
            transform: "rotate(-13.62 545.954 942.634)",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 554.98,
            cy: 937.29,
            rx: 15.5,
            ry: 18.35,
            transform: "rotate(-30.79 555.006 937.322)",
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 564.41,
            cy: 933.31,
            rx: 14.98,
            ry: 17.75,
            transform: "rotate(-30.79 564.445 933.338)",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 562.76,
            cy: 934.33,
            rx: 8.81,
            ry: 13.47,
            transform: "rotate(-30.79 562.794 934.368)",
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 528.8,
            cy: 950.8,
            rx: 6.26,
            ry: 11.12,
            transform: "rotate(-25.23 528.849 950.844)",
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#bc83fb",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "m525.58 944.48 5.7 12.8M525.22 952.49l6.42-3.21"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 532.86,
            cy: 932.95,
            r: 2.7,
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M453.3 965.67c2.83 0 13.11 3.69 25.11 5.49 8.69 1.3 9.54 6.18 9.48 8.35 1.79.6 3.51 1.14 5.12 1.61.71-.16 1.47-.26 2.22-.26 2.13 0 4.22.79 5.1 3.26.04.04.07.08.1.14.01.02 0 .05.02.07 1.04.56 2.05 1.2 3 1.96 8.58 6.8 10.24 19.2 3.7 27.68-3.74 4.85-9.34 7.37-15.06 7.37-4.28 0-8.63-1.42-12.31-4.33a20.05 20.05 0 0 1-2.32-2.18s-.01.01-.02.01c-.21.15-.45.22-.72.22-2.32 0-6.51-5.32-4.5-9.93-.22-.12-.36-.41-.18-.66-.59-1.57-1.23-3.16-1.9-4.78 0 0-.36.02-.96.02-2.78 0-10.66-.54-10.95-6.6-.71-15.4-6.78-26.15-5.62-27.3.12-.12.35-.17.69-.17m0-5c-2.13 0-3.47.88-4.21 1.62-2.62 2.6-1.58 5.77-.16 10.15 1.55 4.76 3.89 11.96 4.31 20.93.3 6.39 5.4 10.58 13.5 11.27.08.2.15.39.23.58-.71 3.23-.01 6.79 2 9.87 1.76 2.68 4.14 4.44 6.55 4.88.38.34.76.67 1.14.97 4.4 3.49 9.88 5.41 15.41 5.41 7.53 0 14.46-3.4 19.02-9.32 8.18-10.63 6.14-26.17-4.55-34.65a23.9 23.9 0 0 0-2.29-1.6c-1.78-3.1-5.04-4.91-9.04-4.91-.62 0-1.26.04-1.91.13-.32-.1-.64-.2-.97-.3-.42-1.36-1.09-2.64-1.97-3.77-2.37-3.03-6.14-4.96-11.22-5.72-6.61-.99-12.81-2.61-17.33-3.8-4.5-1.18-6.74-1.74-8.52-1.74Z",
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 491.61,
            cy: 1001.66,
            rx: 19.35,
            ry: 19.87,
            transform: "rotate(-35.68 491.675 1001.725)",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M500.22 998.55c-2.15-2.6.52-5.64 3.47-4.34.92.35 1.58-.91.79-1.48-1.8-1.42-4.81-1.1-6.22.81-1.57 1.84-1.08 4.86.8 6.22.36.29.89.23 1.19-.13.26-.33.24-.78-.02-1.09ZM498.01 1001.11c-3.22-2.54-7.71.34-7.33 4.25.02 1.14 1.48 4.19 2.77 2.97.29-.32.28-.79.03-1.11-.88-1.21-.92-2.7-.05-3.87.9-1.22 2.38-1.44 3.74-.75.95.42 1.68-.91.83-1.49ZM499.59 1005.09c2.52 1.89 6.27.19 5.61-3.18-.23-1.07-1.68-3.22-2.75-2.02-.28.38-.21.91.14 1.21.71.65 1.06 1.61.46 2.37-.64.81-1.74.6-2.62.14-.95-.46-1.72.9-.84 1.48Z",
            style: {
              fill: "#151424"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M500.39 984.3c-1.54-4.76-7.36-3.57-9.91-2.32-3.32 1.63-7.81 2.36-7.81 2.36-1.27 11.49-10.26 20.42-10.26 20.42-2.72 5.22 3 11.61 5.04 10.1 2.4-1.78 10.56-12.88 9.97-27.17 9.22-1.52 12.98-3.39 12.98-3.39Z",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M452.61 965.84c1.09-1.08 12.36 3.3 25.79 5.32 11.29 1.69 9.36 9.42 9.36 9.42l-29.64-8.21-5.51-6.52Z",
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M452.61 965.84c-1.16 1.15 4.91 11.9 5.62 27.3.34 7.37 11.91 6.58 11.91 6.58.25-11.89-14.35-30.53-14.35-30.53l-3.18-3.35Z",
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M493 981.12c-14.28-4.19-37.81-14.39-37.21-11.93.61 2.46 11.69 22.33 17.08 37.58 15.66-18.04 20.12-25.64 20.12-25.64Z",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M499.61 985.34c-4.67 2.57-12.19 4.99-12.19 4.99.1 13.21-9.2 23.49-9.2 23.49M491.79 982.03c-4.87 1.8-10.62 3.33-10.62 3.33-3.81 13.19-8.01 18.6-8.01 18.6",
            style: {
              fill: "none",
              stroke: "#8747cc",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M477.24 984.49c-4.54-2.4-8.85-5.21-12.96-8.29-1.36-1.04-2.7-2.1-3.99-3.27-.42-.38-.45-1.02-.07-1.44.35-.38.92-.44 1.33-.16l8.45 5.53 8.5 5.5c1.3.86.13 2.85-1.25 2.13Z",
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M649.53 875.03c.65 0 1.29.23 1.79.68l5.62 5.02c1.46 1.31 1.07 3.7-.73 4.47l-3.23 1.38 9.57 6.43 2.8.56c1.59.32 2.99 1.26 3.89 2.6l3.1 4.65c.96 1.44.36 3.4-1.24 4.05l-3.83 1.56c.15.22.28.44.4.68 1.23 2.57.15 5.66-2.43 6.89-.72.34-1.48.51-2.23.51a5.161 5.161 0 0 1-5.09-4.28l-37.31 15.14c.19.26.37.54.51.85 1.23 2.57.15 5.66-2.43 6.89-.72.34-1.48.51-2.23.51a5.161 5.161 0 0 1-5.12-4.48l-4.28 1.74c-.44.18-.9.27-1.35.27-1.6 0-3.08-1.08-3.49-2.74l-6.73-27.44a4.86 4.86 0 0 1 2.92-5.67l50.12-20.06c.32-.13.66-.19 1-.19m0-5c-.98 0-1.94.19-2.85.55l-50.12 20.06c-4.53 1.81-7.08 6.76-5.91 11.5l6.73 27.44a8.57 8.57 0 0 0 8.35 6.55c1.11 0 2.2-.21 3.23-.63l.15-.06a10.2 10.2 0 0 0 7.37 3.17c1.53 0 3-.34 4.39-1 3.68-1.76 5.81-5.46 5.77-9.29l29.16-11.83a10.19 10.19 0 0 0 7.23 3.02 10.166 10.166 0 0 0 10.16-10.08c2.07-.9 3.62-2.65 4.29-4.81.69-2.23.34-4.62-.96-6.56l-3.1-4.65a11.023 11.023 0 0 0-7.06-4.73l-1.82-.37-2.67-1.79c.43-.77.74-1.63.89-2.53a7.63 7.63 0 0 0-2.46-6.97l-5.62-5.02a7.674 7.674 0 0 0-5.12-1.95Z",
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m671.1 904.87-64.04 26c-2.03.82-4.31-.35-4.84-2.48l-6.73-27.44c-.2-.82-.18-1.64.03-2.41a4.836 4.836 0 0 1 2.89-3.27l50.12-20.05c.94-.38 2.02-.19 2.78.49l.02.02 5.6 5.01c1.47 1.31 1.08 3.69-.73 4.47l-3.23 1.38 9.57 6.43 2.8.56c1.58.32 2.98 1.25 3.88 2.6l3.11 4.66c.96 1.44.36 3.4-1.24 4.04Z",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 663.01,
            cy: 909.34,
            r: 5.16,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 616.47,
            cy: 928.44,
            r: 5.16,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m662.55 893.01-13.82 5.18c-.96.36-2.04-.1-2.44-1.05l-2.94-6.93 9.63-3.63 9.57 6.43ZM628.94 905.55l14.03-5.66-3.27-8.31-14.16 5.33 3.4 8.64z",
            style: {
              fill: "#e2dcfe"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M651.34 875.72c-.53.77-12.49 16.46-32.65 12.18 0 0-5.85 13.96-23.16 10.64a4.836 4.836 0 0 1 2.89-3.27l50.12-20.05c.94-.38 2.02-.19 2.78.49l.02.02Z",
            style: {
              fill: "#dcbaff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#8747cc",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "m651.79 887.03-53.46 20.12M625.54 896.91l8.46 21.52M639.7 891.58l8.35 21.19"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M454.64 1025.75c-.16.12-10.57 8.2-25.52 23.1a429.79 429.79 0 0 0-26.82 29.35 444.03 444.03 0 0 0-9.17 11.4 421.386 421.386 0 0 0-18.42 25.69c-18.84 28.46-37.54 64.41-48.51 105.99a4.971 4.971 0 0 1-4.8 3.69c-.42 0-.84-.05-1.27-.17a4.98 4.98 0 0 1-3.54-6.07c11.27-42.7 30.43-79.58 49.74-108.78a430.9 430.9 0 0 1 18.86-26.32c3.31-4.27 6.54-8.28 9.65-12.02a440.89 440.89 0 0 1 27.1-29.67c15.31-15.29 25.96-23.56 26.63-24.06 2.16-1.68 5.28-1.27 6.96.9a4.975 4.975 0 0 1-.9 6.96Z",
            style: {
              fill: "#6aa9fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M393.13 1089.6a421.386 421.386 0 0 0-18.42 25.69l-8.37-5.33a430.9 430.9 0 0 1 18.86-26.32l7.93 5.96ZM454.64 1025.75c-.16.12-10.57 8.2-25.52 23.1l-7.17-6.9c15.31-15.29 25.96-23.56 26.63-24.06 2.16-1.68 5.28-1.27 6.96.9a4.975 4.975 0 0 1-.9 6.96Z",
            style: {
              fill: "#65caaf"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M321.4 1224.98c-.42 0-.85-.05-1.27-.17a4.967 4.967 0 0 1-3.53-6.07c16.99-64.4 51.93-115.55 78.26-147.12 28.52-34.21 52.71-52.96 53.73-53.74a4.958 4.958 0 0 1 6.96.91 4.966 4.966 0 0 1-.9 6.96c-.24.19-24.49 19.01-52.34 52.45-25.61 30.76-59.61 80.55-76.1 143.08-.59 2.23-2.6 3.7-4.8 3.7Z",
            style: {
              fill: "none",
              stroke: "#7d6de8",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1598.6 1224.81c-.43.12-.85.17-1.27.17-2.2 0-4.21-1.47-4.8-3.69-4.04-15.35-9.15-29.93-14.94-43.66-17.75-42.18-41.85-76.21-61.17-99.43-27.84-33.43-52.1-52.26-52.34-52.44a4.966 4.966 0 0 1-.9-6.96 4.966 4.966 0 0 1 6.96-.9c1.01.77 25.2 19.53 53.73 53.74 19.85 23.8 44.6 58.74 62.86 102.09 5.96 14.14 11.22 29.19 15.4 45.03.7 2.65-.88 5.37-3.54 6.07Z",
            style: {
              fill: "#6aa9fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "#65caaf"
            },
            d: "m1540.14 1109.53 8.65-4.94-13.96-19.27-8.29 5.51 13.6 18.7zM1598.6 1224.81c-.43.12-.85.17-1.27.17-2.2 0-4.21-1.47-4.8-3.69-4.04-15.35-9.15-29.93-14.94-43.66v-.02l9.13-3.89c5.96 14.14 11.22 29.19 15.4 45.03.7 2.65-.88 5.37-3.54 6.07Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1597.33 1224.98c-2.2 0-4.21-1.47-4.8-3.7-16.49-62.53-50.49-112.32-76.1-143.08-27.84-33.43-52.1-52.26-52.34-52.45a4.957 4.957 0 0 1-.9-6.96 4.967 4.967 0 0 1 6.96-.91c1.02.78 25.21 19.54 53.73 53.74 26.32 31.57 61.27 82.72 78.26 147.12.7 2.65-.88 5.37-3.53 6.07-.42.11-.85.17-1.27.17Z",
            style: {
              fill: "none",
              stroke: "#7d6de8",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1827.5 761.58c-26.26-29.76-288.43-301.35-761.93-337.9-34.29-2.65-69.7-4.06-106.2-4.06-33.59 0-66.24 1.2-97.96 3.45-478.7 34.01-743.76 308.57-770.16 338.51-28.17 31.92-9.8 75.15 73.08 143.4s121.35 116.43 192.7 74.47c49.63-29.19 180.51-109.54 353.78-155.75 1.18-.32 2.35-.63 3.53-.93 74.89-19.72 157.6-32.98 245.02-32.98s169.47 13.16 244.13 32.74c1.13.29 2.27.59 3.4.9 173.78 46.16 305.08 126.77 354.81 156.02 71.35 41.96 109.82-6.22 192.7-74.47s101.26-111.48 73.09-143.4Zm-109.09 133.51c-79.23 65.25-98.84 87.41-167.05 47.3-68.21-40.12-314.11-176.54-592.99-176.54s-524.79 136.42-593 176.54c-68.2 40.11-87.82 17.95-167.05-47.3s-96.8-99.88-69.87-130.4c23.81-26.99 250.61-259.06 660.33-312.24 4.62-.6 9.15 1.71 11.39 5.8 31.94 58.47 21.68 66.03 158.2 66.03s126.25-7.56 158.19-66.03a11.34 11.34 0 0 1 11.39-5.8c409.72 53.18 636.52 285.25 660.33 312.24 26.93 30.52 9.36 65.15-69.87 130.4Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M714.34 822.77c-1.18.3-2.35.61-3.53.93-3.11-3.81-5.62-12.35-8.24-22.11l-.16-.58c-.21-.8.26-1.62 1.06-1.84.8-.21 1.62.26 1.84 1.06l.15.59c1.18 4.37 2.78 10.36 4.63 15.08 2.3 5.9 3.77 6.76 4.25 6.87ZM1065.57 423.68c-25.77 93.75-178.48 96.53-204.16-.61 31.72-2.25 64.37-3.45 97.96-3.45 36.5 0 71.91 1.41 106.2 4.06ZM1214.53 801.01c-.3 1.08-.6 2.28-.93 3.55-2.19 8.54-4.15 15.53-6.7 18.87-1.13-.31-2.27-.61-3.4-.9.04-.02.09-.04.14-.07 2.67-1.57 5.41-12.26 7.06-18.65.32-1.28.63-2.48.93-3.58.21-.8 1.04-1.27 1.83-1.06.8.22 1.28 1.04 1.07 1.84Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1587.54 609.17c-10.68 228.04-147.93 274.42-147.93 274.42l29.29 14.17c75.16-118.51 229.13-144.29 179.15-250.1l-60.51-38.48Z",
            style: {
              fill: "#d2ccff",
              opacity: 0.8
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1718.41 895.09c-79.23 65.25-98.84 87.41-167.05 47.3-68.21-40.12-314.11-176.54-592.99-176.54s-524.79 136.42-593 176.54c-68.2 40.11-87.82 17.95-167.05-47.3s-96.8-99.88-69.87-130.4c23.81-26.99 250.61-259.06 660.33-312.24 4.62-.6 9.15 1.71 11.38 5.8 31.94 58.47 21.68 66.03 158.2 66.03s126.25-7.56 158.19-66.03c2.23-4.09 6.76-6.4 11.38-5.8 409.72 53.18 636.52 285.25 660.33 312.24 26.93 30.52 9.36 65.15-69.87 130.4Z",
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1056.24 428.29c-.59.94-1.22 1.89-1.9 2.85-14.33 20.46-46.17 44.57-94.03 44.57s-82.08-24.41-97.68-44.72c-.74-.96-1.43-1.9-2.07-2.83-6.66-9.58-8.76-17.89-5.53-21.74 8.01-9.53 35.68-14.16 72.6-15.74l3.07-.12c9.46-.36 19.5-.52 29.94-.52 8.82 0 17.37.05 25.52.21 1.03.02 2.05.04 3.06.07 39.17.89 68.49 4.37 73.21 16.1 1.78 4.42-.33 12.62-6.19 21.87Z",
            style: {
              fill: "#e2dcfe"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1056.24 428.29c-.59.94-1.22 1.89-1.9 2.85-30.84-2.8-63.13-9.03-68.18-40.89 1.03.02 2.05.04 3.06.07 2.21 12.99 9.45 22.26 22.08 28.3 12.8 6.13 29.81 8.36 44.94 9.67ZM930.7 390.56c-5.21 31.44-37.35 37.64-68.07 40.43-.74-.96-1.43-1.9-2.07-2.83 37.86-3.3 62.39-10.91 67.07-37.48l3.07-.12Z",
            style: {
              fill: "#b8aeff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1455.76 515.91c-5.87 13.58-8.89 22.34-14.86 19.88M460.86 516.78c5.87 13.58 8.65 21.61 14.62 19.14",
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1612.84,
            cy: 977.64,
            rx: 5.89,
            ry: 5.91,
            transform: "rotate(-86.69 1612.896 977.631)",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1818.87,
            cy: 785.14,
            rx: 5.89,
            ry: 5.91,
            transform: "rotate(-86.69 1818.929 785.117)",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 305.48,
            cy: 977.64,
            rx: 5.91,
            ry: 5.89,
            transform: "rotate(-3.31 305.173 976.98)",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 99.45,
            cy: 785.14,
            rx: 5.91,
            ry: 5.89,
            transform: "rotate(-3.31 99.436 784.504)",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1164.48,
            cy: 489.21,
            rx: 8.07,
            ry: 11.25,
            transform: "rotate(-81.59 1164.492 489.21)",
            style: {
              fill: "#d2ccff",
              opacity: 0.8
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1241.21 524.66c-27.47-6.72-48.4-16.67-45.65-27.92 2.75-11.26 27.25-14.93 54.72-8.21 27.47 6.72 47.5 21.3 44.75 32.55-2.75 11.26-26.35 10.3-53.82 3.58ZM453.55 568.43c3.91 7.44-30.68 25.01-65.21 43.83-35.59 19.4-71.29 39.87-76.29 33.48-9.86-12.58 133.57-92.42 141.51-77.32Z",
            style: {
              fill: "#d2ccff",
              opacity: 0.8
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1763.63,
            cy: 827.64,
            rx: 21.03,
            ry: 8.87,
            transform: "rotate(-47.93 1763.536 827.64)",
            style: {
              fill: "#d2ccff",
              opacity: 0.8
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1784.76,
            cy: 799.22,
            rx: 5.81,
            ry: 4.39,
            transform: "rotate(-56.61 1784.731 799.217)",
            style: {
              fill: "#d2ccff",
              opacity: 0.8
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 959.37,
            cy: 833.75,
            rx: 17.72,
            ry: 16.92,
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 959.37,
            cy: 837.21,
            rx: 9.48,
            ry: 8.84,
            style: {
              fill: "#6aa9fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 959.37,
            cy: 837.21,
            rx: 9.48,
            ry: 8.84,
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M266.42 1313.44h42.33c7.48 0 13.54 6.06 13.54 13.54v19.25c0 7.48 6.06 13.54 13.54 13.54h14.56M1653.48 1318.79h-43.13c-7.62 0-13.8 6.18-13.8 13.8v19.62c0 7.62-6.18 13.8-13.8 13.8h-14.82M1564.82 1290.82h90.14M265.05 1290.82h90.27",
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 985.94,
            cy: 455.51,
            rx: 5.36,
            ry: 4.95,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 960,
            cy: 455.51,
            rx: 5.36,
            ry: 4.95,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 934.06,
            cy: 455.51,
            rx: 5.36,
            ry: 4.95,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 998.91,
            cy: 439.61,
            rx: 5.36,
            ry: 4.95,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 972.97,
            cy: 439.61,
            rx: 5.36,
            ry: 4.95,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 947.03,
            cy: 439.61,
            rx: 5.36,
            ry: 4.95,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 921.09,
            cy: 439.61,
            rx: 5.36,
            ry: 4.95,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "m1071.56 796.01-21.64 83.68M848.92 796.01l21.64 83.68"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1551.71,
            cy: 511.32,
            rx: 5.41,
            ry: 8.38,
            transform: "rotate(-73.47 1551.595 511.363)",
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1515.71 483.85-1.84 2.95-4.03 6.42-9.63 15.4-2.93 4.69c-1.33 3.03-12.77-2.02-11.44-5.05l1.45-3.92.06-.15 6.96-18.83 3.04-8.21c1.7-4.68 7.2-6.97 12.27-5.13 5.08 1.86 7.81 7.15 6.09 11.83Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1515.71 483.85-1.84 2.94-4.02 6.43c4.02-6.43-13.11-14.39-15.53-7.86l3.04-8.21c1.7-4.67 7.2-6.96 12.27-5.12 5.08 1.86 7.81 7.15 6.09 11.83Z",
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1630.02 533.37c-1.57 2.04-3.24 3.74-4.97 5.11-13.57 10.8-30.35 1.7-22.12-13.95.92-1.76 2.17-3.62 3.78-5.53 4.93-8 28.25 6.37 23.32 14.37Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1630.02 533.37c-1.57 2.04-3.24 3.74-4.97 5.11 4.96-5.1-17.88-20.59-22.12-13.95.92-1.76 2.17-3.62 3.78-5.53 4.93-8 28.25 6.37 23.32 14.37Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1500.21 508.62-2.93 4.69c-1.33 3.03-12.77-2.02-11.44-5.05l1.45-3.92.06-.15c1.5-4.07 14.44 1.9 12.86 4.43Z",
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1491.55 510.73c-14.29 22.64-17.61 54.16-6.14 62.36 13.56 9.7 43.32 1.73 63.87-63.41",
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1554.06 511.32c-16.23 55.11 21.85 59.55 52.54 28.27",
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M543.51 424.25c20.27-6.8 7 32.93-12 41.79-19 8.87-96.27 39.27-116.54 46.24-20.27 6.97-51.67-12.99-39.9-19.63 39.27-22.17 148.18-61.59 168.45-68.39Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M543.51 424.25c20.27-6.8 7 32.93-12 41.79-19 8.87-96.27 39.27-116.54 46.24-20.27 6.97-51.67-12.99-39.9-19.63 39.27-22.17 148.18-61.59 168.45-68.39Z",
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M553.4 434.31c-70.34 22.78-174.26 70.81-174.26 70.81M547.44 449.98c-78.99 27.71-153.4 62.08-153.4 62.08",
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1125.72 804.4-7.73 22.74a24.23 24.23 0 0 1-19.42 16.18l-2.21.32a24.22 24.22 0 0 0-20.08 18.49l-4.72 20.33M793.73 804.4l7.73 22.74a24.23 24.23 0 0 0 19.42 16.18l2.21.32a24.22 24.22 0 0 1 20.08 18.49l4.72 20.33",
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1097,
            cy: 872.49,
            r: 3.77,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1108.26,
            cy: 874.54,
            r: 3.77,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1119.52,
            cy: 876.59,
            r: 3.77,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1104.29,
            cy: 864.38,
            r: 3.77,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1115.55,
            cy: 866.43,
            r: 3.77,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 822.02,
            cy: 872.49,
            r: 3.77,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 810.76,
            cy: 874.54,
            r: 3.77,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 799.5,
            cy: 876.59,
            r: 3.77,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 814.73,
            cy: 864.38,
            r: 3.77,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 803.47,
            cy: 866.43,
            r: 3.77,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1365.22 911.95c4.13 0 1.88 6.62.14 19.82 14.69 11.09 17.97 20.59 6.04 20.59-2.64 0-6.02-.46-10.19-1.48-2.32 9.74-6.59 15.38-10.3 15.38s-7.01-5.97-6.87-19.58c-5.62 2.77-11.37 4.37-15.5 4.37-7.45 0-9.59-5.24 3.86-18.34-9.11-10.55-10.53-16.59-3.97-16.59 3.44 0 9.09 1.67 16.98 5.23 11.11-6.27 16.96-9.39 19.8-9.39m0-5c-3.84 0-8.74 2.44-20.08 8.81-7.28-3.13-12.76-4.65-16.71-4.65-5.43 0-7.56 2.89-8.35 4.61-1.86 4.06-.13 9.3 5.62 16.69-6.98 7.56-9.35 13.34-7.45 18.01.85 2.1 3.33 5.62 10.3 5.62 3.12 0 6.86-.71 10.78-2.02.64 6.77 2.36 11.61 5.15 14.43 1.81 1.83 4.04 2.8 6.44 2.8 5.71 0 10.72-5.34 13.82-14.53 2.48.42 4.71.64 6.66.64 3.6 0 9.92-.84 11.81-6.48 2.38-7.11-4.99-15.2-12.5-21.27.26-1.79.52-3.45.76-4.97 1.24-7.8 1.92-12.1-.79-15.28-1.32-1.55-3.26-2.4-5.46-2.4Z",
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1345.41 921.34c27.27-15.38 22.88-11.85 19.95 10.42 17.94 13.54 18.86 24.71-4.15 19.11-4.71 19.75-17.45 22.65-17.16-4.2-15.77 7.76-32.54 6.4-11.64-13.97-13.89-16.09-9.9-21.7 13-11.36Z",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1350.31,
            cy: 936.58,
            r: 3.22,
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1358.06,
            cy: 924.43,
            r: 2.84,
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1364.63,
            cy: 942.48,
            r: 2.74,
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1351.98,
            cy: 953.17,
            r: 2.39,
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1336.04,
            cy: 940.58,
            r: 2.52,
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1337.48,
            cy: 926.86,
            r: 2.52,
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1429.8 953.32c.75 0 1.51.27 2.11.81 2.95 2.67 6 5.42 6 9.19 0 2.56-1.42 4.93-3.74 7.44 4.5 5.37 6.96 11.64 7.13 17.45.05 1.71-.11 3.37-.46 4.96 2.23-1.49 4.96-2.51 6.97-2.51.15 0 .3 0 .44.02 3.86.32 6.41 2.95 6.1 6.81-.3 3.61-3.55 5.7-7.12 5.7-.25 0-.5-.01-.76-.03-.36-.03-.74-.06-1.13-.1 3.43 3.33 6.06 7.31 4.26 8.12-.25.11-.54.16-.86.16-1.75 0-4.52-1.52-7.04-3.54 1.12 2.93.59 6.2-2.13 7.96-1.15.74-2.34 1.09-3.49 1.09-2.09 0-4.04-1.17-5.39-3.27-1.13-1.76-1.59-4.98-1.26-7.91-1.44.46-2.95.77-4.52.9-.63.05-1.27.08-1.92.08-6.7 0-14.1-2.83-20.25-8.33-6.67-5.97-10.38-13.74-10.66-20.87-.19-4.85 1.2-9.4 4.32-12.88 3.31-3.69 8.01-5.59 13.2-5.77.26 0 .53-.01.79-.01 6.37 0 13.36 2.56 19.32 7.53 1.6-1.76 1.91-2.6 1.91-2.98 0-.98-2.56-3.29-3.93-4.53a3.148 3.148 0 0 1-.22-4.45c.62-.69 1.48-1.04 2.34-1.04m0-5c-2.3 0-4.5.98-6.05 2.69a8.026 8.026 0 0 0-2.08 4.89c-3.7-1.38-7.52-2.1-11.29-2.1-.32 0-.64 0-.96.02-6.72.23-12.66 2.87-16.75 7.43-3.91 4.38-5.84 10.05-5.59 16.42.34 8.8 4.84 17.7 12.32 24.4 6.83 6.11 15.43 9.61 23.59 9.61.57 0 1.15-.02 1.72-.05.33 1.68.9 3.32 1.77 4.69 2.28 3.54 5.77 5.57 9.6 5.57 2.13 0 4.27-.65 6.19-1.89 1.63-1.05 2.88-2.44 3.73-4.04.91.27 1.84.43 2.74.43 1.05 0 2.03-.2 2.92-.61 1.83-.83 3.08-2.44 3.43-4.43.27-1.52-.05-3.19-.93-5.01 2.93-1.82 4.89-4.81 5.18-8.39.54-6.52-3.95-11.65-10.67-12.21a11.858 11.858 0 0 0-2.53.09c-.57-5.12-2.52-10.27-5.66-14.95 1.35-2.06 2.44-4.58 2.43-7.53 0-5.98-4.24-9.81-7.65-12.89a8.123 8.123 0 0 0-5.47-2.11Z",
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1428.57 974.38c-.65-.12-1.27-.45-1.75-.98a3.148 3.148 0 0 1 .21-4.45c3.99-3.64 4.59-5.08 4.59-5.62 0-.98-2.56-3.29-3.93-4.53a3.148 3.148 0 0 1-.22-4.45 3.148 3.148 0 0 1 4.45-.22c2.95 2.67 6 5.42 6 9.19 0 3.51-2.65 6.65-6.65 10.29-.76.69-1.76.94-2.7.77Z",
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1446.48 1003.17c-3.86-.32-9.93-1.01-9.61-4.87.32-3.86 7.54-7.92 11.4-7.6s6.41 2.95 6.1 6.81-4.02 5.98-7.88 5.66Z",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1440.86 1006.15c-2.09-3.26-5.56-8.29-8.82-6.19s-3.45 10.38-1.35 13.63 5.62 4.27 8.88 2.18 3.39-6.36 1.3-9.62Z",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1436.36 998.78c2.97-3.27 16.82 10.79 13.24 12.4-3.58 1.62-16.21-9.13-13.24-12.4Z",
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1436.98 1000.87c-3.07 3.43-7.34 5.31-12.08 5.71-7.18.6-15.42-2.22-22.17-8.25-6.67-5.97-10.38-13.74-10.66-20.87-.19-4.85 1.2-9.4 4.32-12.88 3.31-3.69 8.01-5.59 13.2-5.77 6.91-.23 14.65 2.6 21.05 8.32 6.75 6.03 10.45 13.91 10.67 21.1.14 4.76-1.25 9.22-4.32 12.65Z",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1416.69,
            cy: 982.72,
            r: 13.69,
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1416.69,
            cy: 982.72,
            r: 9.41,
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1409.59 958.81-17.52 18.65c-.19-4.85 1.2-9.4 4.32-12.88 3.31-3.69 8.01-5.59 13.2-5.77ZM1436.98 1000.87c-3.07 3.43-7.34 5.31-12.08 5.71l16.4-18.36c.14 4.76-1.25 9.22-4.32 12.65Z",
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1261.87 875.67c6.15 0 12.59 5.01 13.83 16.67.05.5.47.82.9.82.2 0 .4-.06.57-.21 4.76-3.85 9.24-5.42 13.06-5.42 5.73 0 9.96 3.53 11.37 8.17.23.76-.33 1.53-1.11 1.53h-.44c-2.59 0-5.48 1.32-7.69 3.78-1.94 2.16-2.96 4.75-2.99 7.09 0 .64-.54 1.13-1.16 1.13-.05 0-.11 0-.16-.01a8.8 8.8 0 0 0-1.16-.08c-1.31 0-2.7.28-4.06.88-2.54 1.12-4.35 3.08-5.03 5.15-.16.49-.62.8-1.1.8-.15 0-.31-.03-.45-.1-.9-.4-1.95-.61-3.05-.61-.44 0-.88.03-1.33.11-3.28.52-5.37 2.58-5.6 5.92-.05.78-.64 1.42-1.42 1.51h-.02c-.07 0-.13.01-.19.01-.5 0-.97-.22-1.29-.62-6.79-8.57-15-20.51-13.48-34.8.79-7.37 6.27-11.72 12-11.72m0-5c-8.83 0-15.97 6.81-16.97 16.19-1.67 15.69 6.89 28.78 14.53 38.44a6.62 6.62 0 0 0 5.21 2.52c.26 0 .52-.02.78-.05h.05c3.12-.37 5.57-2.94 5.79-6.12.05-.68.08-1.13 1.39-1.33.18-.03.37-.04.55-.04.39 0 .76.07 1.05.2.78.34 1.61.51 2.46.51 2.67 0 5.02-1.71 5.85-4.25.21-.65 1.01-1.56 2.3-2.13.68-.3 1.38-.46 2.04-.46.17 0 .33.01.48.03.28.04.56.06.84.06 3.35 0 6.11-2.72 6.16-6.06.02-1.22.66-2.64 1.71-3.82 1.41-1.56 3.02-2.12 3.97-2.12h.45c1.94 0 3.79-.93 4.95-2.5a6.24 6.24 0 0 0 .94-5.5c-2.18-7.11-8.52-11.71-16.16-11.71-3.53 0-7.2 1-10.8 2.92-3.23-10.79-11.07-14.79-17.56-14.79Z",
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1300.21 900.49c1.06 0 2.05.33 2.81 1.02 2.02 1.82 1.71 5.45-.68 8.11-1.49 1.66-3.44 2.55-5.18 2.55-1.06 0-2.05-.33-2.81-1.02-2.02-1.82-1.71-5.45.68-8.11 1.49-1.66 3.44-2.55 5.18-2.55m0-5c-3.25 0-6.5 1.53-8.9 4.2-1.88 2.09-3.04 4.69-3.26 7.3-.26 3.08.82 5.95 2.95 7.87 1.65 1.48 3.83 2.3 6.15 2.3 3.25 0 6.5-1.53 8.9-4.2 1.88-2.09 3.04-4.69 3.26-7.3.26-3.08-.82-5.95-2.95-7.87-1.65-1.48-3.83-2.3-6.15-2.3Z",
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1286.99 911.75c1.66 0 3.1.73 3.68 2.04.86 1.96-.53 4.46-3.11 5.6-.86.38-1.73.56-2.56.56-1.66 0-3.1-.73-3.68-2.04-.86-1.96.53-4.46 3.11-5.6.86-.38 1.73-.56 2.56-.56m0-5c-1.54 0-3.12.34-4.58.98-5.18 2.29-7.67 7.64-5.67 12.2 1.37 3.1 4.53 5.02 8.25 5.02 1.54 0 3.12-.34 4.58-.98 5.18-2.29 7.67-7.64 5.67-12.2-1.37-3.1-4.53-5.02-8.25-5.02Z",
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1273.71 917.9c1.77 0 3.25.96 3.47 2.34.25 1.59-1.25 3.15-3.35 3.48-.27.04-.53.06-.79.06-1.77 0-3.25-.96-3.47-2.34-.25-1.59 1.25-3.15 3.35-3.48.27-.04.53-.06.79-.06m0-5c-.52 0-1.04.04-1.56.12-2.09.33-4 1.3-5.38 2.74-1.72 1.78-2.49 4.14-2.13 6.45.6 3.8 4.13 6.57 8.41 6.57.52 0 1.04-.04 1.56-.12 2.09-.33 4-1.3 5.38-2.74 1.72-1.78 2.49-4.14 2.13-6.45-.6-3.8-4.13-6.57-8.41-6.57Z",
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1292.37 901.01c-1.94 2.16-2.96 4.75-2.99 7.09 0 .69-.63 1.22-1.32 1.12-1.62-.22-3.45.03-5.21.8-2.54 1.12-4.35 3.08-5.03 5.15-.21.65-.93.98-1.55.71-1.26-.55-2.79-.76-4.38-.51-3.28.52-5.37 2.58-5.6 5.92-.05.78-.64 1.42-1.42 1.51h-.02c-.57.07-1.13-.16-1.48-.61-6.79-8.57-15-20.51-13.48-34.8 1.63-15.27 23.43-17.58 25.83 4.95.08.72.91 1.07 1.48.61 11.91-9.63 22.07-4.97 24.43 2.76.24.78-.35 1.57-1.17 1.53-2.69-.14-5.75 1.19-8.07 3.77Z",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1298.68,
            cy: 906.32,
            rx: 6.49,
            ry: 4.92,
            transform: "rotate(-48.03 1298.519 906.294)",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1286,
            cy: 915.85,
            rx: 5.11,
            ry: 3.87,
            transform: "rotate(-23.81 1285.742 915.744)",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1273.37,
            cy: 920.85,
            rx: 3.84,
            ry: 2.91,
            transform: "rotate(-8.94 1273.561 920.989)",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1268.94,
            cy: 416.62,
            rx: 25.7,
            ry: 30.69,
            transform: "rotate(-81.89 1268.947 416.618)",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1268.94,
            cy: 416.62,
            rx: 16.91,
            ry: 20.7,
            transform: "rotate(-81.89 1268.947 416.618)",
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "m1283.04 404.89-28.49 23.21"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1275.96 411.79.36 3.29c.15 1.35-.4 2.67-1.45 3.53l-6.71 5.44a3.961 3.961 0 0 1-4.06.57l-2.54-1.08 14.42-11.75Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "M1584.13 1246.5h51.1M1584.13 1257.05h51.1M1584.13 1267.61h51.1M287.83 1246.5h51.1M287.83 1257.05h51.1M287.83 1267.61h51.1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1350 411.8-20.6 44.18c-1.13 2.42.39 5.19 3.34 6.1 33.4 10.31 54.97 17.61 86.16 29.98 2.86 1.14 6.24.06 7.39-2.37l21-44.05c1.09-2.28-.19-4.92-2.88-5.97-32.23-12.65-53.98-20.36-87.51-30.44-2.79-.84-5.83.3-6.9 2.58Z",
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeMiterlimit: 10,
              strokeWidth: 3
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1441.66 457.45-39.85-5.14c-6.48-.84-12.78 1.9-15.63 6.79l-9.94 17.07M1392.7 420.58l-29.78 51.09",
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeMiterlimit: 10,
              strokeWidth: 3
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1420.25,
            cy: 485.79,
            rx: 2.59,
            ry: 3.09,
            transform: "rotate(-86.61 1420.231 485.8)",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1439.85,
            cy: 444.64,
            rx: 2.59,
            ry: 3.09,
            transform: "rotate(-86.61 1439.832 444.65)",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1336.57,
            cy: 456.9,
            rx: 2.59,
            ry: 3.09,
            transform: "rotate(-86.61 1336.566 456.911)",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1356.18,
            cy: 415.75,
            rx: 2.59,
            ry: 3.09,
            transform: "rotate(-86.61 1356.167 415.761)",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1615.19,
            cy: 1092.37,
            rx: 9.08,
            ry: 5.24,
            transform: "rotate(-20.82 1615.417 1092.48)",
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1616.94 1089.5c37.04 72.07 84.13 37.31 41.19-15.74",
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1644.23,
            cy: 1053.53,
            rx: 12.24,
            ry: 8.03,
            transform: "rotate(-31.52 1644.287 1053.55)",
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1660.48 1074.63-1.66 1.27c-1.93 1.47-4.69 1.12-6.18-.79l-7.32-9.37-5.21-6.67c-4.51-5.28 8.36-12.86 10.78-6.36l4.5 6.78s.03.03.04.05l6.05 9.12c1.29 1.95.85 4.55-1.01 5.97Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1655.4 1059.49c-2.49-3.55-12.42 2.31-10.08 6.24l-5.21-6.67c-4.51-5.28 8.36-12.86 10.78-6.36l4.5 6.78ZM1654.83 1113.93l-1.66 1.28c-1.93 1.46-4.69 1.11-6.18-.8l-7.32-9.37-5.21-6.67c-4.51-5.28 8.37-12.86 10.78-6.36l4.54 6.84 6.05 9.1c1.3 1.95.85 4.56-1.01 5.97Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1649.79 1098.85c-2.43-3.66-12.48 2.24-10.12 6.18l-5.21-6.67c-4.51-5.28 8.37-12.86 10.78-6.36l4.54 6.84Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1587.33 1042.25-26.78 21.98-6.05 4.97c-3.05 2.5-7.55 2.11-10.1-.9l-1.63-1.92a7.243 7.243 0 0 1 .89-10.26l6.12-5.06 26.58-22a7.223 7.223 0 0 1 10.05.81l1.76 2a7.24 7.24 0 0 1-.85 10.37Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1560.55 1064.24-6.05 4.97c-3.05 2.5-7.55 2.11-10.1-.9l-1.63-1.92a7.243 7.243 0 0 1 .89-10.26l6.12-5.06 10.76 13.17Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1549.53,
            cy: 1062.35,
            r: 4.12,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "#5d4dc4"
            },
            d: "m1561.97 1040.98 4.06 18.76 7.83-6.8-4.06-18.76-7.83 6.8z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1587.29,
            cy: 1115.86,
            rx: 5.46,
            ry: 3.44,
            transform: "rotate(-25.92 1587.606 1115.985)",
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1653.91 1114.64c20.02 33.03-38.05 62.68-66.93.49",
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1549.54 1062.32c-43.87 97.16 66.07 114.25 62.66 30.05",
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "m1599.51 1051.96-37.54 31.21"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m155.56 954.09-9.76 6.67-6.89 4.71a9.623 9.623 0 0 1-11.39-.38L96.41 940.6h-.01l-26.76-21.07h-.02l-15.5-12.21c-3.65-2.87-4.72-7.95-2.56-12.06l3.67-6.96 7.49-14.24c.43-.82 1.51-1.02 2.22-.42l2.29 1.98c.51.44.66 1.19.32 1.79l-7.97 14.58 26.77 21.29h.01l26.28 20.89 28.21 22.42 10.61-7.02c.54-.37 1.26-.32 1.74.11l2.48 2.13c.71.62.65 1.76-.13 2.29Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m155.56 954.09-9.76 6.67-4.94-4.18 10.61-7.02c.54-.37 1.26-.32 1.74.11l2.48 2.13c.71.62.65 1.76-.13 2.29ZM67.57 877.4l-7.97 14.58-4.35-3.68 7.49-14.24c.43-.82 1.51-1.02 2.22-.42l2.29 1.98c.51.44.66 1.19.32 1.79ZM112.65 934.16l-3.66 4.28a9.573 9.573 0 0 1-10.13 2.92l-2.44-.77h-.01l-26.76-21.07.98.55a9.403 9.403 0 0 0 11.88-2.17l3.86-4.64h.01l26.28 20.89Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "m59.24 889.79 86.06 68.59"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1080.75 455.01-14.93 29.45a38.191 38.191 0 0 1-34.07 20.92H885.11c-14.36 0-27.51-8.06-34.03-20.85l-15.51-30.44",
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1882.59,
            cy: 673.3,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1785.08,
            cy: 595.13,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1670.13,
            cy: 520.56,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1550.36,
            cy: 457.89,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1435.13,
            cy: 409.54,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1304.1,
            cy: 369.43,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1179.91,
            cy: 344.6,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1055.75,
            cy: 330.4,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 918.74,
            cy: 328.53,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 784,
            cy: 339.29,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 660.72,
            cy: 359.75,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 528.46,
            cy: 395.61,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 400.8,
            cy: 443,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 288.29,
            cy: 497.38,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 171.5,
            cy: 569.05,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 63.38,
            cy: 650.18,
            r: 6.03,
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1577.61 1290.82c.11 3.56 3.02 6.42 6.61 6.42s6.5-2.86 6.61-6.42h-13.22ZM1604.1 1290.82c.11 3.56 3.02 6.42 6.61 6.42s6.5-2.86 6.61-6.42h-13.22ZM1630.59 1290.82c.11 3.56 3.02 6.42 6.61 6.42s6.5-2.86 6.61-6.42h-13.22ZM276.16 1290.82c.11 3.56 3.02 6.42 6.61 6.42s6.5-2.86 6.61-6.42h-13.22ZM302.64 1290.82c.11 3.56 3.02 6.42 6.61 6.42s6.5-2.86 6.61-6.42h-13.22ZM329.13 1290.82c.11 3.56 3.02 6.42 6.61 6.42s6.5-2.86 6.61-6.42h-13.22Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1001.65,
            cy: 819.28,
            rx: 9.08,
            ry: 10.39,
            transform: "rotate(-89.57 1001.655 819.281)",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1001.65,
            cy: 819.28,
            rx: 3.7,
            ry: 4.24,
            transform: "rotate(-89.57 1001.655 819.281)",
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 916.56,
            cy: 807.47,
            rx: 5.45,
            ry: 4.77,
            transform: "rotate(-3.07 917.909 808.637)",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 916.99,
            cy: 823.59,
            rx: 5.45,
            ry: 4.77,
            transform: "rotate(-3.07 918.411 824.708)",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m846.48 379.84-1.63-13.81c-.73-6.22-16.61-9.45-35.46-7.23s-33.53 9.07-32.8 15.28l1.63 13.81 68.26-8.05Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 812.35,
            cy: 383.87,
            rx: 34.37,
            ry: 11.33,
            transform: "rotate(-6.73 812.057 383.78)",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 812.35,
            cy: 383.87,
            rx: 13.75,
            ry: 4.54,
            transform: "rotate(-6.73 812.057 383.78)",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1068.49 379.84 1.63-13.81c.73-6.22 16.61-9.45 35.46-7.23s33.53 9.07 32.8 15.28l-1.63 13.81-68.26-8.05Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1102.63,
            cy: 383.87,
            rx: 11.33,
            ry: 34.37,
            transform: "rotate(-83.27 1102.654 383.858)",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1102.63,
            cy: 383.87,
            rx: 4.54,
            ry: 13.75,
            transform: "rotate(-83.27 1102.654 383.858)",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 616.86,
            cy: 403.9,
            rx: 17.91,
            ry: 5.22,
            transform: "rotate(-16.14 616.664 403.819)",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#281f70",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "5.86px"
            },
            d: "m621.79 420.71-4.86-16.82"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m642.72 427.94-6.42-17.21c-1.5-5.18-34.68 4.42-33.18 9.6l4.39 18.21c.45-6.63 30.38-16.58 35.22-10.6Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m646.53 438.14-3.81-10.19c-4.84-5.98-34.77 3.97-35.22 10.6l2.46 10.17c1.72 5.96 38.29-4.62 36.56-10.58Z",
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m646.53 438.14-3.81-10.19c-4.84-5.98-34.77 3.97-35.22 10.6 0 .24.02.49.08.73l2.37 9.44c-2.29-7.91 34.8-16.68 36.56-10.58Z",
            style: {
              fill: "#e2dcfe"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1685.41 962.46c-8.11 6.96-16.24 13.94-25.5 19.37-23.8 14.42-51.28 18.73-77.7 9.1-7.61-2.62-14.98-6.38-21.85-10.49-14.69-9.01-33.08-19.89-48.09-28.44-166.05-93.83-353.04-158.69-545.18-160.61-83.97-1.27-173.37 12.32-251.66 32.45-.04.04-.07.07-.15.13-.06.05-.18.15-.45.24-.26.08-.49.1-.77.05-.38-.06-.76-.35-.91-.57-.32-.49-.28-.63-.31-.88l1.89 1.42c-41.35 10.99-82.15 24.25-122.12 39.61-80.08 30.6-156.43 70.04-229.97 113.99-30.57 18.71-57.99 26.82-92.07 9.15-9.6-4.89-18.58-10.83-27.28-17.13 18.18 10.54 36.96 22.74 58.38 24.39 21.51 1.71 41.58-7.99 59.49-18.92 36.82-21.99 74.25-43.1 112.66-62.2 76.75-38.47 157.11-69.83 240.16-91.83l1.89 1.42c-.03-.24.01-.38-.31-.87-.15-.22-.53-.51-.91-.57 221.39-60.55 441.41-34.63 655.89 57.1 66.17 27.91 130.27 61.82 191.44 99.41 4.7 2.76 8.99 5.25 13.93 7.39l3.61 1.57 3.69 1.36 1.85.68 1.88.57c24.25 7.86 50.19 3.62 72.06-9.12 9.32-5.12 17.74-11.65 26.42-17.79Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 295.02,
            cy: 1032.76,
            rx: 4.45,
            ry: 6.78,
            transform: "rotate(-88.41 295.055 1032.775)",
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 257.14,
            cy: 1008.81,
            rx: 5.29,
            ry: 3.47,
            transform: "rotate(-.53 256.948 1009.825)",
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 244.14,
            cy: 1030.84,
            rx: 8.57,
            ry: 5.62,
            transform: "rotate(-3.07 244.235 1031.08)",
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M295.23 1031.1c0 75.29-50.63 58.8-50.63-.41",
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 373.44,
            cy: 1004.04,
            rx: 11.77,
            ry: 16.19,
            transform: "rotate(-83.96 373.506 1004.068)",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m383.67 1006.16-1.2 4.37v.02l-1.51 5.51a4.641 4.641 0 0 1-5.31 3.34l-9.3-1.7c-2.2-.4-3.81-2.32-3.81-4.57v-9.72c0-2.35 1.75-4.31 4.07-4.62 3.38-.43 8.54-.46 14.37 1.85 2.17.86 3.3 3.25 2.69 5.51Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m383.67 1006.16-1.2 4.37c1.13-4.38-19.94-8.79-19.94-3.1v-4.01c0-2.35 1.75-4.31 4.07-4.62 3.38-.43 8.54-.46 14.37 1.85 2.17.86 3.3 3.25 2.69 5.51Z",
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M257.07 1008.53c-1.65 65.81 100.53 74.65 113.76 8.27",
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 289.94,
            cy: 1140.3,
            rx: 26.63,
            ry: 21.08,
            transform: "rotate(-33.93 289.966 1140.341)",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 294.23,
            cy: 1133.24,
            rx: 20.16,
            ry: 20.12,
            transform: "rotate(-35.06 294.198 1133.171)",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 290.42,
            cy: 1130.6,
            rx: 15.67,
            ry: 15.04,
            transform: "rotate(-35.06 290.381 1130.538)",
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M303.24 1125.54c-.72 7.15-4.42 13.94-10.76 18.39-11.54 8.1-27.46 5.33-35.55-6.19-8.09-11.52-5.27-27.43 6.27-35.54 1.06-.74 2.14-1.39 3.26-1.94 11.11-5.58 24.94-2.34 32.28 8.13 3.65 5.2 5.08 11.29 4.49 17.15Z",
            style: {
              fill: "#ff705e"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M303.24 1125.54c-6.72 5.92-16.89 5.97-19.58-10.88 0 0-13.52 9.7-17.2-14.4 11.11-5.58 24.94-2.34 32.28 8.13 3.65 5.2 5.08 11.29 4.49 17.15Z",
            style: {
              fill: "#ff9d8c"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 273.01,
            cy: 1119.73,
            rx: 16.34,
            ry: 13.65,
            transform: "rotate(-43.06 272.988 1119.702)",
            style: {
              fill: "none",
              stroke: "#de493e",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M958.86 370.56c-38.91 0-70.46-.82-70.46-5.74s31.55-12.07 70.46-12.07 70.46 7.15 70.46 12.07-31.55 5.74-70.46 5.74Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 179.53,
            cy: 976.95,
            r: 13.68,
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 181.07,
            cy: 980.17,
            r: 5.22,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M959.26 943.78c-.7-.77-.97-1.5-.97-2.2 0-2.57 3.65-4.84 3.65-7.81 0-3.13-5.16-5.11-5.16-7.81 0-2.89 3.97-5.18 3.97-7.27 0-1.11-.9-2.38-3.56-4.15",
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M963.4 1059.09s-.01 0-.02.02a45.752 45.752 0 0 1-3.88 2.99c-5.03 3.45-9.99 5.65-13.64 6.85-2.34.76-4.14 1.11-5.09 1.11-1.16 0-.25-1.64 1.32-4.29 1.7-2.89 4.18-6.96 5.65-11.45 1.09-3.3 1.26-6.25.9-9.02-1.12-8.45-7.24-15.27-7.84-25.48-.43-7.19 2.74-10.96 5.72-12.9 2.5-1.63 4.88-1.97 4.88-1.97l1.04-.03 3.3-.09 6.8-.19 2.99-.09 3.72-.1c2.65 2.38 4.75 4.89 6.37 7.46 10.42 16.64.48 36.32-12.23 47.18Z",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M970.66 1044.88c-1.28 4.31-3.48 9.37-7.26 14.21l-.02.02a45.752 45.752 0 0 1-3.88 2.99c-5.03 3.45-9.99 5.65-13.64 6.85 13.87-6.32 19.58-17.01 21.92-24.92 3.73-12.54 1.71-27.91-5.02-38.26-.23-.35-.29-.76-.21-1.13.09-.37.31-.71.65-.94.7-.46 1.63-.26 2.08.43.09.14.18.28.26.42 7.08 11.2 9.09 26.96 5.12 40.33Z",
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M955.45 1005.89c-3.27 4.11-3.08 11.18-2.86 19.38.33 12.29.73 27.58-10.49 40.49 1.7-2.88 4.18-6.95 5.65-11.44 1.09-3.3 1.26-6.25.9-9.02 1.29-6.76 1.11-13.57.94-19.95-.22-8.26-.42-15.47 2.86-20.43.2-.31.42-.61.65-.9.51-.65 1.46-.76 2.1-.24.34.26.53.65.55 1.05.05.37-.06.75-.3 1.06Z",
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 957.63,
            cy: 1046.52,
            rx: 4.85,
            ry: 3.6,
            transform: "rotate(-71.31 957.547 1046.51)",
            style: {
              fill: "#dcbaff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 960.12,
            cy: 1029.09,
            rx: 5.04,
            ry: 3.74,
            transform: "rotate(-88.6 960.166 1029.084)",
            style: {
              fill: "#dcbaff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 944.76,
            cy: 1028.63,
            rx: 2.81,
            ry: 4.99,
            transform: "rotate(-13.52 944.815 1028.691)",
            style: {
              fill: "#dcbaff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 951.51,
            cy: 1059.56,
            rx: 3.86,
            ry: 2.91,
            transform: "rotate(-64.25 951.488 1059.554)",
            style: {
              fill: "#dcbaff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 959.37,
            cy: 947.16,
            r: 3.9,
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M975.63 1011.91c-6.12 3.13-17.64 6.33-29.1-4.99 2.5-1.63 4.88-1.97 4.88-1.97l17.85-.5c2.65 2.38 4.75 4.89 6.37 7.46ZM960.62 949.91c12.57 11.13 25.71 22.14 16.28 34.29l-16.28-34.29ZM957.88 950.22c-12.57 11.13-25.18 21.83-15.76 33.99 0 0 13.12-22.89 15.76-33.99Z",
            style: {
              fill: "#8747cc"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M960.64 949.94c-.56-1.12-2.17-1.1-2.66.05-6.39 14.8-21.11 33.2-15.36 46.9 6.16 14.68 31.17 14.4 34.57-3.52 2.78-14.69-9.47-29.16-16.54-43.43Z",
            style: {
              fill: "#bc83fb"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M971.37 991.88c0-5.09-8.08-5.41-8.08 0M955.52 991.88c0-5.09-8.08-5.41-8.08 0M962.41 996.49c0 4.09-6.02 4.35-6.02 0",
            style: {
              fill: "none",
              stroke: "#8747cc",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "2.6px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#8d7cf7",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "m1711.48 1393.9 3.55-37.65"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: 1715.72,
            cy: 1351.98,
            r: 6.4,
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1799.09 1431.23v70.65c0 3.25-1.74 6.25-4.57 7.86l-9.61 5.5a6.655 6.655 0 0 0-3.36 5.78v22.26h-28.24l-202.34 12.8c-8.82.56-16.28-6.44-16.28-15.28v-111.25c0-9.81 7.32-18.08 17.06-19.28l191.88-23.61c6.23-.77 12.53.78 17.7 4.33l6.05 4.16 6.44 4.43 13.51 9.29a27.131 27.131 0 0 1 11.76 22.36Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1774.57 1404.29v140.89h-3v-140.89c0-3.56-1.55-6.91-4.19-9.14l6.44 4.43c.49 1.5.75 3.09.75 4.71ZM1739.02 1387.23l-204.32 25.14c-6.38.79-11.18 6.21-11.18 12.63v118.3c0 7.32 6.17 13.14 13.48 12.71l204.32-12.02c6.73-.4 11.98-5.97 11.98-12.71v-131.41c0-7.65-6.69-13.57-14.28-12.63Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m1735.22 1396.73-195.84 22.83c-4.58.53-8.02 4.22-8.02 8.59v109.49c0 4.98 4.42 8.93 9.67 8.64l195.84-12.92c4.83-.27 8.6-4.06 8.6-8.64v-119.41c0-5.2-4.8-9.23-10.25-8.59Z",
            style: {
              fill: "#1b154d"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "#8d7cf7"
            },
            d: "M1800.63 1785.53v45.36h-320.7l33.3-58.14 287.4 12.78z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "#5d4dc4"
            },
            d: "m1743.1 1830.89 21.31-40.48 36.22-4.88v45.36h-57.53z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1681.94 1785.87c-.19 33.38-41.79 26.81-50.23 45.02h-52.09c-24.05-20.33 33.51-31.45 24.67-51.98-8.85-20.52 77.65 6.96 77.65 6.96Z",
            style: {
              fill: "#b8aeff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "m1755.26 1813.59-250.74-20.49"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1830.22 1558.92v211.52c0 9.85-7.36 17.88-16.73 19.12l-30.4 3.25-249.41-22.71-.39-212.42 249.92-21.91 29.59 3.94s1.45.21 1.49.22c8.98 1.58 15.93 9.4 15.93 18.99Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1801.12 1555.38v217.79c0 11.43-9.7 20.47-21.1 19.66l-281.78-19.99c-10.32-.73-18.31-9.31-18.31-19.66V1573.9c0-10.19 7.77-18.7 17.92-19.62l281.78-18.51c11.54-1.05 21.49 8.04 21.49 19.62Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M1790.61 1559.84v208.78c0 7.84-6.65 14.04-14.48 13.49L1503 1762.73c-7.08-.5-12.56-6.39-12.56-13.49v-171.67c0-6.99 5.33-12.83 12.29-13.46l273.13-17.73c7.92-.72 14.74 5.51 14.74 13.46Z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M1790.61 1559.84v103.88h-300.17v-86.15c0-7 5.33-12.83 12.3-13.47l273.12-17.73c7.92-.72 14.75 5.52 14.75 13.47ZM1790.61 1663.72v104.9c0 7.84-6.66 14.04-14.48 13.48L1503 1762.72c-7.07-.5-12.56-6.39-12.56-13.48v-85.52h300.17Z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "#5d4dc4"
            },
            d: "M1799.13 1611.05h31.09v3h-31.09zM1830.22 1628.09v3.01l-31.04 1-.1-2.99 31.14-1.02zM1830.22 1716.57v3.86c-4.39 3.36-12.9 8.95-21 8.95-.34 0-.68-.01-1.03-.03-4.06-.25-7.49-1.96-10.19-5.09l2.27-1.96c2.18 2.53 4.83 3.85 8.1 4.05 8.68.52 18.72-7.18 21.85-9.78Z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 1816.59,
            cy: 1696.8,
            rx: 4.41,
            ry: 6.68,
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "g",
          {
            id: "contract-button",
            className: "cursor-pointer",
            onClick: B,
            onKeyDown: B,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "m1735.22 1396.73-195.84 22.83c-4.58.53-8.02 4.22-8.02 8.59v109.49c0 4.98 4.42 8.93 9.67 8.64l195.84-12.92c4.83-.27 8.6-4.06 8.6-8.64v-119.41c0-5.2-4.8-9.23-10.25-8.59Z",
                  className: classNames(
                    K,
                    P === "contract" && de
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M1574.17 1470.97c-3.13.28-2.19-2.12-6.63-1.73-4.11.36-5.58 4.41-5.53 8.94.06 4.67 2.38 8.02 6.45 7.66 3.98-.35 4.45-3.24 7.12-3.48 1.86-.16 3.02.89 3.04 2.71.06 4.58-5.04 6.94-10.33 7.41-8.8.78-12.86-4.87-12.96-13.35-.1-8.71 3.5-15.74 12.51-16.54 3.3-.29 9.58.27 9.63 4.88.02 1.82-1.15 3.3-3.3 3.49ZM1590.42 1490.78c-6.52.58-10.55-3.42-10.63-10.31-.08-6.8 2.99-12.27 10.22-12.91 6.52-.58 10.42 3.26 10.51 10.54.08 6.26-3.37 12.08-10.1 12.68Zm4.14-11.88c-.04-3.11-1.26-5.98-4.69-5.68-3.13.28-4.24 3.62-4.2 6.6.03 2.8 1.51 5.38 4.43 5.12 2.92-.26 4.5-3.11 4.46-6.04ZM1606.48 1466.11c2.16-.19 3.32.91 3.34 3.17 1.03-2.18 3.31-3.41 5.51-3.6 5.04-.45 7.48 2.18 7.55 7.69.02 1.51-.09 2.85-.08 4.32.04 3.69.52 4.18.54 6.31.03 2.27-1.18 3.75-3.38 3.95-2.03.18-3.28-.96-3.3-3.13-.03-2.4.2-4.64.17-7.04-.03-2.49-.32-5.71-3.33-5.44-2.33.21-3.79 1.89-3.76 4.43.05 4.18.37 5.88.4 8.55.03 2.18-1.23 3.71-3.39 3.9-1.78.16-3.36-1.17-3.38-3.04-.02-2.04.38-3.73.33-7.95-.05-4.31-.58-6.35-.6-8-.03-2.4.97-3.91 3.38-4.12ZM1635.11 1460.95c.02 1.69-.1 2.32-.09 3.03 0 .71.56.75 1.11.7.97-.09 1.9-.35 2.92-.44 1.82-.16 2.72.43 2.74 2.56.03 2.13-1.35 3.81-3.34 3.99-.93.08-1.91.04-2.88.12-1.06.09-1.08 1.7-1.06 3.43.04 3.64.07 6.08 1.77 5.93.72-.06 2.11-.81 2.83-.87 1.52-.14 2.51.67 2.53 2.31.04 3.24-3.46 4.8-6.13 5.03-5.38.48-6.74-3.49-6.79-8.25-.03-2.35.15-5 .14-6.19-.02-2.09-3.56-.04-3.6-3.55-.02-1.73.73-3.04 2.42-3.19.8-.07 1.35-.3 1.35-.7 0-.58-.1-1.24-.11-1.9-.03-2.18.25-4.2 3.13-4.46 1.52-.14 3.06.8 3.08 2.44ZM1644.19 1466.01c-.03-2.13 1.44-3.33 3.39-3.5 2.58-.23 3.32 1.53 3.61 3.86 0 .04 0 .27.09.26.04 0 .08-.1.17-.19.95-2.13 1.81-4.12 4.52-4.36 2.07-.18 3.45 1.12 3.47 3.3.02 1.38-.47 2.89-1.61 3.7-1.76 1.36-3.85.34-5.44 2.26-.96 1.15-1.16 1.93-1.15 3.44.03 2.58.62 5.37.63 6.61.03 2.22-.97 3.78-3.09 3.97-2.54.22-3.87-.99-3.9-3.7-.03-2.89.31-5.85.28-8.74-.05-3.73-.95-4.59-.97-6.9ZM1679.45 1465.78c.02 1.42-.17 3.22-.16 4.64.07 6.04.56 7.91.58 9.38.02 1.91-1.53 2.94-3.14 3.08-2.75.24-2.83-2.28-3.8-2.2-.59.05-1.79 2.69-5.09 2.99-5.25.46-7.72-4.3-7.78-9.23-.1-8.53 3.82-13.64 11.35-14.3 4.4-.39 7.98.9 8.03 5.65Zm-9.94 11.82c3.3-.29 4.22-4.82 4.19-7.49-.03-2.62-.1-4.53-3.1-4.26-3.64.32-4.57 4.41-4.53 7.56.03 2.22.94 4.41 3.44 4.19ZM1700.77 1463.28c.02 1.78-1.45 2.97-3.01 3.11-2.54.23-2.49-2.4-5.03-2.18-3.34.3-4.75 2.87-4.71 6.29.04 2.93 1.38 5.66 4.6 5.37 3.77-.33 3.6-3.52 6.27-3.76 1.57-.14 2.81 1.04 2.83 2.68.05 4.09-5.05 6.5-8.65 6.81-7.83.69-10.73-4.08-10.81-10.78-.09-7.2 4.39-11.77 10.62-12.32 3.26-.29 7.85.91 7.9 4.77ZM1712.61 1454.09c.02 1.69-.1 2.32-.09 3.03s.56.75 1.11.7c.97-.09 1.9-.35 2.92-.44 1.82-.16 2.72.43 2.74 2.56.03 2.13-1.35 3.81-3.34 3.99-.93.08-1.91.04-2.88.12-1.06.09-1.08 1.7-1.06 3.43.04 3.64.07 6.08 1.77 5.93.72-.06 2.11-.81 2.83-.87 1.52-.14 2.51.67 2.53 2.31.04 3.24-3.46 4.8-6.13 5.03-5.38.48-6.74-3.49-6.79-8.25-.03-2.35.15-5 .14-6.19-.02-2.09-3.56-.04-3.6-3.55-.02-1.73.73-3.04 2.42-3.19.8-.07 1.35-.3 1.35-.7 0-.58-.1-1.24-.11-1.9-.03-2.18.25-4.2 3.13-4.46 1.52-.14 3.06.8 3.08 2.44Z",
                  style: {
                    fill: "#e2dcfe"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "g",
          {
            id: "wallet-button",
            className: "cursor-pointer",
            onClick: G,
            onKeyDown: G,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M1790.61 1559.84v103.88h-300.17v-86.15c0-7 5.33-12.83 12.3-13.47l273.12-17.73c7.92-.72 14.75 5.52 14.75 13.47Z",
                  className: classNames(
                    K,
                    P === "wallet" && de
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M1603.09 1623.81c-1.07 2.39-1.76 4.03-4.67 4.12-2.64.08-4.03-1.13-5.05-3.42-1.07-2.42-1.85-4.95-2.59-7.52-.05-.23-.28-1.06-.69-1.04-.46.01-.79 1.27-.88 1.6-.74 2.57-1.02 5.31-2.31 7.66-.56 1.03-1.85 2.37-2.96 2.81-.56.2-1.06.36-1.67.37-1.81.05-3.24-.93-4.26-2.33-1.48-2.09-6.2-22.46-6.2-23.8 0-3.05 1.3-4.43 4.07-4.51 1.3-.04 2.18.35 2.87 1.4 1.07 1.64 1.25 4.82 1.44 6.81.37 3.74 1.3 7.51 1.81 11.15.09.41.37 1.84.97 1.82.32 0 .46-.66.56-.85.88-3.17 1.53-6.62 2.59-9.7.69-1.96 2.13-3.02 4.03-3.08 3.56-.1 4.17 3.58 5.18 6.84.28.82 1.53 6.11 2.31 6.09.23 0 .42-.1.51-.25.56-.76 1.11-7.99 1.25-9.53.23-2.23.28-4.68.65-6.92.37-2.56 1.11-4.57 4.07-4.65 2.73-.08 3.93 1.37 3.93 4.19s-3.75 19.92-4.95 22.73ZM1629.61 1609.63c0 1.48-.23 3.34-.23 4.82 0 6.3.51 8.27.51 9.8 0 1.99-1.71 2.96-3.47 3.01-3.01.09-3.05-2.55-4.12-2.52-.65.02-1.99 2.7-5.6 2.8-5.74.16-8.38-4.95-8.38-10.08 0-8.89 4.35-13.97 12.59-14.2 4.81-.14 8.7 1.42 8.7 6.37Zm-11.02 11.7c3.61-.1 4.67-4.76 4.67-7.54s-.05-4.72-3.33-4.63c-3.98.11-5.05 4.31-5.05 7.6 0 2.31.97 4.65 3.7 4.57ZM1640.86 1599.82c0 1.62-1.11 7.76-1.11 15.54 0 2.13.14 4.95 1.57 4.91.6-.02 1.25-.59 2.36-.62 1.53-.04 2.31 1.37 2.31 2.8 0 3.19-3.38 4.35-6.11 4.43-5.42.15-6.48-4.35-6.48-8.89 0-8.7.19-13.85.19-19.26 0-2.41 1.3-3.83 3.7-3.9 3.24-.09 3.56 2.17 3.56 4.99ZM1656.6 1598.31c0 2.59-1.62 6.85-1.62 13.29 0 1.76 0 3.52.23 5.27.09.97.46 3 1.85 2.96.88-.03 1.48-.5 2.41-.53 1.44-.04 2.04 1.56 2.04 2.95 0 2.96-2.96 4.39-5.46 4.46-5.09.15-6.76-3.05-7.27-7.85-.32-2.95-.32-7.68-.32-11.47 0-3.19.09-6.25.42-9.13.28-2.23 1.9-3.9 4.17-3.96 2.45-.07 3.56 1.75 3.56 4.02ZM1682.38 1612.52c-2.13 3.49-8.98 2.43-12.22 3.27-.7.2-1.11.54-1.11 1.33 0 2.5 2.64 3.54 4.81 3.47 4.86-.14 4.17-3.17 6.9-3.25 1.57-.04 3.19 1.16 3.19 2.83 0 4.12-6.57 6.21-9.95 6.3-7.45.21-11.53-3.93-11.53-11.34 0-7.82 3.01-13.28 11.39-13.52 4.81-.14 9.54 2.32 9.54 7.32 0 1.25-.37 2.51-1.02 3.59Zm-5.37-3.73c0-1.9-2.64-2.24-3.98-2.2-2.31.07-3.89 1.73-3.89 4 0 .97 1.16.94 2.55.9 2.13-.06 5.32-.2 5.32-2.7ZM1689.51 1599.82c0-2.73 1.53-3.84 4.12-3.91 1.71-.05 2.82.75 2.82 2.56 0 1.16-.42 2.33-.42 3.44 0 .6.42.59.93.58.97-.03 2.04-.29 3.05-.32 1.9-.05 3.24.97 3.24 2.92 0 2.31-1.62 3.8-3.94 3.86-1.06.03-1.67-.09-2.68-.06-.32 0-.93.03-1.06.31-.23.38-.28 4.04-.28 4.64.05 2.08-.23 5.14 1.9 5.08 1.2-.03 2.27-.85 3.56-.89 1.34-.04 2.13 1.33 2.13 2.62 0 3.01-2.82 4.76-7.08 4.88-5.88.17-6.99-4.06-6.99-8.83 0-2.5.19-5.05.19-7.55-1.99.06-3.7-1-3.7-3.23 0-.51.09-1.21.37-1.63 1.44-2.36 4.07-1.18 4.07-2.25 0-.65-.23-1.43-.23-2.21Z",
                  style: {
                    fill: "#e2dcfe"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "g",
          {
            id: "faucet-button",
            className: "cursor-pointer",
            onClick: $,
            onKeyDown: $,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M1790.61 1663.72v104.9c0 7.84-6.66 14.04-14.48 13.48L1503 1762.72c-7.07-.5-12.56-6.39-12.56-13.48v-85.52h300.17Z",
                  className: K
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M1586.99 1696.81c2.5.07 4.77.84 4.78 3.8.01 2.96-2.02 3.36-4.66 3.29-2.55-.08-3.98-.77-6.48-.84-2.55-.08-4.21.15-4.2 3.49 0 1.99 1.49 3.1 3.11 3.15 2.08.06 3.38-.45 5.32-.4 2.5.07 4.63.65 4.64 3.47.01 3.42-2.07 4.15-5.12 4.06-1.81-.05-3.06-.41-4.86-.47-2.13-.06-2.45.58-2.45 2.43 0 1.43.52 3.49.53 4.92 0 2.31-.82 3.82-3.65 3.73-3.24-.1-4.17-1.88-4.18-4.89-.01-3.52.49-4.7.47-9.89-.02-4.26-.86-7.66-.87-10.72-.02-5.18 3.69-5.49 7.62-5.37 1.99.06 4.68.23 6.71.29 1.11.03 2.22-.07 3.29-.04ZM1613.52 1711.24c0 1.48-.22 3.33-.21 4.81.02 6.29.54 8.3.54 9.83 0 1.99-1.7 2.86-3.46 2.81-3.01-.09-3.07-2.73-4.13-2.76-.65-.02-1.98 2.58-5.59 2.47-5.74-.17-8.4-5.43-8.42-10.57-.03-8.89 4.3-13.71 12.54-13.46 4.82.14 8.71 1.92 8.73 6.88Zm-10.98 11.06c3.61.11 4.66-4.49 4.65-7.27-.01-2.73-.06-4.72-3.35-4.82-3.98-.12-5.03 4.01-5.02 7.3 0 2.31.99 4.7 3.72 4.78ZM1624.25 1709.62c0 2.59-.49 4.75-.48 7.3.01 2.82.76 5.71 3.82 5.8 1.44.04 2.82-.56 3.33-1.94.37-1.01.45-3.92.44-5.08 0-1.81-.29-3.25-.3-5.05-.01-3.19.86-5.02 4.06-4.92 2.73.08 3.16 3.52 3.17 5.6.01 3.52-.35 5.36-.34 8.6 0 1.2 0 2.68.24 3.25.28.93.57 2.79.57 3.76 0 2.08-1.98 2.76-3.79 2.71-2.96-.09-3.16-2.78-3.94-2.8-.7-.02-1.06.94-2.45 1.55-1.29.52-2.68.8-4.07.76-6.58-.19-7.43-5.77-7.45-10.59 0-2.18.22-3.09.21-4.76 0-1.3-.61-3.49-.62-4.78 0-2.36 1.28-3.66 3.65-3.59 2.73.08 3.94 1.5 3.95 4.19ZM1661.85 1712.03c0 1.85-1.61 2.91-3.32 2.86-2.78-.08-2.69-2.81-5.47-2.89-3.66-.11-5.22 2.39-5.21 5.95.01 3.05 1.46 6.06 4.98 6.16 4.12.12 3.97-3.22 6.89-3.13 1.71.05 3.06 1.43 3.07 3.15.02 4.26-5.58 6.13-9.52 6.01-8.57-.25-11.69-5.58-11.71-12.56-.03-7.5 4.91-11.7 11.72-11.5 3.57.11 8.57 1.92 8.59 5.95ZM1684.83 1717.75c-2.12 3.36-8.98 1.91-12.21 2.55-.69.16-1.11.48-1.11 1.26 0 2.5 2.65 3.69 4.83 3.75 4.86.14 4.16-2.93 6.89-2.85 1.57.05 3.2 1.34 3.21 3.01.02 4.12-6.55 5.82-9.93 5.72-7.45-.22-11.54-4.6-11.57-12-.03-7.82 2.96-13.1 11.34-12.85 4.82.14 9.55 2.87 9.57 7.87 0 1.25-.36 2.49-1.01 3.53Zm-5.38-4.05c0-1.9-2.65-2.39-3.99-2.43-2.32-.07-3.88 1.5-3.88 3.77 0 .97 1.16 1.01 2.55 1.05 2.13.06 5.32.11 5.32-2.39ZM1691.91 1705.47c0-2.73 1.52-3.75 4.11-3.67 1.71.05 2.83.92 2.83 2.72 0 1.16-.41 2.3-.4 3.41 0 .6.42.61.93.63.97.03 2.04-.17 3.05-.14 1.9.06 3.25 1.16 3.25 3.1 0 2.31-1.61 3.7-3.92 3.63-1.07-.03-1.67-.19-2.69-.22-.32-.01-.93-.03-1.07.25-.23.36-.26 4.02-.26 4.62.05 2.09-.21 5.13 1.92 5.19 1.2.04 2.27-.72 3.56-.68 1.34.04 2.13 1.45 2.14 2.75.01 3.01-2.81 4.59-7.07 4.46-5.88-.17-7.01-4.46-7.02-9.23 0-2.5.17-5.04.16-7.54-1.99-.06-3.71-1.22-3.72-3.44 0-.51.09-1.2.36-1.61 1.43-2.27 4.07-.94 4.07-2.01 0-.65-.24-1.44-.24-2.23Z",
                  style: {
                    fill: "#e2dcfe"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "#8d7cf7"
            },
            d: "M118.37 1782.14v48.75h320.7l-33.3-63.08-287.4 14.33z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "#5d4dc4"
            },
            d: "m175.9 1830.89-21.31-39.59-36.22-9.16v48.75h57.53z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M263.36 1780.18c-19.19 23.72 22.54 24.17 6.45 50.71h97.42c-77.5-17.26-56.12-53.21-56.12-53.21l-47.76 2.49Z",
            style: {
              fill: "#b8aeff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#5d4dc4",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "m163.68 1811.48 252.12-19.21"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m322.95 1479.99-6.16-11.91a14.883 14.883 0 0 0-11.77-7.97l-117.58-11.55c-5.32-.52-10.5 1.84-13.6 6.2l-7.83 11.02 156.93 14.21Z",
            style: {
              fill: "#281f70"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "m385.71 1482.73-.39 287.37-222.57 20.27-26.84 2.44-30.4-3.25c-9.37-1.24-16.73-9.27-16.73-19.12v-293.6c0-9.59 6.95-17.41 15.93-18.99.04 0 1.49-.21 1.49-.21l29.59-3.95 249.92 29.04Z",
            style: {
              fill: "#8d7cf7"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M121.69 1724.28c-3.04 3.39-6.98 5.09-11.63 5.09-3.55 0-7.52-.98-11.83-2.96-3.76-1.72-7.08-3.86-9.45-5.56v-3.75c5.31 4.08 21.66 15.21 30.68 5.18l2.23 2Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M117.88 1473.31v299.87c0 11.43 9.7 20.47 21.1 19.66l281.78-19.99c10.32-.73 18.31-9.31 18.31-19.66v-254.23c0-10.19-7.77-18.7-17.92-19.62l-281.78-25.64c-11.54-1.05-21.49 8.04-21.49 19.62Z",
            style: {
              fill: "#5d4dc4"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M428.56 1502.62v120.26H128.39v-145.12c0-7.95 6.83-14.18 14.75-13.46l273.12 24.85c6.97.63 12.3 6.47 12.3 13.47ZM428.56 1622.88v126.36c0 7.09-5.49 12.98-12.56 13.48l-273.13 19.38c-7.82.56-14.48-5.64-14.48-13.48v-145.74h300.17Z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "#5d4dc4"
            },
            d: "M88.78 1549.34h30.1v3h-30.1zM118.93 1567.39l-.1 3-30.05-1.04v-3l30.15 1.04z"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ellipse",
          {
            cx: 102.41,
            cy: 1696.8,
            rx: 3.9,
            ry: 5.9,
            style: {
              fill: "#fff"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M428.56 1502.62v120.26H128.39v-145.12c0-7.95 6.83-14.18 14.75-13.46l273.12 24.85c6.97.63 12.3 6.47 12.3 13.47Z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "g",
          {
            id: "audio-button",
            className: "cursor-pointer",
            onClick: ce,
            onKeyDown: ce,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M428.56 1502.62v120.26H128.39v-145.12c0-7.95 6.83-14.18 14.75-13.46l273.12 24.85c6.97.63 12.3 6.47 12.3 13.47Z",
                  className: classNames(
                    K,
                    O && de
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  id: "audio-on-text",
                  d: "M215.64 1535.81c1.91 3.4 3.5 8.91 4.82 13.54.82 2.91 3.14 8.84 3.07 11.43-.05 2.07-1.04 3.7-4.06 3.61-2.38-.07-3.33-1.75-4.17-3.9-.66-1.63-1.72-2.8-3.51-2.95-.85-.07-2.64-.32-4.59-.38-3.16-.1-4.24.78-5.02 1.99-1.31 2.01-1.78 4.71-4.85 4.62-3.18-.09-4.01-1.64-3.95-3.93.07-3.1 5.61-16.2 7.07-20.11 1.4-3.77 3.61-7.31 8.73-7.1 2.2.09 5.18.83 6.47 3.16Zm-3.96 16.33c.85-.12 1.57-.76 1.59-1.8.05-1.9-1.64-6.32-2.39-8.2-.33-.77-.86-1.74-1.81-1.78-.55-.02-1.26.29-1.47.71-1.2 1.96-3.26 7.74-3.28 8.69-.05 2 1.85 2.44 3.45 2.49 1.3.04 2.85.09 3.91-.11ZM233.49 1553.05c-.08 3.05.88 5.53 3.91 5.62 3.85.12 4.51-4.41 4.59-6.98.06-2.06-.28-4-.22-6.06.07-2.58.9-4.24 3.87-4.13 2.96.11 3.78 2.06 3.71 4.58-.07 2.62-.77 5.12-.85 7.78-.12 4.11.78 6.84.72 8.71-.06 2.14-1.98 3.12-4.06 3.06-3.11-.09-3.52-2.9-4.05-2.92-.93-.03-1.93 2.71-6.62 2.58-6.53-.18-8.07-5.26-7.93-10.39.03-1.18.23-2.96.26-4.09.05-1.84-.29-3.88-.24-5.72.07-2.74 1.24-4.11 4-4.01 1.72.06 3.91.85 3.84 3.49-.08 3.1-.81 4.35-.92 8.48ZM268.79 1543.25l.02-.56c.05-1.81-.42-3.54-.37-5.35.07-2.28 1.44-3.61 3.87-3.51 3.37.14 4.04 3.09 3.96 5.86-.11 3.47-.69 10.38-.84 15.19-.12 4.01.5 5.37.43 7.77-.08 2.63-1.58 3.74-4.33 3.66-2.99-.08-2.82-2.71-3.63-2.74-.38-.01-1.22 1.03-2.43 1.64-1.21.66-2.6.76-3.89.73-6.72-.18-9.39-6.03-9.23-11.76.2-7.09 4.02-12.32 11.17-12.05 1.67.06 3.72.37 5.27 1.13Zm.15 9.33c.03-1.11.02-2.23-.14-3.3-1.12-.78-2.4-1.24-3.78-1.29-3.73-.13-5.3 2.7-5.4 6-.08 2.74.65 5.74 4.05 5.84 4.34.13 5.18-3.96 5.27-7.25ZM287.56 1549.93c-.02.69-.25 3.49-.26 3.99-.09 2.85.4 5.3.32 7.78-.1 3.07-.76 4.84-4.18 4.75-3.01-.08-3.62-1.57-3.54-4.33.05-1.56.52-3.07.57-4.59.07-2.21-.29-4.39-.22-6.6.07-2.4.81-4.77 3.68-4.67 2.49.09 3.72 1.28 3.65 3.67Zm1.18-10.59c-.08 2.44-1.22 4.56-3.99 4.46-2.73-.1-4.65-2.11-4.57-4.74.09-2.91 1.59-4.1 4.42-3.98 2.59.11 4.22 1.92 4.15 4.27ZM302.1 1567.28c-7.14-.2-11.38-4.8-11.15-11.9.22-7.02 3.84-12.26 11.79-11.96 7.11.27 11.15 4.7 10.9 12.15-.21 6.4-4.2 11.92-11.53 11.72Zm5.04-11.65c.1-3.19-1.09-6.29-4.83-6.42-3.43-.12-4.79 3.18-4.89 6.24-.09 2.88 1.4 5.71 4.59 5.81s5.03-2.63 5.13-5.63ZM337.02 1568.14c-7.51-.21-11.72-4.29-11.45-12.33.24-7.19 4.65-11.28 11.68-11.01 8.28.31 10.96 5.17 10.69 12.68-.21 5.99-4.89 10.82-10.93 10.66Zm4.64-12.03c.07-1.97-1.03-5.2-4.12-5.31-3.96-.14-5.32 2.66-5.42 5.63-.11 3.06 1.79 5.6 4.85 5.69 2.91.09 4.58-2.69 4.69-6.01ZM355 1545.38c2.25.09 3.4 1.33 3.32 3.61 1.18-2.06 3.59-2.99 5.88-2.91 5.21.2 7.59 3.13 7.38 8.62-.06 1.51-.24 2.83-.29 4.29-.14 3.67.32 4.22.24 6.34-.08 2.25-1.4 3.59-3.67 3.53-2.1-.06-3.32-1.33-3.24-3.51.09-2.4.43-4.61.52-7 .09-2.49-.05-5.74-3.17-5.84-2.42-.08-4.02 1.42-4.11 3.96-.15 4.19.09 5.93 0 8.6-.08 2.18-1.45 3.57-3.7 3.5-1.86-.05-3.44-1.57-3.37-3.44.07-2.05.58-3.69.73-7.93.16-4.33-.3-6.45-.24-8.11.09-2.42 1.2-3.81 3.73-3.71Z",
                  className: classNames(!O && "hidden", "fill-[#e2dcfe]")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  id: "audio-off-text",
                  d: "M208.64 1535.81c1.91 3.4 3.5 8.91 4.82 13.54.82 2.91 3.14 8.84 3.07 11.43-.05 2.07-1.04 3.7-4.06 3.61-2.38-.07-3.33-1.75-4.17-3.9-.66-1.63-1.72-2.8-3.51-2.95-.85-.07-2.64-.32-4.59-.38-3.16-.1-4.24.78-5.02 1.99-1.31 2.01-1.78 4.71-4.85 4.62-3.18-.09-4.01-1.64-3.95-3.93.07-3.1 5.61-16.2 7.07-20.11 1.4-3.77 3.61-7.31 8.73-7.1 2.2.09 5.18.83 6.47 3.16Zm-3.96 16.33c.85-.12 1.57-.76 1.59-1.8.05-1.9-1.64-6.32-2.39-8.2-.33-.77-.86-1.74-1.81-1.78-.55-.02-1.26.29-1.47.71-1.2 1.96-3.26 7.74-3.28 8.69-.05 2 1.85 2.44 3.45 2.49 1.3.04 2.85.09 3.91-.11ZM226.49 1553.05c-.08 3.05.88 5.53 3.91 5.62 3.85.12 4.51-4.41 4.59-6.98.06-2.06-.28-4-.22-6.06.07-2.58.9-4.24 3.87-4.13 2.96.11 3.78 2.06 3.71 4.58-.07 2.62-.77 5.12-.85 7.78-.12 4.11.78 6.84.72 8.71-.06 2.14-1.98 3.12-4.06 3.06-3.11-.09-3.52-2.9-4.05-2.92-.93-.03-1.93 2.71-6.62 2.58-6.53-.18-8.07-5.26-7.93-10.39.03-1.18.23-2.96.26-4.09.05-1.84-.29-3.88-.24-5.72.07-2.74 1.24-4.11 4-4.01 1.72.06 3.91.85 3.84 3.49-.08 3.1-.81 4.35-.92 8.48ZM261.79 1543.25l.02-.56c.05-1.81-.42-3.54-.37-5.35.07-2.28 1.44-3.61 3.87-3.51 3.37.14 4.04 3.09 3.96 5.86-.11 3.47-.69 10.38-.84 15.19-.12 4.01.5 5.37.43 7.77-.08 2.63-1.58 3.74-4.33 3.66-2.99-.08-2.82-2.71-3.63-2.74-.38-.01-1.22 1.03-2.43 1.64-1.21.66-2.6.76-3.89.73-6.72-.18-9.39-6.03-9.23-11.76.2-7.09 4.02-12.32 11.17-12.05 1.67.06 3.72.37 5.27 1.13Zm.15 9.33c.03-1.11.02-2.23-.14-3.3-1.12-.78-2.4-1.24-3.78-1.29-3.73-.13-5.3 2.7-5.4 6-.08 2.74.65 5.74 4.05 5.84 4.34.13 5.18-3.96 5.27-7.25ZM280.56 1549.93c-.02.69-.25 3.49-.26 3.99-.09 2.85.4 5.3.32 7.78-.1 3.07-.76 4.84-4.18 4.75-3.01-.08-3.62-1.57-3.54-4.33.05-1.56.52-3.07.57-4.59.07-2.21-.29-4.39-.22-6.6.07-2.4.81-4.77 3.68-4.67 2.49.09 3.72 1.28 3.65 3.67Zm1.18-10.59c-.08 2.44-1.22 4.56-3.99 4.46-2.73-.1-4.65-2.11-4.57-4.74.09-2.91 1.59-4.1 4.42-3.98 2.59.11 4.22 1.92 4.15 4.27ZM295.1 1567.27c-7.14-.2-11.38-4.8-11.15-11.9.22-7.02 3.84-12.26 11.79-11.96 7.11.27 11.15 4.7 10.9 12.15-.21 6.4-4.2 11.92-11.53 11.72Zm5.04-11.65c.1-3.19-1.09-6.29-4.83-6.42-3.43-.12-4.79 3.18-4.89 6.24-.09 2.88 1.4 5.71 4.59 5.81s5.03-2.63 5.13-5.63ZM329.82 1568.27c-7.54-.5-11.67-4.78-11.23-12.87.4-7.23 4.9-11.19 11.95-10.65 8.3.63 10.89 5.63 10.47 13.19-.34 6.03-5.13 10.72-11.19 10.32Zm4.91-11.94c.11-1.99-.92-5.28-4.02-5.51-3.97-.29-5.39 2.47-5.56 5.47-.17 3.08 1.68 5.71 4.74 5.92 2.92.2 4.65-2.53 4.84-5.87ZM344.69 1549.09c1.7-.82 3.21.87 3.38-2.23.05-.81 0-1.67.05-2.48.25-4.45 2.76-7.01 7.27-6.65 2.42.19 6.07 1.25 5.89 4.43-.09 1.57-1.54 3.03-3.17 2.9-.75-.06-1.29-.68-2.04-.74-1.76-.14-2.17 1.54-2.25 2.93-.07 1.3.03 1.8.82 1.86 1.06.08 1.95-.03 3.05.05 2.02.15 3.53.76 3.39 3.13-.13 2.32-1.88 3.5-4.29 3.32-.7-.05-1.66-.3-2.41-.36-.44-.03-.63.22-.67.94-.16 2.77.3 5.59.13 8.59-.15 2.55-.59 4.9-3.72 4.69-2.83-.19-3.65-2.18-3.5-4.78.23-4.04.9-5.66 1.08-8.76.06-1.12-.88-1.01-1.98-1.27-1.24-.22-2.59-.73-2.45-3.3.06-1.08.51-1.82 1.43-2.29ZM380.57 1543.44c-.08 1.29-1.06 3.3-2.75 3.17-1.69-.13-1.52-.7-2.56-.78-1.65-.13-2.29 1.07-2.38 2.68-.03.53-.08 2.05.62 2.1 1.3.1 2.53-.12 3.92-.02 1.86.14 3 1.25 2.9 3.02-.14 2.43-1.6 3.66-4.11 3.48-.69-.05-1.41-.33-2.11-.38-1-.07-1.28.35-1.34 1.29-.13 2.13.3 6.03.12 9-.13 2.26-1.07 4.07-3.41 3.91-2.87-.19-3.71-1.63-3.54-4.38.2-3.42.93-6.9 1.04-8.73.17-2.85-4.81-.34-4.54-4.94.07-1.21.54-2.47 1.78-2.69 1.42-.25 2.79.34 2.9-1.57.02-.4.06-1.83.08-2.19.28-4.82 3.46-7.52 8.11-7.15 2.38.19 5.45 1.19 5.27 4.17Z",
                  className: classNames(O && "hidden", "fill-[#e2dcfe]")
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M428.56 1622.88v126.36c0 7.09-5.49 12.98-12.56 13.48l-273.13 19.38c-7.82.56-14.48-5.64-14.48-13.48v-145.74h300.17Z",
            style: {
              fill: "#1b154d"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "g",
          {
            id: "screen-button",
            className: "cursor-pointer",
            onClick: pe,
            onKeyDown: pe,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M428.56 1622.88v126.36c0 7.09-5.49 12.98-12.56 13.48l-273.13 19.38c-7.82.56-14.48-5.64-14.48-13.48v-145.74h300.17Z",
                  className: classNames(
                    K,
                    P !== "off" && de
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  id: "screen-on-text",
                  d: "M171.95 1707.2c-.05-2.11 1.66-3.49 3.86-3.55 2.93-.09 4.42 3.91 9.1 3.76 2.28-.08 5.26-.81 5.2-3.43-.08-3.45-7.05-2.65-12.47-4.84-3.38-1.27-5.28-4.26-5.36-7.59-.16-7.2 5.96-10.12 12.57-10.25 3.05-.06 7.71.67 9.77 3.1.63.71 1.01 1.48 1.03 2.35.04 1.84-1.51 3.67-3.57 3.72-2.16.05-4.44-2.32-8.42-2.23-1.61.04-3.84.58-3.8 2.48.14 6.49 17.87-.15 18.16 13.1.16 7.11-6.66 10.31-13.32 10.56-5.25.19-12.62-1.44-12.75-7.18ZM222.36 1694.26c.05 2.1-1.47 3.34-3.62 3.4-2.75.08-2.48-3.38-6.45-3.27-3.63.1-5.07 3.8-5.01 6.78s2.01 6.24 5.64 6.11 3.99-3.54 7.25-3.64c1.7-.05 3.23 1.57 3.26 3.14.1 4.67-6.91 6.61-10.72 6.75-8.09.3-12.49-5.05-12.65-12.29-.15-6.91 4.46-12.72 11.94-12.89 4.52-.11 10.25 1.09 10.35 5.91ZM225.98 1691.5c-.05-2.29 1.66-3.47 3.94-3.52 3.01-.07 3.89 1.85 4.24 4.36 0 .05 0 .28.1.28.05 0 .1-.1.19-.19 1.08-2.21 2.07-4.27 5.2-4.35 2.39-.06 3.99 1.41 4.04 3.73.03 1.46-.52 3.04-1.82 3.83-2.02 1.33-4.45.13-6.27 2.07-1.11 1.17-1.33 1.98-1.3 3.6.06 2.75.77 5.76.79 7.09.05 2.37-1.09 3.98-3.56 4.07-2.97.11-4.53-1.26-4.6-4.17-.07-3.09.31-6.25.24-9.34-.09-4-1.15-4.97-1.2-7.45ZM265.3 1697.95c-2.11 3.52-9.23 2.48-12.58 3.33-.72.21-1.15.55-1.13 1.35.06 2.54 2.83 3.57 5.09 3.49 5.03-.17 4.24-3.23 7.06-3.32 1.62-.05 3.31 1.15 3.35 2.83.09 4.15-6.63 6.31-10.13 6.44-7.76.29-12.13-3.89-12.29-11.43-.17-7.97 2.86-13.51 11.6-13.72 4.98-.12 9.9 2.38 10.01 7.41.03 1.26-.32 2.53-.97 3.62Zm-5.62-3.76c-.04-1.92-2.78-2.27-4.18-2.23-2.41.06-4.01 1.75-3.96 4.05.02.99 1.23.95 2.67.91 2.21-.06 5.52-.21 5.46-2.73ZM289.95 1693.86c.11 5.15-4.32 6.21-8.33 6.33-1.22.04-2.44-.11-3.7-.07-1.03.03-2.21.07-2.18 1.37.05 2.46 2.3 3.96 4.68 3.88 3.97-.14 4.63-3.8 7.14-3.89 1.76-.06 3.13 1.23 3.17 2.98.1 4.74-6.18 6.44-9.86 6.58-7.98.3-12.02-4.72-12.18-11.89-.17-7.77 4.13-12.3 11.69-12.48 4.71-.11 9.45 2.08 9.56 7.18Zm-11.74 2.64c1.73-.05 5.23-.34 5.18-2.69-.04-1.85-1.83-2.45-3.51-2.4-2.48.07-4.05 1.54-3.99 4.05.02 1.02 1.01 1.08 2.32 1.04ZM296.88 1686.33c2.34-.06 3.6 1.15 3.65 3.48 1.1-2.18 3.54-3.29 5.9-3.34 5.39-.13 8.02 2.71 8.15 8.34.03 1.54-.07 2.91-.04 4.4.08 3.77.59 4.29.64 6.47.05 2.31-1.22 3.77-3.57 3.85-2.17.08-3.51-1.15-3.56-3.38-.05-2.46.17-4.75.11-7.2s-.4-5.87-3.63-5.78c-2.51.07-4.07 1.71-4.02 4.32.09 4.3.45 6.07.51 8.81.05 2.24-1.29 3.75-3.63 3.84-1.93.07-3.67-1.38-3.71-3.31-.05-2.11.38-3.83.28-8.18s-.7-6.59-.73-8.29c-.05-2.48 1.02-3.97 3.64-4.04ZM338.58 1708.76c-6.77.25-11.03-4.01-11.19-10.99s3.01-12.24 10.54-12.42c6.73-.16 10.77 3.93 10.93 11.22.14 6.27-3.34 11.92-10.28 12.18Zm4.16-11.73c-.07-3.13-1.36-6.08-4.9-5.99-3.25.09-4.37 3.4-4.3 6.4.06 2.83 1.62 5.52 4.65 5.41s4.62-2.88 4.55-5.83ZM351.54 1688.32c1.58-.97 3.16.54 3.09-2.52-.02-.8-.12-1.64-.14-2.44-.1-4.39 2.12-7.14 6.49-7.22 2.34-.04 5.93.64 6 3.76.03 1.54-1.25 3.11-2.82 3.15-.72.02-1.29-.54-2.01-.53-1.71.04-1.97 1.72-1.94 3.09.03 1.28.17 1.77.94 1.75 1.02-.03 1.87-.22 2.94-.25 1.96-.05 3.45.4 3.5 2.73s-1.53 3.61-3.87 3.68c-.68.02-1.62-.13-2.35-.11-.43.01-.59.28-.58.99.06 2.74.72 5.46.78 8.42.06 2.52-.19 4.87-3.23 4.98-2.75.1-3.69-1.77-3.75-4.34-.09-3.99.44-5.65.37-8.71-.02-1.11-.92-.9-2-1.05-1.21-.1-2.56-.46-2.61-2.99-.02-1.07.35-1.83 1.2-2.39ZM385.55 1679.3c.03 1.26-.76 3.33-2.38 3.37s-1.51-.53-2.51-.51c-1.59.04-2.1 1.27-2.07 2.85.01.52.09 2.01.76 1.99 1.25-.03 2.41-.37 3.75-.4 1.79-.04 2.97.93 3.01 2.67.05 2.39-1.25 3.74-3.66 3.81-.67.02-1.38-.18-2.05-.16-.96.03-1.2.47-1.18 1.39.05 2.1.76 5.88.82 8.81.05 2.23-.71 4.09-2.97 4.18-2.77.1-3.68-1.22-3.74-3.94-.07-3.38.36-6.86.32-8.66-.06-2.81-4.64.14-4.74-4.39-.03-1.19.33-2.47 1.5-2.81 1.34-.39 2.7.06 2.66-1.82 0-.4-.08-1.8-.09-2.15-.1-4.74 2.73-7.69 7.21-7.77 2.29-.04 5.3.64 5.37 3.56Z",
                  className: classNames(P !== "off" && "hidden", "fill-[#e2dcfe]")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  id: "screen-off-text",
                  d: "M181.22 1706.76c-.05-2.1 1.64-3.47 3.82-3.54 2.9-.09 4.38 3.9 9.01 3.74 2.26-.08 5.21-.8 5.15-3.41-.08-3.43-6.98-2.64-12.35-4.82-3.35-1.27-5.23-4.24-5.3-7.55-.16-7.17 5.9-10.07 12.44-10.2 3.02-.06 7.64.67 9.67 3.09.63.71 1 1.47 1.02 2.34.04 1.83-1.5 3.65-3.53 3.7-2.14.05-4.39-2.31-8.34-2.22-1.6.04-3.8.57-3.76 2.47.14 6.46 17.7-.15 17.99 13.04.15 7.07-6.59 10.26-13.19 10.5-5.2.19-12.5-1.44-12.63-7.15ZM231.15 1693.89c.05 2.09-1.46 3.32-3.59 3.38-2.73.08-2.46-3.36-6.39-3.26-3.6.1-5.02 3.78-4.96 6.74s1.99 6.21 5.59 6.09 3.96-3.52 7.18-3.62c1.68-.05 3.2 1.56 3.23 3.13.1 4.65-6.84 6.57-10.62 6.71-8.01.3-12.37-5.02-12.53-12.23s4.41-12.65 11.83-12.83c4.48-.11 10.15 1.09 10.26 5.89ZM234.73 1691.14c-.05-2.27 1.64-3.45 3.9-3.51 2.98-.07 3.85 1.84 4.2 4.34 0 .05 0 .28.1.28.05 0 .1-.1.19-.19 1.07-2.2 2.05-4.25 5.16-4.33 2.37-.06 3.95 1.41 4 3.71.03 1.45-.51 3.02-1.8 3.81-2 1.33-4.41.12-6.21 2.06-1.1 1.17-1.32 1.98-1.29 3.58.06 2.74.76 5.74.79 7.06.05 2.36-1.08 3.96-3.52 4.05-2.94.11-4.49-1.26-4.55-4.15-.07-3.08.31-6.22.24-9.3-.09-3.98-1.14-4.95-1.19-7.41ZM273.69 1697.57c-2.09 3.5-9.14 2.46-12.46 3.32-.71.21-1.14.55-1.12 1.34.06 2.53 2.8 3.55 5.04 3.48 4.98-.17 4.2-3.22 6.99-3.31 1.6-.05 3.28 1.15 3.32 2.82.09 4.13-6.57 6.28-10.04 6.41-7.69.29-12.01-3.87-12.18-11.38-.17-7.93 2.83-13.45 11.49-13.65 4.94-.12 9.81 2.37 9.92 7.38.03 1.25-.32 2.52-.96 3.6Zm-5.57-3.75c-.04-1.91-2.76-2.26-4.14-2.22-2.38.06-3.97 1.74-3.92 4.03.02.98 1.22.95 2.65.91 2.19-.06 5.47-.2 5.41-2.72ZM298.11 1693.5c.11 5.13-4.28 6.18-8.25 6.3-1.2.04-2.41-.11-3.67-.07-1.02.03-2.19.07-2.16 1.36.05 2.45 2.27 3.94 4.64 3.86 3.93-.13 4.59-3.79 7.08-3.87 1.75-.06 3.11 1.23 3.14 2.97.1 4.71-6.12 6.41-9.77 6.55-7.91.29-11.91-4.7-12.07-11.84-.17-7.74 4.09-12.24 11.58-12.42 4.67-.11 9.36 2.07 9.47 7.15Zm-11.63 2.63c1.72-.05 5.18-.33 5.13-2.68-.04-1.84-1.81-2.44-3.48-2.39-2.46.06-4.01 1.54-3.96 4.03.02 1.01 1 1.08 2.3 1.04ZM304.99 1686.01c2.32-.05 3.57 1.14 3.62 3.47 1.09-2.17 3.5-3.27 5.85-3.33 5.34-.13 7.95 2.7 8.08 8.3.03 1.54-.07 2.89-.04 4.38.08 3.75.58 4.27.63 6.44.05 2.3-1.21 3.75-3.54 3.84-2.15.08-3.48-1.14-3.53-3.36-.05-2.45.17-4.72.11-7.17s-.4-5.84-3.6-5.75c-2.49.07-4.04 1.71-3.98 4.3.09 4.28.45 6.04.51 8.77.05 2.23-1.28 3.74-3.6 3.82-1.91.07-3.63-1.37-3.68-3.29-.05-2.1.37-3.81.28-8.15s-.69-6.56-.73-8.25c-.05-2.47 1.01-3.96 3.61-4.02ZM346.31 1708.35c-6.72.25-10.94-3.99-11.09-10.94s2.98-12.18 10.45-12.36c6.67-.16 10.67 3.91 10.83 11.18.14 6.25-3.31 11.87-10.19 12.12Zm4.12-11.67c-.07-3.11-1.34-6.06-4.86-5.96-3.22.09-4.33 3.38-4.26 6.37.06 2.82 1.61 5.49 4.61 5.39 2.99-.1 4.58-2.87 4.51-5.8ZM362.41 1684.65c2.17-.05 3.34 1.11 3.39 3.36 1.02-2.1 3.28-3.16 5.48-3.22 5.01-.12 7.45 2.62 7.57 8.04.03 1.49-.06 2.8-.03 4.24.08 3.63.55 4.14.6 6.24.05 2.23-1.13 3.63-3.31 3.71-2.02.07-3.26-1.11-3.31-3.26-.05-2.37.15-4.57.1-6.94s-.38-5.65-3.37-5.57c-2.33.06-3.78 1.65-3.73 4.16.09 4.14.43 5.85.48 8.49.05 2.16-1.2 3.62-3.37 3.7-1.79.07-3.4-1.33-3.45-3.19-.04-2.03.35-3.68.26-7.88s-.65-6.35-.69-7.99c-.05-2.39.94-3.83 3.38-3.88Z",
                  className: classNames(P === "off" && "hidden", "fill-[#e2dcfe]")
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#382c80",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "M128.39 1622.88h300.17"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M128.39 1477.76v290.85c0 7.84 6.65 14.04 14.48 13.49L416 1762.72c7.08-.5 12.56-6.39 12.56-13.49v-246.62c0-6.99-5.33-12.83-12.29-13.46l-273.13-24.85c-7.92-.72-14.74 5.51-14.74 13.46Z",
            style: {
              fill: "none",
              stroke: "#281f70",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            style: {
              fill: "none",
              stroke: "#382c80",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            },
            d: "M1490.44 1663.72h300.17"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M1790.61 1559.84v208.78c0 7.84-6.65 14.04-14.48 13.49L1503 1762.73c-7.08-.5-12.56-6.39-12.56-13.49v-171.67c0-6.99 5.33-12.83 12.29-13.46l273.13-17.73c7.92-.72 14.74 5.51 14.74 13.46Z",
            style: {
              fill: "none",
              stroke: "#281f70",
              strokeMiterlimit: 10,
              strokeWidth: "3.5px"
            }
          }
        )
      ]
    }
  );
}, InkLayoutInner = ({ children: m, animationSrc: P }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    className: classNames(
      P && "fixed top-0 right-0 left-0 bottom-0 w-full h-screen"
    ),
    children: [
      P && /* @__PURE__ */ jsxRuntimeExports.jsx(
        LottieEntity,
        {
          src: P,
          className: "absolute right-[0] left-[0] bottom-[0] water-effect"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScreenDarkener, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Submarine, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Screen, { children: m }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Notifications, {})
    ]
  }
), InkLayout = (m) => /* @__PURE__ */ jsxRuntimeExports.jsx(UIProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(InkLayoutInner, { ...m }) }), InputField = ({ className: m, ...P }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "input",
  {
    className: classNames(
      "text-center grow focus:ring-0 focus:ring-offset-0 disabled:cursor-not-allowed rounded-md px-3 py-2 text-base",
      "w-full placeholder:font-normal placeholder:text-sm placeholder:text-black/70 bg-white/90 text-black/80",
      "disabled:text-black/50 disabled:bg-white/30 transition duration-75 outline-none focus:ring-2 ring-white/50",
      m
    ),
    type: "text",
    ...P
  }
), Label = ({
  children: m,
  className: P
}) => /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: classNames("font-semibold uppercase text-xs", P), children: m }), Link = ({ children: m, className: P, ...k }) => {
  const L = classNames(
    "underline text-sm text-brand-300 font-semibold transition duration-25 hover:text-brand-450",
    P
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: L, ...k, children: m });
}, Modal = ({
  open: m,
  children: P,
  className: k
}) => m ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 bottom-0 left-0 right-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-background-900/60 flex flex-col items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Card,
  {
    className: classNames(
      "!bg-brand-500/95 shadow-sm relative max-w-md w-full",
      k
    ),
    children: P
  }
) }) }) : null, BG_COLORS = {
  error: "bg-error-500",
  info: "bg-info-500",
  success: "bg-success-500",
  warning: "bg-warning-500"
}, Snackbar = ({ show: m, message: P, type: k }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  tt,
  {
    show: m,
    as: Fragment,
    enter: "transform ease-out duration-300 transition",
    enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
    enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-end mt-1 drop-shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames("rounded-lg px-4 py-2", BG_COLORS[k]), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: classNames("text-sm font-medium text-white text-right"),
        children: P
      }
    ) }) })
  }
), Notifications = () => {
  const { notifications: m } = useNotifications();
  return m.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "fixed right-4 bottom-4 z-10 p-0 m-0", children: m.map((P) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "p-0 m-0 mb-2 max-w-[400]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Snackbar,
    {
      message: P.message,
      type: toNotificationLevel(P.type),
      show: !0
    }
  ) }, P.id)) }) : null;
}, COMMON_CLASSES = [
  "bg-white/90 disabled:bg-white/50 text-black/80 border-none focus:outline-none focus-visible:outline-none",
  "focus:outline-none disabled:text-black/50 py-2 flex items-center justify-center disabled:cursor-not-allowed",
  "transition duration-75 text-base"
].join(" "), BUTTON_CLASSES = "hover:bg-white/80", NumberInput = ({
  value: m,
  disabled: P,
  onChange: k,
  placeholder: L,
  max: O,
  min: V = 0,
  className: he
}) => {
  const K = (de) => {
    const ce = de || V;
    ce < V || ce > O || k(ce);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: classNames(
        "w-full flex items-stretch justify-between rounded-full",
        he
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            disabled: m <= V || P,
            onClick: () => K(m - 1),
            className: classNames(
              COMMON_CLASSES,
              BUTTON_CLASSES,
              "rounded-l-full min-w-min pl-4 pr-2"
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(MinusIcon$1, { className: "h-5 w-5 text-black/80 disabled:text-black/50" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: classNames(
              COMMON_CLASSES,
              "w-full text-center grow focus:ring-0 focus:ring-offset-0 disabled:cursor-not-allowed"
            ),
            type: "text",
            inputMode: "numeric",
            placeholder: L,
            disabled: P,
            value: m,
            onChange: (de) => {
              K(parseInt(de.target.value) || 0);
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            disabled: m >= O || P,
            onClick: () => K(m + 1),
            className: classNames(
              COMMON_CLASSES,
              BUTTON_CLASSES,
              "rounded-r-full pr-4 pl-2"
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PlusIcon$1, { className: "h-5 w-5 text-black/80 disabled:text-black/50" })
          }
        )
      ]
    }
  );
}, RunResults = ({
  title: m,
  className: P,
  storageDeposit: k,
  contractAddress: L,
  gasConsumed: O,
  gasRequired: V,
  chainApi: he
}) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classNames(P), children: k && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 w-full text-xs", children: [
  m && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "uppercase font-semibold", children: m }),
  L && /* @__PURE__ */ jsxRuntimeExports.jsxs("hgroup", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "uppercase font-semibold", children: "Contract Address" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: L })
  ] }),
  O && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "uppercase font-semibold", children: "Gas Consumed" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "p-0 list-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "refTime: ",
        O.refTime.toString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "proof size: ",
        O.proofSize.toString()
      ] })
    ] })
  ] }),
  V && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "uppercase font-semibold", children: "Gas Required" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "p-0 list-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "refTime: ",
        V.refTime.toString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "proof size: ",
        V.proofSize.toString()
      ] })
    ] })
  ] }),
  k && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
    "Storage Deposit:",
    " ",
    planckToDecimalFormatted(k.asCharge, {
      api: he == null ? void 0 : he.api
    })
  ] }) })
] }) }), Tabs = ({
  children: m,
  className: P
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: classNames(
      "flex md:flex-row items-center justify-stretch",
      P
    ),
    children: m
  }
), Tab = ({
  children: m,
  className: P,
  isSelected: k,
  onClick: L
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "button",
  {
    onClick: L,
    type: "button",
    className: classNames(
      "md:first:rounded-l-full md:last:rounded-r-full px-2 py-1  hover:bg-white/20 flex-grow text-sm uppercase",
      k ? "hover:cursor-auto hover:bg-white/40 bg-white/40" : "bg-white/10",
      P
    ),
    children: m
  }
), ToggleSwitch = ({
  enabled: m,
  handleClick: P,
  screenReader: k
}) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Ge,
  {
    checked: m,
    onChange: P,
    className: classNames(
      "bg-white/30 relative inline-flex items-center flex-shrink-0 z-0",
      "h-[18px] w-[32px] border-transparent rounded-full cursor-pointer transition-colors",
      "ease-in-out duration-200 focus:outline-none focus-visible:ring-2",
      "focus-visible:ring-white focus-visible:ring-opacity-75"
    ),
    children: [
      k && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          "aria-hidden": "true",
          className: classNames(
            m ? "translate-x-[13px] bg-white" : "translate-x-[1px] bg-white/60",
            "pointer-events-none inline-block h-[16px] w-[18px]",
            "rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200"
          )
        }
      )
    ]
  }
) }), useUI = () => useContext(UIContext);
export {
  Accounts,
  BigIntInputField,
  Button,
  Card,
  ConnectButton,
  ConnectWallet,
  DeployerProvider,
  Events,
  InkLayout,
  InputField,
  Label,
  Link,
  LottieEntity,
  Modal,
  Notifications,
  NumberInput,
  RunResults,
  Snackbar,
  Tab,
  Tabs,
  ToggleSwitch,
  UIContext,
  UIProvider,
  formatContractName,
  useDeployerState,
  useUI
};
//# sourceMappingURL=ui.es.js.map
