import { StyleSheet, Platform } from 'react-native';

import colors from 'src/styles/theme';

export const styles = StyleSheet.create({
  text: {
    color: colors.textColor,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});

export default styles;
