<template>
  <div>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-time-select
          v-model="value1"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }"
          placeholder="选择时间">
        </el-time-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-time-picker
          v-model="value2"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="任意时间点">
        </el-time-picker>
        <el-time-picker
          arrow-control
          v-model="value3"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="任意时间点">
        </el-time-picker>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-time-select
          placeholder="起始时间"
          v-model="startTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }">
        </el-time-select>
        <el-time-select
          placeholder="结束时间"
          v-model="endTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: startTime
          }">
        </el-time-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="6">
        <el-time-picker
          is-range
          v-model="value4"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </el-time-picker>
        <el-time-picker
          is-range
          arrow-control
          v-model="value5"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </el-time-picker>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
     value1: '',
     value2: new Date(2016, 9, 10, 18, 40),
     value3: new Date(2016, 9, 10, 18, 40),
     startTime: '',
     endTime: '',
     value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
     value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
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
