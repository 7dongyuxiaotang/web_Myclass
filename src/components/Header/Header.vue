<template>
  <n-layout-header>
    <div class="left">
      <!-- 上课网icon -->
      <Icon size="22">
        <LetterS />
      </Icon>
      <span class="title">上课网</span>
    </div>
    <div class="right">
      <n-button ghost size="tiny" bordered>
        <Icon size="22">
          <AntennaBars5 />
        </Icon>
        ChatGPT
      </n-button>
      <!-- 头像框 -->
      <n-avatar round :size="15"
        src="https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/4afbfbedab64034f78ef0522acc379310a551df7.jpg"
        class="avatar" />

      <n-dropdown trigger="hover" :options="options" :show-arrow="true" @select="handleSelect">
        <n-button ghost size="tiny" :bordered="false">陈文达@ChatGPT</n-button>
      </n-dropdown>
    </div>
  </n-layout-header>
</template>

<script setup>
import { LetterS, AntennaBars5 } from '@vicons/tabler'
import { Icon } from '@vicons/utils'

const options = [
  {
    label: "个人中心",
    key: "marina bay sands",
  }
]

const handleSelect = (key) => {

}

</script>

<style lang="scss" scoped>
.n-layout-header {
  background: #fff;
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px -8px 15px 0px darkgray;

  .left {
    font-size: 22px;
    font-weight: bolder;
    display: flex;
    align-items: center;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;

    .avatar {
      margin-left: 12px;
    }

    :deep(.n-button) {
      .n-button__content {
        transform: scale(0.9);
      }
    }
  }
}</style>