<template>
  <n-layout-content>
    <n-card size="huge" :segmented="{
      content: true,
      footer: 'soft'
    }" content-style="padding:28px 24px" footer-style="margin:0 24px;padding:28px 20px">
      <span class="title">Tokens : {{ time }}</span>
      <template #footer>
        <!-- 消耗量开始 -->
        <Expend />
        <!-- 消耗量结束 -->

        <!-- 表格操作开始 -->
        <Table :columns="columns" :data="data"></Table>
        <!-- 表格操作借宿 -->

        <!-- 排印开始 -->
        <Tip :desc="desc"></Tip>
        <!-- 排印结束 -->
      </template>
    </n-card>


  </n-layout-content>
</template>

<script setup>
import { h , ref } from 'vue'
import { NButton } from 'naive-ui'
import Expend from '../../components/Tokens/Expend.vue'
import Table from '../../components/Tokens/Table.vue'
import Tip from '../../components/Tokens/Tip.vue'
import axios from 'axios'

const columns = [
  {
    title: "方案",
    key: "plan",
    render(row) {
      return h(
        NButton,
        {
          strong: true,
          secondary: true,
          type: 'success',
          size: "small",
          onClick: () => console.log('点击了')
        },
        { default: () => "Plus 专业版" }
      );
    }
  },
  {
    title: "描述",
    key: "desc"
  },
  {
    title: "操作",
    key: "actions",
    render(row) {
      return h(
        NButton,
        {
          strong: true,
          quaternary: true,
          size: "small",
          type: "info",
          onClick: () => console.log('点击了')
        },
        { default: () => "续费100W tokens" }
      );
    }
  }
]
const data = [
  {
    desc: '仅用于教学用途，不支持大量商用和其他非教学用途'

  }
]

const desc = [
  '1) 消耗tokens数量在 1000,000 以内，可以继续使用教学环境;',
  '2) 在2023年5月10日24时之前，如果消耗tokens超过 1000,000，统一按照1,000,000计算，无需补交费用，后续继续使用则需要开始充值;',
  '3) 同学优惠充值价格为: 20元/1,000,000 tokens',
  '4) 请注意，已充值费用，不接受退费和转赠，请避免单次大额充值;',
  '5) 充值完成后的10分钟内，对应的tokens将到账，祝你使用愉快!'
]

let time = ref(0)

axios.get('/api/todos/time').then(res => {
  if(res.data.code === 200){
    time.value = new Date(res.data.time)
  }
})

</script>

<style lang="scss" scoped>
.n-layout-content {
  border: 1px solid rgb(239, 239, 245);
  border-radius: 3px;
  overflow: hidden;

  .n-card__content {
    .title {
      font-weight: bolder;
    }

  }

  .n-card__footer {

    .n-data-table {
      margin: 12px 0;
    }
  }

}
</style>