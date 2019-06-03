define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/src/gestures/arena', 'packages/flutter_web/src/services/clipboard', 'packages/vector_math/vector_math_64'], function(dart_sdk, ui, animation, animation$, assertions, arena, clipboard, vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__animation__animation_controller = animation.src__animation__animation_controller;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__ticker_provider = animation.src__widgets__ticker_provider;
  const src__rendering__custom_paint = animation.src__rendering__custom_paint;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__rendering__proxy_box = animation.src__rendering__proxy_box;
  const src__rendering__box = animation.src__rendering__box;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__transitions = animation.src__widgets__transitions;
  const src__widgets__gesture_detector = animation.src__widgets__gesture_detector;
  const src__widgets__localizations = animation.src__widgets__localizations;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__preferred_size = animation.src__widgets__preferred_size;
  const src__widgets__implicit_animations = animation.src__widgets__implicit_animations;
  const src__widgets__pages = animation.src__widgets__pages;
  const src__painting__decoration = animation.src__painting__decoration;
  const src__widgets__debug = animation.src__widgets__debug;
  const src__rendering__stack = animation.src__rendering__stack;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__widgets__routes = animation.src__widgets__routes;
  const src__painting__borders = animation.src__painting__borders;
  const src__painting__box_border = animation.src__painting__box_border;
  const src__widgets__annotated_region = animation.src__widgets__annotated_region;
  const src__widgets__heroes = animation.src__widgets__heroes;
  const src__widgets__sliver_persistent_header = animation.src__widgets__sliver_persistent_header;
  const src__rendering__paragraph = animation.src__rendering__paragraph;
  const src__widgets__safe_area = animation.src__widgets__safe_area;
  const src__widgets__navigation_toolbar = animation.src__widgets__navigation_toolbar;
  const src__widgets__icon_theme = animation.src__widgets__icon_theme;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__value_listenable_builder = animation.src__widgets__value_listenable_builder;
  const src__widgets__visibility = animation.src__widgets__visibility;
  const src__animation__animation = animation$.src__animation__animation;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const src__animation__tween = animation$.src__animation__tween;
  const src__animation__curves = animation$.src__animation__curves;
  const src__widgets__icon_data = animation$.src__widgets__icon_data;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__gradient = animation$.src__painting__gradient;
  const src__animation__animations = animation$.src__animation__animations;
  const src__painting__image_provider = animation$.src__painting__image_provider;
  const src__widgets__icon_theme_data = animation$.src__widgets__icon_theme_data;
  const src__painting__text_span = animation$.src__painting__text_span;
  const src__foundation__diagnostics = assertions.src__foundation__diagnostics;
  const src__foundation__synchronous_future = assertions.src__foundation__synchronous_future;
  const src__foundation__change_notifier = assertions.src__foundation__change_notifier;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const src__gestures__tap = arena.src__gestures__tap;
  const src__gestures__monodrag = arena.src__gestures__monodrag;
  const src__gestures__drag_details = arena.src__gestures__drag_details;
  const src__gestures__events = arena.src__gestures__events;
  const src__services__system_chrome = clipboard.src__services__system_chrome;
  const vector_math_64$ = vector_math_64.vector_math_64;
  const src__cupertino__colors = Object.create(dart.library);
  const src__cupertino__activity_indicator = Object.create(dart.library);
  const src__cupertino__button = Object.create(dart.library);
  const src__cupertino__icons = Object.create(dart.library);
  const src__cupertino__localizations = Object.create(dart.library);
  const src__cupertino__page_scaffold = Object.create(dart.library);
  const src__cupertino__route = Object.create(dart.library);
  const src__cupertino__nav_bar = Object.create(dart.library);
  const src__cupertino__text_theme = Object.create(dart.library);
  const src__cupertino__theme = Object.create(dart.library);
  const $truncate = dartx.truncate;
  const $floor = dartx.floor;
  const $clamp = dartx.clamp;
  const $modulo = dartx['%'];
  const $toString = dartx.toString;
  const $_get = dartx._get;
  const $padLeft = dartx.padLeft;
  const $padRight = dartx.padRight;
  const $add = dartx.add;
  const $abs = dartx.abs;
  const $runtimeType = dartx.runtimeType;
  const $_equals = dartx._equals;
  const $removeWhere = dartx.removeWhere;
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(src__animation__animation.Animation$(core.double)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(src__animation__tween.Tween$(core.double)))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  let SynchronousFutureOfCupertinoLocalizations = () => (SynchronousFutureOfCupertinoLocalizations = dart.constFn(src__foundation__synchronous_future.SynchronousFuture$(src__cupertino__localizations.CupertinoLocalizations)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let TweenOfOffset = () => (TweenOfOffset = dart.constFn(src__animation__tween.Tween$(ui$.Offset)))();
  let ValueNotifierOfString = () => (ValueNotifierOfString = dart.constFn(src__foundation__change_notifier.ValueNotifier$(core.String)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])))();
  let _HashSetOfPageRoute = () => (_HashSetOfPageRoute = dart.constFn(collection._HashSet$(src__widgets__pages.PageRoute)))();
  let AnimationOfOffset = () => (AnimationOfOffset = dart.constFn(src__animation__animation.Animation$(ui$.Offset)))();
  let AnimationOfDecoration = () => (AnimationOfDecoration = dart.constFn(src__animation__animation.Animation$(src__painting__decoration.Decoration)))();
  let DiagnosticsPropertyOfLinearGradient = () => (DiagnosticsPropertyOfLinearGradient = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__painting__gradient.LinearGradient)))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, AnimationOfdouble(), AnimationOfdouble()])))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, AnimationOfdouble(), AnimationOfdouble(), src__widgets__framework.Widget])))();
  let AnnotatedRegionOfSystemUiOverlayStyle = () => (AnnotatedRegionOfSystemUiOverlayStyle = dart.constFn(src__widgets__annotated_region.AnnotatedRegion$(src__services__system_chrome.SystemUiOverlayStyle)))();
  let StateOfStatefulWidget = () => (StateOfStatefulWidget = dart.constFn(src__widgets__framework.State$(src__widgets__framework.StatefulWidget)))();
  let GlobalKeyOfStateOfStatefulWidget = () => (GlobalKeyOfStateOfStatefulWidget = dart.constFn(src__widgets__framework.GlobalKey$(StateOfStatefulWidget())))();
  let ValueListenableBuilderOfString = () => (ValueListenableBuilderOfString = dart.constFn(src__widgets__value_listenable_builder.ValueListenableBuilder$(core.String)))();
  let ElementTobool = () => (ElementTobool = dart.constFn(dart.fnType(core.bool, [src__widgets__framework.Element])))();
  let BuildContextAndWidgetToWidget = () => (BuildContextAndWidgetToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, src__widgets__framework.Widget])))();
  let WidgetTobool = () => (WidgetTobool = dart.constFn(dart.fnType(core.bool, [src__widgets__framework.Widget])))();
  let AnimationOfRelativeRect = () => (AnimationOfRelativeRect = dart.constFn(src__animation__animation.Animation$(src__rendering__stack.RelativeRect)))();
  let AnimationOfTextStyle = () => (AnimationOfTextStyle = dart.constFn(src__animation__animation.Animation$(src__painting__text_style.TextStyle)))();
  let TypeMatcherOfRenderAnimatedOpacity = () => (TypeMatcherOfRenderAnimatedOpacity = dart.constFn(src__widgets__framework.TypeMatcher$(src__rendering__proxy_box.RenderAnimatedOpacity)))();
  let RectAndRectToRectTween = () => (RectAndRectToRectTween = dart.constFn(dart.fnType(src__animation__tween.RectTween, [ui$.Rect, ui$.Rect])))();
  let BuildContextAndWidgetToVisibility = () => (BuildContextAndWidgetToVisibility = dart.constFn(dart.fnType(src__widgets__visibility.Visibility, [src__widgets__framework.BuildContext, src__widgets__framework.Widget])))();
  let BuildContextAndAnimationOfdoubleAndHeroFlightDirection__To_NavigationBarTransition = () => (BuildContextAndAnimationOfdoubleAndHeroFlightDirection__To_NavigationBarTransition = dart.constFn(dart.fnType(src__cupertino__nav_bar._NavigationBarTransition, [src__widgets__framework.BuildContext, AnimationOfdouble(), src__widgets__heroes.HeroFlightDirection, src__widgets__framework.BuildContext, src__widgets__framework.BuildContext])))();
  let EnumPropertyOfBrightness = () => (EnumPropertyOfBrightness = dart.constFn(src__foundation__diagnostics.EnumProperty$(ui$.Brightness)))();
  let DiagnosticsPropertyOfColor = () => (DiagnosticsPropertyOfColor = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(ui$.Color)))();
  let DiagnosticsPropertyOfCupertinoTextThemeData = () => (DiagnosticsPropertyOfCupertinoTextThemeData = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__cupertino__text_theme.CupertinoTextThemeData)))();
  src__cupertino__colors.CupertinoColors = class CupertinoColors extends core.Object {};
  (src__cupertino__colors.CupertinoColors.__ = function() {
  }).prototype = src__cupertino__colors.CupertinoColors.prototype;
  dart.addTypeTests(src__cupertino__colors.CupertinoColors);
  dart.defineLazy(src__cupertino__colors.CupertinoColors, {
    /*src__cupertino__colors.CupertinoColors.activeBlue*/get activeBlue() {
      return dart.const(new ui$.Color.new(4278221567));
    },
    /*src__cupertino__colors.CupertinoColors.activeGreen*/get activeGreen() {
      return dart.const(new ui$.Color.new(4283226468));
    },
    /*src__cupertino__colors.CupertinoColors.activeOrange*/get activeOrange() {
      return dart.const(new ui$.Color.new(4294939904));
    },
    /*src__cupertino__colors.CupertinoColors.white*/get white() {
      return dart.const(new ui$.Color.new(4294967295));
    },
    /*src__cupertino__colors.CupertinoColors.black*/get black() {
      return dart.const(new ui$.Color.new(4278190080));
    },
    /*src__cupertino__colors.CupertinoColors.lightBackgroundGray*/get lightBackgroundGray() {
      return dart.const(new ui$.Color.new(4293256682));
    },
    /*src__cupertino__colors.CupertinoColors.extraLightBackgroundGray*/get extraLightBackgroundGray() {
      return dart.const(new ui$.Color.new(4293914612));
    },
    /*src__cupertino__colors.CupertinoColors.darkBackgroundGray*/get darkBackgroundGray() {
      return dart.const(new ui$.Color.new(4279703319));
    },
    /*src__cupertino__colors.CupertinoColors.inactiveGray*/get inactiveGray() {
      return dart.const(new ui$.Color.new(4287532691));
    },
    /*src__cupertino__colors.CupertinoColors.destructiveRed*/get destructiveRed() {
      return dart.const(new ui$.Color.new(4294916912));
    }
  });
  dart.defineLazy(src__cupertino__activity_indicator, {
    /*src__cupertino__activity_indicator._kDefaultIndicatorRadius*/get _kDefaultIndicatorRadius() {
      return 10.0;
    }
  });
  src__cupertino__activity_indicator.CupertinoActivityIndicator = class CupertinoActivityIndicator extends src__widgets__framework.StatefulWidget {
    get animating() {
      return this[animating$];
    }
    set animating(value) {
      super.animating = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    createState() {
      return new src__cupertino__activity_indicator._CupertinoActivityIndicatorState.new();
    }
  };
  (src__cupertino__activity_indicator.CupertinoActivityIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let animating = opts && 'animating' in opts ? opts.animating : true;
    let radius = opts && 'radius' in opts ? opts.radius : 10.0;
    this[animating$] = animating;
    this[radius$] = radius;
    if (!(animating != null)) dart.assertFailed();
    if (!(radius != null)) dart.assertFailed();
    if (!(dart.notNull(radius) > 0)) dart.assertFailed();
    src__cupertino__activity_indicator.CupertinoActivityIndicator.__proto__.new.call(this, {key: key});
  }).prototype = src__cupertino__activity_indicator.CupertinoActivityIndicator.prototype;
  dart.addTypeTests(src__cupertino__activity_indicator.CupertinoActivityIndicator);
  const animating$ = Symbol("CupertinoActivityIndicator.animating");
  const radius$ = Symbol("CupertinoActivityIndicator.radius");
  dart.setMethodSignature(src__cupertino__activity_indicator.CupertinoActivityIndicator, () => ({
    __proto__: dart.getMethods(src__cupertino__activity_indicator.CupertinoActivityIndicator.__proto__),
    createState: dart.fnType(src__cupertino__activity_indicator._CupertinoActivityIndicatorState, [])
  }));
  dart.setFieldSignature(src__cupertino__activity_indicator.CupertinoActivityIndicator, () => ({
    __proto__: dart.getFields(src__cupertino__activity_indicator.CupertinoActivityIndicator.__proto__),
    animating: dart.finalFieldType(core.bool),
    radius: dart.finalFieldType(core.double)
  }));
  const _controller = dart.privateName(src__cupertino__activity_indicator, "_controller");
  let const$;
  const State_SingleTickerProviderStateMixin$ = class State_SingleTickerProviderStateMixin extends src__widgets__framework.State$(src__cupertino__activity_indicator.CupertinoActivityIndicator) {};
  (State_SingleTickerProviderStateMixin$.new = function() {
    src__widgets__ticker_provider.SingleTickerProviderStateMixin$(src__cupertino__activity_indicator.CupertinoActivityIndicator).new.call(this);
    State_SingleTickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$, src__widgets__ticker_provider.SingleTickerProviderStateMixin$(src__cupertino__activity_indicator.CupertinoActivityIndicator));
  src__cupertino__activity_indicator._CupertinoActivityIndicatorState = class _CupertinoActivityIndicatorState extends State_SingleTickerProviderStateMixin$ {
    initState() {
      super.initState();
      this[_controller] = new src__animation__animation_controller.AnimationController.new({duration: const$ || (const$ = dart.const(new core.Duration.new({seconds: 1}))), vsync: this});
      if (dart.test(this.widget.animating)) this[_controller].repeat();
    }
    didUpdateWidget(oldWidget) {
      src__cupertino__activity_indicator.CupertinoActivityIndicator._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (this.widget.animating != oldWidget.animating) {
        if (dart.test(this.widget.animating))
          this[_controller].repeat();
        else
          this[_controller].stop();
      }
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      return new src__widgets__basic.SizedBox.new({height: dart.notNull(this.widget.radius) * 2, width: dart.notNull(this.widget.radius) * 2, child: new src__widgets__basic.CustomPaint.new({painter: new src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.new({position: this[_controller], radius: this.widget.radius})})});
    }
  };
  (src__cupertino__activity_indicator._CupertinoActivityIndicatorState.new = function() {
    this[_controller] = null;
    src__cupertino__activity_indicator._CupertinoActivityIndicatorState.__proto__.new.call(this);
  }).prototype = src__cupertino__activity_indicator._CupertinoActivityIndicatorState.prototype;
  dart.addTypeTests(src__cupertino__activity_indicator._CupertinoActivityIndicatorState);
  dart.setMethodSignature(src__cupertino__activity_indicator._CupertinoActivityIndicatorState, () => ({
    __proto__: dart.getMethods(src__cupertino__activity_indicator._CupertinoActivityIndicatorState.__proto__),
    initState: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__activity_indicator._CupertinoActivityIndicatorState, () => ({
    __proto__: dart.getFields(src__cupertino__activity_indicator._CupertinoActivityIndicatorState.__proto__),
    [_controller]: dart.fieldType(src__animation__animation_controller.AnimationController)
  }));
  dart.defineLazy(src__cupertino__activity_indicator, {
    /*src__cupertino__activity_indicator._kTwoPI*/get _kTwoPI() {
      return 3.141592653589793 * 2.0;
    },
    /*src__cupertino__activity_indicator._kTickCount*/get _kTickCount() {
      return 12;
    },
    /*src__cupertino__activity_indicator._kHalfTickCount*/get _kHalfTickCount() {
      return (12 / 2)[$truncate]();
    },
    /*src__cupertino__activity_indicator._kTickColor*/get _kTickColor() {
      return src__cupertino__colors.CupertinoColors.lightBackgroundGray;
    },
    /*src__cupertino__activity_indicator._kActiveTickColor*/get _kActiveTickColor() {
      return dart.const(new ui$.Color.new(4288519581));
    }
  });
  src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter = class _CupertinoActivityIndicatorPainter extends src__rendering__custom_paint.CustomPainter {
    paint(canvas, size) {
      canvas.save();
      canvas.translate(dart.notNull(size.width) / 2.0, dart.notNull(size.height) / 2.0);
      let activeTick = (12 * dart.notNull(this.position.value))[$floor]();
      for (let i = 0; i < 12; ++i) {
        let t = ((i + activeTick)[$modulo](12) / 6)[$clamp](0.0, 1.0);
        let paint = new ui$.Paint.new();
        paint.color = ui$.Color.lerp(src__cupertino__activity_indicator._kActiveTickColor, src__cupertino__activity_indicator._kTickColor, t);
        canvas.drawRRect(this.tickFundamentalRRect, paint);
        canvas.rotate(-6.283185307179586 / 12);
      }
      canvas.restore();
    }
    shouldRepaint(oldPainter) {
      src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter._check(oldPainter);
      return !dart.equals(oldPainter.position, this.position);
    }
  };
  (src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.new = function(opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    this.position = position;
    this.tickFundamentalRRect = new ui$.RRect.fromLTRBXY(-dart.notNull(radius), 1.0 * dart.notNull(radius) / 10.0, -dart.notNull(radius) / 2.0, -1.0 * dart.notNull(radius) / 10.0, 1.0, 1.0);
    src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.__proto__.new.call(this, {repaint: position});
  }).prototype = src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.prototype;
  dart.addTypeTests(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter);
  dart.setMethodSignature(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter, () => ({
    __proto__: dart.getMethods(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.__proto__),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setFieldSignature(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter, () => ({
    __proto__: dart.getFields(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.__proto__),
    position: dart.finalFieldType(AnimationOfdouble()),
    tickFundamentalRRect: dart.finalFieldType(ui$.RRect)
  }));
  dart.defineLazy(src__cupertino__button, {
    /*src__cupertino__button._kDisabledBackground*/get _kDisabledBackground() {
      return dart.const(new ui$.Color.new(4289309097));
    },
    /*src__cupertino__button._kDisabledForeground*/get _kDisabledForeground() {
      return dart.const(new ui$.Color.new(4291085508));
    },
    /*src__cupertino__button._kButtonTextStyle*/get _kButtonTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({fontFamily: ".SF UI Text", inherit: false, fontSize: 17.5, letterSpacing: -0.24, fontWeight: ui$.FontWeight.w400, color: src__cupertino__colors.CupertinoColors.activeBlue, textBaseline: ui$.TextBaseline.alphabetic}));
    },
    /*src__cupertino__button._kDisabledButtonTextStyle*/get _kDisabledButtonTextStyle() {
      return src__cupertino__button._kButtonTextStyle.copyWith({color: src__cupertino__button._kDisabledForeground});
    },
    /*src__cupertino__button._kBackgroundButtonTextStyle*/get _kBackgroundButtonTextStyle() {
      return src__cupertino__button._kButtonTextStyle.copyWith({color: src__cupertino__colors.CupertinoColors.white});
    },
    /*src__cupertino__button._kButtonPadding*/get _kButtonPadding() {
      return dart.const(new src__painting__edge_insets.EdgeInsets.all(16.0));
    },
    /*src__cupertino__button._kBackgroundButtonPadding*/get _kBackgroundButtonPadding() {
      return dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 14.0, horizontal: 64.0}));
    }
  });
  let const$0;
  let const$1;
  src__cupertino__button.CupertinoButton = class CupertinoButton extends src__widgets__framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get disabledColor() {
      return this[disabledColor$];
    }
    set disabledColor(value) {
      super.disabledColor = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get minSize() {
      return this[minSize$];
    }
    set minSize(value) {
      super.minSize = value;
    }
    get pressedOpacity() {
      return this[pressedOpacity$];
    }
    set pressedOpacity(value) {
      super.pressedOpacity = value;
    }
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get enabled() {
      return this.onPressed != null;
    }
    createState() {
      return new src__cupertino__button._CupertinoButtonState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new src__foundation__diagnostics.FlagProperty.new("enabled", {value: this.enabled, ifFalse: "disabled"}));
    }
  };
  (src__cupertino__button.CupertinoButton.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : null;
    let minSize = opts && 'minSize' in opts ? opts.minSize : 44.0;
    let pressedOpacity = opts && 'pressedOpacity' in opts ? opts.pressedOpacity : 0.1;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : const$1 || (const$1 = dart.const(new src__painting__border_radius.BorderRadius.all(const$0 || (const$0 = dart.const(new ui$.Radius.circular(8.0))))));
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    this[child$] = child;
    this[padding$] = padding;
    this[color$] = color;
    this[disabledColor$] = disabledColor;
    this[minSize$] = minSize;
    this[pressedOpacity$] = pressedOpacity;
    this[borderRadius$] = borderRadius;
    this[onPressed$] = onPressed;
    if (!(pressedOpacity == null || dart.notNull(pressedOpacity) >= 0.0 && dart.notNull(pressedOpacity) <= 1.0)) dart.assertFailed();
    src__cupertino__button.CupertinoButton.__proto__.new.call(this);
  }).prototype = src__cupertino__button.CupertinoButton.prototype;
  dart.addTypeTests(src__cupertino__button.CupertinoButton);
  const child$ = Symbol("CupertinoButton.child");
  const padding$ = Symbol("CupertinoButton.padding");
  const color$ = Symbol("CupertinoButton.color");
  const disabledColor$ = Symbol("CupertinoButton.disabledColor");
  const onPressed$ = Symbol("CupertinoButton.onPressed");
  const minSize$ = Symbol("CupertinoButton.minSize");
  const pressedOpacity$ = Symbol("CupertinoButton.pressedOpacity");
  const borderRadius$ = Symbol("CupertinoButton.borderRadius");
  dart.setMethodSignature(src__cupertino__button.CupertinoButton, () => ({
    __proto__: dart.getMethods(src__cupertino__button.CupertinoButton.__proto__),
    createState: dart.fnType(src__cupertino__button._CupertinoButtonState, [])
  }));
  dart.setGetterSignature(src__cupertino__button.CupertinoButton, () => ({
    __proto__: dart.getGetters(src__cupertino__button.CupertinoButton.__proto__),
    enabled: core.bool
  }));
  dart.setFieldSignature(src__cupertino__button.CupertinoButton, () => ({
    __proto__: dart.getFields(src__cupertino__button.CupertinoButton.__proto__),
    child: dart.finalFieldType(src__widgets__framework.Widget),
    padding: dart.finalFieldType(src__painting__edge_insets.EdgeInsetsGeometry),
    color: dart.finalFieldType(ui$.Color),
    disabledColor: dart.finalFieldType(ui$.Color),
    onPressed: dart.finalFieldType(VoidTovoid()),
    minSize: dart.finalFieldType(core.double),
    pressedOpacity: dart.finalFieldType(core.double),
    borderRadius: dart.finalFieldType(src__painting__border_radius.BorderRadius)
  }));
  const _opacityTween = dart.privateName(src__cupertino__button, "_opacityTween");
  const _animationController = dart.privateName(src__cupertino__button, "_animationController");
  const _opacityAnimation = dart.privateName(src__cupertino__button, "_opacityAnimation");
  const _buttonHeldDown = dart.privateName(src__cupertino__button, "_buttonHeldDown");
  let const$2;
  const _setTween = dart.privateName(src__cupertino__button, "_setTween");
  const _animate = dart.privateName(src__cupertino__button, "_animate");
  const _handleTapDown = dart.privateName(src__cupertino__button, "_handleTapDown");
  const _handleTapUp = dart.privateName(src__cupertino__button, "_handleTapUp");
  const _handleTapCancel = dart.privateName(src__cupertino__button, "_handleTapCancel");
  let const$3;
  const State_SingleTickerProviderStateMixin$$ = class State_SingleTickerProviderStateMixin extends src__widgets__framework.State$(src__cupertino__button.CupertinoButton) {};
  (State_SingleTickerProviderStateMixin$$.new = function() {
    src__widgets__ticker_provider.SingleTickerProviderStateMixin$(src__cupertino__button.CupertinoButton).new.call(this);
    State_SingleTickerProviderStateMixin$$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$$, src__widgets__ticker_provider.SingleTickerProviderStateMixin$(src__cupertino__button.CupertinoButton));
  src__cupertino__button._CupertinoButtonState = class _CupertinoButtonState extends State_SingleTickerProviderStateMixin$$ {
    initState() {
      super.initState();
      this[_animationController] = new src__animation__animation_controller.AnimationController.new({duration: const$2 || (const$2 = dart.const(new core.Duration.new({milliseconds: 200}))), value: 0.0, vsync: this});
      this[_opacityAnimation] = AnimationOfdouble()._check(this[_animationController].drive(core.double, new src__animation__tween.CurveTween.new({curve: src__animation__curves.Curves.decelerate})).drive(core.double, this[_opacityTween]));
      this[_setTween]();
    }
    didUpdateWidget(old) {
      src__cupertino__button.CupertinoButton._check(old);
      super.didUpdateWidget(old);
      this[_setTween]();
    }
    [_setTween]() {
      this[_opacityTween].end = this.widget.pressedOpacity != null ? this.widget.pressedOpacity : 1.0;
    }
    dispose() {
      this[_animationController].dispose();
      this[_animationController] = null;
      super.dispose();
    }
    [_handleTapDown](event) {
      if (!dart.test(this[_buttonHeldDown])) {
        this[_buttonHeldDown] = true;
        this[_animate]();
      }
    }
    [_handleTapUp](event) {
      if (dart.test(this[_buttonHeldDown])) {
        this[_buttonHeldDown] = false;
        this[_animate]();
      }
    }
    [_handleTapCancel]() {
      if (dart.test(this[_buttonHeldDown])) {
        this[_buttonHeldDown] = false;
        this[_animate]();
      }
    }
    [_animate]() {
      if (dart.test(this[_animationController].isAnimating)) return;
      let wasHeldDown = this[_buttonHeldDown];
      let ticker = dart.test(this[_buttonHeldDown]) ? this[_animationController].animateTo(1.0, {duration: src__cupertino__button._CupertinoButtonState.kFadeOutDuration}) : this[_animationController].animateTo(0.0, {duration: src__cupertino__button._CupertinoButtonState.kFadeInDuration});
      ticker.then(dart.void, dart.fn(value => {
        if (dart.test(this.mounted) && wasHeldDown != this[_buttonHeldDown]) this[_animate]();
      }, voidToNull()));
    }
    build(context) {
      let enabled = this.widget.enabled;
      let backgroundColor = this.widget.color;
      return new src__widgets__gesture_detector.GestureDetector.new({behavior: src__rendering__proxy_box.HitTestBehavior.opaque, onTapDown: dart.test(enabled) ? dart.bind(this, _handleTapDown) : null, onTapUp: dart.test(enabled) ? dart.bind(this, _handleTapUp) : null, onTapCancel: dart.test(enabled) ? dart.bind(this, _handleTapCancel) : null, onTap: this.widget.onPressed, child: new src__widgets__basic.Semantics.new({button: true, child: new src__widgets__basic.ConstrainedBox.new({constraints: this.widget.minSize == null ? const$3 || (const$3 = dart.const(new src__rendering__box.BoxConstraints.new())) : new src__rendering__box.BoxConstraints.new({minWidth: this.widget.minSize, minHeight: this.widget.minSize}), child: new src__widgets__transitions.FadeTransition.new({opacity: this[_opacityAnimation], child: new src__widgets__container.DecoratedBox.new({decoration: new src__painting__box_decoration.BoxDecoration.new({borderRadius: this.widget.borderRadius, color: backgroundColor != null && !dart.test(enabled) ? this.widget.disabledColor != null ? this.widget.disabledColor : src__cupertino__button._kDisabledBackground : backgroundColor}), child: new src__widgets__basic.Padding.new({padding: this.widget.padding != null ? this.widget.padding : backgroundColor != null ? src__cupertino__button._kBackgroundButtonPadding : src__cupertino__button._kButtonPadding, child: new src__widgets__basic.Center.new({widthFactor: 1.0, heightFactor: 1.0, child: new src__widgets__text.DefaultTextStyle.new({style: backgroundColor != null ? src__cupertino__button._kBackgroundButtonTextStyle : dart.test(enabled) ? src__cupertino__button._kButtonTextStyle : src__cupertino__button._kDisabledButtonTextStyle, child: this.widget.child})})})})})})})});
    }
  };
  (src__cupertino__button._CupertinoButtonState.new = function() {
    this[_opacityTween] = new (TweenOfdouble()).new({begin: 1.0});
    this[_animationController] = null;
    this[_opacityAnimation] = null;
    this[_buttonHeldDown] = false;
    src__cupertino__button._CupertinoButtonState.__proto__.new.call(this);
  }).prototype = src__cupertino__button._CupertinoButtonState.prototype;
  dart.addTypeTests(src__cupertino__button._CupertinoButtonState);
  dart.setMethodSignature(src__cupertino__button._CupertinoButtonState, () => ({
    __proto__: dart.getMethods(src__cupertino__button._CupertinoButtonState.__proto__),
    initState: dart.fnType(dart.void, []),
    [_setTween]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, []),
    [_handleTapDown]: dart.fnType(dart.void, [src__gestures__tap.TapDownDetails]),
    [_handleTapUp]: dart.fnType(dart.void, [src__gestures__tap.TapUpDetails]),
    [_handleTapCancel]: dart.fnType(dart.void, []),
    [_animate]: dart.fnType(dart.void, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__button._CupertinoButtonState, () => ({
    __proto__: dart.getFields(src__cupertino__button._CupertinoButtonState.__proto__),
    [_opacityTween]: dart.finalFieldType(TweenOfdouble()),
    [_animationController]: dart.fieldType(src__animation__animation_controller.AnimationController),
    [_opacityAnimation]: dart.fieldType(AnimationOfdouble()),
    [_buttonHeldDown]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__cupertino__button._CupertinoButtonState, {
    /*src__cupertino__button._CupertinoButtonState.kFadeOutDuration*/get kFadeOutDuration() {
      return dart.const(new core.Duration.new({milliseconds: 10}));
    },
    /*src__cupertino__button._CupertinoButtonState.kFadeInDuration*/get kFadeInDuration() {
      return dart.const(new core.Duration.new({milliseconds: 100}));
    }
  });
  src__cupertino__icons.CupertinoIcons = class CupertinoIcons extends core.Object {};
  (src__cupertino__icons.CupertinoIcons.__ = function() {
  }).prototype = src__cupertino__icons.CupertinoIcons.prototype;
  dart.addTypeTests(src__cupertino__icons.CupertinoIcons);
  dart.defineLazy(src__cupertino__icons.CupertinoIcons, {
    /*src__cupertino__icons.CupertinoIcons.iconFont*/get iconFont() {
      return "CupertinoIcons";
    },
    /*src__cupertino__icons.CupertinoIcons.iconFontPackage*/get iconFontPackage() {
      return "cupertino_icons";
    },
    /*src__cupertino__icons.CupertinoIcons.left_chevron*/get left_chevron() {
      return dart.const(new src__widgets__icon_data.IconData.new(62418, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons", matchTextDirection: true}));
    },
    /*src__cupertino__icons.CupertinoIcons.right_chevron*/get right_chevron() {
      return dart.const(new src__widgets__icon_data.IconData.new(62419, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons", matchTextDirection: true}));
    },
    /*src__cupertino__icons.CupertinoIcons.share*/get share() {
      return dart.const(new src__widgets__icon_data.IconData.new(62666, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.share_solid*/get share_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62667, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.book*/get book() {
      return dart.const(new src__widgets__icon_data.IconData.new(62439, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.book_solid*/get book_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62440, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.bookmark*/get bookmark() {
      return dart.const(new src__widgets__icon_data.IconData.new(62441, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.bookmark_solid*/get bookmark_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62442, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.info*/get info() {
      return dart.const(new src__widgets__icon_data.IconData.new(62540, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.reply*/get reply() {
      return dart.const(new src__widgets__icon_data.IconData.new(62662, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.conversation_bubble*/get conversation_bubble() {
      return dart.const(new src__widgets__icon_data.IconData.new(62459, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.profile_circled*/get profile_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62489, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.plus_circled*/get plus_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62602, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.minus_circled*/get minus_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62563, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.flag*/get flag() {
      return dart.const(new src__widgets__icon_data.IconData.new(62508, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.search*/get search() {
      return dart.const(new src__widgets__icon_data.IconData.new(62629, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.check_mark*/get check_mark() {
      return dart.const(new src__widgets__icon_data.IconData.new(62461, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.check_mark_circled*/get check_mark_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62462, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.check_mark_circled_solid*/get check_mark_circled_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62463, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.back*/get back() {
      return dart.const(new src__widgets__icon_data.IconData.new(62415, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons", matchTextDirection: true}));
    },
    /*src__cupertino__icons.CupertinoIcons.forward*/get forward() {
      return dart.const(new src__widgets__icon_data.IconData.new(62417, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons", matchTextDirection: true}));
    },
    /*src__cupertino__icons.CupertinoIcons.home*/get home() {
      return dart.const(new src__widgets__icon_data.IconData.new(62535, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.shopping_cart*/get shopping_cart() {
      return dart.const(new src__widgets__icon_data.IconData.new(62455, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.ellipsis*/get ellipsis() {
      return dart.const(new src__widgets__icon_data.IconData.new(62570, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.phone*/get phone() {
      return dart.const(new src__widgets__icon_data.IconData.new(62648, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.phone_solid*/get phone_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62649, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.down_arrow*/get down_arrow() {
      return dart.const(new src__widgets__icon_data.IconData.new(62301, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.up_arrow*/get up_arrow() {
      return dart.const(new src__widgets__icon_data.IconData.new(62310, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.battery_charging*/get battery_charging() {
      return dart.const(new src__widgets__icon_data.IconData.new(61713, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.battery_empty*/get battery_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(61714, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.battery_full*/get battery_full() {
      return dart.const(new src__widgets__icon_data.IconData.new(61715, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.battery_75_percent*/get battery_75_percent() {
      return dart.const(new src__widgets__icon_data.IconData.new(61716, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.battery_25_percent*/get battery_25_percent() {
      return dart.const(new src__widgets__icon_data.IconData.new(61717, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.bluetooth*/get bluetooth() {
      return dart.const(new src__widgets__icon_data.IconData.new(61718, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.restart*/get restart() {
      return dart.const(new src__widgets__icon_data.IconData.new(61980, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.reply_all*/get reply_all() {
      return dart.const(new src__widgets__icon_data.IconData.new(61981, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.reply_thick_solid*/get reply_thick_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(61982, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.share_up*/get share_up() {
      return dart.const(new src__widgets__icon_data.IconData.new(61984, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.shuffle_thick*/get shuffle_thick() {
      return dart.const(new src__widgets__icon_data.IconData.new(61985, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.photo_camera*/get photo_camera() {
      return dart.const(new src__widgets__icon_data.IconData.new(62453, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.photo_camera_solid*/get photo_camera_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62454, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.video_camera*/get video_camera() {
      return dart.const(new src__widgets__icon_data.IconData.new(62668, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.video_camera_solid*/get video_camera_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62669, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.switch_camera*/get switch_camera() {
      return dart.const(new src__widgets__icon_data.IconData.new(62622, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.switch_camera_solid*/get switch_camera_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62623, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.collections*/get collections() {
      return dart.const(new src__widgets__icon_data.IconData.new(62409, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.collections_solid*/get collections_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62410, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.folder*/get folder() {
      return dart.const(new src__widgets__icon_data.IconData.new(62516, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.folder_solid*/get folder_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62517, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.folder_open*/get folder_open() {
      return dart.const(new src__widgets__icon_data.IconData.new(62346, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.delete*/get delete() {
      return dart.const(new src__widgets__icon_data.IconData.new(62660, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.delete_solid*/get delete_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62661, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.delete_simple*/get delete_simple() {
      return dart.const(new src__widgets__icon_data.IconData.new(62335, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.pen*/get pen() {
      return dart.const(new src__widgets__icon_data.IconData.new(62143, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.pencil*/get pencil() {
      return dart.const(new src__widgets__icon_data.IconData.new(62334, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.create*/get create() {
      return dart.const(new src__widgets__icon_data.IconData.new(62487, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.create_solid*/get create_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62487, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.refresh*/get refresh() {
      return dart.const(new src__widgets__icon_data.IconData.new(62618, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.refresh_circled*/get refresh_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62619, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.refresh_circled_solid*/get refresh_circled_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62620, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.refresh_thin*/get refresh_thin() {
      return dart.const(new src__widgets__icon_data.IconData.new(62621, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.refresh_thick*/get refresh_thick() {
      return dart.const(new src__widgets__icon_data.IconData.new(62376, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.refresh_bold*/get refresh_bold() {
      return dart.const(new src__widgets__icon_data.IconData.new(61980, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.clear_thick*/get clear_thick() {
      return dart.const(new src__widgets__icon_data.IconData.new(62167, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.clear_thick_circled*/get clear_thick_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62318, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.clear*/get clear() {
      return dart.const(new src__widgets__icon_data.IconData.new(62468, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.clear_circled*/get clear_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62469, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.clear_circled_solid*/get clear_circled_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62470, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.add*/get add() {
      return dart.const(new src__widgets__icon_data.IconData.new(62601, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.add_circled*/get add_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62602, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.add_circled_solid*/get add_circled_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62603, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.gear*/get gear() {
      return dart.const(new src__widgets__icon_data.IconData.new(62524, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.gear_solid*/get gear_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62525, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.gear_big*/get gear_big() {
      return dart.const(new src__widgets__icon_data.IconData.new(62199, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.settings*/get settings() {
      return dart.const(new src__widgets__icon_data.IconData.new(62481, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.settings_solid*/get settings_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62482, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.music_note*/get music_note() {
      return dart.const(new src__widgets__icon_data.IconData.new(62571, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.play_arrow*/get play_arrow() {
      return dart.const(new src__widgets__icon_data.IconData.new(62599, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.play_arrow_solid*/get play_arrow_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62600, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.pause*/get pause() {
      return dart.const(new src__widgets__icon_data.IconData.new(62583, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.pause_solid*/get pause_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62584, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.loop*/get loop() {
      return dart.const(new src__widgets__icon_data.IconData.new(62537, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.loop_thick*/get loop_thick() {
      return dart.const(new src__widgets__icon_data.IconData.new(62538, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.volume_down*/get volume_down() {
      return dart.const(new src__widgets__icon_data.IconData.new(62391, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.volume_mute*/get volume_mute() {
      return dart.const(new src__widgets__icon_data.IconData.new(62392, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.volume_off*/get volume_off() {
      return dart.const(new src__widgets__icon_data.IconData.new(62393, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.volume_up*/get volume_up() {
      return dart.const(new src__widgets__icon_data.IconData.new(62394, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.fullscreen*/get fullscreen() {
      return dart.const(new src__widgets__icon_data.IconData.new(62342, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.fullscreen_exit*/get fullscreen_exit() {
      return dart.const(new src__widgets__icon_data.IconData.new(62333, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.mic_off*/get mic_off() {
      return dart.const(new src__widgets__icon_data.IconData.new(62559, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.mic*/get mic() {
      return dart.const(new src__widgets__icon_data.IconData.new(62560, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.mic_solid*/get mic_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62561, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.clock*/get clock() {
      return dart.const(new src__widgets__icon_data.IconData.new(62654, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.clock_solid*/get clock_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62655, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.time*/get time() {
      return dart.const(new src__widgets__icon_data.IconData.new(62466, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.time_solid*/get time_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62467, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.padlock*/get padlock() {
      return dart.const(new src__widgets__icon_data.IconData.new(62664, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.padlock_solid*/get padlock_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62665, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.eye*/get eye() {
      return dart.const(new src__widgets__icon_data.IconData.new(62500, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.eye_solid*/get eye_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62501, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.person*/get person() {
      return dart.const(new src__widgets__icon_data.IconData.new(62589, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.person_solid*/get person_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62590, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.person_add*/get person_add() {
      return dart.const(new src__widgets__icon_data.IconData.new(62591, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.person_add_solid*/get person_add_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62592, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.group*/get group() {
      return dart.const(new src__widgets__icon_data.IconData.new(62587, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.group_solid*/get group_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62588, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.mail*/get mail() {
      return dart.const(new src__widgets__icon_data.IconData.new(62498, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.mail_solid*/get mail_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62499, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.location*/get location() {
      return dart.const(new src__widgets__icon_data.IconData.new(62549, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.location_solid*/get location_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62550, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.tag*/get tag() {
      return dart.const(new src__widgets__icon_data.IconData.new(62604, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.tag_solid*/get tag_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62605, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.tags*/get tags() {
      return dart.const(new src__widgets__icon_data.IconData.new(62606, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    },
    /*src__cupertino__icons.CupertinoIcons.tags_solid*/get tags_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62607, {fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons"}));
    }
  });
  src__cupertino__localizations.DatePickerDateTimeOrder = class DatePickerDateTimeOrder extends core.Object {
    toString() {
      return {
        0: "DatePickerDateTimeOrder.date_time_dayPeriod",
        1: "DatePickerDateTimeOrder.date_dayPeriod_time",
        2: "DatePickerDateTimeOrder.time_dayPeriod_date",
        3: "DatePickerDateTimeOrder.dayPeriod_time_date"
      }[this.index];
    }
  };
  (src__cupertino__localizations.DatePickerDateTimeOrder.new = function(x) {
    this.index = x;
  }).prototype = src__cupertino__localizations.DatePickerDateTimeOrder.prototype;
  dart.addTypeTests(src__cupertino__localizations.DatePickerDateTimeOrder);
  dart.setFieldSignature(src__cupertino__localizations.DatePickerDateTimeOrder, () => ({
    __proto__: dart.getFields(src__cupertino__localizations.DatePickerDateTimeOrder.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__cupertino__localizations.DatePickerDateTimeOrder, ['toString']);
  src__cupertino__localizations.DatePickerDateTimeOrder.date_time_dayPeriod = dart.const(new src__cupertino__localizations.DatePickerDateTimeOrder.new(0));
  src__cupertino__localizations.DatePickerDateTimeOrder.date_dayPeriod_time = dart.const(new src__cupertino__localizations.DatePickerDateTimeOrder.new(1));
  src__cupertino__localizations.DatePickerDateTimeOrder.time_dayPeriod_date = dart.const(new src__cupertino__localizations.DatePickerDateTimeOrder.new(2));
  src__cupertino__localizations.DatePickerDateTimeOrder.dayPeriod_time_date = dart.const(new src__cupertino__localizations.DatePickerDateTimeOrder.new(3));
  src__cupertino__localizations.DatePickerDateTimeOrder.values = dart.constList([src__cupertino__localizations.DatePickerDateTimeOrder.date_time_dayPeriod, src__cupertino__localizations.DatePickerDateTimeOrder.date_dayPeriod_time, src__cupertino__localizations.DatePickerDateTimeOrder.time_dayPeriod_date, src__cupertino__localizations.DatePickerDateTimeOrder.dayPeriod_time_date], src__cupertino__localizations.DatePickerDateTimeOrder);
  src__cupertino__localizations.DatePickerDateOrder = class DatePickerDateOrder extends core.Object {
    toString() {
      return {
        0: "DatePickerDateOrder.dmy",
        1: "DatePickerDateOrder.mdy",
        2: "DatePickerDateOrder.ymd",
        3: "DatePickerDateOrder.ydm"
      }[this.index];
    }
  };
  (src__cupertino__localizations.DatePickerDateOrder.new = function(x) {
    this.index = x;
  }).prototype = src__cupertino__localizations.DatePickerDateOrder.prototype;
  dart.addTypeTests(src__cupertino__localizations.DatePickerDateOrder);
  dart.setFieldSignature(src__cupertino__localizations.DatePickerDateOrder, () => ({
    __proto__: dart.getFields(src__cupertino__localizations.DatePickerDateOrder.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__cupertino__localizations.DatePickerDateOrder, ['toString']);
  src__cupertino__localizations.DatePickerDateOrder.dmy = dart.const(new src__cupertino__localizations.DatePickerDateOrder.new(0));
  src__cupertino__localizations.DatePickerDateOrder.mdy = dart.const(new src__cupertino__localizations.DatePickerDateOrder.new(1));
  src__cupertino__localizations.DatePickerDateOrder.ymd = dart.const(new src__cupertino__localizations.DatePickerDateOrder.new(2));
  src__cupertino__localizations.DatePickerDateOrder.ydm = dart.const(new src__cupertino__localizations.DatePickerDateOrder.new(3));
  src__cupertino__localizations.DatePickerDateOrder.values = dart.constList([src__cupertino__localizations.DatePickerDateOrder.dmy, src__cupertino__localizations.DatePickerDateOrder.mdy, src__cupertino__localizations.DatePickerDateOrder.ymd, src__cupertino__localizations.DatePickerDateOrder.ydm], src__cupertino__localizations.DatePickerDateOrder);
  src__cupertino__localizations.CupertinoLocalizations = class CupertinoLocalizations extends core.Object {
    static of(context) {
      return src__widgets__localizations.Localizations.of(src__cupertino__localizations.CupertinoLocalizations, context, dart.wrapType(src__cupertino__localizations.CupertinoLocalizations));
    }
  };
  (src__cupertino__localizations.CupertinoLocalizations.new = function() {
  }).prototype = src__cupertino__localizations.CupertinoLocalizations.prototype;
  dart.addTypeTests(src__cupertino__localizations.CupertinoLocalizations);
  src__cupertino__localizations._CupertinoLocalizationsDelegate = class _CupertinoLocalizationsDelegate extends src__widgets__localizations.LocalizationsDelegate$(src__cupertino__localizations.CupertinoLocalizations) {
    isSupported(locale) {
      return locale.languageCode === "en";
    }
    load(locale) {
      return src__cupertino__localizations.DefaultCupertinoLocalizations.load(locale);
    }
    shouldReload(old) {
      src__cupertino__localizations._CupertinoLocalizationsDelegate._check(old);
      return false;
    }
    toString() {
      return "DefaultCupertinoLocalizations.delegate(en_US)";
    }
  };
  (src__cupertino__localizations._CupertinoLocalizationsDelegate.new = function() {
    src__cupertino__localizations._CupertinoLocalizationsDelegate.__proto__.new.call(this);
  }).prototype = src__cupertino__localizations._CupertinoLocalizationsDelegate.prototype;
  dart.addTypeTests(src__cupertino__localizations._CupertinoLocalizationsDelegate);
  dart.setMethodSignature(src__cupertino__localizations._CupertinoLocalizationsDelegate, () => ({
    __proto__: dart.getMethods(src__cupertino__localizations._CupertinoLocalizationsDelegate.__proto__),
    isSupported: dart.fnType(core.bool, [ui$.Locale]),
    load: dart.fnType(async.Future$(src__cupertino__localizations.CupertinoLocalizations), [ui$.Locale]),
    shouldReload: dart.fnType(core.bool, [core.Object]),
    toString: dart.fnType(core.String, []),
    [$toString]: dart.fnType(core.String, [])
  }));
  dart.defineExtensionMethods(src__cupertino__localizations._CupertinoLocalizationsDelegate, ['toString']);
  let const$4;
  src__cupertino__localizations.DefaultCupertinoLocalizations = class DefaultCupertinoLocalizations extends core.Object {
    datePickerYear(yearIndex) {
      return dart.toString(yearIndex);
    }
    datePickerMonth(monthIndex) {
      return src__cupertino__localizations.DefaultCupertinoLocalizations._months[$_get](dart.notNull(monthIndex) - 1);
    }
    datePickerDayOfMonth(dayIndex) {
      return dart.toString(dayIndex);
    }
    datePickerHour(hour) {
      return dart.toString(hour);
    }
    datePickerHourSemanticsLabel(hour) {
      return dart.toString(hour) + " o'clock";
    }
    datePickerMinute(minute) {
      return dart.toString(minute)[$padLeft](2, "0");
    }
    datePickerMinuteSemanticsLabel(minute) {
      if (minute === 1) return "1 minute";
      return dart.toString(minute) + " minutes";
    }
    datePickerMediumDate(date) {
      return dart.str(src__cupertino__localizations.DefaultCupertinoLocalizations._shortWeekdays[$_get](dart.notNull(date.weekday) - core.DateTime.monday)) + " " + (dart.str(src__cupertino__localizations.DefaultCupertinoLocalizations._shortMonths[$_get](dart.notNull(date.month) - core.DateTime.january)) + " ") + dart.toString(date.day)[$padRight](2);
    }
    get datePickerDateOrder() {
      return src__cupertino__localizations.DatePickerDateOrder.mdy;
    }
    get datePickerDateTimeOrder() {
      return src__cupertino__localizations.DatePickerDateTimeOrder.date_time_dayPeriod;
    }
    get anteMeridiemAbbreviation() {
      return "AM";
    }
    get postMeridiemAbbreviation() {
      return "PM";
    }
    get alertDialogLabel() {
      return "Alert";
    }
    timerPickerHour(hour) {
      return dart.toString(hour);
    }
    timerPickerMinute(minute) {
      return dart.toString(minute);
    }
    timerPickerSecond(second) {
      return dart.toString(second);
    }
    timerPickerHourLabel(hour) {
      return hour === 1 ? "hour" : "hours";
    }
    timerPickerMinuteLabel(minute) {
      return "min";
    }
    timerPickerSecondLabel(second) {
      return "sec";
    }
    get cutButtonLabel() {
      return "Cut";
    }
    get copyButtonLabel() {
      return "Copy";
    }
    get pasteButtonLabel() {
      return "Paste";
    }
    get selectAllButtonLabel() {
      return "Select All";
    }
    static load(locale) {
      return new (SynchronousFutureOfCupertinoLocalizations()).new(const$4 || (const$4 = dart.const(new src__cupertino__localizations.DefaultCupertinoLocalizations.new())));
    }
  };
  (src__cupertino__localizations.DefaultCupertinoLocalizations.new = function() {
  }).prototype = src__cupertino__localizations.DefaultCupertinoLocalizations.prototype;
  dart.addTypeTests(src__cupertino__localizations.DefaultCupertinoLocalizations);
  src__cupertino__localizations.DefaultCupertinoLocalizations[dart.implements] = () => [src__cupertino__localizations.CupertinoLocalizations];
  dart.setMethodSignature(src__cupertino__localizations.DefaultCupertinoLocalizations, () => ({
    __proto__: dart.getMethods(src__cupertino__localizations.DefaultCupertinoLocalizations.__proto__),
    datePickerYear: dart.fnType(core.String, [core.int]),
    datePickerMonth: dart.fnType(core.String, [core.int]),
    datePickerDayOfMonth: dart.fnType(core.String, [core.int]),
    datePickerHour: dart.fnType(core.String, [core.int]),
    datePickerHourSemanticsLabel: dart.fnType(core.String, [core.int]),
    datePickerMinute: dart.fnType(core.String, [core.int]),
    datePickerMinuteSemanticsLabel: dart.fnType(core.String, [core.int]),
    datePickerMediumDate: dart.fnType(core.String, [core.DateTime]),
    timerPickerHour: dart.fnType(core.String, [core.int]),
    timerPickerMinute: dart.fnType(core.String, [core.int]),
    timerPickerSecond: dart.fnType(core.String, [core.int]),
    timerPickerHourLabel: dart.fnType(core.String, [core.int]),
    timerPickerMinuteLabel: dart.fnType(core.String, [core.int]),
    timerPickerSecondLabel: dart.fnType(core.String, [core.int])
  }));
  dart.setGetterSignature(src__cupertino__localizations.DefaultCupertinoLocalizations, () => ({
    __proto__: dart.getGetters(src__cupertino__localizations.DefaultCupertinoLocalizations.__proto__),
    datePickerDateOrder: src__cupertino__localizations.DatePickerDateOrder,
    datePickerDateTimeOrder: src__cupertino__localizations.DatePickerDateTimeOrder,
    anteMeridiemAbbreviation: core.String,
    postMeridiemAbbreviation: core.String,
    alertDialogLabel: core.String,
    cutButtonLabel: core.String,
    copyButtonLabel: core.String,
    pasteButtonLabel: core.String,
    selectAllButtonLabel: core.String
  }));
  dart.defineLazy(src__cupertino__localizations.DefaultCupertinoLocalizations, {
    /*src__cupertino__localizations.DefaultCupertinoLocalizations._shortWeekdays*/get _shortWeekdays() {
      return dart.constList(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], core.String);
    },
    /*src__cupertino__localizations.DefaultCupertinoLocalizations._shortMonths*/get _shortMonths() {
      return dart.constList(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], core.String);
    },
    /*src__cupertino__localizations.DefaultCupertinoLocalizations._months*/get _months() {
      return dart.constList(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], core.String);
    },
    /*src__cupertino__localizations.DefaultCupertinoLocalizations.delegate*/get delegate() {
      return dart.const(new src__cupertino__localizations._CupertinoLocalizationsDelegate.new());
    }
  });
  src__cupertino__page_scaffold.CupertinoPageScaffold = class CupertinoPageScaffold extends src__widgets__framework.StatelessWidget {
    get navigationBar() {
      return this[navigationBar$];
    }
    set navigationBar(value) {
      super.navigationBar = value;
    }
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get resizeToAvoidBottomInset() {
      return this[resizeToAvoidBottomInset$];
    }
    set resizeToAvoidBottomInset(value) {
      super.resizeToAvoidBottomInset = value;
    }
    build(context) {
      let stacked = JSArrayOfWidget().of([]);
      let paddedContent = this.child;
      if (this.navigationBar != null) {
        let existingMediaQuery = src__widgets__media_query.MediaQuery.of(context);
        let topPadding = dart.notNull(this.navigationBar.preferredSize.height) + dart.notNull(existingMediaQuery.padding.top);
        let bottomPadding = dart.test(this.resizeToAvoidBottomInset) ? existingMediaQuery.viewInsets.bottom : 0.0;
        if (dart.test(this.navigationBar.fullObstruction)) {
          paddedContent = new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({top: topPadding, bottom: bottomPadding}), child: this.child});
        } else {
          paddedContent = new src__widgets__media_query.MediaQuery.new({data: existingMediaQuery.copyWith({padding: existingMediaQuery.padding.copyWith({top: topPadding})}), child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({bottom: bottomPadding}), child: this.child})});
        }
      }
      stacked[$add](paddedContent);
      if (this.navigationBar != null) {
        stacked[$add](new src__widgets__basic.Positioned.new({top: 0.0, left: 0.0, right: 0.0, child: this.navigationBar}));
      }
      return new src__widgets__container.DecoratedBox.new({decoration: new src__painting__box_decoration.BoxDecoration.new({color: this.backgroundColor}), child: new src__widgets__basic.Stack.new({children: stacked})});
    }
  };
  (src__cupertino__page_scaffold.CupertinoPageScaffold.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let navigationBar = opts && 'navigationBar' in opts ? opts.navigationBar : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : src__cupertino__colors.CupertinoColors.white;
    let resizeToAvoidBottomInset = opts && 'resizeToAvoidBottomInset' in opts ? opts.resizeToAvoidBottomInset : true;
    let child = opts && 'child' in opts ? opts.child : null;
    this[navigationBar$] = navigationBar;
    this[backgroundColor$] = backgroundColor;
    this[resizeToAvoidBottomInset$] = resizeToAvoidBottomInset;
    this[child$0] = child;
    if (!(child != null)) dart.assertFailed();
    if (!(resizeToAvoidBottomInset != null)) dart.assertFailed();
    src__cupertino__page_scaffold.CupertinoPageScaffold.__proto__.new.call(this, {key: key});
  }).prototype = src__cupertino__page_scaffold.CupertinoPageScaffold.prototype;
  dart.addTypeTests(src__cupertino__page_scaffold.CupertinoPageScaffold);
  const navigationBar$ = Symbol("CupertinoPageScaffold.navigationBar");
  const child$0 = Symbol("CupertinoPageScaffold.child");
  const backgroundColor$ = Symbol("CupertinoPageScaffold.backgroundColor");
  const resizeToAvoidBottomInset$ = Symbol("CupertinoPageScaffold.resizeToAvoidBottomInset");
  dart.setMethodSignature(src__cupertino__page_scaffold.CupertinoPageScaffold, () => ({
    __proto__: dart.getMethods(src__cupertino__page_scaffold.CupertinoPageScaffold.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__page_scaffold.CupertinoPageScaffold, () => ({
    __proto__: dart.getFields(src__cupertino__page_scaffold.CupertinoPageScaffold.__proto__),
    navigationBar: dart.finalFieldType(src__cupertino__page_scaffold.ObstructingPreferredSizeWidget),
    child: dart.finalFieldType(src__widgets__framework.Widget),
    backgroundColor: dart.finalFieldType(ui$.Color),
    resizeToAvoidBottomInset: dart.finalFieldType(core.bool)
  }));
  src__cupertino__page_scaffold.ObstructingPreferredSizeWidget = class ObstructingPreferredSizeWidget extends src__widgets__preferred_size.PreferredSizeWidget {};
  (src__cupertino__page_scaffold.ObstructingPreferredSizeWidget.new = function() {
  }).prototype = src__cupertino__page_scaffold.ObstructingPreferredSizeWidget.prototype;
  dart.addTypeTests(src__cupertino__page_scaffold.ObstructingPreferredSizeWidget);
  dart.defineLazy(src__cupertino__route, {
    /*src__cupertino__route._kBackGestureWidth*/get _kBackGestureWidth() {
      return 20.0;
    },
    /*src__cupertino__route._kMinFlingVelocity*/get _kMinFlingVelocity() {
      return 1.0;
    },
    /*src__cupertino__route._kModalBarrierColor*/get _kModalBarrierColor() {
      return dart.const(new ui$.Color.new(1711539215));
    },
    /*src__cupertino__route._kModalPopupTransitionDuration*/get _kModalPopupTransitionDuration() {
      return dart.const(new core.Duration.new({milliseconds: 335}));
    },
    /*src__cupertino__route._kRightMiddleTween*/get _kRightMiddleTween() {
      return new (TweenOfOffset()).new({begin: dart.const(new ui$.Offset.new(1.0, 0.0)), end: ui$.Offset.zero});
    },
    /*src__cupertino__route._kMiddleLeftTween*/get _kMiddleLeftTween() {
      return new (TweenOfOffset()).new({begin: ui$.Offset.zero, end: dart.const(new ui$.Offset.new(-1.0 / 3.0, 0.0))});
    },
    /*src__cupertino__route._kBottomUpTween*/get _kBottomUpTween() {
      return new (TweenOfOffset()).new({begin: dart.const(new ui$.Offset.new(0.0, 1.0)), end: ui$.Offset.zero});
    },
    /*src__cupertino__route._kGradientShadowTween*/get _kGradientShadowTween() {
      return new src__widgets__implicit_animations.DecorationTween.new({begin: src__cupertino__route._CupertinoEdgeShadowDecoration.none, end: dart.const(new src__cupertino__route._CupertinoEdgeShadowDecoration.new({edgeGradient: dart.const(new src__painting__gradient.LinearGradient.new({begin: dart.const(new src__painting__alignment.AlignmentDirectional.new(0.9, 0.0)), end: src__painting__alignment.AlignmentDirectional.centerEnd, colors: dart.constList([dart.const(new ui$.Color.new(0)), dart.const(new ui$.Color.new(67108864)), dart.const(new ui$.Color.new(301989888)), dart.const(new ui$.Color.new(939524096))], ui$.Color), stops: dart.constList([0.0, 0.3, 0.6, 1.0], core.double)}))}))});
    }
  });
  const _previousTitle = dart.privateName(src__cupertino__route, "_previousTitle");
  let const$5;
  const _is_CupertinoPageRoute_default = Symbol('_is_CupertinoPageRoute_default');
  src__cupertino__route.CupertinoPageRoute$ = dart.generic(T => {
    class CupertinoPageRoute extends src__widgets__pages.PageRoute$(T) {
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      get title() {
        return this[title$];
      }
      set title(value) {
        super.title = value;
      }
      get previousTitle() {
        if (!(this[_previousTitle] != null)) dart.assertFailed("Cannot read the previousTitle for a route that has not yet been installed");
        return this[_previousTitle];
      }
      didChangePrevious(previousRoute) {
        let previousTitleString = src__cupertino__route.CupertinoPageRoute.is(previousRoute) ? previousRoute.title : null;
        if (this[_previousTitle] == null) {
          this[_previousTitle] = new (ValueNotifierOfString()).new(previousTitleString);
        } else {
          this[_previousTitle].value = previousTitleString;
        }
        super.didChangePrevious(previousRoute);
      }
      get maintainState() {
        return this[maintainState$];
      }
      set maintainState(value) {
        super.maintainState = value;
      }
      get transitionDuration() {
        return const$5 || (const$5 = dart.const(new core.Duration.new({milliseconds: 350})));
      }
      get barrierColor() {
        return null;
      }
      get barrierLabel() {
        return null;
      }
      canTransitionFrom(previousRoute) {
        return src__cupertino__route.CupertinoPageRoute.is(previousRoute);
      }
      canTransitionTo(nextRoute) {
        return src__cupertino__route.CupertinoPageRoute.is(nextRoute) && !dart.test(nextRoute.fullscreenDialog);
      }
      dispose() {
        src__cupertino__route.CupertinoPageRoute._popGestureInProgress.remove(this);
        super.dispose();
      }
      static isPopGestureInProgress(route) {
        return src__cupertino__route.CupertinoPageRoute._popGestureInProgress.contains(route);
      }
      get popGestureInProgress() {
        return src__cupertino__route.CupertinoPageRoute.isPopGestureInProgress(this);
      }
      get popGestureEnabled() {
        return src__cupertino__route.CupertinoPageRoute._isPopGestureEnabled(T, this);
      }
      static _isPopGestureEnabled(T, route) {
        if (dart.test(route.isFirst)) return false;
        if (dart.test(route.willHandlePopInternally)) return false;
        if (dart.test(route.hasScopedWillPopCallback)) return false;
        if (dart.test(route.fullscreenDialog)) return false;
        if (route.controller.status !== src__animation__animation.AnimationStatus.completed) return false;
        if (dart.test(src__cupertino__route.CupertinoPageRoute._popGestureInProgress.contains(route))) return false;
        return true;
      }
      buildPage(context, animation, secondaryAnimation) {
        let result = new src__widgets__basic.Semantics.new({scopesRoute: true, explicitChildNodes: true, child: this.builder(context)});
        if (!dart.test(dart.fn(() => {
          if (result === null) {
            dart.throw(new src__foundation__assertions.FlutterError.new("The builder for route \"" + dart.str(this.settings.name) + "\" returned null.\n" + "Route builders must never return null."));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed();
        return result;
      }
      static _startPopGesture(T, route) {
        if (!!dart.test(src__cupertino__route.CupertinoPageRoute._popGestureInProgress.contains(route))) dart.assertFailed();
        if (!dart.test(src__cupertino__route.CupertinoPageRoute._isPopGestureEnabled(T, route))) dart.assertFailed();
        src__cupertino__route.CupertinoPageRoute._popGestureInProgress.add(route);
        let backController = null;
        backController = new (src__cupertino__route._CupertinoBackGestureController$(T)).new({navigator: route.navigator, controller: route.controller, onEnded: dart.fn(() => {
            let t = backController;
            t == null ? null : t.dispose();
            backController = null;
            src__cupertino__route.CupertinoPageRoute._popGestureInProgress.remove(route);
          }, VoidToNull())});
        return backController;
      }
      static buildPageTransitions(T, route, context, animation, secondaryAnimation, child) {
        if (dart.test(route.fullscreenDialog)) {
          return new src__cupertino__route.CupertinoFullscreenDialogTransition.new({animation: animation, child: child});
        } else {
          return new src__cupertino__route.CupertinoPageTransition.new({primaryRouteAnimation: animation, secondaryRouteAnimation: secondaryAnimation, linearTransition: src__cupertino__route.CupertinoPageRoute._popGestureInProgress.contains(route), child: new (src__cupertino__route._CupertinoBackGestureDetector$(T)).new({enabledCallback: dart.fn(() => src__cupertino__route.CupertinoPageRoute._isPopGestureEnabled(T, route), VoidTobool()), onStartPopGesture: dart.fn(() => src__cupertino__route.CupertinoPageRoute._startPopGesture(T, route), dart.fnType(src__cupertino__route._CupertinoBackGestureController$(T), [])), child: child})});
        }
      }
      buildTransitions(context, animation, secondaryAnimation, child) {
        return src__cupertino__route.CupertinoPageRoute.buildPageTransitions(T, this, context, animation, secondaryAnimation, child);
      }
      get debugLabel() {
        return dart.str(super.debugLabel) + "(" + dart.str(this.settings.name) + ")";
      }
    }
    (CupertinoPageRoute.new = function(opts) {
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let settings = opts && 'settings' in opts ? opts.settings : null;
      let maintainState = opts && 'maintainState' in opts ? opts.maintainState : true;
      let fullscreenDialog = opts && 'fullscreenDialog' in opts ? opts.fullscreenDialog : false;
      this[_previousTitle] = null;
      this[builder$] = builder;
      this[title$] = title;
      this[maintainState$] = maintainState;
      if (!(builder != null)) dart.assertFailed();
      if (!(maintainState != null)) dart.assertFailed();
      if (!(fullscreenDialog != null)) dart.assertFailed();
      CupertinoPageRoute.__proto__.new.call(this, {settings: settings, fullscreenDialog: fullscreenDialog});
      if (!dart.test(this.opaque)) dart.assertFailed();
    }).prototype = CupertinoPageRoute.prototype;
    dart.addTypeTests(CupertinoPageRoute);
    CupertinoPageRoute.prototype[_is_CupertinoPageRoute_default] = true;
    const builder$ = Symbol("CupertinoPageRoute.builder");
    const title$ = Symbol("CupertinoPageRoute.title");
    const maintainState$ = Symbol("CupertinoPageRoute.maintainState");
    dart.setMethodSignature(CupertinoPageRoute, () => ({
      __proto__: dart.getMethods(CupertinoPageRoute.__proto__),
      buildPage: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, src__animation__animation.Animation$(core.double), src__animation__animation.Animation$(core.double)])
    }));
    dart.setGetterSignature(CupertinoPageRoute, () => ({
      __proto__: dart.getGetters(CupertinoPageRoute.__proto__),
      previousTitle: src__foundation__change_notifier.ValueListenable$(core.String),
      transitionDuration: core.Duration,
      barrierColor: ui$.Color,
      barrierLabel: core.String,
      popGestureInProgress: core.bool,
      popGestureEnabled: core.bool
    }));
    dart.setFieldSignature(CupertinoPageRoute, () => ({
      __proto__: dart.getFields(CupertinoPageRoute.__proto__),
      builder: dart.finalFieldType(BuildContextToWidget()),
      title: dart.finalFieldType(core.String),
      [_previousTitle]: dart.fieldType(ValueNotifierOfString()),
      maintainState: dart.finalFieldType(core.bool)
    }));
    return CupertinoPageRoute;
  });
  src__cupertino__route.CupertinoPageRoute = src__cupertino__route.CupertinoPageRoute$();
  dart.defineLazy(src__cupertino__route.CupertinoPageRoute, {
    /*src__cupertino__route.CupertinoPageRoute._popGestureInProgress*/get _popGestureInProgress() {
      return new (_HashSetOfPageRoute()).new();
    }
  });
  dart.addTypeTests(src__cupertino__route.CupertinoPageRoute, _is_CupertinoPageRoute_default);
  const _primaryPositionAnimation = dart.privateName(src__cupertino__route, "_primaryPositionAnimation");
  const _secondaryPositionAnimation = dart.privateName(src__cupertino__route, "_secondaryPositionAnimation");
  const _primaryShadowAnimation = dart.privateName(src__cupertino__route, "_primaryShadowAnimation");
  src__cupertino__route.CupertinoPageTransition = class CupertinoPageTransition extends src__widgets__framework.StatelessWidget {
    get child() {
      return this[child$1];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      if (!dart.test(src__widgets__debug.debugCheckHasDirectionality(context))) dart.assertFailed();
      let textDirection = src__widgets__basic.Directionality.of(context);
      return new src__widgets__transitions.SlideTransition.new({position: this[_secondaryPositionAnimation], textDirection: textDirection, transformHitTests: false, child: new src__widgets__transitions.SlideTransition.new({position: this[_primaryPositionAnimation], textDirection: textDirection, child: new src__widgets__transitions.DecoratedBoxTransition.new({decoration: this[_primaryShadowAnimation], child: this.child})})});
    }
  };
  (src__cupertino__route.CupertinoPageTransition.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let primaryRouteAnimation = opts && 'primaryRouteAnimation' in opts ? opts.primaryRouteAnimation : null;
    let secondaryRouteAnimation = opts && 'secondaryRouteAnimation' in opts ? opts.secondaryRouteAnimation : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let linearTransition = opts && 'linearTransition' in opts ? opts.linearTransition : null;
    this[child$1] = child;
    if (!(linearTransition != null)) dart.assertFailed();
    this[_primaryPositionAnimation] = AnimationOfOffset()._check((dart.test(linearTransition) ? primaryRouteAnimation : new src__animation__animations.CurvedAnimation.new({parent: primaryRouteAnimation, curve: src__animation__curves.Curves.easeOut, reverseCurve: src__animation__curves.Curves.easeIn})).drive(ui$.Offset, src__cupertino__route._kRightMiddleTween));
    this[_secondaryPositionAnimation] = new src__animation__animations.CurvedAnimation.new({parent: secondaryRouteAnimation, curve: src__animation__curves.Curves.easeOut, reverseCurve: src__animation__curves.Curves.easeIn}).drive(ui$.Offset, src__cupertino__route._kMiddleLeftTween);
    this[_primaryShadowAnimation] = new src__animation__animations.CurvedAnimation.new({parent: primaryRouteAnimation, curve: src__animation__curves.Curves.easeOut}).drive(src__painting__decoration.Decoration, src__cupertino__route._kGradientShadowTween);
    src__cupertino__route.CupertinoPageTransition.__proto__.new.call(this, {key: key});
  }).prototype = src__cupertino__route.CupertinoPageTransition.prototype;
  dart.addTypeTests(src__cupertino__route.CupertinoPageTransition);
  const child$1 = Symbol("CupertinoPageTransition.child");
  dart.setMethodSignature(src__cupertino__route.CupertinoPageTransition, () => ({
    __proto__: dart.getMethods(src__cupertino__route.CupertinoPageTransition.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__route.CupertinoPageTransition, () => ({
    __proto__: dart.getFields(src__cupertino__route.CupertinoPageTransition.__proto__),
    [_primaryPositionAnimation]: dart.finalFieldType(AnimationOfOffset()),
    [_secondaryPositionAnimation]: dart.finalFieldType(AnimationOfOffset()),
    [_primaryShadowAnimation]: dart.finalFieldType(AnimationOfDecoration()),
    child: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  const _positionAnimation = dart.privateName(src__cupertino__route, "_positionAnimation");
  src__cupertino__route.CupertinoFullscreenDialogTransition = class CupertinoFullscreenDialogTransition extends src__widgets__framework.StatelessWidget {
    get child() {
      return this[child$2];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return new src__widgets__transitions.SlideTransition.new({position: this[_positionAnimation], child: this.child});
    }
  };
  (src__cupertino__route.CupertinoFullscreenDialogTransition.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[child$2] = child;
    this[_positionAnimation] = AnimationOfOffset()._check(AnimationOfdouble()._check(animation.drive(core.double, new src__animation__tween.CurveTween.new({curve: src__animation__curves.Curves.easeInOut}))).drive(ui$.Offset, src__cupertino__route._kBottomUpTween));
    src__cupertino__route.CupertinoFullscreenDialogTransition.__proto__.new.call(this, {key: key});
  }).prototype = src__cupertino__route.CupertinoFullscreenDialogTransition.prototype;
  dart.addTypeTests(src__cupertino__route.CupertinoFullscreenDialogTransition);
  const child$2 = Symbol("CupertinoFullscreenDialogTransition.child");
  dart.setMethodSignature(src__cupertino__route.CupertinoFullscreenDialogTransition, () => ({
    __proto__: dart.getMethods(src__cupertino__route.CupertinoFullscreenDialogTransition.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__route.CupertinoFullscreenDialogTransition, () => ({
    __proto__: dart.getFields(src__cupertino__route.CupertinoFullscreenDialogTransition.__proto__),
    [_positionAnimation]: dart.finalFieldType(AnimationOfOffset()),
    child: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  const _is__CupertinoBackGestureDetector_default = Symbol('_is__CupertinoBackGestureDetector_default');
  src__cupertino__route._CupertinoBackGestureDetector$ = dart.generic(T => {
    let _CupertinoBackGestureDetectorStateOfT = () => (_CupertinoBackGestureDetectorStateOfT = dart.constFn(src__cupertino__route._CupertinoBackGestureDetectorState$(T)))();
    let _CupertinoBackGestureControllerOfT = () => (_CupertinoBackGestureControllerOfT = dart.constFn(src__cupertino__route._CupertinoBackGestureController$(T)))();
    let VoidTo_CupertinoBackGestureControllerOfT = () => (VoidTo_CupertinoBackGestureControllerOfT = dart.constFn(dart.fnType(_CupertinoBackGestureControllerOfT(), [])))();
    class _CupertinoBackGestureDetector extends src__widgets__framework.StatefulWidget {
      createState() {
        return new (_CupertinoBackGestureDetectorStateOfT()).new();
      }
    }
    (_CupertinoBackGestureDetector.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let enabledCallback = opts && 'enabledCallback' in opts ? opts.enabledCallback : null;
      let onStartPopGesture = opts && 'onStartPopGesture' in opts ? opts.onStartPopGesture : null;
      let child = opts && 'child' in opts ? opts.child : null;
      this.enabledCallback = enabledCallback;
      this.onStartPopGesture = onStartPopGesture;
      this.child = child;
      if (!(enabledCallback != null)) dart.assertFailed();
      if (!(onStartPopGesture != null)) dart.assertFailed();
      if (!(child != null)) dart.assertFailed();
      _CupertinoBackGestureDetector.__proto__.new.call(this, {key: key});
    }).prototype = _CupertinoBackGestureDetector.prototype;
    dart.addTypeTests(_CupertinoBackGestureDetector);
    _CupertinoBackGestureDetector.prototype[_is__CupertinoBackGestureDetector_default] = true;
    dart.setMethodSignature(_CupertinoBackGestureDetector, () => ({
      __proto__: dart.getMethods(_CupertinoBackGestureDetector.__proto__),
      createState: dart.fnType(src__cupertino__route._CupertinoBackGestureDetectorState$(T), [])
    }));
    dart.setFieldSignature(_CupertinoBackGestureDetector, () => ({
      __proto__: dart.getFields(_CupertinoBackGestureDetector.__proto__),
      child: dart.finalFieldType(src__widgets__framework.Widget),
      enabledCallback: dart.finalFieldType(VoidTobool()),
      onStartPopGesture: dart.finalFieldType(VoidTo_CupertinoBackGestureControllerOfT())
    }));
    return _CupertinoBackGestureDetector;
  });
  src__cupertino__route._CupertinoBackGestureDetector = src__cupertino__route._CupertinoBackGestureDetector$();
  dart.addTypeTests(src__cupertino__route._CupertinoBackGestureDetector, _is__CupertinoBackGestureDetector_default);
  const _backGestureController = dart.privateName(src__cupertino__route, "_backGestureController");
  const _recognizer = dart.privateName(src__cupertino__route, "_recognizer");
  const _handleDragStart = dart.privateName(src__cupertino__route, "_handleDragStart");
  const _handleDragUpdate = dart.privateName(src__cupertino__route, "_handleDragUpdate");
  const _handleDragEnd = dart.privateName(src__cupertino__route, "_handleDragEnd");
  const _handleDragCancel = dart.privateName(src__cupertino__route, "_handleDragCancel");
  const _convertToLogical = dart.privateName(src__cupertino__route, "_convertToLogical");
  const _handlePointerDown = dart.privateName(src__cupertino__route, "_handlePointerDown");
  const _is__CupertinoBackGestureDetectorState_default = Symbol('_is__CupertinoBackGestureDetectorState_default');
  src__cupertino__route._CupertinoBackGestureDetectorState$ = dart.generic(T => {
    let _CupertinoBackGestureControllerOfT = () => (_CupertinoBackGestureControllerOfT = dart.constFn(src__cupertino__route._CupertinoBackGestureController$(T)))();
    class _CupertinoBackGestureDetectorState extends src__widgets__framework.State$(src__cupertino__route._CupertinoBackGestureDetector$(T)) {
      initState() {
        super.initState();
        let _ = new src__gestures__monodrag.HorizontalDragGestureRecognizer.new({debugOwner: this});
        _.onStart = dart.bind(this, _handleDragStart);
        _.onUpdate = dart.bind(this, _handleDragUpdate);
        _.onEnd = dart.bind(this, _handleDragEnd);
        _.onCancel = dart.bind(this, _handleDragCancel);
        this[_recognizer] = _;
      }
      dispose() {
        this[_recognizer].dispose();
        super.dispose();
      }
      [_handleDragStart](details) {
        if (!dart.test(this.mounted)) dart.assertFailed();
        if (!(this[_backGestureController] == null)) dart.assertFailed();
        this[_backGestureController] = this.widget.onStartPopGesture();
      }
      [_handleDragUpdate](details) {
        if (!dart.test(this.mounted)) dart.assertFailed();
        if (!(this[_backGestureController] != null)) dart.assertFailed();
        this[_backGestureController].dragUpdate(this[_convertToLogical](dart.notNull(details.primaryDelta) / dart.notNull(this.context.size.width)));
      }
      [_handleDragEnd](details) {
        if (!dart.test(this.mounted)) dart.assertFailed();
        if (!(this[_backGestureController] != null)) dart.assertFailed();
        this[_backGestureController].dragEnd(this[_convertToLogical](dart.notNull(details.velocity.pixelsPerSecond.dx) / dart.notNull(this.context.size.width)));
        this[_backGestureController] = null;
      }
      [_handleDragCancel]() {
        if (!dart.test(this.mounted)) dart.assertFailed();
        let t = this[_backGestureController];
        t == null ? null : t.dragEnd(0.0);
        this[_backGestureController] = null;
      }
      [_handlePointerDown](event) {
        if (dart.test(this.widget.enabledCallback())) this[_recognizer].addPointer(event);
      }
      [_convertToLogical](value) {
        switch (src__widgets__basic.Directionality.of(this.context)) {
          case ui$.TextDirection.rtl:
          {
            return -dart.notNull(value);
          }
          case ui$.TextDirection.ltr:
          {
            return value;
          }
        }
        return null;
      }
      build(context) {
        if (!dart.test(src__widgets__debug.debugCheckHasDirectionality(context))) dart.assertFailed();
        let dragAreaWidth = src__widgets__basic.Directionality.of(context) === ui$.TextDirection.ltr ? src__widgets__media_query.MediaQuery.of(context).padding.left : src__widgets__media_query.MediaQuery.of(context).padding.right;
        dragAreaWidth = math.max(core.double, dragAreaWidth, 20.0);
        return new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.passthrough, children: JSArrayOfWidget().of([this.widget.child, new src__widgets__basic.PositionedDirectional.new({start: 0.0, width: dragAreaWidth, top: 0.0, bottom: 0.0, child: new src__widgets__basic.Listener.new({onPointerDown: dart.bind(this, _handlePointerDown), behavior: src__rendering__proxy_box.HitTestBehavior.translucent})})])});
      }
    }
    (_CupertinoBackGestureDetectorState.new = function() {
      this[_backGestureController] = null;
      this[_recognizer] = null;
      _CupertinoBackGestureDetectorState.__proto__.new.call(this);
    }).prototype = _CupertinoBackGestureDetectorState.prototype;
    dart.addTypeTests(_CupertinoBackGestureDetectorState);
    _CupertinoBackGestureDetectorState.prototype[_is__CupertinoBackGestureDetectorState_default] = true;
    dart.setMethodSignature(_CupertinoBackGestureDetectorState, () => ({
      __proto__: dart.getMethods(_CupertinoBackGestureDetectorState.__proto__),
      initState: dart.fnType(dart.void, []),
      dispose: dart.fnType(dart.void, []),
      [_handleDragStart]: dart.fnType(dart.void, [src__gestures__drag_details.DragStartDetails]),
      [_handleDragUpdate]: dart.fnType(dart.void, [src__gestures__drag_details.DragUpdateDetails]),
      [_handleDragEnd]: dart.fnType(dart.void, [src__gestures__drag_details.DragEndDetails]),
      [_handleDragCancel]: dart.fnType(dart.void, []),
      [_handlePointerDown]: dart.fnType(dart.void, [src__gestures__events.PointerDownEvent]),
      [_convertToLogical]: dart.fnType(core.double, [core.double]),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
    }));
    dart.setFieldSignature(_CupertinoBackGestureDetectorState, () => ({
      __proto__: dart.getFields(_CupertinoBackGestureDetectorState.__proto__),
      [_backGestureController]: dart.fieldType(_CupertinoBackGestureControllerOfT()),
      [_recognizer]: dart.fieldType(src__gestures__monodrag.HorizontalDragGestureRecognizer)
    }));
    return _CupertinoBackGestureDetectorState;
  });
  src__cupertino__route._CupertinoBackGestureDetectorState = src__cupertino__route._CupertinoBackGestureDetectorState$();
  dart.addTypeTests(src__cupertino__route._CupertinoBackGestureDetectorState, _is__CupertinoBackGestureDetectorState_default);
  const _animating = dart.privateName(src__cupertino__route, "_animating");
  const _handleStatusChanged = dart.privateName(src__cupertino__route, "_handleStatusChanged");
  const _is__CupertinoBackGestureController_default = Symbol('_is__CupertinoBackGestureController_default');
  src__cupertino__route._CupertinoBackGestureController$ = dart.generic(T => {
    class _CupertinoBackGestureController extends core.Object {
      dragUpdate(delta) {
        this.controller.value = dart.notNull(this.controller.value) - dart.notNull(delta);
      }
      dragEnd(velocity) {
        if (velocity[$abs]() >= 1.0) {
          this.controller.fling({velocity: -dart.notNull(velocity)});
        } else if (dart.notNull(this.controller.value) <= 0.5) {
          this.controller.fling({velocity: -1.0});
        } else {
          this.controller.fling({velocity: 1.0});
        }
        if (!dart.test(this.controller.isAnimating)) dart.assertFailed();
        if (!(this.controller.status !== src__animation__animation.AnimationStatus.completed)) dart.assertFailed();
        if (!(this.controller.status !== src__animation__animation.AnimationStatus.dismissed)) dart.assertFailed();
        this[_animating] = true;
        this.controller.addStatusListener(dart.bind(this, _handleStatusChanged));
      }
      [_handleStatusChanged](status) {
        if (!dart.test(this[_animating])) dart.assertFailed();
        this.controller.removeStatusListener(dart.bind(this, _handleStatusChanged));
        this[_animating] = false;
        if (status === src__animation__animation.AnimationStatus.dismissed) this.navigator.pop(T);
        this.onEnded();
      }
      dispose() {
        if (dart.test(this[_animating])) this.controller.removeStatusListener(dart.bind(this, _handleStatusChanged));
        this.navigator.didStopUserGesture();
      }
    }
    (_CupertinoBackGestureController.new = function(opts) {
      let navigator = opts && 'navigator' in opts ? opts.navigator : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let onEnded = opts && 'onEnded' in opts ? opts.onEnded : null;
      this[_animating] = false;
      this.navigator = navigator;
      this.controller = controller;
      this.onEnded = onEnded;
      if (!(navigator != null)) dart.assertFailed();
      if (!(controller != null)) dart.assertFailed();
      if (!(onEnded != null)) dart.assertFailed();
      this.navigator.didStartUserGesture();
    }).prototype = _CupertinoBackGestureController.prototype;
    dart.addTypeTests(_CupertinoBackGestureController);
    _CupertinoBackGestureController.prototype[_is__CupertinoBackGestureController_default] = true;
    dart.setMethodSignature(_CupertinoBackGestureController, () => ({
      __proto__: dart.getMethods(_CupertinoBackGestureController.__proto__),
      dragUpdate: dart.fnType(dart.void, [core.double]),
      dragEnd: dart.fnType(dart.void, [core.double]),
      [_handleStatusChanged]: dart.fnType(dart.void, [src__animation__animation.AnimationStatus]),
      dispose: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_CupertinoBackGestureController, () => ({
      __proto__: dart.getFields(_CupertinoBackGestureController.__proto__),
      navigator: dart.finalFieldType(src__widgets__navigator.NavigatorState),
      controller: dart.finalFieldType(src__animation__animation_controller.AnimationController),
      onEnded: dart.finalFieldType(VoidTovoid()),
      [_animating]: dart.fieldType(core.bool)
    }));
    return _CupertinoBackGestureController;
  });
  src__cupertino__route._CupertinoBackGestureController = src__cupertino__route._CupertinoBackGestureController$();
  dart.addTypeTests(src__cupertino__route._CupertinoBackGestureController, _is__CupertinoBackGestureController_default);
  src__cupertino__route._CupertinoEdgeShadowDecoration = class _CupertinoEdgeShadowDecoration extends src__painting__decoration.Decoration {
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed();
      if (a == null && b == null) return null;
      return new src__cupertino__route._CupertinoEdgeShadowDecoration.new({edgeGradient: src__painting__gradient.LinearGradient.lerp(a == null ? null : a.edgeGradient, b == null ? null : b.edgeGradient, t)});
    }
    lerpFrom(a, t) {
      if (!src__cupertino__route._CupertinoEdgeShadowDecoration.is(a)) return src__cupertino__route._CupertinoEdgeShadowDecoration.lerp(null, this, t);
      return src__cupertino__route._CupertinoEdgeShadowDecoration.lerp(src__cupertino__route._CupertinoEdgeShadowDecoration._check(a), this, t);
    }
    lerpTo(b, t) {
      if (!src__cupertino__route._CupertinoEdgeShadowDecoration.is(b)) return src__cupertino__route._CupertinoEdgeShadowDecoration.lerp(this, null, t);
      return src__cupertino__route._CupertinoEdgeShadowDecoration.lerp(this, src__cupertino__route._CupertinoEdgeShadowDecoration._check(b), t);
    }
    createBoxPainter(onChanged) {
      if (onChanged === void 0) onChanged = null;
      return new src__cupertino__route._CupertinoEdgeShadowPainter.new(this, onChanged);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(this[$runtimeType], dart.runtimeType(other))) return false;
      let typedOther = src__cupertino__route._CupertinoEdgeShadowDecoration._check(other);
      return dart.equals(this.edgeGradient, typedOther.edgeGradient);
    }
    get hashCode() {
      return dart.hashCode(this.edgeGradient);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfLinearGradient()).new("edgeGradient", this.edgeGradient));
    }
  };
  (src__cupertino__route._CupertinoEdgeShadowDecoration.new = function(opts) {
    let edgeGradient = opts && 'edgeGradient' in opts ? opts.edgeGradient : null;
    this.edgeGradient = edgeGradient;
    src__cupertino__route._CupertinoEdgeShadowDecoration.__proto__.new.call(this);
  }).prototype = src__cupertino__route._CupertinoEdgeShadowDecoration.prototype;
  dart.addTypeTests(src__cupertino__route._CupertinoEdgeShadowDecoration);
  dart.setMethodSignature(src__cupertino__route._CupertinoEdgeShadowDecoration, () => ({
    __proto__: dart.getMethods(src__cupertino__route._CupertinoEdgeShadowDecoration.__proto__),
    lerpFrom: dart.fnType(src__cupertino__route._CupertinoEdgeShadowDecoration, [src__painting__decoration.Decoration, core.double]),
    lerpTo: dart.fnType(src__cupertino__route._CupertinoEdgeShadowDecoration, [src__painting__decoration.Decoration, core.double]),
    createBoxPainter: dart.fnType(src__cupertino__route._CupertinoEdgeShadowPainter, [], [dart.fnType(dart.void, [])])
  }));
  dart.setFieldSignature(src__cupertino__route._CupertinoEdgeShadowDecoration, () => ({
    __proto__: dart.getFields(src__cupertino__route._CupertinoEdgeShadowDecoration.__proto__),
    edgeGradient: dart.finalFieldType(src__painting__gradient.LinearGradient)
  }));
  dart.defineExtensionMethods(src__cupertino__route._CupertinoEdgeShadowDecoration, ['_equals']);
  dart.defineExtensionAccessors(src__cupertino__route._CupertinoEdgeShadowDecoration, ['hashCode']);
  dart.defineLazy(src__cupertino__route._CupertinoEdgeShadowDecoration, {
    /*src__cupertino__route._CupertinoEdgeShadowDecoration.none*/get none() {
      return dart.const(new src__cupertino__route._CupertinoEdgeShadowDecoration.new());
    }
  });
  const _decoration = dart.privateName(src__cupertino__route, "_decoration");
  src__cupertino__route._CupertinoEdgeShadowPainter = class _CupertinoEdgeShadowPainter extends src__painting__decoration.BoxPainter {
    paint(canvas, offset, configuration) {
      let gradient = this[_decoration].edgeGradient;
      if (gradient == null) return;
      let textDirection = configuration.textDirection;
      if (!(textDirection != null)) dart.assertFailed();
      let deltaX = null;
      switch (textDirection) {
        case ui$.TextDirection.rtl:
        {
          deltaX = configuration.size.width;
          break;
        }
        case ui$.TextDirection.ltr:
        {
          deltaX = -dart.notNull(configuration.size.width);
          break;
        }
      }
      let rect = offset['&'](configuration.size).translate(deltaX, 0.0);
      let paint = new ui$.Paint.new();
      paint.shader = gradient.createShader(rect, {textDirection: textDirection});
      canvas.drawRect(rect, paint);
    }
  };
  (src__cupertino__route._CupertinoEdgeShadowPainter.new = function(decoration, onChange) {
    this[_decoration] = decoration;
    if (!(decoration != null)) dart.assertFailed();
    src__cupertino__route._CupertinoEdgeShadowPainter.__proto__.new.call(this, onChange);
  }).prototype = src__cupertino__route._CupertinoEdgeShadowPainter.prototype;
  dart.addTypeTests(src__cupertino__route._CupertinoEdgeShadowPainter);
  dart.setMethodSignature(src__cupertino__route._CupertinoEdgeShadowPainter, () => ({
    __proto__: dart.getMethods(src__cupertino__route._CupertinoEdgeShadowPainter.__proto__),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Offset, src__painting__image_provider.ImageConfiguration])
  }));
  dart.setFieldSignature(src__cupertino__route._CupertinoEdgeShadowPainter, () => ({
    __proto__: dart.getFields(src__cupertino__route._CupertinoEdgeShadowPainter.__proto__),
    [_decoration]: dart.finalFieldType(src__cupertino__route._CupertinoEdgeShadowDecoration)
  }));
  const _animation = dart.privateName(src__cupertino__route, "_animation");
  const _offsetTween = dart.privateName(src__cupertino__route, "_offsetTween");
  let const$6;
  let const$7;
  const _is__CupertinoModalPopupRoute_default = Symbol('_is__CupertinoModalPopupRoute_default');
  src__cupertino__route._CupertinoModalPopupRoute$ = dart.generic(T => {
    class _CupertinoModalPopupRoute extends src__widgets__routes.PopupRoute$(T) {
      get barrierColor() {
        return src__cupertino__route._kModalBarrierColor;
      }
      get barrierDismissible() {
        return true;
      }
      get semanticsDismissible() {
        return false;
      }
      get transitionDuration() {
        return src__cupertino__route._kModalPopupTransitionDuration;
      }
      createAnimation() {
        if (!(this[_animation] == null)) dart.assertFailed();
        this[_animation] = new src__animation__animations.CurvedAnimation.new({parent: super.createAnimation(), curve: src__animation__curves.Curves.ease, reverseCurve: src__animation__curves.Curves.ease.flipped});
        this[_offsetTween] = new (TweenOfOffset()).new({begin: const$6 || (const$6 = dart.const(new ui$.Offset.new(0.0, 1.0))), end: const$7 || (const$7 = dart.const(new ui$.Offset.new(0.0, 0.0)))});
        return this[_animation];
      }
      buildPage(context, animation, secondaryAnimation) {
        return this.builder(context);
      }
      buildTransitions(context, animation, secondaryAnimation, child) {
        return new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.bottomCenter, child: new src__widgets__basic.FractionalTranslation.new({translation: this[_offsetTween].evaluate(this[_animation]), child: child})});
      }
    }
    (_CupertinoModalPopupRoute.new = function(opts) {
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let barrierLabel = opts && 'barrierLabel' in opts ? opts.barrierLabel : null;
      let settings = opts && 'settings' in opts ? opts.settings : null;
      this[_animation] = null;
      this[_offsetTween] = null;
      this.builder = builder;
      this.barrierLabel = barrierLabel;
      _CupertinoModalPopupRoute.__proto__.new.call(this, {settings: settings});
    }).prototype = _CupertinoModalPopupRoute.prototype;
    dart.addTypeTests(_CupertinoModalPopupRoute);
    _CupertinoModalPopupRoute.prototype[_is__CupertinoModalPopupRoute_default] = true;
    dart.setMethodSignature(_CupertinoModalPopupRoute, () => ({
      __proto__: dart.getMethods(_CupertinoModalPopupRoute.__proto__),
      buildPage: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, src__animation__animation.Animation$(core.double), src__animation__animation.Animation$(core.double)])
    }));
    dart.setGetterSignature(_CupertinoModalPopupRoute, () => ({
      __proto__: dart.getGetters(_CupertinoModalPopupRoute.__proto__),
      barrierColor: ui$.Color,
      barrierDismissible: core.bool,
      transitionDuration: core.Duration
    }));
    dart.setFieldSignature(_CupertinoModalPopupRoute, () => ({
      __proto__: dart.getFields(_CupertinoModalPopupRoute.__proto__),
      builder: dart.finalFieldType(BuildContextToWidget()),
      barrierLabel: dart.finalFieldType(core.String),
      [_animation]: dart.fieldType(AnimationOfdouble()),
      [_offsetTween]: dart.fieldType(TweenOfOffset())
    }));
    return _CupertinoModalPopupRoute;
  });
  src__cupertino__route._CupertinoModalPopupRoute = src__cupertino__route._CupertinoModalPopupRoute$();
  dart.addTypeTests(src__cupertino__route._CupertinoModalPopupRoute, _is__CupertinoModalPopupRoute_default);
  src__cupertino__route.showCupertinoModalPopup = function(T, opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    return src__widgets__navigator.Navigator.of(context, {rootNavigator: true}).push(T, new (src__cupertino__route._CupertinoModalPopupRoute$(T)).new({builder: builder, barrierLabel: "Dismiss"}));
  };
  dart.defineLazy(src__cupertino__route, {
    /*src__cupertino__route._dialogTween*/get _dialogTween() {
      return new (TweenOfdouble()).new({begin: 1.2, end: 1.0}).chain(new src__animation__tween.CurveTween.new({curve: src__animation__curves.Curves.fastOutSlowIn}));
    }
  });
  src__cupertino__route._buildCupertinoDialogTransitions = function(context, animation, secondaryAnimation, child) {
    let fadeAnimation = new src__animation__animations.CurvedAnimation.new({parent: animation, curve: src__animation__curves.Curves.easeInOut});
    if (animation.status === src__animation__animation.AnimationStatus.reverse) {
      return new src__widgets__transitions.FadeTransition.new({opacity: fadeAnimation, child: child});
    }
    return new src__widgets__transitions.FadeTransition.new({opacity: fadeAnimation, child: new src__widgets__transitions.ScaleTransition.new({child: child, scale: AnimationOfdouble()._check(animation.drive(core.double, src__cupertino__route._dialogTween))})});
  };
  let const$8;
  src__cupertino__route.showCupertinoDialog = function(T, opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    if (!(builder != null)) dart.assertFailed();
    return src__widgets__routes.showGeneralDialog(T, {context: context, barrierDismissible: false, barrierColor: src__cupertino__route._kModalBarrierColor, transitionDuration: const$8 || (const$8 = dart.const(new core.Duration.new({milliseconds: 300}))), pageBuilder: dart.fn((context, animation, secondaryAnimation) => builder(context), BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget()), transitionBuilder: dart.fn(src__cupertino__route._buildCupertinoDialogTransitions, BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget())});
  };
  dart.defineLazy(src__cupertino__nav_bar, {
    /*src__cupertino__nav_bar._kNavBarPersistentHeight*/get _kNavBarPersistentHeight() {
      return 44.0;
    },
    /*src__cupertino__nav_bar._kNavBarLargeTitleHeightExtension*/get _kNavBarLargeTitleHeightExtension() {
      return 52.0;
    },
    /*src__cupertino__nav_bar._kNavBarShowLargeTitleThreshold*/get _kNavBarShowLargeTitleThreshold() {
      return 10.0;
    },
    /*src__cupertino__nav_bar._kNavBarEdgePadding*/get _kNavBarEdgePadding() {
      return 16.0;
    },
    /*src__cupertino__nav_bar._kNavBarBackButtonTapWidth*/get _kNavBarBackButtonTapWidth() {
      return 50.0;
    },
    /*src__cupertino__nav_bar._kNavBarTitleFadeDuration*/get _kNavBarTitleFadeDuration() {
      return dart.const(new core.Duration.new({milliseconds: 150}));
    },
    /*src__cupertino__nav_bar._kDefaultNavBarBackgroundColor*/get _kDefaultNavBarBackgroundColor() {
      return dart.const(new ui$.Color.new(3438868728));
    },
    /*src__cupertino__nav_bar._kDefaultNavBarBorderColor*/get _kDefaultNavBarBorderColor() {
      return dart.const(new ui$.Color.new(1275068416));
    },
    /*src__cupertino__nav_bar._kDefaultNavBarBorder*/get _kDefaultNavBarBorder() {
      return dart.const(new src__painting__box_border.Border.new({bottom: dart.const(new src__painting__borders.BorderSide.new({color: src__cupertino__nav_bar._kDefaultNavBarBorderColor, width: 0.0, style: src__painting__borders.BorderStyle.solid}))}));
    },
    /*src__cupertino__nav_bar._kMiddleTitleTextStyle*/get _kMiddleTitleTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({fontFamily: ".SF UI Text", fontSize: 17.0, fontWeight: ui$.FontWeight.w600, letterSpacing: -0.08, color: src__cupertino__colors.CupertinoColors.black}));
    },
    /*src__cupertino__nav_bar._kLargeTitleTextStyle*/get _kLargeTitleTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({fontFamily: ".SF Pro Display", fontSize: 34.0, fontWeight: ui$.FontWeight.w700, letterSpacing: 0.24, color: src__cupertino__colors.CupertinoColors.black}));
    },
    /*src__cupertino__nav_bar._defaultHeroTag*/get _defaultHeroTag() {
      return dart.const(new src__cupertino__nav_bar._HeroTag.new(null));
    }
  });
  src__cupertino__nav_bar._HeroTag = class _HeroTag extends core.Object {
    toString() {
      return "Default Hero tag for Cupertino navigation bars with navigator " + dart.str(this.navigator);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) {
        return false;
      }
      let otherTag = src__cupertino__nav_bar._HeroTag._check(other);
      return dart.equals(this.navigator, otherTag.navigator);
    }
    get hashCode() {
      return core.identityHashCode(this.navigator);
    }
  };
  (src__cupertino__nav_bar._HeroTag.new = function(navigator) {
    this.navigator = navigator;
  }).prototype = src__cupertino__nav_bar._HeroTag.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._HeroTag);
  dart.setMethodSignature(src__cupertino__nav_bar._HeroTag, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._HeroTag.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._HeroTag, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._HeroTag.__proto__),
    navigator: dart.finalFieldType(src__widgets__navigator.NavigatorState)
  }));
  dart.defineExtensionMethods(src__cupertino__nav_bar._HeroTag, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__cupertino__nav_bar._HeroTag, ['hashCode']);
  src__cupertino__nav_bar._navBarItemStyle = function(color) {
    return new src__painting__text_style.TextStyle.new({fontFamily: ".SF UI Text", fontSize: 17.0, letterSpacing: -0.24, color: color});
  };
  src__cupertino__nav_bar._wrapWithBackground = function(opts) {
    let border = opts && 'border' in opts ? opts.border : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let updateSystemUiOverlay = opts && 'updateSystemUiOverlay' in opts ? opts.updateSystemUiOverlay : true;
    let result = child;
    if (dart.test(updateSystemUiOverlay)) {
      let darkBackground = dart.notNull(backgroundColor.computeLuminance()) < 0.179;
      let overlayStyle = darkBackground ? src__services__system_chrome.SystemUiOverlayStyle.light : src__services__system_chrome.SystemUiOverlayStyle.dark;
      result = new (AnnotatedRegionOfSystemUiOverlayStyle()).new({value: overlayStyle, sized: true, child: result});
    }
    let childWithBackground = new src__widgets__container.DecoratedBox.new({decoration: new src__painting__box_decoration.BoxDecoration.new({border: border, color: backgroundColor}), child: result});
    if (backgroundColor.alpha === 255) return childWithBackground;
    return childWithBackground;
  };
  src__cupertino__nav_bar._isTransitionable = function(context) {
    let route = src__widgets__routes.ModalRoute.of(core.Object, context);
    return src__widgets__pages.PageRoute.is(route) && !dart.test(route.fullscreenDialog);
  };
  let const$9;
  src__cupertino__nav_bar.CupertinoNavigationBar = class CupertinoNavigationBar extends src__widgets__framework.StatefulWidget {
    get leading() {
      return this[leading$];
    }
    set leading(value) {
      super.leading = value;
    }
    get automaticallyImplyLeading() {
      return this[automaticallyImplyLeading$];
    }
    set automaticallyImplyLeading(value) {
      super.automaticallyImplyLeading = value;
    }
    get automaticallyImplyMiddle() {
      return this[automaticallyImplyMiddle$];
    }
    set automaticallyImplyMiddle(value) {
      super.automaticallyImplyMiddle = value;
    }
    get previousPageTitle() {
      return this[previousPageTitle$];
    }
    set previousPageTitle(value) {
      super.previousPageTitle = value;
    }
    get middle() {
      return this[middle$];
    }
    set middle(value) {
      super.middle = value;
    }
    get trailing() {
      return this[trailing$];
    }
    set trailing(value) {
      super.trailing = value;
    }
    get backgroundColor() {
      return this[backgroundColor$0];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get padding() {
      return this[padding$0];
    }
    set padding(value) {
      super.padding = value;
    }
    get border() {
      return this[border$];
    }
    set border(value) {
      super.border = value;
    }
    get actionsForegroundColor() {
      return this[actionsForegroundColor$];
    }
    set actionsForegroundColor(value) {
      super.actionsForegroundColor = value;
    }
    get transitionBetweenRoutes() {
      return this[transitionBetweenRoutes$];
    }
    set transitionBetweenRoutes(value) {
      super.transitionBetweenRoutes = value;
    }
    get heroTag() {
      return this[heroTag$];
    }
    set heroTag(value) {
      super.heroTag = value;
    }
    get fullObstruction() {
      return this.backgroundColor.alpha === 255;
    }
    get preferredSize() {
      return const$9 || (const$9 = dart.const(new ui$.Size.fromHeight(44.0)));
    }
    createState() {
      return new src__cupertino__nav_bar._CupertinoNavigationBarState.new();
    }
  };
  (src__cupertino__nav_bar.CupertinoNavigationBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let automaticallyImplyLeading = opts && 'automaticallyImplyLeading' in opts ? opts.automaticallyImplyLeading : true;
    let automaticallyImplyMiddle = opts && 'automaticallyImplyMiddle' in opts ? opts.automaticallyImplyMiddle : true;
    let previousPageTitle = opts && 'previousPageTitle' in opts ? opts.previousPageTitle : null;
    let middle = opts && 'middle' in opts ? opts.middle : null;
    let trailing = opts && 'trailing' in opts ? opts.trailing : null;
    let border = opts && 'border' in opts ? opts.border : src__cupertino__nav_bar._kDefaultNavBarBorder;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : src__cupertino__nav_bar._kDefaultNavBarBackgroundColor;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : src__cupertino__colors.CupertinoColors.activeBlue;
    let transitionBetweenRoutes = opts && 'transitionBetweenRoutes' in opts ? opts.transitionBetweenRoutes : true;
    let heroTag = opts && 'heroTag' in opts ? opts.heroTag : src__cupertino__nav_bar._defaultHeroTag;
    this[leading$] = leading;
    this[automaticallyImplyLeading$] = automaticallyImplyLeading;
    this[automaticallyImplyMiddle$] = automaticallyImplyMiddle;
    this[previousPageTitle$] = previousPageTitle;
    this[middle$] = middle;
    this[trailing$] = trailing;
    this[border$] = border;
    this[backgroundColor$0] = backgroundColor;
    this[padding$0] = padding;
    this[actionsForegroundColor$] = actionsForegroundColor;
    this[transitionBetweenRoutes$] = transitionBetweenRoutes;
    this[heroTag$] = heroTag;
    if (!(automaticallyImplyLeading != null)) dart.assertFailed();
    if (!(automaticallyImplyMiddle != null)) dart.assertFailed();
    if (!(transitionBetweenRoutes != null)) dart.assertFailed();
    if (!(heroTag != null)) dart.assertFailed("heroTag cannot be null. Use transitionBetweenRoutes = false to " + "disable Hero transition on this navigation bar.");
    if (!(!dart.test(transitionBetweenRoutes) || heroTag === src__cupertino__nav_bar._defaultHeroTag)) dart.assertFailed("Cannot specify a heroTag override if this navigation bar does not " + "transition due to transitionBetweenRoutes = false.");
    src__cupertino__nav_bar.CupertinoNavigationBar.__proto__.new.call(this, {key: key});
  }).prototype = src__cupertino__nav_bar.CupertinoNavigationBar.prototype;
  dart.addTypeTests(src__cupertino__nav_bar.CupertinoNavigationBar);
  const leading$ = Symbol("CupertinoNavigationBar.leading");
  const automaticallyImplyLeading$ = Symbol("CupertinoNavigationBar.automaticallyImplyLeading");
  const automaticallyImplyMiddle$ = Symbol("CupertinoNavigationBar.automaticallyImplyMiddle");
  const previousPageTitle$ = Symbol("CupertinoNavigationBar.previousPageTitle");
  const middle$ = Symbol("CupertinoNavigationBar.middle");
  const trailing$ = Symbol("CupertinoNavigationBar.trailing");
  const backgroundColor$0 = Symbol("CupertinoNavigationBar.backgroundColor");
  const padding$0 = Symbol("CupertinoNavigationBar.padding");
  const border$ = Symbol("CupertinoNavigationBar.border");
  const actionsForegroundColor$ = Symbol("CupertinoNavigationBar.actionsForegroundColor");
  const transitionBetweenRoutes$ = Symbol("CupertinoNavigationBar.transitionBetweenRoutes");
  const heroTag$ = Symbol("CupertinoNavigationBar.heroTag");
  src__cupertino__nav_bar.CupertinoNavigationBar[dart.implements] = () => [src__cupertino__page_scaffold.ObstructingPreferredSizeWidget];
  dart.setMethodSignature(src__cupertino__nav_bar.CupertinoNavigationBar, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar.CupertinoNavigationBar.__proto__),
    createState: dart.fnType(src__cupertino__nav_bar._CupertinoNavigationBarState, [])
  }));
  dart.setGetterSignature(src__cupertino__nav_bar.CupertinoNavigationBar, () => ({
    __proto__: dart.getGetters(src__cupertino__nav_bar.CupertinoNavigationBar.__proto__),
    fullObstruction: core.bool,
    preferredSize: ui$.Size
  }));
  dart.setFieldSignature(src__cupertino__nav_bar.CupertinoNavigationBar, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar.CupertinoNavigationBar.__proto__),
    leading: dart.finalFieldType(src__widgets__framework.Widget),
    automaticallyImplyLeading: dart.finalFieldType(core.bool),
    automaticallyImplyMiddle: dart.finalFieldType(core.bool),
    previousPageTitle: dart.finalFieldType(core.String),
    middle: dart.finalFieldType(src__widgets__framework.Widget),
    trailing: dart.finalFieldType(src__widgets__framework.Widget),
    backgroundColor: dart.finalFieldType(ui$.Color),
    padding: dart.finalFieldType(src__painting__edge_insets.EdgeInsetsDirectional),
    border: dart.finalFieldType(src__painting__box_border.Border),
    actionsForegroundColor: dart.finalFieldType(ui$.Color),
    transitionBetweenRoutes: dart.finalFieldType(core.bool),
    heroTag: dart.finalFieldType(core.Object)
  }));
  src__cupertino__nav_bar._CupertinoNavigationBarState = class _CupertinoNavigationBarState extends src__widgets__framework.State$(src__cupertino__nav_bar.CupertinoNavigationBar) {
    initState() {
      super.initState();
      this.keys = new src__cupertino__nav_bar._NavigationBarStaticComponentsKeys.new();
    }
    build(context) {
      let components = new src__cupertino__nav_bar._NavigationBarStaticComponents.new({keys: this.keys, route: src__widgets__routes.ModalRoute.of(core.Object, context), userLeading: this.widget.leading, automaticallyImplyLeading: this.widget.automaticallyImplyLeading, automaticallyImplyTitle: this.widget.automaticallyImplyMiddle, previousPageTitle: this.widget.previousPageTitle, userMiddle: this.widget.middle, userTrailing: this.widget.trailing, padding: this.widget.padding, actionsForegroundColor: this.widget.actionsForegroundColor, userLargeTitle: null, large: false});
      let navBar = src__cupertino__nav_bar._wrapWithBackground({border: this.widget.border, backgroundColor: this.widget.backgroundColor, child: new src__cupertino__nav_bar._PersistentNavigationBar.new({components: components, padding: this.widget.padding})});
      if (!dart.test(this.widget.transitionBetweenRoutes) || !dart.test(src__cupertino__nav_bar._isTransitionable(context))) {
        return navBar;
      }
      return new src__widgets__heroes.Hero.new({tag: dart.equals(this.widget.heroTag, src__cupertino__nav_bar._defaultHeroTag) ? new src__cupertino__nav_bar._HeroTag.new(src__widgets__navigator.Navigator.of(context)) : this.widget.heroTag, createRectTween: src__cupertino__nav_bar._linearTranslateWithLargestRectSizeTween, placeholderBuilder: src__cupertino__nav_bar._navBarHeroLaunchPadBuilder, flightShuttleBuilder: src__cupertino__nav_bar._navBarHeroFlightShuttleBuilder, transitionOnUserGestures: true, child: new src__cupertino__nav_bar._TransitionableNavigationBar.new({componentsKeys: this.keys, backgroundColor: this.widget.backgroundColor, actionsForegroundColor: this.widget.actionsForegroundColor, border: this.widget.border, hasUserMiddle: this.widget.middle != null, largeExpanded: false, child: navBar})});
    }
  };
  (src__cupertino__nav_bar._CupertinoNavigationBarState.new = function() {
    this.keys = null;
    src__cupertino__nav_bar._CupertinoNavigationBarState.__proto__.new.call(this);
  }).prototype = src__cupertino__nav_bar._CupertinoNavigationBarState.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._CupertinoNavigationBarState);
  dart.setMethodSignature(src__cupertino__nav_bar._CupertinoNavigationBarState, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._CupertinoNavigationBarState.__proto__),
    initState: dart.fnType(dart.void, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._CupertinoNavigationBarState, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._CupertinoNavigationBarState.__proto__),
    keys: dart.fieldType(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys)
  }));
  src__cupertino__nav_bar.CupertinoSliverNavigationBar = class CupertinoSliverNavigationBar extends src__widgets__framework.StatefulWidget {
    get largeTitle() {
      return this[largeTitle$];
    }
    set largeTitle(value) {
      super.largeTitle = value;
    }
    get leading() {
      return this[leading$0];
    }
    set leading(value) {
      super.leading = value;
    }
    get automaticallyImplyLeading() {
      return this[automaticallyImplyLeading$0];
    }
    set automaticallyImplyLeading(value) {
      super.automaticallyImplyLeading = value;
    }
    get automaticallyImplyTitle() {
      return this[automaticallyImplyTitle$];
    }
    set automaticallyImplyTitle(value) {
      super.automaticallyImplyTitle = value;
    }
    get previousPageTitle() {
      return this[previousPageTitle$0];
    }
    set previousPageTitle(value) {
      super.previousPageTitle = value;
    }
    get middle() {
      return this[middle$0];
    }
    set middle(value) {
      super.middle = value;
    }
    get trailing() {
      return this[trailing$0];
    }
    set trailing(value) {
      super.trailing = value;
    }
    get backgroundColor() {
      return this[backgroundColor$1];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get padding() {
      return this[padding$1];
    }
    set padding(value) {
      super.padding = value;
    }
    get border() {
      return this[border$0];
    }
    set border(value) {
      super.border = value;
    }
    get actionsForegroundColor() {
      return this[actionsForegroundColor$0];
    }
    set actionsForegroundColor(value) {
      super.actionsForegroundColor = value;
    }
    get transitionBetweenRoutes() {
      return this[transitionBetweenRoutes$0];
    }
    set transitionBetweenRoutes(value) {
      super.transitionBetweenRoutes = value;
    }
    get heroTag() {
      return this[heroTag$0];
    }
    set heroTag(value) {
      super.heroTag = value;
    }
    get opaque() {
      return this.backgroundColor.alpha === 255;
    }
    createState() {
      return new src__cupertino__nav_bar._CupertinoSliverNavigationBarState.new();
    }
  };
  (src__cupertino__nav_bar.CupertinoSliverNavigationBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let largeTitle = opts && 'largeTitle' in opts ? opts.largeTitle : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let automaticallyImplyLeading = opts && 'automaticallyImplyLeading' in opts ? opts.automaticallyImplyLeading : true;
    let automaticallyImplyTitle = opts && 'automaticallyImplyTitle' in opts ? opts.automaticallyImplyTitle : true;
    let previousPageTitle = opts && 'previousPageTitle' in opts ? opts.previousPageTitle : null;
    let middle = opts && 'middle' in opts ? opts.middle : null;
    let trailing = opts && 'trailing' in opts ? opts.trailing : null;
    let border = opts && 'border' in opts ? opts.border : src__cupertino__nav_bar._kDefaultNavBarBorder;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : src__cupertino__nav_bar._kDefaultNavBarBackgroundColor;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : src__cupertino__colors.CupertinoColors.activeBlue;
    let transitionBetweenRoutes = opts && 'transitionBetweenRoutes' in opts ? opts.transitionBetweenRoutes : true;
    let heroTag = opts && 'heroTag' in opts ? opts.heroTag : src__cupertino__nav_bar._defaultHeroTag;
    this[largeTitle$] = largeTitle;
    this[leading$0] = leading;
    this[automaticallyImplyLeading$0] = automaticallyImplyLeading;
    this[automaticallyImplyTitle$] = automaticallyImplyTitle;
    this[previousPageTitle$0] = previousPageTitle;
    this[middle$0] = middle;
    this[trailing$0] = trailing;
    this[border$0] = border;
    this[backgroundColor$1] = backgroundColor;
    this[padding$1] = padding;
    this[actionsForegroundColor$0] = actionsForegroundColor;
    this[transitionBetweenRoutes$0] = transitionBetweenRoutes;
    this[heroTag$0] = heroTag;
    if (!(automaticallyImplyLeading != null)) dart.assertFailed();
    if (!(automaticallyImplyTitle != null)) dart.assertFailed();
    if (!(automaticallyImplyTitle === true || largeTitle != null)) dart.assertFailed("No largeTitle has been provided but automaticallyImplyTitle is also " + "false. Either provide a largeTitle or set automaticallyImplyTitle to " + "true.");
    src__cupertino__nav_bar.CupertinoSliverNavigationBar.__proto__.new.call(this, {key: key});
  }).prototype = src__cupertino__nav_bar.CupertinoSliverNavigationBar.prototype;
  dart.addTypeTests(src__cupertino__nav_bar.CupertinoSliverNavigationBar);
  const largeTitle$ = Symbol("CupertinoSliverNavigationBar.largeTitle");
  const leading$0 = Symbol("CupertinoSliverNavigationBar.leading");
  const automaticallyImplyLeading$0 = Symbol("CupertinoSliverNavigationBar.automaticallyImplyLeading");
  const automaticallyImplyTitle$ = Symbol("CupertinoSliverNavigationBar.automaticallyImplyTitle");
  const previousPageTitle$0 = Symbol("CupertinoSliverNavigationBar.previousPageTitle");
  const middle$0 = Symbol("CupertinoSliverNavigationBar.middle");
  const trailing$0 = Symbol("CupertinoSliverNavigationBar.trailing");
  const backgroundColor$1 = Symbol("CupertinoSliverNavigationBar.backgroundColor");
  const padding$1 = Symbol("CupertinoSliverNavigationBar.padding");
  const border$0 = Symbol("CupertinoSliverNavigationBar.border");
  const actionsForegroundColor$0 = Symbol("CupertinoSliverNavigationBar.actionsForegroundColor");
  const transitionBetweenRoutes$0 = Symbol("CupertinoSliverNavigationBar.transitionBetweenRoutes");
  const heroTag$0 = Symbol("CupertinoSliverNavigationBar.heroTag");
  dart.setMethodSignature(src__cupertino__nav_bar.CupertinoSliverNavigationBar, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar.CupertinoSliverNavigationBar.__proto__),
    createState: dart.fnType(src__cupertino__nav_bar._CupertinoSliverNavigationBarState, [])
  }));
  dart.setGetterSignature(src__cupertino__nav_bar.CupertinoSliverNavigationBar, () => ({
    __proto__: dart.getGetters(src__cupertino__nav_bar.CupertinoSliverNavigationBar.__proto__),
    opaque: core.bool
  }));
  dart.setFieldSignature(src__cupertino__nav_bar.CupertinoSliverNavigationBar, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar.CupertinoSliverNavigationBar.__proto__),
    largeTitle: dart.finalFieldType(src__widgets__framework.Widget),
    leading: dart.finalFieldType(src__widgets__framework.Widget),
    automaticallyImplyLeading: dart.finalFieldType(core.bool),
    automaticallyImplyTitle: dart.finalFieldType(core.bool),
    previousPageTitle: dart.finalFieldType(core.String),
    middle: dart.finalFieldType(src__widgets__framework.Widget),
    trailing: dart.finalFieldType(src__widgets__framework.Widget),
    backgroundColor: dart.finalFieldType(ui$.Color),
    padding: dart.finalFieldType(src__painting__edge_insets.EdgeInsetsDirectional),
    border: dart.finalFieldType(src__painting__box_border.Border),
    actionsForegroundColor: dart.finalFieldType(ui$.Color),
    transitionBetweenRoutes: dart.finalFieldType(core.bool),
    heroTag: dart.finalFieldType(core.Object)
  }));
  src__cupertino__nav_bar._CupertinoSliverNavigationBarState = class _CupertinoSliverNavigationBarState extends src__widgets__framework.State$(src__cupertino__nav_bar.CupertinoSliverNavigationBar) {
    initState() {
      super.initState();
      this.keys = new src__cupertino__nav_bar._NavigationBarStaticComponentsKeys.new();
    }
    build(context) {
      let components = new src__cupertino__nav_bar._NavigationBarStaticComponents.new({keys: this.keys, route: src__widgets__routes.ModalRoute.of(core.Object, context), userLeading: this.widget.leading, automaticallyImplyLeading: this.widget.automaticallyImplyLeading, automaticallyImplyTitle: this.widget.automaticallyImplyTitle, previousPageTitle: this.widget.previousPageTitle, userMiddle: this.widget.middle, userTrailing: this.widget.trailing, userLargeTitle: this.widget.largeTitle, padding: this.widget.padding, actionsForegroundColor: this.widget.actionsForegroundColor, large: true});
      return new src__widgets__sliver_persistent_header.SliverPersistentHeader.new({pinned: true, delegate: new src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate.new({keys: this.keys, components: components, userMiddle: this.widget.middle, backgroundColor: this.widget.backgroundColor, border: this.widget.border, padding: this.widget.padding, actionsForegroundColor: this.widget.actionsForegroundColor, transitionBetweenRoutes: this.widget.transitionBetweenRoutes, heroTag: this.widget.heroTag, persistentHeight: 44.0 + dart.notNull(src__widgets__media_query.MediaQuery.of(context).padding.top), alwaysShowMiddle: this.widget.middle != null})});
    }
  };
  (src__cupertino__nav_bar._CupertinoSliverNavigationBarState.new = function() {
    this.keys = null;
    src__cupertino__nav_bar._CupertinoSliverNavigationBarState.__proto__.new.call(this);
  }).prototype = src__cupertino__nav_bar._CupertinoSliverNavigationBarState.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._CupertinoSliverNavigationBarState);
  dart.setMethodSignature(src__cupertino__nav_bar._CupertinoSliverNavigationBarState, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._CupertinoSliverNavigationBarState.__proto__),
    initState: dart.fnType(dart.void, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._CupertinoSliverNavigationBarState, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._CupertinoSliverNavigationBarState.__proto__),
    keys: dart.fieldType(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys)
  }));
  let const$10;
  const SliverPersistentHeaderDelegate_DiagnosticableTreeMixin$ = class SliverPersistentHeaderDelegate_DiagnosticableTreeMixin extends src__widgets__sliver_persistent_header.SliverPersistentHeaderDelegate {};
  (SliverPersistentHeaderDelegate_DiagnosticableTreeMixin$.new = function() {
    SliverPersistentHeaderDelegate_DiagnosticableTreeMixin$.__proto__.new.call(this);
  }).prototype = SliverPersistentHeaderDelegate_DiagnosticableTreeMixin$.prototype;
  dart.applyMixin(SliverPersistentHeaderDelegate_DiagnosticableTreeMixin$, src__foundation__diagnostics.DiagnosticableTreeMixin);
  src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate = class _LargeTitleNavigationBarSliverDelegate extends SliverPersistentHeaderDelegate_DiagnosticableTreeMixin$ {
    get minExtent() {
      return this.persistentHeight;
    }
    get maxExtent() {
      return dart.notNull(this.persistentHeight) + 52.0;
    }
    build(context, shrinkOffset, overlapsContent) {
      let showLargeTitle = dart.notNull(shrinkOffset) < dart.notNull(this.maxExtent) - dart.notNull(this.minExtent) - 10.0;
      let persistentNavigationBar = new src__cupertino__nav_bar._PersistentNavigationBar.new({components: this.components, padding: this.padding, middleVisible: dart.test(this.alwaysShowMiddle) ? null : !showLargeTitle});
      let navBar = src__cupertino__nav_bar._wrapWithBackground({border: this.border, backgroundColor: this.backgroundColor, child: new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.expand, children: JSArrayOfWidget().of([new src__widgets__basic.Positioned.new({top: this.persistentHeight, left: 0.0, right: 0.0, bottom: 0.0, child: new src__widgets__basic.ClipRect.new({child: new src__widgets__basic.OverflowBox.new({minHeight: 0.0, maxHeight: core.double.infinity, alignment: src__painting__alignment.AlignmentDirectional.bottomStart, child: new src__widgets__basic.Padding.new({padding: const$10 || (const$10 = dart.const(new src__painting__edge_insets.EdgeInsetsDirectional.only({start: 16.0, bottom: 8.0}))), child: new src__widgets__safe_area.SafeArea.new({top: false, bottom: false, child: new src__widgets__implicit_animations.AnimatedOpacity.new({opacity: showLargeTitle ? 1.0 : 0.0, duration: src__cupertino__nav_bar._kNavBarTitleFadeDuration, child: new src__widgets__basic.Semantics.new({header: true, child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kLargeTitleTextStyle, maxLines: 1, overflow: src__rendering__paragraph.TextOverflow.ellipsis, child: this.components.largeTitle})})})})})})})}), new src__widgets__basic.Positioned.new({left: 0.0, right: 0.0, top: 0.0, child: persistentNavigationBar})])})});
      if (!dart.test(this.transitionBetweenRoutes) || !dart.test(src__cupertino__nav_bar._isTransitionable(context))) {
        return navBar;
      }
      return new src__widgets__heroes.Hero.new({tag: dart.equals(this.heroTag, src__cupertino__nav_bar._defaultHeroTag) ? new src__cupertino__nav_bar._HeroTag.new(src__widgets__navigator.Navigator.of(context)) : this.heroTag, createRectTween: src__cupertino__nav_bar._linearTranslateWithLargestRectSizeTween, flightShuttleBuilder: src__cupertino__nav_bar._navBarHeroFlightShuttleBuilder, placeholderBuilder: src__cupertino__nav_bar._navBarHeroLaunchPadBuilder, transitionOnUserGestures: true, child: new src__cupertino__nav_bar._TransitionableNavigationBar.new({componentsKeys: this.keys, backgroundColor: this.backgroundColor, actionsForegroundColor: this.actionsForegroundColor, border: this.border, hasUserMiddle: this.userMiddle != null, largeExpanded: showLargeTitle, child: navBar})});
    }
    shouldRebuild(oldDelegate) {
      src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate._check(oldDelegate);
      return !dart.equals(this.components, oldDelegate.components) || !dart.equals(this.userMiddle, oldDelegate.userMiddle) || !dart.equals(this.backgroundColor, oldDelegate.backgroundColor) || !dart.equals(this.border, oldDelegate.border) || !dart.equals(this.padding, oldDelegate.padding) || !dart.equals(this.actionsForegroundColor, oldDelegate.actionsForegroundColor) || this.transitionBetweenRoutes != oldDelegate.transitionBetweenRoutes || this.persistentHeight != oldDelegate.persistentHeight || this.alwaysShowMiddle != oldDelegate.alwaysShowMiddle || !dart.equals(this.heroTag, oldDelegate.heroTag);
    }
  };
  (src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate.new = function(opts) {
    let keys = opts && 'keys' in opts ? opts.keys : null;
    let components = opts && 'components' in opts ? opts.components : null;
    let userMiddle = opts && 'userMiddle' in opts ? opts.userMiddle : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let border = opts && 'border' in opts ? opts.border : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : null;
    let transitionBetweenRoutes = opts && 'transitionBetweenRoutes' in opts ? opts.transitionBetweenRoutes : null;
    let heroTag = opts && 'heroTag' in opts ? opts.heroTag : null;
    let persistentHeight = opts && 'persistentHeight' in opts ? opts.persistentHeight : null;
    let alwaysShowMiddle = opts && 'alwaysShowMiddle' in opts ? opts.alwaysShowMiddle : null;
    this.keys = keys;
    this.components = components;
    this.userMiddle = userMiddle;
    this.backgroundColor = backgroundColor;
    this.border = border;
    this.padding = padding;
    this.actionsForegroundColor = actionsForegroundColor;
    this.transitionBetweenRoutes = transitionBetweenRoutes;
    this.heroTag = heroTag;
    this.persistentHeight = persistentHeight;
    this.alwaysShowMiddle = alwaysShowMiddle;
    if (!(persistentHeight != null)) dart.assertFailed();
    if (!(alwaysShowMiddle != null)) dart.assertFailed();
    if (!(transitionBetweenRoutes != null)) dart.assertFailed();
    src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate.__proto__.new.call(this);
  }).prototype = src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate);
  dart.setMethodSignature(src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, core.double, core.bool]),
    shouldRebuild: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate, () => ({
    __proto__: dart.getGetters(src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate.__proto__),
    minExtent: core.double,
    maxExtent: core.double
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate.__proto__),
    keys: dart.finalFieldType(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys),
    components: dart.finalFieldType(src__cupertino__nav_bar._NavigationBarStaticComponents),
    userMiddle: dart.finalFieldType(src__widgets__framework.Widget),
    backgroundColor: dart.finalFieldType(ui$.Color),
    border: dart.finalFieldType(src__painting__box_border.Border),
    padding: dart.finalFieldType(src__painting__edge_insets.EdgeInsetsDirectional),
    actionsForegroundColor: dart.finalFieldType(ui$.Color),
    transitionBetweenRoutes: dart.finalFieldType(core.bool),
    heroTag: dart.finalFieldType(core.Object),
    persistentHeight: dart.finalFieldType(core.double),
    alwaysShowMiddle: dart.finalFieldType(core.bool)
  }));
  src__cupertino__nav_bar._PersistentNavigationBar = class _PersistentNavigationBar extends src__widgets__framework.StatelessWidget {
    build(context) {
      let middle = this.components.middle;
      if (middle != null) {
        middle = new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kMiddleTitleTextStyle, child: new src__widgets__basic.Semantics.new({header: true, child: middle})});
        middle = this.middleVisible == null ? middle : new src__widgets__implicit_animations.AnimatedOpacity.new({opacity: dart.test(this.middleVisible) ? 1.0 : 0.0, duration: src__cupertino__nav_bar._kNavBarTitleFadeDuration, child: middle});
      }
      let leading = this.components.leading;
      let backChevron = this.components.backChevron;
      let backLabel = this.components.backLabel;
      if (leading == null && backChevron != null && backLabel != null) {
        leading = new src__cupertino__nav_bar.CupertinoNavigationBarBackButton._assemble(backChevron, backLabel, this.components.actionsForegroundColor);
      }
      let paddedToolbar = new src__widgets__navigation_toolbar.NavigationToolbar.new({leading: leading, middle: middle, trailing: this.components.trailing, centerMiddle: true, middleSpacing: 6.0});
      if (this.padding != null) {
        paddedToolbar = new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({top: this.padding.top, bottom: this.padding.bottom}), child: paddedToolbar});
      }
      return new src__widgets__basic.SizedBox.new({height: 44.0 + dart.notNull(src__widgets__media_query.MediaQuery.of(context).padding.top), child: new src__widgets__safe_area.SafeArea.new({bottom: false, child: paddedToolbar})});
    }
  };
  (src__cupertino__nav_bar._PersistentNavigationBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let components = opts && 'components' in opts ? opts.components : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let middleVisible = opts && 'middleVisible' in opts ? opts.middleVisible : null;
    this.components = components;
    this.padding = padding;
    this.middleVisible = middleVisible;
    src__cupertino__nav_bar._PersistentNavigationBar.__proto__.new.call(this, {key: key});
  }).prototype = src__cupertino__nav_bar._PersistentNavigationBar.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._PersistentNavigationBar);
  dart.setMethodSignature(src__cupertino__nav_bar._PersistentNavigationBar, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._PersistentNavigationBar.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._PersistentNavigationBar, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._PersistentNavigationBar.__proto__),
    components: dart.finalFieldType(src__cupertino__nav_bar._NavigationBarStaticComponents),
    padding: dart.finalFieldType(src__painting__edge_insets.EdgeInsetsDirectional),
    middleVisible: dart.finalFieldType(core.bool)
  }));
  src__cupertino__nav_bar._NavigationBarStaticComponentsKeys = class _NavigationBarStaticComponentsKeys extends core.Object {};
  (src__cupertino__nav_bar._NavigationBarStaticComponentsKeys.new = function() {
    this.navBarBoxKey = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Navigation bar render box"});
    this.leadingKey = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Leading"});
    this.backChevronKey = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Back chevron"});
    this.backLabelKey = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Back label"});
    this.middleKey = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Middle"});
    this.trailingKey = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Trailing"});
    this.largeTitleKey = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Large title"});
  }).prototype = src__cupertino__nav_bar._NavigationBarStaticComponentsKeys.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys);
  dart.setFieldSignature(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys.__proto__),
    navBarBoxKey: dart.finalFieldType(GlobalKeyOfStateOfStatefulWidget()),
    leadingKey: dart.finalFieldType(GlobalKeyOfStateOfStatefulWidget()),
    backChevronKey: dart.finalFieldType(GlobalKeyOfStateOfStatefulWidget()),
    backLabelKey: dart.finalFieldType(GlobalKeyOfStateOfStatefulWidget()),
    middleKey: dart.finalFieldType(GlobalKeyOfStateOfStatefulWidget()),
    trailingKey: dart.finalFieldType(GlobalKeyOfStateOfStatefulWidget()),
    largeTitleKey: dart.finalFieldType(GlobalKeyOfStateOfStatefulWidget())
  }));
  let const$11;
  let const$12;
  src__cupertino__nav_bar._NavigationBarStaticComponents = class _NavigationBarStaticComponents extends core.Object {
    static _derivedTitle(opts) {
      let automaticallyImplyTitle = opts && 'automaticallyImplyTitle' in opts ? opts.automaticallyImplyTitle : null;
      let currentRoute = opts && 'currentRoute' in opts ? opts.currentRoute : null;
      if (dart.test(automaticallyImplyTitle) && src__cupertino__route.CupertinoPageRoute.is(currentRoute) && currentRoute.title != null) {
        return new src__widgets__text.Text.new(currentRoute.title);
      }
      return null;
    }
    static createLeading(opts) {
      let leadingKey = opts && 'leadingKey' in opts ? opts.leadingKey : null;
      let userLeading = opts && 'userLeading' in opts ? opts.userLeading : null;
      let route = opts && 'route' in opts ? opts.route : null;
      let automaticallyImplyLeading = opts && 'automaticallyImplyLeading' in opts ? opts.automaticallyImplyLeading : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : null;
      let leadingContent = null;
      if (userLeading != null) {
        leadingContent = userLeading;
      } else if (dart.test(automaticallyImplyLeading) && src__widgets__pages.PageRoute.is(route) && dart.test(route.canPop) && dart.test(route.fullscreenDialog)) {
        leadingContent = new src__cupertino__button.CupertinoButton.new({child: const$11 || (const$11 = dart.const(new src__widgets__text.Text.new("Close"))), padding: src__painting__edge_insets.EdgeInsets.zero, onPressed: dart.fn(() => {
            route.navigator.maybePop(core.Object);
          }, VoidToNull())});
      }
      if (leadingContent == null) {
        return null;
      }
      return new src__widgets__basic.KeyedSubtree.new({key: leadingKey, child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsetsDirectional.only({start: (() => {
              let l = padding == null ? null : padding.start;
              return l != null ? l : 16.0;
            })()}), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._navBarItemStyle(actionsForegroundColor), child: src__widgets__icon_theme.IconTheme.merge({data: new src__widgets__icon_theme_data.IconThemeData.new({color: actionsForegroundColor, size: 32.0}), child: leadingContent})})})});
    }
    static createBackChevron(opts) {
      let backChevronKey = opts && 'backChevronKey' in opts ? opts.backChevronKey : null;
      let userLeading = opts && 'userLeading' in opts ? opts.userLeading : null;
      let route = opts && 'route' in opts ? opts.route : null;
      let automaticallyImplyLeading = opts && 'automaticallyImplyLeading' in opts ? opts.automaticallyImplyLeading : null;
      if (userLeading != null || !dart.test(automaticallyImplyLeading) || route == null || !dart.test(route.canPop) || src__widgets__pages.PageRoute.is(route) && dart.test(route.fullscreenDialog)) {
        return null;
      }
      return new src__widgets__basic.KeyedSubtree.new({key: backChevronKey, child: const$12 || (const$12 = dart.const(new src__cupertino__nav_bar._BackChevron.new()))});
    }
    static createBackLabel(opts) {
      let backLabelKey = opts && 'backLabelKey' in opts ? opts.backLabelKey : null;
      let userLeading = opts && 'userLeading' in opts ? opts.userLeading : null;
      let route = opts && 'route' in opts ? opts.route : null;
      let automaticallyImplyLeading = opts && 'automaticallyImplyLeading' in opts ? opts.automaticallyImplyLeading : null;
      let previousPageTitle = opts && 'previousPageTitle' in opts ? opts.previousPageTitle : null;
      if (userLeading != null || !dart.test(automaticallyImplyLeading) || route == null || !dart.test(route.canPop) || src__widgets__pages.PageRoute.is(route) && dart.test(route.fullscreenDialog)) {
        return null;
      }
      return new src__widgets__basic.KeyedSubtree.new({key: backLabelKey, child: new src__cupertino__nav_bar._BackLabel.new({specifiedPreviousTitle: previousPageTitle, route: route})});
    }
    static createMiddle(opts) {
      let middleKey = opts && 'middleKey' in opts ? opts.middleKey : null;
      let userMiddle = opts && 'userMiddle' in opts ? opts.userMiddle : null;
      let userLargeTitle = opts && 'userLargeTitle' in opts ? opts.userLargeTitle : null;
      let large = opts && 'large' in opts ? opts.large : null;
      let automaticallyImplyTitle = opts && 'automaticallyImplyTitle' in opts ? opts.automaticallyImplyTitle : null;
      let route = opts && 'route' in opts ? opts.route : null;
      let middleContent = userMiddle;
      if (dart.test(large)) {
        let t = middleContent;
        t == null ? middleContent = userLargeTitle : t;
      }
      let t$ = middleContent;
      t$ == null ? middleContent = src__cupertino__nav_bar._NavigationBarStaticComponents._derivedTitle({automaticallyImplyTitle: automaticallyImplyTitle, currentRoute: route}) : t$;
      if (middleContent == null) {
        return null;
      }
      return new src__widgets__basic.KeyedSubtree.new({key: middleKey, child: middleContent});
    }
    static createTrailing(opts) {
      let trailingKey = opts && 'trailingKey' in opts ? opts.trailingKey : null;
      let userTrailing = opts && 'userTrailing' in opts ? opts.userTrailing : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : null;
      if (userTrailing == null) {
        return null;
      }
      return new src__widgets__basic.KeyedSubtree.new({key: trailingKey, child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsetsDirectional.only({end: (() => {
              let l = padding == null ? null : padding.end;
              return l != null ? l : 16.0;
            })()}), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._navBarItemStyle(actionsForegroundColor), child: src__widgets__icon_theme.IconTheme.merge({data: new src__widgets__icon_theme_data.IconThemeData.new({color: actionsForegroundColor, size: 32.0}), child: userTrailing})})})});
    }
    static createLargeTitle(opts) {
      let largeTitleKey = opts && 'largeTitleKey' in opts ? opts.largeTitleKey : null;
      let userLargeTitle = opts && 'userLargeTitle' in opts ? opts.userLargeTitle : null;
      let large = opts && 'large' in opts ? opts.large : null;
      let automaticImplyTitle = opts && 'automaticImplyTitle' in opts ? opts.automaticImplyTitle : null;
      let route = opts && 'route' in opts ? opts.route : null;
      if (!dart.test(large)) {
        return null;
      }
      let largeTitleContent = userLargeTitle != null ? userLargeTitle : src__cupertino__nav_bar._NavigationBarStaticComponents._derivedTitle({automaticallyImplyTitle: automaticImplyTitle, currentRoute: route});
      if (!(largeTitleContent != null)) dart.assertFailed("largeTitle was not provided and there was no title from the route.");
      return new src__widgets__basic.KeyedSubtree.new({key: largeTitleKey, child: largeTitleContent});
    }
  };
  (src__cupertino__nav_bar._NavigationBarStaticComponents.new = function(opts) {
    let keys = opts && 'keys' in opts ? opts.keys : null;
    let route = opts && 'route' in opts ? opts.route : null;
    let userLeading = opts && 'userLeading' in opts ? opts.userLeading : null;
    let automaticallyImplyLeading = opts && 'automaticallyImplyLeading' in opts ? opts.automaticallyImplyLeading : null;
    let automaticallyImplyTitle = opts && 'automaticallyImplyTitle' in opts ? opts.automaticallyImplyTitle : null;
    let previousPageTitle = opts && 'previousPageTitle' in opts ? opts.previousPageTitle : null;
    let userMiddle = opts && 'userMiddle' in opts ? opts.userMiddle : null;
    let userTrailing = opts && 'userTrailing' in opts ? opts.userTrailing : null;
    let userLargeTitle = opts && 'userLargeTitle' in opts ? opts.userLargeTitle : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : null;
    let large = opts && 'large' in opts ? opts.large : null;
    this.actionsForegroundColor = actionsForegroundColor;
    this.leading = src__cupertino__nav_bar._NavigationBarStaticComponents.createLeading({leadingKey: keys.leadingKey, userLeading: userLeading, route: route, automaticallyImplyLeading: automaticallyImplyLeading, padding: padding, actionsForegroundColor: actionsForegroundColor});
    this.backChevron = src__cupertino__nav_bar._NavigationBarStaticComponents.createBackChevron({backChevronKey: keys.backChevronKey, userLeading: userLeading, route: route, automaticallyImplyLeading: automaticallyImplyLeading});
    this.backLabel = src__cupertino__nav_bar._NavigationBarStaticComponents.createBackLabel({backLabelKey: keys.backLabelKey, userLeading: userLeading, route: route, previousPageTitle: previousPageTitle, automaticallyImplyLeading: automaticallyImplyLeading});
    this.middle = src__cupertino__nav_bar._NavigationBarStaticComponents.createMiddle({middleKey: keys.middleKey, userMiddle: userMiddle, userLargeTitle: userLargeTitle, route: route, automaticallyImplyTitle: automaticallyImplyTitle, large: large});
    this.trailing = src__cupertino__nav_bar._NavigationBarStaticComponents.createTrailing({trailingKey: keys.trailingKey, userTrailing: userTrailing, padding: padding, actionsForegroundColor: actionsForegroundColor});
    this.largeTitle = src__cupertino__nav_bar._NavigationBarStaticComponents.createLargeTitle({largeTitleKey: keys.largeTitleKey, userLargeTitle: userLargeTitle, route: route, automaticImplyTitle: automaticallyImplyTitle, large: large});
  }).prototype = src__cupertino__nav_bar._NavigationBarStaticComponents.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._NavigationBarStaticComponents);
  dart.setFieldSignature(src__cupertino__nav_bar._NavigationBarStaticComponents, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._NavigationBarStaticComponents.__proto__),
    actionsForegroundColor: dart.finalFieldType(ui$.Color),
    leading: dart.finalFieldType(src__widgets__basic.KeyedSubtree),
    backChevron: dart.finalFieldType(src__widgets__basic.KeyedSubtree),
    backLabel: dart.finalFieldType(src__widgets__basic.KeyedSubtree),
    middle: dart.finalFieldType(src__widgets__basic.KeyedSubtree),
    trailing: dart.finalFieldType(src__widgets__basic.KeyedSubtree),
    largeTitle: dart.finalFieldType(src__widgets__basic.KeyedSubtree)
  }));
  const _backChevron = dart.privateName(src__cupertino__nav_bar, "_backChevron");
  const _backLabel = dart.privateName(src__cupertino__nav_bar, "_backLabel");
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  src__cupertino__nav_bar.CupertinoNavigationBarBackButton = class CupertinoNavigationBarBackButton extends src__widgets__framework.StatelessWidget {
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get previousPageTitle() {
      return this[previousPageTitle$1];
    }
    set previousPageTitle(value) {
      super.previousPageTitle = value;
    }
    build(context) {
      let currentRoute = src__widgets__routes.ModalRoute.of(core.Object, context);
      if (!dart.test(currentRoute.canPop)) dart.assertFailed("CupertinoNavigationBarBackButton should only be used in routes that can be popped");
      return new src__cupertino__button.CupertinoButton.new({child: new src__widgets__basic.Semantics.new({container: true, excludeSemantics: true, label: "Back", button: true, child: new src__widgets__basic.ConstrainedBox.new({constraints: const$13 || (const$13 = dart.const(new src__rendering__box.BoxConstraints.new({minWidth: 50.0}))), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._navBarItemStyle(this.color), child: new src__widgets__basic.Row.new({mainAxisSize: src__rendering__flex.MainAxisSize.min, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([const$15 || (const$15 = dart.const(new src__widgets__basic.Padding.new({padding: const$14 || (const$14 = dart.const(new src__painting__edge_insets.EdgeInsetsDirectional.only({start: 8.0})))}))), this[_backChevron] != null ? this[_backChevron] : const$16 || (const$16 = dart.const(new src__cupertino__nav_bar._BackChevron.new())), const$18 || (const$18 = dart.const(new src__widgets__basic.Padding.new({padding: const$17 || (const$17 = dart.const(new src__painting__edge_insets.EdgeInsetsDirectional.only({start: 6.0})))}))), new src__widgets__basic.Flexible.new({child: this[_backLabel] != null ? this[_backLabel] : new src__cupertino__nav_bar._BackLabel.new({specifiedPreviousTitle: this.previousPageTitle, route: currentRoute})})])})})})}), padding: src__painting__edge_insets.EdgeInsets.zero, onPressed: dart.fn(() => {
          src__widgets__navigator.Navigator.maybePop(core.Object, context);
        }, VoidToNull())});
    }
  };
  (src__cupertino__nav_bar.CupertinoNavigationBarBackButton.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let previousPageTitle = opts && 'previousPageTitle' in opts ? opts.previousPageTitle : null;
    this[color$0] = color;
    this[previousPageTitle$1] = previousPageTitle;
    this[_backChevron] = null;
    this[_backLabel] = null;
    if (!(color != null)) dart.assertFailed();
    src__cupertino__nav_bar.CupertinoNavigationBarBackButton.__proto__.new.call(this);
  }).prototype = src__cupertino__nav_bar.CupertinoNavigationBarBackButton.prototype;
  (src__cupertino__nav_bar.CupertinoNavigationBarBackButton._assemble = function(backChevron, backLabel, color) {
    this[_backChevron] = backChevron;
    this[_backLabel] = backLabel;
    this[color$0] = color;
    this[previousPageTitle$1] = null;
    if (!(color != null)) dart.assertFailed();
    src__cupertino__nav_bar.CupertinoNavigationBarBackButton.__proto__.new.call(this);
  }).prototype = src__cupertino__nav_bar.CupertinoNavigationBarBackButton.prototype;
  dart.addTypeTests(src__cupertino__nav_bar.CupertinoNavigationBarBackButton);
  const color$0 = Symbol("CupertinoNavigationBarBackButton.color");
  const previousPageTitle$1 = Symbol("CupertinoNavigationBarBackButton.previousPageTitle");
  dart.setMethodSignature(src__cupertino__nav_bar.CupertinoNavigationBarBackButton, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar.CupertinoNavigationBarBackButton.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__nav_bar.CupertinoNavigationBarBackButton, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar.CupertinoNavigationBarBackButton.__proto__),
    color: dart.finalFieldType(ui$.Color),
    previousPageTitle: dart.finalFieldType(core.String),
    [_backChevron]: dart.finalFieldType(src__widgets__framework.Widget),
    [_backLabel]: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  src__cupertino__nav_bar._BackChevron = class _BackChevron extends src__widgets__framework.StatelessWidget {
    build(context) {
      let textDirection = src__widgets__basic.Directionality.of(context);
      let textStyle = src__widgets__text.DefaultTextStyle.of(context).style;
      let iconWidget = new src__widgets__text.Text.rich(new src__painting__text_span.TextSpan.new({text: core.String.fromCharCode(src__cupertino__icons.CupertinoIcons.back.codePoint), style: new src__painting__text_style.TextStyle.new({inherit: false, color: textStyle.color, fontSize: 34.0, fontFamily: src__cupertino__icons.CupertinoIcons.back.fontFamily, package: src__cupertino__icons.CupertinoIcons.back.fontPackage})}));
      switch (textDirection) {
        case ui$.TextDirection.rtl:
        {
          iconWidget = new src__widgets__basic.Transform.new({transform: (() => {
              let _ = vector_math_64$.Matrix4.identity();
              _.scale(-1.0, 1.0, 1.0);
              return _;
            })(), alignment: src__painting__alignment.Alignment.center, transformHitTests: false, child: iconWidget});
          break;
        }
        case ui$.TextDirection.ltr:
        {
          break;
        }
      }
      return iconWidget;
    }
  };
  (src__cupertino__nav_bar._BackChevron.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    src__cupertino__nav_bar._BackChevron.__proto__.new.call(this, {key: key});
  }).prototype = src__cupertino__nav_bar._BackChevron.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._BackChevron);
  dart.setMethodSignature(src__cupertino__nav_bar._BackChevron, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._BackChevron.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  let const$19;
  let const$20;
  const _buildPreviousTitleWidget = dart.privateName(src__cupertino__nav_bar, "_buildPreviousTitleWidget");
  let const$21;
  src__cupertino__nav_bar._BackLabel = class _BackLabel extends src__widgets__framework.StatelessWidget {
    [_buildPreviousTitleWidget](context, previousTitle, child) {
      if (previousTitle == null) {
        return const$19 || (const$19 = dart.const(new src__widgets__basic.SizedBox.new({height: 0.0, width: 0.0})));
      }
      let textWidget = new src__widgets__text.Text.new(previousTitle, {maxLines: 1, overflow: src__rendering__paragraph.TextOverflow.ellipsis});
      if (previousTitle.length > 12) {
        textWidget = const$20 || (const$20 = dart.const(new src__widgets__text.Text.new("Back")));
      }
      return new src__widgets__basic.Align.new({alignment: src__painting__alignment.AlignmentDirectional.centerStart, widthFactor: 1.0, child: textWidget});
    }
    build(context) {
      if (this.specifiedPreviousTitle != null) {
        return this[_buildPreviousTitleWidget](context, this.specifiedPreviousTitle, null);
      } else if (src__cupertino__route.CupertinoPageRoute.is(this.route)) {
        let cupertinoRoute = src__cupertino__route.CupertinoPageRoute._check(this.route);
        return new (ValueListenableBuilderOfString()).new({valueListenable: cupertinoRoute.previousTitle, builder: dart.bind(this, _buildPreviousTitleWidget)});
      } else {
        return const$21 || (const$21 = dart.const(new src__widgets__basic.SizedBox.new({height: 0.0, width: 0.0})));
      }
    }
  };
  (src__cupertino__nav_bar._BackLabel.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let specifiedPreviousTitle = opts && 'specifiedPreviousTitle' in opts ? opts.specifiedPreviousTitle : null;
    let route = opts && 'route' in opts ? opts.route : null;
    this.specifiedPreviousTitle = specifiedPreviousTitle;
    this.route = route;
    if (!(route != null)) dart.assertFailed();
    src__cupertino__nav_bar._BackLabel.__proto__.new.call(this, {key: key});
  }).prototype = src__cupertino__nav_bar._BackLabel.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._BackLabel);
  dart.setMethodSignature(src__cupertino__nav_bar._BackLabel, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._BackLabel.__proto__),
    [_buildPreviousTitleWidget]: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, core.String, src__widgets__framework.Widget]),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._BackLabel, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._BackLabel.__proto__),
    specifiedPreviousTitle: dart.finalFieldType(core.String),
    route: dart.finalFieldType(src__widgets__routes.ModalRoute)
  }));
  src__cupertino__nav_bar._TransitionableNavigationBar = class _TransitionableNavigationBar extends src__widgets__framework.StatelessWidget {
    get renderBox() {
      let box = src__rendering__box.RenderBox._check(this.componentsKeys.navBarBoxKey.currentContext.findRenderObject());
      if (!dart.test(box.attached)) dart.assertFailed("_TransitionableNavigationBar.renderBox should be called when building " + "hero flight shuttles when the from and the to nav bar boxes are already " + "laid out and painted.");
      return box;
    }
    build(context) {
      if (!dart.test(dart.fn(() => {
        let inHero = null;
        context.visitAncestorElements(dart.fn(ancestor => {
          if (src__widgets__framework.ComponentElement.is(ancestor)) {
            if (!!dart.equals(dart.runtimeType(ancestor.widget), dart.wrapType(src__cupertino__nav_bar._NavigationBarTransition))) dart.assertFailed("_TransitionableNavigationBar should never re-appear inside " + "_NavigationBarTransition. Keyed _TransitionableNavigationBar should " + "only serve as anchor points in routes rather than appearing inside " + "Hero flights themselves.");
            if (dart.equals(dart.runtimeType(ancestor.widget), dart.wrapType(src__widgets__heroes.Hero))) {
              inHero = true;
            }
          }
          let t = inHero;
          t == null ? inHero = false : t;
          return true;
        }, ElementTobool()));
        if (!(inHero === true)) dart.assertFailed("_TransitionableNavigationBar should only be added as the immediate " + "child of Hero widgets.");
        return true;
      }, VoidTobool())())) dart.assertFailed();
      return this.child;
    }
  };
  (src__cupertino__nav_bar._TransitionableNavigationBar.new = function(opts) {
    let componentsKeys = opts && 'componentsKeys' in opts ? opts.componentsKeys : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : null;
    let border = opts && 'border' in opts ? opts.border : null;
    let hasUserMiddle = opts && 'hasUserMiddle' in opts ? opts.hasUserMiddle : null;
    let largeExpanded = opts && 'largeExpanded' in opts ? opts.largeExpanded : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this.componentsKeys = componentsKeys;
    this.backgroundColor = backgroundColor;
    this.actionsForegroundColor = actionsForegroundColor;
    this.border = border;
    this.hasUserMiddle = hasUserMiddle;
    this.largeExpanded = largeExpanded;
    this.child = child;
    if (!(componentsKeys != null)) dart.assertFailed();
    if (!(largeExpanded != null)) dart.assertFailed();
    src__cupertino__nav_bar._TransitionableNavigationBar.__proto__.new.call(this, {key: componentsKeys.navBarBoxKey});
  }).prototype = src__cupertino__nav_bar._TransitionableNavigationBar.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._TransitionableNavigationBar);
  dart.setMethodSignature(src__cupertino__nav_bar._TransitionableNavigationBar, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._TransitionableNavigationBar.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setGetterSignature(src__cupertino__nav_bar._TransitionableNavigationBar, () => ({
    __proto__: dart.getGetters(src__cupertino__nav_bar._TransitionableNavigationBar.__proto__),
    renderBox: src__rendering__box.RenderBox
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._TransitionableNavigationBar, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._TransitionableNavigationBar.__proto__),
    componentsKeys: dart.finalFieldType(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys),
    backgroundColor: dart.finalFieldType(ui$.Color),
    actionsForegroundColor: dart.finalFieldType(ui$.Color),
    border: dart.finalFieldType(src__painting__box_border.Border),
    hasUserMiddle: dart.finalFieldType(core.bool),
    largeExpanded: dart.finalFieldType(core.bool),
    child: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  src__cupertino__nav_bar._NavigationBarTransition = class _NavigationBarTransition extends src__widgets__framework.StatelessWidget {
    build(context) {
      let componentsTransition = new src__cupertino__nav_bar._NavigationBarComponentsTransition.new({animation: this.animation, bottomNavBar: this.bottomNavBar, topNavBar: this.topNavBar, directionality: src__widgets__basic.Directionality.of(context)});
      let children = JSArrayOfWidget().of([new src__widgets__transitions.AnimatedBuilder.new({animation: this.animation, builder: dart.fn((context, child) => src__cupertino__nav_bar._wrapWithBackground({updateSystemUiOverlay: false, backgroundColor: this.backgroundTween.evaluate(this.animation), border: this.borderTween.evaluate(this.animation), child: new src__widgets__basic.SizedBox.new({height: this.heightTween.evaluate(this.animation), width: core.double.infinity})}), BuildContextAndWidgetToWidget())}), componentsTransition.bottomBackChevron, componentsTransition.bottomBackLabel, componentsTransition.bottomLeading, componentsTransition.bottomMiddle, componentsTransition.bottomLargeTitle, componentsTransition.bottomTrailing, componentsTransition.topLeading, componentsTransition.topBackChevron, componentsTransition.topBackLabel, componentsTransition.topMiddle, componentsTransition.topLargeTitle, componentsTransition.topTrailing]);
      children[$removeWhere](dart.fn(child => child == null, WidgetTobool()));
      return new src__widgets__basic.SizedBox.new({height: math.max(core.double, this.heightTween.begin, this.heightTween.end) + dart.notNull(src__widgets__media_query.MediaQuery.of(context).padding.top), width: core.double.infinity, child: new src__widgets__basic.Stack.new({children: children})});
    }
  };
  (src__cupertino__nav_bar._NavigationBarTransition.new = function(opts) {
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let topNavBar = opts && 'topNavBar' in opts ? opts.topNavBar : null;
    let bottomNavBar = opts && 'bottomNavBar' in opts ? opts.bottomNavBar : null;
    this.animation = animation;
    this.topNavBar = topNavBar;
    this.bottomNavBar = bottomNavBar;
    this.heightTween = new (TweenOfdouble()).new({begin: bottomNavBar.renderBox.size.height, end: topNavBar.renderBox.size.height});
    this.backgroundTween = new src__animation__tween.ColorTween.new({begin: bottomNavBar.backgroundColor, end: topNavBar.backgroundColor});
    this.borderTween = new src__widgets__implicit_animations.BorderTween.new({begin: bottomNavBar.border, end: topNavBar.border});
    src__cupertino__nav_bar._NavigationBarTransition.__proto__.new.call(this);
  }).prototype = src__cupertino__nav_bar._NavigationBarTransition.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._NavigationBarTransition);
  dart.setMethodSignature(src__cupertino__nav_bar._NavigationBarTransition, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._NavigationBarTransition.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._NavigationBarTransition, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._NavigationBarTransition.__proto__),
    animation: dart.finalFieldType(AnimationOfdouble()),
    topNavBar: dart.finalFieldType(src__cupertino__nav_bar._TransitionableNavigationBar),
    bottomNavBar: dart.finalFieldType(src__cupertino__nav_bar._TransitionableNavigationBar),
    heightTween: dart.finalFieldType(TweenOfdouble()),
    backgroundTween: dart.finalFieldType(src__animation__tween.ColorTween),
    borderTween: dart.finalFieldType(src__widgets__implicit_animations.BorderTween)
  }));
  let const$22;
  src__cupertino__nav_bar._NavigationBarComponentsTransition = class _NavigationBarComponentsTransition extends core.Object {
    positionInTransitionBox(key, opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      let componentBox = src__rendering__box.RenderBox._check(key.currentContext.findRenderObject());
      if (!dart.test(componentBox.attached)) dart.assertFailed();
      return src__rendering__stack.RelativeRect.fromRect(componentBox.localToGlobal(ui$.Offset.zero, {ancestor: from})['&'](componentBox.size), this.transitionBox);
    }
    slideFromLeadingEdge(opts) {
      let fromKey = opts && 'fromKey' in opts ? opts.fromKey : null;
      let fromNavBarBox = opts && 'fromNavBarBox' in opts ? opts.fromNavBarBox : null;
      let toKey = opts && 'toKey' in opts ? opts.toKey : null;
      let toNavBarBox = opts && 'toNavBarBox' in opts ? opts.toNavBarBox : null;
      let fromRect = this.positionInTransitionBox(fromKey, {from: fromNavBarBox});
      let fromBox = src__rendering__box.RenderBox._check(fromKey.currentContext.findRenderObject());
      let toBox = src__rendering__box.RenderBox._check(toKey.currentContext.findRenderObject());
      let toRect = toBox.localToGlobal(ui$.Offset.zero, {ancestor: toNavBarBox}).translate(0.0, -dart.notNull(fromBox.size.height) / 2 + dart.notNull(toBox.size.height) / 2)['&'](fromBox.size);
      if (dart.notNull(this.forwardDirection) < 0) {
        toRect = toRect.translate(-dart.notNull(fromBox.size.width) + dart.notNull(toBox.size.width), 0.0);
      }
      return new src__widgets__transitions.RelativeRectTween.new({begin: fromRect, end: src__rendering__stack.RelativeRect.fromRect(toRect, this.transitionBox)});
    }
    fadeInFrom(t, opts) {
      let curve = opts && 'curve' in opts ? opts.curve : src__animation__curves.Curves.easeIn;
      return AnimationOfdouble()._check(this.animation.drive(core.double, src__cupertino__nav_bar._NavigationBarComponentsTransition.fadeIn.chain(new src__animation__tween.CurveTween.new({curve: new src__animation__curves.Interval.new(t, 1.0, {curve: curve})}))));
    }
    fadeOutBy(t, opts) {
      let curve = opts && 'curve' in opts ? opts.curve : src__animation__curves.Curves.easeOut;
      return AnimationOfdouble()._check(this.animation.drive(core.double, src__cupertino__nav_bar._NavigationBarComponentsTransition.fadeOut.chain(new src__animation__tween.CurveTween.new({curve: new src__animation__curves.Interval.new(0.0, t, {curve: curve})}))));
    }
    get bottomLeading() {
      let bottomLeading = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.leadingKey.currentWidget);
      if (bottomLeading == null) {
        return null;
      }
      return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.bottomComponents.leadingKey, {from: this.bottomNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.4), child: bottomLeading.child})});
    }
    get bottomBackChevron() {
      let bottomBackChevron = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.backChevronKey.currentWidget);
      if (bottomBackChevron == null) {
        return null;
      }
      return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.bottomComponents.backChevronKey, {from: this.bottomNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.6), child: new src__widgets__text.DefaultTextStyle.new({style: this.bottomActionsStyle, child: bottomBackChevron.child})})});
    }
    get bottomBackLabel() {
      let bottomBackLabel = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.backLabelKey.currentWidget);
      if (bottomBackLabel == null) {
        return null;
      }
      let from = this.positionInTransitionBox(this.bottomComponents.backLabelKey, {from: this.bottomNavBarBox});
      let positionTween = new src__widgets__transitions.RelativeRectTween.new({begin: from, end: from.shift(new ui$.Offset.new(dart.notNull(this.forwardDirection) * (-dart.notNull(this.bottomNavBarBox.size.width) / 2.0), 0.0))});
      return new src__widgets__transitions.PositionedTransition.new({rect: AnimationOfRelativeRect()._check(this.animation.drive(src__rendering__stack.RelativeRect, positionTween)), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.2), child: new src__widgets__text.DefaultTextStyle.new({style: this.bottomActionsStyle, child: bottomBackLabel.child})})});
    }
    get bottomMiddle() {
      let bottomMiddle = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.middleKey.currentWidget);
      let topBackLabel = src__widgets__basic.KeyedSubtree._check(this.topComponents.backLabelKey.currentWidget);
      let topLeading = src__widgets__basic.KeyedSubtree._check(this.topComponents.leadingKey.currentWidget);
      if (!dart.test(this.bottomHasUserMiddle) && dart.test(this.bottomLargeExpanded)) {
        return null;
      }
      if (bottomMiddle != null && topBackLabel != null) {
        return new src__widgets__transitions.PositionedTransition.new({rect: AnimationOfRelativeRect()._check(this.animation.drive(src__rendering__stack.RelativeRect, this.slideFromLeadingEdge({fromKey: this.bottomComponents.middleKey, fromNavBarBox: this.bottomNavBarBox, toKey: this.topComponents.backLabelKey, toNavBarBox: this.topNavBarBox}))), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(dart.test(this.bottomHasUserMiddle) ? 0.4 : 0.7), child: new src__widgets__basic.Align.new({alignment: src__painting__alignment.AlignmentDirectional.centerStart, child: new src__widgets__transitions.DefaultTextStyleTransition.new({style: AnimationOfTextStyle()._check(this.animation.drive(src__painting__text_style.TextStyle, new src__widgets__implicit_animations.TextStyleTween.new({begin: src__cupertino__nav_bar._kMiddleTitleTextStyle, end: this.topActionsStyle}))), child: bottomMiddle.child})})})});
      }
      if (bottomMiddle != null && topLeading != null) {
        return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.bottomComponents.middleKey, {from: this.bottomNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(dart.test(this.bottomHasUserMiddle) ? 0.4 : 0.7), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kMiddleTitleTextStyle, child: bottomMiddle.child})})});
      }
      return null;
    }
    get bottomLargeTitle() {
      let bottomLargeTitle = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.largeTitleKey.currentWidget);
      let topBackLabel = src__widgets__basic.KeyedSubtree._check(this.topComponents.backLabelKey.currentWidget);
      let topLeading = src__widgets__basic.KeyedSubtree._check(this.topComponents.leadingKey.currentWidget);
      if (bottomLargeTitle == null || !dart.test(this.bottomLargeExpanded)) {
        return null;
      }
      if (bottomLargeTitle != null && topBackLabel != null) {
        return new src__widgets__transitions.PositionedTransition.new({rect: AnimationOfRelativeRect()._check(this.animation.drive(src__rendering__stack.RelativeRect, this.slideFromLeadingEdge({fromKey: this.bottomComponents.largeTitleKey, fromNavBarBox: this.bottomNavBarBox, toKey: this.topComponents.backLabelKey, toNavBarBox: this.topNavBarBox}))), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.6), child: new src__widgets__basic.Align.new({alignment: src__painting__alignment.AlignmentDirectional.centerStart, child: new src__widgets__transitions.DefaultTextStyleTransition.new({style: AnimationOfTextStyle()._check(this.animation.drive(src__painting__text_style.TextStyle, new src__widgets__implicit_animations.TextStyleTween.new({begin: src__cupertino__nav_bar._kLargeTitleTextStyle, end: this.topActionsStyle}))), maxLines: 1, overflow: src__rendering__paragraph.TextOverflow.ellipsis, child: bottomLargeTitle.child})})})});
      }
      if (bottomLargeTitle != null && topLeading != null) {
        let from = this.positionInTransitionBox(this.bottomComponents.largeTitleKey, {from: this.bottomNavBarBox});
        let positionTween = new src__widgets__transitions.RelativeRectTween.new({begin: from, end: from.shift(new ui$.Offset.new(dart.notNull(this.forwardDirection) * dart.notNull(this.bottomNavBarBox.size.width) / 4.0, 0.0))});
        return new src__widgets__transitions.PositionedTransition.new({rect: AnimationOfRelativeRect()._check(this.animation.drive(src__rendering__stack.RelativeRect, positionTween)), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.4), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kLargeTitleTextStyle, child: bottomLargeTitle.child})})});
      }
      return null;
    }
    get bottomTrailing() {
      let bottomTrailing = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.trailingKey.currentWidget);
      if (bottomTrailing == null) {
        return null;
      }
      return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.bottomComponents.trailingKey, {from: this.bottomNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.6), child: bottomTrailing.child})});
    }
    get topLeading() {
      let topLeading = src__widgets__basic.KeyedSubtree._check(this.topComponents.leadingKey.currentWidget);
      if (topLeading == null) {
        return null;
      }
      return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.topComponents.leadingKey, {from: this.topNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeInFrom(0.6), child: topLeading.child})});
    }
    get topBackChevron() {
      let topBackChevron = src__widgets__basic.KeyedSubtree._check(this.topComponents.backChevronKey.currentWidget);
      let bottomBackChevron = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.backChevronKey.currentWidget);
      if (topBackChevron == null) {
        return null;
      }
      let to = this.positionInTransitionBox(this.topComponents.backChevronKey, {from: this.topNavBarBox});
      let from = to;
      if (bottomBackChevron == null) {
        let topBackChevronBox = src__rendering__box.RenderBox._check(this.topComponents.backChevronKey.currentContext.findRenderObject());
        from = to.shift(new ui$.Offset.new(dart.notNull(this.forwardDirection) * dart.notNull(topBackChevronBox.size.width) * 2.0, 0.0));
      }
      let positionTween = new src__widgets__transitions.RelativeRectTween.new({begin: from, end: to});
      return new src__widgets__transitions.PositionedTransition.new({rect: AnimationOfRelativeRect()._check(this.animation.drive(src__rendering__stack.RelativeRect, positionTween)), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeInFrom(bottomBackChevron == null ? 0.7 : 0.4), child: new src__widgets__text.DefaultTextStyle.new({style: this.topActionsStyle, child: topBackChevron.child})})});
    }
    get topBackLabel() {
      let bottomMiddle = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.middleKey.currentWidget);
      let bottomLargeTitle = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.largeTitleKey.currentWidget);
      let topBackLabel = src__widgets__basic.KeyedSubtree._check(this.topComponents.backLabelKey.currentWidget);
      if (topBackLabel == null) {
        return null;
      }
      let topBackLabelOpacity = src__rendering__proxy_box.RenderAnimatedOpacity._check((() => {
        let t = this.topComponents.backLabelKey.currentContext;
        return t == null ? null : t.ancestorRenderObjectOfType(const$22 || (const$22 = dart.const(new (TypeMatcherOfRenderAnimatedOpacity()).new())));
      })());
      let midClickOpacity = null;
      if (topBackLabelOpacity != null && dart.notNull(topBackLabelOpacity.opacity.value) < 1.0) {
        midClickOpacity = AnimationOfdouble()._check(this.animation.drive(core.double, new (TweenOfdouble()).new({begin: 0.0, end: topBackLabelOpacity.opacity.value})));
      }
      if (bottomLargeTitle != null && topBackLabel != null && dart.test(this.bottomLargeExpanded)) {
        return new src__widgets__transitions.PositionedTransition.new({rect: AnimationOfRelativeRect()._check(this.animation.drive(src__rendering__stack.RelativeRect, this.slideFromLeadingEdge({fromKey: this.bottomComponents.largeTitleKey, fromNavBarBox: this.bottomNavBarBox, toKey: this.topComponents.backLabelKey, toNavBarBox: this.topNavBarBox}))), child: new src__widgets__transitions.FadeTransition.new({opacity: midClickOpacity != null ? midClickOpacity : this.fadeInFrom(0.4), child: new src__widgets__transitions.DefaultTextStyleTransition.new({style: AnimationOfTextStyle()._check(this.animation.drive(src__painting__text_style.TextStyle, new src__widgets__implicit_animations.TextStyleTween.new({begin: src__cupertino__nav_bar._kLargeTitleTextStyle, end: this.topActionsStyle}))), maxLines: 1, overflow: src__rendering__paragraph.TextOverflow.ellipsis, child: topBackLabel.child})})});
      }
      if (bottomMiddle != null && topBackLabel != null) {
        return new src__widgets__transitions.PositionedTransition.new({rect: AnimationOfRelativeRect()._check(this.animation.drive(src__rendering__stack.RelativeRect, this.slideFromLeadingEdge({fromKey: this.bottomComponents.middleKey, fromNavBarBox: this.bottomNavBarBox, toKey: this.topComponents.backLabelKey, toNavBarBox: this.topNavBarBox}))), child: new src__widgets__transitions.FadeTransition.new({opacity: midClickOpacity != null ? midClickOpacity : this.fadeInFrom(0.3), child: new src__widgets__transitions.DefaultTextStyleTransition.new({style: AnimationOfTextStyle()._check(this.animation.drive(src__painting__text_style.TextStyle, new src__widgets__implicit_animations.TextStyleTween.new({begin: src__cupertino__nav_bar._kMiddleTitleTextStyle, end: this.topActionsStyle}))), child: topBackLabel.child})})});
      }
      return null;
    }
    get topMiddle() {
      let topMiddle = src__widgets__basic.KeyedSubtree._check(this.topComponents.middleKey.currentWidget);
      if (topMiddle == null) {
        return null;
      }
      if (!dart.test(this.topHasUserMiddle) && dart.test(this.topLargeExpanded)) {
        return null;
      }
      let to = this.positionInTransitionBox(this.topComponents.middleKey, {from: this.topNavBarBox});
      let positionTween = new src__widgets__transitions.RelativeRectTween.new({begin: to.shift(new ui$.Offset.new(dart.notNull(this.forwardDirection) * dart.notNull(this.topNavBarBox.size.width) / 2.0, 0.0)), end: to});
      return new src__widgets__transitions.PositionedTransition.new({rect: AnimationOfRelativeRect()._check(this.animation.drive(src__rendering__stack.RelativeRect, positionTween)), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeInFrom(0.25), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kMiddleTitleTextStyle, child: topMiddle.child})})});
    }
    get topTrailing() {
      let topTrailing = src__widgets__basic.KeyedSubtree._check(this.topComponents.trailingKey.currentWidget);
      if (topTrailing == null) {
        return null;
      }
      return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.topComponents.trailingKey, {from: this.topNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeInFrom(0.4), child: topTrailing.child})});
    }
    get topLargeTitle() {
      let topLargeTitle = src__widgets__basic.KeyedSubtree._check(this.topComponents.largeTitleKey.currentWidget);
      if (topLargeTitle == null || !dart.test(this.topLargeExpanded)) {
        return null;
      }
      let to = this.positionInTransitionBox(this.topComponents.largeTitleKey, {from: this.topNavBarBox});
      let positionTween = new src__widgets__transitions.RelativeRectTween.new({begin: to.shift(new ui$.Offset.new(dart.notNull(this.forwardDirection) * dart.notNull(this.topNavBarBox.size.width), 0.0)), end: to});
      return new src__widgets__transitions.PositionedTransition.new({rect: AnimationOfRelativeRect()._check(this.animation.drive(src__rendering__stack.RelativeRect, positionTween)), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeInFrom(0.3), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kLargeTitleTextStyle, maxLines: 1, overflow: src__rendering__paragraph.TextOverflow.ellipsis, child: topLargeTitle.child})})});
    }
  };
  (src__cupertino__nav_bar._NavigationBarComponentsTransition.new = function(opts) {
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let bottomNavBar = opts && 'bottomNavBar' in opts ? opts.bottomNavBar : null;
    let topNavBar = opts && 'topNavBar' in opts ? opts.topNavBar : null;
    let directionality = opts && 'directionality' in opts ? opts.directionality : null;
    this.animation = animation;
    this.bottomComponents = bottomNavBar.componentsKeys;
    this.topComponents = topNavBar.componentsKeys;
    this.bottomNavBarBox = bottomNavBar.renderBox;
    this.topNavBarBox = topNavBar.renderBox;
    this.bottomActionsStyle = src__cupertino__nav_bar._navBarItemStyle(bottomNavBar.actionsForegroundColor);
    this.topActionsStyle = src__cupertino__nav_bar._navBarItemStyle(topNavBar.actionsForegroundColor);
    this.bottomHasUserMiddle = bottomNavBar.hasUserMiddle;
    this.topHasUserMiddle = topNavBar.hasUserMiddle;
    this.bottomLargeExpanded = bottomNavBar.largeExpanded;
    this.topLargeExpanded = topNavBar.largeExpanded;
    this.transitionBox = bottomNavBar.renderBox.paintBounds.expandToInclude(topNavBar.renderBox.paintBounds);
    this.forwardDirection = directionality === ui$.TextDirection.ltr ? 1.0 : -1.0;
  }).prototype = src__cupertino__nav_bar._NavigationBarComponentsTransition.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._NavigationBarComponentsTransition);
  dart.setMethodSignature(src__cupertino__nav_bar._NavigationBarComponentsTransition, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._NavigationBarComponentsTransition.__proto__),
    positionInTransitionBox: dart.fnType(src__rendering__stack.RelativeRect, [src__widgets__framework.GlobalKey$(src__widgets__framework.State$(src__widgets__framework.StatefulWidget))], {from: src__rendering__box.RenderBox}),
    slideFromLeadingEdge: dart.fnType(src__widgets__transitions.RelativeRectTween, [], {fromKey: src__widgets__framework.GlobalKey$(src__widgets__framework.State$(src__widgets__framework.StatefulWidget)), fromNavBarBox: src__rendering__box.RenderBox, toKey: src__widgets__framework.GlobalKey$(src__widgets__framework.State$(src__widgets__framework.StatefulWidget)), toNavBarBox: src__rendering__box.RenderBox}),
    fadeInFrom: dart.fnType(src__animation__animation.Animation$(core.double), [core.double], {curve: src__animation__curves.Curve}),
    fadeOutBy: dart.fnType(src__animation__animation.Animation$(core.double), [core.double], {curve: src__animation__curves.Curve})
  }));
  dart.setGetterSignature(src__cupertino__nav_bar._NavigationBarComponentsTransition, () => ({
    __proto__: dart.getGetters(src__cupertino__nav_bar._NavigationBarComponentsTransition.__proto__),
    bottomLeading: src__widgets__framework.Widget,
    bottomBackChevron: src__widgets__framework.Widget,
    bottomBackLabel: src__widgets__framework.Widget,
    bottomMiddle: src__widgets__framework.Widget,
    bottomLargeTitle: src__widgets__framework.Widget,
    bottomTrailing: src__widgets__framework.Widget,
    topLeading: src__widgets__framework.Widget,
    topBackChevron: src__widgets__framework.Widget,
    topBackLabel: src__widgets__framework.Widget,
    topMiddle: src__widgets__framework.Widget,
    topTrailing: src__widgets__framework.Widget,
    topLargeTitle: src__widgets__framework.Widget
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._NavigationBarComponentsTransition, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._NavigationBarComponentsTransition.__proto__),
    animation: dart.finalFieldType(AnimationOfdouble()),
    bottomComponents: dart.finalFieldType(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys),
    topComponents: dart.finalFieldType(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys),
    bottomNavBarBox: dart.finalFieldType(src__rendering__box.RenderBox),
    topNavBarBox: dart.finalFieldType(src__rendering__box.RenderBox),
    bottomActionsStyle: dart.finalFieldType(src__painting__text_style.TextStyle),
    topActionsStyle: dart.finalFieldType(src__painting__text_style.TextStyle),
    bottomHasUserMiddle: dart.finalFieldType(core.bool),
    topHasUserMiddle: dart.finalFieldType(core.bool),
    bottomLargeExpanded: dart.finalFieldType(core.bool),
    topLargeExpanded: dart.finalFieldType(core.bool),
    transitionBox: dart.finalFieldType(ui$.Rect),
    forwardDirection: dart.finalFieldType(core.double)
  }));
  dart.defineLazy(src__cupertino__nav_bar._NavigationBarComponentsTransition, {
    /*src__cupertino__nav_bar._NavigationBarComponentsTransition.fadeOut*/get fadeOut() {
      return new (TweenOfdouble()).new({begin: 1.0, end: 0.0});
    },
    /*src__cupertino__nav_bar._NavigationBarComponentsTransition.fadeIn*/get fadeIn() {
      return new (TweenOfdouble()).new({begin: 0.0, end: 1.0});
    }
  });
  dart.defineLazy(src__cupertino__nav_bar, {
    /*src__cupertino__nav_bar._linearTranslateWithLargestRectSizeTween*/get _linearTranslateWithLargestRectSizeTween() {
      return dart.fn((begin, end) => {
        let largestSize = new ui$.Size.new(math.max(core.double, begin.size.width, end.size.width), math.max(core.double, begin.size.height, end.size.height));
        return new src__animation__tween.RectTween.new({begin: begin.topLeft['&'](largestSize), end: end.topLeft['&'](largestSize)});
      }, RectAndRectToRectTween());
    },
    set _linearTranslateWithLargestRectSizeTween(_) {},
    /*src__cupertino__nav_bar._navBarHeroLaunchPadBuilder*/get _navBarHeroLaunchPadBuilder() {
      return dart.fn((context, child) => {
        if (!src__cupertino__nav_bar._TransitionableNavigationBar.is(child)) dart.assertFailed();
        return new src__widgets__visibility.Visibility.new({maintainSize: true, maintainAnimation: true, maintainState: true, visible: false, child: child});
      }, BuildContextAndWidgetToVisibility());
    },
    /*src__cupertino__nav_bar._navBarHeroFlightShuttleBuilder*/get _navBarHeroFlightShuttleBuilder() {
      return dart.fn((flightContext, animation, flightDirection, fromHeroContext, toHeroContext) => {
        if (!(animation != null)) dart.assertFailed();
        if (!(flightDirection != null)) dart.assertFailed();
        if (!(fromHeroContext != null)) dart.assertFailed();
        if (!(toHeroContext != null)) dart.assertFailed();
        if (!src__widgets__heroes.Hero.is(fromHeroContext.widget)) dart.assertFailed();
        if (!src__widgets__heroes.Hero.is(toHeroContext.widget)) dart.assertFailed();
        let fromHeroWidget = src__widgets__heroes.Hero._check(fromHeroContext.widget);
        let toHeroWidget = src__widgets__heroes.Hero._check(toHeroContext.widget);
        if (!src__cupertino__nav_bar._TransitionableNavigationBar.is(fromHeroWidget.child)) dart.assertFailed();
        if (!src__cupertino__nav_bar._TransitionableNavigationBar.is(toHeroWidget.child)) dart.assertFailed();
        let fromNavBar = src__cupertino__nav_bar._TransitionableNavigationBar._check(fromHeroWidget.child);
        let toNavBar = src__cupertino__nav_bar._TransitionableNavigationBar._check(toHeroWidget.child);
        if (!(fromNavBar.componentsKeys != null)) dart.assertFailed();
        if (!(toNavBar.componentsKeys != null)) dart.assertFailed();
        if (!(fromNavBar.componentsKeys.navBarBoxKey.currentContext.owner != null)) dart.assertFailed("The from nav bar to Hero must have been mounted in the previous frame");
        if (!(toNavBar.componentsKeys.navBarBoxKey.currentContext.owner != null)) dart.assertFailed("The to nav bar to Hero must have been mounted in the previous frame");
        switch (flightDirection) {
          case src__widgets__heroes.HeroFlightDirection.push:
          {
            return new src__cupertino__nav_bar._NavigationBarTransition.new({animation: animation, bottomNavBar: fromNavBar, topNavBar: toNavBar});
            break;
          }
          case src__widgets__heroes.HeroFlightDirection.pop:
          {
            return new src__cupertino__nav_bar._NavigationBarTransition.new({animation: animation, bottomNavBar: toNavBar, topNavBar: fromNavBar});
          }
        }
      }, BuildContextAndAnimationOfdoubleAndHeroFlightDirection__To_NavigationBarTransition());
    }
  });
  dart.defineLazy(src__cupertino__text_theme, {
    /*src__cupertino__text_theme._kDefaultLightTextStyle*/get _kDefaultLightTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Text", fontSize: 17.0, letterSpacing: -0.41, color: src__cupertino__colors.CupertinoColors.black, decoration: ui$.TextDecoration.none}));
    },
    /*src__cupertino__text_theme._kDefaultDarkTextStyle*/get _kDefaultDarkTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Text", fontSize: 17.0, letterSpacing: -0.41, color: src__cupertino__colors.CupertinoColors.white, decoration: ui$.TextDecoration.none}));
    },
    /*src__cupertino__text_theme._kDefaultActionTextStyle*/get _kDefaultActionTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Text", fontSize: 17.0, letterSpacing: -0.41, color: src__cupertino__colors.CupertinoColors.activeBlue, decoration: ui$.TextDecoration.none}));
    },
    /*src__cupertino__text_theme._kDefaultTabLabelTextStyle*/get _kDefaultTabLabelTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Text", fontSize: 10.0, letterSpacing: -0.24, color: src__cupertino__colors.CupertinoColors.inactiveGray}));
    },
    /*src__cupertino__text_theme._kDefaultMiddleTitleLightTextStyle*/get _kDefaultMiddleTitleLightTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Text", fontSize: 17.0, fontWeight: ui$.FontWeight.w600, letterSpacing: -0.41, color: src__cupertino__colors.CupertinoColors.black}));
    },
    /*src__cupertino__text_theme._kDefaultMiddleTitleDarkTextStyle*/get _kDefaultMiddleTitleDarkTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Text", fontSize: 17.0, fontWeight: ui$.FontWeight.w600, letterSpacing: -0.41, color: src__cupertino__colors.CupertinoColors.white}));
    },
    /*src__cupertino__text_theme._kDefaultLargeTitleLightTextStyle*/get _kDefaultLargeTitleLightTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Display", fontSize: 34.0, fontWeight: ui$.FontWeight.w700, letterSpacing: 0.41, color: src__cupertino__colors.CupertinoColors.black}));
    },
    /*src__cupertino__text_theme._kDefaultLargeTitleDarkTextStyle*/get _kDefaultLargeTitleDarkTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Display", fontSize: 34.0, fontWeight: ui$.FontWeight.w700, letterSpacing: 0.41, color: src__cupertino__colors.CupertinoColors.white}));
    }
  });
  const _primaryColor = dart.privateName(src__cupertino__text_theme, "_primaryColor");
  const _brightness = dart.privateName(src__cupertino__text_theme, "_brightness");
  const _textStyle = dart.privateName(src__cupertino__text_theme, "_textStyle");
  const _actionTextStyle = dart.privateName(src__cupertino__text_theme, "_actionTextStyle");
  const _tabLabelTextStyle = dart.privateName(src__cupertino__text_theme, "_tabLabelTextStyle");
  const _navTitleTextStyle = dart.privateName(src__cupertino__text_theme, "_navTitleTextStyle");
  const _navLargeTitleTextStyle = dart.privateName(src__cupertino__text_theme, "_navLargeTitleTextStyle");
  const _navActionTextStyle = dart.privateName(src__cupertino__text_theme, "_navActionTextStyle");
  const _isLight = dart.privateName(src__cupertino__text_theme, "_isLight");
  src__cupertino__text_theme.CupertinoTextThemeData = class CupertinoTextThemeData extends src__foundation__diagnostics.Diagnosticable {
    get [_isLight]() {
      return this[_brightness] !== ui$.Brightness.dark;
    }
    get textStyle() {
      return this[_textStyle] != null ? this[_textStyle] : dart.test(this[_isLight]) ? src__cupertino__text_theme._kDefaultLightTextStyle : src__cupertino__text_theme._kDefaultDarkTextStyle;
    }
    get actionTextStyle() {
      return this[_actionTextStyle] != null ? this[_actionTextStyle] : src__cupertino__text_theme._kDefaultActionTextStyle.copyWith({color: this[_primaryColor]});
    }
    get tabLabelTextStyle() {
      return this[_tabLabelTextStyle] != null ? this[_tabLabelTextStyle] : src__cupertino__text_theme._kDefaultTabLabelTextStyle;
    }
    get navTitleTextStyle() {
      return this[_navTitleTextStyle] != null ? this[_navTitleTextStyle] : dart.test(this[_isLight]) ? src__cupertino__text_theme._kDefaultMiddleTitleLightTextStyle : src__cupertino__text_theme._kDefaultMiddleTitleDarkTextStyle;
    }
    get navLargeTitleTextStyle() {
      return this[_navLargeTitleTextStyle] != null ? this[_navLargeTitleTextStyle] : dart.test(this[_isLight]) ? src__cupertino__text_theme._kDefaultLargeTitleLightTextStyle : src__cupertino__text_theme._kDefaultLargeTitleDarkTextStyle;
    }
    get navActionTextStyle() {
      return this[_navActionTextStyle] != null ? this[_navActionTextStyle] : src__cupertino__text_theme._kDefaultActionTextStyle.copyWith({color: this[_primaryColor]});
    }
    copyWith(opts) {
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      let brightness = opts && 'brightness' in opts ? opts.brightness : null;
      let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
      let actionTextStyle = opts && 'actionTextStyle' in opts ? opts.actionTextStyle : null;
      let tabLabelTextStyle = opts && 'tabLabelTextStyle' in opts ? opts.tabLabelTextStyle : null;
      let navTitleTextStyle = opts && 'navTitleTextStyle' in opts ? opts.navTitleTextStyle : null;
      let navLargeTitleTextStyle = opts && 'navLargeTitleTextStyle' in opts ? opts.navLargeTitleTextStyle : null;
      let navActionTextStyle = opts && 'navActionTextStyle' in opts ? opts.navActionTextStyle : null;
      return new src__cupertino__text_theme.CupertinoTextThemeData.new({primaryColor: primaryColor != null ? primaryColor : this[_primaryColor], brightness: brightness != null ? brightness : this[_brightness], textStyle: textStyle != null ? textStyle : this[_textStyle], actionTextStyle: actionTextStyle != null ? actionTextStyle : this[_actionTextStyle], tabLabelTextStyle: tabLabelTextStyle != null ? tabLabelTextStyle : this[_tabLabelTextStyle], navTitleTextStyle: navTitleTextStyle != null ? navTitleTextStyle : this[_navTitleTextStyle], navLargeTitleTextStyle: navLargeTitleTextStyle != null ? navLargeTitleTextStyle : this[_navLargeTitleTextStyle], navActionTextStyle: navActionTextStyle != null ? navActionTextStyle : this[_navActionTextStyle]});
    }
  };
  (src__cupertino__text_theme.CupertinoTextThemeData.new = function(opts) {
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    let brightness = opts && 'brightness' in opts ? opts.brightness : null;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let actionTextStyle = opts && 'actionTextStyle' in opts ? opts.actionTextStyle : null;
    let tabLabelTextStyle = opts && 'tabLabelTextStyle' in opts ? opts.tabLabelTextStyle : null;
    let navTitleTextStyle = opts && 'navTitleTextStyle' in opts ? opts.navTitleTextStyle : null;
    let navLargeTitleTextStyle = opts && 'navLargeTitleTextStyle' in opts ? opts.navLargeTitleTextStyle : null;
    let navActionTextStyle = opts && 'navActionTextStyle' in opts ? opts.navActionTextStyle : null;
    this[_primaryColor] = primaryColor != null ? primaryColor : src__cupertino__colors.CupertinoColors.activeBlue;
    this[_brightness] = brightness;
    this[_textStyle] = textStyle;
    this[_actionTextStyle] = actionTextStyle;
    this[_tabLabelTextStyle] = tabLabelTextStyle;
    this[_navTitleTextStyle] = navTitleTextStyle;
    this[_navLargeTitleTextStyle] = navLargeTitleTextStyle;
    this[_navActionTextStyle] = navActionTextStyle;
    src__cupertino__text_theme.CupertinoTextThemeData.__proto__.new.call(this);
  }).prototype = src__cupertino__text_theme.CupertinoTextThemeData.prototype;
  dart.addTypeTests(src__cupertino__text_theme.CupertinoTextThemeData);
  dart.setMethodSignature(src__cupertino__text_theme.CupertinoTextThemeData, () => ({
    __proto__: dart.getMethods(src__cupertino__text_theme.CupertinoTextThemeData.__proto__),
    copyWith: dart.fnType(src__cupertino__text_theme.CupertinoTextThemeData, [], {primaryColor: ui$.Color, brightness: ui$.Brightness, textStyle: src__painting__text_style.TextStyle, actionTextStyle: src__painting__text_style.TextStyle, tabLabelTextStyle: src__painting__text_style.TextStyle, navTitleTextStyle: src__painting__text_style.TextStyle, navLargeTitleTextStyle: src__painting__text_style.TextStyle, navActionTextStyle: src__painting__text_style.TextStyle})
  }));
  dart.setGetterSignature(src__cupertino__text_theme.CupertinoTextThemeData, () => ({
    __proto__: dart.getGetters(src__cupertino__text_theme.CupertinoTextThemeData.__proto__),
    [_isLight]: core.bool,
    textStyle: src__painting__text_style.TextStyle,
    actionTextStyle: src__painting__text_style.TextStyle,
    tabLabelTextStyle: src__painting__text_style.TextStyle,
    navTitleTextStyle: src__painting__text_style.TextStyle,
    navLargeTitleTextStyle: src__painting__text_style.TextStyle,
    navActionTextStyle: src__painting__text_style.TextStyle
  }));
  dart.setFieldSignature(src__cupertino__text_theme.CupertinoTextThemeData, () => ({
    __proto__: dart.getFields(src__cupertino__text_theme.CupertinoTextThemeData.__proto__),
    [_primaryColor]: dart.finalFieldType(ui$.Color),
    [_brightness]: dart.finalFieldType(ui$.Brightness),
    [_textStyle]: dart.finalFieldType(src__painting__text_style.TextStyle),
    [_actionTextStyle]: dart.finalFieldType(src__painting__text_style.TextStyle),
    [_tabLabelTextStyle]: dart.finalFieldType(src__painting__text_style.TextStyle),
    [_navTitleTextStyle]: dart.finalFieldType(src__painting__text_style.TextStyle),
    [_navLargeTitleTextStyle]: dart.finalFieldType(src__painting__text_style.TextStyle),
    [_navActionTextStyle]: dart.finalFieldType(src__painting__text_style.TextStyle)
  }));
  dart.defineLazy(src__cupertino__theme, {
    /*src__cupertino__theme._kDefaultBarLightBackgroundColor*/get _kDefaultBarLightBackgroundColor() {
      return dart.const(new ui$.Color.new(3438868728));
    },
    /*src__cupertino__theme._kDefaultBarDarkBackgroundColor*/get _kDefaultBarDarkBackgroundColor() {
      return dart.const(new ui$.Color.new(3072401697));
    }
  });
  let const$23;
  src__cupertino__theme.CupertinoTheme = class CupertinoTheme extends src__widgets__framework.InheritedWidget {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    updateShouldNotify(oldWidget) {
      src__cupertino__theme.CupertinoTheme._check(oldWidget);
      return !dart.equals(this.data, oldWidget.data);
    }
    static of(context) {
      let theme = src__cupertino__theme.CupertinoTheme._check(context.inheritFromWidgetOfExactType(dart.wrapType(src__cupertino__theme.CupertinoTheme)));
      let l = theme == null ? null : theme.data;
      return l != null ? l : const$23 || (const$23 = dart.const(new src__cupertino__theme.CupertinoThemeData.new()));
    }
  };
  (src__cupertino__theme.CupertinoTheme.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[data$] = data;
    if (!(child != null)) dart.assertFailed();
    if (!(data != null)) dart.assertFailed();
    src__cupertino__theme.CupertinoTheme.__proto__.new.call(this, {key: key, child: child});
  }).prototype = src__cupertino__theme.CupertinoTheme.prototype;
  dart.addTypeTests(src__cupertino__theme.CupertinoTheme);
  const data$ = Symbol("CupertinoTheme.data");
  dart.setMethodSignature(src__cupertino__theme.CupertinoTheme, () => ({
    __proto__: dart.getMethods(src__cupertino__theme.CupertinoTheme.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [core.Object])
  }));
  dart.setFieldSignature(src__cupertino__theme.CupertinoTheme, () => ({
    __proto__: dart.getFields(src__cupertino__theme.CupertinoTheme.__proto__),
    data: dart.finalFieldType(src__cupertino__theme.CupertinoThemeData)
  }));
  const _brightness$ = dart.privateName(src__cupertino__theme, "_brightness");
  const _primaryColor$ = dart.privateName(src__cupertino__theme, "_primaryColor");
  const _primaryContrastingColor = dart.privateName(src__cupertino__theme, "_primaryContrastingColor");
  const _textTheme = dart.privateName(src__cupertino__theme, "_textTheme");
  const _barBackgroundColor = dart.privateName(src__cupertino__theme, "_barBackgroundColor");
  const _scaffoldBackgroundColor = dart.privateName(src__cupertino__theme, "_scaffoldBackgroundColor");
  const _isLight$ = dart.privateName(src__cupertino__theme, "_isLight");
  let const$24;
  src__cupertino__theme.CupertinoThemeData = class CupertinoThemeData extends src__foundation__diagnostics.Diagnosticable {
    get [_isLight$]() {
      return this.brightness === ui$.Brightness.light;
    }
    get brightness() {
      return this[_brightness$] != null ? this[_brightness$] : ui$.Brightness.light;
    }
    get primaryColor() {
      return this[_primaryColor$] != null ? this[_primaryColor$] : dart.test(this[_isLight$]) ? src__cupertino__colors.CupertinoColors.activeBlue : src__cupertino__colors.CupertinoColors.activeOrange;
    }
    get primaryContrastingColor() {
      return this[_primaryContrastingColor] != null ? this[_primaryContrastingColor] : dart.test(this[_isLight$]) ? src__cupertino__colors.CupertinoColors.white : src__cupertino__colors.CupertinoColors.black;
    }
    get textTheme() {
      return this[_textTheme] != null ? this[_textTheme] : new src__cupertino__text_theme.CupertinoTextThemeData.new({brightness: this.brightness, primaryColor: this.primaryColor});
    }
    get barBackgroundColor() {
      return this[_barBackgroundColor] != null ? this[_barBackgroundColor] : dart.test(this[_isLight$]) ? src__cupertino__theme._kDefaultBarLightBackgroundColor : src__cupertino__theme._kDefaultBarDarkBackgroundColor;
    }
    get scaffoldBackgroundColor() {
      return this[_scaffoldBackgroundColor] != null ? this[_scaffoldBackgroundColor] : dart.test(this[_isLight$]) ? src__cupertino__colors.CupertinoColors.white : src__cupertino__colors.CupertinoColors.black;
    }
    noDefault() {
      return new src__cupertino__theme._NoDefaultCupertinoThemeData.new(this[_brightness$], this[_primaryColor$], this[_primaryContrastingColor], this[_textTheme], this[_barBackgroundColor], this[_scaffoldBackgroundColor]);
    }
    copyWith(opts) {
      let brightness = opts && 'brightness' in opts ? opts.brightness : null;
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      let primaryContrastingColor = opts && 'primaryContrastingColor' in opts ? opts.primaryContrastingColor : null;
      let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
      let barBackgroundColor = opts && 'barBackgroundColor' in opts ? opts.barBackgroundColor : null;
      let scaffoldBackgroundColor = opts && 'scaffoldBackgroundColor' in opts ? opts.scaffoldBackgroundColor : null;
      return new src__cupertino__theme.CupertinoThemeData.new({brightness: brightness != null ? brightness : this[_brightness$], primaryColor: primaryColor != null ? primaryColor : this[_primaryColor$], primaryContrastingColor: primaryContrastingColor != null ? primaryContrastingColor : this[_primaryContrastingColor], textTheme: textTheme != null ? textTheme : this[_textTheme], barBackgroundColor: barBackgroundColor != null ? barBackgroundColor : this[_barBackgroundColor], scaffoldBackgroundColor: scaffoldBackgroundColor != null ? scaffoldBackgroundColor : this[_scaffoldBackgroundColor]});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      let defaultData = const$24 || (const$24 = dart.const(new src__cupertino__theme.CupertinoThemeData.new()));
      properties.add(new (EnumPropertyOfBrightness()).new("brightness", this.brightness, {defaultValue: defaultData.brightness}));
      properties.add(new (DiagnosticsPropertyOfColor()).new("primaryColor", this.primaryColor, {defaultValue: defaultData.primaryColor}));
      properties.add(new (DiagnosticsPropertyOfColor()).new("primaryContrastingColor", this.primaryContrastingColor, {defaultValue: defaultData.primaryContrastingColor}));
      properties.add(new (DiagnosticsPropertyOfCupertinoTextThemeData()).new("textTheme", this.textTheme, {defaultValue: defaultData.textTheme}));
      properties.add(new (DiagnosticsPropertyOfColor()).new("barBackgroundColor", this.barBackgroundColor, {defaultValue: defaultData.barBackgroundColor}));
      properties.add(new (DiagnosticsPropertyOfColor()).new("scaffoldBackgroundColor", this.scaffoldBackgroundColor, {defaultValue: defaultData.scaffoldBackgroundColor}));
    }
  };
  (src__cupertino__theme.CupertinoThemeData.new = function(opts) {
    let brightness = opts && 'brightness' in opts ? opts.brightness : null;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    let primaryContrastingColor = opts && 'primaryContrastingColor' in opts ? opts.primaryContrastingColor : null;
    let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
    let barBackgroundColor = opts && 'barBackgroundColor' in opts ? opts.barBackgroundColor : null;
    let scaffoldBackgroundColor = opts && 'scaffoldBackgroundColor' in opts ? opts.scaffoldBackgroundColor : null;
    src__cupertino__theme.CupertinoThemeData.raw.call(this, brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor);
  }).prototype = src__cupertino__theme.CupertinoThemeData.prototype;
  (src__cupertino__theme.CupertinoThemeData.raw = function(brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor) {
    this[_brightness$] = brightness;
    this[_primaryColor$] = primaryColor;
    this[_primaryContrastingColor] = primaryContrastingColor;
    this[_textTheme] = textTheme;
    this[_barBackgroundColor] = barBackgroundColor;
    this[_scaffoldBackgroundColor] = scaffoldBackgroundColor;
    src__cupertino__theme.CupertinoThemeData.__proto__.new.call(this);
  }).prototype = src__cupertino__theme.CupertinoThemeData.prototype;
  dart.addTypeTests(src__cupertino__theme.CupertinoThemeData);
  dart.setMethodSignature(src__cupertino__theme.CupertinoThemeData, () => ({
    __proto__: dart.getMethods(src__cupertino__theme.CupertinoThemeData.__proto__),
    noDefault: dart.fnType(src__cupertino__theme.CupertinoThemeData, []),
    copyWith: dart.fnType(src__cupertino__theme.CupertinoThemeData, [], {brightness: ui$.Brightness, primaryColor: ui$.Color, primaryContrastingColor: ui$.Color, textTheme: src__cupertino__text_theme.CupertinoTextThemeData, barBackgroundColor: ui$.Color, scaffoldBackgroundColor: ui$.Color})
  }));
  dart.setGetterSignature(src__cupertino__theme.CupertinoThemeData, () => ({
    __proto__: dart.getGetters(src__cupertino__theme.CupertinoThemeData.__proto__),
    [_isLight$]: core.bool,
    brightness: ui$.Brightness,
    primaryColor: ui$.Color,
    primaryContrastingColor: ui$.Color,
    textTheme: src__cupertino__text_theme.CupertinoTextThemeData,
    barBackgroundColor: ui$.Color,
    scaffoldBackgroundColor: ui$.Color
  }));
  dart.setFieldSignature(src__cupertino__theme.CupertinoThemeData, () => ({
    __proto__: dart.getFields(src__cupertino__theme.CupertinoThemeData.__proto__),
    [_brightness$]: dart.finalFieldType(ui$.Brightness),
    [_primaryColor$]: dart.finalFieldType(ui$.Color),
    [_primaryContrastingColor]: dart.finalFieldType(ui$.Color),
    [_textTheme]: dart.finalFieldType(src__cupertino__text_theme.CupertinoTextThemeData),
    [_barBackgroundColor]: dart.finalFieldType(ui$.Color),
    [_scaffoldBackgroundColor]: dart.finalFieldType(ui$.Color)
  }));
  src__cupertino__theme._NoDefaultCupertinoThemeData = class _NoDefaultCupertinoThemeData extends src__cupertino__theme.CupertinoThemeData {
    get brightness() {
      return this[brightness$];
    }
    set brightness(value) {
      super.brightness = value;
    }
    get primaryColor() {
      return this[primaryColor$];
    }
    set primaryColor(value) {
      super.primaryColor = value;
    }
    get primaryContrastingColor() {
      return this[primaryContrastingColor$];
    }
    set primaryContrastingColor(value) {
      super.primaryContrastingColor = value;
    }
    get textTheme() {
      return this[textTheme$];
    }
    set textTheme(value) {
      super.textTheme = value;
    }
    get barBackgroundColor() {
      return this[barBackgroundColor$];
    }
    set barBackgroundColor(value) {
      super.barBackgroundColor = value;
    }
    get scaffoldBackgroundColor() {
      return this[scaffoldBackgroundColor$];
    }
    set scaffoldBackgroundColor(value) {
      super.scaffoldBackgroundColor = value;
    }
  };
  (src__cupertino__theme._NoDefaultCupertinoThemeData.new = function(brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor) {
    this[brightness$] = brightness;
    this[primaryColor$] = primaryColor;
    this[primaryContrastingColor$] = primaryContrastingColor;
    this[textTheme$] = textTheme;
    this[barBackgroundColor$] = barBackgroundColor;
    this[scaffoldBackgroundColor$] = scaffoldBackgroundColor;
    src__cupertino__theme._NoDefaultCupertinoThemeData.__proto__.raw.call(this, brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor);
  }).prototype = src__cupertino__theme._NoDefaultCupertinoThemeData.prototype;
  dart.addTypeTests(src__cupertino__theme._NoDefaultCupertinoThemeData);
  const brightness$ = Symbol("_NoDefaultCupertinoThemeData.brightness");
  const primaryColor$ = Symbol("_NoDefaultCupertinoThemeData.primaryColor");
  const primaryContrastingColor$ = Symbol("_NoDefaultCupertinoThemeData.primaryContrastingColor");
  const textTheme$ = Symbol("_NoDefaultCupertinoThemeData.textTheme");
  const barBackgroundColor$ = Symbol("_NoDefaultCupertinoThemeData.barBackgroundColor");
  const scaffoldBackgroundColor$ = Symbol("_NoDefaultCupertinoThemeData.scaffoldBackgroundColor");
  dart.setFieldSignature(src__cupertino__theme._NoDefaultCupertinoThemeData, () => ({
    __proto__: dart.getFields(src__cupertino__theme._NoDefaultCupertinoThemeData.__proto__),
    brightness: dart.finalFieldType(ui$.Brightness),
    primaryColor: dart.finalFieldType(ui$.Color),
    primaryContrastingColor: dart.finalFieldType(ui$.Color),
    textTheme: dart.finalFieldType(src__cupertino__text_theme.CupertinoTextThemeData),
    barBackgroundColor: dart.finalFieldType(ui$.Color),
    scaffoldBackgroundColor: dart.finalFieldType(ui$.Color)
  }));
  dart.trackLibraries("packages/flutter_web/src/cupertino/activity_indicator.ddc", {
    "package:flutter_web/src/cupertino/colors.dart": src__cupertino__colors,
    "package:flutter_web/src/cupertino/activity_indicator.dart": src__cupertino__activity_indicator,
    "package:flutter_web/src/cupertino/button.dart": src__cupertino__button,
    "package:flutter_web/src/cupertino/icons.dart": src__cupertino__icons,
    "package:flutter_web/src/cupertino/localizations.dart": src__cupertino__localizations,
    "package:flutter_web/src/cupertino/page_scaffold.dart": src__cupertino__page_scaffold,
    "package:flutter_web/src/cupertino/route.dart": src__cupertino__route,
    "package:flutter_web/src/cupertino/nav_bar.dart": src__cupertino__nav_bar,
    "package:flutter_web/src/cupertino/text_theme.dart": src__cupertino__text_theme,
    "package:flutter_web/src/cupertino/theme.dart": src__cupertino__theme
  }, '{"version":3,"sourceRoot":"","sources":["colors.dart","activity_indicator.dart","button.dart","icons.dart","localizations.dart","page_scaffold.dart","route.dart","nav_bar.dart","text_theme.dart","theme.dart"],"names":[],"mappings":"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","file":"activity_indicator.ddc.js"}');
  // Exports:
  return {
    src__cupertino__colors: src__cupertino__colors,
    src__cupertino__activity_indicator: src__cupertino__activity_indicator,
    src__cupertino__button: src__cupertino__button,
    src__cupertino__icons: src__cupertino__icons,
    src__cupertino__localizations: src__cupertino__localizations,
    src__cupertino__page_scaffold: src__cupertino__page_scaffold,
    src__cupertino__route: src__cupertino__route,
    src__cupertino__nav_bar: src__cupertino__nav_bar,
    src__cupertino__text_theme: src__cupertino__text_theme,
    src__cupertino__theme: src__cupertino__theme
  };
});

//# sourceMappingURL=activity_indicator.ddc.js.map
