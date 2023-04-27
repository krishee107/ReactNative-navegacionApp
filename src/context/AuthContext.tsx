import React, { createContext, useReducer } from 'react';
import { authReducer } from './AuthReducer';

// Definir cómo luce o qué información tendré aquí
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

// Lo usaremos para decirle a React cómo luce y qué expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavIcon: (iconName: string) => void;
    logout: () => void;
    changeUsername: (username: string) => void;
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {
    //authState es el estado actual
    //dispatch es la función que me permite disparar acciones hacia el reducer
    //Reducer genera un nuevo estado
    //AuthInitialState es el estado inicial
    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    // la funcion de signIn es la que se encarga de disparar la acción hacia el reducer para que genere un nuevo estado y lo retorne a authState 
    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const changeFavIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }
    const changeUsername = (username: string) => {
        dispatch({ type: 'changeUsername', payload: username });
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavIcon,
            logout,
            changeUsername,
        }}>
            {/* Todo lo que esté dentro del provider, podrá tener acceso al estado */}
            {children}
        </AuthContext.Provider>
    )
}