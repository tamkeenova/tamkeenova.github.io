(function(){
var L=document.documentElement.lang,page=document.body.getAttribute('data-page');
var NAV={ar:[['index','الرئيسية'],['journey','المسيرة'],['programs','البرامج والمشروعات'],['honors','التكريمات والشهادات'],['contact','تواصل معنا']],en:[['index','Home'],['journey','Journey'],['programs','Programs and ventures'],['honors','Honors and credentials'],['contact','Contact us']]}[L];
function e(t,c,x){var n=document.createElement(t);if(c)n.className=c;if(x!=null)n.textContent=x;return n}
function a(n,k){for(var i=0;i<k.length;i++)if(k[i])n.appendChild(k[i]);return n}
function sec(title,body){var s=e('section'),w=e('div','w');w.appendChild(e('h2',0,title));w.appendChild(body);s.appendChild(w);return s}
function card(o,tagCls){var c=e('div','card');if(o.tag)c.appendChild(e('span','tag '+(tagCls||o.status||'pr'),o.tag));c.appendChild(e('h3',0,o.title));if(o.body)c.appendChild(e('p',0,o.body));return c}
function grid(list,cls){var g=e('div','grid');(list||[]).forEach(function(o){g.appendChild(card(o))});return g}
function pct(v,m){return (v/m*100)+'%'}
function buildContact(d){
 var ct=d.contact,cw=e('div');
 var cb=function(href,lab,val,dl){var x=e('a','cbtn');x.href=href;x.target='_blank';x.rel='noopener';if(dl)x.setAttribute('download','');x.appendChild(e('span','cl',lab));x.appendChild(e('span','cv',val));return x};
 var cg=e('div','cgrid');
 if(ct.wa_href)cg.appendChild(cb(ct.wa_href,ct.wa_label,ct.wa_value));
 if(ct.tel_href)cg.appendChild(cb(ct.tel_href,ct.tel_label,ct.tel_value));
 if(ct.email_href)cg.appendChild(cb(ct.email_href,ct.email_label,ct.email_value));
 if(ct.fb_href)cg.appendChild(cb(ct.fb_href,ct.fb_label,ct.fb_value));
 if(ct.vcf_href)cg.appendChild(cb(ct.vcf_href,ct.vcf_label,'vCard',1));
 if(ct.intro)cw.appendChild(e('p','cintro',ct.intro));cw.appendChild(cg);
 return cw;
}
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
}
if(page==='contact'&&d.contact){app.appendChild(sec(T.contact_page||T.contact,buildContact(d)))}
if(page==='journey'){
 var tl=e('div','tl');(d.journey||[]).forEach(function(o){var row=e('div','row');row.appendChild(e('div','d',o.date));var b=e('div');b.appendChild(e('h3',0,o.title));b.appendChild(e('p',0,o.body));row.appendChild(b);tl.appendChild(row)});app.appendChild(sec(T.journey,tl));
 var f=d.field;if(f){var fb=e('div','fbox');fb.appendChild(e('h3',0,f.title));fb.appendChild(e('p',0,f.body));var ch=e('div','chart');ch.setAttribute('dir','ltr');
  [['before'],['after']].forEach(function(k){k=k[0];var lab=e('div','lab');lab.setAttribute('dir',L==='ar'?'rtl':'ltr');lab.appendChild(document.createTextNode(f[k+'_label']+' '));lab.appendChild(e('b',0,f[k+'_range']));ch.appendChild(lab);var bar=e('div','bar'),i=e('i');i.style.left=pct(f[k+'_min'],f.scale_max);i.style.width=pct(f[k+'_max']-f[k+'_min'],f.scale_max);bar.appendChild(i);ch.appendChild(bar)});
  var sc=e('div','scale');for(var q=0;q<=4;q++)sc.appendChild(e('span',0,String(Math.round(f.scale_max*q/4))));ch.appendChild(sc);fb.appendChild(ch);fb.appendChild(e('p','note',f.note));app.appendChild(sec(T.field,fb))}
}
if(page==='programs'){app.appendChild(sec(T.programs,grid(d.programs)));app.appendChild(sec(T.ventures,grid(d.ventures)));app.appendChild(sec(T.digital,grid(d.digital)))}
if(page==='honors'){app.appendChild(sec(T.honors,grid(d.honors,'pr')));
 var cr=e('div'),cc=e('div','cr');(d.credentials||[]).forEach(function(c){var dv=e('div');dv.appendChild(e('b',0,c.group));var ul=e('ul');(c.items||[]).forEach(function(i){ul.appendChild(e('li',0,i))});dv.appendChild(ul);cc.appendChild(dv)});cr.appendChild(cc);(d.credentials_extra||[]).forEach(function(t){cr.appendChild(e('p',0,t))});app.appendChild(sec(T.credentials,cr))}
var ft=e('footer');
var IC={wa:['0 0 448 512','M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'],
tel:['0 0 512 512','M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.1 18.4-30 11.6-46.3l-40-96z'],
email:['0 0 512 512','M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z'],
fb:['0 0 320 512','M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'],
vcf:['0 0 512 512','M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64z'],
lin:['0 0 448 512','M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z']};
if(d.contact||s.linkedin){var ct2=d.contact||{},fc=e('div','ftc');
 var ic=function(href,lab,key,dl){var x=e('a','fic');x.href=href;x.target='_blank';x.rel='noopener';x.setAttribute('aria-label',lab);x.title=lab;if(dl)x.setAttribute('download','');var pp=IC[key];x.innerHTML='<svg viewBox="'+pp[0]+'" width="17" height="17" fill="currentColor" aria-hidden="true"><path d="'+pp[1]+'"/></svg>';fc.appendChild(x);return x};
 if(ct2.wa_href)ic(ct2.wa_href,ct2.wa_label+': '+ct2.wa_value,'wa');
 if(ct2.tel_href)ic(ct2.tel_href,ct2.tel_label+': '+ct2.tel_value,'tel');
 if(ct2.email_href)ic(ct2.email_href,ct2.email_value,'email');
 if(ct2.fb_href)ic(ct2.fb_href,ct2.fb_label,'fb');
 if(ct2.vcf_href)ic(ct2.vcf_href,ct2.vcf_label,'vcf',1);
 if(s.linkedin)ic(s.linkedin,'LinkedIn','lin');
 ft.appendChild(fc)}else ft.textContent=d.footer;
app.appendChild(ft);
document.documentElement.setAttribute('data-ready','1');
}).catch(function(){document.getElementById('app').textContent=L==='ar'?'تعذر تحميل المحتوى.':'Could not load the content.'});
})();
