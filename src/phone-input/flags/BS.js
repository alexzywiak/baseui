/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagBS(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="BSa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="BSb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#22B7D5" />
          <stop offset="100%" stopColor="#1CACC8" />
        </linearGradient>
        <linearGradient id="BSc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FCE569" />
          <stop offset="100%" stopColor="#FADF52" />
        </linearGradient>
        <linearGradient id="BSd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#BSa)" d="M0 0h21v15H0z" />
        <path fill="url(#BSb)" d="M0 10h21v5H0zM0 0h21v5H0z" />
        <path fill="url(#BSc)" d="M0 5h21v5H0z" />
        <path fill="url(#BSd)" d="M0 0l10 7.5L0 15z" />
      </g>
    </svg>
  );
}
