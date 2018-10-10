<template>
  <cut-container class="app-container"
    :class="{'primary-collapse':primaryCollapse}">
    <cut-header height="none">
      <navbar/>
    </cut-header>
    <cut-container class="app-wrapper">
      <cut-aside class="app-aside"
        width="none">
        <sidebar/>
      </cut-aside>
      <cut-main class="app-main">
        <router-view />
      </cut-main>
    </cut-container>
  </cut-container>
</template>
<script>
import { mapGetters } from 'vuex'
import Navbar from '@/components/navbar.vue'
import Sidebar from '@/components/sidebar.vue'
import { getRecordResult } from '@/api/record.js'
export default {
  name: 'layout-default',
  components: {
    Navbar,
    Sidebar
  },
  computed: {
    ...mapGetters([
      'getRecordGoing',
      'getRecordUpdated',
      'primaryCollapse',
      'secondaryCollapse'
    ])
  },
  watch: {
    getRecordGoing (val) {
      // show record window
    },
    getRecordUpdated () {
      // get new record result
      getRecordResult().then((response) => {
        console.info(response)
      })
    }
  }
}
</script>

