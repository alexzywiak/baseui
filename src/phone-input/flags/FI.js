/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagFI(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="FIa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="FIb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0848A6" />
          <stop offset="100%" stopColor="#003480" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#FIa)" d="M0 0h21v15H0z" />
        <path fill="url(#FIb)" d="M0 9h6v6h3V9h12V6H9V0H6v6H0z" />
      </g>
    </svg>
  );
}
