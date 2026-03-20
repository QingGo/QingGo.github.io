(()=>{var t=document.getElementById("tool-app");if(t&&t.dataset.toolId==="gradient-lab"){let o=function(){let e=`linear-gradient(${l.value}deg, ${s.value}, ${c.value})`;i.style.background=e,d.textContent=`background: ${e};`,a.textContent=`\u89D2\u5EA6 ${l.value}\xB0`,a.dataset.state="ok"},n=function(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`};u=o,v=n,t.innerHTML=`
    <div class="tool-shell tool-shell-wide">
      <div class="tool-panel">
        <div class="tool-panel-head">
          <h2>Controls</h2>
          <div class="tool-actions">
            <button type="button" data-action="random">\u968F\u673A</button>
            <button type="button" data-action="copy">\u590D\u5236 CSS</button>
          </div>
        </div>
        <div class="tool-form">
          <label class="tool-field">
            <span>Color A</span>
            <input type="color" data-role="color-a" value="#234b63" />
          </label>
          <label class="tool-field">
            <span>Color B</span>
            <input type="color" data-role="color-b" value="#f2b680" />
          </label>
          <label class="tool-field">
            <span>Angle</span>
            <input type="range" data-role="angle" min="0" max="360" value="135" />
          </label>
        </div>
        <p class="tool-status" data-role="status">\u62D6\u52A8\u53C2\u6570\u67E5\u770B\u53D8\u5316</p>
        <pre class="tool-code" data-role="css"></pre>
      </div>
      <div class="tool-preview" data-role="preview" aria-label="Gradient preview"></div>
    </div>
  `;let s=t.querySelector('[data-role="color-a"]'),c=t.querySelector('[data-role="color-b"]'),l=t.querySelector('[data-role="angle"]'),i=t.querySelector('[data-role="preview"]'),d=t.querySelector('[data-role="css"]'),a=t.querySelector('[data-role="status"]');t.addEventListener("input",o),t.addEventListener("click",async e=>{let r=e.target.closest("[data-action]");if(r){if(r.dataset.action==="random"){s.value=n(),c.value=n(),l.value=String(Math.floor(Math.random()*361)),o();return}if(r.dataset.action==="copy")try{await navigator.clipboard.writeText(d.textContent),a.textContent="CSS \u5DF2\u590D\u5236",a.dataset.state="ok"}catch{a.textContent="\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236",a.dataset.state="error"}}}),o()}var u,v;})();
