<template>
  <n-layout-footer style="margin-top: 150px;">
    <n-card :segmented="{
      content: true,
      footer: 'soft'
    }" :bordered="false" content-style="display:flex;  justify-content: space-between;align-items: center;">
    <div class="content-left">
      <n-button text tag="a" href="#" target="_blank" style="margin-right: 15px;" >
        关于我们
      </n-button>
      <n-button text tag="a" href="#" target="_blank"  style="margin-right: 15px;" >
        老师入住
      </n-button>
      <n-button text tag="a" href="#" target="_blank" style="margin-right: 15px;"  >
        机构合作
      </n-button>
    </div>
    <div class="content-right">
      <p>陕ICP备20230618</p>
    </div>

      <template #footer>
        <p>Copyright @ 2008- 2022 ShangKe.chat All Right Reserved.</p>
      </template>
    </n-card>
  </n-layout-footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.n-card{
  background-color: #fafafa;
}
</style>