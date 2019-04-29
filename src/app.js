import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      items: [
        {name: "Wash Car", priority: 'High' },
        {name: "Hoover Carpet", priority: 'Low'},
        {name: "Change Bins", priority: 'Low'}
      ],
      newItem: "",
      pickedPriority: ""
    },
    methods: {
      saveNewItem: function() {
        this.items.push({
          name: this.newItem,
          priority: this.pickedPriority
        });
        this.newItem = "";
        this.pickedPriority = "";
      },

      changePriorityToLow: function(index) {
        this.items[index].priority = 'Low';
      },
      changePriorityToHigh: function(index) {
        this.items[index].priority = 'High';
      }
    }
  });
});
