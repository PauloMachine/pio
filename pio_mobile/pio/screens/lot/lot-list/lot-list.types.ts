import { LotListScreenNavigationProp, LotListScreenRouteProp, LotScreenNavigationProp, LotScreenRouteProp } from "../../../navigation/navigation.types";
import { LotId } from "../lot.types";

export type LotListScreenProps = {
    navigation: LotListScreenNavigationProp;
    route: LotListScreenRouteProp;
};

export type LotProps = {
    navigation: LotScreenNavigationProp;
    route: LotScreenRouteProp;
};