new Vue({
    el:'#app',
    data: {
        counter: 0
    },
    computed: {
        lessThanThree: function(){
            return this.counter > 3 ? '3より上' : '３以下'
        }
    },
    watch: {
        counter: function(){
            var vm = this;
            setTimeout(function(){

            },3000)
        }
    }
})