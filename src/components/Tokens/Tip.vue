<template>
  <n-card style="background-color: #FAFAFC;">
    <div style="display: flex; align-items: center;">
      <Icon size="25">
        <Shield />
      </Icon>
      <n-text style="font-weight: bolder; font-size: 18px;margin-left:5px">同学你好：</n-text>
    </div>
    <n-ul>
      <n-li v-for="item, index in desc" :key="index" style="list-style:none">{{ item }}</n-li>
    </n-ul>
  </n-card>
</template>

<script setup>
import { Shield } from '@vicons/tabler'
import { Icon } from '@vicons/utils'


const { desc } = defineProps(['desc'])

</script>

<style lang="scss" scoped></style>