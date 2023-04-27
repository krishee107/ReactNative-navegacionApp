import React, { createContext } from 'react';

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
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    return (
        <AuthContext.Provider value={{
            authState: authInitialState,
            signIn: () => { }
        }}>
            {/* Todo lo que esté dentro del provider, podrá tener acceso al estado */}
            {children}
        </AuthContext.Provider>
    )
}