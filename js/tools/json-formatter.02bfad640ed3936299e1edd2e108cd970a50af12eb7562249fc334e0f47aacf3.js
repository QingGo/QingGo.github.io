(()=>{var n=document.getElementById("tool-app");if(n&&n.dataset.toolId==="json-formatter"){let a=function(r,o=!1){i.textContent=r,i.dataset.state=o?"error":"ok"},s=function(r){let o=l.value.trim();if(!o){e.value="",a("\u8BF7\u8F93\u5165 JSON \u5185\u5BB9",!0);return}try{let t=JSON.parse(o);e.value=r==="minify"?JSON.stringify(t):JSON.stringify(t,null,2),a(`JSON \u6709\u6548\uFF0C\u5DF2\u5B8C\u6210${r==="minify"?"\u538B\u7F29":"\u683C\u5F0F\u5316"}`)}catch(t){e.value="",a(`\u89E3\u6790\u5931\u8D25: ${t.message}`,!0)}};c=a,d=s,n.innerHTML=`
    <div class="tool-shell">
      <div class="tool-panel">
        <div class="tool-panel-head">
          <h2>Input</h2>
          <div class="tool-actions">
            <button type="button" data-action="sample">\u793A\u4F8B</button>
            <button type="button" data-action="clear">\u6E05\u7A7A</button>
          </div>
        </div>
        <textarea class="tool-textarea" data-role="input" placeholder='{"hello":"world"}'></textarea>
      </div>
      <div class="tool-panel">
        <div class="tool-panel-head">
          <h2>Output</h2>
          <div class="tool-actions">
            <button type="button" data-action="format">\u683C\u5F0F\u5316</button>
            <button type="button" data-action="minify">\u538B\u7F29</button>
            <button type="button" data-action="copy">\u590D\u5236</button>
          </div>
        </div>
        <textarea class="tool-textarea" data-role="output" placeholder="\u5904\u7406\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC" readonly></textarea>
        <p class="tool-status" data-role="status">\u7B49\u5F85\u8F93\u5165</p>
      </div>
    </div>
  `;let l=n.querySelector('[data-role="input"]'),e=n.querySelector('[data-role="output"]'),i=n.querySelector('[data-role="status"]'),u=`{
  "name": "QingGo",
  "focus": ["LLM Infra", "Data-centric LLM", "Systems"],
  "active": true,
  "meta": {
    "site": "blog",
    "year": 2026
  }
}`;n.addEventListener("click",async r=>{let o=r.target.closest("[data-action]");if(!o)return;let t=o.dataset.action;if(t==="sample"){l.value=u,e.value="",a("\u5DF2\u586B\u5145\u793A\u4F8B JSON");return}if(t==="clear"){l.value="",e.value="",a("\u5DF2\u6E05\u7A7A");return}if(t==="format"||t==="minify"){s(t);return}if(t==="copy"){if(!e.value){a("\u6CA1\u6709\u53EF\u590D\u5236\u7684\u5185\u5BB9",!0);return}try{await navigator.clipboard.writeText(e.value),a("\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F")}catch{a("\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236",!0)}}})}var c,d;})();
