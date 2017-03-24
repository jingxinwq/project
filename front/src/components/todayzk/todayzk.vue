<template>

</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
// import router from "../router" ;
import axios from "axios";


require('vue-swipe/dist/vue-swipe.css');
export default {
  name: 'home',
  data () {
    return {

    }
  },
  mounted(){
  	//ajax 请求
  	axios.get("http://localhost:3000/homeapi/select1_1")
      .then( response=>{	
      	console.log(response)		
        // this.cityData = response.data.name
      })
      .catch(function (error) {
        console.log(error);
	});

  },
  components:{
  		"swipe":Swipe,
  		"swipe-item":SwipeItem
  },
  methods:{
  	changePage(id){
  		router.push({ name: 'detail', params: { restaurantid: id }})
  	}
  },
  computed:{
  	
  }
}
</script>

<style scoped>

</style>
