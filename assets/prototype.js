(function(){
"use strict";
const $=id=>document.getElementById(id),all=window.STANDARDS_DB.standards;
const esc=value=>String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const today=new Date().toLocaleDateString("en-CA",{timeZone:"Australia/Hobart"});
const upcoming=all.filter(s=>s.effSort&&s.effSort>=today&&s.status!=="superseded").sort((a,b)=>a.effSort.localeCompare(b.effSort));
let saved=[],reviewed=[],storageOK=true,activePage="home",toastTimer;
try{const data=JSON.parse(localStorage.getItem("ledger-personal-review")||"{}");saved=Array.isArray(data.saved)?[...new Set(data.saved.filter(c=>all.some(s=>s.code===c)))]:[];reviewed=Array.isArray(data.reviewed)?[...new Set(data.reviewed.filter(c=>saved.includes(c)))]:[];}catch(e){storageOK=false;}
function notice(text){$("feedback").textContent=text;$("feedback").hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$("feedback").hidden=true,3500);}
function persist(){try{localStorage.setItem("ledger-personal-review",JSON.stringify({saved,reviewed}));}catch(e){storageOK=false;}renderPersonal();}
const icons={home:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',library:'<path d="M4 4h6a3 3 0 0 1 2 1 3 3 0 0 1 2-1h6v16h-6a3 3 0 0 0-2 1 3 3 0 0 0-2-1H4Z"/><path d="M12 5v16"/>',timeline:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4M17 3v4M3 11h18M8 15h2M14 15h2"/>',bridge:'<path d="M4 8h16l-4-4M20 16H4l4 4"/>'};
const nav=document.createElement("nav");nav.className="studio-nav";nav.setAttribute("aria-label","Main navigation");
nav.innerHTML=Object.entries({home:"Overview",library:"Library",timeline:"Dates",bridge:"Compare"}).map(([key,label])=>'<button data-page="'+key+'" '+(key==="home"?'aria-current="page"':'')+'><svg viewBox="0 0 24 24" aria-hidden="true">'+icons[key]+'</svg><span>'+label+'</span></button>').join("");
document.querySelector(".workspace-bar").after(nav);
document.querySelector(".brand .eyebrow").textContent="THE STANDARDS LEDGER / YOUR DAILY BRIEF";
document.querySelector(".brand h1").innerHTML='A clearer view.<br><span class="rule-mark">A confident next step.</span>';
document.querySelector(".brand p").textContent="Know what is changing, keep useful standards close, and make room for the work that matters.";
document.querySelector(".workspace-bar>span").textContent="INDEPENDENT REFERENCE / AUSTRALIA";
$("q").placeholder="Find a standard, topic or phrase...";
const dashboard=document.createElement("main");dashboard.className="dashboard";dashboard.id="dashboard";dashboard.tabIndex=-1;
const next=upcoming[0];
const years=[...new Set(upcoming.map(s=>s.effSort.slice(0,4)))].slice(0,5);
const counts=years.map(year=>upcoming.filter(s=>s.effSort.startsWith(year)).length),max=Math.max(...counts,1);
dashboard.innerHTML=[
'<div class="dashboard-grid">',
'<section class="panel feature-panel"><div class="feature-art" aria-hidden="true"></div><div><div class="eyebrow">ON THE HORIZON</div><h2>Tomorrow&#39;s changes,<br>on your radar.</h2><p>',
next?esc(next.code)+" has a recorded change from "+new Date(next.effSort+"T12:00:00").toLocaleDateString("en-AU",{day:"numeric",month:"long",year:"numeric"})+". Explore the requirements before your next reporting cycle.":"Explore the catalogue and build a review list around your work.",
'</p></div><button class="action" data-page="timeline">Explore upcoming changes <span aria-hidden="true">&rarr;</span></button></section>',
'<section class="panel review-panel"><div class="panel-head"><div><div class="eyebrow">A LITTLE CLARITY, EVERY VISIT</div><h2>Your review, at your pace.</h2></div></div><div class="review-visual"><div class="progress-ring" id="review-ring"><span id="review-ratio"></span></div><div class="review-copy"><strong id="review-message"></strong><p id="review-subtitle"></p></div></div><button class="text-action" id="go-saved">Open your review list &rarr;</button><p class="review-note" id="storage-note"></p></section></div>',
'<div class="stat-strip" aria-label="Catalogue summary"><button data-stat="all"><strong>'+all.length+'</strong><span>Pronouncements to explore &rarr;</span></button><button data-stat="future"><strong>'+all.filter(s=>s.status==="future").length+'</strong><span>Recorded as not yet effective &rarr;</span></button><button data-stat="active"><strong>'+all.filter(s=>s.status==="active").length+'</strong><span>Recorded as in force &rarr;</span></button></div>',
'<div class="dashboard-grid"><section class="panel"><div class="panel-head"><div><div class="eyebrow">MAKE SPACE TO PREPARE</div><h2>The road ahead</h2></div><button class="text-action" data-page="timeline">View dates &rarr;</button></div><p>Upcoming dated changes across the catalogue. Select a year to explore its standards.</p><div class="horizon-chart" aria-label="Upcoming dated changes by year">',
years.map((year,i)=>'<div class="horizon-column"><span>'+counts[i]+'</span><button data-year="'+year+'" style="height:'+Math.max(24,counts[i]/max*95)+'px" aria-label="'+counts[i]+' dated changes in '+year+'"></button></div>').join(""),
'</div><div class="chart-labels">'+years.map(y=>"<span>"+y+"</span>").join("")+'</div><p class="chart-caption">Counts describe this catalogue, not your reporting obligations. Confirm applicability in the official source.</p></section>',
'<section class="panel"><div class="panel-head"><div><div class="eyebrow">FROM THE CHANGE LOG</div><h2>Worth a closer look</h2></div></div><div>',
window.STANDARDS_DB.meta.changelog.slice(0,3).map(c=>'<div class="digest-row"><div><span class="digest-code">'+esc(c.code||"Catalogue update")+'</span><button data-jump="'+esc(c.code||"")+'">'+esc(all.find(s=>s.code===c.code)?.title||c.text)+'</button><p>Recorded '+esc(c.date)+'</p></div></div>').join(""),
'</div></section></div>',
'<section class="panel saved-section" id="saved-section"><div class="panel-head"><div><div class="eyebrow">PICK UP WHERE YOU LEFT OFF</div><h2>Your personal review list</h2></div><button class="text-action" data-page="library">Browse library &rarr;</button></div><div id="saved-items"></div></section>'
].join("");
document.querySelector(".masthead").after(dashboard);
document.body.insertAdjacentHTML("beforeend",'<div class="toast" id="feedback" role="status" aria-live="polite" hidden></div>');
document.body.insertAdjacentHTML("afterbegin",'<a class="skip-link" href="#dashboard">Skip to content</a>');
function renderPersonal(){
 const count=reviewed.filter(c=>saved.includes(c)).length;
 $("review-ratio").textContent=count+"/"+saved.length;
 $("review-ring").style.setProperty("--progress",(saved.length?count/saved.length*360:0)+"deg");
 $("review-ring").setAttribute("role","img");$("review-ring").setAttribute("aria-label",count+" of "+saved.length+" saved standards marked reviewed");
 $("review-message").textContent=!saved.length?"Start with what matters to you.":count===saved.length?"Your review list is up to date.":(saved.length-count)+" saved standards left to review.";
 $("review-subtitle").textContent=!saved.length?"Save a standard to begin your own reading list.":"Each reviewed item is one less thing to keep in your head.";
 $("storage-note").textContent=(storageOK?"Saved in this browser.":"Storage unavailable; changes last for this visit.")+" Review marks are personal notes, not a compliance assessment.";
 $("saved-items").innerHTML=saved.length?saved.map(code=>{const s=all.find(x=>x.code===code);return '<div class="saved-row"><button class="open-saved" data-jump="'+esc(code)+'"><span class="digest-code">'+esc(code)+'</span>'+esc(s.title)+'<small>'+esc(s.effective)+'</small></button><div class="saved-controls"><button class="action" data-review="'+esc(code)+'" aria-pressed="'+reviewed.includes(code)+'">'+(reviewed.includes(code)?"Reviewed &#10003;":"Mark reviewed")+'</button><button class="action" data-remove="'+esc(code)+'" aria-label="Remove '+esc(code)+' from review list">Remove</button></div></div>';}).join(""):'<div class="empty-saved"><p>A useful place for the standards you return to. Open any standard and select <strong>Save to review list</strong> to keep it here.</p><button class="action" data-page="library">Find your first standard &rarr;</button></div>';
}
const labels={library:["Standards library","Search by standard, narrow by topic, and follow the evidence."],timeline:["Effective dates","A dated view of changes. Check each standard for its exact requirements."],bridge:["Australian equivalents","Find the connection between international and Australian standards."]};
const motion=()=>matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth";
function setPage(page,scroll=true){
 activePage=page;const home=page==="home";
 dashboard.hidden=!home;document.querySelector(".shell").hidden=home;document.querySelector(".command").hidden=home;
 document.querySelector(".skip-link").href=home?"#dashboard":"#q";
 document.querySelectorAll(".studio-nav [data-page]").forEach(b=>{if(b.dataset.page===page)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current");});
 if(!home){$("tab-"+page).click();$("section-title").textContent=labels[page][0];$("section-description").textContent=labels[page][1];}
 if(scroll)window.scrollTo({top:home?0:document.querySelector(".command").offsetTop,behavior:motion()});
}
document.addEventListener("click",e=>{
 const p=e.target.closest("[data-page]");if(p)setPage(p.dataset.page);
 const stat=e.target.closest("[data-stat]");if(stat){$("reset").click();setPage("library");if(stat.dataset.stat!=="all")document.querySelector('#status-filters [data-key="'+stat.dataset.stat+'"]').click();}
 const year=e.target.closest("[data-year]");if(year){
 let results=$("year-results");
 if(!results){results=document.createElement("div");results.id="year-results";results.setAttribute("aria-live","polite");document.querySelector(".chart-caption").after(results);}
 const records=upcoming.filter(s=>s.effSort.startsWith(year.dataset.year));
 results.innerHTML="<h3>"+esc(year.dataset.year)+" &middot; "+records.length+" dated changes</h3>"+records.map(s=>'<div class="digest-row"><button data-jump="'+esc(s.code)+'"><span class="digest-code">'+esc(s.code)+'</span>'+esc(s.title)+'<small style="display:block">'+esc(s.effective)+'</small></button></div>').join("");
 document.querySelectorAll("[data-year]").forEach(b=>b.setAttribute("aria-pressed",b===year?"true":"false"));
}
 const remove=e.target.closest("[data-remove]");if(remove){saved=saved.filter(c=>c!==remove.dataset.remove);reviewed=reviewed.filter(c=>c!==remove.dataset.remove);persist();notice("Removed from your review list.");}
 const review=e.target.closest("[data-review]");if(review){const code=review.dataset.review;if(reviewed.includes(code))reviewed=reviewed.filter(c=>c!==code);else reviewed.push(code);persist();document.querySelector('[data-review="'+CSS.escape(code)+'"]')?.focus();notice(reviewed.length===saved.length?"A little more clarity. Your review list is complete.":"Review list updated.");}
});
$("go-saved").addEventListener("click",()=>$("saved-section").scrollIntoView({behavior:motion()}));
const drawer=$("drawer");let previousFocus=null;
function drawerTools(){
 const code=decodeURIComponent(location.hash.slice(1));if(!all.some(s=>s.code===code))return;
 let tools=drawer.querySelector(".drawer-tools");if(tools)tools.remove();
 tools=document.createElement("div");tools.className="drawer-tools";
 const button=document.createElement("button");button.className="action";button.textContent=saved.includes(code)?"Saved to your review list":"Save to review list";button.setAttribute("aria-pressed",saved.includes(code));
 button.addEventListener("click",()=>{if(saved.includes(code)){setPage("home",false);$("drawer-close").click();setTimeout(()=>$("saved-section").scrollIntoView({block:"center"}),240);return;}saved.push(code);persist();button.textContent="Saved to your review list";button.setAttribute("aria-pressed","true");notice("Saved. Find it in your overview whenever you need it.");});
 tools.append(button);$("drawer-body").prepend(tools);
}
function modalState(){document.body.style.overflow=drawer.hidden?"":"hidden";for(const el of document.querySelectorAll(".workspace-bar,.studio-nav,.masthead,.dashboard,.command,.shell,.foot"))el.inert=!drawer.hidden;if(drawer.hidden&&previousFocus?.isConnected){previousFocus.focus();previousFocus=null;}else if(!drawer.hidden)drawerTools();}
document.addEventListener("click",e=>{if(e.target.closest("[data-code],[data-jump]")){if(!drawer.contains(e.target))previousFocus=e.target.closest("button,a,[tabindex]")||e.target;setTimeout(drawerTools,0);}},true);
new MutationObserver(modalState).observe(drawer,{attributes:true,attributeFilter:["hidden"]});
drawer.addEventListener("keydown",e=>{if(e.key!=="Tab")return;const items=[...drawer.querySelectorAll('button,a[href],[tabindex="0"]')].filter(x=>x.getClientRects().length),first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}});
document.addEventListener("keydown",e=>{if(e.key==="/"&&activePage==="home"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.preventDefault();setPage("library");$("q").focus();}});
new MutationObserver(()=>{
 document.querySelectorAll("#bridge-body tr[data-code]").forEach(row=>{
 row.tabIndex=0;row.setAttribute("aria-label","Open "+row.dataset.code);
 row.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();row.click();}};
 });
}).observe($("bridge-body"),{childList:true});
renderPersonal();setPage("home",false);modalState();
})();

