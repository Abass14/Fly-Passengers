import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BottomSheet from './src/components/bottomSheet';
import Container from './src/components/container';
import Input from './src/components/input';
import PassengerCard from './src/components/passengerCard';
import PopUp from './src/components/popUp';
import GlobalProvider from './src/context/provider/Provider';
import HomeScreen from './src/screens/homeScreen';

export default function App() {
  return (
    <GlobalProvider>
      <HomeScreen />
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
