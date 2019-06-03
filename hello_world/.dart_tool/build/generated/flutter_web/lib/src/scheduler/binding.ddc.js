define(['dart_sdk', 'packages/flutter_web/src/foundation/assertions', 'packages/collection/src/priority_queue', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/services/clipboard', 'packages/flutter_web/services'], function(dart_sdk, assertions, priority_queue, ui, clipboard, services) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const developer = dart_sdk.developer;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const src__foundation__print = assertions.src__foundation__print;
  const src__foundation__debug = assertions.src__foundation__debug;
  const src__foundation__profile = assertions.src__foundation__profile;
  const src__foundation__binding = assertions.src__foundation__binding;
  const src__priority_queue = priority_queue.src__priority_queue;
  const ui$ = ui.ui;
  const src__services__system_channels = clipboard.src__services__system_channels;
  const src__services__binding = services.src__services__binding;
  const src__scheduler__debug = Object.create(dart.library);
  const src__scheduler__priority = Object.create(dart.library);
  const src__scheduler__binding = Object.create(dart.library);
  const $abs = dartx.abs;
  const $sign = dartx.sign;
  const $compareTo = dartx.compareTo;
  const $forEach = dartx.forEach;
  const $split = dartx.split;
  const $trimRight = dartx.trimRight;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  const $_get = dartx._get;
  const $keys = dartx.keys;
  const $join = dartx.join;
  const $add = dartx.add;
  const $round = dartx.round;
  const $padRight = dartx.padRight;
  const $toString = dartx.toString;
  const $padLeft = dartx.padLeft;
  const $times = dartx['*'];
  const $clear = dartx.clear;
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let DurationTovoid = () => (DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))();
  let __Tobool = () => (__Tobool = dart.constFn(dart.fnType(core.bool, [], {priority: core.int, scheduler: src__scheduler__binding.SchedulerBinding})))();
  let _TaskEntryAnd_TaskEntryToint = () => (_TaskEntryAnd_TaskEntryToint = dart.constFn(dart.fnType(core.int, [src__scheduler__binding._TaskEntry, src__scheduler__binding._TaskEntry])))();
  let HeapPriorityQueueOf_TaskEntry = () => (HeapPriorityQueueOf_TaskEntry = dart.constFn(src__priority_queue.HeapPriorityQueue$(src__scheduler__binding._TaskEntry)))();
  let IdentityMapOfint$_FrameCallbackEntry = () => (IdentityMapOfint$_FrameCallbackEntry = dart.constFn(_js_helper.IdentityMap$(core.int, src__scheduler__binding._FrameCallbackEntry)))();
  let _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  let JSArrayOfDurationTovoid = () => (JSArrayOfDurationTovoid = dart.constFn(_interceptors.JSArray$(DurationTovoid())))();
  let FutureOfdouble = () => (FutureOfdouble = dart.constFn(async.Future$(core.double)))();
  let VoidToFutureOfdouble = () => (VoidToFutureOfdouble = dart.constFn(dart.fnType(FutureOfdouble(), [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let doubleToFutureOfNull = () => (doubleToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [core.double])))();
  let StringBufferToNull = () => (StringBufferToNull = dart.constFn(dart.fnType(core.Null, [core.StringBuffer])))();
  let MapOfint$_FrameCallbackEntry = () => (MapOfint$_FrameCallbackEntry = dart.constFn(core.Map$(core.int, src__scheduler__binding._FrameCallbackEntry)))();
  let CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  let DurationToNull = () => (DurationToNull = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let intAnd_FrameCallbackEntryToNull = () => (intAnd_FrameCallbackEntryToNull = dart.constFn(dart.fnType(core.Null, [core.int, src__scheduler__binding._FrameCallbackEntry])))();
  let ListOfDurationTovoid = () => (ListOfDurationTovoid = dart.constFn(core.List$(DurationTovoid())))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let PriorityQueueOf_TaskEntry = () => (PriorityQueueOf_TaskEntry = dart.constFn(src__priority_queue.PriorityQueue$(src__scheduler__binding._TaskEntry)))();
  let SetOfint = () => (SetOfint = dart.constFn(core.Set$(core.int)))();
  dart.defineLazy(src__scheduler__debug, {
    /*src__scheduler__debug.debugPrintBeginFrameBanner*/get debugPrintBeginFrameBanner() {
      return false;
    },
    set debugPrintBeginFrameBanner(_) {},
    /*src__scheduler__debug.debugPrintEndFrameBanner*/get debugPrintEndFrameBanner() {
      return false;
    },
    set debugPrintEndFrameBanner(_) {},
    /*src__scheduler__debug.debugPrintScheduleFrameStacks*/get debugPrintScheduleFrameStacks() {
      return false;
    },
    set debugPrintScheduleFrameStacks(_) {}
  });
  src__scheduler__debug.debugAssertAllSchedulerVarsUnset = function(reason) {
    if (!dart.test(dart.fn(() => {
      if (dart.test(src__scheduler__debug.debugPrintBeginFrameBanner) || dart.test(src__scheduler__debug.debugPrintEndFrameBanner)) {
        dart.throw(new src__foundation__assertions.FlutterError.new(reason));
      }
      return true;
    }, VoidTobool())())) dart.assertFailed();
    return true;
  };
  const _value = dart.privateName(src__scheduler__priority, "_value");
  src__scheduler__priority.Priority = class Priority extends core.Object {
    get value() {
      return this[_value];
    }
    ['+'](offset) {
      if (offset[$abs]() > 10000) {
        offset = 10000 * offset[$sign];
      }
      return new src__scheduler__priority.Priority.__(dart.notNull(this[_value]) + dart.notNull(offset));
    }
    ['-'](offset) {
      return this['+'](-dart.notNull(offset));
    }
  };
  (src__scheduler__priority.Priority.__ = function(value) {
    this[_value] = value;
  }).prototype = src__scheduler__priority.Priority.prototype;
  dart.addTypeTests(src__scheduler__priority.Priority);
  dart.setMethodSignature(src__scheduler__priority.Priority, () => ({
    __proto__: dart.getMethods(src__scheduler__priority.Priority.__proto__),
    '+': dart.fnType(src__scheduler__priority.Priority, [core.int]),
    '-': dart.fnType(src__scheduler__priority.Priority, [core.int])
  }));
  dart.setGetterSignature(src__scheduler__priority.Priority, () => ({
    __proto__: dart.getGetters(src__scheduler__priority.Priority.__proto__),
    value: core.int
  }));
  dart.setFieldSignature(src__scheduler__priority.Priority, () => ({
    __proto__: dart.getFields(src__scheduler__priority.Priority.__proto__),
    [_value]: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__scheduler__priority.Priority, {
    /*src__scheduler__priority.Priority.idle*/get idle() {
      return dart.const(new src__scheduler__priority.Priority.__(0));
    },
    /*src__scheduler__priority.Priority.animation*/get animation() {
      return dart.const(new src__scheduler__priority.Priority.__(100000));
    },
    /*src__scheduler__priority.Priority.touch*/get touch() {
      return dart.const(new src__scheduler__priority.Priority.__(200000));
    },
    /*src__scheduler__priority.Priority.kMaxOffset*/get kMaxOffset() {
      return 10000;
    }
  });
  dart.defineLazy(src__scheduler__binding, {
    /*src__scheduler__binding._timeDilation*/get _timeDilation() {
      return 1.0;
    },
    set _timeDilation(_) {}
  });
  dart.copyProperties(src__scheduler__binding, {
    set timeDilation(value) {
      if (!(dart.notNull(value) > 0.0)) dart.assertFailed();
      if (src__scheduler__binding._timeDilation == value) return;
      let t = src__scheduler__binding.SchedulerBinding.instance;
      t == null ? null : t.resetEpoch();
      src__scheduler__binding._timeDilation = value;
    },
    get timeDilation() {
      return src__scheduler__binding._timeDilation;
    }
  });
  const _is__TaskEntry_default = Symbol('_is__TaskEntry_default');
  src__scheduler__binding._TaskEntry$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let VoidToT = () => (VoidToT = dart.constFn(dart.fnType(T, [])))();
    class _TaskEntry extends core.Object {
      run() {
        developer.Timeline.timeSync(core.Null, this.debugLabel != null ? this.debugLabel : "Scheduled Task", dart.fn(() => {
          this.completer.complete(this.task());
        }, VoidToNull()), {flow: this.flow != null ? developer.Flow.step(this.flow.id) : null});
      }
    }
    (_TaskEntry.new = function(task, priority, debugLabel, flow) {
      this.debugStack = null;
      this.completer = null;
      this.task = task;
      this.priority = priority;
      this.debugLabel = debugLabel;
      this.flow = flow;
      if (!dart.test(dart.fn(() => {
        this.debugStack = core.StackTrace.current;
        return true;
      }, VoidTobool())())) dart.assertFailed();
      this.completer = CompleterOfT().new();
    }).prototype = _TaskEntry.prototype;
    dart.addTypeTests(_TaskEntry);
    _TaskEntry.prototype[_is__TaskEntry_default] = true;
    dart.setMethodSignature(_TaskEntry, () => ({
      __proto__: dart.getMethods(_TaskEntry.__proto__),
      run: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_TaskEntry, () => ({
      __proto__: dart.getFields(_TaskEntry.__proto__),
      task: dart.finalFieldType(VoidToT()),
      priority: dart.finalFieldType(core.int),
      debugLabel: dart.finalFieldType(core.String),
      flow: dart.finalFieldType(developer.Flow),
      debugStack: dart.fieldType(core.StackTrace),
      completer: dart.fieldType(CompleterOfT())
    }));
    return _TaskEntry;
  });
  src__scheduler__binding._TaskEntry = src__scheduler__binding._TaskEntry$();
  dart.addTypeTests(src__scheduler__binding._TaskEntry, _is__TaskEntry_default);
  src__scheduler__binding._FrameCallbackEntry = class _FrameCallbackEntry extends core.Object {};
  (src__scheduler__binding._FrameCallbackEntry.new = function(callback, opts) {
    let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
    this.debugStack = null;
    this.callback = callback;
    if (!dart.test(dart.fn(() => {
      if (dart.test(rescheduling)) {
        if (!dart.test(dart.fn(() => {
          if (src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack == null) {
            dart.throw(new src__foundation__assertions.FlutterError.new("scheduleFrameCallback called with rescheduling true, but no callback is in scope.\n" + "The \"rescheduling\" argument should only be set to true if the " + "callback is being reregistered from within the callback itself, " + "and only then if the callback itself is entirely synchronous. " + "If this is the initial registration of the callback, or if the " + "callback is asynchronous, then do not use the \"rescheduling\" " + "argument."));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed();
        this.debugStack = src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack;
      } else {
        this.debugStack = core.StackTrace.current;
      }
      return true;
    }, VoidTobool())())) dart.assertFailed();
  }).prototype = src__scheduler__binding._FrameCallbackEntry.prototype;
  dart.addTypeTests(src__scheduler__binding._FrameCallbackEntry);
  dart.setFieldSignature(src__scheduler__binding._FrameCallbackEntry, () => ({
    __proto__: dart.getFields(src__scheduler__binding._FrameCallbackEntry.__proto__),
    callback: dart.finalFieldType(DurationTovoid()),
    debugStack: dart.fieldType(core.StackTrace)
  }));
  dart.defineLazy(src__scheduler__binding._FrameCallbackEntry, {
    /*src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack*/get debugCurrentCallbackStack() {
      return null;
    },
    set debugCurrentCallbackStack(_) {}
  });
  src__scheduler__binding.SchedulerPhase = class SchedulerPhase extends core.Object {
    toString() {
      return {
        0: "SchedulerPhase.idle",
        1: "SchedulerPhase.transientCallbacks",
        2: "SchedulerPhase.midFrameMicrotasks",
        3: "SchedulerPhase.persistentCallbacks",
        4: "SchedulerPhase.postFrameCallbacks"
      }[this.index];
    }
  };
  (src__scheduler__binding.SchedulerPhase.new = function(x) {
    this.index = x;
  }).prototype = src__scheduler__binding.SchedulerPhase.prototype;
  dart.addTypeTests(src__scheduler__binding.SchedulerPhase);
  dart.setFieldSignature(src__scheduler__binding.SchedulerPhase, () => ({
    __proto__: dart.getFields(src__scheduler__binding.SchedulerPhase.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__scheduler__binding.SchedulerPhase, ['toString']);
  src__scheduler__binding.SchedulerPhase.idle = dart.const(new src__scheduler__binding.SchedulerPhase.new(0));
  src__scheduler__binding.SchedulerPhase.transientCallbacks = dart.const(new src__scheduler__binding.SchedulerPhase.new(1));
  src__scheduler__binding.SchedulerPhase.midFrameMicrotasks = dart.const(new src__scheduler__binding.SchedulerPhase.new(2));
  src__scheduler__binding.SchedulerPhase.persistentCallbacks = dart.const(new src__scheduler__binding.SchedulerPhase.new(3));
  src__scheduler__binding.SchedulerPhase.postFrameCallbacks = dart.const(new src__scheduler__binding.SchedulerPhase.new(4));
  src__scheduler__binding.SchedulerPhase.values = dart.constList([src__scheduler__binding.SchedulerPhase.idle, src__scheduler__binding.SchedulerPhase.transientCallbacks, src__scheduler__binding.SchedulerPhase.midFrameMicrotasks, src__scheduler__binding.SchedulerPhase.persistentCallbacks, src__scheduler__binding.SchedulerPhase.postFrameCallbacks], src__scheduler__binding.SchedulerPhase);
  const _lifecycleState = dart.privateName(src__scheduler__binding, "_lifecycleState");
  const _taskQueue = dart.privateName(src__scheduler__binding, "_taskQueue");
  const _hasRequestedAnEventLoopCallback = dart.privateName(src__scheduler__binding, "_hasRequestedAnEventLoopCallback");
  const _nextFrameCallbackId = dart.privateName(src__scheduler__binding, "_nextFrameCallbackId");
  const _transientCallbacks = dart.privateName(src__scheduler__binding, "_transientCallbacks");
  const _removedIds = dart.privateName(src__scheduler__binding, "_removedIds");
  const _persistentCallbacks = dart.privateName(src__scheduler__binding, "_persistentCallbacks");
  const _postFrameCallbacks = dart.privateName(src__scheduler__binding, "_postFrameCallbacks");
  const _nextFrameCompleter = dart.privateName(src__scheduler__binding, "_nextFrameCompleter");
  const _hasScheduledFrame = dart.privateName(src__scheduler__binding, "_hasScheduledFrame");
  const _schedulerPhase = dart.privateName(src__scheduler__binding, "_schedulerPhase");
  const _framesEnabled = dart.privateName(src__scheduler__binding, "_framesEnabled");
  const _warmUpFrame = dart.privateName(src__scheduler__binding, "_warmUpFrame");
  const _firstRawTimeStampInEpoch = dart.privateName(src__scheduler__binding, "_firstRawTimeStampInEpoch");
  const _epochStart = dart.privateName(src__scheduler__binding, "_epochStart");
  const _lastRawTimeStamp = dart.privateName(src__scheduler__binding, "_lastRawTimeStamp");
  const _currentFrameTimeStamp = dart.privateName(src__scheduler__binding, "_currentFrameTimeStamp");
  const _profileFrameNumber = dart.privateName(src__scheduler__binding, "_profileFrameNumber");
  const _profileFrameStopwatch = dart.privateName(src__scheduler__binding, "_profileFrameStopwatch");
  const _debugBanner = dart.privateName(src__scheduler__binding, "_debugBanner");
  const _ignoreNextEngineDrawFrame = dart.privateName(src__scheduler__binding, "_ignoreNextEngineDrawFrame");
  const _handleBeginFrame = dart.privateName(src__scheduler__binding, "_handleBeginFrame");
  const _handleDrawFrame = dart.privateName(src__scheduler__binding, "_handleDrawFrame");
  const _handleLifecycleMessage = dart.privateName(src__scheduler__binding, "_handleLifecycleMessage");
  const _setFramesEnabledState = dart.privateName(src__scheduler__binding, "_setFramesEnabledState");
  const _ensureEventLoopCallback = dart.privateName(src__scheduler__binding, "_ensureEventLoopCallback");
  const _runTasks = dart.privateName(src__scheduler__binding, "_runTasks");
  const _adjustForEpoch = dart.privateName(src__scheduler__binding, "_adjustForEpoch");
  const _invokeFrameCallback = dart.privateName(src__scheduler__binding, "_invokeFrameCallback");
  const _profileFramePostEvent = dart.privateName(src__scheduler__binding, "_profileFramePostEvent");
  src__scheduler__binding.SchedulerBinding = class SchedulerBinding extends core.Object {
    static get instance() {
      return src__scheduler__binding.SchedulerBinding._instance;
    }
    static _parseAppLifecycleMessage(message) {
      switch (message) {
        case "AppLifecycleState.paused":
        {
          return ui$.AppLifecycleState.paused;
        }
        case "AppLifecycleState.resumed":
        {
          return ui$.AppLifecycleState.resumed;
        }
        case "AppLifecycleState.inactive":
        {
          return ui$.AppLifecycleState.inactive;
        }
        case "AppLifecycleState.suspending":
        {
          return ui$.AppLifecycleState.suspending;
        }
      }
      return null;
    }
    static _taskSorter(e1, e2) {
      return -e1.priority[$compareTo](e2.priority);
    }
    static debugPrintTransientCallbackRegistrationStack() {
      if (!dart.test(dart.fn(() => {
        if (src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack != null) {
          src__foundation__print.debugPrint("When the current transient callback was registered, this was the stack:");
          src__foundation__print.debugPrint(src__foundation__assertions.FlutterError.defaultStackFilter(dart.toString(src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack)[$trimRight]()[$split]("\n"))[$join]("\n"));
        } else {
          src__foundation__print.debugPrint("No transient callback is currently executing.");
        }
        return true;
      }, VoidTobool())())) dart.assertFailed();
    }
    static _debugDescribeTimeStamp(timeStamp, buffer) {
      if (dart.notNull(timeStamp.inDays) > 0) buffer.write(dart.str(timeStamp.inDays) + "d ");
      if (dart.notNull(timeStamp.inHours) > 0) buffer.write(dart.str(dart.notNull(timeStamp.inHours) - dart.notNull(timeStamp.inDays) * core.Duration.hoursPerDay) + "h ");
      if (dart.notNull(timeStamp.inMinutes) > 0) buffer.write(dart.str(dart.notNull(timeStamp.inMinutes) - dart.notNull(timeStamp.inHours) * core.Duration.minutesPerHour) + "m ");
      if (dart.notNull(timeStamp.inSeconds) > 0) buffer.write(dart.str(dart.notNull(timeStamp.inSeconds) - dart.notNull(timeStamp.inMinutes) * core.Duration.secondsPerMinute) + "s ");
      buffer.write(dart.str(dart.notNull(timeStamp.inMilliseconds) - dart.notNull(timeStamp.inSeconds) * core.Duration.millisecondsPerSecond));
      let microseconds = dart.notNull(timeStamp.inMicroseconds) - dart.notNull(timeStamp.inMilliseconds) * core.Duration.microsecondsPerMillisecond;
      if (microseconds > 0) buffer.write("." + microseconds[$toString]()[$padLeft](3, "0"));
      buffer.write("ms");
    }
  };
  src__scheduler__binding.SchedulerBinding[dart.mixinOn] = BindingBase_ServicesBinding => class SchedulerBinding extends BindingBase_ServicesBinding {
    initInstances() {
      super.initInstances();
      src__scheduler__binding.SchedulerBinding._instance = this;
      ui$.window.onBeginFrame = dart.bind(this, _handleBeginFrame);
      ui$.window.onDrawFrame = dart.bind(this, _handleDrawFrame);
      src__services__system_channels.SystemChannels.lifecycle.setMessageHandler(dart.bind(this, _handleLifecycleMessage));
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      let isReleaseMode = false;
      if (!isReleaseMode) {
        this.registerNumericServiceExtension({name: "timeDilation", getter: dart.fn(() => async.async(core.double, function*() {
            return src__scheduler__binding.timeDilation;
          }), VoidToFutureOfdouble()), setter: dart.fn(value => async.async(core.Null, function*() {
            src__scheduler__binding.timeDilation = value;
          }), doubleToFutureOfNull())});
      }
    }
    get lifecycleState() {
      return this[_lifecycleState];
    }
    handleAppLifecycleStateChanged(state) {
      if (!(state != null)) dart.assertFailed();
      this[_lifecycleState] = state;
      switch (state) {
        case ui$.AppLifecycleState.resumed:
        case ui$.AppLifecycleState.inactive:
        {
          this[_setFramesEnabledState](true);
          break;
        }
        case ui$.AppLifecycleState.paused:
        case ui$.AppLifecycleState.suspending:
        {
          this[_setFramesEnabledState](false);
          break;
        }
      }
    }
    [_handleLifecycleMessage](message) {
      this.handleAppLifecycleStateChanged(src__scheduler__binding.SchedulerBinding._parseAppLifecycleMessage(message));
      return null;
    }
    get schedulingStrategy() {
      return this[schedulingStrategy];
    }
    set schedulingStrategy(value) {
      this[schedulingStrategy] = value;
    }
    scheduleTask(T, task, priority, opts) {
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let flow = opts && 'flow' in opts ? opts.flow : null;
      let isFirstTask = this[_taskQueue].isEmpty;
      let entry = new (src__scheduler__binding._TaskEntry$(T)).new(task, priority.value, debugLabel, flow);
      this[_taskQueue].add(entry);
      if (dart.test(isFirstTask) && !dart.test(this.locked)) this[_ensureEventLoopCallback]();
      return entry.completer.future;
    }
    unlocked() {
      super.unlocked();
      if (dart.test(this[_taskQueue].isNotEmpty)) this[_ensureEventLoopCallback]();
    }
    [_ensureEventLoopCallback]() {
      if (!!dart.test(this.locked)) dart.assertFailed();
      if (!dart.test(this[_taskQueue].isNotEmpty)) dart.assertFailed();
      if (dart.test(this[_hasRequestedAnEventLoopCallback])) return;
      this[_hasRequestedAnEventLoopCallback] = true;
      async.Timer.run(dart.bind(this, _runTasks));
    }
    [_runTasks]() {
      this[_hasRequestedAnEventLoopCallback] = false;
      if (dart.test(this.handleEventLoopCallback())) this[_ensureEventLoopCallback]();
    }
    handleEventLoopCallback() {
      if (dart.test(this[_taskQueue].isEmpty) || dart.test(this.locked)) return false;
      let entry = this[_taskQueue].first;
      if (dart.test(this.schedulingStrategy({priority: entry.priority, scheduler: this}))) {
        try {
          this[_taskQueue].removeFirst();
          entry.run();
        } catch (e) {
          let exception = dart.getThrown(e);
          let exceptionStack = dart.stackTrace(e);
          let callbackStack = null;
          if (!dart.test(dart.fn(() => {
            callbackStack = entry.debugStack;
            return true;
          }, VoidTobool())())) dart.assertFailed();
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: exceptionStack, library: "scheduler library", context: "during a task callback", informationCollector: callbackStack == null ? null : dart.fn(information => {
              information.writeln("\nThis exception was thrown in the context of a task callback. " + "When the task callback was _registered_ (as opposed to when the " + "exception was thrown), this was the stack:");
              src__foundation__assertions.FlutterError.defaultStackFilter(dart.toString(callbackStack)[$trimRight]()[$split]("\n"))[$forEach](dart.bind(information, 'writeln'));
            }, StringBufferToNull())}));
        }
        return this[_taskQueue].isNotEmpty;
      }
      return false;
    }
    get transientCallbackCount() {
      return this[_transientCallbacks][$length];
    }
    scheduleFrameCallback(callback, opts) {
      let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
      this.scheduleFrame();
      this[_nextFrameCallbackId] = dart.notNull(this[_nextFrameCallbackId]) + 1;
      this[_transientCallbacks][$_set](this[_nextFrameCallbackId], new src__scheduler__binding._FrameCallbackEntry.new(callback, {rescheduling: rescheduling}));
      return this[_nextFrameCallbackId];
    }
    cancelFrameCallbackWithId(id) {
      if (!(dart.notNull(id) > 0)) dart.assertFailed();
      this[_transientCallbacks][$remove](id);
      this[_removedIds].add(id);
    }
    debugAssertNoTransientCallbacks(reason) {
      if (!dart.test(dart.fn(() => {
        if (dart.notNull(this.transientCallbackCount) > 0) {
          let count = this.transientCallbackCount;
          let callbacks = MapOfint$_FrameCallbackEntry().from(this[_transientCallbacks]);
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: reason, library: "scheduler library", informationCollector: dart.fn(information => {
              if (count === 1) {
                information.writeln("There was one transient callback left. " + "The stack trace for when it was registered is as follows:");
              } else {
                information.writeln("There were " + dart.str(count) + " transient callbacks left. " + "The stack traces for when they were registered are as follows:");
              }
              for (let id of callbacks[$keys]) {
                let entry = callbacks[$_get](id);
                information.writeln("── callback " + dart.str(id) + " ──");
                src__foundation__assertions.FlutterError.defaultStackFilter(dart.toString(entry.debugStack)[$trimRight]()[$split]("\n"))[$forEach](dart.bind(information, 'writeln'));
              }
            }, StringBufferToNull())}));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed();
      return true;
    }
    addPersistentFrameCallback(callback) {
      this[_persistentCallbacks][$add](callback);
    }
    addPostFrameCallback(callback) {
      this[_postFrameCallbacks][$add](callback);
    }
    get endOfFrame() {
      if (this[_nextFrameCompleter] == null) {
        if (this.schedulerPhase === src__scheduler__binding.SchedulerPhase.idle) this.scheduleFrame();
        this[_nextFrameCompleter] = CompleterOfvoid().new();
        this.addPostFrameCallback(dart.fn(timeStamp => {
          this[_nextFrameCompleter].complete();
          this[_nextFrameCompleter] = null;
        }, DurationToNull()));
      }
      return this[_nextFrameCompleter].future;
    }
    get hasScheduledFrame() {
      return this[_hasScheduledFrame];
    }
    get schedulerPhase() {
      return this[_schedulerPhase];
    }
    get framesEnabled() {
      return this[_framesEnabled];
    }
    [_setFramesEnabledState](enabled) {
      if (this[_framesEnabled] == enabled) return;
      this[_framesEnabled] = enabled;
      if (dart.test(enabled)) this.scheduleFrame();
    }
    ensureVisualUpdate() {
      switch (this.schedulerPhase) {
        case src__scheduler__binding.SchedulerPhase.idle:
        case src__scheduler__binding.SchedulerPhase.postFrameCallbacks:
        {
          this.scheduleFrame();
          return;
        }
        case src__scheduler__binding.SchedulerPhase.transientCallbacks:
        case src__scheduler__binding.SchedulerPhase.midFrameMicrotasks:
        case src__scheduler__binding.SchedulerPhase.persistentCallbacks:
        {
          return;
        }
      }
    }
    scheduleFrame() {
      if (dart.test(this[_hasScheduledFrame]) || !dart.test(this[_framesEnabled])) return;
      if (!dart.test(dart.fn(() => {
        if (dart.test(src__scheduler__debug.debugPrintScheduleFrameStacks)) src__foundation__assertions.debugPrintStack({label: "scheduleFrame() called. Current phase is " + dart.str(this.schedulerPhase) + "."});
        return true;
      }, VoidTobool())())) dart.assertFailed();
      ui$.window.scheduleFrame();
      this[_hasScheduledFrame] = true;
    }
    scheduleForcedFrame() {
      if (dart.test(this[_hasScheduledFrame])) return;
      if (!dart.test(dart.fn(() => {
        if (dart.test(src__scheduler__debug.debugPrintScheduleFrameStacks)) src__foundation__assertions.debugPrintStack({label: "scheduleForcedFrame() called. Current phase is " + dart.str(this.schedulerPhase) + "."});
        return true;
      }, VoidTobool())())) dart.assertFailed();
      ui$.window.scheduleFrame();
      this[_hasScheduledFrame] = true;
    }
    scheduleWarmUpFrame() {
      if (dart.test(this[_warmUpFrame]) || this.schedulerPhase !== src__scheduler__binding.SchedulerPhase.idle) return;
      this[_warmUpFrame] = true;
      developer.Timeline.startSync("Warm-up frame");
      let hadScheduledFrame = this[_hasScheduledFrame];
      async.Timer.run(dart.fn(() => {
        if (!dart.test(this[_warmUpFrame])) dart.assertFailed();
        this.handleBeginFrame(null);
      }, VoidToNull()));
      async.Timer.run(dart.fn(() => {
        if (!dart.test(this[_warmUpFrame])) dart.assertFailed();
        this.handleDrawFrame();
        this.resetEpoch();
        this[_warmUpFrame] = false;
        if (dart.test(hadScheduledFrame)) this.scheduleFrame();
      }, VoidToNull()));
      this.lockEvents(dart.fn(() => async.async(core.Null, (function*() {
        yield this.endOfFrame;
        developer.Timeline.finishSync();
      }).bind(this)), VoidToFutureOfNull()));
    }
    resetEpoch() {
      this[_epochStart] = this[_adjustForEpoch](this[_lastRawTimeStamp]);
      this[_firstRawTimeStampInEpoch] = null;
    }
    [_adjustForEpoch](rawTimeStamp) {
      let rawDurationSinceEpoch = this[_firstRawTimeStampInEpoch] == null ? core.Duration.zero : rawTimeStamp['-'](this[_firstRawTimeStampInEpoch]);
      return new core.Duration.new({microseconds: (dart.notNull(rawDurationSinceEpoch.inMicroseconds) / dart.notNull(src__scheduler__binding.timeDilation))[$round]() + dart.notNull(this[_epochStart].inMicroseconds)});
    }
    get currentFrameTimeStamp() {
      if (!(this[_currentFrameTimeStamp] != null)) dart.assertFailed();
      return this[_currentFrameTimeStamp];
    }
    [_handleBeginFrame](rawTimeStamp) {
      if (dart.test(this[_warmUpFrame])) {
        if (!!dart.test(this[_ignoreNextEngineDrawFrame])) dart.assertFailed();
        this[_ignoreNextEngineDrawFrame] = true;
        return;
      }
      this.handleBeginFrame(rawTimeStamp);
    }
    [_handleDrawFrame]() {
      if (dart.test(this[_ignoreNextEngineDrawFrame])) {
        this[_ignoreNextEngineDrawFrame] = false;
        return;
      }
      this.handleDrawFrame();
    }
    handleBeginFrame(rawTimeStamp) {
      developer.Timeline.startSync("Frame", {arguments: src__foundation__debug.timelineWhitelistArguments});
      let t = this[_firstRawTimeStampInEpoch];
      t == null ? this[_firstRawTimeStampInEpoch] = rawTimeStamp : t;
      this[_currentFrameTimeStamp] = this[_adjustForEpoch](rawTimeStamp != null ? rawTimeStamp : this[_lastRawTimeStamp]);
      if (rawTimeStamp != null) this[_lastRawTimeStamp] = rawTimeStamp;
      src__foundation__profile.profile(dart.fn(() => {
        this[_profileFrameNumber] = dart.notNull(this[_profileFrameNumber]) + 1;
        this[_profileFrameStopwatch].reset();
        this[_profileFrameStopwatch].start();
      }, VoidToNull()));
      if (!dart.test(dart.fn(() => {
        if (dart.test(src__scheduler__debug.debugPrintBeginFrameBanner) || dart.test(src__scheduler__debug.debugPrintEndFrameBanner)) {
          let frameTimeStampDescription = new core.StringBuffer.new();
          if (rawTimeStamp != null) {
            src__scheduler__binding.SchedulerBinding._debugDescribeTimeStamp(this[_currentFrameTimeStamp], frameTimeStampDescription);
          } else {
            frameTimeStampDescription.write("(warm-up frame)");
          }
          this[_debugBanner] = "▄▄▄▄▄▄▄▄ Frame " + dart.toString(this[_profileFrameNumber])[$padRight](7) + "   " + frameTimeStampDescription.toString()[$padLeft](18) + " ▄▄▄▄▄▄▄▄";
          if (dart.test(src__scheduler__debug.debugPrintBeginFrameBanner)) src__foundation__print.debugPrint(this[_debugBanner]);
        }
        return true;
      }, VoidTobool())())) dart.assertFailed();
      if (!(this.schedulerPhase === src__scheduler__binding.SchedulerPhase.idle)) dart.assertFailed();
      this[_hasScheduledFrame] = false;
      try {
        developer.Timeline.startSync("Animate", {arguments: src__foundation__debug.timelineWhitelistArguments});
        this[_schedulerPhase] = src__scheduler__binding.SchedulerPhase.transientCallbacks;
        let callbacks = this[_transientCallbacks];
        this[_transientCallbacks] = new (IdentityMapOfint$_FrameCallbackEntry()).new();
        callbacks[$forEach](dart.fn((id, callbackEntry) => {
          if (!dart.test(this[_removedIds].contains(id))) this[_invokeFrameCallback](callbackEntry.callback, this[_currentFrameTimeStamp], callbackEntry.debugStack);
        }, intAnd_FrameCallbackEntryToNull()));
        this[_removedIds].clear();
      } finally {
        this[_schedulerPhase] = src__scheduler__binding.SchedulerPhase.midFrameMicrotasks;
      }
    }
    handleDrawFrame() {
      if (!(this[_schedulerPhase] === src__scheduler__binding.SchedulerPhase.midFrameMicrotasks)) dart.assertFailed();
      developer.Timeline.finishSync();
      try {
        this[_schedulerPhase] = src__scheduler__binding.SchedulerPhase.persistentCallbacks;
        for (let callback of this[_persistentCallbacks])
          this[_invokeFrameCallback](callback, this[_currentFrameTimeStamp]);
        this[_schedulerPhase] = src__scheduler__binding.SchedulerPhase.postFrameCallbacks;
        let localPostFrameCallbacks = ListOfDurationTovoid().from(this[_postFrameCallbacks]);
        this[_postFrameCallbacks][$clear]();
        for (let callback of localPostFrameCallbacks)
          this[_invokeFrameCallback](callback, this[_currentFrameTimeStamp]);
      } finally {
        this[_schedulerPhase] = src__scheduler__binding.SchedulerPhase.idle;
        developer.Timeline.finishSync();
        src__foundation__profile.profile(dart.fn(() => {
          this[_profileFrameStopwatch].stop();
          this[_profileFramePostEvent]();
        }, VoidToNull()));
        if (!dart.test(dart.fn(() => {
          if (dart.test(src__scheduler__debug.debugPrintEndFrameBanner)) src__foundation__print.debugPrint("▀"[$times](this[_debugBanner].length));
          this[_debugBanner] = null;
          return true;
        }, VoidTobool())())) dart.assertFailed();
        this[_currentFrameTimeStamp] = null;
      }
    }
    [_profileFramePostEvent]() {
      developer.postEvent("Flutter.Frame", new (IdentityMapOfString$dynamic()).from(["number", this[_profileFrameNumber], "startTime", this[_currentFrameTimeStamp].inMicroseconds, "elapsed", this[_profileFrameStopwatch].elapsedMicroseconds]));
    }
    [_invokeFrameCallback](callback, timeStamp, callbackStack) {
      if (callbackStack === void 0) callbackStack = null;
      if (!(callback != null)) dart.assertFailed();
      if (!(src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack == null)) dart.assertFailed();
      if (!dart.test(dart.fn(() => {
        src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack = callbackStack;
        return true;
      }, VoidTobool())())) dart.assertFailed();
      try {
        callback(timeStamp);
      } catch (e) {
        let exception = dart.getThrown(e);
        let exceptionStack = dart.stackTrace(e);
        src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: exceptionStack, library: "scheduler library", context: "during a scheduler callback", informationCollector: callbackStack == null ? null : dart.fn(information => {
            information.writeln("\nThis exception was thrown in the context of a scheduler callback. " + "When the scheduler callback was _registered_ (as opposed to when the " + "exception was thrown), this was the stack:");
            src__foundation__assertions.FlutterError.defaultStackFilter(dart.toString(callbackStack)[$trimRight]()[$split]("\n"))[$forEach](dart.bind(information, 'writeln'));
          }, StringBufferToNull())}));
      }
      if (!dart.test(dart.fn(() => {
        src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack = null;
        return true;
      }, VoidTobool())())) dart.assertFailed();
    }
  };
  (src__scheduler__binding.SchedulerBinding.new = function() {
    this[_lifecycleState] = null;
    this[schedulingStrategy] = dart.fn(src__scheduler__binding.defaultSchedulingStrategy, __Tobool());
    this[_taskQueue] = new (HeapPriorityQueueOf_TaskEntry()).new(dart.fn(src__scheduler__binding.SchedulerBinding._taskSorter, _TaskEntryAnd_TaskEntryToint()));
    this[_hasRequestedAnEventLoopCallback] = false;
    this[_nextFrameCallbackId] = 0;
    this[_transientCallbacks] = new (IdentityMapOfint$_FrameCallbackEntry()).new();
    this[_removedIds] = new (_IdentityHashSetOfint()).new();
    this[_persistentCallbacks] = JSArrayOfDurationTovoid().of([]);
    this[_postFrameCallbacks] = JSArrayOfDurationTovoid().of([]);
    this[_nextFrameCompleter] = null;
    this[_hasScheduledFrame] = false;
    this[_schedulerPhase] = src__scheduler__binding.SchedulerPhase.idle;
    this[_framesEnabled] = true;
    this[_warmUpFrame] = false;
    this[_firstRawTimeStampInEpoch] = null;
    this[_epochStart] = core.Duration.zero;
    this[_lastRawTimeStamp] = core.Duration.zero;
    this[_currentFrameTimeStamp] = null;
    this[_profileFrameNumber] = 0;
    this[_profileFrameStopwatch] = new core.Stopwatch.new();
    this[_debugBanner] = null;
    this[_ignoreNextEngineDrawFrame] = false;
  }).prototype = src__scheduler__binding.SchedulerBinding.prototype;
  dart.addTypeTests(src__scheduler__binding.SchedulerBinding);
  const schedulingStrategy = Symbol("SchedulerBinding.schedulingStrategy");
  src__scheduler__binding.SchedulerBinding[dart.implements] = () => [src__foundation__binding.BindingBase, src__services__binding.ServicesBinding];
  dart.setMethodSignature(src__scheduler__binding.SchedulerBinding, () => ({
    __proto__: dart.getMethods(src__scheduler__binding.SchedulerBinding.__proto__),
    handleAppLifecycleStateChanged: dart.fnType(dart.void, [ui$.AppLifecycleState]),
    [_handleLifecycleMessage]: dart.fnType(async.Future$(core.String), [core.String]),
    scheduleTask: dart.gFnType(T => [async.Future$(T), [dart.fnType(T, []), src__scheduler__priority.Priority], {debugLabel: core.String, flow: developer.Flow}]),
    [_ensureEventLoopCallback]: dart.fnType(dart.void, []),
    [_runTasks]: dart.fnType(dart.void, []),
    handleEventLoopCallback: dart.fnType(core.bool, []),
    scheduleFrameCallback: dart.fnType(core.int, [dart.fnType(dart.void, [core.Duration])], {rescheduling: core.bool}),
    cancelFrameCallbackWithId: dart.fnType(dart.void, [core.int]),
    debugAssertNoTransientCallbacks: dart.fnType(core.bool, [core.String]),
    addPersistentFrameCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration])]),
    addPostFrameCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration])]),
    [_setFramesEnabledState]: dart.fnType(dart.void, [core.bool]),
    ensureVisualUpdate: dart.fnType(dart.void, []),
    scheduleFrame: dart.fnType(dart.void, []),
    scheduleForcedFrame: dart.fnType(dart.void, []),
    scheduleWarmUpFrame: dart.fnType(dart.void, []),
    resetEpoch: dart.fnType(dart.void, []),
    [_adjustForEpoch]: dart.fnType(core.Duration, [core.Duration]),
    [_handleBeginFrame]: dart.fnType(dart.void, [core.Duration]),
    [_handleDrawFrame]: dart.fnType(dart.void, []),
    handleBeginFrame: dart.fnType(dart.void, [core.Duration]),
    handleDrawFrame: dart.fnType(dart.void, []),
    [_profileFramePostEvent]: dart.fnType(dart.void, []),
    [_invokeFrameCallback]: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration]), core.Duration], [core.StackTrace])
  }));
  dart.setGetterSignature(src__scheduler__binding.SchedulerBinding, () => ({
    __proto__: dart.getGetters(src__scheduler__binding.SchedulerBinding.__proto__),
    lifecycleState: ui$.AppLifecycleState,
    transientCallbackCount: core.int,
    endOfFrame: async.Future$(dart.void),
    hasScheduledFrame: core.bool,
    schedulerPhase: src__scheduler__binding.SchedulerPhase,
    framesEnabled: core.bool,
    currentFrameTimeStamp: core.Duration
  }));
  dart.setFieldSignature(src__scheduler__binding.SchedulerBinding, () => ({
    __proto__: dart.getFields(src__scheduler__binding.SchedulerBinding.__proto__),
    [_lifecycleState]: dart.fieldType(ui$.AppLifecycleState),
    schedulingStrategy: dart.fieldType(__Tobool()),
    [_taskQueue]: dart.finalFieldType(PriorityQueueOf_TaskEntry()),
    [_hasRequestedAnEventLoopCallback]: dart.fieldType(core.bool),
    [_nextFrameCallbackId]: dart.fieldType(core.int),
    [_transientCallbacks]: dart.fieldType(MapOfint$_FrameCallbackEntry()),
    [_removedIds]: dart.finalFieldType(SetOfint()),
    [_persistentCallbacks]: dart.finalFieldType(ListOfDurationTovoid()),
    [_postFrameCallbacks]: dart.finalFieldType(ListOfDurationTovoid()),
    [_nextFrameCompleter]: dart.fieldType(CompleterOfvoid()),
    [_hasScheduledFrame]: dart.fieldType(core.bool),
    [_schedulerPhase]: dart.fieldType(src__scheduler__binding.SchedulerPhase),
    [_framesEnabled]: dart.fieldType(core.bool),
    [_warmUpFrame]: dart.fieldType(core.bool),
    [_firstRawTimeStampInEpoch]: dart.fieldType(core.Duration),
    [_epochStart]: dart.fieldType(core.Duration),
    [_lastRawTimeStamp]: dart.fieldType(core.Duration),
    [_currentFrameTimeStamp]: dart.fieldType(core.Duration),
    [_profileFrameNumber]: dart.fieldType(core.int),
    [_profileFrameStopwatch]: dart.finalFieldType(core.Stopwatch),
    [_debugBanner]: dart.fieldType(core.String),
    [_ignoreNextEngineDrawFrame]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__scheduler__binding.SchedulerBinding, {
    /*src__scheduler__binding.SchedulerBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  src__scheduler__binding.defaultSchedulingStrategy = function(opts) {
    let priority = opts && 'priority' in opts ? opts.priority : null;
    let scheduler = opts && 'scheduler' in opts ? opts.scheduler : null;
    if (dart.notNull(scheduler.transientCallbackCount) > 0) return dart.notNull(priority) >= dart.notNull(src__scheduler__priority.Priority.animation.value);
    return true;
  };
  dart.trackLibraries("packages/flutter_web/src/scheduler/binding.ddc", {
    "package:flutter_web/src/scheduler/debug.dart": src__scheduler__debug,
    "package:flutter_web/src/scheduler/priority.dart": src__scheduler__priority,
    "package:flutter_web/src/scheduler/binding.dart": src__scheduler__binding
  }, '{"version":3,"sourceRoot":"","sources":["debug.dart","priority.dart","binding.dart"],"names":[],"mappings":"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","file":"binding.ddc.js"}');
  // Exports:
  return {
    src__scheduler__debug: src__scheduler__debug,
    src__scheduler__priority: src__scheduler__priority,
    src__scheduler__binding: src__scheduler__binding
  };
});

//# sourceMappingURL=binding.ddc.js.map
