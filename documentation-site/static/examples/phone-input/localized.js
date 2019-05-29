import React from 'react';
import {StatefulPhoneInput} from 'baseui/phone-input';

export default () => (
  <StatefulPhoneInput mapIsoToLabel={iso => iso.toUpperCase()} />
);
