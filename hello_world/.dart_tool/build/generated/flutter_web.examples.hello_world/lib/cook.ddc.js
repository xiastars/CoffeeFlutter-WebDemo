define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation, material, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__heroes = animation.src__widgets__heroes;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__material__colors = material.src__material__colors;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__theme = material.src__material__theme;
  const src__material__list_tile = material.src__material__list_tile;
  const src__material__checkbox = material.src__material__checkbox;
  const src__material__scaffold = material.src__material__scaffold;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const cook = Object.create(dart.library);
  const $length = dartx.length;
  const $add = dartx.add;
  const $_get = dartx._get;
  const $_set = dartx._set;
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let boolTovoid = () => (boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))();
  let BuildContextAndintToListTile = () => (BuildContextAndintToListTile = dart.constFn(dart.fnType(src__material__list_tile.ListTile, [src__widgets__framework.BuildContext, core.int])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  cook.Cook = class Cook extends src__widgets__framework.StatefulWidget {
    get dr() {
      return this[dr$];
    }
    set dr(value) {
      super.dr = value;
    }
    get img() {
      return this[img$];
    }
    set img(value) {
      super.img = value;
    }
    get nme() {
      return this[nme$];
    }
    set nme(value) {
      super.nme = value;
    }
    createState() {
      return new cook.CState.new();
    }
  };
  (cook.Cook.new = function(dr, img, nme) {
    this[dr$] = dr;
    this[img$] = img;
    this[nme$] = nme;
    cook.Cook.__proto__.new.call(this);
  }).prototype = cook.Cook.prototype;
  dart.addTypeTests(cook.Cook);
  const dr$ = Symbol("Cook.dr");
  const img$ = Symbol("Cook.img");
  const nme$ = Symbol("Cook.nme");
  dart.setMethodSignature(cook.Cook, () => ({
    __proto__: dart.getMethods(cook.Cook.__proto__),
    createState: dart.fnType(cook.CState, [])
  }));
  dart.setFieldSignature(cook.Cook, () => ({
    __proto__: dart.getFields(cook.Cook.__proto__),
    dr: dart.finalFieldType(core.List),
    img: dart.finalFieldType(dart.dynamic),
    nme: dart.finalFieldType(dart.dynamic)
  }));
  cook.CState = class CState extends src__widgets__framework.State$(cook.Cook) {
    get cb() {
      return this[cb];
    }
    set cb(value) {
      this[cb] = value;
    }
    initState() {
      super.initState();
      this.cb = [];
    }
    build(ct) {
      let dr = this.widget.dr;
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({backgroundColor: src__material__colors.Colors.red, title: new src__widgets__text.Text.new("INSTRUCTIONS"), centerTitle: true}), body: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__container.Container.new({child: new src__material__list_tile.ListTile.new({leading: new src__widgets__basic.ClipRRect.new({borderRadius: new src__painting__border_radius.BorderRadius.circular(50), child: new src__widgets__heroes.Hero.new({tag: this.widget.nme, child: new src__widgets__image.Image.asset(core.String._check(this.widget.img), {fit: src__painting__box_fit.BoxFit.cover, width: 100, height: 100})})}), title: new src__widgets__text.Text.new(core.String._check(this.widget.nme), {style: src__material__theme.Theme.of(ct).textTheme.display2.copyWith({fontFamily: "ark", color: src__material__colors.Colors.black})})}), margin: new src__painting__edge_insets.EdgeInsets.only({top: 40, bottom: 30, left: 20})}), new src__widgets__basic.Expanded.new({child: new src__widgets__scroll_view.ListView.builder({itemCount: dr[$length], padding: new src__painting__edge_insets.EdgeInsets.all(10), itemBuilder: dart.fn((ct, i) => {
                  this.cb[$add](false);
                  return new src__material__list_tile.ListTile.new({title: new src__widgets__text.Text.new(core.String._check(dr[$_get](i))), trailing: new src__material__checkbox.Checkbox.new({value: core.bool._check(this.cb[$_get](i)), onChanged: dart.fn(v => this.setState(dart.fn(() => this.cb[$_set](i, v), VoidTobool())), boolTovoid())})});
                }, BuildContextAndintToListTile())})})])})});
    }
  };
  (cook.CState.new = function() {
    this[cb] = null;
    cook.CState.__proto__.new.call(this);
  }).prototype = cook.CState.prototype;
  dart.addTypeTests(cook.CState);
  const cb = Symbol("CState.cb");
  dart.setMethodSignature(cook.CState, () => ({
    __proto__: dart.getMethods(cook.CState.__proto__),
    initState: dart.fnType(dart.void, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(cook.CState, () => ({
    __proto__: dart.getFields(cook.CState.__proto__),
    cb: dart.fieldType(core.List)
  }));
  dart.trackLibraries("packages/flutter_web.examples.hello_world/cook.ddc", {
    "package:flutter_web.examples.hello_world/cook.dart": cook
  }, '{"version":3,"sourceRoot":"","sources":["cook.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGa;;;;;;IACL;;;;;;IACA;;;;;;;iBAGkB,eAAM;IAAE;;4BAD3B,EAAO,EAAE,GAAQ,EAAE,GAAQ;IAAtB,SAAE,GAAF,EAAE;IAAO,UAAG,GAAH,GAAG;IAAO,UAAG,GAAH,GAAG;;EAAC;;;;;;;;;;;;;;;;IAK5B;;;;;;;AAGH,qBAAe;AACf,aAAE,GAAG;IACP;UAEa,EAAE;AACb,UAAK,KAAK,WAAM,GAAG;AACnB,iBAAO,oCAAQ,cACH,iCAAM,mBACO,4BAAM,IAAI,aACpB,2BAAI,CAAC,8BACC,kBACX,8BAAM,YAAW,0BACrB,qCAAS,aACE,qCAAQ,eACF,iCAAS,oBACA,kDAAqB,CAAC,gBAC7B,6BAAI,OACF,WAAM,IAAI,aACR,+BAAW,oBAAC,WAAM,IAAI,SACpB,6BAAM,MAAM,SAAS,aAAa,sBAC5C,2BAAI,oBAAC,WAAM,IAAI,WACX,0BAAK,GAAG,CAAC,EAAE,WACJ,SACD,SACA,cAAa,cAAc,4BAAM,MAAM,oBACpD,0CAAe,OAAM,YAAY,UAAU,YACvD,gCAAQ,aACG,0CAAgB,aACR,EAAE,SAAO,eACX,yCAAc,CAAC,kBACX,SAAC,EAAE,EAAE,CAAC;AACjB,yBAAE,MAAI,CAAC;AACP,6BAAO,qCAAQ,aACJ,2BAAI,oBAAC,EAAE,QAAC,CAAC,mBACN,oCAAQ,0BACP,OAAE,QAAC,CAAC,eACA,QAAC,CAAC,IAAK,aAAQ,CAAC,cAAM,OAAE,QAAC,CAAC,EAAI,CAAC;;IAGpE;;;IA1CK,QAAE;;EA2CT","file":"cook.ddc.js"}');
  // Exports:
  return {
    cook: cook
  };
});

//# sourceMappingURL=cook.ddc.js.map
