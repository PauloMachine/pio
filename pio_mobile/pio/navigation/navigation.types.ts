import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native'

export type RootStackParamList = {
    Login: undefined;
    AviaryList: undefined;
    AviaryCreate: undefined;
    LotList: { aviaryId: string };
    LotCreate: { aviaryId: string };
    Lot: { aviaryId: string, lotId: string };
    MortalityList: { aviaryId: string, lotId: string };
    MortalityCreate: { aviaryId: string, lotId: string };
    CostList: { aviaryId: string, lotId: string };
    CostCreate: { aviaryId: string, lotId: string };
};

export type ScreenOptionsProps = {
    navigation: NativeStackNavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList>;
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Login'
>;

export type AviaryListScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'AviaryList'
>;

export type AviaryCreateScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'AviaryCreate'
>;

export type LotListScreenRouteProp = RouteProp<RootStackParamList, 'LotList'>
export type LotListScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'LotList'
>;

export type LotCreateScreenRouteProp = RouteProp<RootStackParamList, 'LotCreate'>
export type LotCreateScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'LotCreate'
>;

export type LotScreenRouteProp = RouteProp<RootStackParamList, 'Lot'>
export type LotScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Lot'
>;

export type MortalityListScreenRouteProp = RouteProp<RootStackParamList, 'MortalityList'>
export type MortalityListScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'MortalityList'
>;

export type MortalityCreateScreenRouteProp = RouteProp<RootStackParamList, 'MortalityCreate'>
export type MortalityCreateScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'MortalityCreate'
>;

export type CostListScreenRouteProp = RouteProp<RootStackParamList, 'CostList'>
export type CostListScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'CostList'
>;

export type CostCreateScreenRouteProp = RouteProp<RootStackParamList, 'CostCreate'>
export type CostCreateScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'CostCreate'
>;

