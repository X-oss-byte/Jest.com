/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import runJest from '../runJest';

describe('Fake promises', () => {
  it('should be possible to resolve with fake timers using immediates', () => {
    const result = runJest('fake-promises/immediate');
    expect(result.exitCode).toBe(0);
  });

  it('should be possible to resolve with fake timers using asap', () => {
    const result = runJest('fake-promises/asap');
    expect(result.exitCode).toBe(0);
  });
});
