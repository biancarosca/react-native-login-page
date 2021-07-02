import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Screen, TextInput } from 'src/components';

export default function App() {
  return (
    <Screen style={styles.container}>
      <View style={styles.login}>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    width: '100%',
    paddingHorizontal: 10,
  },
});
