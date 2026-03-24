import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({ user: null, isAuthenticated: false });

    useEffect(() => {
        // Logic for checking authentication status (e.g., tokens, cookies, etc.)
        const existingAuthData = localStorage.getItem('authData');
        if (existingAuthData) {
            setAuthData(JSON.parse(existingAuthData));
        }
    }, []);

    const login = (userData) => {
        setAuthData({ user: userData, isAuthenticated: true });
        localStorage.setItem('authData', JSON.stringify({ user: userData, isAuthenticated: true }));
    };

    const logout = () => {
        setAuthData({ user: null, isAuthenticated: false });
        localStorage.removeItem('authData');
    };

    return (
        <AuthContext.Provider value={{ authData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
