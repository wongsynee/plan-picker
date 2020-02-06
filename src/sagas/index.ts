import { all, takeLatest, put, take, race } from 'redux-saga/effects'

import {
  GET_DATA,
  API__GET_DATA,
} from '../actions'

// Initiated on mount of PlanPicker page.
export function * getData() {
  try {
    yield put(API__GET_DATA.request())

    // Wait for a success or failure.
    const { success, failure } = yield race({
      success: take(API__GET_DATA.SUCCESS),
      failure: take(API__GET_DATA.FAILURE),
    })

    if (success) {
      yield put(GET_DATA.success())
      console.log('success', success)
    } else {
      yield put(GET_DATA.failure())
      console.log('failure', failure)
    }
  } catch (error) {
    console.log('error', error)
  }
}

// Consolidate sagas.
export default function * root() {
  yield all([
    takeLatest(GET_DATA.REQUEST, getData),
  ])
}