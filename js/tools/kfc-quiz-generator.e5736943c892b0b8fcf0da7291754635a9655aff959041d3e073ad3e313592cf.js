(()=>{var P=document.getElementById("tool-app");if(P&&P.dataset.toolId==="kfc-quiz-generator"){let I=function(t){return Math.floor(Math.random()*t)},b=function(t){let e=t.slice();for(let n=e.length-1;n>0;n-=1){let l=I(n+1);[e[n],e[l]]=[e[l],e[n]]}return e},T=function(t,e=!1){z.textContent=t,z.dataset.state=e?"error":"ok"},O=function(t){return t.toUpperCase().replace(/[^A-Z0-9]/g,"")},D=function(t){return t.length>=3&&t.length<=7&&new Set(t).size===t.length},B=function(t){return Math.min(j,Math.max(2,t.length+1))},Z=function(t){let e=B(t),n=Number.parseInt(N.value,10);if(Number.isNaN(n))return N.value=String(e),e;let l=Math.max(2,Math.min(j,n));return N.value=String(l),l},L=function(t=!1){let e=O(_.value),n=B(e||"KFC"),l=Number.parseInt(N.value,10);(t||Number.isNaN(l)||l===X)&&(N.value=String(n)),X=n},Q=function(t,e){let n=0,l=0;for(let o=0;o<e.length;o+=1)e[o]===t[o]&&(n+=1),t.includes(e[o])&&(l+=1);return{wellPlaced:n,wrongPlaced:l-n}},J=function(t){let e=t.wellPlaced+t.wrongPlaced;return e===0?"\u6CA1\u6709\u4E00\u4E2A\u5B57\u7B26\u6B63\u786E":t.wellPlaced>0&&t.wrongPlaced===0?t.wellPlaced===1?"\u4E00\u4E2A\u5B57\u7B26\u6B63\u786E\uFF0C\u800C\u4E14\u4F4D\u7F6E\u6B63\u786E":`${t.wellPlaced}\u4E2A\u5B57\u7B26\u6B63\u786E\uFF0C\u800C\u4E14\u4F4D\u7F6E\u6B63\u786E`:t.wellPlaced===0&&t.wrongPlaced>0?t.wrongPlaced===1?"\u4E00\u4E2A\u5B57\u7B26\u6B63\u786E\uFF0C\u4F46\u662F\u4F4D\u7F6E\u4E0D\u6B63\u786E":`${t.wrongPlaced}\u4E2A\u5B57\u7B26\u6B63\u786E\uFF0C\u4F46\u662F\u4F4D\u7F6E\u90FD\u4E0D\u6B63\u786E`:`${e}\u4E2A\u5B57\u7B26\u6B63\u786E\uFF0C\u5176\u4E2D${t.wellPlaced}\u4E2A\u4F4D\u7F6E\u6B63\u786E\uFF0C${t.wrongPlaced}\u4E2A\u4F4D\u7F6E\u4E0D\u6B63\u786E`},gt=function(t){return`${t.guess}:${t.score.wellPlaced}:${t.score.wrongPlaced}`},R=function(t,e){let n=Q(e,t);return{guess:t,score:n,text:J(n)}},G=function(t,e){return t.score.wellPlaced+t.score.wrongPlaced<e},V=function(t,e=null){let n=e?e.slice():S.slice();return b(n).slice(0,t).join("")},tt=function(t,e,n){let l=[],o=t.split(""),i=S.filter(r=>!o.includes(r));function d(r,a){if(l.length>=n||e.has(r)||!r)return;let c=R(r,t);G(c,t.length)&&l.push({clue:c,bucket:a})}d(b(i).slice(0,t.length).join(""),"zero-hit");let s=Math.max(1,Math.ceil(t.length/2));for(let r=0;r<10&&l.length<n;r+=1){let a=b(b(o).slice(0,s).concat(b(i).slice(0,t.length-s))).join("");d(a,"mixed")}for(let r=1;r<t.length&&l.length<n;r+=1){let a=o.slice(r).concat(o.slice(0,r)).join("");d(a,"permutation")}return l},et=function(t,e){let n=t.length,l=t.split(""),o=S.filter(s=>!l.includes(s)),i=new Map;function d(s,r){!s||e.has(s)||i.has(s)||i.set(s,r)}for(let s=0;s<30;s+=1)d(V(n,o),"zero-hit");for(let s=1;s<n;s+=1)for(let r=0;r<20;r+=1){let a=b(l).slice(0,s),c=b(o).slice(0,n-s);d(b(a.concat(c)).join(""),s===1?"low-hit":"mixed")}for(let s=1;s<n;s+=1)for(let r=0;r<12;r+=1){let a=b(Array.from({length:n},(p,m)=>m)).slice(0,s),c=Array(n).fill(null),f=[];for(let p=0;p<n;p+=1)a.includes(p)?c[p]=t[p]:f.push(t[p]);let h=b(f.concat(b(o).slice(0,Math.max(0,n-s-f.length)))),g=0;for(let p=0;p<n;p+=1)c[p]||(c[p]=h[g],g+=1);d(c.join(""),"positioned")}for(let s=0;s<28;s+=1){let r=b(l).join("");r!==t&&d(r,"permutation")}return Array.from(i,([s,r])=>({guess:s,bucket:r}))},nt=function(t){let e=1;for(let n=S.length;n>S.length-t;n-=1)e*=n;return e},$=function(t,e,n=k){let l=nt(t);if(e.length===0)return{count:l,solution:null};let o=e.map(a=>({guess:a.guess,totalMatches:a.score.wellPlaced+a.score.wrongPlaced,wellPlaced:a.score.wellPlaced,guessSet:new Set(a.guess.split("")),suffixHits:[]}));o.forEach(a=>{a.suffixHits=Array(S.length+1).fill(0);for(let c=S.length-1;c>=0;c-=1)a.suffixHits[c]=a.suffixHits[c+1]+(a.guessSet.has(S[c])?1:0)});let i=0,d=null;function s(a){let c=a.slice(),f=Array(c.length).fill(!1),h=Array(t),g=Array(o.length).fill(0);function p(m){if(i>=n)return;if(m===t){for(let u=0;u<o.length;u+=1)if(g[u]!==o[u].wellPlaced)return;i+=1,d||(d=h.join(""));return}let E=c.filter((u,x)=>!f[x]);for(let u=0;u<o.length;u+=1){let x=o[u],y=g[u];for(let w=m;w<t;w+=1)E.includes(x.guess[w])&&(y+=1);if(g[u]>x.wellPlaced||y<x.wellPlaced)return}for(let u=0;u<c.length;u+=1){if(f[u])continue;let x=c[u];f[u]=!0,h[m]=x;let y=Array(o.length).fill(0),w=!0;for(let v=0;v<o.length;v+=1)x===o[v].guess[m]&&(y[v]=1,g[v]+=1,g[v]>o[v].wellPlaced&&(w=!1));w&&p(m+1);for(let v=0;v<o.length;v+=1)g[v]-=y[v];if(f[u]=!1,i>=n)return}}p(0)}function r(a,c,f){if(i>=n)return;let h=c.length,g=S.length-a,p=t-h;if(p<0||p>g)return;for(let u=0;u<o.length;u+=1){let x=o[u],y=x.suffixHits[a],w=g-y,v=Math.max(0,p-w),F=Math.min(p,y),H=f[u]+v,q=f[u]+F;if(x.totalMatches<H||x.totalMatches>q)return}if(h===t){for(let u=0;u<o.length;u+=1)if(f[u]!==o[u].totalMatches)return;s(c);return}if(a>=S.length)return;let m=S[a],E=f.slice();for(let u=0;u<o.length;u+=1)o[u].guessSet.has(m)&&(E[u]+=1);r(a+1,c.concat(m),E),r(a+1,c,f)}return r(0,[],Array(o.length).fill(0)),{count:i,solution:d}},ot=function(t){let e=new Map,n=new Map,l=new Map,o=t.map(i=>i.guess.split(""));return t.forEach(i=>{let d=`${i.score.wellPlaced}-${i.score.wrongPlaced}`;e.set(d,(e.get(d)||0)+1),n.set(i.bucket||"mixed",(n.get(i.bucket||"mixed")||0)+1),i.guess.split("").forEach(s=>{l.set(s,(l.get(s)||0)+1)})}),{patternCounts:e,bucketCounts:n,symbolCounts:l,positionCounts:o}},lt=function(t){let e=t.reduce((l,o)=>l+o.weight,0);if(e<=0)return t[I(t.length)];let n=Math.random()*e;for(let l of t)if(n-=l.weight,n<=0)return l;return t[t.length-1]},st=function(t,e,n,l,o,i,d){let s=t.length,r=l.score.wellPlaced+l.score.wrongPlaced,a=`${l.score.wellPlaced}-${l.score.wrongPlaced}`,c=ot(e),f=Math.max(n.count,2),h=Math.max(1,o.count),g=Math.log(f/h),p=c.patternCounts.get(a)||0,m=c.bucketCounts.get(l.bucket||"mixed")||0,E=Math.max(1,Math.ceil(s/2)),u=1-Math.abs(r-E)/s,x=l.score.wellPlaced/s,y=l.guess.split("").reduce((H,q)=>H+1/(1+(c.symbolCounts.get(q)||0)),0)/s,w=0;l.guess.split("").forEach((H,q)=>{let mt=c.positionCounts.reduce((bt,vt)=>bt+(vt[q]===H?1:0),0);w+=1/(1+mt)}),w/=s;let v=e.length+1===i&&o.count!==1?-3:0,F=d==="starter"?(l.bucket==="zero-hit"?.55:0)+(l.bucket==="mixed"?.35:0):d==="padding"?.25-l.score.wellPlaced*.15:0;return g*3.6+u*.9+y*1.2+w*.8+F-p*.75-m*.35-x*.7+v+(Math.random()-.5)*.35},U=function(t,e,n,l,o,i){let d=et(t,l),s=[];for(let f of d){let h=R(f.guess,t);if(h.bucket=f.bucket,!G(h,t.length))continue;let g=$(t.length,e.concat(h),k);if(g.count===0||o==="padding"&&(g.count!==1||g.solution!==t))continue;let p=st(t,e,i,h,g,n,o);s.push({clue:h,outcome:g,score:p})}if(s.length===0)return null;s.sort((f,h)=>h.score-f.score);let r=o==="padding"?6:8,a=s.slice(0,Math.min(r,s.length)),c=a.map((f,h)=>({...f,weight:Math.max(.08,Math.exp(f.score-a[0].score))*(1-h*.04)}));return lt(c)},it=function(t,e){let n=Math.max(2,Math.min(j,e));for(let l=0;l<80;l+=1){let o=[],i=new Set,d=$(t.length,o,k),s=Math.min(3,Math.max(1,n-1)),r=tt(t,i,s);for(let c of b(r)){let f=o.concat(c.clue),h=$(t.length,f,k);h.count!==0&&(c.clue.bucket=c.bucket,o.push(c.clue),i.add(c.clue.guess),d=h)}for(;o.length<n;){if(d.count===1&&d.solution===t){let h=U(t,o,n,i,"padding",d);if(!h)break;o.push(h.clue),i.add(h.clue.guess),d=h.outcome;continue}let c=o.length<Math.min(2,n-1)?"starter":"main",f=U(t,o,n,i,c,d);if(!f)break;o.push(f.clue),i.add(f.clue.guess),d=f.outcome}if(o.length!==n)continue;let a=$(t.length,o,k);if(a.count===1&&a.solution===t)return{answer:t,clues:b(o),solutionCount:a.count}}return null},ct=function(t){return t.map((e,n)=>`
          <li class="quiz-clue-item">
            <div class="quiz-guess" aria-label="guess ${n+1}">
              ${e.guess.split("").map(l=>`<span>${l}</span>`).join("")}
            </div>
            <p>${e.text}</p>
          </li>
        `).join("")},rt=function(t){return[...t.clues.map((e,n)=>`${n+1}. ${e.guess} -> ${e.text}`),"",`\u7B54\u6848\u957F\u5EA6: ${t.answer.length}`].join(`
`)},at=function(t){let e=t.clues.map(n=>`    {"guess": "${n.guess}", "well_placed": ${n.score.wellPlaced}, "wrong_placed": ${n.score.wrongPlaced}},`).join(`
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
`},A=function(t,e,n,l,o,i){t.beginPath(),t.moveTo(e+i,n),t.lineTo(e+l-i,n),t.quadraticCurveTo(e+l,n,e+l,n+i),t.lineTo(e+l,n+o-i),t.quadraticCurveTo(e+l,n+o,e+l-i,n+o),t.lineTo(e+i,n+o),t.quadraticCurveTo(e,n+o,e,n+o-i),t.lineTo(e,n+i),t.quadraticCurveTo(e,n,e+i,n),t.closePath()},ut=function(t,e,n){let l=[],o="";for(let i of e){let d=o+i;o&&t.measureText(d).width>n?(l.push(o.trimEnd()),o=i.trimStart()):o=d}return o&&l.push(o.trim()),l.length>0?l:[e]},ft=function(t,e){let n=t.answer.length,l=n<=5?54:n===6?48:44,o=n<=5?20:n===6?16:12,i=n*l+(n-1)*o,d=112+i+48,s=928-i-116;e.font='26px "Noto Serif SC", "Songti SC", serif';let r=t.clues.map(p=>{let m=ut(e,p.text,s),E=m.length*34,u=Math.max(88,E+28);return{clue:p,textLines:m,rowHeight:u}}),a=r.reduce((p,m)=>p+m.rowHeight+18,0),c=64,f=c+52+a+18,h=f+134,g=Math.max(820,h+52);return{rows:r,height:g,answerTop:f,boxSize:l,boxGap:o,textX:d,titleHeight:c}},dt=function(t){let e=M.getContext("2d"),n=ft(t,e);M.width=1080,M.height=n.height;let l=M.width,o=M.height;e.clearRect(0,0,l,o),e.fillStyle="#fbf8f1",e.fillRect(0,0,l,o),e.strokeStyle="rgba(31, 62, 57, 0.08)",e.lineWidth=2,A(e,36,36,l-72,o-72,30),e.stroke(),e.fillStyle="#1f3e39",e.font='700 34px "Noto Serif SC", "Songti SC", serif',e.fillText("\u5BC6\u7801\u63A8\u7406\u9898",78,96);let i=80+n.titleHeight;n.rows.forEach(s=>{let r=s.rowHeight;e.fillStyle="#ffffff",e.strokeStyle="rgba(31, 62, 57, 0.14)",e.lineWidth=2,A(e,76,i-22,928,r,20),e.fill(),e.stroke(),s.clue.guess.split("").forEach((a,c)=>{let f=112+c*(n.boxSize+n.boxGap),h=i+(r-n.boxSize)/2-22;A(e,f,h,n.boxSize,n.boxSize,12),e.fillStyle="#ffffff",e.fill(),e.strokeStyle="#1f3e39",e.lineWidth=3,e.stroke(),e.fillStyle="#1f3e39",e.font=`${n.boxSize>=50?700:600} ${Math.max(24,n.boxSize-17)}px "IBM Plex Sans", "PingFang SC", sans-serif`,e.fillText(a,f+n.boxSize*.28,h+n.boxSize*.7)}),e.fillStyle="#242424",e.font='26px "Noto Serif SC", "Songti SC", serif',e.textAlign="left",e.textBaseline="top",s.textLines.forEach((a,c)=>{e.fillText(a,n.textX,i+8+c*34)}),e.textBaseline="alphabetic",i+=r+18});let d=n.answerTop;e.fillStyle="#1f3e39",e.font='600 30px "Noto Serif SC", "Songti SC", serif',e.fillText("\u7B54\u6848",84,d+18);for(let s=0;s<t.answer.length;s+=1){let r=84+s*94;A(e,r,d+40,70,70,16),e.fillStyle="#ffffff",e.fill(),e.strokeStyle="#1f3e39",e.lineWidth=4,e.stroke()}},ht=function(t){C=t,K.innerHTML=ct(t.clues),dt(t),T(`\u5DF2\u751F\u6210 ${t.clues.length} \u6761\u7EBF\u7D22\uFF0C\u5E76\u5DF2\u9A8C\u8BC1\u5728 A-Z0-9 \u65E0\u91CD\u590D\u5B57\u7B26\u7A7A\u95F4\u5185\u552F\u4E00\u89E3\u4E3A ${t.answer}\u3002`)},Y=function(t){C=null,K.innerHTML="",M.getContext("2d").clearRect(0,0,M.width,M.height),T(t,!0)},W=function(){let t=O(_.value);if(_.value=t,L(),!D(t)){Y("\u7B54\u6848\u9700\u8981\u662F 3 \u5230 7 \u4F4D\u4E92\u4E0D\u91CD\u590D\u7684\u5927\u5199\u5B57\u6BCD\u6216\u6570\u5B57\u3002");return}let e=Z(t),n=it(t,e);if(!n){Y("\u5F53\u524D\u7EBF\u7D22\u6570\u91CF\u4E0B\u6CA1\u6709\u7A33\u5B9A\u751F\u6210\u51FA\u5168\u7A7A\u95F4\u552F\u4E00\u89E3\uFF0C\u8BF7\u63D0\u9AD8\u7EBF\u7D22\u6570\u91CF\u540E\u91CD\u8BD5\u3002");return}ht(n)},pt=function(){let t=3+I(5);_.value=b(S).slice(0,t).join(""),L(!0),W()};xt=I,St=b,wt=T,yt=O,Mt=D,Pt=B,Tt=Z,Et=L,_t=Q,Ct=J,Nt=gt,kt=R,Lt=G,$t=V,At=tt,Ht=et,qt=nt,It=$,Ot=ot,Wt=lt,jt=st,Bt=U,Rt=it,Gt=ct,Ut=rt,Yt=at,Ft=A,zt=ut,Kt=ft,Xt=dt,Dt=ht,Zt=Y,Qt=W,Jt=pt,P.innerHTML=`
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
  `;let _=P.querySelector('[data-role="answer"]'),N=P.querySelector('[data-role="clue-count"]'),z=P.querySelector('[data-role="status"]'),K=P.querySelector('[data-role="clues"]'),M=P.querySelector('[data-role="canvas"]'),S="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),k=2,j=10,C=null,X=4;P.addEventListener("click",async t=>{let e=t.target.closest("[data-action]");if(!e)return;let n=e.dataset.action;if(n==="generate"||n==="regenerate"){W();return}if(n==="random-answer"){pt();return}if(!C){T("\u5148\u751F\u6210\u4E00\u5957\u9898\u76EE\u3002",!0);return}if(n==="copy"){try{await navigator.clipboard.writeText(rt(C)),T("\u9898\u9762\u6587\u672C\u5DF2\u590D\u5236\u3002")}catch{T("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236\u3002",!0)}return}if(n==="copy-sat"){try{await navigator.clipboard.writeText(at(C)),T("SAT \u9A8C\u8BC1\u811A\u672C\u5DF2\u590D\u5236\u3002")}catch{T("SAT \u811A\u672C\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",!0)}return}if(n==="download"){let l=document.createElement("a");l.href=M.toDataURL("image/png"),l.download=`quiz-${C.answer.toLowerCase()}.png`,l.click()}}),_.addEventListener("input",()=>{_.value=O(_.value),L()}),L(!0),W()}var xt,St,wt,yt,Mt,Pt,Tt,Et,_t,Ct,Nt,kt,Lt,$t,At,Ht,qt,It,Ot,Wt,jt,Bt,Rt,Gt,Ut,Yt,Ft,zt,Kt,Xt,Dt,Zt,Qt,Jt;})();
