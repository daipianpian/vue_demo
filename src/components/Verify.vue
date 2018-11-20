<template>
	<div class="verify-wrap">
		<h2>表单验证</h2>
		<el-form :model="formDatas" :rules="formRules" ref="formDatas" :label-width="formLabelWidth">
	      <el-form-item label="名称" prop="name">
	        <el-input v-model="formDatas.name"></el-input>
	      </el-form-item>
	      <el-form-item>
	        <el-button type="primary" @click="onSubmit('formDatas')">立即创建</el-button>
	        <el-button>取消</el-button>
	      </el-form-item>
	    </el-form>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
    data () {
	  	// 验证名字，只能输入字母或数字
	    const checkName = (rule, value, callback) => {
	        if (!value) {
	          return callback(new Error('名称不能为空'));
	        } else {
	          const reg = /^[0-9a-zA-Z]*$/g;
	          if (reg.test(value)) {
	              callback();
	          } else {
	              return callback(new Error('名称需为字母或数字'));
	          }
	        }
	    };
	    return {
			formLabelWidth: '120px',
			formDatas: {
				name: null
			},
			formRules: {
				name: [
					{ required: true, validator: checkName, trigger: 'blur' }
				]
			}

	    }
    },
    methods: {
    	// 提交保存
        onSubmit(formDatas){
          this.$refs[formDatas].validate((valid) => {
            if (valid) {
              this.$message({
                message: '校验成功！',
                type: 'success'
              });
            } else {
                this.$message.error('校验失败！');
                console.log('error submit!!');
                return false;
              }
          })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped> -->
<style>
.verify-wrap{width: 600px;margin: 20px auto;}
</style>