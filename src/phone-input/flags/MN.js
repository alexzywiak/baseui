/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagMN(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="MNa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="MNb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#146BBC" />
          <stop offset="100%" stopColor="#0B5396" />
        </linearGradient>
        <linearGradient id="MNc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E43642" />
          <stop offset="100%" stopColor="#C32A34" />
        </linearGradient>
        <linearGradient id="MNd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F8D246" />
          <stop offset="100%" stopColor="#F9CE2F" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#MNa)" d="M0 0h21v15H0z" />
        <path fill="url(#MNb)" d="M7 0h7v15H7z" />
        <path fill="url(#MNc)" d="M0 0h7v15H0zM14 0h7v15h-7z" />
        <path
          fill="url(#MNd)"
          d="M4 9h1v3H4V9zM2 9h1v3H2V9zm1 2h1l-.5 1-.5-1zm0-2h1l-.5 1L3 9zm0-1l.5-.5.5.5H3zm.5 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        />
      </g>
    </svg>
  );
}