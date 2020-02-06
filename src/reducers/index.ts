import produce from 'immer'
import { createSelector } from 'reselect'

import { IAction } from '../utils/redux'
import { Interval } from '../constants/enums'
import { IData } from '../constants/interface'
import {
  SET_DATA,
  SET_SELECTED_INTERVAL
} from '../actions'

interface IPlanPickerState {
  data?: IData[];
  interval?: Interval[];
  paymentByWeekly?: number[];
  paymentByFortnightly?: number[];
  paymentByMonthly?: number[];
  selectedInterval: Interval
}

const initialState: IPlanPickerState = {
  data: undefined,
  interval: undefined,
  paymentByWeekly: undefined,
  paymentByFortnightly: undefined,
  paymentByMonthly: undefined,
  selectedInterval: Interval.Weekly,
}

const reducer = (state = initialState, action: IAction<any>) => {
  return (
    produce(state, draft => {
      switch (action.type) {
        case SET_DATA:
          draft.data = action.payload
          break
        case SET_SELECTED_INTERVAL:
          draft.selectedInterval = action.payload
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
      // Get unique interval values only.
      const uniqueIntervals = Array.from(new Set(intervals))
      return uniqueIntervals.length > 0 ? uniqueIntervals : undefined
    }
    return undefined
  },
)

const paymentByWeeklyState  = createSelector(
  [dataSelector],
  data => {
    if (data) {
      // Filter by weekly.
      const weeklyIntervals = data.filter((item: IData) => {
        return item.interval === Interval.Weekly
      })
      return weeklyIntervals.map((item: IData) => {
        return item.paymentCount
      })
    }
    return undefined
  },
)

const paymentByFortnightlyState  = createSelector(
  [dataSelector],
  data => {
    if (data) {
      // Filter by fortnightly.
      const fortnightlyIntervals = data.filter((item: IData) => {
        return item.interval === Interval.Fortnightly
      })
      return fortnightlyIntervals.map((item: IData) => {
        return item.paymentCount
      })
    }
    return undefined
  },
)

const paymentByMonthlyState  = createSelector(
  [dataSelector],
  data => {
    if (data) {
      // Filter by monthly.
      const monthlyIntervals = data.filter((item: IData) => {
        return item.interval === Interval.Monthly
      })
      return monthlyIntervals.map((item: IData) => {
        return item.paymentCount
      })
    }
    return undefined
  },
)

const selectedIntervalSelector = (state: IPlanPickerState) => state.selectedInterval

const selectedIntervalState = createSelector(
  [selectedIntervalSelector],
  selectedInterval => selectedInterval,
)

const selectors = {
  data: dataState,
  interval: intervalState,
  paymentByWeekly: paymentByWeeklyState,
  paymentByFortnightly: paymentByFortnightlyState,
  paymentByMonthly: paymentByMonthlyState,
  selectedInterval: selectedIntervalState,
}

export { reducer, selectors }