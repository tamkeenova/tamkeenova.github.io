(function(){
var L=document.documentElement.lang,page=document.body.getAttribute('data-page');
var NAV={ar:[['index','الرئيسية'],['journey','المسيرة'],['programs','البرامج والمشروعات'],['honors','التكريمات والشهادات']],en:[['index','Home'],['journey','Journey'],['programs','Programs and ventures'],['honors','Honors and credentials']]}[L];
function e(t,c,x){var n=document.createElement(t);if(c)n.className=c;if(x!=null)n.textContent=x;return n}
function a(n,k){for(var i=0;i<k.length;i++)if(k[i])n.appendChild(k[i]);return n}
function sec(title,body){var s=e('section'),w=e('div','w');w.appendChild(e('h2',0,title));w.appendChild(body);s.appendChild(w);return s}
function card(o,tagCls){var c=e('div','card');if(o.tag)c.appendChild(e('span','tag '+(tagCls||o.status||'pr'),o.tag));c.appendChild(e('h3',0,o.title));if(o.body)c.appendChild(e('p',0,o.body));return c}
function grid(list,cls){var g=e('div','grid');(list||[]).forEach(function(o){g.appendChild(card(o))});return g}
function pct(v,m){return (v/m*100)+'%'}
Promise.all([fetch('../data/'+L+'.json').then(function(r){return r.json()}),fetch('../data/site.json').then(function(r){return r.json()})]).then(function(r){
var d=r[0],s=r[1],app=document.getElementById('app'),T=d.titles||{};
document.title=d.name;
var bars=e('div','bars');
var top=e('div','topbar'),tin=e('div','in');tin.appendChild(e('span','brand',d.name));
var langs=e('div','langs');[['ar','العربية'],['en','English']].forEach(function(g){var x=e('a',g[0]===L?'on':'',g[1]);x.href='../'+g[0]+'/'+page+'.html';langs.appendChild(x)});
tin.appendChild(langs);top.appendChild(tin);bars.appendChild(top);
var nav=e('nav','nav'),inn=e('div','in');
NAV.forEach(function(n){var x=e('a',n[0]===page?'on':'',n[1]);x.href=n[0]+'.html';inn.appendChild(x)});
nav.appendChild(inn);bars.appendChild(nav);app.appendChild(bars);
if(page==='index'){
 var h=e('header'),m=e('div','mono');if(s.photo){var im=e('img');im.src=s.photo.charAt(0)==='/'?s.photo:'../'+s.photo;im.alt=d.name;m.appendChild(im)}else m.textContent=L==='ar'?'إ ر':'IR';
 a(h,[m,e('div','k',d.kicker),e('h1',0,d.name),e('div','role',d.role),e('div','aka',d.aka),e('p','intro',d.intro),e('div','motto',d.motto)]);app.appendChild(h);
 var g=e('div','grid');(d.stats||[]).forEach(function(o){var n=e('div','num');if(o.prefix)n.appendChild(e('small',0,o.prefix));n.appendChild(e('b',0,o.value));n.appendChild(e('span',0,o.label));g.appendChild(n)});app.appendChild(sec(T.stats,g));
 app.appendChild(sec(T.expertise,grid(d.expertise)));
}
if(page==='journey'){
 var tl=e('div','tl');(d.journey||[]).forEach(function(o){var row=e('div','row');row.appendChild(e('div','d',o.date));var b=e('div');b.appendChild(e('h3',0,o.title));b.appendChild(e('p',0,o.body));row.appendChild(b);tl.appendChild(row)});app.appendChild(sec(T.journey,tl));
 var f=d.field;if(f){var fb=e('div','fbox');fb.appendChild(e('h3',0,f.title));fb.appendChild(e('p',0,f.body));var ch=e('div','chart');ch.setAttribute('dir','ltr');
  [['before'],['after']].forEach(function(k){k=k[0];var lab=e('div','lab');lab.setAttribute('dir',L==='ar'?'rtl':'ltr');lab.appendChild(document.createTextNode(f[k+'_label']+' '));lab.appendChild(e('b',0,f[k+'_range']));ch.appendChild(lab);var bar=e('div','bar'),i=e('i');i.style.left=pct(f[k+'_min'],f.scale_max);i.style.width=pct(f[k+'_max']-f[k+'_min'],f.scale_max);bar.appendChild(i);ch.appendChild(bar)});
  var sc=e('div','scale');for(var q=0;q<=4;q++)sc.appendChild(e('span',0,String(Math.round(f.scale_max*q/4))));ch.appendChild(sc);fb.appendChild(ch);fb.appendChild(e('p','note',f.note));app.appendChild(sec(T.field,fb))}
}
if(page==='programs'){app.appendChild(sec(T.programs,grid(d.programs)));app.appendChild(sec(T.ventures,grid(d.ventures)));app.appendChild(sec(T.digital,grid(d.digital)))}
if(page==='honors'){app.appendChild(sec(T.honors,grid(d.honors,'pr')));
 var cr=e('div'),cc=e('div','cr');(d.credentials||[]).forEach(function(c){var dv=e('div');dv.appendChild(e('b',0,c.group));var ul=e('ul');(c.items||[]).forEach(function(i){ul.appendChild(e('li',0,i))});dv.appendChild(ul);cc.appendChild(dv)});cr.appendChild(cc);(d.credentials_extra||[]).forEach(function(t){cr.appendChild(e('p',0,t))});app.appendChild(sec(T.credentials,cr))}
var ft=e('footer');if(s.linkedin){var x=e('a',0,s.linkedin.replace(/^https?:\/\/(www\.)?/,''));x.href=s.linkedin;x.rel='noopener';ft.appendChild(document.createTextNode('LinkedIn: '));ft.appendChild(x)}else ft.textContent=d.footer;app.appendChild(ft);
document.documentElement.setAttribute('data-ready','1');
}).catch(function(){document.getElementById('app').textContent=L==='ar'?'تعذر تحميل المحتوى.':'Could not load the content.'});
})();
