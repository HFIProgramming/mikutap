var hr = location.href;
0 < hr.indexOf("a.aidn") && (location.href = hr.split("a.aidn").join("aidn"));
0 < hr.indexOf("www.aidn") && (location.href = hr.split("www.aidn").join("aidn"));
var aidn = aidn || {};
aidn.constant = {
  album2ndJa: "/daniwell/cats/",
  album2ndEn: "/daniwell/cats/en/",
  advUrlJa: "/daniwell/",
  advUrlEn: "/daniwell/",
  advImg: "shared/img/adv.gif",
  advTex: "DANIWELL DISCOGRAPHY",
  advAlt: "DANIWELL (Nyan Cat Song Creator) DISCOGRAPHY"
};
try {
  for (var l = location.href.split("aidn")[1].split("/").length - 2, i = 0; i < l; i++) aidn.constant.advImg = "../" + aidn.constant.advImg
} catch (e$$4) {}
aidn.init = {
  ver: 0,
  selectBasePath: function(a, b) {
    var c = parseInt(aidn.util.getCookie("baseid"));
    if (isNaN(c) || 1 == b) c = Math.floor(Math.random() * a.length), aidn.util.setCookie("baseid", c, 604800);
    if (a.length <= c || 0 > c) c = 0;
    return this.basepath = a[c]
  },
  loadScript: function(a, b) {
    $.ajaxSetup({
      cache: !0
    });
    var c = function(e) {
      var d = a[e] + "?" + aidn.init.ver;
      aidn.init.usebase && 0 != d.indexOf("http") && (d = aidn.init.basepath + d);
      $.getScript(d, function() {
        e + 1 < a.length ? c(e + 1) : b && b()
      })
    };
    c(0)
  },
  basepath: "",
  usebase: !0
};
aidn.config = {
  init: function() {
    this.clWidth = document.documentElement.clientWidth;
    this.clHeight = document.documentElement.clientHeight;
    this.scWidth = screen.width;
    this.scHeight = screen.height;
    this.inWidth = window.innerWidth;
    this.inHeight = window.innerHeight;
    if (0 >= this.clHeight || 0 >= this.clWidth) this.clWidth = this.scWidth, this.clHeight = this.scHeight;
    if (0 >= this.inHeight || 0 >= this.inWidth) this.inWidth = this.clWidth, this.inHeight = this.clHeight
  },
  clWidth: 0,
  clHeight: 0,
  scWidth: 0,
  scHeight: 0,
  inWidth: 0,
  inHeight: 0,
  touchEnabled: null !=
    window.TouchEvent
};
aidn.audio = {
  init: function() {
    if (!this._inited) {
      this._inited = !0;
      try {
        this.audio = [], this.audio[0] = new Audio, this.availableAudio = !0, this.availableOgg = "" != this.audio[0].canPlayType("audio/ogg"), this.availableMP3 = "" != this.audio[0].canPlayType("audio/mpeg"), this.availableWav = "" != this.audio[0].canPlayType("audio/wav")
      } catch (a) {
        availableAudio = !1
      }
    }
  },
  setSrc: function(a, b) {
    this.audio[a] ? this.audio[a].src = b : this.audio[a] = new Audio(b)
  },
  load: function(a) {
    this.audio[a].load()
  },
  play: function(a) {
    this.audio[a].play()
  },
  pause: function(a) {
    this.audio[a].pause()
  },
  stop: function(a) {
    this.audio[a].ended || (this.audio[a].pause(), this.audio[a].currentTime = 0)
  },
  volume: function(a, b) {
    0 > b && (b = 0);
    1 < b && (b = 1);
    this.audio[a].volume = b
  },
  getPath: function(a) {
    for (var b = a.length, c = 0; c < b; c++) {
      var e = a[c],
        d = e.toLowerCase();
      if (aidn.audio.availableMP3 && d.indexOf(".mp3")) break;
      if (aidn.audio.availableOgg && d.indexOf(".ogg")) break;
      if (aidn.audio.availableWav && d.indexOf(".wav")) break
    }
    c == b && (e = null);
    return e
  },
  _inited: !1,
  audio: [],
  availableAudio: !1,
  availableMP3: !1,
  availableWav: !1,
  availableOgg: !1
};
aidn.canvas = {
  create: function(a, b, c, e, d) {
    var f = '<canvas id="' + b + '" width="' + c + '" height="' + e + '"></canvas>';
    document.getElementById(a).innerHTML = f;
    this.canvas = document.getElementById(b);
    this.ctx = this.canvas.getContext("2d");
    this.w = c;
    this.h = e;
    this.bgColor = d;
    this.clear(!0)
  },
  clear: function(a) {
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fillRect(0, 0, this.w, this.h);
    a && this.ctx.fill()
  },
  canvas: null,
  ctx: null,
  w: 0,
  h: 0,
  bgColor: "#ffffff"
};
aidn.event = {
  addTouchEvent: function(a, b, c, e, d) {
    "string" == typeof a && (a = document.getElementById(a));
    b && a.addEventListener("touchstart", b, !1);
    c && a.addEventListener("touchmove", c, !1);
    e && a.addEventListener("touchend", e, !1);
    d && a.addEventListener("touchcancel", d, !1)
  },
  removeTouchEvent: function(a, b, c, e, d) {
    "string" == typeof a && (a = document.getElementById(a));
    b && a.removeEventListener("touchstart", b, !1);
    c && a.removeEventListener("touchmove", c, !1);
    e && a.removeEventListener("touchend", e, !1);
    d && a.removeEventListener("touchcancel",
      d, !1)
  },
  addMouseEvent: function(a, b, c, e, d) {
    "string" == typeof a && (a = document.getElementById(a));
    b && a.addEventListener("mousedown", b, !1);
    c && a.addEventListener("mousemove", c, !1);
    e && a.addEventListener("mouseup", e, !1);
    d && a.addEventListener("mouseout", d, !1)
  },
  removeMouseEvent: function(a, b, c, e, d) {
    "string" == typeof a && (a = document.getElementById(a));
    b && a.removeEventListener("mousedown", b, !1);
    c && a.removeEventListener("mousemove", c, !1);
    e && a.removeEventListener("mouseup", e, !1);
    d && a.removeEventListener("mouseout",
      d, !1)
  },
  add: function(a, b, c, e, d) {
    (aidn.config.touchEnabled ? this.addTouchEvent : this.addMouseEvent)(a, b, c, e, d)
  },
  remove: function(a, b, c, e, d) {
    (aidn.config.touchEnabled ? this.removeTouchEvent : this.removeMouseEvent)(a, b, c, e, d)
  },
  addMouseWheel: function(a, b) {
    var c = "onwheel" in document ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll";
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener(c, b)
  },
  removeMouseWheel: function(a, b) {
    var c = "onwheel" in document ? "wheel" : "onmousewheel" in document ?
      "mousewheel" : "DOMMouseScroll";
    "string" == typeof a && (a = document.getElementById(a));
    a.removeEventListener(c, b)
  },
  addDeviceOrientation: function(a) {
    window.addEventListener("deviceorientation", a)
  },
  removeDeviceOrientation: function(a) {
    window.removeEventListener("deviceorientation", a)
  },
  addDeviceMotion: function(a) {
    window.addEventListener("devicemotion", a)
  },
  removeDeviceMotion: function(a) {
    window.removeEventListener("devicemotion", a)
  },
  getWheelDelta: function(a) {
    return "undefined" != typeof a.wheelDelta ? a.wheelDelta :
      a.detail
  },
  getPos: function(a) {
    return a.touches ? {
      x: a.touches[0].pageX,
      y: a.touches[0].pageY
    } : a.originalEvent && a.originalEvent.touches ? {
      x: a.originalEvent.touches[0].pageX,
      y: a.originalEvent.touches[0].pageY
    } : {
      x: a.clientX,
      y: a.clientY
    }
  }
};
aidn.ref = {
  init: function(a) {
    0 < this.__total && a != this.__interval && (clearInterval(this.__sid), this.__sid = setInterval(this.__update, a));
    this.__interval = a
  },
  addInterval: function(a, b) {
    this.__list[this.__total] = {
      time: 0,
      delay: b,
      func: a
    };
    0 == this.__total && (this.__sid = setInterval(this.__update, this.__interval));
    this.__total++
  },
  removeInterval: function(a) {
    for (var b = 0; b < this.__total; b++) this.__list[b].func == a && (delete this.__list[b], this.__list.splice(b, 1), this.__total--);
    0 == this.__total && clearInterval(this.__sid)
  },
  __update: function() {
    for (var a = aidn.ref.__list, b = aidn.ref.__total, c = aidn.ref.__interval, e, d = 0; d < b; d++) e = a[d], e.time += c, e.delay < e.time && (e.time -= e.delay, e.func())
  },
  __interval: 10,
  __sid: -1,
  __list: [],
  __total: 0
};
aidn.util = {
  initHideAddressBar: function(a, b) {
    a && window.addEventListener("load", function() {
      setTimeout(aidn.util.hideAddressBar, 100)
    }, !1);
    b && window.addEventListener("orientationchange", function() {
      setTimeout(aidn.util.hideAddressBar, 100)
    }, !1)
  },
  hideAddressBar: function() {
    0 >= window.pageYOffset && window.scrollTo(0, 1)
  },
  hideAddressBarStart: function(a) {
    navigator.userAgent.match(/iphone|ipod/i) ? (this.m = parseInt(document.body.style.minHeight), isNaN(this.m) && (this.m = 0), document.body.style.minHeight = "2000px", window.addEventListener("scroll",
      this._scrolled), this.f = a, this.i = setInterval(function() {
      aidn.util.hideAddressBar()
    }, 50)) : a && a()
  },
  _scrolled: function() {
    var a = aidn.util;
    document.body.style.minHeight = Math.max(window.innerHeight, a.m) + "px";
    clearInterval(a.i);
    window.removeEventListener("scroll", a._scrolled);
    a.f && a.f()
  },
  lowerAndroid: function(a) {
    var b = !1,
      c = navigator.userAgent;
    0 < c.indexOf("Android") && parseFloat(c.substr(c.indexOf("Android") + 8, 3)) < a && (b = !0);
    return b
  },
  getLanguage: function() {
    var a = this.getQuery();
    return a.lc ? a.lc : (navigator.browserLanguage ||
      navigator.language || navigator.userLanguage).substr(0, 2)
  },
  stopScroll: function() {
    document.addEventListener("touchmove", function(a) {
      a.preventDefault()
    }, !1)
  },
  checkJapanese: function() {
    this.getLanguage();
    return "ja" == this.getLanguage() || this.lowerAndroid(2.4) && 0 < navigator.userAgent.toLowerCase().indexOf("ja-jp") ? !0 : !1
  },
  useDummyDiv: function() {
    var a = aidn.util.getiOSVersion();
    return 0 < a && 10 > a ? !0 : !1
  },
  getiOSVersion: function() {
    var a = navigator.userAgent,
      b = a.match(/iPhone OS (\d+_*\d*)/);
    return b && b[1] ? parseFloat(b[1].replace("_",
      ".")) : (b = a.match(/iPad; CPU OS (\d+_*\d*)/)) && b[1] ? parseFloat(b[1].replace("_", ".")) : -1
  },
  checkChrome: function() {
    var a = navigator.userAgent;
    return 0 <= a.indexOf("CriOS") || 0 <= a.indexOf("Chrome")
  },
  checkSafari: function() {
    var a = navigator.userAgent;
    return 0 <= a.indexOf("Version") && 0 <= a.indexOf("Safari")
  },
  checkAndroid: function() {
    return 0 <= navigator.userAgent.indexOf("Android")
  },
  checkiOS: function(a) {
    var b = navigator.userAgent,
      c = 0 <= b.indexOf("iPhone") || 0 <= b.indexOf("iPod");
    return 0 != a ? c || 0 <= b.indexOf("iPad") :
      c
  },
  checkMobile: function() {
    var a = navigator.userAgent;
    return 0 <= a.indexOf("iPhone") || 0 <= a.indexOf("iPad") || 0 <= a.indexOf("iPod") || 0 <= a.indexOf("Android") || 0 <= a.indexOf("BlackBerry") || 0 <= a.indexOf("Windows Phone")
  },
  checkApps: function() {
    return aidn.util.checkAppTwitter() || aidn.util.checkAppFacebook() || aidn.util.checkAppLine()
  },
  checkAppTwitter: function() {
    var a = navigator.userAgent;
    return aidn.util.checkSafari() && aidn.util.checkMobile() ? !0 : 0 <= a.indexOf("Twitter for")
  },
  checkAppFacebook: function() {
    return 0 <=
      navigator.userAgent.indexOf("FBAV")
  },
  checkAppLine: function() {
    return 0 <= navigator.userAgent.indexOf("Line")
  },
  shuffleArray: function(a) {
    var b = a.length,
      c;
    for (c = 0; c < b; c++) {
      var e = a[c],
        d = Math.floor(Math.random() * b);
      a[c] = a[d];
      a[d] = e
    }
    return a
  },
  getQuery: function() {
    for (var a = [], b = window.location.search.slice(1).split("&"), c = b.length, e = 0; e < c; e++) {
      var d = b[e].split("=");
      a.push(d[0]);
      a[d[0]] = d[1]
    }
    return a
  },
  getTime: function() {
    return "undefined" === typeof performance || "undefined" === typeof performance.now ? Date.now() :
      performance.now()
  },
  fullscreen: function(a) {
    aidn.util.checkFullscreen() ? document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.cancelFullScreen ? document.cancelFullScreen() : document.exitFullscreen && document.exitFullscreen() : (a ? "string" == typeof a && (a = document.getElementById(a)) : a = document.body, a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.mozRequestFullScreen ?
      a.mozRequestFullScreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.requestFullscreen && a.requestFullscreen())
  },
  checkFullscreen: function() {
    return document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement ? !0 : !1
  },
  enabledFullscreen: function(a) {
    return a && navigator.userAgent.match(/Firefox/i) ? !1 : document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled ||
      !1
  },
  copyToClipboard: function(a) {
    var b = document.createElement("textarea");
    b.value = a;
    b.selectionStart = 0;
    b.selectionEnd = b.value.length;
    a = b.style;
    a.position = "fixed";
    a.left = "-100%";
    document.body.appendChild(b);
    b.focus();
    a = document.execCommand("copy");
    b.blur();
    document.body.removeChild(b);
    return a
  },
  getCookie: function(a) {
    var b = null,
      c = a + "=";
    a = document.cookie;
    var e = a.indexOf(c);
    0 <= e && (b = e + c.length, c = a.indexOf(";", b), -1 == c && (c = a.length), b = decodeURIComponent(a.substring(b, c)));
    return b
  },
  setCookie: function(a,
    b, c, e) {
    a = a + "=" + encodeURIComponent(b) + ";";
    0 <= c && (a += " max-age=" + c + ";");
    e && (a += " path=" + e + ";");
    document.cookie = a
  },
  needExpandArea: function(a) {
    var b = navigator.userAgent,
      c = 0 <= b.indexOf("iPhone") || 0 <= b.indexOf("iPod");
    (c = c && 0 <= b.indexOf("Version/") && 600 > Math.max(window.screen.width, window.screen.height)) && 1 == a && ($("html,body").css("position", "static"), $(window).on("touchmove.noScroll", function(a) {
      a.preventDefault()
    }), window.scrollTo(0, 0), $("body").css("padding-bottom", 1), setInterval(function() {
      window.scrollTo(0,
        0)
    }, 100));
    return c
  },
  initStandAlone: function() {
    "standalone" in window.navigator && window.navigator.standalone && $("a").each(function(a, b) {
      var c = $(this),
        e = c.attr("target"),
        d = !0;
      e && 0 <= e.indexOf("blank") && (d = !1);
      var f = c.attr("href");
      d && f && "" != f && (c.click(function(a) {
        location.href = f;
        a.preventDefault()
      }), c.attr("href", ""))
    })
  },
  canvas: !!window.CanvasRenderingContext2D,
  webgl: function() {
    try {
      var a = document.createElement("canvas"),
        b = a.getContext("webgl") || a.getContext("experimental-webgl");
      return !!(window.WebGLRenderingContext &&
        b && b.getShaderPrecisionFormat)
    } catch (c) {
      return !1
    }
  }(),
  webaudio: function() {
    for (var a = ["SO-03F", "SO-02F", "SO-01F"], b = a.length, c = navigator.userAgent, e = 0; e < b; e++)
      if (0 <= c.indexOf(a[e])) return !1;
    return window.AudioContext || window.webkitAudioContext ? !0 : !1
  }()
};
aidn.window = {
  useDummyDiv: aidn.util.useDummyDiv,
  addDummyDiv: function() {
    if (aidn.window.useDummyDiv()) {
      var a = $("<div id='dummy'></div>");
      a.css({
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: -1
      });
      a.html('<p style="width:100%;height:100%;"></p>');
      $("body").prepend(a);
      aidn.window._dummy = $("#dummy p")
    }
  },
  resize: function(a, b) {
    aidn.window._isFit = b;
    "undefined" === typeof b && (aidn.window._isFit = !0);
    aidn.window._resizeFunc = a;
    $(window).resize(aidn.window._resize);
    if (aidn.window._isFit) $(window).on("touchmove",
      function(a) {
        a.preventDefault()
      });
    aidn.window._isTwitteriOS && aidn.window._resizeFix();
    aidn.window._resize()
  },
  width: function() {
    return $(window).width()
  },
  height: function() {
    return aidn.window._isTwitteriOS ? window.innerHeight : aidn.window._dummy ? aidn.window._dummy.height() : $(window).height()
  },
  _resize: function() {
    aidn.window._isTwitteriOS && aidn.window._isFit && $("body").height(window.innerHeight + 20);
    aidn.window._isTwitteriOS ? setTimeout(aidn.window._resizeFix, 100) : aidn.window._resizeFix()
  },
  _resizeFix: function() {
    aidn.window._isTwitteriOS &&
      aidn.window._isFit && $("body").height(window.innerHeight);
    aidn.window._resizeFunc && aidn.window._resizeFunc()
  },
  _isFit: !0,
  _isTwitteriOS: aidn.util.checkAppTwitter(),
  _dummy: null,
  _resizeFunc: null
};
aidn.math = {
  toRad: function(a) {
    return a * Math.PI / 180
  },
  toDeg: function(a) {
    return 180 * a / Math.PI
  },
  rand: function(a, b) {
    return Math.random() * (b - a) + a
  },
  randInt: function(a, b) {
    return Math.floor(Math.random() * (b + 1 - a) + a)
  }
};
aidn.social = {
  init: function() {
    this.initTw();
    this.initFb();
    this.initGp()
  },
  initTw: function() {
    if (!(0 > location.href.indexOf("http"))) {
      var a, b = document.getElementsByTagName("script")[0],
        c = /^http:/.test(document.location) ? "http" : "https";
      document.getElementById("twitter-wjs") || (a = document.createElement("script"), a.id = "twitter-wjs", a.src = c + "://platform.twitter.com/widgets.js", b.parentNode.insertBefore(a, b));
      !0
    }
  },
  initFb: function() {
    if (!(0 > location.href.indexOf("http"))) {
      var a, b = document.getElementsByTagName("script")[0];
      document.getElementById("facebook-jssdk") || (a = document.createElement("script"), a.id = "facebook-jssdk", a.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0", b.parentNode.insertBefore(a, b))
    }
  },
  initGp: function() {
    if (!(0 > location.href.indexOf("http"))) {
      var a = aidn.util.getLanguage();
      "en" != a && (window.___gcfg = {
        lang: a
      });
      a = document.createElement("script");
      a.type = "text/javascript";
      a.async = !0;
      a.src = "https://apis.google.com/js/plusone.js";
      var b = document.getElementsByTagName("script")[0];
      b.parentNode.insertBefore(a,
        b)
    }
  },
  reloadTw: function(a, b, c, e) {
    0 <= e.indexOf("http://aidn.jp") && (e = e.replace("http", "https"));
    0 < $("#twitter iframe").length && $("#twitter iframe").remove();
    0 < $("#twitter-wjs").length && $("#twitter-wjs").remove();
    var d = '<a href="https://twitter.com/share" class="twitter-share-button"';
    a && (d += ' data-text="' + a + '"');
    b && (d += 'data-related="' + b + '"');
    c && (d += 'data-count="' + c + '"');
    e && (d += 'data-url="' + e + '"');
    d += ' data-lang="en">Tweet</a>';
    $("#twitter").append(d);
    this.initTw()
  },
  shareTw: function(a, b, c, e, d) {
    0 <= a.indexOf("https://aidn.jp") &&
      (a = a.replace("https", "http"));
    a = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(a);
    c && (a += "&text=" + encodeURIComponent(c));
    e && (a += "&related=" + e);
    d && (a += "&hashtags=" + encodeURIComponent(d));
    b && !aidn.util.checkMobile() ? window.open(a, "tw", "width=730, height=460, personalbar=0,toolbar=0,scrollbars=1,resizable=1") : location.href = a
  },
  shareFb: function(a, b) {
    0 <= a.indexOf("https://aidn.jp") && (a = a.replace("https", "http"));
    var c = "http://www.facebook.com/share.php?u=" + encodeURIComponent(a);
    b ? aidn.util.checkMobile() ?
      window.open(c) : window.open(c, "fb", "width=730, height=460, personalbar=0,toolbar=0,scrollbars=1,resizable=1") : location.href = c
  },
  shareGp: function(a, b) {
    0 <= a.indexOf("https://aidn.jp") && (a = a.replace("https", "http"));
    var c = "https://plus.google.com/share?url=" + encodeURIComponent(a);
    b ? aidn.util.checkMobile() ? window.open(c) : window.open(c, "gp", "width=960, height=790, personalbar=0,toolbar=0,scrollbars=1,resizable=1") : location.href = c
  },
  shareLi: function(a, b) {
    var c = "http://line.me/R/msg/text/?" + encodeURIComponent(b) +
      " " + encodeURIComponent(a);
    location.href = c
  },
  setShareInfo: function(a, b) {
    $("title").text(a);
    $("h1").text(a);
    $("#twitter a").attr("data-text", a);
    $("#twitter a").attr("data-url", b);
    $($("#facebook").children()).attr("href", b);
    $($("#plusone").children()).attr("href", b)
  }
};
var _isJapanese = aidn.util.checkJapanese(),
  _active = !1,
  _active = "undefined" == typeof swfobject || swfobject.hasFlashPlayerVersion("9") && !aidn.util.checkMobile();
_active || (swffit.fit = function() {});

function __googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: "ja",
    includedLanguages: "de,en,es,fr,it,ja,ko,pt,ru,zh-CN,zh-TW",
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: !0
  }, "google_translate_element")
}

