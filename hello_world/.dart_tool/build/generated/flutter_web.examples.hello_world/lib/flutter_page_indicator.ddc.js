define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation', 'packages/flutter_web/material'], function(dart_sdk, ui, animation, material) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const src__rendering__custom_paint = animation.src__rendering__custom_paint;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__page_view = animation.src__widgets__page_view;
  const src__material__colors = material.src__material__colors;
  const flutter_page_indicator = Object.create(dart.library);
  const $abs = dartx.abs;
  const $floor = dartx.floor;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _paint = dart.privateName(flutter_page_indicator, "_paint");
  const _shouldSkip = dart.privateName(flutter_page_indicator, "_shouldSkip");
  flutter_page_indicator.BasePainter = class BasePainter extends src__rendering__custom_paint.CustomPainter {
    get widget() {
      return this[widget$];
    }
    set widget(value) {
      super.widget = value;
    }
    get page() {
      return this[page$];
    }
    set page(value) {
      super.page = value;
    }
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    lerp(begin, end, progress) {
      return dart.notNull(begin) + (dart.notNull(end) - dart.notNull(begin)) * dart.notNull(progress);
    }
    [_shouldSkip](index) {
      return false;
    }
    paint(canvas, size) {
      {
        this[_paint].color = this.widget.color;
        let space = this.widget.space;
        let size = this.widget.size;
        let radius = dart.notNull(size) / 2;
        for (let i = 0, c = this.widget.count; i < dart.notNull(c); ++i) {
          if (dart.test(this[_shouldSkip](i))) {
            continue;
          }
          canvas.drawCircle(new ui$.Offset.new(i * (dart.notNull(size) + dart.notNull(space)) + radius, radius), radius, this[_paint]);
        }
        let page = this.page;
        if (dart.notNull(page) < dart.notNull(this.index)) {
          page = 0.0;
        }
        this[_paint].color = this.widget.activeColor;
        this.draw(canvas, space, size, radius);
      }
    }
    shouldRepaint(oldDelegate) {
      flutter_page_indicator.BasePainter._check(oldDelegate);
      return oldDelegate.page != this.page;
    }
  };
  (flutter_page_indicator.BasePainter.new = function(widget, page, index, paint) {
    this[widget$] = widget;
    this[page$] = page;
    this[index$] = index;
    this[_paint] = paint;
    flutter_page_indicator.BasePainter.__proto__.new.call(this);
  }).prototype = flutter_page_indicator.BasePainter.prototype;
  dart.addTypeTests(flutter_page_indicator.BasePainter);
  const widget$ = Symbol("BasePainter.widget");
  const page$ = Symbol("BasePainter.page");
  const index$ = Symbol("BasePainter.index");
  dart.setMethodSignature(flutter_page_indicator.BasePainter, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.BasePainter.__proto__),
    lerp: dart.fnType(core.double, [core.double, core.double, core.double]),
    [_shouldSkip]: dart.fnType(core.bool, [core.int]),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setFieldSignature(flutter_page_indicator.BasePainter, () => ({
    __proto__: dart.getFields(flutter_page_indicator.BasePainter.__proto__),
    widget: dart.finalFieldType(flutter_page_indicator.PageIndicator),
    page: dart.finalFieldType(core.double),
    index: dart.finalFieldType(core.int),
    [_paint]: dart.finalFieldType(ui$.Paint)
  }));
  flutter_page_indicator.WarmPainter = class WarmPainter extends flutter_page_indicator.BasePainter {
    draw(canvas, space, size, radius) {
      let progress = dart.notNull(this.page) - dart.notNull(this.index);
      let distance = dart.notNull(size) + dart.notNull(space);
      let start = dart.notNull(this.index) * (dart.notNull(size) + dart.notNull(space));
      if (progress > 0.5) {
        let right = start + dart.notNull(size) + distance;
        let left = dart.notNull(this.index) * distance + distance * (progress - 0.5) * 2;
        canvas.drawRRect(new ui$.RRect.fromLTRBR(left, 0.0, right, size, new ui$.Radius.circular(radius)), this[_paint]);
      } else {
        let right = start + dart.notNull(size) + distance * progress * 2;
        canvas.drawRRect(new ui$.RRect.fromLTRBR(start, 0.0, right, size, new ui$.Radius.circular(radius)), this[_paint]);
      }
    }
  };
  (flutter_page_indicator.WarmPainter.new = function(widget, page, index, paint) {
    flutter_page_indicator.WarmPainter.__proto__.new.call(this, widget, page, index, paint);
  }).prototype = flutter_page_indicator.WarmPainter.prototype;
  dart.addTypeTests(flutter_page_indicator.WarmPainter);
  dart.setMethodSignature(flutter_page_indicator.WarmPainter, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.WarmPainter.__proto__),
    draw: dart.fnType(dart.void, [ui$.Canvas, core.double, core.double, core.double])
  }));
  flutter_page_indicator.DropPainter = class DropPainter extends flutter_page_indicator.BasePainter {
    draw(canvas, space, size, radius) {
      let progress = dart.notNull(this.page) - dart.notNull(this.index);
      let dropHeight = this.widget.dropHeight;
      let rate = (0.5 - progress)[$abs]() * 2;
      let scale = this.widget.scale;
      canvas.drawCircle(new ui$.Offset.new(dart.notNull(radius) + dart.notNull(this.page) * (dart.notNull(size) + dart.notNull(space)), dart.notNull(radius) - dart.notNull(dropHeight) * (1 - rate)), dart.notNull(radius) * (dart.notNull(scale) + rate * (1.0 - dart.notNull(scale))), this[_paint]);
    }
  };
  (flutter_page_indicator.DropPainter.new = function(widget, page, index, paint) {
    flutter_page_indicator.DropPainter.__proto__.new.call(this, widget, page, index, paint);
  }).prototype = flutter_page_indicator.DropPainter.prototype;
  dart.addTypeTests(flutter_page_indicator.DropPainter);
  dart.setMethodSignature(flutter_page_indicator.DropPainter, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.DropPainter.__proto__),
    draw: dart.fnType(dart.void, [ui$.Canvas, core.double, core.double, core.double])
  }));
  flutter_page_indicator.NonePainter = class NonePainter extends flutter_page_indicator.BasePainter {
    draw(canvas, space, size, radius) {
      let progress = dart.notNull(this.page) - dart.notNull(this.index);
      let secondOffset = this.index === dart.notNull(this.widget.count) - 1 ? radius : dart.notNull(radius) + (dart.notNull(this.index) + 1) * (dart.notNull(size) + dart.notNull(space));
      if (progress > 0.5) {
        canvas.drawCircle(new ui$.Offset.new(secondOffset, radius), radius, this[_paint]);
      } else {
        canvas.drawCircle(new ui$.Offset.new(dart.notNull(radius) + dart.notNull(this.index) * (dart.notNull(size) + dart.notNull(space)), radius), radius, this[_paint]);
      }
    }
  };
  (flutter_page_indicator.NonePainter.new = function(widget, page, index, paint) {
    flutter_page_indicator.NonePainter.__proto__.new.call(this, widget, page, index, paint);
  }).prototype = flutter_page_indicator.NonePainter.prototype;
  dart.addTypeTests(flutter_page_indicator.NonePainter);
  dart.setMethodSignature(flutter_page_indicator.NonePainter, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.NonePainter.__proto__),
    draw: dart.fnType(dart.void, [ui$.Canvas, core.double, core.double, core.double])
  }));
  flutter_page_indicator.SlidePainter = class SlidePainter extends flutter_page_indicator.BasePainter {
    draw(canvas, space, size, radius) {
      canvas.drawCircle(new ui$.Offset.new(dart.notNull(radius) + dart.notNull(this.page) * (dart.notNull(size) + dart.notNull(space)), radius), radius, this[_paint]);
    }
  };
  (flutter_page_indicator.SlidePainter.new = function(widget, page, index, paint) {
    flutter_page_indicator.SlidePainter.__proto__.new.call(this, widget, page, index, paint);
  }).prototype = flutter_page_indicator.SlidePainter.prototype;
  dart.addTypeTests(flutter_page_indicator.SlidePainter);
  dart.setMethodSignature(flutter_page_indicator.SlidePainter, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.SlidePainter.__proto__),
    draw: dart.fnType(dart.void, [ui$.Canvas, core.double, core.double, core.double])
  }));
  flutter_page_indicator.ScalePainter = class ScalePainter extends flutter_page_indicator.BasePainter {
    [_shouldSkip](i) {
      if (this.index === dart.notNull(this.widget.count) - 1) {
        return i === 0 || i == this.index;
      }
      return i == this.index || i === dart.notNull(this.index) + 1;
    }
    paint(canvas, size) {
      {
        this[_paint].color = this.widget.color;
        let space = this.widget.space;
        let size = this.widget.size;
        let radius = dart.notNull(size) / 2;
        for (let i = 0, c = this.widget.count; i < dart.notNull(c); ++i) {
          if (dart.test(this[_shouldSkip](i))) {
            continue;
          }
          canvas.drawCircle(new ui$.Offset.new(i * (dart.notNull(size) + dart.notNull(space)) + radius, radius), radius * dart.notNull(this.widget.scale), this[_paint]);
        }
        this[_paint].color = this.widget.activeColor;
        this.draw(canvas, space, size, radius);
      }
    }
    draw(canvas, space, size, radius) {
      let secondOffset = this.index === dart.notNull(this.widget.count) - 1 ? radius : dart.notNull(radius) + (dart.notNull(this.index) + 1) * (dart.notNull(size) + dart.notNull(space));
      let progress = dart.notNull(this.page) - dart.notNull(this.index);
      this[_paint].color = ui$.Color.lerp(this.widget.activeColor, this.widget.color, progress);
      canvas.drawCircle(new ui$.Offset.new(dart.notNull(radius) + dart.notNull(this.index) * (dart.notNull(size) + dart.notNull(space)), radius), this.lerp(radius, dart.notNull(radius) * dart.notNull(this.widget.scale), progress), this[_paint]);
      this[_paint].color = ui$.Color.lerp(this.widget.color, this.widget.activeColor, progress);
      canvas.drawCircle(new ui$.Offset.new(secondOffset, radius), this.lerp(dart.notNull(radius) * dart.notNull(this.widget.scale), radius, progress), this[_paint]);
    }
  };
  (flutter_page_indicator.ScalePainter.new = function(widget, page, index, paint) {
    flutter_page_indicator.ScalePainter.__proto__.new.call(this, widget, page, index, paint);
  }).prototype = flutter_page_indicator.ScalePainter.prototype;
  dart.addTypeTests(flutter_page_indicator.ScalePainter);
  dart.setMethodSignature(flutter_page_indicator.ScalePainter, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.ScalePainter.__proto__),
    draw: dart.fnType(dart.void, [ui$.Canvas, core.double, core.double, core.double])
  }));
  flutter_page_indicator.ColorPainter = class ColorPainter extends flutter_page_indicator.BasePainter {
    [_shouldSkip](i) {
      if (this.index === dart.notNull(this.widget.count) - 1) {
        return i === 0 || i == this.index;
      }
      return i == this.index || i === dart.notNull(this.index) + 1;
    }
    draw(canvas, space, size, radius) {
      let progress = dart.notNull(this.page) - dart.notNull(this.index);
      let secondOffset = this.index === dart.notNull(this.widget.count) - 1 ? radius : dart.notNull(radius) + (dart.notNull(this.index) + 1) * (dart.notNull(size) + dart.notNull(space));
      this[_paint].color = ui$.Color.lerp(this.widget.activeColor, this.widget.color, progress);
      canvas.drawCircle(new ui$.Offset.new(dart.notNull(radius) + dart.notNull(this.index) * (dart.notNull(size) + dart.notNull(space)), radius), radius, this[_paint]);
      this[_paint].color = ui$.Color.lerp(this.widget.color, this.widget.activeColor, progress);
      canvas.drawCircle(new ui$.Offset.new(secondOffset, radius), radius, this[_paint]);
    }
  };
  (flutter_page_indicator.ColorPainter.new = function(widget, page, index, paint) {
    flutter_page_indicator.ColorPainter.__proto__.new.call(this, widget, page, index, paint);
  }).prototype = flutter_page_indicator.ColorPainter.prototype;
  dart.addTypeTests(flutter_page_indicator.ColorPainter);
  dart.setMethodSignature(flutter_page_indicator.ColorPainter, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.ColorPainter.__proto__),
    draw: dart.fnType(dart.void, [ui$.Canvas, core.double, core.double, core.double])
  }));
  const _createPainer = dart.privateName(flutter_page_indicator, "_createPainer");
  const _onController = dart.privateName(flutter_page_indicator, "_onController");
  flutter_page_indicator.PageIndicator = class PageIndicator extends src__widgets__framework.StatefulWidget {
    get size() {
      return this[size$];
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
    get count() {
      return this[count$];
    }
    set count(value) {
      super.count = value;
    }
    get activeColor() {
      return this[activeColor$];
    }
    set activeColor(value) {
      super.activeColor = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get layout() {
      return this[layout$];
    }
    set layout(value) {
      super.layout = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get dropHeight() {
      return this[dropHeight$];
    }
    set dropHeight(value) {
      super.dropHeight = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get activeSize() {
      return this[activeSize$];
    }
    set activeSize(value) {
      super.activeSize = value;
    }
    createState() {
      return new flutter_page_indicator._PageIndicatorState.new();
    }
  };
  (flutter_page_indicator.PageIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : 20.0;
    let space = opts && 'space' in opts ? opts.space : 5.0;
    let count = opts && 'count' in opts ? opts.count : null;
    let activeSize = opts && 'activeSize' in opts ? opts.activeSize : 20.0;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let color = opts && 'color' in opts ? opts.color : src__material__colors.Colors.white30;
    let layout = opts && 'layout' in opts ? opts.layout : flutter_page_indicator.PageIndicatorLayout.SLIDE;
    let activeColor = opts && 'activeColor' in opts ? opts.activeColor : src__material__colors.Colors.white;
    let scale = opts && 'scale' in opts ? opts.scale : 0.6;
    let dropHeight = opts && 'dropHeight' in opts ? opts.dropHeight : 20.0;
    this[size$] = size;
    this[space$] = space;
    this[count$] = count;
    this[activeSize$] = activeSize;
    this[controller$] = controller;
    this[color$] = color;
    this[layout$] = layout;
    this[activeColor$] = activeColor;
    this[scale$] = scale;
    this[dropHeight$] = dropHeight;
    if (!(count != null)) dart.assertFailed();
    if (!(controller != null)) dart.assertFailed();
    flutter_page_indicator.PageIndicator.__proto__.new.call(this, {key: key});
  }).prototype = flutter_page_indicator.PageIndicator.prototype;
  dart.addTypeTests(flutter_page_indicator.PageIndicator);
  const size$ = Symbol("PageIndicator.size");
  const space$ = Symbol("PageIndicator.space");
  const count$ = Symbol("PageIndicator.count");
  const activeColor$ = Symbol("PageIndicator.activeColor");
  const color$ = Symbol("PageIndicator.color");
  const layout$ = Symbol("PageIndicator.layout");
  const scale$ = Symbol("PageIndicator.scale");
  const dropHeight$ = Symbol("PageIndicator.dropHeight");
  const controller$ = Symbol("PageIndicator.controller");
  const activeSize$ = Symbol("PageIndicator.activeSize");
  dart.setMethodSignature(flutter_page_indicator.PageIndicator, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.PageIndicator.__proto__),
    createState: dart.fnType(src__widgets__framework.State$(src__widgets__framework.StatefulWidget), [])
  }));
  dart.setFieldSignature(flutter_page_indicator.PageIndicator, () => ({
    __proto__: dart.getFields(flutter_page_indicator.PageIndicator.__proto__),
    size: dart.finalFieldType(core.double),
    space: dart.finalFieldType(core.double),
    count: dart.finalFieldType(core.int),
    activeColor: dart.finalFieldType(ui$.Color),
    color: dart.finalFieldType(ui$.Color),
    layout: dart.finalFieldType(flutter_page_indicator.PageIndicatorLayout),
    scale: dart.finalFieldType(core.double),
    dropHeight: dart.finalFieldType(core.double),
    controller: dart.finalFieldType(src__widgets__page_view.PageController),
    activeSize: dart.finalFieldType(core.double)
  }));
  flutter_page_indicator._PageIndicatorState = class _PageIndicatorState extends src__widgets__framework.State$(flutter_page_indicator.PageIndicator) {
    [_createPainer]() {
      switch (this.widget.layout) {
        case flutter_page_indicator.PageIndicatorLayout.NONE:
        {
          return new flutter_page_indicator.NonePainter.new(this.widget, (() => {
            let l = this.widget.controller.page;
            return l != null ? l : 0.0;
          })(), this.index, this[_paint]);
        }
        case flutter_page_indicator.PageIndicatorLayout.SLIDE:
        {
          return new flutter_page_indicator.SlidePainter.new(this.widget, (() => {
            let l = this.widget.controller.page;
            return l != null ? l : 0.0;
          })(), this.index, this[_paint]);
        }
        case flutter_page_indicator.PageIndicatorLayout.WARM:
        {
          return new flutter_page_indicator.WarmPainter.new(this.widget, (() => {
            let l = this.widget.controller.page;
            return l != null ? l : 0.0;
          })(), this.index, this[_paint]);
        }
        case flutter_page_indicator.PageIndicatorLayout.COLOR:
        {
          return new flutter_page_indicator.ColorPainter.new(this.widget, (() => {
            let l = this.widget.controller.page;
            return l != null ? l : 0.0;
          })(), this.index, this[_paint]);
        }
        case flutter_page_indicator.PageIndicatorLayout.SCALE:
        {
          return new flutter_page_indicator.ScalePainter.new(this.widget, (() => {
            let l = this.widget.controller.page;
            return l != null ? l : 0.0;
          })(), this.index, this[_paint]);
        }
        case flutter_page_indicator.PageIndicatorLayout.DROP:
        {
          return new flutter_page_indicator.DropPainter.new(this.widget, (() => {
            let l = this.widget.controller.page;
            return l != null ? l : 0.0;
          })(), this.index, this[_paint]);
        }
        default:
        {
          dart.throw(core.Exception.new("Not a valid layout"));
        }
      }
    }
    build(context) {
      let child = new src__widgets__basic.SizedBox.new({width: dart.notNull(this.widget.count) * dart.notNull(this.widget.size) + (dart.notNull(this.widget.count) - 1) * dart.notNull(this.widget.space), height: this.widget.size, child: new src__widgets__basic.CustomPaint.new({painter: this[_createPainer]()})});
      if (this.widget.layout === flutter_page_indicator.PageIndicatorLayout.SCALE || this.widget.layout === flutter_page_indicator.PageIndicatorLayout.COLOR) {
        child = new src__widgets__basic.ClipRect.new({child: child});
      }
      return new src__widgets__basic.IgnorePointer.new({child: child});
    }
    [_onController]() {
      let l = this.widget.controller.page;
      let page = l != null ? l : 0.0;
      this.index = page[$floor]();
      this.setState(dart.fn(() => {
      }, VoidToNull()));
    }
    initState() {
      this.widget.controller.addListener(dart.bind(this, _onController));
      super.initState();
    }
    didUpdateWidget(oldWidget) {
      flutter_page_indicator.PageIndicator._check(oldWidget);
      if (!dart.equals(this.widget.controller, oldWidget.controller)) {
        oldWidget.controller.removeListener(dart.bind(this, _onController));
        this.widget.controller.addListener(dart.bind(this, _onController));
      }
      super.didUpdateWidget(oldWidget);
    }
    dispose() {
      this.widget.controller.removeListener(dart.bind(this, _onController));
      super.dispose();
    }
  };
  (flutter_page_indicator._PageIndicatorState.new = function() {
    this.index = 0;
    this[_paint] = new ui$.Paint.new();
    flutter_page_indicator._PageIndicatorState.__proto__.new.call(this);
  }).prototype = flutter_page_indicator._PageIndicatorState.prototype;
  dart.addTypeTests(flutter_page_indicator._PageIndicatorState);
  dart.setMethodSignature(flutter_page_indicator._PageIndicatorState, () => ({
    __proto__: dart.getMethods(flutter_page_indicator._PageIndicatorState.__proto__),
    [_createPainer]: dart.fnType(flutter_page_indicator.BasePainter, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    [_onController]: dart.fnType(dart.void, []),
    initState: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(flutter_page_indicator._PageIndicatorState, () => ({
    __proto__: dart.getFields(flutter_page_indicator._PageIndicatorState.__proto__),
    index: dart.fieldType(core.int),
    [_paint]: dart.fieldType(ui$.Paint)
  }));
  flutter_page_indicator.PageIndicatorLayout = class PageIndicatorLayout extends core.Object {
    toString() {
      return {
        0: "PageIndicatorLayout.NONE",
        1: "PageIndicatorLayout.SLIDE",
        2: "PageIndicatorLayout.WARM",
        3: "PageIndicatorLayout.COLOR",
        4: "PageIndicatorLayout.SCALE",
        5: "PageIndicatorLayout.DROP"
      }[this.index];
    }
  };
  (flutter_page_indicator.PageIndicatorLayout.new = function(x) {
    this.index = x;
  }).prototype = flutter_page_indicator.PageIndicatorLayout.prototype;
  dart.addTypeTests(flutter_page_indicator.PageIndicatorLayout);
  dart.setFieldSignature(flutter_page_indicator.PageIndicatorLayout, () => ({
    __proto__: dart.getFields(flutter_page_indicator.PageIndicatorLayout.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(flutter_page_indicator.PageIndicatorLayout, ['toString']);
  flutter_page_indicator.PageIndicatorLayout.NONE = dart.const(new flutter_page_indicator.PageIndicatorLayout.new(0));
  flutter_page_indicator.PageIndicatorLayout.SLIDE = dart.const(new flutter_page_indicator.PageIndicatorLayout.new(1));
  flutter_page_indicator.PageIndicatorLayout.WARM = dart.const(new flutter_page_indicator.PageIndicatorLayout.new(2));
  flutter_page_indicator.PageIndicatorLayout.COLOR = dart.const(new flutter_page_indicator.PageIndicatorLayout.new(3));
  flutter_page_indicator.PageIndicatorLayout.SCALE = dart.const(new flutter_page_indicator.PageIndicatorLayout.new(4));
  flutter_page_indicator.PageIndicatorLayout.DROP = dart.const(new flutter_page_indicator.PageIndicatorLayout.new(5));
  flutter_page_indicator.PageIndicatorLayout.values = dart.constList([flutter_page_indicator.PageIndicatorLayout.NONE, flutter_page_indicator.PageIndicatorLayout.SLIDE, flutter_page_indicator.PageIndicatorLayout.WARM, flutter_page_indicator.PageIndicatorLayout.COLOR, flutter_page_indicator.PageIndicatorLayout.SCALE, flutter_page_indicator.PageIndicatorLayout.DROP], flutter_page_indicator.PageIndicatorLayout);
  dart.trackLibraries("packages/flutter_web.examples.hello_world/flutter_page_indicator.ddc", {
    "package:flutter_web.examples.hello_world/flutter_page_indicator.dart": flutter_page_indicator
  }, '{"version":3,"sourceRoot":"","sources":["flutter_page_indicator.dart"],"names":[],"mappings":"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","file":"flutter_page_indicator.ddc.js"}');
  // Exports:
  return {
    flutter_page_indicator: flutter_page_indicator
  };
});

//# sourceMappingURL=flutter_page_indicator.ddc.js.map
