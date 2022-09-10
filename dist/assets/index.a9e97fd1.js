import{l as J,m as V,n as q,o as j,q as E,t as P,u as B,f as M,s as p,d as c,p as h,R as $,r as f,e as i,S as U,j as d,i as W,v as Y,x as F,y as K,L as Q,k as X}from"./index.db9ffd2b.js";import{f as Z,_ as ee}from"./index.9b3e4162.js";const x=e=>({type:B,data:M(e)}),m=e=>({type:J,data:e}),y=e=>({type:V,data:e}),C=e=>({type:q,data:e}),D=e=>({type:j,data:e}),I=()=>e=>{E(0).then(n=>{const t=n.artists;e(x(t)),e(y(!1)),e(D(!1))}).catch(n=>{console.log("hot singers error",n)})},te=()=>(e,n)=>{const t=n().getIn(["singers","pageCount"]),o=n().getIn(["singers","singerList"]).toJS();E(t).then(s=>{const a=[...o,...s.artists];e(x(a)),e(C(!1))}).catch(s=>{console.log("hot singers error",s)})},N=(e,n)=>t=>{P(e,n,0).then(o=>{const s=o.artists;t(x(s)),t(y(!1)),t(D(!1))}).catch(o=>{console.log("hot singers error",o)})},ne=(e,n)=>(t,o)=>{const s=o().getIn(["singers","pageCount"]),a=o().getIn(["singers","singerList"]).toJS();P(e,n,s).then(l=>{const g=[...a,...l.artists];t(x(g)),t(C(!1))}).catch(l=>{console.log("hot singers error",l)})},oe=p.div`
  box-sizing: border-box;
  position: fixed;
  top: 95px;
  width: 100%;
  padding: 5px;
  overflow: hidden;
`,se=p.div`
  position: fixed;
  top: 160px;
  left: 0;
  bottom: ${e=>e.play?"60px":0};
  overflow: hidden;
  width: 100%;
`,re=p.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  overflow: hidden;
  .title {
    margin: 10px 0 10px 10px;
    color: ${c["font-color-desc"]};
    font-size: ${c["font-size-s"]};
  }
`,ie=p.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: 0 5px;
  padding: 5px 0;
  align-items: center;
  border-bottom: 1px solid ${c["border-color"]};
  .img_wrapper {
    margin-right: 20px;
    img {
      border-radius: 3px;
      width: 50px;
      height: 50px;
    }
  }
  .name {
    font-size: ${c["font-size-m"]};
    color: ${c["font-color-desc"]};
    font-weight: 500;
  }
`,le=p.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  > span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: ${c["font-size-m"]};
  }
`,ae=p.span`
  flex: 0 0 auto;
  font-size: ${c["font-size-m"]};
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    color: ${c["theme-color"]};
    border: 1px solid ${c["theme-color"]};
    opacity: 0.8;
  }
`;function w(e){const{list:n,currentVal:t,title:o,handleClick:s}=e,a=f.exports.useRef(null);return f.exports.useEffect(()=>{let l=a.current,g=l.querySelectorAll("span"),u=0;Array.from(g).forEach(L=>{u+=L.offsetWidth}),l.style.width=`${u}px`},[]),i(U,{direction:"horizental",children:i("div",{ref:a,children:d(le,{children:[i("span",{children:o}),n.map(l=>i(ae,{className:`${t===l.key?"selected":""}`,onClick:()=>s(l.key),children:l.name},l.name))]})})})}w.defaultProps={list:[],currentVal:"",title:"",handleClick:null};w.propTypes={list:h.exports.PropTypes.array,currentVal:h.exports.PropTypes.string,title:h.exports.PropTypes.string,handleClick:h.exports.PropTypes.func};const A=$.memo(w),ce=e=>{const{data:n,dispatch:t}=f.exports.useContext(Y),{category:o,alpha:s}=n.toJS(),{singerList:a,enterLoading:l,pullUpLoading:g,pullDownLoading:u,pageCount:L,songsCount:_}=e,{getHotSingerDispatch:b,updateDispatch:S,pullUpRefreshDispatch:z,pullDownRefreshDispatch:H}=e;f.exports.useEffect(()=>{a.size||b()},[]);let R=r=>{s!==r&&(t({type:CHANGE_ALPHA,data:r}),S(o,r))},T=r=>{o!==r&&(t({type:CHANGE_CATEGORY,data:r}),S(r,s))},G=()=>{z(o,s,o==="",L)};const k=()=>{H(o,s)},v=r=>{e.history.push(`/singers/${r}`)},O=a?a.toJS():[];return d("div",{children:[d(oe,{children:[i(A,{list:F,title:"\u5206\u7C7B:",currentVal:o,handleClick:T}),i(A,{list:K,title:"\u9996\u5B57\u6BCD:",currentVal:s,handleClick:R})]}),d(se,{play:_,children:[i(U,{pullUp:G,pullDown:k,pullUpLoading:g,pullDownLoading:u,onScroll:Z,children:i(re,{children:O.map(r=>d(ie,{onClick:()=>v(r.id),children:[i("div",{className:"img_wrapper",children:i(ee,{placeholder:i("img",{width:"100%",height:"100%",src:new URL("/assets/singer.a215b051.png",self.location).href,alt:"music"}),children:i("img",{src:`${r.picUrl}?param=300x300`,width:"100%",height:"100%",alt:"music"})})}),i("span",{className:"name",children:r.name})]},r.picId))})}),i(Q,{show:l})]}),X(e.route.routes)]})},pe=e=>({singerList:e.getIn(["singers","singerList"]),enterLoading:e.getIn(["singers","enterLoading"]),pullUpLoading:e.getIn(["singers","pullUpLoading"]),pullDownLoading:e.getIn(["singers","pullDownLoading"]),pageCount:e.getIn(["singers","pageCount"]),songsCount:e.getIn(["player","playList"]).size}),ge=e=>({getHotSingerDispatch(){e(I())},updateDispatch(n,t){e(m(0)),e(y(!0)),e(N(n,t))},pullUpRefreshDispatch(n,t,o,s){e(C(!0)),e(m(s+1)),e(o?te():ne(n,t))},pullDownRefreshDispatch(n,t){e(D(!0)),e(m(0)),e(n===""&&t===""?I():N(n,t))}}),he=W(pe,ge)($.memo(ce));export{he as default};
