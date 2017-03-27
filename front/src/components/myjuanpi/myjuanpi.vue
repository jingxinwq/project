<template>
<div>
	<Headers/>
	<Mains/>
	<Footers/>
</div>

</template>
<script>
import Headers from './headers/Header.vue'
import Mains from './mains/Main.vue'
import Footers from './footers/Footer.vue'
	export default {
    components: {
    Headers,Mains,Footers
  },
}
</script>
<style>
body{
	background: #f7f7f7;
}
</style>
