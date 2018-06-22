<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-switch
          v-model="value2"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-switch
          v-model="value3"
          active-text="按月付费"
          inactive-text="按年付费">
        </el-switch>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-switch
          style="display: block"
          v-model="value4"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="按月付费"
          inactive-text="按年付费">
        </el-switch>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-switch
          v-model="value6"
          disabled>
        </el-switch>
      </el-col>
    </el-row>


  </div>
</template>

<script>
export default {
  name: 'Switch',
  data () {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: true,
      value6: true,
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .el-row{
    padding-bottom:20px;
  }
</style>
