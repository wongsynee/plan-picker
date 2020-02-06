import { NAME } from '../identity'
import {
  createSignalAction,
  createDeltaAction,
  createActionCreator,
  ActionCreator,
  ISignalAction,
} from '../utils/redux'

export const GET_DATA: ISignalAction = createSignalAction(NAME, 'GET_DATA')
export const SET_DATA = createDeltaAction(NAME, 'SET_DATA')
export const setData: ActionCreator = createActionCreator(SET_DATA)
