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
var bars=e('div','bars'),mast=e('div','mast'),inn=e('div','in');
var bl=e('a','brandlock');bl.href='index.html';
var mk=e('span','mark');if(s.photo){var mi=e('img');mi.src=s.photo.charAt(0)==='/'?s.photo:'../'+s.photo;mi.alt='';mk.appendChild(mi)}else mk.textContent=L==='ar'?'إ ر':'IR';
bl.appendChild(mk);bl.appendChild(e('span','bname',d.name));inn.appendChild(bl);
var links=e('nav','links');
NAV.forEach(function(n){var x=e('a',n[0]===page?'on':'',n[1]);x.href=n[0]+'.html';links.appendChild(x)});
inn.appendChild(links);
var langs=e('div','langs');[['ar','العربية'],['en','English']].forEach(function(g){var x=e('a',g[0]===L?'on':'',g[1]);x.href='../'+g[0]+'/'+page+'.html';langs.appendChild(x)});
inn.appendChild(langs);mast.appendChild(inn);bars.appendChild(mast);app.appendChild(bars);
if(page==='index'){
 var h=e('header'),m=e('div','mono');if(s.photo){var im=e('img');im.src=s.photo.charAt(0)==='/'?s.photo:'../'+s.photo;im.alt=d.name;m.appendChild(im)}else m.textContent=L==='ar'?'إ ر':'IR';
 a(h,[m,e('div','k',d.kicker),e('h1',0,d.name),e('div','role',d.role),e('div','aka',d.aka),e('p','intro',d.intro),e('div','motto',d.motto)]);app.appendChild(h);
 var g=e('div','grid');(d.stats||[]).forEach(function(o){var n=e('div','num');if(o.prefix)n.appendChild(e('small',0,o.prefix));n.appendChild(e('b',0,o.value));n.appendChild(e('span',0,o.label));g.appendChild(n)});app.appendChild(sec(T.stats,g));
 app.appendChild(sec(T.expertise,grid(d.expertise)));
 var ct=d.contact;
 if(ct){
  var cb=function(href,lab,val,dl){var x=e('a','cbtn');x.href=href;x.target='_blank';x.rel='noopener';if(dl)x.setAttribute('download','');x.appendChild(e('span','cl',lab));x.appendChild(e('span','cv',val));return x};
  var cg=e('div','cgrid');
  if(ct.wa_href)cg.appendChild(cb(ct.wa_href,ct.wa_label,ct.wa_value));
  if(ct.tel_href)cg.appendChild(cb(ct.tel_href,ct.tel_label,ct.tel_value));
  if(ct.email_href)cg.appendChild(cb(ct.email_href,ct.email_label,ct.email_value));
  if(ct.fb_href)cg.appendChild(cb(ct.fb_href,ct.fb_label,ct.fb_value));
  if(ct.vcf_href)cg.appendChild(cb(ct.vcf_href,ct.vcf_label,'vCard',1));
  var cw=e('div');if(ct.intro)cw.appendChild(e('p','cintro',ct.intro));cw.appendChild(cg);
  app.appendChild(sec(T.contact,cw));
 }
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
