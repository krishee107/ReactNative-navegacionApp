import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const ContactsScreen = () => {
    const { signIn, authState } = useContext(AuthContext);
    const { isLoggedIn } = authState;

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>ContactsScreen</Text>
            {isLoggedIn ?
                <Text>{JSON.stringify(authState, null, 4)} </Text>
                :
                <Button
                    title="Sign In"
                    onPress={signIn}
                />
            }
        </View>
    )
}
