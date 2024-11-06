import { LoginScreenNavigationProp } from "../../navigation/navigation.types";

export type LoginScreenProps = {
    navigation: LoginScreenNavigationProp;
};

export type Login = {
    username: string;
    password: string;
}