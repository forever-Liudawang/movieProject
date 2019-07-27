import Vue from 'vue';
import alertLocation from './alertLocation';

export var locationInfo=(function(){
    var defaults={
        title:'',
        content:'',
        cancel:'',
        change:'',
        ok:'',
        handleCancel:null,
        handleChange:null,
    }
    return function(opts){
        for(let i in opts){
            defaults[i]=opts[i];

        }
        var Mycomponent=Vue.extend(alertLocation);
        var vm=new Mycomponent({
            el:document.createElement('div'),
            data:{
                title:defaults.title,
                content:defaults.content,
                cancel:defaults.cancel,
                change:defaults.change
            },
            methods:{
                handleCancel(){
                    defaults.handleCancel&&defaults.handleCancel.call(this)
                    document.body.removeChild(vm.$el)
                },
                handleChange(){
                    defaults.handleChange&&defaults.handleChange.call(this)
                    document.body.removeChild(vm.$el)
                }
            }
        })
        document.body.appendChild(vm.$el)
    }
})()