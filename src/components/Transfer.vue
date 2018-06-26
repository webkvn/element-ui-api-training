<template>
  <div>
    <el-transfer v-model="value1" :data="data"></el-transfer>
     <el-transfer
    filterable
    :filter-method="filterMethod"
    filter-placeholder="请输入城市拼音"
    v-model="value2"
    :data="data2">
  </el-transfer>
  </div>
</template>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value1: [1, 4]
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .el-row{
    padding-bottom:20px;
  }
</style>
