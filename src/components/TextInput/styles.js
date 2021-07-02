import { StyleSheet } from 'react-native';

import colors from 'src/styles/theme';

export const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.textColor,
    borderRadius: 25,
    width: '100%',
    color: colors.darkGrey,
    marginBottom: 10,
  },
});

export default styles;
