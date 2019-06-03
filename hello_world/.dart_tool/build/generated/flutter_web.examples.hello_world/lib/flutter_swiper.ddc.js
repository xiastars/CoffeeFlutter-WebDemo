define(['dart_sdk', 'packages/flutter_web.examples.hello_world/flutter_page_indicator', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation', 'packages/flutter_web.examples.hello_world/transformer_page_view', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/gestures/arena', 'packages/flutter_web/material'], function(dart_sdk, flutter_page_indicator, animation, animation$, transformer_page_view, assertions, ui, arena, material) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const flutter_page_indicator$ = flutter_page_indicator.flutter_page_indicator;
  const src__animation__curves = animation.src__animation__curves;
  const src__painting__basic_types = animation.src__painting__basic_types;
  const src__painting__alignment = animation.src__painting__alignment;
  const src__animation__tween = animation.src__animation__tween;
  const src__animation__animation = animation.src__animation__animation;
  const src__widgets__icon_data = animation.src__widgets__icon_data;
  const src__painting__text_style = animation.src__painting__text_style;
  const src__widgets__framework = animation$.src__widgets__framework;
  const src__widgets__scroll_physics = animation$.src__widgets__scroll_physics;
  const src__rendering__proxy_box = animation$.src__rendering__proxy_box;
  const src__widgets__gesture_detector = animation$.src__widgets__gesture_detector;
  const src__widgets__scroll_notification = animation$.src__widgets__scroll_notification;
  const src__widgets__notification_listener = animation$.src__widgets__notification_listener;
  const src__widgets__container = animation$.src__widgets__container;
  const src__widgets__basic = animation$.src__widgets__basic;
  const src__rendering__flex = animation$.src__rendering__flex;
  const src__animation__animation_controller = animation$.src__animation__animation_controller;
  const src__widgets__binding = animation$.src__widgets__binding;
  const src__widgets__transitions = animation$.src__widgets__transitions;
  const src__widgets__ticker_provider = animation$.src__widgets__ticker_provider;
  const src__painting__edge_insets = animation$.src__painting__edge_insets;
  const src__widgets__icon = animation$.src__widgets__icon;
  const src__widgets__text = animation$.src__widgets__text;
  const src__widgets__page_view = animation$.src__widgets__page_view;
  const transformer_page_view$ = transformer_page_view.transformer_page_view;
  const src__foundation__key = assertions.src__foundation__key;
  const ui$ = ui.ui;
  const src__gestures__drag_details = arena.src__gestures__drag_details;
  const src__material__icons = material.src__material__icons;
  const src__material__theme = material.src__material__theme;
  const flutter_swiper = Object.create(dart.library);
  const $_get = dartx._get;
  const $length = dartx.length;
  const $add = dartx.add;
  const $modulo = dartx['%'];
  const $abs = dartx.abs;
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, core.int])))();
  let intTovoid = () => (intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))();
  let ListOfSwiperPlugin = () => (ListOfSwiperPlugin = dart.constFn(core.List$(flutter_swiper.SwiperPlugin)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ScrollNotificationTobool = () => (ScrollNotificationTobool = dart.constFn(dart.fnType(core.bool, [src__widgets__scroll_notification.ScrollNotification])))();
  let NotificationListenerOfScrollNotification = () => (NotificationListenerOfScrollNotification = dart.constFn(src__widgets__notification_listener.NotificationListener$(src__widgets__scroll_notification.ScrollNotification)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let ValueKeyOfint = () => (ValueKeyOfint = dart.constFn(src__foundation__key.ValueKey$(core.int)))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(src__animation__tween.Tween$(core.double)))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(src__animation__animation.Animation$(core.double)))();
  let ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  let BuildContextAndSwiperPluginConfigToWidget = () => (BuildContextAndSwiperPluginConfigToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, flutter_swiper.SwiperPluginConfig])))();
  let JSArrayOfTransformBuilder = () => (JSArrayOfTransformBuilder = dart.constFn(_interceptors.JSArray$(flutter_swiper.TransformBuilder)))();
  let ListOfTransformBuilder = () => (ListOfTransformBuilder = dart.constFn(core.List$(flutter_swiper.TransformBuilder)))();
  dart.defineLazy(flutter_swiper, {
    /*flutter_swiper.kDefaultAutoplayDelayMs*/get kDefaultAutoplayDelayMs() {
      return 3000;
    },
    /*flutter_swiper.kDefaultAutoplayTransactionDuration*/get kDefaultAutoplayTransactionDuration() {
      return 300;
    },
    /*flutter_swiper.kMaxValue*/get kMaxValue() {
      return 2000000000;
    },
    /*flutter_swiper.kMiddleValue*/get kMiddleValue() {
      return 1000000000;
    }
  });
  flutter_swiper.SwiperLayout = class SwiperLayout extends core.Object {
    toString() {
      return {
        0: "SwiperLayout.DEFAULT",
        1: "SwiperLayout.STACK",
        2: "SwiperLayout.TINDER",
        3: "SwiperLayout.CUSTOM"
      }[this.index];
    }
  };
  (flutter_swiper.SwiperLayout.new = function(x) {
    this.index = x;
  }).prototype = flutter_swiper.SwiperLayout.prototype;
  dart.addTypeTests(flutter_swiper.SwiperLayout);
  dart.setFieldSignature(flutter_swiper.SwiperLayout, () => ({
    __proto__: dart.getFields(flutter_swiper.SwiperLayout.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(flutter_swiper.SwiperLayout, ['toString']);
  flutter_swiper.SwiperLayout.DEFAULT = dart.const(new flutter_swiper.SwiperLayout.new(0));
  flutter_swiper.SwiperLayout.STACK = dart.const(new flutter_swiper.SwiperLayout.new(1));
  flutter_swiper.SwiperLayout.TINDER = dart.const(new flutter_swiper.SwiperLayout.new(2));
  flutter_swiper.SwiperLayout.CUSTOM = dart.const(new flutter_swiper.SwiperLayout.new(3));
  flutter_swiper.SwiperLayout.values = dart.constList([flutter_swiper.SwiperLayout.DEFAULT, flutter_swiper.SwiperLayout.STACK, flutter_swiper.SwiperLayout.TINDER, flutter_swiper.SwiperLayout.CUSTOM], flutter_swiper.SwiperLayout);
  flutter_swiper.Swiper = class Swiper extends src__widgets__framework.StatefulWidget {
    get outer() {
      return this[outer$];
    }
    set outer(value) {
      super.outer = value;
    }
    get itemHeight() {
      return this[itemHeight$];
    }
    set itemHeight(value) {
      super.itemHeight = value;
    }
    get itemWidth() {
      return this[itemWidth$];
    }
    set itemWidth(value) {
      super.itemWidth = value;
    }
    get containerHeight() {
      return this[containerHeight$];
    }
    set containerHeight(value) {
      super.containerHeight = value;
    }
    get containerWidth() {
      return this[containerWidth$];
    }
    set containerWidth(value) {
      super.containerWidth = value;
    }
    get itemBuilder() {
      return this[itemBuilder$];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get transformer() {
      return this[transformer$];
    }
    set transformer(value) {
      super.transformer = value;
    }
    get itemCount() {
      return this[itemCount$];
    }
    set itemCount(value) {
      super.itemCount = value;
    }
    get onIndexChanged() {
      return this[onIndexChanged$];
    }
    set onIndexChanged(value) {
      super.onIndexChanged = value;
    }
    get autoplay() {
      return this[autoplay$];
    }
    set autoplay(value) {
      super.autoplay = value;
    }
    get autoplayDelay() {
      return this[autoplayDelay$];
    }
    set autoplayDelay(value) {
      super.autoplayDelay = value;
    }
    get autoplayDisableOnInteraction() {
      return this[autoplayDisableOnInteraction$];
    }
    set autoplayDisableOnInteraction(value) {
      super.autoplayDisableOnInteraction = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get scrollDirection() {
      return this[scrollDirection$];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    get loop() {
      return this[loop$];
    }
    set loop(value) {
      super.loop = value;
    }
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get pagination() {
      return this[pagination$];
    }
    set pagination(value) {
      super.pagination = value;
    }
    get control() {
      return this[control$];
    }
    set control(value) {
      super.control = value;
    }
    get plugins() {
      return this[plugins$];
    }
    set plugins(value) {
      super.plugins = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get physics() {
      return this[physics$];
    }
    set physics(value) {
      super.physics = value;
    }
    get viewportFraction() {
      return this[viewportFraction$];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    get layout() {
      return this[layout$];
    }
    set layout(value) {
      super.layout = value;
    }
    get customLayoutOption() {
      return this[customLayoutOption$];
    }
    set customLayoutOption(value) {
      super.customLayoutOption = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get fade() {
      return this[fade$];
    }
    set fade(value) {
      super.fade = value;
    }
    get indicatorLayout() {
      return this[indicatorLayout$];
    }
    set indicatorLayout(value) {
      super.indicatorLayout = value;
    }
    static children(opts) {
      let children = opts && 'children' in opts ? opts.children : null;
      let autoplay = opts && 'autoplay' in opts ? opts.autoplay : false;
      let transformer = opts && 'transformer' in opts ? opts.transformer : null;
      let autoplayDelay = opts && 'autoplayDelay' in opts ? opts.autoplayDelay : 3000;
      let reverse = opts && 'reverse' in opts ? opts.reverse : false;
      let autoplayDisableOnInteraction = opts && 'autoplayDisableOnInteraction' in opts ? opts.autoplayDisableOnInteraction : true;
      let duration = opts && 'duration' in opts ? opts.duration : 300;
      let onIndexChanged = opts && 'onIndexChanged' in opts ? opts.onIndexChanged : null;
      let index = opts && 'index' in opts ? opts.index : null;
      let onTap = opts && 'onTap' in opts ? opts.onTap : null;
      let loop = opts && 'loop' in opts ? opts.loop : true;
      let curve = opts && 'curve' in opts ? opts.curve : src__animation__curves.Curves.ease;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : src__painting__basic_types.Axis.horizontal;
      let pagination = opts && 'pagination' in opts ? opts.pagination : null;
      let control = opts && 'control' in opts ? opts.control : null;
      let plugins = opts && 'plugins' in opts ? opts.plugins : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let customLayoutOption = opts && 'customLayoutOption' in opts ? opts.customLayoutOption : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let containerHeight = opts && 'containerHeight' in opts ? opts.containerHeight : null;
      let containerWidth = opts && 'containerWidth' in opts ? opts.containerWidth : null;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1.0;
      let itemHeight = opts && 'itemHeight' in opts ? opts.itemHeight : null;
      let itemWidth = opts && 'itemWidth' in opts ? opts.itemWidth : null;
      let outer = opts && 'outer' in opts ? opts.outer : false;
      let scale = opts && 'scale' in opts ? opts.scale : 1.0;
      if (!(children != null)) dart.assertFailed("children must not be null");
      return new flutter_swiper.Swiper.new({transformer: transformer, customLayoutOption: customLayoutOption, containerHeight: containerHeight, containerWidth: containerWidth, viewportFraction: viewportFraction, itemHeight: itemHeight, itemWidth: itemWidth, outer: outer, scale: scale, autoplay: autoplay, autoplayDelay: autoplayDelay, autoplayDisableOnInteraction: autoplayDisableOnInteraction, duration: duration, onIndexChanged: onIndexChanged, index: index, onTap: onTap, curve: curve, scrollDirection: scrollDirection, pagination: pagination, control: control, controller: controller, loop: loop, plugins: plugins, physics: physics, key: key, itemBuilder: dart.fn((context, index) => children[$_get](index), BuildContextAndintToWidget()), itemCount: children[$length]});
    }
    static list(opts) {
      let transformer = opts && 'transformer' in opts ? opts.transformer : null;
      let list = opts && 'list' in opts ? opts.list : null;
      let customLayoutOption = opts && 'customLayoutOption' in opts ? opts.customLayoutOption : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let autoplay = opts && 'autoplay' in opts ? opts.autoplay : false;
      let autoplayDelay = opts && 'autoplayDelay' in opts ? opts.autoplayDelay : 3000;
      let reverse = opts && 'reverse' in opts ? opts.reverse : false;
      let autoplayDisableOnInteraction = opts && 'autoplayDisableOnInteraction' in opts ? opts.autoplayDisableOnInteraction : true;
      let duration = opts && 'duration' in opts ? opts.duration : 300;
      let onIndexChanged = opts && 'onIndexChanged' in opts ? opts.onIndexChanged : null;
      let index = opts && 'index' in opts ? opts.index : null;
      let onTap = opts && 'onTap' in opts ? opts.onTap : null;
      let loop = opts && 'loop' in opts ? opts.loop : true;
      let curve = opts && 'curve' in opts ? opts.curve : src__animation__curves.Curves.ease;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : src__painting__basic_types.Axis.horizontal;
      let pagination = opts && 'pagination' in opts ? opts.pagination : null;
      let control = opts && 'control' in opts ? opts.control : null;
      let plugins = opts && 'plugins' in opts ? opts.plugins : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let containerHeight = opts && 'containerHeight' in opts ? opts.containerHeight : null;
      let containerWidth = opts && 'containerWidth' in opts ? opts.containerWidth : null;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1.0;
      let itemHeight = opts && 'itemHeight' in opts ? opts.itemHeight : null;
      let itemWidth = opts && 'itemWidth' in opts ? opts.itemWidth : null;
      let outer = opts && 'outer' in opts ? opts.outer : false;
      let scale = opts && 'scale' in opts ? opts.scale : 1.0;
      return new flutter_swiper.Swiper.new({transformer: transformer, customLayoutOption: customLayoutOption, containerHeight: containerHeight, containerWidth: containerWidth, viewportFraction: viewportFraction, itemHeight: itemHeight, itemWidth: itemWidth, outer: outer, scale: scale, autoplay: autoplay, autoplayDelay: autoplayDelay, autoplayDisableOnInteraction: autoplayDisableOnInteraction, duration: duration, onIndexChanged: onIndexChanged, index: index, onTap: onTap, curve: curve, key: key, scrollDirection: scrollDirection, pagination: pagination, control: control, controller: controller, loop: loop, plugins: plugins, physics: physics, itemBuilder: dart.fn((context, index) => builder(context, list[$_get](index), index), BuildContextAndintToWidget()), itemCount: list[$length]});
    }
    createState() {
      return new flutter_swiper._SwiperState.new();
    }
  };
  (flutter_swiper.Swiper.new = function(opts) {
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let indicatorLayout = opts && 'indicatorLayout' in opts ? opts.indicatorLayout : flutter_page_indicator$.PageIndicatorLayout.NONE;
    let transformer = opts && 'transformer' in opts ? opts.transformer : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let autoplay = opts && 'autoplay' in opts ? opts.autoplay : false;
    let layout = opts && 'layout' in opts ? opts.layout : flutter_swiper.SwiperLayout.DEFAULT;
    let autoplayDelay = opts && 'autoplayDelay' in opts ? opts.autoplayDelay : 3000;
    let autoplayDisableOnInteraction = opts && 'autoplayDisableOnInteraction' in opts ? opts.autoplayDisableOnInteraction : true;
    let duration = opts && 'duration' in opts ? opts.duration : 300;
    let onIndexChanged = opts && 'onIndexChanged' in opts ? opts.onIndexChanged : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let control = opts && 'control' in opts ? opts.control : null;
    let loop = opts && 'loop' in opts ? opts.loop : true;
    let curve = opts && 'curve' in opts ? opts.curve : src__animation__curves.Curves.ease;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : src__painting__basic_types.Axis.horizontal;
    let pagination = opts && 'pagination' in opts ? opts.pagination : null;
    let plugins = opts && 'plugins' in opts ? opts.plugins : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let customLayoutOption = opts && 'customLayoutOption' in opts ? opts.customLayoutOption : null;
    let containerHeight = opts && 'containerHeight' in opts ? opts.containerHeight : null;
    let containerWidth = opts && 'containerWidth' in opts ? opts.containerWidth : null;
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1.0;
    let itemHeight = opts && 'itemHeight' in opts ? opts.itemHeight : null;
    let itemWidth = opts && 'itemWidth' in opts ? opts.itemWidth : null;
    let outer = opts && 'outer' in opts ? opts.outer : false;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let fade = opts && 'fade' in opts ? opts.fade : null;
    this[itemBuilder$] = itemBuilder;
    this[indicatorLayout$] = indicatorLayout;
    this[transformer$] = transformer;
    this[itemCount$] = itemCount;
    this[autoplay$] = autoplay;
    this[layout$] = layout;
    this[autoplayDelay$] = autoplayDelay;
    this[autoplayDisableOnInteraction$] = autoplayDisableOnInteraction;
    this[duration$] = duration;
    this[onIndexChanged$] = onIndexChanged;
    this[index$] = index;
    this[onTap$] = onTap;
    this[control$] = control;
    this[loop$] = loop;
    this[curve$] = curve;
    this[scrollDirection$] = scrollDirection;
    this[pagination$] = pagination;
    this[plugins$] = plugins;
    this[physics$] = physics;
    this[controller$] = controller;
    this[customLayoutOption$] = customLayoutOption;
    this[containerHeight$] = containerHeight;
    this[containerWidth$] = containerWidth;
    this[viewportFraction$] = viewportFraction;
    this[itemHeight$] = itemHeight;
    this[itemWidth$] = itemWidth;
    this[outer$] = outer;
    this[scale$] = scale;
    this[fade$] = fade;
    if (!(itemBuilder != null || transformer != null)) dart.assertFailed("itemBuilder and transformItemBuilder must not be both null");
    if (!(!dart.test(loop) || dart.test(loop) && layout === flutter_swiper.SwiperLayout.DEFAULT && (indicatorLayout === flutter_page_indicator$.PageIndicatorLayout.SCALE || indicatorLayout === flutter_page_indicator$.PageIndicatorLayout.COLOR || indicatorLayout === flutter_page_indicator$.PageIndicatorLayout.NONE) || dart.test(loop) && layout !== flutter_swiper.SwiperLayout.DEFAULT)) dart.assertFailed("Only support `PageIndicatorLayout.SCALE` and `PageIndicatorLayout.COLOR`when layout==SwiperLayout.DEFAULT in loop mode");
    flutter_swiper.Swiper.__proto__.new.call(this, {key: key});
  }).prototype = flutter_swiper.Swiper.prototype;
  dart.addTypeTests(flutter_swiper.Swiper);
  const outer$ = Symbol("Swiper.outer");
  const itemHeight$ = Symbol("Swiper.itemHeight");
  const itemWidth$ = Symbol("Swiper.itemWidth");
  const containerHeight$ = Symbol("Swiper.containerHeight");
  const containerWidth$ = Symbol("Swiper.containerWidth");
  const itemBuilder$ = Symbol("Swiper.itemBuilder");
  const transformer$ = Symbol("Swiper.transformer");
  const itemCount$ = Symbol("Swiper.itemCount");
  const onIndexChanged$ = Symbol("Swiper.onIndexChanged");
  const autoplay$ = Symbol("Swiper.autoplay");
  const autoplayDelay$ = Symbol("Swiper.autoplayDelay");
  const autoplayDisableOnInteraction$ = Symbol("Swiper.autoplayDisableOnInteraction");
  const duration$ = Symbol("Swiper.duration");
  const scrollDirection$ = Symbol("Swiper.scrollDirection");
  const curve$ = Symbol("Swiper.curve");
  const loop$ = Symbol("Swiper.loop");
  const index$ = Symbol("Swiper.index");
  const onTap$ = Symbol("Swiper.onTap");
  const pagination$ = Symbol("Swiper.pagination");
  const control$ = Symbol("Swiper.control");
  const plugins$ = Symbol("Swiper.plugins");
  const controller$ = Symbol("Swiper.controller");
  const physics$ = Symbol("Swiper.physics");
  const viewportFraction$ = Symbol("Swiper.viewportFraction");
  const layout$ = Symbol("Swiper.layout");
  const customLayoutOption$ = Symbol("Swiper.customLayoutOption");
  const scale$ = Symbol("Swiper.scale");
  const fade$ = Symbol("Swiper.fade");
  const indicatorLayout$ = Symbol("Swiper.indicatorLayout");
  dart.setMethodSignature(flutter_swiper.Swiper, () => ({
    __proto__: dart.getMethods(flutter_swiper.Swiper.__proto__),
    createState: dart.fnType(src__widgets__framework.State$(src__widgets__framework.StatefulWidget), [])
  }));
  dart.setFieldSignature(flutter_swiper.Swiper, () => ({
    __proto__: dart.getFields(flutter_swiper.Swiper.__proto__),
    outer: dart.finalFieldType(core.bool),
    itemHeight: dart.finalFieldType(core.double),
    itemWidth: dart.finalFieldType(core.double),
    containerHeight: dart.finalFieldType(core.double),
    containerWidth: dart.finalFieldType(core.double),
    itemBuilder: dart.finalFieldType(BuildContextAndintToWidget()),
    transformer: dart.finalFieldType(transformer_page_view$.PageTransformer),
    itemCount: dart.finalFieldType(core.int),
    onIndexChanged: dart.finalFieldType(intTovoid()),
    autoplay: dart.finalFieldType(core.bool),
    autoplayDelay: dart.finalFieldType(core.int),
    autoplayDisableOnInteraction: dart.finalFieldType(core.bool),
    duration: dart.finalFieldType(core.int),
    scrollDirection: dart.finalFieldType(src__painting__basic_types.Axis),
    curve: dart.finalFieldType(src__animation__curves.Curve),
    loop: dart.finalFieldType(core.bool),
    index: dart.finalFieldType(core.int),
    onTap: dart.finalFieldType(intTovoid()),
    pagination: dart.finalFieldType(flutter_swiper.SwiperPlugin),
    control: dart.finalFieldType(flutter_swiper.SwiperPlugin),
    plugins: dart.finalFieldType(ListOfSwiperPlugin()),
    controller: dart.finalFieldType(flutter_swiper.SwiperController),
    physics: dart.finalFieldType(src__widgets__scroll_physics.ScrollPhysics),
    viewportFraction: dart.finalFieldType(core.double),
    layout: dart.finalFieldType(flutter_swiper.SwiperLayout),
    customLayoutOption: dart.finalFieldType(flutter_swiper.CustomLayoutOption),
    scale: dart.finalFieldType(core.double),
    fade: dart.finalFieldType(core.double),
    indicatorLayout: dart.finalFieldType(flutter_page_indicator$.PageIndicatorLayout)
  }));
  const _timer = dart.privateName(flutter_swiper, "_timer");
  const _controller = dart.privateName(flutter_swiper, "_controller");
  const _onController = dart.privateName(flutter_swiper, "_onController");
  const _handleAutoplay = dart.privateName(flutter_swiper, "_handleAutoplay");
  const _startAutoplay = dart.privateName(flutter_swiper, "_startAutoplay");
  const _stopAutoplay = dart.privateName(flutter_swiper, "_stopAutoplay");
  const _autoplayEnabled = dart.privateName(flutter_swiper, "_autoplayEnabled");
  const _onTimer = dart.privateName(flutter_swiper, "_onTimer");
  flutter_swiper._SwiperTimerMixin = class _SwiperTimerMixin extends src__widgets__framework.State$(flutter_swiper.Swiper) {
    initState() {
      this[_controller] = this.widget.controller;
      if (this[_controller] == null) {
        this[_controller] = new flutter_swiper.SwiperController.new();
      }
      this[_controller].addListener(dart.bind(this, _onController));
      this[_handleAutoplay]();
      super.initState();
    }
    [_onController]() {
      switch (this[_controller].event) {
        case flutter_swiper.SwiperController.START_AUTOPLAY:
        {
          {
            if (this[_timer] == null) {
              this[_startAutoplay]();
            }
          }
          break;
        }
        case flutter_swiper.SwiperController.STOP_AUTOPLAY:
        {
          {
            if (this[_timer] != null) {
              this[_stopAutoplay]();
            }
          }
          break;
        }
      }
    }
    didUpdateWidget(oldWidget) {
      flutter_swiper.Swiper._check(oldWidget);
      if (!dart.equals(this[_controller], oldWidget.controller)) {
        if (oldWidget.controller != null) {
          oldWidget.controller.removeListener(dart.bind(this, _onController));
          this[_controller] = oldWidget.controller;
          this[_controller].addListener(dart.bind(this, _onController));
        }
      }
      this[_handleAutoplay]();
      super.didUpdateWidget(oldWidget);
    }
    dispose() {
      if (this[_controller] != null) {
        this[_controller].removeListener(dart.bind(this, _onController));
      }
      this[_stopAutoplay]();
      super.dispose();
    }
    [_autoplayEnabled]() {
      let l = this[_controller].autoplay;
      return l != null ? l : this.widget.autoplay;
    }
    [_handleAutoplay]() {
      if (dart.test(this[_autoplayEnabled]()) && this[_timer] != null) return;
      this[_stopAutoplay]();
      if (dart.test(this[_autoplayEnabled]())) {
        this[_startAutoplay]();
      }
    }
    [_startAutoplay]() {
      if (!(this[_timer] == null)) dart.assertFailed("Timer must be stopped before start!");
      this[_timer] = async.Timer.periodic(new core.Duration.new({milliseconds: this.widget.autoplayDelay}), dart.bind(this, _onTimer));
    }
    [_onTimer](timer) {
      this[_controller].next({animation: true});
    }
    [_stopAutoplay]() {
      if (this[_timer] != null) {
        this[_timer].cancel();
        this[_timer] = null;
      }
    }
  };
  (flutter_swiper._SwiperTimerMixin.new = function() {
    this[_timer] = null;
    this[_controller] = null;
    flutter_swiper._SwiperTimerMixin.__proto__.new.call(this);
  }).prototype = flutter_swiper._SwiperTimerMixin.prototype;
  dart.addTypeTests(flutter_swiper._SwiperTimerMixin);
  dart.setMethodSignature(flutter_swiper._SwiperTimerMixin, () => ({
    __proto__: dart.getMethods(flutter_swiper._SwiperTimerMixin.__proto__),
    initState: dart.fnType(dart.void, []),
    [_onController]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, []),
    [_autoplayEnabled]: dart.fnType(core.bool, []),
    [_handleAutoplay]: dart.fnType(dart.void, []),
    [_startAutoplay]: dart.fnType(dart.void, []),
    [_onTimer]: dart.fnType(dart.void, [async.Timer]),
    [_stopAutoplay]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(flutter_swiper._SwiperTimerMixin, () => ({
    __proto__: dart.getFields(flutter_swiper._SwiperTimerMixin.__proto__),
    [_timer]: dart.fieldType(async.Timer),
    [_controller]: dart.fieldType(flutter_swiper.SwiperController)
  }));
  const _activeIndex = dart.privateName(flutter_swiper, "_activeIndex");
  const _pageController = dart.privateName(flutter_swiper, "_pageController");
  const _wrapTap = dart.privateName(flutter_swiper, "_wrapTap");
  const _isPageViewLayout = dart.privateName(flutter_swiper, "_isPageViewLayout");
  const _getReverse = dart.privateName(flutter_swiper, "_getReverse");
  const _onIndexChanged = dart.privateName(flutter_swiper, "_onIndexChanged");
  const _buildSwiper = dart.privateName(flutter_swiper, "_buildSwiper");
  const _ensureConfig = dart.privateName(flutter_swiper, "_ensureConfig");
  const _ensureListForStack = dart.privateName(flutter_swiper, "_ensureListForStack");
  const _buildOuterPagination = dart.privateName(flutter_swiper, "_buildOuterPagination");
  flutter_swiper._SwiperState = class _SwiperState extends flutter_swiper._SwiperTimerMixin {
    [_wrapTap](context, index) {
      return new src__widgets__gesture_detector.GestureDetector.new({behavior: src__rendering__proxy_box.HitTestBehavior.opaque, onTap: dart.fn(() => {
          this.widget.onTap(index);
        }, VoidToNull()), child: this.widget.itemBuilder(context, index)});
    }
    initState() {
      this[_activeIndex] = this.widget.index != null ? this.widget.index : 0;
      if (dart.test(this[_isPageViewLayout]())) {
        this[_pageController] = new transformer_page_view$.TransformerPageController.new({initialPage: this.widget.index, loop: this.widget.loop, itemCount: this.widget.itemCount, reverse: this.widget.transformer == null ? false : this.widget.transformer.reverse, viewportFraction: this.widget.viewportFraction});
      }
      super.initState();
    }
    [_isPageViewLayout]() {
      return this.widget.layout == null || this.widget.layout === flutter_swiper.SwiperLayout.DEFAULT;
    }
    didChangeDependencies() {
      super.didChangeDependencies();
    }
    [_getReverse](widget) {
      return widget.transformer == null ? false : widget.transformer.reverse;
    }
    didUpdateWidget(oldWidget) {
      flutter_swiper.Swiper._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (dart.test(this[_isPageViewLayout]())) {
        if (this[_pageController] == null || this.widget.index != oldWidget.index || this.widget.loop != oldWidget.loop || this.widget.itemCount != oldWidget.itemCount || this.widget.viewportFraction != oldWidget.viewportFraction || this[_getReverse](this.widget) != this[_getReverse](oldWidget)) {
          this[_pageController] = new transformer_page_view$.TransformerPageController.new({initialPage: this.widget.index, loop: this.widget.loop, itemCount: this.widget.itemCount, reverse: this[_getReverse](this.widget), viewportFraction: this.widget.viewportFraction});
        }
      } else {
        async.scheduleMicrotask(dart.fn(() => {
          if (this[_pageController] != null) {
            this[_pageController].dispose();
            this[_pageController] = null;
          }
        }, VoidToNull()));
      }
      if (this.widget.index != null && this.widget.index != this[_activeIndex]) {
        this[_activeIndex] = this.widget.index;
      }
    }
    [_onIndexChanged](index) {
      this.setState(dart.fn(() => {
        this[_activeIndex] = index;
      }, VoidToNull()));
      if (this.widget.onIndexChanged != null) {
        this.widget.onIndexChanged(index);
      }
    }
    [_buildSwiper]() {
      let itemBuilder = null;
      if (this.widget.onTap != null) {
        itemBuilder = dart.bind(this, _wrapTap);
      } else {
        itemBuilder = this.widget.itemBuilder;
      }
      if (this.widget.layout === flutter_swiper.SwiperLayout.STACK) {
        return new flutter_swiper._StackSwiper.new({loop: this.widget.loop, itemWidth: this.widget.itemWidth, itemHeight: this.widget.itemHeight, itemCount: this.widget.itemCount, itemBuilder: itemBuilder, index: this[_activeIndex], curve: this.widget.curve, duration: this.widget.duration, onIndexChanged: dart.bind(this, _onIndexChanged), controller: this[_controller], scrollDirection: this.widget.scrollDirection});
      } else if (dart.test(this[_isPageViewLayout]())) {
        let transformer = this.widget.transformer;
        if (this.widget.scale != null || this.widget.fade != null) {
          transformer = new flutter_swiper.ScaleAndFadeTransformer.new({scale: this.widget.scale, fade: this.widget.fade});
        }
        let child = new transformer_page_view$.TransformerPageView.new({pageController: this[_pageController], loop: this.widget.loop, itemCount: this.widget.itemCount, itemBuilder: itemBuilder, transformer: transformer, viewportFraction: this.widget.viewportFraction, index: this[_activeIndex], duration: new core.Duration.new({milliseconds: this.widget.duration}), scrollDirection: this.widget.scrollDirection, onPageChanged: dart.bind(this, _onIndexChanged), curve: this.widget.curve, physics: this.widget.physics, controller: this[_controller]});
        if (dart.test(this.widget.autoplayDisableOnInteraction) && dart.test(this.widget.autoplay)) {
          return new (NotificationListenerOfScrollNotification()).new({child: child, onNotification: dart.fn(notification => {
              if (src__widgets__scroll_notification.ScrollStartNotification.is(notification)) {
                if (notification.dragDetails != null) {
                  if (this[_timer] != null) this[_stopAutoplay]();
                }
              } else if (src__widgets__scroll_notification.ScrollEndNotification.is(notification)) {
                if (this[_timer] == null) this[_startAutoplay]();
              }
              return false;
            }, ScrollNotificationTobool())});
        }
        return child;
      } else if (this.widget.layout === flutter_swiper.SwiperLayout.TINDER) {
        return new flutter_swiper._TinderSwiper.new({loop: this.widget.loop, itemWidth: this.widget.itemWidth, itemHeight: this.widget.itemHeight, itemCount: this.widget.itemCount, itemBuilder: itemBuilder, index: this[_activeIndex], curve: this.widget.curve, duration: this.widget.duration, onIndexChanged: dart.bind(this, _onIndexChanged), controller: this[_controller], scrollDirection: this.widget.scrollDirection});
      } else if (this.widget.layout === flutter_swiper.SwiperLayout.CUSTOM) {
        return new flutter_swiper._CustomLayoutSwiper.new({loop: this.widget.loop, option: this.widget.customLayoutOption, itemWidth: this.widget.itemWidth, itemHeight: this.widget.itemHeight, itemCount: this.widget.itemCount, itemBuilder: itemBuilder, index: this[_activeIndex], curve: this.widget.curve, duration: this.widget.duration, onIndexChanged: dart.bind(this, _onIndexChanged), controller: this[_controller], scrollDirection: this.widget.scrollDirection});
      } else {
        return new src__widgets__container.Container.new();
      }
    }
    [_ensureConfig](config) {
      if (config == null) {
        config = new flutter_swiper.SwiperPluginConfig.new({outer: this.widget.outer, itemCount: this.widget.itemCount, layout: this.widget.layout, indicatorLayout: this.widget.indicatorLayout, pageController: this[_pageController], activeIndex: this[_activeIndex], scrollDirection: this.widget.scrollDirection, controller: this[_controller], loop: this.widget.loop});
      }
      return config;
    }
    [_ensureListForStack](swiper, listForStack, widget) {
      if (listForStack == null) {
        listForStack = JSArrayOfWidget().of([swiper, widget]);
      } else {
        listForStack[$add](widget);
      }
      return listForStack;
    }
    build(context) {
      let swiper = this[_buildSwiper]();
      let listForStack = null;
      let config = null;
      if (this.widget.control != null) {
        config = this[_ensureConfig](config);
        listForStack = this[_ensureListForStack](swiper, listForStack, this.widget.control.build(context, config));
      }
      if (this.widget.plugins != null) {
        config = this[_ensureConfig](config);
        for (let plugin of this.widget.plugins) {
          listForStack = this[_ensureListForStack](swiper, listForStack, plugin.build(context, config));
        }
      }
      if (this.widget.pagination != null) {
        config = this[_ensureConfig](config);
        if (dart.test(this.widget.outer)) {
          return this[_buildOuterPagination](flutter_swiper.SwiperPagination._check(this.widget.pagination), listForStack == null ? swiper : new src__widgets__basic.Stack.new({children: listForStack}), config);
        } else {
          listForStack = this[_ensureListForStack](swiper, listForStack, this.widget.pagination.build(context, config));
        }
      }
      if (listForStack != null) {
        return new src__widgets__basic.Stack.new({children: listForStack});
      }
      return swiper;
    }
    [_buildOuterPagination](pagination, swiper, config) {
      let list = JSArrayOfWidget().of([]);
      if (this.widget.containerHeight != null || this.widget.containerWidth != null) {
        list[$add](swiper);
      } else {
        list[$add](new src__widgets__basic.Expanded.new({child: swiper}));
      }
      list[$add](new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.center, child: pagination.build(this.context, config)}));
      return new src__widgets__basic.Column.new({children: list, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.stretch, mainAxisSize: src__rendering__flex.MainAxisSize.min});
    }
  };
  (flutter_swiper._SwiperState.new = function() {
    this[_activeIndex] = null;
    this[_pageController] = null;
    flutter_swiper._SwiperState.__proto__.new.call(this);
  }).prototype = flutter_swiper._SwiperState.prototype;
  dart.addTypeTests(flutter_swiper._SwiperState);
  dart.setMethodSignature(flutter_swiper._SwiperState, () => ({
    __proto__: dart.getMethods(flutter_swiper._SwiperState.__proto__),
    [_wrapTap]: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, core.int]),
    [_isPageViewLayout]: dart.fnType(core.bool, []),
    didChangeDependencies: dart.fnType(dart.void, []),
    [_getReverse]: dart.fnType(core.bool, [flutter_swiper.Swiper]),
    [_onIndexChanged]: dart.fnType(dart.void, [core.int]),
    [_buildSwiper]: dart.fnType(src__widgets__framework.Widget, []),
    [_ensureConfig]: dart.fnType(flutter_swiper.SwiperPluginConfig, [flutter_swiper.SwiperPluginConfig]),
    [_ensureListForStack]: dart.fnType(core.List$(src__widgets__framework.Widget), [src__widgets__framework.Widget, core.List$(src__widgets__framework.Widget), src__widgets__framework.Widget]),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    [_buildOuterPagination]: dart.fnType(src__widgets__framework.Widget, [flutter_swiper.SwiperPagination, src__widgets__framework.Widget, flutter_swiper.SwiperPluginConfig])
  }));
  dart.setFieldSignature(flutter_swiper._SwiperState, () => ({
    __proto__: dart.getFields(flutter_swiper._SwiperState.__proto__),
    [_activeIndex]: dart.fieldType(core.int),
    [_pageController]: dart.fieldType(transformer_page_view$.TransformerPageController)
  }));
  flutter_swiper._SubSwiper = class _SubSwiper extends src__widgets__framework.StatefulWidget {
    getCorrectIndex(indexNeedsFix) {
      if (this.itemCount === 0) return 0;
      let value = indexNeedsFix[$modulo](this.itemCount);
      if (value < 0) {
        value = value + dart.notNull(this.itemCount);
      }
      return value;
    }
  };
  (flutter_swiper._SubSwiper.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let loop = opts && 'loop' in opts ? opts.loop : null;
    let itemHeight = opts && 'itemHeight' in opts ? opts.itemHeight : null;
    let itemWidth = opts && 'itemWidth' in opts ? opts.itemWidth : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let curve = opts && 'curve' in opts ? opts.curve : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : src__painting__basic_types.Axis.horizontal;
    let onIndexChanged = opts && 'onIndexChanged' in opts ? opts.onIndexChanged : null;
    this.loop = loop;
    this.itemHeight = itemHeight;
    this.itemWidth = itemWidth;
    this.duration = duration;
    this.curve = curve;
    this.itemBuilder = itemBuilder;
    this.controller = controller;
    this.index = index;
    this.itemCount = itemCount;
    this.scrollDirection = scrollDirection;
    this.onIndexChanged = onIndexChanged;
    flutter_swiper._SubSwiper.__proto__.new.call(this, {key: key});
  }).prototype = flutter_swiper._SubSwiper.prototype;
  dart.addTypeTests(flutter_swiper._SubSwiper);
  dart.setMethodSignature(flutter_swiper._SubSwiper, () => ({
    __proto__: dart.getMethods(flutter_swiper._SubSwiper.__proto__),
    getCorrectIndex: dart.fnType(core.int, [core.int])
  }));
  dart.setFieldSignature(flutter_swiper._SubSwiper, () => ({
    __proto__: dart.getFields(flutter_swiper._SubSwiper.__proto__),
    itemBuilder: dart.finalFieldType(BuildContextAndintToWidget()),
    itemCount: dart.finalFieldType(core.int),
    index: dart.finalFieldType(core.int),
    onIndexChanged: dart.finalFieldType(intTovoid()),
    controller: dart.finalFieldType(flutter_swiper.SwiperController),
    duration: dart.finalFieldType(core.int),
    curve: dart.finalFieldType(src__animation__curves.Curve),
    itemWidth: dart.finalFieldType(core.double),
    itemHeight: dart.finalFieldType(core.double),
    loop: dart.finalFieldType(core.bool),
    scrollDirection: dart.finalFieldType(src__painting__basic_types.Axis)
  }));
  flutter_swiper._TinderSwiper = class _TinderSwiper extends flutter_swiper._SubSwiper {
    createState() {
      return new flutter_swiper._TinderState.new();
    }
  };
  (flutter_swiper._TinderSwiper.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let curve = opts && 'curve' in opts ? opts.curve : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let onIndexChanged = opts && 'onIndexChanged' in opts ? opts.onIndexChanged : null;
    let itemHeight = opts && 'itemHeight' in opts ? opts.itemHeight : null;
    let itemWidth = opts && 'itemWidth' in opts ? opts.itemWidth : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let loop = opts && 'loop' in opts ? opts.loop : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
    if (!(itemWidth != null && itemHeight != null)) dart.assertFailed();
    flutter_swiper._TinderSwiper.__proto__.new.call(this, {loop: loop, key: key, itemWidth: itemWidth, itemHeight: itemHeight, itemBuilder: itemBuilder, curve: curve, duration: duration, controller: controller, index: index, onIndexChanged: onIndexChanged, itemCount: itemCount, scrollDirection: scrollDirection});
  }).prototype = flutter_swiper._TinderSwiper.prototype;
  dart.addTypeTests(flutter_swiper._TinderSwiper);
  dart.setMethodSignature(flutter_swiper._TinderSwiper, () => ({
    __proto__: dart.getMethods(flutter_swiper._TinderSwiper.__proto__),
    createState: dart.fnType(src__widgets__framework.State$(src__widgets__framework.StatefulWidget), [])
  }));
  flutter_swiper._StackSwiper = class _StackSwiper extends flutter_swiper._SubSwiper {
    createState() {
      return new flutter_swiper._StackViewState.new();
    }
  };
  (flutter_swiper._StackSwiper.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let curve = opts && 'curve' in opts ? opts.curve : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let onIndexChanged = opts && 'onIndexChanged' in opts ? opts.onIndexChanged : null;
    let itemHeight = opts && 'itemHeight' in opts ? opts.itemHeight : null;
    let itemWidth = opts && 'itemWidth' in opts ? opts.itemWidth : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let loop = opts && 'loop' in opts ? opts.loop : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
    flutter_swiper._StackSwiper.__proto__.new.call(this, {loop: loop, key: key, itemWidth: itemWidth, itemHeight: itemHeight, itemBuilder: itemBuilder, curve: curve, duration: duration, controller: controller, index: index, onIndexChanged: onIndexChanged, itemCount: itemCount, scrollDirection: scrollDirection});
  }).prototype = flutter_swiper._StackSwiper.prototype;
  dart.addTypeTests(flutter_swiper._StackSwiper);
  dart.setMethodSignature(flutter_swiper._StackSwiper, () => ({
    __proto__: dart.getMethods(flutter_swiper._StackSwiper.__proto__),
    createState: dart.fnType(src__widgets__framework.State$(src__widgets__framework.StatefulWidget), [])
  }));
  const _updateValues = dart.privateName(flutter_swiper, "_updateValues");
  const _startIndex = dart.privateName(flutter_swiper, "_startIndex");
  const _animationCount = dart.privateName(flutter_swiper, "_animationCount");
  const _swiperWidth = dart.privateName(flutter_swiper, "_swiperWidth");
  const _swiperHeight = dart.privateName(flutter_swiper, "_swiperHeight");
  const _currentIndex = dart.privateName(flutter_swiper, "_currentIndex");
  const _buildItem = dart.privateName(flutter_swiper, "_buildItem");
  const _animation = dart.privateName(flutter_swiper, "_animation");
  const _animationController = dart.privateName(flutter_swiper, "_animationController");
  const _currentValue = dart.privateName(flutter_swiper, "_currentValue");
  const _currentPos = dart.privateName(flutter_swiper, "_currentPos");
  const _lockScroll = dart.privateName(flutter_swiper, "_lockScroll");
  const _createAnimationController = dart.privateName(flutter_swiper, "_createAnimationController");
  const _getSize = dart.privateName(flutter_swiper, "_getSize");
  const _ensureIndex = dart.privateName(flutter_swiper, "_ensureIndex");
  const _buildContainer = dart.privateName(flutter_swiper, "_buildContainer");
  const _onPanStart = dart.privateName(flutter_swiper, "_onPanStart");
  const _onPanEnd = dart.privateName(flutter_swiper, "_onPanEnd");
  const _onPanUpdate = dart.privateName(flutter_swiper, "_onPanUpdate");
  const _buildAnimation = dart.privateName(flutter_swiper, "_buildAnimation");
  const _move = dart.privateName(flutter_swiper, "_move");
  const _nextIndex = dart.privateName(flutter_swiper, "_nextIndex");
  const _prevIndex = dart.privateName(flutter_swiper, "_prevIndex");
  const _is__CustomLayoutStateBase_default = Symbol('_is__CustomLayoutStateBase_default');
  flutter_swiper._CustomLayoutStateBase$ = dart.generic(T => {
    const State_SingleTickerProviderStateMixin$ = class State_SingleTickerProviderStateMixin extends src__widgets__framework.State$(T) {};
    (State_SingleTickerProviderStateMixin$.new = function() {
      src__widgets__ticker_provider.SingleTickerProviderStateMixin$(T).new.call(this);
      State_SingleTickerProviderStateMixin$.__proto__.new.call(this);
    }).prototype = State_SingleTickerProviderStateMixin$.prototype;
    dart.applyMixin(State_SingleTickerProviderStateMixin$, src__widgets__ticker_provider.SingleTickerProviderStateMixin$(T));
    class _CustomLayoutStateBase extends State_SingleTickerProviderStateMixin$ {
      initState() {
        if (this.widget.itemWidth == null) {
          dart.throw(core.Exception.new("==============\n\nwidget.itemWith must not be null when use stack layout.\n========\n"));
        }
        this[_createAnimationController]();
        this.widget.controller.addListener(dart.bind(this, _onController));
        super.initState();
      }
      [_createAnimationController]() {
        this[_animationController] = new src__animation__animation_controller.AnimationController.new({vsync: this, value: 0.5});
        let tween = new (TweenOfdouble()).new({begin: 0.0, end: 1.0});
        this[_animation] = tween.animate(this[_animationController]);
      }
      didChangeDependencies() {
        src__widgets__binding.WidgetsBinding.instance.addPostFrameCallback(dart.bind(this, _getSize));
        super.didChangeDependencies();
      }
      [_getSize](_) {
        this.afterRender();
      }
      afterRender() {
        let renderObject = this.context.findRenderObject();
        let size = renderObject.paintBounds.size;
        this[_swiperWidth] = size.width;
        this[_swiperHeight] = size.height;
        this.setState(dart.fn(() => {
        }, VoidToNull()));
      }
      didUpdateWidget(oldWidget) {
        T._check(oldWidget);
        if (!dart.equals(this.widget.controller, oldWidget.controller)) {
          oldWidget.controller.removeListener(dart.bind(this, _onController));
          this.widget.controller.addListener(dart.bind(this, _onController));
        }
        if (this.widget.loop != oldWidget.loop) {
          if (!dart.test(this.widget.loop)) {
            this[_currentIndex] = this[_ensureIndex](this[_currentIndex]);
          }
        }
        super.didUpdateWidget(oldWidget);
      }
      [_ensureIndex](index) {
        index = index[$modulo](this.widget.itemCount);
        if (dart.notNull(index) < 0) {
          index = dart.notNull(index) + dart.notNull(this.widget.itemCount);
        }
        return index;
      }
      dispose() {
        this.widget.controller.removeListener(dart.bind(this, _onController));
        let t = this[_animationController];
        t == null ? null : t.dispose();
        super.dispose();
      }
      [_buildContainer](list) {
        return new src__widgets__basic.Stack.new({children: list});
      }
      [_buildAnimation](context, w) {
        let list = JSArrayOfWidget().of([]);
        let animationValue = this[_animation].value;
        for (let i = 0; i < dart.notNull(this[_animationCount]); ++i) {
          let realIndex = dart.notNull(this[_currentIndex]) + i + dart.notNull(this[_startIndex]);
          realIndex = realIndex[$modulo](this.widget.itemCount);
          if (realIndex < 0) {
            realIndex = realIndex + dart.notNull(this.widget.itemCount);
          }
          list[$add](this[_buildItem](i, realIndex, animationValue));
        }
        return new src__widgets__gesture_detector.GestureDetector.new({behavior: src__rendering__proxy_box.HitTestBehavior.opaque, onPanStart: dart.bind(this, _onPanStart), onPanEnd: dart.bind(this, _onPanEnd), onPanUpdate: dart.bind(this, _onPanUpdate), child: new src__widgets__basic.ClipRect.new({child: new src__widgets__basic.Center.new({child: this[_buildContainer](list)})})});
      }
      build(context) {
        if (this[_animationCount] == null) {
          return new src__widgets__container.Container.new();
        }
        return new src__widgets__transitions.AnimatedBuilder.new({animation: this[_animationController], builder: dart.bind(this, _buildAnimation)});
      }
      [_move](position, opts) {
        let nextIndex = opts && 'nextIndex' in opts ? opts.nextIndex : null;
        return async.async(dart.dynamic, (function* _move() {
          if (dart.test(this[_lockScroll])) return;
          try {
            this[_lockScroll] = true;
            yield this[_animationController].animateTo(position, {duration: new core.Duration.new({milliseconds: this.widget.duration}), curve: this.widget.curve});
            if (nextIndex != null) {
              this.widget.onIndexChanged(this.widget.getCorrectIndex(nextIndex));
            }
          } catch (e$) {
            let e = dart.getThrown(e$);
            core.print(e);
          } finally {
            if (nextIndex != null) {
              try {
                this[_animationController].value = 0.5;
              } catch (e$0) {
                let e = dart.getThrown(e$0);
                core.print(e);
              }
              this[_currentIndex] = nextIndex;
            }
            this[_lockScroll] = false;
          }
        }).bind(this));
      }
      [_nextIndex]() {
        let index = dart.notNull(this[_currentIndex]) + 1;
        if (!dart.test(this.widget.loop) && index >= dart.notNull(this.widget.itemCount) - 1) {
          return dart.notNull(this.widget.itemCount) - 1;
        }
        return index;
      }
      [_prevIndex]() {
        let index = dart.notNull(this[_currentIndex]) - 1;
        if (!dart.test(this.widget.loop) && index < 0) {
          return 0;
        }
        return index;
      }
      [_onController]() {
        switch (this.widget.controller.event) {
          case transformer_page_view$.IndexController.PREVIOUS:
          {
            let prevIndex = this[_prevIndex]();
            if (prevIndex == this[_currentIndex]) return;
            this[_move](1.0, {nextIndex: prevIndex});
            break;
          }
          case transformer_page_view$.IndexController.NEXT:
          {
            let nextIndex = this[_nextIndex]();
            if (nextIndex == this[_currentIndex]) return;
            this[_move](0.0, {nextIndex: nextIndex});
            break;
          }
          case transformer_page_view$.IndexController.MOVE:
          {
            dart.throw(core.Exception.new("Custom layout does not support SwiperControllerEvent.MOVE_INDEX yet!"));
          }
          case flutter_swiper.SwiperController.STOP_AUTOPLAY:
          case flutter_swiper.SwiperController.START_AUTOPLAY:
          {
            break;
          }
        }
      }
      [_onPanEnd](details) {
        if (dart.test(this[_lockScroll])) return;
        let velocity = this.widget.scrollDirection === src__painting__basic_types.Axis.horizontal ? details.velocity.pixelsPerSecond.dx : details.velocity.pixelsPerSecond.dy;
        if (dart.notNull(this[_animationController].value) >= 0.75 || dart.notNull(velocity) > 500.0) {
          if (dart.notNull(this[_currentIndex]) <= 0 && !dart.test(this.widget.loop)) {
            return;
          }
          this[_move](1.0, {nextIndex: dart.notNull(this[_currentIndex]) - 1});
        } else if (dart.notNull(this[_animationController].value) < 0.25 || dart.notNull(velocity) < -500.0) {
          if (dart.notNull(this[_currentIndex]) >= dart.notNull(this.widget.itemCount) - 1 && !dart.test(this.widget.loop)) {
            return;
          }
          this[_move](0.0, {nextIndex: dart.notNull(this[_currentIndex]) + 1});
        } else {
          this[_move](0.5);
        }
      }
      [_onPanStart](details) {
        if (dart.test(this[_lockScroll])) return;
        this[_currentValue] = this[_animationController].value;
        this[_currentPos] = this.widget.scrollDirection === src__painting__basic_types.Axis.horizontal ? details.globalPosition.dx : details.globalPosition.dy;
      }
      [_onPanUpdate](details) {
        if (dart.test(this[_lockScroll])) return;
        let value = dart.notNull(this[_currentValue]) + (dart.notNull(this.widget.scrollDirection === src__painting__basic_types.Axis.horizontal ? details.globalPosition.dx : details.globalPosition.dy) - dart.notNull(this[_currentPos])) / dart.notNull(this[_swiperWidth]) / 2;
        if (!dart.test(this.widget.loop)) {
          if (dart.notNull(this[_currentIndex]) >= dart.notNull(this.widget.itemCount) - 1) {
            if (value < 0.5) {
              value = 0.5;
            }
          } else if (dart.notNull(this[_currentIndex]) <= 0) {
            if (value > 0.5) {
              value = 0.5;
            }
          }
        }
        this[_animationController].value = value;
      }
    }
    (_CustomLayoutStateBase.new = function() {
      this[_swiperWidth] = null;
      this[_swiperHeight] = null;
      this[_animation] = null;
      this[_animationController] = null;
      this[_startIndex] = null;
      this[_animationCount] = null;
      this[_currentValue] = null;
      this[_currentPos] = null;
      this[_lockScroll] = false;
      this[_currentIndex] = 0;
      _CustomLayoutStateBase.__proto__.new.call(this);
    }).prototype = _CustomLayoutStateBase.prototype;
    dart.addTypeTests(_CustomLayoutStateBase);
    _CustomLayoutStateBase.prototype[_is__CustomLayoutStateBase_default] = true;
    dart.setMethodSignature(_CustomLayoutStateBase, () => ({
      __proto__: dart.getMethods(_CustomLayoutStateBase.__proto__),
      [_createAnimationController]: dart.fnType(dart.void, []),
      [_getSize]: dart.fnType(dart.void, [dart.dynamic]),
      afterRender: dart.fnType(dart.void, []),
      [_ensureIndex]: dart.fnType(core.int, [core.int]),
      [_buildContainer]: dart.fnType(src__widgets__framework.Widget, [core.List$(src__widgets__framework.Widget)]),
      [_buildAnimation]: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, src__widgets__framework.Widget]),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
      [_move]: dart.fnType(dart.void, [core.double], {nextIndex: core.int}),
      [_nextIndex]: dart.fnType(core.int, []),
      [_prevIndex]: dart.fnType(core.int, []),
      [_onController]: dart.fnType(dart.void, []),
      [_onPanEnd]: dart.fnType(dart.void, [src__gestures__drag_details.DragEndDetails]),
      [_onPanStart]: dart.fnType(dart.void, [src__gestures__drag_details.DragStartDetails]),
      [_onPanUpdate]: dart.fnType(dart.void, [src__gestures__drag_details.DragUpdateDetails])
    }));
    dart.setFieldSignature(_CustomLayoutStateBase, () => ({
      __proto__: dart.getFields(_CustomLayoutStateBase.__proto__),
      [_swiperWidth]: dart.fieldType(core.double),
      [_swiperHeight]: dart.fieldType(core.double),
      [_animation]: dart.fieldType(AnimationOfdouble()),
      [_animationController]: dart.fieldType(src__animation__animation_controller.AnimationController),
      [_startIndex]: dart.fieldType(core.int),
      [_animationCount]: dart.fieldType(core.int),
      [_currentValue]: dart.fieldType(core.double),
      [_currentPos]: dart.fieldType(core.double),
      [_lockScroll]: dart.fieldType(core.bool),
      [_currentIndex]: dart.fieldType(core.int)
    }));
    return _CustomLayoutStateBase;
  });
  flutter_swiper._CustomLayoutStateBase = flutter_swiper._CustomLayoutStateBase$();
  dart.addTypeTests(flutter_swiper._CustomLayoutStateBase, _is__CustomLayoutStateBase_default);
  flutter_swiper._TinderState = class _TinderState extends flutter_swiper._CustomLayoutStateBase$(flutter_swiper._TinderSwiper) {
    getOffsetY(scale) {
      return dart.notNull(this.widget.itemHeight) - dart.notNull(this.widget.itemHeight) * dart.notNull(scale);
    }
    didChangeDependencies() {
      super.didChangeDependencies();
    }
    didUpdateWidget(oldWidget) {
      flutter_swiper._TinderSwiper._check(oldWidget);
      this[_updateValues]();
      super.didUpdateWidget(oldWidget);
    }
    afterRender() {
      super.afterRender();
      this[_startIndex] = -3;
      this[_animationCount] = 5;
      this.opacity = JSArrayOfdouble().of([0.0, 0.9, 0.9, 1.0, 0.0, 0.0]);
      this.scales = JSArrayOfdouble().of([0.8, 0.8, 0.85, 0.9, 1.0, 1.0, 1.0]);
      this.rotates = JSArrayOfdouble().of([0.0, 0.0, 0.0, 0.0, 20.0, 25.0]);
      this[_updateValues]();
    }
    [_updateValues]() {
      if (this.widget.scrollDirection === src__painting__basic_types.Axis.horizontal) {
        this.offsetsX = JSArrayOfdouble().of([0.0, 0.0, 0.0, 0.0, this[_swiperWidth], this[_swiperWidth]]);
        this.offsetsY = JSArrayOfdouble().of([0.0, 0.0, -5.0, -10.0, -15.0, -20.0]);
      } else {
        this.offsetsX = JSArrayOfdouble().of([0.0, 0.0, 5.0, 10.0, 15.0, 20.0]);
        this.offsetsY = JSArrayOfdouble().of([0.0, 0.0, 0.0, 0.0, this[_swiperHeight], this[_swiperHeight]]);
      }
    }
    [_buildItem](i, realIndex, animationValue) {
      let s = flutter_swiper._getValue(this.scales, animationValue, i);
      let f = flutter_swiper._getValue(this.offsetsX, animationValue, i);
      let fy = flutter_swiper._getValue(this.offsetsY, animationValue, i);
      let o = flutter_swiper._getValue(this.opacity, animationValue, i);
      let a = flutter_swiper._getValue(this.rotates, animationValue, i);
      let alignment = this.widget.scrollDirection === src__painting__basic_types.Axis.horizontal ? src__painting__alignment.Alignment.bottomCenter : src__painting__alignment.Alignment.centerLeft;
      return new src__widgets__basic.Opacity.new({opacity: o, child: new src__widgets__basic.Transform.rotate({angle: dart.notNull(a) / 180.0, child: new src__widgets__basic.Transform.translate({key: new (ValueKeyOfint()).new(dart.notNull(this[_currentIndex]) + dart.notNull(i)), offset: new ui$.Offset.new(f, fy), child: new src__widgets__basic.Transform.scale({scale: s, alignment: alignment, child: new src__widgets__basic.SizedBox.new({width: this.widget.itemWidth != null ? this.widget.itemWidth : core.double.infinity, height: this.widget.itemHeight != null ? this.widget.itemHeight : core.double.infinity, child: this.widget.itemBuilder(this.context, realIndex)})})})})});
    }
  };
  (flutter_swiper._TinderState.new = function() {
    this.scales = null;
    this.offsetsX = null;
    this.offsetsY = null;
    this.opacity = null;
    this.rotates = null;
    flutter_swiper._TinderState.__proto__.new.call(this);
  }).prototype = flutter_swiper._TinderState.prototype;
  dart.addTypeTests(flutter_swiper._TinderState);
  dart.setMethodSignature(flutter_swiper._TinderState, () => ({
    __proto__: dart.getMethods(flutter_swiper._TinderState.__proto__),
    getOffsetY: dart.fnType(core.double, [core.double]),
    didChangeDependencies: dart.fnType(dart.void, []),
    afterRender: dart.fnType(dart.void, []),
    [_updateValues]: dart.fnType(dart.void, []),
    [_buildItem]: dart.fnType(src__widgets__framework.Widget, [core.int, core.int, core.double])
  }));
  dart.setFieldSignature(flutter_swiper._TinderState, () => ({
    __proto__: dart.getFields(flutter_swiper._TinderState.__proto__),
    scales: dart.fieldType(ListOfdouble()),
    offsetsX: dart.fieldType(ListOfdouble()),
    offsetsY: dart.fieldType(ListOfdouble()),
    opacity: dart.fieldType(ListOfdouble()),
    rotates: dart.fieldType(ListOfdouble())
  }));
  flutter_swiper._StackViewState = class _StackViewState extends flutter_swiper._CustomLayoutStateBase$(flutter_swiper._StackSwiper) {
    didChangeDependencies() {
      super.didChangeDependencies();
    }
    [_updateValues]() {
      if (this.widget.scrollDirection === src__painting__basic_types.Axis.horizontal) {
        let space = (dart.notNull(this[_swiperWidth]) - dart.notNull(this.widget.itemWidth)) / 2;
        this.offsets = JSArrayOfdouble().of([-space, -space / 3 * 2, -space / 3, 0.0, this[_swiperWidth]]);
      } else {
        let space = (dart.notNull(this[_swiperHeight]) - dart.notNull(this.widget.itemHeight)) / 2;
        this.offsets = JSArrayOfdouble().of([-space, -space / 3 * 2, -space / 3, 0.0, this[_swiperHeight]]);
      }
    }
    didUpdateWidget(oldWidget) {
      flutter_swiper._StackSwiper._check(oldWidget);
      this[_updateValues]();
      super.didUpdateWidget(oldWidget);
    }
    afterRender() {
      super.afterRender();
      this[_animationCount] = 5;
      this[_startIndex] = -3;
      this.scales = JSArrayOfdouble().of([0.7, 0.8, 0.9, 1.0, 1.0]);
      this.opacity = JSArrayOfdouble().of([0.0, 0.5, 1.0, 1.0, 1.0]);
      this[_updateValues]();
    }
    [_buildItem](i, realIndex, animationValue) {
      let s = flutter_swiper._getValue(this.scales, animationValue, i);
      let f = flutter_swiper._getValue(this.offsets, animationValue, i);
      let o = flutter_swiper._getValue(this.opacity, animationValue, i);
      let offset = this.widget.scrollDirection === src__painting__basic_types.Axis.horizontal ? new ui$.Offset.new(f, 0.0) : new ui$.Offset.new(0.0, f);
      let alignment = this.widget.scrollDirection === src__painting__basic_types.Axis.horizontal ? src__painting__alignment.Alignment.centerLeft : src__painting__alignment.Alignment.topCenter;
      return new src__widgets__basic.Opacity.new({opacity: o, child: new src__widgets__basic.Transform.translate({key: new (ValueKeyOfint()).new(dart.notNull(this[_currentIndex]) + dart.notNull(i)), offset: offset, child: new src__widgets__basic.Transform.scale({scale: s, alignment: alignment, child: new src__widgets__basic.SizedBox.new({width: this.widget.itemWidth != null ? this.widget.itemWidth : core.double.infinity, height: this.widget.itemHeight != null ? this.widget.itemHeight : core.double.infinity, child: this.widget.itemBuilder(this.context, realIndex)})})})});
    }
  };
  (flutter_swiper._StackViewState.new = function() {
    this.scales = null;
    this.offsets = null;
    this.opacity = null;
    flutter_swiper._StackViewState.__proto__.new.call(this);
  }).prototype = flutter_swiper._StackViewState.prototype;
  dart.addTypeTests(flutter_swiper._StackViewState);
  dart.setMethodSignature(flutter_swiper._StackViewState, () => ({
    __proto__: dart.getMethods(flutter_swiper._StackViewState.__proto__),
    didChangeDependencies: dart.fnType(dart.void, []),
    [_updateValues]: dart.fnType(dart.void, []),
    afterRender: dart.fnType(dart.void, []),
    [_buildItem]: dart.fnType(src__widgets__framework.Widget, [core.int, core.int, core.double])
  }));
  dart.setFieldSignature(flutter_swiper._StackViewState, () => ({
    __proto__: dart.getFields(flutter_swiper._StackViewState.__proto__),
    scales: dart.fieldType(ListOfdouble()),
    offsets: dart.fieldType(ListOfdouble()),
    opacity: dart.fieldType(ListOfdouble())
  }));
  const _fade = dart.privateName(flutter_swiper, "_fade");
  const _scale = dart.privateName(flutter_swiper, "_scale");
  flutter_swiper.ScaleAndFadeTransformer = class ScaleAndFadeTransformer extends transformer_page_view$.PageTransformer {
    transform(item, info) {
      let position = info.position;
      let child = item;
      if (this[_scale] != null) {
        let scaleFactor = (1 - position[$abs]()) * (1 - dart.notNull(this[_scale]));
        let scale = dart.notNull(this[_scale]) + scaleFactor;
        child = new src__widgets__basic.Transform.scale({scale: scale, child: item});
      }
      if (this[_fade] != null) {
        let fadeFactor = (1 - position[$abs]()) * (1 - dart.notNull(this[_fade]));
        let opacity = dart.notNull(this[_fade]) + fadeFactor;
        child = new src__widgets__basic.Opacity.new({opacity: opacity, child: child});
      }
      return child;
    }
  };
  (flutter_swiper.ScaleAndFadeTransformer.new = function(opts) {
    let fade = opts && 'fade' in opts ? opts.fade : 0.3;
    let scale = opts && 'scale' in opts ? opts.scale : 0.8;
    this[_fade] = fade;
    this[_scale] = scale;
    flutter_swiper.ScaleAndFadeTransformer.__proto__.new.call(this);
  }).prototype = flutter_swiper.ScaleAndFadeTransformer.prototype;
  dart.addTypeTests(flutter_swiper.ScaleAndFadeTransformer);
  dart.setMethodSignature(flutter_swiper.ScaleAndFadeTransformer, () => ({
    __proto__: dart.getMethods(flutter_swiper.ScaleAndFadeTransformer.__proto__),
    transform: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.Widget, transformer_page_view$.TransformInfo])
  }));
  dart.setFieldSignature(flutter_swiper.ScaleAndFadeTransformer, () => ({
    __proto__: dart.getFields(flutter_swiper.ScaleAndFadeTransformer.__proto__),
    [_scale]: dart.finalFieldType(core.double),
    [_fade]: dart.finalFieldType(core.double)
  }));
  let const$;
  flutter_swiper.SwiperPlugin = class SwiperPlugin extends core.Object {};
  (flutter_swiper.SwiperPlugin.new = function() {
  }).prototype = flutter_swiper.SwiperPlugin.prototype;
  dart.addTypeTests(flutter_swiper.SwiperPlugin);
  flutter_swiper.SwiperControl = class SwiperControl extends flutter_swiper.SwiperPlugin {
    get iconPrevious() {
      return this[iconPrevious$];
    }
    set iconPrevious(value) {
      super.iconPrevious = value;
    }
    get iconNext() {
      return this[iconNext$];
    }
    set iconNext(value) {
      super.iconNext = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get disableColor() {
      return this[disableColor$];
    }
    set disableColor(value) {
      super.disableColor = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    buildButton(config, color, iconDaga, quarterTurns, previous) {
      return new src__widgets__gesture_detector.GestureDetector.new({behavior: src__rendering__proxy_box.HitTestBehavior.opaque, onTap: dart.fn(() => {
          if (dart.test(previous)) {
            config.controller.previous({animation: true});
          } else {
            config.controller.next({animation: true});
          }
        }, VoidToNull()), child: new src__widgets__basic.Padding.new({padding: this.padding, child: new src__widgets__basic.RotatedBox.new({quarterTurns: quarterTurns, child: new src__widgets__icon.Icon.new(iconDaga, {semanticLabel: dart.test(previous) ? "Previous" : "Next", size: this.size, color: color})})})});
    }
    build(context, config) {
      let themeData = src__material__theme.Theme.of(context);
      let l = this.color;
      let color = l != null ? l : themeData.primaryColor;
      let l$ = this.disableColor;
      let disableColor = l$ != null ? l$ : themeData.disabledColor;
      let prevColor = null;
      let nextColor = null;
      if (dart.test(config.loop)) {
        prevColor = nextColor = color;
      } else {
        let next = dart.notNull(config.activeIndex) < dart.notNull(config.itemCount) - 1;
        let prev = dart.notNull(config.activeIndex) > 0;
        prevColor = prev ? color : disableColor;
        nextColor = next ? color : disableColor;
      }
      let child = null;
      if (config.scrollDirection === src__painting__basic_types.Axis.horizontal) {
        child = new src__widgets__basic.Row.new({key: this.key, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([this.buildButton(config, prevColor, this.iconPrevious, 0, true), this.buildButton(config, nextColor, this.iconNext, 0, false)])});
      } else {
        child = new src__widgets__basic.Column.new({key: this.key, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([this.buildButton(config, prevColor, this.iconPrevious, -3, true), this.buildButton(config, nextColor, this.iconNext, -3, false)])});
      }
      return new src__widgets__container.Container.new({height: core.double.infinity, child: child, width: core.double.infinity});
    }
  };
  (flutter_swiper.SwiperControl.new = function(opts) {
    let iconPrevious = opts && 'iconPrevious' in opts ? opts.iconPrevious : src__material__icons.Icons.arrow_back_ios;
    let iconNext = opts && 'iconNext' in opts ? opts.iconNext : src__material__icons.Icons.arrow_forward_ios;
    let color = opts && 'color' in opts ? opts.color : null;
    let disableColor = opts && 'disableColor' in opts ? opts.disableColor : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : 30.0;
    let padding = opts && 'padding' in opts ? opts.padding : const$ || (const$ = dart.const(new src__painting__edge_insets.EdgeInsets.all(5.0)));
    this[iconPrevious$] = iconPrevious;
    this[iconNext$] = iconNext;
    this[color$] = color;
    this[disableColor$] = disableColor;
    this[key$] = key;
    this[size$] = size;
    this[padding$] = padding;
    flutter_swiper.SwiperControl.__proto__.new.call(this);
  }).prototype = flutter_swiper.SwiperControl.prototype;
  dart.addTypeTests(flutter_swiper.SwiperControl);
  const iconPrevious$ = Symbol("SwiperControl.iconPrevious");
  const iconNext$ = Symbol("SwiperControl.iconNext");
  const size$ = Symbol("SwiperControl.size");
  const color$ = Symbol("SwiperControl.color");
  const disableColor$ = Symbol("SwiperControl.disableColor");
  const padding$ = Symbol("SwiperControl.padding");
  const key$ = Symbol("SwiperControl.key");
  dart.setMethodSignature(flutter_swiper.SwiperControl, () => ({
    __proto__: dart.getMethods(flutter_swiper.SwiperControl.__proto__),
    buildButton: dart.fnType(src__widgets__framework.Widget, [flutter_swiper.SwiperPluginConfig, ui$.Color, src__widgets__icon_data.IconData, core.int, core.bool]),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, flutter_swiper.SwiperPluginConfig])
  }));
  dart.setFieldSignature(flutter_swiper.SwiperControl, () => ({
    __proto__: dart.getFields(flutter_swiper.SwiperControl.__proto__),
    iconPrevious: dart.finalFieldType(src__widgets__icon_data.IconData),
    iconNext: dart.finalFieldType(src__widgets__icon_data.IconData),
    size: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui$.Color),
    disableColor: dart.finalFieldType(ui$.Color),
    padding: dart.finalFieldType(src__painting__edge_insets.EdgeInsetsGeometry),
    key: dart.finalFieldType(src__foundation__key.Key)
  }));
  flutter_swiper.SwiperController = class SwiperController extends transformer_page_view$.IndexController {
    get config() {
      return this[config];
    }
    set config(value) {
      this[config] = value;
    }
    get pos() {
      return this[pos];
    }
    set pos(value) {
      this[pos] = value;
    }
    get index() {
      return this[index];
    }
    set index(value) {
      this[index] = value;
    }
    get animation() {
      return this[animation$0];
    }
    set animation(value) {
      this[animation$0] = value;
    }
    get autoplay() {
      return this[autoplay];
    }
    set autoplay(value) {
      this[autoplay] = value;
    }
    startAutoplay() {
      this.event = flutter_swiper.SwiperController.START_AUTOPLAY;
      this.autoplay = true;
      this.notifyListeners();
    }
    stopAutoplay() {
      this.event = flutter_swiper.SwiperController.STOP_AUTOPLAY;
      this.autoplay = false;
      this.notifyListeners();
    }
  };
  (flutter_swiper.SwiperController.new = function() {
    this[config] = null;
    this[pos] = null;
    this[index] = null;
    this[animation$0] = null;
    this[autoplay] = null;
    flutter_swiper.SwiperController.__proto__.new.call(this);
  }).prototype = flutter_swiper.SwiperController.prototype;
  dart.addTypeTests(flutter_swiper.SwiperController);
  const config = Symbol("SwiperController.config");
  const pos = Symbol("SwiperController.pos");
  const index = Symbol("SwiperController.index");
  const animation$0 = Symbol("SwiperController.animation");
  const autoplay = Symbol("SwiperController.autoplay");
  dart.setMethodSignature(flutter_swiper.SwiperController, () => ({
    __proto__: dart.getMethods(flutter_swiper.SwiperController.__proto__),
    startAutoplay: dart.fnType(dart.void, []),
    stopAutoplay: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(flutter_swiper.SwiperController, () => ({
    __proto__: dart.getFields(flutter_swiper.SwiperController.__proto__),
    config: dart.fieldType(flutter_swiper.SwiperPluginConfig),
    pos: dart.fieldType(core.double),
    index: dart.fieldType(core.int),
    animation: dart.fieldType(core.bool),
    autoplay: dart.fieldType(core.bool)
  }));
  dart.defineLazy(flutter_swiper.SwiperController, {
    /*flutter_swiper.SwiperController.START_AUTOPLAY*/get START_AUTOPLAY() {
      return 2;
    },
    /*flutter_swiper.SwiperController.STOP_AUTOPLAY*/get STOP_AUTOPLAY() {
      return 3;
    },
    /*flutter_swiper.SwiperController.SWIPE*/get SWIPE() {
      return 4;
    },
    /*flutter_swiper.SwiperController.BUILD*/get BUILD() {
      return 5;
    }
  });
  flutter_swiper.FractionPaginationBuilder = class FractionPaginationBuilder extends flutter_swiper.SwiperPlugin {
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get activeColor() {
      return this[activeColor$];
    }
    set activeColor(value) {
      super.activeColor = value;
    }
    get fontSize() {
      return this[fontSize$];
    }
    set fontSize(value) {
      super.fontSize = value;
    }
    get activeFontSize() {
      return this[activeFontSize$];
    }
    set activeFontSize(value) {
      super.activeFontSize = value;
    }
    get key() {
      return this[key$0];
    }
    set key(value) {
      super.key = value;
    }
    build(context, config) {
      let themeData = src__material__theme.Theme.of(context);
      let l = this.activeColor;
      let activeColor = l != null ? l : themeData.primaryColor;
      let l$ = this.color;
      let color = l$ != null ? l$ : themeData.scaffoldBackgroundColor;
      if (src__painting__basic_types.Axis.vertical === config.scrollDirection) {
        return new src__widgets__basic.Column.new({key: this.key, mainAxisSize: src__rendering__flex.MainAxisSize.min, children: JSArrayOfWidget().of([new src__widgets__text.Text.new(dart.str(dart.notNull(config.activeIndex) + 1), {style: new src__painting__text_style.TextStyle.new({color: activeColor, fontSize: this.activeFontSize})}), new src__widgets__text.Text.new("/", {style: new src__painting__text_style.TextStyle.new({color: color, fontSize: this.fontSize})}), new src__widgets__text.Text.new(dart.str(config.itemCount), {style: new src__painting__text_style.TextStyle.new({color: color, fontSize: this.fontSize})})])});
      } else {
        return new src__widgets__basic.Row.new({key: this.key, mainAxisSize: src__rendering__flex.MainAxisSize.min, children: JSArrayOfWidget().of([new src__widgets__text.Text.new(dart.str(dart.notNull(config.activeIndex) + 1), {style: new src__painting__text_style.TextStyle.new({color: activeColor, fontSize: this.activeFontSize})}), new src__widgets__text.Text.new(" / " + dart.str(config.itemCount), {style: new src__painting__text_style.TextStyle.new({color: color, fontSize: this.fontSize})})])});
      }
    }
  };
  (flutter_swiper.FractionPaginationBuilder.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : 20.0;
    let key = opts && 'key' in opts ? opts.key : null;
    let activeColor = opts && 'activeColor' in opts ? opts.activeColor : null;
    let activeFontSize = opts && 'activeFontSize' in opts ? opts.activeFontSize : 35.0;
    this[color$0] = color;
    this[fontSize$] = fontSize;
    this[key$0] = key;
    this[activeColor$] = activeColor;
    this[activeFontSize$] = activeFontSize;
    flutter_swiper.FractionPaginationBuilder.__proto__.new.call(this);
  }).prototype = flutter_swiper.FractionPaginationBuilder.prototype;
  dart.addTypeTests(flutter_swiper.FractionPaginationBuilder);
  const color$0 = Symbol("FractionPaginationBuilder.color");
  const activeColor$ = Symbol("FractionPaginationBuilder.activeColor");
  const fontSize$ = Symbol("FractionPaginationBuilder.fontSize");
  const activeFontSize$ = Symbol("FractionPaginationBuilder.activeFontSize");
  const key$0 = Symbol("FractionPaginationBuilder.key");
  dart.setMethodSignature(flutter_swiper.FractionPaginationBuilder, () => ({
    __proto__: dart.getMethods(flutter_swiper.FractionPaginationBuilder.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, flutter_swiper.SwiperPluginConfig])
  }));
  dart.setFieldSignature(flutter_swiper.FractionPaginationBuilder, () => ({
    __proto__: dart.getFields(flutter_swiper.FractionPaginationBuilder.__proto__),
    color: dart.finalFieldType(ui$.Color),
    activeColor: dart.finalFieldType(ui$.Color),
    fontSize: dart.finalFieldType(core.double),
    activeFontSize: dart.finalFieldType(core.double),
    key: dart.finalFieldType(src__foundation__key.Key)
  }));
  let const$0;
  let const$1;
  flutter_swiper.RectSwiperPaginationBuilder = class RectSwiperPaginationBuilder extends flutter_swiper.SwiperPlugin {
    get activeColor() {
      return this[activeColor$0];
    }
    set activeColor(value) {
      super.activeColor = value;
    }
    get color() {
      return this[color$1];
    }
    set color(value) {
      super.color = value;
    }
    get activeSize() {
      return this[activeSize$];
    }
    set activeSize(value) {
      super.activeSize = value;
    }
    get size() {
      return this[size$0];
    }
    set size(value) {
      super.size = value;
    }
    get space() {
      return this[space$];
    }
    set space(value) {
      super.space = value;
    }
    get key() {
      return this[key$1];
    }
    set key(value) {
      super.key = value;
    }
    build(context, config) {
      let themeData = src__material__theme.Theme.of(context);
      let l = this.activeColor;
      let activeColor = l != null ? l : themeData.primaryColor;
      let l$ = this.color;
      let color = l$ != null ? l$ : themeData.scaffoldBackgroundColor;
      let list = JSArrayOfWidget().of([]);
      if (dart.notNull(config.itemCount) > 20) {
        core.print("The itemCount is too big, we suggest use FractionPaginationBuilder instead of DotSwiperPaginationBuilder in this sitituation");
      }
      let itemCount = config.itemCount;
      let activeIndex = config.activeIndex;
      for (let i = 0; i < dart.notNull(itemCount); ++i) {
        let active = i === activeIndex;
        let size = active ? this.activeSize : this.size;
        list[$add](new src__widgets__basic.SizedBox.new({width: size.width, height: size.height, child: new src__widgets__container.Container.new({color: active ? activeColor : color, key: src__foundation__key.Key.new("pagination_" + dart.str(i)), margin: new src__painting__edge_insets.EdgeInsets.all(this.space)})}));
      }
      if (config.scrollDirection === src__painting__basic_types.Axis.vertical) {
        return new src__widgets__basic.Column.new({key: this.key, mainAxisSize: src__rendering__flex.MainAxisSize.min, children: list});
      } else {
        return new src__widgets__basic.Row.new({key: this.key, mainAxisSize: src__rendering__flex.MainAxisSize.min, children: list});
      }
    }
  };
  (flutter_swiper.RectSwiperPaginationBuilder.new = function(opts) {
    let activeColor = opts && 'activeColor' in opts ? opts.activeColor : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : const$0 || (const$0 = dart.const(new ui$.Size.new(10.0, 2.0)));
    let activeSize = opts && 'activeSize' in opts ? opts.activeSize : const$1 || (const$1 = dart.const(new ui$.Size.new(10.0, 2.0)));
    let space = opts && 'space' in opts ? opts.space : 3.0;
    this[activeColor$0] = activeColor;
    this[color$1] = color;
    this[key$1] = key;
    this[size$0] = size;
    this[activeSize$] = activeSize;
    this[space$] = space;
    flutter_swiper.RectSwiperPaginationBuilder.__proto__.new.call(this);
  }).prototype = flutter_swiper.RectSwiperPaginationBuilder.prototype;
  dart.addTypeTests(flutter_swiper.RectSwiperPaginationBuilder);
  const activeColor$0 = Symbol("RectSwiperPaginationBuilder.activeColor");
  const color$1 = Symbol("RectSwiperPaginationBuilder.color");
  const activeSize$ = Symbol("RectSwiperPaginationBuilder.activeSize");
  const size$0 = Symbol("RectSwiperPaginationBuilder.size");
  const space$ = Symbol("RectSwiperPaginationBuilder.space");
  const key$1 = Symbol("RectSwiperPaginationBuilder.key");
  dart.setMethodSignature(flutter_swiper.RectSwiperPaginationBuilder, () => ({
    __proto__: dart.getMethods(flutter_swiper.RectSwiperPaginationBuilder.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, flutter_swiper.SwiperPluginConfig])
  }));
  dart.setFieldSignature(flutter_swiper.RectSwiperPaginationBuilder, () => ({
    __proto__: dart.getFields(flutter_swiper.RectSwiperPaginationBuilder.__proto__),
    activeColor: dart.finalFieldType(ui$.Color),
    color: dart.finalFieldType(ui$.Color),
    activeSize: dart.finalFieldType(ui$.Size),
    size: dart.finalFieldType(ui$.Size),
    space: dart.finalFieldType(core.double),
    key: dart.finalFieldType(src__foundation__key.Key)
  }));
  flutter_swiper.DotSwiperPaginationBuilder = class DotSwiperPaginationBuilder extends flutter_swiper.SwiperPlugin {
    get activeColor() {
      return this[activeColor$1];
    }
    set activeColor(value) {
      super.activeColor = value;
    }
    get color() {
      return this[color$2];
    }
    set color(value) {
      super.color = value;
    }
    get activeSize() {
      return this[activeSize$0];
    }
    set activeSize(value) {
      super.activeSize = value;
    }
    get size() {
      return this[size$1];
    }
    set size(value) {
      super.size = value;
    }
    get space() {
      return this[space$0];
    }
    set space(value) {
      super.space = value;
    }
    get key() {
      return this[key$2];
    }
    set key(value) {
      super.key = value;
    }
    build(context, config) {
      if (dart.notNull(config.itemCount) > 20) {
        core.print("The itemCount is too big, we suggest use FractionPaginationBuilder instead of DotSwiperPaginationBuilder in this sitituation");
      }
      let activeColor = this.activeColor;
      let color = this.color;
      if (activeColor == null || color == null) {
        let themeData = src__material__theme.Theme.of(context);
        let l = this.activeColor;
        activeColor = l != null ? l : themeData.primaryColor;
        let l$ = this.color;
        color = l$ != null ? l$ : themeData.scaffoldBackgroundColor;
      }
      if (config.indicatorLayout !== flutter_page_indicator$.PageIndicatorLayout.NONE && config.layout === flutter_swiper.SwiperLayout.DEFAULT) {
        return new flutter_page_indicator$.PageIndicator.new({count: config.itemCount, controller: config.pageController, layout: config.indicatorLayout, size: this.size, activeColor: activeColor, color: color, space: this.space});
      }
      let list = JSArrayOfWidget().of([]);
      let itemCount = config.itemCount;
      let activeIndex = config.activeIndex;
      for (let i = 0; i < dart.notNull(itemCount); ++i) {
        let active = i === activeIndex;
        list[$add](new src__widgets__container.Container.new({key: src__foundation__key.Key.new("pagination_" + dart.str(i)), margin: new src__painting__edge_insets.EdgeInsets.all(this.space), child: new src__widgets__basic.ClipOval.new({child: new src__widgets__container.Container.new({color: active ? activeColor : color, width: active ? this.activeSize : this.size, height: active ? this.activeSize : this.size})})}));
      }
      if (config.scrollDirection === src__painting__basic_types.Axis.vertical) {
        return new src__widgets__basic.Column.new({key: this.key, mainAxisSize: src__rendering__flex.MainAxisSize.min, children: list});
      } else {
        return new src__widgets__basic.Row.new({key: this.key, mainAxisSize: src__rendering__flex.MainAxisSize.min, children: list});
      }
    }
  };
  (flutter_swiper.DotSwiperPaginationBuilder.new = function(opts) {
    let activeColor = opts && 'activeColor' in opts ? opts.activeColor : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : 10.0;
    let activeSize = opts && 'activeSize' in opts ? opts.activeSize : 10.0;
    let space = opts && 'space' in opts ? opts.space : 3.0;
    this[activeColor$1] = activeColor;
    this[color$2] = color;
    this[key$2] = key;
    this[size$1] = size;
    this[activeSize$0] = activeSize;
    this[space$0] = space;
    flutter_swiper.DotSwiperPaginationBuilder.__proto__.new.call(this);
  }).prototype = flutter_swiper.DotSwiperPaginationBuilder.prototype;
  dart.addTypeTests(flutter_swiper.DotSwiperPaginationBuilder);
  const activeColor$1 = Symbol("DotSwiperPaginationBuilder.activeColor");
  const color$2 = Symbol("DotSwiperPaginationBuilder.color");
  const activeSize$0 = Symbol("DotSwiperPaginationBuilder.activeSize");
  const size$1 = Symbol("DotSwiperPaginationBuilder.size");
  const space$0 = Symbol("DotSwiperPaginationBuilder.space");
  const key$2 = Symbol("DotSwiperPaginationBuilder.key");
  dart.setMethodSignature(flutter_swiper.DotSwiperPaginationBuilder, () => ({
    __proto__: dart.getMethods(flutter_swiper.DotSwiperPaginationBuilder.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, flutter_swiper.SwiperPluginConfig])
  }));
  dart.setFieldSignature(flutter_swiper.DotSwiperPaginationBuilder, () => ({
    __proto__: dart.getFields(flutter_swiper.DotSwiperPaginationBuilder.__proto__),
    activeColor: dart.finalFieldType(ui$.Color),
    color: dart.finalFieldType(ui$.Color),
    activeSize: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    space: dart.finalFieldType(core.double),
    key: dart.finalFieldType(src__foundation__key.Key)
  }));
  flutter_swiper.SwiperCustomPagination = class SwiperCustomPagination extends flutter_swiper.SwiperPlugin {
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    build(context, config) {
      return this.builder(context, config);
    }
  };
  (flutter_swiper.SwiperCustomPagination.new = function(opts) {
    let builder = opts && 'builder' in opts ? opts.builder : null;
    this[builder$] = builder;
    if (!(builder != null)) dart.assertFailed();
    flutter_swiper.SwiperCustomPagination.__proto__.new.call(this);
  }).prototype = flutter_swiper.SwiperCustomPagination.prototype;
  dart.addTypeTests(flutter_swiper.SwiperCustomPagination);
  const builder$ = Symbol("SwiperCustomPagination.builder");
  dart.setMethodSignature(flutter_swiper.SwiperCustomPagination, () => ({
    __proto__: dart.getMethods(flutter_swiper.SwiperCustomPagination.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, flutter_swiper.SwiperPluginConfig])
  }));
  dart.setFieldSignature(flutter_swiper.SwiperCustomPagination, () => ({
    __proto__: dart.getFields(flutter_swiper.SwiperCustomPagination.__proto__),
    builder: dart.finalFieldType(BuildContextAndSwiperPluginConfigToWidget())
  }));
  let const$2;
  flutter_swiper.SwiperPagination = class SwiperPagination extends flutter_swiper.SwiperPlugin {
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      super.margin = value;
    }
    get builder() {
      return this[builder$0];
    }
    set builder(value) {
      super.builder = value;
    }
    get key() {
      return this[key$3];
    }
    set key(value) {
      super.key = value;
    }
    build(context, config) {
      let l = this.alignment;
      let alignment = l != null ? l : config.scrollDirection === src__painting__basic_types.Axis.horizontal ? src__painting__alignment.Alignment.bottomCenter : src__painting__alignment.Alignment.centerRight;
      let child = new src__widgets__container.Container.new({margin: this.margin, child: this.builder.build(context, config)});
      if (!dart.test(config.outer)) {
        child = new src__widgets__basic.Align.new({key: this.key, alignment: alignment, child: child});
      }
      return child;
    }
  };
  (flutter_swiper.SwiperPagination.new = function(opts) {
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let margin = opts && 'margin' in opts ? opts.margin : const$2 || (const$2 = dart.const(new src__painting__edge_insets.EdgeInsets.all(10.0)));
    let builder = opts && 'builder' in opts ? opts.builder : flutter_swiper.SwiperPagination.dots;
    this[alignment$] = alignment;
    this[key$3] = key;
    this[margin$] = margin;
    this[builder$0] = builder;
    flutter_swiper.SwiperPagination.__proto__.new.call(this);
  }).prototype = flutter_swiper.SwiperPagination.prototype;
  dart.addTypeTests(flutter_swiper.SwiperPagination);
  const alignment$ = Symbol("SwiperPagination.alignment");
  const margin$ = Symbol("SwiperPagination.margin");
  const builder$0 = Symbol("SwiperPagination.builder");
  const key$3 = Symbol("SwiperPagination.key");
  dart.setMethodSignature(flutter_swiper.SwiperPagination, () => ({
    __proto__: dart.getMethods(flutter_swiper.SwiperPagination.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, flutter_swiper.SwiperPluginConfig])
  }));
  dart.setFieldSignature(flutter_swiper.SwiperPagination, () => ({
    __proto__: dart.getFields(flutter_swiper.SwiperPagination.__proto__),
    alignment: dart.finalFieldType(src__painting__alignment.Alignment),
    margin: dart.finalFieldType(src__painting__edge_insets.EdgeInsetsGeometry),
    builder: dart.finalFieldType(flutter_swiper.SwiperPlugin),
    key: dart.finalFieldType(src__foundation__key.Key)
  }));
  dart.defineLazy(flutter_swiper.SwiperPagination, {
    /*flutter_swiper.SwiperPagination.dots*/get dots() {
      return dart.const(new flutter_swiper.DotSwiperPaginationBuilder.new());
    },
    /*flutter_swiper.SwiperPagination.fraction*/get fraction() {
      return dart.const(new flutter_swiper.FractionPaginationBuilder.new());
    },
    /*flutter_swiper.SwiperPagination.rect*/get rect() {
      return dart.const(new flutter_swiper.RectSwiperPaginationBuilder.new());
    }
  });
  flutter_swiper.SwiperPluginConfig = class SwiperPluginConfig extends core.Object {
    get activeIndex() {
      return this[activeIndex$];
    }
    set activeIndex(value) {
      super.activeIndex = value;
    }
    get itemCount() {
      return this[itemCount$0];
    }
    set itemCount(value) {
      super.itemCount = value;
    }
    get indicatorLayout() {
      return this[indicatorLayout$0];
    }
    set indicatorLayout(value) {
      super.indicatorLayout = value;
    }
    get scrollDirection() {
      return this[scrollDirection$0];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
    get loop() {
      return this[loop$0];
    }
    set loop(value) {
      super.loop = value;
    }
    get outer() {
      return this[outer$0];
    }
    set outer(value) {
      super.outer = value;
    }
    get pageController() {
      return this[pageController$];
    }
    set pageController(value) {
      super.pageController = value;
    }
    get controller() {
      return this[controller$0];
    }
    set controller(value) {
      super.controller = value;
    }
    get layout() {
      return this[layout$0];
    }
    set layout(value) {
      super.layout = value;
    }
  };
  (flutter_swiper.SwiperPluginConfig.new = function(opts) {
    let activeIndex = opts && 'activeIndex' in opts ? opts.activeIndex : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let indicatorLayout = opts && 'indicatorLayout' in opts ? opts.indicatorLayout : null;
    let outer = opts && 'outer' in opts ? opts.outer : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let pageController = opts && 'pageController' in opts ? opts.pageController : null;
    let layout = opts && 'layout' in opts ? opts.layout : null;
    let loop = opts && 'loop' in opts ? opts.loop : null;
    this[activeIndex$] = activeIndex;
    this[itemCount$0] = itemCount;
    this[indicatorLayout$0] = indicatorLayout;
    this[outer$0] = outer;
    this[scrollDirection$0] = scrollDirection;
    this[controller$0] = controller;
    this[pageController$] = pageController;
    this[layout$0] = layout;
    this[loop$0] = loop;
    if (!(scrollDirection != null)) dart.assertFailed();
    if (!(controller != null)) dart.assertFailed();
  }).prototype = flutter_swiper.SwiperPluginConfig.prototype;
  dart.addTypeTests(flutter_swiper.SwiperPluginConfig);
  const activeIndex$ = Symbol("SwiperPluginConfig.activeIndex");
  const itemCount$0 = Symbol("SwiperPluginConfig.itemCount");
  const indicatorLayout$0 = Symbol("SwiperPluginConfig.indicatorLayout");
  const scrollDirection$0 = Symbol("SwiperPluginConfig.scrollDirection");
  const loop$0 = Symbol("SwiperPluginConfig.loop");
  const outer$0 = Symbol("SwiperPluginConfig.outer");
  const pageController$ = Symbol("SwiperPluginConfig.pageController");
  const controller$0 = Symbol("SwiperPluginConfig.controller");
  const layout$0 = Symbol("SwiperPluginConfig.layout");
  dart.setFieldSignature(flutter_swiper.SwiperPluginConfig, () => ({
    __proto__: dart.getFields(flutter_swiper.SwiperPluginConfig.__proto__),
    activeIndex: dart.finalFieldType(core.int),
    itemCount: dart.finalFieldType(core.int),
    indicatorLayout: dart.finalFieldType(flutter_page_indicator$.PageIndicatorLayout),
    scrollDirection: dart.finalFieldType(src__painting__basic_types.Axis),
    loop: dart.finalFieldType(core.bool),
    outer: dart.finalFieldType(core.bool),
    pageController: dart.finalFieldType(src__widgets__page_view.PageController),
    controller: dart.finalFieldType(flutter_swiper.SwiperController),
    layout: dart.finalFieldType(flutter_swiper.SwiperLayout)
  }));
  flutter_swiper.SwiperPluginView = class SwiperPluginView extends src__widgets__framework.StatelessWidget {
    get plugin() {
      return this[plugin$];
    }
    set plugin(value) {
      super.plugin = value;
    }
    get config() {
      return this[config$];
    }
    set config(value) {
      super.config = value;
    }
    build(context) {
      return this.plugin.build(context, this.config);
    }
  };
  (flutter_swiper.SwiperPluginView.new = function(plugin, config) {
    this[plugin$] = plugin;
    this[config$] = config;
    flutter_swiper.SwiperPluginView.__proto__.new.call(this);
  }).prototype = flutter_swiper.SwiperPluginView.prototype;
  dart.addTypeTests(flutter_swiper.SwiperPluginView);
  const plugin$ = Symbol("SwiperPluginView.plugin");
  const config$ = Symbol("SwiperPluginView.config");
  dart.setMethodSignature(flutter_swiper.SwiperPluginView, () => ({
    __proto__: dart.getMethods(flutter_swiper.SwiperPluginView.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(flutter_swiper.SwiperPluginView, () => ({
    __proto__: dart.getFields(flutter_swiper.SwiperPluginView.__proto__),
    plugin: dart.finalFieldType(flutter_swiper.SwiperPlugin),
    config: dart.finalFieldType(flutter_swiper.SwiperPluginConfig)
  }));
  flutter_swiper._getValue = function(values, animationValue, index) {
    let s = values[$_get](index);
    if (dart.notNull(animationValue) >= 0.5) {
      if (dart.notNull(index) < dart.notNull(values[$length]) - 1) {
        s = dart.notNull(s) + (dart.notNull(values[$_get](dart.notNull(index) + 1)) - dart.notNull(s)) * (dart.notNull(animationValue) - 0.5) * 2.0;
      }
    } else {
      if (index !== 0) {
        s = dart.notNull(s) - (dart.notNull(s) - dart.notNull(values[$_get](dart.notNull(index) - 1))) * (0.5 - dart.notNull(animationValue)) * 2.0;
      }
    }
    return s;
  };
  flutter_swiper._getOffsetValue = function(values, animationValue, index) {
    let s = values[$_get](index);
    let dx = s.dx;
    let dy = s.dy;
    if (dart.notNull(animationValue) >= 0.5) {
      if (dart.notNull(index) < dart.notNull(values[$length]) - 1) {
        dx = dart.notNull(dx) + (dart.notNull(values[$_get](dart.notNull(index) + 1).dx) - dart.notNull(dx)) * (dart.notNull(animationValue) - 0.5) * 2.0;
        dy = dart.notNull(dy) + (dart.notNull(values[$_get](dart.notNull(index) + 1).dy) - dart.notNull(dy)) * (dart.notNull(animationValue) - 0.5) * 2.0;
      }
    } else {
      if (index !== 0) {
        dx = dart.notNull(dx) - (dart.notNull(dx) - dart.notNull(values[$_get](dart.notNull(index) - 1).dx)) * (0.5 - dart.notNull(animationValue)) * 2.0;
        dy = dart.notNull(dy) - (dart.notNull(dy) - dart.notNull(values[$_get](dart.notNull(index) - 1).dy)) * (0.5 - dart.notNull(animationValue)) * 2.0;
      }
    }
    return new ui$.Offset.new(dx, dy);
  };
  const _is_TransformBuilder_default = Symbol('_is_TransformBuilder_default');
  flutter_swiper.TransformBuilder$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class TransformBuilder extends core.Object {
      get values() {
        return this[values$];
      }
      set values(value) {
        this[values$] = ListOfT()._check(value);
      }
    }
    (TransformBuilder.new = function(opts) {
      let values = opts && 'values' in opts ? opts.values : null;
      this[values$] = values;
    }).prototype = TransformBuilder.prototype;
    dart.addTypeTests(TransformBuilder);
    TransformBuilder.prototype[_is_TransformBuilder_default] = true;
    const values$ = Symbol("TransformBuilder.values");
    dart.setFieldSignature(TransformBuilder, () => ({
      __proto__: dart.getFields(TransformBuilder.__proto__),
      values: dart.fieldType(ListOfT())
    }));
    return TransformBuilder;
  });
  flutter_swiper.TransformBuilder = flutter_swiper.TransformBuilder$();
  dart.addTypeTests(flutter_swiper.TransformBuilder, _is_TransformBuilder_default);
  flutter_swiper.ScaleTransformBuilder = class ScaleTransformBuilder extends flutter_swiper.TransformBuilder$(core.double) {
    get alignment() {
      return this[alignment$0];
    }
    set alignment(value) {
      super.alignment = value;
    }
    build(i, animationValue, widget) {
      let s = flutter_swiper._getValue(this.values, animationValue, i);
      return new src__widgets__basic.Transform.scale({scale: s, child: widget});
    }
  };
  (flutter_swiper.ScaleTransformBuilder.new = function(opts) {
    let values = opts && 'values' in opts ? opts.values : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : src__painting__alignment.Alignment.center;
    this[alignment$0] = alignment;
    flutter_swiper.ScaleTransformBuilder.__proto__.new.call(this, {values: values});
  }).prototype = flutter_swiper.ScaleTransformBuilder.prototype;
  dart.addTypeTests(flutter_swiper.ScaleTransformBuilder);
  const alignment$0 = Symbol("ScaleTransformBuilder.alignment");
  dart.setMethodSignature(flutter_swiper.ScaleTransformBuilder, () => ({
    __proto__: dart.getMethods(flutter_swiper.ScaleTransformBuilder.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [core.int, core.double, src__widgets__framework.Widget])
  }));
  dart.setFieldSignature(flutter_swiper.ScaleTransformBuilder, () => ({
    __proto__: dart.getFields(flutter_swiper.ScaleTransformBuilder.__proto__),
    alignment: dart.finalFieldType(src__painting__alignment.Alignment)
  }));
  flutter_swiper.OpacityTransformBuilder = class OpacityTransformBuilder extends flutter_swiper.TransformBuilder$(core.double) {
    build(i, animationValue, widget) {
      let v = flutter_swiper._getValue(this.values, animationValue, i);
      return new src__widgets__basic.Opacity.new({opacity: v, child: widget});
    }
  };
  (flutter_swiper.OpacityTransformBuilder.new = function(opts) {
    let values = opts && 'values' in opts ? opts.values : null;
    flutter_swiper.OpacityTransformBuilder.__proto__.new.call(this, {values: values});
  }).prototype = flutter_swiper.OpacityTransformBuilder.prototype;
  dart.addTypeTests(flutter_swiper.OpacityTransformBuilder);
  dart.setMethodSignature(flutter_swiper.OpacityTransformBuilder, () => ({
    __proto__: dart.getMethods(flutter_swiper.OpacityTransformBuilder.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [core.int, core.double, src__widgets__framework.Widget])
  }));
  flutter_swiper.RotateTransformBuilder = class RotateTransformBuilder extends flutter_swiper.TransformBuilder$(core.double) {
    build(i, animationValue, widget) {
      let v = flutter_swiper._getValue(this.values, animationValue, i);
      return new src__widgets__basic.Transform.rotate({angle: v, child: widget});
    }
  };
  (flutter_swiper.RotateTransformBuilder.new = function(opts) {
    let values = opts && 'values' in opts ? opts.values : null;
    flutter_swiper.RotateTransformBuilder.__proto__.new.call(this, {values: values});
  }).prototype = flutter_swiper.RotateTransformBuilder.prototype;
  dart.addTypeTests(flutter_swiper.RotateTransformBuilder);
  dart.setMethodSignature(flutter_swiper.RotateTransformBuilder, () => ({
    __proto__: dart.getMethods(flutter_swiper.RotateTransformBuilder.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [core.int, core.double, src__widgets__framework.Widget])
  }));
  flutter_swiper.TranslateTransformBuilder = class TranslateTransformBuilder extends flutter_swiper.TransformBuilder$(ui$.Offset) {
    build(i, animationValue, widget) {
      let s = flutter_swiper._getOffsetValue(this.values, animationValue, i);
      return new src__widgets__basic.Transform.translate({offset: s, child: widget});
    }
  };
  (flutter_swiper.TranslateTransformBuilder.new = function(opts) {
    let values = opts && 'values' in opts ? opts.values : null;
    flutter_swiper.TranslateTransformBuilder.__proto__.new.call(this, {values: values});
  }).prototype = flutter_swiper.TranslateTransformBuilder.prototype;
  dart.addTypeTests(flutter_swiper.TranslateTransformBuilder);
  dart.setMethodSignature(flutter_swiper.TranslateTransformBuilder, () => ({
    __proto__: dart.getMethods(flutter_swiper.TranslateTransformBuilder.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [core.int, core.double, src__widgets__framework.Widget])
  }));
  flutter_swiper.CustomLayoutOption = class CustomLayoutOption extends core.Object {
    get builders() {
      return this[builders];
    }
    set builders(value) {
      super.builders = value;
    }
    get startIndex() {
      return this[startIndex$];
    }
    set startIndex(value) {
      super.startIndex = value;
    }
    get stateCount() {
      return this[stateCount$];
    }
    set stateCount(value) {
      super.stateCount = value;
    }
    addOpacity(values) {
      this.builders[$add](new flutter_swiper.OpacityTransformBuilder.new({values: values}));
      return this;
    }
    addTranslate(values) {
      this.builders[$add](new flutter_swiper.TranslateTransformBuilder.new({values: values}));
      return this;
    }
    addScale(values, alignment) {
      this.builders[$add](new flutter_swiper.ScaleTransformBuilder.new({values: values, alignment: alignment}));
      return this;
    }
    addRotate(values) {
      this.builders[$add](new flutter_swiper.RotateTransformBuilder.new({values: values}));
      return this;
    }
  };
  (flutter_swiper.CustomLayoutOption.new = function(opts) {
    let stateCount = opts && 'stateCount' in opts ? opts.stateCount : null;
    let startIndex = opts && 'startIndex' in opts ? opts.startIndex : null;
    this[builders] = JSArrayOfTransformBuilder().of([]);
    this[stateCount$] = stateCount;
    this[startIndex$] = startIndex;
    if (!(startIndex != null)) dart.assertFailed(stateCount != null);
  }).prototype = flutter_swiper.CustomLayoutOption.prototype;
  dart.addTypeTests(flutter_swiper.CustomLayoutOption);
  const builders = Symbol("CustomLayoutOption.builders");
  const startIndex$ = Symbol("CustomLayoutOption.startIndex");
  const stateCount$ = Symbol("CustomLayoutOption.stateCount");
  dart.setMethodSignature(flutter_swiper.CustomLayoutOption, () => ({
    __proto__: dart.getMethods(flutter_swiper.CustomLayoutOption.__proto__),
    addOpacity: dart.fnType(flutter_swiper.CustomLayoutOption, [core.List$(core.double)]),
    addTranslate: dart.fnType(flutter_swiper.CustomLayoutOption, [core.List$(ui$.Offset)]),
    addScale: dart.fnType(flutter_swiper.CustomLayoutOption, [core.List$(core.double), src__painting__alignment.Alignment]),
    addRotate: dart.fnType(flutter_swiper.CustomLayoutOption, [core.List$(core.double)])
  }));
  dart.setFieldSignature(flutter_swiper.CustomLayoutOption, () => ({
    __proto__: dart.getFields(flutter_swiper.CustomLayoutOption.__proto__),
    builders: dart.finalFieldType(ListOfTransformBuilder()),
    startIndex: dart.finalFieldType(core.int),
    stateCount: dart.finalFieldType(core.int)
  }));
  flutter_swiper._CustomLayoutSwiper = class _CustomLayoutSwiper extends flutter_swiper._SubSwiper {
    createState() {
      return new flutter_swiper._CustomLayoutState.new();
    }
  };
  (flutter_swiper._CustomLayoutSwiper.new = function(opts) {
    let option = opts && 'option' in opts ? opts.option : null;
    let itemWidth = opts && 'itemWidth' in opts ? opts.itemWidth : null;
    let loop = opts && 'loop' in opts ? opts.loop : null;
    let itemHeight = opts && 'itemHeight' in opts ? opts.itemHeight : null;
    let onIndexChanged = opts && 'onIndexChanged' in opts ? opts.onIndexChanged : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let curve = opts && 'curve' in opts ? opts.curve : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this.option = option;
    if (!(option != null)) dart.assertFailed();
    flutter_swiper._CustomLayoutSwiper.__proto__.new.call(this, {loop: loop, onIndexChanged: onIndexChanged, itemWidth: itemWidth, itemHeight: itemHeight, key: key, itemBuilder: itemBuilder, curve: curve, duration: duration, index: index, itemCount: itemCount, controller: controller, scrollDirection: scrollDirection});
  }).prototype = flutter_swiper._CustomLayoutSwiper.prototype;
  dart.addTypeTests(flutter_swiper._CustomLayoutSwiper);
  dart.setMethodSignature(flutter_swiper._CustomLayoutSwiper, () => ({
    __proto__: dart.getMethods(flutter_swiper._CustomLayoutSwiper.__proto__),
    createState: dart.fnType(src__widgets__framework.State$(src__widgets__framework.StatefulWidget), [])
  }));
  dart.setFieldSignature(flutter_swiper._CustomLayoutSwiper, () => ({
    __proto__: dart.getFields(flutter_swiper._CustomLayoutSwiper.__proto__),
    option: dart.finalFieldType(flutter_swiper.CustomLayoutOption)
  }));
  flutter_swiper._CustomLayoutState = class _CustomLayoutState extends flutter_swiper._CustomLayoutStateBase$(flutter_swiper._CustomLayoutSwiper) {
    didChangeDependencies() {
      super.didChangeDependencies();
      this[_startIndex] = this.widget.option.startIndex;
      this[_animationCount] = this.widget.option.stateCount;
    }
    didUpdateWidget(oldWidget) {
      flutter_swiper._CustomLayoutSwiper._check(oldWidget);
      this[_startIndex] = this.widget.option.startIndex;
      this[_animationCount] = this.widget.option.stateCount;
      super.didUpdateWidget(oldWidget);
    }
    [_buildItem](index, realIndex, animationValue) {
      let builders = this.widget.option.builders;
      let child = new src__widgets__basic.SizedBox.new({width: this.widget.itemWidth != null ? this.widget.itemWidth : core.double.infinity, height: this.widget.itemHeight != null ? this.widget.itemHeight : core.double.infinity, child: this.widget.itemBuilder(this.context, realIndex)});
      for (let i = dart.notNull(builders[$length]) - 1; i >= 0; --i) {
        let builder = builders[$_get](i);
        child = builder.build(index, animationValue, child);
      }
      return child;
    }
  };
  (flutter_swiper._CustomLayoutState.new = function() {
    flutter_swiper._CustomLayoutState.__proto__.new.call(this);
  }).prototype = flutter_swiper._CustomLayoutState.prototype;
  dart.addTypeTests(flutter_swiper._CustomLayoutState);
  dart.setMethodSignature(flutter_swiper._CustomLayoutState, () => ({
    __proto__: dart.getMethods(flutter_swiper._CustomLayoutState.__proto__),
    didChangeDependencies: dart.fnType(dart.void, []),
    [_buildItem]: dart.fnType(src__widgets__framework.Widget, [core.int, core.int, core.double])
  }));
  dart.trackLibraries("packages/flutter_web.examples.hello_world/flutter_swiper.ddc", {
    "package:flutter_web.examples.hello_world/flutter_swiper.dart": flutter_swiper
  }, '{"version":3,"sourceRoot":"","sources":["flutter_swiper.dart"],"names":[],"mappings":"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","file":"flutter_swiper.ddc.js"}');
  // Exports:
  return {
    flutter_swiper: flutter_swiper
  };
});

//# sourceMappingURL=flutter_swiper.ddc.js.map
