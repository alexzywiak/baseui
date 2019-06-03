/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagBJ(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg viewBox="0 0 21 15" width={width} {...restProps}>
      <defs>
        <linearGradient id="BJa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="BJb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F12641" />
          <stop offset="100%" stopColor="#E71834" />
        </linearGradient>
        <linearGradient id="BJc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD648" />
          <stop offset="100%" stopColor="#FCD036" />
        </linearGradient>
        <linearGradient id="BJd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#17A668" />
          <stop offset="100%" stopColor="#118653" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#BJa)" d="M0 0h21v15H0z" />
        <path fill="url(#BJb)" d="M0 7h21v8H0z" />
        <path fill="url(#BJc)" d="M0 0h21v7H0z" />
        <path fill="url(#BJd)" d="M0 0h8v15H0z" />
      </g>
    </svg>
  );
}
