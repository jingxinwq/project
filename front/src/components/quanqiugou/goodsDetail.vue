<template>
  <div id="goodsDetail">

  </div>
</template>

<script>
import axios from "axios";
import router from "../../routerConfig";
export default {
  name: 'goodsDetail',
  data () {
    return {

    }
  },
  mounted(){
     axios.get('http://localhost:3000/goodsDetail/obj2',{params: {id: this.$route.params.goodsId
  	}
						}).then(response=>{
  							console.log(response)
  							

								
  						})
  						.catch(function (error) {
                console.log(error);
              });         
	}
}
</script>

<style scoped>

</style>
