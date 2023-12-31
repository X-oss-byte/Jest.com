/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

const RegularModule = require('RegularModule');

RegularModule.setModuleStateValue('Side effect value');

exports.fn = () => '42';
