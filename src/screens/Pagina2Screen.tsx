import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React from 'react'

export const Pagina2Screen = () => {
    const navigator = useNavigation();

    return (
        <View>
            <Text>Pagina2Screen</Text>

            <Button
                title="Ir a la página 3"
                onPress={() => navigator.navigate('Pagina3Screen')}
            />
        </View>
    )
}