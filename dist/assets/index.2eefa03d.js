import{s as y,d as e,R as x,j as s,e as p,p as k,i as E,I as N,J as L,K as S,M as D,r as m,N as M}from"./index.db9ffd2b.js";const _=y.div`
  position: fixed;
  padding: 5px 10px;
  padding-top: 0;
  height: 40px;
  width: 100%;
  z-index: 100;
  display: flex;
  line-height: 40px;
  color: ${e["font-color-light"]};
  .back {
    margin-right: 5px;
    font-size: 20px;
    width: 20px;
  }
  > h1 {
    font-size: ${e["font-size-l"]};
    font-weight: 700;
  }
`,z=x.forwardRef((t,i)=>{const{handleClick:c,title:h}=t;return s(_,{ref:i,children:[p("i",{className:"iconfont back",onClick:c,children:"\uE655"}),p("h1",{children:h})]})});z.defaultProps={handleClick:()=>{},title:"\u6807\u9898",isMarquee:!1};z.propTypes={handleClick:k.exports.func,title:k.exports.string,isMarquee:k.exports.bool};const T=x.memo(z),I=y.div`
  border-radius: 10px;
  opacity: 0.98;
  ${t=>t.showBackground?`background: ${e["highlight-background-color"]};`:""}
  .first_line {
    box-sizing: border-box;
    padding: 10px 0;
    margin-left: 10px;
    position: relative;
    justify-content: space-between;
    border-bottom: 1px solid ${e["border-color"]};
    .play_all {
      display: inline-block;
      line-height: 24px;
      color: ${e["font-color-desc"]};
      .iconfont {
        font-size: 24px;
        margin-right: 10px;
        vertical-align: top;
      }
      .sum {
        font-size: ${e["font-size-s"]};
        color: ${e["font-color-desc-v2"]};
      }
      > span {
        vertical-align: top;
      }
    }
    .add_list,
    .isCollected {
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 130px;
      line-height: 34px;
      background: ${e["theme-color"]};
      color: ${e["font-color-light"]};
      font-size: 0;
      border-radius: 3px;
      vertical-align: top;
      .iconfont {
        vertical-align: top;
        font-size: 10px;
        margin: 0 5px 0 10px;
      }
      span {
        font-size: 14px;
        line-height: 34px;
      }
    }
    .isCollected {
      display: flex;
      background: ${e["background-color"]};
      color: ${e["font-color-desc"]};
    }
  }
`,P=y.ul`
  > li {
    display: flex;
    height: 60px;
    align-items: center;
    .index {
      flex-basis: 60px;
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
      border-bottom: 1px solid ${e["border-color"]};
      ${e.noWrap()}
      >span {
        ${e.noWrap()}
      }
      > span:first-child {
        color: ${e["font-color-desc"]};
      }
      > span:last-child {
        font-size: ${e["font-size-s"]};
        color: #bba8a8;
      }
    }
  }
`,R=x.forwardRef((t,i)=>{const{collectCount:c,showCollect:h,songs:l}=t,{changePlayListDispatch:b,changeSequecePlayListDispatch:v,changeCurrentIndexDispatch:f}=t,{musicAnimation:o}=t,n=l.length,$=(a,g)=>{b(l),v(l),f(g),o(a.nativeEvent.clientX,a.nativeEvent.clientY)};let r=a=>{let g=[];for(let u=0;u<a.length;u++){let d=a[u];g.push(s("li",{onClick:w=>$(w,u),children:[p("span",{className:"index",children:u+1}),s("div",{className:"info",children:[p("span",{children:d.name}),s("span",{children:[d.ar?N(d.ar):N(d.artists)," -"," ",d.al?d.al.name:d.album.name]})]})]},d.id))}return g};const C=a=>s("div",{className:"add_list",children:[p("i",{className:"iconfont",children:"\uE62D"}),s("span",{children:[" \u6536\u85CF (",Math.floor(a/1e3)/10," \u4E07)"]})]});return s(I,{ref:i,showBackground:t.showBackground,children:[s("div",{className:"first_line",children:[s("div",{className:"play_all",onClick:a=>$(a,0),children:[p("i",{className:"iconfont",children:"\uE6E3"}),s("span",{children:[" ","\u64AD\u653E\u5168\u90E8 ",s("span",{className:"sum",children:["(\u5171 ",n," \u9996)"]})]})]}),h?C(c):null]}),p(P,{children:r(l)})]})}),q=t=>({changePlayListDispatch(i){t(L(i))},changeCurrentIndexDispatch(i){t(S(i))},changeSequecePlayListDispatch(i){t(D(i))}}),B=E(null,q)(x.memo(R)),A=y.div`
  .icon_wrapper {
    position: fixed;
    z-index: 1000;
    margin-top: -10px;
    margin-left: -10px;
    color: ${e["theme-color"]};
    font-size: 14px;
    display: none;
    transition: transform 1s cubic-bezier(0.62, -0.1, 0.86, 0.57);
    transform: translate3d(0, 0, 0);
    > div {
      transition: transform 1s;
    }
  }
`,H=m.exports.forwardRef((t,i)=>{const c=m.exports.useRef(),h=3,l=M("transform"),b=f=>{const o=`<div class='icon_wrapper'>${f}</div>`;let n=document.createElement("div");return n.innerHTML=o,n.firstChild};m.exports.useEffect(()=>{for(let o=0;o<h;o++){let n=b('<div class="iconfont">&#xe642;</div>');c.current.appendChild(n)}[].slice.call(c.current.children).forEach(o=>{o.running=!1,o.addEventListener("transitionend",function(){this.style.display="none",this.style[l]="translate3d(0, 0, 0)",this.running=!1;let n=this.querySelector("div");n.style[l]="translate3d(0, 0, 0)"},!1)})},[]);const v=({x:f,y:o})=>{for(let n=0;n<h;n++){let r=[].slice.call(c.current.children)[n];if(r.running===!1){r.style.left=f+"px",r.style.top=o+"px",r.style.display="inline-block",setTimeout(()=>{r.running=!0,r.style[l]="translate3d(0, 750px, 0)";let C=r.querySelector("div");C.style[l]="translate3d(-40px, 0, 0)"},20);break}}};return m.exports.useImperativeHandle(i,()=>({startAnimation:v})),p(A,{ref:c})}),W=x.memo(H);export{T as H,W as M,B as S};
