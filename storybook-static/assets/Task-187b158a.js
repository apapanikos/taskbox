import{r,a as c,e as k,g as i,z as _,A as u,o as d}from"./vue.esm-bundler-6add88c9.js";const m=(e,t)=>{const a=e.__vccOpts||e;for(const[s,l]of t)a[s]=l;return a},o={name:"Task",props:{task:{type:Object,required:!0,default:()=>({id:"",state:"",title:""}),validator:e=>["id","state","title"].every(t=>t in e)}},emits:["archive-task","pin-task"],setup(e,{emit:t}){return e=r(e),{classes:c(()=>({"list-item TASK_INBOX":e.task.state==="TASK_INBOX","list-item TASK_PINNED":e.task.state==="TASK_PINNED","list-item TASK_ARCHIVED":e.task.state==="TASK_ARCHIVED"})),isChecked:c(()=>e.task.state==="TASK_ARCHIVED"),archiveTask(){t("archive-task",e.task.id)},pinTask(){t("pin-task",e.task.id)}}}},h=["for","aria-label"],v=["checked","name","id"],T=["for","aria-label"],b=["value","id"],f=["id","aria-label"],x=i("span",{class:"icon-star"},null,-1),A=[x];function y(e,t,a,s,l,C){return d(),k("div",{class:u(s.classes)},[i("label",{for:"checked"+a.task.id,"aria-label":"archiveTask-"+a.task.id,class:"checkbox"},[i("input",{type:"checkbox",checked:s.isChecked,disabled:"",name:"checked"+a.task.id,id:"archiveTask-"+a.task.id},null,8,v),i("span",{class:"checkbox-custom",onClick:t[0]||(t[0]=(...n)=>s.archiveTask&&s.archiveTask(...n))})],8,h),i("label",{for:"title-"+a.task.id,"aria-label":a.task.title,class:"title"},[i("input",{type:"text",readonly:"",value:a.task.title,id:"title-"+a.task.id,name:"title",placeholder:"Input title"},null,8,b)],8,T),s.isChecked?_("",!0):(d(),k("button",{key:0,class:"pin-button",onClick:t[1]||(t[1]=(...n)=>s.pinTask&&s.pinTask(...n)),id:"pinTask-"+a.task.id,"aria-label":"pinTask-"+a.task.id},A,8,f))],2)}const I=m(o,[["render",y]]);o.__docgenInfo={displayName:"Task",exportName:"default",description:"",tags:{},props:[{name:"task",type:{name:"object"},required:!0,defaultValue:{func:!1,value:`{
  id: '',
  state: '',
  title: ''
}`}}],events:[{name:"archive-task"},{name:"pin-task"}],sourceFiles:["/Users/alex-papanikos/Documents/dev/examples/vue/storybook-vue/taskbox/src/components/Task.vue"]};export{I as T,m as _};
//# sourceMappingURL=Task-187b158a.js.map
