(()=>{var w=document.getElementById("tool-app");if(w&&w.dataset.toolId==="kfc-quiz-generator"){let R=function(t){return Math.floor(Math.random()*t)},v=function(t){let e=t.slice();for(let n=e.length-1;n>0;n-=1){let l=R(n+1);[e[n],e[l]]=[e[l],e[n]]}return e},M=function(t,e=!1){Y.textContent=t,Y.dataset.state=e?"error":"ok"},H=function(t){return t.toUpperCase().replace(/[^A-Z0-9]/g,"")},X=function(t){return t.length>=3&&t.length<=7&&new Set(t).size===t.length},j=function(t){return Math.min(O,Math.max(2,t.length+1))},D=function(t){let e=j(t),n=Number.parseInt(L.value,10);if(Number.isNaN(n))return L.value=String(e),e;let l=Math.max(2,Math.min(O,n));return L.value=String(l),l},$=function(t=!1){let e=H(C.value),n=j(e||"KFC"),l=Number.parseInt(L.value,10);(t||Number.isNaN(l)||l===G)&&(L.value=String(n)),G=n},K=function(t,e){let n=0,l=0;for(let o=0;o<e.length;o+=1)e[o]===t[o]&&(n+=1),t.includes(e[o])&&(l+=1);return{wellPlaced:n,wrongPlaced:l-n}},z=function(t){let e=t.wellPlaced+t.wrongPlaced;return e===0?"\u6CA1\u6709\u4E00\u4E2A\u5B57\u7B26\u6B63\u786E":t.wellPlaced>0&&t.wrongPlaced===0?t.wellPlaced===1?"\u4E00\u4E2A\u5B57\u7B26\u6B63\u786E\uFF0C\u800C\u4E14\u4F4D\u7F6E\u6B63\u786E":`${t.wellPlaced}\u4E2A\u5B57\u7B26\u6B63\u786E\uFF0C\u800C\u4E14\u4F4D\u7F6E\u6B63\u786E`:t.wellPlaced===0&&t.wrongPlaced>0?t.wrongPlaced===1?"\u4E00\u4E2A\u5B57\u7B26\u6B63\u786E\uFF0C\u4F46\u662F\u4F4D\u7F6E\u4E0D\u6B63\u786E":`${t.wrongPlaced}\u4E2A\u5B57\u7B26\u6B63\u786E\uFF0C\u4F46\u662F\u4F4D\u7F6E\u90FD\u4E0D\u6B63\u786E`:`${e}\u4E2A\u5B57\u7B26\u6B63\u786E\uFF0C\u5176\u4E2D${t.wellPlaced}\u4E2A\u4F4D\u7F6E\u6B63\u786E\uFF0C${t.wrongPlaced}\u4E2A\u4F4D\u7F6E\u4E0D\u6B63\u786E`},ut=function(t){return`${t.guess}:${t.score.wellPlaced}:${t.score.wrongPlaced}`},A=function(t,e){let n=K(e,t);return{guess:t,score:n,text:z(n)}},I=function(t,e){return t.score.wellPlaced+t.score.wrongPlaced<e},Z=function(t,e=null){let n=e?e.slice():b.slice();return v(n).slice(0,t).join("")},Q=function(t,e,n){let l=[],o=t.split(""),s=b.filter(r=>!o.includes(r));function c(r){if(l.length>=n||e.has(r))return;let i=A(r,t);I(i,t.length)&&(e.add(r),l.push(i))}c(v(s).slice(0,t.length).join(""));let f=Math.max(1,Math.ceil(t.length/2));for(let r=0;r<10&&l.length<n;r+=1){let i=v(v(o).slice(0,f).concat(v(s).slice(0,t.length-f))).join("");c(i)}for(let r=1;r<t.length&&l.length<n;r+=1){let i=o.slice(r).concat(o.slice(0,r)).join("");c(i)}return l},B=function(t,e){let n=t.length,l=t.split(""),o=b.filter(c=>!l.includes(c)),s=new Set;for(;s.size<20;){let c=Z(n,o);e.has(c)||s.add(c)}for(let c=1;c<n;c+=1)for(let f=0;f<12;f+=1){let r=v(l).slice(0,c),i=v(o).slice(0,n-c),d=v(r.concat(i)).join("");e.has(d)||s.add(d)}for(let c=0;c<24;c+=1){let f=v(l).join("");!e.has(f)&&f!==t&&s.add(f)}return Array.from(s)},J=function(t){let e=1;for(let n=b.length;n>b.length-t;n-=1)e*=n;return e},N=function(t,e,n=_){let l=J(t);if(e.length===0)return{count:l,solution:null};let o=e.map(i=>({guess:i.guess,totalMatches:i.score.wellPlaced+i.score.wrongPlaced,wellPlaced:i.score.wellPlaced,guessSet:new Set(i.guess.split("")),suffixHits:[]}));o.forEach(i=>{i.suffixHits=Array(b.length+1).fill(0);for(let a=b.length-1;a>=0;a-=1)i.suffixHits[a]=i.suffixHits[a+1]+(i.guessSet.has(b[a])?1:0)});let s=0,c=null;function f(i){let a=i.slice(),d=Array(a.length).fill(!1),S=Array(t),h=Array(o.length).fill(0);function g(m){if(s>=n)return;if(m===t){for(let u=0;u<o.length;u+=1)if(h[u]!==o[u].wellPlaced)return;s+=1,c||(c=S.join(""));return}let k=a.filter((u,x)=>!d[x]);for(let u=0;u<o.length;u+=1){let x=o[u],P=h[u];for(let T=m;T<t;T+=1)k.includes(x.guess[T])&&(P+=1);if(h[u]>x.wellPlaced||P<x.wellPlaced)return}for(let u=0;u<a.length;u+=1){if(d[u])continue;let x=a[u];d[u]=!0,S[m]=x;let P=Array(o.length).fill(0),T=!0;for(let p=0;p<o.length;p+=1)x===o[p].guess[m]&&(P[p]=1,h[p]+=1,h[p]>o[p].wellPlaced&&(T=!1));T&&g(m+1);for(let p=0;p<o.length;p+=1)h[p]-=P[p];if(d[u]=!1,s>=n)return}}g(0)}function r(i,a,d){if(s>=n)return;let S=a.length,h=b.length-i,g=t-S;if(g<0||g>h)return;for(let u=0;u<o.length;u+=1){let x=o[u],P=x.suffixHits[i],T=h-P,p=Math.max(0,g-T),ft=Math.min(g,P),dt=d[u]+p,gt=d[u]+ft;if(x.totalMatches<dt||x.totalMatches>gt)return}if(S===t){for(let u=0;u<o.length;u+=1)if(d[u]!==o[u].totalMatches)return;f(a);return}if(i>=b.length)return;let m=b[i],k=d.slice();for(let u=0;u<o.length;u+=1)o[u].guessSet.has(m)&&(k[u]+=1);r(i+1,a.concat(m),k),r(i+1,a,d)}return r(0,[],Array(o.length).fill(0)),{count:s,solution:c}},V=function(t,e,n,l){let o=B(t,l),s=null;for(let c of o){let f=A(c,t);if(!I(f,t.length))continue;let r=e.concat(f),i=N(t.length,r,_),a=f.score.wellPlaced+f.score.wrongPlaced,d=Math.abs(a-Math.ceil(t.length/2)),S=n-r.length,h=[i.count,S===0&&i.count!==1?1:0,d,f.score.wellPlaced===0?1:0,c];if(!s){s={clue:f,outcome:i,ranking:h};continue}for(let g=0;g<h.length;g+=1){if(h[g]<s.ranking[g]){s={clue:f,outcome:i,ranking:h};break}if(h[g]>s.ranking[g])break}}return s},tt=function(t,e,n){let l=B(t,n),o=null;for(let s of l){let c=A(s,t);if(!I(c,t.length))continue;let f=N(t.length,e.concat(c),_);if(f.count!==1||f.solution!==t)continue;let r=c.score.wellPlaced+c.score.wrongPlaced,i=[c.score.wellPlaced,Math.abs(r-Math.ceil(t.length/2)),s];if(!o){o={clue:c,ranking:i};continue}for(let a=0;a<i.length;a+=1){if(i[a]<o.ranking[a]){o={clue:c,ranking:i};break}if(i[a]>o.ranking[a])break}}return o},et=function(t,e){let n=Math.max(2,Math.min(O,e));for(let l=0;l<80;l+=1){let o=[],s=new Set,c=Math.min(3,Math.max(1,n-1)),f=Q(t,s,c);for(let i of f){let a=o.concat(i);N(t.length,a,_).count!==0&&o.push(i)}for(;o.length<n;){let i=N(t.length,o,_);if(i.count===1&&i.solution===t){let d=tt(t,o,s);if(!d)break;o.push(d.clue),s.add(d.clue.guess);continue}let a=V(t,o,n,s);if(!a)break;o.push(a.clue),s.add(a.clue.guess)}if(o.length!==n)continue;let r=N(t.length,o,_);if(r.count===1&&r.solution===t)return{answer:t,clues:v(o),solutionCount:r.count}}return null},nt=function(t){return t.map((e,n)=>`
          <li class="quiz-clue-item">
            <div class="quiz-guess" aria-label="guess ${n+1}">
              ${e.guess.split("").map(l=>`<span>${l}</span>`).join("")}
            </div>
            <p>${e.text}</p>
          </li>
        `).join("")},ot=function(t){return[...t.clues.map((e,n)=>`${n+1}. ${e.guess} -> ${e.text}`),"",`\u7B54\u6848\u957F\u5EA6: ${t.answer.length}`].join(`
`)},lt=function(t){let e=t.clues.map(n=>`    {"guess": "${n.guess}", "well_placed": ${n.score.wellPlaced}, "wrong_placed": ${n.score.wrongPlaced}},`).join(`
`);return`#!/usr/bin/env python3
"""
SAT export for KFC Quiz generator.
KFC = Keyspace Filtering Challenge

Usage:
  python verify_quiz.py

Dependency:
  pip install python-sat[pblib,aiger]
"""

from pysat.card import CardEnc
from pysat.formula import CNF, IDPool
from pysat.solvers import Minisat22

SYMBOLS = list("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")
ANSWER_LENGTH = ${t.answer.length}
CLUES = [
${e}
]

vpool = IDPool()
cnf = CNF()


def x(pos, symbol):
    return vpool.id(f"x:{pos}:{symbol}")


def present(clue_index, symbol):
    return vpool.id(f"present:{clue_index}:{symbol}")


for pos in range(ANSWER_LENGTH):
    lits = [x(pos, symbol) for symbol in SYMBOLS]
    cnf.extend(CardEnc.equals(lits=lits, bound=1, vpool=vpool, encoding=1))

for symbol in SYMBOLS:
    lits = [x(pos, symbol) for pos in range(ANSWER_LENGTH)]
    cnf.extend(CardEnc.atmost(lits=lits, bound=1, vpool=vpool, encoding=1))

for clue_index, clue in enumerate(CLUES):
    hit_lits = []
    for symbol in clue["guess"]:
        h = present(clue_index, symbol)
        hit_lits.append(h)
        pos_lits = [x(pos, symbol) for pos in range(ANSWER_LENGTH)]
        cnf.append([-h] + pos_lits)
        for lit in pos_lits:
            cnf.append([-lit, h])

    total_matches = clue["well_placed"] + clue["wrong_placed"]
    cnf.extend(CardEnc.equals(lits=hit_lits, bound=total_matches, vpool=vpool, encoding=1))

    well_lits = [x(pos, clue["guess"][pos]) for pos in range(ANSWER_LENGTH)]
    cnf.extend(CardEnc.equals(lits=well_lits, bound=clue["well_placed"], vpool=vpool, encoding=1))


def decode(model):
    chosen = []
    for pos in range(ANSWER_LENGTH):
        for symbol in SYMBOLS:
            if x(pos, symbol) in model:
                chosen.append(symbol)
                break
    return "".join(chosen)


solutions = []
with Minisat22(bootstrap_with=cnf.clauses) as solver:
    while solver.solve():
        model = set(lit for lit in solver.get_model() if lit > 0)
        answer = decode(model)
        solutions.append(answer)
        solver.add_clause([-x(pos, answer[pos]) for pos in range(ANSWER_LENGTH)])
        if len(solutions) >= 2:
            break

print("solutions:", solutions)
if len(solutions) == 1:
    print("unique solution:", solutions[0])
elif len(solutions) == 0:
    print("no solution")
else:
    print("multiple solutions")
`},q=function(t,e,n,l,o,s){t.beginPath(),t.moveTo(e+s,n),t.lineTo(e+l-s,n),t.quadraticCurveTo(e+l,n,e+l,n+s),t.lineTo(e+l,n+o-s),t.quadraticCurveTo(e+l,n+o,e+l-s,n+o),t.lineTo(e+s,n+o),t.quadraticCurveTo(e,n+o,e,n+o-s),t.lineTo(e,n+s),t.quadraticCurveTo(e,n,e+s,n),t.closePath()},st=function(t,e,n){let l=[],o="";for(let s of e){let c=o+s;o&&t.measureText(c).width>n?(l.push(o.trimEnd()),o=s.trimStart()):o=c}return o&&l.push(o.trim()),l.length>0?l:[e]},it=function(t,e){let n=t.answer.length,l=n<=5?54:n===6?48:44,o=n<=5?20:n===6?16:12,s=n*l+(n-1)*o,c=112+s+48,f=928-s-116;e.font='26px "Noto Serif SC", "Songti SC", serif';let r=t.clues.map(g=>{let m=st(e,g.text,f),k=m.length*34,u=Math.max(88,k+28);return{clue:g,textLines:m,rowHeight:u}}),i=r.reduce((g,m)=>g+m.rowHeight+18,0),a=64,d=a+52+i+18,S=d+134,h=Math.max(820,S+52);return{rows:r,height:h,answerTop:d,boxSize:l,boxGap:o,textX:c,titleHeight:a}},ct=function(t){let e=y.getContext("2d"),n=it(t,e);y.width=1080,y.height=n.height;let l=y.width,o=y.height;e.clearRect(0,0,l,o),e.fillStyle="#fbf8f1",e.fillRect(0,0,l,o),e.strokeStyle="rgba(31, 62, 57, 0.08)",e.lineWidth=2,q(e,36,36,l-72,o-72,30),e.stroke(),e.fillStyle="#1f3e39",e.font='700 34px "Noto Serif SC", "Songti SC", serif',e.fillText("\u5BC6\u7801\u63A8\u7406\u9898",78,96);let s=80+n.titleHeight;n.rows.forEach(f=>{let r=f.rowHeight;e.fillStyle="#ffffff",e.strokeStyle="rgba(31, 62, 57, 0.14)",e.lineWidth=2,q(e,76,s-22,928,r,20),e.fill(),e.stroke(),f.clue.guess.split("").forEach((i,a)=>{let d=112+a*(n.boxSize+n.boxGap),S=s+(r-n.boxSize)/2-22;q(e,d,S,n.boxSize,n.boxSize,12),e.fillStyle="#ffffff",e.fill(),e.strokeStyle="#1f3e39",e.lineWidth=3,e.stroke(),e.fillStyle="#1f3e39",e.font=`${n.boxSize>=50?700:600} ${Math.max(24,n.boxSize-17)}px "IBM Plex Sans", "PingFang SC", sans-serif`,e.fillText(i,d+n.boxSize*.28,S+n.boxSize*.7)}),e.fillStyle="#242424",e.font='26px "Noto Serif SC", "Songti SC", serif',e.textAlign="left",e.textBaseline="top",f.textLines.forEach((i,a)=>{e.fillText(i,n.textX,s+8+a*34)}),e.textBaseline="alphabetic",s+=r+18});let c=n.answerTop;e.fillStyle="#1f3e39",e.font='600 30px "Noto Serif SC", "Songti SC", serif',e.fillText("\u7B54\u6848",84,c+18);for(let f=0;f<t.answer.length;f+=1){let r=84+f*94;q(e,r,c+40,70,70,16),e.fillStyle="#ffffff",e.fill(),e.strokeStyle="#1f3e39",e.lineWidth=4,e.stroke()}},at=function(t){E=t,F.innerHTML=nt(t.clues),ct(t),M(`\u5DF2\u751F\u6210 ${t.clues.length} \u6761\u7EBF\u7D22\uFF0C\u5E76\u5DF2\u9A8C\u8BC1\u5728 A-Z0-9 \u65E0\u91CD\u590D\u5B57\u7B26\u7A7A\u95F4\u5185\u552F\u4E00\u89E3\u4E3A ${t.answer}\u3002`)},U=function(t){E=null,F.innerHTML="",y.getContext("2d").clearRect(0,0,y.width,y.height),M(t,!0)},W=function(){let t=H(C.value);if(C.value=t,$(),!X(t)){U("\u7B54\u6848\u9700\u8981\u662F 3 \u5230 7 \u4F4D\u4E92\u4E0D\u91CD\u590D\u7684\u5927\u5199\u5B57\u6BCD\u6216\u6570\u5B57\u3002");return}let e=D(t),n=et(t,e);if(!n){U("\u5F53\u524D\u7EBF\u7D22\u6570\u91CF\u4E0B\u6CA1\u6709\u7A33\u5B9A\u751F\u6210\u51FA\u5168\u7A7A\u95F4\u552F\u4E00\u89E3\uFF0C\u8BF7\u63D0\u9AD8\u7EBF\u7D22\u6570\u91CF\u540E\u91CD\u8BD5\u3002");return}at(n)},rt=function(){let t=3+R(5);C.value=v(b).slice(0,t).join(""),$(!0),W()};ht=R,pt=v,mt=M,bt=H,vt=X,St=j,xt=D,yt=$,wt=K,Mt=z,Pt=ut,Tt=A,Ct=I,_t=Z,Et=Q,Nt=B,kt=J,Lt=N,$t=V,qt=tt,Ht=et,At=nt,It=ot,Wt=lt,Ot=q,Rt=st,jt=it,Bt=ct,Ut=at,Yt=U,Ft=W,Gt=rt,w.innerHTML=`
    <div class="tool-shell tool-shell-wide kfc-quiz">
      <div class="tool-panel">
        <div class="tool-panel-head">
          <h2>Generator</h2>
          <div class="tool-actions">
            <button type="button" data-action="random-answer">\u968F\u673A\u7B54\u6848</button>
            <button type="button" data-action="generate">\u751F\u6210\u9898\u76EE</button>
          </div>
        </div>

        <div class="tool-form">
          <label class="tool-field">
            <span>\u552F\u4E00\u89E3\u7B54\u6848</span>
            <input class="tool-input" data-role="answer" type="text" value="KFC" maxlength="7" autocomplete="off" spellcheck="false" />
          </label>
          <label class="tool-field">
            <span>\u7EBF\u7D22\u6570\u91CF</span>
            <input class="tool-input" data-role="clue-count" type="number" min="2" max="10" value="4" inputmode="numeric" />
          </label>
        </div>

        <p class="tool-status" data-role="status">\u8F93\u5165 3 \u5230 7 \u4F4D\u4E92\u4E0D\u91CD\u590D\u7684\u5927\u5199\u5B57\u6BCD\u6216\u6570\u5B57\uFF1B\u9ED8\u8BA4\u7EBF\u7D22\u6570\u4E3A\u7B54\u6848\u957F\u5EA6 + 1\u3002</p>

        <div class="tool-panel-head quiz-subhead">
          <h2>Clues</h2>
          <div class="tool-actions">
            <button type="button" data-action="regenerate">\u6362\u4E00\u7EC4\u7EBF\u7D22</button>
            <button type="button" data-action="copy">\u590D\u5236\u9898\u9762</button>
            <button type="button" data-action="copy-sat">\u5BFC\u51FA SAT \u811A\u672C</button>
          </div>
        </div>

        <ol class="quiz-clues" data-role="clues"></ol>
      </div>

      <div class="tool-preview quiz-preview-wrap">
        <div class="tool-panel-head">
          <h2>Puzzle Card</h2>
          <div class="tool-actions">
            <button type="button" data-action="download">\u4E0B\u8F7D PNG</button>
          </div>
        </div>
        <div class="quiz-canvas-shell">
          <canvas class="quiz-canvas" data-role="canvas" width="1080" height="1200" aria-label="quiz puzzle preview"></canvas>
        </div>
      </div>
    </div>
  `;let C=w.querySelector('[data-role="answer"]'),L=w.querySelector('[data-role="clue-count"]'),Y=w.querySelector('[data-role="status"]'),F=w.querySelector('[data-role="clues"]'),y=w.querySelector('[data-role="canvas"]'),b="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),_=2,O=10,E=null,G=4;w.addEventListener("click",async t=>{let e=t.target.closest("[data-action]");if(!e)return;let n=e.dataset.action;if(n==="generate"||n==="regenerate"){W();return}if(n==="random-answer"){rt();return}if(!E){M("\u5148\u751F\u6210\u4E00\u5957\u9898\u76EE\u3002",!0);return}if(n==="copy"){try{await navigator.clipboard.writeText(ot(E)),M("\u9898\u9762\u6587\u672C\u5DF2\u590D\u5236\u3002")}catch{M("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236\u3002",!0)}return}if(n==="copy-sat"){try{await navigator.clipboard.writeText(lt(E)),M("SAT \u9A8C\u8BC1\u811A\u672C\u5DF2\u590D\u5236\u3002")}catch{M("SAT \u811A\u672C\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",!0)}return}if(n==="download"){let l=document.createElement("a");l.href=y.toDataURL("image/png"),l.download=`quiz-${E.answer.toLowerCase()}.png`,l.click()}}),C.addEventListener("input",()=>{C.value=H(C.value),$()}),$(!0),W()}var ht,pt,mt,bt,vt,St,xt,yt,wt,Mt,Pt,Tt,Ct,_t,Et,Nt,kt,Lt,$t,qt,Ht,At,It,Wt,Ot,Rt,jt,Bt,Ut,Yt,Ft,Gt;})();
