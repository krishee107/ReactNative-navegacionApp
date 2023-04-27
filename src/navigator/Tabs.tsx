import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text, Platform } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => { //Para android se usa el material bottom tab navigator que es el que tiene animaciones y colores mas bonitos y se usa el sceneAnimationEnabled={true} para que se vea la animacion al cambiar de tab y el barStyle para poner el color del tab bar y el screenOptions para poner el icono en el tab
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colores.primary
            }}
            screenOptions={({ route }) => ({  //Para poner el icono en el tab
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) { //Pone el icono dependiendo de la ruta
                        case 'Tab1Screen':
                            iconName = 'bandage-outline';
                            break;
                        case 'Tab2Screen':
                            iconName = 'basketball-outline';
                            break;
                        case 'Tab3Screen':
                            iconName = 'beaker-outline';
                            break;
                        case 'StackNavigator':
                            iconName = 'book-outline';
                            break;
                    }
                    return <Icon size={20} color="#900" iconName={iconName} />
                }
            })
            }
        >
            <BottomTabAndroid.Screen name="Tab1Screen" component={Tab1Screen} options={{ title: 'Tab1' }} />
            <BottomTabAndroid.Screen name="Tab2Screen" component={TopTabNavigator} options={{ title: 'Tab2' }} />
            <BottomTabAndroid.Screen name="Tab3Screen" component={Tab3Screen} options={{ title: 'Tab3' }} />
            <BottomTabAndroid.Screen name="StackNavigator" component={StackNavigator} options={{ title: 'Stack' }} />
        </BottomTabAndroid.Navigator>
    );
}

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => { // Para ios se usa el bottom tab navigator y se usa el tabBarOptions para poner el color del tab bar y el screenOptions para poner el icono en el tab y el labelStyle para poner el tamaño del texto del tab bar y el sceneContainerStyle para poner el color de fondo de la app
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white' //Pone el fondo blanco en la app
            }}
            tabBarOptions={{
                activeTintColor: colores.primary, //Color del icono activo
                style: {
                    borderTopColor: 'red', //Color de la linea de abajo
                    borderTopWidth: 0, //Quita la linea de abajo
                    elevation: 0 //Quita la sombra
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
            <BottomTabIOS.Screen name="Tab1Screen" component={Tab1Screen} options={{ title: 'Tab1' }} />
            <BottomTabIOS.Screen name="Tab2Screen" component={Tab2Screen} options={{ title: 'Tab2' }} />
            <BottomTabIOS.Screen name="Tab3Screen" component={Tab3Screen} options={{ title: 'Tab3' }} />
            <BottomTabIOS.Screen name="StackNavigator" component={StackNavigator} options={{ title: 'Stack' }} />
        </BottomTabIOS.Navigator >
    );
}

