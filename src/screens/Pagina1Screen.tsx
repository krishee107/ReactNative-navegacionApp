import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends NativeStackScreenProps<any, any> {

}

export const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>

            <Button
                title="Ir a la página 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />


            <Text>Navegar con argumentos</Text>
            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856d6'
                    }}
                >
                    <Text style={styles.botonGrandeText}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'Maria'
                    })}
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#ff9427'
                    }}
                >
                    <Text style={styles.botonGrandeText}>Maria</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}