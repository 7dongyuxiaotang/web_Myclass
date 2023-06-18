<template>
  <n-card class="tokens-expend" :segmented="{
    content: true,
    footer: 'soft'
  }" content-style="padding:10px 24px;font-weight:bolder;display:flex;" footer-style=";padding:0">
    <!-- IosCloudDone -->
    <Icon size="22" color="green">
      <IosCloudDone />
    </Icon>
    <span class="tokens-expend_title">Plus 专业版</span>
    <template #footer>
      <p style="font-size: 12px;color:#9BA2A5">Token 使用</p>
      <div style="display: flex;align-items: center;">
        <Icon size="25">
          <BrandCodesandbox />
        </Icon>
        <p style="font-size: 20px;margin: 0;font-weight: bolder;"> 已使用 1,982,041/总额100,000,000</p>

      </div>
    </template>
  </n-card>
</template>

<script setup>

import { IosCloudDone } from '@vicons/ionicons4'
import { BrandCodesandbox, Shield } from '@vicons/tabler'
import { Icon } from '@vicons/utils'



</script>

<style lang="scss" scoped>
.tokens-expend {
  background-color: #EDF7F2;
  border-color: #D6EDE1;
}
</style>