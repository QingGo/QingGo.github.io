(()=>{var M=document.getElementById("tool-app");if(M&&M.dataset.toolId==="kfc-quiz-generator"){let q=function(t){return Math.floor(Math.random()*t)},b=function(t){let e=t.slice();for(let n=e.length-1;n>0;n-=1){let o=q(n+1);[e[n],e[o]]=[e[o],e[n]]}return e},T=function(t,e=!1){X.textContent=t,X.dataset.state=e?"error":"ok"},I=function(t){return t.toUpperCase().replace(/[^A-Z0-9]/g,"")},Q=function(t){return t.length>=3&&t.length<=7&&new Set(t).size===t.length},j=function(t){return Math.min(O,Math.max(2,t.length+1))},J=function(t){let e=j(t),n=Number.parseInt(k.value,10);if(Number.isNaN(n))return k.value=String(e),e;let o=Math.max(2,Math.min(O,n));return k.value=String(o),o},$=function(t=!1){let e=I(_.value),n=j(e||"KFC"),o=Number.parseInt(k.value,10);(t||Number.isNaN(o)||o===Z)&&(k.value=String(n)),Z=n},V=function(t,e){let n=0,o=0;for(let l=0;l<e.length;l+=1)e[l]===t[l]&&(n+=1),t.includes(e[l])&&(o+=1);return{wellPlaced:n,wrongPlaced:o-n}},tt=function(t){let e=t.wellPlaced+t.wrongPlaced;return e===0?"\u6CA1\u6709\u4E00\u4E2A\u5B57\u7B26\u6B63\u786E":t.wellPlaced>0&&t.wrongPlaced===0?t.wellPlaced===1?"\u4E00\u4E2A\u5B57\u7B26\u6B63\u786E\uFF0C\u800C\u4E14\u4F4D\u7F6E\u6B63\u786E":`${t.wellPlaced}\u4E2A\u5B57\u7B26\u6B63\u786E\uFF0C\u800C\u4E14\u4F4D\u7F6E\u6B63\u786E`:t.wellPlaced===0&&t.wrongPlaced>0?t.wrongPlaced===1?"\u4E00\u4E2A\u5B57\u7B26\u6B63\u786E\uFF0C\u4F46\u662F\u4F4D\u7F6E\u4E0D\u6B63\u786E":`${t.wrongPlaced}\u4E2A\u5B57\u7B26\u6B63\u786E\uFF0C\u4F46\u662F\u4F4D\u7F6E\u90FD\u4E0D\u6B63\u786E`:`${e}\u4E2A\u5B57\u7B26\u6B63\u786E\uFF0C\u5176\u4E2D${t.wellPlaced}\u4E2A\u4F4D\u7F6E\u6B63\u786E\uFF0C${t.wrongPlaced}\u4E2A\u4F4D\u7F6E\u4E0D\u6B63\u786E`},bt=function(t){return`${t.guess}:${t.score.wellPlaced}:${t.score.wrongPlaced}`},B=function(t,e){let n=V(e,t);return{guess:t,score:n,text:tt(n)}},R=function(t,e){let n=t.score.wellPlaced+t.score.wrongPlaced;return!(n>=e||e>4&&n===0||e>=6&&n===e-1&&t.score.wellPlaced>=e-2)},et=function(t,e=null){let n=e?e.slice():S.slice();return b(n).slice(0,t).join("")},nt=function(t,e,n){let o=[],l=t.split(""),i=S.filter(c=>!l.includes(c));function d(c,a){if(o.length>=n||e.has(c)||!c)return;let r=B(c,t);R(r,t.length)&&o.push({clue:r,bucket:a})}d(b(i).slice(0,t.length).join(""),"zero-hit");let s=Math.max(1,Math.ceil(t.length/2));for(let c=0;c<10&&o.length<n;c+=1){let a=b(b(l).slice(0,s).concat(b(i).slice(0,t.length-s))).join("");d(a,"mixed")}for(let c=1;c<t.length&&o.length<n;c+=1){let a=l.slice(c).concat(l.slice(0,c)).join("");d(a,"permutation")}return o},ot=function(t,e){let n=t.length,o=t.split(""),l=S.filter(s=>!o.includes(s)),i=new Map;function d(s,c){!s||e.has(s)||i.has(s)||i.set(s,c)}for(let s=0;s<30;s+=1)d(et(n,l),"zero-hit");for(let s=1;s<n;s+=1)for(let c=0;c<20;c+=1){let a=b(o).slice(0,s),r=b(l).slice(0,n-s);d(b(a.concat(r)).join(""),s===1?"low-hit":"mixed")}for(let s=1;s<n;s+=1)for(let c=0;c<12;c+=1){let a=b(Array.from({length:n},(p,m)=>m)).slice(0,s),r=Array(n).fill(null),f=[];for(let p=0;p<n;p+=1)a.includes(p)?r[p]=t[p]:f.push(t[p]);let h=b(f.concat(b(l).slice(0,Math.max(0,n-s-f.length)))),g=0;for(let p=0;p<n;p+=1)r[p]||(r[p]=h[g],g+=1);d(r.join(""),"positioned")}for(let s=0;s<28;s+=1){let c=b(o).join("");c!==t&&d(c,"permutation")}return Array.from(i,([s,c])=>({guess:s,bucket:c}))},lt=function(t){let e=1;for(let n=S.length;n>S.length-t;n-=1)e*=n;return e},H=function(t,e,n=C){let o=lt(t);if(e.length===0)return{count:o,solution:null};let l=e.map(a=>({guess:a.guess,totalMatches:a.score.wellPlaced+a.score.wrongPlaced,wellPlaced:a.score.wellPlaced,guessSet:new Set(a.guess.split("")),suffixHits:[]}));l.forEach(a=>{a.suffixHits=Array(S.length+1).fill(0);for(let r=S.length-1;r>=0;r-=1)a.suffixHits[r]=a.suffixHits[r+1]+(a.guessSet.has(S[r])?1:0)});let i=0,d=null;function s(a){let r=a.slice(),f=Array(r.length).fill(!1),h=Array(t),g=Array(l.length).fill(0);function p(m){if(i>=n)return;if(m===t){for(let u=0;u<l.length;u+=1)if(g[u]!==l[u].wellPlaced)return;i+=1,d||(d=h.join(""));return}let E=r.filter((u,v)=>!f[v]);for(let u=0;u<l.length;u+=1){let v=l[u],w=g[u];for(let y=m;y<t;y+=1)E.includes(v.guess[y])&&(w+=1);if(g[u]>v.wellPlaced||w<v.wellPlaced)return}for(let u=0;u<r.length;u+=1){if(f[u])continue;let v=r[u];f[u]=!0,h[m]=v;let w=Array(l.length).fill(0),y=!0;for(let x=0;x<l.length;x+=1)v===l[x].guess[m]&&(w[x]=1,g[x]+=1,g[x]>l[x].wellPlaced&&(y=!1));y&&p(m+1);for(let x=0;x<l.length;x+=1)g[x]-=w[x];if(f[u]=!1,i>=n)return}}p(0)}function c(a,r,f){if(i>=n)return;let h=r.length,g=S.length-a,p=t-h;if(p<0||p>g)return;for(let u=0;u<l.length;u+=1){let v=l[u],w=v.suffixHits[a],y=g-w,x=Math.max(0,p-y),Y=Math.min(p,w),F=f[u]+x,L=f[u]+Y;if(v.totalMatches<F||v.totalMatches>L)return}if(h===t){for(let u=0;u<l.length;u+=1)if(f[u]!==l[u].totalMatches)return;s(r);return}if(a>=S.length)return;let m=S[a],E=f.slice();for(let u=0;u<l.length;u+=1)l[u].guessSet.has(m)&&(E[u]+=1);c(a+1,r.concat(m),E),c(a+1,r,f)}return c(0,[],Array(l.length).fill(0)),{count:i,solution:d}},st=function(t){let e=new Map,n=new Map,o=new Map,l=t.map(i=>i.guess.split(""));return t.forEach(i=>{let d=`${i.score.wellPlaced}-${i.score.wrongPlaced}`;e.set(d,(e.get(d)||0)+1),n.set(i.bucket||"mixed",(n.get(i.bucket||"mixed")||0)+1),i.guess.split("").forEach(s=>{o.set(s,(o.get(s)||0)+1)})}),{patternCounts:e,bucketCounts:n,symbolCounts:o,positionCounts:l}},it=function(t){let e=t.reduce((o,l)=>o+l.weight,0);if(e<=0)return t[q(t.length)];let n=Math.random()*e;for(let o of t)if(n-=o.weight,n<=0)return o;return t[t.length-1]},ct=function(t,e,n,o,l,i,d){let s=t.length,c=o.score.wellPlaced+o.score.wrongPlaced,a=`${o.score.wellPlaced}-${o.score.wrongPlaced}`,r=st(e),f=Math.max(n.count,2),h=Math.max(1,l.count),g=Math.log(f/h),p=r.patternCounts.get(a)||0,m=r.bucketCounts.get(o.bucket||"mixed")||0,E=Math.max(1,Math.ceil(s/2)),u=1-Math.abs(c-E)/s,v=o.score.wellPlaced/s,w=c===0?1:0,y=c>=s-1?c/s:0,x=o.score.wellPlaced>=Math.ceil(s/2)?o.score.wellPlaced/s:0,Y=c===s-1&&o.score.wellPlaced>=Math.max(1,s-3)?1+o.score.wellPlaced/s:0,F=o.guess.split("").reduce((z,K)=>z+1/(1+(r.symbolCounts.get(K)||0)),0)/s,L=0;o.guess.split("").forEach((z,K)=>{let St=r.positionCounts.reduce((wt,yt)=>wt+(yt[K]===z?1:0),0);L+=1/(1+St)}),L/=s;let xt=e.length+1===i&&l.count!==1?-3:0,vt=d==="starter"?(o.bucket==="zero-hit"?.55:0)+(o.bucket==="mixed"?.35:0):d==="padding"?.25-o.score.wellPlaced*.15:0;return g*3.6+u*.9+F*1.2+L*.8+vt-p*.75-m*.35-v*.7+w*1.8-y*1.25-x*1.4-Y*2.2+xt+(Math.random()-.5)*.35},G=function(t,e,n,o,l,i){let d=ot(t,o),s=[];for(let f of d){let h=B(f.guess,t);if(h.bucket=f.bucket,!R(h,t.length))continue;let g=H(t.length,e.concat(h),C);if(g.count===0||l==="padding"&&(g.count!==1||g.solution!==t))continue;let p=ct(t,e,i,h,g,n,l);s.push({clue:h,outcome:g,score:p})}if(s.length===0)return null;s.sort((f,h)=>h.score-f.score);let c=l==="padding"?6:8,a=s.slice(0,Math.min(c,s.length)),r=a.map((f,h)=>({...f,weight:Math.max(.08,Math.exp(f.score-a[0].score))*(1-h*.04)}));return it(r)},rt=function(t,e){let n=Math.max(2,Math.min(O,e));for(let o=0;o<80;o+=1){let l=[],i=new Set,d=H(t.length,l,C),s=Math.min(3,Math.max(1,n-1)),c=nt(t,i,s);for(let r of b(c)){let f=l.concat(r.clue),h=H(t.length,f,C);h.count!==0&&(r.clue.bucket=r.bucket,l.push(r.clue),i.add(r.clue.guess),d=h)}for(;l.length<n;){if(d.count===1&&d.solution===t){let h=G(t,l,n,i,"padding",d);if(!h)break;l.push(h.clue),i.add(h.clue.guess),d=h.outcome;continue}let r=l.length<Math.min(2,n-1)?"starter":"main",f=G(t,l,n,i,r,d);if(!f)break;l.push(f.clue),i.add(f.clue.guess),d=f.outcome}if(l.length!==n)continue;let a=H(t.length,l,C);if(a.count===1&&a.solution===t)return{answer:t,clues:b(l),solutionCount:a.count}}return null},at=function(t){return t.map((e,n)=>`
          <li class="quiz-clue-item">
            <div class="quiz-guess" aria-label="guess ${n+1}">
              ${e.guess.split("").map(o=>`<span>${o}</span>`).join("")}
            </div>
            <p>${e.text}</p>
          </li>
        `).join("")},ut=function(t){return[...t.clues.map((e,n)=>`${n+1}. ${e.guess} -> ${e.text}`),"",`\u7B54\u6848\u957F\u5EA6: ${t.answer.length}`].join(`
`)},ft=function(t){let e=t.clues.map(n=>`    {"guess": "${n.guess}", "well_placed": ${n.score.wellPlaced}, "wrong_placed": ${n.score.wrongPlaced}},`).join(`
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
`},A=function(t,e,n,o,l,i){t.beginPath(),t.moveTo(e+i,n),t.lineTo(e+o-i,n),t.quadraticCurveTo(e+o,n,e+o,n+i),t.lineTo(e+o,n+l-i),t.quadraticCurveTo(e+o,n+l,e+o-i,n+l),t.lineTo(e+i,n+l),t.quadraticCurveTo(e,n+l,e,n+l-i),t.lineTo(e,n+i),t.quadraticCurveTo(e,n,e+i,n),t.closePath()},dt=function(t,e,n){let o=[],l="";for(let i of e){let d=l+i;l&&t.measureText(d).width>n?(o.push(l.trimEnd()),l=i.trimStart()):l=d}return l&&o.push(l.trim()),o.length>0?o:[e]},ht=function(t,e){let n=t.answer.length,o=n<=5?54:n===6?48:44,l=n<=5?20:n===6?16:12,i=n*o+(n-1)*l,d=112+i+48,s=928-i-116;e.font='26px "Noto Serif SC", "Songti SC", serif';let c=t.clues.map(p=>{let m=dt(e,p.text,s),E=m.length*34,u=Math.max(88,E+28);return{clue:p,textLines:m,rowHeight:u}}),a=c.reduce((p,m)=>p+m.rowHeight+18,0),r=64,f=r+52+a+18,h=f+134,g=Math.max(820,h+52);return{rows:c,height:g,answerTop:f,boxSize:o,boxGap:l,textX:d,titleHeight:r}},pt=function(t){let e=P.getContext("2d"),n=ht(t,e);P.width=1080,P.height=n.height;let o=P.width,l=P.height;e.clearRect(0,0,o,l),e.fillStyle="#fbf8f1",e.fillRect(0,0,o,l),e.strokeStyle="rgba(31, 62, 57, 0.08)",e.lineWidth=2,A(e,36,36,o-72,l-72,30),e.stroke(),e.fillStyle="#1f3e39",e.font='700 34px "Noto Serif SC", "Songti SC", serif',e.fillText("\u5BC6\u7801\u63A8\u7406\u9898",78,96);let i=80+n.titleHeight;n.rows.forEach(s=>{let c=s.rowHeight;e.fillStyle="#ffffff",e.strokeStyle="rgba(31, 62, 57, 0.14)",e.lineWidth=2,A(e,76,i-22,928,c,20),e.fill(),e.stroke(),s.clue.guess.split("").forEach((a,r)=>{let f=112+r*(n.boxSize+n.boxGap),h=i+(c-n.boxSize)/2-22;A(e,f,h,n.boxSize,n.boxSize,12),e.fillStyle="#ffffff",e.fill(),e.strokeStyle="#1f3e39",e.lineWidth=3,e.stroke(),e.fillStyle="#1f3e39",e.font=`${n.boxSize>=50?700:600} ${Math.max(24,n.boxSize-17)}px "IBM Plex Sans", "PingFang SC", sans-serif`,e.fillText(a,f+n.boxSize*.28,h+n.boxSize*.7)}),e.fillStyle="#242424",e.font='26px "Noto Serif SC", "Songti SC", serif',e.textAlign="left",e.textBaseline="top",s.textLines.forEach((a,r)=>{e.fillText(a,n.textX,i+8+r*34)}),e.textBaseline="alphabetic",i+=c+18});let d=n.answerTop;e.fillStyle="#1f3e39",e.font='600 30px "Noto Serif SC", "Songti SC", serif',e.fillText("\u7B54\u6848",84,d+18);for(let s=0;s<t.answer.length;s+=1){let c=84+s*94;A(e,c,d+40,70,70,16),e.fillStyle="#ffffff",e.fill(),e.strokeStyle="#1f3e39",e.lineWidth=4,e.stroke()}},gt=function(t){N=t,D.innerHTML=at(t.clues),pt(t),T(`\u5DF2\u751F\u6210 ${t.clues.length} \u6761\u7EBF\u7D22\uFF0C\u5E76\u5DF2\u9A8C\u8BC1\u5728 A-Z0-9 \u65E0\u91CD\u590D\u5B57\u7B26\u7A7A\u95F4\u5185\u552F\u4E00\u89E3\u4E3A ${t.answer}\u3002`)},U=function(t){N=null,D.innerHTML="",P.getContext("2d").clearRect(0,0,P.width,P.height),T(t,!0)},W=function(){let t=I(_.value);if(_.value=t,$(),!Q(t)){U("\u7B54\u6848\u9700\u8981\u662F 3 \u5230 7 \u4F4D\u4E92\u4E0D\u91CD\u590D\u7684\u5927\u5199\u5B57\u6BCD\u6216\u6570\u5B57\u3002");return}let e=J(t),n=rt(t,e);if(!n){U("\u5F53\u524D\u7EBF\u7D22\u6570\u91CF\u4E0B\u6CA1\u6709\u7A33\u5B9A\u751F\u6210\u51FA\u5168\u7A7A\u95F4\u552F\u4E00\u89E3\uFF0C\u8BF7\u63D0\u9AD8\u7EBF\u7D22\u6570\u91CF\u540E\u91CD\u8BD5\u3002");return}gt(n)},mt=function(){let t=3+q(5);_.value=b(S).slice(0,t).join(""),$(!0),W()};Pt=q,Mt=b,Tt=T,Et=I,_t=Q,Nt=j,kt=J,Ct=$,$t=V,Ht=tt,At=bt,Lt=B,qt=R,It=et,Wt=nt,Ot=ot,jt=lt,Bt=H,Rt=st,Gt=it,Ut=ct,Yt=G,Ft=rt,zt=at,Kt=ut,Xt=ft,Dt=A,Zt=dt,Qt=ht,Jt=pt,Vt=gt,te=U,ee=W,ne=mt,M.innerHTML=`
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
  `;let _=M.querySelector('[data-role="answer"]'),k=M.querySelector('[data-role="clue-count"]'),X=M.querySelector('[data-role="status"]'),D=M.querySelector('[data-role="clues"]'),P=M.querySelector('[data-role="canvas"]'),S="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),C=2,O=10,N=null,Z=4;M.addEventListener("click",async t=>{let e=t.target.closest("[data-action]");if(!e)return;let n=e.dataset.action;if(n==="generate"||n==="regenerate"){W();return}if(n==="random-answer"){mt();return}if(!N){T("\u5148\u751F\u6210\u4E00\u5957\u9898\u76EE\u3002",!0);return}if(n==="copy"){try{await navigator.clipboard.writeText(ut(N)),T("\u9898\u9762\u6587\u672C\u5DF2\u590D\u5236\u3002")}catch{T("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236\u3002",!0)}return}if(n==="copy-sat"){try{await navigator.clipboard.writeText(ft(N)),T("SAT \u9A8C\u8BC1\u811A\u672C\u5DF2\u590D\u5236\u3002")}catch{T("SAT \u811A\u672C\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",!0)}return}if(n==="download"){let o=document.createElement("a");o.href=P.toDataURL("image/png"),o.download=`quiz-${N.answer.toLowerCase()}.png`,o.click()}}),_.addEventListener("input",()=>{_.value=I(_.value),$()}),$(!0),W()}var Pt,Mt,Tt,Et,_t,Nt,kt,Ct,$t,Ht,At,Lt,qt,It,Wt,Ot,jt,Bt,Rt,Gt,Ut,Yt,Ft,zt,Kt,Xt,Dt,Zt,Qt,Jt,Vt,te,ee,ne;})();
