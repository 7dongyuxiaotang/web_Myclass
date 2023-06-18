import { createWebHashHistory , createRouter } from 'vue-router'
import accountSet from '../views/accountSet/accountSet.vue'
import info from '../views/info/info.vue'
import tokens from '../views/tokens/tokens.vue'
import myClass from '../views/myClass/myClass.vue'
import mainBox from '../views/mainBox/mainBox.vue'
 
const routes = [
  {
    path:'/',
    name:'mainBox',
    component:mainBox,
    children:[
      {
        path:'/accountSet',
        name:'accountSet',
        component:accountSet
      },
      {
        path:'/info',
        name:'info',
        component:info
      },
      {
        path:'/tokens',
        name:'tokens',
        component:tokens
      },
      {
        path:'/myClass',
        name:'myClass',
        component:myClass
      }
    ]
  },
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router
