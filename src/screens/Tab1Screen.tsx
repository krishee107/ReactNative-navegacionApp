import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';


export const Tab1Screen = () => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Iconos </Text>
            <Icon name="airplane-outline" size={80} color="#900" />
            <Icon name="attach-outline" size={80} color="#900" />
            <Icon name="bonfire-outline" size={80} color="#900" />
            <Icon name="calculator-outline" size={80} color="#900" />
            <Icon name="chatbubble-ellipses-outline" size={80} color="#900" />
        </View>
    )
}
