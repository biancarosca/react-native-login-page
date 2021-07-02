import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';

import styles from './styles';

export const TextInput = ({ style, ...rest }) => {
  return <NativeTextInput style={[styles.input, style]} {...rest} />;
};

export default TextInput;
