//#region \0rolldown/runtime.js
var e = Object.defineProperty, t = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, n = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, r = "0.0.1", i, a, o, s, c, l, u, d, ee, te, ne, re, ie, ae, oe, se, f = t((() => {
	i = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", a = "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", o = "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z", s = "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z", c = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", l = "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z", u = "M8,3C6.89,3 6,3.89 6,5V21H18V5C18,3.89 17.11,3 16,3H8M8,5H16V19H8V5M13,11V13H15V11H13Z", d = "M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z", ee = "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z", te = "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z", ne = "M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z", re = "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5M11,7H13V13H11M11,15H13V17H11", ie = "M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z", ae = "M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z", oe = "M14.12,10H19V8.2H15.38L13.38,4.87C13.08,4.37 12.54,4.03 11.92,4.03C11.74,4.03 11.58,4.06 11.42,4.11L6,5.8V11H7.8V7.33L9.91,6.67L6,22H7.8L10.67,13.89L13,17V22H14.8V15.59L12.31,11.05L13.04,8.18M14,3.8C15,3.8 15.8,3 15.8,2C15.8,1 15,0.2 14,0.2C13,0.2 12.2,1 12.2,2C12.2,3 13,3.8 14,3.8Z", se = "M6,11H10V9H14V11H18V4H6V11M18,13H6V20H18V13M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2Z";
})), p, m, h, ce, le, ue, g, de, fe, pe = t((() => {
	p = globalThis, m = p.ShadowRoot && (p.ShadyCSS === void 0 || p.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, h = Symbol(), ce = /* @__PURE__ */ new WeakMap(), le = class {
		constructor(e, t, n) {
			if (this._$cssResult$ = !0, n !== h) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
			this.cssText = e, this.t = t;
		}
		get styleSheet() {
			let e = this.o, t = this.t;
			if (m && e === void 0) {
				let n = t !== void 0 && t.length === 1;
				n && (e = ce.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && ce.set(t, e));
			}
			return e;
		}
		toString() {
			return this.cssText;
		}
	}, ue = (e) => new le(typeof e == "string" ? e : e + "", void 0, h), g = (e, ...t) => {
		let n = e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
			if (!0 === e._$cssResult$) return e.cssText;
			if (typeof e == "number") return e;
			throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
		})(n) + e[r + 1], e[0]);
		return new le(n, e, h);
	}, de = (e, t) => {
		if (m) e.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
		else for (let n of t) {
			let t = document.createElement("style"), r = p.litNonce;
			r !== void 0 && t.setAttribute("nonce", r), t.textContent = n.cssText, e.appendChild(t);
		}
	}, fe = m ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
		let t = "";
		for (let n of e.cssRules) t += n.cssText;
		return ue(t);
	})(e) : e;
})), me, he, ge, _e, ve, ye, _, be, xe, Se, v, y, b, Ce, x, S = t((() => {
	pe(), {is: me, defineProperty: he, getOwnPropertyDescriptor: ge, getOwnPropertyNames: _e, getOwnPropertySymbols: ve, getPrototypeOf: ye} = Object, _ = globalThis, be = _.trustedTypes, xe = be ? be.emptyScript : "", Se = _.reactiveElementPolyfillSupport, v = (e, t) => e, y = {
		toAttribute(e, t) {
			switch (t) {
				case Boolean:
					e = e ? xe : null;
					break;
				case Object:
				case Array: e = e == null ? e : JSON.stringify(e);
			}
			return e;
		},
		fromAttribute(e, t) {
			let n = e;
			switch (t) {
				case Boolean:
					n = e !== null;
					break;
				case Number:
					n = e === null ? null : Number(e);
					break;
				case Object:
				case Array: try {
					n = JSON.parse(e);
				} catch {
					n = null;
				}
			}
			return n;
		}
	}, b = (e, t) => !me(e, t), Ce = {
		attribute: !0,
		type: String,
		converter: y,
		reflect: !1,
		useDefault: !1,
		hasChanged: b
	}, Symbol.metadata ??= Symbol("metadata"), _.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap(), x = class extends HTMLElement {
		static addInitializer(e) {
			this._$Ei(), (this.l ??= []).push(e);
		}
		static get observedAttributes() {
			return this.finalize(), this._$Eh && [...this._$Eh.keys()];
		}
		static createProperty(e, t = Ce) {
			if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
				let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
				r !== void 0 && he(this.prototype, e, r);
			}
		}
		static getPropertyDescriptor(e, t, n) {
			let { get: r, set: i } = ge(this.prototype, e) ?? {
				get() {
					return this[t];
				},
				set(e) {
					this[t] = e;
				}
			};
			return {
				get: r,
				set(t) {
					let a = r?.call(this);
					i?.call(this, t), this.requestUpdate(e, a, n);
				},
				configurable: !0,
				enumerable: !0
			};
		}
		static getPropertyOptions(e) {
			return this.elementProperties.get(e) ?? Ce;
		}
		static _$Ei() {
			if (this.hasOwnProperty(v("elementProperties"))) return;
			let e = ye(this);
			e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
		}
		static finalize() {
			if (this.hasOwnProperty(v("finalized"))) return;
			if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(v("properties"))) {
				let e = this.properties, t = [..._e(e), ...ve(e)];
				for (let n of t) this.createProperty(n, e[n]);
			}
			let e = this[Symbol.metadata];
			if (e !== null) {
				let t = litPropertyMetadata.get(e);
				if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
			}
			this._$Eh = /* @__PURE__ */ new Map();
			for (let [e, t] of this.elementProperties) {
				let n = this._$Eu(e, t);
				n !== void 0 && this._$Eh.set(n, e);
			}
			this.elementStyles = this.finalizeStyles(this.styles);
		}
		static finalizeStyles(e) {
			let t = [];
			if (Array.isArray(e)) {
				let n = new Set(e.flat(1 / 0).reverse());
				for (let e of n) t.unshift(fe(e));
			} else e !== void 0 && t.push(fe(e));
			return t;
		}
		static _$Eu(e, t) {
			let n = t.attribute;
			return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
		}
		constructor() {
			super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
		}
		_$Ev() {
			this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
		}
		addController(e) {
			(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
		}
		removeController(e) {
			this._$EO?.delete(e);
		}
		_$E_() {
			let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
			for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
			e.size > 0 && (this._$Ep = e);
		}
		createRenderRoot() {
			let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
			return de(e, this.constructor.elementStyles), e;
		}
		connectedCallback() {
			this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
		}
		enableUpdating(e) {}
		disconnectedCallback() {
			this._$EO?.forEach((e) => e.hostDisconnected?.());
		}
		attributeChangedCallback(e, t, n) {
			this._$AK(e, n);
		}
		_$ET(e, t) {
			let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
			if (r !== void 0 && !0 === n.reflect) {
				let i = (n.converter?.toAttribute === void 0 ? y : n.converter).toAttribute(t, n.type);
				this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
			}
		}
		_$AK(e, t) {
			let n = this.constructor, r = n._$Eh.get(e);
			if (r !== void 0 && this._$Em !== r) {
				let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? y : e.converter;
				this._$Em = r;
				let a = i.fromAttribute(t, e.type);
				this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
			}
		}
		requestUpdate(e, t, n, r = !1, i) {
			if (e !== void 0) {
				let a = this.constructor;
				if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? b)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
				this.C(e, t, n);
			}
			!1 === this.isUpdatePending && (this._$ES = this._$EP());
		}
		C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
			n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
		}
		async _$EP() {
			this.isUpdatePending = !0;
			try {
				await this._$ES;
			} catch (e) {
				Promise.reject(e);
			}
			let e = this.scheduleUpdate();
			return e != null && await e, !this.isUpdatePending;
		}
		scheduleUpdate() {
			return this.performUpdate();
		}
		performUpdate() {
			if (!this.isUpdatePending) return;
			if (!this.hasUpdated) {
				if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
					for (let [e, t] of this._$Ep) this[e] = t;
					this._$Ep = void 0;
				}
				let e = this.constructor.elementProperties;
				if (e.size > 0) for (let [t, n] of e) {
					let { wrapped: e } = n, r = this[t];
					!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
				}
			}
			let e = !1, t = this._$AL;
			try {
				e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
			} catch (t) {
				throw e = !1, this._$EM(), t;
			}
			e && this._$AE(t);
		}
		willUpdate(e) {}
		_$AE(e) {
			this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
		}
		_$EM() {
			this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
		}
		get updateComplete() {
			return this.getUpdateComplete();
		}
		getUpdateComplete() {
			return this._$ES;
		}
		shouldUpdate(e) {
			return !0;
		}
		update(e) {
			this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
		}
		updated(e) {}
		firstUpdated(e) {}
	}, x.elementStyles = [], x.shadowRootOptions = { mode: "open" }, x[v("elementProperties")] = /* @__PURE__ */ new Map(), x[v("finalized")] = /* @__PURE__ */ new Map(), Se?.({ ReactiveElement: x }), (_.reactiveElementVersions ??= []).push("2.1.2");
}));
//#endregion
//#region node_modules/lit-html/lit-html.js
function we(e, t) {
	if (!k(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return De === void 0 ? t : De.createHTML(t);
}
function C(e, t, n = e, r) {
	if (t === F) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = O(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = C(e, i._$AS(e, t.values), i, r)), t;
}
var Te, Ee, w, De, Oe, T, ke, Ae, E, D, O, k, je, A, j, Me, Ne, M, Pe, Fe, Ie, N, P, F, I, Le, L, Re, R, ze, z, B, Be, Ve, He, Ue, We, Ge, Ke = t((() => {
	Te = globalThis, Ee = (e) => e, w = Te.trustedTypes, De = w ? w.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, Oe = "$lit$", T = `lit$${Math.random().toFixed(9).slice(2)}$`, ke = "?" + T, Ae = `<${ke}>`, E = document, D = () => E.createComment(""), O = (e) => e === null || typeof e != "object" && typeof e != "function", k = Array.isArray, je = (e) => k(e) || typeof e?.[Symbol.iterator] == "function", A = "[ 	\n\f\r]", j = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Me = /-->/g, Ne = />/g, M = RegExp(`>|${A}(?:([^\\s"'>=/]+)(${A}*=${A}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), Pe = /'/g, Fe = /"/g, Ie = /^(?:script|style|textarea|title)$/i, N = (e) => (t, ...n) => ({
		_$litType$: e,
		strings: t,
		values: n
	}), P = N(1), N(2), N(3), F = Symbol.for("lit-noChange"), I = Symbol.for("lit-nothing"), Le = /* @__PURE__ */ new WeakMap(), L = E.createTreeWalker(E, 129), Re = (e, t) => {
		let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = j;
		for (let t = 0; t < n; t++) {
			let n = e[t], s, c, l = -1, u = 0;
			for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === j ? c[1] === "!--" ? o = Me : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = M) : (Ie.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = M) : o = Ne : o === M ? c[0] === ">" ? (o = i ?? j, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? M : c[3] === "\"" ? Fe : Pe) : o === Fe || o === Pe ? o = M : o === Me || o === Ne ? o = j : (o = M, i = void 0);
			let d = o === M && e[t + 1].startsWith("/>") ? " " : "";
			a += o === j ? n + Ae : l >= 0 ? (r.push(s), n.slice(0, l) + Oe + n.slice(l) + T + d) : n + T + (l === -2 ? t : d);
		}
		return [we(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
	}, R = class e {
		constructor({ strings: t, _$litType$: n }, r) {
			let i;
			this.parts = [];
			let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Re(t, n);
			if (this.el = e.createElement(l, r), L.currentNode = this.el.content, n === 2 || n === 3) {
				let e = this.el.content.firstChild;
				e.replaceWith(...e.childNodes);
			}
			for (; (i = L.nextNode()) !== null && c.length < s;) {
				if (i.nodeType === 1) {
					if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(Oe)) {
						let t = u[o++], n = i.getAttribute(e).split(T), r = /([.?@])?(.*)/.exec(t);
						c.push({
							type: 1,
							index: a,
							name: r[2],
							strings: n,
							ctor: r[1] === "." ? Be : r[1] === "?" ? Ve : r[1] === "@" ? He : B
						}), i.removeAttribute(e);
					} else e.startsWith(T) && (c.push({
						type: 6,
						index: a
					}), i.removeAttribute(e));
					if (Ie.test(i.tagName)) {
						let e = i.textContent.split(T), t = e.length - 1;
						if (t > 0) {
							i.textContent = w ? w.emptyScript : "";
							for (let n = 0; n < t; n++) i.append(e[n], D()), L.nextNode(), c.push({
								type: 2,
								index: ++a
							});
							i.append(e[t], D());
						}
					}
				} else if (i.nodeType === 8) {
					if (i.data === ke) c.push({
						type: 2,
						index: a
					});
					else {
						let e = -1;
						for (; (e = i.data.indexOf(T, e + 1)) !== -1;) c.push({
							type: 7,
							index: a
						}), e += T.length - 1;
					}
				}
				a++;
			}
		}
		static createElement(e, t) {
			let n = E.createElement("template");
			return n.innerHTML = e, n;
		}
	}, ze = class {
		constructor(e, t) {
			this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
		}
		get parentNode() {
			return this._$AM.parentNode;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		u(e) {
			let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? E).importNode(t, !0);
			L.currentNode = r;
			let i = L.nextNode(), a = 0, o = 0, s = n[0];
			for (; s !== void 0;) {
				if (a === s.index) {
					let t;
					s.type === 2 ? t = new z(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Ue(i, this, e)), this._$AV.push(t), s = n[++o];
				}
				a !== s?.index && (i = L.nextNode(), a++);
			}
			return L.currentNode = E, r;
		}
		p(e) {
			let t = 0;
			for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
		}
	}, z = class e {
		get _$AU() {
			return this._$AM?._$AU ?? this._$Cv;
		}
		constructor(e, t, n, r) {
			this.type = 2, this._$AH = I, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
		}
		get parentNode() {
			let e = this._$AA.parentNode, t = this._$AM;
			return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
		}
		get startNode() {
			return this._$AA;
		}
		get endNode() {
			return this._$AB;
		}
		_$AI(e, t = this) {
			e = C(this, e, t), O(e) ? e === I || e == null || e === "" ? (this._$AH !== I && this._$AR(), this._$AH = I) : e !== this._$AH && e !== F && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? je(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
		}
		O(e) {
			return this._$AA.parentNode.insertBefore(e, this._$AB);
		}
		T(e) {
			this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
		}
		_(e) {
			this._$AH !== I && O(this._$AH) ? this._$AA.nextSibling.data = e : this.T(E.createTextNode(e)), this._$AH = e;
		}
		$(e) {
			let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = R.createElement(we(n.h, n.h[0]), this.options)), n);
			if (this._$AH?._$AD === r) this._$AH.p(t);
			else {
				let e = new ze(r, this), n = e.u(this.options);
				e.p(t), this.T(n), this._$AH = e;
			}
		}
		_$AC(e) {
			let t = Le.get(e.strings);
			return t === void 0 && Le.set(e.strings, t = new R(e)), t;
		}
		k(t) {
			k(this._$AH) || (this._$AH = [], this._$AR());
			let n = this._$AH, r, i = 0;
			for (let a of t) i === n.length ? n.push(r = new e(this.O(D()), this.O(D()), this, this.options)) : r = n[i], r._$AI(a), i++;
			i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
		}
		_$AR(e = this._$AA.nextSibling, t) {
			for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
				let t = Ee(e).nextSibling;
				Ee(e).remove(), e = t;
			}
		}
		setConnected(e) {
			this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
		}
	}, B = class {
		get tagName() {
			return this.element.tagName;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		constructor(e, t, n, r, i) {
			this.type = 1, this._$AH = I, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = I;
		}
		_$AI(e, t = this, n, r) {
			let i = this.strings, a = !1;
			if (i === void 0) e = C(this, e, t, 0), a = !O(e) || e !== this._$AH && e !== F, a && (this._$AH = e);
			else {
				let r = e, o, s;
				for (e = i[0], o = 0; o < i.length - 1; o++) s = C(this, r[n + o], t, o), s === F && (s = this._$AH[o]), a ||= !O(s) || s !== this._$AH[o], s === I ? e = I : e !== I && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
			}
			a && !r && this.j(e);
		}
		j(e) {
			e === I ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
		}
	}, Be = class extends B {
		constructor() {
			super(...arguments), this.type = 3;
		}
		j(e) {
			this.element[this.name] = e === I ? void 0 : e;
		}
	}, Ve = class extends B {
		constructor() {
			super(...arguments), this.type = 4;
		}
		j(e) {
			this.element.toggleAttribute(this.name, !!e && e !== I);
		}
	}, He = class extends B {
		constructor(e, t, n, r, i) {
			super(e, t, n, r, i), this.type = 5;
		}
		_$AI(e, t = this) {
			if ((e = C(this, e, t, 0) ?? I) === F) return;
			let n = this._$AH, r = e === I && n !== I || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== I && (n === I || r);
			r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
		}
		handleEvent(e) {
			typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
		}
	}, Ue = class {
		constructor(e, t, n) {
			this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
		}
		get _$AU() {
			return this._$AM._$AU;
		}
		_$AI(e) {
			C(this, e);
		}
	}, We = Te.litHtmlPolyfillSupport, We?.(R, z), (Te.litHtmlVersions ??= []).push("3.3.3"), Ge = (e, t, n) => {
		let r = n?.renderBefore ?? t, i = r._$litPart$;
		if (i === void 0) {
			let e = n?.renderBefore ?? null;
			r._$litPart$ = i = new z(t.insertBefore(D(), e), e, void 0, n ?? {});
		}
		return i._$AI(e), i;
	};
})), V, H, qe, Je = t((() => {
	S(), S(), Ke(), Ke(), V = globalThis, H = class extends x {
		constructor() {
			super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
		}
		createRenderRoot() {
			let e = super.createRenderRoot();
			return this.renderOptions.renderBefore ??= e.firstChild, e;
		}
		update(e) {
			let t = this.render();
			this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Ge(t, this.renderRoot, this.renderOptions);
		}
		connectedCallback() {
			super.connectedCallback(), this._$Do?.setConnected(!0);
		}
		disconnectedCallback() {
			super.disconnectedCallback(), this._$Do?.setConnected(!1);
		}
		render() {
			return F;
		}
	}, H._$litElement$ = !0, H.finalized = !0, V.litElementHydrateSupport?.({ LitElement: H }), qe = V.litElementPolyfillSupport, qe?.({ LitElement: H }), (V.litElementVersions ??= []).push("4.2.2");
})), Ye = t((() => {})), U = t((() => {
	S(), Ke(), Je(), Ye();
})), W, Xe = t((() => {
	W = (e) => (t, n) => {
		n === void 0 ? customElements.define(e, t) : n.addInitializer(() => {
			customElements.define(e, t);
		});
	};
}));
//#endregion
//#region node_modules/@lit/reactive-element/decorators/property.js
function G(e) {
	return (t, n) => typeof n == "object" ? Qe(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
var Ze, Qe, $e = t((() => {
	S(), Ze = {
		attribute: !0,
		type: String,
		converter: y,
		reflect: !1,
		hasChanged: b
	}, Qe = (e = Ze, t, n) => {
		let { kind: r, metadata: i } = n, a = globalThis.litPropertyMetadata.get(i);
		if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(n.name, e), r === "accessor") {
			let { name: r } = n;
			return {
				set(n) {
					let i = t.get.call(this);
					t.set.call(this, n), this.requestUpdate(r, i, e, !0, n);
				},
				init(t) {
					return t !== void 0 && this.C(r, void 0, e, t), t;
				}
			};
		}
		if (r === "setter") {
			let { name: r } = n;
			return function(n) {
				let i = this[r];
				t.call(this, n), this.requestUpdate(r, i, e, !0, n);
			};
		}
		throw Error("Unsupported decorator location: " + r);
	};
}));
//#endregion
//#region node_modules/@lit/reactive-element/decorators/state.js
function K(e) {
	return G({
		...e,
		state: !0,
		attribute: !1
	});
}
var et = t((() => {
	$e();
})), tt = t((() => {})), nt = t((() => {})), rt = t((() => {})), it = t((() => {})), at = t((() => {})), ot = t((() => {})), q = t((() => {
	Xe(), $e(), et(), tt(), nt(), rt(), it(), at(), ot();
}));
f(), q(), U();
function st(e, t) {
	let n = t.module_config || {}, r = Object.keys(e.states).filter((e) => e.startsWith("person.")).map((t) => e.states[t]);
	return n.include_entities && n.include_entities.length > 0 && (r = r.filter((e) => n.include_entities.includes(e.entity_id))), n.show_only_home && (r = r.filter((e) => e.state === "home")), r.length === 0 ? P`` : P`
        <style>
            .person-container {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
                padding: 12px;
                align-items: center;
                justify-content: center;
                height: 100%;
                box-sizing: border-box;
            }
            .person-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 4px;
                cursor: pointer;
                position: relative;
            }
            .avatar {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                background-size: cover;
                background-position: center;
                background-color: var(--secondary-background-color);
                display: flex;
                align-items: center;
                justify-content: center;
                transition: border-color 0.2s, filter 0.2s;
                position: relative;
            }
            .avatar.home {
                border-color: var(--primary-color, #03a9f4);
            }
            .avatar.not_home {
                border-color: var(--disabled-text-color, #bdbdbd);
                opacity: 0.9;
            }
            .avatar.grayscale {
                filter: grayscale(100%);
            }
            .person-name {
                font-size: 12px;
                color: var(--primary-text-color);
                text-align: center;
                max-width: 60px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .icon-placeholder {
                --mdc-icon-size: 24px;
                color: var(--primary-text-color);
            }
            .state-badge {
                position: absolute;
                top: -2px;
                right: -2px;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                color: white;
            }
            .state-badge ha-icon {
                --mdc-icon-size: 12px;
            }
            .state-badge.home {
                background-color: var(--green-color, #4caf50);
            }
            .state-badge.not_home {
                background-color: var(--red-color, #f44336);
            }
        </style>
        <div class="person-container">
            ${r.map((e) => {
		let t = e.state === "home", r = e.attributes.entity_picture, i = ["avatar"];
		return i.push(t ? "home" : "not_home"), n.use_grayscale && !t && i.push("grayscale"), P`
                    <div class="person-item" @click=${() => ct(e.entity_id)}>
                        <div class="${i.join(" ")}" 
                             style=${r ? `background-image: url(${r})` : ""}>
                             ${r ? "" : P`<ha-icon icon="mdi:account" class="icon-placeholder"></ha-icon>`}
                             
                             ${n.show_badge ? P`
                                <div class="state-badge ${t ? "home" : "not_home"}">
                                    <ha-icon icon="${t ? "mdi:home" : "mdi:home-export-outline"}"></ha-icon>
                                </div>
                             ` : ""}
                        </div>
                        <div class="person-name">${e.attributes.friendly_name || e.entity_id}</div>
                    </div>
                `;
	})}
        </div>
    `;
}
function ct(e) {
	let t = new CustomEvent("hass-more-info", {
		bubbles: !0,
		composed: !0,
		detail: { entityId: e }
	});
	document.querySelector("home-assistant")?.dispatchEvent(t);
}
//#endregion
//#region src/modules/calendar.ts
U();
function lt(e, t) {
	let n = ft(e, t.module_config || {});
	if (n.length === 0) return P``;
	let r = n.length, i, a, o = "mdi:calendar", s = "", c = -1;
	if (r === 1) {
		let e = n[0];
		i = e.attributes.message || e.attributes.friendly_name, s = i;
		let t = new Date(e.attributes.start_time), r = new Date(e.attributes.end_time), l = /* @__PURE__ */ new Date(), u = r.getTime() - t.getTime() >= 864e5;
		if (t > l) {
			let e = t.getTime() - l.getTime();
			a = `Startet in ${Math.ceil(e / 6e4)} min`, o = "mdi:calendar-clock";
		} else if (u) a = "Ganztägig";
		else {
			let e = (e) => e.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			});
			a = `${e(t)} - ${e(r)}`;
			let n = r.getTime() - t.getTime(), i = l.getTime() - t.getTime();
			n > 0 && (c = Math.max(0, Math.min(100, i / n * 100)));
		}
	} else {
		i = `${r} Events`, a = "Now", o = "mdi:calendar-multiple";
		let e = /* @__PURE__ */ new Date();
		s = n.map((t) => {
			let n = t.attributes.message || t.attributes.friendly_name, r = new Date(t.attributes.start_time);
			return `${n} ${r > e ? `(in ${Math.ceil((r.getTime() - e.getTime()) / 6e4)}m)` : "(Active)"}`;
		}).join("\n");
	}
	return P`
        <style>
            .calendar-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                padding: 0 12px;
                box-sizing: border-box;
            }
            .calendar-item {
                display: flex;
                align-items: center;
                gap: 12px;
                cursor: pointer;
            }
            .calendar-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: var(--primary-color, #03a9f4);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                flex-shrink: 0;
            }
            .calendar-icon ha-icon {
                --mdc-icon-size: 20px;
            }
            .calendar-content {
                display: flex;
                flex-direction: column;
                overflow: hidden;
                flex: 1;
            }
            .event-title {
                font-size: 14px;
                font-weight: 500;
                color: var(--primary-text-color);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .event-time {
                font-size: 12px;
                color: var(--secondary-text-color);
            }
            .progress-bar {
                margin-top: 4px;
                height: 4px;
                background-color: var(--secondary-background-color, #444); /* Fallback dark gray */
                border-radius: 2px;
                overflow: hidden;
                width: 100%;
                position: relative;
            }
            .progress-fill {
                height: 100%;
                background-color: var(--primary-text-color, #fff); /* Light gray/whiteish */
                border-radius: 2px;
                opacity: 0.7;
            }
        </style>
        <div class="calendar-container">
            <div class="calendar-item" 
                 title="${s}"
                 @click=${(e) => r === 1 ? ut(e, n[0].entity_id) : dt(e, n)}>
                 <div class="calendar-icon">
                    <ha-icon icon="${o}"></ha-icon>
                </div>
                <div class="calendar-content">
                    <div class="event-title">${i}</div>
                    <div class="event-time">${a}</div>
                    ${c >= 0 ? P`
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${c}%"></div>
                        </div>
                    ` : ""}
                </div>
            </div>
        </div>
    `;
}
function ut(e, t) {
	let n = new CustomEvent("hass-more-info", {
		bubbles: !0,
		composed: !0,
		detail: { entityId: t }
	});
	e.target.dispatchEvent(n);
}
function dt(e, t) {
	let n = new CustomEvent("dynamic-grid-show-detail", {
		bubbles: !0,
		composed: !0,
		detail: {
			title: "Active Events",
			entities: t
		}
	});
	e.target.dispatchEvent(n);
}
function ft(e, t) {
	let n = Object.keys(e.states).filter((e) => e.startsWith("calendar.")).map((t) => e.states[t]);
	t.include_entities && t.include_entities.length > 0 && (n = n.filter((e) => t.include_entities.includes(e.entity_id)));
	let r = t.max_minutes_until_start || 60, i = /* @__PURE__ */ new Date(), a = new Date(i.getTime() + r * 6e4);
	return n.filter((e) => {
		if (e.state === "off" && !e.attributes.start_time) return !1;
		if (e.state === "on" || t.show_all) return !0;
		if (e.attributes.start_time) {
			let t = new Date(e.attributes.start_time);
			return t > i && t <= a;
		}
		return !1;
	});
}
var pt = (e) => ft(e.hass, e.config.module_config || {}).length > 0;
//#endregion
//#region src/modules/security/index.ts
U();
function mt(e, t) {
	let n = _t(e, t.module_config || {});
	if (n.length === 0) return P``;
	let r = n.length, i, a, o = "", s = /* @__PURE__ */ new Set();
	n.forEach((e) => s.add(e.type));
	let c = [
		{
			type: "safety",
			icon: "mdi:alert-circle",
			color: "var(--red-color, #f44336)",
			pulse: !0
		},
		{
			type: "lock",
			icon: "mdi:lock-open-alert",
			color: "var(--red-color, #f44336)",
			pulse: !0
		},
		{
			type: "door",
			icon: "mdi:door-open",
			color: "var(--red-color, #f44336)",
			pulse: !0
		},
		{
			type: "window",
			icon: "mdi:window-open-variant",
			color: "var(--red-color, #f44336)",
			pulse: !0
		},
		{
			type: "motion",
			icon: "mdi:motion-sensor",
			color: "var(--orange-color, #ff9800)",
			pulse: !1
		}
	].filter((e) => s.has(e.type));
	if (r === 1) {
		let e = n[0];
		i = e.attributes.friendly_name || e.entity_id, a = e.type === "lock" ? "Unlocked" : e.type === "motion" ? "Motion Detected" : "Open", o = `${i}: ${a}`;
	} else {
		let e = n.filter((e) => e.type === "lock").length, t = n.filter((e) => e.type === "window" || e.type === "door").length, r = n.filter((e) => e.type === "motion").length, s = n.filter((e) => e.type === "safety").length, c = [];
		s > 0 && c.push(`${s} Safety`), e > 0 && c.push(`${e} Unlocked`), t > 0 && c.push(`${t} Open`), r > 0 && c.push(`${r} Motion`), i = "Security Alert", a = c.join(", "), o = n.map((e) => `${e.attributes.friendly_name} (${e.state})`).join("\n");
	}
	return P`
        <style>
             .security-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                padding: 0 12px;
                box-sizing: border-box;
            }
            .security-item {
                display: flex;
                align-items: center;
                gap: 12px;
                cursor: pointer;
            }
            .icons-container {
                display: flex;
                align-items: center;
                gap: -8px; /* Slight overlap for compact look, or positive for spacing */
            }
            .security-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: var(--red-color, #f44336);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                flex-shrink: 0;
                animation: pulse 2s infinite;
                margin-right: 4px; /* Space between icons */
            }
            .security-icon:last-child {
                margin-right: 0;
            }
            .security-icon.no-pulse {
                animation: none;
            }
            .security-icon ha-icon {
                --mdc-icon-size: 20px;
            }
            .security-content {
                display: flex;
                flex-direction: column;
                overflow: hidden;
                flex: 1;
            }
            .security-title {
                font-size: 14px;
                font-weight: 500;
                color: var(--primary-text-color);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .security-subtitle {
                font-size: 12px;
                color: var(--secondary-text-color);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
            @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.4); }
                70% { box-shadow: 0 0 0 10px rgba(244, 67, 54, 0); }
                100% { box-shadow: 0 0 0 0 rgba(244, 67, 54, 0); }
            }
        </style>
        <div class="security-container">
            <div class="security-item" 
                 title="${o}"
                 @click=${(e) => {
		r === 1 ? ht(e, n[0].entity_id) : gt(e, n);
	}}>
                 
                 <div class="icons-container">
                    ${c.map((e) => P`
                        <div class="security-icon ${e.pulse ? "" : "no-pulse"}" style="background-color: ${e.color}">
                             <ha-icon icon="${e.icon}"></ha-icon>
                        </div>
                    `)}
                 </div>

                <div class="security-content">
                    <div class="security-title">${i}</div>
                    <div class="security-subtitle">${a}</div>
                </div>
            </div>
        </div>
    `;
}
function ht(e, t) {
	let n = new CustomEvent("hass-more-info", {
		bubbles: !0,
		composed: !0,
		detail: { entityId: t }
	});
	e.target.dispatchEvent(n);
}
function gt(e, t) {
	let n = new CustomEvent("dynamic-grid-show-detail", {
		bubbles: !0,
		composed: !0,
		detail: {
			title: "Security Alert",
			entities: t
		}
	});
	e.target.dispatchEvent(n);
}
function _t(e, t) {
	let n = [], r = t.exclude_groups || [], i = t.exclude_entities || [];
	for (let t of Object.keys(e.states)) {
		if (i.includes(t)) continue;
		let a = e.states[t], o = t.split(".")[0], s = a.state, c = a.attributes.device_class || "";
		if (o === "lock" && !r.includes("lock") && (s === "unlocked" || s === "jammed") && n.push({
			entity_id: t,
			state: s,
			attributes: a.attributes,
			domain: o,
			type: "lock"
		}), o === "binary_sensor" && s === "on" && (["window", "garage_door"].includes(c) && !r.includes("window") ? n.push({
			entity_id: t,
			state: s,
			attributes: a.attributes,
			domain: o,
			type: "window",
			device_class: c
		}) : ["door", "gate"].includes(c) && !r.includes("door") ? n.push({
			entity_id: t,
			state: s,
			attributes: a.attributes,
			domain: o,
			type: "door",
			device_class: c
		}) : [
			"motion",
			"moving",
			"occupancy",
			"presence",
			"vibration"
		].includes(c) && !r.includes("motion") ? n.push({
			entity_id: t,
			state: s,
			attributes: a.attributes,
			domain: o,
			type: "motion",
			device_class: c
		}) : [
			"safety",
			"smoke",
			"gas",
			"moisture",
			"problem",
			"tamper"
		].includes(c) && !r.includes("safety") && n.push({
			entity_id: t,
			state: s,
			attributes: a.attributes,
			domain: o,
			type: "safety",
			device_class: c
		})), o === "cover") {
			let e = c || "";
			s === "open" && ([
				"garage",
				"gate",
				"door"
			].includes(e) && !r.includes("door") ? n.push({
				entity_id: t,
				state: s,
				attributes: a.attributes,
				domain: o,
				type: "door",
				device_class: e
			}) : [
				"window",
				"shutter",
				"blind"
			].includes(e) && !r.includes("window") && n.push({
				entity_id: t,
				state: s,
				attributes: a.attributes,
				domain: o,
				type: "window",
				device_class: e
			}));
		}
	}
	return n;
}
//#endregion
//#region src/modules/manager.ts
U();
var vt = class {
	static renderModule(e, t) {
		switch (t.module_type) {
			case "person": return st(e, t);
			case "calendar": return lt(e, t);
			case "security": return mt(e, t);
			default: return console.warn(`Unknown module type: ${t.module_type}`), P`<div style="padding: 10px; color: red;">Unknown Module: ${t.module_type}</div>`;
		}
	}
}, yt, bt, xt = t((() => {
	yt = (e) => ({
		type: "media-control",
		entity: e
	}), bt = (e) => {
		if (e.config.always_show) return !0;
		let t = e.config.card?.entity || e.config.entity;
		if (!t || !e.hass.states[t]) return !1;
		let n = e.hass.states[t];
		return n.state === "playing" || n.state === "paused";
	};
}));
//#endregion
//#region src/modules/index.ts
xt();
var St = {
	"media-player": bt,
	calendar: pt
};
function Ct(e, t) {
	let n = St[e];
	return !n || n(t);
}
//#endregion
//#region src/helpers.ts
var wt = null;
async function Tt() {
	return wt || (window.loadCardHelpers ? (wt = await window.loadCardHelpers(), wt) : null);
}
async function Et(e, t) {
	let n = await Tt();
	if (n) try {
		let r = await n.createCardElement(t);
		return r.hass = e, r;
	} catch (e) {
		console.error("Error creating card element", e);
		return;
	}
}
//#endregion
//#region \0@oxc-project+runtime@0.154.0/helpers/esm/decorate.js
function J(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
var Dt = t((() => {})), Y, Ot = t((() => {
	Y = (e, t, n, r) => {
		r ||= {}, n ??= {};
		let i = new Event(t, {
			bubbles: r.bubbles === void 0 || r.bubbles,
			cancelable: !!r.cancelable,
			composed: r.composed === void 0 || r.composed
		});
		return i.detail = n, e.dispatchEvent(i), i;
	};
})), kt, At = t((() => {
	kt = (e) => ({
		type: "map",
		entities: e ? [e] : [],
		aspect_ratio: "50%",
		dark_mode: !0
	});
})), X, jt = t((() => {
	U(), At(), xt(), Dt(), X = class extends H {
		constructor(...e) {
			super(...e), this._cardPicker = !1, this._currTab = "settings";
		}
		async connectedCallback() {
			super.connectedCallback(), window.loadCardHelpers && await window.loadCardHelpers();
		}
		render() {
			let e = this.config.card;
			return P`
            <div class="header">
                 <ha-icon-button
                    label="Back"
                    .path=${o}
                    @click=${this._goBack}
                ></ha-icon-button>
                <h3>Edit Module</h3>
            </div>
            
            <div class="tabs-container">
                 <!-- ... tabs ... -->
                 <ha-tab-group>
                    <ha-tab-group-tab @click=${() => this._currTab = "settings"} ?active=${this._currTab === "settings"}>
                        Settings
                    </ha-tab-group-tab>
                    <ha-tab-group-tab @click=${() => this._currTab = "layout"} ?active=${this._currTab === "layout"}>
                        Layout
                    </ha-tab-group-tab>
                    <ha-tab-group-tab @click=${() => this._currTab = "visibility"} ?active=${this._currTab === "visibility"}>
                        Visibility
                    </ha-tab-group-tab>
                 </ha-tab-group>
            </div>

            <div class="content">
                ${this._currTab === "settings" ? P`
                     <!-- Smart Module Config -->
                     ${this.config.type === "smart" ? P`
                        <h4>${this._getSmartModuleName(this.config.module_type)} Settings</h4>
                        
                        ${this.config.module_type === "person" ? P`
                             <div class="settings-row">
                                <span class="label">Show only people at home</span>
                                <ha-switch
                                    .checked=${this.config.module_config?.show_only_home || !1}
                                    @change=${this._personShowHomeChanged}
                                ></ha-switch>
                             </div>
                             <div class="settings-row">
                                <span class="label">Grayscale when Away</span>
                                <ha-switch
                                    .checked=${this.config.module_config?.use_grayscale || !1}
                                    @change=${this._personGrayscaleChanged}
                                ></ha-switch>
                             </div>
                             <div class="settings-row">
                                <span class="label">Show Status Badge</span>
                                <ha-switch
                                    .checked=${this.config.module_config?.show_badge || !1}
                                    @change=${this._personBadgeChanged}
                                ></ha-switch>
                             </div>
                             
                             <h4>Include Entities</h4>
                             <div class="entities-list">
                                ${this._getPersonEntities().map((e) => {
				let t = this._isPersonIncluded(e.entity_id), n = e.attributes.entity_picture;
				return P`
                                        <div class="entity-row ${t ? "" : "disabled"}">
                                            <div class="entity-icon">
                                                ${n ? P`<div class="picker-icon" style="background-image: url(${n})"></div>` : P`<ha-svg-icon .path=${i}></ha-svg-icon>`}
                                            </div>
                                            <div class="entity-info">
                                                <span class="entity-name">${e.attributes.friendly_name || e.entity_id}</span>
                                                <span class="entity-id">${e.entity_id}</span>
                                            </div>
                                            <ha-button
                                                size="small" 
                                                appearance="filled" 
                                                variant="brand" 
                                                class="${t ? "action-hide" : "action-show"}"
                                                @click=${(t) => this._personToggleEntity(t, e.entity_id)}
                                            >
                                                ${t ? "Hide" : "Show"}
                                            </ha-button>
                                        </div>
                                    `;
			})}
                             </div>
                        
                        ` : this.config.module_type === "calendar" ? P`
                            
                             <div class="settings-row">
                                <span class="label">Show entries even if not running</span>
                                <ha-switch
                                    .checked=${this.config.module_config?.show_all || !1}
                                    @change=${this._calendarShowAllChanged}
                                ></ha-switch>
                             </div>

                             <div class="settings-row">
                                <ha-textfield
                                    label="Lookahead (minutes)"
                                    type="number"
                                    .value=${this.config.module_config?.max_minutes_until_start || 60}
                                    @input=${this._calendarLookAheadChanged}
                                ></ha-textfield>
                             </div>

                             <h4>Include Calendars</h4>
                             <div class="entities-list">
                                ${this._getCalendarEntities().map((e) => {
				let t = this._isCalendarIncluded(e.entity_id);
				return P`
                                        <div class="entity-row ${t ? "" : "disabled"}">
                                            <div class="entity-icon">
                                                <ha-svg-icon .path=${s}></ha-svg-icon>
                                            </div>
                                            <div class="entity-info">
                                                <span class="entity-name">${e.attributes.friendly_name || e.entity_id}</span>
                                                <span class="entity-id">${e.entity_id}</span>
                                            </div>
                                            <ha-button
                                                size="small" 
                                                appearance="filled" 
                                                variant="brand" 
                                                class="${t ? "action-hide" : "action-show"}"
                                                @click=${(t) => this._calendarToggleEntity(t, e.entity_id)}
                                            >
                                                ${t ? "Hide" : "Show"}
                                            </ha-button>
                                        </div>
                                    `;
			})}
                             </div>

                        ` : this.config.module_type === "security" ? P`
                            
                             ${this._getGroupedSecurityEntities().map((e) => {
				let t = (this.config.module_config?.exclude_groups || []).includes(e.id);
				return P`
                                     <ha-expansion-panel .outlined=${!0}>
                                         <div slot="header" class="group-header-slot">
                                             <div class="header-icon">
                                                 <ha-svg-icon .path=${e.icon}></ha-svg-icon>
                                             </div>
                                             <div class="header-content">
                                                 <div class="header-title">${e.name}</div>
                                                 <div class="header-subtitle">${e.entities.length} items</div>
                                             </div>
                                             <ha-button
                                                 size="small" 
                                                 appearance="outlined" 
                                                 variant="${t ? "brand" : "destructive"}" 
                                                 @click=${(t) => {
					t.stopPropagation(), this._securityToggleGroup(t, e.id);
				}}
                                             >
                                                 ${t ? "Show" : "Hide"}
                                             </ha-button>
                                         </div>
                                         
                                         ${t ? P`
                                             <div class="group-hidden-msg">Group is hidden (Enable to configure)</div>
                                         ` : P`
                                             <div class="entities-list">
                                                 ${e.entities.map((t) => {
					let n = this._isSecurityIncluded(t.entity_id);
					return P`
                                                         <div class="entity-row ${n ? "" : "disabled"}">
                                                             <div class="entity-icon">
                                                                 ${t.attributes.icon || t.attributes.device_class ? P`<ha-state-icon .hass=${this.hass} .stateObj=${t}></ha-state-icon>` : P`<ha-svg-icon .path=${e.icon}></ha-svg-icon>`}
                                                             </div>
                                                             <div class="entity-info">
                                                                 <span class="entity-name">${t.attributes.friendly_name || t.entity_id}</span>
                                                                 <span class="entity-id">${t.entity_id}</span>
                                                             </div>
                                                             <ha-button
                                                                 size="small" 
                                                                 appearance="filled" 
                                                                 variant="brand" 
                                                                 class="${n ? "action-hide" : "action-show"}"
                                                                 @click=${(e) => this._securityToggleEntity(e, t.entity_id)}
                                                             >
                                                                 ${n ? "Hide" : "Show"}
                                                             </ha-button>
                                                         </div>
                                                     `;
				})}
                                             </div>
                                         `}
                                     </ha-expansion-panel>
                                     <style>
                                        ha-expansion-panel {
                                            margin-bottom: 8px;
                                            --ha-card-border-radius: 8px;
                                        }
                                        .group-header-slot {
                                            display: flex;
                                            align-items: center;
                                            width: 100%;
                                            padding-right: 8px;
                                            height: 48px;
                                        }
                                        .header-icon {
                                            margin-right: 16px;
                                            color: var(--secondary-text-color);
                                            display: flex;
                                            align-items: center;
                                        }
                                        .header-content {
                                            flex: 1;
                                            display: flex;
                                            flex-direction: column;
                                            justify-content: center;
                                        }
                                        .header-title {
                                             font-weight: 500;
                                             font-size: 1rem;
                                             line-height: normal;
                                        }
                                        .header-subtitle {
                                            font-size: 0.8rem;
                                            color: var(--secondary-text-color);
                                            line-height: normal;
                                        }
                                     </style>
                                 `;
			})}
                        ` : P`
                            <p>No settings available for this module.</p>
                        `}

                     ` : P`
                     <!-- Card Config -->
                     <h4>Card Configuration</h4>
                     ${e ? P`
                            <div class="card-editor">
                                 <div class="card-actions">
                                 </div>
                                    <hui-card-element-editor
                                    .hass=${this.hass}
                                    .lovelace=${this.lovelace}
                                    .value=${e}
                                    @config-changed=${this._cardConfigChanged}
                                 ></hui-card-element-editor>

                            </div>
                                                                <ha-button 
                                        size="small" 
                                        appearance="filled" 
                                        variant="brand" 
                                        @click=${this._changeCard}
                                    >
                                        <ha-svg-icon .path=${ie} slot="start"></ha-svg-icon>
                                        Change Card    
                                    </ha-button>
                        ` : P`
                            <div class="no-card">
                                <p>No card selected.</p>
                                <ha-button @click=${this._pickCard}>Pick Card</ha-button>
                                 <div class="presets">
                                    <ha-button @click=${() => this._applyPreset("map")}>Add Map</ha-button>
                                    <ha-button @click=${() => this._applyPreset("media-player")}>Add Media Player</ha-button>
                                </div>
                            </div>
                        `}
                `}
                ` : this._currTab === "layout" ? P`
                    <!-- Layout Config -->
                    <!-- Layout Config -->
                     <div class="layout-fields">
                        <h4>Layout Settings</h4>
                        
                        ${this.config.type === "smart" ? P`
                            <!-- Smart modules usually default to flex, but let user override -->
                        ` : ""}

                        <div class="option">
                             <ha-select
                                label="Layout Mode"
                                .value=${this.config.flex ? "dynamic" : this.config.height ? "fixed" : "dynamic"}
                                @selected=${this._modeChanged}
                                @closed=${(e) => e.stopPropagation()}
                             >
                                <mwc-list-item value="dynamic">Dynamic (Share Space)</mwc-list-item>
                                <mwc-list-item value="fixed">Fixed Height</mwc-list-item>
                             </ha-select>
                        </div>

                        ${this.config.flex ? "" : P`
                            <ha-textfield
                                label="Height"
                                .value=${this.config.height || ""}
                                helper="e.g. 200px, 30%"
                                @input=${this._heightChanged}
                            ></ha-textfield>
                        `}

                     </div>
                ` : P`
                     <!-- Visibility Conditions -->
                     <div class="option">
                        <h4>Visibility Conditions</h4>
                        <p>Show this module only when:</p>
                        ${(this.config.conditions || []).map((e, t) => P`
                            <div class="condition-row">
                                <ha-entity-picker
                                    .hass=${this.hass}
                                    .value=${e.entity}
                                    @value-changed=${(e) => this._conditionEntityChanged(t, e)}
                                ></ha-entity-picker>
                                <ha-textfield
                                    label="State is"
                                    .value=${e.state || ""}
                                    @input=${(e) => this._conditionStateChanged(t, e)}
                                ></ha-textfield>
                                <ha-icon-button .path=${l} @click=${() => this._deleteCondition(t)}></ha-icon-button>
                            </div>
                        `)}
                        <ha-button @click=${this._addCondition}>Add Condition</ha-button>
                     </div>
                `}
            </div>

            ${this._cardPicker ? P`
                <ha-dialog 
                    open
                    @closed=${this._closePicker}
                    scrimClickAction
                    escapeKeyAction
                    style="--mdc-dialog-max-width: calc(100vw - 32px); --mdc-dialog-min-width: 1000px;"
                >
                    <div class="picker-container">
                        <div class="picker-header">
                            <ha-icon-button .path=${c} @click=${this._closePicker}></ha-icon-button>
                            <span class="header-title">Pick a Card</span>
                        </div>
                        <hui-card-picker
                            .hass=${this.hass}
                            .lovelace=${this.lovelace}
                            @config-changed=${this._cardPicked}
                        ></hui-card-picker>
                    </div>
                </ha-dialog>
            ` : ""}
        `;
		}
		_goBack() {
			this.dispatchEvent(new CustomEvent("go-back"));
		}
		_cardConfigChanged(e) {
			e.stopPropagation();
			let t = e.detail.config, n = {
				...this.config,
				card: t
			};
			this._fireChanged(n);
		}
		_changeCard() {
			this._cardPicker = !0;
		}
		_pickCard() {
			this._cardPicker = !0;
		}
		_closePicker() {
			this._cardPicker = !1;
		}
		_cardPicked(e) {
			e.stopPropagation();
			let t = e.detail.config, n = {
				...this.config,
				card: t
			};
			this._fireChanged(n), this._cardPicker = !1;
		}
		_addCondition() {
			let e = [...this.config.conditions || []];
			e.push({
				entity: "",
				state: "on"
			});
			let t = {
				...this.config,
				conditions: e
			};
			this._fireChanged(t);
		}
		_deleteCondition(e) {
			let t = [...this.config.conditions || []];
			t.splice(e, 1);
			let n = {
				...this.config,
				conditions: t
			};
			this._fireChanged(n);
		}
		_conditionEntityChanged(e, t) {
			let n = [...this.config.conditions || []];
			n[e] = {
				...n[e],
				entity: t.detail.value
			};
			let r = {
				...this.config,
				conditions: n
			};
			this._fireChanged(r);
		}
		_conditionStateChanged(e, t) {
			let n = t.target.value, r = [...this.config.conditions || []];
			r[e] = {
				...r[e],
				state: n
			};
			let i = {
				...this.config,
				conditions: r
			};
			this._fireChanged(i);
		}
		_heightChanged(e) {
			let t = e.target.value, n = { ...this.config };
			t ? n.height = t : delete n.height, this._fireChanged(n);
		}
		_modeChanged(e) {
			let t = e.target.value, n = { ...this.config };
			t === "dynamic" ? n.flex = "1" : (delete n.flex, n.height), this._fireChanged(n);
		}
		_applyPreset(e) {
			let t;
			t = e === "map" ? kt(this.hass ? Object.keys(this.hass.states)[0] : "") : yt("media_player.example");
			let n = {
				...this.config,
				card: t
			};
			this._fireChanged(n);
		}
		_getSmartModuleName(e) {
			return e === "person" ? "Person Module" : e === "calendar" ? "Calendar Module" : e === "security" ? "Security Module" : "Smart Module";
		}
		_personShowHomeChanged(e) {
			let t = e.target.checked, n = {
				...this.config.module_config || {},
				show_only_home: t
			}, r = {
				...this.config,
				module_config: n
			};
			this._fireChanged(r);
		}
		_personGrayscaleChanged(e) {
			let t = e.target.checked, n = {
				...this.config.module_config || {},
				use_grayscale: t
			}, r = {
				...this.config,
				module_config: n
			};
			this._fireChanged(r);
		}
		_personBadgeChanged(e) {
			let t = e.target.checked, n = {
				...this.config.module_config || {},
				show_badge: t
			}, r = {
				...this.config,
				module_config: n
			};
			this._fireChanged(r);
		}
		_getPersonEntities() {
			return this.hass ? Object.keys(this.hass.states).filter((e) => e.startsWith("person.")).map((e) => this.hass.states[e]) : [];
		}
		_isPersonIncluded(e) {
			let t = this.config.module_config;
			return !t || !t.include_entities || t.include_entities.includes(e);
		}
		_personToggleEntity(e, t) {
			let n = this.config.module_config || {}, r = n.include_entities || this._getPersonEntities().map((e) => e.entity_id);
			r.includes(t) ? r = r.filter((e) => e !== t) : r.push(t);
			let i = {
				...n,
				include_entities: r
			}, a = {
				...this.config,
				module_config: i
			};
			this._fireChanged(a);
		}
		_calendarShowAllChanged(e) {
			let t = e.target.checked, n = {
				...this.config.module_config || {},
				show_all: t
			}, r = {
				...this.config,
				module_config: n
			};
			this._fireChanged(r);
		}
		_calendarLookAheadChanged(e) {
			let t = parseInt(e.target.value) || 60, n = {
				...this.config.module_config || {},
				max_minutes_until_start: t
			}, r = {
				...this.config,
				module_config: n
			};
			this._fireChanged(r);
		}
		_getCalendarEntities() {
			return this.hass ? Object.keys(this.hass.states).filter((e) => e.startsWith("calendar.")).map((e) => this.hass.states[e]) : [];
		}
		_isCalendarIncluded(e) {
			let t = this.config.module_config;
			return !t || !t.include_entities || t.include_entities.includes(e);
		}
		_calendarToggleEntity(e, t) {
			let n = this.config.module_config || {}, r = n.include_entities || this._getCalendarEntities().map((e) => e.entity_id);
			r.includes(t) ? r = r.filter((e) => e !== t) : r.push(t);
			let i = {
				...n,
				include_entities: r
			}, a = {
				...this.config,
				module_config: i
			};
			this._fireChanged(a);
		}
		_fireChanged(e) {
			this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: e } }));
		}
		_securityToggleGroup(e, t) {
			let n = this.config.module_config || {}, r = n.exclude_groups || [];
			r.includes(t) ? r = r.filter((e) => e !== t) : r.push(t);
			let i = {
				...n,
				exclude_groups: r
			}, a = {
				...this.config,
				module_config: i
			};
			this._fireChanged(a);
		}
		_getGroupedSecurityEntities() {
			if (!this.hass) return [];
			let e = [
				{
					id: "lock",
					name: "Locks",
					icon: ee,
					entities: []
				},
				{
					id: "window",
					name: "Windows",
					icon: se,
					entities: []
				},
				{
					id: "door",
					name: "Doors",
					icon: u,
					entities: []
				},
				{
					id: "motion",
					name: "Motion Sensors",
					icon: oe,
					entities: []
				},
				{
					id: "safety",
					name: "Safety Sensors",
					icon: a,
					entities: []
				}
			], t = (t, n) => {
				let r = e.find((e) => e.id === t);
				r && r.entities.push(n);
			};
			return Object.keys(this.hass.states).forEach((e) => {
				let n = this.hass.states[e];
				if (n.state === "unavailable" || n.state === "unknown") return;
				let r = e.split(".")[0], i = n.attributes.device_class || "";
				r === "lock" ? t("lock", n) : r === "binary_sensor" ? ["window"].includes(i) ? t("window", n) : [
					"door",
					"garage_door",
					"opening"
				].includes(i) ? t("door", n) : [
					"motion",
					"moving",
					"occupancy",
					"presence",
					"vibration"
				].includes(i) ? t("motion", n) : [
					"safety",
					"smoke",
					"gas",
					"moisture",
					"problem",
					"tamper",
					"heat",
					"carbon_monoxide"
				].includes(i) && t("safety", n) : r === "cover" && ([
					"window",
					"shutter",
					"blind",
					"awning",
					"curtain"
				].includes(i) ? t("window", n) : [
					"garage",
					"gate",
					"door"
				].includes(i) && t("door", n));
			}), e.filter((e) => e.entities.length > 0);
		}
		_isSecurityIncluded(e) {
			let t = this.config.module_config;
			return !t || !t.exclude_entities || !t.exclude_entities.includes(e);
		}
		_securityToggleEntity(e, t) {
			let n = this.config.module_config || {}, r = n.exclude_entities || [];
			r.includes(t) ? r = r.filter((e) => e !== t) : r.push(t);
			let i = {
				...n,
				exclude_entities: r
			}, a = {
				...this.config,
				module_config: i
			};
			this._fireChanged(a);
		}
		static get styles() {
			return g`
             .header {
                display: flex;
                align-items: center;
                border-bottom: 1px solid #ccc;
                padding-bottom: 8px;
                margin-bottom: 16px;
            }
            .header h3 {
                margin: 0 0 0 16px;
            }
            .card-editor {
                border: 1px solid #eee;
                padding: 8px;
                margin-top: 8px;
                margin-bottom: 8px;
            }
            .layout-fields {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }
            .settings-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 0;
            }
            .settings-row .label {
            }
            .entities-list {
                display: flex;
                flex-direction: column;
                gap: 8px;
                padding-bottom: 12px;
            }
            .entity-row {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 8px 12px;
                border: 1px solid var(--divider-color, #eee);
                border-radius: 8px;
                transition: opacity 0.2s;
            }
            .entity-row.disabled {
                opacity: 0.6;
            }
            .entity-icon {
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .entity-icon .picker-icon {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background-size: cover;
                background-position: center;
            }
            .entity-info {
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            .entity-name {
                font-weight: 500;
            }
            .entity-id {
                font-size: 0.85em;
                color: var(--secondary-text-color);
            }
            .action-hide {
                --mdc-theme-primary: var(--error-color, #db4437);
            }
            .action-show {
                --mdc-theme-primary: var(--primary-color, #03a9f4);
            }

            
            /* HA Dialog styling matching hui-dialog-edit-card.ts */
            ha-dialog {
                --mdc-dialog-max-width: 90vw;
                --dialog-z-index: 6;
                --dialog-content-padding: 0; /* We handle padding inside because we simulate the header in content */
            }

            @media all and (max-width: 450px), all and (max-height: 500px) {
                ha-dialog {
                    height: 100%;
                    --mdc-dialog-max-height: 100%;
                    --dialog-surface-top: 0px;
                    --mdc-dialog-max-width: 100vw;
                }
            }

            .picker-container {
                width: calc(90vw - 48px);
                max-width: 1000px;
                height: 85vh;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }
            
            @media all and (max-width: 450px), all and (max-height: 500px) {
                .picker-container {
                    width: 100%;
                    max-width: 100%;
                    height: 100%;
                }
            }

            /* Header simulation */
            .picker-header {
                display: flex;
                align-items: center;
                padding: 10px 24px;
                background-color: var(--mdc-theme-surface);
                color: var(--mdc-dialog-heading-ink-color, var(--mdc-theme-on-surface));
            }
            
            /* Navigation icon positioning correction */
            .picker-header ha-icon-button {
                margin-left: -12px; /* Compensate for button padding to align with edge */
                margin-right: 12px;
            }

            .header-title {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .group-section {
                border: 1px solid var(--divider-color, #eee);
                border-radius: 8px;
                padding: 12px;
                margin-bottom: 12px;
            }
            .group-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 8px;
            }
            .group-title {
                font-weight: 500;
                font-size: 1.1em;
            }
            .group-hidden-msg {
                font-style: italic;
                color: var(--secondary-text-color);
                text-align: center;
                padding: 8px;
            }

            hui-card-picker {
                flex: 1;
                overflow-y: auto;
                padding: 24px 24px; /* Move content padding here */
            }

            .side-by-side {
                display: flex;
                gap: 8px;
                margin-bottom: 8px;
            }
            .side-by-side > * {
                flex: 1;
            }
            .condition-row {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 8px;
            }
            .condition-row ha-entity-picker {
                flex: 2;
            }
            .condition-row ha-textfield {
                flex: 1;
            }
            ha-tab-group {
                display: block;
                margin-bottom: 16px;
                padding: 0 1em;
            }
            ha-tab-group-tab {
                flex: 1;
            }
            ha-tab-group-tab::part(base) {
                width: 100%;
                justify-content: center;
            }
        `;
		}
	}, J([G({ attribute: !1 })], X.prototype, "hass", void 0), J([G({ attribute: !1 })], X.prototype, "lovelace", void 0), J([G({ attribute: !1 })], X.prototype, "config", void 0), J([G({ type: Number })], X.prototype, "index", void 0), J([K()], X.prototype, "_cardPicker", void 0), J([K()], X.prototype, "_currTab", void 0), X = J([W("dynamic-grid-module-editor")], X);
})), Z, Mt = t((() => {
	U(), q(), f(), jt(), Dt(), Z = class extends H {
		constructor(...e) {
			super(...e), this._editModuleIndex = null, this._showModulePicker = !1, this._showCardPicker = !1;
		}
		render() {
			if (!this.hass || !this.config) return P``;
			if (this._editModuleIndex !== null) {
				let e = this.config.modules[this._editModuleIndex];
				return P`
                <dynamic-grid-module-editor
                    .hass=${this.hass}
                    .lovelace=${this.lovelace}
                    .config=${e}
                    .index=${this._editModuleIndex}
                    @go-back=${this._stopEditingModule}
                    @config-changed=${this._moduleChanged}
                ></dynamic-grid-module-editor>
             `;
			}
			return P`
            <div class="header">
                <ha-icon-button 
                    label="Back"
                    .path=${o}
                    @click=${this._goBack}
                ></ha-icon-button>
                <h3>Column ${this.index + 1} Settings</h3>
            </div>

            <div class="content">
                <div class="modules-list">
                    ${(this.config.modules || []).map((e, t) => P`
                        <div class="module-item"
                             draggable="true"
                             @dragstart=${(e) => this._dragStart(e, t)}
                             @dragover=${this._dragOver}
                             @drop=${(e) => this._drop(e, t)}
                        >
                            <div class="handle">
                                <ha-svg-icon .path=${d}></ha-svg-icon>
                            </div>
                            <div class="content-text">
                                <span class="primary">${this._getModuleTitle(e)}</span>
                                ${e.conditions && e.conditions.length > 0 ? P`<span class="secondary">${e.conditions.length} Condition(s)</span>` : ""}
                            </div>
                            <div class="actions">
                                <ha-icon-button 
                                    label="Edit"
                                    .path=${te}
                                    @click=${() => this._editModule(t)}
                                ></ha-icon-button>
                                <ha-icon-button 
                                    label="Delete"
                                    .path=${l}
                                    @click=${() => this._deleteModule(t)}
                                ></ha-icon-button>
                            </div>
                        </div>
                    `)}
                </div>

                <div class="add-module">
                     <ha-button 
                        size="small" 
                        appearance="filled" 
                        variant="brand" 
                        @click=${this._addCard}
                     >
                        <ha-svg-icon .path=${ne} slot="start"></ha-svg-icon>
                        Add Card
                     </ha-button>
                     <ha-button 
                        size="small" 
                        appearance="filled" 
                        variant="brand" 
                        @click=${this._openModulePicker}
                        style="margin-left: 8px;"
                     >
                        <ha-svg-icon .path=${ae} slot="start"></ha-svg-icon>
                        Add Module
                     </ha-button>
                </div>
            </div>

            ${this._renderModulePicker()}
            ${this._renderCardPicker()}
        `;
		}
		_goBack() {
			this.dispatchEvent(new CustomEvent("go-back"));
		}
		_editModule(e) {
			this._editModuleIndex = e;
		}
		_stopEditingModule() {
			this._editModuleIndex = null;
		}
		_moduleChanged(e) {
			if (e.stopPropagation(), this._editModuleIndex === null) return;
			let t = [...this.config.modules || []];
			t[this._editModuleIndex] = e.detail.config;
			let n = {
				...this.config,
				modules: t
			};
			this._fireChanged(n);
		}
		_addCard() {
			this._showCardPicker = !0;
		}
		_closeCardPicker() {
			this._showCardPicker = !1;
		}
		_handleCardPicked(e) {
			e.stopPropagation();
			let t = e.detail.config, n = [...this.config.modules || []];
			n.push({
				card: t,
				flex: "1"
			});
			let r = {
				...this.config,
				modules: n
			};
			this._fireChanged(r), this._closeCardPicker();
		}
		_openModulePicker() {
			this._showModulePicker = !0;
		}
		_closeModulePicker() {
			this._showModulePicker = !1;
		}
		_addSmartModule(e) {
			let t = [...this.config.modules || []];
			e === "person" ? t.push({
				type: "smart",
				module_type: "person",
				module_config: { show_only_home: !1 },
				flex: "1"
			}) : e === "calendar" ? t.push({
				type: "smart",
				module_type: "calendar",
				module_config: {},
				flex: "1"
			}) : e === "security" && t.push({
				type: "smart",
				module_type: "security",
				module_config: {},
				flex: "1"
			});
			let n = {
				...this.config,
				modules: t
			};
			this._fireChanged(n), this._closeModulePicker();
		}
		_renderModulePicker() {
			return this._showModulePicker ? P`
            <ha-dialog
                open
                @closed=${this._closeModulePicker}
                hideActions
                style="--mdc-dialog-max-width: 90vw; --dialog-content-padding: 0;"
            >
                <div class="picker-container">
                    <div class="picker-header">
                        <ha-icon-button .path=${c} @click=${this._closeModulePicker}></ha-icon-button>
                        <span class="header-title">Add Smart Module</span>
                    </div>
                    <div class="picker-content">
                        <div class="module-picker-list">
                            <div class="picker-item" @click=${() => this._addSmartModule("person")}>
                                <div class="picker-icon">
                                    <ha-svg-icon .path=${i}></ha-svg-icon>
                                </div>
                                <div class="picker-info">
                                    <span class="picker-title">Person Module</span>
                                    <span class="picker-desc">Show avatars for people (Home/Away status)</span>
                                </div>
                            </div>
                            
                            <div class="picker-item" @click=${() => this._addSmartModule("calendar")}>
                                <div class="picker-icon">
                                    <ha-svg-icon .path=${s}></ha-svg-icon>
                                </div>
                                <div class="picker-info">
                                    <span class="picker-title">Calendar Module</span>
                                    <span class="picker-desc">Show active calendar events</span>
                                </div>
                            </div>

                            <div class="picker-item" @click=${() => this._addSmartModule("security")}>
                                <div class="picker-icon" style="background-color: var(--red-color, #f44336);">
                                    <ha-svg-icon .path=${re}></ha-svg-icon>
                                </div>
                                <div class="picker-info">
                                    <span class="picker-title">Security Module</span>
                                    <span class="picker-desc">Show security alerts (lock, window, door, motion)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ha-dialog>
        ` : P``;
		}
		_renderCardPicker() {
			return this._showCardPicker ? P`
            <ha-dialog
                open
                @closed=${this._closeCardPicker}
                hideActions
                style="--mdc-dialog-max-width: 90vw; --dialog-content-padding: 0;"
            >
                <div class="picker-container">
                    <div class="picker-header">
                        <ha-icon-button .path=${c} @click=${this._closeCardPicker}></ha-icon-button>
                        <span class="header-title">Pick a Card</span>
                    </div>
                    <hui-card-picker
                        .hass=${this.hass}
                        .lovelace=${this.lovelace}
                        @config-changed=${this._handleCardPicked}
                    ></hui-card-picker>
                </div>
            </ha-dialog>
        ` : P``;
		}
		_deleteModule(e) {
			let t = [...this.config.modules || []];
			t.splice(e, 1);
			let n = {
				...this.config,
				modules: t
			};
			this._fireChanged(n);
		}
		_fireChanged(e) {
			this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: e } }));
		}
		_dragStart(e, t) {
			e.dataTransfer && (e.dataTransfer.setData("text/plain", t.toString()), e.dataTransfer.effectAllowed = "move");
		}
		_dragOver(e) {
			e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "move");
		}
		_drop(e, t) {
			e.preventDefault();
			let n = parseInt(e.dataTransfer.getData("text/plain"), 10);
			if (isNaN(n) || n === t) return;
			let r = [...this.config.modules || []], [i] = r.splice(n, 1);
			r.splice(t, 0, i);
			let a = {
				...this.config,
				modules: r
			};
			this._fireChanged(a);
		}
		_getModuleTitle(e) {
			if (e.type === "smart") {
				let t = e.module_type || "smart";
				return t.charAt(0).toUpperCase() + t.slice(1) + " Module";
			}
			if (e.card) {
				let t = e.card.type;
				return t = t.split("-").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join("-"), t + " Card";
			}
			return "Empty (No Card)";
		}
		static get styles() {
			return g`
             .header {
                display: flex;
                align-items: center;
                border-bottom: 1px solid var(--divider-color, #ccc);
                padding-bottom: 8px;
                margin-bottom: 16px;
            }
            .header h3 {
                margin: 0 0 0 16px;
            }
            .modules-list {
                 margin-top: 16px;
            }
            .module-item {
                display: flex;
                align-items: center;
                padding: 12px;
                margin-bottom: 8px;
                background-color: var(--secondary-background-color, #f5f5f5);
                border: 1px solid var(--divider-color, #e0e0e0);
                border-radius: var(--ha-card-border-radius, 12px);
                cursor: grab;
                transition: background-color 0.2s ease;
                user-select: none;
            }
            .module-item:hover {
                 background-color: var(--secondary-background-color, #e0e0e0);
            }
            .handle {
                padding-right: 12px;
                cursor: grab;
                color: var(--secondary-text-color, #727272);
            }
            .content-text {
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            .content-text .primary {
                font-weight: 500;
            }
            .content-text .secondary {
                font-size: 0.85em;
                color: var(--secondary-text-color, #727272);
            }
            .actions {
                display: flex;
            }
            .add-module {
                margin-top: 16px;
                display: flex;
                justify-content: flex-start;
            }
            
            /* Dialog & Picker Styles - Consistent with Card Picker */
            ha-dialog {
                --mdc-dialog-max-width: 90vw;
                --dialog-z-index: 6;
            }
            
             @media all and (max-width: 450px), all and (max-height: 500px) {
                ha-dialog {
                    --mdc-dialog-max-width: 100vw;
                    height: 100%;
                }
            }

            .picker-container {
                width: calc(90vw - 48px);
                max-width: 1000px;
                height: 85vh;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }

             @media all and (max-width: 450px), all and (max-height: 500px) {
                .picker-container {
                    width: 100%;
                    max-width: 100%;
                    height: 100%;
                }
            }

            .picker-header {
                display: flex;
                align-items: center;
                padding: 10px 24px;
                background-color: var(--mdc-theme-surface);
                color: var(--mdc-dialog-heading-ink-color, var(--mdc-theme-on-surface));
                border-bottom: 1px solid var(--divider-color, #eee);
            }
            .picker-header ha-icon-button {
                margin-left: -12px;
                margin-right: 12px;
            }
            .header-title {
                font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
                font-size: var(--mdc-typography-headline6-font-size, 20px);
                font-weight: var(--mdc-typography-headline6-font-weight, 500);
            }

            .picker-content {
                flex: 1;
                overflow-y: auto;
                padding: 24px;
            }
            
            hui-card-picker {
                flex: 1;
                overflow-y: auto;
                padding: 24px;
            }

            .module-picker-list {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .picker-item {
                display: flex;
                align-items: center;
                gap: 16px;
                padding: 12px;
                border: 1px solid var(--divider-color, #eee);
                border-radius: 8px;
                cursor: pointer;
                transition: background-color 0.2s;
            }
            .picker-item:hover {
                background-color: var(--secondary-background-color, #f5f5f5);
            }
            .picker-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                background-color: var(--primary-color, #03a9f4);
                color: white; 
                border-radius: 50%;
            }
            .picker-icon ha-svg-icon {
                --mdc-icon-size: 24px;
                color: #ffffff;
            }
            .picker-info {
                display: flex;
                flex-direction: column;
            }
            .picker-title {
                font-weight: 500;
                font-size: 1.1em;
            }
            .picker-desc {
                font-size: 0.85em;
                color: var(--secondary-text-color);
            }
        `;
		}
	}, J([G({ attribute: !1 })], Z.prototype, "hass", void 0), J([G({ attribute: !1 })], Z.prototype, "lovelace", void 0), J([G({ attribute: !1 })], Z.prototype, "config", void 0), J([G({ type: Number })], Z.prototype, "index", void 0), J([K()], Z.prototype, "_editModuleIndex", void 0), J([K()], Z.prototype, "_showModulePicker", void 0), J([K()], Z.prototype, "_showCardPicker", void 0), Z = J([W("dynamic-grid-column-editor")], Z);
})), Nt = /* @__PURE__ */ n({ DynamicGridCardEditor: () => Q }), Q, Pt = t((() => {
	U(), q(), Ot(), f(), jt(), Mt(), Dt(), Q = class extends H {
		constructor(...e) {
			super(...e), this._editIndex = null;
		}
		setConfig(e) {
			this._config = e;
		}
		render() {
			if (!this.hass || !this._config) return P``;
			if (this._editIndex !== null) {
				let e = (this._config.columns || [])[this._editIndex];
				return P`
                <dynamic-grid-column-editor
                    .hass=${this.hass}
                    .lovelace=${this.lovelace}
                    .config=${e}
                    .index=${this._editIndex}
                    @go-back=${this._stopEditing}
                    @config-changed=${this._columnChanged}
                ></dynamic-grid-column-editor>
            `;
			}
			let e = this._config.columns || [];
			return P`
            <div class="card-config">
                <div class="option">
                    <ha-textfield
                        label="Header"
                        .value=${this._config.header || ""}
                        .configValue=${"header"}
                        helper="Heading of Grid"
                        @input=${this._valueChanged}
                    ></ha-textfield>
                    <ha-textfield
                        label="Card Height"
                        .value=${this._config.card_height || ""}
                        .configValue=${"card_height"}
                        helper="e.g. 600px, 85vh (Default: Auto)"
                        @input=${this._valueChanged}
                    ></ha-textfield>
                </div>

                <h3>Columns Configuration</h3>
                <div class="modules-list">
                    ${e.map((e, t) => P`
                        <div class="module-item"
                             draggable="true"
                             @dragstart=${(e) => this._dragStart(e, t)}
                             @dragover=${this._dragOver}
                             @drop=${(e) => this._drop(e, t)}
                        >
                            <div class="handle">
                                <ha-svg-icon .path=${d}></ha-svg-icon>
                            </div>
                            <div class="content-text">
                                <span class="primary"><strong>Column ${t + 1}</strong></span>
                                <span class="secondary">${e.modules?.length || 0} Modules</span>
                            </div>
                            <div>
                                <ha-icon-button
                                    label="Edit"
                                    .path=${te}
                                    @click=${() => this._editColumn(t)}
                                ></ha-icon-button>
                                <ha-icon-button
                                    label="Delete"
                                    .path=${l}
                                    @click=${() => this._removeColumn(t)}
                                ></ha-icon-button>
                            </div>
                        </div>
                    `)}
                </div>
                
                <div class="add-column">
                     <ha-button 
                        size="small" 
                        appearance="filled" 
                        variant="brand" 
                        @click=${this._addColumn}
                     >
                        <ha-svg-icon .path=${ne} slot="start"></ha-svg-icon>
                        Add Column
                     </ha-button>
                </div>
            </div>
        `;
		}
		_columnChanged(e) {
			if (e.stopPropagation(), this._editIndex === null) return;
			let t = [...this._config.columns || []];
			t[this._editIndex] = e.detail.config, this._config = {
				...this._config,
				columns: t
			}, Y(this, "config-changed", { config: this._config });
		}
		_stopEditing() {
			this._editIndex = null;
		}
		_valueChanged(e) {
			if (!this._config || !this.hass) return;
			let t = e.target;
			this[`_${t.configValue}`] !== t.value && (t.configValue && (this._config = {
				...this._config,
				[t.configValue]: t.value
			}), Y(this, "config-changed", { config: this._config }));
		}
		_addColumn() {
			let e = [...this._config.columns || []];
			e.push({ modules: [] }), this._config = {
				...this._config,
				columns: e
			}, Y(this, "config-changed", { config: this._config });
		}
		_removeColumn(e) {
			let t = [...this._config.columns || []];
			t.splice(e, 1), this._config = {
				...this._config,
				columns: t
			}, Y(this, "config-changed", { config: this._config });
		}
		_editColumn(e) {
			this._editIndex = e;
		}
		_dragStart(e, t) {
			e.dataTransfer && (e.dataTransfer.setData("text/plain", t.toString()), e.dataTransfer.effectAllowed = "move");
		}
		_dragOver(e) {
			e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "move");
		}
		_drop(e, t) {
			e.preventDefault();
			let n = parseInt(e.dataTransfer.getData("text/plain"), 10);
			if (isNaN(n) || n === t) return;
			let r = [...this._config.columns || []], [i] = r.splice(n, 1);
			r.splice(t, 0, i), this._config = {
				...this._config,
				columns: r
			}, Y(this, "config-changed", { config: this._config });
		}
		static get styles() {
			return g`
            .option {
                padding: 4px 0;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
                align-items: center;
            }
            .option ha-textfield {
                width: 100%;
            }
            .modules-list {
                margin-top: 16px;
            }
            .module-item {
                display: flex;
                align-items: center;
                padding: 8px 12px;
                margin-bottom: 8px;
                background-color: var(--secondary-background-color, #f5f5f5);
                border: 1px solid var(--divider-color, #eee);
                border-radius: 8px;
                cursor: grab;
            }
            .module-item:hover {
                 border-color: var(--primary-color, #03a9f4);
            }
             .handle {
                padding-right: 12px;
                cursor: grab;
                color: var(--secondary-text-color, #727272);
            }
            .content-text {
                flex: 1;
                display: flex;
                flex-direction: column;
            }
             .content-text .primary {
                font-weight: 500;
            }
            .content-text .secondary {
                font-size: 0.85em;
                color: var(--secondary-text-color, #727272);
            }
            .add-column {
                margin-top: 16px;
                display: flex;
                justify-content: flex-start;
            }
        `;
		}
	}, J([G({ attribute: !1 })], Q.prototype, "hass", void 0), J([G({ attribute: !1 })], Q.prototype, "lovelace", void 0), J([K()], Q.prototype, "_config", void 0), J([K()], Q.prototype, "_editIndex", void 0), Q = J([W("dynamic-grid-card-editor")], Q);
}));
f(), U(), q(), Dt();
var $ = class extends H {
	constructor(...e) {
		super(...e), this._cards = /* @__PURE__ */ new Map(), this._detailPopup = {
			open: !1,
			title: "",
			entities: []
		}, this._handleShowDetail = (e) => {
			this._detailPopup = {
				open: !0,
				title: e.detail.title,
				entities: e.detail.entities
			};
		};
	}
	connectedCallback() {
		super.connectedCallback(), this.addEventListener("dynamic-grid-show-detail", this._handleShowDetail);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this.removeEventListener("dynamic-grid-show-detail", this._handleShowDetail);
	}
	setConfig(e) {
		if (!e) throw Error("Invalid configuration");
		this.config = e, this._createCards();
	}
	updated(e) {
		super.updated(e), e.has("hass") && this.hass && this._cards.forEach((e) => {
			e.hass = this.hass;
		});
	}
	_closeDetailPopup() {
		this._detailPopup = {
			...this._detailPopup,
			open: !1
		};
	}
	async _createCards() {
		if (!this.config?.columns) return;
		let e = this.config.columns.flatMap((e) => e.modules || []);
		for (let t of e) {
			let e = this._getModuleId(t);
			if (this._cards.has(e)) continue;
			let n = this._getCardConfigForModule(t);
			if (n) {
				let t = await Et(this.hass, n);
				t && (this._cards.set(e, t), this.requestUpdate());
			}
		}
	}
	_getModuleId(e) {
		return JSON.stringify(e.card || {}) + JSON.stringify(e.conditions || []);
	}
	_getCardConfigForModule(e) {
		return e.card || null;
	}
	render() {
		if (!this.config || !this.hass) return P``;
		let e = this.config.columns || [], t = this.config.card_height ? `height: ${this.config.card_height};` : "";
		return P`
            <ha-card class="main-card" .header=${this.config.header}>
                <div class="container" style="--column-count: ${e.length}; ${t}">
                    ${e.map((e, t) => this._renderColumn(e, t))}
                </div>

                ${this._detailPopup.open ? P`
                    <ha-dialog
                        open
                        hideActions
                        @closed=${this._closeDetailPopup}
                        class="detail-dialog"
                    >
                        <div class="dialog-header">
                            <ha-icon-button .path=${c} @click=${this._closeDetailPopup}></ha-icon-button>
                            <h2 class="mdc-dialog__title">${this._detailPopup.title}</h2>
                        </div>
                        <div class="dialog-content">
                            ${this._renderGroupedEntities(this._detailPopup.entities)}
                        </div>
                    </ha-dialog>
                ` : ""}
            </ha-card>
        `;
	}
	_renderGroupedEntities(e) {
		let t = /* @__PURE__ */ new Map();
		e.forEach((e) => {
			let n = "Other", r = e.entity_id.split(".")[0], i = e.attributes.device_class;
			if (r === "lock") n = "Lock";
			else if (r === "cover") n = "Garage/Gate";
			else if (r === "calendar") {
				if (e.state === "off" && !e.attributes.start_time) return;
				n = "Events";
			} else r === "binary_sensor" && ([
				"motion",
				"occupancy",
				"moving",
				"presence"
			].includes(i) ? n = "Motion" : ["window"].includes(i) ? n = "Window" : [
				"door",
				"garage_door",
				"opening"
			].includes(i) ? n = "Door" : [
				"smoke",
				"moisture",
				"gas",
				"safety",
				"problem",
				"tamper",
				"heat"
			].includes(i) && (n = "Safety"));
			t.has(n) || t.set(n, []), t.get(n).push(e);
		});
		let n = [
			"Safety",
			"Lock",
			"Garage/Gate",
			"Door",
			"Window",
			"Motion",
			"Events",
			"Other"
		];
		return Array.from(t.keys()).sort((e, t) => {
			let r = n.indexOf(e), i = n.indexOf(t);
			return (r === -1 ? 999 : r) - (i === -1 ? 999 : i);
		}).map((e) => P`
                <div class="group-section">
                    <h3 class="group-header">${e}</h3>
                    ${t.get(e).map((e) => {
			let t = e.entity_id.startsWith("calendar."), n = t ? e.attributes.message || e.attributes.friendly_name : e.attributes.friendly_name || e.entity_id, r = "";
			if (t && e.attributes.start_time) {
				let t = new Date(e.attributes.start_time), n = new Date(e.attributes.end_time);
				r = t > /* @__PURE__ */ new Date() ? this._formatRelativeTime(t) : `${t.toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit"
				})} - ${n.toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit"
				})}`;
			} else {
				let t = this.hass.formatEntityState ? this.hass.formatEntityState(this.hass.states[e.entity_id] || e) : e.state;
				r = t === "Off" || t === "off" ? "No active events" : t;
			}
			return P`
                        <div class="detail-row" @click=${() => this._handleMoreInfo(e.entity_id)}>
                            <div class="detail-icon">
                                 <ha-state-icon .hass=${this.hass} .stateObj=${this.hass.states[e.entity_id] || e}></ha-state-icon>
                            </div>
                            <div class="detail-info">
                                <div class="detail-name">${n}</div>
                                <div class="detail-state">${r}</div>
                            </div>
                            <ha-icon-button icon="mdi:chevron-right"></ha-icon-button>
                        </div>
                    `;
		})}
                </div>
            `);
	}
	_formatRelativeTime(e) {
		let t = /* @__PURE__ */ new Date(), n = e.getTime() - t.getTime(), r = Math.ceil(n / 6e4), i = Math.floor(r / 60), a = Math.floor(i / 24);
		return r < 60 ? `In ${r} min` : i < 24 ? `In ${i} hour${i > 1 ? "s" : ""}` : a < 7 ? `In ${a} day${a > 1 ? "s" : ""}` : e.toLocaleDateString([], {
			weekday: "short",
			day: "numeric",
			month: "short"
		});
	}
	_handleMoreInfo(e) {
		let t = new CustomEvent("hass-more-info", {
			bubbles: !0,
			composed: !0,
			detail: { entityId: e }
		});
		this.dispatchEvent(t);
	}
	static getStubConfig(e) {
		let t = Object.keys(e.states), n = t.find((e) => e.startsWith("weather.")) || "weather.forecast_home", r = t.find((e) => e.startsWith("light.") && e.split(".")[1].startsWith("light")) || t.find((e) => e.startsWith("light.")) || "light.example";
		return {
			type: "custom:dynamic-grid-card",
			header: "My Grid",
			card_height: "400px",
			columns: [{ modules: [{
				card: {
					type: "weather-forecast",
					entity: n
				},
				flex: "1"
			}] }, { modules: [{
				card: {
					type: "tile",
					entity: "sun.sun",
					name: "Sun"
				},
				flex: "1"
			}, {
				card: {
					type: "button",
					tap_action: { action: "toggle" },
					entity: r,
					name: "Light"
				},
				flex: "1"
			}] }]
		};
	}
	_checkConditions(e) {
		return !e.conditions || e.conditions.length === 0 || e.conditions.every((e) => {
			let t = this.hass.states[e.entity];
			return t ? e.state ? t.state === e.state : !e.state_not || t.state !== e.state_not : !1;
		});
	}
	_renderColumn(e, t) {
		let n = (e.modules || []).map((e) => {
			if (!this._checkConditions(e)) return null;
			if (e.type === "smart" && e.module_type) {
				if (!Ct(e.module_type, {
					hass: this.hass,
					config: e
				})) return null;
				let t = vt.renderModule(this.hass, e), n = "";
				return e.height && (n += `height: ${e.height};`, e.flex || (n += "flex: 0 0 auto;")), e.min_height && (n += `min-height: ${e.min_height};`), e.flex && (n += `flex: ${e.flex};`), P`
                    <div class="module-item" style="${n}">
                        <ha-card style="height: 100%;">
                            ${t}
                        </ha-card>
                    </div>
                `;
			}
			let t = this._getModuleId(e), n = this._cards.get(t);
			if (!n) return null;
			let r = "";
			return e.height && (r += `height: ${e.height};`, e.flex || (r += "flex: 0 0 auto;")), e.min_height && (r += `min-height: ${e.min_height};`), e.flex && (r += `flex: ${e.flex};`), P`<div class="module-item" style="${r}">${n}</div>`;
		}).filter(Boolean);
		return P`
            <div class="column">
                ${n}
            </div>
        `;
	}
	static get styles() {
		return g`
            :host {
                display: block;
                /* height: 100%;  Removed to allow auto-growth */
            }
            ha-card.main-card {
                /* height: 100%; Removed */
                overflow: hidden;
                background: none;
                border: none;
                box-shadow: none;
            }
            .container {
                display: flex;
                /* height: 100%; Removed */
                gap: 8px;
                align-items: stretch; /* Ensure columns stretch to match tallest */
            }
            .column {
                display: flex;
                flex-direction: column;
                gap: 8px;
                min-width: 0; 
                flex: 1; /* Each column takes equal width stash by default */
            }
            .module-item {
                 overflow: hidden; /* Prevent content spill */
            }

            ha-dialog {
                --mdc-dialog-min-width: 400px;
                --mdc-dialog-max-width: 600px;
                --dialog-content-padding: 12px;
            }
            .dialog-header {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 8px;
                position: sticky;
                top: 0;
                z-index: 10;
                border-bottom: 1px solid rgba(0, 0, 0, 0.07);
                background: var(--mdc-theme-surface, #fff);
            }
            h2.mdc-dialog__title {
                margin: 0;
                font-size: 1.25rem;
                font-weight: 500;
            }
            .dialog-content {
                display: flex;
                flex-direction: column;
                gap: 16px;
                padding: 16px;
            }
            .group-section {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .group-header {
                margin: 0 0 4px 0;
                font-size: 1rem;
                font-weight: 500;
                color: var(--primary-text-color);
                text-transform: capitalize;
            }
            .detail-row {
                display: flex;
                align-items: center;
                gap: 16px;
                padding: 12px;
                border: 1px solid var(--divider-color, #eee);
                border-radius: 8px;
                cursor: pointer;
                transition: background-color 0.2s;
            }
            .detail-row:hover {
                background-color: rgba(127, 127, 127, 0.1);
            }
            .detail-icon {
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--primary-text-color);
            }
            .detail-info {
                flex: 1;
            }
            .detail-name {
                font-weight: 500;
                font-size: 1rem;
            }
            .detail-state {
                font-size: 0.9rem;
                color: var(--secondary-text-color);
            }
        `;
	}
	getCardSize() {
		return 6;
	}
	static async getConfigElement() {
		return await Promise.resolve().then(() => (Pt(), Nt)), document.createElement("dynamic-grid-card-editor");
	}
};
J([G({ attribute: !1 })], $.prototype, "hass", void 0), J([K()], $.prototype, "config", void 0), J([K()], $.prototype, "_cards", void 0), J([K()], $.prototype, "_detailPopup", void 0), $ = J([W("dynamic-grid-card")], $), console.info(`%c DYNAMIC-GRID-CARD %c v${r} `, "color: steelblue; background: black; font-weight: bold;", "color: white ; background: dimgray; font-weight: bold;"), window.customCards = window.customCards || [], window.customCards.push({
	type: "dynamic-grid-card",
	name: "Dynamic Grid Card",
	description: "A dynamic grid card inspired by CarPlay"
});
//#endregion
