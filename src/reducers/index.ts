import produce from 'immer'
import { createSelector } from 'reselect'

import { IAction } from '../utils/redux'
import { Interval } from '../constants/enums'
import { IData } from '../constants/interface'
import { SET_DATA } from '../actions'

interface IPlanPickerState {
  data?: IData[];
  interval?: Interval[];
}

const initialState: IPlanPickerState = {
  data: undefined,
  interval: undefined,
}

const reducer = (state = initialState, action: IAction<any>) => {
  return (
    produce(state, draft => {
      switch (action.type) {
        case SET_DATA:
          draft.data = action.payload
          break
      }
    })
  )
}

const dataSelector = (state: IPlanPickerState) => state.data
const dataState = createSelector(
  [dataSelector],
  data => data,
)

const intervalState  = createSelector(
  [dataSelector],
  data => {
    if (data) {
      // Get all values of intervals.
      const intervals = data.map((item: IData) => {
        return item.interval
      })
      // Get unique inteval values only.
      const uniqueIntervals = Array.from(new Set(intervals))
      return uniqueIntervals.length > 0 ? uniqueIntervals : undefined
    }
    return undefined
  },
)

const selectors = {
  data: dataState,
  interval: intervalState,
}

export { reducer, selectors }