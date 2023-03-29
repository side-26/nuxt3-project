
import { BabySex, NameLength, NameType } from '@/config/enums';
export const babyNameItem: {
    id: number;
    category: 'sex' | 'length' | 'type';
    title: string;
    buttons: BabySex[] | NameLength[] | NameType[];
    
}[] = [
    {
        id: 1,
        category: 'sex',
        title: '1) choose a gender',
        buttons: [BabySex.BOY, BabySex.GIRL, BabySex.UNISEX],
    },
    {
        id: 2,
        category: 'type',
        title: "2) choose name's popularity",
        buttons: [NameType.UNIQUE, NameType.TRENDY],
    },
    {
        id: 3,
        category: 'length',
        title: "3) choose name's length",
        buttons: [NameLength.LONG, NameLength.ALL, NameLength.SHORT],
    },
];