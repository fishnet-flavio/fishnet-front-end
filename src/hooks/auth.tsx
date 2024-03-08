import { ReactNode, useState, createContext, useEffect, useContext } from "react";
import { api } from "../services/api";

interface User {
    id: number;
    username: string;
    email: string;
}

interface LoginParams {
    email: string;
    password: string;
}

interface AuthData {
    user: User | null;
    access_token: string | null;
}

interface Response {
    user: User;
    access_token: string;
}

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData extends AuthData {
    login: ({ email, password }: LoginParams) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

function AuthProvider({ children }: AuthProviderProps,) {
    const [data, setData] = useState<AuthData>({
        user: null,
        access_token: null,
    });

    const login = async ({ email, password } : LoginParams) => {
        try {
            const response = await api.post<Response>(
                "auth/login", {
                    email: email,
                    password: password,
            });
            
            const { user , access_token } = response.data;

            localStorage.setItem("@fishnet:user", JSON.stringify(user));
            localStorage.setItem("@fishnet:acess_token", access_token);

            api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

            setData({ user, access_token });
        } catch (error) {
            console.error(error);
        }
    }

    const logout = async () => {
        localStorage.removeItem("@fishnet:user");
        localStorage.removeItem("@fishnet:access_token");

        setData({ user: null, access_token: null });
    }

    useEffect(() => {
        const access_token = localStorage.getItem("@fishnet:access_token");
        const user = localStorage.getItem("@fishnet:user");

        if (access_token && user) {
            api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

            setData({
                access_token,
                user: JSON.parse(user),
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            user: data.user,
            access_token: data.access_token
        }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth may be used inside a provider");
    }
    return context;
}

export { AuthProvider, useAuth }