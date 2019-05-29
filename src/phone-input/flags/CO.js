/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagCO(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="COa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="COb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0748AE" />
          <stop offset="100%" stopColor="#003993" />
        </linearGradient>
        <linearGradient id="COc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DE2035" />
          <stop offset="100%" stopColor="#CE1126" />
        </linearGradient>
        <linearGradient id="COd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD935" />
          <stop offset="100%" stopColor="#FDD216" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#COa)" d="M0 0h21v15H0z" />
        <path fill="url(#COb)" d="M0 7h21v4H0z" />
        <path fill="url(#COc)" d="M0 11h21v4H0z" />
        <path fill="url(#COd)" d="M0 0h21v7H0z" />
      </g>
    </svg>
  );
}
