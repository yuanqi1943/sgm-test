<template>
  <div class="form-box flex">
    <el-form
      :inline="true"
      :model="formData"
      class="form-charge"
      label-position="top"
    >
      <el-form-item label="品牌/车型/配置">
        <el-cascader
          v-model="formData.value"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="细分市场">
        <el-select v-model="formData.a" placeholder="细分市场">
          <el-option label="1" value="shanghai"></el-option>
          <el-option label="2" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="车辆用途">
        <el-select v-model="formData.b" placeholder="车辆用途">
          <el-option label="1" value="shanghai"></el-option>
          <el-option label="2" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否节假日">
        <el-select v-model="formData.c" placeholder="是否节假日">
          <el-option label="1" value="shanghai"></el-option>
          <el-option label="2" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="续航里程">
        <el-select v-model="formData.d" placeholder="续航里程">
          <el-option label="1" value="shanghai"></el-option>
          <el-option label="2" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="充电桩类型">
        <el-select v-model="formData.e" placeholder="充电桩类型">
          <el-option label="1" value="shanghai"></el-option>
          <el-option label="2" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-button type="primary">重置</el-button>
  </div>
</template>

<script>
export default {
  name: "topForm-charge",
  data() {
    return {
      formData: {
        value: "",
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
      },
    };
  },
};
</script>

<style lang="less">
  .form-box {
    align-items: center;
    .el-form--label-top .el-form-item__label {
      padding: 0;
      line-height: 24px;
      font-family: 'Microsoft YaHei';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #0C1243;
    }
  }
</style>
