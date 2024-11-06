import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../navigation/navigation.types"

export type HeaderProps = {
    title: string
    navigation: NativeStackNavigationProp<RootStackParamList>
}