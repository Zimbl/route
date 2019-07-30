import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router) 
// import Home from "@/views/Home.vue"
// import List from "@/views/List.vue"
// import Mine from "@/views/Mine.vue"
const router =  new Router({
  routes: [
    // {path:"/home",component:Home},
    {path:"/",redirect:"/home"},
    {path:"/home",component:()=>import("@/views/Home")},
    {path:"/list",component:()=>import("@/views/List"),children:[
      {path:"",redirect:"guonei"},
      {path:"guonei",component:()=>import("@/views/Guonei")},
      {path:"guoji",component:()=>import("@/views/Guoji"),name:'gj'},

    ]},
    {path:"/mine",component:()=>import("@/views/Mine")},
    {path:"/detail/:id",component:()=>import("@/views/Detail"),name:'detail'}

  ]
})
export default router
