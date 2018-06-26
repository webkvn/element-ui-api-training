<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="6">
        <div class="block">
          <span class="demonstration">有默认值</span>
          <el-color-picker v-model="color1"></el-color-picker>
        </div>
        <div class="block">
          <span class="demonstration">无默认值</span>
          <el-color-picker v-model="color2"></el-color-picker>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-color-picker v-model="color3" show-alpha></el-color-picker>
      </el-col>
    </el-row>    
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
        color1: '#409EFF',
        color2: null,
        color3: 'rgba(19, 206, 102, 0.8)'     
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
