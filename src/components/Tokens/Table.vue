<template>
  <n-data-table :columns="columns" :data="data" />
</template>

<script setup>

const {columns,data} = defineProps(['columns','data'])

</script>

<style lang="scss" scoped></style>