import * as types from './mutation-types'

export default {
  [types.UPDATE_RECORD_GOING](state) {
    state.recordGoing = !state.recordGoing
  },
  [types.UPDATE_RECORD_UPDATED](state) {
    state.recordUpdated++
  },
  [types.RESET_RECORD_UPDATED](state) {
    state.recordUpdated = 0
  }
}
