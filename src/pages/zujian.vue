<template>
	<div>
		<uploadImg class="" :imgUrl='img.url' :Size='1' @getVal='v=>img.url=v'></uploadImg>
		<MySwitch :isOpen="switchVal" @click.native="switchVal = (switchVal=='1'?'0':'1')"></MySwitch>
	</div>
  
 

</template>
<script>
	import uploadImg from '@/components/imgs.vue'
	import MySwitch from '@/components/myswitch.vue'
  export default {
    data() {
      return {
        img:{},
        switchVal:'1',
      };
    },
    components:{uploadImg,MySwitch},
    created(){
    	
    },
    methods: {
    	
    },
    
  }
</script>
<style scoped lang="scss">
@import url("../styles/publicStyle.css");
	
</style>