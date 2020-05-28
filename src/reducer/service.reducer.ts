import {Action} from '@ngrx/store';
import {ServiceInterface} from '../model/serviceInterface';
import * as ServiceActions from '../action/service.action';

export function ServiceReducer(state:ServiceInterface[]=[],action:ServiceActions.Actions)
{
    switch(action.type)
    {
        case ServiceActions.ADD_SERVICE:
            {
           return [...state,action.payload] 
            }
        case ServiceActions.REMOVE_SERVICE:
            {
                state.splice(action.payload,1);
                return state;
            }
            default: return state;
    }
}