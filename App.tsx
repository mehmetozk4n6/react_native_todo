/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Todos from './pages/todos';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Todos />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
