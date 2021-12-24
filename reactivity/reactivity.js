var data = {
    message: 'こんにちは',
    name: 'どんどん'
}

var vm =new Vue({
    el:"#app",
    data: data
})

console.log(data === vm.$data);
console.log(vm)