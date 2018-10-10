
> main.vue
```
      console.log('before..', this.$store.getters['record/currentStatus'])
      let statusObj = await isRecording()
      if (statusObj.data > 0) {
       this.$store.dispatch('record/setRecordStatus', true)
      } else {
      this.$store.dispatch('record/setRecordStatus', false)
      }
```

> record-store.js
```
const record = {
  namespaced: true,
  state: {
    recordStatus: false
  },
  mutations: {
    SET_RECORD_STATUS (state, data) {
      state.recordStatus = data
    }
  },
  actions: {
    setRecordStatus ({ commit, state }, data) {
      commit('SET_RECORD_STATUS', data)
    }
  },
  getters: {
    currentStatus: (state) => state.recordStatus
  }
}

export default record

```