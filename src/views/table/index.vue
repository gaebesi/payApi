<style scoped>
*{
  margin: 0;
  padding: 0;
}
.rightBack {
  background: #616161;
  height: 1000px;
}
</style>

<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple">api文档内容</div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple rightBack" >
        <p>示例对象</p>
        <el-input
          type="textarea"
          :rows="10"
          placeholder=""
          v-model="textarea" style="background:rgb(31,33,39)">
        </el-input>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea:''
    };
  },
  filters: {
  },
  created() {
  },
  methods: {
  }
};
</script>
