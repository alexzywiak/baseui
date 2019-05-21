/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagTL(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="TLa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="TLb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF323E" />
          <stop offset="100%" stopColor="#FD0D1B" />
        </linearGradient>
        <linearGradient id="TLc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFCC51" />
          <stop offset="100%" stopColor="#FFC63C" />
        </linearGradient>
        <linearGradient id="TLd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#TLa)" d="M0 0h21v15H0z" />
        <path fill="url(#TLb)" d="M0 0h21v15H0z" />
        <path fill="url(#TLc)" d="M0 0l13 7.5L0 15z" />
        <path fill="url(#TLd)" d="M0 0l9 7.5L0 15z" />
        <path
          fill="url(#TLa)"
          d="M3.92 8.262L2.62 9.19l.48-1.524-1.284-.951L3.413 6.7l.507-1.515.508 1.515 1.598.015-1.284.95.48 1.525z"
          transform="rotate(-30 3.92 7.187)"
        />
      </g>
    </svg>
  );
}