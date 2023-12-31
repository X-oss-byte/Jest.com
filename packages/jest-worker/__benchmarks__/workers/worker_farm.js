/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const pi = require('./pi');

module.exports.loadTest = function (callback) {
  callback(null, pi());
};

module.exports.empty = function (callback) {
  // Do nothing.
  callback();
};
