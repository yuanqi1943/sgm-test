<template>
  <div class="page-box .charge-page">
    <div class="search-box">
      <top-from />
      <el-radio v-model="radio" label="1">显示百分比</el-radio>
      <el-radio v-model="radio" label="2">显示数量</el-radio>
    </div>
    <div class="charts-box" style="margin-top: 10px;">
      <charts-card :title="cardOotion1.title" :size="cardOotion2.size" />
      <charts-card :title="cardOotion2.title" :size="cardOotion3.size" />
      <charts-card :title="cardOotion3.title" :size="cardOotion2.size" />
      <charts-card :title="cardOotion4.title" :size="cardOotion3.size" />
    </div>
  </div>
</template>

<script>
import chartsCard from '@/components/chartsCard.vue'
import topFrom from './topForm.vue'
  export default {
    name: 'ChargeFeature',
    components: {
      chartsCard,
      topFrom,
    },
    data() {
      return {
        radio: '',
        cardOotion1: {
          title: '次充电SOC分布',
          size: {
            height: 374,
            width: 95
          },
          // imgsrc: require('@/assets/blankimg/2.png')
        },
        cardOotion2: {
          title: '次充电电量分布',
          size: {
            height: 374,
            width: 95
          },
          // imgsrc: require('@/assets/blankimg/3.png')
        },
        cardOotion3: {
          title: '次充电时刻分布',
          size: {
            height: 374,
            width: 95
          },
          // imgsrc: require('@/assets/blankimg/3.png')
        },
        cardOotion4: {
          title: '周充电频次分布',
          size: {
            height: 374,
            width: 95
          },
          // imgsrc: require('@/assets/blankimg/3.png')
        },
      }
    }
  };
</script>

<style lang="less">
  .charge-page {
    .search-box {
      padding-left: 20px;
    }
  }
</style>