import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white' //Pone el fondo blanco en la app
            }}
            tabBarOptions={{
                activeTintColor: colores.primary, //Color del icono activo
                style: {
                    borderTopColor: 'red', //Color de la linea de abajo
                    borderTopWidth: 0, //Quita la linea de abajo
                }
            }}


        >
            <Tab.Screen name="Tab1Screen" component={Tab1Screen} options={{ title: 'Tab1' }} />
            <Tab.Screen name="Tab2Screen" component={Tab2Screen} options={{ title: 'Tab2' }} />
            <Tab.Screen name="Tab3Screen" component={Tab3Screen} options={{ title: 'Tab3' }} />
            <Tab.Screen name="StackNavigator" component={StackNavigator} options={{ title: 'Stack' }} />
        </Tab.Navigator>
    );
}