import React from 'react';
import { Text as NativeText } from 'react-native';

import styles from './styles';

export const Text = ({ children, style, ...rest }) => {
  return (
    <NativeText style={[styles.text, style]} {...rest}>
      {children}
    </NativeText>
  );
};

export default Text;
