import { defineStore } from "pinia";
import { RouterLink } from 'vue-router'
import { h } from 'vue'

const useMenu = defineStore('menu', {
  state: () => {
    return {
      menuOptions: [
        {
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  name: 'myClass',
                }
              },
              { default: () => '我的课程' }
            ),
          key: "MyClass",
        },
        {
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  name: 'accountSet',
                }
              },
              { default: () => '账户设置' }
            ),
          key: "accountSet",
        },
        {
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  name: 'info',
                }
              },
              { default: () => '订单信息' }
            ),
          key: "info",
        },
        {
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  name: 'tokens',
                }
              },
              { default: () => 'Tokens' }
            ),
          key: "tokens",
        },
      ],
    }
  },
})


export default useMenu