import { connect } from 'react-redux'

import { selectors } from '../../reducers'
import { GET_DATA } from '../../actions'

import PlanPicker from '.'

const mapStateToProps = (state: any) => {
  return ({
    interval: selectors.interval(state),
    paymentByWeekly: selectors.paymentByWeekly(state),
    paymentByFortnightly: selectors.paymentByFortnightly(state),
    paymentByMonthly: selectors.paymentByMonthly(state),
  })
}

const actionCreators = {
  getData: GET_DATA.request,
}

export default connect(mapStateToProps, actionCreators)(PlanPicker)
