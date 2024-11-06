import React, { createContext, useContext } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigation.types';

type NavigationContextType = StackNavigationProp<RootStackParamList>;

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useAppNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useAppNavigation must be used within a NavigationProvider');
    }
    return context;
};

export const NavigationProvider: React.FC<{ children: React.ReactNode; navigation: NavigationContextType }> = ({ children, navigation }) => {
    return (
        <NavigationContext.Provider value={navigation}>
            {children}
        </NavigationContext.Provider>
    );
};
