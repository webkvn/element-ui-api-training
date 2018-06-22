<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-input-number v-model="num2" :disabled="true"></el-input-number>
      </el-col>
    </el-row> 
    <el-row>
      <el-col :span="12" :offset="6">
        <el-input-number v-model="num3" :step="2"></el-input-number>
      </el-col>
    </el-row>  
    <el-row>
      <el-col :span="12" :offset="6">
        <el-input-number v-model="num9" :precision="2" :step="0.1" :max="10"></el-input-number>
      </el-col>
    </el-row>
    <el-row>
      <el-input-number v-model="num4"></el-input-number>
      <el-input-number size="medium" v-model="num5"></el-input-number>
      <el-input-number size="small" v-model="num6"></el-input-number>
      <el-input-number size="mini" v-model="num7"></el-input-number>
    </el-row>  
    <el-row>
      <el-col :span="12" :offset="6">
        <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
      </el-col>
    </el-row>            
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  data () {
    return {
     num1: 1,
     num2: 1,
     num3: 5,
     num9: 1,
     num4: 1,
     num5: 1,
     num6: 1,
     num7: 1,
    }
  },
  methods:{
      handleChange(value) {
        console.log(value);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .el-row{
    padding-bottom:20px;
  }
</style>
