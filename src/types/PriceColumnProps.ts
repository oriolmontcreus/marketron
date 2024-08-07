import type { CheckListItemType } from "./CheckListItemType";

export type PriceColumnProps = {
    highlight?: boolean;
    title: string;
    price: string | { monthly: string; annual: string };
    statement: string;
    items: CheckListItemType[];
};