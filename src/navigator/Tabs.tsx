import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

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
                },
                labelStyle: {
                    fontSize: 15
                }
            }}
            screenOptions={({ route }) => ({  //Para poner el icono en el tab
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: string = '';
                    switch (route.name) { //Pone el icono dependiendo de la ruta
                        case 'Tab1Screen':
                            iconName = 'T1';
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2';
                            break;
                        case 'Tab3Screen':
                            iconName = 'T3';
                            break;
                        case 'StackNavigator':
                            iconName = 'ST';
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>
                }
            })
            }

        >
            {/*            
            // Tab que pone el icono y el texto de forma larga
            <Tab.Screen
                name="Tab1Screen"
                component={Tab1Screen}
                options={{
                    title: 'Tab1',
                    tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text>
                }}
            />*/}
            <Tab.Screen name="Tab1Screen" component={Tab1Screen} options={{ title: 'Tab1' }} />
            <Tab.Screen name="Tab2Screen" component={Tab2Screen} options={{ title: 'Tab2' }} />
            <Tab.Screen name="Tab3Screen" component={Tab3Screen} options={{ title: 'Tab3' }} />
            <Tab.Screen name="StackNavigator" component={StackNavigator} options={{ title: 'Stack' }} />
        </Tab.Navigator >
    );
}