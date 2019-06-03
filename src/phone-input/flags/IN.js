/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagIN(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="INa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="INb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFA44A" />
          <stop offset="100%" stopColor="#FF9934" />
        </linearGradient>
        <linearGradient id="INc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1A9F0B" />
          <stop offset="100%" stopColor="#138806" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#INa)" d="M0 0h21v15H0z" />
        <path fill="url(#INb)" d="M0 0h21v5H0z" />
        <path fill="url(#INc)" d="M0 10h21v5H0z" />
        <path fill="url(#INa)" d="M0 5h21v5H0z" />
        <circle cx="10.5" cy="7.5" r="1.5" fill="#181A93" fillOpacity=".15" />
        <path
          fill="#181A93"
          fillRule="nonzero"
          d="M10.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
        />
        <circle cx="10.5" cy="7.5" r="1" fill="#181A93" />
      </g>
    </svg>
  );
}
