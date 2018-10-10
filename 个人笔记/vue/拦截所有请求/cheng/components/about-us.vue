<template>
  <cut-dialog :visible="visible"
    width="560px"
    @close="handleClose"
    center
    class="about-us">
    <div slot="title"
      class="dialog-title">
      <img v-if="logo"
        alt="logo"
        :src="logo"
        class="title-logo">
      <span class="modal-title">
        <span class="company">{{productHolder}}</span>
        <span class="property"
          v-if="property">®</span>
        <span class="product">{{productName}}</span>
      </span>
    </div>
    <cut-row v-for="item in listData"
      :key="item.label"
      class="rowStyle">
      <div class="aboutInfo">
        <span class="label">{{item.label}}:</span>
        <span>{{item.value}}</span>
      </div>
    </cut-row>
    <cut-row>
      <p class="companyStyle">{{companyName}}</p>
    </cut-row>

    <span slot="footer"
      class="dialog-footer">
      <cut-button type="primary"
        plain
        @click="handleClose"
        size="medium">我知道了</cut-button>
    </span>
  </cut-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    listData: {
      type: Array,
      default: []
    },
    datas: {
      type: Object
    },
    productHolder: {
      type: String,
      default: '明鉴'
    },
    property: {
      type: Boolean,
      default: true
    },
    productName: {
      type: String,
      default: ''
    },
    companyName: {
      type: String,
      default: ''
    },
    logo: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClose () {
      if (this.visible) {
        // 模拟开始录制
        this.$store.dispatch('updateRecordGoing')
        this.$store.dispatch('resetRecordUpdated')
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="postcss">
.about-us {
  .cut-dialog {
    border-radius: 4px;
  }
  .cut-dialog--center .cut-dialog__header {
    padding: 0px;
    margin-left: 0px;
  }
  .cut-dialog--center .cut-dialog__body {
    padding: 70px 56px 0;
  }
  .cut-dialog__footer {
    margin-top: 32px;
    padding-bottom: 30px;
  }
  .dialog-title {
    display: flex;
    height: 96px;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background: linear-gradient(to right, #0f66ae, #3babfa);
  }
  .title-logo {
    height: 64px;
    position: relative;
    left: -18px;
    top: 2px;
  }
  .modal-title {
    font-size: 24px;
    color: #fff;
    margin-bottom: -10px;
    .company {
      margin-right: -5px;
    }
    .property {
      position: relative;
      top: -8px;
      font-size: 70%;
      font-weight: 100;
    }
    .product {
      // margin-left: -5px;
    }
  }
  .rowStyle {
    font-size: 14px;
    color: #1e324d;
    margin-right: 12px;
    // margin-top: 32px;
    // margin-bottom: -4px;
    // line-height: 14px;
  }
  .label {
    width: 60px;
    margin-right: 4px;
    text-align: right;
    display: inline-block;
  }
  .right-column {
    margin-left: 20px;
  }
}

.aboutInfo {
  margin-top: 20px;
  // margin-right: 20px;
  // line-height: 40px;
}
.companyStyle {
  font-size: 14px;
  color: #1e324d;
  margin-top: 20px;
}
</style>