function __checkInit() {
  "undefined" == typeof jQuery ? setTimeout(__checkInit, 10) : $(function() {
    $("meta:last").after('<meta name="theme-color" content="#000000">');
    aidn.util.initStandAlone();
    _isJapanese || null != document.getElementById("google_translate_element") && $.getScript("//translate.google.com/translate_a/element.js?cb=__googleTranslateElementInit", function() {
      var a = $(".aidn_sub").length,
        b = aidn.util.getQuery();
      setInterval(function() {
        $(".goog-te-banner-frame").length && ("none" == $(".skiptranslate").css("display") ?
          a && ("block" == $("#menu_sp").css("display") ? $("#menu, #menu_sp").css("top", 0) : $("#menu").css("top", 0)) : (a && ("block" == $("#menu_sp").css("display") ? $("#menu, #menu_sp").css("top", 39) : $("#menu").css("top", 39)), 480 > $(window).width() ? $("iframe:first").contents().find(".goog-te-button").css("display", "none") : $("iframe:first").contents().find(".goog-te-button").css("display", "block"), 0 != b.tw && $("#goog-gt-tt").css({
            display: "none",
            opacity: 0
          })))
      }, 100);
      var d = setInterval(function() {
        $(".goog-te-banner-frame").length &&
          "none" != $(".skiptranslate").css("display") && ($(".goog-te-banner-frame").css({
            "box-shadow": "none",
            "-webkit-box-shadow": "none",
            "border-bottom": "1px solid #000000"
          }), $("iframe:first").contents().find(".goog-te-banner").css("background", "#FFF"), $("div.skiptranslate").css("opacity", 1), clearInterval(d))
      }, 100)
    });
    aidn.util.checkMobile() && ($("a[href='http://twitter.com/daniwell_aidn']").attr("target", "_self"), $("a[href='https://twitter.com/daniwell_aidn']").attr("target", "_self"));
    0 < $("#aidn").length && (_active = !1);
    if (!_active) {
      var a = aidn.constant.advUrlEn;
      aidn.util.checkJapanese() && (a = aidn.constant.advUrlJa);
      a = "" + ('<a href="' + a + '" target="_blank"><div class="adv_con">') + ('<p class="text">' + aidn.constant.advTex + "</p>");
      a += '<p class="image"><img src="' + aidn.constant.advImg + '" alt="' + aidn.constant.advAlt + '" /></p>';
      a += "</div></a>";
      if (0 < $(".adv").length) $(".adv").html(a), $("body").css("overflow", "auto");
      else {
        var a = '<div class="adv"><div class="hr_top"></div>' + a + "</div>",
          b = $("#common_back");
        0 < b.length && ($("body").css("overflow",
          "auto"), b.after(a))
      }
    }
  })
}
__checkInit();
aidn.extra = {
  Button: function(a, b) {
    function c() {
      k || (h++, 0 == h % 5 && m++, f <= m && (clearInterval(g), e.text(d)));
      for (var a = d.substr(0, m), b = m; b < f; b++) a += String.fromCharCode(65 + 26 * Math.random());
      e.text(a)
    }
    var e = a;
    b && (e = b);
    var d = e.text(),
      f = d.length,
      g = -1,
      k = !1,
      h = 0,
      m = 0;
    a.bind("mouseover", function(a) {
      clearInterval(g);
      h = m = 0;
      g = setInterval(c, 20);
      k = !0
    });
    a.bind("mouseout", function(a) {
      k = !1
    })
  },
  initSnsButtons: function(a, b) {
    0 <= a.indexOf("http://aidn.jp") && (a = a.replace("http", "https"));
    $("#sns_tw").click(function(c) {
      aidn.social.shareTw(a, !0, b, "daniwell_aidn")
    });
    $("#sns_fb").click(function(b) {
      aidn.social.shareFb(a, !0)
    });
    $("#sns_gp").click(function(b) {
      aidn.social.shareGp(a, !0)
    })
  }
};
aidn.Audio = function() {
  aidn.audio.init();
  var a = this,
    b = new Audio,
    c, e, d, f = 1,
    g, k, h;
  this._audio = b;
  b.addEventListener("playing", function() {
    0 < c && (b.currentTime = c, c = -1)
  });
  b.addEventListener("timeupdate", function() {
    e <= b.currentTime && b.pause();
    0 < b.currentTime && k && (k(), k = null)
  });
  b.addEventListener("ended", function() {
    h && h();
    d && (b.currentTime = 0, b.play(), b.playbackRate = f)
  });
  b.addEventListener("canplaythrough", function() {
    0 < c && (b.currentTime = c, c = -1);
    g && (g(), g = null)
  });
  this.load = function(a, c) {
    "string" == typeof a && (a = [a]);
    var d = aidn.audio.getPath(a);
    if (!d) return !1;
    g = c;
    b.src = d;
    b.load()
  };
  this.play = function(h, f, g, p, v) {
    void 0 === h && (h = 0);
    void 0 === f && (f = !1);
    void 0 === p && (p = 0);
    void 0 === v && (v = 1);
    k = g;
    d = f;
    e = 1E6;
    try {
      b.currentTime = h
    } catch (A) {
      aidn.log(A), c = h
    }
    b.play();
    0 < p && "undefined" !== typeof jQuery ? (a.volume = 0, $(a).stop().animate({
      volume: v
    }, 1E3 * p, "easeInSine")) : a.volume = v
  };
  this.pause = function() {
    b.pause()
  };
  this.playSprite = function(a, c) {
    b.currentTime = a;
    b.play();
    e = c
  };
  this.addEndEvent = function(a) {
    h = a
  };
  Object.defineProperty(this,
    "speed", {
      get: function() {
        return f
      },
      set: function(a) {
        b.playbackRate = f = a
      }
    });
  Object.defineProperty(this, "loop", {
    get: function() {
      return d
    },
    set: function(a) {
      d = a
    }
  });
  Object.defineProperty(this, "time", {
    get: function() {
      return b.currentTime
    },
    set: function(a) {
      b.currentTime = a
    }
  });
  Object.defineProperty(this, "volume", {
    get: function() {
      return b.volume
    },
    set: function(a) {
      b.volume = a
    }
  });
  Object.defineProperty(this, "duration", {
    get: function() {
      return b.duration
    }
  })
};
aidn.WebAudio = function() {
  function a() {
    d.onended = null;
    E && E()
  }
  aidn.audio.init();
  var b = this,
    c, e, d, f, g, k, h = [],
    m = 0,
    u = 100,
    D = -1,
    p = !1,
    v, A, F, G, H, I, J = 1,
    E, B = 1;
  if ("undefined" !== typeof aidn.___waContext) this._context = c = aidn.___waContext;
  else {
    try {
      c = new(window.AudioContext || window.webkitAudioContext)
    } catch (K) {}
    this._context = c;
    aidn.___waContext = c
  }
  this.load = function(a, d, h) {
    function f() {
      c.decodeAudioData(g ? k.buffer : t.response, function(a) {
        if (0 <= D) {
          for (var h = D, f = Number.MAX_VALUE, q = a.numberOfChannels, g = 0; g < q; g++) {
            for (var k =
                a.getChannelData(g), m = k.length, r = 0; r < m && !(h < Math.abs(k[r])); r++);
            r < f && (f = r)
          }
          m = a.length - f;
          h = c.createBuffer(q, m, c.sampleRate);
          for (g = 0; g < q; g++)
            for (var k = a.getChannelData(g), t = h.getChannelData(g), r = 0; r < m; r++) t[r] = k[r + f];
          a = h
        }
        e = a;
        u = e.duration;
        d && d(e);
        p && (p = !1, b.play(v, A, F, G, H, I))
      }, function() {})
    }
    var g = p = !1,
      k;
    0 <= h && (D = h);
    if ("string" == typeof a)
      if (0 < a.indexOf("base64")) {
        g = !0;
        h = atob(a.split(",")[1]);
        var m = h.length;
        k = new Uint8Array(m);
        for (var w = 0; w < m; ++w) k[w] = h.charCodeAt(w)
      } else a = [a];
    if (!c) return !1;
    c.createBufferSource().start(0);
    e = null;
    a = aidn.audio.getPath(a);
    if (!a && !g) return !1;
    if (g) f();
    else {
      var t = new XMLHttpRequest;
      t.open("GET", a, !0);
      t.responseType = "arraybuffer";
      t.onload = f;
      t.send()
    }
    return !0
  };
  this.play = function(q, n, u, y, x, C) {
    v = q;
    A = n;
    F = u;
    G = y;
    H = x;
    I = C;
    if (e) {
      void 0 === q && (q = 0);
      void 0 === n && (n = !1);
      void 0 === y && (y = 0);
      void 0 === x ? x = B : B = x;
      void 0 === C && (C = 0);
      d = c.createBufferSource();
      d.buffer = e;
      d.loop = n;
      d.onended = a;
      g || (g = c.createGain());
      n = [d, g];
      n = n.concat(h);
      f && n.push(f);
      k && n.push(k);
      for (var z = 1; z < n.length; z++) {
        var w = n[z];
        n[z - 1].connect(w);
        z == n.length - 1 && w.connect(c.destination)
      }
      d.start ? d.start(c.currentTime + C, q) : d.noteOn(q);
      m = c.currentTime - q;
      this._source = d;
      this.nodeGain = g;
      0 < y && "undefined" !== typeof jQuery ? (b.volume = 0, $(b).stop().animate({
        volume: x
      }, 1E3 * y, "easeInSine")) : b.volume = x;
      if (u) var t = setInterval(function() {
        0 < b.time && (clearInterval(t), u())
      }, 10)
    } else p = !0, console.log('call "load" method before "play"')
  };
  this.stop = function() {
    p = !1;
    d && (d.stop ? d.stop(0) : d.noteOff())
  };
  this.initPanner = function(a) {
    if (void 0 === a || 0 >= a) a = "equalpower";
    0 <
      a && (a = "HRTF");
    f = c.createPanner();
    f.panningModel = a;
    return this.nodePanner = f
  };
  this.initBiquadFilter = function(a) {
    void 0 === a && (a = 0);
    k = c.createBiquadFilter();
    k.type = a;
    return k
  };
  this.addNode = function(a) {
    h.push(a)
  };
  this.addEndEvent = function(a) {
    E = a
  };
  Object.defineProperty(this, "speed", {
    get: function() {
      return d.playbackRate.value
    },
    set: function(a) {
      try {
        m = c.currentTime - this.time / a
      } catch (b) {}
      d.playbackRate.value = J = a
    }
  });
  Object.defineProperty(this, "loop", {
    get: function() {
      return d.loop
    },
    set: function(a) {
      d.loop = a
    }
  });
  Object.defineProperty(this, "time", {
    get: function() {
      return (c.currentTime - m) * J % u
    },
    set: function(a) {
      d.stop(0);
      b.play(a, d.loop)
    }
  });
  Object.defineProperty(this, "volume", {
    get: function() {
      return B
    },
    set: function(a) {
      B = a;
      g && (g.gain.value = a)
    }
  });
  Object.defineProperty(this, "duration", {
    get: function() {
      return u
    }
  })
};
aidn.AutoAudio = function(a, b, c) {
  void 0 === a && (a = "../shared/swf/audio.swf");
  aidn.audio.init();
  var e = 2;
  "undefined" !== typeof swfobject && swfobject.hasFlashPlayerVersion(10) && null != a ? e = 0 : aidn.util.webaudio && (e = 1);
  0 <= c && 2 >= c && (e = c);
  var d, f, g;
  ___flash_audioLoadComplete = function() {
    f()
  };
  ___flash_audioPlay = function() {
    g()
  };
  if (0 == e) {
    c = document.createElement("div");
    c.id = "flash_audio";
    document.body.appendChild(c);
    swfobject.embedSWF(a, "flash_audio", "20", "20", "10.2.0", "", {
      callback: b
    }, {
      menu: "false",
      scale: "noScale",
      wmode: "transparent",
      allowScriptAccess: "always",
      allowFullScreen: "true"
    }, {
      id: "flash_audio",
      name: "flash_audio"
    });
    var k = setInterval(function() {
      document.getElementById("flash_audio").loadFunc && (clearInterval(k), d = document.getElementById("flash_audio"), b(e))
    }, 100)
  } else this.audio = d = 1 == e ? new aidn.WebAudio : new aidn.Audio, b && setTimeout(function() {
    b(e)
  }, 10);
  this.load = function() {
    var a;
    "string" == typeof arguments[0] && (arguments[0] = [arguments[0]]);
    if (0 == e) {
      this.audio = d;
      for (a = 0; a < arguments[0].length; a++)
        if (0 <= arguments[0][a].indexOf(".swf")) {
          arguments[0] =
            arguments[0][a];
          break
        }
      arguments[1] && (f = arguments[1], arguments[1] = "___flash_audioLoadComplete")
    } else {
      var b = [];
      for (a = 0; a < arguments[0].length; a++) 0 > arguments[0][a].indexOf(".swf") && b.push(arguments[0][a]);
      arguments[0] = b
    }(d.loadFunc || d.load).apply(d, arguments)
  };
  this.play = function() {
    0 == e && arguments[2] && (g = arguments[2], arguments[2] = "___flash_audioPlay");
    (d.playFunc || d.play).apply(d, arguments)
  };
  this.stop = function() {
    (d.stopFunc || d.stop || d.pause).apply(d, arguments)
  };
  this.addEndEvent = function(a) {
    0 != e && d.addEndEvent(a)
  };
  Object.defineProperty(this, "speed", {
    get: function() {
      return 0 == e ? -1 : d.speed
    },
    set: function(a) {
      0 == e ? d : d.speed = a
    }
  });
  Object.defineProperty(this, "time", {
    get: function() {
      return 0 == e ? d ? d.getTimeFunc() : -1 : d.time
    },
    set: function(a) {
      0 == e ? d : d.time = a
    }
  });
  Object.defineProperty(this, "volume", {
    get: function() {
      return 0 == e ? -1 : d.volume
    },
    set: function(a) {
      0 == e ? d : d.volume = a
    }
  });
  Object.defineProperty(this, "duration", {
    get: function() {
      return 0 == e ? -1 : d.duration
    }
  });
  this.type = e
};
aidn.log = function() {
  window.console && console.log(arguments)
};
aidn.alert = function() {
  for (var a = "", b = arguments.length, c = 0; c < b - 1; c++) a += arguments[c] + ", ";
  0 < b && (a += arguments[c]);
  alert(a)
};
aidn.debug = function() {
  if ("undefined" != typeof jQuery) {
    for (var a = "", b = arguments.length, c = 0; c < b; c++) a += arguments[c] + ", ";
    0 == $("#__debugx").length && $("html").append("<div id='__debugx' style='pointer-events:none;text-align:left;position:fixed;z-index:10000000;top:0;font-weight:bold;background:rgba(255,255,255,0.5);'></div>");
    $("#__debugx").prepend("<p>" + a + "</p>")
  }
};
window.requestAnimFrame = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
    window.setTimeout(a, 1E3 / 60)
  }
}();
