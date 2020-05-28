import { Frequency } from './frequency';

export class ServiceList
{
    id:number;
    name:String;
    price:number;
    longDesc:String;
    imageUrl:String;
    categoryId:number;
    frequencyId:number;
    frequency:Frequency
}