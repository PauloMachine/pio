import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login';
import AviaryListScreen from '../screens/aviary/aviary-list';
import LotListScreen from '../screens/lot/lot-list';
import LotScreen from '../screens/lot/lot';
import MortalityListScreen from '../screens/mortality/mortality-list';
import AviaryCreateScreen from '../screens/aviary/aviary-create';
import LotCreateScreen from '../screens/lot/lot-create';
import MortalityCreateScreen from '../screens/mortality/mortality-create';
import Header from '../components/header';
import { RootStackParamList, ScreenOptionsProps } from './navigation.types';
import CostListScreen from '../screens/cost/costs-list';
import CostCreateScreen from '../screens/cost/cost-create';

const Stack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
    const createScreenOptions = useCallback(
        (title: string) => ({ navigation }: ScreenOptionsProps) => ({
            header: () => <Header title={title} navigation={navigation} />,
        }),
        []
    );

    const screens: { name: keyof RootStackParamList; component: React.ComponentType<any>; options?: any }[] = [
        { name: 'Login', component: LoginScreen, options: { headerShown: false } },
        { name: 'AviaryList', component: AviaryListScreen, options: createScreenOptions('Meus aviários') },
        { name: 'AviaryCreate', component: AviaryCreateScreen, options: createScreenOptions('Cadastrar aviário') },
        { name: 'LotList', component: LotListScreen, options: createScreenOptions('Meus lotes') },
        { name: 'LotCreate', component: LotCreateScreen, options: createScreenOptions('Cadastrar lote') },
        { name: 'Lot', component: LotScreen, options: createScreenOptions('Meu lote') },
        { name: 'MortalityList', component: MortalityListScreen, options: createScreenOptions('Minhas mortalidades') },
        { name: 'MortalityCreate', component: MortalityCreateScreen, options: createScreenOptions('Cadastrar mortalidade') },
        { name: 'CostList', component: CostListScreen, options: createScreenOptions('Meus custos') },
        { name: 'CostCreate', component: CostCreateScreen, options: createScreenOptions('Cadastrar custo') }
    ];

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {screens.map((screen, index) => (
                    <Stack.Screen
                        key={index}
                        name={screen.name}
                        component={screen.component}
                        options={screen.options}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const AppNavigator = () => {
    return (
        <Navigator />
    );
};

export default AppNavigator;
