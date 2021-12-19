var vm1 =new Vue({
    el:"#app1",
    data: {
     message1: 'instances1'
    }
})
var vm2 =new Vue({
    el:"#app2",
    data: {
        message: 'instances2'
    },
    methods: {
        changeMessage1: function () {
            vm1.message1 = "eee"
        }
    }
})