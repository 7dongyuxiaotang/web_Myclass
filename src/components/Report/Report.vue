<template>
    <div class="report">
      <div class="content">
        <Icon size="25">
          <Headset />
        </Icon>
        <p class="text">投诉举报</p>
      </div>
    </div>
</template>

<script setup>
import { Headset } from '@vicons/tabler'
import { Icon } from '@vicons/utils'

</script>

<style lang="scss" scoped>

.report {
  position: fixed;
  right: 10px;
  bottom: 70px;
  border: 2px solid rgb(239, 239, 245);
  background-color: #FAFAFC;
  border-radius: 3px;
  overflow: hidden;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .content {
    text-align: center;

    .text {
      margin: auto;
    }
  }

}
</style>