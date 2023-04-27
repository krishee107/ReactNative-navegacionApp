//Un reducer es una función que recibe un estado y una acción, y devuelve un nuevo estado

import { AuthState } from "./AuthContext";


type AuthAction =
    | { type: 'signIn' }
    | { type: 'changeFavIcon', payload: string };


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    // Comprueba qué acción recibe
    switch (action.type) {
        // Si es signIn, devuelve el estado actual y isLoggedIn a true 
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet',
            }
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            }
        default:
            return state;
    }
    return state;
}