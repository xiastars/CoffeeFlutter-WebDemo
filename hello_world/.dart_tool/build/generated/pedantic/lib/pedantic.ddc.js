define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const pedantic = Object.create(dart.library);
  pedantic.unawaited = function(future) {
  };
  dart.trackLibraries("packages/pedantic/pedantic.ddc", {
    "package:pedantic/pedantic.dart": pedantic
  }, '{"version":3,"sourceRoot":"","sources":["pedantic.dart"],"names":[],"mappings":";;;;;;gCAwBe,MAAmB;EAAG","file":"pedantic.ddc.js"}');
  // Exports:
  return {
    pedantic: pedantic
  };
});

//# sourceMappingURL=pedantic.ddc.js.map
