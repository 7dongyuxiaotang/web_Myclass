<template>
  <div style="position: relative;">
    <n-layout>
      <Header />
      <n-layout has-sider :style="{ 'margin': '20px' }">
        <Sider :style="{ 'margin-right': '20px' }" />
        <!-- <Content class="content"/> -->
        <router-view ></router-view>
      </n-layout>
      <Footer />
    </n-layout>
    <Report />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../../components/Header/Header.vue'
import Sider from '../../components/Sider/Sider.vue'
import Footer from '../../components/Footer/Footer.vue'
import Report from '../../components/Report/Report.vue'




onMounted(() => {
    const router = useRouter()
    router.push('/tokens')
})



</script>

<style scoped lang="scss"></style>
