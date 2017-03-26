<template>
  <div id="home">
  	<keep-alive>
			<router-view > </router-view>
		</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  }
}
</script>

<style>
#home{
	width: 100%;
	height: 100%;
}

</style>
