<template>
  <div class="app-container">
    <div>当前数值{{ countComputed }}</div>
    <div>双倍数值{{ doubleCount }}</div>
    <el-button type="primary" size="default" @click="countStore.countAdd">+1</el-button>
    <el-button type="primary" size="default" @click="countStore.countAdd">-1</el-button>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useCountStore } from "@/store";
import { storeToRefs } from "pinia";
const countStore = useCountStore();
const countComputed = computed(() => countStore.count);
const { doubleCount } = storeToRefs(countStore);
</script>
<style scoped lang="scss"></style>
