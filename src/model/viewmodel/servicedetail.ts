import { Service } from '../service';
import { CategoryList } from '../categorymapper';
import { Frequency } from '../frequency';

export class ServiceDetail
{
    service:Service;
    categoryList:CategoryList[];
    frequencyList:Frequency[];
    fileToUpload:File;

}