var _i = Object.defineProperty;
var vi = (t, e, n) => e in t ? _i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ze = (t, e, n) => vi(t, typeof e != "symbol" ? e + "" : e, n);
import { jsx as Es } from "react/jsx-runtime";
import bt, { createContext as Xs, useContext as Z, useMemo as Kt, useRef as Pe, useEffect as at, useLayoutEffect as Ei, createElement as Si, useCallback as I, useDebugValue as Ri, useState as V } from "react";
var Ti = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, et = {}, pt = {}, Oe = {}, Ss;
function Ys() {
  if (Ss) return Oe;
  Ss = 1;
  var t = Oe && Oe.__assign || function() {
    return t = Object.assign || function(a) {
      for (var c, o = 1, d = arguments.length; o < d; o++) {
        c = arguments[o];
        for (var h in c) Object.prototype.hasOwnProperty.call(c, h) && (a[h] = c[h]);
      }
      return a;
    }, t.apply(this, arguments);
  }, e = Oe && Oe.__awaiter || function(a, c, o, d) {
    function h(u) {
      return u instanceof o ? u : new o(function(m) {
        m(u);
      });
    }
    return new (o || (o = Promise))(function(u, m) {
      function b(v) {
        try {
          p(d.next(v));
        } catch (R) {
          m(R);
        }
      }
      function E(v) {
        try {
          p(d.throw(v));
        } catch (R) {
          m(R);
        }
      }
      function p(v) {
        v.done ? u(v.value) : h(v.value).then(b, E);
      }
      p((d = d.apply(a, c || [])).next());
    });
  }, n = Oe && Oe.__generator || function(a, c) {
    var o = { label: 0, sent: function() {
      if (u[0] & 1) throw u[1];
      return u[1];
    }, trys: [], ops: [] }, d, h, u, m;
    return m = { next: b(0), throw: b(1), return: b(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function b(p) {
      return function(v) {
        return E([p, v]);
      };
    }
    function E(p) {
      if (d) throw new TypeError("Generator is already executing.");
      for (; m && (m = 0, p[0] && (o = 0)), o; ) try {
        if (d = 1, h && (u = p[0] & 2 ? h.return : p[0] ? h.throw || ((u = h.return) && u.call(h), 0) : h.next) && !(u = u.call(h, p[1])).done) return u;
        switch (h = 0, u && (p = [p[0] & 2, u.value]), p[0]) {
          case 0:
          case 1:
            u = p;
            break;
          case 4:
            return o.label++, { value: p[1], done: !1 };
          case 5:
            o.label++, h = p[1], p = [0];
            continue;
          case 7:
            p = o.ops.pop(), o.trys.pop();
            continue;
          default:
            if (u = o.trys, !(u = u.length > 0 && u[u.length - 1]) && (p[0] === 6 || p[0] === 2)) {
              o = 0;
              continue;
            }
            if (p[0] === 3 && (!u || p[1] > u[0] && p[1] < u[3])) {
              o.label = p[1];
              break;
            }
            if (p[0] === 6 && o.label < u[1]) {
              o.label = u[1], u = p;
              break;
            }
            if (u && o.label < u[2]) {
              o.label = u[2], o.ops.push(p);
              break;
            }
            u[2] && o.ops.pop(), o.trys.pop();
            continue;
        }
        p = c.call(a, o);
      } catch (v) {
        p = [6, v], h = 0;
      } finally {
        d = u = 0;
      }
      if (p[0] & 5) throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Oe, "__esModule", { value: !0 }), Oe.FrappeCall = void 0;
  var s = (
    /** @class */
    function() {
      function a(c, o, d, h, u) {
        this.appURL = c, this.axios = o, this.useToken = d ?? !1, this.token = h, this.tokenType = u;
      }
      return a.prototype.get = function(c, o) {
        return e(this, void 0, void 0, function() {
          var d;
          return n(this, function(h) {
            return d = new URLSearchParams(), o && Object.entries(o).forEach(function(u) {
              var m = u[0], b = u[1];
              if (b != null) {
                var E = typeof b == "object" ? JSON.stringify(b) : b;
                d.set(m, E);
              }
            }), [2, this.axios.get("/api/method/".concat(c), {
              params: d
            }).then(function(u) {
              return u.data;
            }).catch(function(u) {
              var m, b;
              throw t(t({}, u.response.data), { httpStatus: u.response.status, httpStatusText: u.response.statusText, message: (m = u.response.data.message) !== null && m !== void 0 ? m : "There was an error.", exception: (b = u.response.data.exception) !== null && b !== void 0 ? b : "" });
            })];
          });
        });
      }, a.prototype.post = function(c, o) {
        return e(this, void 0, void 0, function() {
          return n(this, function(d) {
            return [2, this.axios.post("/api/method/".concat(c), t({}, o)).then(function(h) {
              return h.data;
            }).catch(function(h) {
              var u, m;
              throw t(t({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (u = h.response.data.message) !== null && u !== void 0 ? u : "There was an error.", exception: (m = h.response.data.exception) !== null && m !== void 0 ? m : "" });
            })];
          });
        });
      }, a.prototype.put = function(c, o) {
        return e(this, void 0, void 0, function() {
          return n(this, function(d) {
            return [2, this.axios.put("/api/method/".concat(c), t({}, o)).then(function(h) {
              return h.data;
            }).catch(function(h) {
              var u, m;
              throw t(t({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (u = h.response.data.message) !== null && u !== void 0 ? u : "There was an error.", exception: (m = h.response.data.exception) !== null && m !== void 0 ? m : "" });
            })];
          });
        });
      }, a.prototype.delete = function(c, o) {
        return e(this, void 0, void 0, function() {
          return n(this, function(d) {
            return [2, this.axios.delete("/api/method/".concat(c), { params: o }).then(function(h) {
              return h.data;
            }).catch(function(h) {
              var u, m;
              throw t(t({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (u = h.response.data.message) !== null && u !== void 0 ? u : "There was an error.", exception: (m = h.response.data.exception) !== null && m !== void 0 ? m : "" });
            })];
          });
        });
      }, a;
    }()
  );
  return Oe.FrappeCall = s, Oe;
}
var xe = {}, Rs;
function Qs() {
  if (Rs) return xe;
  Rs = 1;
  var t = xe && xe.__assign || function() {
    return t = Object.assign || function(a) {
      for (var c, o = 1, d = arguments.length; o < d; o++) {
        c = arguments[o];
        for (var h in c) Object.prototype.hasOwnProperty.call(c, h) && (a[h] = c[h]);
      }
      return a;
    }, t.apply(this, arguments);
  }, e = xe && xe.__awaiter || function(a, c, o, d) {
    function h(u) {
      return u instanceof o ? u : new o(function(m) {
        m(u);
      });
    }
    return new (o || (o = Promise))(function(u, m) {
      function b(v) {
        try {
          p(d.next(v));
        } catch (R) {
          m(R);
        }
      }
      function E(v) {
        try {
          p(d.throw(v));
        } catch (R) {
          m(R);
        }
      }
      function p(v) {
        v.done ? u(v.value) : h(v.value).then(b, E);
      }
      p((d = d.apply(a, c || [])).next());
    });
  }, n = xe && xe.__generator || function(a, c) {
    var o = { label: 0, sent: function() {
      if (u[0] & 1) throw u[1];
      return u[1];
    }, trys: [], ops: [] }, d, h, u, m;
    return m = { next: b(0), throw: b(1), return: b(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function b(p) {
      return function(v) {
        return E([p, v]);
      };
    }
    function E(p) {
      if (d) throw new TypeError("Generator is already executing.");
      for (; m && (m = 0, p[0] && (o = 0)), o; ) try {
        if (d = 1, h && (u = p[0] & 2 ? h.return : p[0] ? h.throw || ((u = h.return) && u.call(h), 0) : h.next) && !(u = u.call(h, p[1])).done) return u;
        switch (h = 0, u && (p = [p[0] & 2, u.value]), p[0]) {
          case 0:
          case 1:
            u = p;
            break;
          case 4:
            return o.label++, { value: p[1], done: !1 };
          case 5:
            o.label++, h = p[1], p = [0];
            continue;
          case 7:
            p = o.ops.pop(), o.trys.pop();
            continue;
          default:
            if (u = o.trys, !(u = u.length > 0 && u[u.length - 1]) && (p[0] === 6 || p[0] === 2)) {
              o = 0;
              continue;
            }
            if (p[0] === 3 && (!u || p[1] > u[0] && p[1] < u[3])) {
              o.label = p[1];
              break;
            }
            if (p[0] === 6 && o.label < u[1]) {
              o.label = u[1], u = p;
              break;
            }
            if (u && o.label < u[2]) {
              o.label = u[2], o.ops.push(p);
              break;
            }
            u[2] && o.ops.pop(), o.trys.pop();
            continue;
        }
        p = c.call(a, o);
      } catch (v) {
        p = [6, v], h = 0;
      } finally {
        d = u = 0;
      }
      if (p[0] & 5) throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(xe, "__esModule", { value: !0 }), xe.FrappeDB = void 0;
  var s = (
    /** @class */
    function() {
      function a(c, o, d, h, u) {
        this.appURL = c, this.axios = o, this.useToken = d ?? !1, this.token = h, this.tokenType = u;
      }
      return a.prototype.getDoc = function(c, o) {
        return o === void 0 && (o = ""), e(this, void 0, void 0, function() {
          return n(this, function(d) {
            return [2, this.axios.get("/api/resource/".concat(c, "/").concat(encodeURIComponent(o))).then(function(h) {
              return h.data.data;
            }).catch(function(h) {
              var u, m;
              throw t(t({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: "There was an error while fetching the document.", exception: (m = (u = h.response.data.exception) !== null && u !== void 0 ? u : h.response.data.exc_type) !== null && m !== void 0 ? m : "" });
            })];
          });
        });
      }, a.prototype.getDocList = function(c, o) {
        var d;
        return e(this, void 0, void 0, function() {
          var h, u, m, b, E, p, v, R, q, x, X;
          return n(this, function(z) {
            return h = {}, o && (u = o.fields, m = o.filters, b = o.orFilters, E = o.orderBy, p = o.limit, v = o.limit_start, R = o.groupBy, q = o.asDict, x = q === void 0 ? !0 : q, X = E ? "".concat(String(E == null ? void 0 : E.field), " ").concat((d = E == null ? void 0 : E.order) !== null && d !== void 0 ? d : "asc") : "", h = {
              fields: u ? JSON.stringify(u) : void 0,
              filters: m ? JSON.stringify(m) : void 0,
              or_filters: b ? JSON.stringify(b) : void 0,
              order_by: X,
              group_by: R,
              limit: p,
              limit_start: v,
              as_dict: x
            }), [2, this.axios.get("/api/resource/".concat(c), { params: h }).then(function(H) {
              return H.data.data;
            }).catch(function(H) {
              var U, J;
              throw t(t({}, H.response.data), { httpStatus: H.response.status, httpStatusText: H.response.statusText, message: "There was an error while fetching the documents.", exception: (J = (U = H.response.data.exception) !== null && U !== void 0 ? U : H.response.data.exc_type) !== null && J !== void 0 ? J : "" });
            })];
          });
        });
      }, a.prototype.createDoc = function(c, o) {
        return e(this, void 0, void 0, function() {
          return n(this, function(d) {
            return [2, this.axios.post("/api/resource/".concat(c), t({}, o)).then(function(h) {
              return h.data.data;
            }).catch(function(h) {
              var u, m, b;
              throw t(t({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: (u = h.response.data.message) !== null && u !== void 0 ? u : "There was an error while creating the document.", exception: (b = (m = h.response.data.exception) !== null && m !== void 0 ? m : h.response.data.exc_type) !== null && b !== void 0 ? b : "" });
            })];
          });
        });
      }, a.prototype.updateDoc = function(c, o, d) {
        return e(this, void 0, void 0, function() {
          return n(this, function(h) {
            return [2, this.axios.put("/api/resource/".concat(c, "/").concat(o && encodeURIComponent(o)), t({}, d)).then(function(u) {
              return u.data.data;
            }).catch(function(u) {
              var m, b, E;
              throw t(t({}, u.response.data), { httpStatus: u.response.status, httpStatusText: u.response.statusText, message: (m = u.response.data.message) !== null && m !== void 0 ? m : "There was an error while updating the document.", exception: (E = (b = u.response.data.exception) !== null && b !== void 0 ? b : u.response.data.exc_type) !== null && E !== void 0 ? E : "" });
            })];
          });
        });
      }, a.prototype.deleteDoc = function(c, o) {
        return e(this, void 0, void 0, function() {
          return n(this, function(d) {
            return [2, this.axios.delete("/api/resource/".concat(c, "/").concat(o && encodeURIComponent(o))).then(function(h) {
              return h.data;
            }).catch(function(h) {
              var u, m;
              throw t(t({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: "There was an error while deleting the document.", exception: (m = (u = h.response.data.exception) !== null && u !== void 0 ? u : h.response.data.exc_type) !== null && m !== void 0 ? m : "" });
            })];
          });
        });
      }, a.prototype.getCount = function(c, o, d, h) {
        return d === void 0 && (d = !1), h === void 0 && (h = !1), e(this, void 0, void 0, function() {
          var u;
          return n(this, function(m) {
            return u = {
              doctype: c,
              filters: []
            }, d && (u.cache = d), h && (u.debug = h), o && (u.filters = o ? JSON.stringify(o) : void 0), [2, this.axios.get("/api/method/frappe.client.get_count", { params: u }).then(function(b) {
              return b.data.message;
            }).catch(function(b) {
              var E, p;
              throw t(t({}, b.response.data), { httpStatus: b.response.status, httpStatusText: b.response.statusText, message: "There was an error while getting the count.", exception: (p = (E = b.response.data.exception) !== null && E !== void 0 ? E : b.response.data.exc_type) !== null && p !== void 0 ? p : "" });
            })];
          });
        });
      }, a.prototype.getLastDoc = function(c, o) {
        return e(this, void 0, void 0, function() {
          var d, h;
          return n(this, function(u) {
            switch (u.label) {
              case 0:
                return d = {
                  orderBy: {
                    field: "creation",
                    order: "desc"
                  }
                }, o && (d = t(t({}, d), o)), [4, this.getDocList(c, t(t({}, d), { limit: 1, fields: ["name"] }))];
              case 1:
                return h = u.sent(), h.length > 0 ? [2, this.getDoc(c, h[0].name)] : [2, {}];
            }
          });
        });
      }, a.prototype.renameDoc = function(c, o, d, h) {
        return h === void 0 && (h = !1), e(this, void 0, void 0, function() {
          return n(this, function(u) {
            return [2, this.axios.post("/api/method/frappe.client.rename_doc", {
              doctype: c,
              old_name: o,
              new_name: d,
              merge: h
            }).then(function(m) {
              return m.data;
            }).catch(function(m) {
              var b, E, p;
              throw t(t({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: (b = m.response.data.message) !== null && b !== void 0 ? b : "There was an error while renaming the document.", exception: (p = (E = m.response.data.exception) !== null && E !== void 0 ? E : m.response.data.exc_type) !== null && p !== void 0 ? p : "" });
            })];
          });
        });
      }, a.prototype.getValue = function(c, o, d, h, u, m) {
        return h === void 0 && (h = !0), u === void 0 && (u = !1), m === void 0 && (m = null), e(this, void 0, void 0, function() {
          var b;
          return n(this, function(E) {
            return b = {
              doctype: c,
              fieldname: "[]",
              filters: [],
              as_dict: h,
              debug: u,
              parent: null
            }, o && (b.fieldname = typeof o == "object" ? JSON.stringify(o) : o), d && (b.filters = d ? JSON.stringify(d) : void 0), m && (b.parent = m), [2, this.axios.get("/api/method/frappe.client.get_value", { params: b }).then(function(p) {
              return p.data;
            }).catch(function(p) {
              var v, R;
              throw t(t({}, p.response.data), { httpStatus: p.response.status, httpStatusText: p.response.statusText, message: "There was an error while getting the value.", exception: (R = (v = p.response.data.exception) !== null && v !== void 0 ? v : p.response.data.exc_type) !== null && R !== void 0 ? R : "" });
            })];
          });
        });
      }, a.prototype.setValue = function(c, o, d, h) {
        return e(this, void 0, void 0, function() {
          return n(this, function(u) {
            return d !== null && typeof d == "object" && !Array.isArray(d) && (h = void 0), [2, this.axios.post("/api/method/frappe.client.set_value", {
              doctype: c,
              name: o,
              fieldname: d,
              value: h
            }).then(function(m) {
              return m.data;
            }).catch(function(m) {
              var b, E;
              throw t(t({}, m.response.data), { httpStatus: m.response.status, httpStatusText: m.response.statusText, message: "There was an error while setting the value.", exception: (E = (b = m.response.data.exception) !== null && b !== void 0 ? b : m.response.data.exc_type) !== null && E !== void 0 ? E : "" });
            })];
          });
        });
      }, a.prototype.getSingleValue = function(c, o) {
        return e(this, void 0, void 0, function() {
          var d;
          return n(this, function(h) {
            return d = {
              doctype: c,
              field: o
            }, [2, this.axios.get("/api/method/frappe.client.get_single_value", { params: d }).then(function(u) {
              return u.data;
            }).catch(function(u) {
              var m, b;
              throw t(t({}, u.response.data), { httpStatus: u.response.status, httpStatusText: u.response.statusText, message: "There was an error while getting the value of single doctype.", exception: (b = (m = u.response.data.exception) !== null && m !== void 0 ? m : u.response.data.exc_type) !== null && b !== void 0 ? b : "" });
            })];
          });
        });
      }, a.prototype.submit = function(c) {
        return e(this, void 0, void 0, function() {
          return n(this, function(o) {
            return [2, this.axios.post("/api/method/frappe.client.submit", { doc: c }).then(function(d) {
              return d.data.message;
            }).catch(function(d) {
              var h, u;
              throw t(t({}, d.response.data), { httpStatus: d.response.status, httpStatusText: d.response.statusText, message: "There was an error while submitting the document.", exception: (u = (h = d.response.data.exception) !== null && h !== void 0 ? h : d.response.data.exc_type) !== null && u !== void 0 ? u : "" });
            })];
          });
        });
      }, a.prototype.cancel = function(c, o) {
        return e(this, void 0, void 0, function() {
          return n(this, function(d) {
            return [2, this.axios.post("/api/method/frappe.client.cancel", { doctype: c, name: o }).then(function(h) {
              return h.data;
            }).catch(function(h) {
              var u, m;
              throw t(t({}, h.response.data), { httpStatus: h.response.status, httpStatusText: h.response.statusText, message: "There was an error while cancelling the document.", exception: (m = (u = h.response.data.exception) !== null && u !== void 0 ? u : h.response.data.exc_type) !== null && m !== void 0 ? m : "" });
            })];
          });
        });
      }, a;
    }()
  );
  return xe.FrappeDB = s, xe;
}
var Ae = {}, Ie = {};
/*! Axios v1.8.2 Copyright (c) 2025 Matt Zabriskie and contributors */
var pn, Ts;
function Oi() {
  if (Ts) return pn;
  Ts = 1;
  function t(r, i) {
    return function() {
      return r.apply(i, arguments);
    };
  }
  const { toString: e } = Object.prototype, { getPrototypeOf: n } = Object, s = /* @__PURE__ */ ((r) => (i) => {
    const l = e.call(i);
    return r[l] || (r[l] = l.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null)), a = (r) => (r = r.toLowerCase(), (i) => s(i) === r), c = (r) => (i) => typeof i === r, { isArray: o } = Array, d = c("undefined");
  function h(r) {
    return r !== null && !d(r) && r.constructor !== null && !d(r.constructor) && E(r.constructor.isBuffer) && r.constructor.isBuffer(r);
  }
  const u = a("ArrayBuffer");
  function m(r) {
    let i;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(r) : i = r && r.buffer && u(r.buffer), i;
  }
  const b = c("string"), E = c("function"), p = c("number"), v = (r) => r !== null && typeof r == "object", R = (r) => r === !0 || r === !1, q = (r) => {
    if (s(r) !== "object")
      return !1;
    const i = n(r);
    return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in r) && !(Symbol.iterator in r);
  }, x = a("Date"), X = a("File"), z = a("Blob"), H = a("FileList"), U = (r) => v(r) && E(r.pipe), J = (r) => {
    let i;
    return r && (typeof FormData == "function" && r instanceof FormData || E(r.append) && ((i = s(r)) === "formdata" || // detect form-data instance
    i === "object" && E(r.toString) && r.toString() === "[object FormData]"));
  }, ke = a("URLSearchParams"), [N, pe, M, ce] = ["ReadableStream", "Request", "Response", "Headers"].map(a), be = (r) => r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function G(r, i, { allOwnKeys: l = !1 } = {}) {
    if (r === null || typeof r > "u")
      return;
    let f, y;
    if (typeof r != "object" && (r = [r]), o(r))
      for (f = 0, y = r.length; f < y; f++)
        i.call(null, r[f], f, r);
    else {
      const g = l ? Object.getOwnPropertyNames(r) : Object.keys(r), w = g.length;
      let S;
      for (f = 0; f < w; f++)
        S = g[f], i.call(null, r[S], S, r);
    }
  }
  function ue(r, i) {
    i = i.toLowerCase();
    const l = Object.keys(r);
    let f = l.length, y;
    for (; f-- > 0; )
      if (y = l[f], i === y.toLowerCase())
        return y;
    return null;
  }
  const le = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ti, Ne = (r) => !d(r) && r !== le;
  function Y() {
    const { caseless: r } = Ne(this) && this || {}, i = {}, l = (f, y) => {
      const g = r && ue(i, y) || y;
      q(i[g]) && q(f) ? i[g] = Y(i[g], f) : q(f) ? i[g] = Y({}, f) : o(f) ? i[g] = f.slice() : i[g] = f;
    };
    for (let f = 0, y = arguments.length; f < y; f++)
      arguments[f] && G(arguments[f], l);
    return i;
  }
  const ge = (r, i, l, { allOwnKeys: f } = {}) => (G(i, (y, g) => {
    l && E(y) ? r[g] = t(y, l) : r[g] = y;
  }, { allOwnKeys: f }), r), Ve = (r) => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r), lt = (r, i, l, f) => {
    r.prototype = Object.create(i.prototype, f), r.prototype.constructor = r, Object.defineProperty(r, "super", {
      value: i.prototype
    }), l && Object.assign(r.prototype, l);
  }, Fe = (r, i, l, f) => {
    let y, g, w;
    const S = {};
    if (i = i || {}, r == null) return i;
    do {
      for (y = Object.getOwnPropertyNames(r), g = y.length; g-- > 0; )
        w = y[g], (!f || f(w, r, i)) && !S[w] && (i[w] = r[w], S[w] = !0);
      r = l !== !1 && n(r);
    } while (r && (!l || l(r, i)) && r !== Object.prototype);
    return i;
  }, se = (r, i, l) => {
    r = String(r), (l === void 0 || l > r.length) && (l = r.length), l -= i.length;
    const f = r.indexOf(i, l);
    return f !== -1 && f === l;
  }, Me = (r) => {
    if (!r) return null;
    if (o(r)) return r;
    let i = r.length;
    if (!p(i)) return null;
    const l = new Array(i);
    for (; i-- > 0; )
      l[i] = r[i];
    return l;
  }, $e = /* @__PURE__ */ ((r) => (i) => r && i instanceof r)(typeof Uint8Array < "u" && n(Uint8Array)), Ge = (r, i) => {
    const f = (r && r[Symbol.iterator]).call(r);
    let y;
    for (; (y = f.next()) && !y.done; ) {
      const g = y.value;
      i.call(r, g[0], g[1]);
    }
  }, tt = (r, i) => {
    let l;
    const f = [];
    for (; (l = r.exec(i)) !== null; )
      f.push(l);
    return f;
  }, Et = a("HTMLFormElement"), en = (r) => r.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function(l, f, y) {
      return f.toUpperCase() + y;
    }
  ), St = (({ hasOwnProperty: r }) => (i, l) => r.call(i, l))(Object.prototype), Xe = a("RegExp"), ft = (r, i) => {
    const l = Object.getOwnPropertyDescriptors(r), f = {};
    G(l, (y, g) => {
      let w;
      (w = i(y, g, r)) !== !1 && (f[g] = w || y);
    }), Object.defineProperties(r, f);
  }, Xn = (r) => {
    ft(r, (i, l) => {
      if (E(r) && ["arguments", "caller", "callee"].indexOf(l) !== -1)
        return !1;
      const f = r[l];
      if (E(f)) {
        if (i.enumerable = !1, "writable" in i) {
          i.writable = !1;
          return;
        }
        i.set || (i.set = () => {
          throw Error("Can not rewrite read-only method '" + l + "'");
        });
      }
    });
  }, $ = (r, i) => {
    const l = {}, f = (y) => {
      y.forEach((g) => {
        l[g] = !0;
      });
    };
    return o(r) ? f(r) : f(String(r).split(i)), l;
  }, j = () => {
  }, fe = (r, i) => r != null && Number.isFinite(r = +r) ? r : i;
  function K(r) {
    return !!(r && E(r.append) && r[Symbol.toStringTag] === "FormData" && r[Symbol.iterator]);
  }
  const _e = (r) => {
    const i = new Array(10), l = (f, y) => {
      if (v(f)) {
        if (i.indexOf(f) >= 0)
          return;
        if (!("toJSON" in f)) {
          i[y] = f;
          const g = o(f) ? [] : {};
          return G(f, (w, S) => {
            const A = l(w, y + 1);
            !d(A) && (g[S] = A);
          }), i[y] = void 0, g;
        }
      }
      return f;
    };
    return l(r, 0);
  }, He = a("AsyncFunction"), re = (r) => r && (v(r) || E(r)) && E(r.then) && E(r.catch), he = ((r, i) => r ? setImmediate : i ? ((l, f) => (le.addEventListener("message", ({ source: y, data: g }) => {
    y === le && g === l && f.length && f.shift()();
  }, !1), (y) => {
    f.push(y), le.postMessage(l, "*");
  }))(`axios@${Math.random()}`, []) : (l) => setTimeout(l))(
    typeof setImmediate == "function",
    E(le.postMessage)
  ), Se = typeof queueMicrotask < "u" ? queueMicrotask.bind(le) : typeof process < "u" && process.nextTick || he;
  var _ = {
    isArray: o,
    isArrayBuffer: u,
    isBuffer: h,
    isFormData: J,
    isArrayBufferView: m,
    isString: b,
    isNumber: p,
    isBoolean: R,
    isObject: v,
    isPlainObject: q,
    isReadableStream: N,
    isRequest: pe,
    isResponse: M,
    isHeaders: ce,
    isUndefined: d,
    isDate: x,
    isFile: X,
    isBlob: z,
    isRegExp: Xe,
    isFunction: E,
    isStream: U,
    isURLSearchParams: ke,
    isTypedArray: $e,
    isFileList: H,
    forEach: G,
    merge: Y,
    extend: ge,
    trim: be,
    stripBOM: Ve,
    inherits: lt,
    toFlatObject: Fe,
    kindOf: s,
    kindOfTest: a,
    endsWith: se,
    toArray: Me,
    forEachEntry: Ge,
    matchAll: tt,
    isHTMLForm: Et,
    hasOwnProperty: St,
    hasOwnProp: St,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors: ft,
    freezeMethods: Xn,
    toObjectSet: $,
    toCamelCase: en,
    noop: j,
    toFiniteNumber: fe,
    findKey: ue,
    global: le,
    isContextDefined: Ne,
    isSpecCompliantForm: K,
    toJSONObject: _e,
    isAsyncFn: He,
    isThenable: re,
    setImmediate: he,
    asap: Se
  };
  function k(r, i, l, f, y) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = r, this.name = "AxiosError", i && (this.code = i), l && (this.config = l), f && (this.request = f), y && (this.response = y, this.status = y.status ? y.status : null);
  }
  _.inherits(k, Error, {
    toJSON: function() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: _.toJSONObject(this.config),
        code: this.code,
        status: this.status
      };
    }
  });
  const ht = k.prototype, ye = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((r) => {
    ye[r] = { value: r };
  }), Object.defineProperties(k, ye), Object.defineProperty(ht, "isAxiosError", { value: !0 }), k.from = (r, i, l, f, y, g) => {
    const w = Object.create(ht);
    return _.toFlatObject(r, w, function(A) {
      return A !== Error.prototype;
    }, (S) => S !== "isAxiosError"), k.call(w, r.message, i, l, f, y), w.cause = r, w.name = r.name, g && Object.assign(w, g), w;
  };
  var Re = null;
  function Ye(r) {
    return _.isPlainObject(r) || _.isArray(r);
  }
  function Rt(r) {
    return _.endsWith(r, "[]") ? r.slice(0, -2) : r;
  }
  function nt(r, i, l) {
    return r ? r.concat(i).map(function(y, g) {
      return y = Rt(y), !l && g ? "[" + y + "]" : y;
    }).join(l ? "." : "") : i;
  }
  function Cr(r) {
    return _.isArray(r) && !r.some(Ye);
  }
  const Lr = _.toFlatObject(_, {}, null, function(i) {
    return /^is[A-Z]/.test(i);
  });
  function Tt(r, i, l) {
    if (!_.isObject(r))
      throw new TypeError("target must be an object");
    i = i || new FormData(), l = _.toFlatObject(l, {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    }, !1, function(F, D) {
      return !_.isUndefined(D[F]);
    });
    const f = l.metaTokens, y = l.visitor || O, g = l.dots, w = l.indexes, A = (l.Blob || typeof Blob < "u" && Blob) && _.isSpecCompliantForm(i);
    if (!_.isFunction(y))
      throw new TypeError("visitor must be a function");
    function T(L) {
      if (L === null) return "";
      if (_.isDate(L))
        return L.toISOString();
      if (!A && _.isBlob(L))
        throw new k("Blob is not supported. Use a Buffer instead.");
      return _.isArrayBuffer(L) || _.isTypedArray(L) ? A && typeof Blob == "function" ? new Blob([L]) : Buffer.from(L) : L;
    }
    function O(L, F, D) {
      let Q = L;
      if (L && !D && typeof L == "object") {
        if (_.endsWith(F, "{}"))
          F = f ? F : F.slice(0, -2), L = JSON.stringify(L);
        else if (_.isArray(L) && Cr(L) || (_.isFileList(L) || _.endsWith(F, "[]")) && (Q = _.toArray(L)))
          return F = Rt(F), Q.forEach(function(de, qe) {
            !(_.isUndefined(de) || de === null) && i.append(
              // eslint-disable-next-line no-nested-ternary
              w === !0 ? nt([F], qe, g) : w === null ? F : F + "[]",
              T(de)
            );
          }), !1;
      }
      return Ye(L) ? !0 : (i.append(nt(D, F, g), T(L)), !1);
    }
    const C = [], W = Object.assign(Lr, {
      defaultVisitor: O,
      convertValue: T,
      isVisitable: Ye
    });
    function ie(L, F) {
      if (!_.isUndefined(L)) {
        if (C.indexOf(L) !== -1)
          throw Error("Circular reference detected in " + F.join("."));
        C.push(L), _.forEach(L, function(Q, oe) {
          (!(_.isUndefined(Q) || Q === null) && y.call(
            i,
            Q,
            _.isString(oe) ? oe.trim() : oe,
            F,
            W
          )) === !0 && ie(Q, F ? F.concat(oe) : [oe]);
        }), C.pop();
      }
    }
    if (!_.isObject(r))
      throw new TypeError("data must be an object");
    return ie(r), i;
  }
  function Yn(r) {
    const i = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g, function(f) {
      return i[f];
    });
  }
  function tn(r, i) {
    this._pairs = [], r && Tt(r, this, i);
  }
  const Qn = tn.prototype;
  Qn.append = function(i, l) {
    this._pairs.push([i, l]);
  }, Qn.toString = function(i) {
    const l = i ? function(f) {
      return i.call(this, f, Yn);
    } : Yn;
    return this._pairs.map(function(y) {
      return l(y[0]) + "=" + l(y[1]);
    }, "").join("&");
  };
  function Dr(r) {
    return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function Zn(r, i, l) {
    if (!i)
      return r;
    const f = l && l.encode || Dr;
    _.isFunction(l) && (l = {
      serialize: l
    });
    const y = l && l.serialize;
    let g;
    if (y ? g = y(i, l) : g = _.isURLSearchParams(i) ? i.toString() : new tn(i, l).toString(f), g) {
      const w = r.indexOf("#");
      w !== -1 && (r = r.slice(0, w)), r += (r.indexOf("?") === -1 ? "?" : "&") + g;
    }
    return r;
  }
  class kr {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(i, l, f) {
      return this.handlers.push({
        fulfilled: i,
        rejected: l,
        synchronous: f ? f.synchronous : !1,
        runWhen: f ? f.runWhen : null
      }), this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(i) {
      this.handlers[i] && (this.handlers[i] = null);
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      this.handlers && (this.handlers = []);
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(i) {
      _.forEach(this.handlers, function(f) {
        f !== null && i(f);
      });
    }
  }
  var es = kr, ts = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  }, Nr = typeof URLSearchParams < "u" ? URLSearchParams : tn, Fr = typeof FormData < "u" ? FormData : null, Br = typeof Blob < "u" ? Blob : null, Pr = {
    isBrowser: !0,
    classes: {
      URLSearchParams: Nr,
      FormData: Fr,
      Blob: Br
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
  const nn = typeof window < "u" && typeof document < "u", sn = typeof navigator == "object" && navigator || void 0, Ur = nn && (!sn || ["ReactNative", "NativeScript", "NS"].indexOf(sn.product) < 0), qr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ir = nn && window.location.href || "http://localhost";
  var jr = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    hasBrowserEnv: nn,
    hasStandardBrowserWebWorkerEnv: qr,
    hasStandardBrowserEnv: Ur,
    navigator: sn,
    origin: Ir
  }), me = {
    ...jr,
    ...Pr
  };
  function Vr(r, i) {
    return Tt(r, new me.classes.URLSearchParams(), Object.assign({
      visitor: function(l, f, y, g) {
        return me.isNode && _.isBuffer(l) ? (this.append(f, l.toString("base64")), !1) : g.defaultVisitor.apply(this, arguments);
      }
    }, i));
  }
  function Mr(r) {
    return _.matchAll(/\w+|\[(\w*)]/g, r).map((i) => i[0] === "[]" ? "" : i[1] || i[0]);
  }
  function $r(r) {
    const i = {}, l = Object.keys(r);
    let f;
    const y = l.length;
    let g;
    for (f = 0; f < y; f++)
      g = l[f], i[g] = r[g];
    return i;
  }
  function ns(r) {
    function i(l, f, y, g) {
      let w = l[g++];
      if (w === "__proto__") return !0;
      const S = Number.isFinite(+w), A = g >= l.length;
      return w = !w && _.isArray(y) ? y.length : w, A ? (_.hasOwnProp(y, w) ? y[w] = [y[w], f] : y[w] = f, !S) : ((!y[w] || !_.isObject(y[w])) && (y[w] = []), i(l, f, y[w], g) && _.isArray(y[w]) && (y[w] = $r(y[w])), !S);
    }
    if (_.isFormData(r) && _.isFunction(r.entries)) {
      const l = {};
      return _.forEachEntry(r, (f, y) => {
        i(Mr(f), y, l, 0);
      }), l;
    }
    return null;
  }
  function Hr(r, i, l) {
    if (_.isString(r))
      try {
        return (i || JSON.parse)(r), _.trim(r);
      } catch (f) {
        if (f.name !== "SyntaxError")
          throw f;
      }
    return (l || JSON.stringify)(r);
  }
  const rn = {
    transitional: ts,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(i, l) {
      const f = l.getContentType() || "", y = f.indexOf("application/json") > -1, g = _.isObject(i);
      if (g && _.isHTMLForm(i) && (i = new FormData(i)), _.isFormData(i))
        return y ? JSON.stringify(ns(i)) : i;
      if (_.isArrayBuffer(i) || _.isBuffer(i) || _.isStream(i) || _.isFile(i) || _.isBlob(i) || _.isReadableStream(i))
        return i;
      if (_.isArrayBufferView(i))
        return i.buffer;
      if (_.isURLSearchParams(i))
        return l.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), i.toString();
      let S;
      if (g) {
        if (f.indexOf("application/x-www-form-urlencoded") > -1)
          return Vr(i, this.formSerializer).toString();
        if ((S = _.isFileList(i)) || f.indexOf("multipart/form-data") > -1) {
          const A = this.env && this.env.FormData;
          return Tt(
            S ? { "files[]": i } : i,
            A && new A(),
            this.formSerializer
          );
        }
      }
      return g || y ? (l.setContentType("application/json", !1), Hr(i)) : i;
    }],
    transformResponse: [function(i) {
      const l = this.transitional || rn.transitional, f = l && l.forcedJSONParsing, y = this.responseType === "json";
      if (_.isResponse(i) || _.isReadableStream(i))
        return i;
      if (i && _.isString(i) && (f && !this.responseType || y)) {
        const w = !(l && l.silentJSONParsing) && y;
        try {
          return JSON.parse(i);
        } catch (S) {
          if (w)
            throw S.name === "SyntaxError" ? k.from(S, k.ERR_BAD_RESPONSE, this, null, this.response) : S;
        }
      }
      return i;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: me.classes.FormData,
      Blob: me.classes.Blob
    },
    validateStatus: function(i) {
      return i >= 200 && i < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  _.forEach(["delete", "get", "head", "post", "put", "patch"], (r) => {
    rn.headers[r] = {};
  });
  var on = rn;
  const Wr = _.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  var zr = (r) => {
    const i = {};
    let l, f, y;
    return r && r.split(`
`).forEach(function(w) {
      y = w.indexOf(":"), l = w.substring(0, y).trim().toLowerCase(), f = w.substring(y + 1).trim(), !(!l || i[l] && Wr[l]) && (l === "set-cookie" ? i[l] ? i[l].push(f) : i[l] = [f] : i[l] = i[l] ? i[l] + ", " + f : f);
    }), i;
  };
  const ss = Symbol("internals");
  function dt(r) {
    return r && String(r).trim().toLowerCase();
  }
  function Ot(r) {
    return r === !1 || r == null ? r : _.isArray(r) ? r.map(Ot) : String(r);
  }
  function Jr(r) {
    const i = /* @__PURE__ */ Object.create(null), l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let f;
    for (; f = l.exec(r); )
      i[f[1]] = f[2];
    return i;
  }
  const Kr = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
  function an(r, i, l, f, y) {
    if (_.isFunction(f))
      return f.call(this, i, l);
    if (y && (i = l), !!_.isString(i)) {
      if (_.isString(f))
        return i.indexOf(f) !== -1;
      if (_.isRegExp(f))
        return f.test(i);
    }
  }
  function Gr(r) {
    return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (i, l, f) => l.toUpperCase() + f);
  }
  function Xr(r, i) {
    const l = _.toCamelCase(" " + i);
    ["get", "set", "has"].forEach((f) => {
      Object.defineProperty(r, f + l, {
        value: function(y, g, w) {
          return this[f].call(this, i, y, g, w);
        },
        configurable: !0
      });
    });
  }
  class xt {
    constructor(i) {
      i && this.set(i);
    }
    set(i, l, f) {
      const y = this;
      function g(S, A, T) {
        const O = dt(A);
        if (!O)
          throw new Error("header name must be a non-empty string");
        const C = _.findKey(y, O);
        (!C || y[C] === void 0 || T === !0 || T === void 0 && y[C] !== !1) && (y[C || A] = Ot(S));
      }
      const w = (S, A) => _.forEach(S, (T, O) => g(T, O, A));
      if (_.isPlainObject(i) || i instanceof this.constructor)
        w(i, l);
      else if (_.isString(i) && (i = i.trim()) && !Kr(i))
        w(zr(i), l);
      else if (_.isHeaders(i))
        for (const [S, A] of i.entries())
          g(A, S, f);
      else
        i != null && g(l, i, f);
      return this;
    }
    get(i, l) {
      if (i = dt(i), i) {
        const f = _.findKey(this, i);
        if (f) {
          const y = this[f];
          if (!l)
            return y;
          if (l === !0)
            return Jr(y);
          if (_.isFunction(l))
            return l.call(this, y, f);
          if (_.isRegExp(l))
            return l.exec(y);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(i, l) {
      if (i = dt(i), i) {
        const f = _.findKey(this, i);
        return !!(f && this[f] !== void 0 && (!l || an(this, this[f], f, l)));
      }
      return !1;
    }
    delete(i, l) {
      const f = this;
      let y = !1;
      function g(w) {
        if (w = dt(w), w) {
          const S = _.findKey(f, w);
          S && (!l || an(f, f[S], S, l)) && (delete f[S], y = !0);
        }
      }
      return _.isArray(i) ? i.forEach(g) : g(i), y;
    }
    clear(i) {
      const l = Object.keys(this);
      let f = l.length, y = !1;
      for (; f--; ) {
        const g = l[f];
        (!i || an(this, this[g], g, i, !0)) && (delete this[g], y = !0);
      }
      return y;
    }
    normalize(i) {
      const l = this, f = {};
      return _.forEach(this, (y, g) => {
        const w = _.findKey(f, g);
        if (w) {
          l[w] = Ot(y), delete l[g];
          return;
        }
        const S = i ? Gr(g) : String(g).trim();
        S !== g && delete l[g], l[S] = Ot(y), f[S] = !0;
      }), this;
    }
    concat(...i) {
      return this.constructor.concat(this, ...i);
    }
    toJSON(i) {
      const l = /* @__PURE__ */ Object.create(null);
      return _.forEach(this, (f, y) => {
        f != null && f !== !1 && (l[y] = i && _.isArray(f) ? f.join(", ") : f);
      }), l;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([i, l]) => i + ": " + l).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(i) {
      return i instanceof this ? i : new this(i);
    }
    static concat(i, ...l) {
      const f = new this(i);
      return l.forEach((y) => f.set(y)), f;
    }
    static accessor(i) {
      const f = (this[ss] = this[ss] = {
        accessors: {}
      }).accessors, y = this.prototype;
      function g(w) {
        const S = dt(w);
        f[S] || (Xr(y, w), f[S] = !0);
      }
      return _.isArray(i) ? i.forEach(g) : g(i), this;
    }
  }
  xt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), _.reduceDescriptors(xt.prototype, ({ value: r }, i) => {
    let l = i[0].toUpperCase() + i.slice(1);
    return {
      get: () => r,
      set(f) {
        this[l] = f;
      }
    };
  }), _.freezeMethods(xt);
  var Te = xt;
  function cn(r, i) {
    const l = this || on, f = i || l, y = Te.from(f.headers);
    let g = f.data;
    return _.forEach(r, function(S) {
      g = S.call(l, g, y.normalize(), i ? i.status : void 0);
    }), y.normalize(), g;
  }
  function rs(r) {
    return !!(r && r.__CANCEL__);
  }
  function st(r, i, l) {
    k.call(this, r ?? "canceled", k.ERR_CANCELED, i, l), this.name = "CanceledError";
  }
  _.inherits(st, k, {
    __CANCEL__: !0
  });
  function is(r, i, l) {
    const f = l.config.validateStatus;
    !l.status || !f || f(l.status) ? r(l) : i(new k(
      "Request failed with status code " + l.status,
      [k.ERR_BAD_REQUEST, k.ERR_BAD_RESPONSE][Math.floor(l.status / 100) - 4],
      l.config,
      l.request,
      l
    ));
  }
  function Yr(r) {
    const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return i && i[1] || "";
  }
  function Qr(r, i) {
    r = r || 10;
    const l = new Array(r), f = new Array(r);
    let y = 0, g = 0, w;
    return i = i !== void 0 ? i : 1e3, function(A) {
      const T = Date.now(), O = f[g];
      w || (w = T), l[y] = A, f[y] = T;
      let C = g, W = 0;
      for (; C !== y; )
        W += l[C++], C = C % r;
      if (y = (y + 1) % r, y === g && (g = (g + 1) % r), T - w < i)
        return;
      const ie = O && T - O;
      return ie ? Math.round(W * 1e3 / ie) : void 0;
    };
  }
  function Zr(r, i) {
    let l = 0, f = 1e3 / i, y, g;
    const w = (T, O = Date.now()) => {
      l = O, y = null, g && (clearTimeout(g), g = null), r.apply(null, T);
    };
    return [(...T) => {
      const O = Date.now(), C = O - l;
      C >= f ? w(T, O) : (y = T, g || (g = setTimeout(() => {
        g = null, w(y);
      }, f - C)));
    }, () => y && w(y)];
  }
  const At = (r, i, l = 3) => {
    let f = 0;
    const y = Qr(50, 250);
    return Zr((g) => {
      const w = g.loaded, S = g.lengthComputable ? g.total : void 0, A = w - f, T = y(A), O = w <= S;
      f = w;
      const C = {
        loaded: w,
        total: S,
        progress: S ? w / S : void 0,
        bytes: A,
        rate: T || void 0,
        estimated: T && S && O ? (S - w) / T : void 0,
        event: g,
        lengthComputable: S != null,
        [i ? "download" : "upload"]: !0
      };
      r(C);
    }, l);
  }, os = (r, i) => {
    const l = r != null;
    return [(f) => i[0]({
      lengthComputable: l,
      total: r,
      loaded: f
    }), i[1]];
  }, as = (r) => (...i) => _.asap(() => r(...i));
  var ei = me.hasStandardBrowserEnv ? /* @__PURE__ */ ((r, i) => (l) => (l = new URL(l, me.origin), r.protocol === l.protocol && r.host === l.host && (i || r.port === l.port)))(
    new URL(me.origin),
    me.navigator && /(msie|trident)/i.test(me.navigator.userAgent)
  ) : () => !0, ti = me.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(r, i, l, f, y, g) {
        const w = [r + "=" + encodeURIComponent(i)];
        _.isNumber(l) && w.push("expires=" + new Date(l).toGMTString()), _.isString(f) && w.push("path=" + f), _.isString(y) && w.push("domain=" + y), g === !0 && w.push("secure"), document.cookie = w.join("; ");
      },
      read(r) {
        const i = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return i ? decodeURIComponent(i[3]) : null;
      },
      remove(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    }
  ) : (
    // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {
      },
      read() {
        return null;
      },
      remove() {
      }
    }
  );
  function ni(r) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
  }
  function si(r, i) {
    return i ? r.replace(/\/?\/$/, "") + "/" + i.replace(/^\/+/, "") : r;
  }
  function cs(r, i, l) {
    let f = !ni(i);
    return r && f || l == !1 ? si(r, i) : i;
  }
  const us = (r) => r instanceof Te ? { ...r } : r;
  function Qe(r, i) {
    i = i || {};
    const l = {};
    function f(T, O, C, W) {
      return _.isPlainObject(T) && _.isPlainObject(O) ? _.merge.call({ caseless: W }, T, O) : _.isPlainObject(O) ? _.merge({}, O) : _.isArray(O) ? O.slice() : O;
    }
    function y(T, O, C, W) {
      if (_.isUndefined(O)) {
        if (!_.isUndefined(T))
          return f(void 0, T, C, W);
      } else return f(T, O, C, W);
    }
    function g(T, O) {
      if (!_.isUndefined(O))
        return f(void 0, O);
    }
    function w(T, O) {
      if (_.isUndefined(O)) {
        if (!_.isUndefined(T))
          return f(void 0, T);
      } else return f(void 0, O);
    }
    function S(T, O, C) {
      if (C in i)
        return f(T, O);
      if (C in r)
        return f(void 0, T);
    }
    const A = {
      url: g,
      method: g,
      data: g,
      baseURL: w,
      transformRequest: w,
      transformResponse: w,
      paramsSerializer: w,
      timeout: w,
      timeoutMessage: w,
      withCredentials: w,
      withXSRFToken: w,
      adapter: w,
      responseType: w,
      xsrfCookieName: w,
      xsrfHeaderName: w,
      onUploadProgress: w,
      onDownloadProgress: w,
      decompress: w,
      maxContentLength: w,
      maxBodyLength: w,
      beforeRedirect: w,
      transport: w,
      httpAgent: w,
      httpsAgent: w,
      cancelToken: w,
      socketPath: w,
      responseEncoding: w,
      validateStatus: S,
      headers: (T, O, C) => y(us(T), us(O), C, !0)
    };
    return _.forEach(Object.keys(Object.assign({}, r, i)), function(O) {
      const C = A[O] || y, W = C(r[O], i[O], O);
      _.isUndefined(W) && C !== S || (l[O] = W);
    }), l;
  }
  var ls = (r) => {
    const i = Qe({}, r);
    let { data: l, withXSRFToken: f, xsrfHeaderName: y, xsrfCookieName: g, headers: w, auth: S } = i;
    i.headers = w = Te.from(w), i.url = Zn(cs(i.baseURL, i.url), r.params, r.paramsSerializer), S && w.set(
      "Authorization",
      "Basic " + btoa((S.username || "") + ":" + (S.password ? unescape(encodeURIComponent(S.password)) : ""))
    );
    let A;
    if (_.isFormData(l)) {
      if (me.hasStandardBrowserEnv || me.hasStandardBrowserWebWorkerEnv)
        w.setContentType(void 0);
      else if ((A = w.getContentType()) !== !1) {
        const [T, ...O] = A ? A.split(";").map((C) => C.trim()).filter(Boolean) : [];
        w.setContentType([T || "multipart/form-data", ...O].join("; "));
      }
    }
    if (me.hasStandardBrowserEnv && (f && _.isFunction(f) && (f = f(i)), f || f !== !1 && ei(i.url))) {
      const T = y && g && ti.read(g);
      T && w.set(y, T);
    }
    return i;
  }, ri = typeof XMLHttpRequest < "u" && function(r) {
    return new Promise(function(l, f) {
      const y = ls(r);
      let g = y.data;
      const w = Te.from(y.headers).normalize();
      let { responseType: S, onUploadProgress: A, onDownloadProgress: T } = y, O, C, W, ie, L;
      function F() {
        ie && ie(), L && L(), y.cancelToken && y.cancelToken.unsubscribe(O), y.signal && y.signal.removeEventListener("abort", O);
      }
      let D = new XMLHttpRequest();
      D.open(y.method.toUpperCase(), y.url, !0), D.timeout = y.timeout;
      function Q() {
        if (!D)
          return;
        const de = Te.from(
          "getAllResponseHeaders" in D && D.getAllResponseHeaders()
        ), we = {
          data: !S || S === "text" || S === "json" ? D.responseText : D.response,
          status: D.status,
          statusText: D.statusText,
          headers: de,
          config: r,
          request: D
        };
        is(function(Ze) {
          l(Ze), F();
        }, function(Ze) {
          f(Ze), F();
        }, we), D = null;
      }
      "onloadend" in D ? D.onloadend = Q : D.onreadystatechange = function() {
        !D || D.readyState !== 4 || D.status === 0 && !(D.responseURL && D.responseURL.indexOf("file:") === 0) || setTimeout(Q);
      }, D.onabort = function() {
        D && (f(new k("Request aborted", k.ECONNABORTED, r, D)), D = null);
      }, D.onerror = function() {
        f(new k("Network Error", k.ERR_NETWORK, r, D)), D = null;
      }, D.ontimeout = function() {
        let qe = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded";
        const we = y.transitional || ts;
        y.timeoutErrorMessage && (qe = y.timeoutErrorMessage), f(new k(
          qe,
          we.clarifyTimeoutError ? k.ETIMEDOUT : k.ECONNABORTED,
          r,
          D
        )), D = null;
      }, g === void 0 && w.setContentType(null), "setRequestHeader" in D && _.forEach(w.toJSON(), function(qe, we) {
        D.setRequestHeader(we, qe);
      }), _.isUndefined(y.withCredentials) || (D.withCredentials = !!y.withCredentials), S && S !== "json" && (D.responseType = y.responseType), T && ([W, L] = At(T, !0), D.addEventListener("progress", W)), A && D.upload && ([C, ie] = At(A), D.upload.addEventListener("progress", C), D.upload.addEventListener("loadend", ie)), (y.cancelToken || y.signal) && (O = (de) => {
        D && (f(!de || de.type ? new st(null, r, D) : de), D.abort(), D = null);
      }, y.cancelToken && y.cancelToken.subscribe(O), y.signal && (y.signal.aborted ? O() : y.signal.addEventListener("abort", O)));
      const oe = Yr(y.url);
      if (oe && me.protocols.indexOf(oe) === -1) {
        f(new k("Unsupported protocol " + oe + ":", k.ERR_BAD_REQUEST, r));
        return;
      }
      D.send(g || null);
    });
  }, ii = (r, i) => {
    const { length: l } = r = r ? r.filter(Boolean) : [];
    if (i || l) {
      let f = new AbortController(), y;
      const g = function(T) {
        if (!y) {
          y = !0, S();
          const O = T instanceof Error ? T : this.reason;
          f.abort(O instanceof k ? O : new st(O instanceof Error ? O.message : O));
        }
      };
      let w = i && setTimeout(() => {
        w = null, g(new k(`timeout ${i} of ms exceeded`, k.ETIMEDOUT));
      }, i);
      const S = () => {
        r && (w && clearTimeout(w), w = null, r.forEach((T) => {
          T.unsubscribe ? T.unsubscribe(g) : T.removeEventListener("abort", g);
        }), r = null);
      };
      r.forEach((T) => T.addEventListener("abort", g));
      const { signal: A } = f;
      return A.unsubscribe = () => _.asap(S), A;
    }
  };
  const oi = function* (r, i) {
    let l = r.byteLength;
    if (l < i) {
      yield r;
      return;
    }
    let f = 0, y;
    for (; f < l; )
      y = f + i, yield r.slice(f, y), f = y;
  }, ai = async function* (r, i) {
    for await (const l of ci(r))
      yield* oi(l, i);
  }, ci = async function* (r) {
    if (r[Symbol.asyncIterator]) {
      yield* r;
      return;
    }
    const i = r.getReader();
    try {
      for (; ; ) {
        const { done: l, value: f } = await i.read();
        if (l)
          break;
        yield f;
      }
    } finally {
      await i.cancel();
    }
  }, fs = (r, i, l, f) => {
    const y = ai(r, i);
    let g = 0, w, S = (A) => {
      w || (w = !0, f && f(A));
    };
    return new ReadableStream({
      async pull(A) {
        try {
          const { done: T, value: O } = await y.next();
          if (T) {
            S(), A.close();
            return;
          }
          let C = O.byteLength;
          if (l) {
            let W = g += C;
            l(W);
          }
          A.enqueue(new Uint8Array(O));
        } catch (T) {
          throw S(T), T;
        }
      },
      cancel(A) {
        return S(A), y.return();
      }
    }, {
      highWaterMark: 2
    });
  }, Ct = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", hs = Ct && typeof ReadableStream == "function", ui = Ct && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((r) => (i) => r.encode(i))(new TextEncoder()) : async (r) => new Uint8Array(await new Response(r).arrayBuffer())), ds = (r, ...i) => {
    try {
      return !!r(...i);
    } catch {
      return !1;
    }
  }, li = hs && ds(() => {
    let r = !1;
    const i = new Request(me.origin, {
      body: new ReadableStream(),
      method: "POST",
      get duplex() {
        return r = !0, "half";
      }
    }).headers.has("Content-Type");
    return r && !i;
  }), ps = 64 * 1024, un = hs && ds(() => _.isReadableStream(new Response("").body)), Lt = {
    stream: un && ((r) => r.body)
  };
  Ct && ((r) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((i) => {
      !Lt[i] && (Lt[i] = _.isFunction(r[i]) ? (l) => l[i]() : (l, f) => {
        throw new k(`Response type '${i}' is not supported`, k.ERR_NOT_SUPPORT, f);
      });
    });
  })(new Response());
  const fi = async (r) => {
    if (r == null)
      return 0;
    if (_.isBlob(r))
      return r.size;
    if (_.isSpecCompliantForm(r))
      return (await new Request(me.origin, {
        method: "POST",
        body: r
      }).arrayBuffer()).byteLength;
    if (_.isArrayBufferView(r) || _.isArrayBuffer(r))
      return r.byteLength;
    if (_.isURLSearchParams(r) && (r = r + ""), _.isString(r))
      return (await ui(r)).byteLength;
  }, hi = async (r, i) => {
    const l = _.toFiniteNumber(r.getContentLength());
    return l ?? fi(i);
  };
  var di = Ct && (async (r) => {
    let {
      url: i,
      method: l,
      data: f,
      signal: y,
      cancelToken: g,
      timeout: w,
      onDownloadProgress: S,
      onUploadProgress: A,
      responseType: T,
      headers: O,
      withCredentials: C = "same-origin",
      fetchOptions: W
    } = ls(r);
    T = T ? (T + "").toLowerCase() : "text";
    let ie = ii([y, g && g.toAbortSignal()], w), L;
    const F = ie && ie.unsubscribe && (() => {
      ie.unsubscribe();
    });
    let D;
    try {
      if (A && li && l !== "get" && l !== "head" && (D = await hi(O, f)) !== 0) {
        let we = new Request(i, {
          method: "POST",
          body: f,
          duplex: "half"
        }), We;
        if (_.isFormData(f) && (We = we.headers.get("content-type")) && O.setContentType(We), we.body) {
          const [Ze, Bt] = os(
            D,
            At(as(A))
          );
          f = fs(we.body, ps, Ze, Bt);
        }
      }
      _.isString(C) || (C = C ? "include" : "omit");
      const Q = "credentials" in Request.prototype;
      L = new Request(i, {
        ...W,
        signal: ie,
        method: l.toUpperCase(),
        headers: O.normalize().toJSON(),
        body: f,
        duplex: "half",
        credentials: Q ? C : void 0
      });
      let oe = await fetch(L);
      const de = un && (T === "stream" || T === "response");
      if (un && (S || de && F)) {
        const we = {};
        ["status", "statusText", "headers"].forEach((vs) => {
          we[vs] = oe[vs];
        });
        const We = _.toFiniteNumber(oe.headers.get("content-length")), [Ze, Bt] = S && os(
          We,
          At(as(S), !0)
        ) || [];
        oe = new Response(
          fs(oe.body, ps, Ze, () => {
            Bt && Bt(), F && F();
          }),
          we
        );
      }
      T = T || "text";
      let qe = await Lt[_.findKey(Lt, T) || "text"](oe, r);
      return !de && F && F(), await new Promise((we, We) => {
        is(we, We, {
          data: qe,
          headers: Te.from(oe.headers),
          status: oe.status,
          statusText: oe.statusText,
          config: r,
          request: L
        });
      });
    } catch (Q) {
      throw F && F(), Q && Q.name === "TypeError" && /fetch/i.test(Q.message) ? Object.assign(
        new k("Network Error", k.ERR_NETWORK, r, L),
        {
          cause: Q.cause || Q
        }
      ) : k.from(Q, Q && Q.code, r, L);
    }
  });
  const ln = {
    http: Re,
    xhr: ri,
    fetch: di
  };
  _.forEach(ln, (r, i) => {
    if (r) {
      try {
        Object.defineProperty(r, "name", { value: i });
      } catch {
      }
      Object.defineProperty(r, "adapterName", { value: i });
    }
  });
  const ms = (r) => `- ${r}`, pi = (r) => _.isFunction(r) || r === null || r === !1;
  var ys = {
    getAdapter: (r) => {
      r = _.isArray(r) ? r : [r];
      const { length: i } = r;
      let l, f;
      const y = {};
      for (let g = 0; g < i; g++) {
        l = r[g];
        let w;
        if (f = l, !pi(l) && (f = ln[(w = String(l)).toLowerCase()], f === void 0))
          throw new k(`Unknown adapter '${w}'`);
        if (f)
          break;
        y[w || "#" + g] = f;
      }
      if (!f) {
        const g = Object.entries(y).map(
          ([S, A]) => `adapter ${S} ` + (A === !1 ? "is not supported by the environment" : "is not available in the build")
        );
        let w = i ? g.length > 1 ? `since :
` + g.map(ms).join(`
`) : " " + ms(g[0]) : "as no adapter specified";
        throw new k(
          "There is no suitable adapter to dispatch the request " + w,
          "ERR_NOT_SUPPORT"
        );
      }
      return f;
    },
    adapters: ln
  };
  function fn(r) {
    if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted)
      throw new st(null, r);
  }
  function gs(r) {
    return fn(r), r.headers = Te.from(r.headers), r.data = cn.call(
      r,
      r.transformRequest
    ), ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1), ys.getAdapter(r.adapter || on.adapter)(r).then(function(f) {
      return fn(r), f.data = cn.call(
        r,
        r.transformResponse,
        f
      ), f.headers = Te.from(f.headers), f;
    }, function(f) {
      return rs(f) || (fn(r), f && f.response && (f.response.data = cn.call(
        r,
        r.transformResponse,
        f.response
      ), f.response.headers = Te.from(f.response.headers))), Promise.reject(f);
    });
  }
  const ws = "1.8.2", Dt = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((r, i) => {
    Dt[r] = function(f) {
      return typeof f === r || "a" + (i < 1 ? "n " : " ") + r;
    };
  });
  const bs = {};
  Dt.transitional = function(i, l, f) {
    function y(g, w) {
      return "[Axios v" + ws + "] Transitional option '" + g + "'" + w + (f ? ". " + f : "");
    }
    return (g, w, S) => {
      if (i === !1)
        throw new k(
          y(w, " has been removed" + (l ? " in " + l : "")),
          k.ERR_DEPRECATED
        );
      return l && !bs[w] && (bs[w] = !0, console.warn(
        y(
          w,
          " has been deprecated since v" + l + " and will be removed in the near future"
        )
      )), i ? i(g, w, S) : !0;
    };
  }, Dt.spelling = function(i) {
    return (l, f) => (console.warn(`${f} is likely a misspelling of ${i}`), !0);
  };
  function mi(r, i, l) {
    if (typeof r != "object")
      throw new k("options must be an object", k.ERR_BAD_OPTION_VALUE);
    const f = Object.keys(r);
    let y = f.length;
    for (; y-- > 0; ) {
      const g = f[y], w = i[g];
      if (w) {
        const S = r[g], A = S === void 0 || w(S, g, r);
        if (A !== !0)
          throw new k("option " + g + " must be " + A, k.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (l !== !0)
        throw new k("Unknown option " + g, k.ERR_BAD_OPTION);
    }
  }
  var kt = {
    assertOptions: mi,
    validators: Dt
  };
  const Be = kt.validators;
  class Nt {
    constructor(i) {
      this.defaults = i, this.interceptors = {
        request: new es(),
        response: new es()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    async request(i, l) {
      try {
        return await this._request(i, l);
      } catch (f) {
        if (f instanceof Error) {
          let y = {};
          Error.captureStackTrace ? Error.captureStackTrace(y) : y = new Error();
          const g = y.stack ? y.stack.replace(/^.+\n/, "") : "";
          try {
            f.stack ? g && !String(f.stack).endsWith(g.replace(/^.+\n.+\n/, "")) && (f.stack += `
` + g) : f.stack = g;
          } catch {
          }
        }
        throw f;
      }
    }
    _request(i, l) {
      typeof i == "string" ? (l = l || {}, l.url = i) : l = i || {}, l = Qe(this.defaults, l);
      const { transitional: f, paramsSerializer: y, headers: g } = l;
      f !== void 0 && kt.assertOptions(f, {
        silentJSONParsing: Be.transitional(Be.boolean),
        forcedJSONParsing: Be.transitional(Be.boolean),
        clarifyTimeoutError: Be.transitional(Be.boolean)
      }, !1), y != null && (_.isFunction(y) ? l.paramsSerializer = {
        serialize: y
      } : kt.assertOptions(y, {
        encode: Be.function,
        serialize: Be.function
      }, !0)), l.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? l.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : l.allowAbsoluteUrls = !0), kt.assertOptions(l, {
        baseUrl: Be.spelling("baseURL"),
        withXsrfToken: Be.spelling("withXSRFToken")
      }, !0), l.method = (l.method || this.defaults.method || "get").toLowerCase();
      let w = g && _.merge(
        g.common,
        g[l.method]
      );
      g && _.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (L) => {
          delete g[L];
        }
      ), l.headers = Te.concat(w, g);
      const S = [];
      let A = !0;
      this.interceptors.request.forEach(function(F) {
        typeof F.runWhen == "function" && F.runWhen(l) === !1 || (A = A && F.synchronous, S.unshift(F.fulfilled, F.rejected));
      });
      const T = [];
      this.interceptors.response.forEach(function(F) {
        T.push(F.fulfilled, F.rejected);
      });
      let O, C = 0, W;
      if (!A) {
        const L = [gs.bind(this), void 0];
        for (L.unshift.apply(L, S), L.push.apply(L, T), W = L.length, O = Promise.resolve(l); C < W; )
          O = O.then(L[C++], L[C++]);
        return O;
      }
      W = S.length;
      let ie = l;
      for (C = 0; C < W; ) {
        const L = S[C++], F = S[C++];
        try {
          ie = L(ie);
        } catch (D) {
          F.call(this, D);
          break;
        }
      }
      try {
        O = gs.call(this, ie);
      } catch (L) {
        return Promise.reject(L);
      }
      for (C = 0, W = T.length; C < W; )
        O = O.then(T[C++], T[C++]);
      return O;
    }
    getUri(i) {
      i = Qe(this.defaults, i);
      const l = cs(i.baseURL, i.url, i.allowAbsoluteUrls);
      return Zn(l, i.params, i.paramsSerializer);
    }
  }
  _.forEach(["delete", "get", "head", "options"], function(i) {
    Nt.prototype[i] = function(l, f) {
      return this.request(Qe(f || {}, {
        method: i,
        url: l,
        data: (f || {}).data
      }));
    };
  }), _.forEach(["post", "put", "patch"], function(i) {
    function l(f) {
      return function(g, w, S) {
        return this.request(Qe(S || {}, {
          method: i,
          headers: f ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: g,
          data: w
        }));
      };
    }
    Nt.prototype[i] = l(), Nt.prototype[i + "Form"] = l(!0);
  });
  var Ft = Nt;
  class hn {
    constructor(i) {
      if (typeof i != "function")
        throw new TypeError("executor must be a function.");
      let l;
      this.promise = new Promise(function(g) {
        l = g;
      });
      const f = this;
      this.promise.then((y) => {
        if (!f._listeners) return;
        let g = f._listeners.length;
        for (; g-- > 0; )
          f._listeners[g](y);
        f._listeners = null;
      }), this.promise.then = (y) => {
        let g;
        const w = new Promise((S) => {
          f.subscribe(S), g = S;
        }).then(y);
        return w.cancel = function() {
          f.unsubscribe(g);
        }, w;
      }, i(function(g, w, S) {
        f.reason || (f.reason = new st(g, w, S), l(f.reason));
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason)
        throw this.reason;
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(i) {
      if (this.reason) {
        i(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(i) : this._listeners = [i];
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(i) {
      if (!this._listeners)
        return;
      const l = this._listeners.indexOf(i);
      l !== -1 && this._listeners.splice(l, 1);
    }
    toAbortSignal() {
      const i = new AbortController(), l = (f) => {
        i.abort(f);
      };
      return this.subscribe(l), i.signal.unsubscribe = () => this.unsubscribe(l), i.signal;
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let i;
      return {
        token: new hn(function(y) {
          i = y;
        }),
        cancel: i
      };
    }
  }
  var yi = hn;
  function gi(r) {
    return function(l) {
      return r.apply(null, l);
    };
  }
  function wi(r) {
    return _.isObject(r) && r.isAxiosError === !0;
  }
  const dn = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(dn).forEach(([r, i]) => {
    dn[i] = r;
  });
  var bi = dn;
  function _s(r) {
    const i = new Ft(r), l = t(Ft.prototype.request, i);
    return _.extend(l, Ft.prototype, i, { allOwnKeys: !0 }), _.extend(l, i, null, { allOwnKeys: !0 }), l.create = function(y) {
      return _s(Qe(r, y));
    }, l;
  }
  const ee = _s(on);
  return ee.Axios = Ft, ee.CanceledError = st, ee.CancelToken = yi, ee.isCancel = rs, ee.VERSION = ws, ee.toFormData = Tt, ee.AxiosError = k, ee.Cancel = ee.CanceledError, ee.all = function(i) {
    return Promise.all(i);
  }, ee.spread = gi, ee.isAxiosError = wi, ee.mergeConfig = Qe, ee.AxiosHeaders = Te, ee.formToJSON = (r) => ns(_.isHTMLForm(r) ? new FormData(r) : r), ee.getAdapter = ys.getAdapter, ee.HttpStatusCode = bi, ee.default = ee, pn = ee, pn;
}
var Os;
function Zs() {
  if (Os) return Ie;
  Os = 1;
  var t = Ie && Ie.__assign || function() {
    return t = Object.assign || function(a) {
      for (var c, o = 1, d = arguments.length; o < d; o++) {
        c = arguments[o];
        for (var h in c) Object.prototype.hasOwnProperty.call(c, h) && (a[h] = c[h]);
      }
      return a;
    }, t.apply(this, arguments);
  };
  Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.getRequestHeaders = Ie.getAxiosClient = void 0;
  var e = /* @__PURE__ */ Oi();
  function n(a, c, o, d, h) {
    var u = e.default.create({
      baseURL: a,
      headers: s(c, d, o, a, h),
      withCredentials: !0
    });
    return u.interceptors.request.use(function(m) {
      return typeof window < "u" && window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (m.headers["X-Frappe-CSRF-Token"] = window.csrf_token), c && d && o && (m.headers.Authorization = "".concat(d, " ").concat(o())), m;
    }), u;
  }
  Ie.getAxiosClient = n;
  function s(a, c, o, d, h) {
    a === void 0 && (a = !1);
    var u = {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8"
    };
    return a && c && o && (u.Authorization = "".concat(c, " ").concat(o())), typeof window < "u" && typeof document < "u" && (window.location && (d && d !== window.location.origin || (u["X-Frappe-Site-Name"] = window.location.hostname)), window.csrf_token && window.csrf_token !== "{{ csrf_token }}" && (u["X-Frappe-CSRF-Token"] = window.csrf_token)), t(t({}, u), h ?? {});
  }
  return Ie.getRequestHeaders = s, Ie;
}
var xs;
function er() {
  if (xs) return Ae;
  xs = 1;
  var t = Ae && Ae.__assign || function() {
    return t = Object.assign || function(c) {
      for (var o, d = 1, h = arguments.length; d < h; d++) {
        o = arguments[d];
        for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (c[u] = o[u]);
      }
      return c;
    }, t.apply(this, arguments);
  }, e = Ae && Ae.__awaiter || function(c, o, d, h) {
    function u(m) {
      return m instanceof d ? m : new d(function(b) {
        b(m);
      });
    }
    return new (d || (d = Promise))(function(m, b) {
      function E(R) {
        try {
          v(h.next(R));
        } catch (q) {
          b(q);
        }
      }
      function p(R) {
        try {
          v(h.throw(R));
        } catch (q) {
          b(q);
        }
      }
      function v(R) {
        R.done ? m(R.value) : u(R.value).then(E, p);
      }
      v((h = h.apply(c, o || [])).next());
    });
  }, n = Ae && Ae.__generator || function(c, o) {
    var d = { label: 0, sent: function() {
      if (m[0] & 1) throw m[1];
      return m[1];
    }, trys: [], ops: [] }, h, u, m, b;
    return b = { next: E(0), throw: E(1), return: E(2) }, typeof Symbol == "function" && (b[Symbol.iterator] = function() {
      return this;
    }), b;
    function E(v) {
      return function(R) {
        return p([v, R]);
      };
    }
    function p(v) {
      if (h) throw new TypeError("Generator is already executing.");
      for (; b && (b = 0, v[0] && (d = 0)), d; ) try {
        if (h = 1, u && (m = v[0] & 2 ? u.return : v[0] ? u.throw || ((m = u.return) && m.call(u), 0) : u.next) && !(m = m.call(u, v[1])).done) return m;
        switch (u = 0, m && (v = [v[0] & 2, m.value]), v[0]) {
          case 0:
          case 1:
            m = v;
            break;
          case 4:
            return d.label++, { value: v[1], done: !1 };
          case 5:
            d.label++, u = v[1], v = [0];
            continue;
          case 7:
            v = d.ops.pop(), d.trys.pop();
            continue;
          default:
            if (m = d.trys, !(m = m.length > 0 && m[m.length - 1]) && (v[0] === 6 || v[0] === 2)) {
              d = 0;
              continue;
            }
            if (v[0] === 3 && (!m || v[1] > m[0] && v[1] < m[3])) {
              d.label = v[1];
              break;
            }
            if (v[0] === 6 && d.label < m[1]) {
              d.label = m[1], m = v;
              break;
            }
            if (m && d.label < m[2]) {
              d.label = m[2], d.ops.push(v);
              break;
            }
            m[2] && d.ops.pop(), d.trys.pop();
            continue;
        }
        v = o.call(c, d);
      } catch (R) {
        v = [6, R], u = 0;
      } finally {
        h = m = 0;
      }
      if (v[0] & 5) throw v[1];
      return { value: v[0] ? v[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ae, "__esModule", { value: !0 }), Ae.FrappeFileUpload = void 0;
  var s = Zs(), a = (
    /** @class */
    function() {
      function c(o, d, h, u, m, b) {
        this.appURL = o, this.axios = d, this.useToken = h ?? !1, this.token = u, this.tokenType = m, this.customHeaders = b;
      }
      return c.prototype.uploadFile = function(o, d, h, u) {
        return u === void 0 && (u = "upload_file"), e(this, void 0, void 0, function() {
          var m, b, E, p, v, R, q, x;
          return n(this, function(X) {
            return m = new FormData(), o && m.append("file", o, o.name), b = d.isPrivate, E = d.folder, p = d.file_url, v = d.doctype, R = d.docname, q = d.fieldname, x = d.otherData, b && m.append("is_private", "1"), E && m.append("folder", E), p && m.append("file_url", p), v && R && (m.append("doctype", v), m.append("docname", R), q && m.append("fieldname", q)), x && Object.keys(x).forEach(function(z) {
              var H = x[z];
              m.append(z, H);
            }), [2, this.axios.post("/api/method/".concat(u), m, {
              onUploadProgress: function(z) {
                h && h(z.loaded, z.total, z);
              },
              headers: t(t({}, (0, s.getRequestHeaders)(this.useToken, this.tokenType, this.token, this.appURL, this.customHeaders)), { "Content-Type": "multipart/form-data" })
            }).catch(function(z) {
              var H, U;
              throw t(t({}, z.response.data), { httpStatus: z.response.status, httpStatusText: z.response.statusText, message: (H = z.response.data.message) !== null && H !== void 0 ? H : "There was an error while uploading the file.", exception: (U = z.response.data.exception) !== null && U !== void 0 ? U : "" });
            })];
          });
        });
      }, c;
    }()
  );
  return Ae.FrappeFileUpload = a, Ae;
}
var As;
function xi() {
  if (As) return pt;
  As = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.FrappeApp = void 0;
  var t = tr(), e = Ys(), n = Qs(), s = er(), a = Zs(), c = (
    /** @class */
    function() {
      function o(d, h, u, m) {
        var b, E;
        this.url = d, this.name = u ?? "FrappeApp", this.useToken = (b = h == null ? void 0 : h.useToken) !== null && b !== void 0 ? b : !1, this.token = h == null ? void 0 : h.token, this.tokenType = (E = h == null ? void 0 : h.type) !== null && E !== void 0 ? E : "Bearer", this.customHeaders = m, this.axios = (0, a.getAxiosClient)(this.url, this.useToken, this.token, this.tokenType, this.customHeaders);
      }
      return o.prototype.auth = function() {
        return new t.FrappeAuth(this.url, this.axios, this.useToken, this.token, this.tokenType);
      }, o.prototype.db = function() {
        return new n.FrappeDB(this.url, this.axios, this.useToken, this.token, this.tokenType);
      }, o.prototype.file = function() {
        return new s.FrappeFileUpload(this.url, this.axios, this.useToken, this.token, this.tokenType, this.customHeaders);
      }, o.prototype.call = function() {
        return new e.FrappeCall(this.url, this.axios, this.useToken, this.token, this.tokenType);
      }, o;
    }()
  );
  return pt.FrappeApp = c, pt;
}
var Ce = {}, Cs;
function Ai() {
  if (Cs) return Ce;
  Cs = 1;
  var t = Ce && Ce.__assign || function() {
    return t = Object.assign || function(a) {
      for (var c, o = 1, d = arguments.length; o < d; o++) {
        c = arguments[o];
        for (var h in c) Object.prototype.hasOwnProperty.call(c, h) && (a[h] = c[h]);
      }
      return a;
    }, t.apply(this, arguments);
  }, e = Ce && Ce.__awaiter || function(a, c, o, d) {
    function h(u) {
      return u instanceof o ? u : new o(function(m) {
        m(u);
      });
    }
    return new (o || (o = Promise))(function(u, m) {
      function b(v) {
        try {
          p(d.next(v));
        } catch (R) {
          m(R);
        }
      }
      function E(v) {
        try {
          p(d.throw(v));
        } catch (R) {
          m(R);
        }
      }
      function p(v) {
        v.done ? u(v.value) : h(v.value).then(b, E);
      }
      p((d = d.apply(a, c || [])).next());
    });
  }, n = Ce && Ce.__generator || function(a, c) {
    var o = { label: 0, sent: function() {
      if (u[0] & 1) throw u[1];
      return u[1];
    }, trys: [], ops: [] }, d, h, u, m;
    return m = { next: b(0), throw: b(1), return: b(2) }, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
    function b(p) {
      return function(v) {
        return E([p, v]);
      };
    }
    function E(p) {
      if (d) throw new TypeError("Generator is already executing.");
      for (; m && (m = 0, p[0] && (o = 0)), o; ) try {
        if (d = 1, h && (u = p[0] & 2 ? h.return : p[0] ? h.throw || ((u = h.return) && u.call(h), 0) : h.next) && !(u = u.call(h, p[1])).done) return u;
        switch (h = 0, u && (p = [p[0] & 2, u.value]), p[0]) {
          case 0:
          case 1:
            u = p;
            break;
          case 4:
            return o.label++, { value: p[1], done: !1 };
          case 5:
            o.label++, h = p[1], p = [0];
            continue;
          case 7:
            p = o.ops.pop(), o.trys.pop();
            continue;
          default:
            if (u = o.trys, !(u = u.length > 0 && u[u.length - 1]) && (p[0] === 6 || p[0] === 2)) {
              o = 0;
              continue;
            }
            if (p[0] === 3 && (!u || p[1] > u[0] && p[1] < u[3])) {
              o.label = p[1];
              break;
            }
            if (p[0] === 6 && o.label < u[1]) {
              o.label = u[1], u = p;
              break;
            }
            if (u && o.label < u[2]) {
              o.label = u[2], o.ops.push(p);
              break;
            }
            u[2] && o.ops.pop(), o.trys.pop();
            continue;
        }
        p = c.call(a, o);
      } catch (v) {
        p = [6, v], h = 0;
      } finally {
        d = u = 0;
      }
      if (p[0] & 5) throw p[1];
      return { value: p[0] ? p[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.FrappeAuth = void 0;
  var s = (
    /** @class */
    function() {
      function a(c, o, d, h, u) {
        this.appURL = c, this.axios = o, this.useToken = d ?? !1, this.token = h, this.tokenType = u;
      }
      return a.prototype.loginWithUsernamePassword = function(c) {
        return e(this, void 0, void 0, function() {
          return n(this, function(o) {
            return [2, this.axios.post("/api/method/login", {
              usr: c.username,
              pwd: c.password,
              otp: c.otp,
              tmp_id: c.tmp_id,
              device: c.device
            }).then(function(d) {
              return d.data;
            }).catch(function(d) {
              var h, u;
              throw t(t({}, d.response.data), { httpStatus: d.response.status, httpStatusText: d.response.statusText, message: (h = d.response.data.message) !== null && h !== void 0 ? h : "There was an error while logging in", exception: (u = d.response.data.exception) !== null && u !== void 0 ? u : "" });
            })];
          });
        });
      }, a.prototype.getLoggedInUser = function() {
        return e(this, void 0, void 0, function() {
          return n(this, function(c) {
            return [2, this.axios.get("/api/method/frappe.auth.get_logged_user").then(function(o) {
              return o.data.message;
            }).catch(function(o) {
              var d;
              throw t(t({}, o.response.data), { httpStatus: o.response.status, httpStatusText: o.response.statusText, message: "There was an error while fetching the logged in user", exception: (d = o.response.data.exception) !== null && d !== void 0 ? d : "" });
            })];
          });
        });
      }, a.prototype.logout = function() {
        return e(this, void 0, void 0, function() {
          return n(this, function(c) {
            return [2, this.axios.post("/api/method/logout", {}).then(function() {
            }).catch(function(o) {
              var d, h;
              throw t(t({}, o.response.data), { httpStatus: o.response.status, httpStatusText: o.response.statusText, message: (d = o.response.data.message) !== null && d !== void 0 ? d : "There was an error while logging out", exception: (h = o.response.data.exception) !== null && h !== void 0 ? h : "" });
            })];
          });
        });
      }, a.prototype.forgetPassword = function(c) {
        return e(this, void 0, void 0, function() {
          return n(this, function(o) {
            return [2, this.axios.post("/", {
              cmd: "frappe.core.doctype.user.user.reset_password",
              user: c
            }).then(function() {
            }).catch(function(d) {
              var h, u;
              throw t(t({}, d.response.data), { httpStatus: d.response.status, httpStatusText: d.response.statusText, message: (h = d.response.data.message) !== null && h !== void 0 ? h : "There was an error sending password reset email.", exception: (u = d.response.data.exception) !== null && u !== void 0 ? u : "" });
            })];
          });
        });
      }, a;
    }()
  );
  return Ce.FrappeAuth = s, Ce;
}
var Ls;
function tr() {
  return Ls || (Ls = 1, function(t) {
    var e = et && et.__createBinding || (Object.create ? function(s, a, c, o) {
      o === void 0 && (o = c);
      var d = Object.getOwnPropertyDescriptor(a, c);
      (!d || ("get" in d ? !a.__esModule : d.writable || d.configurable)) && (d = { enumerable: !0, get: function() {
        return a[c];
      } }), Object.defineProperty(s, o, d);
    } : function(s, a, c, o) {
      o === void 0 && (o = c), s[o] = a[c];
    }), n = et && et.__exportStar || function(s, a) {
      for (var c in s) c !== "default" && !Object.prototype.hasOwnProperty.call(a, c) && e(a, s, c);
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), n(xi(), t), n(Ai(), t), n(Qs(), t), n(er(), t), n(Ys(), t);
  }(et)), et;
}
var Ci = tr(), Pt = { exports: {} }, mn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ds;
function Li() {
  if (Ds) return mn;
  Ds = 1;
  var t = bt;
  function e(b, E) {
    return b === E && (b !== 0 || 1 / b === 1 / E) || b !== b && E !== E;
  }
  var n = typeof Object.is == "function" ? Object.is : e, s = t.useState, a = t.useEffect, c = t.useLayoutEffect, o = t.useDebugValue;
  function d(b, E) {
    var p = E(), v = s({ inst: { value: p, getSnapshot: E } }), R = v[0].inst, q = v[1];
    return c(
      function() {
        R.value = p, R.getSnapshot = E, h(R) && q({ inst: R });
      },
      [b, p, E]
    ), a(
      function() {
        return h(R) && q({ inst: R }), b(function() {
          h(R) && q({ inst: R });
        });
      },
      [b]
    ), o(p), p;
  }
  function h(b) {
    var E = b.getSnapshot;
    b = b.value;
    try {
      var p = E();
      return !n(b, p);
    } catch {
      return !0;
    }
  }
  function u(b, E) {
    return E();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : d;
  return mn.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : m, mn;
}
var yn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ks;
function Di() {
  return ks || (ks = 1, process.env.NODE_ENV !== "production" && function() {
    function t(p, v) {
      return p === v && (p !== 0 || 1 / p === 1 / v) || p !== p && v !== v;
    }
    function e(p, v) {
      m || a.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var R = v();
      if (!b) {
        var q = v();
        c(R, q) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), b = !0);
      }
      q = o({
        inst: { value: R, getSnapshot: v }
      });
      var x = q[0].inst, X = q[1];
      return h(
        function() {
          x.value = R, x.getSnapshot = v, n(x) && X({ inst: x });
        },
        [p, R, v]
      ), d(
        function() {
          return n(x) && X({ inst: x }), p(function() {
            n(x) && X({ inst: x });
          });
        },
        [p]
      ), u(R), R;
    }
    function n(p) {
      var v = p.getSnapshot;
      p = p.value;
      try {
        var R = v();
        return !c(p, R);
      } catch {
        return !0;
      }
    }
    function s(p, v) {
      return v();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var a = bt, c = typeof Object.is == "function" ? Object.is : t, o = a.useState, d = a.useEffect, h = a.useLayoutEffect, u = a.useDebugValue, m = !1, b = !1, E = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s : e;
    yn.useSyncExternalStore = a.useSyncExternalStore !== void 0 ? a.useSyncExternalStore : E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), yn;
}
var Ns;
function ki() {
  return Ns || (Ns = 1, process.env.NODE_ENV === "production" ? Pt.exports = Li() : Pt.exports = Di()), Pt.exports;
}
var nr = ki();
const sr = 0, rr = 1, ir = 2, Fs = 3;
var Bs = Object.prototype.hasOwnProperty;
function On(t, e) {
  var n, s;
  if (t === e) return !0;
  if (t && e && (n = t.constructor) === e.constructor) {
    if (n === Date) return t.getTime() === e.getTime();
    if (n === RegExp) return t.toString() === e.toString();
    if (n === Array) {
      if ((s = t.length) === e.length)
        for (; s-- && On(t[s], e[s]); ) ;
      return s === -1;
    }
    if (!n || typeof t == "object") {
      s = 0;
      for (n in t)
        if (Bs.call(t, n) && ++s && !Bs.call(e, n) || !(n in e) || !On(t[n], e[n])) return !1;
      return Object.keys(e).length === s;
    }
  }
  return t !== t && e !== e;
}
const De = /* @__PURE__ */ new WeakMap(), Ke = () => {
}, ae = (
  /*#__NOINLINE__*/
  Ke()
), Gt = Object, B = (t) => t === ae, Ee = (t) => typeof t == "function", je = (t, e) => ({
  ...t,
  ...e
}), or = (t) => Ee(t.then), gn = {}, Ut = {}, $n = "undefined", _t = typeof window != $n, xn = typeof document != $n, Ni = _t && "Deno" in window, Fi = () => _t && typeof window.requestAnimationFrame != $n, Je = (t, e) => {
  const n = De.get(t);
  return [
    // Getter
    () => !B(e) && t.get(e) || gn,
    // Setter
    (s) => {
      if (!B(e)) {
        const a = t.get(e);
        e in Ut || (Ut[e] = a), n[5](e, je(a, s), a || gn);
      }
    },
    // Subscriber
    n[6],
    // Get server cache snapshot
    () => !B(e) && e in Ut ? Ut[e] : !B(e) && t.get(e) || gn
  ];
};
let An = !0;
const Bi = () => An, [Cn, Ln] = _t && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  Ke,
  Ke
], Pi = () => {
  const t = xn && document.visibilityState;
  return B(t) || t !== "hidden";
}, Ui = (t) => (xn && document.addEventListener("visibilitychange", t), Cn("focus", t), () => {
  xn && document.removeEventListener("visibilitychange", t), Ln("focus", t);
}), qi = (t) => {
  const e = () => {
    An = !0, t();
  }, n = () => {
    An = !1;
  };
  return Cn("online", e), Cn("offline", n), () => {
    Ln("online", e), Ln("offline", n);
  };
}, Ii = {
  isOnline: Bi,
  isVisible: Pi
}, ji = {
  initFocus: Ui,
  initReconnect: qi
}, Ps = !bt.useId, wt = !_t || Ni, Vi = (t) => Fi() ? window.requestAnimationFrame(t) : setTimeout(t, 1), gt = wt ? at : Ei, wn = typeof navigator < "u" && navigator.connection, Us = !wt && wn && ([
  "slow-2g",
  "2g"
].includes(wn.effectiveType) || wn.saveData), qt = /* @__PURE__ */ new WeakMap(), bn = (t, e) => Gt.prototype.toString.call(t) === `[object ${e}]`;
let Mi = 0;
const Dn = (t) => {
  const e = typeof t, n = bn(t, "Date"), s = bn(t, "RegExp"), a = bn(t, "Object");
  let c, o;
  if (Gt(t) === t && !n && !s) {
    if (c = qt.get(t), c) return c;
    if (c = ++Mi + "~", qt.set(t, c), Array.isArray(t)) {
      for (c = "@", o = 0; o < t.length; o++)
        c += Dn(t[o]) + ",";
      qt.set(t, c);
    }
    if (a) {
      c = "#";
      const d = Gt.keys(t).sort();
      for (; !B(o = d.pop()); )
        B(t[o]) || (c += o + ":" + Dn(t[o]) + ",");
      qt.set(t, c);
    }
  } else
    c = n ? t.toJSON() : e == "symbol" ? t.toString() : e == "string" ? JSON.stringify(t) : "" + t;
  return c;
}, ot = (t) => {
  if (Ee(t))
    try {
      t = t();
    } catch {
      t = "";
    }
  const e = t;
  return t = typeof t == "string" ? t : (Array.isArray(t) ? t.length : t) ? Dn(t) : "", [
    t,
    e
  ];
};
let $i = 0;
const kn = () => ++$i;
async function ar(...t) {
  const [e, n, s, a] = t, c = je({
    populateCache: !0,
    throwOnError: !0
  }, typeof a == "boolean" ? {
    revalidate: a
  } : a || {});
  let o = c.populateCache;
  const d = c.rollbackOnError;
  let h = c.optimisticData;
  const u = (E) => typeof d == "function" ? d(E) : d !== !1, m = c.throwOnError;
  if (Ee(n)) {
    const E = n, p = [], v = e.keys();
    for (const R of v)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(R) && E(e.get(R)._k) && p.push(R);
    return Promise.all(p.map(b));
  }
  return b(n);
  async function b(E) {
    const [p] = ot(E);
    if (!p) return;
    const [v, R] = Je(e, p), [q, x, X, z] = De.get(e), H = () => {
      const G = q[p];
      return (Ee(c.revalidate) ? c.revalidate(v().data, E) : c.revalidate !== !1) && (delete X[p], delete z[p], G && G[0]) ? G[0](ir).then(() => v().data) : v().data;
    };
    if (t.length < 3)
      return H();
    let U = s, J;
    const ke = kn();
    x[p] = [
      ke,
      0
    ];
    const N = !B(h), pe = v(), M = pe.data, ce = pe._c, be = B(ce) ? M : ce;
    if (N && (h = Ee(h) ? h(be, M) : h, R({
      data: h,
      _c: be
    })), Ee(U))
      try {
        U = U(be);
      } catch (G) {
        J = G;
      }
    if (U && or(U))
      if (U = await U.catch((G) => {
        J = G;
      }), ke !== x[p][0]) {
        if (J) throw J;
        return U;
      } else J && N && u(J) && (o = !0, R({
        data: be,
        _c: ae
      }));
    if (o && !J)
      if (Ee(o)) {
        const G = o(U, be);
        R({
          data: G,
          error: ae,
          _c: ae
        });
      } else
        R({
          data: U,
          error: ae,
          _c: ae
        });
    if (x[p][1] = kn(), Promise.resolve(H()).then(() => {
      R({
        _c: ae
      });
    }), J) {
      if (m) throw J;
      return;
    }
    return U;
  }
}
const qs = (t, e) => {
  for (const n in t)
    t[n][0] && t[n][0](e);
}, cr = (t, e) => {
  if (!De.has(t)) {
    const n = je(ji, e), s = /* @__PURE__ */ Object.create(null), a = ar.bind(ae, t);
    let c = Ke;
    const o = /* @__PURE__ */ Object.create(null), d = (m, b) => {
      const E = o[m] || [];
      return o[m] = E, E.push(b), () => E.splice(E.indexOf(b), 1);
    }, h = (m, b, E) => {
      t.set(m, b);
      const p = o[m];
      if (p)
        for (const v of p)
          v(b, E);
    }, u = () => {
      if (!De.has(t) && (De.set(t, [
        s,
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        /* @__PURE__ */ Object.create(null),
        a,
        h,
        d
      ]), !wt)) {
        const m = n.initFocus(setTimeout.bind(ae, qs.bind(ae, s, sr))), b = n.initReconnect(setTimeout.bind(ae, qs.bind(ae, s, rr)));
        c = () => {
          m && m(), b && b(), De.delete(t);
        };
      }
    };
    return u(), [
      t,
      a,
      u,
      c
    ];
  }
  return [
    t,
    De.get(t)[4]
  ];
}, Hi = (t, e, n, s, a) => {
  const c = n.errorRetryCount, o = a.retryCount, d = ~~((Math.random() + 0.5) * (1 << (o < 8 ? o : 8))) * n.errorRetryInterval;
  !B(c) && o > c || setTimeout(s, d, a);
}, Wi = On, [vt, zi] = cr(/* @__PURE__ */ new Map()), ur = je(
  {
    // events
    onLoadingSlow: Ke,
    onSuccess: Ke,
    onError: Ke,
    onErrorRetry: Hi,
    onDiscarded: Ke,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: Us ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: Us ? 5e3 : 3e3,
    // providers
    compare: Wi,
    isPaused: () => !1,
    cache: vt,
    mutate: zi,
    fallback: {}
  },
  // use web preset by default
  Ii
), lr = (t, e) => {
  const n = je(t, e);
  if (e) {
    const { use: s, fallback: a } = t, { use: c, fallback: o } = e;
    s && c && (n.use = s.concat(c)), a && o && (n.fallback = je(a, o));
  }
  return n;
}, Nn = Xs({}), Ji = (t) => {
  const { value: e } = t, n = Z(Nn), s = Ee(e), a = Kt(() => s ? e(n) : e, [
    s,
    n,
    e
  ]), c = Kt(() => s ? a : lr(n, a), [
    s,
    n,
    a
  ]), o = a && a.provider, d = Pe(ae);
  o && !d.current && (d.current = cr(o(c.cache || vt), a));
  const h = d.current;
  return h && (c.cache = h[0], c.mutate = h[1]), gt(() => {
    if (h)
      return h[2] && h[2](), h[3];
  }, []), Si(Nn.Provider, je(t, {
    value: c
  }));
}, fr = "$inf$", hr = _t && window.__SWR_DEVTOOLS_USE__, Ki = hr ? window.__SWR_DEVTOOLS_USE__ : [], Gi = () => {
  hr && (window.__SWR_DEVTOOLS_REACT__ = bt);
}, dr = (t) => Ee(t[1]) ? [
  t[0],
  t[1],
  t[2] || {}
] : [
  t[0],
  null,
  (t[1] === null ? t[2] : t[1]) || {}
], Xi = () => je(ur, Z(Nn)), Xt = (t, e) => {
  const [n, s] = ot(t), [, , , a] = De.get(vt);
  if (a[n]) return a[n];
  const c = e(s);
  return a[n] = c, c;
}, Yi = (t) => (e, n, s) => t(e, n && ((...c) => {
  const [o] = ot(e), [, , , d] = De.get(vt);
  if (o.startsWith(fr))
    return n(...c);
  const h = d[o];
  return B(h) ? n(...c) : (delete d[o], h);
}), s), Qi = Ki.concat(Yi), Zi = (t) => function(...n) {
  const s = Xi(), [a, c, o] = dr(n), d = lr(s, o);
  let h = t;
  const { use: u } = d, m = (u || []).concat(Qi);
  for (let b = m.length; b--; )
    h = m[b](h);
  return h(a, c || d.fetcher || null, d);
}, eo = (t, e, n) => {
  const s = e[t] || (e[t] = []);
  return s.push(n), () => {
    const a = s.indexOf(n);
    a >= 0 && (s[a] = s[s.length - 1], s.pop());
  };
}, to = (t, e) => (...n) => {
  const [s, a, c] = dr(n), o = (c.use || []).concat(e);
  return t(s, a, {
    ...c,
    use: o
  });
};
Gi();
const _n = bt.use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
// and emitting an error.
// We assume that this is only for the `use(thenable)` case, not `use(context)`.
// https://github.com/facebook/react/blob/aed00dacfb79d17c53218404c52b1c7aa59c4a89/packages/react-server/src/ReactFizzThenable.js#L45
((t) => {
  switch (t.status) {
    case "pending":
      throw t;
    case "fulfilled":
      return t.value;
    case "rejected":
      throw t.reason;
    default:
      throw t.status = "pending", t.then((e) => {
        t.status = "fulfilled", t.value = e;
      }, (e) => {
        t.status = "rejected", t.reason = e;
      }), t;
  }
}), vn = {
  dedupe: !0
}, no = (t, e, n) => {
  const { cache: s, compare: a, suspense: c, fallbackData: o, revalidateOnMount: d, revalidateIfStale: h, refreshInterval: u, refreshWhenHidden: m, refreshWhenOffline: b, keepPreviousData: E } = n, [p, v, R, q] = De.get(s), [x, X] = ot(t), z = Pe(!1), H = Pe(!1), U = Pe(x), J = Pe(e), ke = Pe(n), N = () => ke.current, pe = () => N().isVisible() && N().isOnline(), [M, ce, be, G] = Je(s, x), ue = Pe({}).current, le = B(o) ? B(n.fallback) ? ae : n.fallback[x] : o, Ne = ($, j) => {
    for (const fe in ue) {
      const K = fe;
      if (K === "data") {
        if (!a($[K], j[K]) && (!B($[K]) || !a(Ge, j[K])))
          return !1;
      } else if (j[K] !== $[K])
        return !1;
    }
    return !0;
  }, Y = Kt(() => {
    const $ = !x || !e ? !1 : B(d) ? N().isPaused() || c ? !1 : h !== !1 : d, j = (he) => {
      const Se = je(he);
      return delete Se._k, $ ? {
        isValidating: !0,
        isLoading: !0,
        ...Se
      } : Se;
    }, fe = M(), K = G(), _e = j(fe), He = fe === K ? _e : j(K);
    let re = _e;
    return [
      () => {
        const he = j(M());
        return Ne(he, re) ? (re.data = he.data, re.isLoading = he.isLoading, re.isValidating = he.isValidating, re.error = he.error, re) : (re = he, he);
      },
      () => He
    ];
  }, [
    s,
    x
  ]), ge = nr.useSyncExternalStore(I(
    ($) => be(x, (j, fe) => {
      Ne(fe, j) || $();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      s,
      x
    ]
  ), Y[0], Y[1]), Ve = !z.current, lt = p[x] && p[x].length > 0, Fe = ge.data, se = B(Fe) ? le && or(le) ? _n(le) : le : Fe, Me = ge.error, $e = Pe(se), Ge = E ? B(Fe) ? B($e.current) ? se : $e.current : Fe : se, tt = lt && !B(Me) ? !1 : Ve && !B(d) ? d : N().isPaused() ? !1 : c ? B(se) ? !1 : h : B(se) || h, Et = !!(x && e && Ve && tt), en = B(ge.isValidating) ? Et : ge.isValidating, St = B(ge.isLoading) ? Et : ge.isLoading, Xe = I(
    async ($) => {
      const j = J.current;
      if (!x || !j || H.current || N().isPaused())
        return !1;
      let fe, K, _e = !0;
      const He = $ || {}, re = !R[x] || !He.dedupe, he = () => Ps ? !H.current && x === U.current && z.current : x === U.current, Se = {
        isValidating: !1,
        isLoading: !1
      }, _ = () => {
        ce(Se);
      }, k = () => {
        const ye = R[x];
        ye && ye[1] === K && delete R[x];
      }, ht = {
        isValidating: !0
      };
      B(M().data) && (ht.isLoading = !0);
      try {
        if (re && (ce(ht), n.loadingTimeout && B(M().data) && setTimeout(() => {
          _e && he() && N().onLoadingSlow(x, n);
        }, n.loadingTimeout), R[x] = [
          j(X),
          kn()
        ]), [fe, K] = R[x], fe = await fe, re && setTimeout(k, n.dedupingInterval), !R[x] || R[x][1] !== K)
          return re && he() && N().onDiscarded(x), !1;
        Se.error = ae;
        const ye = v[x];
        if (!B(ye) && // case 1
        (K <= ye[0] || // case 2
        K <= ye[1] || // case 3
        ye[1] === 0))
          return _(), re && he() && N().onDiscarded(x), !1;
        const Re = M().data;
        Se.data = a(Re, fe) ? Re : fe, re && he() && N().onSuccess(fe, x, n);
      } catch (ye) {
        k();
        const Re = N(), { shouldRetryOnError: Ye } = Re;
        Re.isPaused() || (Se.error = ye, re && he() && (Re.onError(ye, x, Re), (Ye === !0 || Ee(Ye) && Ye(ye)) && (!N().revalidateOnFocus || !N().revalidateOnReconnect || pe()) && Re.onErrorRetry(ye, x, Re, (Rt) => {
          const nt = p[x];
          nt && nt[0] && nt[0](Fs, Rt);
        }, {
          retryCount: (He.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return _e = !1, _(), !0;
    },
    // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      x,
      s
    ]
  ), ft = I(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...$) => ar(s, U.current, ...$),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (gt(() => {
    J.current = e, ke.current = n, B(Fe) || ($e.current = Fe);
  }), gt(() => {
    if (!x) return;
    const $ = Xe.bind(ae, vn);
    let j = 0;
    N().revalidateOnFocus && (j = Date.now() + N().focusThrottleInterval);
    const K = eo(x, p, (_e, He = {}) => {
      if (_e == sr) {
        const re = Date.now();
        N().revalidateOnFocus && re > j && pe() && (j = re + N().focusThrottleInterval, $());
      } else if (_e == rr)
        N().revalidateOnReconnect && pe() && $();
      else {
        if (_e == ir)
          return Xe();
        if (_e == Fs)
          return Xe(He);
      }
    });
    return H.current = !1, U.current = x, z.current = !0, ce({
      _k: X
    }), tt && (B(se) || wt ? $() : Vi($)), () => {
      H.current = !0, K();
    };
  }, [
    x
  ]), gt(() => {
    let $;
    function j() {
      const K = Ee(u) ? u(M().data) : u;
      K && $ !== -1 && ($ = setTimeout(fe, K));
    }
    function fe() {
      !M().error && (m || N().isVisible()) && (b || N().isOnline()) ? Xe(vn).then(j) : j();
    }
    return j(), () => {
      $ && (clearTimeout($), $ = -1);
    };
  }, [
    u,
    m,
    b,
    x
  ]), Ri(Ge), c && B(se) && x) {
    if (!Ps && wt)
      throw new Error("Fallback data is required when using Suspense in SSR.");
    J.current = e, ke.current = n, H.current = !1;
    const $ = q[x];
    if (!B($)) {
      const j = ft($);
      _n(j);
    }
    if (B(Me)) {
      const j = Xe(vn);
      B(Ge) || (j.status = "fulfilled", j.value = !0), _n(j);
    } else
      throw Me;
  }
  return {
    mutate: ft,
    get data() {
      return ue.data = !0, Ge;
    },
    get error() {
      return ue.error = !0, Me;
    },
    get isValidating() {
      return ue.isValidating = !0, en;
    },
    get isLoading() {
      return ue.isLoading = !0, St;
    }
  };
}, so = Gt.defineProperty(Ji, "defaultValue", {
  value: ur
}), ct = Zi(no), ro = () => {
}, io = (
  /*#__NOINLINE__*/
  ro()
), Fn = Object, Is = (t) => t === io, oo = (t) => typeof t == "function", It = /* @__PURE__ */ new WeakMap(), En = (t, e) => Fn.prototype.toString.call(t) === `[object ${e}]`;
let ao = 0;
const Bn = (t) => {
  const e = typeof t, n = En(t, "Date"), s = En(t, "RegExp"), a = En(t, "Object");
  let c, o;
  if (Fn(t) === t && !n && !s) {
    if (c = It.get(t), c) return c;
    if (c = ++ao + "~", It.set(t, c), Array.isArray(t)) {
      for (c = "@", o = 0; o < t.length; o++)
        c += Bn(t[o]) + ",";
      It.set(t, c);
    }
    if (a) {
      c = "#";
      const d = Fn.keys(t).sort();
      for (; !Is(o = d.pop()); )
        Is(t[o]) || (c += o + ":" + Bn(t[o]) + ",");
      It.set(t, c);
    }
  } else
    c = n ? t.toJSON() : e == "symbol" ? t.toString() : e == "string" ? JSON.stringify(t) : "" + t;
  return c;
}, co = (t) => {
  if (oo(t))
    try {
      t = t();
    } catch {
      t = "";
    }
  const e = t;
  return t = typeof t == "string" ? t : (Array.isArray(t) ? t.length : t) ? Bn(t) : "", [
    t,
    e
  ];
}, uo = (t) => co(t ? t(0, null) : null)[0], Sn = Promise.resolve(), lo = (t) => (e, n, s) => {
  const a = Pe(!1), { cache: c, initialSize: o = 1, revalidateAll: d = !1, persistSize: h = !1, revalidateFirstPage: u = !0, revalidateOnMount: m = !1, parallel: b = !1 } = s, [, , , E] = De.get(vt);
  let p;
  try {
    p = uo(e), p && (p = fr + p);
  } catch {
  }
  const [v, R, q] = Je(c, p), x = I(() => B(v()._l) ? o : v()._l, [
    c,
    p,
    o
  ]);
  nr.useSyncExternalStore(I(
    (N) => p ? q(p, () => {
      N();
    }) : () => {
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      c,
      p
    ]
  ), x, x);
  const X = I(() => {
    const N = v()._l;
    return B(N) ? o : N;
  }, [
    p,
    o
  ]), z = Pe(X());
  gt(() => {
    if (!a.current) {
      a.current = !0;
      return;
    }
    p && R({
      _l: h ? z.current : X()
    });
  }, [
    p,
    c
  ]);
  const H = m && !a.current, U = t(p, async (N) => {
    const pe = v()._i, M = v()._r;
    R({
      _r: ae
    });
    const ce = [], be = X(), [G] = Je(c, N), ue = G().data, le = [];
    let Ne = null;
    for (let Y = 0; Y < be; ++Y) {
      const [ge, Ve] = ot(e(Y, b ? null : Ne));
      if (!ge)
        break;
      const [lt, Fe] = Je(c, ge);
      let se = lt().data;
      const Me = d || pe || B(se) || u && !Y && !B(ue) || H || ue && !B(ue[Y]) && !s.compare(ue[Y], se);
      if (n && (typeof M == "function" ? M(se, Ve) : Me)) {
        const $e = async () => {
          if (!(ge in E))
            se = await n(Ve);
          else {
            const tt = E[ge];
            delete E[ge], se = await tt;
          }
          Fe({
            data: se,
            _k: Ve
          }), ce[Y] = se;
        };
        b ? le.push($e) : await $e();
      } else
        ce[Y] = se;
      b || (Ne = se);
    }
    return b && await Promise.all(le.map((Y) => Y())), R({
      _i: ae
    }), ce;
  }, s), J = I(
    // eslint-disable-next-line func-names
    function(N, pe) {
      const M = typeof pe == "boolean" ? {
        revalidate: pe
      } : pe || {}, ce = M.revalidate !== !1;
      return p ? (ce && (B(N) ? R({
        _i: !0,
        _r: M.revalidate
      }) : R({
        _i: !1,
        _r: M.revalidate
      })), arguments.length ? U.mutate(N, {
        ...M,
        revalidate: ce
      }) : U.mutate()) : Sn;
    },
    // swr.mutate is always the same reference
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      p,
      c
    ]
  ), ke = I(
    (N) => {
      if (!p) return Sn;
      const [, pe] = Je(c, p);
      let M;
      if (Ee(N) ? M = N(X()) : typeof N == "number" && (M = N), typeof M != "number") return Sn;
      pe({
        _l: M
      }), z.current = M;
      const ce = [], [be] = Je(c, p);
      let G = null;
      for (let ue = 0; ue < M; ++ue) {
        const [le] = ot(e(ue, G)), [Ne] = Je(c, le), Y = le ? Ne().data : ae;
        if (B(Y))
          return J(be().data);
        ce.push(Y), G = Y;
      }
      return J(ce);
    },
    // exclude getKey from the dependencies, which isn't allowed to change during the lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      p,
      c,
      J,
      X
    ]
  );
  return {
    size: X(),
    setSize: ke,
    mutate: J,
    get data() {
      return U.data;
    },
    get error() {
      return U.error;
    },
    get isValidating() {
      return U.isValidating;
    },
    get isLoading() {
      return U.isLoading;
    }
  };
}, ua = to(ct, lo), Ue = /* @__PURE__ */ Object.create(null);
Ue.open = "0";
Ue.close = "1";
Ue.ping = "2";
Ue.pong = "3";
Ue.message = "4";
Ue.upgrade = "5";
Ue.noop = "6";
const Ht = /* @__PURE__ */ Object.create(null);
Object.keys(Ue).forEach((t) => {
  Ht[Ue[t]] = t;
});
const Pn = { type: "error", data: "parser error" }, pr = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", mr = typeof ArrayBuffer == "function", yr = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, Hn = ({ type: t, data: e }, n, s) => pr && e instanceof Blob ? n ? s(e) : js(e, s) : mr && (e instanceof ArrayBuffer || yr(e)) ? n ? s(e) : js(new Blob([e]), s) : s(Ue[t] + (e || "")), js = (t, e) => {
  const n = new FileReader();
  return n.onload = function() {
    const s = n.result.split(",")[1];
    e("b" + (s || ""));
  }, n.readAsDataURL(t);
};
function Vs(t) {
  return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
let Rn;
function fo(t, e) {
  if (pr && t.data instanceof Blob)
    return t.data.arrayBuffer().then(Vs).then(e);
  if (mr && (t.data instanceof ArrayBuffer || yr(t.data)))
    return e(Vs(t.data));
  Hn(t, !1, (n) => {
    Rn || (Rn = new TextEncoder()), e(Rn.encode(n));
  });
}
const Ms = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", yt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < Ms.length; t++)
  yt[Ms.charCodeAt(t)] = t;
const ho = (t) => {
  let e = t.length * 0.75, n = t.length, s, a = 0, c, o, d, h;
  t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
  const u = new ArrayBuffer(e), m = new Uint8Array(u);
  for (s = 0; s < n; s += 4)
    c = yt[t.charCodeAt(s)], o = yt[t.charCodeAt(s + 1)], d = yt[t.charCodeAt(s + 2)], h = yt[t.charCodeAt(s + 3)], m[a++] = c << 2 | o >> 4, m[a++] = (o & 15) << 4 | d >> 2, m[a++] = (d & 3) << 6 | h & 63;
  return u;
}, po = typeof ArrayBuffer == "function", Wn = (t, e) => {
  if (typeof t != "string")
    return {
      type: "message",
      data: gr(t, e)
    };
  const n = t.charAt(0);
  return n === "b" ? {
    type: "message",
    data: mo(t.substring(1), e)
  } : Ht[n] ? t.length > 1 ? {
    type: Ht[n],
    data: t.substring(1)
  } : {
    type: Ht[n]
  } : Pn;
}, mo = (t, e) => {
  if (po) {
    const n = ho(t);
    return gr(n, e);
  } else
    return { base64: !0, data: t };
}, gr = (t, e) => {
  switch (e) {
    case "blob":
      return t instanceof Blob ? t : new Blob([t]);
    case "arraybuffer":
    default:
      return t instanceof ArrayBuffer ? t : t.buffer;
  }
}, wr = "", yo = (t, e) => {
  const n = t.length, s = new Array(n);
  let a = 0;
  t.forEach((c, o) => {
    Hn(c, !1, (d) => {
      s[o] = d, ++a === n && e(s.join(wr));
    });
  });
}, go = (t, e) => {
  const n = t.split(wr), s = [];
  for (let a = 0; a < n.length; a++) {
    const c = Wn(n[a], e);
    if (s.push(c), c.type === "error")
      break;
  }
  return s;
};
function wo() {
  return new TransformStream({
    transform(t, e) {
      fo(t, (n) => {
        const s = n.length;
        let a;
        if (s < 126)
          a = new Uint8Array(1), new DataView(a.buffer).setUint8(0, s);
        else if (s < 65536) {
          a = new Uint8Array(3);
          const c = new DataView(a.buffer);
          c.setUint8(0, 126), c.setUint16(1, s);
        } else {
          a = new Uint8Array(9);
          const c = new DataView(a.buffer);
          c.setUint8(0, 127), c.setBigUint64(1, BigInt(s));
        }
        t.data && typeof t.data != "string" && (a[0] |= 128), e.enqueue(a), e.enqueue(n);
      });
    }
  });
}
let Tn;
function jt(t) {
  return t.reduce((e, n) => e + n.length, 0);
}
function Vt(t, e) {
  if (t[0].length === e)
    return t.shift();
  const n = new Uint8Array(e);
  let s = 0;
  for (let a = 0; a < e; a++)
    n[a] = t[0][s++], s === t[0].length && (t.shift(), s = 0);
  return t.length && s < t[0].length && (t[0] = t[0].slice(s)), n;
}
function bo(t, e) {
  Tn || (Tn = new TextDecoder());
  const n = [];
  let s = 0, a = -1, c = !1;
  return new TransformStream({
    transform(o, d) {
      for (n.push(o); ; ) {
        if (s === 0) {
          if (jt(n) < 1)
            break;
          const h = Vt(n, 1);
          c = (h[0] & 128) === 128, a = h[0] & 127, a < 126 ? s = 3 : a === 126 ? s = 1 : s = 2;
        } else if (s === 1) {
          if (jt(n) < 2)
            break;
          const h = Vt(n, 2);
          a = new DataView(h.buffer, h.byteOffset, h.length).getUint16(0), s = 3;
        } else if (s === 2) {
          if (jt(n) < 8)
            break;
          const h = Vt(n, 8), u = new DataView(h.buffer, h.byteOffset, h.length), m = u.getUint32(0);
          if (m > Math.pow(2, 21) - 1) {
            d.enqueue(Pn);
            break;
          }
          a = m * Math.pow(2, 32) + u.getUint32(4), s = 3;
        } else {
          if (jt(n) < a)
            break;
          const h = Vt(n, a);
          d.enqueue(Wn(c ? h : Tn.decode(h), e)), s = 0;
        }
        if (a === 0 || a > t) {
          d.enqueue(Pn);
          break;
        }
      }
    }
  });
}
const br = 4;
function te(t) {
  if (t) return _o(t);
}
function _o(t) {
  for (var e in te.prototype)
    t[e] = te.prototype[e];
  return t;
}
te.prototype.on = te.prototype.addEventListener = function(t, e) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
te.prototype.once = function(t, e) {
  function n() {
    this.off(t, n), e.apply(this, arguments);
  }
  return n.fn = e, this.on(t, n), this;
};
te.prototype.off = te.prototype.removeListener = te.prototype.removeAllListeners = te.prototype.removeEventListener = function(t, e) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + t];
  if (!n) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + t], this;
  for (var s, a = 0; a < n.length; a++)
    if (s = n[a], s === e || s.fn === e) {
      n.splice(a, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + t], this;
};
te.prototype.emit = function(t) {
  this._callbacks = this._callbacks || {};
  for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], s = 1; s < arguments.length; s++)
    e[s - 1] = arguments[s];
  if (n) {
    n = n.slice(0);
    for (var s = 0, a = n.length; s < a; ++s)
      n[s].apply(this, e);
  }
  return this;
};
te.prototype.emitReserved = te.prototype.emit;
te.prototype.listeners = function(t) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
te.prototype.hasListeners = function(t) {
  return !!this.listeners(t).length;
};
const ve = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
function _r(t, ...e) {
  return e.reduce((n, s) => (t.hasOwnProperty(s) && (n[s] = t[s]), n), {});
}
const vo = ve.setTimeout, Eo = ve.clearTimeout;
function Yt(t, e) {
  e.useNativeTimers ? (t.setTimeoutFn = vo.bind(ve), t.clearTimeoutFn = Eo.bind(ve)) : (t.setTimeoutFn = ve.setTimeout.bind(ve), t.clearTimeoutFn = ve.clearTimeout.bind(ve));
}
const So = 1.33;
function Ro(t) {
  return typeof t == "string" ? To(t) : Math.ceil((t.byteLength || t.size) * So);
}
function To(t) {
  let e = 0, n = 0;
  for (let s = 0, a = t.length; s < a; s++)
    e = t.charCodeAt(s), e < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (s++, n += 4);
  return n;
}
function Oo(t) {
  let e = "";
  for (let n in t)
    t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  return e;
}
function xo(t) {
  let e = {}, n = t.split("&");
  for (let s = 0, a = n.length; s < a; s++) {
    let c = n[s].split("=");
    e[decodeURIComponent(c[0])] = decodeURIComponent(c[1]);
  }
  return e;
}
class Ao extends Error {
  constructor(e, n, s) {
    super(e), this.description = n, this.context = s, this.type = "TransportError";
  }
}
class zn extends te {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(e) {
    super(), this.writable = !1, Yt(this, e), this.opts = e, this.query = e.query, this.socket = e.socket;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(e, n, s) {
    return super.emitReserved("error", new Ao(e, n, s)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(e) {
    this.readyState === "open" && this.write(e);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(e) {
    const n = Wn(e, this.socket.binaryType);
    this.onPacket(n);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(e) {
    super.emitReserved("packet", e);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(e) {
    this.readyState = "closed", super.emitReserved("close", e);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(e) {
  }
  createUri(e, n = {}) {
    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const e = this.opts.hostname;
    return e.indexOf(":") === -1 ? e : "[" + e + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(e) {
    const n = Oo(e);
    return n.length ? "?" + n : "";
  }
}
const vr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), Un = 64, Co = {};
let $s = 0, Mt = 0, Hs;
function Ws(t) {
  let e = "";
  do
    e = vr[t % Un] + e, t = Math.floor(t / Un);
  while (t > 0);
  return e;
}
function Er() {
  const t = Ws(+/* @__PURE__ */ new Date());
  return t !== Hs ? ($s = 0, Hs = t) : t + "." + Ws($s++);
}
for (; Mt < Un; Mt++)
  Co[vr[Mt]] = Mt;
let Sr = !1;
try {
  Sr = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Lo = Sr;
function Rr(t) {
  const e = t.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!e || Lo))
      return new XMLHttpRequest();
  } catch {
  }
  if (!e)
    try {
      return new ve[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
function Do() {
}
const ko = function() {
  return new Rr({
    xdomain: !1
  }).responseType != null;
}();
class No extends zn {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(e) {
    if (super(e), this.polling = !1, typeof location < "u") {
      const s = location.protocol === "https:";
      let a = location.port;
      a || (a = s ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || a !== e.port;
    }
    const n = e && e.forceBase64;
    this.supportsBinary = ko && !n, this.opts.withCredentials && (this.cookieJar = void 0);
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this.poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(e) {
    this.readyState = "pausing";
    const n = () => {
      this.readyState = "paused", e();
    };
    if (this.polling || !this.writable) {
      let s = 0;
      this.polling && (s++, this.once("pollComplete", function() {
        --s || n();
      })), this.writable || (s++, this.once("drain", function() {
        --s || n();
      }));
    } else
      n();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  poll() {
    this.polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(e) {
    const n = (s) => {
      if (this.readyState === "opening" && s.type === "open" && this.onOpen(), s.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(s);
    };
    go(e, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this.polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this.poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const e = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? e() : this.once("open", e);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(e) {
    this.writable = !1, yo(e, (n) => {
      this.doWrite(n, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "https" : "http", n = this.query || {};
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Er()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(e, n);
  }
  /**
   * Creates a request.
   *
   * @param {String} method
   * @private
   */
  request(e = {}) {
    return Object.assign(e, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new it(this.uri(), e);
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(e, n) {
    const s = this.request({
      method: "POST",
      data: e
    });
    s.on("success", n), s.on("error", (a, c) => {
      this.onError("xhr post error", a, c);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const e = this.request();
    e.on("data", this.onData.bind(this)), e.on("error", (n, s) => {
      this.onError("xhr poll error", n, s);
    }), this.pollXhr = e;
  }
}
let it = class Wt extends te {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(e, n) {
    super(), Yt(this, n), this.opts = n, this.method = n.method || "GET", this.uri = e, this.data = n.data !== void 0 ? n.data : null, this.create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  create() {
    var e;
    const n = _r(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this.opts.xd;
    const s = this.xhr = new Rr(n);
    try {
      s.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          s.setDisableHeaderCheck && s.setDisableHeaderCheck(!0);
          for (let a in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(a) && s.setRequestHeader(a, this.opts.extraHeaders[a]);
        }
      } catch {
      }
      if (this.method === "POST")
        try {
          s.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        s.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (e = this.opts.cookieJar) === null || e === void 0 || e.addCookies(s), "withCredentials" in s && (s.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (s.timeout = this.opts.requestTimeout), s.onreadystatechange = () => {
        var a;
        s.readyState === 3 && ((a = this.opts.cookieJar) === null || a === void 0 || a.parseCookies(s)), s.readyState === 4 && (s.status === 200 || s.status === 1223 ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError(typeof s.status == "number" ? s.status : 0);
        }, 0));
      }, s.send(this.data);
    } catch (a) {
      this.setTimeoutFn(() => {
        this.onError(a);
      }, 0);
      return;
    }
    typeof document < "u" && (this.index = Wt.requestsCount++, Wt.requests[this.index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  onError(e) {
    this.emitReserved("error", e, this.xhr), this.cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  cleanup(e) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
      if (this.xhr.onreadystatechange = Do, e)
        try {
          this.xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Wt.requests[this.index], this.xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  onLoad() {
    const e = this.xhr.responseText;
    e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this.cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this.cleanup();
  }
};
it.requestsCount = 0;
it.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", zs);
  else if (typeof addEventListener == "function") {
    const t = "onpagehide" in ve ? "pagehide" : "unload";
    addEventListener(t, zs, !1);
  }
}
function zs() {
  for (let t in it.requests)
    it.requests.hasOwnProperty(t) && it.requests[t].abort();
}
const Jn = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, n) => n(e, 0), $t = ve.WebSocket || ve.MozWebSocket, Js = !0, Fo = "arraybuffer", Ks = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Bo extends zn {
  /**
   * WebSocket transport constructor.
   *
   * @param {Object} opts - connection options
   * @protected
   */
  constructor(e) {
    super(e), this.supportsBinary = !e.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check())
      return;
    const e = this.uri(), n = this.opts.protocols, s = Ks ? {} : _r(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (s.headers = this.opts.extraHeaders);
    try {
      this.ws = Js && !Ks ? n ? new $t(e, n) : new $t(e) : new $t(e, n, s);
    } catch (a) {
      return this.emitReserved("error", a);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (e) => this.onClose({
      description: "websocket connection closed",
      context: e
    }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const s = e[n], a = n === e.length - 1;
      Hn(s, this.supportsBinary, (c) => {
        const o = {};
        try {
          Js && this.ws.send(c);
        } catch {
        }
        a && Jn(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const e = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Er()), this.supportsBinary || (n.b64 = 1), this.createUri(e, n);
  }
  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @private
   */
  check() {
    return !!$t;
  }
}
class Po extends zn {
  get name() {
    return "webtransport";
  }
  doOpen() {
    typeof WebTransport == "function" && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then(() => {
      this.onClose();
    }).catch((e) => {
      this.onError("webtransport error", e);
    }), this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then((e) => {
        const n = bo(Number.MAX_SAFE_INTEGER, this.socket.binaryType), s = e.readable.pipeThrough(n).getReader(), a = wo();
        a.readable.pipeTo(e.writable), this.writer = a.writable.getWriter();
        const c = () => {
          s.read().then(({ done: d, value: h }) => {
            d || (this.onPacket(h), c());
          }).catch((d) => {
          });
        };
        c();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this.writer.write(o).then(() => this.onOpen());
      });
    }));
  }
  write(e) {
    this.writable = !1;
    for (let n = 0; n < e.length; n++) {
      const s = e[n], a = n === e.length - 1;
      this.writer.write(s).then(() => {
        a && Jn(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var e;
    (e = this.transport) === null || e === void 0 || e.close();
  }
}
const Uo = {
  websocket: Bo,
  webtransport: Po,
  polling: No
}, qo = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Io = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function qn(t) {
  if (t.length > 2e3)
    throw "URI too long";
  const e = t, n = t.indexOf("["), s = t.indexOf("]");
  n != -1 && s != -1 && (t = t.substring(0, n) + t.substring(n, s).replace(/:/g, ";") + t.substring(s, t.length));
  let a = qo.exec(t || ""), c = {}, o = 14;
  for (; o--; )
    c[Io[o]] = a[o] || "";
  return n != -1 && s != -1 && (c.source = e, c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":"), c.authority = c.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), c.ipv6uri = !0), c.pathNames = jo(c, c.path), c.queryKey = Vo(c, c.query), c;
}
function jo(t, e) {
  const n = /\/{2,9}/g, s = e.replace(n, "/").split("/");
  return (e.slice(0, 1) == "/" || e.length === 0) && s.splice(0, 1), e.slice(-1) == "/" && s.splice(s.length - 1, 1), s;
}
function Vo(t, e) {
  const n = {};
  return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(s, a, c) {
    a && (n[a] = c);
  }), n;
}
let Tr = class rt extends te {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(e, n = {}) {
    super(), this.binaryType = Fo, this.writeBuffer = [], e && typeof e == "object" && (n = e, e = null), e ? (e = qn(e), n.hostname = e.host, n.secure = e.protocol === "https" || e.protocol === "wss", n.port = e.port, e.query && (n.query = e.query)) : n.host && (n.hostname = qn(n.host).host), Yt(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = n.transports || [
      "polling",
      "websocket",
      "webtransport"
    ], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = xo(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, typeof addEventListener == "function" && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this.beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this.offlineEventListener = () => {
      this.onClose("transport close", {
        description: "network connection lost"
      });
    }, addEventListener("offline", this.offlineEventListener, !1))), this.open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(e) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = br, n.transport = e, this.id && (n.sid = this.id);
    const s = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[e]);
    return new Uo[e](s);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  open() {
    let e;
    if (this.opts.rememberUpgrade && rt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1)
      e = "websocket";
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else
      e = this.transports[0];
    this.readyState = "opening";
    try {
      e = this.createTransport(e);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    e.open(), this.setTransport(e);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(e) {
    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (n) => this.onClose("transport close", n));
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  probe(e) {
    let n = this.createTransport(e), s = !1;
    rt.priorWebsocketSuccess = !1;
    const a = () => {
      s || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (b) => {
        if (!s)
          if (b.type === "pong" && b.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            rt.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              s || this.readyState !== "closed" && (m(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const E = new Error("probe error");
            E.transport = n.name, this.emitReserved("upgradeError", E);
          }
      }));
    };
    function c() {
      s || (s = !0, m(), n.close(), n = null);
    }
    const o = (b) => {
      const E = new Error("probe error: " + b);
      E.transport = n.name, c(), this.emitReserved("upgradeError", E);
    };
    function d() {
      o("transport closed");
    }
    function h() {
      o("socket closed");
    }
    function u(b) {
      n && b.name !== n.name && c();
    }
    const m = () => {
      n.removeListener("open", a), n.removeListener("error", o), n.removeListener("close", d), this.off("close", h), this.off("upgrading", u);
    };
    n.once("open", a), n.once("error", o), n.once("close", d), this.once("close", h), this.once("upgrading", u), this.upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
      s || n.open();
    }, 200) : n.open();
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    if (this.readyState = "open", rt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush(), this.readyState === "open" && this.opts.upgrade) {
      let e = 0;
      const n = this.upgrades.length;
      for (; e < n; e++)
        this.probe(this.upgrades[e]);
    }
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  onPacket(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), this.resetPingTimeout(), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "ping":
          this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
          break;
        case "error":
          const n = new Error("server error");
          n.code = e.data, this.onError(n);
          break;
        case "message":
          this.emitReserved("data", e.data), this.emitReserved("message", e.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(e) {
    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this.resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e = this.getWritablePackets();
      this.transport.send(e), this.prevBufferLen = e.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  getWritablePackets() {
    if (!(this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let n = 1;
    for (let s = 0; s < this.writeBuffer.length; s++) {
      const a = this.writeBuffer[s].data;
      if (a && (n += Ro(a)), s > 0 && n > this.maxPayload)
        return this.writeBuffer.slice(0, s);
      n += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} callback function.
   * @return {Socket} for chaining.
   */
  write(e, n, s) {
    return this.sendPacket("message", e, n, s), this;
  }
  send(e, n, s) {
    return this.sendPacket("message", e, n, s), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  sendPacket(e, n, s, a) {
    if (typeof n == "function" && (a = n, n = void 0), typeof s == "function" && (a = s, s = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    s = s || {}, s.compress = s.compress !== !1;
    const c = {
      type: e,
      data: n,
      options: s
    };
    this.emitReserved("packetCreate", c), this.writeBuffer.push(c), a && this.once("flush", a), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const e = () => {
      this.onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), e();
    }, s = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? s() : e();
    }) : this.upgrading ? s() : e()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  onError(e) {
    rt.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  onClose(e, n) {
    (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") && (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), typeof removeEventListener == "function" && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", e, n), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  filterUpgrades(e) {
    const n = [];
    let s = 0;
    const a = e.length;
    for (; s < a; s++)
      ~this.transports.indexOf(e[s]) && n.push(e[s]);
    return n;
  }
};
Tr.protocol = br;
function Mo(t, e = "", n) {
  let s = t;
  n = n || typeof location < "u" && location, t == null && (t = n.protocol + "//" + n.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = n.protocol + t : t = n.host + t), /^(https?|wss?):\/\//.test(t) || (typeof n < "u" ? t = n.protocol + "//" + t : t = "https://" + t), s = qn(t)), s.port || (/^(http|ws)$/.test(s.protocol) ? s.port = "80" : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")), s.path = s.path || "/";
  const c = s.host.indexOf(":") !== -1 ? "[" + s.host + "]" : s.host;
  return s.id = s.protocol + "://" + c + ":" + s.port + e, s.href = s.protocol + "://" + c + (n && n.port === s.port ? "" : ":" + s.port), s;
}
const $o = typeof ArrayBuffer == "function", Ho = (t) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, Or = Object.prototype.toString, Wo = typeof Blob == "function" || typeof Blob < "u" && Or.call(Blob) === "[object BlobConstructor]", zo = typeof File == "function" || typeof File < "u" && Or.call(File) === "[object FileConstructor]";
function Kn(t) {
  return $o && (t instanceof ArrayBuffer || Ho(t)) || Wo && t instanceof Blob || zo && t instanceof File;
}
function zt(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (Array.isArray(t)) {
    for (let n = 0, s = t.length; n < s; n++)
      if (zt(t[n]))
        return !0;
    return !1;
  }
  if (Kn(t))
    return !0;
  if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1)
    return zt(t.toJSON(), !0);
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && zt(t[n]))
      return !0;
  return !1;
}
function Jo(t) {
  const e = [], n = t.data, s = t;
  return s.data = In(n, e), s.attachments = e.length, { packet: s, buffers: e };
}
function In(t, e) {
  if (!t)
    return t;
  if (Kn(t)) {
    const n = { _placeholder: !0, num: e.length };
    return e.push(t), n;
  } else if (Array.isArray(t)) {
    const n = new Array(t.length);
    for (let s = 0; s < t.length; s++)
      n[s] = In(t[s], e);
    return n;
  } else if (typeof t == "object" && !(t instanceof Date)) {
    const n = {};
    for (const s in t)
      Object.prototype.hasOwnProperty.call(t, s) && (n[s] = In(t[s], e));
    return n;
  }
  return t;
}
function Ko(t, e) {
  return t.data = jn(t.data, e), delete t.attachments, t;
}
function jn(t, e) {
  if (!t)
    return t;
  if (t && t._placeholder === !0) {
    if (typeof t.num == "number" && t.num >= 0 && t.num < e.length)
      return e[t.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(t))
    for (let n = 0; n < t.length; n++)
      t[n] = jn(t[n], e);
  else if (typeof t == "object")
    for (const n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (t[n] = jn(t[n], e));
  return t;
}
const Go = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Xo = 5;
var P;
(function(t) {
  t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(P || (P = {}));
class Yo {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(e) {
    this.replacer = e;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(e) {
    return (e.type === P.EVENT || e.type === P.ACK) && zt(e) ? this.encodeAsBinary({
      type: e.type === P.EVENT ? P.BINARY_EVENT : P.BINARY_ACK,
      nsp: e.nsp,
      data: e.data,
      id: e.id
    }) : [this.encodeAsString(e)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(e) {
    let n = "" + e.type;
    return (e.type === P.BINARY_EVENT || e.type === P.BINARY_ACK) && (n += e.attachments + "-"), e.nsp && e.nsp !== "/" && (n += e.nsp + ","), e.id != null && (n += e.id), e.data != null && (n += JSON.stringify(e.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(e) {
    const n = Jo(e), s = this.encodeAsString(n.packet), a = n.buffers;
    return a.unshift(s), a;
  }
}
function Gs(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
class Gn extends te {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(e) {
    super(), this.reviver = e;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(e) {
    let n;
    if (typeof e == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(e);
      const s = n.type === P.BINARY_EVENT;
      s || n.type === P.BINARY_ACK ? (n.type = s ? P.EVENT : P.ACK, this.reconstructor = new Qo(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (Kn(e) || e.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(e), n && (this.reconstructor = null, super.emitReserved("decoded", n));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + e);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(e) {
    let n = 0;
    const s = {
      type: Number(e.charAt(0))
    };
    if (P[s.type] === void 0)
      throw new Error("unknown packet type " + s.type);
    if (s.type === P.BINARY_EVENT || s.type === P.BINARY_ACK) {
      const c = n + 1;
      for (; e.charAt(++n) !== "-" && n != e.length; )
        ;
      const o = e.substring(c, n);
      if (o != Number(o) || e.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      s.attachments = Number(o);
    }
    if (e.charAt(n + 1) === "/") {
      const c = n + 1;
      for (; ++n && !(e.charAt(n) === "," || n === e.length); )
        ;
      s.nsp = e.substring(c, n);
    } else
      s.nsp = "/";
    const a = e.charAt(n + 1);
    if (a !== "" && Number(a) == a) {
      const c = n + 1;
      for (; ++n; ) {
        const o = e.charAt(n);
        if (o == null || Number(o) != o) {
          --n;
          break;
        }
        if (n === e.length)
          break;
      }
      s.id = Number(e.substring(c, n + 1));
    }
    if (e.charAt(++n)) {
      const c = this.tryParse(e.substr(n));
      if (Gn.isPayloadValid(s.type, c))
        s.data = c;
      else
        throw new Error("invalid payload");
    }
    return s;
  }
  tryParse(e) {
    try {
      return JSON.parse(e, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(e, n) {
    switch (e) {
      case P.CONNECT:
        return Gs(n);
      case P.DISCONNECT:
        return n === void 0;
      case P.CONNECT_ERROR:
        return typeof n == "string" || Gs(n);
      case P.EVENT:
      case P.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && Go.indexOf(n[0]) === -1);
      case P.ACK:
      case P.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class Qo {
  constructor(e) {
    this.packet = e, this.buffers = [], this.reconPack = e;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      const n = Ko(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const Zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: Gn,
  Encoder: Yo,
  get PacketType() {
    return P;
  },
  protocol: Xo
}, Symbol.toStringTag, { value: "Module" }));
function Le(t, e, n) {
  return t.on(e, n), function() {
    t.off(e, n);
  };
}
const ea = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class xr extends te {
  /**
   * `Socket` constructor.
   */
  constructor(e, n, s) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = n, s && s.auth && (this.auth = s.auth), this._opts = Object.assign({}, s), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const e = this.io;
    this.subs = [
      Le(e, "open", this.onopen.bind(this)),
      Le(e, "packet", this.onpacket.bind(this)),
      Le(e, "error", this.onerror.bind(this)),
      Le(e, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...e) {
    return e.unshift("message"), this.emit.apply(this, e), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(e, ...n) {
    if (ea.hasOwnProperty(e))
      throw new Error('"' + e.toString() + '" is a reserved event name');
    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const s = {
      type: P.EVENT,
      data: n
    };
    if (s.options = {}, s.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const o = this.ids++, d = n.pop();
      this._registerAckCallback(o, d), s.id = o;
    }
    const a = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!a || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(s), this.packet(s)) : this.sendBuffer.push(s)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(e, n) {
    var s;
    const a = (s = this.flags.timeout) !== null && s !== void 0 ? s : this._opts.ackTimeout;
    if (a === void 0) {
      this.acks[e] = n;
      return;
    }
    const c = this.io.setTimeoutFn(() => {
      delete this.acks[e];
      for (let o = 0; o < this.sendBuffer.length; o++)
        this.sendBuffer[o].id === e && this.sendBuffer.splice(o, 1);
      n.call(this, new Error("operation has timed out"));
    }, a);
    this.acks[e] = (...o) => {
      this.io.clearTimeoutFn(c), n.apply(this, [null, ...o]);
    };
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(e, ...n) {
    const s = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((a, c) => {
      n.push((o, d) => s ? o ? c(o) : a(d) : a(o)), this.emit(e, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(e) {
    let n;
    typeof e[e.length - 1] == "function" && (n = e.pop());
    const s = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: e,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    e.push((a, ...c) => s !== this._queue[0] ? void 0 : (a !== null ? s.tryCount > this._opts.retries && (this._queue.shift(), n && n(a)) : (this._queue.shift(), n && n(null, ...c)), s.pending = !1, this._drainQueue())), this._queue.push(s), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(e = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const n = this._queue[0];
    n.pending && !e || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(e) {
    e.nsp = this.nsp, this.io._packet(e);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((e) => {
      this._sendConnectPacket(e);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(e) {
    this.packet({
      type: P.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(e) {
    this.connected || this.emitReserved("connect_error", e);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(e, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, n);
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(e) {
    if (e.nsp === this.nsp)
      switch (e.type) {
        case P.CONNECT:
          e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case P.EVENT:
        case P.BINARY_EVENT:
          this.onevent(e);
          break;
        case P.ACK:
        case P.BINARY_ACK:
          this.onack(e);
          break;
        case P.DISCONNECT:
          this.ondisconnect();
          break;
        case P.CONNECT_ERROR:
          this.destroy();
          const s = new Error(e.data.message);
          s.data = e.data.data, this.emitReserved("connect_error", s);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(e) {
    const n = e.data || [];
    e.id != null && n.push(this.ack(e.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(e) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const s of n)
        s.apply(this, e);
    }
    super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(e) {
    const n = this;
    let s = !1;
    return function(...a) {
      s || (s = !0, n.packet({
        type: P.ACK,
        id: e,
        data: a
      }));
    };
  }
  /**
   * Called upon a server acknowlegement.
   *
   * @param packet
   * @private
   */
  onack(e) {
    const n = this.acks[e.id];
    typeof n == "function" && (n.apply(this, e.data), delete this.acks[e.id]);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(e, n) {
    this.id = e, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
      this.notifyOutgoingListeners(e), this.packet(e);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: P.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(e) {
    return this.flags.compress = e, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(e) {
    return this.flags.timeout = e, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(e) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(e) {
    if (!this._anyListeners)
      return this;
    if (e) {
      const n = this._anyListeners;
      for (let s = 0; s < n.length; s++)
        if (e === n[s])
          return n.splice(s, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(e) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(e) {
    if (!this._anyOutgoingListeners)
      return this;
    if (e) {
      const n = this._anyOutgoingListeners;
      for (let s = 0; s < n.length; s++)
        if (e === n[s])
          return n.splice(s, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(e) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const s of n)
        s.apply(this, e.data);
    }
  }
}
function ut(t) {
  t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
ut.prototype.duration = function() {
  var t = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var e = Math.random(), n = Math.floor(e * this.jitter * t);
    t = (Math.floor(e * 10) & 1) == 0 ? t - n : t + n;
  }
  return Math.min(t, this.max) | 0;
};
ut.prototype.reset = function() {
  this.attempts = 0;
};
ut.prototype.setMin = function(t) {
  this.ms = t;
};
ut.prototype.setMax = function(t) {
  this.max = t;
};
ut.prototype.setJitter = function(t) {
  this.jitter = t;
};
class Vn extends te {
  constructor(e, n) {
    var s;
    super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (n = e, e = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, Yt(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((s = n.randomizationFactor) !== null && s !== void 0 ? s : 0.5), this.backoff = new ut({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = e;
    const a = n.parser || Zo;
    this.encoder = new a.Encoder(), this.decoder = new a.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(e) {
    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection;
  }
  reconnectionAttempts(e) {
    return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
  }
  reconnectionDelay(e) {
    var n;
    return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (n = this.backoff) === null || n === void 0 || n.setMin(e), this);
  }
  randomizationFactor(e) {
    var n;
    return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (n = this.backoff) === null || n === void 0 || n.setJitter(e), this);
  }
  reconnectionDelayMax(e) {
    var n;
    return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (n = this.backoff) === null || n === void 0 || n.setMax(e), this);
  }
  timeout(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(e) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Tr(this.uri, this.opts);
    const n = this.engine, s = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const a = Le(n, "open", function() {
      s.onopen(), e && e();
    }), c = (d) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", d), e ? e(d) : this.maybeReconnectOnOpen();
    }, o = Le(n, "error", c);
    if (this._timeout !== !1) {
      const d = this._timeout, h = this.setTimeoutFn(() => {
        a(), c(new Error("timeout")), n.close();
      }, d);
      this.opts.autoUnref && h.unref(), this.subs.push(() => {
        this.clearTimeoutFn(h);
      });
    }
    return this.subs.push(a), this.subs.push(o), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(e) {
    return this.open(e);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e = this.engine;
    this.subs.push(Le(e, "ping", this.onping.bind(this)), Le(e, "data", this.ondata.bind(this)), Le(e, "error", this.onerror.bind(this)), Le(e, "close", this.onclose.bind(this)), Le(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(e) {
    try {
      this.decoder.add(e);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(e) {
    Jn(() => {
      this.emitReserved("packet", e);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(e) {
    this.emitReserved("error", e);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(e, n) {
    let s = this.nsps[e];
    return s ? this._autoConnect && !s.active && s.connect() : (s = new xr(this, e, n), this.nsps[e] = s), s;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(e) {
    const n = Object.keys(this.nsps);
    for (const s of n)
      if (this.nsps[s].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(e) {
    const n = this.encoder.encode(e);
    for (let s = 0; s < n.length; s++)
      this.engine.write(n[s], e.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close();
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called upon engine close.
   *
   * @private
   */
  onclose(e, n) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, n), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const s = this.setTimeoutFn(() => {
        e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((a) => {
          a ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", a)) : e.onreconnect();
        }));
      }, n);
      this.opts.autoUnref && s.unref(), this.subs.push(() => {
        this.clearTimeoutFn(s);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const e = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
  }
}
const mt = {};
function Jt(t, e) {
  typeof t == "object" && (e = t, t = void 0), e = e || {};
  const n = Mo(t, e.path || "/socket.io"), s = n.source, a = n.id, c = n.path, o = mt[a] && c in mt[a].nsps, d = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
  let h;
  return d ? h = new Vn(s, e) : (mt[a] || (mt[a] = new Vn(s, e)), h = mt[a]), n.query && !e.query && (e.query = n.queryKey), h.socket(n.path, e);
}
Object.assign(Jt, {
  Manager: Vn,
  Socket: xr,
  io: Jt,
  connect: Jt
});
class ta {
  constructor(e, n, s, a) {
    ze(this, "socket_port");
    ze(this, "host");
    ze(this, "port");
    ze(this, "protocol");
    ze(this, "url");
    ze(this, "site_name");
    ze(this, "socket");
    var c, o, d, h;
    if (this.socket_port = s ?? "9000", this.host = (c = window.location) == null ? void 0 : c.hostname, this.port = (o = window.location) != null && o.port ? `:${this.socket_port}` : "", this.protocol = ((d = window.location) == null ? void 0 : d.protocol) === "https:" ? "https" : "http", e) {
      let u = new URL(e);
      u.port = "", s ? (u.port = s, this.url = u.toString()) : this.url = u.toString();
    } else
      this.url = `${this.protocol}://${this.host}${this.port}/`;
    n && (this.url = `${this.url}${n}`), this.site_name = n, this.socket = Jt(`${this.url}`, {
      withCredentials: !0,
      secure: this.protocol === "https",
      extraHeaders: a && a.useToken === !0 ? {
        Authorization: `${a.type} ${(h = a.token) == null ? void 0 : h.call(a)}`
      } : {}
    });
  }
}
const ne = Xs(null), la = ({ url: t = "", tokenParams: e, socketPort: n, swrConfig: s, siteName: a, enableSocket: c = !0, children: o, customHeaders: d }) => {
  const h = Kt(() => {
    const u = new Ci.FrappeApp(t, e, void 0, d);
    return {
      url: t,
      tokenParams: e,
      app: u,
      auth: u.auth(),
      db: u.db(),
      call: u.call(),
      file: u.file(),
      socket: c ? new ta(t, a, n, e).socket : void 0,
      enableSocket: c,
      socketPort: n
    };
  }, [t, e, n, c, d]);
  return /* @__PURE__ */ Es(ne.Provider, { value: h, children: /* @__PURE__ */ Es(so, { value: s, children: o }) });
}, fa = (t) => {
  const { url: e, auth: n, tokenParams: s } = Z(ne), [a, c] = V(), o = I(() => {
    const v = document.cookie.split(";").find((R) => R.trim().startsWith("user_id="));
    if (v) {
      const R = v.split("=")[1];
      c(R && R !== "Guest" ? R : null);
    } else
      c(null);
  }, []);
  at(() => {
    s && s.useToken ? c(null) : o();
  }, []);
  const { data: d, error: h, isLoading: u, isValidating: m, mutate: b } = ct(
    () => s && s.useToken || a ? `${e}/api/method/frappe.auth.get_logged_user` : null,
    () => n.getLoggedInUser(),
    {
      onError: () => {
        c(null);
      },
      shouldRetryOnError: !1,
      revalidateOnFocus: !1,
      ...t
    }
  ), E = I(async (v) => n.loginWithUsernamePassword(v).then((R) => (o(), R)), []), p = I(async () => n.logout().then(() => b(null)).then(() => c(null)), []);
  return {
    isLoading: a === void 0 || u,
    currentUser: d,
    isValidating: m,
    error: h,
    login: E,
    logout: p,
    updateCurrentUser: b,
    getUserCookie: o
  };
}, Qt = (t, e, n) => {
  let s = `${e}/api/resource/`;
  return n ? s += `${t}/${n}` : s += `${t}`, s;
}, ha = (t, e, n, s) => {
  const { url: a, db: c } = Z(ne);
  return ct(n === void 0 ? Qt(t, a, e) : n, () => c.getDoc(t, e), s);
}, da = (t, e, n, s) => {
  const { db: a, url: c } = Z(ne), o = n === void 0 ? Qt(t, c, e) : n;
  return I(() => {
    Xt(o, () => a.getDoc(t, e));
  }, [o, t, e]);
}, Ar = (t) => {
  var n, s;
  let e = "";
  if (t != null && t.fields && (e += "fields=" + JSON.stringify(t == null ? void 0 : t.fields) + "&"), t != null && t.filters && (e += "filters=" + JSON.stringify(t == null ? void 0 : t.filters) + "&"), t != null && t.orFilters && (e += "or_filters=" + JSON.stringify(t == null ? void 0 : t.orFilters) + "&"), t != null && t.limit_start && (e += "limit_start=" + JSON.stringify(t == null ? void 0 : t.limit_start) + "&"), t != null && t.limit && (e += "limit=" + JSON.stringify(t == null ? void 0 : t.limit) + "&"), t != null && t.groupBy && (e += "group_by=" + String(t.groupBy) + "&"), t != null && t.orderBy) {
    const a = `${String((n = t.orderBy) == null ? void 0 : n.field)} ${((s = t.orderBy) == null ? void 0 : s.order) ?? "asc"}`;
    e += "order_by=" + a + "&";
  }
  return t != null && t.asDict && (e += "as_dict=" + t.asDict), e;
}, pa = (t, e, n, s) => {
  const { url: a, db: c } = Z(ne);
  return ct(n === void 0 ? `${Qt(t, a)}?${Ar(e)}` : n, () => c.getDocList(t, e), s);
}, ma = (t, e, n) => {
  const { db: s, url: a } = Z(ne), c = n === void 0 ? `${Qt(t, a)}?${Ar(e)}` : n;
  return I(() => {
    Xt(c, () => s.getDocList(t, e));
  }, [c, t, e]);
}, ya = () => {
  const { db: t } = Z(ne), [e, n] = V(!1), [s, a] = V(null), [c, o] = V(!1), d = I(() => {
    n(!1), a(null), o(!1);
  }, []);
  return {
    createDoc: I(async (u, m) => (a(null), o(!1), n(!0), t.createDoc(u, m).then((b) => (n(!1), o(!0), b)).catch((b) => {
      throw n(!1), o(!1), a(b), b;
    })), []),
    loading: e,
    error: s,
    isCompleted: c,
    reset: d
  };
}, ga = () => {
  const { db: t } = Z(ne), [e, n] = V(!1), [s, a] = V(null), [c, o] = V(!1), d = I(() => {
    n(!1), a(null), o(!1);
  }, []);
  return {
    updateDoc: I(async (u, m, b) => (a(null), o(!1), n(!0), t.updateDoc(u, m, b).then((E) => (n(!1), o(!0), E)).catch((E) => {
      throw n(!1), o(!1), a(E), E;
    })), []),
    loading: e,
    error: s,
    reset: d,
    isCompleted: c
  };
}, wa = () => {
  const { db: t } = Z(ne), [e, n] = V(!1), [s, a] = V(null), [c, o] = V(!1), d = I(() => {
    n(!1), a(null), o(!1);
  }, []);
  return {
    deleteDoc: I(async (u, m) => (a(null), o(!1), n(!0), t.deleteDoc(u, m).then((b) => (n(!1), o(!0), b)).catch((b) => {
      throw n(!1), o(!1), a(b), b;
    })), []),
    loading: e,
    error: s,
    reset: d,
    isCompleted: c
  };
};
function Zt(t) {
  const e = [];
  for (let n in t)
    e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  return e.join("&");
}
const ba = (t, e, n = !1, s = !1, a, c) => {
  const { url: o, db: d } = Z(ne);
  return ct(a === void 0 ? (() => {
    const m = Zt(n ? { doctype: t, filters: e ?? [], cache: n, debug: s } : { doctype: t, filters: e ?? [], debug: s });
    return `${o}/api/method/frappe.client.get_count?${m}`;
  })() : a, () => d.getCount(t, e, n, s), c);
}, _a = (t, e, n = !1, s = !1, a) => {
  const { db: c, url: o } = Z(ne), d = a === void 0 ? `${o}/api/method/frappe.client.get_count?${Zt({ doctype: t, filters: e ?? [], cache: n, debug: s })}` : a;
  return I(() => {
    Xt(d, () => c.getCount(t, e, !1, !1));
  }, [d, t, e]);
}, na = (t, e, n, s, a = "GET") => {
  const { call: c } = Z(ne), o = Zt(e ?? {}), d = `${t}?${o}`;
  return {
    ...ct(n === void 0 ? d : n, a === "GET" ? () => c.get(t, e) : () => c.post(t, e), s)
  };
}, va = (t, e, n, s = "GET") => {
  const { call: a } = Z(ne), c = Zt(e ?? {}), o = `${t}?${c}`;
  return I(() => {
    Xt(n ?? o, s === "GET" ? () => a.get(t, e) : () => a.post(t, e));
  }, [o, t, e, n]);
}, Ea = (t) => {
  const { call: e } = Z(ne), [n, s] = V(null), [a, c] = V(!1), [o, d] = V(null), [h, u] = V(!1), m = I(() => {
    s(null), c(!1), d(null), u(!1);
  }, []);
  return {
    call: I(async (E) => (d(null), u(!1), c(!0), s(null), e.post(t, E).then((p) => (s(p), c(!1), u(!0), p)).catch((p) => {
      throw c(!1), u(!1), d(p), p;
    })), []),
    result: n,
    loading: a,
    error: o,
    reset: m,
    isCompleted: h
  };
}, Sa = (t) => {
  const { call: e } = Z(ne), [n, s] = V(null), [a, c] = V(!1), [o, d] = V(null), [h, u] = V(!1), m = I(() => {
    s(null), c(!1), d(null), u(!1);
  }, []);
  return {
    call: I(async (E) => (d(null), u(!1), c(!0), s(null), e.put(t, E).then((p) => (s(p), c(!1), u(!0), p)).catch((p) => {
      throw c(!1), u(!1), d(p), p;
    })), []),
    result: n,
    loading: a,
    error: o,
    reset: m,
    isCompleted: h
  };
}, Ra = (t) => {
  const { call: e } = Z(ne), [n, s] = V(null), [a, c] = V(!1), [o, d] = V(null), [h, u] = V(!1), m = I(() => {
    s(null), c(!1), d(null), u(!1);
  }, []);
  return {
    call: I(async (E) => (d(null), u(!1), c(!0), s(null), e.delete(t, E).then((p) => (s(p), c(!1), u(!0), p)).catch((p) => {
      throw c(!1), u(!1), d(p), p;
    })), []),
    result: n,
    loading: a,
    error: o,
    reset: m,
    isCompleted: h
  };
}, Ta = () => {
  const { file: t } = Z(ne), [e, n] = V(0), [s, a] = V(!1), [c, o] = V(null), [d, h] = V(!1), u = I(async (b, E, p) => (m(), a(!0), t.uploadFile(b, E, (v, R) => {
    R && n(Math.round(v / R * 100));
  }, p).then((v) => (h(!0), n(100), a(!1), v.data.message)).catch((v) => {
    throw console.error(v), o(v), a(!1), v;
  })), []), m = I(() => {
    n(0), a(!1), o(null), h(!1);
  }, []);
  return {
    upload: u,
    progress: e,
    loading: s,
    isCompleted: d,
    error: c,
    reset: m
  };
}, Oa = (t, e, n = [], s = 20, a = 250) => {
  const c = sa(e, a);
  return na("frappe.desk.search.search_link", {
    doctype: t,
    page_length: s,
    txt: c,
    filters: JSON.stringify(n ?? [])
  });
}, sa = (t, e) => {
  const [n, s] = V(t);
  return at(() => {
    const a = setTimeout(() => {
      s(t);
    }, e);
    return () => {
      clearTimeout(a);
    };
  }, [t, e]), n;
}, Mn = (t, e) => {
  const { socket: n } = Z(ne);
  at(() => {
    n === void 0 && console.warn("Socket is not enabled. Please enable socket in FrappeProvider.");
    let s = n == null ? void 0 : n.on(t, e);
    return () => {
      s == null || s.off(t);
    };
  }, [t, e]);
}, xa = (t, e, n, s = !0) => {
  const { socket: a } = Z(ne), [c, o] = V([]);
  at(() => (a === void 0 && console.warn("Socket is not enabled. Please enable socket in FrappeProvider."), a == null || a.emit("doc_subscribe", t, e), a == null || a.io.on("reconnect", () => {
    a == null || a.emit("doc_subscribe", t, e);
  }), s && (a == null || a.emit("doc_open", t, e)), () => {
    a == null || a.emit("doc_unsubscribe", t, e), s && (a == null || a.emit("doc_close", t, e));
  }), [t, e, s]), Mn("doc_update", n);
  const d = I(() => {
    a == null || a.emit("doc_open", t, e);
  }, [t, e]), h = I(() => {
    a == null || a.emit("doc_close", t, e);
  }, [t, e]), u = I((m) => {
    m.doctype === t && m.docname === e && o(m.users);
  }, [t, e]);
  return Mn("doc_viewers", u), {
    /** Array of user IDs of users currently viewing the document. This is updated when "doc_viewers" event is published */
    viewers: c,
    /** Emit doc_open event - this will explicitly send a doc_open event to the server. */
    emitDocOpen: d,
    /** Emit doc_close event - this will explicitly send a doc_close event to the server. */
    emitDocClose: h
  };
}, Aa = (t, e) => {
  const { socket: n } = Z(ne);
  at(() => (n === void 0 && console.warn("Socket is not enabled. Please enable socket in FrappeProvider."), n == null || n.emit("doctype_subscribe", t), n == null || n.io.on("reconnect", () => {
    n == null || n.emit("doctype_subscribe", t);
  }), () => {
    n == null || n.emit("doctype_unsubscribe", t);
  }), [t]), Mn("list_update", e);
};
export {
  ne as FrappeContext,
  la as FrappeProvider,
  Ar as getDocListQueryString,
  Qt as getRequestURL,
  Xt as preload,
  fa as useFrappeAuth,
  ya as useFrappeCreateDoc,
  Ra as useFrappeDeleteCall,
  wa as useFrappeDeleteDoc,
  Aa as useFrappeDocTypeEventListener,
  xa as useFrappeDocumentEventListener,
  Mn as useFrappeEventListener,
  Ta as useFrappeFileUpload,
  na as useFrappeGetCall,
  ha as useFrappeGetDoc,
  ba as useFrappeGetDocCount,
  pa as useFrappeGetDocList,
  Ea as useFrappePostCall,
  va as useFrappePrefetchCall,
  da as useFrappePrefetchDoc,
  _a as useFrappePrefetchDocCount,
  ma as useFrappePrefetchDocList,
  Sa as useFrappePutCall,
  ga as useFrappeUpdateDoc,
  ct as useSWR,
  Xi as useSWRConfig,
  ua as useSWRInfinite,
  Oa as useSearch
};
