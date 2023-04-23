import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export const StackNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            // initialRouteName='Pagina2Screen' --> Definir página inicial
            screenOptions={{
                //headerShown: false, --> oculta el header del menú
                headerStyle: {
                    elevation: 0, //Le quita el '3d' a la app y hace desaparecer la sombra
                    shadowColor: 'transparent' //iOS no respeta la propiedad anterior y se tiene que poner como transparente
                },
                cardStyle: {
                    backgroundColor: 'white' //Color de fondo de la app
                }
            }}
        >
            <Stack.Screen name="Pagina1Screen" options={{ title: "Página 1" }} component={Pagina1Screen} />
            <Stack.Screen name="Pagina2Screen" options={{ title: "Página 2" }} component={Pagina2Screen} />
            <Stack.Screen name="Pagina3Screen" options={{ title: "Página 3" }} component={Pagina3Screen} />
            <Stack.Screen name="PersonaScreen" options={{ title: "PersonaScreen" }} component={PersonaScreen} />
        </Stack.Navigator>
    );
}