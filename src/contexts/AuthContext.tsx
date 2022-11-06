import { createContext, ReactNode, useState, useEffect } from "react";
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from 'expo-auth-session'
import * as WebBroswer from 'expo-web-browser'

WebBroswer.maybeCompleteAuthSession();

interface IUserProps {
    name: string;
    avatarUrl: string;
}

interface AuthProviderProps {
    children: ReactNode;
}

export interface IAuthContextDataProps {
    isUserLoading: boolean;
    userData: IUserProps;
    signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContextDataProps)

export function AuthContextProvider({ children }: AuthProviderProps) {
    const [userData, setUserData] = useState<IUserProps>({} as IUserProps)
    const [isUserLoading, setIsUserLoading] = useState(false)
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '205018760932-mmv7ul5mk45fm3k71p4benih151pfo5e.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ['profile', 'email']
    })

    const signIn = async () => {
        try {
            setIsUserLoading(true)
            await promptAsync()
        } catch (error) {
            console.log(error)
            throw error;
        } finally {
            setIsUserLoading(false)
        }
    }

    async function signInWithGoogle(access_token: string){
        console.log('userToken:' + access_token)
    }

    useEffect(()=> {
        if(response?.type === 'success' && response.authentication?.accessToken){
            signInWithGoogle(response.authentication.accessToken)
        }
    },[response])

    return (
        <AuthContext.Provider value={{
            isUserLoading,
            signIn,
            userData
        }}>
            {children}
        </AuthContext.Provider>
    )
}