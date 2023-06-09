import{T}from"./Task-187b158a.js";import{a as e}from"./chunk-KKE3V3AL-49257385.js";import"./vue.esm-bundler-6add88c9.js";import"./_commonjsHelpers-87174ba5.js";const D={component:T,title:"Task",tags:["autodocs"],argTypes:{onPinTask:{},onArchiveTask:{}},excludeStories:/.*Data$/},S={onPinTask:e("pin-task"),onArchiveTask:e("archive-task")},a={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},s={args:{task:{...a.args.task,state:"TASK_PINNED"}}},t={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};var r,n,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,i,k;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(k=(i=s.parameters)==null?void 0:i.docs)==null?void 0:k.source}}};var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const _=["actionsData","Default","Pinned","Archived"];export{t as Archived,a as Default,s as Pinned,_ as __namedExportsOrder,S as actionsData,D as default};
//# sourceMappingURL=Task.stories-dcd41d6d.js.map
