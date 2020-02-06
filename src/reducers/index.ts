import produce from 'immer'
import { createSelector } from 'reselect'

import { IAction } from '../utils/redux'
import { Interval } from '../constants/enums'
import { SET_INTERVAL } from '../actions'

interface IPlanPickerState {
  interval?: Interval;
}

const initialState: IPlanPickerState = {
  interval: undefined,
}

const reducer = (state = initialState, action: IAction<any>) => {
  return (
    produce(state, draft => {
      switch (action.type) {
        case SET_INTERVAL:
          draft.interval = action.payload
          break
      }
    })
  )
}

const intervalSelector = (state: IPlanPickerState) => state.interval
const intervalState = createSelector(
  [intervalSelector],
  interval => interval,
)

const selectors = {
  interval: intervalState,
}

export { reducer, selectors }