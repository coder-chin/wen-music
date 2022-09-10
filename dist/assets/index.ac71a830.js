import{B,D as L,E as _,f as $,s as p,d as o,i as M,R,r as i,e as t,F as T,j as a,G as I,S as H,L as j,H as G}from"./index.db9ffd2b.js";import{H as U,S as F,M as Z}from"./index.2eefa03d.js";const q=e=>({type:_,data:$(e)}),b=e=>({type:B,data:e}),O=e=>r=>{L(e).then(d=>{let u=d.playlist;r(q(u)),r(b(!1))}).catch(()=>{console.log("\u83B7\u53D6 album \u6570\u636E\u5931\u8D25\uFF01")})},J=p.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: ${e=>e.play?"60px":0};
  z-index: 1000;
  background: ${o["background-color"]};
  transform-origin: right bottom;
  &.fly-enter,
  &.fly-appear {
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active,
  &.fly-appear-active {
    transition: transform 0.3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    transition: transform 0.3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`,P=p.div`
  background-size: 100%;
  padding: 5px 20px;
  padding-bottom: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 275px;
  position: relative;
  .background {
    z-index: -1;
    background: url(${e=>e.background}) no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(20px);
    .filter {
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba (7, 17, 27, 0.2);
    }
  }
  .img_wrapper {
    width: 120px;
    height: 120px;
    position: relative;
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient
        (hsla (0, 0%, 43%, 0.4), hsla (0, 0%, 100%, 0));
    }
    .play_count {
      position: absolute;
      right: 2px;
      top: 2px;
      font-size: ${o["font-size-s"]};
      line-height: 15px;
      color: ${o["font-color-light"]};
      .play {
        vertical-align: top;
      }
    }
    img {
      width: 120px;
      height: 120px;
      border-radius: 3px;
    }
  }
  .desc_wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 120px;
    padding: 0 10px;
    .title {
      max-height: 70px;
      color: ${o["font-color-light"]};
      font-weight: 700;
      line-height: 1.5;
      font-size: ${o["font-size-l"]};
    }
    .person {
      display: flex;
      .avatar {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .name {
        line-height: 20px;
        font-size: ${o["font-size-m"]};
        color: ${o["font-color-desc-v2"]};
      }
    }
  }
`,Y=p.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px 20px 30px;
  margin: -100px 0 0 0;
  > div {
    display: flex;
    flex-direction: column;
    line-height: 20px;
    text-align: center;
    font-size: ${o["font-size-s"]};
    color: ${o["font-color-light"]};
    z-index: 1000;
    font-weight: 500;
    .iconfont {
      font-size: 20px;
    }
  }
`;function K(e){const r=e.match.params.id,[d,u]=i.exports.useState(!0),[y,h]=i.exports.useState("\u6B4C\u5355"),[v,m]=i.exports.useState(!1),g=i.exports.useRef(),f=i.exports.useRef(),{currentAlbum:N,enterLoading:k,songsCount:E}=e,{getAlbumDataDispatch:x}=e;let n=N.toJS();i.exports.useEffect(()=>{x(r)},[x,r]);const A=i.exports.useCallback(()=>{u(!1)},[]),C=i.exports.useCallback(s=>{let l=-G,D=Math.abs(s.y/l),c=g.current;s.y<l?(c.style.backgroundColor=o["theme-color"],c.style.opacity=Math.min(1,(D-1)/2),h(n.name),m(!0)):(c.style.backgroundColor="",c.style.opacity=1,h("\u6B4C\u5355"),m(!1))},[n]),w=(s,l)=>{f.current.startAnimation({x:s,y:l})},z=()=>a(P,{background:n.coverImgUrl,children:[t("div",{className:"background",children:t("div",{className:"filter"})}),a("div",{className:"img_wrapper",children:[t("div",{className:"decorate"}),t("img",{src:n.coverImgUrl,alt:""}),a("div",{className:"play_count",children:[t("i",{className:"iconfont play",children:"\uE885"}),a("span",{className:"count",children:[Math.floor(n.subscribedCount/1e3)/10," \u4E07"," "]})]})]}),a("div",{className:"desc_wrapper",children:[t("div",{className:"title",children:n.name}),a("div",{className:"person",children:[t("div",{className:"avatar",children:t("img",{src:n.creator.avatarUrl,alt:""})}),t("div",{className:"name",children:n.creator.nickname})]})]})]}),S=()=>a(Y,{children:[a("div",{children:[t("i",{className:"iconfont",children:"\uE6AD"}),"\u8BC4\u8BBA"]}),a("div",{children:[t("i",{className:"iconfont",children:"\uE86F"}),"\u70B9\u8D5E"]}),a("div",{children:[t("i",{className:"iconfont",children:"\uE62D"}),"\u6536\u85CF"]}),a("div",{children:[t("i",{className:"iconfont",children:"\uE606"}),"\u66F4\u591A"]})]});return t(T,{in:d,timeout:300,classNames:"fly",appear:!0,unmountOnExit:!0,onExited:e.history.goBack,children:a(J,{play:E,children:[t(U,{title:y,handleClick:A,isMarquee:v,ref:g}),I(n)?null:t(H,{onScroll:C,bounceTop:!1,children:a("div",{children:[z(),S(),t(F,{songs:n.tracks,collectCount:n.subscribedCount,showCollect:!0,showBackground:!0,musicAnimation:w})]})}),k?t(j,{}):null,t(Z,{ref:f})]})})}const Q=e=>({currentAlbum:e.getIn(["album","currentAlbum"]),enterLoading:e.getIn(["album","enterLoading"]),songsCount:e.getIn(["player","playList"]).size}),V=e=>({getAlbumDataDispatch(r){e(b(!0)),e(O(r))}}),ee=M(Q,V)(R.memo(K));export{ee as default};
