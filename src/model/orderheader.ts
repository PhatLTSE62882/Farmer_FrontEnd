import { ServiceList } from './servicemapper';
import { ServiceInterface } from './serviceInterface';

export class OrderHeader
{
    id:number;
    name:string;
    phone:string;
    email:string;
    address:string;
    city:string;
    zipCode:string;
    status:string;
    comments:string;
    serviceCount:number;
    serviceItems:ServiceInterface[];
}