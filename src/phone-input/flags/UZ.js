/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagUZ(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="UZa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="UZb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#04AAC8" />
          <stop offset="100%" stopColor="#009AB6" />
        </linearGradient>
        <linearGradient id="UZc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#23C840" />
          <stop offset="100%" stopColor="#1EB639" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#UZa)" d="M0 0h21v15H0z" />
        <path fill="url(#UZb)" d="M0 0h21v5H0z" />
        <path fill="url(#UZc)" d="M0 10h21v5H0z" />
        <path
          fill="url(#UZa)"
          d="M0 5h21v5H0zM4.334 1.253a1.5 1.5 0 1 0 0 2.495 1.25 1.25 0 1 1 0-2.495zM5.5 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        />
      </g>
    </svg>
  );
}
