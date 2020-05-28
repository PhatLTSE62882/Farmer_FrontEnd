import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {ServiceInterface} from '../model/serviceInterface';
export const ADD_SERVICE = "[SERVICE] ADD";
export const REMOVE_SERVICE = "[SERVICE] REMOVE";
export class AddService implements Action{
readonly type = ADD_SERVICE;
/**
 *
 */
constructor(public payload:ServiceInterface) {
      }
}
export class RemoveService implements Action{
    readonly type = REMOVE_SERVICE;
    /**
     *
     */
    constructor(public payload:number) {
    }
}
export type Actions = AddService | RemoveService;