<template>
  <n-layout-sider  width="180">
    <n-menu :options="menuOptions" @update:value="handleUpdateValue" default-value="tokens"/>
  </n-layout-sider>
</template>

<script setup>
import useMenu from '../../store/useMenu'

const store = useMenu();

const { menuOptions } = store


function handleUpdateValue(key, item) {

}

</script>

<style lang="scss" scoped>
.n-layout-sider{
  .n-menu{
    border: 1px solid rgb(239, 239, 245);
    border-radius: 3px;
    overflow: hidden;;
  }
}
</style>