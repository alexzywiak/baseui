/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagBT(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="BTa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="BTb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF5F38" />
          <stop offset="100%" stopColor="#FD5026" />
        </linearGradient>
        <linearGradient id="BTc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD951" />
          <stop offset="100%" stopColor="#FFD43B" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#BTa)" d="M0 0h21v15H0z" />
        <path fill="url(#BTb)" d="M0 0h21v15H0z" />
        <path fill="url(#BTc)" d="M0 15L21 0H0z" />
      </g>
    </svg>
  );
}
