```
<template>
  <div style="width: 400px;margin: 0 auto;">
    <cut-input v-model="selectedName" placeholder="搜索" style="width: 100%;" @focus="onfocus" @input="onchange" />
    <ul class="cut-scrollbar__view cut-input-dropdown__list" style="height: 100px; overflow: auto;">
      <li :class="[{'selected': value === item.value} ,'cut-input-dropdown__item']" v-for="(item,i ) in options" :key="item.value" @click="selectOption(i)">
        <span>{{item.label}}</span>
        <cut-icon name="check" style="float: right;line-height: 34px;" v-if="value === item.value"></cut-icon>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [],
        selectedName: '',
        value: '',
        mapData: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }]
      }
    },
    // valu, mapData可以做成props传进来
    // props: ['value', 'mapData'], 
    created() {
      this.onfocus()
    },
    methods: {
      onchange() {
        let temp = [];
        if (this.selectedName === '') {
          this.options = this.mapData;
        } else {
          this.mapData.forEach(item => {
            if (item.label.indexOf(this.selectedName.toLowerCase().trim()) !== -1) {
              temp.push(item)
            }
          })
          this.options = temp;
        }
      },
      selectOption(i) {
        this.selectedName = this.options[i].label
        this.value = this.options[i].value
      },
      onfocus() {
        this.options = this.mapData
      }
    }
  }
</script>
<style>
.cut-input .cut-input__inner,
.cut-input .cut-input__inner:focus {
  border-radius: 0px;
  border-top: none;
  border-left: none;
  border-right: none;
  box-shadow:none;
}
.cut-input-dropdown__list {
  width: 100%;
  text-align: left;
  padding-left: 0px;
}
.cut-input-dropdown__item {
  font-size: 14px;
  padding: 0 16px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  color: #525b69;
  height: 34px;
  line-height: 34px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
}
.selected {
  color: #008cee;
  font-weight: 700;
}
</style>

```
