new Vue({
    el:"#app",
    data: {
        fruits: ['apple', 'bannana', 'fudou'],
        
    },
    methods: {
        remove: function() {
            this.fruits.shift()
        }
    }
})