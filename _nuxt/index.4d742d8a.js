import{_ as S}from"./nuxt-link.22befdd6.js";import A from"./ContentRenderer.195330f1.js";import V from"./ContentDoc.a17d27e2.js";import{u as p,q as m}from"./query.592fdfc1.js";import{g as q,h,s as B,f,r as v,i as O,w as n,o as R,d as o,b as e,a,t as C,u as l}from"./entry.2a788734.js";import"./ContentRendererMarkdown.vue.aba778c0.js";import"./index.b0fe9fac.js";import"./preview.5f47ddc5.js";import"./vue.f36acd1f.29eef25e.js";import"./ContentQuery.e9b74b2a.js";const $=q("counter",()=>{const r=h(0);function t(){r.value++}return{count:r,increment:t}}),D=a("br",null,null,-1),L=a("br",null,null,-1),P=a("div",{id:"test-btn"},"テスト",-1),T=a("h1",null,"useState実装例",-1),Q={__name:"index",async setup(r){let t,u;const x=$(),{count:_}=B(x),{data:i}=([t,u]=f(()=>p(async()=>m("midi2.0-docs","/ca901").findOne(),"$PslAyef5YX")),t=await t,u(),t),{data:k}=([t,u]=f(()=>p(async()=>m("/nv10").findOne(),"$6PO73qLRkI")),t=await t,u(),t);let s=h(i);const y=()=>(console.log("できてる"),s=i,_.value++),b=()=>(s=k,_.value++);return(I,X)=>{const c=S,g=A,w=V,d=v("v-btn"),N=v("v-app");return R(),O(N,null,{default:n(()=>[o(" インデックス "),e(c,{to:"/[...slug]"},{default:n(()=>[o(" slug ")]),_:1}),D,e(c,{to:"/ca"},{default:n(()=>[o(" caのページ ")]),_:1}),a("div",null,[o("マークダウンが切り替わるよ、ここは.vueの範囲だよ "),L,a("div",null,[o(C(l(_))+" "+C(l(s))+" ",1),e(w,{value:l(s)},{default:n(()=>[e(g,{value:l(s)},null,8,["value"])]),_:1},8,["value"]),e(c,{to:"",event:"",onClick:y},{default:n(()=>[e(d,null,{default:n(()=>[o("CAボタン")]),_:1})]),_:1}),e(c,{to:"",event:"",onClick:b},{default:n(()=>[e(d,null,{default:n(()=>[o("NVボタン")]),_:1})]),_:1}),P])]),a("div",null,[T,e(c,{to:"/nv"},{default:n(()=>[o("テストページ")]),_:1})])]),_:1})}}};export{Q as default};
