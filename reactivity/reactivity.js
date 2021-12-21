var vm =new Vue({
    el:"#app",
    data: {
     message: 'hello',
     firstName: 'park',
     lastName: 'dongmin'
    },
    computed: {
        fullName: {
          get () {
            alert("Assembling Full Name ... ");
            return this.firstName + ' ' + this.lastName;
          },
          set (newValue) {
            alert("Setting new name: " + newValue);
            const parts = newValue.split(' ');
            this.firstName = parts[0];
            this.lastName = parts[parts.length - 1];
          }
        }
      },
      methods: {
        // ...
        changeNameSetter: function(newName) {
          this.fullName = newName; 
        }
      },
})
// vm.message= ' change!'
// vm.message = 'change'
// vm.name = 'park'
console.log(vm)