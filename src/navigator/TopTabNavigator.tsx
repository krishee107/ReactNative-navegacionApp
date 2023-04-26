import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';

LogBox.ignoreLogs(['Sending...']);

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
    const { top } = useSafeAreaInsets() // Para que no se solape con la barra de estado del iphone se usa el useSafeAreaInsets y se pone el top en el paddingTop del tab navigator

    return (
        <Tab.Navigator
            style={{ paddingTop: top }} // Para que no se solape con la barra de estado del iphone
            sceneContainerStyle={{
                backgroundColor: 'white' // Para poner el color de fondo de la app
            }}
            tabBarOptions={{
                pressColor: colores.primary, // Para poner el color de la animacion al presionar el tab
                showIcon: true, // Para mostrar el icono en el tab
                indicatorStyle: { // Para poner el color de la linea de abajo del tab  
                    backgroundColor: colores.primary, // Para poner el color de la linea de abajo del tab
                },
                style: {
                    shadowColor: 'transparent', // Para quitar la sombra del tab bar
                    elevation: 0 // Para quitar la sombra del tab bar
                }
            }}
            screenOptions={({ route }) => ({  //Para poner el icono en el tab
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) { //Pone el icono dependiendo de la ruta
                        case 'Chat':
                            iconName = 'Ch';
                            break;
                        case 'Contact':
                            iconName = 'Co';
                            break;
                        case 'Albums':
                            iconName = 'Al';
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>
                }
            })
            }
        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contact" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator >
    );
}