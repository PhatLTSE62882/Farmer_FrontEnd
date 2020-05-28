import { Frequency } from './frequency';

export interface ServiceInterface
{ 
    id:number;
    name:String;
    price:number;
    longDesc:String;
    imageUrl:String;
    frequency:Frequency;
}