/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagMD(props: {width: string}) {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 21 15"
      width={props.width}
    >
      <defs>
        <linearGradient id="MDa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="MDb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EB1C43" />
          <stop offset="100%" stopColor="#CA1134" />
        </linearGradient>
        <linearGradient id="MDc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#115BCB" />
          <stop offset="100%" stopColor="#094AAC" />
        </linearGradient>
        <linearGradient id="MDf" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD953" />
          <stop offset="100%" stopColor="#FFD130" />
        </linearGradient>
        <path id="MDe" d="M7 0h7v15H7z" />
        <filter
          id="MDd"
          width="121.4%"
          height="110%"
          x="-10.7%"
          y="-5%"
          filterUnits="objectBoundingBox"
        >
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius=".25"
            result="shadowSpreadOuter1"
          />
          <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feColorMatrix
            in="shadowOffsetOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#MDa)" d="M0 0h21v15H0z" />
        <path fill="url(#MDb)" d="M10 0h11v15H10z" />
        <path fill="url(#MDc)" d="M0 0h7v15H0z" />
        <use fill="#000" filter="url(#MDd)" xlinkHref="#MDe" />
        <use fill="url(#MDf)" xlinkHref="#MDe" />
        <path
          fill="#AF7F59"
          d="M9 6h1l.5-1.5L11 6h1v3l-1.5 1L9 9V6zm1 1v1.5h1V7h-1z"
        />
      </g>
    </svg>
  );
}
