<template>
  <span class="jxzj-button">
    <!--图片按钮-->
    <template v-if="iconSrc && display">
      <img class="cursor-in-pointer" :v-if="display" @click="handleClick" :src="iconSrc" :alt="iconAlt">
    </template>
    <!--switch开关-->
    <template v-else-if="typeSwitch && display">
      <el-switch v-model="currentValue" @change="switchChange" active-color="#13ce66" :disabled="disabled" :size="size"
        :active-value="activeValue" :inactive-value="inactiveValue" inactive-color="#ff4949">
      </el-switch>
    </template>
    <!--正常按钮、文字按钮-->
    <template v-else-if="display">
      <el-button v-if="!plain" v-bind="$attrs" @click="handleClick" :disabled="disabled" :style="width?`width:${width}px`:''"
        :type="type" :size="size" :icon="icon" :class="{'refresh':type=='refresh'}">
        <span v-if="addIcon" class="el-icon-plus"></span>
        <slot></slot>
      </el-button>
      <el-button v-bind="$attrs" v-if="plain" @click="handleClick" :disabled="disabled" :style="width?`width:${width}px`:''"
        :type="type" :size="size" :icon="icon" class="plainButton">
        <span v-if="addIcon" class="el-icon-plus"></span>
        <slot></slot>
      </el-button>
    </template>
  </span>
</template>

<script>
  /**
   * 统一按钮组件，主要用于权限控制
   *
   * type:  element原生属性，按钮类型，新增refresh属性，刷新按钮
   */
  import ElSwitch from 'element-ui'
  // import {keyExistUserBtnKeys} from "@/tool/UserInfo";

  export default {
    name: "jxzj-button",
    extends: ElSwitch,
    props: {
      //switch v-model的值
      value: {
        default: false
      },
      //按钮的key值
      displayKey: {
        type: String,
      },
      //switch开关
      typeSwitch: {
        type: Boolean,
        default: false
      },
      //图标路径
      iconSrc: {
        type: String
      },
      //图标提示文字
      iconAlt: {
        type: String,
        default: ''
      },
      //大小
      size: {
        type: String,
        default: 'medium'
      },
      //普通按钮、图片按钮、switch开关
      type: {
        type: String,
        default: 'primary'
      },
      //是否可用
      disabled: {
        type: Boolean,
        default: false
      },
      //显示+号图标
      addIcon: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String
      },
      width: {
        type: [String, Number],
        default: null
      },
      //switch开关 element-ui原生属性，关闭时的值
      inactiveValue: {
        type: [Boolean, String, Number],
        default: false
      },
      //switch开关 element-ui原生属性，开启时的值
      activeValue: {
        type: [Boolean, String, Number],
        default: true
      },
      plain: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        currentValue: false,
        display: false
      }
    },
    methods: {
      switchChange(val) {
        this.$emit('input', val);
        //switch开关改变
        this.$emit('change', val);
      },
      handleClick(event) {
        this.$emit('click', event);
      }
    },
    created: function() {
      this.currentValue = this.value;
      if (!this.displayKey) {
        this.display = true;
        //默认显示
        return;
      }
      //判断是否有该权限
      if (keyExistUserBtnKeys(this.displayKey)) {
        this.display = true;
      } else {
        this.display = false;
      }
    },
    watch: {
      value(val) {
        this.currentValue = val;
      }
    }
  }
</script>

<style scoped>
  .refresh {
    color: $main;
    background: #FFFFFF;
    border: 1px solid $main;
  }

  .plainButton {
    border: none;
    background-color: white;
    color: $main;
  }

  /deep/ .plainButton:hover {
    box-shadow: 1px 1px 1px 1px #aaaaaa;
    border: none;
    color: $main;
  }

  /deep/ .plainButton.is-disabled:hover {
    border: none;
    box-shadow: none;
    background-color: white;
    cursor: not-allowed;
    color: $main;
  }
</style>
