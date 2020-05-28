import { Frequency } from './frequency';
import { CategoryList } from './categorymapper';

export class Service{
    id:number;
    name:String;
    price:number;
    longDesc:String;
    imageUrl:String;
    categoryId:number;
    frequencyId:number;
    frequency:Frequency;
    category:CategoryList;
}