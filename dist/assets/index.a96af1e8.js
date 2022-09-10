import{U as H,V as K,W as U,X as F,Y as O,f as L,Z as j,_ as G,s as u,d as s,r as l,$ as J,j as a,e as t,i as q,R as A,F as P,S as E,L as Y,a0 as M,I as V}from"./index.db9ffd2b.js";import{f as X,_ as k}from"./index.9b3e4162.js";const Z=e=>({type:O,data:L(e)}),ee=e=>({type:j,data:L(e)}),te=e=>({type:G,data:L(e)}),D=e=>({type:H,data:e}),se=()=>e=>{K().then(o=>{let i=o.result.hots;e(Z(i))})},ne=e=>o=>{U(e).then(i=>{if(!i)return;let c=i.result||[];o(ee(c))}),F(e).then(i=>{if(!i)return;let c=i.result.songs||[];o(te(c)),o(D(!1))})},oe=u.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: ${e=>e.play>0?"60px":0};
  width: 100%;
  z-index: 100;
  overflow: hidden;
  background: #f2f3f4;
  transform-origin: right bottom;
  &.fly-enter,
  &.fly-appear {
    transform: translate3d(100%, 0, 0);
  }
  &.fly-enter-active,
  &.fly-appear-active {
    transition: all 0.3s;
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit {
    transform: translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    transition: all 0.3s;
    transform: translate3d(100%, 0, 0);
  }
`,C=u.div`
  position: absolute;
  top: 40px;
  bottom: 0;
  width: 100%;
  display: ${e=>e.show?"":"none"};
`,re=u.div`
  margin: 0 20px 20px 20px;
  .title {
    padding-top: 35px;
    margin-bottom: 20px;
    font-size: ${s["font-size-m"]};
    color: ${s["font-color-desc-v2"]};
  }
  .item {
    display: inline-block;
    padding: 5px 10px;
    margin: 0 20px 10px 0;
    border-radius: 6px;
    background: ${s["highlight-background-color"]};
    font-size: ${s["font-size-m"]};
    color: ${s["font-color-desc"]};
  }
`,v=u.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  overflow: hidden;
  .title {
    margin: 10px 0 10px 10px;
    color: ${s["font-color-desc"]};
    font-size: ${s["font-size-s"]};
  }
`,z=u.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: 0 5px;
  padding: 5px 0;
  align-items: center;
  border-bottom: 1px solid ${s["border-color"]};
  .img_wrapper {
    margin-right: 20px;
    img {
      border-radius: 3px;
      width: 50px;
      height: 50px;
    }
  }
  .name {
    font-size: ${s["font-size-m"]};
    color: ${s["font-color-desc"]};
    font-weight: 500;
  }
`,ie=u.ul`
  > li {
    display: flex;
    height: 60px;
    align-items: center;
    .index {
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
    .info {
      box-sizing: border-box;
      flex: 1;
      display: flex;
      height: 100%;
      padding: 5px 0;
      flex-direction: column;
      justify-content: space-around;
      border-bottom: 1px solid ${s["border-color"]};
      > span:first-child {
        color: ${s["font-color-desc"]};
      }
      > span:last-child {
        font-size: ${s["font-size-s"]};
        color: #bba8a8;
      }
    }
  }
`,ae=u.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 6px;
  padding-right: 20px;
  height: 40px;
  background: ${s["theme-color"]};
  .icon-back {
    font-size: 24px;
    color: ${s["font-color-light"]};
  }
  .box {
    flex: 1;
    margin: 0 5px;
    line-height: 18px;
    background: ${s["theme-color"]};
    color: ${s["highlight-background-color"]};
    font-size: ${s["font-size-m"]};
    outline: none;
    border: none;
    border-bottom: 1px solid ${s["border-color"]};
    &::placeholder {
      color: ${s["font-color-light"]};
    }
  }
  .icon-delete {
    font-size: 16px;
    color: ${s["background-color"]};
  }
`,le=e=>{const{newQuery:o}=e,{handleQuery:i,back:c}=e,g=l.exports.useRef(),[d,h]=l.exports.useState(""),p=d?{display:"block"}:{display:"none"};let f=l.exports.useMemo(()=>J(i,500),[i]);return l.exports.useEffect(()=>{g.current.focus()},[]),l.exports.useEffect(()=>{f(d)},[d]),l.exports.useEffect(()=>{o!==d&&h(o)},[o]),a(ae,{children:[t("i",{className:"iconfont icon-back",onClick:()=>c(),children:"\uE655"}),t("input",{ref:g,className:"box",placeholder:"\u641C\u7D22\u6B4C\u66F2\u3001\u6B4C\u624B\u3001\u4E13\u8F91",value:d,onChange:x=>{h(x.target.value)}}),t("i",{className:"iconfont icon-delete",onClick:()=>{h(""),g.current.focus()},style:p,children:"\uE600"})]})};function ce(e){const{hotList:o,enterLoading:i,suggestList:c,songsCount:g,songsList:d}=e,{getHotKeyWordsDispatch:h,changeEnterLoadingDispatch:p,getSuggestListDispatch:f,getSongDetailDispatch:$}=e,m=c.toJS(),x=d.toJS(),[N,b]=l.exports.useState(!1),[y,w]=l.exports.useState("");l.exports.useEffect(()=>{b(!0)},[]),l.exports.useEffect(()=>{b(!0),o.size||h()},[]);const I=()=>{b(!1)},_=n=>{w(n),n&&(p(!0),f(n))},R=()=>{let n=o?o.toJS():[];return t("ul",{children:n.map(r=>t("li",{className:"item",onClick:()=>w(r.first),children:t("span",{children:r.first})},r.first))})},B=()=>{let n=m.artists;if(!(!n||!n.length))return a(v,{children:[t("h1",{className:"title",children:" \u76F8\u5173\u6B4C\u624B "}),n.map((r,S)=>a(z,{onClick:()=>e.history.push(`/singers/${r.id}`),children:[t("div",{className:"img_wrapper",children:t(k,{placeholder:t("img",{width:"100%",height:"100%",src:new URL("/assets/music.13970103.png",self.location).href,alt:"singer"}),children:t("img",{src:r.picUrl,width:"100%",height:"100%",alt:"music"})})}),a("span",{className:"name",children:[" \u6B4C\u624B: ",r.name]})]},r.accountId+""+S))]})},T=()=>{let n=m.playlists;if(!(!n||!n.length))return a(v,{children:[t("h1",{className:"title",children:" \u76F8\u5173\u6B4C\u5355 "}),n.map((r,S)=>a(z,{onClick:()=>e.history.push(`/album/${r.id}`),children:[t("div",{className:"img_wrapper",children:t(k,{placeholder:t("img",{width:"100%",height:"100%",src:new URL("/assets/music.13970103.png",self.location).href,alt:"music"}),children:t("img",{src:r.coverImgUrl,width:"100%",height:"100%",alt:"music"})})}),a("span",{className:"name",children:[" \u6B4C\u5355: ",r.name]})]},r.accountId+""+S))]})},Q=()=>t(ie,{style:{paddingLeft:"20px"},children:x.map(n=>t("li",{onClick:r=>W(r,n.id),children:a("div",{className:"info",children:[t("span",{children:n.name}),a("span",{children:[V(n.artists)," - ",n.album.name]})]})},n.id))}),W=(n,r)=>{$(r)};return t(P,{in:N,timeout:300,appear:!0,classNames:"fly",unmountOnExit:!0,onExited:()=>e.history.goBack(),children:a(oe,{play:g,children:[t(le,{newQuery:y,back:I,handleQuery:_}),t(C,{show:!y,children:t(E,{children:t("div",{children:a(re,{children:[t("h1",{className:"title",children:" \u70ED\u95E8\u641C\u7D22 "}),R()]})})})}),t(C,{show:y,children:t(E,{onScorll:X,children:a("div",{children:[B(),T(),Q()]})})}),i?t(Y,{}):null]})})}const de=e=>({hotList:e.getIn(["search","hotList"]),enterLoading:e.getIn(["search","enterLoading"]),suggestList:e.getIn(["search","suggestList"]),songsCount:e.getIn(["player","playList"]).size,songsList:e.getIn(["search","songsList"])}),ue=e=>({getHotKeyWordsDispatch(){e(se())},changeEnterLoadingDispatch(o){e(D(o))},getSuggestListDispatch(o){e(ne(o))},getSongDetailDispatch(o){e(M(o))}}),pe=q(de,ue)(A.memo(ce));export{pe as default};
