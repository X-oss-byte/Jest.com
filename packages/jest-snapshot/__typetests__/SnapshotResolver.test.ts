/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {expectError, expectType} from 'tsd-lite';
import type {SnapshotResolver} from 'jest-snapshot';

// SnapshotResolver

const snapshotResolver: SnapshotResolver = {
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    expectType<string>(testPath);
    expectType<string | undefined>(snapshotExtension);
    return 'snapshot/path';
  },

  resolveTestPath: (snapshotPath, snapshotExtension) => {
    expectType<string>(snapshotPath);
    expectType<string | undefined>(snapshotExtension);
    return 'test/path';
  },

  testPathForConsistencyCheck: 'test/path/example',
};

// resolveSnapshotPath

expectError<SnapshotResolver>({
  resolveSnapshotPath: (testPath: string, snapshotExtension: boolean) =>
    'snapshot/path',
  resolveTestPath: () => 'test/path',
  testPathForConsistencyCheck: 'test/path/example',
});

expectError<SnapshotResolver>({
  resolveSnapshotPath: (testPath: boolean) => 'snapshot/path',
  resolveTestPath: () => 'test/path',
  testPathForConsistencyCheck: 'test/path/example',
});

expectError<SnapshotResolver>({
  resolveSnapshotPath: () => true,
  resolveTestPath: () => 'test/path',
  testPathForConsistencyCheck: 'test/path/example',
});

expectError<SnapshotResolver>({
  resolveTestPath: () => 'test/path',
  testPathForConsistencyCheck: 'test/path/example',
});

// resolveTestPath

expectError<SnapshotResolver>({
  resolveSnapshotPath: () => 'snapshot/path',
  resolveTestPath: (snapshotPath: string, snapshotExtension: boolean) =>
    'test/path',
  testPathForConsistencyCheck: 'test/path/example',
});

expectError<SnapshotResolver>({
  resolveSnapshotPath: () => 'snapshot/path',
  resolveTestPath: (snapshotPath: boolean) => 'test/path',
  testPathForConsistencyCheck: 'test/path/example',
});

expectError<SnapshotResolver>({
  resolveSnapshotPath: () => 'snapshot/path',
  resolveTestPath: () => true,
  testPathForConsistencyCheck: 'test/path/example',
});

expectError<SnapshotResolver>({
  resolveSnapshotPath: () => 'snapshot/path',
  testPathForConsistencyCheck: 'test/path/example',
});

// testPathForConsistencyCheck

expectError<SnapshotResolver>({
  resolveSnapshotPath: () => 'snapshot/path',
  resolveTestPath: () => 'test/path',
  testPathForConsistencyCheck: true,
});

expectError<SnapshotResolver>({
  resolveSnapshotPath: () => 'snapshot/path',
  resolveTestPath: () => 'test/path',
});
