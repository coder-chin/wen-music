import{O as F,P as G,Q as B,f as $,T as W,s as p,d as w,i as Z,R as j,r as e,H as h,e as s,F as J,j as E,S as P,L as U}from"./index.db9ffd2b.js";import{H as Y,S as q,M as Q}from"./index.2eefa03d.js";const K=t=>({type:B,data:$(t)}),V=t=>({type:W,data:$(t)}),C=t=>({type:F,data:t}),X=t=>r=>{G(t).then(g=>{r(K(g.artist)),r(V(g.hotSongs)),r(C(!1))})},tt=p.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: ${t=>t.play?"60px":0};
  width: 100%;
  z-index: 100;
  overflow: hidden;
  background: #f2f3f4;
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
`,et=p.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 75%;
  transform-origin: top;
  background: url(${t=>t.bgUrl});
  background-size: cover;
  z-index: 50;
  .filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.3);
  }
`,st=p.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  box-sizing: border-box;
  width: 120px;
  height: 40px;
  margin-top: -55px;
  z-index: 50;
  background: ${w["theme-color"]};
  color: ${w["font-color-light"]};
  border-radius: 20px;
  text-align: center;
  font-size: 0;
  line-height: 40px;
  .iconfont {
    display: inline-block;
    margin-right: 10px;
    font-size: 12px;
    vertical-align: 1px;
  }
  .text {
    display: inline-block;
    font-size: 14px;
    letter-spacing: 5px;
  }
`,ot=p.div`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  > div {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: visible;
  }
`,nt=p.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: white;
  border-radius: 10px;
  z-index: 50;
`;function rt(t){const[r,g]=e.exports.useState(!0),x=e.exports.useRef(),d=e.exports.useRef(),m=e.exports.useRef(),y=e.exports.useRef(),S=e.exports.useRef(),f=e.exports.useRef(),b=e.exports.useRef(),v=e.exports.useRef(0),i=5;e.exports.useEffect(()=>{const l=t.match.params.id;N(l);let o=d.current.offsetHeight;m.current.style.top=`${o-i}px`,v.current=o,f.current.style.top=`${o-i}px`,y.current.refresh()},[]);const{artist:T,songs:k,loading:A,songsCount:D}=t,{getSingerDataDispatch:N}=t,z=T.toJS(),H=k.toJS(),O=e.exports.useCallback(()=>{g(!1)},[]),L=e.exports.useCallback(l=>{let o=v.current;const n=l.y,a=d.current,u=x.current,_=S.current,c=f.current,I=-(o-i)+h,R=Math.abs(n/o);n>0?(a.style.transform=`scale(${1+R})`,u.style.transform=`translate3d(0, ${n}px, 0)`,c.style.top=`${o-i+n}px`):n>=I?(c.style.top=`${o-i-Math.abs(n)}px`,c.style.zIndex=1,a.style.paddingTop="75%",a.style.height=0,a.style.zIndex=-1,u.style.transform=`translate3d(0, ${n}px, 0)`,u.style.opacity=`${1-R*2}`):n<I&&(c.style.top=`${h-i}px`,c.style.zIndex=1,_.style.zIndex=100,a.style.height=`${h}px`,a.style.paddingTop=0,a.style.zIndex=99)},[]),M=(l,o)=>{b.current.startAnimation({x:l,y:o})};return s(J,{in:r,timeout:300,classNames:"fly",appear:!0,unmountOnExit:!0,onExited:()=>t.history.goBack(),children:E(tt,{play:D,children:[s(Y,{handleClick:O,title:z.name,ref:S}),s(et,{bgUrl:z.picUrl,ref:d,children:s("div",{className:"filter"})}),E(st,{ref:x,children:[s("i",{className:"iconfont",children:"\uE62D"}),s("span",{className:"text",children:" \u6536\u85CF "})]}),s(nt,{ref:f}),s(ot,{ref:m,children:s(P,{ref:y,onScroll:L,children:s(q,{songs:H,showCollect:!1,musicAnimation:M})})}),A?s(U,{}):null,s(Q,{ref:b})]})})}const at=t=>({artist:t.getIn(["singer","artist"]),songs:t.getIn(["singer","songsOfArtist"]),loading:t.getIn(["singer","loading"]),songsCount:t.getIn(["player","playList"]).size}),it=t=>({getSingerDataDispatch(r){t(C(!0)),t(X(r))}}),pt=Z(at,it)(j.memo(rt));export{pt as default};
