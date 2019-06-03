define(['dart_sdk', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, assertions, ui, animation, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__foundation__change_notifier = assertions.src__foundation__change_notifier;
  const ui$ = ui.ui;
  const src__rendering__custom_paint = animation.src__rendering__custom_paint;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__page_view = animation.src__widgets__page_view;
  const src__widgets__scroll_physics = animation.src__widgets__scroll_physics;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__transitions = animation.src__widgets__transitions;
  const src__widgets__scroll_notification = animation.src__widgets__scroll_notification;
  const src__widgets__notification_listener = animation.src__widgets__notification_listener;
  const src__widgets__binding = animation.src__widgets__binding;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const src__painting__fractional_offset = animation$.src__painting__fractional_offset;
  const src__painting__basic_types = animation$.src__painting__basic_types;
  const src__animation__curves = animation$.src__animation__curves;
  const transformer_page_view = Object.create(dart.library);
  const $_get = dartx._get;
  const $length = dartx.length;
  const $toInt = dartx.toInt;
  const $clamp = dartx.clamp;
  const $abs = dartx.abs;
  const $modulo = dartx['%'];
  let ListOfColor = () => (ListOfColor = dart.constFn(core.List$(ui$.Color)))();
  let WidgetAndTransformInfoToWidget = () => (WidgetAndTransformInfoToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.Widget, transformer_page_view.TransformInfo])))();
  let BuildContextAndintToWidget = () => (BuildContextAndintToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, core.int])))();
  let intTovoid = () => (intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))();
  let BuildContextAndWidgetToWidget = () => (BuildContextAndWidgetToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, src__widgets__framework.Widget])))();
  let ScrollNotificationTobool = () => (ScrollNotificationTobool = dart.constFn(dart.fnType(core.bool, [src__widgets__scroll_notification.ScrollNotification])))();
  let NotificationListenerOfScrollNotification = () => (NotificationListenerOfScrollNotification = dart.constFn(src__widgets__notification_listener.NotificationListener$(src__widgets__scroll_notification.ScrollNotification)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _completer = dart.privateName(transformer_page_view, "_completer");
  transformer_page_view.IndexController = class IndexController extends src__foundation__change_notifier.ChangeNotifier {
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
    get event() {
      return this[event];
    }
    set event(value) {
      this[event] = value;
    }
    move(index, opts) {
      let animation = opts && 'animation' in opts ? opts.animation : true;
      this.animation = animation != null ? animation : true;
      this.index = index;
      this.event = 0;
      this[_completer] = async.Completer.new();
      this.notifyListeners();
      return this[_completer].future;
    }
    next(opts) {
      let animation = opts && 'animation' in opts ? opts.animation : true;
      this.event = 1;
      this.animation = animation != null ? animation : true;
      this[_completer] = async.Completer.new();
      this.notifyListeners();
      return this[_completer].future;
    }
    previous(opts) {
      let animation = opts && 'animation' in opts ? opts.animation : true;
      this.event = -1;
      this.animation = animation != null ? animation : true;
      this[_completer] = async.Completer.new();
      this.notifyListeners();
      return this[_completer].future;
    }
    complete() {
      if (!dart.test(this[_completer].isCompleted)) {
        this[_completer].complete();
      }
    }
  };
  (transformer_page_view.IndexController.new = function() {
    this[_completer] = null;
    this[index] = null;
    this[animation$0] = null;
    this[event] = null;
    transformer_page_view.IndexController.__proto__.new.call(this);
  }).prototype = transformer_page_view.IndexController.prototype;
  dart.addTypeTests(transformer_page_view.IndexController);
  const index = Symbol("IndexController.index");
  const animation$0 = Symbol("IndexController.animation");
  const event = Symbol("IndexController.event");
  dart.setMethodSignature(transformer_page_view.IndexController, () => ({
    __proto__: dart.getMethods(transformer_page_view.IndexController.__proto__),
    move: dart.fnType(async.Future, [core.int], {animation: core.bool}),
    next: dart.fnType(async.Future, [], {animation: core.bool}),
    previous: dart.fnType(async.Future, [], {animation: core.bool}),
    complete: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(transformer_page_view.IndexController, () => ({
    __proto__: dart.getFields(transformer_page_view.IndexController.__proto__),
    [_completer]: dart.fieldType(async.Completer),
    index: dart.fieldType(core.int),
    animation: dart.fieldType(core.bool),
    event: dart.fieldType(core.int)
  }));
  dart.defineLazy(transformer_page_view.IndexController, {
    /*transformer_page_view.IndexController.NEXT*/get NEXT() {
      return 1;
    },
    /*transformer_page_view.IndexController.PREVIOUS*/get PREVIOUS() {
      return -1;
    },
    /*transformer_page_view.IndexController.MOVE*/get MOVE() {
      return 0;
    }
  });
  const _paint = dart.privateName(transformer_page_view, "_paint");
  transformer_page_view.ColorPainter = class ColorPainter extends src__rendering__custom_paint.CustomPainter {
    get info() {
      return this[info$];
    }
    set info(value) {
      super.info = value;
    }
    get colors() {
      return this[colors$];
    }
    set colors(value) {
      super.colors = value;
    }
    paint(canvas, size) {
      let index = this.info.fromIndex;
      this[_paint].color = this.colors[$_get](index);
      canvas.drawRect(new ui$.Rect.fromLTWH(0.0, 0.0, size.width, size.height), this[_paint]);
      if (dart.test(this.info.done)) {
        return;
      }
      let alpha = null;
      let color = null;
      let opacity = null;
      let position = this.info.position;
      if (dart.test(this.info.forward)) {
        if (dart.notNull(index) < dart.notNull(this.colors[$length]) - 1) {
          color = dart.notNull(this.colors[$_get](dart.notNull(index) + 1).value) & 16777215;
          opacity = dart.notNull(position) <= 0 ? -dart.notNull(position) / dart.notNull(this.info.viewportFraction) : 1 - dart.notNull(position) / dart.notNull(this.info.viewportFraction);
          if (dart.notNull(opacity) > 1) {
            opacity = dart.notNull(opacity) - 1.0;
          }
          if (dart.notNull(opacity) < 0) {
            opacity = dart.notNull(opacity) + 1.0;
          }
          alpha = (255 * dart.notNull(opacity))[$toInt]();
          this[_paint].color = new ui$.Color.new((dart.notNull(alpha) << 24 | dart.notNull(color)) >>> 0);
          canvas.drawRect(new ui$.Rect.fromLTWH(0.0, 0.0, size.width, size.height), this[_paint]);
        }
      } else {
        if (dart.notNull(index) > 0) {
          color = dart.notNull(this.colors[$_get](dart.notNull(index) - 1).value) & 16777215;
          opacity = dart.notNull(position) > 0 ? dart.notNull(position) / dart.notNull(this.info.viewportFraction) : 1 + dart.notNull(position) / dart.notNull(this.info.viewportFraction);
          if (dart.notNull(opacity) > 1) {
            opacity = dart.notNull(opacity) - 1.0;
          }
          if (dart.notNull(opacity) < 0) {
            opacity = dart.notNull(opacity) + 1.0;
          }
          alpha = (255 * dart.notNull(opacity))[$toInt]();
          this[_paint].color = new ui$.Color.new((dart.notNull(alpha) << 24 | dart.notNull(color)) >>> 0);
          canvas.drawRect(new ui$.Rect.fromLTWH(0.0, 0.0, size.width, size.height), this[_paint]);
        }
      }
    }
    shouldRepaint(oldDelegate) {
      transformer_page_view.ColorPainter._check(oldDelegate);
      return !dart.equals(oldDelegate.info, this.info);
    }
  };
  (transformer_page_view.ColorPainter.new = function(paint, info, colors) {
    this[_paint] = paint;
    this[info$] = info;
    this[colors$] = colors;
    transformer_page_view.ColorPainter.__proto__.new.call(this);
  }).prototype = transformer_page_view.ColorPainter.prototype;
  dart.addTypeTests(transformer_page_view.ColorPainter);
  const info$ = Symbol("ColorPainter.info");
  const colors$ = Symbol("ColorPainter.colors");
  dart.setMethodSignature(transformer_page_view.ColorPainter, () => ({
    __proto__: dart.getMethods(transformer_page_view.ColorPainter.__proto__),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setFieldSignature(transformer_page_view.ColorPainter, () => ({
    __proto__: dart.getFields(transformer_page_view.ColorPainter.__proto__),
    [_paint]: dart.finalFieldType(ui$.Paint),
    info: dart.finalFieldType(transformer_page_view.TransformInfo),
    colors: dart.finalFieldType(ListOfColor())
  }));
  transformer_page_view.ParallaxColor = class ParallaxColor extends src__widgets__framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get colors() {
      return this[colors$0];
    }
    set colors(value) {
      super.colors = value;
    }
    get info() {
      return this[info$0];
    }
    set info(value) {
      super.info = value;
    }
    createState() {
      return new transformer_page_view._ParallaxColorState.new();
    }
  };
  (transformer_page_view.ParallaxColor.new = function(opts) {
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let info = opts && 'info' in opts ? opts.info : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[colors$0] = colors;
    this[info$0] = info;
    this[child$] = child;
    transformer_page_view.ParallaxColor.__proto__.new.call(this);
  }).prototype = transformer_page_view.ParallaxColor.prototype;
  dart.addTypeTests(transformer_page_view.ParallaxColor);
  const child$ = Symbol("ParallaxColor.child");
  const colors$0 = Symbol("ParallaxColor.colors");
  const info$0 = Symbol("ParallaxColor.info");
  dart.setMethodSignature(transformer_page_view.ParallaxColor, () => ({
    __proto__: dart.getMethods(transformer_page_view.ParallaxColor.__proto__),
    createState: dart.fnType(src__widgets__framework.State$(src__widgets__framework.StatefulWidget), [])
  }));
  dart.setFieldSignature(transformer_page_view.ParallaxColor, () => ({
    __proto__: dart.getFields(transformer_page_view.ParallaxColor.__proto__),
    child: dart.finalFieldType(src__widgets__framework.Widget),
    colors: dart.finalFieldType(ListOfColor()),
    info: dart.finalFieldType(transformer_page_view.TransformInfo)
  }));
  transformer_page_view._ParallaxColorState = class _ParallaxColorState extends src__widgets__framework.State$(transformer_page_view.ParallaxColor) {
    build(context) {
      return new src__widgets__basic.CustomPaint.new({painter: new transformer_page_view.ColorPainter.new(this.paint, this.widget.info, this.widget.colors), child: this.widget.child});
    }
  };
  (transformer_page_view._ParallaxColorState.new = function() {
    this.paint = new ui$.Paint.new();
    transformer_page_view._ParallaxColorState.__proto__.new.call(this);
  }).prototype = transformer_page_view._ParallaxColorState.prototype;
  dart.addTypeTests(transformer_page_view._ParallaxColorState);
  dart.setMethodSignature(transformer_page_view._ParallaxColorState, () => ({
    __proto__: dart.getMethods(transformer_page_view._ParallaxColorState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(transformer_page_view._ParallaxColorState, () => ({
    __proto__: dart.getFields(transformer_page_view._ParallaxColorState.__proto__),
    paint: dart.fieldType(ui$.Paint)
  }));
  transformer_page_view.ParallaxContainer = class ParallaxContainer extends src__widgets__framework.StatelessWidget {
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get translationFactor() {
      return this[translationFactor$];
    }
    set translationFactor(value) {
      super.translationFactor = value;
    }
    get opacityFactor() {
      return this[opacityFactor$];
    }
    set opacityFactor(value) {
      super.opacityFactor = value;
    }
    build(context) {
      return new src__widgets__basic.Opacity.new({opacity: (1 - this.position[$abs]())[$clamp](0.0, 1.0) * dart.notNull(this.opacityFactor), child: new src__widgets__basic.Transform.translate({offset: new ui$.Offset.new(dart.notNull(this.position) * dart.notNull(this.translationFactor), 0.0), child: this.child})});
    }
  };
  (transformer_page_view.ParallaxContainer.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let position = opts && 'position' in opts ? opts.position : null;
    let translationFactor = opts && 'translationFactor' in opts ? opts.translationFactor : 100.0;
    let opacityFactor = opts && 'opacityFactor' in opts ? opts.opacityFactor : 1.0;
    this[child$0] = child;
    this[position$] = position;
    this[translationFactor$] = translationFactor;
    this[opacityFactor$] = opacityFactor;
    if (!(position != null)) dart.assertFailed();
    if (!(translationFactor != null)) dart.assertFailed();
    transformer_page_view.ParallaxContainer.__proto__.new.call(this);
  }).prototype = transformer_page_view.ParallaxContainer.prototype;
  dart.addTypeTests(transformer_page_view.ParallaxContainer);
  const child$0 = Symbol("ParallaxContainer.child");
  const position$ = Symbol("ParallaxContainer.position");
  const translationFactor$ = Symbol("ParallaxContainer.translationFactor");
  const opacityFactor$ = Symbol("ParallaxContainer.opacityFactor");
  dart.setMethodSignature(transformer_page_view.ParallaxContainer, () => ({
    __proto__: dart.getMethods(transformer_page_view.ParallaxContainer.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(transformer_page_view.ParallaxContainer, () => ({
    __proto__: dart.getFields(transformer_page_view.ParallaxContainer.__proto__),
    child: dart.finalFieldType(src__widgets__framework.Widget),
    position: dart.finalFieldType(core.double),
    translationFactor: dart.finalFieldType(core.double),
    opacityFactor: dart.finalFieldType(core.double)
  }));
  transformer_page_view.ParallaxImage = class ParallaxImage extends src__widgets__framework.StatelessWidget {
    get image() {
      return this[image];
    }
    set image(value) {
      super.image = value;
    }
    get imageFactor() {
      return this[imageFactor$];
    }
    set imageFactor(value) {
      super.imageFactor = value;
    }
    build(context) {
      return this.image;
    }
  };
  (transformer_page_view.ParallaxImage.asset = function(name, opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    let imageFactor = opts && 'imageFactor' in opts ? opts.imageFactor : 0.3;
    this[imageFactor$] = imageFactor;
    if (!(imageFactor != null)) dart.assertFailed();
    this[image] = new src__widgets__image.Image.asset(name, {fit: src__painting__box_fit.BoxFit.cover, alignment: new src__painting__fractional_offset.FractionalOffset.new(0.5 + dart.notNull(position) * dart.notNull(imageFactor), 0.5)});
    transformer_page_view.ParallaxImage.__proto__.new.call(this);
  }).prototype = transformer_page_view.ParallaxImage.prototype;
  dart.addTypeTests(transformer_page_view.ParallaxImage);
  const image = Symbol("ParallaxImage.image");
  const imageFactor$ = Symbol("ParallaxImage.imageFactor");
  dart.setMethodSignature(transformer_page_view.ParallaxImage, () => ({
    __proto__: dart.getMethods(transformer_page_view.ParallaxImage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(transformer_page_view.ParallaxImage, () => ({
    __proto__: dart.getFields(transformer_page_view.ParallaxImage.__proto__),
    image: dart.finalFieldType(src__widgets__image.Image),
    imageFactor: dart.finalFieldType(core.double)
  }));
  dart.defineLazy(transformer_page_view, {
    /*transformer_page_view.kMaxValue*/get kMaxValue() {
      return 2000000000;
    },
    /*transformer_page_view.kMiddleValue*/get kMiddleValue() {
      return 1000000000;
    },
    /*transformer_page_view.kDefaultTransactionDuration*/get kDefaultTransactionDuration() {
      return 300;
    }
  });
  transformer_page_view.TransformInfo = class TransformInfo extends core.Object {
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get position() {
      return this[position$0];
    }
    set position(value) {
      super.position = value;
    }
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get activeIndex() {
      return this[activeIndex$];
    }
    set activeIndex(value) {
      super.activeIndex = value;
    }
    get fromIndex() {
      return this[fromIndex$];
    }
    set fromIndex(value) {
      super.fromIndex = value;
    }
    get forward() {
      return this[forward$];
    }
    set forward(value) {
      super.forward = value;
    }
    get done() {
      return this[done$];
    }
    set done(value) {
      super.done = value;
    }
    get viewportFraction() {
      return this[viewportFraction$];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    get scrollDirection() {
      return this[scrollDirection$];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
  };
  (transformer_page_view.TransformInfo.new = function(opts) {
    let index = opts && 'index' in opts ? opts.index : null;
    let position = opts && 'position' in opts ? opts.position : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let activeIndex = opts && 'activeIndex' in opts ? opts.activeIndex : null;
    let fromIndex = opts && 'fromIndex' in opts ? opts.fromIndex : null;
    let forward = opts && 'forward' in opts ? opts.forward : null;
    let done = opts && 'done' in opts ? opts.done : null;
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
    this[index$] = index;
    this[position$0] = position;
    this[width$] = width;
    this[height$] = height;
    this[activeIndex$] = activeIndex;
    this[fromIndex$] = fromIndex;
    this[forward$] = forward;
    this[done$] = done;
    this[viewportFraction$] = viewportFraction;
    this[scrollDirection$] = scrollDirection;
  }).prototype = transformer_page_view.TransformInfo.prototype;
  dart.addTypeTests(transformer_page_view.TransformInfo);
  const width$ = Symbol("TransformInfo.width");
  const height$ = Symbol("TransformInfo.height");
  const position$0 = Symbol("TransformInfo.position");
  const index$ = Symbol("TransformInfo.index");
  const activeIndex$ = Symbol("TransformInfo.activeIndex");
  const fromIndex$ = Symbol("TransformInfo.fromIndex");
  const forward$ = Symbol("TransformInfo.forward");
  const done$ = Symbol("TransformInfo.done");
  const viewportFraction$ = Symbol("TransformInfo.viewportFraction");
  const scrollDirection$ = Symbol("TransformInfo.scrollDirection");
  dart.setFieldSignature(transformer_page_view.TransformInfo, () => ({
    __proto__: dart.getFields(transformer_page_view.TransformInfo.__proto__),
    width: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double),
    position: dart.finalFieldType(core.double),
    index: dart.finalFieldType(core.int),
    activeIndex: dart.finalFieldType(core.int),
    fromIndex: dart.finalFieldType(core.int),
    forward: dart.finalFieldType(core.bool),
    done: dart.finalFieldType(core.bool),
    viewportFraction: dart.finalFieldType(core.double),
    scrollDirection: dart.finalFieldType(src__painting__basic_types.Axis)
  }));
  transformer_page_view.PageTransformer = class PageTransformer extends core.Object {
    get reverse() {
      return this[reverse$];
    }
    set reverse(value) {
      super.reverse = value;
    }
  };
  (transformer_page_view.PageTransformer.new = function(opts) {
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    this[reverse$] = reverse;
  }).prototype = transformer_page_view.PageTransformer.prototype;
  dart.addTypeTests(transformer_page_view.PageTransformer);
  const reverse$ = Symbol("PageTransformer.reverse");
  dart.setFieldSignature(transformer_page_view.PageTransformer, () => ({
    __proto__: dart.getFields(transformer_page_view.PageTransformer.__proto__),
    reverse: dart.finalFieldType(core.bool)
  }));
  transformer_page_view.PageTransformerBuilder = class PageTransformerBuilder extends transformer_page_view.PageTransformer {
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    transform(child, info) {
      return this.builder(child, info);
    }
  };
  (transformer_page_view.PageTransformerBuilder.new = function(opts) {
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    this[builder$] = builder;
    if (!(builder != null)) dart.assertFailed();
    transformer_page_view.PageTransformerBuilder.__proto__.new.call(this, {reverse: reverse});
  }).prototype = transformer_page_view.PageTransformerBuilder.prototype;
  dart.addTypeTests(transformer_page_view.PageTransformerBuilder);
  const builder$ = Symbol("PageTransformerBuilder.builder");
  dart.setMethodSignature(transformer_page_view.PageTransformerBuilder, () => ({
    __proto__: dart.getMethods(transformer_page_view.PageTransformerBuilder.__proto__),
    transform: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.Widget, transformer_page_view.TransformInfo])
  }));
  dart.setFieldSignature(transformer_page_view.PageTransformerBuilder, () => ({
    __proto__: dart.getFields(transformer_page_view.PageTransformerBuilder.__proto__),
    builder: dart.finalFieldType(WidgetAndTransformInfoToWidget())
  }));
  transformer_page_view.TransformerPageController = class TransformerPageController extends src__widgets__page_view.PageController {
    get loop() {
      return this[loop$];
    }
    set loop(value) {
      super.loop = value;
    }
    get itemCount() {
      return this[itemCount$];
    }
    set itemCount(value) {
      super.itemCount = value;
    }
    get reverse() {
      return this[reverse$0];
    }
    set reverse(value) {
      super.reverse = value;
    }
    getRenderIndexFromRealIndex(index) {
      return core.int._check(transformer_page_view.TransformerPageController._getRenderIndexFromRealIndex(index, this.loop, this.itemCount, this.reverse));
    }
    getRealItemCount() {
      if (this.itemCount === 0) return 0;
      return dart.test(this.loop) ? dart.notNull(this.itemCount) + 2000000000 : this.itemCount;
    }
    static _getRenderIndexFromRealIndex(index, loop, itemCount, reverse) {
      if (itemCount === 0) return 0;
      let renderIndex = null;
      if (dart.test(loop)) {
        renderIndex = dart.asInt(dart.notNull(index) - 1000000000);
        renderIndex = renderIndex[$modulo](itemCount);
        if (dart.notNull(renderIndex) < 0) {
          renderIndex = dart.notNull(renderIndex) + dart.notNull(itemCount);
        }
      } else {
        renderIndex = dart.asInt(index);
      }
      if (dart.test(reverse)) {
        renderIndex = dart.notNull(itemCount) - dart.notNull(renderIndex) - 1;
      }
      return renderIndex;
    }
    get realPage() {
      let page = null;
      if (this.position.maxScrollExtent == null || this.position.minScrollExtent == null) {
        page = 0.0;
      } else {
        page = super.page;
      }
      return page;
    }
    static _getRenderPageFromRealPage(page, loop, itemCount, reverse) {
      let renderPage = null;
      if (dart.test(loop)) {
        renderPage = dart.notNull(page) - 1000000000;
        renderPage = renderPage[$modulo](itemCount);
        if (dart.notNull(renderPage) < 0) {
          renderPage = dart.notNull(renderPage) + dart.notNull(itemCount);
        }
      } else {
        renderPage = page;
      }
      if (dart.test(reverse)) {
        renderPage = dart.notNull(itemCount) - dart.notNull(renderPage) - 1;
      }
      return renderPage;
    }
    get page() {
      return core.double._check(dart.test(this.loop) ? transformer_page_view.TransformerPageController._getRenderPageFromRealPage(this.realPage, this.loop, this.itemCount, this.reverse) : this.realPage);
    }
    getRealIndexFromRenderIndex(index) {
      return transformer_page_view.TransformerPageController._getRealIndexFromRenderIndex(index, this.loop, this.itemCount, this.reverse);
    }
    static _getRealIndexFromRenderIndex(index, loop, itemCount, reverse) {
      let result = dart.asInt(dart.test(reverse) ? dart.notNull(itemCount) - dart.notNull(index) - 1 : index);
      if (dart.test(loop)) {
        result = dart.notNull(result) + 1000000000;
      }
      return result;
    }
  };
  (transformer_page_view.TransformerPageController.new = function(opts) {
    let initialPage = opts && 'initialPage' in opts ? opts.initialPage : 0;
    let keepPage = opts && 'keepPage' in opts ? opts.keepPage : true;
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1.0;
    let loop = opts && 'loop' in opts ? opts.loop : false;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    this[loop$] = loop;
    this[itemCount$] = itemCount;
    this[reverse$0] = reverse;
    transformer_page_view.TransformerPageController.__proto__.new.call(this, {initialPage: transformer_page_view.TransformerPageController._getRealIndexFromRenderIndex((() => {
        let l = initialPage;
        return l != null ? l : 0;
      })(), loop, itemCount, reverse), keepPage: keepPage, viewportFraction: viewportFraction});
  }).prototype = transformer_page_view.TransformerPageController.prototype;
  dart.addTypeTests(transformer_page_view.TransformerPageController);
  const loop$ = Symbol("TransformerPageController.loop");
  const itemCount$ = Symbol("TransformerPageController.itemCount");
  const reverse$0 = Symbol("TransformerPageController.reverse");
  dart.setMethodSignature(transformer_page_view.TransformerPageController, () => ({
    __proto__: dart.getMethods(transformer_page_view.TransformerPageController.__proto__),
    getRenderIndexFromRealIndex: dart.fnType(core.int, [core.num]),
    getRealItemCount: dart.fnType(core.int, []),
    getRealIndexFromRenderIndex: dart.fnType(core.int, [core.num])
  }));
  dart.setGetterSignature(transformer_page_view.TransformerPageController, () => ({
    __proto__: dart.getGetters(transformer_page_view.TransformerPageController.__proto__),
    realPage: core.double
  }));
  dart.setFieldSignature(transformer_page_view.TransformerPageController, () => ({
    __proto__: dart.getFields(transformer_page_view.TransformerPageController.__proto__),
    loop: dart.finalFieldType(core.bool),
    itemCount: dart.finalFieldType(core.int),
    reverse: dart.finalFieldType(core.bool)
  }));
  transformer_page_view.TransformerPageView = class TransformerPageView extends src__widgets__framework.StatefulWidget {
    get transformer() {
      return this[transformer$];
    }
    set transformer(value) {
      super.transformer = value;
    }
    get scrollDirection() {
      return this[scrollDirection$0];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
    get physics() {
      return this[physics$];
    }
    set physics(value) {
      super.physics = value;
    }
    get pageSnapping() {
      return this[pageSnapping$];
    }
    set pageSnapping(value) {
      super.pageSnapping = value;
    }
    get onPageChanged() {
      return this[onPageChanged$];
    }
    set onPageChanged(value) {
      super.onPageChanged = value;
    }
    get itemBuilder() {
      return this[itemBuilder$];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    get pageController() {
      return this[pageController$];
    }
    set pageController(value) {
      super.pageController = value;
    }
    get loop() {
      return this[loop$0];
    }
    set loop(value) {
      super.loop = value;
    }
    get itemCount() {
      return this[itemCount$0];
    }
    set itemCount(value) {
      super.itemCount = value;
    }
    get viewportFraction() {
      return this[viewportFraction$0];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    get index() {
      return this[index$0];
    }
    set index(value) {
      super.index = value;
    }
    static children(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let index = opts && 'index' in opts ? opts.index : null;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : src__animation__curves.Curves.ease;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1.0;
      let loop = opts && 'loop' in opts ? opts.loop : false;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : src__painting__basic_types.Axis.horizontal;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let pageSnapping = opts && 'pageSnapping' in opts ? opts.pageSnapping : true;
      let onPageChanged = opts && 'onPageChanged' in opts ? opts.onPageChanged : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let transformer = opts && 'transformer' in opts ? opts.transformer : null;
      let children = opts && 'children' in opts ? opts.children : null;
      let pageController = opts && 'pageController' in opts ? opts.pageController : null;
      if (!(children != null)) dart.assertFailed();
      return new transformer_page_view.TransformerPageView.new({itemCount: children[$length], itemBuilder: dart.fn((context, index) => children[$_get](index), BuildContextAndintToWidget()), pageController: pageController, transformer: transformer, pageSnapping: pageSnapping, key: key, index: index, duration: duration, curve: curve, viewportFraction: viewportFraction, scrollDirection: scrollDirection, physics: physics, onPageChanged: onPageChanged, controller: controller});
    }
    createState() {
      return new transformer_page_view._TransformerPageViewState.new();
    }
    static getRealIndexFromRenderIndex(opts) {
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let index = opts && 'index' in opts ? opts.index : null;
      let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
      let loop = opts && 'loop' in opts ? opts.loop : null;
      let initPage = dart.test(reverse) ? dart.notNull(itemCount) - dart.notNull(index) - 1 : index;
      if (dart.test(loop)) {
        initPage = dart.notNull(initPage) + 1000000000;
      }
      return initPage;
    }
    static createPageController(opts) {
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let index = opts && 'index' in opts ? opts.index : null;
      let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
      let loop = opts && 'loop' in opts ? opts.loop : null;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : null;
      return new src__widgets__page_view.PageController.new({initialPage: transformer_page_view.TransformerPageView.getRealIndexFromRenderIndex({reverse: reverse, index: index, itemCount: itemCount, loop: loop}), viewportFraction: viewportFraction});
    }
  };
  (transformer_page_view.TransformerPageView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let curve = opts && 'curve' in opts ? opts.curve : src__animation__curves.Curves.ease;
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1.0;
    let loop = opts && 'loop' in opts ? opts.loop : false;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : src__painting__basic_types.Axis.horizontal;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let pageSnapping = opts && 'pageSnapping' in opts ? opts.pageSnapping : true;
    let onPageChanged = opts && 'onPageChanged' in opts ? opts.onPageChanged : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let transformer = opts && 'transformer' in opts ? opts.transformer : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let pageController = opts && 'pageController' in opts ? opts.pageController : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    this[index$0] = index;
    this[curve$] = curve;
    this[viewportFraction$0] = viewportFraction;
    this[loop$0] = loop;
    this[scrollDirection$0] = scrollDirection;
    this[physics$] = physics;
    this[pageSnapping$] = pageSnapping;
    this[onPageChanged$] = onPageChanged;
    this[controller$] = controller;
    this[transformer$] = transformer;
    this[itemBuilder$] = itemBuilder;
    this[pageController$] = pageController;
    this[itemCount$0] = itemCount;
    if (!(itemCount != null)) dart.assertFailed();
    if (!(itemCount === 0 || itemBuilder != null || transformer != null)) dart.assertFailed();
    let l = duration;
    this[duration$] = l != null ? l : new core.Duration.new({milliseconds: 300});
    transformer_page_view.TransformerPageView.__proto__.new.call(this, {key: key});
  }).prototype = transformer_page_view.TransformerPageView.prototype;
  dart.addTypeTests(transformer_page_view.TransformerPageView);
  const transformer$ = Symbol("TransformerPageView.transformer");
  const scrollDirection$0 = Symbol("TransformerPageView.scrollDirection");
  const physics$ = Symbol("TransformerPageView.physics");
  const pageSnapping$ = Symbol("TransformerPageView.pageSnapping");
  const onPageChanged$ = Symbol("TransformerPageView.onPageChanged");
  const itemBuilder$ = Symbol("TransformerPageView.itemBuilder");
  const controller$ = Symbol("TransformerPageView.controller");
  const duration$ = Symbol("TransformerPageView.duration");
  const curve$ = Symbol("TransformerPageView.curve");
  const pageController$ = Symbol("TransformerPageView.pageController");
  const loop$0 = Symbol("TransformerPageView.loop");
  const itemCount$0 = Symbol("TransformerPageView.itemCount");
  const viewportFraction$0 = Symbol("TransformerPageView.viewportFraction");
  const index$0 = Symbol("TransformerPageView.index");
  dart.setMethodSignature(transformer_page_view.TransformerPageView, () => ({
    __proto__: dart.getMethods(transformer_page_view.TransformerPageView.__proto__),
    createState: dart.fnType(src__widgets__framework.State$(src__widgets__framework.StatefulWidget), [])
  }));
  dart.setFieldSignature(transformer_page_view.TransformerPageView, () => ({
    __proto__: dart.getFields(transformer_page_view.TransformerPageView.__proto__),
    transformer: dart.finalFieldType(transformer_page_view.PageTransformer),
    scrollDirection: dart.finalFieldType(src__painting__basic_types.Axis),
    physics: dart.finalFieldType(src__widgets__scroll_physics.ScrollPhysics),
    pageSnapping: dart.finalFieldType(core.bool),
    onPageChanged: dart.finalFieldType(intTovoid()),
    itemBuilder: dart.finalFieldType(BuildContextAndintToWidget()),
    controller: dart.finalFieldType(transformer_page_view.IndexController),
    duration: dart.finalFieldType(core.Duration),
    curve: dart.finalFieldType(src__animation__curves.Curve),
    pageController: dart.finalFieldType(transformer_page_view.TransformerPageController),
    loop: dart.finalFieldType(core.bool),
    itemCount: dart.finalFieldType(core.int),
    viewportFraction: dart.finalFieldType(core.double),
    index: dart.finalFieldType(core.int)
  }));
  const _size = dart.privateName(transformer_page_view, "_size");
  const _activeIndex = dart.privateName(transformer_page_view, "_activeIndex");
  const _currentPixels = dart.privateName(transformer_page_view, "_currentPixels");
  const _done = dart.privateName(transformer_page_view, "_done");
  const _fromIndex = dart.privateName(transformer_page_view, "_fromIndex");
  const _transformer = dart.privateName(transformer_page_view, "_transformer");
  const _pageController = dart.privateName(transformer_page_view, "_pageController");
  const _controller = dart.privateName(transformer_page_view, "_controller");
  const _buildItemNormal = dart.privateName(transformer_page_view, "_buildItemNormal");
  const _buildItem = dart.privateName(transformer_page_view, "_buildItem");
  const _calcCurrentPixels = dart.privateName(transformer_page_view, "_calcCurrentPixels");
  const _onIndexChanged = dart.privateName(transformer_page_view, "_onIndexChanged");
  const _onGetSize = dart.privateName(transformer_page_view, "_onGetSize");
  const _calcNextIndex = dart.privateName(transformer_page_view, "_calcNextIndex");
  transformer_page_view._TransformerPageViewState = class _TransformerPageViewState extends src__widgets__framework.State$(transformer_page_view.TransformerPageView) {
    [_buildItemNormal](context, index) {
      let renderIndex = this[_pageController].getRenderIndexFromRealIndex(index);
      let child = this.widget.itemBuilder(context, renderIndex);
      return child;
    }
    [_buildItem](context, index) {
      return new src__widgets__transitions.AnimatedBuilder.new({animation: this[_pageController], builder: dart.fn((c, w) => {
          let renderIndex = this[_pageController].getRenderIndexFromRealIndex(index);
          let child = null;
          if (this.widget.itemBuilder != null) {
            child = this.widget.itemBuilder(context, renderIndex);
          }
          if (child == null) {
            child = new src__widgets__container.Container.new();
          }
          if (this[_size] == null) {
            return child != null ? child : new src__widgets__container.Container.new();
          }
          let position = null;
          let page = this[_pageController].realPage;
          if (dart.test(this[_transformer].reverse)) {
            position = dart.notNull(page) - dart.notNull(index);
          } else {
            position = dart.notNull(index) - dart.notNull(page);
          }
          position = dart.notNull(position) * dart.notNull(this.widget.viewportFraction);
          let info = new transformer_page_view.TransformInfo.new({index: renderIndex, width: this[_size].width, height: this[_size].height, position: position[$clamp](-1.0, 1.0), activeIndex: this[_pageController].getRenderIndexFromRealIndex(this[_activeIndex]), fromIndex: this[_fromIndex], forward: dart.notNull(this[_pageController].position.pixels) - dart.notNull(this[_currentPixels]) >= 0, done: this[_done], scrollDirection: this.widget.scrollDirection, viewportFraction: this.widget.viewportFraction});
          return this[_transformer].transform(child, info);
        }, BuildContextAndWidgetToWidget())});
    }
    [_calcCurrentPixels]() {
      this[_currentPixels] = dart.notNull(this[_pageController].getRenderIndexFromRealIndex(this[_activeIndex])) * dart.notNull(this[_pageController].position.viewportDimension) * dart.notNull(this.widget.viewportFraction);
      return this[_currentPixels];
    }
    build(context) {
      let builder = this[_transformer] == null ? dart.bind(this, _buildItemNormal) : dart.bind(this, _buildItem);
      let child = new src__widgets__page_view.PageView.builder({itemBuilder: builder, itemCount: this[_pageController].getRealItemCount(), onPageChanged: dart.bind(this, _onIndexChanged), controller: this[_pageController], scrollDirection: this.widget.scrollDirection, physics: this.widget.physics, pageSnapping: this.widget.pageSnapping, reverse: this[_pageController].reverse});
      if (this[_transformer] == null) {
        return child;
      }
      return new (NotificationListenerOfScrollNotification()).new({onNotification: dart.fn(notification => {
          if (src__widgets__scroll_notification.ScrollStartNotification.is(notification)) {
            this[_calcCurrentPixels]();
            this[_done] = false;
            this[_fromIndex] = this[_activeIndex];
          } else if (src__widgets__scroll_notification.ScrollEndNotification.is(notification)) {
            this[_calcCurrentPixels]();
            this[_fromIndex] = this[_activeIndex];
            this[_done] = true;
          }
          return false;
        }, ScrollNotificationTobool()), child: child});
    }
    [_onIndexChanged](index) {
      this[_activeIndex] = index;
      if (this.widget.onPageChanged != null) {
        this.widget.onPageChanged(this[_pageController].getRenderIndexFromRealIndex(index));
      }
    }
    [_onGetSize](_) {
      let size = null;
      if (this.context == null) {
        this.onGetSize(size);
        return;
      }
      let renderObject = this.context.findRenderObject();
      if (renderObject != null) {
        let bounds = renderObject.paintBounds;
        if (bounds != null) {
          size = bounds.size;
        }
      }
      this[_calcCurrentPixels]();
      this.onGetSize(size);
    }
    onGetSize(size) {
      if (dart.test(this.mounted)) {
        this.setState(dart.fn(() => {
          this[_size] = size;
        }, VoidToNull()));
      }
    }
    initState() {
      this[_transformer] = this.widget.transformer;
      this[_pageController] = this.widget.pageController;
      if (this[_pageController] == null) {
        this[_pageController] = new transformer_page_view.TransformerPageController.new({initialPage: this.widget.index, itemCount: this.widget.itemCount, loop: this.widget.loop, reverse: this.widget.transformer == null ? false : this.widget.transformer.reverse});
      }
      this[_fromIndex] = this[_activeIndex] = this[_pageController].initialPage;
      this[_controller] = this.getNotifier();
      if (this[_controller] != null) {
        this[_controller].addListener(dart.bind(this, 'onChangeNotifier'));
      }
      super.initState();
    }
    didUpdateWidget(oldWidget) {
      transformer_page_view.TransformerPageView._check(oldWidget);
      this[_transformer] = this.widget.transformer;
      let index = this.widget.index != null ? this.widget.index : 0;
      let created = false;
      if (!dart.equals(this[_pageController], this.widget.pageController)) {
        if (this.widget.pageController != null) {
          this[_pageController] = this.widget.pageController;
        } else {
          created = true;
          this[_pageController] = new transformer_page_view.TransformerPageController.new({initialPage: this.widget.index, itemCount: this.widget.itemCount, loop: this.widget.loop, reverse: this.widget.transformer == null ? false : this.widget.transformer.reverse});
        }
      }
      if (this[_pageController].getRenderIndexFromRealIndex(this[_activeIndex]) !== index) {
        this[_fromIndex] = this[_activeIndex] = this[_pageController].initialPage;
        if (!created) {
          let initPage = this[_pageController].getRealIndexFromRenderIndex(index);
          this[_pageController].animateToPage(initPage, {duration: this.widget.duration, curve: this.widget.curve});
        }
      }
      if (this[_transformer] != null) src__widgets__binding.WidgetsBinding.instance.addPostFrameCallback(dart.bind(this, _onGetSize));
      if (!dart.equals(this[_controller], this.getNotifier())) {
        if (this[_controller] != null) {
          this[_controller].removeListener(dart.bind(this, 'onChangeNotifier'));
        }
        this[_controller] = this.getNotifier();
        if (this[_controller] != null) {
          this[_controller].addListener(dart.bind(this, 'onChangeNotifier'));
        }
      }
      super.didUpdateWidget(oldWidget);
    }
    didChangeDependencies() {
      if (this[_transformer] != null) src__widgets__binding.WidgetsBinding.instance.addPostFrameCallback(dart.bind(this, _onGetSize));
      super.didChangeDependencies();
    }
    getNotifier() {
      return this.widget.controller;
    }
    [_calcNextIndex](next) {
      let currentIndex = this[_activeIndex];
      if (dart.test(this[_pageController].reverse)) {
        if (dart.test(next)) {
          currentIndex = dart.notNull(currentIndex) - 1;
        } else {
          currentIndex = dart.notNull(currentIndex) + 1;
        }
      } else {
        if (dart.test(next)) {
          currentIndex = dart.notNull(currentIndex) + 1;
        } else {
          currentIndex = dart.notNull(currentIndex) - 1;
        }
      }
      if (!dart.test(this[_pageController].loop)) {
        if (dart.notNull(currentIndex) >= dart.notNull(this[_pageController].itemCount)) {
          currentIndex = 0;
        } else if (dart.notNull(currentIndex) < 0) {
          currentIndex = dart.notNull(this[_pageController].itemCount) - 1;
        }
      }
      return currentIndex;
    }
    onChangeNotifier() {
      let event = this.widget.controller.event;
      let index = null;
      switch (event) {
        case transformer_page_view.IndexController.MOVE:
        {
          {
            index = this[_pageController].getRealIndexFromRenderIndex(this.widget.controller.index);
          }
          break;
        }
        case transformer_page_view.IndexController.PREVIOUS:
        case transformer_page_view.IndexController.NEXT:
        {
          {
            index = this[_calcNextIndex](event === transformer_page_view.IndexController.NEXT);
          }
          break;
        }
        default:
        {
          return;
        }
      }
      if (dart.test(this.widget.controller.animation)) {
        this[_pageController].animateToPage(index, {duration: this.widget.duration, curve: this.widget.curve != null ? this.widget.curve : src__animation__curves.Curves.ease}).whenComplete(dart.bind(this.widget.controller, 'complete'));
      } else {
        this[_pageController].jumpToPage(index);
        this.widget.controller.complete();
      }
    }
    dispose() {
      super.dispose();
      if (this[_controller] != null) {
        this[_controller].removeListener(dart.bind(this, 'onChangeNotifier'));
      }
    }
  };
  (transformer_page_view._TransformerPageViewState.new = function() {
    this[_size] = null;
    this[_activeIndex] = null;
    this[_currentPixels] = null;
    this[_done] = false;
    this[_fromIndex] = null;
    this[_transformer] = null;
    this[_pageController] = null;
    this[_controller] = null;
    transformer_page_view._TransformerPageViewState.__proto__.new.call(this);
  }).prototype = transformer_page_view._TransformerPageViewState.prototype;
  dart.addTypeTests(transformer_page_view._TransformerPageViewState);
  dart.setMethodSignature(transformer_page_view._TransformerPageViewState, () => ({
    __proto__: dart.getMethods(transformer_page_view._TransformerPageViewState.__proto__),
    [_buildItemNormal]: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, core.int]),
    [_buildItem]: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, core.int]),
    [_calcCurrentPixels]: dart.fnType(core.double, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    [_onIndexChanged]: dart.fnType(dart.void, [core.int]),
    [_onGetSize]: dart.fnType(dart.void, [dart.dynamic]),
    onGetSize: dart.fnType(dart.void, [ui$.Size]),
    initState: dart.fnType(dart.void, []),
    didChangeDependencies: dart.fnType(dart.void, []),
    getNotifier: dart.fnType(src__foundation__change_notifier.ChangeNotifier, []),
    [_calcNextIndex]: dart.fnType(core.int, [core.bool]),
    onChangeNotifier: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(transformer_page_view._TransformerPageViewState, () => ({
    __proto__: dart.getFields(transformer_page_view._TransformerPageViewState.__proto__),
    [_size]: dart.fieldType(ui$.Size),
    [_activeIndex]: dart.fieldType(core.int),
    [_currentPixels]: dart.fieldType(core.double),
    [_done]: dart.fieldType(core.bool),
    [_fromIndex]: dart.fieldType(core.int),
    [_transformer]: dart.fieldType(transformer_page_view.PageTransformer),
    [_pageController]: dart.fieldType(transformer_page_view.TransformerPageController),
    [_controller]: dart.fieldType(src__foundation__change_notifier.ChangeNotifier)
  }));
  dart.trackLibraries("packages/flutter_web.examples.hello_world/transformer_page_view.ddc", {
    "package:flutter_web.examples.hello_world/transformer_page_view.dart": transformer_page_view
  }, '{"version":3,"sourceRoot":"","sources":["transformer_page_view.dart"],"names":[],"mappings":"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","file":"transformer_page_view.ddc.js"}');
  // Exports:
  return {
    transformer_page_view: transformer_page_view
  };
});

//# sourceMappingURL=transformer_page_view.ddc.js.map
