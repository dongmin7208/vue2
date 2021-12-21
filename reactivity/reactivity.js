var vm1 =new Vue({
    el:"#app1",
    data: {
     message1: 'instances1'
    }
})
new Vue({
    el:"#app2",
    data: {
    }
})
vm1.message1 = 'instances1'
