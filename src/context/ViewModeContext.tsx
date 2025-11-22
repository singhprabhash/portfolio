"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ViewModeContextType = {
    isDevMode: boolean;
    toggleViewMode: () => void;
    setViewMode: (isDev: boolean) => void;
};

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
    const [isDevMode, setIsDevMode] = useState(true);

    useEffect(() => {
        // Load preference from localStorage on mount
        const savedMode = localStorage.getItem("viewMode");
        if (savedMode === "client") {
            setIsDevMode(false);
        } else if (savedMode === "dev") {
            setIsDevMode(true);
        }
    }, []);

    const toggleViewMode = () => {
        const newMode = !isDevMode;
        setIsDevMode(newMode);
        localStorage.setItem("viewMode", newMode ? "dev" : "client");
    };

    const setViewMode = (isDev: boolean) => {
        setIsDevMode(isDev);
        localStorage.setItem("viewMode", isDev ? "dev" : "client");
    };

    return (
        <ViewModeContext.Provider value={{ isDevMode, toggleViewMode, setViewMode }}>
            {children}
        </ViewModeContext.Provider>
    );
}

export function useViewMode() {
    const context = useContext(ViewModeContext);
    if (context === undefined) {
        throw new Error("useViewMode must be used within a ViewModeProvider");
    }
    return context;
}
