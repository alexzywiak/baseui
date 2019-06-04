/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import * as React from 'react';
import type {OverrideT} from '../helpers/overrides.js';
import {
  STATE_CHANGE_TYPE,
  ADJOINED,
  SIZE,
  ENHANCER_POSITION,
} from '../input/constants.js';

export type AdjoinedT = $Keys<typeof ADJOINED>;

export type SizeT = $Keys<typeof SIZE>;

export type StateTypeT = $Keys<typeof STATE_CHANGE_TYPE>;

export type InternalStateT = {
  /** Renders UI in 'focus' state */
  isFocused?: boolean,
};

export type StateT = {
  value?: string,
};

export type StateReducerT = (
  stateType: StateTypeT,
  nextState: StateT,
  currentState: StateT,
) => StateT;

export type SharedPropsT = {
  /** Renders UI in 'focus' state */
  $isFocused: boolean,
  /** Renders UI in 'disabled' state */
  $disabled: boolean,
  /** Renders UI in 'error' state */
  $error: boolean,
  /** Renders UI in 'positive' state */
  $positive: boolean,
  /** Defines styles for inputs that are grouped with other controls. */
  $adjoined: AdjoinedT,
  /** Renders UI in provided size. */
  $size: SizeT,
  /** Renders UI in 'required' state */
  $required: boolean,
  $position: $Keys<typeof ENHANCER_POSITION>,
};

export type PropsT = *;

export type BasePaymentCardComponentsT = {
  InputContainer?: OverrideT<*>,
  Input?: OverrideT<*>,
  Before?: OverrideT<*>,
  After?: OverrideT<*>,
  IconWrapper?: OverrideT<*>,
};

export type PaymentCardComponentsT = {
  ...BasePaymentCardComponentsT,
  Root?: OverrideT<*>,
};

export type BasePaymentCardPropsT<T> = {
  /** Sets aria-label attribute. */
  'aria-label': ?string,
  /** Sets aria-labelledby attribute. */
  'aria-labelledby': ?string,
  /** Sets aria-describedby attribute. */
  'aria-describedby': ?string,
  /** Defines styles for inputs that are grouped with other controls. */
  adjoined: AdjoinedT,
  /** Determines if browser should provide value suggestions. */
  autoComplete: string,
  /** If true the input will be focused on the first mount. */
  autoFocus: boolean,
  /** Renders component in 'disabled' state. */
  disabled: boolean,
  /** Renders component in 'error' state. */
  error: boolean,
  /** Renders component in 'positive' state. */
  positive?: boolean,
  /** Id attribute value to be added to the input element and as a label's for attribute value. */
  id: string,
  'data-baseweb'?: string,
  /** A ref to access an input element. */
  inputRef: {current: HTMLInputElement | null},
  name: string,
  onBlur: (e: SyntheticFocusEvent<T>) => mixed,
  onChange?: (e: SyntheticInputEvent<T>) => mixed,
  onKeyDown?: (e: SyntheticKeyboardEvent<T>) => mixed,
  onKeyPress?: (e: SyntheticKeyboardEvent<T>) => mixed,
  onKeyUp?: (e: SyntheticKeyboardEvent<T>) => mixed,
  onFocus: (e: SyntheticFocusEvent<T>) => mixed,
  overrides: BasePaymentCardComponentsT,
  placeholder: string,
  /** Renders component in 'required' state. */
  required: boolean,
  /** Renders component in provided size. */
  size: SizeT,
  /** Input type attribute. */
  type: string,
  /** Input value attribute. */
  value?: string,
  rows?: number,
};

export type PaymentCardPropsT = {
  ...BasePaymentCardPropsT<HTMLInputElement>,
  overrides: PaymentCardComponentsT,
  /** An input helper rendered before and attached to the input field. */
  startEnhancer: ?(React.Node | ((props: PropsT) => React.Node)),
  /** An input helper rendered after and attached to the input field. */
  endEnhancer: ?(React.Node | ((props: PropsT) => React.Node)),
  /** Handler for the `focus` event. */
  onFocus: (e: SyntheticFocusEvent<HTMLInputElement>) => mixed,
  /** Handler for the `blur` event. */
  onBlur: (e: SyntheticFocusEvent<HTMLInputElement>) => mixed,
};

export type StatefulContainerPropsT<T> = {
  children: (props: PropsT) => React.Node,
  /** Initial state of an uncontrolled input component. */
  initialState?: StateT,
  /** A state change handler. Used to override default state transitions. */
  stateReducer: StateReducerT,
  onChange: (e: SyntheticInputEvent<T>) => mixed,
};

type OmitPropsT = {
  overrides: PaymentCardComponentsT,
  children: ?(props: *) => React.Node,
};

type FullStPropsT = PaymentCardPropsT &
  StatefulContainerPropsT<HTMLInputElement>;

type StPaymentCardPropsDiffT = $Diff<FullStPropsT, OmitPropsT>;

export type StatefulPaymentCardPropsT = {
  ...StPaymentCardPropsDiffT,
  overrides?: PaymentCardComponentsT,
};
