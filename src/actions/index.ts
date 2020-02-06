import { NAME } from '../identity'
import {
  createSignalAction,
  createDeltaAction,
  createActionCreator,
  ActionCreator,
  ISignalAction,
} from '../utils/redux'

// Signals get data.
export const GET_DATA: ISignalAction = createSignalAction(NAME, 'GET_DATA')

// Sets interval data.
export const SET_INTERVAL = createDeltaAction(NAME, 'SET_INTERVAL')
export const setInterval: ActionCreator = createActionCreator(SET_INTERVAL)

// For API Calls
export const API__GET_DATA: ISignalAction = createSignalAction(`${NAME}/API`, 'API__GET_DATA')