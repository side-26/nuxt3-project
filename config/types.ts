import { BabySex, NameLength, NameType } from './enums';
export interface IBabyName {
    sex: BabySex;
    type: NameType;
    length: NameLength;
}
export interface IButtonEvent extends MouseEvent {
    target: HTMLButtonElement;
}
export interface IBabiesName {
    id: number;
    name: string;
    gender: BabySex;
    popularity: NameType;
    length: NameLength;
}