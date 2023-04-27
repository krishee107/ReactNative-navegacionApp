import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {
    const { authState, logout } = useContext(AuthContext);
    const { isLoggedIn } = authState;

    return (
        <View>
            <Text>AlbumsScreen</Text>
            {isLoggedIn ?
                <Button onPress={logout} title="Logout" />
                :
                <Text> No tienes sesión iniciada</Text>
            }

        </View>
    )
}
