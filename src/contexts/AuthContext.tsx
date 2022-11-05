import { createContext, ReactNode } from "react";

interface IUserProps {
    name: string;
    avatarUrl: string;
}

interface AuthProviderProps {
    children: ReactNode;
}

export interface IAuthContextDataProps {
    user: IUserProps;
    signIn: () => Promise<void>
}

export const AuthContext = createContext({} as IAuthContextDataProps)

export function AuthContextProvider({ children }: AuthProviderProps) {

    const signIn = async () => {
        console.log('Vamos logar!')
    }

    const user = {
        name: 'Samer',
        avatarUrl: 'https://github.com/samervalente.png'
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}