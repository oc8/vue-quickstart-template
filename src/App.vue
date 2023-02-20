<script lang="ts" setup>
import { ref } from 'vue'
import { useAppStore } from '@/store/app'

let app = useAppStore()
</script>

<template>
  <div>
		<router-view/>
  </div>
</template>

<style lang="scss">
p {
	color: v-bind("app.colors.text")
}
</style>
