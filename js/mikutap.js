$(function() {
  (new MainManager).init()
});
var MainManager = function() {
    function I() {
      a = aidn.window.width();
      e = aidn.window.height();
      O && (O.resize(a, e), P && P.resize())
    }

    function J(a, e) {
      e = da.length + Q.length;
      1 == R && (a += Q.length);
      var u = Math.round(a / e * 100) + "%";
      0 >= e && (u = "0%");
      $("#scene_loading hr").css("width", u)
    }

    function z() {
      R++;
      1 == R ? da.init(z, J) : 2 == R && A()
    }

    function A() {
      S = 1;
      $("#scene_loading hr").css("display", "none");
      $("#scene_loading hr").css("width", 0);
      $("#scene_loading").stop().fadeOut(200, "linear");
      W ? ($("#scene_loading").stop().css("display", "none"),
        $("#bt_back").stop().css("display", "none"), ea && $("#bt_fs").stop().css("display", "none"), $("#scene_main .set").stop().css("display", "none")) : $("#scene_main").stop().fadeIn(200, "linear");
      Y = aidn.___waContext.currentTime;
      P.start();
      Q.start()
    }

    function L(a) {
      (Z = !Z) ? ($("#bt_backtrack a").text("背景音乐: 开启"),
        aidn.util.setCookie("bt", "on", 2592E3)) : ($("#bt_backtrack a").text("背景音乐: 关闭"), aidn.util.setCookie("bt", "off", 2592E3));
      a && a.preventDefault()
    }

    function M() {
      Q.update();
      1 == S && 0 > --na && T();
      if (W && 1 == S) {
        var a = 1E3 * (aidn.___waContext.currentTime - Y);
        if (F * u < a) {
          var e = Math.floor(a / u) + 1;
          p += e - F;
          F = e;
          if (0 <= F * u - a)
            for (e = Math.random(), a = 1, 192 <= p ? p = 0 : 128 <= p ? (.7 > e && (a = 2), .5 > e && (a = 3)) : 64 <= p ? (.35 > e && (a = 2), .2 > e && (a = 3), .02 > e && (a = 0)) : 32 <= p ? (.35 > e && (a = 2), .24 > e && (a = 0)) : 0 <= p && .4 > e && (a = 0), e = 0; e < a; e++) fa = X[V], V++, 32 <= V && (V =
              0, aidn.util.shuffleArray(X)), P.changeId(fa, 0, !0)
        }
      }
      O.render(ga);
      window.requestAnimFrame(M)
    }

    function T() {
      W || ha || (ha = !0, $("#bt_back").stop().fadeIn(200, "linear"), ea && $("#bt_fs").stop().fadeIn(200, "linear"), $("#scene_main .set").stop().fadeIn(200, "linear"))
    }
    aidn.util.useDummyDiv();
    this.init = function() {
      aidn.window.addDummyDiv();
      var ma = 1;
      2 <= window.devicePixelRatio && (ma = 2);
      O = PIXI.autoDetectRenderer(a, e, {
        backgroundColor: 16756655,
        antialias: !1,
        resolution: ma
      });
      O.autoResize = !0;
      document.getElementById("view").appendChild(O.view);
      ga = new PIXI.Container;
      P.init();
      I();
      $("#scene_top").fadeIn(300);
      M()
    };
    for (var F = 0, u = 6E4 / 280, fa = Math.floor(32 * Math.random()), p = 0, X = [], V = 0, x = 0; 32 > x; x++) X[x] = x;
    var W = !1;
    1 == aidn.util.getQuery().auto && (W = !0);
    aidn.util.needExpandArea(!0);
    var ea = aidn.util.enabledFullscreen();
    ea && ($("#bt_fs").css("display", "block"), $("#bt_fs").click(function(a) {
      aidn.util.fullscreen()
    }));
    $("#bt_start a").click(function(a) {
      $("#scene_top").stop().fadeOut(200, "linear");
      $("#scene_loading").stop().fadeIn(200, "linear");
      2 == R ? A() : ((new aidn.WebAudio).load(""),
        Q.init(z, J));
      a.preventDefault()
    });
    $("#bt_about a").click(function(a) {
      $("#about").stop().fadeIn(200, "linear");
      $("#about_cover").stop().fadeIn(200, "linear");
      a.preventDefault()
    });
    $("#bt_close,#about_cover").click(function() {
      $("#about").stop().fadeOut(200, "linear");
      $("#about_cover").stop().fadeOut(200, "linear")
    });
    $("#bt_back").click(function() {
      switch (S) {
        case 1:
          S = 0;
          P.end();
          Q.end();
          $("#scene_top").stop().fadeIn(100, "linear");
          $("#scene_loading").stop().fadeOut(100, "linear");
          $("#scene_main").stop().fadeOut(100,
            "linear");
          T();
          break;
        default:
          location.href = "https://github.com/HFIProgramming/mikutap"
      }
    });
    
    $("#bt_backtrack a").click(L);
    var x = aidn.util.checkJapanese(),
      ba = aidn.util.checkMobile(),
      aa = "Mikutap",
      aa = x ? aa + ",\u521d\u97f3\u30df\u30af10\u5468\u5e74" : aa + ",Miku10th";
    $("#bt_tw").click(function(a) {
      aidn.social.shareTw("https://aidn.jp/mikutap/", !0, document.title, "daniwell_aidn", aa)
    });
    $("#bt_fb").click(function(a) {
      aidn.social.shareFb("https://aidn.jp/mikutap/", !0)
    });
    $("#bt_gp").click(function(a) {
      aidn.social.shareGp("https://aidn.jp/mikutap/", !0)
    });
    var a, e, R = 0,
      Y, S = 0,
      O, ga, Q = new function() {
        function a() {
          G && G()
        }

        function e(a, r) {
          ja && ja(a, r)
        }
        this.init = function(r, v) {
          ja = v;
          G = r;
          for (var t = [], p = 0; p < ka; p++) t[p] = [p + ".mp3"];
          u = new WebAudioManager;
          u.load("data/track/track.json", t, a, e)
        };
        this.update = function() {
          if (p) {
            var a = 1E3 * (aidn.___waContext.currentTime - Y);
            if (U * la < a && (U = Math.floor(a / la) + 1, a = U * la - a, 0 <= a && Z))
              for (var e = (U - 1) % x, r = v.length, t = 0; t < r; t++) {
                var G = v[t][e];
                0 <= G && u.play(G, a / 1E3, E[G])
              }
          }
        };
        this.start = function() {
          p = !0;
          U = 0
        };
        this.end = function() {
          p = !1;
          U = 0
        };
        var u, p = !1,
          ka = 11;
        this.length = ka;
        for (var E = [], r = 0; r < ka; r++) E[r] = 1.2;
        E[1] *= .6;
        var v = [
            [0, 1, 2, 1],
            []
          ],
          t;
        t = "34434434434434345665665665665656";
        t += "7887887887887878";
        t += "9119119119119191";
        for (var z = t.length, r = 0; r < z; r++) {
          var A = parseInt(t.charAt(r));
          1 == A && (A = 10);
          v[1][r] = A;
          4 <= r && (v[0][r] = v[0][r % 4])
        }
        var x = v[0].length,
          U = 0,
          la = 6E4 / 280,
          G, ja
      },
      da = new function() {
        function a() {
          x && x()
        }

        function e(a, r) {
          F && F(a, r)
        }
        var p = -1,
          u = -1;
        this.init = function(r, v) {
          F = v;
          x = r;
          for (var t = [], p = 0; p < E; p++) t[p] = [p + ".mp3"];
          A = new WebAudioManager;
          A.load("data/main/main.json", t, a, e)
        };
        this.play = function(a, e) {
          var t = 1E3 * (aidn.___waContext.currentTime + v[a] - Y),
            x = Math.floor(t / z);
          x == p && 0 <= u && A.stop(u);
          p = x;
          u = a;
          A.play(a, (z - t % z) / 1E3, r[a])
        };
        var A, E = 32;
        this.length = E;
        for (var r = [], v = [], t = 0; t < E; t++) r[t] = 1, v[t] = .05;
        v[6] = .08;
        v[20] = .1;
        v[23] = .1;
        r[1] = 1.3;
        r[2] = 1.6;
        r[3] = 1.35;
        r[5] = 1.7;
        r[9] = .8;
        r[17] = .8;
        r[22] = .9;
        r[25] = .7;
        r[29] = 1.2;
        for (t = 0; t < E; t++) r[t] *= 1.2;
        var z = 6E4 / 280,
          x, F
      },
      P = new function() {
        function p(a, g) {
          for (var e = I.length, f = 0; f < e; f++) {
            var b = I[f];
            if (b.hitcheck(a,
                g)) return G != b.id && b.play(), b.id
          }
          return !1
        }

        function u(a) {
          var g = -1,
            g = 65 <= a.keyCode ? a.keyCode - 55 : 48 <= a.keyCode ? a.keyCode - 48 : a.keyCode;
          r(g)
        }

        function A(a) {
          r(-1)
        }

        function x(a) {
          M = !0;
          var g = aidn.event.getPos(a),
            e = p(g.x, g.y);
          r(e);
          if (a.originalEvent && a.originalEvent.touches)
            for (var g = a.originalEvent.touches.length, f = 1; f < g; f++) e = a.originalEvent.touches[f], e = p(e.pageX, e.pageY), r(e, 1)
        }

        function z(a) {
          if (M) {
            var e = aidn.event.getPos(a),
              e = p(e.x, e.y);
            r(e, 0, !0)
          }
          a.preventDefault()
        }

        function E(a) {
          M && (r(-1), M = !1)
        }

        function r(a,
          e, q) {
          G != a && (1 != e && (G = a), 0 > G || (da.play(a % da.length, q), na = 90, ha && (ha = !1, $("#bt_back").stop().fadeOut(200, "linear"), ea && $("#bt_fs").stop().fadeOut(200, "linear"), $("#scene_main .set").stop().fadeOut(200, "linear")), S--, 0 >= S && (e = Math.floor(R.length * Math.random()), q = e + J.length, e = C[q].length ? C[q].pop() : new R[e](L, q), e.play(), S = 12 * Math.random() + 6), e = a % J.length, e = 0 < C[e].length ? C[e].pop() : new J[e](L, e), e.play()))
        }

        function v() {
          var a = Math.random();
          return .03 > a ? 4473924 : .18 > a ? 16777215 : Y[t()]
        }

        function t() {
          for (var a =
              0; 10 > a; a++) {
            var e = Math.floor(aa * Math.random());
            if (2 < Math.abs(Z - e)) break
          }
          return e
        }
        var F = function(a, e) {
            this.id = a;
            this.setPosition = function(a, d) {
              c.position.x = q = a;
              c.position.y = f = d
            };
            this.setSize = function(a, e) {
              b = a;
              d = e;
              c.clear();
              c.beginFill(16777215);
              c.alpha = 0;
              c.drawRect(0, 0, b, d)
            };
            this.play = function() {
              ia && TweenLite.fromTo(c, .5, {
                alpha: .7
              }, {
                alpha: 0,
                ease: Power0.easeNon
              })
            };
            this.hitcheck = function(a, c) {
              return q <= a && a < q + b && f <= c && c < f + d
            };
            var q = 0,
              f = 0,
              b = 0,
              d = 0,
              c = new PIXI.Graphics;
            c.interactive = !0;
            e.addChild(c)
          },
          fa =
          function(m) {
            function g() {
              d.clear();
              d.beginFill(16777215);
              d.drawRect(0, 0, a, e)
            }

            function q() {
              f.resize()
            }
            this.resize = function() {
              d.clear();
              d.beginFill(b);
              d.drawRect(0, 0, a, e)
            };
            this.flash = function() {
              c.setChildIndex(d, c.children.length - 1);
              for (var a = 0; 3 > a; a += 2) TweenLite.delayedCall(.07 * a, g), TweenLite.delayedCall(.07 * (a + 1), q)
            };
            this.setColor = function(a, e) {
              b = a;
              0 <= e || (e = 0);
              c.setChildIndex(d, e);
              f.resize()
            };
            var f = this,
              b = 16777215,
              d = new PIXI.Graphics,
              c = m;
            c.addChild(d)
          },
          O = function(a, e) {
            function q() {
              var a = 1.3 * y;
              n.clear();
              n.beginFill(0);
              n.moveTo(0, 0);
              var e, b;
              if (0 == d)
                for (var k = 0; k < c.rotation; k += 30) e = (l * k + B) * Math.PI / 180, b = Math.cos(e) * a, e = Math.sin(e) * a, n.lineTo(b, e);
              else
                for (k = 360; c.rotation < k; k -= 30) e = (l * k + B) * Math.PI / 180, b = Math.cos(e) * a, e = Math.sin(e) * a, n.lineTo(b, e);
              e = (l * c.rotation + B) * Math.PI / 180;
              b = Math.cos(e) * a;
              e = Math.sin(e) * a;
              n.lineTo(b, e);
              n.lineTo(0, 0);
              n.endFill()
            }

            function f() {
              d = 1;
              TweenLite.fromTo(c, .9, {
                rotation: 0
              }, {
                rotation: 360,
                ease: Power1.easeOut,
                onUpdate: q,
                onComplete: b
              })
            }

            function b() {
              h && h()
            }
            this.play = function(a,
              e) {
              d = 0;
              y = a;
              h = e;
              B = 360 * Math.random();
              l = 1;
              .5 > Math.random() && (l = -1);
              n.clear();
              n.beginFill(0);
              n.moveTo(0, 0);
              n.lineTo(1, 1);
              n.endFill();
              TweenLite.fromTo(c, .6, {
                rotation: 0
              }, {
                rotation: 360,
                ease: Power1.easeOut,
                onUpdate: q,
                onComplete: f
              })
            };
            var d, c = {
                rotation: 0
              },
              h, B, l, y, n = new PIXI.Graphics;
            a.addChild(n);
            e.mask = n
          },
          U = function(m) {
            function g() {
              l.clear();
              0 == d ? l.lineStyle(h, c) : l.beginFill(c);
              for (var a = 0; a < B; a++) {
                var e = y["p" + a].x,
                  b = y["p" + a].y;
                0 == a ? l.moveTo(e, b) : l.lineTo(e, b)
              }
              e = y.p0.x;
              b = y.p0.y;
              l.lineTo(e, b)
            }

            function q() {
              l.visible = !1;
              b && b()
            }
            this.play = function(n, w) {
              d = n;
              b = w;
              f.setChildIndex(l, f.children.length - 1);
              l.visible = !0;
              l.x = a / 2;
              l.y = e / 2;
              c = v();
              var N = Math.min(a, e) * (.32 * Math.random() + .16);
              B = Math.floor(5 * Math.random()) + 3;
              h = 5 * Math.random() + 3;
              l.clear();
              l.rotation = 30 * Math.floor(6 * Math.random());
              y = {};
              var D;
              D = 0 == d ? 3 : 2.5;
              for (var k = 360 / B, H = 0; H < B; H++) {
                var m = H * k * Math.PI / 180,
                  r = N * Math.cos(m),
                  m = N * Math.sin(m),
                  p = r + N * (Math.random() - .5) * D,
                  t = m + N * (Math.random() - .5) * D;
                y["p" + H] = {
                  x: r,
                  y: m
                };
                TweenLite.to(y["p" + H], .6, {
                  x: p,
                  y: t
                })
              }
              y.progress = 0;
              TweenLite.to(y,
                .8, {
                  progress: 1,
                  onUpdate: g,
                  onComplete: q
                })
            };
            var f = m,
              b, d, c, h, B, l = new PIXI.Graphics;
            f.addChild(l);
            var y = {}
          },
          P = function(m, g) {
            function q() {
              c.visible = !1;
              0 <= b.id && C[b.id].push(b);
              B && B()
            }
            var f = function(a) {
              function e() {
                d.clear();
                d.lineStyle(B, f);
                d.moveTo(k.x, k.y);
                0 == m ? d.lineTo(b.x, b.y) : d.lineTo(h.x, h.y)
              }

              function c() {
                0 == m ? (m = 1, k = {
                  x: b.x,
                  y: b.y
                }, TweenLite.to(k, g, {
                  x: h.x,
                  y: h.y,
                  ease: Power1.easeOut,
                  onUpdate: e,
                  onComplete: c
                })) : (d.clear(), d.visible = !1)
              }
              this.play = function(a, l, r, p) {
                d.visible = !0;
                m = 0;
                b = a;
                h = l;
                B = r;
                f = p;
                q = .2 *
                  Math.random() + .2;
                g = .2 * Math.random() + .2;
                k = {
                  x: b.x,
                  y: b.y
                };
                TweenLite.to(k, q, {
                  x: h.x,
                  y: h.y,
                  ease: Power1.easeOut,
                  onUpdate: e,
                  onComplete: c
                });
                return q + g
              };
              var d = new PIXI.Graphics;
              a.addChild(d);
              var b, h, k, B, f, q, g, m
            };
            this.play = function(l) {
              B = l;
              d.setChildIndex(c, d.children.length - 1);
              c.visible = !0;
              c.x = a / 2;
              c.y = e / 2;
              c.rotation = .5 * Math.PI * Math.floor(4 * Math.random());
              l = Math.floor(7 * Math.random() + 2);
              var y = .8 * Math.min(a, e);
              b.size = y;
              for (var n = y / l * (.4 * Math.random() + .7), w = y / l * (.4 * Math.random() + .1), N = v(), D, k = 0, H = 0; H <= l; H++) {
                D =
                  (H - .5 * l) * n;
                var g = {
                    x: -y / 2,
                    y: D
                  },
                  m = {
                    x: y / 2,
                    y: D
                  };
                D = h[H] ? h[H] : new f(c);
                g = D.play(g, m, w, N);
                k < g && (k = g);
                h[H] = D
              }
              TweenLite.delayedCall(k, q)
            };
            var b = this,
              d = m;
            this.id = g;
            var c = new PIXI.Container,
              h = [],
              B;
            this.size = 0;
            this.container = c;
            d.addChild(c)
          };
        this.resize = function() {
          if (T) {
            var m = 0,
              g = Q,
              q = K;
            e < a && (g = K, q = Q);
            for (var f = a / g, b = e / q, d = 0; d < q; d++)
              for (var c = 0; c < g; c++) {
                var h;
                I[m] ? h = I[m] : (h = new F(m, V), I[m] = h);
                h.setPosition(f * c, b * d);
                h.setSize(f, b);
                m++
              }
            ca.resize()
          }
        };
        this.init = function() {
          T = !0;
          L = new PIXI.Container;
          ga.addChild(L);
          V = new PIXI.Container;
          ga.addChild(V);
          ca = new fa(L);
          ca.setColor(8965324, 0)
        };
        this.start = function() {
          ba || ($("#view").on("mousedown", x), $(window).on("mousemove", z), $(window).on("mouseup", E), $(window).on("keydown", u), $(window).on("keyup", A));
          if (ba || window.TouchEvent) $("#view").on("touchstart", x), $(window).on("touchmove", z), $(window).on("touchend", E);
          $("#view").css("cursor", "pointer")
        };
        this.end = function() {
          ba || ($("#view").off("mousedown", x), $(window).off("mousemove", z), $(window).off("mouseup", E), $(window).off("keydown",
            u), $(window).off("keyup", A));
          if (ba || window.TouchEvent) $("#view").off("touchstart", x), $(window).off("touchmove", z), $(window).off("touchend", E);
          $("#view").css("cursor", "auto")
        };
        this.changeId = function(a, e, q) {
          r(a, e, q)
        };
        var G = -1,
          Q = 4,
          K = 8,
          M = !1,
          T = !1,
          V, I = [],
          J = [function(m, g) {
            function q() {
              h.visible = !1;
              C[b.id].push(b)
            }
            var f = function(c) {
              function d() {
                b.visible = !1
              }
              this.play = function(c, w, h) {
                b.visible = !0;
                b.clear();
                var B = a * Math.random(),
                  k = e * Math.random(),
                  f = Math.min(a, e) * (.03 * Math.random() + .02);
                b.lineStyle(3 * Math.random() +
                  3, h);
                b.drawCircle(0, 0, f);
                b.x = c;
                b.y = w;
                b.scale.x = 0;
                b.scale.y = 0;
                b.rotation = Math.random() * Math.PI;
                c = .2 * Math.random() + .4;
                TweenLite.to(b, c, {
                  x: B,
                  y: k,
                  rotation: Math.random() * Math.PI,
                  ease: Power3.easeOut,
                  onComplete: d
                });
                TweenLite.to(b.scale, c, {
                  x: 1,
                  y: 1,
                  ease: Back.easeOut.config(1.7)
                });
                return c
              };
              var b = new PIXI.Graphics;
              c.addChild(b)
            };
            this.play = function() {
              d.setChildIndex(h, d.children.length - 1);
              h.visible = !0;
              for (var b = 5 * Math.random() + 7, l = 0, y = a / 2, n = e / 2, w = v(), N = 0; N < b; N++) {
                var D = (c[N] ? c[N] : new f(h)).play(y, n, w);
                l < D &&
                  (l = D)
              }
              TweenLite.delayedCall(l, q)
            };
            var b = this,
              d = m;
            this.id = g;
            var c = [],
              h = new PIXI.Container;
            d.addChild(h)
          }, function(m, g) {
            function q() {
              h.visible = !1;
              C[b.id].push(b)
            }
            var f = function(c) {
              function b() {
                d.visible = !1
              }
              this.play = function(c, w, h) {
                d.visible = !0;
                d.clear();
                var B = a * Math.random(),
                  k = e * Math.random(),
                  f = Math.min(a, e) * (.04 * Math.random() + .02);
                d.beginFill(h);
                d.drawRect(-f / 2, -f / 2, f, f);
                d.x = c;
                d.y = w;
                d.scale.x = 0;
                d.scale.y = 0;
                d.rotation = Math.random() * Math.PI;
                c = .2 * Math.random() + .4;
                TweenLite.to(d, c, {
                  x: B,
                  y: k,
                  rotation: Math.random() *
                    Math.PI,
                  ease: Power3.easeOut,
                  onComplete: b
                });
                TweenLite.to(d.scale, c, {
                  x: 1,
                  y: 1,
                  ease: Back.easeOut.config(1.7)
                });
                return c
              };
              var d = new PIXI.Graphics;
              c.addChild(d)
            };
            this.play = function() {
              d.setChildIndex(h, d.children.length - 1);
              h.visible = !0;
              for (var b = 5 * Math.random() + 7, l = 0, y = a / 2, n = e / 2, w = v(), g = 0; g < b; g++) {
                var D = (c[g] ? c[g] : new f(h)).play(y, n, w);
                l < D && (l = D)
              }
              TweenLite.delayedCall(l, q)
            };
            var b = this,
              d = m;
            this.id = g;
            var c = [],
              h = new PIXI.Container;
            d.addChild(h)
          }, function(m, g) {
            function q() {
              h.visible = !1;
              C[b.id].push(b)
            }
            var f =
              function(a) {
                function c() {
                  k.beginFill(b);
                  k.drawCircle(0, 0, h);
                  k.scale.x = 0;
                  k.scale.y = 0;
                  TweenLite.to(k.scale, .7, {
                    x: 1,
                    y: 1,
                    ease: Elastic.easeOut.config(1, .3),
                    onComplete: d
                  })
                }

                function d() {
                  TweenLite.to(k.scale, .4, {
                    x: 0,
                    y: 0,
                    ease: Power2.easeOut,
                    onComplete: e,
                    delay: .1
                  })
                }

                function e() {
                  k.visible = !1;
                  f && f()
                }
                this.play = function(a, d, e, n, B, y) {
                  k.visible = !0;
                  k.clear();
                  k.x = n;
                  k.y = B;
                  b = d;
                  h = e;
                  f = y;
                  TweenLite.delayedCall(a, c)
                };
                var b, h, f, k = new PIXI.Graphics;
                a.addChild(k)
              };
            this.play = function() {
              d.setChildIndex(h, d.children.length - 1);
              h.visible = !0;
              h.x = a / 2;
              h.y = e / 2;
              h.rotation = Math.random() * Math.PI * 2;
              for (var b = 10, l = v(), y = Math.min(a, e) / 64 * (.6 * Math.random() + .7), n = 2, w = 0; 40 > w; w++) {
                var g = 25 * w * Math.PI / 180,
                  D = b * Math.cos(g),
                  g = b * Math.sin(g),
                  b = b + y,
                  n = n + .22,
                  k;
                k = c[w] ? c[w] : new f(h);
                var m = null;
                39 == w && (m = q);
                k.play(.03 * w, l, n, D, g, m)
              }
            };
            var b = this,
              d = m;
            this.id = g;
            var c = [],
              h = new PIXI.Container;
            d.addChild(h)
          }, function(a, e) {
            function q() {
              C[f.id].push(f)
            }
            this.play = function() {
              b.play(0, q)
            };
            var f = this;
            this.id = e;
            var b = new U(a)
          }, function(a, e) {
            function q() {
              C[f.id].push(f)
            }
            this.play = function() {
              b.play(1, q)
            };
            var f = this;
            this.id = e;
            var b = new U(a)
          }, function(m, g) {
            function q() {
              d.visible = !1;
              C[f.id].push(f)
            }
            this.play = function() {
              b.setChildIndex(d, b.children.length - 1);
              d.visible = !0;
              d.x = a / 2;
              d.y = e / 2;
              var f = v(),
                l = Math.min(a, e) * (.28 * Math.random() + .2),
                y = Math.floor(5 * Math.random()) + 3;
              c.clear();
              c.lineStyle(7 * Math.random() + 4, f, 1);
              c.rotation = 30 * Math.floor(6 * Math.random());
              for (var f = 360 / y, n = 0; n <= y; n++) {
                var w = n * f * Math.PI / 180,
                  g = l * Math.cos(w),
                  w = l * Math.sin(w);
                0 == n ? c.moveTo(g, w) : c.lineTo(g, w)
              }
              y =
                .8 * Math.random() + .4;
              f = .8 * Math.random() + .4;
              TweenLite.fromTo(c.scale, .9, {
                x: y,
                y: y
              }, {
                x: f,
                y: f,
                ease: Bounce.easeOut
              });
              h.play(l, q)
            };
            var f = this,
              b = m;
            this.id = g;
            var d = new PIXI.Container,
              c = new PIXI.Graphics;
            b.addChild(d);
            d.addChild(c);
            var h = new O(d, c)
          }, function(m, g) {
            function q() {
              c.visible = !1;
              C[b.id].push(b)
            }
            var f = function(c) {
              function d() {
                var c = Math.min(a, e),
                  l = c * (.08 * Math.random() + .05);
                k.lineStyle(4 * Math.random() + 4, v());
                k.drawRect(-l / 2, -l / 2, l, l);
                k.x = f + c / 2 * (Math.random() - .5);
                k.y = g + c / 2 * (Math.random() - .5);
                k.scale.x =
                  0;
                k.scale.y = 0;
                k.rotation = Math.random() * Math.PI;
                TweenLite.to(k, .5, {
                  x: f,
                  y: g,
                  rotation: 0,
                  ease: Back.easeOut.config(1.7),
                  onComplete: b
                });
                TweenLite.to(k.scale, .5, {
                  x: 1,
                  y: 1,
                  ease: Back.easeOut.config(1.7)
                })
              }

              function b() {
                var c = Math.min(a, e),
                  d = f + c / 2 * (Math.random() - .5),
                  c = g + c / 2 * (Math.random() - .5);
                TweenLite.to(k, .5, {
                  x: d,
                  y: c,
                  rotation: -Math.random() * Math.PI,
                  ease: Back.easeIn.config(1.7),
                  onComplete: h,
                  delay: .2
                });
                TweenLite.to(k.scale, .5, {
                  x: 0,
                  y: 0,
                  ease: Back.easeIn.config(1.7),
                  delay: .2
                })
              }

              function h() {
                k.visible = !1;
                w && w
              }
              this.play =
                function(c, b) {
                  w = b;
                  k.visible = !0;
                  k.clear();
                  f = a * Math.random();
                  g = e * Math.random();
                  TweenLite.delayedCall(c, d)
                };
              var w, f, g, k = new PIXI.Graphics;
              c.addChild(k)
            };
            this.play = function() {
              d.setChildIndex(c, d.children.length - 1);
              c.visible = !0;
              for (var a = Math.floor(5 * Math.random() + 5), b = 0; b < a; b++) {
                var e;
                e = h[b] ? h[b] : new f(c);
                var n = null;
                b == a - 1 && (n = q);
                e.play(.06 * b, n)
              }
            };
            var b = this,
              d = m;
            this.id = g;
            var c = new PIXI.Container;
            d.addChild(c);
            var h = []
          }, function(m, g) {
            function q() {
              c.visible = !1;
              C[b.id].push(b)
            }
            var f = function(c) {
              function b() {
                var c =
                  Math.min(a, e) * (.05 * Math.random() + .014);
                k.beginFill(v());
                k.drawCircle(0, 0, c);
                k.x = f;
                k.y = g;
                k.scale.x = 0;
                k.scale.y = 0;
                TweenLite.to(k.scale, .5, {
                  x: 1,
                  y: 1,
                  ease: Elastic.easeOut.config(1, .3),
                  onComplete: d
                })
              }

              function d() {
                TweenLite.to(k.scale, .5, {
                  x: 0,
                  y: 0,
                  ease: Back.easeIn.config(1.7),
                  onComplete: h,
                  delay: .2
                })
              }

              function h() {
                k.visible = !1;
                w && w
              }
              this.play = function(c, d) {
                w = d;
                k.visible = !0;
                k.clear();
                f = a * Math.random();
                g = e * Math.random();
                TweenLite.delayedCall(c, b)
              };
              var w, f, g, k = new PIXI.Graphics;
              c.addChild(k)
            };
            this.play = function() {
              d.setChildIndex(c,
                d.children.length - 1);
              c.visible = !0;
              for (var a = Math.floor(5 * Math.random() + 5), b = 0; b < a; b++) {
                var e;
                e = h[b] ? h[b] : new f(c);
                var n = null;
                b == a - 1 && (n = q);
                e.play(.06 * b, n)
              }
            };
            var b = this,
              d = m;
            this.id = g;
            var c = new PIXI.Container;
            d.addChild(c);
            var h = []
          }, function(m, g) {
            function q() {
              d.visible = !1;
              C[f.id].push(f)
            }
            this.play = function() {
              d.visible = !0;
              b.setChildIndex(d, b.children.length - 1);
              h.container.mask = c;
              h.play(q);
              var f = h.size / 2;
              c.x = a / 2;
              c.y = e / 2;
              c.clear();
              c.beginFill(0);
              c.drawCircle(0, 0, f);
              var f = 45 * Math.PI / 180 * Math.floor(2 * Math.random()),
                l = f + 45 * Math.PI / 180 * Math.floor(4 * Math.random() - 2),
                g = .3 * Math.random() + 1,
                n = .3 * -Math.random() + 1;
              TweenLite.fromTo(h.container, .6, {
                rotation: f
              }, {
                rotation: l,
                ease: Power2.easeOut
              });
              TweenLite.fromTo(h.container.scale, .6, {
                x: g,
                y: g
              }, {
                x: n,
                y: n,
                ease: Back.easeOut.config(1.7)
              });
              TweenLite.fromTo(c.scale, .6, {
                x: g,
                y: g
              }, {
                x: n,
                y: n,
                ease: Back.easeOut.config(1.7)
              })
            };
            var f = this,
              b = m;
            this.id = g;
            var d = new PIXI.Container;
            b.addChild(d);
            var c = new PIXI.Graphics;
            d.addChild(c);
            var h = new P(d, -1)
          }, function(m, g) {
            function q() {
              d.visible = !1;
              C[f.id].push(f)
            }
            this.play = function() {
              b.setChildIndex(d, b.children.length - 1);
              d.clear();
              d.visible = !0;
              d.lineStyle(5 * Math.random() + 3, v(), 1);
              d.x = a / 2;
              d.y = e / 2;
              for (var c = .6 * Math.min(a, e), h = Math.floor(5 * Math.random()) + 3, f = 360 / h, l = .5 * Math.max(a, e) / c * (1.6 + .6 / h), g = 0; g <= h; g++) {
                var n = g * f * Math.PI / 180,
                  w = c * Math.cos(n),
                  n = c * Math.sin(n);
                0 == g ? d.moveTo(w, n) : d.lineTo(w, n)
              }
              c = .3 * Math.random() + .6;
              TweenLite.fromTo(d.scale, c, {
                x: 0,
                y: 0
              }, {
                x: l,
                y: l,
                onComplete: q,
                ease: Power2.easeOut
              });
              TweenLite.fromTo(d, c, {
                rotation: Math.random() * Math.PI
              }, {
                rotation: Math.random() * Math.PI,
                ease: Power1.easeOut
              })
            };
            var f = this,
              b = m;
            this.id = g;
            var d = new PIXI.Graphics;
            b.addChild(d)
          }, function(m, g) {
            function q() {
              d.visible = !1;
              C[f.id].push(f)
            }
            this.play = function() {
              b.setChildIndex(d, b.children.length - 1);
              d.visible = !0;
              d.x = a / 2;
              d.y = e / 2;
              var f = v(),
                l = Math.min(a, e) * (.25 * Math.random() + .1);
              c.clear();
              c.beginFill(f);
              c.drawCircle(0, 0, l);
              h.play(l, q)
            };
            var f = this,
              b = m;
            this.id = g;
            var d = new PIXI.Container,
              c = new PIXI.Graphics;
            b.addChild(d);
            d.addChild(c);
            var h = new O(d, c)
          }, function(m, g) {
            function q() {
              c.visible = !1;
              C[b.id].push(b)
            }
            var f = function(a) {
              function b() {
                TweenLite.to(f.scale, .4, {
                  x: 0,
                  y: 0,
                  ease: Back.easeIn.config(2),
                  onComplete: d,
                  delay: .7
                });
                TweenLite.to(f, .4, {
                  rotation: Math.random() * Math.PI * 2,
                  ease: Back.easeIn.config(2),
                  delay: .7
                })
              }

              function d() {
                f.visibloe = !1;
                e && e()
              }
              this.init = function(a, c, b, d) {
                _state = 0;
                h = b;
                g = d;
                f.x = a;
                f.y = c
              };
              this.play = function(a, d) {
                e = d;
                f.clear();
                f.visibloe = !0;
                f.beginFill(g);
                f.drawRect(.5 * -h, .5 * -h, h, h);
                TweenLite.fromTo(f.scale, .3, {
                  x: 0,
                  y: 0
                }, {
                  x: 1,
                  y: 1,
                  ease: Back.easeOut.config(1.7),
                  onComplete: b,
                  delay: a
                });
                TweenLite.fromTo(f, .7, {
                  rotation: Math.random() * Math.PI * 2
                }, {
                  rotation: 0,
                  ease: Elastic.easeOut.config(1, .3),
                  delay: a
                });
                var q = Math.random() * Math.PI;
                TweenLite.fromTo(c, 1, {
                  rotation: 0
                }, {
                  rotation: q,
                  ease: Bounce.easeOut,
                  delay: a
                })
              };
              var e, f = new PIXI.Graphics;
              a.addChild(f);
              var h, g
            };
            this.play = function() {
              d.setChildIndex(c, d.children.length - 1);
              c.visible = !0;
              c.x = a / 2;
              c.y = e / 2;
              var b = Math.floor(8 * Math.random() + 6),
                l = Math.min(a, e) * (.25 * Math.random() + .25),
                g = 360 / b,
                n = l * (.15 * Math.random() + .05),
                w = v(),
                m = Math.PI / 2 * Math.floor(4 *
                  Math.random()),
                r = 1;
              .5 > Math.random() && (r = -1);
              for (var k = 0; k < b; k++) {
                var p = (r * g * k + m) * Math.PI / 180,
                  t = l * Math.cos(p),
                  p = l * Math.sin(p),
                  u;
                u = h[k] ? h[k] : new f(c);
                var x = null;
                k == b - 1 && (x = q);
                u.init(t, p, n, w);
                u.play(.05 * k, x)
              }
            };
            var b = this,
              d = m;
            this.id = g;
            var c = new PIXI.Container,
              h = [];
            d.addChild(c)
          }, function(m, g) {
            function q() {
              c.visible = !1;
              C[b.id].push(b)
            }
            var f = function(b) {
              function c() {
                var b = .5 * a,
                  e = f.x + Math.random() * b - b / 2,
                  b = f.y + Math.random() * b - b / 2;
                TweenLite.to(f.scale, .3, {
                  x: 0,
                  y: 0,
                  ease: Power1.easeOut,
                  onComplete: d,
                  delay: .5
                });
                TweenLite.to(f, .3, {
                  x: e,
                  y: b,
                  ease: Power2.easeOut,
                  delay: .5
                })
              }

              function d() {
                f.visibloe = !1;
                e && e()
              }
              this.init = function(a, b, c, d) {
                _state = 0;
                h = c;
                g = d;
                f.x = a;
                f.y = b
              };
              this.play = function(a, b) {
                e = b;
                f.clear();
                f.visibloe = !0;
                f.beginFill(g);
                f.drawCircle(0, 0, .5 * h);
                TweenLite.fromTo(f.scale, .3, {
                  x: 0,
                  y: 0
                }, {
                  x: 1,
                  y: 1,
                  ease: Back.easeOut.config(1.7),
                  onComplete: c,
                  delay: a
                })
              };
              var e, f = new PIXI.Graphics;
              b.addChild(f);
              var h, g
            };
            this.play = function() {
              d.setChildIndex(c, d.children.length - 1);
              c.visible = !0;
              c.x = a / 2;
              c.y = e / 2;
              var b = Math.floor(8 * Math.random() +
                  6),
                g = Math.min(a, e) * (.2 * Math.random() + .25),
                m = 360 / b,
                n = g * (.2 * Math.random() + .05),
                w = v(),
                r = Math.PI / 2 * Math.floor(4 * Math.random()),
                p = 1;
              .5 > Math.random() && (p = -1);
              for (var k = 0; k < b; k++) {
                var t = (p * m * k + r) * Math.PI / 180,
                  u = g * Math.cos(t),
                  t = g * Math.sin(t),
                  x;
                x = h[k] ? h[k] : new f(c);
                var A = null;
                k == b - 1 && (A = q);
                x.init(u, t, n, w);
                x.play(.05 * k, A)
              }
            };
            var b = this,
              d = m;
            this.id = g;
            var c = new PIXI.Container,
              h = [];
            d.addChild(c)
          }, function(m, g) {
            function q() {
              d.visible = !1;
              C[f.id].push(f)
            }
            this.play = function() {
              d.visible = !0;
              b.setChildIndex(d, b.children.length -
                1);
              d.x = .2 * a + .6 * a * Math.random();
              d.y = .2 * e + .6 * e * Math.random();
              var f = Math.min(a, e) * (.7 + .2 * Math.random()),
                g = f / 10 * (.5 + .8 * Math.random()),
                m = v();
              c.clear();
              c.beginFill(m);
              c.drawRect(0, -g / 2, f, g);
              h.clear();
              h.beginFill(m);
              h.drawRect(-g / 2, 0, g, f);
              c.y = 0;
              c.x = -f / 2;
              h.x = 0;
              h.y = -f / 2;
              d.rotation = 45 * Math.PI / 180;
              c.scale.x = 0;
              h.scale.y = 0;
              f = .5 > Math.random() ? -135 * Math.PI / 180 : 215 * Math.PI / 180;
              (new TimelineLite).to(c.scale, .4, {
                x: 1,
                ease: Power2.easeOut
              }).to(h.scale, .4, {
                y: 1,
                ease: Power2.easeOut
              }, .1).to(d, .6, {
                  rotation: f,
                  ease: Back.easeOut.config(1.7)
                },
                0).to(c.scale, .3, {
                x: 0,
                ease: Power2.easeOut
              }).to(h.scale, .3, {
                y: 0,
                ease: Power2.easeOut,
                onComplete: q
              }, .6)
            };
            var f = this,
              b = m;
            this.id = g;
            var d = new PIXI.Container,
              c = new PIXI.Graphics,
              h = new PIXI.Graphics;
            b.addChild(d);
            d.addChild(c);
            d.addChild(h)
          }, function(m, g) {
            function q() {
              d++;
              if (c < d) switch (h) {
                case 0:
                  h = 1;
                  var a = b[0];
                  p.x = a.x;
                  p.y = a.y;
                  d = 0;
                  q();
                  break;
                case 1:
                  h = 2
              } else TweenLite.to(p, .1, {
                x: b[d].x,
                y: b[d].y,
                onComplete: q,
                onUpdate: f,
                ease: Power1.easeOut
              })
            }

            function f() {
              n.clear();
              n.lineStyle(r, l, 1);
              switch (h) {
                case 0:
                  n.moveTo(b[0].x,
                    b[0].y);
                  for (var a = 1; a < d; a++) n.lineTo(b[a].x, b[a].y);
                  n.lineTo(p.x, p.y);
                  break;
                case 1:
                  for (n.moveTo(p.x, p.y), a = d; a <= c; a++) n.lineTo(b[a].x, b[a].y)
              }
            }
            this.play = function() {
              n.clear();
              n.visible = !0;
              .5 > Math.random() ? (n.x = 0, n.y = 0, n.rotation = 0) : (n.x = a, n.y = e, n.rotation = Math.PI);
              d = h = 0;
              c = Math.floor(3 * Math.random()) + 3;
              r = 20 * Math.random() + 2;
              l = v();
              var f = .5 > Math.random(),
                g;
              g = f ? a / c : e / c;
              for (var m = 0; m <= c; m++) {
                var k;
                f ? (k = {
                  x: m * g,
                  y: e * Math.random()
                }, 0 == m && (k.x -= 10), m == c && (k.x += 10)) : (k = {
                    y: m * g,
                    x: a * Math.random()
                  }, 0 == m && (k.y -= 10),
                  m == c && (k.y += 10));
                b[m] = k
              }
              f = b[0];
              p.x = f.x;
              p.y = f.y;
              q()
            };
            this.id = g;
            var b = [],
              d = 0,
              c, h, r, l, p = {
                x: 0,
                y: 0
              },
              n = new PIXI.Graphics;
            m.addChild(n)
          }, P],
          R = [function(m, g) {
            function q() {
              l.clear();
              l.beginFill(c);
              l.moveTo(b.pos.b1.x, b.pos.b1.y);
              l.lineTo(b.pos.b0.x, b.pos.b0.y);
              for (var a = 0; b.pos["p" + a]; a++) {
                var d = b.pos["p" + a];
                l.lineTo(d.x, d.y)
              }
              l.endFill()
            }

            function f() {
              oa == r && ca.setColor(c, p - 1);
              l.visible = !1;
              C[b.id].push(b)
            }
            this.play = function() {
              oa = r;
              var g = t();
              c = W[g];
              $("#about").css("background-color", "#" + c.toString(16));
              .3 > Math.random() &&
                ca.flash(p);
              Z = g;
              l.clear();
              l.visible = !0;
              p = d.children.length - 1 - Math.floor(2 * Math.random());
              d.setChildIndex(l, p);
              var g = .5 > Math.random(),
                m = Math.floor(4 * Math.random()) + 1;
              b.pos = {};
              var u = 0;
              g ? (u = e / m, b.pos.b0 = {
                x: 0,
                y: 0
              }, b.pos.b1 = {
                x: 0,
                y: e
              }) : (u = a / m, b.pos.b0 = {
                x: 0,
                y: 0
              }, b.pos.b1 = {
                x: a,
                y: 0
              });
              .5 > Math.random() ? (l.rotation = 0, l.x = 0, l.y = 0) : (l.rotation = Math.PI, l.x = a, l.y = e);
              for (var v = h = 0; v <= m; v++) {
                var k = {
                    x: 0,
                    y: 0
                  },
                  x = 0;
                0 != v && v != m && (x = u / 4 * Math.random() - u / 8);
                g ? k.y = u * v + x : k.x = u * v + x;
                b.pos["p" + v] = k;
                k = .4 * Math.random() + .3;
                h = 2;
                TweenLite.to(b.pos["p" +
                  v], k, g ? {
                  x: a
                } : {
                  y: e
                })
              }
              b.progress = 0;
              TweenLite.to(b, h, {
                progress: 1,
                ease: Power0.easeNone,
                onUpdate: q,
                onComplete: f
              })
            };
            var b = this,
              d = m;
            this.id = g;
            this.progress = 0;
            this.pos = {};
            var c, h, p = 0,
              l = new PIXI.Graphics;
            d.addChild(l);
            var r = Math.floor(aidn.util.getTime())
          }];
        aidn.util.shuffleArray(J);
        for (var S = 16 * Math.random(), L, C = [], X = 0; X < J.length + R.length; X++) C[X] = [];
        var W = [13430510, 8965324, 9099756, 961181, 1089457, 34969, 13934238, 16110792, 15488645, 16531063, 5853015, 3222317],
          Y = [13430510, 8965324, 9099756, 961181, 1089457, 34969, 13934238,
            16110792, 15488645, 16531063, 5853015, 3222317
          ],
          aa = W.length,
          Z = 0,
          ca, oa = 0
      },
      ha = !1,
      na = 0,
      ia = "off",
      Z = "off" == aidn.util.getCookie("bt");
    L();
    aidn.util.webaudio ? ($("#ng").css("display", "none"), $(".ok").css("display", "block"), ba && $("#scene_main .attention").html("轻触 &amp; 滑动!"), x || $("#scene_top .attention").text("* 把声音开大点，然后享受吧！")) : ($("#ng").css("display", "block"), $(".ok").css("display", "none"), x || $("#ng .atten").html("抱歉，</br>你的浏览器不支此页面"));
    PIXI.utils._saidHello = !0;
    aidn.window.resize(I)
  },
  WebAudioManager = function() {
    function I() {
      z++;
      J.now = z;
      T && T(z, A);
      if (A <= z) M && M();
      else {
        var u = new aidn.WebAudio;
        u.load(F[L[z]], I);
        K[z] = u
      }
    }
    this.load = function(u, z, p, K) {
      M = p;
      T = K;
      L = z;
      A = z.length;
      J.length = A;
      $.getJSON(u, function(p) {
        F = p;
        I()
      })
    };
    this.play = function(u, z, p) {
      0 <= p || (p = 1);
      u < A && K[u].play(0, !1, null, 0, p, z)
    };
    this.stop = function(u) {
      u < A && K[u].stop()
    };
    var J = this,
      z = -1,
      A, K = [],
      L, M, T, F;
    this.now = this.length = 0
  };
