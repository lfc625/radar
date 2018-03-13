var vm = new Vue({
	el: "#main",
	data: {
		list: [ {name: "1"}, 
				{name: "2"}, 
				{name: "3"} ],
		dragging: false
	},
	methods:{
			add: function(){
				this.list.push({name:'Juan'});
			},
			replace: function(){
				this.list=[{name:'Edgard'}]
			}
		}
	});
