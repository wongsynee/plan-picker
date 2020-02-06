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
export const SET_DATA = createDeltaAction(NAME, 'SET_DATA')
export const setData: ActionCreator = createActionCreator(SET_DATA)

// Sets selected interval from button.
export const SET_SELECTED_INTERVAL = createDeltaAction(NAME, 'SET_SELECTED_INTERVAL')
export const setSelectedInterval: ActionCreator = createActionCreator(SET_SELECTED_INTERVAL)

// For API Calls
export const API__GET_DATA: ISignalAction = createSignalAction(`${NAME}/API`, 'API__GET_DATA')