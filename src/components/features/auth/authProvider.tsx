import { useState } from "react";

interface User {
    id: string,
    email: string,
    name: string
}

interface AuthContextType{
    user: User,
    lodiang: boolean,
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, name: string) => Promise<void>;
    logout: () => Promise<void>;
}

export function AuthProvider(){
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();

}