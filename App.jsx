import {View, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {THEME} from './src/constants';
import AppContainer from './src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar styles="light" backgroundColor={THEME.colors.primary} />
        <AppContainer />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.white,
  },
});

export default App;
