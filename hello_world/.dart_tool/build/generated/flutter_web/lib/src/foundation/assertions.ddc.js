define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/io', 'packages/typed_data/typed_buffers'], function(dart_sdk, ui, io, typed_buffers) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const developer = dart_sdk.developer;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const io$ = io.io;
  const typed_buffers$ = typed_buffers.typed_buffers;
  const src__foundation__basic_types = Object.create(dart.library);
  const src__foundation__print = Object.create(dart.library);
  const src__foundation__assertions = Object.create(dart.library);
  const src__foundation__constants = Object.create(dart.library);
  const src__foundation__platform = Object.create(dart.library);
  const src__foundation__debug = Object.create(dart.library);
  const src__foundation__binding = Object.create(dart.library);
  const src__foundation__bitfield = Object.create(dart.library);
  const src__util = Object.create(dart.library);
  const src__foundation__diagnostics = Object.create(dart.library);
  const src__foundation__observer_list = Object.create(dart.library);
  const src__foundation__change_notifier = Object.create(dart.library);
  const src__foundation__collections = Object.create(dart.library);
  const src__foundation__key = Object.create(dart.library);
  const src__foundation__isolates = Object.create(dart.library);
  const src__foundation__licenses = Object.create(dart.library);
  const src__foundation__node = Object.create(dart.library);
  const src__foundation__profile = Object.create(dart.library);
  const src__foundation__serialization = Object.create(dart.library);
  const src__foundation__synchronous_future = Object.create(dart.library);
  const src__foundation__unicode = Object.create(dart.library);
  const $iterator = dartx.iterator;
  const $length = dartx.length;
  const $add = dartx.add;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $join = dartx.join;
  const $expand = dartx.expand;
  const $split = dartx.split;
  const $trimLeft = dartx.trimLeft;
  const $times = dartx['*'];
  const $substring = dartx.substring;
  const $lastIndexOf = dartx.lastIndexOf;
  const $trimRight = dartx.trimRight;
  const $isEmpty = dartx.isEmpty;
  const $toUpperCase = dartx.toUpperCase;
  const $runtimeType = dartx.runtimeType;
  const $startsWith = dartx.startsWith;
  const $toList = dartx.toList;
  const $take = dartx.take;
  const $contains = dartx.contains;
  const $single = dartx.single;
  const $sort = dartx.sort;
  const $_set = dartx._set;
  const $last = dartx.last;
  const $skip = dartx.skip;
  const $containsKey = dartx.containsKey;
  const $leftShift = dartx['<<'];
  const $endsWith = dartx.endsWith;
  const $isNotEmpty = dartx.isNotEmpty;
  const $where = dartx.where;
  const $first = dartx.first;
  const $indexOf = dartx.indexOf;
  const $replaceAll = dartx.replaceAll;
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $clamp = dartx.clamp;
  const $map = dartx.map;
  const $padLeft = dartx.padLeft;
  const $toRadixString = dartx.toRadixString;
  const $toUnsigned = dartx.toUnsigned;
  const $hashCode = dartx.hashCode;
  const $floor = dartx.floor;
  const $remove = dartx.remove;
  const $_equals = dartx._equals;
  const $clear = dartx.clear;
  const $truncate = dartx.truncate;
  const $asUint8List = dartx.asUint8List;
  const $buffer = dartx.buffer;
  const $setUint16 = dartx.setUint16;
  const $setUint32 = dartx.setUint32;
  const $setInt32 = dartx.setInt32;
  const $setInt64 = dartx.setInt64;
  const $setFloat64 = dartx.setFloat64;
  const $offsetInBytes = dartx.offsetInBytes;
  const $modulo = dartx['%'];
  const $asByteData = dartx.asByteData;
  const $lengthInBytes = dartx.lengthInBytes;
  const $getUint8 = dartx.getUint8;
  const $getUint16 = dartx.getUint16;
  const $getUint32 = dartx.getUint32;
  const $getInt32 = dartx.getInt32;
  const $getInt64 = dartx.getInt64;
  const $getFloat64 = dartx.getFloat64;
  const $asInt32List = dartx.asInt32List;
  const $asInt64List = dartx.asInt64List;
  const $asFloat64List = dartx.asFloat64List;
  let String__Tovoid = () => (String__Tovoid = dart.constFn(dart.fnType(dart.void, [core.String], {wrapWidth: core.int})))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  let StringToIterableOfString = () => (StringToIterableOfString = dart.constFn(dart.fnType(IterableOfString(), [core.String])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let QueueOfString = () => (QueueOfString = dart.constFn(collection.Queue$(core.String)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let SyncIterableOfString = () => (SyncIterableOfString = dart.constFn(_js_helper.SyncIterable$(core.String)))();
  let IterableOfStringToIterableOfString = () => (IterableOfStringToIterableOfString = dart.constFn(dart.fnType(IterableOfString(), [IterableOfString()])))();
  let StringBufferTovoid = () => (StringBufferTovoid = dart.constFn(dart.fnType(dart.void, [core.StringBuffer])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  let FlutterErrorDetails__Tovoid = () => (FlutterErrorDetails__Tovoid = dart.constFn(dart.fnType(dart.void, [src__foundation__assertions.FlutterErrorDetails], {forceReport: core.bool})))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let FutureOfMapOfString$dynamic = () => (FutureOfMapOfString$dynamic = dart.constFn(async.Future$(MapOfString$dynamic())))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let MapOfString$StringToFutureOfMapOfString$dynamic = () => (MapOfString$StringToFutureOfMapOfString$dynamic = dart.constFn(dart.fnType(FutureOfMapOfString$dynamic(), [MapOfString$String()])))();
  let FutureOfServiceExtensionResponse = () => (FutureOfServiceExtensionResponse = dart.constFn(async.Future$(developer.ServiceExtensionResponse)))();
  let StringAndMapOfString$StringToFutureOfServiceExtensionResponse = () => (StringAndMapOfString$StringToFutureOfServiceExtensionResponse = dart.constFn(dart.fnType(FutureOfServiceExtensionResponse(), [core.String, MapOfString$String()])))();
  let DiagnosticsPropertyOfNull = () => (DiagnosticsPropertyOfNull = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(core.Null)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let DiagnosticsNodeTobool = () => (DiagnosticsNodeTobool = dart.constFn(dart.fnType(core.bool, [src__foundation__diagnostics.DiagnosticsNode])))();
  let JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(src__foundation__diagnostics.DiagnosticsNode)))();
  let DiagnosticableNodeOfDiagnosticable = () => (DiagnosticableNodeOfDiagnosticable = dart.constFn(src__foundation__diagnostics.DiagnosticableNode$(src__foundation__diagnostics.Diagnosticable)))();
  let ListOfDiagnosticsNode = () => (ListOfDiagnosticsNode = dart.constFn(core.List$(src__foundation__diagnostics.DiagnosticsNode)))();
  let ObserverListOfVoidCallback = () => (ObserverListOfVoidCallback = dart.constFn(src__foundation__observer_list.ObserverList$(VoidTovoid())))();
  let ListOfVoidCallback = () => (ListOfVoidCallback = dart.constFn(core.List$(VoidTovoid())))();
  let StringBufferToNull = () => (StringBufferToNull = dart.constFn(dart.fnType(core.Null, [core.StringBuffer])))();
  let ListOfListenable = () => (ListOfListenable = dart.constFn(core.List$(src__foundation__change_notifier.Listenable)))();
  let ValueKeyOfString = () => (ValueKeyOfString = dart.constFn(src__foundation__key.ValueKey$(core.String)))();
  let VoidToLicenseParagraph = () => (VoidToLicenseParagraph = dart.constFn(dart.fnType(src__foundation__licenses.LicenseParagraph, [])))();
  let SyncIterableOfLicenseParagraph = () => (SyncIterableOfLicenseParagraph = dart.constFn(_js_helper.SyncIterable$(src__foundation__licenses.LicenseParagraph)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let StreamOfLicenseEntry = () => (StreamOfLicenseEntry = dart.constFn(async.Stream$(src__foundation__licenses.LicenseEntry)))();
  let VoidToStreamOfLicenseEntry = () => (VoidToStreamOfLicenseEntry = dart.constFn(dart.fnType(StreamOfLicenseEntry(), [])))();
  let JSArrayOfVoidToStreamOfLicenseEntry = () => (JSArrayOfVoidToStreamOfLicenseEntry = dart.constFn(_interceptors.JSArray$(VoidToStreamOfLicenseEntry())))();
  let _AsyncStarImplOfLicenseEntry = () => (_AsyncStarImplOfLicenseEntry = dart.constFn(async._AsyncStarImpl$(src__foundation__licenses.LicenseEntry)))();
  const _prefillIterator = dart.privateName(src__foundation__basic_types, "_prefillIterator");
  const _results = dart.privateName(src__foundation__basic_types, "_results");
  const _precacheEntireList = dart.privateName(src__foundation__basic_types, "_precacheEntireList");
  const _fillNext = dart.privateName(src__foundation__basic_types, "_fillNext");
  const _is_CachingIterable_default = Symbol('_is_CachingIterable_default');
  src__foundation__basic_types.CachingIterable$ = dart.generic(E => {
    let JSArrayOfE = () => (JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    let _LazyListIteratorOfE = () => (_LazyListIteratorOfE = dart.constFn(src__foundation__basic_types._LazyListIterator$(E)))();
    let CachingIterableOfE = () => (CachingIterableOfE = dart.constFn(src__foundation__basic_types.CachingIterable$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let IteratorOfE = () => (IteratorOfE = dart.constFn(core.Iterator$(E)))();
    class CachingIterable extends collection.IterableBase$(E) {
      get iterator() {
        return new (_LazyListIteratorOfE()).new(this);
      }
      map(T, f) {
        return new (src__foundation__basic_types.CachingIterable$(T)).new(super.map(T, f)[$iterator]);
      }
      where(test) {
        return new (CachingIterableOfE()).new(super.where(test)[$iterator]);
      }
      expand(T, f) {
        return new (src__foundation__basic_types.CachingIterable$(T)).new(super.expand(T, f)[$iterator]);
      }
      take(count) {
        return new (CachingIterableOfE()).new(super.take(count)[$iterator]);
      }
      takeWhile(test) {
        return new (CachingIterableOfE()).new(super.takeWhile(test)[$iterator]);
      }
      skip(count) {
        return new (CachingIterableOfE()).new(super.skip(count)[$iterator]);
      }
      skipWhile(test) {
        return new (CachingIterableOfE()).new(super.skipWhile(test)[$iterator]);
      }
      get length() {
        this[_precacheEntireList]();
        return this[_results][$length];
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        this[_precacheEntireList]();
        return ListOfE().from(this[_results], {growable: growable});
      }
      [_precacheEntireList]() {
        while (dart.test(this[_fillNext]())) {
        }
      }
      [_fillNext]() {
        if (!dart.test(this[_prefillIterator].moveNext())) return false;
        this[_results][$add](this[_prefillIterator].current);
        return true;
      }
    }
    (CachingIterable.new = function(prefillIterator) {
      this[_results] = JSArrayOfE().of([]);
      this[_prefillIterator] = prefillIterator;
      CachingIterable.__proto__.new.call(this);
    }).prototype = CachingIterable.prototype;
    dart.addTypeTests(CachingIterable);
    CachingIterable.prototype[_is_CachingIterable_default] = true;
    dart.setMethodSignature(CachingIterable, () => ({
      __proto__: dart.getMethods(CachingIterable.__proto__),
      [_precacheEntireList]: dart.fnType(dart.void, []),
      [_fillNext]: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(CachingIterable, () => ({
      __proto__: dart.getGetters(CachingIterable.__proto__),
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E)
    }));
    dart.setFieldSignature(CachingIterable, () => ({
      __proto__: dart.getFields(CachingIterable.__proto__),
      [_prefillIterator]: dart.finalFieldType(IteratorOfE()),
      [_results]: dart.finalFieldType(ListOfE())
    }));
    dart.defineExtensionMethods(CachingIterable, [
      'map',
      'where',
      'expand',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'toList'
    ]);
    dart.defineExtensionAccessors(CachingIterable, ['iterator', 'length']);
    return CachingIterable;
  });
  src__foundation__basic_types.CachingIterable = src__foundation__basic_types.CachingIterable$();
  dart.addTypeTests(src__foundation__basic_types.CachingIterable, _is_CachingIterable_default);
  const _owner = dart.privateName(src__foundation__basic_types, "_owner");
  const _index = dart.privateName(src__foundation__basic_types, "_index");
  const _is__LazyListIterator_default = Symbol('_is__LazyListIterator_default');
  src__foundation__basic_types._LazyListIterator$ = dart.generic(E => {
    let IteratorOfE = () => (IteratorOfE = dart.constFn(core.Iterator$(E)))();
    let CachingIterableOfE = () => (CachingIterableOfE = dart.constFn(src__foundation__basic_types.CachingIterable$(E)))();
    class _LazyListIterator extends core.Object {
      get current() {
        if (!(dart.notNull(this[_index]) >= 0)) dart.assertFailed();
        if (dart.notNull(this[_index]) < 0 || this[_index] == this[_owner][_results][$length]) return null;
        return this[_owner][_results][$_get](this[_index]);
      }
      moveNext() {
        if (dart.notNull(this[_index]) >= dart.notNull(this[_owner][_results][$length])) return false;
        this[_index] = dart.notNull(this[_index]) + 1;
        if (this[_index] == this[_owner][_results][$length]) return this[_owner][_fillNext]();
        return true;
      }
    }
    (_LazyListIterator.new = function(owner) {
      this[_owner] = owner;
      this[_index] = -1;
    }).prototype = _LazyListIterator.prototype;
    dart.addTypeTests(_LazyListIterator);
    _LazyListIterator.prototype[_is__LazyListIterator_default] = true;
    _LazyListIterator[dart.implements] = () => [IteratorOfE()];
    dart.setMethodSignature(_LazyListIterator, () => ({
      __proto__: dart.getMethods(_LazyListIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_LazyListIterator, () => ({
      __proto__: dart.getGetters(_LazyListIterator.__proto__),
      current: E
    }));
    dart.setFieldSignature(_LazyListIterator, () => ({
      __proto__: dart.getFields(_LazyListIterator.__proto__),
      [_owner]: dart.finalFieldType(CachingIterableOfE()),
      [_index]: dart.fieldType(core.int)
    }));
    return _LazyListIterator;
  });
  src__foundation__basic_types._LazyListIterator = src__foundation__basic_types._LazyListIterator$();
  dart.addTypeTests(src__foundation__basic_types._LazyListIterator, _is__LazyListIterator_default);
  const _is_Factory_default = Symbol('_is_Factory_default');
  src__foundation__basic_types.Factory$ = dart.generic(T => {
    let VoidToT = () => (VoidToT = dart.constFn(dart.fnType(T, [])))();
    class Factory extends core.Object {
      get _constructor() {
        return this[constructor$];
      }
      set _constructor(value) {
        super._constructor = value;
      }
      get type() {
        return dart.wrapType(T);
      }
      toString() {
        return "Factory(type: " + dart.str(this.type) + ")";
      }
    }
    (Factory.new = function(constructor) {
      this[constructor$] = constructor;
      if (!(constructor != null)) dart.assertFailed();
    }).prototype = Factory.prototype;
    dart.addTypeTests(Factory);
    Factory.prototype[_is_Factory_default] = true;
    const constructor$ = Symbol("Factory.constructor");
    dart.setMethodSignature(Factory, () => ({
      __proto__: dart.getMethods(Factory.__proto__),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(Factory, () => ({
      __proto__: dart.getGetters(Factory.__proto__),
      type: core.Type
    }));
    dart.setFieldSignature(Factory, () => ({
      __proto__: dart.getFields(Factory.__proto__),
      _constructor: dart.finalFieldType(VoidToT())
    }));
    dart.defineExtensionMethods(Factory, ['toString']);
    return Factory;
  });
  src__foundation__basic_types.Factory = src__foundation__basic_types.Factory$();
  dart.addTypeTests(src__foundation__basic_types.Factory, _is_Factory_default);
  dart.defineLazy(src__foundation__print, {
    /*src__foundation__print.debugPrint*/get debugPrint() {
      return dart.fn(src__foundation__print.debugPrintThrottled, String__Tovoid());
    },
    set debugPrint(_) {}
  });
  src__foundation__print.debugPrintSynchronously = function(message, opts) {
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    if (wrapWidth != null) {
      core.print(IterableOfString()._check(message[$split]("\n")[$expand](core.String, dart.fn(line => src__foundation__print.debugWordWrap(line, wrapWidth), StringToIterableOfString())))[$join]("\n"));
    } else {
      core.print(message);
    }
  };
  src__foundation__print.debugPrintThrottled = function(message, opts) {
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    let l = message == null ? null : message[$split]("\n");
    let messageLines = l != null ? l : JSArrayOfString().of(["null"]);
    if (wrapWidth != null) {
      src__foundation__print._debugPrintBuffer.addAll(IterableOfString()._check(messageLines[$expand](core.String, dart.fn(line => src__foundation__print.debugWordWrap(line, wrapWidth), StringToIterableOfString()))));
    } else {
      src__foundation__print._debugPrintBuffer.addAll(messageLines);
    }
    if (!dart.test(src__foundation__print._debugPrintScheduled)) src__foundation__print._debugPrintTask();
  };
  dart.defineLazy(src__foundation__print, {
    /*src__foundation__print._debugPrintedCharacters*/get _debugPrintedCharacters() {
      return 0;
    },
    set _debugPrintedCharacters(_) {},
    /*src__foundation__print._kDebugPrintCapacity*/get _kDebugPrintCapacity() {
      return 12 * 1024;
    },
    /*src__foundation__print._kDebugPrintPauseTime*/get _kDebugPrintPauseTime() {
      return dart.const(new core.Duration.new({seconds: 1}));
    },
    /*src__foundation__print._debugPrintBuffer*/get _debugPrintBuffer() {
      return QueueOfString().new();
    },
    /*src__foundation__print._debugPrintStopwatch*/get _debugPrintStopwatch() {
      return new core.Stopwatch.new();
    },
    /*src__foundation__print._debugPrintCompleter*/get _debugPrintCompleter() {
      return null;
    },
    set _debugPrintCompleter(_) {},
    /*src__foundation__print._debugPrintScheduled*/get _debugPrintScheduled() {
      return false;
    },
    set _debugPrintScheduled(_) {}
  });
  src__foundation__print._debugPrintTask = function() {
    src__foundation__print._debugPrintScheduled = false;
    if (dart.test(src__foundation__print._debugPrintStopwatch.elapsed['>'](src__foundation__print._kDebugPrintPauseTime))) {
      src__foundation__print._debugPrintStopwatch.stop();
      src__foundation__print._debugPrintStopwatch.reset();
      src__foundation__print._debugPrintedCharacters = 0;
    }
    while (dart.notNull(src__foundation__print._debugPrintedCharacters) < 12288 && dart.test(src__foundation__print._debugPrintBuffer.isNotEmpty)) {
      let line = src__foundation__print._debugPrintBuffer.removeFirst();
      src__foundation__print._debugPrintedCharacters = dart.notNull(src__foundation__print._debugPrintedCharacters) + line.length;
      core.print(line);
    }
    if (dart.test(src__foundation__print._debugPrintBuffer.isNotEmpty)) {
      src__foundation__print._debugPrintScheduled = true;
      src__foundation__print._debugPrintedCharacters = 0;
      async.Timer.new(src__foundation__print._kDebugPrintPauseTime, dart.fn(src__foundation__print._debugPrintTask, VoidTovoid()));
      let t = src__foundation__print._debugPrintCompleter;
      t == null ? src__foundation__print._debugPrintCompleter = CompleterOfvoid().new() : t;
    } else {
      src__foundation__print._debugPrintStopwatch.start();
      let t$ = src__foundation__print._debugPrintCompleter;
      t$ == null ? null : t$.complete();
      src__foundation__print._debugPrintCompleter = null;
    }
  };
  dart.copyProperties(src__foundation__print, {
    get debugPrintDone() {
      let t = src__foundation__print._debugPrintCompleter;
      let l = t == null ? null : t.future;
      return l != null ? l : FutureOfvoid().value();
    }
  });
  dart.defineLazy(src__foundation__print, {
    /*src__foundation__print._indentPattern*/get _indentPattern() {
      return core.RegExp.new("^ *(?:[-+*] |[0-9]+[.):] )?");
    }
  });
  src__foundation__print._WordWrapParseMode = class _WordWrapParseMode extends core.Object {
    toString() {
      return {
        0: "_WordWrapParseMode.inSpace",
        1: "_WordWrapParseMode.inWord",
        2: "_WordWrapParseMode.atBreak"
      }[this.index];
    }
  };
  (src__foundation__print._WordWrapParseMode.new = function(x) {
    this.index = x;
  }).prototype = src__foundation__print._WordWrapParseMode.prototype;
  dart.addTypeTests(src__foundation__print._WordWrapParseMode);
  dart.setFieldSignature(src__foundation__print._WordWrapParseMode, () => ({
    __proto__: dart.getFields(src__foundation__print._WordWrapParseMode.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__foundation__print._WordWrapParseMode, ['toString']);
  src__foundation__print._WordWrapParseMode.inSpace = dart.const(new src__foundation__print._WordWrapParseMode.new(0));
  src__foundation__print._WordWrapParseMode.inWord = dart.const(new src__foundation__print._WordWrapParseMode.new(1));
  src__foundation__print._WordWrapParseMode.atBreak = dart.const(new src__foundation__print._WordWrapParseMode.new(2));
  src__foundation__print._WordWrapParseMode.values = dart.constList([src__foundation__print._WordWrapParseMode.inSpace, src__foundation__print._WordWrapParseMode.inWord, src__foundation__print._WordWrapParseMode.atBreak], src__foundation__print._WordWrapParseMode);
  src__foundation__print.debugWordWrap = function(message, width, opts) {
    let wrapIndent = opts && 'wrapIndent' in opts ? opts.wrapIndent : "";
    return new (SyncIterableOfString()).new(function* debugWordWrap() {
      if (message.length < dart.notNull(width) || message[$trimLeft]()[$_get](0) === "#") {
        yield message;
        return;
      }
      let prefixMatch = src__foundation__print._indentPattern.matchAsPrefix(message);
      let prefix = dart.notNull(wrapIndent) + " "[$times](prefixMatch.group(0).length);
      let start = 0;
      let startForLengthCalculations = 0;
      let addPrefix = false;
      let index = prefix.length;
      let mode = src__foundation__print._WordWrapParseMode.inSpace;
      let lastWordStart = null;
      let lastWordEnd = null;
      while (true) {
        switch (mode) {
          case src__foundation__print._WordWrapParseMode.inSpace:
          {
            while (index < message.length && message[$_get](index) === " ") {
              index = index + 1;
            }
            lastWordStart = index;
            mode = src__foundation__print._WordWrapParseMode.inWord;
            break;
          }
          case src__foundation__print._WordWrapParseMode.inWord:
          {
            while (index < message.length && message[$_get](index) !== " ") {
              index = index + 1;
            }
            mode = src__foundation__print._WordWrapParseMode.atBreak;
            break;
          }
          case src__foundation__print._WordWrapParseMode.atBreak:
          {
            if (index - startForLengthCalculations > dart.notNull(width) || index === message.length) {
              if (index - startForLengthCalculations <= dart.notNull(width) || lastWordEnd == null) {
                lastWordEnd = index;
              }
              if (addPrefix) {
                yield prefix + message[$substring](start, lastWordEnd);
              } else {
                yield message[$substring](start, lastWordEnd);
                addPrefix = true;
              }
              if (dart.notNull(lastWordEnd) >= message.length) return;
              if (lastWordEnd === index) {
                while (index < message.length && message[$_get](index) === " ") {
                  index = index + 1;
                }
                start = index;
                mode = src__foundation__print._WordWrapParseMode.inWord;
              } else {
                if (!(dart.notNull(lastWordStart) > dart.notNull(lastWordEnd))) dart.assertFailed();
                start = lastWordStart;
                mode = src__foundation__print._WordWrapParseMode.atBreak;
              }
              startForLengthCalculations = dart.notNull(start) - prefix.length;
              if (!addPrefix) dart.assertFailed();
              lastWordEnd = null;
            } else {
              lastWordEnd = index;
              mode = src__foundation__print._WordWrapParseMode.inSpace;
            }
            break;
          }
        }
      }
    });
  };
  src__foundation__assertions.FlutterErrorDetails = class FlutterErrorDetails extends core.Object {
    get exception() {
      return this[exception$];
    }
    set exception(value) {
      super.exception = value;
    }
    get stack() {
      return this[stack$];
    }
    set stack(value) {
      super.stack = value;
    }
    get library() {
      return this[library$];
    }
    set library(value) {
      super.library = value;
    }
    get context() {
      return this[context$];
    }
    set context(value) {
      super.context = value;
    }
    get stackFilter() {
      return this[stackFilter$];
    }
    set stackFilter(value) {
      super.stackFilter = value;
    }
    get informationCollector() {
      return this[informationCollector$];
    }
    set informationCollector(value) {
      super.informationCollector = value;
    }
    get silent() {
      return this[silent$];
    }
    set silent(value) {
      super.silent = value;
    }
    exceptionAsString() {
      let longMessage = null;
      if (core.AssertionError.is(this.exception)) {
        let message = core.String._check(dart.dload(this.exception, 'message'));
        let fullMessage = dart.toString(this.exception);
        if (typeof message == 'string' && message != fullMessage) {
          if (fullMessage.length > message.length) {
            let position = fullMessage[$lastIndexOf](message);
            if (position === fullMessage.length - message.length && position > 2 && fullMessage[$substring](position - 2, position) === ": ") {
              longMessage = message[$trimRight]() + "\n" + fullMessage[$substring](0, position - 2);
            }
          }
        }
        let t = longMessage;
        t == null ? longMessage = fullMessage : t;
      } else if (typeof this.exception == 'string') {
        longMessage = core.String._check(this.exception);
      } else if (core.Error.is(this.exception) || core.Exception.is(this.exception)) {
        longMessage = dart.toString(this.exception);
      } else {
        longMessage = "  " + dart.str(dart.toString(this.exception));
      }
      longMessage = longMessage[$trimRight]();
      if (longMessage[$isEmpty]) longMessage = "  <no message available>";
      return longMessage;
    }
    toString() {
      let buffer = new core.StringBuffer.new();
      if (this.library != null && this.library !== "" || this.context != null && this.context !== "") {
        if (this.library != null && this.library !== "") {
          buffer.write("Error caught by " + dart.str(this.library));
          if (this.context != null && this.context !== "") buffer.write(", ");
        } else {
          buffer.writeln("Exception ");
        }
        if (this.context != null && this.context !== "") buffer.write("thrown " + dart.str(this.context));
        buffer.writeln(".");
      } else {
        buffer.write("An error was caught.");
      }
      buffer.writeln(this.exceptionAsString());
      if (this.informationCollector != null) this.informationCollector(buffer);
      if (this.stack != null) {
        let stackLines = dart.toString(this.stack)[$trimRight]()[$split]("\n");
        if (this.stackFilter != null) {
          stackLines = this.stackFilter(stackLines);
        } else {
          stackLines = src__foundation__assertions.FlutterError.defaultStackFilter(stackLines);
        }
        buffer.writeAll(stackLines, "\n");
      }
      return buffer.toString()[$trimRight]();
    }
  };
  (src__foundation__assertions.FlutterErrorDetails.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : "Flutter framework";
    let context = opts && 'context' in opts ? opts.context : null;
    let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[exception$] = exception;
    this[stack$] = stack;
    this[library$] = library;
    this[context$] = context;
    this[stackFilter$] = stackFilter;
    this[informationCollector$] = informationCollector;
    this[silent$] = silent;
  }).prototype = src__foundation__assertions.FlutterErrorDetails.prototype;
  dart.addTypeTests(src__foundation__assertions.FlutterErrorDetails);
  const exception$ = Symbol("FlutterErrorDetails.exception");
  const stack$ = Symbol("FlutterErrorDetails.stack");
  const library$ = Symbol("FlutterErrorDetails.library");
  const context$ = Symbol("FlutterErrorDetails.context");
  const stackFilter$ = Symbol("FlutterErrorDetails.stackFilter");
  const informationCollector$ = Symbol("FlutterErrorDetails.informationCollector");
  const silent$ = Symbol("FlutterErrorDetails.silent");
  dart.setMethodSignature(src__foundation__assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getMethods(src__foundation__assertions.FlutterErrorDetails.__proto__),
    exceptionAsString: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__foundation__assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getFields(src__foundation__assertions.FlutterErrorDetails.__proto__),
    exception: dart.finalFieldType(dart.dynamic),
    stack: dart.finalFieldType(core.StackTrace),
    library: dart.finalFieldType(core.String),
    context: dart.finalFieldType(core.String),
    stackFilter: dart.finalFieldType(IterableOfStringToIterableOfString()),
    informationCollector: dart.finalFieldType(StringBufferTovoid()),
    silent: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__foundation__assertions.FlutterErrorDetails, ['toString']);
  let const$;
  let const$0;
  src__foundation__assertions.FlutterError = class FlutterError extends core.AssertionError {
    get message() {
      return core.String._check(super.message);
    }
    toString() {
      return this.message;
    }
    static resetErrorCount() {
      src__foundation__assertions.FlutterError._errorCount = 0;
    }
    static dumpErrorToConsole(details, opts) {
      let forceReport = opts && 'forceReport' in opts ? opts.forceReport : false;
      if (!(details != null)) dart.assertFailed();
      if (!(details.exception != null)) dart.assertFailed();
      let reportError = details.silent !== true;
      if (!dart.test(dart.fn(() => {
        reportError = true;
        return true;
      }, VoidTobool())())) dart.assertFailed();
      if (!reportError && !dart.test(forceReport)) return;
      if (src__foundation__assertions.FlutterError._errorCount === 0 || dart.test(forceReport)) {
        let header = ("══╡ EXCEPTION CAUGHT BY " + dart.str(details.library) + " ╞")[$toUpperCase]();
        let footer = "═"[$times](100);
        src__foundation__print.debugPrint(header + "═"[$times](footer.length - header.length));
        let verb = "thrown" + (details.context != null ? " " + dart.str(details.context) : "");
        if (core.NullThrownError.is(details.exception)) {
          src__foundation__print.debugPrint("The null value was " + verb + ".", {wrapWidth: 100});
        } else if (typeof details.exception == 'number') {
          src__foundation__print.debugPrint("The number " + dart.str(details.exception) + " was " + verb + ".", {wrapWidth: 100});
        } else {
          let errorName = null;
          if (core.AssertionError.is(details.exception)) {
            errorName = "assertion";
          } else if (typeof details.exception == 'string') {
            errorName = "message";
          } else if (core.Error.is(details.exception) || core.Exception.is(details.exception)) {
            errorName = dart.str(dart.runtimeType(details.exception));
          } else {
            errorName = dart.str(dart.runtimeType(details.exception)) + " object";
          }
          let prefix = dart.str(dart.runtimeType(details.exception)) + ": ";
          let message = details.exceptionAsString();
          if (message[$startsWith](prefix)) message = message[$substring](prefix.length);
          src__foundation__print.debugPrint("The following " + dart.str(errorName) + " was " + verb + ":\n" + dart.str(message), {wrapWidth: 100});
        }
        let stackLines = details.stack != null ? dart.toString(details.stack)[$trimRight]()[$split]("\n") : null;
        if (core.AssertionError.is(details.exception) && !src__foundation__assertions.FlutterError.is(details.exception)) {
          let ourFault = true;
          if (stackLines != null) {
            let stackList = stackLines[$take](2)[$toList]();
            if (dart.notNull(stackList[$length]) >= 2) {
              let throwPattern = core.RegExp.new("^#0 +_AssertionError._throwNew \\(dart:.+\\)$");
              let assertPattern = core.RegExp.new("^#1 +[^(]+ \\((.+?):([0-9]+)(?::[0-9]+)?\\)$");
              if (dart.test(throwPattern.hasMatch(stackList[$_get](0)))) {
                let assertMatch = assertPattern.firstMatch(stackList[$_get](1));
                if (assertMatch != null) {
                  if (!(assertMatch.groupCount === 2)) dart.assertFailed();
                  let ourLibraryPattern = core.RegExp.new("^package:flutter/");
                  ourFault = ourLibraryPattern.hasMatch(assertMatch.group(1));
                }
              }
            }
          }
          if (dart.test(ourFault)) {
            src__foundation__print.debugPrint("\nEither the assertion indicates an error in the framework itself, or we should " + "provide substantially more information in this error message to help you determine " + "and fix the underlying cause.", {wrapWidth: 100});
            src__foundation__print.debugPrint("In either case, please report this assertion by filing a bug on GitHub:", {wrapWidth: 100});
            src__foundation__print.debugPrint("  https://github.com/flutter/flutter/issues/new?template=BUG.md");
          }
        }
        if (details.stack != null) {
          src__foundation__print.debugPrint("\nWhen the exception was thrown, this was the stack:", {wrapWidth: 100});
          if (details.stackFilter != null) {
            stackLines = details.stackFilter(stackLines);
          } else {
            stackLines = src__foundation__assertions.FlutterError.defaultStackFilter(stackLines);
          }
          for (let line of stackLines)
            src__foundation__print.debugPrint(line, {wrapWidth: 100});
        }
        if (details.informationCollector != null) {
          let information = new core.StringBuffer.new();
          details.informationCollector(information);
          src__foundation__print.debugPrint("\n" + information.toString()[$trimRight](), {wrapWidth: 100});
        }
        src__foundation__print.debugPrint(footer);
      } else {
        src__foundation__print.debugPrint("Another exception was thrown: " + details.exceptionAsString()[$split]("\n")[$_get](0)[$trimLeft]());
      }
      src__foundation__assertions.FlutterError._errorCount = dart.notNull(src__foundation__assertions.FlutterError._errorCount) + 1;
    }
    static defaultStackFilter(frames) {
      let filteredPackages = const$ || (const$ = dart.constList(["dart:async-patch", "dart:async", "package:stack_trace"], core.String));
      let filteredClasses = const$0 || (const$0 = dart.constList(["_AssertionError", "_FakeAsync", "_FrameCallbackEntry"], core.String));
      let stackParser = core.RegExp.new("^#[0-9]+ +([^.]+).* \\(([^/\\\\]*)[/\\\\].+:[0-9]+(?::[0-9]+)?\\)$");
      let packageParser = core.RegExp.new("^([^:]+):(.+)$");
      let result = JSArrayOfString().of([]);
      let skipped = JSArrayOfString().of([]);
      for (let line of frames) {
        let match = stackParser.firstMatch(line);
        if (match != null) {
          if (!(match.groupCount === 2)) dart.assertFailed();
          if (dart.test(filteredPackages[$contains](match.group(2)))) {
            let packageMatch = packageParser.firstMatch(match.group(2));
            if (packageMatch != null && packageMatch.group(1) === "package") {
              skipped[$add]("package " + dart.str(packageMatch.group(2)));
            } else {
              skipped[$add]("package " + dart.str(match.group(2)));
            }
            continue;
          }
          if (dart.test(filteredClasses[$contains](match.group(1)))) {
            skipped[$add]("class " + dart.str(match.group(1)));
            continue;
          }
        }
        result[$add](line);
      }
      if (skipped[$length] === 1) {
        result[$add]("(elided one frame from " + dart.str(skipped[$single]) + ")");
      } else if (dart.notNull(skipped[$length]) > 1) {
        let where = SetOfString().from(skipped).toList();
        where[$sort]();
        if (dart.notNull(where[$length]) > 1) where[$_set](dart.notNull(where[$length]) - 1, "and " + dart.str(where[$last]));
        if (dart.notNull(where[$length]) > 2) {
          result[$add]("(elided " + dart.str(skipped[$length]) + " frames from " + dart.str(where[$join](", ")) + ")");
        } else {
          result[$add]("(elided " + dart.str(skipped[$length]) + " frames from " + dart.str(where[$join](" ")) + ")");
        }
      }
      return result;
    }
    static reportError(details) {
      if (!(details != null)) dart.assertFailed();
      if (!(details.exception != null)) dart.assertFailed();
      if (src__foundation__assertions.FlutterError.onError != null) src__foundation__assertions.FlutterError.onError(details);
    }
  };
  (src__foundation__assertions.FlutterError.new = function(message) {
    src__foundation__assertions.FlutterError.__proto__.new.call(this, message);
  }).prototype = src__foundation__assertions.FlutterError.prototype;
  dart.addTypeTests(src__foundation__assertions.FlutterError);
  dart.setGetterSignature(src__foundation__assertions.FlutterError, () => ({
    __proto__: dart.getGetters(src__foundation__assertions.FlutterError.__proto__),
    message: core.String
  }));
  dart.defineExtensionMethods(src__foundation__assertions.FlutterError, ['toString']);
  dart.defineLazy(src__foundation__assertions.FlutterError, {
    /*src__foundation__assertions.FlutterError.onError*/get onError() {
      return dart.fn(src__foundation__assertions.FlutterError.dumpErrorToConsole, FlutterErrorDetails__Tovoid());
    },
    set onError(_) {},
    /*src__foundation__assertions.FlutterError._errorCount*/get _errorCount() {
      return 0;
    },
    set _errorCount(_) {},
    /*src__foundation__assertions.FlutterError.wrapWidth*/get wrapWidth() {
      return 100;
    }
  });
  src__foundation__assertions.debugPrintStack = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let maxFrames = opts && 'maxFrames' in opts ? opts.maxFrames : null;
    if (label != null) src__foundation__print.debugPrint(label);
    let lines = dart.toString(core.StackTrace.current)[$trimRight]()[$split]("\n");
    if (true) {
      lines = lines[$skip](1);
    }
    if (maxFrames != null) lines = lines[$take](maxFrames);
    src__foundation__print.debugPrint(src__foundation__assertions.FlutterError.defaultStackFilter(lines)[$join]("\n"));
  };
  dart.defineLazy(src__foundation__constants, {
    /*src__foundation__constants.kReleaseMode*/get kReleaseMode() {
      return false;
    },
    /*src__foundation__constants.kProfileMode*/get kProfileMode() {
      return false;
    },
    /*src__foundation__constants.kDebugMode*/get kDebugMode() {
      return !false && !false;
    }
  });
  src__foundation__platform.TargetPlatform = class TargetPlatform extends core.Object {
    toString() {
      return {
        0: "TargetPlatform.android",
        1: "TargetPlatform.fuchsia",
        2: "TargetPlatform.iOS"
      }[this.index];
    }
  };
  (src__foundation__platform.TargetPlatform.new = function(x) {
    this.index = x;
  }).prototype = src__foundation__platform.TargetPlatform.prototype;
  dart.addTypeTests(src__foundation__platform.TargetPlatform);
  dart.setFieldSignature(src__foundation__platform.TargetPlatform, () => ({
    __proto__: dart.getFields(src__foundation__platform.TargetPlatform.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__foundation__platform.TargetPlatform, ['toString']);
  src__foundation__platform.TargetPlatform.android = dart.const(new src__foundation__platform.TargetPlatform.new(0));
  src__foundation__platform.TargetPlatform.fuchsia = dart.const(new src__foundation__platform.TargetPlatform.new(1));
  src__foundation__platform.TargetPlatform.iOS = dart.const(new src__foundation__platform.TargetPlatform.new(2));
  src__foundation__platform.TargetPlatform.values = dart.constList([src__foundation__platform.TargetPlatform.android, src__foundation__platform.TargetPlatform.fuchsia, src__foundation__platform.TargetPlatform.iOS], src__foundation__platform.TargetPlatform);
  dart.copyProperties(src__foundation__platform, {
    get defaultTargetPlatform() {
      if (src__foundation__platform.debugDefaultTargetPlatformOverride != null) return src__foundation__platform.debugDefaultTargetPlatformOverride;
      return src__foundation__platform.TargetPlatform.android;
    }
  });
  dart.defineLazy(src__foundation__platform, {
    /*src__foundation__platform.debugDefaultTargetPlatformOverride*/get debugDefaultTargetPlatformOverride() {
      return null;
    },
    set debugDefaultTargetPlatformOverride(_) {}
  });
  src__foundation__debug.debugAssertAllFoundationVarsUnset = function(reason, opts) {
    let debugPrintOverride = opts && 'debugPrintOverride' in opts ? opts.debugPrintOverride : dart.fn(src__foundation__print.debugPrintThrottled, String__Tovoid());
    if (!dart.test(dart.fn(() => {
      if (!dart.equals(src__foundation__print.debugPrint, debugPrintOverride) || src__foundation__platform.debugDefaultTargetPlatformOverride != null) dart.throw(new src__foundation__assertions.FlutterError.new(reason));
      return true;
    }, VoidTobool())())) dart.assertFailed();
    return true;
  };
  dart.defineLazy(src__foundation__debug, {
    /*src__foundation__debug.debugInstrumentationEnabled*/get debugInstrumentationEnabled() {
      return false;
    },
    set debugInstrumentationEnabled(_) {}
  });
  src__foundation__debug.debugInstrumentAction = function(T, description, action) {
    let instrument = false;
    if (!dart.test(dart.fn(() => {
      instrument = src__foundation__debug.debugInstrumentationEnabled;
      return true;
    }, VoidTobool())())) dart.assertFailed();
    if (dart.test(instrument)) {
      let stopwatch = new core.Stopwatch.new();
      stopwatch.start();
      return action().whenComplete(dart.fn(() => {
        stopwatch.stop();
        src__foundation__print.debugPrint("Action \"" + dart.str(description) + "\" took " + dart.str(stopwatch.elapsed));
      }, VoidToNull()));
    } else {
      return action();
    }
  };
  dart.defineLazy(src__foundation__debug, {
    /*src__foundation__debug.timelineWhitelistArguments*/get timelineWhitelistArguments() {
      return dart.constMap(core.String, core.String, ["mode", "basic"]);
    }
  });
  const _lockCount = dart.privateName(src__foundation__binding, "_lockCount");
  const _postExtensionStateChangedEvent = dart.privateName(src__foundation__binding, "_postExtensionStateChangedEvent");
  src__foundation__binding.BindingBase = class BindingBase extends core.Object {
    get window() {
      return ui$.window;
    }
    initInstances() {
      if (!!dart.test(src__foundation__binding.BindingBase._debugInitialized)) dart.assertFailed();
      if (!dart.test(dart.fn(() => {
        src__foundation__binding.BindingBase._debugInitialized = true;
        return true;
      }, VoidTobool())())) dart.assertFailed();
    }
    initServiceExtensions() {
      if (!!dart.test(src__foundation__binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed();
      if (!dart.test(dart.fn(() => {
        this.registerSignalServiceExtension({name: "reassemble", callback: dart.bind(this, 'reassembleApplication')});
        return true;
      }, VoidTobool())())) dart.assertFailed();
      if (!false && !true) {
        this.registerSignalServiceExtension({name: "exit", callback: dart.fn(src__foundation__binding._exitApplication, VoidToFutureOfvoid())});
        this.registerServiceExtension({name: "saveCompilationTrace", callback: dart.fn(parameters => async.async(MapOfString$dynamic(), function*() {
            return new (IdentityMapOfString$dynamic()).from(["value", ui$.saveCompilationTrace()]);
          }), MapOfString$StringToFutureOfMapOfString$dynamic())});
      }
      if (!dart.test(dart.fn(() => {
        if (true) return true;
        let platformOverrideExtensionName = "platformOverride";
        this.registerServiceExtension({name: platformOverrideExtensionName, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
            if (dart.test(parameters[$containsKey]("value"))) {
              switch (parameters[$_get]("value")) {
                case "android":
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = src__foundation__platform.TargetPlatform.android;
                  break;
                }
                case "iOS":
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = src__foundation__platform.TargetPlatform.iOS;
                  break;
                }
                case "fuchsia":
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = src__foundation__platform.TargetPlatform.fuchsia;
                  break;
                }
                case "default":
                default:
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = null;
                }
              }
              this[_postExtensionStateChangedEvent](platformOverrideExtensionName, dart.toString(src__foundation__platform.defaultTargetPlatform)[$substring]((dart.str(dart.wrapType(src__foundation__platform.TargetPlatform)) + ".").length));
              yield this.reassembleApplication();
            }
            return new (IdentityMapOfString$dynamic()).from(["value", dart.toString(src__foundation__platform.defaultTargetPlatform)[$substring]((dart.str(dart.wrapType(src__foundation__platform.TargetPlatform)) + ".").length)]);
          }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
        return true;
      }, VoidTobool())())) dart.assertFailed();
      if (!dart.test(dart.fn(() => {
        src__foundation__binding.BindingBase._debugServiceExtensionsRegistered = true;
        return true;
      }, VoidTobool())())) dart.assertFailed();
    }
    get locked() {
      return dart.notNull(this[_lockCount]) > 0;
    }
    lockEvents(callback) {
      developer.Timeline.startSync("Lock events");
      if (!(callback != null)) dart.assertFailed();
      this[_lockCount] = dart.notNull(this[_lockCount]) + 1;
      let future = callback();
      if (!(future != null)) dart.assertFailed("The lockEvents() callback returned null; it should return a Future<void> that completes when the lock is to expire.");
      future.whenComplete(dart.fn(() => {
        this[_lockCount] = dart.notNull(this[_lockCount]) - 1;
        if (!dart.test(this.locked)) {
          developer.Timeline.finishSync();
          this.unlocked();
        }
      }, VoidToNull()));
      return future;
    }
    unlocked() {
      if (!!dart.test(this.locked)) dart.assertFailed();
    }
    reassembleApplication() {
      return this.lockEvents(dart.bind(this, 'performReassemble'));
    }
    performReassemble() {
      src__foundation__assertions.FlutterError.resetErrorCount();
      return FutureOfvoid().value();
    }
    registerSignalServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name != null)) dart.assertFailed();
      if (!(callback != null)) dart.assertFailed();
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), function*() {
          yield callback();
          return new (IdentityMapOfString$dynamic()).new();
        }), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerBoolServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed();
      if (!(getter != null)) dart.assertFailed();
      if (!(setter != null)) dart.assertFailed();
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey]("enabled"))) {
            yield setter(parameters[$_get]("enabled") === "true");
            this[_postExtensionStateChangedEvent](name, dart.test(yield getter()) ? "true" : "false");
          }
          return new (IdentityMapOfString$dynamic()).from(["enabled", dart.test(yield getter()) ? "true" : "false"]);
        }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerNumericServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed();
      if (!(getter != null)) dart.assertFailed();
      if (!(setter != null)) dart.assertFailed();
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey](name))) {
            yield setter(core.double.parse(parameters[$_get](name)));
            this[_postExtensionStateChangedEvent](name, dart.toString(yield getter()));
          }
          return new (IdentityMapOfString$dynamic()).from([name, dart.toString(yield getter())]);
        }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    [_postExtensionStateChangedEvent](name, value) {
      this.postEvent("Flutter.ServiceExtensionStateChanged", new (IdentityMapOfString$dynamic()).from(["extension", "ext.flutter." + dart.str(name), "value", value]));
    }
    postEvent(eventKind, eventData) {
      developer.postEvent(eventKind, eventData);
    }
    registerStringServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed();
      if (!(getter != null)) dart.assertFailed();
      if (!(setter != null)) dart.assertFailed();
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey]("value"))) {
            yield setter(parameters[$_get]("value"));
            this[_postExtensionStateChangedEvent](name, yield getter());
          }
          return new (IdentityMapOfString$dynamic()).from(["value", (yield getter())]);
        }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name != null)) dart.assertFailed();
      if (!(callback != null)) dart.assertFailed();
      let methodName = "ext.flutter." + dart.str(name);
      developer.registerExtension(methodName, dart.fn((method, parameters) => async.async(developer.ServiceExtensionResponse, function*() {
        if (!(method === methodName)) dart.assertFailed();
        if (!dart.test(dart.fn(() => {
          if (dart.test(src__foundation__debug.debugInstrumentationEnabled)) src__foundation__print.debugPrint("service extension method received: " + dart.str(method) + "(" + dart.str(parameters) + ")");
          return true;
        }, VoidTobool())())) dart.assertFailed();
        yield src__foundation__debug.debugInstrumentAction(dart.void, "Wait for outer event loop", dart.fn(() => FutureOfvoid().delayed(core.Duration.zero), VoidToFutureOfvoid()));
        let caughtException = null;
        let caughtStack = null;
        let result = null;
        try {
          result = (yield callback(parameters));
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          caughtException = exception;
          caughtStack = stack;
        }
        if (caughtException == null) {
          result[$_set]("type", "_extensionType");
          result[$_set]("method", method);
          return new developer.ServiceExtensionResponse.result(convert.json.encode(result));
        } else {
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: caughtException, stack: caughtStack, context: "during a service extension callback for \"" + dart.str(method) + "\""}));
          return new developer.ServiceExtensionResponse.error(developer.ServiceExtensionResponse.extensionError, convert.json.encode(new (IdentityMapOfString$String()).from(["exception", dart.toString(caughtException), "stack", dart.toString(caughtStack), "method", method])));
        }
      }), StringAndMapOfString$StringToFutureOfServiceExtensionResponse()));
    }
    toString() {
      return "<" + dart.str(this[$runtimeType]) + ">";
    }
  };
  (src__foundation__binding.BindingBase.new = function() {
    this[_lockCount] = 0;
    developer.Timeline.startSync("Framework initialization");
    if (!!dart.test(src__foundation__binding.BindingBase._debugInitialized)) dart.assertFailed();
    this.initInstances();
    if (!dart.test(src__foundation__binding.BindingBase._debugInitialized)) dart.assertFailed();
    if (!!dart.test(src__foundation__binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed();
    this.initServiceExtensions();
    if (!dart.test(src__foundation__binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed();
    developer.postEvent("Flutter.FrameworkInitialization", new (IdentityMapOfString$String()).new());
    developer.Timeline.finishSync();
  }).prototype = src__foundation__binding.BindingBase.prototype;
  dart.addTypeTests(src__foundation__binding.BindingBase);
  dart.setMethodSignature(src__foundation__binding.BindingBase, () => ({
    __proto__: dart.getMethods(src__foundation__binding.BindingBase.__proto__),
    initInstances: dart.fnType(dart.void, []),
    initServiceExtensions: dart.fnType(dart.void, []),
    lockEvents: dart.fnType(async.Future$(dart.void), [dart.fnType(async.Future$(dart.void), [])]),
    unlocked: dart.fnType(dart.void, []),
    reassembleApplication: dart.fnType(async.Future$(dart.void), []),
    performReassemble: dart.fnType(async.Future$(dart.void), []),
    registerSignalServiceExtension: dart.fnType(dart.void, [], {name: core.String, callback: dart.fnType(async.Future$(dart.void), [])}),
    registerBoolServiceExtension: dart.fnType(dart.void, [], {name: core.String, getter: dart.fnType(async.Future$(core.bool), []), setter: dart.fnType(async.Future$(dart.void), [core.bool])}),
    registerNumericServiceExtension: dart.fnType(dart.void, [], {name: core.String, getter: dart.fnType(async.Future$(core.double), []), setter: dart.fnType(async.Future$(dart.void), [core.double])}),
    [_postExtensionStateChangedEvent]: dart.fnType(dart.void, [core.String, dart.dynamic]),
    postEvent: dart.fnType(dart.void, [core.String, core.Map$(core.String, dart.dynamic)]),
    registerStringServiceExtension: dart.fnType(dart.void, [], {name: core.String, getter: dart.fnType(async.Future$(core.String), []), setter: dart.fnType(async.Future$(dart.void), [core.String])}),
    registerServiceExtension: dart.fnType(dart.void, [], {name: core.String, callback: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [core.Map$(core.String, core.String)])})
  }));
  dart.setGetterSignature(src__foundation__binding.BindingBase, () => ({
    __proto__: dart.getGetters(src__foundation__binding.BindingBase.__proto__),
    window: ui$.Window,
    locked: core.bool
  }));
  dart.setFieldSignature(src__foundation__binding.BindingBase, () => ({
    __proto__: dart.getFields(src__foundation__binding.BindingBase.__proto__),
    [_lockCount]: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(src__foundation__binding.BindingBase, ['toString']);
  dart.defineLazy(src__foundation__binding.BindingBase, {
    /*src__foundation__binding.BindingBase._debugInitialized*/get _debugInitialized() {
      return false;
    },
    set _debugInitialized(_) {},
    /*src__foundation__binding.BindingBase._debugServiceExtensionsRegistered*/get _debugServiceExtensionsRegistered() {
      return false;
    },
    set _debugServiceExtensionsRegistered(_) {}
  });
  src__foundation__binding._exitApplication = function() {
    return async.async(dart.void, function* _exitApplication() {
      io$.exit(0);
    });
  };
  dart.defineLazy(src__foundation__bitfield, {
    /*src__foundation__bitfield.kMaxUnsignedSMI*/get kMaxUnsignedSMI() {
      return -1;
    }
  });
  const _length = dart.privateName(src__foundation__bitfield, "_length");
  const _bits = dart.privateName(src__foundation__bitfield, "_bits");
  const _is_BitField_default = Symbol('_is_BitField_default');
  src__foundation__bitfield.BitField$ = dart.generic(T => {
    class BitField extends core.Object {
      _get(index) {
        T._check(index);
        if (!dart.dassert(dart.dsend(dart.dload(index, 'index'), '<', [this[_length]]))) dart.assertFailed();
        return (dart.notNull(this[_bits]) & (1)[$leftShift](core.int._check(dart.dload(index, 'index')))) >>> 0 > 0;
      }
      _set(index, value) {
        T._check(index);
        if (!dart.dassert(dart.dsend(dart.dload(index, 'index'), '<', [this[_length]]))) dart.assertFailed();
        if (dart.test(value))
          this[_bits] = (dart.notNull(this[_bits]) | (1)[$leftShift](core.int._check(dart.dload(index, 'index')))) >>> 0;
        else
          this[_bits] = (dart.notNull(this[_bits]) & ~(1)[$leftShift](core.int._check(dart.dload(index, 'index')))) >>> 0;
        return value;
      }
      reset(value) {
        if (value === void 0) value = false;
        this[_bits] = dart.test(value) ? -1 : 0;
      }
    }
    (BitField.new = function(length) {
      this[_length] = length;
      if (!(dart.notNull(length) <= 62)) dart.assertFailed();
      this[_bits] = 0;
    }).prototype = BitField.prototype;
    (BitField.filled = function(length, value) {
      this[_length] = length;
      if (!(dart.notNull(length) <= 62)) dart.assertFailed();
      this[_bits] = dart.test(value) ? -1 : 0;
    }).prototype = BitField.prototype;
    dart.addTypeTests(BitField);
    BitField.prototype[_is_BitField_default] = true;
    dart.setMethodSignature(BitField, () => ({
      __proto__: dart.getMethods(BitField.__proto__),
      _get: dart.fnType(core.bool, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.bool]),
      reset: dart.fnType(dart.void, [], [core.bool])
    }));
    dart.setFieldSignature(BitField, () => ({
      __proto__: dart.getFields(BitField.__proto__),
      [_length]: dart.finalFieldType(core.int),
      [_bits]: dart.fieldType(core.int)
    }));
    return BitField;
  });
  src__foundation__bitfield.BitField = src__foundation__bitfield.BitField$();
  dart.defineLazy(src__foundation__bitfield.BitField, {
    /*src__foundation__bitfield.BitField._smiBits*/get _smiBits() {
      return 62;
    },
    /*src__foundation__bitfield.BitField._allZeros*/get _allZeros() {
      return 0;
    },
    /*src__foundation__bitfield.BitField._allOnes*/get _allOnes() {
      return -1;
    }
  });
  dart.addTypeTests(src__foundation__bitfield.BitField, _is_BitField_default);
  dart.copyProperties(src__util, {
    get assertionsEnabled() {
      let k = false;
      if (!(k = true)) dart.assertFailed();
      return k;
    }
  });
  dart.defineLazy(src__util, {
    /*src__util.debugIsInTest*/get debugIsInTest() {
      return false;
    },
    set debugIsInTest(_) {}
  });
  src__foundation__diagnostics.DiagnosticLevel = class DiagnosticLevel extends core.Object {
    toString() {
      return {
        0: "DiagnosticLevel.hidden",
        1: "DiagnosticLevel.fine",
        2: "DiagnosticLevel.debug",
        3: "DiagnosticLevel.info",
        4: "DiagnosticLevel.warning",
        5: "DiagnosticLevel.error",
        6: "DiagnosticLevel.off"
      }[this.index];
    }
  };
  (src__foundation__diagnostics.DiagnosticLevel.new = function(x) {
    this.index = x;
  }).prototype = src__foundation__diagnostics.DiagnosticLevel.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticLevel);
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticLevel, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticLevel.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics.DiagnosticLevel, ['toString']);
  src__foundation__diagnostics.DiagnosticLevel.hidden = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(0));
  src__foundation__diagnostics.DiagnosticLevel.fine = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(1));
  src__foundation__diagnostics.DiagnosticLevel.debug = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(2));
  src__foundation__diagnostics.DiagnosticLevel.info = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(3));
  src__foundation__diagnostics.DiagnosticLevel.warning = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(4));
  src__foundation__diagnostics.DiagnosticLevel.error = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(5));
  src__foundation__diagnostics.DiagnosticLevel.off = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(6));
  src__foundation__diagnostics.DiagnosticLevel.values = dart.constList([src__foundation__diagnostics.DiagnosticLevel.hidden, src__foundation__diagnostics.DiagnosticLevel.fine, src__foundation__diagnostics.DiagnosticLevel.debug, src__foundation__diagnostics.DiagnosticLevel.info, src__foundation__diagnostics.DiagnosticLevel.warning, src__foundation__diagnostics.DiagnosticLevel.error, src__foundation__diagnostics.DiagnosticLevel.off], src__foundation__diagnostics.DiagnosticLevel);
  src__foundation__diagnostics.DiagnosticsTreeStyle = class DiagnosticsTreeStyle extends core.Object {
    toString() {
      return {
        0: "DiagnosticsTreeStyle.sparse",
        1: "DiagnosticsTreeStyle.offstage",
        2: "DiagnosticsTreeStyle.dense",
        3: "DiagnosticsTreeStyle.transition",
        4: "DiagnosticsTreeStyle.whitespace",
        5: "DiagnosticsTreeStyle.singleLine"
      }[this.index];
    }
  };
  (src__foundation__diagnostics.DiagnosticsTreeStyle.new = function(x) {
    this.index = x;
  }).prototype = src__foundation__diagnostics.DiagnosticsTreeStyle.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticsTreeStyle);
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticsTreeStyle, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticsTreeStyle.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics.DiagnosticsTreeStyle, ['toString']);
  src__foundation__diagnostics.DiagnosticsTreeStyle.sparse = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(0));
  src__foundation__diagnostics.DiagnosticsTreeStyle.offstage = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(1));
  src__foundation__diagnostics.DiagnosticsTreeStyle.dense = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(2));
  src__foundation__diagnostics.DiagnosticsTreeStyle.transition = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(3));
  src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(4));
  src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(5));
  src__foundation__diagnostics.DiagnosticsTreeStyle.values = dart.constList([src__foundation__diagnostics.DiagnosticsTreeStyle.sparse, src__foundation__diagnostics.DiagnosticsTreeStyle.offstage, src__foundation__diagnostics.DiagnosticsTreeStyle.dense, src__foundation__diagnostics.DiagnosticsTreeStyle.transition, src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace, src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine], src__foundation__diagnostics.DiagnosticsTreeStyle);
  src__foundation__diagnostics.TextTreeConfiguration = class TextTreeConfiguration extends core.Object {
    get prefixLineOne() {
      return this[prefixLineOne$];
    }
    set prefixLineOne(value) {
      super.prefixLineOne = value;
    }
    get prefixOtherLines() {
      return this[prefixOtherLines$];
    }
    set prefixOtherLines(value) {
      super.prefixOtherLines = value;
    }
    get prefixLastChildLineOne() {
      return this[prefixLastChildLineOne$];
    }
    set prefixLastChildLineOne(value) {
      super.prefixLastChildLineOne = value;
    }
    get prefixOtherLinesRootNode() {
      return this[prefixOtherLinesRootNode$];
    }
    set prefixOtherLinesRootNode(value) {
      super.prefixOtherLinesRootNode = value;
    }
    get propertyPrefixIfChildren() {
      return this[propertyPrefixIfChildren$];
    }
    set propertyPrefixIfChildren(value) {
      super.propertyPrefixIfChildren = value;
    }
    get propertyPrefixNoChildren() {
      return this[propertyPrefixNoChildren$];
    }
    set propertyPrefixNoChildren(value) {
      super.propertyPrefixNoChildren = value;
    }
    get linkCharacter() {
      return this[linkCharacter$];
    }
    set linkCharacter(value) {
      super.linkCharacter = value;
    }
    get childLinkSpace() {
      return this[childLinkSpace];
    }
    set childLinkSpace(value) {
      super.childLinkSpace = value;
    }
    get lineBreak() {
      return this[lineBreak$];
    }
    set lineBreak(value) {
      super.lineBreak = value;
    }
    get lineBreakProperties() {
      return this[lineBreakProperties$];
    }
    set lineBreakProperties(value) {
      super.lineBreakProperties = value;
    }
    get afterName() {
      return this[afterName$];
    }
    set afterName(value) {
      super.afterName = value;
    }
    get afterDescriptionIfBody() {
      return this[afterDescriptionIfBody$];
    }
    set afterDescriptionIfBody(value) {
      super.afterDescriptionIfBody = value;
    }
    get beforeProperties() {
      return this[beforeProperties$];
    }
    set beforeProperties(value) {
      super.beforeProperties = value;
    }
    get afterProperties() {
      return this[afterProperties$];
    }
    set afterProperties(value) {
      super.afterProperties = value;
    }
    get propertySeparator() {
      return this[propertySeparator$];
    }
    set propertySeparator(value) {
      super.propertySeparator = value;
    }
    get bodyIndent() {
      return this[bodyIndent$];
    }
    set bodyIndent(value) {
      super.bodyIndent = value;
    }
    get showChildren() {
      return this[showChildren$];
    }
    set showChildren(value) {
      super.showChildren = value;
    }
    get addBlankLineIfNoChildren() {
      return this[addBlankLineIfNoChildren$];
    }
    set addBlankLineIfNoChildren(value) {
      super.addBlankLineIfNoChildren = value;
    }
    get isNameOnOwnLine() {
      return this[isNameOnOwnLine$];
    }
    set isNameOnOwnLine(value) {
      super.isNameOnOwnLine = value;
    }
    get footer() {
      return this[footer$];
    }
    set footer(value) {
      super.footer = value;
    }
    get isBlankLineBetweenPropertiesAndChildren() {
      return this[isBlankLineBetweenPropertiesAndChildren$];
    }
    set isBlankLineBetweenPropertiesAndChildren(value) {
      super.isBlankLineBetweenPropertiesAndChildren = value;
    }
  };
  (src__foundation__diagnostics.TextTreeConfiguration.new = function(opts) {
    let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
    let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
    let prefixLastChildLineOne = opts && 'prefixLastChildLineOne' in opts ? opts.prefixLastChildLineOne : null;
    let prefixOtherLinesRootNode = opts && 'prefixOtherLinesRootNode' in opts ? opts.prefixOtherLinesRootNode : null;
    let linkCharacter = opts && 'linkCharacter' in opts ? opts.linkCharacter : null;
    let propertyPrefixIfChildren = opts && 'propertyPrefixIfChildren' in opts ? opts.propertyPrefixIfChildren : null;
    let propertyPrefixNoChildren = opts && 'propertyPrefixNoChildren' in opts ? opts.propertyPrefixNoChildren : null;
    let lineBreak = opts && 'lineBreak' in opts ? opts.lineBreak : "\n";
    let lineBreakProperties = opts && 'lineBreakProperties' in opts ? opts.lineBreakProperties : true;
    let afterName = opts && 'afterName' in opts ? opts.afterName : ":";
    let afterDescriptionIfBody = opts && 'afterDescriptionIfBody' in opts ? opts.afterDescriptionIfBody : "";
    let beforeProperties = opts && 'beforeProperties' in opts ? opts.beforeProperties : "";
    let afterProperties = opts && 'afterProperties' in opts ? opts.afterProperties : "";
    let propertySeparator = opts && 'propertySeparator' in opts ? opts.propertySeparator : "";
    let bodyIndent = opts && 'bodyIndent' in opts ? opts.bodyIndent : "";
    let footer = opts && 'footer' in opts ? opts.footer : "";
    let showChildren = opts && 'showChildren' in opts ? opts.showChildren : true;
    let addBlankLineIfNoChildren = opts && 'addBlankLineIfNoChildren' in opts ? opts.addBlankLineIfNoChildren : true;
    let isNameOnOwnLine = opts && 'isNameOnOwnLine' in opts ? opts.isNameOnOwnLine : false;
    let isBlankLineBetweenPropertiesAndChildren = opts && 'isBlankLineBetweenPropertiesAndChildren' in opts ? opts.isBlankLineBetweenPropertiesAndChildren : true;
    this[prefixLineOne$] = prefixLineOne;
    this[prefixOtherLines$] = prefixOtherLines;
    this[prefixLastChildLineOne$] = prefixLastChildLineOne;
    this[prefixOtherLinesRootNode$] = prefixOtherLinesRootNode;
    this[linkCharacter$] = linkCharacter;
    this[propertyPrefixIfChildren$] = propertyPrefixIfChildren;
    this[propertyPrefixNoChildren$] = propertyPrefixNoChildren;
    this[lineBreak$] = lineBreak;
    this[lineBreakProperties$] = lineBreakProperties;
    this[afterName$] = afterName;
    this[afterDescriptionIfBody$] = afterDescriptionIfBody;
    this[beforeProperties$] = beforeProperties;
    this[afterProperties$] = afterProperties;
    this[propertySeparator$] = propertySeparator;
    this[bodyIndent$] = bodyIndent;
    this[footer$] = footer;
    this[showChildren$] = showChildren;
    this[addBlankLineIfNoChildren$] = addBlankLineIfNoChildren;
    this[isNameOnOwnLine$] = isNameOnOwnLine;
    this[isBlankLineBetweenPropertiesAndChildren$] = isBlankLineBetweenPropertiesAndChildren;
    if (!(prefixLineOne != null)) dart.assertFailed();
    if (!(prefixOtherLines != null)) dart.assertFailed();
    if (!(prefixLastChildLineOne != null)) dart.assertFailed();
    if (!(prefixOtherLinesRootNode != null)) dart.assertFailed();
    if (!(linkCharacter != null)) dart.assertFailed();
    if (!(propertyPrefixIfChildren != null)) dart.assertFailed();
    if (!(propertyPrefixNoChildren != null)) dart.assertFailed();
    if (!(lineBreak != null)) dart.assertFailed();
    if (!(lineBreakProperties != null)) dart.assertFailed();
    if (!(afterName != null)) dart.assertFailed();
    if (!(afterDescriptionIfBody != null)) dart.assertFailed();
    if (!(beforeProperties != null)) dart.assertFailed();
    if (!(afterProperties != null)) dart.assertFailed();
    if (!(propertySeparator != null)) dart.assertFailed();
    if (!(bodyIndent != null)) dart.assertFailed();
    if (!(footer != null)) dart.assertFailed();
    if (!(showChildren != null)) dart.assertFailed();
    if (!(addBlankLineIfNoChildren != null)) dart.assertFailed();
    if (!(isNameOnOwnLine != null)) dart.assertFailed();
    if (!(isBlankLineBetweenPropertiesAndChildren != null)) dart.assertFailed();
    this[childLinkSpace] = " "[$times](linkCharacter.length);
  }).prototype = src__foundation__diagnostics.TextTreeConfiguration.prototype;
  dart.addTypeTests(src__foundation__diagnostics.TextTreeConfiguration);
  const prefixLineOne$ = Symbol("TextTreeConfiguration.prefixLineOne");
  const prefixOtherLines$ = Symbol("TextTreeConfiguration.prefixOtherLines");
  const prefixLastChildLineOne$ = Symbol("TextTreeConfiguration.prefixLastChildLineOne");
  const prefixOtherLinesRootNode$ = Symbol("TextTreeConfiguration.prefixOtherLinesRootNode");
  const propertyPrefixIfChildren$ = Symbol("TextTreeConfiguration.propertyPrefixIfChildren");
  const propertyPrefixNoChildren$ = Symbol("TextTreeConfiguration.propertyPrefixNoChildren");
  const linkCharacter$ = Symbol("TextTreeConfiguration.linkCharacter");
  const childLinkSpace = Symbol("TextTreeConfiguration.childLinkSpace");
  const lineBreak$ = Symbol("TextTreeConfiguration.lineBreak");
  const lineBreakProperties$ = Symbol("TextTreeConfiguration.lineBreakProperties");
  const afterName$ = Symbol("TextTreeConfiguration.afterName");
  const afterDescriptionIfBody$ = Symbol("TextTreeConfiguration.afterDescriptionIfBody");
  const beforeProperties$ = Symbol("TextTreeConfiguration.beforeProperties");
  const afterProperties$ = Symbol("TextTreeConfiguration.afterProperties");
  const propertySeparator$ = Symbol("TextTreeConfiguration.propertySeparator");
  const bodyIndent$ = Symbol("TextTreeConfiguration.bodyIndent");
  const showChildren$ = Symbol("TextTreeConfiguration.showChildren");
  const addBlankLineIfNoChildren$ = Symbol("TextTreeConfiguration.addBlankLineIfNoChildren");
  const isNameOnOwnLine$ = Symbol("TextTreeConfiguration.isNameOnOwnLine");
  const footer$ = Symbol("TextTreeConfiguration.footer");
  const isBlankLineBetweenPropertiesAndChildren$ = Symbol("TextTreeConfiguration.isBlankLineBetweenPropertiesAndChildren");
  dart.setFieldSignature(src__foundation__diagnostics.TextTreeConfiguration, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.TextTreeConfiguration.__proto__),
    prefixLineOne: dart.finalFieldType(core.String),
    prefixOtherLines: dart.finalFieldType(core.String),
    prefixLastChildLineOne: dart.finalFieldType(core.String),
    prefixOtherLinesRootNode: dart.finalFieldType(core.String),
    propertyPrefixIfChildren: dart.finalFieldType(core.String),
    propertyPrefixNoChildren: dart.finalFieldType(core.String),
    linkCharacter: dart.finalFieldType(core.String),
    childLinkSpace: dart.finalFieldType(core.String),
    lineBreak: dart.finalFieldType(core.String),
    lineBreakProperties: dart.finalFieldType(core.bool),
    afterName: dart.finalFieldType(core.String),
    afterDescriptionIfBody: dart.finalFieldType(core.String),
    beforeProperties: dart.finalFieldType(core.String),
    afterProperties: dart.finalFieldType(core.String),
    propertySeparator: dart.finalFieldType(core.String),
    bodyIndent: dart.finalFieldType(core.String),
    showChildren: dart.finalFieldType(core.bool),
    addBlankLineIfNoChildren: dart.finalFieldType(core.bool),
    isNameOnOwnLine: dart.finalFieldType(core.bool),
    footer: dart.finalFieldType(core.String),
    isBlankLineBetweenPropertiesAndChildren: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(src__foundation__diagnostics, {
    /*src__foundation__diagnostics.sparseTextConfiguration*/get sparseTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "├─", prefixOtherLines: " ", prefixLastChildLineOne: "└─", linkCharacter: "│", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*src__foundation__diagnostics.dashedTextConfiguration*/get dashedTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "╎╌", prefixLastChildLineOne: "└╌", prefixOtherLines: " ", linkCharacter: "╎", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*src__foundation__diagnostics.denseTextConfiguration*/get denseTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", lineBreakProperties: false, prefixLineOne: "├", prefixOtherLines: "", prefixLastChildLineOne: "└", linkCharacter: "│", propertyPrefixIfChildren: "│", propertyPrefixNoChildren: " ", prefixOtherLinesRootNode: "", addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.transitionTextConfiguration*/get transitionTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "╞═╦══ ", prefixLastChildLineOne: "╘═╦══ ", prefixOtherLines: " ║ ", footer: " ╚═══════════\n", linkCharacter: "│", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", prefixOtherLinesRootNode: "", afterName: " ═══", afterDescriptionIfBody: ":", bodyIndent: "  ", isNameOnOwnLine: true, addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.whitespaceTextConfiguration*/get whitespaceTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: " ", prefixOtherLinesRootNode: "  ", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: " ", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.singleLineTextConfiguration*/get singleLineTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", prefixLineOne: "", prefixOtherLines: "", prefixLastChildLineOne: "", lineBreak: "", lineBreakProperties: false, addBlankLineIfNoChildren: false, showChildren: false, propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: "", prefixOtherLinesRootNode: ""});
    }
  });
  const _buffer = dart.privateName(src__foundation__diagnostics, "_buffer");
  const _atLineStart = dart.privateName(src__foundation__diagnostics, "_atLineStart");
  const _hasMultipleLines = dart.privateName(src__foundation__diagnostics, "_hasMultipleLines");
  src__foundation__diagnostics._PrefixedStringBuilder = class _PrefixedStringBuilder extends core.Object {
    get hasMultipleLines() {
      return this[_hasMultipleLines];
    }
    write(s) {
      if (s[$isEmpty]) return;
      if (s === "\n") {
        if (dart.test(this[_buffer].isEmpty)) {
          this[_buffer].write(this.prefixLineOne[$trimRight]());
        } else if (dart.test(this[_atLineStart])) {
          this[_buffer].write(this.prefixOtherLines[$trimRight]());
          this[_hasMultipleLines] = true;
        }
        this[_buffer].write("\n");
        this[_atLineStart] = true;
        return;
      }
      if (dart.test(this[_buffer].isEmpty)) {
        this[_buffer].write(this.prefixLineOne);
      } else if (dart.test(this[_atLineStart])) {
        this[_buffer].write(this.prefixOtherLines);
        this[_hasMultipleLines] = true;
      }
      let lineTerminated = false;
      if (s[$endsWith]("\n")) {
        s = s[$substring](0, s.length - 1);
        lineTerminated = true;
      }
      let parts = s[$split]("\n");
      this[_buffer].write(parts[$_get](0));
      for (let i = 1; i < dart.notNull(parts[$length]); ++i) {
        this[_buffer].write("\n");
        this[_buffer].write(this.prefixOtherLines);
        this[_buffer].write(parts[$_get](i));
      }
      if (lineTerminated) this[_buffer].write("\n");
      this[_atLineStart] = lineTerminated;
    }
    writeRaw(text) {
      if (text[$isEmpty]) return;
      this[_buffer].write(text);
      this[_atLineStart] = text[$endsWith]("\n");
    }
    writeRawLine(line) {
      if (line[$isEmpty]) return;
      this[_buffer].write(line);
      if (!line[$endsWith]("\n")) this[_buffer].write("\n");
      this[_atLineStart] = true;
    }
    toString() {
      return dart.toString(this[_buffer]);
    }
  };
  (src__foundation__diagnostics._PrefixedStringBuilder.new = function(prefixLineOne, prefixOtherLines) {
    this[_buffer] = new core.StringBuffer.new();
    this[_atLineStart] = true;
    this[_hasMultipleLines] = false;
    this.prefixLineOne = prefixLineOne;
    this.prefixOtherLines = prefixOtherLines;
  }).prototype = src__foundation__diagnostics._PrefixedStringBuilder.prototype;
  dart.addTypeTests(src__foundation__diagnostics._PrefixedStringBuilder);
  dart.setMethodSignature(src__foundation__diagnostics._PrefixedStringBuilder, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics._PrefixedStringBuilder.__proto__),
    write: dart.fnType(dart.void, [core.String]),
    writeRaw: dart.fnType(dart.void, [core.String]),
    writeRawLine: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(src__foundation__diagnostics._PrefixedStringBuilder, () => ({
    __proto__: dart.getGetters(src__foundation__diagnostics._PrefixedStringBuilder.__proto__),
    hasMultipleLines: core.bool
  }));
  dart.setFieldSignature(src__foundation__diagnostics._PrefixedStringBuilder, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics._PrefixedStringBuilder.__proto__),
    prefixLineOne: dart.finalFieldType(core.String),
    prefixOtherLines: dart.fieldType(core.String),
    [_buffer]: dart.finalFieldType(core.StringBuffer),
    [_atLineStart]: dart.fieldType(core.bool),
    [_hasMultipleLines]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics._PrefixedStringBuilder, ['toString']);
  src__foundation__diagnostics._NoDefaultValue = class _NoDefaultValue extends core.Object {};
  (src__foundation__diagnostics._NoDefaultValue.new = function() {
  }).prototype = src__foundation__diagnostics._NoDefaultValue.prototype;
  dart.addTypeTests(src__foundation__diagnostics._NoDefaultValue);
  dart.defineLazy(src__foundation__diagnostics, {
    /*src__foundation__diagnostics.kNoDefaultValue*/get kNoDefaultValue() {
      return dart.const(new src__foundation__diagnostics._NoDefaultValue.new());
    }
  });
  const _separator = dart.privateName(src__foundation__diagnostics, "_separator");
  const _childTextConfiguration = dart.privateName(src__foundation__diagnostics, "_childTextConfiguration");
  src__foundation__diagnostics.DiagnosticsNode = class DiagnosticsNode extends core.Object {
    static message(message, opts) {
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(style != null)) dart.assertFailed();
      if (!(level != null)) dart.assertFailed();
      return new (DiagnosticsPropertyOfNull()).new("", null, {description: message, style: style, showName: false, level: level});
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get showSeparator() {
      return this[showSeparator$];
    }
    set showSeparator(value) {
      super.showSeparator = value;
    }
    isFiltered(minLevel) {
      return dart.notNull(this.level.index) < dart.notNull(minLevel.index);
    }
    get level() {
      return src__foundation__diagnostics.DiagnosticLevel.info;
    }
    get showName() {
      return this[showName$];
    }
    set showName(value) {
      super.showName = value;
    }
    get emptyBodyDescription() {
      return null;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get [_separator]() {
      return dart.test(this.showSeparator) ? ":" : "";
    }
    toJsonMap() {
      let data = new (IdentityMapOfString$Object()).from(["name", this.name, "showSeparator", this.showSeparator, "description", this.toDescription(), "level", src__foundation__diagnostics.describeEnum(this.level), "showName", this.showName, "emptyBodyDescription", this.emptyBodyDescription, "style", src__foundation__diagnostics.describeEnum(this.style), "valueToString", dart.toString(this.value), "type", dart.toString(this[$runtimeType]), "hasChildren", this.getChildren()[$isNotEmpty]]);
      return data;
    }
    toString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(this.style != null)) dart.assertFailed();
      if (!(minLevel != null)) dart.assertFailed();
      if (this.style === src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine) return this.toStringDeep({parentConfiguration: parentConfiguration, minLevel: minLevel});
      let description = this.toDescription({parentConfiguration: parentConfiguration});
      if (this.name == null || this.name[$isEmpty] || !dart.test(this.showName)) return description;
      return description[$contains]("\n") ? dart.str(this.name) + dart.str(this[_separator]) + "\n" + dart.str(description) : dart.str(this.name) + dart.str(this[_separator]) + " " + dart.str(description);
    }
    get textTreeConfiguration() {
      if (!(this.style != null)) dart.assertFailed();
      switch (this.style) {
        case src__foundation__diagnostics.DiagnosticsTreeStyle.dense:
        {
          return src__foundation__diagnostics.denseTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.sparse:
        {
          return src__foundation__diagnostics.sparseTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.offstage:
        {
          return src__foundation__diagnostics.dashedTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace:
        {
          return src__foundation__diagnostics.whitespaceTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.transition:
        {
          return src__foundation__diagnostics.transitionTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine:
        {
          return src__foundation__diagnostics.singleLineTextConfiguration;
        }
      }
      return null;
    }
    [_childTextConfiguration](child, textStyle) {
      return child != null && child.style !== src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine ? child.textTreeConfiguration : textStyle;
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      if (!(minLevel != null)) dart.assertFailed();
      let t = prefixOtherLines;
      t == null ? prefixOtherLines = prefixLineOne : t;
      let children = this.getChildren();
      let config = this.textTreeConfiguration;
      if (prefixOtherLines[$isEmpty]) {
        prefixOtherLines = dart.notNull(prefixOtherLines) + dart.notNull(config.prefixOtherLinesRootNode);
      }
      let builder = new src__foundation__diagnostics._PrefixedStringBuilder.new(prefixLineOne, prefixOtherLines);
      let description = this.toDescription({parentConfiguration: parentConfiguration});
      if (description == null || description[$isEmpty]) {
        if (dart.test(this.showName) && this.name != null) builder.write(this.name);
      } else {
        if (this.name != null && this.name[$isNotEmpty] && dart.test(this.showName)) {
          builder.write(this.name);
          if (dart.test(this.showSeparator)) builder.write(config.afterName);
          builder.write(dart.test(config.isNameOnOwnLine) || description[$contains]("\n") ? "\n" : " ");
          if (description[$contains]("\n") && this.style === src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine) {
            builder.prefixOtherLines = dart.notNull(builder.prefixOtherLines) + "  ";
          }
        }
        builder.prefixOtherLines = dart.notNull(builder.prefixOtherLines) + dart.notNull(dart.test(children[$isEmpty]) ? config.propertyPrefixNoChildren : config.propertyPrefixIfChildren);
        builder.write(description);
      }
      let properties = this.getProperties()[$where](dart.fn(n => !dart.test(n.isFiltered(minLevel)), DiagnosticsNodeTobool()))[$toList]();
      if (dart.test(properties[$isNotEmpty]) || dart.test(children[$isNotEmpty]) || this.emptyBodyDescription != null) builder.write(config.afterDescriptionIfBody);
      if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      if (dart.test(properties[$isNotEmpty])) builder.write(config.beforeProperties);
      builder.prefixOtherLines = dart.notNull(builder.prefixOtherLines) + dart.notNull(config.bodyIndent);
      if (this.emptyBodyDescription != null && dart.test(properties[$isEmpty]) && dart.test(children[$isEmpty]) && prefixLineOne[$isNotEmpty]) {
        builder.write(this.emptyBodyDescription);
        if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      }
      for (let i = 0; i < dart.notNull(properties[$length]); ++i) {
        let property = properties[$_get](i);
        if (i > 0) builder.write(config.propertySeparator);
        let kWrapWidth = 65;
        if (property.style !== src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine) {
          let propertyStyle = property.textTreeConfiguration;
          builder.writeRaw(property.toStringDeep({prefixLineOne: dart.str(builder.prefixOtherLines) + dart.str(propertyStyle.prefixLineOne), prefixOtherLines: dart.str(builder.prefixOtherLines) + dart.str(propertyStyle.linkCharacter) + dart.str(propertyStyle.prefixOtherLines), parentConfiguration: config, minLevel: minLevel}));
          continue;
        }
        if (!(property.style === src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine)) dart.assertFailed();
        let message = property.toString({parentConfiguration: config, minLevel: minLevel});
        if (!dart.test(config.lineBreakProperties) || message.length < kWrapWidth) {
          builder.write(message);
        } else {
          let lines = message[$split]("\n");
          for (let j = 0; j < dart.notNull(lines[$length]); ++j) {
            let line = lines[$_get](j);
            if (j > 0) builder.write(config.lineBreak);
            builder.write(src__foundation__print.debugWordWrap(line, kWrapWidth, {wrapIndent: "  "})[$join]("\n"));
          }
        }
        if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      }
      if (dart.test(properties[$isNotEmpty])) builder.write(config.afterProperties);
      if (!dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      let prefixChildren = dart.str(prefixOtherLines) + dart.str(config.bodyIndent);
      if (dart.test(children[$isEmpty]) && dart.test(config.addBlankLineIfNoChildren) && dart.test(builder.hasMultipleLines)) {
        let prefix = prefixChildren[$trimRight]();
        if (prefix[$isNotEmpty]) builder.writeRaw(prefix + dart.str(config.lineBreak));
      }
      if (dart.test(children[$isNotEmpty]) && dart.test(config.showChildren)) {
        if (dart.test(config.isBlankLineBetweenPropertiesAndChildren) && dart.test(properties[$isNotEmpty]) && dart.test(children[$first].textTreeConfiguration.isBlankLineBetweenPropertiesAndChildren)) {
          builder.write(config.lineBreak);
        }
        for (let i = 0; i < dart.notNull(children[$length]); i++) {
          let child = children[$_get](i);
          if (!(child != null)) dart.assertFailed();
          let childConfig = this[_childTextConfiguration](child, config);
          if (i === dart.notNull(children[$length]) - 1) {
            let lastChildPrefixLineOne = prefixChildren + dart.str(childConfig.prefixLastChildLineOne);
            builder.writeRawLine(child.toStringDeep({prefixLineOne: lastChildPrefixLineOne, prefixOtherLines: prefixChildren + dart.str(childConfig.childLinkSpace) + dart.str(childConfig.prefixOtherLines), parentConfiguration: config, minLevel: minLevel}));
            if (childConfig.footer[$isNotEmpty]) builder.writeRaw(prefixChildren + dart.str(childConfig.childLinkSpace) + dart.str(childConfig.footer));
          } else {
            let nextChildStyle = this[_childTextConfiguration](children[$_get](i + 1), config);
            let childPrefixLineOne = prefixChildren + dart.str(childConfig.prefixLineOne);
            let childPrefixOtherLines = prefixChildren + dart.str(nextChildStyle.linkCharacter) + dart.str(childConfig.prefixOtherLines);
            builder.writeRawLine(child.toStringDeep({prefixLineOne: childPrefixLineOne, prefixOtherLines: childPrefixOtherLines, parentConfiguration: config, minLevel: minLevel}));
            if (childConfig.footer[$isNotEmpty]) builder.writeRaw(prefixChildren + dart.str(nextChildStyle.linkCharacter) + dart.str(childConfig.footer));
          }
        }
      }
      return builder.toString();
    }
  };
  (src__foundation__diagnostics.DiagnosticsNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    this[name$] = name;
    this[style$] = style;
    this[showName$] = showName;
    this[showSeparator$] = showSeparator;
    if (!(showName != null)) dart.assertFailed();
    if (!(showSeparator != null)) dart.assertFailed();
    if (!(name == null || !name[$endsWith](":"))) dart.assertFailed("Names of diagnostic nodes must not end with colons.");
  }).prototype = src__foundation__diagnostics.DiagnosticsNode.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticsNode);
  const name$ = Symbol("DiagnosticsNode.name");
  const showSeparator$ = Symbol("DiagnosticsNode.showSeparator");
  const showName$ = Symbol("DiagnosticsNode.showName");
  const style$ = Symbol("DiagnosticsNode.style");
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticsNode, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticsNode.__proto__),
    isFiltered: dart.fnType(core.bool, [src__foundation__diagnostics.DiagnosticLevel]),
    toJsonMap: dart.fnType(core.Map$(core.String, core.Object), []),
    toString: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    [$toString]: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    [_childTextConfiguration]: dart.fnType(src__foundation__diagnostics.TextTreeConfiguration, [src__foundation__diagnostics.DiagnosticsNode, src__foundation__diagnostics.TextTreeConfiguration]),
    toStringDeep: dart.fnType(core.String, [], {prefixLineOne: core.String, prefixOtherLines: core.String, parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration, minLevel: src__foundation__diagnostics.DiagnosticLevel})
  }));
  dart.setGetterSignature(src__foundation__diagnostics.DiagnosticsNode, () => ({
    __proto__: dart.getGetters(src__foundation__diagnostics.DiagnosticsNode.__proto__),
    level: src__foundation__diagnostics.DiagnosticLevel,
    emptyBodyDescription: core.String,
    [_separator]: core.String,
    textTreeConfiguration: src__foundation__diagnostics.TextTreeConfiguration
  }));
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticsNode, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticsNode.__proto__),
    name: dart.finalFieldType(core.String),
    showSeparator: dart.finalFieldType(core.bool),
    showName: dart.finalFieldType(core.bool),
    style: dart.finalFieldType(src__foundation__diagnostics.DiagnosticsTreeStyle)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics.DiagnosticsNode, ['toString']);
  const _description = dart.privateName(src__foundation__diagnostics, "_description");
  const _valueComputed = dart.privateName(src__foundation__diagnostics, "_valueComputed");
  const _value = dart.privateName(src__foundation__diagnostics, "_value");
  const _computeValue = dart.privateName(src__foundation__diagnostics, "_computeValue");
  const _defaultLevel = dart.privateName(src__foundation__diagnostics, "_defaultLevel");
  const _exception = dart.privateName(src__foundation__diagnostics, "_exception");
  const _addTooltip = dart.privateName(src__foundation__diagnostics, "_addTooltip");
  const _maybeCacheValue = dart.privateName(src__foundation__diagnostics, "_maybeCacheValue");
  const _is_DiagnosticsProperty_default = Symbol('_is_DiagnosticsProperty_default');
  src__foundation__diagnostics.DiagnosticsProperty$ = dart.generic(T => {
    let VoidToT = () => (VoidToT = dart.constFn(dart.fnType(T, [])))();
    class DiagnosticsProperty extends src__foundation__diagnostics.DiagnosticsNode {
      toJsonMap() {
        let json = super.toJsonMap();
        if (!dart.equals(this.defaultValue, src__foundation__diagnostics.kNoDefaultValue)) json[$_set]("defaultValue", dart.toString(this.defaultValue));
        if (this.ifEmpty != null) json[$_set]("ifEmpty", this.ifEmpty);
        if (this.ifNull != null) json[$_set]("ifNull", this.ifNull);
        if (this.tooltip != null) json[$_set]("tooltip", this.tooltip);
        json[$_set]("missingIfNull", this.missingIfNull);
        if (this.exception != null) json[$_set]("exception", dart.toString(this.exception));
        json[$_set]("propertyType", dart.toString(this.propertyType));
        json[$_set]("valueToString", this.valueToString());
        json[$_set]("defaultLevel", src__foundation__diagnostics.describeEnum(this[_defaultLevel]));
        if (src__foundation__diagnostics.Diagnosticable.is(dart.wrapType(T))) json[$_set]("isDiagnosticableValue", true);
        return json;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        let v = this.value;
        if (true && core.Function.is(v)) {
          let desc = dart.toString(v);
          if (desc[$contains]("Closure:") && desc[$contains]("from:")) {
            desc = desc[$substring](0, desc[$indexOf]("from: ") - 1);
          }
          return desc;
        }
        return src__foundation__diagnostics.DiagnosticableTree.is(v) ? v.toStringShort() : dart.toString(v);
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this[_description] != null) return this[_addTooltip](this[_description]);
        if (this.exception != null) return "EXCEPTION (" + dart.str(dart.runtimeType(this.exception)) + ")";
        if (this.ifNull != null && this.value == null) return this[_addTooltip](this.ifNull);
        let result = this.valueToString({parentConfiguration: parentConfiguration});
        if (result[$isEmpty] && this.ifEmpty != null) result = this.ifEmpty;
        return this[_addTooltip](result);
      }
      [_addTooltip](text) {
        if (!(text != null)) dart.assertFailed();
        return this.tooltip == null ? text : dart.str(text) + " (" + dart.str(this.tooltip) + ")";
      }
      get ifNull() {
        return this[ifNull$];
      }
      set ifNull(value) {
        super.ifNull = value;
      }
      get ifEmpty() {
        return this[ifEmpty$];
      }
      set ifEmpty(value) {
        super.ifEmpty = value;
      }
      get tooltip() {
        return this[tooltip$];
      }
      set tooltip(value) {
        super.tooltip = value;
      }
      get missingIfNull() {
        return this[missingIfNull$];
      }
      set missingIfNull(value) {
        super.missingIfNull = value;
      }
      get propertyType() {
        return dart.wrapType(T);
      }
      get value() {
        this[_maybeCacheValue]();
        return this[_value];
      }
      get exception() {
        this[_maybeCacheValue]();
        return this[_exception];
      }
      [_maybeCacheValue]() {
        if (dart.test(this[_valueComputed])) return;
        this[_valueComputed] = true;
        if (!(this[_computeValue] != null)) dart.assertFailed();
        try {
          this[_value] = this[_computeValue]();
        } catch (e) {
          let exception = dart.getThrown(e);
          this[_exception] = exception;
          this[_value] = null;
        }
      }
      get defaultValue() {
        return this[defaultValue$];
      }
      set defaultValue(value) {
        super.defaultValue = value;
      }
      get level() {
        if (this[_defaultLevel] === src__foundation__diagnostics.DiagnosticLevel.hidden) return this[_defaultLevel];
        if (this.exception != null) return src__foundation__diagnostics.DiagnosticLevel.error;
        if (this.value == null && dart.test(this.missingIfNull)) return src__foundation__diagnostics.DiagnosticLevel.warning;
        if (!dart.equals(this.defaultValue, src__foundation__diagnostics.kNoDefaultValue) && dart.equals(this.value, this.defaultValue)) return src__foundation__diagnostics.DiagnosticLevel.fine;
        return this[_defaultLevel];
      }
      getProperties() {
        return JSArrayOfDiagnosticsNode().of([]);
      }
      getChildren() {
        return JSArrayOfDiagnosticsNode().of([]);
      }
    }
    (DiagnosticsProperty.new = function(name, value, opts) {
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      if (!(showName != null)) dart.assertFailed();
      if (!(showSeparator != null)) dart.assertFailed();
      if (!(style != null)) dart.assertFailed();
      if (!(level != null)) dart.assertFailed();
      this[_description] = description;
      this[_valueComputed] = true;
      this[_value] = value;
      this[_computeValue] = null;
      let l = ifNull;
      this[ifNull$] = l != null ? l : dart.test(missingIfNull) ? "MISSING" : null;
      this[_defaultLevel] = level;
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, style: style});
    }).prototype = DiagnosticsProperty.prototype;
    (DiagnosticsProperty.lazy = function(name, computeValue, opts) {
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      if (!(showName != null)) dart.assertFailed();
      if (!(showSeparator != null)) dart.assertFailed();
      if (!(dart.equals(defaultValue, src__foundation__diagnostics.kNoDefaultValue) || T.is(defaultValue))) dart.assertFailed();
      if (!(missingIfNull != null)) dart.assertFailed();
      if (!(style != null)) dart.assertFailed();
      if (!(level != null)) dart.assertFailed();
      this[_description] = description;
      this[_valueComputed] = false;
      this[_value] = null;
      this[_computeValue] = computeValue;
      this[_defaultLevel] = level;
      let l = ifNull;
      this[ifNull$] = l != null ? l : dart.test(missingIfNull) ? "MISSING" : null;
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, style: style});
    }).prototype = DiagnosticsProperty.prototype;
    dart.addTypeTests(DiagnosticsProperty);
    DiagnosticsProperty.prototype[_is_DiagnosticsProperty_default] = true;
    const ifNull$ = Symbol("DiagnosticsProperty.ifNull");
    const ifEmpty$ = Symbol("DiagnosticsProperty.ifEmpty");
    const tooltip$ = Symbol("DiagnosticsProperty.tooltip");
    const missingIfNull$ = Symbol("DiagnosticsProperty.missingIfNull");
    const defaultValue$ = Symbol("DiagnosticsProperty.defaultValue");
    dart.setMethodSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getMethods(DiagnosticsProperty.__proto__),
      toJsonMap: dart.fnType(core.Map$(core.String, core.Object), []),
      valueToString: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration}),
      toDescription: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration}),
      [_addTooltip]: dart.fnType(core.String, [core.String]),
      [_maybeCacheValue]: dart.fnType(dart.void, []),
      getProperties: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
      getChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), [])
    }));
    dart.setGetterSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getGetters(DiagnosticsProperty.__proto__),
      propertyType: core.Type,
      value: T,
      exception: core.Object,
      level: src__foundation__diagnostics.DiagnosticLevel
    }));
    dart.setFieldSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getFields(DiagnosticsProperty.__proto__),
      [_description]: dart.finalFieldType(core.String),
      ifNull: dart.finalFieldType(core.String),
      ifEmpty: dart.finalFieldType(core.String),
      tooltip: dart.finalFieldType(core.String),
      missingIfNull: dart.finalFieldType(core.bool),
      [_value]: dart.fieldType(T),
      [_valueComputed]: dart.fieldType(core.bool),
      [_exception]: dart.fieldType(core.Object),
      defaultValue: dart.finalFieldType(core.Object),
      [_defaultLevel]: dart.fieldType(src__foundation__diagnostics.DiagnosticLevel),
      [_computeValue]: dart.finalFieldType(VoidToT())
    }));
    return DiagnosticsProperty;
  });
  src__foundation__diagnostics.DiagnosticsProperty = src__foundation__diagnostics.DiagnosticsProperty$();
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticsProperty, _is_DiagnosticsProperty_default);
  src__foundation__diagnostics.MessageProperty = class MessageProperty extends src__foundation__diagnostics.DiagnosticsProperty$(core.Null) {};
  (src__foundation__diagnostics.MessageProperty.new = function(name, message, opts) {
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(name != null)) dart.assertFailed();
    if (!(message != null)) dart.assertFailed();
    if (!(level != null)) dart.assertFailed();
    src__foundation__diagnostics.MessageProperty.__proto__.new.call(this, name, null, {description: message, level: level});
  }).prototype = src__foundation__diagnostics.MessageProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.MessageProperty);
  src__foundation__diagnostics.StringProperty = class StringProperty extends src__foundation__diagnostics.DiagnosticsProperty$(core.String) {
    get quoted() {
      return this[quoted$];
    }
    set quoted(value) {
      super.quoted = value;
    }
    toJsonMap() {
      let json = super.toJsonMap();
      json[$_set]("quoted", this.quoted);
      return json;
    }
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let text = this[_description] != null ? this[_description] : this.value;
      if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties) && text != null) {
        text = text[$replaceAll]("\n", "\\n");
      }
      if (dart.test(this.quoted) && text != null) {
        if (this.ifEmpty != null && text[$isEmpty]) return this.ifEmpty;
        return "\"" + dart.str(text) + "\"";
      }
      return dart.toString(text);
    }
  };
  (src__foundation__diagnostics.StringProperty.new = function(name, value, opts) {
    let description = opts && 'description' in opts ? opts.description : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let quoted = opts && 'quoted' in opts ? opts.quoted : true;
    let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    this[quoted$] = quoted;
    if (!(showName != null)) dart.assertFailed();
    if (!(quoted != null)) dart.assertFailed();
    if (!(level != null)) dart.assertFailed();
    src__foundation__diagnostics.StringProperty.__proto__.new.call(this, name, value, {description: description, defaultValue: defaultValue, tooltip: tooltip, showName: showName, ifEmpty: ifEmpty, level: level});
  }).prototype = src__foundation__diagnostics.StringProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.StringProperty);
  const quoted$ = Symbol("StringProperty.quoted");
  dart.setMethodSignature(src__foundation__diagnostics.StringProperty, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.StringProperty.__proto__),
    toJsonMap: dart.fnType(core.Map$(core.String, core.Object), []),
    valueToString: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration})
  }));
  dart.setFieldSignature(src__foundation__diagnostics.StringProperty, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.StringProperty.__proto__),
    quoted: dart.finalFieldType(core.bool)
  }));
  const _is__NumProperty_default = Symbol('_is__NumProperty_default');
  src__foundation__diagnostics._NumProperty$ = dart.generic(T => {
    class _NumProperty extends src__foundation__diagnostics.DiagnosticsProperty$(T) {
      toJsonMap() {
        let json = super.toJsonMap();
        if (this.unit != null) json[$_set]("unit", this.unit);
        json[$_set]("numberToString", this.numberToString());
        return json;
      }
      get unit() {
        return this[unit$];
      }
      set unit(value) {
        super.unit = value;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        return this.unit != null ? dart.str(this.numberToString()) + dart.str(this.unit) : this.numberToString();
      }
    }
    (_NumProperty.new = function(name, value, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[unit$] = unit;
      _NumProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, level: level});
    }).prototype = _NumProperty.prototype;
    (_NumProperty.lazy = function(name, computeValue, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[unit$] = unit;
      _NumProperty.__proto__.lazy.call(this, name, computeValue, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, level: level});
    }).prototype = _NumProperty.prototype;
    dart.addTypeTests(_NumProperty);
    _NumProperty.prototype[_is__NumProperty_default] = true;
    const unit$ = Symbol("_NumProperty.unit");
    dart.setFieldSignature(_NumProperty, () => ({
      __proto__: dart.getFields(_NumProperty.__proto__),
      unit: dart.finalFieldType(core.String)
    }));
    return _NumProperty;
  });
  src__foundation__diagnostics._NumProperty = src__foundation__diagnostics._NumProperty$();
  dart.addTypeTests(src__foundation__diagnostics._NumProperty, _is__NumProperty_default);
  src__foundation__diagnostics.DoubleProperty = class DoubleProperty extends src__foundation__diagnostics._NumProperty$(core.double) {
    numberToString() {
      let t = this.value;
      return t == null ? null : t[$toStringAsFixed](1);
    }
  };
  (src__foundation__diagnostics.DoubleProperty.new = function(name, value, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed();
    if (!(level != null)) dart.assertFailed();
    src__foundation__diagnostics.DoubleProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, showName: showName, level: level});
  }).prototype = src__foundation__diagnostics.DoubleProperty.prototype;
  (src__foundation__diagnostics.DoubleProperty.lazy = function(name, computeValue, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed();
    if (!(level != null)) dart.assertFailed();
    src__foundation__diagnostics.DoubleProperty.__proto__.lazy.call(this, name, computeValue, {showName: showName, ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, level: level});
  }).prototype = src__foundation__diagnostics.DoubleProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DoubleProperty);
  dart.setMethodSignature(src__foundation__diagnostics.DoubleProperty, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DoubleProperty.__proto__),
    numberToString: dart.fnType(core.String, [])
  }));
  src__foundation__diagnostics.IntProperty = class IntProperty extends src__foundation__diagnostics._NumProperty$(core.int) {
    numberToString() {
      return dart.toString(this.value);
    }
  };
  (src__foundation__diagnostics.IntProperty.new = function(name, value, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed();
    if (!(level != null)) dart.assertFailed();
    src__foundation__diagnostics.IntProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, unit: unit, defaultValue: defaultValue, level: level});
  }).prototype = src__foundation__diagnostics.IntProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.IntProperty);
  dart.setMethodSignature(src__foundation__diagnostics.IntProperty, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.IntProperty.__proto__),
    numberToString: dart.fnType(core.String, [])
  }));
  src__foundation__diagnostics.PercentProperty = class PercentProperty extends src__foundation__diagnostics.DoubleProperty {
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (this.value == null) return dart.toString(this.value);
      return this.unit != null ? dart.str(this.numberToString()) + " " + dart.str(this.unit) : this.numberToString();
    }
    numberToString() {
      if (this.value == null) return dart.toString(this.value);
      return (this.value[$clamp](0.0, 1.0) * 100.0)[$toStringAsFixed](1) + "%";
    }
  };
  (src__foundation__diagnostics.PercentProperty.new = function(name, fraction, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed();
    if (!(level != null)) dart.assertFailed();
    src__foundation__diagnostics.PercentProperty.__proto__.new.call(this, name, fraction, {ifNull: ifNull, showName: showName, tooltip: tooltip, unit: unit, level: level});
  }).prototype = src__foundation__diagnostics.PercentProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.PercentProperty);
  dart.setMethodSignature(src__foundation__diagnostics.PercentProperty, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.PercentProperty.__proto__),
    valueToString: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration})
  }));
  src__foundation__diagnostics.FlagProperty = class FlagProperty extends src__foundation__diagnostics.DiagnosticsProperty$(core.bool) {
    toJsonMap() {
      let json = super.toJsonMap();
      if (this.ifTrue != null) json[$_set]("ifTrue", this.ifTrue);
      if (this.ifFalse != null) json[$_set]("ifFalse", this.ifFalse);
      return json;
    }
    get ifTrue() {
      return this[ifTrue$];
    }
    set ifTrue(value) {
      super.ifTrue = value;
    }
    get ifFalse() {
      return this[ifFalse$];
    }
    set ifFalse(value) {
      super.ifFalse = value;
    }
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (this.value === true) {
        if (this.ifTrue != null) return this.ifTrue;
      } else if (this.value === false) {
        if (this.ifFalse != null) return this.ifFalse;
      }
      return super.valueToString({parentConfiguration: parentConfiguration});
    }
    get showName() {
      if (this.value == null || this.value === true && this.ifTrue == null || this.value === false && this.ifFalse == null) {
        return true;
      }
      return super.showName;
    }
    get level() {
      if (this.value === true) {
        if (this.ifTrue == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
      }
      if (this.value === false) {
        if (this.ifFalse == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
      }
      return super.level;
    }
  };
  (src__foundation__diagnostics.FlagProperty.new = function(name, opts) {
    let value = opts && 'value' in opts ? opts.value : null;
    let ifTrue = opts && 'ifTrue' in opts ? opts.ifTrue : null;
    let ifFalse = opts && 'ifFalse' in opts ? opts.ifFalse : null;
    let showName = opts && 'showName' in opts ? opts.showName : false;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    this[ifTrue$] = ifTrue;
    this[ifFalse$] = ifFalse;
    if (!(showName != null)) dart.assertFailed();
    if (!(level != null)) dart.assertFailed();
    if (!(ifTrue != null || ifFalse != null)) dart.assertFailed();
    src__foundation__diagnostics.FlagProperty.__proto__.new.call(this, name, value, {showName: showName, defaultValue: defaultValue, level: level});
  }).prototype = src__foundation__diagnostics.FlagProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.FlagProperty);
  const ifTrue$ = Symbol("FlagProperty.ifTrue");
  const ifFalse$ = Symbol("FlagProperty.ifFalse");
  dart.setMethodSignature(src__foundation__diagnostics.FlagProperty, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.FlagProperty.__proto__),
    toJsonMap: dart.fnType(core.Map$(core.String, core.Object), []),
    valueToString: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration})
  }));
  dart.setGetterSignature(src__foundation__diagnostics.FlagProperty, () => ({
    __proto__: dart.getGetters(src__foundation__diagnostics.FlagProperty.__proto__),
    level: src__foundation__diagnostics.DiagnosticLevel
  }));
  dart.setFieldSignature(src__foundation__diagnostics.FlagProperty, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.FlagProperty.__proto__),
    ifTrue: dart.finalFieldType(core.String),
    ifFalse: dart.finalFieldType(core.String)
  }));
  const _is_IterableProperty_default = Symbol('_is_IterableProperty_default');
  src__foundation__diagnostics.IterableProperty$ = dart.generic(T => {
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class IterableProperty extends src__foundation__diagnostics.DiagnosticsProperty$(core.Iterable$(T)) {
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        if (dart.test(this.value[$isEmpty])) {
          return this.ifEmpty != null ? this.ifEmpty : "[]";
        }
        if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties)) {
          return "[" + dart.str(this.value[$join](", ")) + "]";
        }
        return this.value[$join](this.style === src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine ? ", " : "\n");
      }
      get level() {
        if (this.ifEmpty == null && this.value != null && dart.test(this.value[$isEmpty]) && super.level !== src__foundation__diagnostics.DiagnosticLevel.hidden) return src__foundation__diagnostics.DiagnosticLevel.fine;
        return super.level;
      }
      toJsonMap() {
        let json = super.toJsonMap();
        if (this.value != null) {
          json[$_set]("values", IterableOfString()._check(this.value[$map](core.String, dart.fn(value => dart.toString(value), TToString())))[$toList]());
        }
        return json;
      }
    }
    (IterableProperty.new = function(name, value, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : "[]";
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(style != null)) dart.assertFailed();
      if (!(showName != null)) dart.assertFailed();
      if (!(level != null)) dart.assertFailed();
      IterableProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, ifNull: ifNull, ifEmpty: ifEmpty, style: style, showName: showName, level: level});
    }).prototype = IterableProperty.prototype;
    dart.addTypeTests(IterableProperty);
    IterableProperty.prototype[_is_IterableProperty_default] = true;
    dart.setMethodSignature(IterableProperty, () => ({
      __proto__: dart.getMethods(IterableProperty.__proto__),
      valueToString: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration}),
      toJsonMap: dart.fnType(core.Map$(core.String, core.Object), [])
    }));
    dart.setGetterSignature(IterableProperty, () => ({
      __proto__: dart.getGetters(IterableProperty.__proto__),
      level: src__foundation__diagnostics.DiagnosticLevel
    }));
    return IterableProperty;
  });
  src__foundation__diagnostics.IterableProperty = src__foundation__diagnostics.IterableProperty$();
  dart.addTypeTests(src__foundation__diagnostics.IterableProperty, _is_IterableProperty_default);
  const _is_EnumProperty_default = Symbol('_is_EnumProperty_default');
  src__foundation__diagnostics.EnumProperty$ = dart.generic(T => {
    class EnumProperty extends src__foundation__diagnostics.DiagnosticsProperty$(T) {
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        return src__foundation__diagnostics.describeEnum(this.value);
      }
    }
    (EnumProperty.new = function(name, value, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(level != null)) dart.assertFailed();
      EnumProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, level: level});
    }).prototype = EnumProperty.prototype;
    dart.addTypeTests(EnumProperty);
    EnumProperty.prototype[_is_EnumProperty_default] = true;
    return EnumProperty;
  });
  src__foundation__diagnostics.EnumProperty = src__foundation__diagnostics.EnumProperty$();
  dart.addTypeTests(src__foundation__diagnostics.EnumProperty, _is_EnumProperty_default);
  const _is_ObjectFlagProperty_default = Symbol('_is_ObjectFlagProperty_default');
  src__foundation__diagnostics.ObjectFlagProperty$ = dart.generic(T => {
    class ObjectFlagProperty extends src__foundation__diagnostics.DiagnosticsProperty$(T) {
      get ifPresent() {
        return this[ifPresent$];
      }
      set ifPresent(value) {
        super.ifPresent = value;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value != null) {
          if (this.ifPresent != null) return this.ifPresent;
        } else {
          if (this.ifNull != null) return this.ifNull;
        }
        return super.valueToString({parentConfiguration: parentConfiguration});
      }
      get showName() {
        if (this.value != null && this.ifPresent == null || this.value == null && this.ifNull == null) {
          return true;
        }
        return super.showName;
      }
      get level() {
        if (this.value != null) {
          if (this.ifPresent == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
        } else {
          if (this.ifNull == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
        }
        return super.level;
      }
      toJsonMap() {
        let json = super.toJsonMap();
        if (this.ifPresent != null) json[$_set]("ifPresent", this.ifPresent);
        return json;
      }
    }
    (ObjectFlagProperty.new = function(name, value, opts) {
      let ifPresent = opts && 'ifPresent' in opts ? opts.ifPresent : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let showName = opts && 'showName' in opts ? opts.showName : false;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[ifPresent$] = ifPresent;
      if (!(ifPresent != null || ifNull != null)) dart.assertFailed();
      if (!(showName != null)) dart.assertFailed();
      if (!(level != null)) dart.assertFailed();
      ObjectFlagProperty.__proto__.new.call(this, name, value, {showName: showName, ifNull: ifNull, level: level});
    }).prototype = ObjectFlagProperty.prototype;
    (ObjectFlagProperty.has = function(name, value, opts) {
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(name != null)) dart.assertFailed();
      if (!(level != null)) dart.assertFailed();
      this[ifPresent$] = "has " + dart.str(name);
      ObjectFlagProperty.__proto__.new.call(this, name, value, {showName: false, level: level});
    }).prototype = ObjectFlagProperty.prototype;
    dart.addTypeTests(ObjectFlagProperty);
    ObjectFlagProperty.prototype[_is_ObjectFlagProperty_default] = true;
    const ifPresent$ = Symbol("ObjectFlagProperty.ifPresent");
    dart.setGetterSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getGetters(ObjectFlagProperty.__proto__),
      showName: core.bool
    }));
    dart.setFieldSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getFields(ObjectFlagProperty.__proto__),
      ifPresent: dart.finalFieldType(core.String)
    }));
    return ObjectFlagProperty;
  });
  src__foundation__diagnostics.ObjectFlagProperty = src__foundation__diagnostics.ObjectFlagProperty$();
  dart.addTypeTests(src__foundation__diagnostics.ObjectFlagProperty, _is_ObjectFlagProperty_default);
  const _cachedBuilder = dart.privateName(src__foundation__diagnostics, "_cachedBuilder");
  const _builder = dart.privateName(src__foundation__diagnostics, "_builder");
  let const$1;
  const _is_DiagnosticableNode_default = Symbol('_is_DiagnosticableNode_default');
  src__foundation__diagnostics.DiagnosticableNode$ = dart.generic(T => {
    class DiagnosticableNode extends src__foundation__diagnostics.DiagnosticsNode {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get [_builder]() {
        if (this[_cachedBuilder] == null) {
          this[_cachedBuilder] = new src__foundation__diagnostics.DiagnosticPropertiesBuilder.new();
          if (dart.test(src__util.assertionsEnabled)) {
            this.value == null ? null : this.value.debugFillProperties(this[_cachedBuilder]);
          }
        }
        return this[_cachedBuilder];
      }
      get style() {
        let l = super.style;
        return l != null ? l : this[_builder].defaultDiagnosticsTreeStyle;
      }
      get emptyBodyDescription() {
        return this[_builder].emptyBodyDescription;
      }
      getProperties() {
        return this[_builder].properties;
      }
      getChildren() {
        return const$1 || (const$1 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        return this.value.toStringShort();
      }
    }
    (DiagnosticableNode.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let style = opts && 'style' in opts ? opts.style : null;
      this[_cachedBuilder] = null;
      this[value$] = value;
      if (!(value != null)) dart.assertFailed();
      DiagnosticableNode.__proto__.new.call(this, {name: name, style: style});
    }).prototype = DiagnosticableNode.prototype;
    dart.addTypeTests(DiagnosticableNode);
    DiagnosticableNode.prototype[_is_DiagnosticableNode_default] = true;
    const value$ = Symbol("DiagnosticableNode.value");
    dart.setMethodSignature(DiagnosticableNode, () => ({
      __proto__: dart.getMethods(DiagnosticableNode.__proto__),
      getProperties: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
      getChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
      toDescription: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration})
    }));
    dart.setGetterSignature(DiagnosticableNode, () => ({
      __proto__: dart.getGetters(DiagnosticableNode.__proto__),
      [_builder]: src__foundation__diagnostics.DiagnosticPropertiesBuilder,
      style: src__foundation__diagnostics.DiagnosticsTreeStyle,
      emptyBodyDescription: core.String
    }));
    dart.setFieldSignature(DiagnosticableNode, () => ({
      __proto__: dart.getFields(DiagnosticableNode.__proto__),
      value: dart.finalFieldType(T),
      [_cachedBuilder]: dart.fieldType(src__foundation__diagnostics.DiagnosticPropertiesBuilder)
    }));
    return DiagnosticableNode;
  });
  src__foundation__diagnostics.DiagnosticableNode = src__foundation__diagnostics.DiagnosticableNode$();
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticableNode, _is_DiagnosticableNode_default);
  let const$2;
  let const$3;
  src__foundation__diagnostics.Diagnosticable = class Diagnosticable extends core.Object {
    toStringShort() {
      return src__foundation__diagnostics.describeIdentity(this);
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      return this.toDiagnosticsNode({style: src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new (DiagnosticableNodeOfDiagnosticable()).new({name: name, value: this, style: style});
    }
    debugFillProperties(properties) {}
  };
  (src__foundation__diagnostics.Diagnosticable.new = function() {
  }).prototype = src__foundation__diagnostics.Diagnosticable.prototype;
  dart.addTypeTests(src__foundation__diagnostics.Diagnosticable);
  dart.setMethodSignature(src__foundation__diagnostics.Diagnosticable, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.Diagnosticable.__proto__),
    toStringShort: dart.fnType(core.String, []),
    toString: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    [$toString]: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toDiagnosticsNode: dart.fnType(src__foundation__diagnostics.DiagnosticsNode, [], {name: core.String, style: src__foundation__diagnostics.DiagnosticsTreeStyle}),
    debugFillProperties: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticPropertiesBuilder])
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics.Diagnosticable, ['toString']);
  src__foundation__diagnostics.DiagnosticableTree = class DiagnosticableTree extends src__foundation__diagnostics.Diagnosticable {
    toStringShallow(opts) {
      let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      let result = new core.StringBuffer.new();
      result.write(this.toString());
      result.write(joiner);
      let builder = new src__foundation__diagnostics.DiagnosticPropertiesBuilder.new();
      if (dart.test(src__util.assertionsEnabled)) {
        this.debugFillProperties(builder);
      }
      result.write(builder.properties[$where](dart.fn(n => !dart.test(n.isFiltered(minLevel)), DiagnosticsNodeTobool()))[$join](joiner));
      return result.toString();
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
    }
    toStringShort() {
      return src__foundation__diagnostics.describeIdentity(this);
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new src__foundation__diagnostics._DiagnosticableTreeNode.new({name: name, value: this, style: style});
    }
    debugDescribeChildren() {
      return const$3 || (const$3 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
    }
  };
  (src__foundation__diagnostics.DiagnosticableTree.new = function() {
    src__foundation__diagnostics.DiagnosticableTree.__proto__.new.call(this);
  }).prototype = src__foundation__diagnostics.DiagnosticableTree.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticableTree);
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticableTree, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticableTree.__proto__),
    toStringShallow: dart.fnType(core.String, [], {joiner: core.String, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toStringDeep: dart.fnType(core.String, [], {prefixLineOne: core.String, prefixOtherLines: core.String, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    debugDescribeChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), [])
  }));
  src__foundation__diagnostics._DiagnosticableTreeNode = class _DiagnosticableTreeNode extends src__foundation__diagnostics.DiagnosticableNode$(src__foundation__diagnostics.DiagnosticableTree) {
    getChildren() {
      if (this.value != null) return this.value.debugDescribeChildren();
      return const$2 || (const$2 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
    }
  };
  (src__foundation__diagnostics._DiagnosticableTreeNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let style = opts && 'style' in opts ? opts.style : null;
    src__foundation__diagnostics._DiagnosticableTreeNode.__proto__.new.call(this, {name: name, value: value, style: style});
  }).prototype = src__foundation__diagnostics._DiagnosticableTreeNode.prototype;
  dart.addTypeTests(src__foundation__diagnostics._DiagnosticableTreeNode);
  dart.setMethodSignature(src__foundation__diagnostics._DiagnosticableTreeNode, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics._DiagnosticableTreeNode.__proto__),
    getChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), [])
  }));
  src__foundation__diagnostics.shortHash = function(object) {
    return dart.hashCode(object)[$toUnsigned](20)[$toRadixString](16)[$padLeft](5, "0");
  };
  src__foundation__diagnostics.describeIdentity = function(object) {
    return dart.str(dart.runtimeType(object)) + "#" + dart.str(src__foundation__diagnostics.shortHash(object));
  };
  src__foundation__diagnostics.describeEnum = function(enumEntry) {
    let description = dart.toString(enumEntry);
    let indexOfDot = description[$indexOf](".");
    if (!(indexOfDot !== -1 && indexOfDot < description.length - 1)) dart.assertFailed();
    return description[$substring](indexOfDot + 1);
  };
  src__foundation__diagnostics.DiagnosticPropertiesBuilder = class DiagnosticPropertiesBuilder extends core.Object {
    add(property) {
      this.properties[$add](property);
    }
    get properties() {
      return this[properties];
    }
    set properties(value) {
      super.properties = value;
    }
    get defaultDiagnosticsTreeStyle() {
      return this[defaultDiagnosticsTreeStyle];
    }
    set defaultDiagnosticsTreeStyle(value) {
      this[defaultDiagnosticsTreeStyle] = value;
    }
    get emptyBodyDescription() {
      return this[emptyBodyDescription];
    }
    set emptyBodyDescription(value) {
      this[emptyBodyDescription] = value;
    }
  };
  (src__foundation__diagnostics.DiagnosticPropertiesBuilder.new = function() {
    this[properties] = JSArrayOfDiagnosticsNode().of([]);
    this[defaultDiagnosticsTreeStyle] = src__foundation__diagnostics.DiagnosticsTreeStyle.sparse;
    this[emptyBodyDescription] = null;
  }).prototype = src__foundation__diagnostics.DiagnosticPropertiesBuilder.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticPropertiesBuilder);
  const properties = Symbol("DiagnosticPropertiesBuilder.properties");
  const defaultDiagnosticsTreeStyle = Symbol("DiagnosticPropertiesBuilder.defaultDiagnosticsTreeStyle");
  const emptyBodyDescription = Symbol("DiagnosticPropertiesBuilder.emptyBodyDescription");
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticPropertiesBuilder.__proto__),
    add: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticsNode])
  }));
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticPropertiesBuilder.__proto__),
    properties: dart.finalFieldType(ListOfDiagnosticsNode()),
    defaultDiagnosticsTreeStyle: dart.fieldType(src__foundation__diagnostics.DiagnosticsTreeStyle),
    emptyBodyDescription: dart.fieldType(core.String)
  }));
  let const$4;
  src__foundation__diagnostics.DiagnosticableTreeMixin = class DiagnosticableTreeMixin extends core.Object {};
  src__foundation__diagnostics.DiagnosticableTreeMixin[dart.mixinOn] = Object => {
    class DiagnosticableTreeMixin extends Object {
      toString(opts) {
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
        return this.toDiagnosticsNode({style: src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
      }
      toStringShallow(opts) {
        let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
        let result = new core.StringBuffer.new();
        result.write(this.toStringShort());
        result.write(joiner);
        let builder = new src__foundation__diagnostics.DiagnosticPropertiesBuilder.new();
        if (dart.test(src__util.assertionsEnabled)) {
          this.debugFillProperties(builder);
        }
        result.write(builder.properties[$where](dart.fn(n => !dart.test(n.isFiltered(minLevel)), DiagnosticsNodeTobool()))[$join](joiner));
        return result.toString();
      }
      toStringDeep(opts) {
        let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
        let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
        return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
      }
      toStringShort() {
        return src__foundation__diagnostics.describeIdentity(this);
      }
      toDiagnosticsNode(opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let style = opts && 'style' in opts ? opts.style : null;
        return new src__foundation__diagnostics._DiagnosticableTreeNode.new({name: name, value: this, style: style});
      }
      debugDescribeChildren() {
        return const$4 || (const$4 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
      }
      debugFillProperties(properties) {}
    }
    dart.defineExtensionMethods(DiagnosticableTreeMixin, ['toString']);
    return DiagnosticableTreeMixin;
  };
  (src__foundation__diagnostics.DiagnosticableTreeMixin.new = function() {
  }).prototype = src__foundation__diagnostics.DiagnosticableTreeMixin.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticableTreeMixin);
  src__foundation__diagnostics.DiagnosticableTreeMixin[dart.implements] = () => [src__foundation__diagnostics.DiagnosticableTree, core.Object];
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticableTreeMixin, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticableTreeMixin.__proto__),
    toString: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    [$toString]: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toStringShallow: dart.fnType(core.String, [], {joiner: core.String, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toStringDeep: dart.fnType(core.String, [], {prefixLineOne: core.String, prefixOtherLines: core.String, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toStringShort: dart.fnType(core.String, []),
    toDiagnosticsNode: dart.fnType(src__foundation__diagnostics.DiagnosticsNode, [], {name: core.String, style: src__foundation__diagnostics.DiagnosticsTreeStyle}),
    debugDescribeChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
    debugFillProperties: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticPropertiesBuilder])
  }));
  src__foundation__diagnostics.debugPrintDouble = function(value) {
    if (value[$floor]() === value) {
      return dart.str(value) + ".0";
    } else
      return dart.toString(value);
  };
  const _list = dart.privateName(src__foundation__observer_list, "_list");
  const _isDirty = dart.privateName(src__foundation__observer_list, "_isDirty");
  const _set = dart.privateName(src__foundation__observer_list, "_set");
  const _is_ObserverList_default = Symbol('_is_ObserverList_default');
  src__foundation__observer_list.ObserverList$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let HashSetOfT = () => (HashSetOfT = dart.constFn(collection.HashSet$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class ObserverList extends core.Iterable$(T) {
      add(item) {
        T._check(item);
        this[_isDirty] = true;
        this[_list][$add](item);
      }
      remove(item) {
        T._check(item);
        this[_isDirty] = true;
        return this[_list][$remove](item);
      }
      contains(element) {
        if (dart.notNull(this[_list][$length]) < 15) {
          return this[_list][$contains](element);
        }
        if (dart.test(this[_isDirty])) {
          if (this[_set] == null) {
            this[_set] = HashSetOfT().from(this[_list]);
          } else {
            this[_set].clear();
            this[_set].addAll(this[_list]);
          }
          this[_isDirty] = false;
        }
        return this[_set].contains(element);
      }
      get iterator() {
        return this[_list][$iterator];
      }
      get isEmpty() {
        return this[_list][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list][$isNotEmpty];
      }
    }
    (ObserverList.new = function() {
      this[_list] = JSArrayOfT().of([]);
      this[_isDirty] = false;
      this[_set] = null;
      ObserverList.__proto__.new.call(this);
    }).prototype = ObserverList.prototype;
    dart.addTypeTests(ObserverList);
    ObserverList.prototype[_is_ObserverList_default] = true;
    dart.setMethodSignature(ObserverList, () => ({
      __proto__: dart.getMethods(ObserverList.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(ObserverList, () => ({
      __proto__: dart.getGetters(ObserverList.__proto__),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setFieldSignature(ObserverList, () => ({
      __proto__: dart.getFields(ObserverList.__proto__),
      [_list]: dart.finalFieldType(ListOfT()),
      [_isDirty]: dart.fieldType(core.bool),
      [_set]: dart.fieldType(HashSetOfT())
    }));
    dart.defineExtensionMethods(ObserverList, ['contains']);
    dart.defineExtensionAccessors(ObserverList, ['iterator', 'isEmpty', 'isNotEmpty']);
    return ObserverList;
  });
  src__foundation__observer_list.ObserverList = src__foundation__observer_list.ObserverList$();
  dart.addTypeTests(src__foundation__observer_list.ObserverList, _is_ObserverList_default);
  src__foundation__change_notifier.Listenable = class Listenable extends core.Object {
    static merge(listenables) {
      return new src__foundation__change_notifier._MergingListenable.new(listenables);
    }
  };
  (src__foundation__change_notifier.Listenable.new = function() {
  }).prototype = src__foundation__change_notifier.Listenable.prototype;
  dart.addTypeTests(src__foundation__change_notifier.Listenable);
  const _is_ValueListenable_default = Symbol('_is_ValueListenable_default');
  src__foundation__change_notifier.ValueListenable$ = dart.generic(T => {
    class ValueListenable extends src__foundation__change_notifier.Listenable {}
    (ValueListenable.new = function() {
      ValueListenable.__proto__.new.call(this);
    }).prototype = ValueListenable.prototype;
    dart.addTypeTests(ValueListenable);
    ValueListenable.prototype[_is_ValueListenable_default] = true;
    return ValueListenable;
  });
  src__foundation__change_notifier.ValueListenable = src__foundation__change_notifier.ValueListenable$();
  dart.addTypeTests(src__foundation__change_notifier.ValueListenable, _is_ValueListenable_default);
  const _listeners = dart.privateName(src__foundation__change_notifier, "_listeners");
  const _debugAssertNotDisposed = dart.privateName(src__foundation__change_notifier, "_debugAssertNotDisposed");
  src__foundation__change_notifier.ChangeNotifier = class ChangeNotifier extends src__foundation__change_notifier.Listenable {
    [_debugAssertNotDisposed]() {
      if (!dart.test(dart.fn(() => {
        if (this[_listeners] == null) {
          dart.throw(new src__foundation__assertions.FlutterError.new("A " + dart.str(this[$runtimeType]) + " was used after being disposed.\n" + ("Once you have called dispose() on a " + dart.str(this[$runtimeType]) + ", it can no longer be used.")));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed();
      return true;
    }
    get hasListeners() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed();
      return this[_listeners].isNotEmpty;
    }
    addListener(listener) {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed();
      this[_listeners].add(listener);
    }
    removeListener(listener) {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed();
      this[_listeners].remove(listener);
    }
    dispose() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed();
      this[_listeners] = null;
    }
    notifyListeners() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed();
      if (this[_listeners] != null) {
        let localListeners = ListOfVoidCallback().from(this[_listeners]);
        for (let listener of localListeners) {
          try {
            if (dart.test(this[_listeners].contains(listener))) listener();
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "foundation library", context: "while dispatching notifications for " + dart.str(this[$runtimeType]), informationCollector: dart.fn(information => {
                information.writeln("The " + dart.str(this[$runtimeType]) + " sending notification was:");
                information.write("  " + dart.str(this));
              }, StringBufferToNull())}));
          }
        }
      }
    }
  };
  (src__foundation__change_notifier.ChangeNotifier.new = function() {
    this[_listeners] = new (ObserverListOfVoidCallback()).new();
    src__foundation__change_notifier.ChangeNotifier.__proto__.new.call(this);
  }).prototype = src__foundation__change_notifier.ChangeNotifier.prototype;
  dart.addTypeTests(src__foundation__change_notifier.ChangeNotifier);
  dart.setMethodSignature(src__foundation__change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getMethods(src__foundation__change_notifier.ChangeNotifier.__proto__),
    [_debugAssertNotDisposed]: dart.fnType(core.bool, []),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    dispose: dart.fnType(dart.void, []),
    notifyListeners: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__foundation__change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getGetters(src__foundation__change_notifier.ChangeNotifier.__proto__),
    hasListeners: core.bool
  }));
  dart.setFieldSignature(src__foundation__change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getFields(src__foundation__change_notifier.ChangeNotifier.__proto__),
    [_listeners]: dart.fieldType(ObserverListOfVoidCallback())
  }));
  const _children = dart.privateName(src__foundation__change_notifier, "_children");
  src__foundation__change_notifier._MergingListenable = class _MergingListenable extends src__foundation__change_notifier.ChangeNotifier {
    dispose() {
      for (let child of this[_children]) {
        child == null ? null : child.removeListener(dart.bind(this, 'notifyListeners'));
      }
      super.dispose();
    }
    toString() {
      return "Listenable.merge([" + dart.str(this[_children][$join](", ")) + "])";
    }
  };
  (src__foundation__change_notifier._MergingListenable.new = function(children) {
    this[_children] = children;
    src__foundation__change_notifier._MergingListenable.__proto__.new.call(this);
    for (let child of this[_children]) {
      child == null ? null : child.addListener(dart.bind(this, 'notifyListeners'));
    }
  }).prototype = src__foundation__change_notifier._MergingListenable.prototype;
  dart.addTypeTests(src__foundation__change_notifier._MergingListenable);
  dart.setFieldSignature(src__foundation__change_notifier._MergingListenable, () => ({
    __proto__: dart.getFields(src__foundation__change_notifier._MergingListenable.__proto__),
    [_children]: dart.finalFieldType(ListOfListenable())
  }));
  dart.defineExtensionMethods(src__foundation__change_notifier._MergingListenable, ['toString']);
  const _value$ = dart.privateName(src__foundation__change_notifier, "_value");
  const _is_ValueNotifier_default = Symbol('_is_ValueNotifier_default');
  src__foundation__change_notifier.ValueNotifier$ = dart.generic(T => {
    let ValueListenableOfT = () => (ValueListenableOfT = dart.constFn(src__foundation__change_notifier.ValueListenable$(T)))();
    class ValueNotifier extends src__foundation__change_notifier.ChangeNotifier {
      get value() {
        return this[_value$];
      }
      set value(newValue) {
        T._check(newValue);
        if (dart.equals(this[_value$], newValue)) return;
        this[_value$] = newValue;
        this.notifyListeners();
      }
      toString() {
        return dart.str(src__foundation__diagnostics.describeIdentity(this)) + "(" + dart.str(this.value) + ")";
      }
    }
    (ValueNotifier.new = function(value) {
      this[_value$] = value;
      ValueNotifier.__proto__.new.call(this);
    }).prototype = ValueNotifier.prototype;
    dart.addTypeTests(ValueNotifier);
    ValueNotifier.prototype[_is_ValueNotifier_default] = true;
    ValueNotifier[dart.implements] = () => [ValueListenableOfT()];
    dart.setMethodSignature(ValueNotifier, () => ({
      __proto__: dart.getMethods(ValueNotifier.__proto__),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(ValueNotifier, () => ({
      __proto__: dart.getGetters(ValueNotifier.__proto__),
      value: T
    }));
    dart.setSetterSignature(ValueNotifier, () => ({
      __proto__: dart.getSetters(ValueNotifier.__proto__),
      value: T
    }));
    dart.setFieldSignature(ValueNotifier, () => ({
      __proto__: dart.getFields(ValueNotifier.__proto__),
      [_value$]: dart.fieldType(T)
    }));
    dart.defineExtensionMethods(ValueNotifier, ['toString']);
    return ValueNotifier;
  });
  src__foundation__change_notifier.ValueNotifier = src__foundation__change_notifier.ValueNotifier$();
  dart.addTypeTests(src__foundation__change_notifier.ValueNotifier, _is_ValueNotifier_default);
  src__foundation__collections.setEquals = function(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a.length != b.length) return false;
    for (let value of a) {
      if (!dart.test(b.contains(value))) return false;
    }
    return true;
  };
  src__foundation__collections.listEquals = function(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] != b[$length]) return false;
    for (let index = 0; index < dart.notNull(a[$length]); index = index + 1) {
      if (!dart.equals(a[$_get](index), b[$_get](index))) return false;
    }
    return true;
  };
  src__foundation__key.Key = class Key extends core.Object {
    static new(value) {
      return new (ValueKeyOfString()).new(value);
    }
  };
  (src__foundation__key.Key.empty = function() {
  }).prototype = src__foundation__key.Key.prototype;
  dart.addTypeTests(src__foundation__key.Key);
  src__foundation__key.LocalKey = class LocalKey extends src__foundation__key.Key {};
  (src__foundation__key.LocalKey.new = function() {
    src__foundation__key.LocalKey.__proto__.empty.call(this);
  }).prototype = src__foundation__key.LocalKey.prototype;
  dart.addTypeTests(src__foundation__key.LocalKey);
  const _is_ValueKey_default = Symbol('_is_ValueKey_default');
  src__foundation__key.ValueKey$ = dart.generic(T => {
    let ValueKeyOfT = () => (ValueKeyOfT = dart.constFn(src__foundation__key.ValueKey$(T)))();
    let _TypeLiteralOfValueKeyOfT = () => (_TypeLiteralOfValueKeyOfT = dart.constFn(src__foundation__key._TypeLiteral$(ValueKeyOfT())))();
    class ValueKey extends src__foundation__key.LocalKey {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
        let typedOther = ValueKeyOfT()._check(other);
        return dart.equals(this.value, typedOther.value);
      }
      get hashCode() {
        return ui$.hashValues(this[$runtimeType], this.value);
      }
      toString() {
        let valueString = dart.equals(dart.wrapType(T), dart.wrapType(core.String)) ? "<'" + dart.str(this.value) + "'>" : "<" + dart.str(this.value) + ">";
        if (dart.equals(this[$runtimeType], new (_TypeLiteralOfValueKeyOfT()).new().type)) return "[" + valueString + "]";
        return "[" + dart.str(dart.wrapType(T)) + " " + valueString + "]";
      }
    }
    (ValueKey.new = function(value) {
      this[value$] = value;
      ValueKey.__proto__.new.call(this);
    }).prototype = ValueKey.prototype;
    dart.addTypeTests(ValueKey);
    ValueKey.prototype[_is_ValueKey_default] = true;
    const value$ = Symbol("ValueKey.value");
    dart.setMethodSignature(ValueKey, () => ({
      __proto__: dart.getMethods(ValueKey.__proto__),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(ValueKey, () => ({
      __proto__: dart.getGetters(ValueKey.__proto__),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setFieldSignature(ValueKey, () => ({
      __proto__: dart.getFields(ValueKey.__proto__),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(ValueKey, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ValueKey, ['hashCode']);
    return ValueKey;
  });
  src__foundation__key.ValueKey = src__foundation__key.ValueKey$();
  dart.addTypeTests(src__foundation__key.ValueKey, _is_ValueKey_default);
  const _is__TypeLiteral_default = Symbol('_is__TypeLiteral_default');
  src__foundation__key._TypeLiteral$ = dart.generic(T => {
    class _TypeLiteral extends core.Object {
      get type() {
        return dart.wrapType(T);
      }
    }
    (_TypeLiteral.new = function() {
    }).prototype = _TypeLiteral.prototype;
    dart.addTypeTests(_TypeLiteral);
    _TypeLiteral.prototype[_is__TypeLiteral_default] = true;
    dart.setGetterSignature(_TypeLiteral, () => ({
      __proto__: dart.getGetters(_TypeLiteral.__proto__),
      type: core.Type
    }));
    return _TypeLiteral;
  });
  src__foundation__key._TypeLiteral = src__foundation__key._TypeLiteral$();
  dart.addTypeTests(src__foundation__key._TypeLiteral, _is__TypeLiteral_default);
  src__foundation__isolates.compute = function(Q, R, callback, message, opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    return async.async(R, function* compute() {
      return callback(message);
    });
  };
  src__foundation__licenses.LicenseParagraph = class LicenseParagraph extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get indent() {
      return this[indent$];
    }
    set indent(value) {
      super.indent = value;
    }
  };
  (src__foundation__licenses.LicenseParagraph.new = function(text, indent) {
    this[text$] = text;
    this[indent$] = indent;
  }).prototype = src__foundation__licenses.LicenseParagraph.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseParagraph);
  const text$ = Symbol("LicenseParagraph.text");
  const indent$ = Symbol("LicenseParagraph.indent");
  dart.setFieldSignature(src__foundation__licenses.LicenseParagraph, () => ({
    __proto__: dart.getFields(src__foundation__licenses.LicenseParagraph.__proto__),
    text: dart.finalFieldType(core.String),
    indent: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__foundation__licenses.LicenseParagraph, {
    /*src__foundation__licenses.LicenseParagraph.centeredIndent*/get centeredIndent() {
      return -1;
    }
  });
  src__foundation__licenses.LicenseEntry = class LicenseEntry extends core.Object {};
  (src__foundation__licenses.LicenseEntry.new = function() {
  }).prototype = src__foundation__licenses.LicenseEntry.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseEntry);
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState = class _LicenseEntryWithLineBreaksParserState extends core.Object {
    toString() {
      return {
        0: "_LicenseEntryWithLineBreaksParserState.beforeParagraph",
        1: "_LicenseEntryWithLineBreaksParserState.inParagraph"
      }[this.index];
    }
  };
  (src__foundation__licenses._LicenseEntryWithLineBreaksParserState.new = function(x) {
    this.index = x;
  }).prototype = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.prototype;
  dart.addTypeTests(src__foundation__licenses._LicenseEntryWithLineBreaksParserState);
  dart.setFieldSignature(src__foundation__licenses._LicenseEntryWithLineBreaksParserState, () => ({
    __proto__: dart.getFields(src__foundation__licenses._LicenseEntryWithLineBreaksParserState.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__foundation__licenses._LicenseEntryWithLineBreaksParserState, ['toString']);
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph = dart.const(new src__foundation__licenses._LicenseEntryWithLineBreaksParserState.new(0));
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph = dart.const(new src__foundation__licenses._LicenseEntryWithLineBreaksParserState.new(1));
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState.values = dart.constList([src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph, src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph], src__foundation__licenses._LicenseEntryWithLineBreaksParserState);
  src__foundation__licenses.LicenseEntryWithLineBreaks = class LicenseEntryWithLineBreaks extends src__foundation__licenses.LicenseEntry {
    get packages() {
      return this[packages$];
    }
    set packages(value) {
      super.packages = value;
    }
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get paragraphs() {
      return new (SyncIterableOfLicenseParagraph()).new((function* paragraphs() {
        let lineStart = 0;
        let currentPosition = 0;
        let lastLineIndent = 0;
        let currentLineIndent = 0;
        let currentParagraphIndentation = null;
        let state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
        let lines = JSArrayOfString().of([]);
        const addLine = () => {
          if (!(lineStart < currentPosition)) dart.assertFailed();
          lines[$add](this.text[$substring](lineStart, currentPosition));
        };
        dart.fn(addLine, VoidTovoid());
        function getParagraph() {
          if (!dart.test(lines[$isNotEmpty])) dart.assertFailed();
          if (!(currentParagraphIndentation != null)) dart.assertFailed();
          let result = new src__foundation__licenses.LicenseParagraph.new(lines[$join](" "), currentParagraphIndentation);
          if (!(result.text[$trimLeft]() === result.text)) dart.assertFailed();
          if (!result.text[$isNotEmpty]) dart.assertFailed();
          lines[$clear]();
          return result;
        }
        dart.fn(getParagraph, VoidToLicenseParagraph());
        while (currentPosition < this.text.length) {
          switch (state) {
            case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph:
            {
              if (!(lineStart === currentPosition)) dart.assertFailed();
              switch (this.text[$_get](currentPosition)) {
                case " ":
                {
                  lineStart = currentPosition + 1;
                  currentLineIndent = currentLineIndent + 1;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "\t":
                {
                  lineStart = currentPosition + 1;
                  currentLineIndent = currentLineIndent + 8;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "\n":
                case "\f":
                {
                  if (dart.test(lines[$isNotEmpty])) {
                    yield getParagraph();
                  }
                  lastLineIndent = 0;
                  currentLineIndent = 0;
                  currentParagraphIndentation = null;
                  lineStart = currentPosition + 1;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "[":
                {
                  currentLineIndent = currentLineIndent + 1;
                  // continue to next case
                }
                default:
                {
                  // Unimplemented case labels: [startParagraph:]
                  if (dart.test(lines[$isNotEmpty]) && currentLineIndent > lastLineIndent) {
                    yield getParagraph();
                    currentParagraphIndentation = null;
                  }
                  if (currentParagraphIndentation == null) {
                    if (currentLineIndent > 10)
                      currentParagraphIndentation = src__foundation__licenses.LicenseParagraph.centeredIndent;
                    else
                      currentParagraphIndentation = (currentLineIndent / 3)[$truncate]();
                  }
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
                }
              }
              break;
            }
            case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph:
            {
              switch (this.text[$_get](currentPosition)) {
                case "\n":
                {
                  addLine();
                  lastLineIndent = currentLineIndent;
                  currentLineIndent = 0;
                  lineStart = currentPosition + 1;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "\f":
                {
                  addLine();
                  yield getParagraph();
                  lastLineIndent = 0;
                  currentLineIndent = 0;
                  currentParagraphIndentation = null;
                  lineStart = currentPosition + 1;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                default:
                {
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
                }
              }
              break;
            }
          }
          currentPosition = currentPosition + 1;
        }
        switch (state) {
          case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph:
          {
            if (dart.test(lines[$isNotEmpty])) {
              yield getParagraph();
            }
            break;
          }
          case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph:
          {
            addLine();
            yield getParagraph();
            break;
          }
        }
      }).bind(this));
    }
  };
  (src__foundation__licenses.LicenseEntryWithLineBreaks.new = function(packages, text) {
    this[packages$] = packages;
    this[text$0] = text;
    src__foundation__licenses.LicenseEntryWithLineBreaks.__proto__.new.call(this);
  }).prototype = src__foundation__licenses.LicenseEntryWithLineBreaks.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseEntryWithLineBreaks);
  const packages$ = Symbol("LicenseEntryWithLineBreaks.packages");
  const text$0 = Symbol("LicenseEntryWithLineBreaks.text");
  dart.setGetterSignature(src__foundation__licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getGetters(src__foundation__licenses.LicenseEntryWithLineBreaks.__proto__),
    paragraphs: core.Iterable$(src__foundation__licenses.LicenseParagraph)
  }));
  dart.setFieldSignature(src__foundation__licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getFields(src__foundation__licenses.LicenseEntryWithLineBreaks.__proto__),
    packages: dart.finalFieldType(ListOfString()),
    text: dart.finalFieldType(core.String)
  }));
  src__foundation__licenses.LicenseRegistry = class LicenseRegistry extends core.Object {
    static addLicense(collector) {
      let t = src__foundation__licenses.LicenseRegistry._collectors;
      t == null ? src__foundation__licenses.LicenseRegistry._collectors = JSArrayOfVoidToStreamOfLicenseEntry().of([]) : t;
      src__foundation__licenses.LicenseRegistry._collectors[$add](collector);
    }
    static get licenses() {
      return new (_AsyncStarImplOfLicenseEntry()).new(function* licenses(stream) {
        if (src__foundation__licenses.LicenseRegistry._collectors == null) return;
        for (let collector of src__foundation__licenses.LicenseRegistry._collectors) {
          if (stream.addStream(collector())) return;
          yield;
        }
      }).stream;
    }
  };
  (src__foundation__licenses.LicenseRegistry.__ = function() {
  }).prototype = src__foundation__licenses.LicenseRegistry.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseRegistry);
  dart.defineLazy(src__foundation__licenses.LicenseRegistry, {
    /*src__foundation__licenses.LicenseRegistry._collectors*/get _collectors() {
      return null;
    },
    set _collectors(_) {}
  });
  const _depth = dart.privateName(src__foundation__node, "_depth");
  const _owner$ = dart.privateName(src__foundation__node, "_owner");
  const _parent = dart.privateName(src__foundation__node, "_parent");
  src__foundation__node.AbstractNode = class AbstractNode extends core.Object {
    get depth() {
      return this[_depth];
    }
    redepthChild(child) {
      if (!dart.equals(child.owner, this.owner)) dart.assertFailed();
      if (dart.notNull(child[_depth]) <= dart.notNull(this[_depth])) {
        child[_depth] = dart.notNull(this[_depth]) + 1;
        child.redepthChildren();
      }
    }
    redepthChildren() {}
    get owner() {
      return this[_owner$];
    }
    get attached() {
      return this[_owner$] != null;
    }
    attach(owner) {
      owner;
      if (!(owner != null)) dart.assertFailed();
      if (!(this[_owner$] == null)) dart.assertFailed();
      this[_owner$] = owner;
    }
    detach() {
      if (!(this[_owner$] != null)) dart.assertFailed();
      this[_owner$] = null;
      if (!(this.parent == null || this.attached == this.parent.attached)) dart.assertFailed();
    }
    get parent() {
      return this[_parent];
    }
    adoptChild(child) {
      src__foundation__node.AbstractNode._check(child);
      if (!(child != null)) dart.assertFailed();
      if (!(child[_parent] == null)) dart.assertFailed();
      if (!dart.test(dart.fn(() => {
        let node = this;
        while (node.parent != null)
          node = node.parent;
        if (!!dart.equals(node, child)) dart.assertFailed();
        return true;
      }, VoidTobool())())) dart.assertFailed();
      child[_parent] = this;
      if (dart.test(this.attached)) {
        child.attach(this[_owner$]);
      }
      this.redepthChild(child);
    }
    dropChild(child) {
      src__foundation__node.AbstractNode._check(child);
      if (!(child != null)) dart.assertFailed();
      if (!dart.equals(child[_parent], this)) dart.assertFailed();
      if (!(child.attached == this.attached)) dart.assertFailed();
      child[_parent] = null;
      if (dart.test(this.attached)) {
        child.detach();
      }
    }
  };
  (src__foundation__node.AbstractNode.new = function() {
    this[_depth] = 0;
    this[_owner$] = null;
    this[_parent] = null;
  }).prototype = src__foundation__node.AbstractNode.prototype;
  dart.addTypeTests(src__foundation__node.AbstractNode);
  dart.setMethodSignature(src__foundation__node.AbstractNode, () => ({
    __proto__: dart.getMethods(src__foundation__node.AbstractNode.__proto__),
    redepthChild: dart.fnType(dart.void, [src__foundation__node.AbstractNode]),
    redepthChildren: dart.fnType(dart.void, []),
    attach: dart.fnType(dart.void, [core.Object]),
    detach: dart.fnType(dart.void, []),
    adoptChild: dart.fnType(dart.void, [core.Object]),
    dropChild: dart.fnType(dart.void, [core.Object])
  }));
  dart.setGetterSignature(src__foundation__node.AbstractNode, () => ({
    __proto__: dart.getGetters(src__foundation__node.AbstractNode.__proto__),
    depth: core.int,
    owner: core.Object,
    attached: core.bool,
    parent: src__foundation__node.AbstractNode
  }));
  dart.setFieldSignature(src__foundation__node.AbstractNode, () => ({
    __proto__: dart.getFields(src__foundation__node.AbstractNode.__proto__),
    [_depth]: dart.fieldType(core.int),
    [_owner$]: dart.fieldType(core.Object),
    [_parent]: dart.fieldType(src__foundation__node.AbstractNode)
  }));
  dart.defineLazy(src__foundation__profile, {
    /*src__foundation__profile._kReleaseMode*/get _kReleaseMode() {
      return false;
    }
  });
  src__foundation__profile.profile = function(func) {
    if (dart.test(src__foundation__profile._kReleaseMode)) return;
    func();
  };
  const _buffer$ = dart.privateName(src__foundation__serialization, "_buffer");
  const _eightBytes = dart.privateName(src__foundation__serialization, "_eightBytes");
  const _eightBytesAsList = dart.privateName(src__foundation__serialization, "_eightBytesAsList");
  const _alignTo = dart.privateName(src__foundation__serialization, "_alignTo");
  src__foundation__serialization.WriteBuffer = class WriteBuffer extends core.Object {
    putUint8(byte) {
      this[_buffer$].add(byte);
    }
    putUint16(value) {
      this[_eightBytes][$setUint16](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 2);
    }
    putUint32(value) {
      this[_eightBytes][$setUint32](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 4);
    }
    putInt32(value) {
      this[_eightBytes][$setInt32](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 4);
    }
    putInt64(value) {
      this[_eightBytes][$setInt64](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 8);
    }
    putFloat64(value) {
      this[_alignTo](8);
      this[_eightBytes][$setFloat64](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList]);
    }
    putUint8List(list) {
      this[_buffer$].addAll(list);
    }
    putInt32List(list) {
      this[_alignTo](4);
      this[_buffer$].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 4 * dart.notNull(list[$length])));
    }
    putInt64List(list) {
      this[_alignTo](8);
      this[_buffer$].addAll(list.buffer[$asUint8List](list.offsetInBytes, 8 * dart.notNull(list.length)));
    }
    putFloat64List(list) {
      this[_alignTo](8);
      this[_buffer$].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 8 * dart.notNull(list[$length])));
    }
    [_alignTo](alignment) {
      let mod = this[_buffer$].length[$modulo](alignment);
      if (mod !== 0) {
        for (let i = 0; i < dart.notNull(alignment) - mod; i++)
          this[_buffer$].add(0);
      }
    }
    done() {
      let result = this[_buffer$].buffer[$asByteData](0, this[_buffer$].lengthInBytes);
      this[_buffer$] = null;
      return result;
    }
  };
  (src__foundation__serialization.WriteBuffer.new = function() {
    this[_buffer$] = null;
    this[_eightBytes] = null;
    this[_eightBytesAsList] = null;
    this[_buffer$] = new typed_buffers$.Uint8Buffer.new();
    this[_eightBytes] = typed_data.ByteData.new(8);
    this[_eightBytesAsList] = this[_eightBytes][$buffer][$asUint8List]();
  }).prototype = src__foundation__serialization.WriteBuffer.prototype;
  dart.addTypeTests(src__foundation__serialization.WriteBuffer);
  dart.setMethodSignature(src__foundation__serialization.WriteBuffer, () => ({
    __proto__: dart.getMethods(src__foundation__serialization.WriteBuffer.__proto__),
    putUint8: dart.fnType(dart.void, [core.int]),
    putUint16: dart.fnType(dart.void, [core.int]),
    putUint32: dart.fnType(dart.void, [core.int]),
    putInt32: dart.fnType(dart.void, [core.int]),
    putInt64: dart.fnType(dart.void, [core.int]),
    putFloat64: dart.fnType(dart.void, [core.double]),
    putUint8List: dart.fnType(dart.void, [typed_data.Uint8List]),
    putInt32List: dart.fnType(dart.void, [typed_data.Int32List]),
    putInt64List: dart.fnType(dart.void, [typed_data.Int64List]),
    putFloat64List: dart.fnType(dart.void, [typed_data.Float64List]),
    [_alignTo]: dart.fnType(dart.void, [core.int]),
    done: dart.fnType(typed_data.ByteData, [])
  }));
  dart.setFieldSignature(src__foundation__serialization.WriteBuffer, () => ({
    __proto__: dart.getFields(src__foundation__serialization.WriteBuffer.__proto__),
    [_buffer$]: dart.fieldType(typed_buffers$.Uint8Buffer),
    [_eightBytes]: dart.fieldType(typed_data.ByteData),
    [_eightBytesAsList]: dart.fieldType(typed_data.Uint8List)
  }));
  const _position = dart.privateName(src__foundation__serialization, "_position");
  src__foundation__serialization.ReadBuffer = class ReadBuffer extends core.Object {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get hasRemaining() {
      return dart.notNull(this[_position]) < dart.notNull(this.data[$lengthInBytes]);
    }
    getUint8() {
      return this.data[$getUint8]((() => {
        let x = this[_position];
        this[_position] = dart.notNull(x) + 1;
        return x;
      })());
    }
    getUint16() {
      let value = this.data[$getUint16](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 2;
      return value;
    }
    getUint32() {
      let value = this.data[$getUint32](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 4;
      return value;
    }
    getInt32() {
      let value = this.data[$getInt32](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 4;
      return value;
    }
    getInt64() {
      let value = this.data[$getInt64](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 8;
      return value;
    }
    getFloat64() {
      this[_alignTo](8);
      let value = this.data[$getFloat64](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 8;
      return value;
    }
    getUint8List(length) {
      let list = this.data[$buffer][$asUint8List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + dart.notNull(length);
      return list;
    }
    getInt32List(length) {
      this[_alignTo](4);
      let list = this.data[$buffer][$asInt32List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 4 * dart.notNull(length);
      return list;
    }
    getInt64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asInt64List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 8 * dart.notNull(length);
      return list;
    }
    getFloat64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asFloat64List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 8 * dart.notNull(length);
      return list;
    }
    [_alignTo](alignment) {
      let mod = this[_position][$modulo](alignment);
      if (mod !== 0) {
        this[_position] = dart.notNull(this[_position]) + (dart.notNull(alignment) - mod);
      }
    }
  };
  (src__foundation__serialization.ReadBuffer.new = function(data) {
    this[_position] = 0;
    this[data$] = data;
    if (!(data != null)) dart.assertFailed();
  }).prototype = src__foundation__serialization.ReadBuffer.prototype;
  dart.addTypeTests(src__foundation__serialization.ReadBuffer);
  const data$ = Symbol("ReadBuffer.data");
  dart.setMethodSignature(src__foundation__serialization.ReadBuffer, () => ({
    __proto__: dart.getMethods(src__foundation__serialization.ReadBuffer.__proto__),
    getUint8: dart.fnType(core.int, []),
    getUint16: dart.fnType(core.int, []),
    getUint32: dart.fnType(core.int, []),
    getInt32: dart.fnType(core.int, []),
    getInt64: dart.fnType(core.int, []),
    getFloat64: dart.fnType(core.double, []),
    getUint8List: dart.fnType(typed_data.Uint8List, [core.int]),
    getInt32List: dart.fnType(typed_data.Int32List, [core.int]),
    getInt64List: dart.fnType(typed_data.Int64List, [core.int]),
    getFloat64List: dart.fnType(typed_data.Float64List, [core.int]),
    [_alignTo]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__foundation__serialization.ReadBuffer, () => ({
    __proto__: dart.getGetters(src__foundation__serialization.ReadBuffer.__proto__),
    hasRemaining: core.bool
  }));
  dart.setFieldSignature(src__foundation__serialization.ReadBuffer, () => ({
    __proto__: dart.getFields(src__foundation__serialization.ReadBuffer.__proto__),
    data: dart.finalFieldType(typed_data.ByteData),
    [_position]: dart.fieldType(core.int)
  }));
  const _value$0 = dart.privateName(src__foundation__synchronous_future, "_value");
  const _is_SynchronousFuture_default = Symbol('_is_SynchronousFuture_default');
  src__foundation__synchronous_future.SynchronousFuture$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let dynamicToT = () => (dynamicToT = dart.constFn(dart.fnType(T, [dart.dynamic])))();
    class SynchronousFuture extends core.Object {
      asStream() {
        let controller = StreamControllerOfT().new();
        controller.add(this[_value$0]);
        controller.close();
        return controller.stream;
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return CompleterOfT().new().future;
      }
      then(E, f, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let result = f(this[_value$0]);
        if (async.Future$(E).is(result)) return result;
        return new (src__foundation__synchronous_future.SynchronousFuture$(E)).new(E._check(result));
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        return FutureOfT().value(this[_value$0]).timeout(timeLimit, {onTimeout: VoidToFutureOrOfT()._check(onTimeout)});
      }
      whenComplete(action) {
        try {
          let result = action();
          if (async.Future.is(result)) return FutureOfT()._check(result.then(T, dart.fn(value => this[_value$0], dynamicToT())));
          return this;
        } catch (e$) {
          let e = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          return FutureOfT().error(e, stack);
        }
      }
    }
    (SynchronousFuture.new = function(value) {
      this[_value$0] = value;
    }).prototype = SynchronousFuture.prototype;
    SynchronousFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(SynchronousFuture);
    SynchronousFuture.prototype[_is_SynchronousFuture_default] = true;
    SynchronousFuture[dart.implements] = () => [FutureOfT()];
    dart.setMethodSignature(SynchronousFuture, () => ({
      __proto__: dart.getMethods(SynchronousFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.fnType(core.bool, [dart.dynamic])}),
      then: dart.gFnType(E => [async.Future$(E), [dart.fnType(dart.dynamic, [T])], {onError: core.Function}]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: dart.fnType(dart.dynamic, [])}),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(dart.dynamic, [])])
    }));
    dart.setFieldSignature(SynchronousFuture, () => ({
      __proto__: dart.getFields(SynchronousFuture.__proto__),
      [_value$0]: dart.finalFieldType(T)
    }));
    return SynchronousFuture;
  });
  src__foundation__synchronous_future.SynchronousFuture = src__foundation__synchronous_future.SynchronousFuture$();
  dart.addTypeTests(src__foundation__synchronous_future.SynchronousFuture, _is_SynchronousFuture_default);
  src__foundation__unicode.Unicode = class Unicode extends core.Object {};
  (src__foundation__unicode.Unicode.__ = function() {
  }).prototype = src__foundation__unicode.Unicode.prototype;
  dart.addTypeTests(src__foundation__unicode.Unicode);
  dart.defineLazy(src__foundation__unicode.Unicode, {
    /*src__foundation__unicode.Unicode.LRE*/get LRE() {
      return "‪";
    },
    /*src__foundation__unicode.Unicode.RLE*/get RLE() {
      return "‫";
    },
    /*src__foundation__unicode.Unicode.PDF*/get PDF() {
      return "‬";
    },
    /*src__foundation__unicode.Unicode.LRO*/get LRO() {
      return "‭";
    },
    /*src__foundation__unicode.Unicode.RLO*/get RLO() {
      return "‮";
    },
    /*src__foundation__unicode.Unicode.LRI*/get LRI() {
      return "⁦";
    },
    /*src__foundation__unicode.Unicode.RLI*/get RLI() {
      return "⁧";
    },
    /*src__foundation__unicode.Unicode.FSI*/get FSI() {
      return "⁨";
    },
    /*src__foundation__unicode.Unicode.PDI*/get PDI() {
      return "⁩";
    },
    /*src__foundation__unicode.Unicode.LRM*/get LRM() {
      return "‎";
    },
    /*src__foundation__unicode.Unicode.RLM*/get RLM() {
      return "‏";
    },
    /*src__foundation__unicode.Unicode.ALM*/get ALM() {
      return "؜";
    }
  });
  dart.trackLibraries("packages/flutter_web/src/foundation/assertions.ddc", {
    "package:flutter_web/src/foundation/basic_types.dart": src__foundation__basic_types,
    "package:flutter_web/src/foundation/print.dart": src__foundation__print,
    "package:flutter_web/src/foundation/assertions.dart": src__foundation__assertions,
    "package:flutter_web/src/foundation/constants.dart": src__foundation__constants,
    "package:flutter_web/src/foundation/platform.dart": src__foundation__platform,
    "package:flutter_web/src/foundation/debug.dart": src__foundation__debug,
    "package:flutter_web/src/foundation/binding.dart": src__foundation__binding,
    "package:flutter_web/src/foundation/bitfield.dart": src__foundation__bitfield,
    "package:flutter_web/src/util.dart": src__util,
    "package:flutter_web/src/foundation/diagnostics.dart": src__foundation__diagnostics,
    "package:flutter_web/src/foundation/observer_list.dart": src__foundation__observer_list,
    "package:flutter_web/src/foundation/change_notifier.dart": src__foundation__change_notifier,
    "package:flutter_web/src/foundation/collections.dart": src__foundation__collections,
    "package:flutter_web/src/foundation/key.dart": src__foundation__key,
    "package:flutter_web/src/foundation/isolates.dart": src__foundation__isolates,
    "package:flutter_web/src/foundation/licenses.dart": src__foundation__licenses,
    "package:flutter_web/src/foundation/node.dart": src__foundation__node,
    "package:flutter_web/src/foundation/profile.dart": src__foundation__profile,
    "package:flutter_web/src/foundation/serialization.dart": src__foundation__serialization,
    "package:flutter_web/src/foundation/synchronous_future.dart": src__foundation__synchronous_future,
    "package:flutter_web/src/foundation/unicode.dart": src__foundation__unicode
  }, '{"version":3,"sourceRoot":"","sources":["basic_types.dart","print.dart","assertions.dart","constants.dart","platform.dart","debug.dart","binding.dart","bitfield.dart","../util.dart","diagnostics.dart","observer_list.dart","change_notifier.dart","collections.dart","key.dart","isolates.dart","licenses.dart","node.dart","profile.dart","serialization.dart","synchronous_future.dart","unicode.dart"],"names":[],"mappings":"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","file":"assertions.ddc.js"}');
  // Exports:
  return {
    src__foundation__basic_types: src__foundation__basic_types,
    src__foundation__print: src__foundation__print,
    src__foundation__assertions: src__foundation__assertions,
    src__foundation__constants: src__foundation__constants,
    src__foundation__platform: src__foundation__platform,
    src__foundation__debug: src__foundation__debug,
    src__foundation__binding: src__foundation__binding,
    src__foundation__bitfield: src__foundation__bitfield,
    src__util: src__util,
    src__foundation__diagnostics: src__foundation__diagnostics,
    src__foundation__observer_list: src__foundation__observer_list,
    src__foundation__change_notifier: src__foundation__change_notifier,
    src__foundation__collections: src__foundation__collections,
    src__foundation__key: src__foundation__key,
    src__foundation__isolates: src__foundation__isolates,
    src__foundation__licenses: src__foundation__licenses,
    src__foundation__node: src__foundation__node,
    src__foundation__profile: src__foundation__profile,
    src__foundation__serialization: src__foundation__serialization,
    src__foundation__synchronous_future: src__foundation__synchronous_future,
    src__foundation__unicode: src__foundation__unicode
  };
});

//# sourceMappingURL=assertions.ddc.js.map
