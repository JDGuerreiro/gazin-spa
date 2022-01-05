const routes=[
    {path:'/home',component:home},
    {path:'/developer',component:developer},
    {path:'/level',component:level}
]

const router=new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')