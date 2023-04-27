import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { Tabs } from './src/navigator/Tabs';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (

    <NavigationContainer>
      <AppState>
        {/*<StackNavigator />*/}
        {/*<Tabs />*/}
        <MenuLateralBasico />
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}