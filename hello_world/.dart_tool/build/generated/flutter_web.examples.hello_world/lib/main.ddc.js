define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/http/http', 'packages/flutter_web.examples.hello_world/flutter_swiper', 'packages/flutter_web.examples.hello_world/cook'], function(dart_sdk, animation, ui, material, animation$, http, flutter_swiper, cook) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__binding = animation.src__widgets__binding;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__heroes = animation.src__widgets__heroes;
  const src__widgets__text = animation.src__widgets__text;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__icon = animation.src__widgets__icon;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const ui$ = ui.ui;
  const src__material__colors = material.src__material__colors;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__app = material.src__material__app;
  const src__material__progress_indicator = material.src__material__progress_indicator;
  const src__material__theme = material.src__material__theme;
  const src__material__floating_action_button_location = material.src__material__floating_action_button_location;
  const src__material__icons = material.src__material__icons;
  const src__material__page = material.src__material__page;
  const src__material__floating_action_button = material.src__material__floating_action_button;
  const src__material__icon_button = material.src__material__icon_button;
  const src__material__bottom_app_bar = material.src__material__bottom_app_bar;
  const src__material__scaffold = material.src__material__scaffold;
  const src__widgets__icon_theme_data = animation$.src__widgets__icon_theme_data;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const src__painting__basic_types = animation$.src__painting__basic_types;
  const src__painting__notched_shapes = animation$.src__painting__notched_shapes;
  const http$ = http.http;
  const flutter_swiper$ = flutter_swiper.flutter_swiper;
  const cook$ = cook.cook;
  const main = Object.create(dart.library);
  const $_get = dartx._get;
  const $length = dartx.length;
  const $_set = dartx._set;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let intTovoid = () => (intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))();
  let BuildContextAndintToContainer = () => (BuildContextAndintToContainer = dart.constFn(dart.fnType(src__widgets__container.Container, [src__widgets__framework.BuildContext, core.int])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let BuildContextAndintToRow = () => (BuildContextAndintToRow = dart.constFn(dart.fnType(src__widgets__basic.Row, [src__widgets__framework.BuildContext, core.int])))();
  let BuildContextToCook = () => (BuildContextToCook = dart.constFn(dart.fnType(cook$.Cook, [src__widgets__framework.BuildContext])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  main.main = function() {
    return src__widgets__binding.runApp(new main.MyApp.new());
  };
  main.MyApp = class MyApp extends src__widgets__framework.StatelessWidget {
    build(ct) {
      return new src__material__app.MaterialApp.new({theme: src__material__theme_data.ThemeData.new({brightness: ui$.Brightness.light, accentColor: src__material__colors.Colors.red, iconTheme: new src__widgets__icon_theme_data.IconThemeData.new({color: src__material__colors.Colors.red})}), title: "Filipino Cuisine", home: new main.Home.new()});
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  main.Home = class Home extends src__widgets__framework.StatefulWidget {
    createState() {
      return new main.HState.new();
    }
  };
  (main.Home.new = function() {
    main.Home.__proto__.new.call(this);
  }).prototype = main.Home.prototype;
  dart.addTypeTests(main.Home);
  dart.setMethodSignature(main.Home, () => ({
    __proto__: dart.getMethods(main.Home.__proto__),
    createState: dart.fnType(main.HState, [])
  }));
  main.HState = class HState extends src__widgets__framework.State$(main.Home) {
    get fd() {
      return this[fd];
    }
    set fd(value) {
      this[fd] = value;
    }
    get fi() {
      return this[fi];
    }
    set fi(value) {
      this[fi] = value;
    }
    initState() {
      super.initState();
      this.getData();
    }
    getData() {
      return async.async(dart.dynamic, (function* getData() {
        let headers = new (IdentityMapOfString$String()).from(["Access-Control-Allow-Credentials", "true", "Access-Control-Allow-Origin", "http://localhost:8080"]);
        let r = (yield http$.get("https://movie.douban.com/j/search_subjects?type=movie&tag=%E6%9C%80%E6%96%B0&page_limit=50&page_start=0", {headers: headers}));
        this.fd = core.List._check(convert.json.decode(r.body));
        core.print(this.fd);
        this.setState(dart.fn(() => this.fi = core.Map._check(this.fd[$_get](0)), VoidTodynamic()));
      }).bind(this));
    }
    build(ct) {
      if (this.fd == null) return new src__widgets__container.Container.new({color: src__material__colors.Colors.white, child: new src__widgets__basic.Center.new({child: new src__material__progress_indicator.CircularProgressIndicator.new()})});
      let t = src__material__theme.Theme.of(ct).textTheme;
      return new src__material__scaffold.Scaffold.new({body: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({flex: 5, child: new flutter_swiper$.Swiper.new({onIndexChanged: dart.fn(n => this.setState(dart.fn(() => this.fi = core.Map._check(this.fd[$_get](n)), VoidTodynamic())), intTovoid()), itemCount: this.fd[$length], itemBuilder: dart.fn((cx, i) => new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.only({top: 40, bottom: 24}), child: new src__widgets__basic.ClipRRect.new({borderRadius: new src__painting__border_radius.BorderRadius.circular(20), child: new src__widgets__heroes.Hero.new({tag: dart.dindex(this.fd[$_get](i), "title"), child: new src__widgets__image.Image.asset(core.String._check(dart.dindex(this.fd[$_get](i), "cover")), {fit: src__painting__box_fit.BoxFit.cover})})})}), BuildContextAndintToContainer()), viewportFraction: 0.85, scale: 0.9})}), new src__widgets__text.Text.new(core.String._check(this.fi[$_get]("title")), {style: t.display3.copyWith({fontFamily: "ark", color: src__material__colors.Colors.black})}), new src__widgets__container.Container.new({child: new src__widgets__text.Text.new(core.String._check(this.fi[$_get]("cn")), {style: t.subhead.apply({color: src__material__colors.Colors.red, fontFamily: "opb"})}), margin: new src__painting__edge_insets.EdgeInsets.only({top: 10, bottom: 30})}), new src__widgets__container.Container.new({child: new src__widgets__text.Text.new(core.String._check(this.fi[$_get]("dc")), {textAlign: ui$.TextAlign.center, style: t.subhead.copyWith({fontFamily: "opr"})}), margin: new src__painting__edge_insets.EdgeInsets.only({left: 10, right: 10})}), new src__widgets__basic.Expanded.new({flex: 2, child: new src__widgets__scroll_view.ListView.builder({scrollDirection: src__painting__basic_types.Axis.horizontal, itemCount: core.int._check(dart.dload(this.fi[$_get]("ig"), 'length')), itemBuilder: dart.fn((cx, i) => new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.only({left: 10}), height: 60, child: new src__widgets__image.Image.asset(core.String._check(dart.dindex(dart.dindex(this.fi[$_get]("ig"), i), "p")), {fit: src__painting__box_fit.BoxFit.contain})}), new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.only({left: 5, right: 10}), child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new src__widgets__text.Text.new(core.String._check(dart.dindex(dart.dindex(this.fi[$_get]("ig"), i), "n")), {style: t.subtitle.copyWith({fontFamily: "opb"})}), new src__widgets__text.Text.new(core.String._check(dart.dindex(dart.dindex(this.fi[$_get]("ig"), i), "c")), {style: t.caption.copyWith({fontFamily: "opr"})})])})})])}), BuildContextAndintToRow())})})])}), floatingActionButtonLocation: src__material__floating_action_button_location.FloatingActionButtonLocation.centerDocked, floatingActionButton: new src__material__floating_action_button.FloatingActionButton.new({child: new src__widgets__icon.Icon.new(src__material__icons.Icons.restaurant_menu), onPressed: dart.fn(() => src__widgets__navigator.Navigator.push(dart.dynamic, ct, new src__material__page.MaterialPageRoute.new({builder: dart.fn(cx => new cook$.Cook.new(core.List._check(this.fi[$_get]("in")), this.fi[$_get]("pf"), this.fi[$_get]("fn")), BuildContextToCook())})), VoidToFuture())}), bottomNavigationBar: new src__material__bottom_app_bar.BottomAppBar.new({shape: new src__painting__notched_shapes.CircularNotchedRectangle.new(), notchMargin: 4.0, child: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceAround, children: JSArrayOfWidget().of([new src__material__icon_button.IconButton.new({icon: new src__widgets__icon.Icon.new(dart.dtest(this.fi[$_get]("fv")) ? src__material__icons.Icons.favorite : src__material__icons.Icons.favorite_border), onPressed: dart.fn(() => this.setState(dart.fn(() => this.fi[$_set]("fv", !dart.dtest(this.fi[$_get]("fv"))), VoidTobool())), VoidTovoid())}), new src__material__icon_button.IconButton.new({icon: new src__widgets__icon.Icon.new(src__material__icons.Icons.share), onPressed: dart.fn(() => {
                }, VoidToNull())})])})})});
    }
  };
  (main.HState.new = function() {
    this[fd] = null;
    this[fi] = null;
    main.HState.__proto__.new.call(this);
  }).prototype = main.HState.prototype;
  dart.addTypeTests(main.HState);
  const fd = Symbol("HState.fd");
  const fi = Symbol("HState.fi");
  dart.setMethodSignature(main.HState, () => ({
    __proto__: dart.getMethods(main.HState.__proto__),
    initState: dart.fnType(dart.void, []),
    getData: dart.fnType(dart.dynamic, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(main.HState, () => ({
    __proto__: dart.getFields(main.HState.__proto__),
    fd: dart.fieldType(core.List),
    fi: dart.fieldType(core.Map)
  }));
  dart.trackLibraries("packages/flutter_web.examples.hello_world/main.ddc", {
    "package:flutter_web.examples.hello_world/main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":"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","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
