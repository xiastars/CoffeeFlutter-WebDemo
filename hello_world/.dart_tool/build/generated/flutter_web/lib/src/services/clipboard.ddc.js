define(['dart_sdk', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web_ui/ui', 'packages/flutter_web/io'], function(dart_sdk, assertions, ui, io) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__foundation__serialization = assertions.src__foundation__serialization;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const ui$ = ui.ui;
  const io$ = io.io;
  const src__services__message_codecs = Object.create(dart.library);
  const src__services__message_codec = Object.create(dart.library);
  const src__services__platform_channel = Object.create(dart.library);
  const src__services__platform_messages = Object.create(dart.library);
  const src__services__system_channels = Object.create(dart.library);
  const src__services__clipboard = Object.create(dart.library);
  const src__services__haptic_feedback = Object.create(dart.library);
  const src__services__platform_views = Object.create(dart.library);
  const src__services__raw_keyboard_fuschia = Object.create(dart.library);
  const src__services__raw_keyboard_android = Object.create(dart.library);
  const src__services__raw_keyboard = Object.create(dart.library);
  const src__services__system_chrome = Object.create(dart.library);
  const src__services__system_navigator = Object.create(dart.library);
  const src__services__system_sound = Object.create(dart.library);
  const src__services__text_editing = Object.create(dart.library);
  const src__services__text_input = Object.create(dart.library);
  const src__services__text_formatter = Object.create(dart.library);
  const $asUint8List = dartx.asUint8List;
  const $buffer = dartx.buffer;
  const $asByteData = dartx.asByteData;
  const $length = dartx.length;
  const $forEach = dartx.forEach;
  const $lengthInBytes = dartx.lengthInBytes;
  const $runtimeType = dartx.runtimeType;
  const $cast = dartx.cast;
  const $toString = dartx.toString;
  const $_get = dartx._get;
  const $remove = dartx.remove;
  const $_set = dartx._set;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $contains = dartx.contains;
  const $substring = dartx.substring;
  const $hashCode = dartx.hashCode;
  const $replaceAll = dartx.replaceAll;
  const $runes = dartx.runes;
  const $join = dartx.join;
  const $allMatches = dartx.allMatches;
  let MessageCodecOfByteData = () => (MessageCodecOfByteData = dart.constFn(src__services__message_codec.MessageCodec$(typed_data.ByteData)))();
  let MessageCodecOfString = () => (MessageCodecOfString = dart.constFn(src__services__message_codec.MessageCodec$(core.String)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let FutureOfByteData = () => (FutureOfByteData = dart.constFn(async.Future$(typed_data.ByteData)))();
  let ByteDataToFutureOfByteData = () => (ByteDataToFutureOfByteData = dart.constFn(dart.fnType(FutureOfByteData(), [typed_data.ByteData])))();
  let FutureOrOfByteData = () => (FutureOrOfByteData = dart.constFn(async.FutureOr$(typed_data.ByteData)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let CompleterOfByteData = () => (CompleterOfByteData = dart.constFn(async.Completer$(typed_data.ByteData)))();
  let ByteDataToNull = () => (ByteDataToNull = dart.constFn(dart.fnType(core.Null, [typed_data.ByteData])))();
  let IdentityMapOfString$ByteDataToFutureOfByteData = () => (IdentityMapOfString$ByteDataToFutureOfByteData = dart.constFn(_js_helper.IdentityMap$(core.String, ByteDataToFutureOfByteData())))();
  let BasicMessageChannelOfString = () => (BasicMessageChannelOfString = dart.constFn(src__services__platform_channel.BasicMessageChannel$(core.String)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let AndroidPointerPropertiesToListOfint = () => (AndroidPointerPropertiesToListOfint = dart.constFn(dart.fnType(ListOfint(), [src__services__platform_views.AndroidPointerProperties])))();
  let IterableOfListOfint = () => (IterableOfListOfint = dart.constFn(core.Iterable$(ListOfint())))();
  let ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  let AndroidPointerCoordsToListOfdouble = () => (AndroidPointerCoordsToListOfdouble = dart.constFn(dart.fnType(ListOfdouble(), [src__services__platform_views.AndroidPointerCoords])))();
  let IterableOfListOfdouble = () => (IterableOfListOfdouble = dart.constFn(core.Iterable$(ListOfdouble())))();
  let ListOfAndroidPointerProperties = () => (ListOfAndroidPointerProperties = dart.constFn(core.List$(src__services__platform_views.AndroidPointerProperties)))();
  let ListOfAndroidPointerCoords = () => (ListOfAndroidPointerCoords = dart.constFn(core.List$(src__services__platform_views.AndroidPointerCoords)))();
  let intTovoid = () => (intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))();
  let intAndintAndintToKeyboardSide = () => (intAndintAndintToKeyboardSide = dart.constFn(dart.fnType(src__services__raw_keyboard.KeyboardSide, [core.int, core.int, core.int])))();
  let LinkedMapOfModifierKey$KeyboardSide = () => (LinkedMapOfModifierKey$KeyboardSide = dart.constFn(_js_helper.LinkedMap$(src__services__raw_keyboard.ModifierKey, src__services__raw_keyboard.KeyboardSide)))();
  let intAndintToKeyboardSide = () => (intAndintToKeyboardSide = dart.constFn(dart.fnType(src__services__raw_keyboard.KeyboardSide, [core.int, core.int])))();
  let ValueChangedOfRawKeyEvent = () => (ValueChangedOfRawKeyEvent = dart.constFn(dart.fnType(dart.void, [src__services__raw_keyboard.RawKeyEvent])))();
  let JSArrayOfValueChangedOfRawKeyEvent = () => (JSArrayOfValueChangedOfRawKeyEvent = dart.constFn(_interceptors.JSArray$(ValueChangedOfRawKeyEvent())))();
  let ListOfValueChangedOfRawKeyEvent = () => (ListOfValueChangedOfRawKeyEvent = dart.constFn(core.List$(ValueChangedOfRawKeyEvent())))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let TextEditingValueAndTextEditingValueToTextEditingValue = () => (TextEditingValueAndTextEditingValueToTextEditingValue = dart.constFn(dart.fnType(src__services__text_input.TextEditingValue, [src__services__text_input.TextEditingValue, src__services__text_input.TextEditingValue])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  src__services__message_codecs.BinaryCodec = class BinaryCodec extends core.Object {
    decodeMessage(message) {
      return message;
    }
    encodeMessage(message) {
      typed_data.ByteData._check(message);
      return message;
    }
  };
  (src__services__message_codecs.BinaryCodec.new = function() {
  }).prototype = src__services__message_codecs.BinaryCodec.prototype;
  dart.addTypeTests(src__services__message_codecs.BinaryCodec);
  src__services__message_codecs.BinaryCodec[dart.implements] = () => [MessageCodecOfByteData()];
  dart.setMethodSignature(src__services__message_codecs.BinaryCodec, () => ({
    __proto__: dart.getMethods(src__services__message_codecs.BinaryCodec.__proto__),
    decodeMessage: dart.fnType(typed_data.ByteData, [typed_data.ByteData]),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object])
  }));
  src__services__message_codecs.StringCodec = class StringCodec extends core.Object {
    decodeMessage(message) {
      if (message == null) return null;
      return convert.utf8.decoder.convert(message[$buffer][$asUint8List]());
    }
    encodeMessage(message) {
      core.String._check(message);
      if (message == null) return null;
      let encoded = typed_data.Uint8List._check(convert.utf8.encoder.convert(message));
      return encoded[$buffer][$asByteData]();
    }
  };
  (src__services__message_codecs.StringCodec.new = function() {
  }).prototype = src__services__message_codecs.StringCodec.prototype;
  dart.addTypeTests(src__services__message_codecs.StringCodec);
  src__services__message_codecs.StringCodec[dart.implements] = () => [MessageCodecOfString()];
  dart.setMethodSignature(src__services__message_codecs.StringCodec, () => ({
    __proto__: dart.getMethods(src__services__message_codecs.StringCodec.__proto__),
    decodeMessage: dart.fnType(core.String, [typed_data.ByteData]),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object])
  }));
  let const$;
  let const$0;
  src__services__message_codecs.JSONMessageCodec = class JSONMessageCodec extends core.Object {
    encodeMessage(message) {
      if (message == null) return null;
      return (const$ || (const$ = dart.const(new src__services__message_codecs.StringCodec.new()))).encodeMessage(convert.json.encode(message));
    }
    decodeMessage(message) {
      if (message == null) return message;
      return convert.json.decode((const$0 || (const$0 = dart.const(new src__services__message_codecs.StringCodec.new()))).decodeMessage(message));
    }
  };
  (src__services__message_codecs.JSONMessageCodec.new = function() {
  }).prototype = src__services__message_codecs.JSONMessageCodec.prototype;
  dart.addTypeTests(src__services__message_codecs.JSONMessageCodec);
  src__services__message_codecs.JSONMessageCodec[dart.implements] = () => [src__services__message_codec.MessageCodec];
  dart.setMethodSignature(src__services__message_codecs.JSONMessageCodec, () => ({
    __proto__: dart.getMethods(src__services__message_codecs.JSONMessageCodec.__proto__),
    encodeMessage: dart.fnType(typed_data.ByteData, [dart.dynamic]),
    decodeMessage: dart.fnType(dart.dynamic, [typed_data.ByteData])
  }));
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  src__services__message_codecs.JSONMethodCodec = class JSONMethodCodec extends core.Object {
    encodeMethodCall(call) {
      return (const$1 || (const$1 = dart.const(new src__services__message_codecs.JSONMessageCodec.new()))).encodeMessage(new (IdentityMapOfString$dynamic()).from(["method", call.method, "args", call.arguments]));
    }
    decodeMethodCall(methodCall) {
      let decoded = (const$2 || (const$2 = dart.const(new src__services__message_codecs.JSONMessageCodec.new()))).decodeMessage(methodCall);
      if (!core.Map.is(decoded)) dart.throw(new core.FormatException.new("Expected method call Map, got " + dart.str(decoded)));
      let method = dart.dindex(decoded, "method");
      let arguments$0 = dart.dindex(decoded, "args");
      if (typeof method == 'string') return new src__services__message_codec.MethodCall.new(method, arguments$0);
      dart.throw(new core.FormatException.new("Invalid method call: " + dart.str(decoded)));
    }
    decodeEnvelope(envelope) {
      let decoded = (const$3 || (const$3 = dart.const(new src__services__message_codecs.JSONMessageCodec.new()))).decodeMessage(envelope);
      if (!core.List.is(decoded)) dart.throw(new core.FormatException.new("Expected envelope List, got " + dart.str(decoded)));
      if (dart.equals(dart.dload(decoded, 'length'), 1)) return dart.dindex(decoded, 0);
      if (dart.equals(dart.dload(decoded, 'length'), 3) && typeof dart.dindex(decoded, 0) == 'string' && (dart.dindex(decoded, 1) == null || typeof dart.dindex(decoded, 1) == 'string')) dart.throw(new src__services__message_codec.PlatformException.new({code: core.String._check(dart.dindex(decoded, 0)), message: core.String._check(dart.dindex(decoded, 1)), details: dart.dindex(decoded, 2)}));
      dart.throw(new core.FormatException.new("Invalid envelope: " + dart.str(decoded)));
    }
    encodeSuccessEnvelope(result) {
      return (const$4 || (const$4 = dart.const(new src__services__message_codecs.JSONMessageCodec.new()))).encodeMessage([result]);
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      if (!(code != null)) dart.assertFailed();
      return (const$5 || (const$5 = dart.const(new src__services__message_codecs.JSONMessageCodec.new()))).encodeMessage([code, message, details]);
    }
  };
  (src__services__message_codecs.JSONMethodCodec.new = function() {
  }).prototype = src__services__message_codecs.JSONMethodCodec.prototype;
  dart.addTypeTests(src__services__message_codecs.JSONMethodCodec);
  src__services__message_codecs.JSONMethodCodec[dart.implements] = () => [src__services__message_codec.MethodCodec];
  dart.setMethodSignature(src__services__message_codecs.JSONMethodCodec, () => ({
    __proto__: dart.getMethods(src__services__message_codecs.JSONMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [src__services__message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(src__services__message_codec.MethodCall, [typed_data.ByteData]),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.dynamic]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {code: core.String, message: core.String, details: dart.dynamic})
  }));
  let const$6;
  let const$7;
  let const$8;
  src__services__message_codecs.StandardMessageCodec = class StandardMessageCodec extends core.Object {
    encodeMessage(message) {
      if (message == null) return null;
      let buffer = new src__foundation__serialization.WriteBuffer.new();
      this.writeValue(buffer, message);
      return buffer.done();
    }
    decodeMessage(message) {
      if (message == null) return null;
      let buffer = new src__foundation__serialization.ReadBuffer.new(message);
      let result = this.readValue(buffer);
      if (dart.test(buffer.hasRemaining)) dart.throw(const$6 || (const$6 = dart.const(new core.FormatException.new("Message corrupted"))));
      return result;
    }
    writeValue(buffer, value) {
      if (value == null) {
        buffer.putUint8(0);
      } else if (typeof value == 'boolean') {
        buffer.putUint8(dart.test(value) ? 1 : 2);
      } else if (typeof value == 'number') {
        buffer.putUint8(6);
        buffer.putFloat64(value);
      } else if (core.int.is(value)) {
        if (-2147483647 - 1 <= dart.notNull(value) && dart.notNull(value) <= 2147483647) {
          buffer.putUint8(3);
          buffer.putInt32(value);
        } else {
          buffer.putUint8(4);
          buffer.putInt64(value);
        }
      } else if (typeof value == 'string') {
        buffer.putUint8(7);
        let bytes = convert.utf8.encoder.convert(value);
        this.writeSize(buffer, bytes[$length]);
        buffer.putUint8List(typed_data.Uint8List._check(bytes));
      } else if (typed_data.Uint8List.is(value)) {
        buffer.putUint8(8);
        this.writeSize(buffer, value[$length]);
        buffer.putUint8List(value);
      } else if (typed_data.Int32List.is(value)) {
        buffer.putUint8(9);
        this.writeSize(buffer, value[$length]);
        buffer.putInt32List(value);
      } else if (typed_data.Int64List.is(value)) {
        buffer.putUint8(10);
        this.writeSize(buffer, value.length);
        buffer.putInt64List(value);
      } else if (typed_data.Float64List.is(value)) {
        buffer.putUint8(11);
        this.writeSize(buffer, value[$length]);
        buffer.putFloat64List(value);
      } else if (core.List.is(value)) {
        buffer.putUint8(12);
        this.writeSize(buffer, value[$length]);
        for (let item of value) {
          this.writeValue(buffer, item);
        }
      } else if (core.Map.is(value)) {
        buffer.putUint8(13);
        this.writeSize(buffer, value[$length]);
        value[$forEach](dart.fn((key, value) => {
          this.writeValue(buffer, key);
          this.writeValue(buffer, value);
        }, dynamicAnddynamicToNull()));
      } else {
        dart.throw(new core.ArgumentError.value(value));
      }
    }
    readValue(buffer) {
      if (!dart.test(buffer.hasRemaining)) dart.throw(const$7 || (const$7 = dart.const(new core.FormatException.new("Message corrupted"))));
      let type = buffer.getUint8();
      return this.readValueOfType(type, buffer);
    }
    readValueOfType(type, buffer) {
      let result = null;
      switch (type) {
        case 0:
        {
          result = null;
          break;
        }
        case 1:
        {
          result = true;
          break;
        }
        case 2:
        {
          result = false;
          break;
        }
        case 3:
        {
          result = buffer.getInt32();
          break;
        }
        case 4:
        {
          result = buffer.getInt64();
          break;
        }
        case 5:
        {
          let length = this.readSize(buffer);
          let hex = convert.utf8.decoder.convert(buffer.getUint8List(length));
          result = core.int.parse(hex, {radix: 16});
          break;
        }
        case 6:
        {
          result = buffer.getFloat64();
          break;
        }
        case 7:
        {
          let length = this.readSize(buffer);
          result = convert.utf8.decoder.convert(buffer.getUint8List(length));
          break;
        }
        case 8:
        {
          let length = this.readSize(buffer);
          result = buffer.getUint8List(length);
          break;
        }
        case 9:
        {
          let length = this.readSize(buffer);
          result = buffer.getInt32List(length);
          break;
        }
        case 10:
        {
          let length = this.readSize(buffer);
          result = buffer.getInt64List(length);
          break;
        }
        case 11:
        {
          let length = this.readSize(buffer);
          result = buffer.getFloat64List(length);
          break;
        }
        case 12:
        {
          let length = this.readSize(buffer);
          result = core.List.new(length);
          for (let i = 0; i < dart.notNull(length); i++) {
            dart.dsetindex(result, i, this.readValue(buffer));
          }
          break;
        }
        case 13:
        {
          let length = this.readSize(buffer);
          result = new _js_helper.LinkedMap.new();
          for (let i = 0; i < dart.notNull(length); i++) {
            dart.dsetindex(result, this.readValue(buffer), this.readValue(buffer));
          }
          break;
        }
        default:
        {
          dart.throw(const$8 || (const$8 = dart.const(new core.FormatException.new("Message corrupted"))));
        }
      }
      return result;
    }
    writeSize(buffer, value) {
      if (!(0 <= dart.notNull(value) && dart.notNull(value) <= 4294967295)) dart.assertFailed();
      if (dart.notNull(value) < 254) {
        buffer.putUint8(value);
      } else if (dart.notNull(value) <= 65535) {
        buffer.putUint8(254);
        buffer.putUint16(value);
      } else {
        buffer.putUint8(255);
        buffer.putUint32(value);
      }
    }
    readSize(buffer) {
      let value = buffer.getUint8();
      switch (value) {
        case 254:
        {
          return buffer.getUint16();
        }
        case 255:
        {
          return buffer.getUint32();
        }
        default:
        {
          return value;
        }
      }
    }
  };
  (src__services__message_codecs.StandardMessageCodec.new = function() {
  }).prototype = src__services__message_codecs.StandardMessageCodec.prototype;
  dart.addTypeTests(src__services__message_codecs.StandardMessageCodec);
  src__services__message_codecs.StandardMessageCodec[dart.implements] = () => [src__services__message_codec.MessageCodec];
  dart.setMethodSignature(src__services__message_codecs.StandardMessageCodec, () => ({
    __proto__: dart.getMethods(src__services__message_codecs.StandardMessageCodec.__proto__),
    encodeMessage: dart.fnType(typed_data.ByteData, [dart.dynamic]),
    decodeMessage: dart.fnType(dart.dynamic, [typed_data.ByteData]),
    writeValue: dart.fnType(dart.void, [src__foundation__serialization.WriteBuffer, dart.dynamic]),
    readValue: dart.fnType(dart.dynamic, [src__foundation__serialization.ReadBuffer]),
    readValueOfType: dart.fnType(dart.dynamic, [core.int, src__foundation__serialization.ReadBuffer]),
    writeSize: dart.fnType(dart.void, [src__foundation__serialization.WriteBuffer, core.int]),
    readSize: dart.fnType(core.int, [src__foundation__serialization.ReadBuffer])
  }));
  dart.defineLazy(src__services__message_codecs.StandardMessageCodec, {
    /*src__services__message_codecs.StandardMessageCodec._valueNull*/get _valueNull() {
      return 0;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueTrue*/get _valueTrue() {
      return 1;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueFalse*/get _valueFalse() {
      return 2;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueInt32*/get _valueInt32() {
      return 3;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueInt64*/get _valueInt64() {
      return 4;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueLargeInt*/get _valueLargeInt() {
      return 5;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueFloat64*/get _valueFloat64() {
      return 6;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueString*/get _valueString() {
      return 7;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueUint8List*/get _valueUint8List() {
      return 8;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueInt32List*/get _valueInt32List() {
      return 9;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueInt64List*/get _valueInt64List() {
      return 10;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueFloat64List*/get _valueFloat64List() {
      return 11;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueList*/get _valueList() {
      return 12;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueMap*/get _valueMap() {
      return 13;
    }
  });
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  src__services__message_codecs.StandardMethodCodec = class StandardMethodCodec extends core.Object {
    get messageCodec() {
      return this[messageCodec$];
    }
    set messageCodec(value) {
      super.messageCodec = value;
    }
    encodeMethodCall(call) {
      let buffer = new src__foundation__serialization.WriteBuffer.new();
      this.messageCodec.writeValue(buffer, call.method);
      this.messageCodec.writeValue(buffer, call.arguments);
      return buffer.done();
    }
    decodeMethodCall(methodCall) {
      let buffer = new src__foundation__serialization.ReadBuffer.new(methodCall);
      let method = this.messageCodec.readValue(buffer);
      let arguments$0 = this.messageCodec.readValue(buffer);
      if (typeof method == 'string' && !dart.test(buffer.hasRemaining))
        return new src__services__message_codec.MethodCall.new(method, arguments$0);
      else
        dart.throw(const$10 || (const$10 = dart.const(new core.FormatException.new("Invalid method call"))));
    }
    encodeSuccessEnvelope(result) {
      let buffer = new src__foundation__serialization.WriteBuffer.new();
      buffer.putUint8(0);
      this.messageCodec.writeValue(buffer, result);
      return buffer.done();
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      let buffer = new src__foundation__serialization.WriteBuffer.new();
      buffer.putUint8(1);
      this.messageCodec.writeValue(buffer, code);
      this.messageCodec.writeValue(buffer, message);
      this.messageCodec.writeValue(buffer, details);
      return buffer.done();
    }
    decodeEnvelope(envelope) {
      if (envelope[$lengthInBytes] === 0) dart.throw(const$11 || (const$11 = dart.const(new core.FormatException.new("Expected envelope, got nothing"))));
      let buffer = new src__foundation__serialization.ReadBuffer.new(envelope);
      if (buffer.getUint8() === 0) return this.messageCodec.readValue(buffer);
      let errorCode = this.messageCodec.readValue(buffer);
      let errorMessage = this.messageCodec.readValue(buffer);
      let errorDetails = this.messageCodec.readValue(buffer);
      if (typeof errorCode == 'string' && (errorMessage == null || typeof errorMessage == 'string') && !dart.test(buffer.hasRemaining))
        dart.throw(new src__services__message_codec.PlatformException.new({code: errorCode, message: core.String._check(errorMessage), details: errorDetails}));
      else
        dart.throw(const$12 || (const$12 = dart.const(new core.FormatException.new("Invalid envelope"))));
    }
  };
  (src__services__message_codecs.StandardMethodCodec.new = function(messageCodec) {
    if (messageCodec === void 0) messageCodec = const$9 || (const$9 = dart.const(new src__services__message_codecs.StandardMessageCodec.new()));
    this[messageCodec$] = messageCodec;
  }).prototype = src__services__message_codecs.StandardMethodCodec.prototype;
  dart.addTypeTests(src__services__message_codecs.StandardMethodCodec);
  const messageCodec$ = Symbol("StandardMethodCodec.messageCodec");
  src__services__message_codecs.StandardMethodCodec[dart.implements] = () => [src__services__message_codec.MethodCodec];
  dart.setMethodSignature(src__services__message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getMethods(src__services__message_codecs.StandardMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [src__services__message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(src__services__message_codec.MethodCall, [typed_data.ByteData]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.dynamic]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {code: core.String, message: core.String, details: dart.dynamic}),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData])
  }));
  dart.setFieldSignature(src__services__message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getFields(src__services__message_codecs.StandardMethodCodec.__proto__),
    messageCodec: dart.finalFieldType(src__services__message_codecs.StandardMessageCodec)
  }));
  const _is_MessageCodec_default = Symbol('_is_MessageCodec_default');
  src__services__message_codec.MessageCodec$ = dart.generic(T => {
    class MessageCodec extends core.Object {}
    (MessageCodec.new = function() {
    }).prototype = MessageCodec.prototype;
    dart.addTypeTests(MessageCodec);
    MessageCodec.prototype[_is_MessageCodec_default] = true;
    return MessageCodec;
  });
  src__services__message_codec.MessageCodec = src__services__message_codec.MessageCodec$();
  dart.addTypeTests(src__services__message_codec.MessageCodec, _is_MessageCodec_default);
  src__services__message_codec.MethodCall = class MethodCall extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get arguments() {
      return this[arguments$];
    }
    set arguments(value) {
      super.arguments = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.method) + ", " + dart.str(this.arguments) + ")";
    }
  };
  (src__services__message_codec.MethodCall.new = function(method, arguments$0) {
    if (arguments$0 === void 0) arguments$0 = null;
    this[method$] = method;
    this[arguments$] = arguments$0;
    if (!(method != null)) dart.assertFailed();
  }).prototype = src__services__message_codec.MethodCall.prototype;
  dart.addTypeTests(src__services__message_codec.MethodCall);
  const method$ = Symbol("MethodCall.method");
  const arguments$ = Symbol("MethodCall.arguments");
  dart.setFieldSignature(src__services__message_codec.MethodCall, () => ({
    __proto__: dart.getFields(src__services__message_codec.MethodCall.__proto__),
    method: dart.finalFieldType(core.String),
    arguments: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(src__services__message_codec.MethodCall, ['toString']);
  src__services__message_codec.MethodCodec = class MethodCodec extends core.Object {};
  (src__services__message_codec.MethodCodec.new = function() {
  }).prototype = src__services__message_codec.MethodCodec.prototype;
  dart.addTypeTests(src__services__message_codec.MethodCodec);
  src__services__message_codec.PlatformException = class PlatformException extends core.Object {
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get details() {
      return this[details$];
    }
    set details(value) {
      super.details = value;
    }
    toString() {
      return "PlatformException(" + dart.str(this.code) + ", " + dart.str(this.message) + ", " + dart.str(this.details) + ")";
    }
  };
  (src__services__message_codec.PlatformException.new = function(opts) {
    let code = opts && 'code' in opts ? opts.code : null;
    let message = opts && 'message' in opts ? opts.message : null;
    let details = opts && 'details' in opts ? opts.details : null;
    this[code$] = code;
    this[message$] = message;
    this[details$] = details;
    if (!(code != null)) dart.assertFailed();
  }).prototype = src__services__message_codec.PlatformException.prototype;
  dart.addTypeTests(src__services__message_codec.PlatformException);
  const code$ = Symbol("PlatformException.code");
  const message$ = Symbol("PlatformException.message");
  const details$ = Symbol("PlatformException.details");
  src__services__message_codec.PlatformException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(src__services__message_codec.PlatformException, () => ({
    __proto__: dart.getFields(src__services__message_codec.PlatformException.__proto__),
    code: dart.finalFieldType(core.String),
    message: dart.finalFieldType(core.String),
    details: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(src__services__message_codec.PlatformException, ['toString']);
  src__services__message_codec.MissingPluginException = class MissingPluginException extends core.Object {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "MissingPluginException(" + dart.str(this.message) + ")";
    }
  };
  (src__services__message_codec.MissingPluginException.new = function(message) {
    if (message === void 0) message = null;
    this[message$0] = message;
  }).prototype = src__services__message_codec.MissingPluginException.prototype;
  dart.addTypeTests(src__services__message_codec.MissingPluginException);
  const message$0 = Symbol("MissingPluginException.message");
  src__services__message_codec.MissingPluginException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(src__services__message_codec.MissingPluginException, () => ({
    __proto__: dart.getFields(src__services__message_codec.MissingPluginException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__services__message_codec.MissingPluginException, ['toString']);
  const _is_BasicMessageChannel_default = Symbol('_is_BasicMessageChannel_default');
  src__services__platform_channel.BasicMessageChannel$ = dart.generic(T => {
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let TToFutureOfT = () => (TToFutureOfT = dart.constFn(dart.fnType(FutureOfT(), [T])))();
    let MessageCodecOfT = () => (MessageCodecOfT = dart.constFn(src__services__message_codec.MessageCodec$(T)))();
    class BasicMessageChannel extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get codec() {
        return this[codec$];
      }
      set codec(value) {
        super.codec = value;
      }
      send(message) {
        T._check(message);
        return async.async(T, (function* send() {
          return this.codec.decodeMessage(yield src__services__platform_messages.BinaryMessages.send(this.name, this.codec.encodeMessage(message)));
        }).bind(this));
      }
      setMessageHandler(handler) {
        TToFutureOfT()._check(handler);
        if (handler == null) {
          src__services__platform_messages.BinaryMessages.setMessageHandler(this.name, null);
        } else {
          src__services__platform_messages.BinaryMessages.setMessageHandler(this.name, dart.fn(message => async.async(typed_data.ByteData, (function*() {
            return this.codec.encodeMessage(yield handler(this.codec.decodeMessage(message)));
          }).bind(this)), ByteDataToFutureOfByteData()));
        }
      }
      setMockMessageHandler(handler) {
        TToFutureOfT()._check(handler);
        if (handler == null) {
          src__services__platform_messages.BinaryMessages.setMockMessageHandler(this.name, null);
        } else {
          src__services__platform_messages.BinaryMessages.setMockMessageHandler(this.name, dart.fn(message => async.async(typed_data.ByteData, (function*() {
            return this.codec.encodeMessage(yield handler(this.codec.decodeMessage(message)));
          }).bind(this)), ByteDataToFutureOfByteData()));
        }
      }
    }
    (BasicMessageChannel.new = function(name, codec) {
      this[name$] = name;
      this[codec$] = codec;
    }).prototype = BasicMessageChannel.prototype;
    dart.addTypeTests(BasicMessageChannel);
    BasicMessageChannel.prototype[_is_BasicMessageChannel_default] = true;
    const name$ = Symbol("BasicMessageChannel.name");
    const codec$ = Symbol("BasicMessageChannel.codec");
    dart.setMethodSignature(BasicMessageChannel, () => ({
      __proto__: dart.getMethods(BasicMessageChannel.__proto__),
      send: dart.fnType(async.Future$(T), [core.Object]),
      setMessageHandler: dart.fnType(dart.void, [core.Object]),
      setMockMessageHandler: dart.fnType(dart.void, [core.Object])
    }));
    dart.setFieldSignature(BasicMessageChannel, () => ({
      __proto__: dart.getFields(BasicMessageChannel.__proto__),
      name: dart.finalFieldType(core.String),
      codec: dart.finalFieldType(MessageCodecOfT())
    }));
    return BasicMessageChannel;
  });
  src__services__platform_channel.BasicMessageChannel = src__services__platform_channel.BasicMessageChannel$();
  dart.addTypeTests(src__services__platform_channel.BasicMessageChannel, _is_BasicMessageChannel_default);
  let const$13;
  const _handleAsMethodCall = dart.privateName(src__services__platform_channel, "_handleAsMethodCall");
  src__services__platform_channel.MethodChannel = class MethodChannel extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$];
    }
    set codec(value) {
      super.codec = value;
    }
    invokeMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(T, (function* invokeMethod() {
        if (!(method != null)) dart.assertFailed();
        let result = (yield src__services__platform_messages.BinaryMessages.send(this.name, this.codec.encodeMethodCall(new src__services__message_codec.MethodCall.new(method, arguments$0))));
        if (result == null) {
          dart.throw(new src__services__message_codec.MissingPluginException.new("No implementation found for method " + dart.str(method) + " on channel " + dart.str(this.name)));
        }
        let typedResult = T._check(this.codec.decodeEnvelope(result));
        return typedResult;
      }).bind(this));
    }
    invokeListMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.List$(T), (function* invokeListMethod() {
        let result = (yield this.invokeMethod(core.List, method, arguments$0));
        return core.List$(T)._check(result[$cast](T));
      }).bind(this));
    }
    invokeMapMethod(K, V, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.Map$(K, V), (function* invokeMapMethod() {
        let result = (yield this.invokeMethod(core.Map, method, arguments$0));
        return core.Map$(K, V)._check(result[$cast](K, V));
      }).bind(this));
    }
    setMethodCallHandler(handler) {
      src__services__platform_messages.BinaryMessages.setMessageHandler(this.name, handler == null ? null : dart.fn(message => this[_handleAsMethodCall](message, handler), ByteDataToFutureOfByteData()));
    }
    setMockMethodCallHandler(handler) {
      src__services__platform_messages.BinaryMessages.setMockMessageHandler(this.name, handler == null ? null : dart.fn(message => this[_handleAsMethodCall](message, handler), ByteDataToFutureOfByteData()));
    }
    [_handleAsMethodCall](message, handler) {
      return async.async(typed_data.ByteData, (function* _handleAsMethodCall() {
        let call = this.codec.decodeMethodCall(message);
        try {
          return this.codec.encodeSuccessEnvelope(yield handler(call));
        } catch (e$) {
          let ex = dart.getThrown(e$);
          if (src__services__message_codec.PlatformException.is(ex)) {
            let e = ex;
            return this.codec.encodeErrorEnvelope({code: e.code, message: e.message, details: e.details});
          } else if (src__services__message_codec.MissingPluginException.is(ex)) {
            return null;
          } else {
            let e = ex;
            return this.codec.encodeErrorEnvelope({code: "error", message: dart.toString(e), details: null});
          }
        }
      }).bind(this));
    }
  };
  (src__services__platform_channel.MethodChannel.new = function(name, codec) {
    if (codec === void 0) codec = const$13 || (const$13 = dart.const(new src__services__message_codecs.StandardMethodCodec.new()));
    this[name$] = name;
    this[codec$] = codec;
  }).prototype = src__services__platform_channel.MethodChannel.prototype;
  dart.addTypeTests(src__services__platform_channel.MethodChannel);
  const name$ = Symbol("MethodChannel.name");
  const codec$ = Symbol("MethodChannel.codec");
  dart.setMethodSignature(src__services__platform_channel.MethodChannel, () => ({
    __proto__: dart.getMethods(src__services__platform_channel.MethodChannel.__proto__),
    invokeMethod: dart.gFnType(T => [async.Future$(T), [core.String], [dart.dynamic]]),
    invokeListMethod: dart.gFnType(T => [async.Future$(core.List$(T)), [core.String], [dart.dynamic]]),
    invokeMapMethod: dart.gFnType((K, V) => [async.Future$(core.Map$(K, V)), [core.String], [dart.dynamic]]),
    setMethodCallHandler: dart.fnType(dart.void, [dart.fnType(async.Future, [src__services__message_codec.MethodCall])]),
    setMockMethodCallHandler: dart.fnType(dart.void, [dart.fnType(async.Future, [src__services__message_codec.MethodCall])]),
    [_handleAsMethodCall]: dart.fnType(async.Future$(typed_data.ByteData), [typed_data.ByteData, dart.fnType(async.Future, [src__services__message_codec.MethodCall])])
  }));
  dart.setFieldSignature(src__services__platform_channel.MethodChannel, () => ({
    __proto__: dart.getFields(src__services__platform_channel.MethodChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(src__services__message_codec.MethodCodec)
  }));
  let const$14;
  const invokeMethod = Symbol("invokeMethod");
  src__services__platform_channel.OptionalMethodChannel = class OptionalMethodChannel extends src__services__platform_channel.MethodChannel {
    invokeMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(T, (function* invokeMethod$() {
        try {
          let result = (yield this[invokeMethod](T, method, arguments$0));
          return result;
        } catch (e) {
          let ex = dart.getThrown(e);
          if (src__services__message_codec.MissingPluginException.is(ex)) {
            return null;
          } else
            throw e;
        }
      }).bind(this));
    }
    invokeListMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.List$(T), (function* invokeListMethod() {
        let result = (yield this.invokeMethod(core.List, method, arguments$0));
        return core.List$(T)._check(result[$cast](T));
      }).bind(this));
    }
    invokeMapMethod(K, V, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.Map$(K, V), (function* invokeMapMethod() {
        let result = (yield this.invokeMethod(core.Map, method, arguments$0));
        return core.Map$(K, V)._check(result[$cast](K, V));
      }).bind(this));
    }
    [invokeMethod](T, method, arguments$0) {
      return super.invokeMethod(T, method, arguments$0);
    }
  };
  (src__services__platform_channel.OptionalMethodChannel.new = function(name, codec) {
    if (codec === void 0) codec = const$14 || (const$14 = dart.const(new src__services__message_codecs.StandardMethodCodec.new()));
    src__services__platform_channel.OptionalMethodChannel.__proto__.new.call(this, name, codec);
  }).prototype = src__services__platform_channel.OptionalMethodChannel.prototype;
  dart.addTypeTests(src__services__platform_channel.OptionalMethodChannel);
  let const$15;
  src__services__platform_channel.EventChannel = class EventChannel extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$0];
    }
    set codec(value) {
      super.codec = value;
    }
    receiveBroadcastStream(arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      let methodChannel = new src__services__platform_channel.MethodChannel.new(this.name, this.codec);
      let controller = null;
      controller = async.StreamController.broadcast({onListen: dart.fn(() => async.async(core.Null, (function*() {
          src__services__platform_messages.BinaryMessages.setMessageHandler(this.name, dart.fn(reply => async.async(typed_data.ByteData, (function*() {
            if (reply == null) {
              controller.close();
            } else {
              try {
                controller.add(this.codec.decodeEnvelope(reply));
              } catch (e$) {
                let e = dart.getThrown(e$);
                if (src__services__message_codec.PlatformException.is(e)) {
                  controller.addError(e);
                } else
                  throw e$;
              }
            }
            return FutureOrOfByteData()._check(async.Future.value(null));
          }).bind(this)), ByteDataToFutureOfByteData()));
          try {
            yield methodChannel.invokeMethod(dart.dynamic, "listen", arguments$0);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: "while activating platform stream on channel " + dart.str(this.name)}));
          }
        }).bind(this)), VoidToFutureOfNull()), onCancel: dart.fn(() => async.async(core.Null, (function*() {
          src__services__platform_messages.BinaryMessages.setMessageHandler(this.name, null);
          try {
            yield methodChannel.invokeMethod(dart.dynamic, "cancel", arguments$0);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: "while de-activating platform stream on channel " + dart.str(this.name)}));
          }
        }).bind(this)), VoidToFutureOfNull())});
      return controller.stream;
    }
  };
  (src__services__platform_channel.EventChannel.new = function(name, codec) {
    if (codec === void 0) codec = const$15 || (const$15 = dart.const(new src__services__message_codecs.StandardMethodCodec.new()));
    this[name$0] = name;
    this[codec$0] = codec;
  }).prototype = src__services__platform_channel.EventChannel.prototype;
  dart.addTypeTests(src__services__platform_channel.EventChannel);
  const name$0 = Symbol("EventChannel.name");
  const codec$0 = Symbol("EventChannel.codec");
  dart.setMethodSignature(src__services__platform_channel.EventChannel, () => ({
    __proto__: dart.getMethods(src__services__platform_channel.EventChannel.__proto__),
    receiveBroadcastStream: dart.fnType(async.Stream, [], [dart.dynamic])
  }));
  dart.setFieldSignature(src__services__platform_channel.EventChannel, () => ({
    __proto__: dart.getFields(src__services__platform_channel.EventChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(src__services__message_codec.MethodCodec)
  }));
  src__services__platform_messages.BinaryMessages = class BinaryMessages extends core.Object {
    static _sendPlatformMessage(channel, message) {
      let completer = CompleterOfByteData().new();
      ui$.window.sendPlatformMessage(channel, message, dart.fn(reply => {
        try {
          completer.complete(reply);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: "during a platform message response callback"}));
        }
      }, ByteDataToNull()));
      return completer.future;
    }
    static handlePlatformMessage(channel, data, callback) {
      return async.async(dart.void, function* handlePlatformMessage() {
        let response = null;
        try {
          let handler = src__services__platform_messages.BinaryMessages._handlers[$_get](channel);
          if (handler != null) {
            response = (yield handler(data));
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: "during a platform message callback"}));
        } finally {
          callback(response);
        }
      });
    }
    static send(channel, message) {
      let handler = src__services__platform_messages.BinaryMessages._mockHandlers[$_get](channel);
      if (handler != null) return handler(message);
      return src__services__platform_messages.BinaryMessages._sendPlatformMessage(channel, message);
    }
    static setMessageHandler(channel, handler) {
      if (handler == null)
        src__services__platform_messages.BinaryMessages._handlers[$remove](channel);
      else
        src__services__platform_messages.BinaryMessages._handlers[$_set](channel, handler);
    }
    static setMockMessageHandler(channel, handler) {
      if (handler == null)
        src__services__platform_messages.BinaryMessages._mockHandlers[$remove](channel);
      else
        src__services__platform_messages.BinaryMessages._mockHandlers[$_set](channel, handler);
    }
  };
  (src__services__platform_messages.BinaryMessages.__ = function() {
  }).prototype = src__services__platform_messages.BinaryMessages.prototype;
  dart.addTypeTests(src__services__platform_messages.BinaryMessages);
  dart.defineLazy(src__services__platform_messages.BinaryMessages, {
    /*src__services__platform_messages.BinaryMessages._handlers*/get _handlers() {
      return new (IdentityMapOfString$ByteDataToFutureOfByteData()).new();
    },
    /*src__services__platform_messages.BinaryMessages._mockHandlers*/get _mockHandlers() {
      return new (IdentityMapOfString$ByteDataToFutureOfByteData()).new();
    }
  });
  src__services__system_channels.SystemChannels = class SystemChannels extends core.Object {};
  (src__services__system_channels.SystemChannels.__ = function() {
  }).prototype = src__services__system_channels.SystemChannels.prototype;
  dart.addTypeTests(src__services__system_channels.SystemChannels);
  dart.defineLazy(src__services__system_channels.SystemChannels, {
    /*src__services__system_channels.SystemChannels.navigation*/get navigation() {
      return dart.const(new src__services__platform_channel.MethodChannel.new("flutter/navigation", dart.const(new src__services__message_codecs.JSONMethodCodec.new())));
    },
    /*src__services__system_channels.SystemChannels.platform*/get platform() {
      return dart.const(new src__services__platform_channel.OptionalMethodChannel.new("flutter/platform", dart.const(new src__services__message_codecs.JSONMethodCodec.new())));
    },
    /*src__services__system_channels.SystemChannels.textInput*/get textInput() {
      return dart.const(new src__services__platform_channel.OptionalMethodChannel.new("flutter/textinput", dart.const(new src__services__message_codecs.JSONMethodCodec.new())));
    },
    /*src__services__system_channels.SystemChannels.keyEvent*/get keyEvent() {
      return dart.const(new src__services__platform_channel.BasicMessageChannel.new("flutter/keyevent", dart.const(new src__services__message_codecs.JSONMessageCodec.new())));
    },
    /*src__services__system_channels.SystemChannels.lifecycle*/get lifecycle() {
      return dart.const(new (BasicMessageChannelOfString()).new("flutter/lifecycle", dart.const(new src__services__message_codecs.StringCodec.new())));
    },
    /*src__services__system_channels.SystemChannels.system*/get system() {
      return dart.const(new src__services__platform_channel.BasicMessageChannel.new("flutter/system", dart.const(new src__services__message_codecs.JSONMessageCodec.new())));
    },
    /*src__services__system_channels.SystemChannels.accessibility*/get accessibility() {
      return dart.const(new src__services__platform_channel.BasicMessageChannel.new("flutter/accessibility", dart.const(new src__services__message_codecs.StandardMessageCodec.new())));
    },
    /*src__services__system_channels.SystemChannels.platform_views*/get platform_views() {
      return dart.const(new src__services__platform_channel.MethodChannel.new("flutter/platform_views", dart.const(new src__services__message_codecs.StandardMethodCodec.new())));
    }
  });
  src__services__clipboard.ClipboardData = class ClipboardData extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
  };
  (src__services__clipboard.ClipboardData.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    this[text$] = text;
  }).prototype = src__services__clipboard.ClipboardData.prototype;
  dart.addTypeTests(src__services__clipboard.ClipboardData);
  const text$ = Symbol("ClipboardData.text");
  dart.setFieldSignature(src__services__clipboard.ClipboardData, () => ({
    __proto__: dart.getFields(src__services__clipboard.ClipboardData.__proto__),
    text: dart.finalFieldType(core.String)
  }));
  src__services__clipboard.Clipboard = class Clipboard extends core.Object {
    static setData(data) {
      return async.async(dart.void, function* setData() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "Clipboard.setData", new (IdentityMapOfString$dynamic()).from(["text", data.text]));
      });
    }
    static getData(format) {
      return async.async(src__services__clipboard.ClipboardData, function* getData() {
        let result = (yield src__services__system_channels.SystemChannels.platform.invokeMethod(MapOfString$dynamic(), "Clipboard.getData", format));
        if (result == null) return null;
        return new src__services__clipboard.ClipboardData.new({text: core.String._check(result[$_get]("text"))});
      });
    }
  };
  (src__services__clipboard.Clipboard.__ = function() {
  }).prototype = src__services__clipboard.Clipboard.prototype;
  dart.addTypeTests(src__services__clipboard.Clipboard);
  dart.defineLazy(src__services__clipboard.Clipboard, {
    /*src__services__clipboard.Clipboard.kTextPlain*/get kTextPlain() {
      return "text/plain";
    }
  });
  src__services__haptic_feedback.HapticFeedback = class HapticFeedback extends core.Object {
    static vibrate() {
      return async.async(dart.void, function* vibrate() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "HapticFeedback.vibrate");
      });
    }
    static lightImpact() {
      return async.async(dart.void, function* lightImpact() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "HapticFeedback.vibrate", "HapticFeedbackType.lightImpact");
      });
    }
    static mediumImpact() {
      return async.async(dart.void, function* mediumImpact() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "HapticFeedback.vibrate", "HapticFeedbackType.mediumImpact");
      });
    }
    static heavyImpact() {
      return async.async(dart.void, function* heavyImpact() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "HapticFeedback.vibrate", "HapticFeedbackType.heavyImpact");
      });
    }
    static selectionClick() {
      return async.async(dart.void, function* selectionClick() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "HapticFeedback.vibrate", "HapticFeedbackType.selectionClick");
      });
    }
  };
  (src__services__haptic_feedback.HapticFeedback.__ = function() {
  }).prototype = src__services__haptic_feedback.HapticFeedback.prototype;
  dart.addTypeTests(src__services__haptic_feedback.HapticFeedback);
  dart.defineLazy(src__services__platform_views, {
    /*src__services__platform_views.platformViewsRegistry*/get platformViewsRegistry() {
      return new src__services__platform_views.PlatformViewsRegistry._instance();
    }
  });
  const _nextPlatformViewId = dart.privateName(src__services__platform_views, "_nextPlatformViewId");
  src__services__platform_views.PlatformViewsRegistry = class PlatformViewsRegistry extends core.Object {
    getNextPlatformViewId() {
      let x = this[_nextPlatformViewId];
      this[_nextPlatformViewId] = dart.notNull(x) + 1;
      return x;
    }
  };
  (src__services__platform_views.PlatformViewsRegistry._instance = function() {
    this[_nextPlatformViewId] = 0;
  }).prototype = src__services__platform_views.PlatformViewsRegistry.prototype;
  dart.addTypeTests(src__services__platform_views.PlatformViewsRegistry);
  dart.setMethodSignature(src__services__platform_views.PlatformViewsRegistry, () => ({
    __proto__: dart.getMethods(src__services__platform_views.PlatformViewsRegistry.__proto__),
    getNextPlatformViewId: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(src__services__platform_views.PlatformViewsRegistry, () => ({
    __proto__: dart.getFields(src__services__platform_views.PlatformViewsRegistry.__proto__),
    [_nextPlatformViewId]: dart.fieldType(core.int)
  }));
  src__services__platform_views.PlatformViewsService = class PlatformViewsService extends core.Object {
    static initAndroidView(opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
      let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
      let onPlatformViewCreated = opts && 'onPlatformViewCreated' in opts ? opts.onPlatformViewCreated : null;
      if (!(id != null)) dart.assertFailed();
      if (!(viewType != null)) dart.assertFailed();
      if (!(layoutDirection != null)) dart.assertFailed();
      if (!(creationParams == null || creationParamsCodec != null)) dart.assertFailed();
      return new src__services__platform_views.AndroidViewController.__(id, viewType, creationParams, creationParamsCodec, layoutDirection, onPlatformViewCreated);
    }
    static initUiKitView(opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
      let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
      return async.async(src__services__platform_views.UiKitViewController, function* initUiKitView() {
        if (!(id != null)) dart.assertFailed();
        if (!(viewType != null)) dart.assertFailed();
        if (!(layoutDirection != null)) dart.assertFailed();
        if (!(creationParams == null || creationParamsCodec != null)) dart.assertFailed();
        let args = new (IdentityMapOfString$dynamic()).from(["id", id, "viewType", viewType]);
        if (creationParams != null) {
          let paramsByteData = creationParamsCodec.encodeMessage(creationParams);
          args[$_set]("params", typed_data.Uint8List.view(paramsByteData[$buffer], 0, paramsByteData[$lengthInBytes]));
        }
        yield src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "create", args);
        return new src__services__platform_views.UiKitViewController.__(id, layoutDirection);
      });
    }
  };
  (src__services__platform_views.PlatformViewsService.__ = function() {
  }).prototype = src__services__platform_views.PlatformViewsService.prototype;
  dart.addTypeTests(src__services__platform_views.PlatformViewsService);
  const _asList = dart.privateName(src__services__platform_views, "_asList");
  src__services__platform_views.AndroidPointerProperties = class AndroidPointerProperties extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get toolType() {
      return this[toolType$];
    }
    set toolType(value) {
      super.toolType = value;
    }
    [_asList]() {
      return JSArrayOfint().of([this.id, this.toolType]);
    }
    toString() {
      return "AndroidPointerProperties(id: " + dart.str(this.id) + ", toolType: " + dart.str(this.toolType) + ")";
    }
  };
  (src__services__platform_views.AndroidPointerProperties.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let toolType = opts && 'toolType' in opts ? opts.toolType : null;
    this[id$] = id;
    this[toolType$] = toolType;
    if (!(id != null)) dart.assertFailed();
    if (!(toolType != null)) dart.assertFailed();
  }).prototype = src__services__platform_views.AndroidPointerProperties.prototype;
  dart.addTypeTests(src__services__platform_views.AndroidPointerProperties);
  const id$ = Symbol("AndroidPointerProperties.id");
  const toolType$ = Symbol("AndroidPointerProperties.toolType");
  dart.setMethodSignature(src__services__platform_views.AndroidPointerProperties, () => ({
    __proto__: dart.getMethods(src__services__platform_views.AndroidPointerProperties.__proto__),
    [_asList]: dart.fnType(core.List$(core.int), [])
  }));
  dart.setFieldSignature(src__services__platform_views.AndroidPointerProperties, () => ({
    __proto__: dart.getFields(src__services__platform_views.AndroidPointerProperties.__proto__),
    id: dart.finalFieldType(core.int),
    toolType: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__platform_views.AndroidPointerProperties, ['toString']);
  dart.defineLazy(src__services__platform_views.AndroidPointerProperties, {
    /*src__services__platform_views.AndroidPointerProperties.kToolTypeUnknown*/get kToolTypeUnknown() {
      return 0;
    },
    /*src__services__platform_views.AndroidPointerProperties.kToolTypeFinger*/get kToolTypeFinger() {
      return 1;
    },
    /*src__services__platform_views.AndroidPointerProperties.kToolTypeStylus*/get kToolTypeStylus() {
      return 2;
    },
    /*src__services__platform_views.AndroidPointerProperties.kToolTypeMouse*/get kToolTypeMouse() {
      return 3;
    },
    /*src__services__platform_views.AndroidPointerProperties.kToolTypeEraser*/get kToolTypeEraser() {
      return 4;
    }
  });
  src__services__platform_views.AndroidPointerCoords = class AndroidPointerCoords extends core.Object {
    get orientation() {
      return this[orientation$];
    }
    set orientation(value) {
      super.orientation = value;
    }
    get pressure() {
      return this[pressure$];
    }
    set pressure(value) {
      super.pressure = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get toolMajor() {
      return this[toolMajor$];
    }
    set toolMajor(value) {
      super.toolMajor = value;
    }
    get toolMinor() {
      return this[toolMinor$];
    }
    set toolMinor(value) {
      super.toolMinor = value;
    }
    get touchMajor() {
      return this[touchMajor$];
    }
    set touchMajor(value) {
      super.touchMajor = value;
    }
    get touchMinor() {
      return this[touchMinor$];
    }
    set touchMinor(value) {
      super.touchMinor = value;
    }
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    [_asList]() {
      return JSArrayOfdouble().of([this.orientation, this.pressure, this.size, this.toolMajor, this.toolMinor, this.touchMajor, this.touchMinor, this.x, this.y]);
    }
    toString() {
      return "AndroidPointerCoords(orientation: " + dart.str(this.orientation) + ", pressure: " + dart.str(this.pressure) + ", size: " + dart.str(this.size) + ", toolMajor: " + dart.str(this.toolMajor) + ", toolMinor: " + dart.str(this.toolMinor) + ", touchMajor: " + dart.str(this.touchMajor) + ", touchMinor: " + dart.str(this.touchMinor) + ", x: " + dart.str(this.x) + ", y: " + dart.str(this.y) + ")";
    }
  };
  (src__services__platform_views.AndroidPointerCoords.new = function(opts) {
    let orientation = opts && 'orientation' in opts ? opts.orientation : null;
    let pressure = opts && 'pressure' in opts ? opts.pressure : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let toolMajor = opts && 'toolMajor' in opts ? opts.toolMajor : null;
    let toolMinor = opts && 'toolMinor' in opts ? opts.toolMinor : null;
    let touchMajor = opts && 'touchMajor' in opts ? opts.touchMajor : null;
    let touchMinor = opts && 'touchMinor' in opts ? opts.touchMinor : null;
    let x = opts && 'x' in opts ? opts.x : null;
    let y = opts && 'y' in opts ? opts.y : null;
    this[orientation$] = orientation;
    this[pressure$] = pressure;
    this[size$] = size;
    this[toolMajor$] = toolMajor;
    this[toolMinor$] = toolMinor;
    this[touchMajor$] = touchMajor;
    this[touchMinor$] = touchMinor;
    this[x$] = x;
    this[y$] = y;
    if (!(orientation != null)) dart.assertFailed();
    if (!(pressure != null)) dart.assertFailed();
    if (!(size != null)) dart.assertFailed();
    if (!(toolMajor != null)) dart.assertFailed();
    if (!(toolMinor != null)) dart.assertFailed();
    if (!(touchMajor != null)) dart.assertFailed();
    if (!(touchMinor != null)) dart.assertFailed();
    if (!(x != null)) dart.assertFailed();
    if (!(y != null)) dart.assertFailed();
  }).prototype = src__services__platform_views.AndroidPointerCoords.prototype;
  dart.addTypeTests(src__services__platform_views.AndroidPointerCoords);
  const orientation$ = Symbol("AndroidPointerCoords.orientation");
  const pressure$ = Symbol("AndroidPointerCoords.pressure");
  const size$ = Symbol("AndroidPointerCoords.size");
  const toolMajor$ = Symbol("AndroidPointerCoords.toolMajor");
  const toolMinor$ = Symbol("AndroidPointerCoords.toolMinor");
  const touchMajor$ = Symbol("AndroidPointerCoords.touchMajor");
  const touchMinor$ = Symbol("AndroidPointerCoords.touchMinor");
  const x$ = Symbol("AndroidPointerCoords.x");
  const y$ = Symbol("AndroidPointerCoords.y");
  dart.setMethodSignature(src__services__platform_views.AndroidPointerCoords, () => ({
    __proto__: dart.getMethods(src__services__platform_views.AndroidPointerCoords.__proto__),
    [_asList]: dart.fnType(core.List$(core.double), [])
  }));
  dart.setFieldSignature(src__services__platform_views.AndroidPointerCoords, () => ({
    __proto__: dart.getFields(src__services__platform_views.AndroidPointerCoords.__proto__),
    orientation: dart.finalFieldType(core.double),
    pressure: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    toolMajor: dart.finalFieldType(core.double),
    toolMinor: dart.finalFieldType(core.double),
    touchMajor: dart.finalFieldType(core.double),
    touchMinor: dart.finalFieldType(core.double),
    x: dart.finalFieldType(core.double),
    y: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__services__platform_views.AndroidPointerCoords, ['toString']);
  src__services__platform_views.AndroidMotionEvent = class AndroidMotionEvent extends core.Object {
    get downTime() {
      return this[downTime$];
    }
    set downTime(value) {
      super.downTime = value;
    }
    get eventTime() {
      return this[eventTime$];
    }
    set eventTime(value) {
      super.eventTime = value;
    }
    get action() {
      return this[action$];
    }
    set action(value) {
      super.action = value;
    }
    get pointerCount() {
      return this[pointerCount$];
    }
    set pointerCount(value) {
      super.pointerCount = value;
    }
    get pointerProperties() {
      return this[pointerProperties$];
    }
    set pointerProperties(value) {
      super.pointerProperties = value;
    }
    get pointerCoords() {
      return this[pointerCoords$];
    }
    set pointerCoords(value) {
      super.pointerCoords = value;
    }
    get metaState() {
      return this[metaState$];
    }
    set metaState(value) {
      super.metaState = value;
    }
    get buttonState() {
      return this[buttonState$];
    }
    set buttonState(value) {
      super.buttonState = value;
    }
    get xPrecision() {
      return this[xPrecision$];
    }
    set xPrecision(value) {
      super.xPrecision = value;
    }
    get yPrecision() {
      return this[yPrecision$];
    }
    set yPrecision(value) {
      super.yPrecision = value;
    }
    get deviceId() {
      return this[deviceId$];
    }
    set deviceId(value) {
      super.deviceId = value;
    }
    get edgeFlags() {
      return this[edgeFlags$];
    }
    set edgeFlags(value) {
      super.edgeFlags = value;
    }
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get flags() {
      return this[flags$];
    }
    set flags(value) {
      super.flags = value;
    }
    [_asList](viewId) {
      return [viewId, this.downTime, this.eventTime, this.action, this.pointerCount, IterableOfListOfint()._check(this.pointerProperties[$map](ListOfint(), dart.fn(p => p[_asList](), AndroidPointerPropertiesToListOfint())))[$toList](), IterableOfListOfdouble()._check(this.pointerCoords[$map](ListOfdouble(), dart.fn(p => p[_asList](), AndroidPointerCoordsToListOfdouble())))[$toList](), this.metaState, this.buttonState, this.xPrecision, this.yPrecision, this.deviceId, this.edgeFlags, this.source, this.flags];
    }
    toString() {
      return "AndroidPointerEvent(downTime: " + dart.str(this.downTime) + ", eventTime: " + dart.str(this.eventTime) + ", action: " + dart.str(this.action) + ", pointerCount: " + dart.str(this.pointerCount) + ", pointerProperties: " + dart.str(this.pointerProperties) + ", pointerCoords: " + dart.str(this.pointerCoords) + ", metaState: " + dart.str(this.metaState) + ", buttonState: " + dart.str(this.buttonState) + ", xPrecision: " + dart.str(this.xPrecision) + ", yPrecision: " + dart.str(this.yPrecision) + ", deviceId: " + dart.str(this.deviceId) + ", edgeFlags: " + dart.str(this.edgeFlags) + ", source: " + dart.str(this.source) + ", flags: " + dart.str(this.flags) + ")";
    }
  };
  (src__services__platform_views.AndroidMotionEvent.new = function(opts) {
    let downTime = opts && 'downTime' in opts ? opts.downTime : null;
    let eventTime = opts && 'eventTime' in opts ? opts.eventTime : null;
    let action = opts && 'action' in opts ? opts.action : null;
    let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : null;
    let pointerProperties = opts && 'pointerProperties' in opts ? opts.pointerProperties : null;
    let pointerCoords = opts && 'pointerCoords' in opts ? opts.pointerCoords : null;
    let metaState = opts && 'metaState' in opts ? opts.metaState : null;
    let buttonState = opts && 'buttonState' in opts ? opts.buttonState : null;
    let xPrecision = opts && 'xPrecision' in opts ? opts.xPrecision : null;
    let yPrecision = opts && 'yPrecision' in opts ? opts.yPrecision : null;
    let deviceId = opts && 'deviceId' in opts ? opts.deviceId : null;
    let edgeFlags = opts && 'edgeFlags' in opts ? opts.edgeFlags : null;
    let source = opts && 'source' in opts ? opts.source : null;
    let flags = opts && 'flags' in opts ? opts.flags : null;
    this[downTime$] = downTime;
    this[eventTime$] = eventTime;
    this[action$] = action;
    this[pointerCount$] = pointerCount;
    this[pointerProperties$] = pointerProperties;
    this[pointerCoords$] = pointerCoords;
    this[metaState$] = metaState;
    this[buttonState$] = buttonState;
    this[xPrecision$] = xPrecision;
    this[yPrecision$] = yPrecision;
    this[deviceId$] = deviceId;
    this[edgeFlags$] = edgeFlags;
    this[source$] = source;
    this[flags$] = flags;
    if (!(downTime != null)) dart.assertFailed();
    if (!(eventTime != null)) dart.assertFailed();
    if (!(action != null)) dart.assertFailed();
    if (!(pointerCount != null)) dart.assertFailed();
    if (!(pointerProperties != null)) dart.assertFailed();
    if (!(pointerCoords != null)) dart.assertFailed();
    if (!(metaState != null)) dart.assertFailed();
    if (!(buttonState != null)) dart.assertFailed();
    if (!(xPrecision != null)) dart.assertFailed();
    if (!(yPrecision != null)) dart.assertFailed();
    if (!(deviceId != null)) dart.assertFailed();
    if (!(edgeFlags != null)) dart.assertFailed();
    if (!(source != null)) dart.assertFailed();
    if (!(flags != null)) dart.assertFailed();
    if (!(pointerProperties[$length] == pointerCount)) dart.assertFailed();
    if (!(pointerCoords[$length] == pointerCount)) dart.assertFailed();
  }).prototype = src__services__platform_views.AndroidMotionEvent.prototype;
  dart.addTypeTests(src__services__platform_views.AndroidMotionEvent);
  const downTime$ = Symbol("AndroidMotionEvent.downTime");
  const eventTime$ = Symbol("AndroidMotionEvent.eventTime");
  const action$ = Symbol("AndroidMotionEvent.action");
  const pointerCount$ = Symbol("AndroidMotionEvent.pointerCount");
  const pointerProperties$ = Symbol("AndroidMotionEvent.pointerProperties");
  const pointerCoords$ = Symbol("AndroidMotionEvent.pointerCoords");
  const metaState$ = Symbol("AndroidMotionEvent.metaState");
  const buttonState$ = Symbol("AndroidMotionEvent.buttonState");
  const xPrecision$ = Symbol("AndroidMotionEvent.xPrecision");
  const yPrecision$ = Symbol("AndroidMotionEvent.yPrecision");
  const deviceId$ = Symbol("AndroidMotionEvent.deviceId");
  const edgeFlags$ = Symbol("AndroidMotionEvent.edgeFlags");
  const source$ = Symbol("AndroidMotionEvent.source");
  const flags$ = Symbol("AndroidMotionEvent.flags");
  dart.setMethodSignature(src__services__platform_views.AndroidMotionEvent, () => ({
    __proto__: dart.getMethods(src__services__platform_views.AndroidMotionEvent.__proto__),
    [_asList]: dart.fnType(core.List, [core.int])
  }));
  dart.setFieldSignature(src__services__platform_views.AndroidMotionEvent, () => ({
    __proto__: dart.getFields(src__services__platform_views.AndroidMotionEvent.__proto__),
    downTime: dart.finalFieldType(core.int),
    eventTime: dart.finalFieldType(core.int),
    action: dart.finalFieldType(core.int),
    pointerCount: dart.finalFieldType(core.int),
    pointerProperties: dart.finalFieldType(ListOfAndroidPointerProperties()),
    pointerCoords: dart.finalFieldType(ListOfAndroidPointerCoords()),
    metaState: dart.finalFieldType(core.int),
    buttonState: dart.finalFieldType(core.int),
    xPrecision: dart.finalFieldType(core.double),
    yPrecision: dart.finalFieldType(core.double),
    deviceId: dart.finalFieldType(core.int),
    edgeFlags: dart.finalFieldType(core.int),
    source: dart.finalFieldType(core.int),
    flags: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__platform_views.AndroidMotionEvent, ['toString']);
  src__services__platform_views._AndroidViewState = class _AndroidViewState extends core.Object {
    toString() {
      return {
        0: "_AndroidViewState.waitingForSize",
        1: "_AndroidViewState.creating",
        2: "_AndroidViewState.created",
        3: "_AndroidViewState.createFailed",
        4: "_AndroidViewState.disposed"
      }[this.index];
    }
  };
  (src__services__platform_views._AndroidViewState.new = function(x) {
    this.index = x;
  }).prototype = src__services__platform_views._AndroidViewState.prototype;
  dart.addTypeTests(src__services__platform_views._AndroidViewState);
  dart.setFieldSignature(src__services__platform_views._AndroidViewState, () => ({
    __proto__: dart.getFields(src__services__platform_views._AndroidViewState.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__platform_views._AndroidViewState, ['toString']);
  src__services__platform_views._AndroidViewState.waitingForSize = dart.const(new src__services__platform_views._AndroidViewState.new(0));
  src__services__platform_views._AndroidViewState.creating = dart.const(new src__services__platform_views._AndroidViewState.new(1));
  src__services__platform_views._AndroidViewState.created = dart.const(new src__services__platform_views._AndroidViewState.new(2));
  src__services__platform_views._AndroidViewState.createFailed = dart.const(new src__services__platform_views._AndroidViewState.new(3));
  src__services__platform_views._AndroidViewState.disposed = dart.const(new src__services__platform_views._AndroidViewState.new(4));
  src__services__platform_views._AndroidViewState.values = dart.constList([src__services__platform_views._AndroidViewState.waitingForSize, src__services__platform_views._AndroidViewState.creating, src__services__platform_views._AndroidViewState.created, src__services__platform_views._AndroidViewState.createFailed, src__services__platform_views._AndroidViewState.disposed], src__services__platform_views._AndroidViewState);
  const _viewType = dart.privateName(src__services__platform_views, "_viewType");
  const _creationParams = dart.privateName(src__services__platform_views, "_creationParams");
  const _creationParamsCodec = dart.privateName(src__services__platform_views, "_creationParamsCodec");
  const _layoutDirection = dart.privateName(src__services__platform_views, "_layoutDirection");
  const _onPlatformViewCreated = dart.privateName(src__services__platform_views, "_onPlatformViewCreated");
  const _state = dart.privateName(src__services__platform_views, "_state");
  const _textureId = dart.privateName(src__services__platform_views, "_textureId");
  const _create = dart.privateName(src__services__platform_views, "_create");
  src__services__platform_views.AndroidViewController = class AndroidViewController extends core.Object {
    get id() {
      return this[id$0];
    }
    set id(value) {
      super.id = value;
    }
    get textureId() {
      return this[_textureId];
    }
    dispose() {
      return async.async(dart.void, (function* dispose() {
        if (this[_state] === src__services__platform_views._AndroidViewState.creating || this[_state] === src__services__platform_views._AndroidViewState.created) yield src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "dispose", this.id);
        this[_state] = src__services__platform_views._AndroidViewState.disposed;
      }).bind(this));
    }
    setSize(size) {
      return async.async(dart.void, (function* setSize() {
        if (!(this[_state] !== src__services__platform_views._AndroidViewState.disposed)) dart.assertFailed("trying to size a disposed Android View. View id: " + dart.str(this.id));
        if (!(size != null)) dart.assertFailed();
        if (!!dart.test(size.isEmpty)) dart.assertFailed();
        if (this[_state] === src__services__platform_views._AndroidViewState.waitingForSize) return this[_create](size);
        yield src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "resize", new (IdentityMapOfString$dynamic()).from(["id", this.id, "width", size.width, "height", size.height]));
      }).bind(this));
    }
    setLayoutDirection(layoutDirection) {
      return async.async(dart.void, (function* setLayoutDirection() {
        if (!(this[_state] !== src__services__platform_views._AndroidViewState.disposed)) dart.assertFailed("trying to set a layout direction for a disposed UIView. View id: " + dart.str(this.id));
        if (layoutDirection == this[_layoutDirection]) return;
        if (!(layoutDirection != null)) dart.assertFailed();
        this[_layoutDirection] = layoutDirection;
        if (this[_state] === src__services__platform_views._AndroidViewState.waitingForSize) return;
        yield src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "setDirection", new (IdentityMapOfString$dynamic()).from(["id", this.id, "direction", src__services__platform_views.AndroidViewController._getAndroidDirection(layoutDirection)]));
      }).bind(this));
    }
    static _getAndroidDirection(direction) {
      if (!(direction != null)) dart.assertFailed();
      switch (direction) {
        case ui$.TextDirection.ltr:
        {
          return 0;
        }
        case ui$.TextDirection.rtl:
        {
          return 1;
        }
      }
      return null;
    }
    sendMotionEvent(event) {
      return async.async(dart.void, (function* sendMotionEvent() {
        yield src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.dynamic, "touch", event[_asList](this.id));
      }).bind(this));
    }
    static pointerAction(pointerId, action) {
      return dart.notNull(pointerId) << 8 & 65280 | dart.notNull(action) & 255;
    }
    [_create](size) {
      return async.async(dart.void, (function* _create() {
        let args = new (IdentityMapOfString$dynamic()).from(["id", this.id, "viewType", this[_viewType], "width", size.width, "height", size.height, "direction", src__services__platform_views.AndroidViewController._getAndroidDirection(this[_layoutDirection])]);
        if (this[_creationParams] != null) {
          let paramsByteData = this[_creationParamsCodec].encodeMessage(this[_creationParams]);
          args[$_set]("params", typed_data.Uint8List.view(paramsByteData[$buffer], 0, paramsByteData[$lengthInBytes]));
        }
        this[_textureId] = (yield src__services__system_channels.SystemChannels.platform_views.invokeMethod(core.int, "create", args));
        if (this[_onPlatformViewCreated] != null) this[_onPlatformViewCreated](this.id);
        this[_state] = src__services__platform_views._AndroidViewState.created;
      }).bind(this));
    }
  };
  (src__services__platform_views.AndroidViewController.__ = function(id, viewType, creationParams, creationParamsCodec, layoutDirection, onPlatformViewCreated) {
    this[_textureId] = null;
    this[id$0] = id;
    if (!(id != null)) dart.assertFailed();
    if (!(viewType != null)) dart.assertFailed();
    if (!(layoutDirection != null)) dart.assertFailed();
    if (!(creationParams == null || creationParamsCodec != null)) dart.assertFailed();
    this[_viewType] = viewType;
    this[_creationParams] = creationParams;
    this[_creationParamsCodec] = creationParamsCodec;
    this[_layoutDirection] = layoutDirection;
    this[_onPlatformViewCreated] = onPlatformViewCreated;
    this[_state] = src__services__platform_views._AndroidViewState.waitingForSize;
  }).prototype = src__services__platform_views.AndroidViewController.prototype;
  dart.addTypeTests(src__services__platform_views.AndroidViewController);
  const id$0 = Symbol("AndroidViewController.id");
  dart.setMethodSignature(src__services__platform_views.AndroidViewController, () => ({
    __proto__: dart.getMethods(src__services__platform_views.AndroidViewController.__proto__),
    dispose: dart.fnType(async.Future$(dart.void), []),
    setSize: dart.fnType(async.Future$(dart.void), [ui$.Size]),
    setLayoutDirection: dart.fnType(async.Future$(dart.void), [ui$.TextDirection]),
    sendMotionEvent: dart.fnType(async.Future$(dart.void), [src__services__platform_views.AndroidMotionEvent]),
    [_create]: dart.fnType(async.Future$(dart.void), [ui$.Size])
  }));
  dart.setGetterSignature(src__services__platform_views.AndroidViewController, () => ({
    __proto__: dart.getGetters(src__services__platform_views.AndroidViewController.__proto__),
    textureId: core.int
  }));
  dart.setFieldSignature(src__services__platform_views.AndroidViewController, () => ({
    __proto__: dart.getFields(src__services__platform_views.AndroidViewController.__proto__),
    id: dart.finalFieldType(core.int),
    [_viewType]: dart.finalFieldType(core.String),
    [_onPlatformViewCreated]: dart.finalFieldType(intTovoid()),
    [_textureId]: dart.fieldType(core.int),
    [_layoutDirection]: dart.fieldType(ui$.TextDirection),
    [_state]: dart.fieldType(src__services__platform_views._AndroidViewState),
    [_creationParams]: dart.fieldType(dart.dynamic),
    [_creationParamsCodec]: dart.fieldType(src__services__message_codec.MessageCodec)
  }));
  dart.defineLazy(src__services__platform_views.AndroidViewController, {
    /*src__services__platform_views.AndroidViewController.kActionDown*/get kActionDown() {
      return 0;
    },
    /*src__services__platform_views.AndroidViewController.kActionUp*/get kActionUp() {
      return 1;
    },
    /*src__services__platform_views.AndroidViewController.kActionMove*/get kActionMove() {
      return 2;
    },
    /*src__services__platform_views.AndroidViewController.kActionCancel*/get kActionCancel() {
      return 3;
    },
    /*src__services__platform_views.AndroidViewController.kActionPointerDown*/get kActionPointerDown() {
      return 5;
    },
    /*src__services__platform_views.AndroidViewController.kActionPointerUp*/get kActionPointerUp() {
      return 6;
    },
    /*src__services__platform_views.AndroidViewController.kAndroidLayoutDirectionLtr*/get kAndroidLayoutDirectionLtr() {
      return 0;
    },
    /*src__services__platform_views.AndroidViewController.kAndroidLayoutDirectionRtl*/get kAndroidLayoutDirectionRtl() {
      return 1;
    }
  });
  const _debugDisposed = dart.privateName(src__services__platform_views, "_debugDisposed");
  src__services__platform_views.UiKitViewController = class UiKitViewController extends core.Object {
    get id() {
      return this[id$1];
    }
    set id(value) {
      super.id = value;
    }
    setLayoutDirection(layoutDirection) {
      return async.async(dart.void, (function* setLayoutDirection() {
        if (!!dart.test(this[_debugDisposed])) dart.assertFailed("trying to set a layout direction for a disposed Android View. View id: " + dart.str(this.id));
        if (layoutDirection == this[_layoutDirection]) return;
        if (!(layoutDirection != null)) dart.assertFailed();
        this[_layoutDirection] = layoutDirection;
      }).bind(this));
    }
    acceptGesture() {
      let args = new (IdentityMapOfString$dynamic()).from(["id", this.id]);
      return src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "acceptGesture", args);
    }
    rejectGesture() {
      let args = new (IdentityMapOfString$dynamic()).from(["id", this.id]);
      return src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "rejectGesture", args);
    }
    dispose() {
      return async.async(dart.void, (function* dispose() {
        this[_debugDisposed] = true;
        yield src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "dispose", this.id);
      }).bind(this));
    }
  };
  (src__services__platform_views.UiKitViewController.__ = function(id, layoutDirection) {
    this[_debugDisposed] = false;
    this[id$1] = id;
    if (!(id != null)) dart.assertFailed();
    if (!(layoutDirection != null)) dart.assertFailed();
    this[_layoutDirection] = layoutDirection;
  }).prototype = src__services__platform_views.UiKitViewController.prototype;
  dart.addTypeTests(src__services__platform_views.UiKitViewController);
  const id$1 = Symbol("UiKitViewController.id");
  dart.setMethodSignature(src__services__platform_views.UiKitViewController, () => ({
    __proto__: dart.getMethods(src__services__platform_views.UiKitViewController.__proto__),
    setLayoutDirection: dart.fnType(async.Future$(dart.void), [ui$.TextDirection]),
    acceptGesture: dart.fnType(async.Future$(dart.void), []),
    rejectGesture: dart.fnType(async.Future$(dart.void), []),
    dispose: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setFieldSignature(src__services__platform_views.UiKitViewController, () => ({
    __proto__: dart.getFields(src__services__platform_views.UiKitViewController.__proto__),
    id: dart.finalFieldType(core.int),
    [_debugDisposed]: dart.fieldType(core.bool),
    [_layoutDirection]: dart.fieldType(ui$.TextDirection)
  }));
  const _isLeftRightModifierPressed = dart.privateName(src__services__raw_keyboard_fuschia, "_isLeftRightModifierPressed");
  src__services__raw_keyboard.RawKeyEventData = class RawKeyEventData extends core.Object {
    get isControlPressed() {
      return this.isModifierPressed(src__services__raw_keyboard.ModifierKey.controlModifier, {side: src__services__raw_keyboard.KeyboardSide.any});
    }
    get isShiftPressed() {
      return this.isModifierPressed(src__services__raw_keyboard.ModifierKey.shiftModifier, {side: src__services__raw_keyboard.KeyboardSide.any});
    }
    get isAltPressed() {
      return this.isModifierPressed(src__services__raw_keyboard.ModifierKey.altModifier, {side: src__services__raw_keyboard.KeyboardSide.any});
    }
    get isMetaPressed() {
      return this.isModifierPressed(src__services__raw_keyboard.ModifierKey.metaModifier, {side: src__services__raw_keyboard.KeyboardSide.any});
    }
    get modifiersPressed() {
      let result = new (LinkedMapOfModifierKey$KeyboardSide()).new();
      for (let key of src__services__raw_keyboard.ModifierKey.values) {
        if (dart.test(this.isModifierPressed(key))) {
          result[$_set](key, this.getModifierSide(key));
        }
      }
      return result;
    }
  };
  (src__services__raw_keyboard.RawKeyEventData.new = function() {
  }).prototype = src__services__raw_keyboard.RawKeyEventData.prototype;
  dart.addTypeTests(src__services__raw_keyboard.RawKeyEventData);
  dart.setGetterSignature(src__services__raw_keyboard.RawKeyEventData, () => ({
    __proto__: dart.getGetters(src__services__raw_keyboard.RawKeyEventData.__proto__),
    isControlPressed: core.bool,
    isShiftPressed: core.bool,
    isAltPressed: core.bool,
    isMetaPressed: core.bool,
    modifiersPressed: core.Map$(src__services__raw_keyboard.ModifierKey, src__services__raw_keyboard.KeyboardSide)
  }));
  src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia = class RawKeyEventDataFuchsia extends src__services__raw_keyboard.RawKeyEventData {
    get hidUsage() {
      return this[hidUsage$];
    }
    set hidUsage(value) {
      super.hidUsage = value;
    }
    get codePoint() {
      return this[codePoint$];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get modifiers() {
      return this[modifiers$];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    [_isLeftRightModifierPressed](side, anyMask, leftMask, rightMask) {
      if ((dart.notNull(this.modifiers) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      switch (side) {
        case src__services__raw_keyboard.KeyboardSide.any:
        {
          return true;
        }
        case src__services__raw_keyboard.KeyboardSide.all:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
        case src__services__raw_keyboard.KeyboardSide.left:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0;
        }
        case src__services__raw_keyboard.KeyboardSide.right:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
      }
      return false;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : src__services__raw_keyboard.KeyboardSide.any;
      if (!(side != null)) dart.assertFailed();
      switch (key) {
        case src__services__raw_keyboard.ModifierKey.controlModifier:
        {
          return this[_isLeftRightModifierPressed](side, 24, 8, 16);
        }
        case src__services__raw_keyboard.ModifierKey.shiftModifier:
        {
          return this[_isLeftRightModifierPressed](side, 6, 2, 4);
        }
        case src__services__raw_keyboard.ModifierKey.altModifier:
        {
          return this[_isLeftRightModifierPressed](side, 96, 32, 64);
        }
        case src__services__raw_keyboard.ModifierKey.metaModifier:
        {
          return this[_isLeftRightModifierPressed](side, 384, 128, 256);
        }
        case src__services__raw_keyboard.ModifierKey.capsLockModifier:
        {
          return (dart.notNull(this.modifiers) & 1) !== 0;
        }
        case src__services__raw_keyboard.ModifierKey.numLockModifier:
        case src__services__raw_keyboard.ModifierKey.scrollLockModifier:
        case src__services__raw_keyboard.ModifierKey.functionModifier:
        case src__services__raw_keyboard.ModifierKey.symbolModifier:
        {
          return false;
        }
      }
      return false;
    }
    getModifierSide(key) {
      const findSide = (leftMask, rightMask, combinedMask) => {
        let combined = (dart.notNull(this.modifiers) & dart.notNull(combinedMask)) >>> 0;
        if (combined === leftMask) {
          return src__services__raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return src__services__raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask) {
          return src__services__raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintAndintToKeyboardSide());
      switch (key) {
        case src__services__raw_keyboard.ModifierKey.controlModifier:
        {
          return findSide(8, 16, 24);
        }
        case src__services__raw_keyboard.ModifierKey.shiftModifier:
        {
          return findSide(2, 4, 6);
        }
        case src__services__raw_keyboard.ModifierKey.altModifier:
        {
          return findSide(32, 64, 96);
        }
        case src__services__raw_keyboard.ModifierKey.metaModifier:
        {
          return findSide(128, 256, 384);
        }
        case src__services__raw_keyboard.ModifierKey.capsLockModifier:
        {
          return (dart.notNull(this.modifiers) & 1) === 0 ? null : src__services__raw_keyboard.KeyboardSide.all;
        }
        case src__services__raw_keyboard.ModifierKey.numLockModifier:
        case src__services__raw_keyboard.ModifierKey.scrollLockModifier:
        case src__services__raw_keyboard.ModifierKey.functionModifier:
        case src__services__raw_keyboard.ModifierKey.symbolModifier:
        {
          return null;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.");
      return null;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(hidUsage: " + dart.str(this.hidUsage) + ", codePoint: " + dart.str(this.codePoint) + ", modifiers: " + dart.str(this.modifiers) + ", " + ("modifiers down: " + dart.str(this.modifiersPressed) + ")");
    }
  };
  (src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.new = function(opts) {
    let hidUsage = opts && 'hidUsage' in opts ? opts.hidUsage : 0;
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[hidUsage$] = hidUsage;
    this[codePoint$] = codePoint;
    this[modifiers$] = modifiers;
    if (!(hidUsage != null)) dart.assertFailed();
    if (!(codePoint != null)) dart.assertFailed();
    if (!(modifiers != null)) dart.assertFailed();
    src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.__proto__.new.call(this);
  }).prototype = src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.prototype;
  dart.addTypeTests(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia);
  const hidUsage$ = Symbol("RawKeyEventDataFuchsia.hidUsage");
  const codePoint$ = Symbol("RawKeyEventDataFuchsia.codePoint");
  const modifiers$ = Symbol("RawKeyEventDataFuchsia.modifiers");
  dart.setMethodSignature(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getMethods(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.__proto__),
    [_isLeftRightModifierPressed]: dart.fnType(core.bool, [src__services__raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [src__services__raw_keyboard.ModifierKey], {side: src__services__raw_keyboard.KeyboardSide}),
    getModifierSide: dart.fnType(src__services__raw_keyboard.KeyboardSide, [src__services__raw_keyboard.ModifierKey])
  }));
  dart.setFieldSignature(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getFields(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.__proto__),
    hidUsage: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia, ['toString']);
  dart.defineLazy(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia, {
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierNone*/get modifierNone() {
      return 0;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierCapsLock*/get modifierCapsLock() {
      return 1;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierShift*/get modifierShift() {
      return 2 | 4;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftControl*/get modifierLeftControl() {
      return 8;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightControl*/get modifierRightControl() {
      return 16;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierControl*/get modifierControl() {
      return 8 | 16;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftAlt*/get modifierLeftAlt() {
      return 32;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightAlt*/get modifierRightAlt() {
      return 64;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierAlt*/get modifierAlt() {
      return 32 | 64;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftMeta*/get modifierLeftMeta() {
      return 128;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightMeta*/get modifierRightMeta() {
      return 256;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierMeta*/get modifierMeta() {
      return 128 | 256;
    }
  });
  const _isLeftRightModifierPressed$ = dart.privateName(src__services__raw_keyboard_android, "_isLeftRightModifierPressed");
  src__services__raw_keyboard_android.RawKeyEventDataAndroid = class RawKeyEventDataAndroid extends src__services__raw_keyboard.RawKeyEventData {
    get flags() {
      return this[flags$0];
    }
    set flags(value) {
      super.flags = value;
    }
    get codePoint() {
      return this[codePoint$0];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get keyCode() {
      return this[keyCode$];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get scanCode() {
      return this[scanCode$];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get metaState() {
      return this[metaState$0];
    }
    set metaState(value) {
      super.metaState = value;
    }
    [_isLeftRightModifierPressed$](side, anyMask, leftMask, rightMask) {
      if ((dart.notNull(this.metaState) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      switch (side) {
        case src__services__raw_keyboard.KeyboardSide.any:
        {
          return true;
        }
        case src__services__raw_keyboard.KeyboardSide.all:
        {
          return (dart.notNull(this.metaState) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.metaState) & dart.notNull(rightMask)) !== 0;
        }
        case src__services__raw_keyboard.KeyboardSide.left:
        {
          return (dart.notNull(this.metaState) & dart.notNull(leftMask)) !== 0;
        }
        case src__services__raw_keyboard.KeyboardSide.right:
        {
          return (dart.notNull(this.metaState) & dart.notNull(rightMask)) !== 0;
        }
      }
      return false;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : src__services__raw_keyboard.KeyboardSide.any;
      if (!(side != null)) dart.assertFailed();
      switch (key) {
        case src__services__raw_keyboard.ModifierKey.controlModifier:
        {
          return this[_isLeftRightModifierPressed$](side, 4096, 8192, 16384);
        }
        case src__services__raw_keyboard.ModifierKey.shiftModifier:
        {
          return this[_isLeftRightModifierPressed$](side, 1, 64, 128);
        }
        case src__services__raw_keyboard.ModifierKey.altModifier:
        {
          return this[_isLeftRightModifierPressed$](side, 2, 16, 32);
        }
        case src__services__raw_keyboard.ModifierKey.metaModifier:
        {
          return this[_isLeftRightModifierPressed$](side, 65536, 131072, 262144);
        }
        case src__services__raw_keyboard.ModifierKey.capsLockModifier:
        {
          return (dart.notNull(this.metaState) & 1048576) !== 0;
        }
        case src__services__raw_keyboard.ModifierKey.numLockModifier:
        {
          return (dart.notNull(this.metaState) & 2097152) !== 0;
        }
        case src__services__raw_keyboard.ModifierKey.scrollLockModifier:
        {
          return (dart.notNull(this.metaState) & 4194304) !== 0;
        }
        case src__services__raw_keyboard.ModifierKey.functionModifier:
        {
          return (dart.notNull(this.metaState) & 8) !== 0;
        }
        case src__services__raw_keyboard.ModifierKey.symbolModifier:
        {
          return (dart.notNull(this.metaState) & 4) !== 0;
        }
      }
      return false;
    }
    getModifierSide(key) {
      const findSide = (leftMask, rightMask) => {
        let combinedMask = (dart.notNull(leftMask) | dart.notNull(rightMask)) >>> 0;
        let combined = (dart.notNull(this.metaState) & combinedMask) >>> 0;
        if (combined === leftMask) {
          return src__services__raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return src__services__raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask) {
          return src__services__raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintToKeyboardSide());
      switch (key) {
        case src__services__raw_keyboard.ModifierKey.controlModifier:
        {
          return findSide(8192, 16384);
        }
        case src__services__raw_keyboard.ModifierKey.shiftModifier:
        {
          return findSide(64, 128);
        }
        case src__services__raw_keyboard.ModifierKey.altModifier:
        {
          return findSide(16, 32);
        }
        case src__services__raw_keyboard.ModifierKey.metaModifier:
        {
          return findSide(131072, 262144);
        }
        case src__services__raw_keyboard.ModifierKey.capsLockModifier:
        case src__services__raw_keyboard.ModifierKey.numLockModifier:
        case src__services__raw_keyboard.ModifierKey.scrollLockModifier:
        case src__services__raw_keyboard.ModifierKey.functionModifier:
        case src__services__raw_keyboard.ModifierKey.symbolModifier:
        {
          return src__services__raw_keyboard.KeyboardSide.all;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.");
      return null;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(flags: " + dart.str(this.flags) + ", codePoint: " + dart.str(this.codePoint) + ", keyCode: " + dart.str(this.keyCode) + ", " + ("scanCode: " + dart.str(this.scanCode) + ", metaState: " + dart.str(this.metaState) + ", modifiers down: " + dart.str(this.modifiersPressed) + ")");
    }
  };
  (src__services__raw_keyboard_android.RawKeyEventDataAndroid.new = function(opts) {
    let flags = opts && 'flags' in opts ? opts.flags : 0;
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
    this[flags$0] = flags;
    this[codePoint$0] = codePoint;
    this[keyCode$] = keyCode;
    this[scanCode$] = scanCode;
    this[metaState$0] = metaState;
    if (!(flags != null)) dart.assertFailed();
    if (!(codePoint != null)) dart.assertFailed();
    if (!(keyCode != null)) dart.assertFailed();
    if (!(scanCode != null)) dart.assertFailed();
    if (!(metaState != null)) dart.assertFailed();
    src__services__raw_keyboard_android.RawKeyEventDataAndroid.__proto__.new.call(this);
  }).prototype = src__services__raw_keyboard_android.RawKeyEventDataAndroid.prototype;
  dart.addTypeTests(src__services__raw_keyboard_android.RawKeyEventDataAndroid);
  const flags$0 = Symbol("RawKeyEventDataAndroid.flags");
  const codePoint$0 = Symbol("RawKeyEventDataAndroid.codePoint");
  const keyCode$ = Symbol("RawKeyEventDataAndroid.keyCode");
  const scanCode$ = Symbol("RawKeyEventDataAndroid.scanCode");
  const metaState$0 = Symbol("RawKeyEventDataAndroid.metaState");
  dart.setMethodSignature(src__services__raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getMethods(src__services__raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    [_isLeftRightModifierPressed$]: dart.fnType(core.bool, [src__services__raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [src__services__raw_keyboard.ModifierKey], {side: src__services__raw_keyboard.KeyboardSide}),
    getModifierSide: dart.fnType(src__services__raw_keyboard.KeyboardSide, [src__services__raw_keyboard.ModifierKey])
  }));
  dart.setFieldSignature(src__services__raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getFields(src__services__raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    flags: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    keyCode: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    metaState: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__raw_keyboard_android.RawKeyEventDataAndroid, ['toString']);
  dart.defineLazy(src__services__raw_keyboard_android.RawKeyEventDataAndroid, {
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierNone*/get modifierNone() {
      return 0;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierAlt*/get modifierAlt() {
      return 2;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftAlt*/get modifierLeftAlt() {
      return 16;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightAlt*/get modifierRightAlt() {
      return 32;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierShift*/get modifierShift() {
      return 1;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftShift*/get modifierLeftShift() {
      return 64;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightShift*/get modifierRightShift() {
      return 128;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierSym*/get modifierSym() {
      return 4;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierFunction*/get modifierFunction() {
      return 8;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierControl*/get modifierControl() {
      return 4096;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftControl*/get modifierLeftControl() {
      return 8192;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightControl*/get modifierRightControl() {
      return 16384;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierMeta*/get modifierMeta() {
      return 65536;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftMeta*/get modifierLeftMeta() {
      return 131072;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightMeta*/get modifierRightMeta() {
      return 262144;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierCapsLock*/get modifierCapsLock() {
      return 1048576;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierNumLock*/get modifierNumLock() {
      return 2097152;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierScrollLock*/get modifierScrollLock() {
      return 4194304;
    }
  });
  src__services__raw_keyboard.KeyboardSide = class KeyboardSide extends core.Object {
    toString() {
      return {
        0: "KeyboardSide.any",
        1: "KeyboardSide.left",
        2: "KeyboardSide.right",
        3: "KeyboardSide.all"
      }[this.index];
    }
  };
  (src__services__raw_keyboard.KeyboardSide.new = function(x) {
    this.index = x;
  }).prototype = src__services__raw_keyboard.KeyboardSide.prototype;
  dart.addTypeTests(src__services__raw_keyboard.KeyboardSide);
  dart.setFieldSignature(src__services__raw_keyboard.KeyboardSide, () => ({
    __proto__: dart.getFields(src__services__raw_keyboard.KeyboardSide.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__raw_keyboard.KeyboardSide, ['toString']);
  src__services__raw_keyboard.KeyboardSide.any = dart.const(new src__services__raw_keyboard.KeyboardSide.new(0));
  src__services__raw_keyboard.KeyboardSide.left = dart.const(new src__services__raw_keyboard.KeyboardSide.new(1));
  src__services__raw_keyboard.KeyboardSide.right = dart.const(new src__services__raw_keyboard.KeyboardSide.new(2));
  src__services__raw_keyboard.KeyboardSide.all = dart.const(new src__services__raw_keyboard.KeyboardSide.new(3));
  src__services__raw_keyboard.KeyboardSide.values = dart.constList([src__services__raw_keyboard.KeyboardSide.any, src__services__raw_keyboard.KeyboardSide.left, src__services__raw_keyboard.KeyboardSide.right, src__services__raw_keyboard.KeyboardSide.all], src__services__raw_keyboard.KeyboardSide);
  src__services__raw_keyboard.ModifierKey = class ModifierKey extends core.Object {
    toString() {
      return {
        0: "ModifierKey.controlModifier",
        1: "ModifierKey.shiftModifier",
        2: "ModifierKey.altModifier",
        3: "ModifierKey.metaModifier",
        4: "ModifierKey.capsLockModifier",
        5: "ModifierKey.numLockModifier",
        6: "ModifierKey.scrollLockModifier",
        7: "ModifierKey.functionModifier",
        8: "ModifierKey.symbolModifier"
      }[this.index];
    }
  };
  (src__services__raw_keyboard.ModifierKey.new = function(x) {
    this.index = x;
  }).prototype = src__services__raw_keyboard.ModifierKey.prototype;
  dart.addTypeTests(src__services__raw_keyboard.ModifierKey);
  dart.setFieldSignature(src__services__raw_keyboard.ModifierKey, () => ({
    __proto__: dart.getFields(src__services__raw_keyboard.ModifierKey.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__raw_keyboard.ModifierKey, ['toString']);
  src__services__raw_keyboard.ModifierKey.controlModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(0));
  src__services__raw_keyboard.ModifierKey.shiftModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(1));
  src__services__raw_keyboard.ModifierKey.altModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(2));
  src__services__raw_keyboard.ModifierKey.metaModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(3));
  src__services__raw_keyboard.ModifierKey.capsLockModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(4));
  src__services__raw_keyboard.ModifierKey.numLockModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(5));
  src__services__raw_keyboard.ModifierKey.scrollLockModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(6));
  src__services__raw_keyboard.ModifierKey.functionModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(7));
  src__services__raw_keyboard.ModifierKey.symbolModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(8));
  src__services__raw_keyboard.ModifierKey.values = dart.constList([src__services__raw_keyboard.ModifierKey.controlModifier, src__services__raw_keyboard.ModifierKey.shiftModifier, src__services__raw_keyboard.ModifierKey.altModifier, src__services__raw_keyboard.ModifierKey.metaModifier, src__services__raw_keyboard.ModifierKey.capsLockModifier, src__services__raw_keyboard.ModifierKey.numLockModifier, src__services__raw_keyboard.ModifierKey.scrollLockModifier, src__services__raw_keyboard.ModifierKey.functionModifier, src__services__raw_keyboard.ModifierKey.symbolModifier], src__services__raw_keyboard.ModifierKey);
  src__services__raw_keyboard.RawKeyEvent = class RawKeyEvent extends core.Object {
    static fromMessage(message) {
      let data = null;
      let keymap = core.String._check(message[$_get]("keymap"));
      switch (keymap) {
        case "android":
        {
          data = new src__services__raw_keyboard_android.RawKeyEventDataAndroid.new({flags: core.int._check((() => {
              let l = message[$_get]("flags");
              return l != null ? l : 0;
            })()), codePoint: core.int._check((() => {
              let l = message[$_get]("codePoint");
              return l != null ? l : 0;
            })()), keyCode: core.int._check((() => {
              let l = message[$_get]("keyCode");
              return l != null ? l : 0;
            })()), scanCode: core.int._check((() => {
              let l = message[$_get]("scanCode");
              return l != null ? l : 0;
            })()), metaState: core.int._check((() => {
              let l = message[$_get]("metaState");
              return l != null ? l : 0;
            })())});
          break;
        }
        case "fuchsia":
        {
          data = new src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.new({hidUsage: core.int._check((() => {
              let l = message[$_get]("hidUsage");
              return l != null ? l : 0;
            })()), codePoint: core.int._check((() => {
              let l = message[$_get]("codePoint");
              return l != null ? l : 0;
            })()), modifiers: core.int._check((() => {
              let l = message[$_get]("modifiers");
              return l != null ? l : 0;
            })())});
          break;
        }
        default:
        {
          dart.throw(new src__foundation__assertions.FlutterError.new("Unknown keymap for key events: " + dart.str(keymap)));
        }
      }
      let type = core.String._check(message[$_get]("type"));
      switch (type) {
        case "keydown":
        {
          return new src__services__raw_keyboard.RawKeyDownEvent.new({data: data});
        }
        case "keyup":
        {
          return new src__services__raw_keyboard.RawKeyUpEvent.new({data: data});
        }
        default:
        {
          dart.throw(new src__foundation__assertions.FlutterError.new("Unknown key event type: " + dart.str(type)));
        }
      }
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
  };
  (src__services__raw_keyboard.RawKeyEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    this[data$] = data;
  }).prototype = src__services__raw_keyboard.RawKeyEvent.prototype;
  dart.addTypeTests(src__services__raw_keyboard.RawKeyEvent);
  const data$ = Symbol("RawKeyEvent.data");
  dart.setFieldSignature(src__services__raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getFields(src__services__raw_keyboard.RawKeyEvent.__proto__),
    data: dart.finalFieldType(src__services__raw_keyboard.RawKeyEventData)
  }));
  src__services__raw_keyboard.RawKeyDownEvent = class RawKeyDownEvent extends src__services__raw_keyboard.RawKeyEvent {};
  (src__services__raw_keyboard.RawKeyDownEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    src__services__raw_keyboard.RawKeyDownEvent.__proto__.new.call(this, {data: data});
  }).prototype = src__services__raw_keyboard.RawKeyDownEvent.prototype;
  dart.addTypeTests(src__services__raw_keyboard.RawKeyDownEvent);
  src__services__raw_keyboard.RawKeyUpEvent = class RawKeyUpEvent extends src__services__raw_keyboard.RawKeyEvent {};
  (src__services__raw_keyboard.RawKeyUpEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    src__services__raw_keyboard.RawKeyUpEvent.__proto__.new.call(this, {data: data});
  }).prototype = src__services__raw_keyboard.RawKeyUpEvent.prototype;
  dart.addTypeTests(src__services__raw_keyboard.RawKeyUpEvent);
  const _listeners = dart.privateName(src__services__raw_keyboard, "_listeners");
  const _handleKeyEvent = dart.privateName(src__services__raw_keyboard, "_handleKeyEvent");
  src__services__raw_keyboard.RawKeyboard = class RawKeyboard extends core.Object {
    addListener(listener) {
      this[_listeners][$add](listener);
    }
    removeListener(listener) {
      this[_listeners][$remove](listener);
    }
    [_handleKeyEvent](message) {
      return async.async(dart.dynamic, (function* _handleKeyEvent() {
        if (dart.test(this[_listeners][$isEmpty])) {
          return;
        }
        let event = src__services__raw_keyboard.RawKeyEvent.fromMessage(MapOfString$dynamic()._check(message));
        if (event == null) {
          return;
        }
        for (let listener of ListOfValueChangedOfRawKeyEvent().from(this[_listeners])) {
          if (dart.test(this[_listeners][$contains](listener))) {
            listener(event);
          }
        }
      }).bind(this));
    }
  };
  (src__services__raw_keyboard.RawKeyboard.__ = function() {
    this[_listeners] = JSArrayOfValueChangedOfRawKeyEvent().of([]);
    src__services__system_channels.SystemChannels.keyEvent.setMessageHandler(dart.bind(this, _handleKeyEvent));
  }).prototype = src__services__raw_keyboard.RawKeyboard.prototype;
  dart.addTypeTests(src__services__raw_keyboard.RawKeyboard);
  dart.setMethodSignature(src__services__raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getMethods(src__services__raw_keyboard.RawKeyboard.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__services__raw_keyboard.RawKeyEvent])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__services__raw_keyboard.RawKeyEvent])]),
    [_handleKeyEvent]: dart.fnType(async.Future, [dart.dynamic])
  }));
  dart.setFieldSignature(src__services__raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getFields(src__services__raw_keyboard.RawKeyboard.__proto__),
    [_listeners]: dart.finalFieldType(ListOfValueChangedOfRawKeyEvent())
  }));
  dart.defineLazy(src__services__raw_keyboard.RawKeyboard, {
    /*src__services__raw_keyboard.RawKeyboard.instance*/get instance() {
      return new src__services__raw_keyboard.RawKeyboard.__();
    }
  });
  src__services__system_chrome.DeviceOrientation = class DeviceOrientation extends core.Object {
    toString() {
      return {
        0: "DeviceOrientation.portraitUp",
        1: "DeviceOrientation.landscapeLeft",
        2: "DeviceOrientation.portraitDown",
        3: "DeviceOrientation.landscapeRight"
      }[this.index];
    }
  };
  (src__services__system_chrome.DeviceOrientation.new = function(x) {
    this.index = x;
  }).prototype = src__services__system_chrome.DeviceOrientation.prototype;
  dart.addTypeTests(src__services__system_chrome.DeviceOrientation);
  dart.setFieldSignature(src__services__system_chrome.DeviceOrientation, () => ({
    __proto__: dart.getFields(src__services__system_chrome.DeviceOrientation.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__system_chrome.DeviceOrientation, ['toString']);
  src__services__system_chrome.DeviceOrientation.portraitUp = dart.const(new src__services__system_chrome.DeviceOrientation.new(0));
  src__services__system_chrome.DeviceOrientation.landscapeLeft = dart.const(new src__services__system_chrome.DeviceOrientation.new(1));
  src__services__system_chrome.DeviceOrientation.portraitDown = dart.const(new src__services__system_chrome.DeviceOrientation.new(2));
  src__services__system_chrome.DeviceOrientation.landscapeRight = dart.const(new src__services__system_chrome.DeviceOrientation.new(3));
  src__services__system_chrome.DeviceOrientation.values = dart.constList([src__services__system_chrome.DeviceOrientation.portraitUp, src__services__system_chrome.DeviceOrientation.landscapeLeft, src__services__system_chrome.DeviceOrientation.portraitDown, src__services__system_chrome.DeviceOrientation.landscapeRight], src__services__system_chrome.DeviceOrientation);
  src__services__system_chrome.ApplicationSwitcherDescription = class ApplicationSwitcherDescription extends core.Object {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get primaryColor() {
      return this[primaryColor$];
    }
    set primaryColor(value) {
      super.primaryColor = value;
    }
  };
  (src__services__system_chrome.ApplicationSwitcherDescription.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    this[label$] = label;
    this[primaryColor$] = primaryColor;
  }).prototype = src__services__system_chrome.ApplicationSwitcherDescription.prototype;
  dart.addTypeTests(src__services__system_chrome.ApplicationSwitcherDescription);
  const label$ = Symbol("ApplicationSwitcherDescription.label");
  const primaryColor$ = Symbol("ApplicationSwitcherDescription.primaryColor");
  dart.setFieldSignature(src__services__system_chrome.ApplicationSwitcherDescription, () => ({
    __proto__: dart.getFields(src__services__system_chrome.ApplicationSwitcherDescription.__proto__),
    label: dart.finalFieldType(core.String),
    primaryColor: dart.finalFieldType(core.int)
  }));
  src__services__system_chrome.SystemUiOverlay = class SystemUiOverlay extends core.Object {
    toString() {
      return {
        0: "SystemUiOverlay.top",
        1: "SystemUiOverlay.bottom"
      }[this.index];
    }
  };
  (src__services__system_chrome.SystemUiOverlay.new = function(x) {
    this.index = x;
  }).prototype = src__services__system_chrome.SystemUiOverlay.prototype;
  dart.addTypeTests(src__services__system_chrome.SystemUiOverlay);
  dart.setFieldSignature(src__services__system_chrome.SystemUiOverlay, () => ({
    __proto__: dart.getFields(src__services__system_chrome.SystemUiOverlay.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__system_chrome.SystemUiOverlay, ['toString']);
  src__services__system_chrome.SystemUiOverlay.top = dart.const(new src__services__system_chrome.SystemUiOverlay.new(0));
  src__services__system_chrome.SystemUiOverlay.bottom = dart.const(new src__services__system_chrome.SystemUiOverlay.new(1));
  src__services__system_chrome.SystemUiOverlay.values = dart.constList([src__services__system_chrome.SystemUiOverlay.top, src__services__system_chrome.SystemUiOverlay.bottom], src__services__system_chrome.SystemUiOverlay);
  const _toMap = dart.privateName(src__services__system_chrome, "_toMap");
  src__services__system_chrome.SystemUiOverlayStyle = class SystemUiOverlayStyle extends core.Object {
    get systemNavigationBarColor() {
      return this[systemNavigationBarColor$];
    }
    set systemNavigationBarColor(value) {
      super.systemNavigationBarColor = value;
    }
    get systemNavigationBarDividerColor() {
      return this[systemNavigationBarDividerColor$];
    }
    set systemNavigationBarDividerColor(value) {
      super.systemNavigationBarDividerColor = value;
    }
    get systemNavigationBarIconBrightness() {
      return this[systemNavigationBarIconBrightness$];
    }
    set systemNavigationBarIconBrightness(value) {
      super.systemNavigationBarIconBrightness = value;
    }
    get statusBarColor() {
      return this[statusBarColor$];
    }
    set statusBarColor(value) {
      super.statusBarColor = value;
    }
    get statusBarBrightness() {
      return this[statusBarBrightness$];
    }
    set statusBarBrightness(value) {
      super.statusBarBrightness = value;
    }
    get statusBarIconBrightness() {
      return this[statusBarIconBrightness$];
    }
    set statusBarIconBrightness(value) {
      super.statusBarIconBrightness = value;
    }
    [_toMap]() {
      return new (IdentityMapOfString$dynamic()).from(["systemNavigationBarColor", this.systemNavigationBarColor == null ? null : this.systemNavigationBarColor.value, "systemNavigationBarDividerColor", this.systemNavigationBarDividerColor == null ? null : this.systemNavigationBarDividerColor.value, "statusBarColor", this.statusBarColor == null ? null : this.statusBarColor.value, "statusBarBrightness", this.statusBarBrightness == null ? null : dart.toString(this.statusBarBrightness), "statusBarIconBrightness", this.statusBarIconBrightness == null ? null : dart.toString(this.statusBarIconBrightness), "systemNavigationBarIconBrightness", this.systemNavigationBarIconBrightness == null ? null : dart.toString(this.systemNavigationBarIconBrightness)]);
    }
    toString() {
      return dart.toString(this[_toMap]());
    }
    copyWith(opts) {
      let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
      let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
      let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
      let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
      let statusBarIconBrightness = opts && 'statusBarIconBrightness' in opts ? opts.statusBarIconBrightness : null;
      let systemNavigationBarIconBrightness = opts && 'systemNavigationBarIconBrightness' in opts ? opts.systemNavigationBarIconBrightness : null;
      return new src__services__system_chrome.SystemUiOverlayStyle.new({systemNavigationBarColor: systemNavigationBarColor != null ? systemNavigationBarColor : this.systemNavigationBarColor, systemNavigationBarDividerColor: systemNavigationBarDividerColor != null ? systemNavigationBarDividerColor : this.systemNavigationBarDividerColor, statusBarColor: statusBarColor != null ? statusBarColor : this.statusBarColor, statusBarIconBrightness: statusBarIconBrightness != null ? statusBarIconBrightness : this.statusBarIconBrightness, statusBarBrightness: statusBarBrightness != null ? statusBarBrightness : this.statusBarBrightness, systemNavigationBarIconBrightness: systemNavigationBarIconBrightness != null ? systemNavigationBarIconBrightness : this.systemNavigationBarIconBrightness});
    }
    get hashCode() {
      return ui$.hashValues(this.systemNavigationBarColor, this.systemNavigationBarDividerColor, this.statusBarColor, this.statusBarBrightness, this.statusBarIconBrightness, this.systemNavigationBarIconBrightness);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__services__system_chrome.SystemUiOverlayStyle._check(other);
      return dart.equals(typedOther.systemNavigationBarColor, this.systemNavigationBarColor) && dart.equals(typedOther.systemNavigationBarDividerColor, this.systemNavigationBarDividerColor) && dart.equals(typedOther.statusBarColor, this.statusBarColor) && typedOther.statusBarIconBrightness == this.statusBarIconBrightness && typedOther.statusBarBrightness == this.statusBarBrightness && typedOther.systemNavigationBarIconBrightness == this.systemNavigationBarIconBrightness;
    }
  };
  (src__services__system_chrome.SystemUiOverlayStyle.new = function(opts) {
    let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
    let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
    let systemNavigationBarIconBrightness = opts && 'systemNavigationBarIconBrightness' in opts ? opts.systemNavigationBarIconBrightness : null;
    let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
    let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
    let statusBarIconBrightness = opts && 'statusBarIconBrightness' in opts ? opts.statusBarIconBrightness : null;
    this[systemNavigationBarColor$] = systemNavigationBarColor;
    this[systemNavigationBarDividerColor$] = systemNavigationBarDividerColor;
    this[systemNavigationBarIconBrightness$] = systemNavigationBarIconBrightness;
    this[statusBarColor$] = statusBarColor;
    this[statusBarBrightness$] = statusBarBrightness;
    this[statusBarIconBrightness$] = statusBarIconBrightness;
  }).prototype = src__services__system_chrome.SystemUiOverlayStyle.prototype;
  dart.addTypeTests(src__services__system_chrome.SystemUiOverlayStyle);
  const systemNavigationBarColor$ = Symbol("SystemUiOverlayStyle.systemNavigationBarColor");
  const systemNavigationBarDividerColor$ = Symbol("SystemUiOverlayStyle.systemNavigationBarDividerColor");
  const systemNavigationBarIconBrightness$ = Symbol("SystemUiOverlayStyle.systemNavigationBarIconBrightness");
  const statusBarColor$ = Symbol("SystemUiOverlayStyle.statusBarColor");
  const statusBarBrightness$ = Symbol("SystemUiOverlayStyle.statusBarBrightness");
  const statusBarIconBrightness$ = Symbol("SystemUiOverlayStyle.statusBarIconBrightness");
  dart.setMethodSignature(src__services__system_chrome.SystemUiOverlayStyle, () => ({
    __proto__: dart.getMethods(src__services__system_chrome.SystemUiOverlayStyle.__proto__),
    [_toMap]: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    copyWith: dart.fnType(src__services__system_chrome.SystemUiOverlayStyle, [], {systemNavigationBarColor: ui$.Color, systemNavigationBarDividerColor: ui$.Color, statusBarColor: ui$.Color, statusBarBrightness: ui$.Brightness, statusBarIconBrightness: ui$.Brightness, systemNavigationBarIconBrightness: ui$.Brightness})
  }));
  dart.setFieldSignature(src__services__system_chrome.SystemUiOverlayStyle, () => ({
    __proto__: dart.getFields(src__services__system_chrome.SystemUiOverlayStyle.__proto__),
    systemNavigationBarColor: dart.finalFieldType(ui$.Color),
    systemNavigationBarDividerColor: dart.finalFieldType(ui$.Color),
    systemNavigationBarIconBrightness: dart.finalFieldType(ui$.Brightness),
    statusBarColor: dart.finalFieldType(ui$.Color),
    statusBarBrightness: dart.finalFieldType(ui$.Brightness),
    statusBarIconBrightness: dart.finalFieldType(ui$.Brightness)
  }));
  dart.defineExtensionMethods(src__services__system_chrome.SystemUiOverlayStyle, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__services__system_chrome.SystemUiOverlayStyle, ['hashCode']);
  dart.defineLazy(src__services__system_chrome.SystemUiOverlayStyle, {
    /*src__services__system_chrome.SystemUiOverlayStyle.light*/get light() {
      return dart.const(new src__services__system_chrome.SystemUiOverlayStyle.new({systemNavigationBarColor: dart.const(new ui$.Color.new(4278190080)), systemNavigationBarDividerColor: null, statusBarColor: null, systemNavigationBarIconBrightness: ui$.Brightness.light, statusBarIconBrightness: ui$.Brightness.light, statusBarBrightness: ui$.Brightness.dark}));
    },
    /*src__services__system_chrome.SystemUiOverlayStyle.dark*/get dark() {
      return dart.const(new src__services__system_chrome.SystemUiOverlayStyle.new({systemNavigationBarColor: dart.const(new ui$.Color.new(4278190080)), systemNavigationBarDividerColor: null, statusBarColor: null, systemNavigationBarIconBrightness: ui$.Brightness.light, statusBarIconBrightness: ui$.Brightness.dark, statusBarBrightness: ui$.Brightness.light}));
    }
  });
  src__services__system_chrome._stringify = function(list) {
    let result = JSArrayOfString().of([]);
    for (let item of list)
      result[$add](dart.toString(item));
    return result;
  };
  src__services__system_chrome.SystemChrome = class SystemChrome extends core.Object {
    static setPreferredOrientations(orientations) {
      return async.async(dart.void, function* setPreferredOrientations() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setPreferredOrientations", src__services__system_chrome._stringify(orientations));
      });
    }
    static setApplicationSwitcherDescription(description) {
      return async.async(dart.void, function* setApplicationSwitcherDescription() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setApplicationSwitcherDescription", new (IdentityMapOfString$dynamic()).from(["label", description.label, "primaryColor", description.primaryColor]));
      });
    }
    static setEnabledSystemUIOverlays(overlays) {
      return async.async(dart.void, function* setEnabledSystemUIOverlays() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setEnabledSystemUIOverlays", src__services__system_chrome._stringify(overlays));
      });
    }
    static restoreSystemUIOverlays() {
      return async.async(dart.void, function* restoreSystemUIOverlays() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.restoreSystemUIOverlays", null);
      });
    }
    static setSystemUIOverlayStyle(style) {
      if (!(style != null)) dart.assertFailed();
      if (src__services__system_chrome.SystemChrome._pendingStyle != null) {
        src__services__system_chrome.SystemChrome._pendingStyle = style;
        return;
      }
      if (dart.equals(style, src__services__system_chrome.SystemChrome._latestStyle)) {
        return;
      }
      src__services__system_chrome.SystemChrome._pendingStyle = style;
      async.scheduleMicrotask(dart.fn(() => {
        if (!(src__services__system_chrome.SystemChrome._pendingStyle != null)) dart.assertFailed();
        if (!dart.equals(src__services__system_chrome.SystemChrome._pendingStyle, src__services__system_chrome.SystemChrome._latestStyle)) {
          src__services__system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setSystemUIOverlayStyle", src__services__system_chrome.SystemChrome._pendingStyle[_toMap]());
          src__services__system_chrome.SystemChrome._latestStyle = src__services__system_chrome.SystemChrome._pendingStyle;
        }
        src__services__system_chrome.SystemChrome._pendingStyle = null;
      }, VoidToNull()));
    }
    static get latestStyle() {
      return src__services__system_chrome.SystemChrome._latestStyle;
    }
  };
  (src__services__system_chrome.SystemChrome.__ = function() {
  }).prototype = src__services__system_chrome.SystemChrome.prototype;
  dart.addTypeTests(src__services__system_chrome.SystemChrome);
  dart.defineLazy(src__services__system_chrome.SystemChrome, {
    /*src__services__system_chrome.SystemChrome._pendingStyle*/get _pendingStyle() {
      return null;
    },
    set _pendingStyle(_) {},
    /*src__services__system_chrome.SystemChrome._latestStyle*/get _latestStyle() {
      return null;
    },
    set _latestStyle(_) {}
  });
  src__services__system_navigator.SystemNavigator = class SystemNavigator extends core.Object {
    static pop() {
      return async.async(dart.void, function* pop() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "SystemNavigator.pop");
      });
    }
  };
  (src__services__system_navigator.SystemNavigator.__ = function() {
  }).prototype = src__services__system_navigator.SystemNavigator.prototype;
  dart.addTypeTests(src__services__system_navigator.SystemNavigator);
  src__services__system_sound.SystemSoundType = class SystemSoundType extends core.Object {
    toString() {
      return {
        0: "SystemSoundType.click"
      }[this.index];
    }
  };
  (src__services__system_sound.SystemSoundType.new = function(x) {
    this.index = x;
  }).prototype = src__services__system_sound.SystemSoundType.prototype;
  dart.addTypeTests(src__services__system_sound.SystemSoundType);
  dart.setFieldSignature(src__services__system_sound.SystemSoundType, () => ({
    __proto__: dart.getFields(src__services__system_sound.SystemSoundType.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__system_sound.SystemSoundType, ['toString']);
  src__services__system_sound.SystemSoundType.click = dart.const(new src__services__system_sound.SystemSoundType.new(0));
  src__services__system_sound.SystemSoundType.values = dart.constList([src__services__system_sound.SystemSoundType.click], src__services__system_sound.SystemSoundType);
  src__services__system_sound.SystemSound = class SystemSound extends core.Object {
    static play(type) {
      return async.async(dart.void, function* play() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "SystemSound.play", dart.toString(type));
      });
    }
  };
  (src__services__system_sound.SystemSound.__ = function() {
  }).prototype = src__services__system_sound.SystemSound.prototype;
  dart.addTypeTests(src__services__system_sound.SystemSound);
  src__services__text_editing.TextRange = class TextRange extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get isValid() {
      return dart.notNull(this.start) >= 0 && dart.notNull(this.end) >= 0;
    }
    get isCollapsed() {
      return this.start == this.end;
    }
    get isNormalized() {
      return dart.notNull(this.end) >= dart.notNull(this.start);
    }
    textBefore(text) {
      if (!dart.test(this.isNormalized)) dart.assertFailed();
      return text[$substring](0, this.start);
    }
    textAfter(text) {
      if (!dart.test(this.isNormalized)) dart.assertFailed();
      return text[$substring](this.end);
    }
    textInside(text) {
      if (!dart.test(this.isNormalized)) dart.assertFailed();
      return text[$substring](this.start, this.end);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!src__services__text_editing.TextRange.is(other)) return false;
      let typedOther = src__services__text_editing.TextRange._check(other);
      return typedOther.start == this.start && typedOther.end == this.end;
    }
    get hashCode() {
      return ui$.hashValues(dart.hashCode(this.start), dart.hashCode(this.end));
    }
    toString() {
      return "TextRange(start: " + dart.str(this.start) + ", end: " + dart.str(this.end) + ")";
    }
  };
  (src__services__text_editing.TextRange.new = function(opts) {
    let start = opts && 'start' in opts ? opts.start : null;
    let end = opts && 'end' in opts ? opts.end : null;
    this[start$] = start;
    this[end$] = end;
    if (!(start != null && dart.notNull(start) >= -1)) dart.assertFailed();
    if (!(end != null && dart.notNull(end) >= -1)) dart.assertFailed();
  }).prototype = src__services__text_editing.TextRange.prototype;
  (src__services__text_editing.TextRange.collapsed = function(offset) {
    if (!(offset != null && dart.notNull(offset) >= -1)) dart.assertFailed();
    this[start$] = offset;
    this[end$] = offset;
  }).prototype = src__services__text_editing.TextRange.prototype;
  dart.addTypeTests(src__services__text_editing.TextRange);
  const start$ = Symbol("TextRange.start");
  const end$ = Symbol("TextRange.end");
  dart.setMethodSignature(src__services__text_editing.TextRange, () => ({
    __proto__: dart.getMethods(src__services__text_editing.TextRange.__proto__),
    textBefore: dart.fnType(core.String, [core.String]),
    textAfter: dart.fnType(core.String, [core.String]),
    textInside: dart.fnType(core.String, [core.String])
  }));
  dart.setGetterSignature(src__services__text_editing.TextRange, () => ({
    __proto__: dart.getGetters(src__services__text_editing.TextRange.__proto__),
    isValid: core.bool,
    isCollapsed: core.bool,
    isNormalized: core.bool
  }));
  dart.setFieldSignature(src__services__text_editing.TextRange, () => ({
    __proto__: dart.getFields(src__services__text_editing.TextRange.__proto__),
    start: dart.finalFieldType(core.int),
    end: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__text_editing.TextRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__services__text_editing.TextRange, ['hashCode']);
  dart.defineLazy(src__services__text_editing.TextRange, {
    /*src__services__text_editing.TextRange.empty*/get empty() {
      return dart.const(new src__services__text_editing.TextRange.new({start: -1, end: -1}));
    }
  });
  src__services__text_editing.TextSelection = class TextSelection extends src__services__text_editing.TextRange {
    get baseOffset() {
      return this[baseOffset$];
    }
    set baseOffset(value) {
      super.baseOffset = value;
    }
    get extentOffset() {
      return this[extentOffset$];
    }
    set extentOffset(value) {
      super.extentOffset = value;
    }
    get affinity() {
      return this[affinity$];
    }
    set affinity(value) {
      super.affinity = value;
    }
    get isDirectional() {
      return this[isDirectional$];
    }
    set isDirectional(value) {
      super.isDirectional = value;
    }
    get base() {
      return new ui$.TextPosition.new({offset: this.baseOffset, affinity: this.affinity});
    }
    get extent() {
      return new ui$.TextPosition.new({offset: this.extentOffset, affinity: this.affinity});
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(baseOffset: " + dart.str(this.baseOffset) + ", extentOffset: " + dart.str(this.extentOffset) + ", affinity: " + dart.str(this.affinity) + ", isDirectional: " + dart.str(this.isDirectional) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!src__services__text_editing.TextSelection.is(other)) return false;
      let typedOther = src__services__text_editing.TextSelection._check(other);
      return typedOther.baseOffset == this.baseOffset && typedOther.extentOffset == this.extentOffset && typedOther.affinity == this.affinity && typedOther.isDirectional == this.isDirectional;
    }
    get hashCode() {
      return ui$.hashValues(dart.hashCode(this.baseOffset), dart.hashCode(this.extentOffset), dart.hashCode(this.affinity), dart.hashCode(this.isDirectional));
    }
    copyWith(opts) {
      let baseOffset = opts && 'baseOffset' in opts ? opts.baseOffset : null;
      let extentOffset = opts && 'extentOffset' in opts ? opts.extentOffset : null;
      let affinity = opts && 'affinity' in opts ? opts.affinity : null;
      let isDirectional = opts && 'isDirectional' in opts ? opts.isDirectional : null;
      return new src__services__text_editing.TextSelection.new({baseOffset: baseOffset != null ? baseOffset : this.baseOffset, extentOffset: extentOffset != null ? extentOffset : this.extentOffset, affinity: affinity != null ? affinity : this.affinity, isDirectional: isDirectional != null ? isDirectional : this.isDirectional});
    }
  };
  (src__services__text_editing.TextSelection.new = function(opts) {
    let baseOffset = opts && 'baseOffset' in opts ? opts.baseOffset : null;
    let extentOffset = opts && 'extentOffset' in opts ? opts.extentOffset : null;
    let affinity = opts && 'affinity' in opts ? opts.affinity : ui$.TextAffinity.downstream;
    let isDirectional = opts && 'isDirectional' in opts ? opts.isDirectional : false;
    this[baseOffset$] = baseOffset;
    this[extentOffset$] = extentOffset;
    this[affinity$] = affinity;
    this[isDirectional$] = isDirectional;
    src__services__text_editing.TextSelection.__proto__.new.call(this, {start: dart.notNull(baseOffset) < dart.notNull(extentOffset) ? baseOffset : extentOffset, end: dart.notNull(baseOffset) < dart.notNull(extentOffset) ? extentOffset : baseOffset});
  }).prototype = src__services__text_editing.TextSelection.prototype;
  (src__services__text_editing.TextSelection.collapsed = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let affinity = opts && 'affinity' in opts ? opts.affinity : ui$.TextAffinity.downstream;
    this[affinity$] = affinity;
    this[baseOffset$] = offset;
    this[extentOffset$] = offset;
    this[isDirectional$] = false;
    src__services__text_editing.TextSelection.__proto__.collapsed.call(this, offset);
  }).prototype = src__services__text_editing.TextSelection.prototype;
  (src__services__text_editing.TextSelection.fromPosition = function(position) {
    this[baseOffset$] = position.offset;
    this[extentOffset$] = position.offset;
    this[affinity$] = position.affinity;
    this[isDirectional$] = false;
    src__services__text_editing.TextSelection.__proto__.collapsed.call(this, position.offset);
  }).prototype = src__services__text_editing.TextSelection.prototype;
  dart.addTypeTests(src__services__text_editing.TextSelection);
  const baseOffset$ = Symbol("TextSelection.baseOffset");
  const extentOffset$ = Symbol("TextSelection.extentOffset");
  const affinity$ = Symbol("TextSelection.affinity");
  const isDirectional$ = Symbol("TextSelection.isDirectional");
  dart.setMethodSignature(src__services__text_editing.TextSelection, () => ({
    __proto__: dart.getMethods(src__services__text_editing.TextSelection.__proto__),
    copyWith: dart.fnType(src__services__text_editing.TextSelection, [], {baseOffset: core.int, extentOffset: core.int, affinity: ui$.TextAffinity, isDirectional: core.bool})
  }));
  dart.setGetterSignature(src__services__text_editing.TextSelection, () => ({
    __proto__: dart.getGetters(src__services__text_editing.TextSelection.__proto__),
    base: ui$.TextPosition,
    extent: ui$.TextPosition
  }));
  dart.setFieldSignature(src__services__text_editing.TextSelection, () => ({
    __proto__: dart.getFields(src__services__text_editing.TextSelection.__proto__),
    baseOffset: dart.finalFieldType(core.int),
    extentOffset: dart.finalFieldType(core.int),
    affinity: dart.finalFieldType(ui$.TextAffinity),
    isDirectional: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__services__text_editing.TextSelection, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__services__text_editing.TextSelection, ['hashCode']);
  const _name = dart.privateName(src__services__text_input, "_name");
  src__services__text_input.TextInputType = class TextInputType extends core.Object {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get signed() {
      return this[signed$];
    }
    set signed(value) {
      super.signed = value;
    }
    get decimal() {
      return this[decimal$];
    }
    set decimal(value) {
      super.decimal = value;
    }
    get [_name]() {
      return "TextInputType." + dart.str(src__services__text_input.TextInputType._names[$_get](this.index));
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["name", this[_name], "signed", this.signed, "decimal", this.decimal]);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + ("name: " + dart.str(this[_name]) + ", ") + ("signed: " + dart.str(this.signed) + ", ") + ("decimal: " + dart.str(this.decimal) + ")");
    }
    _equals(other) {
      if (other == null) return false;
      if (!src__services__text_input.TextInputType.is(other)) return false;
      let typedOther = src__services__text_input.TextInputType._check(other);
      return typedOther.index == this.index && typedOther.signed == this.signed && typedOther.decimal == this.decimal;
    }
    get hashCode() {
      return ui$.hashValues(this.index, this.signed, this.decimal);
    }
  };
  (src__services__text_input.TextInputType.__ = function(index) {
    this[index$] = index;
    this[signed$] = null;
    this[decimal$] = null;
  }).prototype = src__services__text_input.TextInputType.prototype;
  (src__services__text_input.TextInputType.numberWithOptions = function(opts) {
    let signed = opts && 'signed' in opts ? opts.signed : false;
    let decimal = opts && 'decimal' in opts ? opts.decimal : false;
    this[signed$] = signed;
    this[decimal$] = decimal;
    this[index$] = 2;
  }).prototype = src__services__text_input.TextInputType.prototype;
  dart.addTypeTests(src__services__text_input.TextInputType);
  const index$ = Symbol("TextInputType.index");
  const signed$ = Symbol("TextInputType.signed");
  const decimal$ = Symbol("TextInputType.decimal");
  dart.setMethodSignature(src__services__text_input.TextInputType, () => ({
    __proto__: dart.getMethods(src__services__text_input.TextInputType.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setGetterSignature(src__services__text_input.TextInputType, () => ({
    __proto__: dart.getGetters(src__services__text_input.TextInputType.__proto__),
    [_name]: core.String
  }));
  dart.setFieldSignature(src__services__text_input.TextInputType, () => ({
    __proto__: dart.getFields(src__services__text_input.TextInputType.__proto__),
    index: dart.finalFieldType(core.int),
    signed: dart.finalFieldType(core.bool),
    decimal: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__services__text_input.TextInputType, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__services__text_input.TextInputType, ['hashCode']);
  dart.defineLazy(src__services__text_input.TextInputType, {
    /*src__services__text_input.TextInputType.text*/get text() {
      return dart.const(new src__services__text_input.TextInputType.__(0));
    },
    /*src__services__text_input.TextInputType.multiline*/get multiline() {
      return dart.const(new src__services__text_input.TextInputType.__(1));
    },
    /*src__services__text_input.TextInputType.number*/get number() {
      return dart.const(new src__services__text_input.TextInputType.numberWithOptions());
    },
    /*src__services__text_input.TextInputType.phone*/get phone() {
      return dart.const(new src__services__text_input.TextInputType.__(3));
    },
    /*src__services__text_input.TextInputType.datetime*/get datetime() {
      return dart.const(new src__services__text_input.TextInputType.__(4));
    },
    /*src__services__text_input.TextInputType.emailAddress*/get emailAddress() {
      return dart.const(new src__services__text_input.TextInputType.__(5));
    },
    /*src__services__text_input.TextInputType.url*/get url() {
      return dart.const(new src__services__text_input.TextInputType.__(6));
    },
    /*src__services__text_input.TextInputType.values*/get values() {
      return dart.constList([src__services__text_input.TextInputType.text, src__services__text_input.TextInputType.multiline, src__services__text_input.TextInputType.number, src__services__text_input.TextInputType.phone, src__services__text_input.TextInputType.datetime, src__services__text_input.TextInputType.emailAddress, src__services__text_input.TextInputType.url], src__services__text_input.TextInputType);
    },
    /*src__services__text_input.TextInputType._names*/get _names() {
      return dart.constList(["text", "multiline", "number", "phone", "datetime", "emailAddress", "url"], core.String);
    }
  });
  src__services__text_input.TextInputAction = class TextInputAction extends core.Object {
    toString() {
      return {
        0: "TextInputAction.none",
        1: "TextInputAction.unspecified",
        2: "TextInputAction.done",
        3: "TextInputAction.go",
        4: "TextInputAction.search",
        5: "TextInputAction.send",
        6: "TextInputAction.next",
        7: "TextInputAction.previous",
        8: "TextInputAction.continueAction",
        9: "TextInputAction.join",
        10: "TextInputAction.route",
        11: "TextInputAction.emergencyCall",
        12: "TextInputAction.newline"
      }[this.index];
    }
  };
  (src__services__text_input.TextInputAction.new = function(x) {
    this.index = x;
  }).prototype = src__services__text_input.TextInputAction.prototype;
  dart.addTypeTests(src__services__text_input.TextInputAction);
  dart.setFieldSignature(src__services__text_input.TextInputAction, () => ({
    __proto__: dart.getFields(src__services__text_input.TextInputAction.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__text_input.TextInputAction, ['toString']);
  src__services__text_input.TextInputAction.none = dart.const(new src__services__text_input.TextInputAction.new(0));
  src__services__text_input.TextInputAction.unspecified = dart.const(new src__services__text_input.TextInputAction.new(1));
  src__services__text_input.TextInputAction.done = dart.const(new src__services__text_input.TextInputAction.new(2));
  src__services__text_input.TextInputAction.go = dart.const(new src__services__text_input.TextInputAction.new(3));
  src__services__text_input.TextInputAction.search = dart.const(new src__services__text_input.TextInputAction.new(4));
  src__services__text_input.TextInputAction.send = dart.const(new src__services__text_input.TextInputAction.new(5));
  src__services__text_input.TextInputAction.next = dart.const(new src__services__text_input.TextInputAction.new(6));
  src__services__text_input.TextInputAction.previous = dart.const(new src__services__text_input.TextInputAction.new(7));
  src__services__text_input.TextInputAction.continueAction = dart.const(new src__services__text_input.TextInputAction.new(8));
  src__services__text_input.TextInputAction.join = dart.const(new src__services__text_input.TextInputAction.new(9));
  src__services__text_input.TextInputAction.route = dart.const(new src__services__text_input.TextInputAction.new(10));
  src__services__text_input.TextInputAction.emergencyCall = dart.const(new src__services__text_input.TextInputAction.new(11));
  src__services__text_input.TextInputAction.newline = dart.const(new src__services__text_input.TextInputAction.new(12));
  src__services__text_input.TextInputAction.values = dart.constList([src__services__text_input.TextInputAction.none, src__services__text_input.TextInputAction.unspecified, src__services__text_input.TextInputAction.done, src__services__text_input.TextInputAction.go, src__services__text_input.TextInputAction.search, src__services__text_input.TextInputAction.send, src__services__text_input.TextInputAction.next, src__services__text_input.TextInputAction.previous, src__services__text_input.TextInputAction.continueAction, src__services__text_input.TextInputAction.join, src__services__text_input.TextInputAction.route, src__services__text_input.TextInputAction.emergencyCall, src__services__text_input.TextInputAction.newline], src__services__text_input.TextInputAction);
  src__services__text_input.TextCapitalization = class TextCapitalization extends core.Object {
    toString() {
      return {
        0: "TextCapitalization.words",
        1: "TextCapitalization.sentences",
        2: "TextCapitalization.characters",
        3: "TextCapitalization.none"
      }[this.index];
    }
  };
  (src__services__text_input.TextCapitalization.new = function(x) {
    this.index = x;
  }).prototype = src__services__text_input.TextCapitalization.prototype;
  dart.addTypeTests(src__services__text_input.TextCapitalization);
  dart.setFieldSignature(src__services__text_input.TextCapitalization, () => ({
    __proto__: dart.getFields(src__services__text_input.TextCapitalization.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__text_input.TextCapitalization, ['toString']);
  src__services__text_input.TextCapitalization.words = dart.const(new src__services__text_input.TextCapitalization.new(0));
  src__services__text_input.TextCapitalization.sentences = dart.const(new src__services__text_input.TextCapitalization.new(1));
  src__services__text_input.TextCapitalization.characters = dart.const(new src__services__text_input.TextCapitalization.new(2));
  src__services__text_input.TextCapitalization.none = dart.const(new src__services__text_input.TextCapitalization.new(3));
  src__services__text_input.TextCapitalization.values = dart.constList([src__services__text_input.TextCapitalization.words, src__services__text_input.TextCapitalization.sentences, src__services__text_input.TextCapitalization.characters, src__services__text_input.TextCapitalization.none], src__services__text_input.TextCapitalization);
  src__services__text_input.TextInputConfiguration = class TextInputConfiguration extends core.Object {
    get inputType() {
      return this[inputType$];
    }
    set inputType(value) {
      super.inputType = value;
    }
    get obscureText() {
      return this[obscureText$];
    }
    set obscureText(value) {
      super.obscureText = value;
    }
    get autocorrect() {
      return this[autocorrect$];
    }
    set autocorrect(value) {
      super.autocorrect = value;
    }
    get actionLabel() {
      return this[actionLabel$];
    }
    set actionLabel(value) {
      super.actionLabel = value;
    }
    get inputAction() {
      return this[inputAction$];
    }
    set inputAction(value) {
      super.inputAction = value;
    }
    get textCapitalization() {
      return this[textCapitalization$];
    }
    set textCapitalization(value) {
      super.textCapitalization = value;
    }
    get keyboardAppearance() {
      return this[keyboardAppearance$];
    }
    set keyboardAppearance(value) {
      super.keyboardAppearance = value;
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["inputType", this.inputType.toJson(), "obscureText", this.obscureText, "autocorrect", this.autocorrect, "actionLabel", this.actionLabel, "inputAction", dart.toString(this.inputAction), "textCapitalization", dart.toString(this.textCapitalization), "keyboardAppearance", dart.toString(this.keyboardAppearance)]);
    }
  };
  (src__services__text_input.TextInputConfiguration.new = function(opts) {
    let inputType = opts && 'inputType' in opts ? opts.inputType : src__services__text_input.TextInputType.text;
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
    let actionLabel = opts && 'actionLabel' in opts ? opts.actionLabel : null;
    let inputAction = opts && 'inputAction' in opts ? opts.inputAction : src__services__text_input.TextInputAction.done;
    let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : ui$.Brightness.light;
    let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : src__services__text_input.TextCapitalization.none;
    this[inputType$] = inputType;
    this[obscureText$] = obscureText;
    this[autocorrect$] = autocorrect;
    this[actionLabel$] = actionLabel;
    this[inputAction$] = inputAction;
    this[keyboardAppearance$] = keyboardAppearance;
    this[textCapitalization$] = textCapitalization;
    if (!(inputType != null)) dart.assertFailed();
    if (!(obscureText != null)) dart.assertFailed();
    if (!(autocorrect != null)) dart.assertFailed();
    if (!(keyboardAppearance != null)) dart.assertFailed();
    if (!(inputAction != null)) dart.assertFailed();
    if (!(textCapitalization != null)) dart.assertFailed();
  }).prototype = src__services__text_input.TextInputConfiguration.prototype;
  dart.addTypeTests(src__services__text_input.TextInputConfiguration);
  const inputType$ = Symbol("TextInputConfiguration.inputType");
  const obscureText$ = Symbol("TextInputConfiguration.obscureText");
  const autocorrect$ = Symbol("TextInputConfiguration.autocorrect");
  const actionLabel$ = Symbol("TextInputConfiguration.actionLabel");
  const inputAction$ = Symbol("TextInputConfiguration.inputAction");
  const textCapitalization$ = Symbol("TextInputConfiguration.textCapitalization");
  const keyboardAppearance$ = Symbol("TextInputConfiguration.keyboardAppearance");
  dart.setMethodSignature(src__services__text_input.TextInputConfiguration, () => ({
    __proto__: dart.getMethods(src__services__text_input.TextInputConfiguration.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__services__text_input.TextInputConfiguration, () => ({
    __proto__: dart.getFields(src__services__text_input.TextInputConfiguration.__proto__),
    inputType: dart.finalFieldType(src__services__text_input.TextInputType),
    obscureText: dart.finalFieldType(core.bool),
    autocorrect: dart.finalFieldType(core.bool),
    actionLabel: dart.finalFieldType(core.String),
    inputAction: dart.finalFieldType(src__services__text_input.TextInputAction),
    textCapitalization: dart.finalFieldType(src__services__text_input.TextCapitalization),
    keyboardAppearance: dart.finalFieldType(ui$.Brightness)
  }));
  src__services__text_input._toTextAffinity = function(affinity) {
    switch (affinity) {
      case "TextAffinity.downstream":
      {
        return ui$.TextAffinity.downstream;
      }
      case "TextAffinity.upstream":
      {
        return ui$.TextAffinity.upstream;
      }
    }
    return null;
  };
  src__services__text_input.FloatingCursorDragState = class FloatingCursorDragState extends core.Object {
    toString() {
      return {
        0: "FloatingCursorDragState.Start",
        1: "FloatingCursorDragState.Update",
        2: "FloatingCursorDragState.End"
      }[this.index];
    }
  };
  (src__services__text_input.FloatingCursorDragState.new = function(x) {
    this.index = x;
  }).prototype = src__services__text_input.FloatingCursorDragState.prototype;
  dart.addTypeTests(src__services__text_input.FloatingCursorDragState);
  dart.setFieldSignature(src__services__text_input.FloatingCursorDragState, () => ({
    __proto__: dart.getFields(src__services__text_input.FloatingCursorDragState.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__text_input.FloatingCursorDragState, ['toString']);
  src__services__text_input.FloatingCursorDragState.Start = dart.const(new src__services__text_input.FloatingCursorDragState.new(0));
  src__services__text_input.FloatingCursorDragState.Update = dart.const(new src__services__text_input.FloatingCursorDragState.new(1));
  src__services__text_input.FloatingCursorDragState.End = dart.const(new src__services__text_input.FloatingCursorDragState.new(2));
  src__services__text_input.FloatingCursorDragState.values = dart.constList([src__services__text_input.FloatingCursorDragState.Start, src__services__text_input.FloatingCursorDragState.Update, src__services__text_input.FloatingCursorDragState.End], src__services__text_input.FloatingCursorDragState);
  src__services__text_input.RawFloatingCursorPoint = class RawFloatingCursorPoint extends core.Object {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get state() {
      return this[state$];
    }
    set state(value) {
      super.state = value;
    }
  };
  (src__services__text_input.RawFloatingCursorPoint.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let state = opts && 'state' in opts ? opts.state : null;
    this[offset$] = offset;
    this[state$] = state;
    if (!(state != null)) dart.assertFailed();
    if (!(state === src__services__text_input.FloatingCursorDragState.Update ? offset != null : true)) dart.assertFailed();
  }).prototype = src__services__text_input.RawFloatingCursorPoint.prototype;
  dart.addTypeTests(src__services__text_input.RawFloatingCursorPoint);
  const offset$ = Symbol("RawFloatingCursorPoint.offset");
  const state$ = Symbol("RawFloatingCursorPoint.state");
  dart.setFieldSignature(src__services__text_input.RawFloatingCursorPoint, () => ({
    __proto__: dart.getFields(src__services__text_input.RawFloatingCursorPoint.__proto__),
    offset: dart.finalFieldType(ui$.Offset),
    state: dart.finalFieldType(src__services__text_input.FloatingCursorDragState)
  }));
  let const$16;
  src__services__text_input.TextEditingValue = class TextEditingValue extends core.Object {
    static fromJSON(encoded) {
      return new src__services__text_input.TextEditingValue.new({text: core.String._check(encoded[$_get]("text")), selection: new src__services__text_editing.TextSelection.new({baseOffset: core.int._check((() => {
            let l = encoded[$_get]("selectionBase");
            return l != null ? l : -1;
          })()), extentOffset: core.int._check((() => {
            let l = encoded[$_get]("selectionExtent");
            return l != null ? l : -1;
          })()), affinity: (() => {
            let l = src__services__text_input._toTextAffinity(core.String._check(encoded[$_get]("selectionAffinity")));
            return l != null ? l : ui$.TextAffinity.downstream;
          })(), isDirectional: core.bool._check((() => {
            let l = encoded[$_get]("selectionIsDirectional");
            return l != null ? l : false;
          })())}), composing: new src__services__text_editing.TextRange.new({start: core.int._check((() => {
            let l = encoded[$_get]("composingBase");
            return l != null ? l : -1;
          })()), end: core.int._check((() => {
            let l = encoded[$_get]("composingExtent");
            return l != null ? l : -1;
          })())})});
    }
    toJSON() {
      return new (IdentityMapOfString$dynamic()).from(["text", this.text, "selectionBase", this.selection.baseOffset, "selectionExtent", this.selection.extentOffset, "selectionAffinity", dart.toString(this.selection.affinity), "selectionIsDirectional", this.selection.isDirectional, "composingBase", this.composing.start, "composingExtent", this.composing.end]);
    }
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get selection() {
      return this[selection$];
    }
    set selection(value) {
      super.selection = value;
    }
    get composing() {
      return this[composing$];
    }
    set composing(value) {
      super.composing = value;
    }
    copyWith(opts) {
      let text = opts && 'text' in opts ? opts.text : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new src__services__text_input.TextEditingValue.new({text: text != null ? text : this.text, selection: selection != null ? selection : this.selection, composing: composing != null ? composing : this.composing});
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(text: ┤" + dart.str(this.text) + "├, selection: " + dart.str(this.selection) + ", composing: " + dart.str(this.composing) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!src__services__text_input.TextEditingValue.is(other)) return false;
      let typedOther = src__services__text_input.TextEditingValue._check(other);
      return typedOther.text == this.text && dart.equals(typedOther.selection, this.selection) && dart.equals(typedOther.composing, this.composing);
    }
    get hashCode() {
      return ui$.hashValues(dart.hashCode(this.text), dart.hashCode(this.selection), dart.hashCode(this.composing));
    }
  };
  (src__services__text_input.TextEditingValue.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : "";
    let selection = opts && 'selection' in opts ? opts.selection : const$16 || (const$16 = dart.const(new src__services__text_editing.TextSelection.collapsed({offset: -1})));
    let composing = opts && 'composing' in opts ? opts.composing : src__services__text_editing.TextRange.empty;
    this[text$0] = text;
    this[selection$] = selection;
    this[composing$] = composing;
    if (!(text != null)) dart.assertFailed();
    if (!(selection != null)) dart.assertFailed();
    if (!(composing != null)) dart.assertFailed();
  }).prototype = src__services__text_input.TextEditingValue.prototype;
  dart.addTypeTests(src__services__text_input.TextEditingValue);
  const text$0 = Symbol("TextEditingValue.text");
  const selection$ = Symbol("TextEditingValue.selection");
  const composing$ = Symbol("TextEditingValue.composing");
  dart.setMethodSignature(src__services__text_input.TextEditingValue, () => ({
    __proto__: dart.getMethods(src__services__text_input.TextEditingValue.__proto__),
    toJSON: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    copyWith: dart.fnType(src__services__text_input.TextEditingValue, [], {text: core.String, selection: src__services__text_editing.TextSelection, composing: src__services__text_editing.TextRange})
  }));
  dart.setFieldSignature(src__services__text_input.TextEditingValue, () => ({
    __proto__: dart.getFields(src__services__text_input.TextEditingValue.__proto__),
    text: dart.finalFieldType(core.String),
    selection: dart.finalFieldType(src__services__text_editing.TextSelection),
    composing: dart.finalFieldType(src__services__text_editing.TextRange)
  }));
  dart.defineExtensionMethods(src__services__text_input.TextEditingValue, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__services__text_input.TextEditingValue, ['hashCode']);
  dart.defineLazy(src__services__text_input.TextEditingValue, {
    /*src__services__text_input.TextEditingValue.empty*/get empty() {
      return dart.const(new src__services__text_input.TextEditingValue.new());
    }
  });
  src__services__text_input.TextSelectionDelegate = class TextSelectionDelegate extends core.Object {};
  (src__services__text_input.TextSelectionDelegate.new = function() {
  }).prototype = src__services__text_input.TextSelectionDelegate.prototype;
  dart.addTypeTests(src__services__text_input.TextSelectionDelegate);
  src__services__text_input.TextInputClient = class TextInputClient extends core.Object {};
  (src__services__text_input.TextInputClient.new = function() {
  }).prototype = src__services__text_input.TextInputClient.prototype;
  dart.addTypeTests(src__services__text_input.TextInputClient);
  const _client = dart.privateName(src__services__text_input, "_client");
  const _id = dart.privateName(src__services__text_input, "_id");
  const _currentConnection = dart.privateName(src__services__text_input, "_currentConnection");
  const _scheduleHide = dart.privateName(src__services__text_input, "_scheduleHide");
  src__services__text_input.TextInputConnection = class TextInputConnection extends core.Object {
    get attached() {
      return dart.equals(src__services__text_input._clientHandler[_currentConnection], this);
    }
    show() {
      if (!dart.test(this.attached)) dart.assertFailed();
      src__services__system_channels.SystemChannels.textInput.invokeMethod(dart.dynamic, "TextInput.show");
    }
    setEditingState(value) {
      if (!dart.test(this.attached)) dart.assertFailed();
      src__services__system_channels.SystemChannels.textInput.invokeMethod(dart.dynamic, "TextInput.setEditingState", value.toJSON());
    }
    close() {
      if (dart.test(this.attached)) {
        src__services__system_channels.SystemChannels.textInput.invokeMethod(dart.dynamic, "TextInput.clearClient");
        src__services__text_input._clientHandler[_currentConnection] = null;
        src__services__text_input._clientHandler[_scheduleHide]();
      }
      if (!!dart.test(this.attached)) dart.assertFailed();
    }
  };
  (src__services__text_input.TextInputConnection.__ = function(client) {
    this[_client] = client;
    if (!(client != null)) dart.assertFailed();
    let x = src__services__text_input.TextInputConnection._nextId;
    src__services__text_input.TextInputConnection._nextId = dart.notNull(x) + 1;
    this[_id] = x;
  }).prototype = src__services__text_input.TextInputConnection.prototype;
  dart.addTypeTests(src__services__text_input.TextInputConnection);
  dart.setMethodSignature(src__services__text_input.TextInputConnection, () => ({
    __proto__: dart.getMethods(src__services__text_input.TextInputConnection.__proto__),
    show: dart.fnType(dart.void, []),
    setEditingState: dart.fnType(dart.void, [src__services__text_input.TextEditingValue]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__services__text_input.TextInputConnection, () => ({
    __proto__: dart.getGetters(src__services__text_input.TextInputConnection.__proto__),
    attached: core.bool
  }));
  dart.setFieldSignature(src__services__text_input.TextInputConnection, () => ({
    __proto__: dart.getFields(src__services__text_input.TextInputConnection.__proto__),
    [_id]: dart.finalFieldType(core.int),
    [_client]: dart.finalFieldType(src__services__text_input.TextInputClient)
  }));
  dart.defineLazy(src__services__text_input.TextInputConnection, {
    /*src__services__text_input.TextInputConnection._nextId*/get _nextId() {
      return 1;
    },
    set _nextId(_) {}
  });
  src__services__text_input._toTextInputAction = function(action) {
    switch (action) {
      case "TextInputAction.none":
      {
        return src__services__text_input.TextInputAction.none;
      }
      case "TextInputAction.unspecified":
      {
        return src__services__text_input.TextInputAction.unspecified;
      }
      case "TextInputAction.go":
      {
        return src__services__text_input.TextInputAction.go;
      }
      case "TextInputAction.search":
      {
        return src__services__text_input.TextInputAction.search;
      }
      case "TextInputAction.send":
      {
        return src__services__text_input.TextInputAction.send;
      }
      case "TextInputAction.next":
      {
        return src__services__text_input.TextInputAction.next;
      }
      case "TextInputAction.previuos":
      {
        return src__services__text_input.TextInputAction.previous;
      }
      case "TextInputAction.continue_action":
      {
        return src__services__text_input.TextInputAction.continueAction;
      }
      case "TextInputAction.join":
      {
        return src__services__text_input.TextInputAction.join;
      }
      case "TextInputAction.route":
      {
        return src__services__text_input.TextInputAction.route;
      }
      case "TextInputAction.emergencyCall":
      {
        return src__services__text_input.TextInputAction.emergencyCall;
      }
      case "TextInputAction.done":
      {
        return src__services__text_input.TextInputAction.done;
      }
      case "TextInputAction.newline":
      {
        return src__services__text_input.TextInputAction.newline;
      }
    }
    dart.throw(new src__foundation__assertions.FlutterError.new("Unknown text input action: " + dart.str(action)));
  };
  src__services__text_input._toTextCursorAction = function(state) {
    switch (state) {
      case "FloatingCursorDragState.start":
      {
        return src__services__text_input.FloatingCursorDragState.Start;
      }
      case "FloatingCursorDragState.update":
      {
        return src__services__text_input.FloatingCursorDragState.Update;
      }
      case "FloatingCursorDragState.end":
      {
        return src__services__text_input.FloatingCursorDragState.End;
      }
    }
    dart.throw(new src__foundation__assertions.FlutterError.new("Unknown text cursor action: " + dart.str(state)));
  };
  let const$17;
  src__services__text_input._toTextPoint = function(state, encoded) {
    if (!(state != null)) dart.assertFailed("You must provide a state to set a new editing point.");
    if (!(encoded[$_get]("X") != null)) dart.assertFailed("You must provide a value for the horizontal location of the floating cursor.");
    if (!(encoded[$_get]("Y") != null)) dart.assertFailed("You must provide a value for the vertical location of the floating cursor.");
    let offset = state === src__services__text_input.FloatingCursorDragState.Update ? new ui$.Offset.new(core.double._check(encoded[$_get]("X")), core.double._check(encoded[$_get]("Y"))) : const$17 || (const$17 = dart.const(new ui$.Offset.new(0, 0)));
    return new src__services__text_input.RawFloatingCursorPoint.new({offset: offset, state: state});
  };
  const _hidePending = dart.privateName(src__services__text_input, "_hidePending");
  const _handleTextInputInvocation = dart.privateName(src__services__text_input, "_handleTextInputInvocation");
  src__services__text_input._TextInputClientHandler = class _TextInputClientHandler extends core.Object {
    [_handleTextInputInvocation](methodCall) {
      return async.async(dart.dynamic, (function* _handleTextInputInvocation() {
        if (this[_currentConnection] == null) return;
        let method = methodCall.method;
        let args = core.List._check(methodCall.arguments);
        let client = core.int._check(args[$_get](0));
        if (client != this[_currentConnection][_id]) return;
        switch (method) {
          case "TextInputClient.updateEditingState":
          {
            this[_currentConnection][_client].updateEditingValue(src__services__text_input.TextEditingValue.fromJSON(MapOfString$dynamic()._check(args[$_get](1))));
            break;
          }
          case "TextInputClient.performAction":
          {
            this[_currentConnection][_client].performAction(src__services__text_input._toTextInputAction(core.String._check(args[$_get](1))));
            break;
          }
          case "TextInputClient.updateFloatingCursor":
          {
            this[_currentConnection][_client].updateFloatingCursor(src__services__text_input._toTextPoint(src__services__text_input._toTextCursorAction(core.String._check(args[$_get](1))), MapOfString$dynamic()._check(args[$_get](2))));
            break;
          }
          default:
          {
            dart.throw(new src__services__message_codec.MissingPluginException.new());
          }
        }
      }).bind(this));
    }
    [_scheduleHide]() {
      if (dart.test(this[_hidePending])) return;
      this[_hidePending] = true;
      async.scheduleMicrotask(dart.fn(() => {
        this[_hidePending] = false;
        if (this[_currentConnection] == null) src__services__system_channels.SystemChannels.textInput.invokeMethod(dart.dynamic, "TextInput.hide");
      }, VoidToNull()));
    }
  };
  (src__services__text_input._TextInputClientHandler.new = function() {
    this[_currentConnection] = null;
    this[_hidePending] = false;
    src__services__system_channels.SystemChannels.textInput.setMethodCallHandler(dart.bind(this, _handleTextInputInvocation));
  }).prototype = src__services__text_input._TextInputClientHandler.prototype;
  dart.addTypeTests(src__services__text_input._TextInputClientHandler);
  dart.setMethodSignature(src__services__text_input._TextInputClientHandler, () => ({
    __proto__: dart.getMethods(src__services__text_input._TextInputClientHandler.__proto__),
    [_handleTextInputInvocation]: dart.fnType(async.Future, [src__services__message_codec.MethodCall]),
    [_scheduleHide]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__services__text_input._TextInputClientHandler, () => ({
    __proto__: dart.getFields(src__services__text_input._TextInputClientHandler.__proto__),
    [_currentConnection]: dart.fieldType(src__services__text_input.TextInputConnection),
    [_hidePending]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__services__text_input, {
    /*src__services__text_input._clientHandler*/get _clientHandler() {
      return new src__services__text_input._TextInputClientHandler.new();
    }
  });
  src__services__text_input.TextInput = class TextInput extends core.Object {
    static attach(client, configuration) {
      if (!(client != null)) dart.assertFailed();
      if (!(configuration != null)) dart.assertFailed();
      if (!dart.test(src__services__text_input.TextInput._debugEnsureInputActionWorksOnPlatform(configuration.inputAction))) dart.assertFailed();
      let connection = new src__services__text_input.TextInputConnection.__(client);
      src__services__text_input._clientHandler[_currentConnection] = connection;
      src__services__system_channels.SystemChannels.textInput.invokeMethod(dart.dynamic, "TextInput.setClient", [connection[_id], configuration.toJson()]);
      return connection;
    }
    static _debugEnsureInputActionWorksOnPlatform(inputAction) {
      if (!dart.test(dart.fn(() => {
        if (dart.test(io$.Platform.isIOS)) {
          if (!dart.test(src__services__text_input.TextInput._iOSSupportedInputActions[$contains](inputAction))) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on iOS.");
        } else if (dart.test(io$.Platform.isAndroid)) {
          if (!dart.test(src__services__text_input.TextInput._androidSupportedInputActions[$contains](inputAction))) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on Android.");
        }
        return true;
      }, VoidTobool())())) dart.assertFailed();
      return true;
    }
  };
  (src__services__text_input.TextInput.__ = function() {
  }).prototype = src__services__text_input.TextInput.prototype;
  dart.addTypeTests(src__services__text_input.TextInput);
  dart.defineLazy(src__services__text_input.TextInput, {
    /*src__services__text_input.TextInput._androidSupportedInputActions*/get _androidSupportedInputActions() {
      return dart.constList([src__services__text_input.TextInputAction.none, src__services__text_input.TextInputAction.unspecified, src__services__text_input.TextInputAction.done, src__services__text_input.TextInputAction.send, src__services__text_input.TextInputAction.go, src__services__text_input.TextInputAction.search, src__services__text_input.TextInputAction.next, src__services__text_input.TextInputAction.previous, src__services__text_input.TextInputAction.newline], src__services__text_input.TextInputAction);
    },
    /*src__services__text_input.TextInput._iOSSupportedInputActions*/get _iOSSupportedInputActions() {
      return dart.constList([src__services__text_input.TextInputAction.unspecified, src__services__text_input.TextInputAction.done, src__services__text_input.TextInputAction.send, src__services__text_input.TextInputAction.go, src__services__text_input.TextInputAction.search, src__services__text_input.TextInputAction.next, src__services__text_input.TextInputAction.newline, src__services__text_input.TextInputAction.continueAction, src__services__text_input.TextInputAction.join, src__services__text_input.TextInputAction.route, src__services__text_input.TextInputAction.emergencyCall], src__services__text_input.TextInputAction);
    }
  });
  src__services__text_formatter.TextInputFormatter = class TextInputFormatter extends core.Object {
    static withFunction(formatFunction) {
      return new src__services__text_formatter._SimpleTextInputFormatter.new(formatFunction);
    }
  };
  (src__services__text_formatter.TextInputFormatter.new = function() {
  }).prototype = src__services__text_formatter.TextInputFormatter.prototype;
  dart.addTypeTests(src__services__text_formatter.TextInputFormatter);
  src__services__text_formatter._SimpleTextInputFormatter = class _SimpleTextInputFormatter extends src__services__text_formatter.TextInputFormatter {
    formatEditUpdate(oldValue, newValue) {
      return this.formatFunction(oldValue, newValue);
    }
  };
  (src__services__text_formatter._SimpleTextInputFormatter.new = function(formatFunction) {
    this.formatFunction = formatFunction;
    if (!(formatFunction != null)) dart.assertFailed();
  }).prototype = src__services__text_formatter._SimpleTextInputFormatter.prototype;
  dart.addTypeTests(src__services__text_formatter._SimpleTextInputFormatter);
  dart.setMethodSignature(src__services__text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getMethods(src__services__text_formatter._SimpleTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(src__services__text_input.TextEditingValue, [src__services__text_input.TextEditingValue, src__services__text_input.TextEditingValue])
  }));
  dart.setFieldSignature(src__services__text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getFields(src__services__text_formatter._SimpleTextInputFormatter.__proto__),
    formatFunction: dart.finalFieldType(TextEditingValueAndTextEditingValueToTextEditingValue())
  }));
  src__services__text_formatter.BlacklistingTextInputFormatter = class BlacklistingTextInputFormatter extends src__services__text_formatter.TextInputFormatter {
    get blacklistedPattern() {
      return this[blacklistedPattern$];
    }
    set blacklistedPattern(value) {
      super.blacklistedPattern = value;
    }
    get replacementString() {
      return this[replacementString$];
    }
    set replacementString(value) {
      super.replacementString = value;
    }
    formatEditUpdate(oldValue, newValue) {
      return src__services__text_formatter._selectionAwareTextManipulation(newValue, dart.fn(substring => substring[$replaceAll](this.blacklistedPattern, this.replacementString), StringToString()));
    }
  };
  (src__services__text_formatter.BlacklistingTextInputFormatter.new = function(blacklistedPattern, opts) {
    let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
    this[blacklistedPattern$] = blacklistedPattern;
    this[replacementString$] = replacementString;
    if (!(blacklistedPattern != null)) dart.assertFailed();
  }).prototype = src__services__text_formatter.BlacklistingTextInputFormatter.prototype;
  dart.addTypeTests(src__services__text_formatter.BlacklistingTextInputFormatter);
  const blacklistedPattern$ = Symbol("BlacklistingTextInputFormatter.blacklistedPattern");
  const replacementString$ = Symbol("BlacklistingTextInputFormatter.replacementString");
  dart.setMethodSignature(src__services__text_formatter.BlacklistingTextInputFormatter, () => ({
    __proto__: dart.getMethods(src__services__text_formatter.BlacklistingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(src__services__text_input.TextEditingValue, [src__services__text_input.TextEditingValue, src__services__text_input.TextEditingValue])
  }));
  dart.setFieldSignature(src__services__text_formatter.BlacklistingTextInputFormatter, () => ({
    __proto__: dart.getFields(src__services__text_formatter.BlacklistingTextInputFormatter.__proto__),
    blacklistedPattern: dart.finalFieldType(core.Pattern),
    replacementString: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(src__services__text_formatter.BlacklistingTextInputFormatter, {
    /*src__services__text_formatter.BlacklistingTextInputFormatter.singleLineFormatter*/get singleLineFormatter() {
      return new src__services__text_formatter.BlacklistingTextInputFormatter.new(core.RegExp.new("\\n"));
    }
  });
  src__services__text_formatter.LengthLimitingTextInputFormatter = class LengthLimitingTextInputFormatter extends src__services__text_formatter.TextInputFormatter {
    get maxLength() {
      return this[maxLength$];
    }
    set maxLength(value) {
      super.maxLength = value;
    }
    formatEditUpdate(oldValue, newValue) {
      if (this.maxLength != null && dart.notNull(this.maxLength) > 0 && dart.notNull(newValue.text[$runes].length) > dart.notNull(this.maxLength)) {
        let newSelection = newValue.selection.copyWith({baseOffset: math.min(core.int, newValue.selection.start, this.maxLength), extentOffset: math.min(core.int, newValue.selection.end, this.maxLength)});
        let iterator = new core.RuneIterator.new(newValue.text);
        if (dart.test(iterator.moveNext())) for (let count = 0; count < dart.notNull(this.maxLength); ++count)
          if (!dart.test(iterator.moveNext())) break;
        let truncated = newValue.text[$substring](0, iterator.rawIndex);
        return new src__services__text_input.TextEditingValue.new({text: truncated, selection: newSelection, composing: src__services__text_editing.TextRange.empty});
      }
      return newValue;
    }
  };
  (src__services__text_formatter.LengthLimitingTextInputFormatter.new = function(maxLength) {
    this[maxLength$] = maxLength;
    if (!(maxLength == null || maxLength === -1 || dart.notNull(maxLength) > 0)) dart.assertFailed();
  }).prototype = src__services__text_formatter.LengthLimitingTextInputFormatter.prototype;
  dart.addTypeTests(src__services__text_formatter.LengthLimitingTextInputFormatter);
  const maxLength$ = Symbol("LengthLimitingTextInputFormatter.maxLength");
  dart.setMethodSignature(src__services__text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getMethods(src__services__text_formatter.LengthLimitingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(src__services__text_input.TextEditingValue, [src__services__text_input.TextEditingValue, src__services__text_input.TextEditingValue])
  }));
  dart.setFieldSignature(src__services__text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getFields(src__services__text_formatter.LengthLimitingTextInputFormatter.__proto__),
    maxLength: dart.finalFieldType(core.int)
  }));
  src__services__text_formatter.WhitelistingTextInputFormatter = class WhitelistingTextInputFormatter extends src__services__text_formatter.TextInputFormatter {
    get whitelistedPattern() {
      return this[whitelistedPattern$];
    }
    set whitelistedPattern(value) {
      super.whitelistedPattern = value;
    }
    formatEditUpdate(oldValue, newValue) {
      return src__services__text_formatter._selectionAwareTextManipulation(newValue, dart.fn(substring => IterableOfString()._check(this.whitelistedPattern[$allMatches](substring)[$map](core.String, dart.fn(match => match.group(0), MatchToString())))[$join](), StringToString()));
    }
  };
  (src__services__text_formatter.WhitelistingTextInputFormatter.new = function(whitelistedPattern) {
    this[whitelistedPattern$] = whitelistedPattern;
    if (!(whitelistedPattern != null)) dart.assertFailed();
  }).prototype = src__services__text_formatter.WhitelistingTextInputFormatter.prototype;
  dart.addTypeTests(src__services__text_formatter.WhitelistingTextInputFormatter);
  const whitelistedPattern$ = Symbol("WhitelistingTextInputFormatter.whitelistedPattern");
  dart.setMethodSignature(src__services__text_formatter.WhitelistingTextInputFormatter, () => ({
    __proto__: dart.getMethods(src__services__text_formatter.WhitelistingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(src__services__text_input.TextEditingValue, [src__services__text_input.TextEditingValue, src__services__text_input.TextEditingValue])
  }));
  dart.setFieldSignature(src__services__text_formatter.WhitelistingTextInputFormatter, () => ({
    __proto__: dart.getFields(src__services__text_formatter.WhitelistingTextInputFormatter.__proto__),
    whitelistedPattern: dart.finalFieldType(core.Pattern)
  }));
  dart.defineLazy(src__services__text_formatter.WhitelistingTextInputFormatter, {
    /*src__services__text_formatter.WhitelistingTextInputFormatter.digitsOnly*/get digitsOnly() {
      return new src__services__text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("\\d+"));
    }
  });
  let const$18;
  src__services__text_formatter._selectionAwareTextManipulation = function(value, substringManipulation) {
    let selectionStartIndex = value.selection.start;
    let selectionEndIndex = value.selection.end;
    let manipulatedText = null;
    let manipulatedSelection = null;
    if (dart.notNull(selectionStartIndex) < 0 || dart.notNull(selectionEndIndex) < 0) {
      manipulatedText = substringManipulation(value.text);
    } else {
      let beforeSelection = substringManipulation(value.text[$substring](0, selectionStartIndex));
      let inSelection = substringManipulation(value.text[$substring](selectionStartIndex, selectionEndIndex));
      let afterSelection = substringManipulation(value.text[$substring](selectionEndIndex));
      manipulatedText = dart.notNull(beforeSelection) + dart.notNull(inSelection) + dart.notNull(afterSelection);
      if (dart.notNull(value.selection.baseOffset) > dart.notNull(value.selection.extentOffset)) {
        manipulatedSelection = value.selection.copyWith({baseOffset: beforeSelection.length + inSelection.length, extentOffset: beforeSelection.length});
      } else {
        manipulatedSelection = value.selection.copyWith({baseOffset: beforeSelection.length, extentOffset: beforeSelection.length + inSelection.length});
      }
    }
    return new src__services__text_input.TextEditingValue.new({text: manipulatedText, selection: manipulatedSelection != null ? manipulatedSelection : const$18 || (const$18 = dart.const(new src__services__text_editing.TextSelection.collapsed({offset: -1}))), composing: manipulatedText == value.text ? value.composing : src__services__text_editing.TextRange.empty});
  };
  dart.trackLibraries("packages/flutter_web/src/services/clipboard.ddc", {
    "package:flutter_web/src/services/message_codecs.dart": src__services__message_codecs,
    "package:flutter_web/src/services/message_codec.dart": src__services__message_codec,
    "package:flutter_web/src/services/platform_channel.dart": src__services__platform_channel,
    "package:flutter_web/src/services/platform_messages.dart": src__services__platform_messages,
    "package:flutter_web/src/services/system_channels.dart": src__services__system_channels,
    "package:flutter_web/src/services/clipboard.dart": src__services__clipboard,
    "package:flutter_web/src/services/haptic_feedback.dart": src__services__haptic_feedback,
    "package:flutter_web/src/services/platform_views.dart": src__services__platform_views,
    "package:flutter_web/src/services/raw_keyboard_fuschia.dart": src__services__raw_keyboard_fuschia,
    "package:flutter_web/src/services/raw_keyboard_android.dart": src__services__raw_keyboard_android,
    "package:flutter_web/src/services/raw_keyboard.dart": src__services__raw_keyboard,
    "package:flutter_web/src/services/system_chrome.dart": src__services__system_chrome,
    "package:flutter_web/src/services/system_navigator.dart": src__services__system_navigator,
    "package:flutter_web/src/services/system_sound.dart": src__services__system_sound,
    "package:flutter_web/src/services/text_editing.dart": src__services__text_editing,
    "package:flutter_web/src/services/text_input.dart": src__services__text_input,
    "package:flutter_web/src/services/text_formatter.dart": src__services__text_formatter
  }, '{"version":3,"sourceRoot":"","sources":["message_codecs.dart","message_codec.dart","platform_channel.dart","platform_messages.dart","system_channels.dart","clipboard.dart","haptic_feedback.dart","platform_views.dart","raw_keyboard.dart","raw_keyboard_fuschia.dart","raw_keyboard_android.dart","system_chrome.dart","system_navigator.dart","system_sound.dart","text_editing.dart","text_input.dart","text_formatter.dart"],"names":[],"mappings":"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","file":"clipboard.ddc.js"}');
  // Exports:
  return {
    src__services__message_codecs: src__services__message_codecs,
    src__services__message_codec: src__services__message_codec,
    src__services__platform_channel: src__services__platform_channel,
    src__services__platform_messages: src__services__platform_messages,
    src__services__system_channels: src__services__system_channels,
    src__services__clipboard: src__services__clipboard,
    src__services__haptic_feedback: src__services__haptic_feedback,
    src__services__platform_views: src__services__platform_views,
    src__services__raw_keyboard_fuschia: src__services__raw_keyboard_fuschia,
    src__services__raw_keyboard_android: src__services__raw_keyboard_android,
    src__services__raw_keyboard: src__services__raw_keyboard,
    src__services__system_chrome: src__services__system_chrome,
    src__services__system_navigator: src__services__system_navigator,
    src__services__system_sound: src__services__system_sound,
    src__services__text_editing: src__services__text_editing,
    src__services__text_input: src__services__text_input,
    src__services__text_formatter: src__services__text_formatter
  };
});

//# sourceMappingURL=clipboard.ddc.js.map
