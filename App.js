import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import AppStack from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppStack />
    </>
  );
}
