!function (e) {
	var t = {};
	function n(r) {
		if (t[r])
			return t[r].exports;
		var o = t[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(o.exports, o, o.exports, n),
		o.l = !0,
		o.exports
	}
	n.m = e,
	n.c = t,
	n.d = function (e, t, r) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: r
		})
	},
	n.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}),
		Object.defineProperty(e, "__esModule", {
			value: !0
		})
	},
	n.t = function (e, t) {
		if (1 & t && (e = n(e)), 8 & t)
			return e;
		if (4 & t && "object" == typeof e && e && e.__esModule)
			return e;
		var r = Object.create(null);
		if (n.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var o in e)
				n.d(r, o, function (t) {
					return e[t]
				}
					.bind(null, o));
		return r
	},
	n.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		}
		 : function () {
			return e
		};
		return n.d(t, "a", t),
		t
	},
	n.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	},
	n.p = "",
	n(n.s = 45)
}
([, , , , , function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			n(25),
			n(9);
			var r = n(26),
			o = n(13),
			a = {},
			i = !1;
			function u(e, t, n) {
				var o = a[e];
				o || (o = a[e] = new r.BrowserRenderer(e)),
				o.attachRootComponentToLogicalElement(n, t)
			}
			t.attachRootComponentToLogicalElement = u,
			t.attachRootComponentToElement = function (e, t, n) {
				var r = document.querySelector(e);
				if (!r)
					throw new Error("Could not find any element matching selector '" + e + "'.");
				u(n || 0, o.toLogicalElement(r, !0), t)
			},
			t.renderBatch = function (e, t) {
				var n = a[e];
				if (!n)
					throw new Error("There is no browser renderer with ID " + e + ".");
				for (var r = t.arrayRangeReader, o = t.updatedComponents(), u = r.values(o), l = r.count(o), s = t.referenceFrames(), c = r.values(s), f = t.diffReader, d = 0; d < l; d++) {
					var p = t.updatedComponentsEntry(u, d),
					m = f.componentId(p),
					h = f.edits(p);
					n.updateComponent(t, m, h, c)
				}
				var v = t.disposedComponentIds(),
				y = r.values(v),
				g = r.count(v);
				for (d = 0; d < g; d++)
					m = t.disposedComponentIdsEntry(y, d), n.disposeComponent(m);
				var b = t.disposedEventHandlerIds(),
				w = r.values(b),
				E = r.count(b);
				for (d = 0; d < E; d++) {
					var _ = t.disposedEventHandlerIdsEntry(w, d);
					n.disposeEventHandler(_)
				}
				i && (i = !1, window.scrollTo && window.scrollTo(0, 0))
			},
			t.resetScrollAfterNextBatch = function () {
				i = !0
			}
		}, , , , function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.setPlatform = function (e) {
				return t.platform = e,
				t.platform
			}
		}, , , , function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = p("_blazorLogicalChildren"),
			o = p("_blazorLogicalParent"),
			a = p("_blazorLogicalEnd");
			function i(e, t) {
				if (e.childNodes.length > 0 && !t)
					throw new Error("New logical elements must start empty, or allowExistingContents must be true");
				return e[r] = [],
				e
			}
			function u(e, t, n) {
				var a = e;
				if (e instanceof Comment && (s(a) && s(a).length > 0))
					throw new Error("Not implemented: inserting non-empty logical container");
				if (l(a))
					throw new Error("Not implemented: moving existing logical children");
				var i = s(t);
				if (n < i.length) {
					var u = i[n];
					u.parentNode.insertBefore(e, u),
					i.splice(n, 0, a)
				} else
					d(e, t), i.push(a);
				a[o] = t,
				r in a || (a[r] = [])
			}
			function l(e) {
				return e[o] || null
			}
			function s(e) {
				return e[r]
			}
			function c(e) {
				if (e instanceof Element)
					return e;
				if (e instanceof Comment)
					return e.parentNode;
				throw new Error("Not a valid logical element")
			}
			function f(e) {
				var t = s(l(e));
				return t[Array.prototype.indexOf.call(t, e) + 1] || null
			}
			function d(e, t) {
				if (t instanceof Element)
					t.appendChild(e);
				else {
					if (!(t instanceof Comment))
						throw new Error("Cannot append node because the parent is not a valid logical element. Parent: " + t);
					var n = f(t);
					n ? n.parentNode.insertBefore(e, n) : d(e, l(t))
				}
			}
			function p(e) {
				return "function" == typeof Symbol ? Symbol() : e
			}
			t.toLogicalRootCommentElement = function (e, t) {
				if (!e.parentNode)
					throw new Error("Comment not connected to the DOM " + e.textContent);
				var n = e.parentNode,
				r = i(n, !0),
				u = s(r);
				return Array.from(n.childNodes).forEach(function (e) {
					return u.push(e)
				}),
				e[o] = r,
				t && (e[a] = t, i(t, !0)),
				i(e, !0)
			},
			t.toLogicalElement = i,
			t.createAndInsertLogicalContainer = function (e, t) {
				var n = document.createComment("!");
				return u(n, e, t),
				n
			},
			t.insertLogicalChild = u,
			t.removeLogicalChild = function e(t, n) {
				var r = s(t).splice(n, 1)[0];
				if (r instanceof Comment)
					for (var o = s(r); o.length > 0; )
						e(r, 0);
				var a = r;
				a.parentNode.removeChild(a)
			},
			t.getLogicalParent = l,
			t.getLogicalSiblingEnd = function (e) {
				return e[a] || null
			},
			t.getLogicalChild = function (e, t) {
				return s(e)[t]
			},
			t.isSvgElement = function (e) {
				return "http://www.w3.org/2000/svg" === c(e).namespaceURI
			},
			t.getLogicalChildrenArray = s,
			t.permuteLogicalChildren = function (e, t) {
				var n = s(e);
				t.forEach(function (e) {
					e.moveRangeStart = n[e.fromSiblingIndex],
					e.moveRangeEnd = function e(t) {
						if (t instanceof Element)
							return t;
						var n = f(t);
						if (n)
							return n.previousSibling;
						var r = l(t);
						return r instanceof Element ? r.lastChild : e(r)
					}
					(e.moveRangeStart)
				}),
				t.forEach(function (t) {
					var r = t.moveToBeforeMarker = document.createComment("marker"),
					o = n[t.toSiblingIndex + 1];
					o ? o.parentNode.insertBefore(r, o) : d(r, e)
				}),
				t.forEach(function (e) {
					for (var t = e.moveToBeforeMarker, n = t.parentNode, r = e.moveRangeStart, o = e.moveRangeEnd, a = r; a; ) {
						var i = a.nextSibling;
						if (n.insertBefore(a, t), a === o)
							break;
						a = i
					}
					n.removeChild(t)
				}),
				t.forEach(function (e) {
					n[e.toSiblingIndex] = e.moveRangeStart
				})
			},
			t.getClosestDomElement = c
		}, , , , function (e, t, n) {
			"use strict";
			var r;
			!function (e) {
				window.DotNet = e;
				var t = [],
				n = {},
				r = {},
				o = 1,
				a = null;
				function i(e) {
					t.push(e)
				}
				function u(e, t, n, r) {
					var o = s();
					if (o.invokeDotNetFromJS) {
						var a = JSON.stringify(r, h),
						i = o.invokeDotNetFromJS(e, t, n, a);
						return i ? f(i) : null
					}
					throw new Error("The current dispatcher does not support synchronous calls from JS to .NET. Use invokeMethodAsync instead.")
				}
				function l(e, t, r, a) {
					if (e && r)
						throw new Error("For instance method calls, assemblyName should be null. Received '" + e + "'.");
					var i = o++,
					u = new Promise(function (e, t) {
							n[i] = {
								resolve: e,
								reject: t
							}
						});
					try {
						var l = JSON.stringify(a, h);
						s().beginInvokeDotNetFromJS(i, e, t, r, l)
					} catch (e) {
						c(i, !1, e)
					}
					return u
				}
				function s() {
					if (null !== a)
						return a;
					throw new Error("No .NET call dispatcher has been set.")
				}
				function c(e, t, r) {
					if (!n.hasOwnProperty(e))
						throw new Error("There is no pending async call with ID " + e + ".");
					var o = n[e];
					delete n[e],
					t ? o.resolve(r) : o.reject(r)
				}
				function f(e) {
					return e ? JSON.parse(e, function (e, n) {
						return t.reduce(function (t, n) {
							return n(e, t)
						}, n)
					}) : null
				}
				function d(e) {
					return e instanceof Error ? e.message + "\n" + e.stack : e ? e.toString() : "null"
				}
				function p(e) {
					if (r.hasOwnProperty(e))
						return r[e];
					var t,
					n = window,
					o = "window";
					if (e.split(".").forEach(function (e) {
							if (!(e in n))
								throw new Error("Could not find '" + e + "' in '" + o + "'.");
								t = n,
								n = n[e],
								o += "." + e
							}), n instanceof Function)return n = n.bind(t), r[e] = n, n;
					throw new Error("The value '" + o + "' is not a function.")
				}
				e.attachDispatcher = function (e) {
					a = e
				},
				e.attachReviver = i,
				e.invokeMethod = function (e, t) {
					for (var n = [], r = 2; r < arguments.length; r++)
						n[r - 2] = arguments[r];
					return u(e, t, null, n)
				},
				e.invokeMethodAsync = function (e, t) {
					for (var n = [], r = 2; r < arguments.length; r++)
						n[r - 2] = arguments[r];
					return l(e, t, null, n)
				},
				e.jsCallDispatcher = {
					findJSFunction: p,
					invokeJSFromDotNet: function (e, t) {
						var n = p(e).apply(null, f(t));
						return null == n ? null : JSON.stringify(n, h)
					},
					beginInvokeJSFromDotNet: function (e, t, n) {
						var r = new Promise(function (e) {
								e(p(t).apply(null, f(n)))
							});
						e && r.then(function (t) {
							return s().endInvokeJSFromDotNet(e, !0, JSON.stringify([e, !0, t], h))
						}, function (t) {
							return s().endInvokeJSFromDotNet(e, !1, JSON.stringify([e, !1, d(t)]))
						})
					},
					endInvokeDotNetFromJS: function (e, t, n) {
						var r = t ? n : new Error(n);
						c(parseInt(e), t, r)
					}
				};
				var m = function () {
					function e(e) {
						this._id = e
					}
					return e.prototype.invokeMethod = function (e) {
						for (var t = [], n = 1; n < arguments.length; n++)
							t[n - 1] = arguments[n];
						return u(null, e, this._id, t)
					},
					e.prototype.invokeMethodAsync = function (e) {
						for (var t = [], n = 1; n < arguments.length; n++)
							t[n - 1] = arguments[n];
						return l(null, e, this._id, t)
					},
					e.prototype.dispose = function () {
						l(null, "__Dispose", this._id, null).catch(function (e) {
							return console.error(e)
						})
					},
					e.prototype.serializeAsArg = function () {
						return {
							__dotNetObject: this._id
						}
					},
					e
				}
				();
				function h(e, t) {
					return t instanceof m ? t.serializeAsArg() : t
				}
				i(function (e, t) {
					return t && "object" == typeof t && t.hasOwnProperty("__dotNetObject") ? new m(t.__dotNetObject) : t
				})
			}
			(r || (r = {}))
		}, function (e, t, n) {
			"use strict";
			var r;
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.dispatchEvent = function (e, t) {
				if (!r)
					throw new Error("eventDispatcher not initialized. Call 'setEventDispatcher' to configure it.");
				return r(e, t)
			},
			t.setEventDispatcher = function (e) {
				r = e
			}
		}, , , function (e, t, n) {
			"use strict";
			var r = this && this.__awaiter || function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, a) {
					function i(e) {
						try {
							l(r.next(e))
						} catch (e) {
							a(e)
						}
					}
					function u(e) {
						try {
							l(r.throw(e))
						} catch (e) {
							a(e)
						}
					}
					function l(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(i, u)
					}
					l((r = r.apply(e, t || [])).next())
				})
			},
			o = this && this.__generator || function (e, t) {
				var n,
				r,
				o,
				a,
				i = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return a = {
					next: u(0),
					throw : u(1),
					return : u(2)
				},
				"function" == typeof Symbol && (a[Symbol.iterator] = function () {
					return this
				}),
				a;
				function u(a) {
					return function (u) {
						return function (a) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; i; )
								try {
									if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done)
										return o;
									switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
									case 0:
									case 1:
										o = a;
										break;
									case 4:
										return i.label++, {
											value: a[1],
											done: !1
										};
									case 5:
										i.label++,
										r = a[1],
										a = [0];
										continue;
									case 7:
										a = i.ops.pop(),
										i.trys.pop();
										continue;
									default:
										if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
											i = 0;
											continue
										}
										if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
											i.label = a[1];
											break
										}
										if (6 === a[0] && i.label < o[1]) {
											i.label = o[1],
											o = a;
											break
										}
										if (o && i.label < o[2]) {
											i.label = o[2],
											i.ops.push(a);
											break
										}
										o[2] && i.ops.pop(),
										i.trys.pop();
										continue
									}
									a = t.call(e, i)
								} catch (e) {
									a = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & a[0])
								throw a[1];
							return {
								value: a[0] ? a[1] : void 0,
								done: !0
							}
						}
						([a, u])
					}
				}
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			n(17);
			var a,
			i = n(5),
			u = !1,
			l = !1,
			s = null;
			function c(e, t) {
				var n = p(e);
				if (!t && m(n))
					f(n, !1);
				else if (t && location.href === e) {
					var r = e + "?";
					history.replaceState(null, "", r),
					location.replace(e)
				} else
					location.href = e
			}
			function f(e, t) {
				i.resetScrollAfterNextBatch(),
				history.pushState(null, "", e),
				d(t)
			}
			function d(e) {
				return r(this, void 0, void 0, function () {
					return o(this, function (t) {
						switch (t.label) {
						case 0:
							return s ? [4, s(location.href, e)] : [3, 2];
						case 1:
							t.sent(),
							t.label = 2;
						case 2:
							return [2]
						}
					})
				})
			}
			function p(e) {
				return (a = a || document.createElement("a")).href = e,
				a.href
			}
			function m(e) {
				var t,
				n = (t = document.baseURI).substr(0, t.lastIndexOf("/") + 1);
				return e.startsWith(n)
			}
			t.internalFunctions = {
				listenForNavigationEvents: function (e) {
					if (s = e, l)
						return;
					l = !0,
					window.addEventListener("popstate", function () {
						return d(!1)
					})
				},
				enableNavigationInterception: function () {
					if (u)
						return;
					u = !0,
					document.addEventListener("click", function (e) {
						if (0 === e.button && !function (e) {
							return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey
						}
							(e)) {
							var t = function e(t, n) {
								return t ? t.tagName === n ? t : e(t.parentElement, n) : null
							}
							(e.target, "A");
							if (t && t.hasAttribute("href")) {
								var n = t.getAttribute("target"),
								r = !n || "_self" === n;
								if (!r)
									return;
								var o = t.getAttribute("href"),
								a = p(o);
								m(a) && (e.preventDefault(), f(a, !0))
							}
						}
					})
				},
				navigateTo: c,
				getBaseURI: function () {
					return document.baseURI
				},
				getLocationHref: function () {
					return location.href
				}
			},
			t.navigateTo = c
		}, , , function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n(21),
			o = n(32),
			a = n(5);
			window.Blazor = {
				navigateTo: r.navigateTo,
				_internal: {
					attachRootComponentToElement: a.attachRootComponentToElement,
					http: o.internalFunctions,
					navigationManager: r.internalFunctions
				}
			}
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n(27),
			o = n(28),
			a = n(13),
			i = n(31),
			u = n(18),
			l = document.createElement("template"),
			s = document.createElementNS("http://www.w3.org/2000/svg", "g"),
			c = {
				submit: !0
			},
			f = {},
			d = function () {
				function e(e) {
					var t = this;
					this.childComponentLocations = {},
					this.browserRendererId = e,
					this.eventDelegator = new o.EventDelegator(function (e, n, r, o) {
							!function (e, t, n, r, o) {
								c[e.type] && e.preventDefault();
								var a = {
									browserRendererId: t,
									eventHandlerId: n,
									eventArgsType: r.type,
									eventFieldInfo: o
								};
								u.dispatchEvent(a, r.data)
							}
							(e, t.browserRendererId, n, r, o)
						})
				}
				return e.prototype.attachRootComponentToLogicalElement = function (e, t) {
					this.attachComponentToElement(e, t),
					f[e] = t
				},
				e.prototype.updateComponent = function (e, t, n, r) {
					var o = this.childComponentLocations[t];
					if (!o)
						throw new Error("No element is currently associated with component " + t);
					var i = f[t];
					if (i) {
						var u = a.getLogicalSiblingEnd(i);
						delete f[t],
						u ? function (e, t) {
							var n = a.getLogicalParent(e);
							if (!n)
								throw new Error("Can't clear between nodes. The start node does not have a logical parent.");
							for (var r = a.getLogicalChildrenArray(n), o = r.indexOf(e) + 1, i = r.indexOf(t), u = o; u <= i; u++)
								a.removeLogicalChild(n, o);
							e.textContent = "!"
						}
						(i, u) : function (e) {
							var t;
							for (; t = e.firstChild; )
								e.removeChild(t)
						}
						(i)
					}
					var l = a.getClosestDomElement(o).ownerDocument,
					s = l && l.activeElement;
					this.applyEdits(e, t, o, 0, n, r),
					s instanceof HTMLElement && l && l.activeElement !== s && s.focus()
				},
				e.prototype.disposeComponent = function (e) {
					delete this.childComponentLocations[e]
				},
				e.prototype.disposeEventHandler = function (e) {
					this.eventDelegator.removeListener(e)
				},
				e.prototype.attachComponentToElement = function (e, t) {
					this.childComponentLocations[e] = t
				},
				e.prototype.applyEdits = function (e, t, n, o, i, u) {
					for (var l, s = 0, c = o, f = e.arrayBuilderSegmentReader, d = e.editReader, p = e.frameReader, m = f.values(i), h = f.offset(i), v = h + f.count(i), y = h; y < v; y++) {
						var g = e.diffReader.editsEntry(m, y),
						b = d.editType(g);
						switch (b) {
						case r.EditType.prependFrame:
							var w = d.newTreeIndex(g),
							E = e.referenceFramesEntry(u, w),
							_ = d.siblingIndex(g);
							this.insertFrame(e, t, n, c + _, u, E, w);
							break;
						case r.EditType.removeFrame:
							_ = d.siblingIndex(g);
							a.removeLogicalChild(n, c + _);
							break;
						case r.EditType.setAttribute:
							w = d.newTreeIndex(g),
							E = e.referenceFramesEntry(u, w),
							_ = d.siblingIndex(g);
							if (!((S = a.getLogicalChild(n, c + _))instanceof Element))
								throw new Error("Cannot set attribute on non-element child");
							this.applyAttribute(e, t, S, E);
							break;
						case r.EditType.removeAttribute:
							var S;
							_ = d.siblingIndex(g);
							if (!((S = a.getLogicalChild(n, c + _))instanceof HTMLElement))
								throw new Error("Cannot remove attribute from non-element child");
							var I = d.removedAttributeName(g);
							this.tryApplySpecialProperty(e, S, I, null) || S.removeAttribute(I);
							break;
						case r.EditType.updateText:
							w = d.newTreeIndex(g),
							E = e.referenceFramesEntry(u, w),
							_ = d.siblingIndex(g);
							var C = a.getLogicalChild(n, c + _);
							if (!(C instanceof Text))
								throw new Error("Cannot set text content on non-text child");
							C.textContent = p.textContent(E);
							break;
						case r.EditType.updateMarkup:
							w = d.newTreeIndex(g),
							E = e.referenceFramesEntry(u, w),
							_ = d.siblingIndex(g);
							a.removeLogicalChild(n, c + _),
							this.insertMarkup(e, n, c + _, E);
							break;
						case r.EditType.stepIn:
							_ = d.siblingIndex(g);
							n = a.getLogicalChild(n, c + _),
							s++,
							c = 0;
							break;
						case r.EditType.stepOut:
							n = a.getLogicalParent(n),
							c = 0 === --s ? o : 0;
							break;
						case r.EditType.permutationListEntry:
							(l = l || []).push({
								fromSiblingIndex: c + d.siblingIndex(g),
								toSiblingIndex: c + d.moveToSiblingIndex(g)
							});
							break;
						case r.EditType.permutationListEnd:
							a.permuteLogicalChildren(n, l),
							l = void 0;
							break;
						default:
							throw new Error("Unknown edit type: " + b)
						}
					}
				},
				e.prototype.insertFrame = function (e, t, n, o, a, u, l) {
					var s = e.frameReader,
					c = s.frameType(u);
					switch (c) {
					case r.FrameType.element:
						return this.insertElement(e, t, n, o, a, u, l),
						1;
					case r.FrameType.text:
						return this.insertText(e, n, o, u),
						1;
					case r.FrameType.attribute:
						throw new Error("Attribute frames should only be present as leading children of element frames.");
					case r.FrameType.component:
						return this.insertComponent(e, n, o, u),
						1;
					case r.FrameType.region:
						return this.insertFrameRange(e, t, n, o, a, l + 1, l + s.subtreeLength(u));
					case r.FrameType.elementReferenceCapture:
						if (n instanceof Element)
							return i.applyCaptureIdToElement(n, s.elementReferenceCaptureId(u)), 0;
						throw new Error("Reference capture frames can only be children of element frames.");
					case r.FrameType.markup:
						return this.insertMarkup(e, n, o, u),
						1;
					default:
						throw new Error("Unknown frame type: " + c)
					}
				},
				e.prototype.insertElement = function (e, t, n, o, i, u, l) {
					var s = e.frameReader,
					c = s.elementName(u),
					f = "svg" === c || a.isSvgElement(n) ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c),
					d = a.toLogicalElement(f);
					a.insertLogicalChild(f, n, o);
					for (var p = l + s.subtreeLength(u), m = l + 1; m < p; m++) {
						var h = e.referenceFramesEntry(i, m);
						if (s.frameType(h) !== r.FrameType.attribute) {
							this.insertFrameRange(e, t, d, 0, i, m, p);
							break
						}
						this.applyAttribute(e, t, f, h)
					}
					if (f instanceof HTMLSelectElement && "_blazorSelectValue" in f) {
						var v = f._blazorSelectValue;
						f.value = v,
						delete f._blazorSelectValue
					}
				},
				e.prototype.insertComponent = function (e, t, n, r) {
					var o = a.createAndInsertLogicalContainer(t, n),
					i = e.frameReader.componentId(r);
					this.attachComponentToElement(i, o)
				},
				e.prototype.insertText = function (e, t, n, r) {
					var o = e.frameReader.textContent(r),
					i = document.createTextNode(o);
					a.insertLogicalChild(i, t, n)
				},
				e.prototype.insertMarkup = function (e, t, n, r) {
					for (var o, i = a.createAndInsertLogicalContainer(t, n), u = e.frameReader.markupContent(r), c = (o = u, a.isSvgElement(t) ? (s.innerHTML = o || " ", s) : (l.innerHTML = o || " ", l.content)), f = 0; c.firstChild; )
						a.insertLogicalChild(c.firstChild, i, f++)
				},
				e.prototype.applyAttribute = function (e, t, n, r) {
					var o = e.frameReader,
					a = o.attributeName(r),
					i = (this.browserRendererId, o.attributeEventHandlerId(r));
					if (i) {
						var u = a.substring(0, 2),
						l = a.substring(2);
						if ("on" !== u || !l)
							throw new Error("Attribute has nonzero event handler ID, but attribute name '" + a + "' does not start with 'on'.");
						this.eventDelegator.setListener(n, l, i, t)
					} else
						this.tryApplySpecialProperty(e, n, a, r) || n.setAttribute(a, o.attributeValue(r))
				},
				e.prototype.tryApplySpecialProperty = function (e, t, n, r) {
					switch (n) {
					case "value":
						return this.tryApplyValueProperty(e, t, r);
					case "checked":
						return this.tryApplyCheckedProperty(e, t, r);
					default:
						return !1
					}
				},
				e.prototype.tryApplyValueProperty = function (e, t, n) {
					var r = e.frameReader;
					switch (t.tagName) {
					case "INPUT":
					case "SELECT":
					case "TEXTAREA":
						var o = n ? r.attributeValue(n) : null;
						return t.value = o,
						"SELECT" === t.tagName && (t._blazorSelectValue = o),
						!0;
					case "OPTION":
						(o = n ? r.attributeValue(n) : null) ? t.setAttribute("value", o) : t.removeAttribute("value");
						var a = this.findClosestAncestorSelectElement(t);
						return a && "_blazorSelectValue" in a && a._blazorSelectValue === o && (this.tryApplyValueProperty(e, a, n), delete a._blazorSelectValue),
						!0;
					default:
						return !1
					}
				},
				e.prototype.tryApplyCheckedProperty = function (e, t, n) {
					if ("INPUT" === t.tagName) {
						var r = n ? e.frameReader.attributeValue(n) : null;
						return t.checked = null !== r,
						!0
					}
					return !1
				},
				e.prototype.findClosestAncestorSelectElement = function (e) {
					for (; e; ) {
						if (e instanceof HTMLSelectElement)
							return e;
						e = e.parentElement
					}
					return null
				},
				e.prototype.insertFrameRange = function (e, t, n, r, o, a, i) {
					for (var u = r, l = a; l < i; l++) {
						var s = e.referenceFramesEntry(o, l);
						r += this.insertFrame(e, t, n, r, o, s, l),
						l += p(e, s)
					}
					return r - u
				},
				e
			}
			();
			function p(e, t) {
				var n = e.frameReader;
				switch (n.frameType(t)) {
				case r.FrameType.component:
				case r.FrameType.element:
				case r.FrameType.region:
					return n.subtreeLength(t) - 1;
				default:
					return 0
				}
			}
			t.BrowserRenderer = d
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			function (e) {
				e[e.prependFrame = 1] = "prependFrame",
				e[e.removeFrame = 2] = "removeFrame",
				e[e.setAttribute = 3] = "setAttribute",
				e[e.removeAttribute = 4] = "removeAttribute",
				e[e.updateText = 5] = "updateText",
				e[e.stepIn = 6] = "stepIn",
				e[e.stepOut = 7] = "stepOut",
				e[e.updateMarkup = 8] = "updateMarkup",
				e[e.permutationListEntry = 9] = "permutationListEntry",
				e[e.permutationListEnd = 10] = "permutationListEnd"
			}
			(t.EditType || (t.EditType = {})),
			function (e) {
				e[e.element = 1] = "element",
				e[e.text = 2] = "text",
				e[e.attribute = 3] = "attribute",
				e[e.component = 4] = "component",
				e[e.region = 5] = "region",
				e[e.elementReferenceCapture = 6] = "elementReferenceCapture",
				e[e.markup = 8] = "markup"
			}
			(t.FrameType || (t.FrameType = {}))
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r,
			o = n(29),
			a = n(30),
			i = (r = {}, ["abort", "blur", "change", "error", "focus", "load", "loadend", "loadstart", "mouseenter", "mouseleave", "progress", "reset", "scroll", "submit", "unload", "DOMNodeInsertedIntoDocument", "DOMNodeRemovedFromDocument"].forEach(function (e) {
					r[e] = !0
				}), r),
			u = function () {
				function e(t) {
					this.onEvent = t;
					var n = ++e.nextEventDelegatorId;
					this.eventsCollectionKey = "_blazorEvents_" + n,
					this.eventInfoStore = new l(this.onGlobalEvent.bind(this))
				}
				return e.prototype.setListener = function (e, t, n, r) {
					var o = e[this.eventsCollectionKey];
					if (o || (o = e[this.eventsCollectionKey] = {}), o.hasOwnProperty(t)) {
						var a = o[t];
						this.eventInfoStore.update(a.eventHandlerId, n)
					} else {
						var i = {
							element: e,
							eventName: t,
							eventHandlerId: n,
							renderingComponentId: r
						};
						this.eventInfoStore.add(i),
						o[t] = i
					}
				},
				e.prototype.removeListener = function (e) {
					var t = this.eventInfoStore.remove(e);
					if (t) {
						var n = t.element;
						if (n.hasOwnProperty(this.eventsCollectionKey)) {
							var r = n[this.eventsCollectionKey];
							delete r[t.eventName],
							0 === Object.getOwnPropertyNames(r).length && delete n[this.eventsCollectionKey]
						}
					}
				},
				e.prototype.onGlobalEvent = function (e) {
					if (e.target instanceof Element)
						for (var t = e.target, n = null, r = i.hasOwnProperty(e.type); t; ) {
							if (t.hasOwnProperty(this.eventsCollectionKey)) {
								var u = t[this.eventsCollectionKey];
								if (u.hasOwnProperty(e.type)) {
									n || (n = o.EventForDotNet.fromDOMEvent(e));
									var l = u[e.type],
									s = a.EventFieldInfo.fromEvent(l.renderingComponentId, e);
									this.onEvent(e, l.eventHandlerId, n, s)
								}
							}
							t = r ? null : t.parentElement
						}
				},
				e.nextEventDelegatorId = 0,
				e
			}
			();
			t.EventDelegator = u;
			var l = function () {
				function e(e) {
					this.globalListener = e,
					this.infosByEventHandlerId = {},
					this.countByEventName = {}
				}
				return e.prototype.add = function (e) {
					if (this.infosByEventHandlerId[e.eventHandlerId])
						throw new Error("Event " + e.eventHandlerId + " is already tracked");
					this.infosByEventHandlerId[e.eventHandlerId] = e;
					var t = e.eventName;
					if (this.countByEventName.hasOwnProperty(t))
						this.countByEventName[t]++;
					else {
						this.countByEventName[t] = 1;
						var n = i.hasOwnProperty(t);
						document.addEventListener(t, this.globalListener, n)
					}
				},
				e.prototype.update = function (e, t) {
					if (this.infosByEventHandlerId.hasOwnProperty(t))
						throw new Error("Event " + t + " is already tracked");
					var n = this.infosByEventHandlerId[e];
					delete this.infosByEventHandlerId[e],
					n.eventHandlerId = t,
					this.infosByEventHandlerId[t] = n
				},
				e.prototype.remove = function (e) {
					var t = this.infosByEventHandlerId[e];
					if (t) {
						delete this.infosByEventHandlerId[e];
						var n = t.eventName;
						0 == --this.countByEventName[n] && (delete this.countByEventName[n], document.removeEventListener(n, this.globalListener))
					}
					return t
				},
				e
			}
			()
		}, function (e, t, n) {
			"use strict";
			var r = this && this.__assign || function () {
				return (r = Object.assign || function (e) {
					for (var t, n = 1, r = arguments.length; n < r; n++)
						for (var o in t = arguments[n])
							Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
					return e
				}).apply(this, arguments)
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var o = function () {
				function e(e, t) {
					this.type = e,
					this.data = t
				}
				return e.fromDOMEvent = function (t) {
					var n = t.target;
					switch (t.type) {
					case "input":
					case "change":
						var o = function (e) {
							return e && "INPUT" === e.tagName && "checkbox" === e.getAttribute("type")
						}
						(n) ? !!n.checked : n.value;
						return new e("change", {
							type: t.type,
							value: o
						});
					case "copy":
					case "cut":
					case "paste":
						return new e("clipboard", {
							type: t.type
						});
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						return new e("drag", function (e) {
							return r({}, a(e), {
								dataTransfer: e.dataTransfer
							})
						}
							(t));
					case "focus":
					case "blur":
					case "focusin":
					case "focusout":
						return new e("focus", {
							type: t.type
						});
					case "keydown":
					case "keyup":
					case "keypress":
						return new e("keyboard", function (e) {
							return {
								type: e.type,
								key: e.key,
								code: e.code,
								location: e.location,
								repeat: e.repeat,
								ctrlKey: e.ctrlKey,
								shiftKey: e.shiftKey,
								altKey: e.altKey,
								metaKey: e.metaKey
							}
						}
							(t));
					case "contextmenu":
					case "click":
					case "mouseover":
					case "mouseout":
					case "mousemove":
					case "mousedown":
					case "mouseup":
					case "dblclick":
						return new e("mouse", a(t));
					case "error":
						return new e("error", function (e) {
							return {
								type: e.type,
								message: e.message,
								filename: e.filename,
								lineno: e.lineno,
								colno: e.colno
							}
						}
							(t));
					case "loadstart":
					case "timeout":
					case "abort":
					case "load":
					case "loadend":
					case "progress":
						return new e("progress", function (e) {
							return {
								type: e.type,
								lengthComputable: e.lengthComputable,
								loaded: e.loaded,
								total: e.total
							}
						}
							(t));
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchenter":
					case "touchleave":
					case "touchstart":
						return new e("touch", function (e) {
							function t(e) {
								for (var t = [], n = 0; n < e.length; n++) {
									var r = e[n];
									t.push({
										identifier: r.identifier,
										clientX: r.clientX,
										clientY: r.clientY,
										screenX: r.screenX,
										screenY: r.screenY,
										pageX: r.pageX,
										pageY: r.pageY
									})
								}
								return t
							}
							return {
								type: e.type,
								detail: e.detail,
								touches: t(e.touches),
								targetTouches: t(e.targetTouches),
								changedTouches: t(e.changedTouches),
								ctrlKey: e.ctrlKey,
								shiftKey: e.shiftKey,
								altKey: e.altKey,
								metaKey: e.metaKey
							}
						}
							(t));
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointerenter":
					case "pointerleave":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						return new e("pointer", function (e) {
							return r({}, a(e), {
								pointerId: e.pointerId,
								width: e.width,
								height: e.height,
								pressure: e.pressure,
								tiltX: e.tiltX,
								tiltY: e.tiltY,
								pointerType: e.pointerType,
								isPrimary: e.isPrimary
							})
						}
							(t));
					case "wheel":
					case "mousewheel":
						return new e("wheel", function (e) {
							return r({}, a(e), {
								deltaX: e.deltaX,
								deltaY: e.deltaY,
								deltaZ: e.deltaZ,
								deltaMode: e.deltaMode
							})
						}
							(t));
					default:
						return new e("unknown", {
							type: t.type
						})
					}
				},
				e
			}
			();
			function a(e) {
				return {
					type: e.type,
					detail: e.detail,
					screenX: e.screenX,
					screenY: e.screenY,
					clientX: e.clientX,
					clientY: e.clientY,
					button: e.button,
					buttons: e.buttons,
					ctrlKey: e.ctrlKey,
					shiftKey: e.shiftKey,
					altKey: e.altKey,
					metaKey: e.metaKey
				}
			}
			t.EventForDotNet = o
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = function () {
				function e(e, t) {
					this.componentId = e,
					this.fieldValue = t
				}
				return e.fromEvent = function (t, n) {
					var r = n.target;
					if (r instanceof Element) {
						var o = function (e) {
							if (e instanceof HTMLInputElement)
								return e.type && "checkbox" === e.type.toLowerCase() ? {
									value: e.checked
								}
							 : {
								value: e.value
							};
							if (e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement)
								return {
									value: e.value
								};
							return null
						}
						(r);
						if (o)
							return new e(t, o.value)
					}
					return null
				},
				e
			}
			();
			t.EventFieldInfo = r
		}, function (e, t, n) {
			"use strict";
			function r(e) {
				return "_bl_" + e
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.applyCaptureIdToElement = function (e, t) {
				e.setAttribute(r(t), "")
			};
			DotNet.attachReviver(function (e, t) {
				return t && "object" == typeof t && t.hasOwnProperty("__internalId") && "string" == typeof t.__internalId ? (n = t.__internalId, o = "[" + r(n) + "]", document.querySelector(o)) : t;
				var n,
				o
			})
		}, function (e, t, n) {
			"use strict";
			var r = this && this.__awaiter || function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, a) {
					function i(e) {
						try {
							l(r.next(e))
						} catch (e) {
							a(e)
						}
					}
					function u(e) {
						try {
							l(r.throw(e))
						} catch (e) {
							a(e)
						}
					}
					function l(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(i, u)
					}
					l((r = r.apply(e, t || [])).next())
				})
			},
			o = this && this.__generator || function (e, t) {
				var n,
				r,
				o,
				a,
				i = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return a = {
					next: u(0),
					throw : u(1),
					return : u(2)
				},
				"function" == typeof Symbol && (a[Symbol.iterator] = function () {
					return this
				}),
				a;
				function u(a) {
					return function (u) {
						return function (a) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; i; )
								try {
									if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done)
										return o;
									switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
									case 0:
									case 1:
										o = a;
										break;
									case 4:
										return i.label++, {
											value: a[1],
											done: !1
										};
									case 5:
										i.label++,
										r = a[1],
										a = [0];
										continue;
									case 7:
										a = i.ops.pop(),
										i.trys.pop();
										continue;
									default:
										if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
											i = 0;
											continue
										}
										if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
											i.label = a[1];
											break
										}
										if (6 === a[0] && i.label < o[1]) {
											i.label = o[1],
											o = a;
											break
										}
										if (o && i.label < o[2]) {
											i.label = o[2],
											i.ops.push(a);
											break
										}
										o[2] && i.ops.pop(),
										i.trys.pop();
										continue
									}
									a = t.call(e, i)
								} catch (e) {
									a = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & a[0])
								throw a[1];
							return {
								value: a[0] ? a[1] : void 0,
								done: !0
							}
						}
						([a, u])
					}
				}
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var a,
			i,
			u = n(9),
			l = "Microsoft.AspNetCore.Blazor",
			s = l + ".Http",
			c = "WebAssemblyHttpMessageHandler";
			function f(e, t, n, r) {
				a || (a = u.platform.findMethod(l, s, c, "ReceiveResponse")),
				u.platform.callMethod(a, null, [u.platform.toDotNetString(e.toString()), t, n, r])
			}
			t.internalFunctions = {
				sendAsync: function (e, t, n) {
					return r(this, void 0, void 0, function () {
						var r,
						a,
						d,
						p,
						m;
						return o(this, function (o) {
							switch (o.label) {
							case 0:
								d = JSON.parse(u.platform.toJavaScriptString(n)),
								p = Object.assign({
										credentials: (h = d.requestInit).credentials,
										method: h.method,
										headers: h.headers.map(function (e) {
											return [e.name, e.value]
										})
									}, d.requestInitOverrides),
								t && (p.body = u.platform.toUint8Array(t)),
								o.label = 1;
							case 1:
								return o.trys.push([1, 4, , 5]),
								[4, fetch(d.requestUri, p)];
							case 2:
								return [4, (r = o.sent()).arrayBuffer()];
							case 3:
								return a = o.sent(),
								[3, 5];
							case 4:
								return m = o.sent(),
								function (e, t) {
									f(e, null, null, u.platform.toDotNetString(t))
								}
								(e, m.toString()),
								[2];
							case 5:
								return function (e, t, n) {
									var r = {
										statusCode: t.status,
										statusText: t.statusText,
										headers: []
									};
									t.headers.forEach(function (e, t) {
										r.headers.push({
											name: t,
											value: e
										})
									}),
									i || (i = u.platform.findMethod(l, s, c, "AllocateArray"));
									var o = u.platform.callMethod(i, null, [u.platform.toDotNetString(n.byteLength.toString())]);
									u.platform.toUint8Array(o).set(new Uint8Array(n)),
									f(e, u.platform.toDotNetString(JSON.stringify(r)), o, null)
								}
								(e, r, a),
								[2]
							}
							var h
						})
					})
				}
			}
		}, function (e, t, n) {
			"use strict";
			function r(e) {
				var t = e.substring(e.lastIndexOf("/") + 1),
				n = t.indexOf("?");
				return n < 0 ? t : t.substring(0, n)
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.getFileNameFromUrl = r,
			t.getAssemblyNameFromUrl = function (e) {
				return r(e).replace(/\.dll$/, "")
			}
		}, function (e, t, n) {
			"use strict";
			var r = this && this.__awaiter || function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, a) {
					function i(e) {
						try {
							l(r.next(e))
						} catch (e) {
							a(e)
						}
					}
					function u(e) {
						try {
							l(r.throw(e))
						} catch (e) {
							a(e)
						}
					}
					function l(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(i, u)
					}
					l((r = r.apply(e, t || [])).next())
				})
			},
			o = this && this.__generator || function (e, t) {
				var n,
				r,
				o,
				a,
				i = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return a = {
					next: u(0),
					throw : u(1),
					return : u(2)
				},
				"function" == typeof Symbol && (a[Symbol.iterator] = function () {
					return this
				}),
				a;
				function u(a) {
					return function (u) {
						return function (a) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; i; )
								try {
									if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done)
										return o;
									switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
									case 0:
									case 1:
										o = a;
										break;
									case 4:
										return i.label++, {
											value: a[1],
											done: !1
										};
									case 5:
										i.label++,
										r = a[1],
										a = [0];
										continue;
									case 7:
										a = i.ops.pop(),
										i.trys.pop();
										continue;
									default:
										if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
											i = 0;
											continue
										}
										if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
											i.label = a[1];
											break
										}
										if (6 === a[0] && i.label < o[1]) {
											i.label = o[1],
											o = a;
											break
										}
										if (o && i.label < o[2]) {
											i.label = o[2],
											i.ops.push(a);
											break
										}
										o[2] && i.ops.pop(),
										i.trys.pop();
										continue
									}
									a = t.call(e, i)
								} catch (e) {
									a = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & a[0])
								throw a[1];
							return {
								value: a[0] ? a[1] : void 0,
								done: !0
							}
						}
						([a, u])
					}
				}
			};
			function a(e) {
				return new Promise(function (t, n) {
					e.onload = t,
					e.onerror = n,
					document.head.appendChild(e)
				})
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			t.fetchBootConfigAsync = function () {
				return r(this, void 0, void 0, function () {
					return o(this, function (e) {
						switch (e.label) {
						case 0:
							return [4, fetch("_framework/blazor.boot.json", {
									method: "Get",
									credentials: "include"
								})];
						case 1:
							return [2, e.sent().json()]
						}
					})
				})
			},
			t.loadEmbeddedResourcesAsync = function (e) {
				var t = e.cssReferences.map(function (e) {
						var t = document.createElement("link");
						return t.rel = "stylesheet",
						t.href = e,
						a(t)
					}),
				n = e.jsReferences.map(function (e) {
						var t = document.createElement("script");
						return t.src = e,
						a(t)
					});
				return Promise.all(t.concat(n))
			},
			t.shouldAutoStart = function () {
				return !(!document || !document.currentScript || "false" === document.currentScript.getAttribute("autostart"))
			}
		}, , , , , , , , , , , function (e, t, n) {
			"use strict";
			var r = this && this.__awaiter || function (e, t, n, r) {
				return new(n || (n = Promise))(function (o, a) {
					function i(e) {
						
						/* Theses hack are for buggy iOS/Safari 13 */
						if (window.Blazor.isStarted)
						{
							try {
								l(r.next(e));
							} catch (e) {
								a(e)
							}
						}
						else {
							setTimeout(function (l, r, e) {
								try {
									l(r.next(e));
								} catch (e) {
									a(e)
								}
							}, 2000, l, r ,e);
						}
					}
					function u(e) {
						try {
							l(r.throw(e))
						} catch (e) {
							a(e)
						}
					}
					function l(e) {
						e.done ? o(e.value) : new n(function (t) {
							t(e.value)
						}).then(i, u)
					}
					l((r = r.apply(e, t || [])).next())
				})
			},
			o = this && this.__generator || function (e, t) {
				var n,
				r,
				o,
				a,
				i = {
					label: 0,
					sent: function () {
						if (1 & o[0])
							throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return a = {
					next: u(0),
					throw : u(1),
					return : u(2)
				},
				"function" == typeof Symbol && (a[Symbol.iterator] = function () {
					return this
				}),
				a;
				function u(a) {
					return function (u) {
						return function (a) {
							if (n)
								throw new TypeError("Generator is already executing.");
							for (; i; )
								try {
									if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done)
										return o;
									switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
									case 0:
									case 1:
										o = a;
										break;
									case 4:
										return i.label++, {
											value: a[1],
											done: !1
										};
									case 5:
										i.label++,
										r = a[1],
										a = [0];
										continue;
									case 7:
										a = i.ops.pop(),
										i.trys.pop();
										continue;
									default:
										if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
											i = 0;
											continue
										}
										if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
											i.label = a[1];
											break
										}
										if (6 === a[0] && i.label < o[1]) {
											i.label = o[1],
											o = a;
											break
										}
										if (o && i.label < o[2]) {
											i.label = o[2],
											i.ops.push(a);
											break
										}
										o[2] && i.ops.pop(),
										i.trys.pop();
										continue
									}
									a = t.call(e, i)
								} catch (e) {
									a = [6, e],
									r = 0
								}
							finally {
								n = o = 0
							}
							if (5 & a[0])
								throw a[1];
							return {
								value: a[0] ? a[1] : void 0,
								done: !0
							}
						}
						([a, u])
					}
				}
			};
			Object.defineProperty(t, "__esModule", {
				value: !0
			}),
			n(17),
			n(24);
			var a = n(9),
			i = n(46),
			u = n(33),
			l = n(5),
			s = n(48),
			c = n(34),
			f = n(18),
			d = !1;
			function p(e) {
				return r(this, void 0, void 0, function () {
					var e,
					t,
					n,
					p,
					m,
					h,
					v = this;
					return o(this, function (y) {
						switch (y.label) {
						case 0:
							if (d)
								throw new Error("Blazor has already started.");
							return d = !0,
							f.setEventDispatcher(function (e, t) {
								return DotNet.invokeMethodAsync("Microsoft.AspNetCore.Blazor", "DispatchEvent", e, JSON.stringify(t))
							}),
							e = a.setPlatform(i.monoPlatform),
							window.Blazor.platform = e,
							window.Blazor._internal.renderBatch = function (e, t) {
								l.renderBatch(e, new s.SharedMemoryRenderBatch(t))
							},
							window.Blazor._internal.navigationManager.listenForNavigationEvents(function (e, t) {
								return r(v, void 0, void 0, function () {
									return o(this, function (n) {
										switch (n.label) {
										case 0:
											return [4, DotNet.invokeMethodAsync("Microsoft.AspNetCore.Blazor", "NotifyLocationChanged", e, t)];
										case 1:
											return n.sent(),
											[2]
										}
									})
								})
							}),
							[4, c.fetchBootConfigAsync()];
						case 1:
							t = y.sent(),
							n = c.loadEmbeddedResourcesAsync(t),
							t.linkerEnabled || console.info("Blazor is running in dev mode without IL stripping. To make the bundle size significantly smaller, publish the application or see https://go.microsoft.com/fwlink/?linkid=870414"),
							p = [t.main].concat(t.assemblyReferences).map(function (e) {
								return "_framework/_bin/" + e
							}),
							y.label = 2;
						case 2:
							return y.trys.push([2, 4, , 5]),
							[4, e.start(p)];
						case 3:
							window.Blazor.isStarted = true;
							return y.sent(),
							[3, 5];
						case 4:
							throw m = y.sent(),
							new Error("Failed to start platform. Reason: " + m);
						case 5:
							return [4, n];
						case 6:
							return y.sent(),
							h = u.getAssemblyNameFromUrl(t.main),
							e.callEntryPoint(h, t.entryPoint, []),
							[2]
						}
					})
				})
			}
			window.Blazor.isStarted = false,
			window.Blazor.start = p,
			c.shouldAutoStart() && p()
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r,
			o,
			a,
			i,
			u,
			l,
			s = n(33),
			c = n(47),
			f = {},
			d = {},
			p = {},
			m = "appBinDir",
			h = Math.pow(2, 32),
			v = Math.pow(2, 21) - 1;
			function y(e, t, n) {
				var a = "[" + e + "]" + t + "." + n,
				i = d[a];
				if (!i) {
					if (!(i = o(function (e) {
									var t = f[e];
									if (!t) {
										if (!(t = r(e)))
											throw new Error('Could not find assembly "' + e + '"');
											f[e] = t
										}
										return t
									}
										(e), t, n)))throw new Error('Could not find type "' + n + '" in namespace "' + t + '" in assembly "' + e + '"');
					d[a] = i
				}
				return i
			}
			function g(e, t, n, r) {
				var o = "[" + e + "]" + t + "." + n + "::" + r,
				i = p[o];
				if (!i) {
					if (!(i = a(y(e, t, n), r, -1)))
						throw new Error('Could not find method "' + r + '" on type "' + t + "." + n + '"');
					p[o] = i
				}
				return i
			}
			t.monoPlatform = {
				start: function (e) {
					return new Promise(function (n, f) {
						c.attachDebuggerHotkey(e),
						window.Browser = {
							init: function () {}
						},
						window.Module = function (e, n, f) {
							var d = {},
							p = ["DEBUGGING ENABLED"];
							return d.print = function (e) {
								return p.indexOf(e) < 0 && console.log("WASM: " + e)
							},
							d.printErr = function (e) {
								return console.error("WASM: " + e)
							},
							d.preRun = [],
							d.postRun = [],
							d.preloadPlugins = [],
							d.locateFile = function (e) {
								switch (e) {
								case "mono.wasm":
									return "_framework/wasm/mono.wasm";
								default:
									return e
								}
							},
							d.preRun.push(function () {
								var t = Module.cwrap("mono_wasm_add_assembly", null, ["string", "number", "number"]);
								r = Module.cwrap("mono_wasm_assembly_load", "number", ["string"]),
								o = Module.cwrap("mono_wasm_assembly_find_class", "number", ["number", "string", "string"]),
								a = Module.cwrap("mono_wasm_assembly_find_method", "number", ["number", "string", "number"]),
								i = Module.cwrap("mono_wasm_invoke_method", "number", ["number", "number", "number"]),
								u = Module.cwrap("mono_wasm_string_get_utf8", "number", ["number"]),
								l = Module.cwrap("mono_wasm_string_from_js", "number", ["string"]),
								MONO.loaded_files = [],
								e.forEach(function (e) {
									var n = s.getFileNameFromUrl(e),
									r = "blazor:" + n;
									addRunDependency(r),
									function (e) {
										return new Promise(function (t, n) {
											var r = new XMLHttpRequest;
											r.open("GET", e, !0),
											r.responseType = "arraybuffer",
											r.onload = function () {
												if (200 == r.status || 0 == r.status && r.response) {
													var e = new Uint8Array(r.response);
													t(e)
												} else
													n(r)
											},
											r.onerror = n,
											r.send(void 0)
										})
									}
									(e).then(function (o) {
										var a,
										i = Module._malloc(o.length);
										new Uint8Array(Module.HEAPU8.buffer, i, o.length).set(o),
										t(n, i, o.length),
										MONO.loaded_files.push((a = e, b.href = a, b.href)),
										removeRunDependency(r)
									}, function (e) {
										e instanceof XMLHttpRequest && 404 === e.status && n.match(/\.pdb$/) || f(e),
										removeRunDependency(r)
									})
								})
							}),
							d.postRun.push(function () {
								var e,
								r,
								o;
								MONO.mono_wasm_setenv("MONO_URI_DOTNETRELATIVEORABSOLUTE", "true"),
								Module.cwrap("mono_wasm_load_runtime", null, ["string", "number"])(m, c.hasDebuggingEnabled() ? 1 : 0),
								MONO.mono_wasm_runtime_is_ready = !0,
								e = g("Mono.WebAssembly.Interop", "Mono.WebAssembly.Interop", "MonoWebAssemblyJSRuntime", "InvokeDotNet"),
								r = g("Mono.WebAssembly.Interop", "Mono.WebAssembly.Interop", "MonoWebAssemblyJSRuntime", "BeginInvokeDotNet"),
								o = g("Mono.WebAssembly.Interop", "Mono.WebAssembly.Interop", "MonoWebAssemblyJSRuntime", "EndInvokeJS"),
								DotNet.attachDispatcher({
									beginInvokeDotNetFromJS: function (e, n, o, a, i) {
										if (!a && !n)
											throw new Error("Either assemblyName or dotNetObjectId must have a non null value.");
										var u = a ? a.toString() : n;
										t.monoPlatform.callMethod(r, null, [e ? t.monoPlatform.toDotNetString(e.toString()) : null, t.monoPlatform.toDotNetString(u), t.monoPlatform.toDotNetString(o), t.monoPlatform.toDotNetString(i)])
									},
									endInvokeJSFromDotNet: function (e, n, r) {
										t.monoPlatform.callMethod(o, null, [t.monoPlatform.toDotNetString(r)])
									},
									invokeDotNetFromJS: function (n, r, o, a) {
										var i = t.monoPlatform.callMethod(e, null, [n ? t.monoPlatform.toDotNetString(n) : null, t.monoPlatform.toDotNetString(r), o ? t.monoPlatform.toDotNetString(o.toString()) : null, t.monoPlatform.toDotNetString(a)]);
										return i ? t.monoPlatform.toJavaScriptString(i) : null
									}
								}),
								n()
							}),
							d
						}
						(e, n, f),
						function () {
							if ("undefined" == typeof WebAssembly || !WebAssembly.validate)
								throw new Error("This browser does not support WebAssembly.");
							var e = document.createElement("script");
							e.src = "_framework/wasm/mono.js",
							e.defer = !0,
							document.body.appendChild(e)
						}
						()
					})
				},
				findMethod: g,
				callEntryPoint: function (e, n, r) {
					var o = n.split("::");
					if (2 != o.length)
						throw new Error("Malformed entry point method name; could not resolve class name and method name.");
					var a = o[0],
					i = o[1],
					u = a.lastIndexOf("."),
					l = u > -1 ? a.substring(0, u) : "",
					s = u > -1 ? a.substring(u + 1) : a,
					c = t.monoPlatform.findMethod(e, l, s, i);
					t.monoPlatform.callMethod(c, null, r)
				},
				callMethod: function (e, n, r) {
					if (r.length > 4)
						throw new Error("Currently, MonoPlatform supports passing a maximum of 4 arguments from JS to .NET. You tried to pass " + r.length + ".");
					var o = Module.stackSave();
					try {
						for (var a = Module.stackAlloc(r.length), u = Module.stackAlloc(4), l = 0; l < r.length; ++l)
							Module.setValue(a + 4 * l, r[l], "i32");
						Module.setValue(u, 0, "i32");
						var s = i(e, n, a, u);
						if (0 !== Module.getValue(u, "i32"))
							throw new Error(t.monoPlatform.toJavaScriptString(s));
						return s
					}
					finally {
						Module.stackRestore(o)
					}
				},
				toJavaScriptString: function (e) {
					var t = u(e),
					n = Module.UTF8ToString(t);
					return Module._free(t),
					n
				},
				toDotNetString: function (e) {
					return l(e)
				},
				toUint8Array: function (e) {
					var t = w(e),
					n = Module.getValue(t, "i32");
					return new Uint8Array(Module.HEAPU8.buffer, t + 4, n)
				},
				getArrayLength: function (e) {
					return Module.getValue(w(e), "i32")
				},
				getArrayEntryPtr: function (e, t, n) {
					return w(e) + 4 + t * n
				},
				getObjectFieldsBaseAddress: function (e) {
					return e + 8
				},
				readInt16Field: function (e, t) {
					return Module.getValue(e + (t || 0), "i16")
				},
				readInt32Field: function (e, t) {
					return Module.getValue(e + (t || 0), "i32")
				},
				readUint64Field: function (e, t) {
					var n = e + (t || 0) >> 2,
					r = Module.HEAPU32[n + 1];
					if (r > v)
						throw new Error("Cannot read uint64 with high order part " + r + ", because the result would exceed Number.MAX_SAFE_INTEGER.");
					return r * h + Module.HEAPU32[n]
				},
				readFloatField: function (e, t) {
					return Module.getValue(e + (t || 0), "float")
				},
				readObjectField: function (e, t) {
					return Module.getValue(e + (t || 0), "i32")
				},
				readStringField: function (e, n) {
					var r = Module.getValue(e + (n || 0), "i32");
					return 0 === r ? null : t.monoPlatform.toJavaScriptString(r)
				},
				readStructField: function (e, t) {
					return e + (t || 0)
				}
			};
			var b = document.createElement("a");
			function w(e) {
				return e + 12
			}
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n(33),
			o = window.chrome && navigator.userAgent.indexOf("Edge") < 0,
			a = !1;
			function i() {
				return a && o
			}
			t.hasDebuggingEnabled = i,
			t.attachDebuggerHotkey = function (e) {
				a = e.some(function (e) {
						return /\.pdb$/.test(r.getFileNameFromUrl(e))
					});
				var t = navigator.platform.match(/^Mac/i) ? "Cmd" : "Alt";
				i() && console.info("Debugging hotkey: Shift+" + t + "+D (when application has focus)"),
				document.addEventListener("keydown", function (e) {
					var t;
					e.shiftKey && (e.metaKey || e.altKey) && "KeyD" === e.code && (a ? o ? ((t = document.createElement("a")).href = "_framework/debug?url=" + encodeURIComponent(location.href), t.target = "_blank", t.rel = "noopener noreferrer", t.click()) : console.error("Currently, only Chrome is supported for debugging.") : console.error("Cannot start debugging, because the application was not compiled with debugging enabled."))
				})
			}
		}, function (e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = n(9),
			o = function () {
				function e(e) {
					this.batchAddress = e,
					this.arrayRangeReader = a,
					this.arrayBuilderSegmentReader = i,
					this.diffReader = u,
					this.editReader = l,
					this.frameReader = s
				}
				return e.prototype.updatedComponents = function () {
					return r.platform.readStructField(this.batchAddress, 0)
				},
				e.prototype.referenceFrames = function () {
					return r.platform.readStructField(this.batchAddress, a.structLength)
				},
				e.prototype.disposedComponentIds = function () {
					return r.platform.readStructField(this.batchAddress, 2 * a.structLength)
				},
				e.prototype.disposedEventHandlerIds = function () {
					return r.platform.readStructField(this.batchAddress, 3 * a.structLength)
				},
				e.prototype.updatedComponentsEntry = function (e, t) {
					return c(e, t, u.structLength)
				},
				e.prototype.referenceFramesEntry = function (e, t) {
					return c(e, t, s.structLength)
				},
				e.prototype.disposedComponentIdsEntry = function (e, t) {
					var n = c(e, t, 4);
					return r.platform.readInt32Field(n)
				},
				e.prototype.disposedEventHandlerIdsEntry = function (e, t) {
					var n = c(e, t, 8);
					return r.platform.readUint64Field(n)
				},
				e
			}
			();
			t.SharedMemoryRenderBatch = o;
			var a = {
				structLength: 8,
				values: function (e) {
					return r.platform.readObjectField(e, 0)
				},
				count: function (e) {
					return r.platform.readInt32Field(e, 4)
				}
			},
			i = {
				structLength: 12,
				values: function (e) {
					var t = r.platform.readObjectField(e, 0),
					n = r.platform.getObjectFieldsBaseAddress(t);
					return r.platform.readObjectField(n, 0)
				},
				offset: function (e) {
					return r.platform.readInt32Field(e, 4)
				},
				count: function (e) {
					return r.platform.readInt32Field(e, 8)
				}
			},
			u = {
				structLength: 4 + i.structLength,
				componentId: function (e) {
					return r.platform.readInt32Field(e, 0)
				},
				edits: function (e) {
					return r.platform.readStructField(e, 4)
				},
				editsEntry: function (e, t) {
					return c(e, t, l.structLength)
				}
			},
			l = {
				structLength: 20,
				editType: function (e) {
					return r.platform.readInt32Field(e, 0)
				},
				siblingIndex: function (e) {
					return r.platform.readInt32Field(e, 4)
				},
				newTreeIndex: function (e) {
					return r.platform.readInt32Field(e, 8)
				},
				moveToSiblingIndex: function (e) {
					return r.platform.readInt32Field(e, 8)
				},
				removedAttributeName: function (e) {
					return r.platform.readStringField(e, 16)
				}
			},
			s = {
				structLength: 36,
				frameType: function (e) {
					return r.platform.readInt16Field(e, 4)
				},
				subtreeLength: function (e) {
					return r.platform.readInt32Field(e, 8)
				},
				elementReferenceCaptureId: function (e) {
					return r.platform.readStringField(e, 16)
				},
				componentId: function (e) {
					return r.platform.readInt32Field(e, 12)
				},
				elementName: function (e) {
					return r.platform.readStringField(e, 16)
				},
				textContent: function (e) {
					return r.platform.readStringField(e, 16)
				},
				markupContent: function (e) {
					return r.platform.readStringField(e, 16)
				},
				attributeName: function (e) {
					return r.platform.readStringField(e, 16)
				},
				attributeValue: function (e) {
					return r.platform.readStringField(e, 24)
				},
				attributeEventHandlerId: function (e) {
					return r.platform.readUint64Field(e, 8)
				}
			};
			function c(e, t, n) {
				return r.platform.getArrayEntryPtr(e, t, n)
			}
		}
	]);