<template>
  <div
    class="card-border"
    :style="`height: ${size.height ? size.height: 310}px; width: ${size.width ? size.width : 30}%;`"
  >
    <div class="charts-title">
      <div class="title">{{ title }}</div>
      <div class="icon" v-if="iconContent"></div>
    </div>
    <!-- charts components -->
    <div class="charts-content">
      <img :src="imgsrc" v-if="imgsrc" style="width: 100%"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "chartsCard",
  props: {
    // 卡片尺寸
    size: {
      default: () => {},
      type: Object,
      required: true,
    },
    // 卡片标题
    title: {
      default: "",
      type: String,
      required: true,
    },
    // 报表配置
    chartsOption: {
      default: () => [],
      type: Array,
      required: false, //
    },
    // 说明内容
    iconContent: {
      default: () => [],
      type: Array,
      required: false,
    },
    //
    imgsrc: {
      default: "",
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.card-border {
  border: 1px solid #d4d8e3;
  border-radius: 6px;
  margin-left: 20px;
  margin-bottom: 15px;
  .charts-title {
    border-bottom: 1px solid #d4d8e3;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 32px;
    .title {
      font-weight: 700;
      position: relative;
    }
    .title::before {
      content: " ";
      position: absolute;
      left: -16px;
      top: 5px;
      height: 8px;
      width: 8px;
      border-radius: 8px;
      border: 2px solid #0c1243;
    }
  }
}
</style>
