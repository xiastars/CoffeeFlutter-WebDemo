// ignore_for_file: directives_ordering

import 'package:build_runner_core/build_runner_core.dart' as _i1;
import 'package:build_version/builder.dart' as _i2;
import 'package:built_value_generator/builder.dart' as _i3;
import 'package:source_gen/builder.dart' as _i4;
import 'package:build_modules/builders.dart' as _i5;
import 'package:build_web_compilers/builders.dart' as _i6;
import 'package:build_config/build_config.dart' as _i7;
import 'package:build/build.dart' as _i8;
import 'dart:isolate' as _i9;
import 'package:build_runner/build_runner.dart' as _i10;

final _builders = <_i1.BuilderApplication>[
  _i1.apply('build_version:build_version', [_i2.buildVersion],
      _i1.toDependentsOf('build_version'),
      hideOutput: false),
  _i1.apply('built_value_generator:built_value', [_i3.builtValue],
      _i1.toDependentsOf('built_value_generator'),
      hideOutput: true, appliesBuilders: ['source_gen:combining_builder']),
  _i1.apply('source_gen:combining_builder', [_i4.combiningBuilder],
      _i1.toNoneByDefault(),
      hideOutput: false, appliesBuilders: ['source_gen:part_cleanup']),
  _i1.apply('build_modules:module_library', [_i5.moduleLibraryBuilder],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_modules:vm',
      [
        _i5.metaModuleBuilderFactoryForPlatform('vm'),
        _i5.metaModuleCleanBuilderFactoryForPlatform('vm'),
        _i5.moduleBuilderFactoryForPlatform('vm')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_modules:dart2js',
      [
        _i5.metaModuleBuilderFactoryForPlatform('dart2js'),
        _i5.metaModuleCleanBuilderFactoryForPlatform('dart2js'),
        _i5.moduleBuilderFactoryForPlatform('dart2js')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_modules:dartdevc',
      [
        _i5.metaModuleBuilderFactoryForPlatform('dartdevc'),
        _i5.metaModuleCleanBuilderFactoryForPlatform('dartdevc'),
        _i5.moduleBuilderFactoryForPlatform('dartdevc'),
        _i5.unlinkedSummaryBuilderForPlatform('dartdevc'),
        _i5.linkedSummaryBuilderForPlatform('dartdevc')
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: ['build_modules:module_cleanup']),
  _i1.apply(
      'build_web_compilers:ddc', [_i6.devCompilerBuilder], _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: [
        'build_web_compilers:dart_source_cleanup',
        'build_modules:dartdevc',
        'build_modules:dart2js'
      ]),
  _i1.apply('build_web_compilers:entrypoint', [_i6.webEntrypointBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i7.InputSet(include: [
        'web/**',
        'test/**_test.dart',
        'example/**',
        'benchmark/**'
      ], exclude: [
        'test/**.node_test.dart',
        'test/**.vm_test.dart'
      ]),
      defaultOptions: _i8.BuilderOptions({
        'dart2js_args': ['--minify']
      }),
      defaultReleaseOptions: _i8.BuilderOptions({'compiler': 'dart2js'}),
      appliesBuilders: ['build_web_compilers:dart2js_archive_extractor']),
  _i1.applyPostProcess('build_modules:module_cleanup', _i5.moduleCleanup,
      defaultGenerateFor: const _i7.InputSet()),
  _i1.applyPostProcess(
      'build_web_compilers:dart_source_cleanup', _i6.dartSourceCleanup,
      defaultReleaseOptions: _i8.BuilderOptions({'enabled': true}),
      defaultGenerateFor: const _i7.InputSet()),
  _i1.applyPostProcess('build_web_compilers:dart2js_archive_extractor',
      _i6.dart2JsArchiveExtractor,
      defaultReleaseOptions: _i8.BuilderOptions({'filter_outputs': true}),
      defaultGenerateFor: const _i7.InputSet()),
  _i1.applyPostProcess('source_gen:part_cleanup', _i4.partCleanup,
      defaultGenerateFor: const _i7.InputSet())
];
main(List<String> args, [_i9.SendPort sendPort]) async {
  var result = await _i10.run(args, _builders);
  sendPort?.send(result);
}
