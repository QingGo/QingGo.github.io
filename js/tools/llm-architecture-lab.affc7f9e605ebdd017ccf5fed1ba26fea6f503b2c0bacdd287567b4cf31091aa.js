(()=>{var s=document.getElementById("tool-app");if(s&&s.dataset.toolId==="llm-architecture-lab"){let a=function(e){return e==null?"":typeof e=="string"?e:e[t.locale]||e.zh||e.en||""},u=function(){return t.config.models.find(e=>e.id===t.currentModelId)},w=function(){return u()?.modules[t.currentModuleId]||null},f=function(){n.modelLabel.textContent=a(t.config.ui.modelLabel),n.compareTitle.textContent=a(t.config.ui.compareTitle),n.summaryTitle.textContent=a(t.config.ui.summaryTitle),n.detailsTitle.textContent=a(t.config.ui.detailsTitle),n.statsTitle.textContent=a(t.config.ui.statsTitle),n.compareToggle.textContent=t.compareOpen?a(t.config.ui.compareToggleOff):a(t.config.ui.compareToggleOn)},h=function(){n.modelSelect.innerHTML=t.config.models.map(l=>{let o=l.id===t.currentModelId?" selected":"";return`<option value="${l.id}"${o}>${a(l.name)}</option>`}).join(""),[...n.localeToggle.querySelectorAll("button")].forEach(l=>{l.classList.toggle("is-active",l.dataset.locale===t.locale)}),n.compareSection.hidden=!t.compareOpen;let e=s.closest(".tool-page");e&&e.classList.toggle("llm-compare-open",t.compareOpen)},S=function(){let e=t.config.models.map(o=>`<th>${a(o.name)}</th>`).join(""),l=t.config.compareFields.map(o=>{let i=t.config.models.map(c=>`<td class="${(c.id===t.currentModelId?" is-current":"").trim()}">${c.compareValues[o.id]||"\u2014"}</td>`).join("");return`
          <tr>
            <th>${a(o.label)}</th>
            ${i}
          </tr>
        `}).join("");n.compareTable.innerHTML=`
      <thead>
        <tr>
          <th>${a(t.config.ui.modelLabel)}</th>
          ${e}
        </tr>
      </thead>
      <tbody>${l}</tbody>
    `},L=function(e){n.modelBadge.textContent=a(e.badge);let l=t.config.compareFields.map(o=>`
          <tr>
            <th>${a(o.label)}</th>
            <td>${e.compareValues[o.id]||"\u2014"}</td>
          </tr>
        `).join("");n.summaryTable.innerHTML=`
      <table class="llm-summary-table">
        <tbody>${l}</tbody>
      </table>
      ${e.provisional?`<p class="llm-summary-note">${a(t.config.ui.provisionalNote)}</p>`:""}
    `},I=function(){let e=n.diagram.querySelector("svg");if(!e)return;let l=[...e.querySelectorAll("[data-node-id]")];function o(){l.forEach(i=>{i.classList.toggle("is-active",i.dataset.nodeId===t.currentModuleId)})}l.forEach(i=>{i.addEventListener("mouseenter",()=>{i.classList.add("is-hovered")}),i.addEventListener("mouseleave",()=>{i.classList.remove("is-hovered")}),i.addEventListener("click",c=>{c.stopPropagation(),t.currentModuleId=i.dataset.nodeId,o(),v()})}),n.diagram.onclick=i=>{i.target.closest("[data-node-id]")||(t.currentModuleId=null,o(),v())},o()},k=function(e){if(!e){n.moduleSection.hidden=!0,n.moduleContent.innerHTML="";return}n.moduleSection.hidden=!1;let l=(e.references||[]).map(o=>`<li><a href="${o.url}" target="_blank" rel="noreferrer">${o.label}</a></li>`).join("");n.moduleContent.innerHTML=`
      <div class="llm-module-header">
        <h4>${a(e.label)}</h4>
      </div>
      <div class="llm-module-block">
        <span>${a(t.config.ui.moduleSummaryLabel)}</span>
        <p>${a(e.summary)}</p>
      </div>
      <div class="llm-module-block">
        <span>${a(t.config.ui.moduleInModelLabel)}</span>
        <p>${a(e.inModel)}</p>
      </div>
      <div class="llm-module-block">
        <span>${a(t.config.ui.moduleWhyLabel)}</span>
        <p>${a(e.why)}</p>
      </div>
      <div class="llm-module-block">
        <span>${a(t.config.ui.moduleComparedLabel)}</span>
        <p>${a(e.compared)}</p>
      </div>
      <div class="llm-module-block">
        <span>${a(t.config.ui.referencesTitle)}</span>
        <ul class="llm-reference-list">${l}</ul>
      </div>
    `},q=function(e){let l=(e.items||[]).map(o=>`
          <div class="llm-metric-item">
            <span>${a(o.label)}</span>
            <strong>${o.value}</strong>
          </div>
        `).join("");return`
      <article class="llm-chart-card">
        <h4>${a(e.title)}</h4>
        <div class="llm-metric-grid">${l}</div>
      </article>
    `},j=function(e){return`
      <article class="llm-chart-card">
        <h4>${a(e.title)}</h4>
        <p class="llm-chart-note">${a(e.body||e.note)}</p>
      </article>
    `},E=function(e){let l=e.values||[],o=l.flat(),i=Math.min(...o),c=Math.max(...o),d=`repeat(${e.cols.length}, minmax(44px, 1fr))`,p=l.flatMap((m,y)=>m.map((g,x)=>{let M=.18+(c===i?1:(g-i)/(c-i))*.72,r=`${e.rows[y]} / ${e.cols[x]}: ${g.toFixed(2)}`;return`<div class="llm-heatmap-cell" style="background: rgba(29, 77, 79, ${M.toFixed(3)});" title="${r}">${g.toFixed(2)}</div>`})).join("");return`
      <article class="llm-chart-card">
        <h4>${a(e.title)}</h4>
        <div class="llm-heatmap-axis llm-heatmap-cols" style="grid-template-columns:${d};">
          ${e.cols.map(m=>`<span>${m}</span>`).join("")}
        </div>
        <div class="llm-heatmap-wrap">
          <div class="llm-heatmap-rows">
            ${e.rows.map(m=>`<span>${m}</span>`).join("")}
          </div>
          <div class="llm-heatmap-grid" style="grid-template-columns:${d};">
            ${p}
          </div>
        </div>
        ${e.note?`<p class="llm-chart-note">${a(e.note)}</p>`:""}
      </article>
    `},C=function(e){let c=e.points||[],d=c.map(r=>r.x),p=c.map(r=>r.y),m=Math.min(...d),y=Math.max(...d),g=Math.min(...p),x=Math.max(...p),H={code:"#1d4d4f",zh:"#9c7a2f",en:"#315d8f",meta:"#96564b",symbol:"#6d5b88",sample:"#1d4d4f"},M=c.map(r=>{let O=28+(r.x-m)/(y-m||1)*464,z=272-(r.y-g)/(x-g||1)*244,N=H[r.group]||"#1d4d4f";return`
          <g>
            <circle cx="${O.toFixed(1)}" cy="${z.toFixed(1)}" r="5.5" fill="${N}" fill-opacity="0.82"></circle>
            <text x="${(O+8).toFixed(1)}" y="${(z-8).toFixed(1)}" class="llm-scatter-label">${r.label}</text>
          </g>
        `}).join("");return`
      <article class="llm-chart-card">
        <h4>${a(e.title)}</h4>
        <svg class="llm-scatter" viewBox="0 0 520 300" role="img" aria-label="${a(e.title)}">
          <rect x="0" y="0" width="520" height="300" rx="18" fill="rgba(246, 243, 236, 0.7)"></rect>
          <line x1="28" y1="272" x2="492" y2="272" stroke="#95a3a5" stroke-width="1.5"></line>
          <line x1="28" y1="28" x2="28" y2="272" stroke="#95a3a5" stroke-width="1.5"></line>
          ${M}
        </svg>
        ${e.note?`<p class="llm-chart-note">${a(e.note)}</p>`:""}
      </article>
    `},F=function(e){if(!e?.length){n.statsGrid.innerHTML="";return}n.statsGrid.innerHTML=e.map(l=>l.kind==="metrics"?q(l):l.kind==="heatmap"?E(l):l.kind==="scatter"?C(l):j(l)).join("")},b=function(e){return t.currentModuleId&&e.modules[t.currentModuleId]?t.currentModuleId:null};V=a,X=u,Y=w,J=f,R=h,W=S,_=L,D=I,K=k,Q=q,U=j,Z=E,ee=C,te=F,le=b;let t={locale:"zh",config:null,statsCache:new Map,currentModelId:null,currentModuleId:null,compareOpen:!0};s.innerHTML=`
    <section class="llm-lab">
      <div class="llm-toolbar">
        <div class="llm-toolbar-main">
          <label class="llm-inline-control">
            <span data-role="model-label"></span>
            <select data-role="model-select"></select>
          </label>
          <button type="button" class="llm-compare-toggle" data-role="compare-toggle"></button>
        </div>
        <div class="llm-locale-toggle" data-role="locale-toggle">
          <button type="button" data-locale="zh">\u4E2D</button>
          <button type="button" data-locale="en">EN</button>
        </div>
      </div>

      <section class="llm-main-grid">
        <div class="llm-architecture-card">
          <div class="llm-diagram-shell">
            <div class="llm-diagram" data-role="diagram"></div>
          </div>
          <section class="llm-params-section" data-role="compare-section">
            <div class="llm-section-head">
              <h3 data-role="summary-title"></h3>
              <span class="llm-pill" data-role="model-badge"></span>
            </div>
            <div data-role="summary-table"></div>
            <div class="llm-section-head llm-section-subhead">
              <h3 data-role="compare-title"></h3>
            </div>
            <div class="llm-compare-table-wrap">
              <table class="llm-compare-table" data-role="compare-table"></table>
            </div>
          </section>
        </div>

        <aside class="llm-details-card">
          <section class="llm-module-section" data-role="module-section" hidden>
            <div class="llm-section-head">
              <h3 data-role="details-title"></h3>
            </div>
            <div class="llm-module-content" data-role="module-content"></div>
          </section>
        </aside>
      </section>

      <section class="llm-stats-section">
        <div class="llm-section-head">
          <h3 data-role="stats-title"></h3>
        </div>
        <div class="llm-stats-grid" data-role="stats-grid"></div>
      </section>
    </section>
  `;let n={modelLabel:s.querySelector('[data-role="model-label"]'),modelSelect:s.querySelector('[data-role="model-select"]'),compareToggle:s.querySelector('[data-role="compare-toggle"]'),localeToggle:s.querySelector('[data-role="locale-toggle"]'),compareSection:s.querySelector('[data-role="compare-section"]'),compareTitle:s.querySelector('[data-role="compare-title"]'),compareTable:s.querySelector('[data-role="compare-table"]'),diagram:s.querySelector('[data-role="diagram"]'),summaryTitle:s.querySelector('[data-role="summary-title"]'),modelBadge:s.querySelector('[data-role="model-badge"]'),summaryTable:s.querySelector('[data-role="summary-table"]'),detailsTitle:s.querySelector('[data-role="details-title"]'),moduleSection:s.querySelector('[data-role="module-section"]'),moduleContent:s.querySelector('[data-role="module-content"]'),statsTitle:s.querySelector('[data-role="stats-title"]'),statsGrid:s.querySelector('[data-role="stats-grid"]')};async function T(e){let l=await fetch(e);if(!l.ok)throw new Error(`Failed to load ${e}`);return l.json()}async function B(e){let l=await fetch(e);if(!l.ok)throw new Error(`Failed to load ${e}`);return l.text()}async function A(e){return t.statsCache.has(e.id)||t.statsCache.set(e.id,T(e.statsPath)),t.statsCache.get(e.id)}async function P(e){n.diagram.innerHTML=await B(e.svgPath),I()}async function v(){let e=u(),l=w();k(l);let o=await A(e),i=Object.values(o.moduleStats||{}).flat(),c=l?.stats?.length?l.stats.map(d=>i.find(p=>p.id===d)).filter(Boolean):o.moduleStats[t.currentModuleId]||[];F(c)}async function $(){let e=u();L(e),S(),await P(e),await v()}async function G(){try{t.config=await T("/data/llm-inspector/models.json"),t.locale=t.config.defaultLocale||"zh",t.currentModelId=t.config.defaultModelId||t.config.models[0]?.id,t.currentModuleId=b(u()),f(),h(),await $()}catch(e){s.innerHTML=`<p class="tool-status" data-state="error">${e.message}</p>`}}n.modelSelect.addEventListener("change",async e=>{t.currentModelId=e.target.value,t.currentModuleId=b(u()),f(),h(),await $()}),n.compareToggle.addEventListener("click",()=>{t.compareOpen=!t.compareOpen,f(),h()}),n.localeToggle.addEventListener("click",async e=>{let l=e.target.closest("[data-locale]");l&&(t.locale=l.dataset.locale,f(),h(),await $())}),G()}var V,X,Y,J,R,W,_,D,K,Q,U,Z,ee,te,le;})();
