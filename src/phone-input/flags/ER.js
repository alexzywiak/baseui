/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagER(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="ERa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="ERb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#29C53F" />
          <stop offset="100%" stopColor="#21AC35" />
        </linearGradient>
        <linearGradient id="ERc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#579DED" />
          <stop offset="100%" stopColor="#458BDB" />
        </linearGradient>
        <linearGradient id="ERd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F42D56" />
          <stop offset="100%" stopColor="#E9103D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ERa)" d="M0 0h21v15H0z" />
        <path fill="url(#ERb)" d="M0 0h21v7.5H0z" />
        <path fill="url(#ERc)" d="M0 7.5h21v8H0z" />
        <path fill="url(#ERd)" d="M0 15l21-7.5L0 0z" />
        <path
          fill="#FFC63C"
          fillRule="nonzero"
          d="M6.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"
        />
        <circle cx="6" cy="6.5" r="1" fill="#FFC63C" />
        <circle cx="7" cy="7" r="1" fill="#FFC63C" />
        <circle cx="6.5" cy="6" r="1" fill="#FFC63C" />
        <circle cx="6" cy="7.5" r="1" fill="#FFC63C" />
        <circle cx="7" cy="8" r="1" fill="#FFC63C" />
        <circle cx="6" cy="8.5" r="1" fill="#FFC63C" />
        <circle cx="7" cy="9" r="1" fill="#FFC63C" />
      </g>
    </svg>
  );
}
