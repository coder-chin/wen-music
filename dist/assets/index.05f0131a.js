import{s as i,d as a,i as m,R as w,r as L,z as $,j as r,e as o,S as v,k as R,A as I}from"./index.db9ffd2b.js";const S=i.div`
  position: fixed;
  top: 90px;
  bottom: ${t=>t.play?"60px":0};
  width: 100%;
  .offical,
  .global {
    margin: 10px 5px;
    padding-top: 15px;
    font-weight: 700;
    font-size: ${a["font-size-m"]};
    color: ${a["font-color-desc"]};
  }
`,z=i.ul`
  margin-top: 10px;
  padding: 0 5px;
  display: ${t=>t.globalRank?"flex":""};
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${a["background-color"]};
  &::after {
    content: '';
    display: block;
    width: 32vw;
  }
`,C=i.li`
  display: ${t=>t.tracks.length?"flex":""};
  padding: 3px 0;
  border-bottom: 1px solid ${a["border-color"]};
  .img_wrapper {
    width: ${t=>t.tracks.length?"27vw":"32vw"};
    height: ${t=>t.tracks.length?"27vw":"32vw"};
    border-radius: 3px;
    position: relative;
    .decorate {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient
        (hsla (0, 0%, 100%, 0), hsla (0, 0%, 43%, 0.4));
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
    .update_frequecy {
      position: absolute;
      left: 7px;
      bottom: 7px;
      font-size: ${a["font-size-ss"]};
      color: ${a["font-color-light"]};
    }
  }
`,D=i.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 10px;
  > li {
    font-size: ${a["font-size-s"]};
    color: grey;
  }
`,j=t=>{const{rankList:c,loading:u,songsCount:h}=t,{getRankListDataDispatch:f}=t;let l=c?c.toJS():[],d=u?{display:"none"}:{display:""};L.exports.useEffect(()=>{f()},[]);const x=n=>{console.log(n),t.history.push(`/rank/${n.id}`)};let p=$(l),k=l.slice(0,p),y=l.slice(p);const g=(n,s)=>o(z,{globalRank:s,children:n.map(e=>r(C,{tracks:e.name,onClick:()=>x(e),children:[r("div",{className:"img_wrapper",children:[o("img",{src:e.coverImgUrl,alt:""}),o("div",{className:"decorate"}),o("span",{className:"update_frequecy",children:e.updateFrequency})]}),b(e.tracks)]},e.coverImgId))}),b=n=>n.length?o(D,{children:n.map((s,e)=>r("li",{children:[e+1,". ",s.first," - ",s.second]},s.second))}):null;return r(S,{play:h,children:[o(v,{children:r("div",{children:[o("h1",{className:"offical",style:d,children:"\u5B98\u65B9\u699C"}),g(k),o("h1",{className:"global",style:d,children:"\u5168\u7403\u699C"}),g(y,!0)]})}),R(t.route.routes)]})},N=t=>({rankList:t.getIn(["rank","rankList"]),loading:t.getIn(["rank","loading"]),songsCount:t.getIn(["player","playList"]).size}),_=t=>({getRankListDataDispatch(){t(I())}}),B=m(N,_)(w.memo(j));export{B as default};
