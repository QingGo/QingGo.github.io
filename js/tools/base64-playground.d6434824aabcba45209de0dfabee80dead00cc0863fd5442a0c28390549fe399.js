(()=>{var r=document.getElementById("tool-app");if(r&&r.dataset.toolId==="base64-playground"){let a=function(n,t=!1){d.textContent=n,d.dataset.state=t?"error":"ok"},s=function(n){let t="";return n.forEach(e=>{t+=String.fromCharCode(e)}),btoa(t)},i=function(n){let t=atob(n),e=new Uint8Array(t.length);for(let o=0;o<t.length;o+=1)e[o]=t.charCodeAt(o);return e};p=a,b=s,y=i,r.innerHTML=`
    <div class="tool-shell">
      <div class="tool-panel">
        <div class="tool-panel-head">
          <h2>Text</h2>
          <div class="tool-actions">
            <button type="button" data-action="sample">\u793A\u4F8B</button>
            <button type="button" data-action="encode">\u7F16\u7801</button>
          </div>
        </div>
        <textarea class="tool-textarea" data-role="plain" placeholder="\u8F93\u5165\u539F\u59CB\u6587\u672C"></textarea>
      </div>
      <div class="tool-panel">
        <div class="tool-panel-head">
          <h2>Base64</h2>
          <div class="tool-actions">
            <button type="button" data-action="decode">\u89E3\u7801</button>
            <button type="button" data-action="swap">\u4EA4\u6362</button>
            <button type="button" data-action="copy">\u590D\u5236</button>
          </div>
        </div>
        <textarea class="tool-textarea" data-role="encoded" placeholder="\u8F93\u5165\u6216\u8F93\u51FA Base64"></textarea>
        <p class="tool-status" data-role="status">\u652F\u6301 Unicode \u6587\u672C</p>
      </div>
    </div>
  `;let c=r.querySelector('[data-role="plain"]'),l=r.querySelector('[data-role="encoded"]'),d=r.querySelector('[data-role="status"]'),u=new TextEncoder,v=new TextDecoder;r.addEventListener("click",async n=>{let t=n.target.closest("[data-action]");if(!t)return;let e=t.dataset.action;if(e==="sample"){c.value="\u4F60\u597D\uFF0CQingGo. \u524D\u7AEF\u5C0F\u5DE5\u5177\u6D4B\u8BD5\u4E2D\u3002",a("\u5DF2\u586B\u5145\u793A\u4F8B\u6587\u672C");return}if(e==="encode"){l.value=s(u.encode(c.value)),a("\u7F16\u7801\u5B8C\u6210");return}if(e==="decode"){try{c.value=v.decode(i(l.value.trim())),a("\u89E3\u7801\u5B8C\u6210")}catch{a("Base64 \u65E0\u6CD5\u89E3\u7801",!0)}return}if(e==="swap"){let o=l.value;l.value=c.value,c.value=o,a("\u5DF2\u4EA4\u6362\u8F93\u5165\u8F93\u51FA");return}if(e==="copy"){if(!l.value){a("\u6CA1\u6709\u53EF\u590D\u5236\u7684 Base64",!0);return}try{await navigator.clipboard.writeText(l.value),a("\u5DF2\u590D\u5236 Base64")}catch{a("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236",!0)}}})}var p,b,y;})();
