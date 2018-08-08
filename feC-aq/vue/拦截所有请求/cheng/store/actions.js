
export default {
  updateRecordGoing(dis) {
    dis.commit('UPDATE_RECORD_GOING')
  },
  updateRecordUpdated(dis) {
    dis.commit('UPDATE_RECORD_UPDATED')
  },
  resetRecordUpdated(dis) {
    dis.commit('RESET_RECORD_UPDATED')
  }
}
