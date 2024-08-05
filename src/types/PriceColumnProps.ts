import type { CheckListItemType } from "./CheckListItemType";

export type PriceColumnProps = {
    highlight?: boolean;
    title: string;
    price: string;
    statement: string;
    items: CheckListItemType[];
};