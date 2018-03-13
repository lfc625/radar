//定义
var Tabs = {
	ADD_FIELD_TAB: 0,
  	FIELD_SETTINGS_TAB: 1,
  	FORM_SETTINGS_TAB: 2
};
var Field_Types = [
	"text","number","textarea","checkbox","radio"
];
var Field_Types_cn=[
	
];
//初始化页面
var formMakerEditor = function(){
	var editData = {
		    items:[{
		    	icon:'icon-font',
		    	name:'input'
		    },{
		    	icon:'icon-circle-blank',
		    	name:'radio'
		    },{
		    	icon:'icon-check-empty',
		    	name:'checkBox'
		    },{
		    	icon:'icon-caret-down',
		    	name:'select'
		    },{
		    	icon:'icon-folder-close-alt',
		    	name:'Text-Area'
		    },{
		    	icon:'icon-link',
		    	name:'Url'
		    },{
		    	icon:'icon-envelope',
		    	name:'Email'
		    },{
		    	icon:'icon-key',
		    	name:'PassWord'
		    },{
		    	icon:'icon-calendar',
		    	name:'DateTime'
		    },{
		    	icon:'icon-phone',
		    	name:'Phone'
		    },{
		    	icon:'icon-pencil',
		    	name:'Number'
		    },{
		    	icon:'icon-search',
		    	name:'search'
		    },{
		    	icon:'icon-resize-horizontal',
		    	name:'range'
		    },{
		    	icon:'icon-download-alt',
		    	name:'fileupload'
		    }]
		};
		formData = {
			isshow:false,
			needshow:'',
			order:0,
		    items:[]
		};
		var getDefaultDataForType = function(type) {
		  var typeCase = type.toLocaleLowerCase();
		  switch (typeCase) {
		  case 'input': return {
		  		title:'用户名',
		  		name:'text',
		  		placeholder:'',
		  		value:'',
		  		isrequired:false,
		  		filed_type:1,
		  		selected_prop_value:null
		  };
		  case 'number':
		    return {
		      title:'数字',
	  		  name:'number',
	  		  placeholder:'',
	  		  value:'',
	  		  isrequired:false,
	  		  filed_type:1,
	  		  selected_prop_value:null
		    };
		  case 'text-area': return {
	  		  title:'文本框',
	  		  name:'textarea',
	  		  placeholder:'This is an example of HTML5 placeholder text.',
	  		  isrequired:false,
	  		  filed_type:3,
	  		  selected_prop_value:null
		  };
		  case 'checkbox':
		    return {
		      title: "Check all that apply",
		      name:"checkbox",
		      choices: [
		        {choice: "First Choice"},
		        {choice: "Second Choice"},
		        {choice: "Third Choice"}
		      ],
		      isrequired:false,
		      filed_type:2,
		      selected_prop_value:null
		    };
		  case 'radio':
		    return {
		      title: "Select a Choice",
		      name:"radio",
		      choices: [
		        {choice: "First Choice"},
		        {choice: "Second Choice"},
		        {choice: "Third Choice"}
		      ],
		      isrequired:false,
		      filed_type:2,
		      selected_prop_value:null
		    };
		  case 'select':
		    return {
		      title: "Select a Choice",
		      name:"select",
		      choices: [
		        {choice: "First Choice"},
		        {choice: "Second Choice"},
		        {choice: "Third Choice"}
		      ],
		      isrequired:false,
		      filed_type:4,
		      selected_prop_value:null
		    };
		  case "phone":
		    return {
		      title: "电话号码",
		      name:'tel',
	  		  placeholder:'',
	  		  value:'',
	  		  isrequired:false,
	  		  filed_type:1,
	  		  selected_prop_value:null
		    };
		  case 'fileupload':
		  	return {
		      title:'上传XXX',
	  		  name:'file',
	  		  placeholder:'',
	  		  value:'',
	  		  isrequired:false,
	  		  filed_type:1,
	  		  selected_prop_value:null
		    };
		  case "datetime":
		  	return {
		      title:'Datetime',
	  		  name:'datetime-local',
	  		  placeholder:'',
	  		  value:'',
	  		  isrequired:false,
	  		  filed_type:1,
	  		  selected_prop_value:null
		    };
    	  case "password":
    	  	return {
    	      title:'密码',
      		  name:'password',
      		  placeholder:'Alphanumeric123!',
      		  value:'',
      		  isrequired:false,
      		  filed_type:1,
      		  selected_prop_value:null
    	    };
		  case "email":
		  return {
		      title:'邮箱',
	  		  name:'email',
	  		  placeholder:'name@example.com',
	  		  value:'',
	  		  isrequired:false,
	  		  filed_type:1,
	  		  selected_prop_value:null
		    };
		  case "range":return{
	  		  title:'range',
	  		  name:'range',
	  		  placeholder:'',
	  		  value:'',
	  		  isrequired:false,
	  		  filed_type:1,
	  		  selected_prop_value:null
		  }
		  case "url":return{
	  		  title:'url',
	  		  name:'url',
	  		  placeholder:'',
	  		  value:'http://',
	  		  isrequired:false,
	  		  filed_type:1,
	  		  selected_prop_value:null
		  }
		  case "search":return{
	  		  title:'搜索',
	  		  name:'search',
	  		  placeholder:'',
	  		  value:'',
	  		  isrequired:false,
	  		  filed_type:1,
	  		  selected_prop_value:null
		  };
		  }
		};

		var formList={
		  template: '#edit-btn-group',
		  data:function(){
		  	return editData;
		  },
		  methods:{
     			getForm:function(msg){
     				formData.items.push(getDefaultDataForType(msg));
     			}
     		}
		};
		var viewList={
			template:'#view-list',
			data:{
					items: function(){return formData},
					dragging: false
				  },
     		methods:{
     			add:function(index){
      
					this.items.splice(index,0,formData.items[index]);
					console.log(this.items);
     			},
     			remove:function(index){
     				this.items.splice(index,1);
     			},
     			select:function(index){
     				for(var i=0;i<this.items.length;i++){
     					this.items[i].selected_prop_value=null;
     				}
     				this.items[index].selected_prop_value=index;
     				this.isshow = true;
     				this.order=index;
     				$("#edit-form").tab('show');
     			}
    		}
		};
		var viewHandler={
			template:'<div class="clearfix" v-if="isshow">'+
			'<div>'+
			' <label>标题</label><br>'+
			' <textarea v-model="items[order].title" class="xlarge"></textarea>'+
			' <br><label>选择类型</label><br>'+
			' <select v-model="items[order].name"><option value="radio">radio</option><option value="checkbox">checkbox</option><option value="text">text</option><option value="datetime-local">datetime-local</option></select>'+
			' <br><label>是否必填</label><br>'+
			' <input type="checkbox" v-model="items[order].isrequired">'+
			'</div>'+
			'</div>'+
			'<div v-else>请选中一个表单<div>',
			data:function(){
		  		return formData;
		  	}
		};
		new Vue({
			el:'#formMaker',
			data:editData,
			components:{
				'formlist':formList,
				'viewlist':viewList,
				'viewhandler':viewHandler
			},
			methods:{
				load:function(){
					var previewMod=document.getElementById("sortable");
					var html = previewMod.innerHTML;
					editor.html(html);
				}
			}
		});
		
};
