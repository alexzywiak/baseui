/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagSN(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="SNa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="SNb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F13642" />
          <stop offset="100%" stopColor="#E1202C" />
        </linearGradient>
        <linearGradient id="SNc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#17A052" />
          <stop offset="100%" stopColor="#108442" />
        </linearGradient>
        <linearGradient id="SNd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF166" />
          <stop offset="100%" stopColor="#FDEE54" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#SNa)" d="M0 0h21v15H0z" />
        <path fill="url(#SNb)" d="M10 0h11v15H10z" />
        <path fill="url(#SNc)" d="M0 0h7v15H0z" />
        <path fill="url(#SNd)" d="M7 0h7v15H7z" />
        <path
          fill="url(#SNc)"
          d="M10.5 8.525l-1.47.998.495-1.706-1.403-1.09 1.776-.056L10.5 5l.602 1.67 1.776.057-1.403 1.09.494 1.706z"
        />
      </g>
    </svg>
  );
}
