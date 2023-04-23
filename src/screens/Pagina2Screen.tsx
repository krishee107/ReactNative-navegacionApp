import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {
    const navigator = useNavigation();
    useEffect(() => {
        navigator.setOptions({
            //title: 'Titulo de la pagina' --> Sobreescribe el titulo enviado en nuestro stacknavigator
            headerBackTitle: 'Atrás' // --> Texto del botón "volver" en iOS, si se deja vació sale volver/back según el idioma
        })
    }, [])


    return (
        <View>
            <Text style={styles.title}>Pagina2Screen</Text>

            <Button
                title="Ir a la página 3"
                onPress={() => navigator.navigate('Pagina3Screen')}
            />
        </View>
    )
}