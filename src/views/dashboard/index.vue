<template>
  <div class="page-box dashboard-page">
    <header class="time-scope">
      <p class="default-font lh-36">时间范围：</p>
      <div class="date-box">
        <el-date-picker
          v-model="timeScope"
          type="monthrange"
          range-separator="-"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
        >
        </el-date-picker>
        <i class="el-icon-date data_icon"></i>
      </div>
    </header>
    <main class="page-content">
      <div style="margin-right: 20px;">
        <section class="flex">
          <div>
            <img :src="img1">
          </div>
          <charts-card :title="cardOotion1.title" :size="cardOotion1.size" :imgsrc="cardOotion1.imgsrc" />
        </section>
        <section class="flex">
          <div>
            <div class="flex">
              <charts-card :title="cardOotion2.title" :size="cardOotion2.size" :imgsrc="cardOotion2.imgsrc" />
              <charts-card :title="cardOotion3.title" :size="cardOotion3.size" :imgsrc="cardOotion3.imgsrc" />
            </div>
            <div class="flex">
              <charts-card :title="cardOotion4.title" :size="cardOotion4.size" :imgsrc="cardOotion4.imgsrc" />
              <charts-card :title="cardOotion5.title" :size="cardOotion5.size" :imgsrc="cardOotion5.imgsrc" />
            </div>
          </div>
          <table></table>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import chartsCard from '@/components/chartsCard.vue'
export default {
  name: "Dashboard",
  components: {
    chartsCard
  },
  data() {
    return {
      img1: require("@/assets/blankimg/1.png"),
      timeScope: "",
      cardOotion1: {
        title: '续航里程',
        size: {
          height: 320,
          width: 100
        },
        imgsrc: require('@/assets/blankimg/2.png')
      },
      cardOotion2: {
        title: '品牌销量分布图',
        size: {
          height: 310,
          width: 40
        },
        imgsrc: require('@/assets/blankimg/3.png')
      },
      cardOotion3: {
        title: '车型占比分布',
        size: {
          height: 310,
          width: 100
        },
        imgsrc: require('@/assets/blankimg/5.png')
      },
      cardOotion4: {
        title: '适用类型',
        size: {
          height: 310,
          width: 40
        },
        imgsrc: require('@/assets/blankimg/4.png')
      },
      cardOotion5: {
        title: '细分市场分布',
        size: {
          height: 330,
          width: 100
        },
        imgsrc: require('@/assets/blankimg/6.png')
      },
    };
  },
};
</script>

<style lang="less">
  .dashboard-page {
    height: 100%;
    .time-scope {
      display: flex;
      .date-box {
        color: #0c1243;
        .el-input__icon {
          display: none;
        }
        position: relative;
        width: fit-content;
        .data_icon {
          position: absolute;
          top: 50%;
          right: 17px;
          z-index: 9;
          font-size: 14px;
          transform: translateY(-50%);
        }
        ::v-deep .el-range__close-icon {
          position: absolute;
          right: 34px;
          top: 54%;
          transform: translateY(-50%);
        }
      }
    }
    .page-content {
      margin-top: 10px; 
      height: calc(100% - 46px);
    }
  }
</style>
