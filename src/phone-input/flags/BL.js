/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagBL(props: {width: string}) {
  const {width, ...restProps} = props;
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 21 15"
      width={width}
      {...restProps}
    >
      <defs>
        <linearGradient id="BLa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="BLc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#216CD3" />
          <stop offset="100%" stopColor="#1557B2" />
        </linearGradient>
        <path
          id="BLb"
          d="M.5 0h7v4.491c0 .557-.336 1.297-.76 1.66L5.147 7.518c-.633.542-1.662.54-2.292 0L1.259 6.15C.84 5.791.5 5.05.5 4.491V0z"
        />
        <linearGradient id="BLd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F7E14B" />
          <stop offset="100%" stopColor="#F7DF3E" />
        </linearGradient>
        <linearGradient id="BLf" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E12539" />
          <stop offset="100%" stopColor="#CA192C" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#BLa)" d="M0 0h21v15H0z" />
        <g transform="translate(6.5 5)">
          <mask id="BLe" fill="#fff">
            <use xlinkHref="#BLb" />
          </mask>
          <use fill="url(#BLc)" xlinkHref="#BLb" />
          <path
            fill="url(#BLd)"
            d="M2 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2.5 6.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM4 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm1.5-.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
            mask="url(#BLe)"
          />
          <path fill="url(#BLf)" d="M.5 3h7v2h-7z" mask="url(#BLe)" />
          <circle cx="4" cy="4" r="1" fill="#FFF" mask="url(#BLe)" />
        </g>
        <path
          fill="url(#BLd)"
          d="M6.5 3.5s2-.5 4-.5 4 .5 4 .5l-.5 2S12.25 5 10.5 5 7 5.5 7 5.5l-.5-2z"
        />
        <path
          fill="#5E5216"
          d="M10.5 4.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-4 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"
        />
      </g>
    </svg>
  );
}
