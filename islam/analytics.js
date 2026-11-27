(function(){
'use strict';
if(/\/admin(\/|$)/.test(location.pathname))return;
var CF_TOKEN='aa25798e62644dc799e224e6b0f47b38';
var CLARITY_ID='zkc12s29gn';
var KEY='ir_analytics_choice';
var L=(document.documentElement.lang||'ar').slice(0,2)==='en'?'en':'ar';
var TXT={
ar:{
 banner:'نستخدم أداتين لفهم كيف يُستخدم الموقع وتحسينه. إحصاءات الزيارات (Cloudflare) لا تستخدم ملفات تعريف ارتباط. أداة Clarity من Microsoft تسجّل كيف يتحرك الزائر في الصفحات وتستخدم ملفات تعريف ارتباط، ولا تعمل إلا إذا وافقت.',
 accept:'أوافق', decline:'لا، شكرًا', more:'التفاصيل',
 title:'الخصوصية وملفات تعريف الارتباط',
 close:'إغلاق', link:'الخصوصية', choices:'خيارات التتبع',
 body:[
  'هذا الموقع الشخصي يقيس الزيارات لفهم الصفحات المفيدة وتحسينها. لا يعرض الموقع إعلانات ولم نربط هاتين الأداتين بأي حساب إعلانات.',
  'إحصاءات Cloudflare Web Analytics: تقيس عدد مرات عرض الصفحات والزيارات والدولة ونوع الجهاز والمتصفح ومصدر الزيارة. بحسب Cloudflare لا تستخدم ملفات تعريف ارتباط ولا تخزينًا محليًا ولا بصمة للجهاز ولا تتبع أفرادًا. تعمل على الصفحات العامة فقط.',
  'Microsoft Clarity: أداة تُظهر خرائط حرارية وتسجيلات لحركة الزائر داخل الصفحة. تستخدم ملفات تعريف ارتباط. لا تعمل إلا بعد موافقتك، وإذا رفضت أو لم تختر فلا تُحمَّل أصلًا. نفعّل إخفاء المحتوى الحساس، ولا يوجد في الموقع حقول إدخال للزوار. بحسب Microsoft لا تبيع Clarity البيانات، وتُحفظ التسجيلات 30 يومًا، والتسجيلات المفضّلة وعيّنة عشوائية منها حتى 9 أشهر. تعالج Microsoft البيانات وفق سياستها.',
  'يمكنك تغيير اختيارك في أي وقت من رابط "خيارات التتبع" أسفل الصفحة؛ إذا سحبت موافقتك نحذف ملفات Clarity ونعيد تحميل الصفحة. نحفظ اختيارك في متصفحك فقط.'
 ]},
en:{
 banner:'We use two tools to understand how the site is used and to improve it. Cloudflare page statistics use no cookies. Microsoft Clarity records how visitors move through pages and uses cookies, and it runs only if you accept.',
 accept:'Accept', decline:'No, thanks', more:'Details',
 title:'Privacy and cookies',
 close:'Close', link:'Privacy', choices:'Tracking choices',
 body:[
  'This personal site measures visits to learn which pages are useful and to improve them. The site shows no ads and these two tools are not connected to any advertising account.',
  'Cloudflare Web Analytics counts page views and visits, plus country, device type, browser and referrer. According to Cloudflare it uses no cookies, no local storage, no device fingerprinting and does not track individuals. It runs on public pages only.',
  'Microsoft Clarity shows heatmaps and recordings of how visitors move within a page. It uses cookies. It runs only after you accept; if you decline or do not choose, it is never loaded. Sensitive content masking is on, and the site has no visitor input fields. According to Microsoft, Clarity does not sell data, recordings are kept for 30 days, and favorited recordings plus a random sample are kept up to 9 months. Microsoft processes the data under its own privacy statement.',
  'You can change your choice at any time with the "Tracking choices" link in the footer; if you withdraw consent we delete the Clarity cookies and reload the page. Your choice is stored in your browser only.'
 ]}
}[L];
function get(){try{return localStorage.getItem(KEY)}catch(x){return null}}
function set(v){try{localStorage.setItem(KEY,v)}catch(x){}}
function cf(){if(document.querySelector('script[data-cf-beacon]'))return;var s=document.createElement('script');s.type='module';s.defer=true;s.src='https://static.cloudflareinsights.com/beacon.min.js';s.setAttribute('data-cf-beacon','{"token": "'+CF_TOKEN+'"}');document.body.appendChild(s)}
function clarity(){
 if(!CLARITY_ID||window.__irClarity)return;window.__irClarity=1;
 (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,'clarity','script',CLARITY_ID);
 window.clarity('consentv2',{ad_Storage:'denied',analytics_Storage:'granted'});
}
function wipe(){var host=location.hostname,parts=host.split('.'),doms=[host,'.'+host];for(var i=1;i<parts.length-1;i++)doms.push('.'+parts.slice(i).join('.'));document.cookie.split(';').forEach(function(c){var n=c.split('=')[0].trim();if(/^_cl(ck|sk)$|^CLID$|^MR$|^SM$|^ANONCHK$|^MUID$/.test(n)){doms.forEach(function(d){document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain='+d});document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'}});try{Object.keys(localStorage).forEach(function(k){if(/^_cl/.test(k))localStorage.removeItem(k)});Object.keys(sessionStorage).forEach(function(k){if(/^_cl/.test(k))sessionStorage.removeItem(k)})}catch(x){}}
function stopClarity(){if(window.__irClarity){if(window.clarity)window.clarity('consentv2',{ad_Storage:'denied',analytics_Storage:'denied'});wipe();location.reload()}}
function el(t,c,x){var n=document.createElement(t);if(c)n.className=c;if(x)n.textContent=x;return n}
var css=document.createElement('style');
css.textContent='.ira-b{position:fixed;inset-inline:12px;bottom:12px;z-index:9999;max-width:720px;margin-inline:auto;background:#f4f1e8;color:#0f4c5c;border:1px solid #d9822b;border-radius:14px;box-shadow:0 8px 30px rgba(15,76,92,.25);padding:16px 18px;font:15px/1.7 inherit;font-family:inherit}.ira-b p{margin:0 0 12px}.ira-r{display:flex;gap:8px;flex-wrap:wrap}.ira-r button,.ira-r a{font:inherit;font-weight:600;border-radius:10px;padding:8px 16px;cursor:pointer;border:1px solid #0f4c5c;background:transparent;color:#0f4c5c;text-decoration:none}.ira-r .p{background:#0f4c5c;color:#f4f1e8}.ira-r .a{border-color:#d9822b;color:#a85a12}.ira-m{position:fixed;inset:0;z-index:10000;background:rgba(15,76,92,.55);display:flex;align-items:center;justify-content:center;padding:16px}.ira-d{background:#f4f1e8;color:#2c3e43;max-width:640px;max-height:85vh;overflow:auto;border-radius:16px;padding:22px;border-top:5px solid #d9822b;line-height:1.8}.ira-d h2{margin:0 0 10px;color:#0f4c5c}.ira-d p{margin:0 0 10px}.ira-f{margin-top:8px;font-size:14px}.ira-f a{color:inherit;margin-inline:8px;text-decoration:underline;cursor:pointer}';
document.head.appendChild(css);
var bn=null;
function hideBanner(){if(bn){bn.remove();bn=null}}
function choose(v){set(v);hideBanner();if(v==='granted')clarity();else stopClarity()}
function banner(){hideBanner();bn=el('div','ira-b');bn.setAttribute('role','dialog');bn.setAttribute('aria-label',TXT.title);bn.setAttribute('dir',L==='ar'?'rtl':'ltr');
 bn.appendChild(el('p',0,TXT.banner));var r=el('div','ira-r');
 var ac=el('button','p',TXT.accept),de=el('button','',TXT.decline),mo=el('button','a',TXT.more);
 ac.onclick=function(){choose('granted')};de.onclick=function(){choose('denied')};mo.onclick=modal;
 [ac,de,mo].forEach(function(x){r.appendChild(x)});bn.appendChild(r);document.body.appendChild(bn)}
function modal(){var m=el('div','ira-m');m.setAttribute('dir',L==='ar'?'rtl':'ltr');var d=el('div','ira-d');d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-label',TXT.title);d.appendChild(el('h2',0,TXT.title));
 TXT.body.forEach(function(t){d.appendChild(el('p',0,t))});var lk=el('p','ira-l');[['Cloudflare Web Analytics','https://www.cloudflare.com/web-analytics/'],['Microsoft Clarity FAQ','https://learn.microsoft.com/en-us/clarity/faq'],['Microsoft Privacy Statement','https://privacy.microsoft.com/privacystatement']].forEach(function(u){var a=el('a',0,u[0]);a.href=u[1];a.target='_blank';a.rel='noopener noreferrer';a.style.marginInlineEnd='14px';lk.appendChild(a)});d.appendChild(lk);var r=el('div','ira-r');var c=el('button','p',TXT.close);c.onclick=function(){m.remove()};r.appendChild(c);d.appendChild(r);m.appendChild(d);var prev=document.activeElement;function done(){m.remove();document.removeEventListener('keydown',kd);if(prev&&prev.focus)prev.focus()}c.onclick=done;function kd(ev){if(ev.key==='Escape')done();if(ev.key==='Tab'){var f=d.querySelectorAll('a,button');var first=f[0],last=f[f.length-1];if(ev.shiftKey&&document.activeElement===first){ev.preventDefault();last.focus()}else if(!ev.shiftKey&&document.activeElement===last){ev.preventDefault();first.focus()}}}document.addEventListener('keydown',kd);m.onclick=function(ev){if(ev.target===m)done()};d.tabIndex=-1;document.body.appendChild(m);d.focus({preventScroll:true})}
function foot(){var f=document.querySelector('footer');if(!f)return;var w=el('div','ira-f');var a=el('a',0,TXT.link);a.onclick=modal;w.appendChild(a);
 if(CLARITY_ID){var b=el('a',0,TXT.choices);b.onclick=banner;w.appendChild(b)}f.appendChild(w)}
function init(){cf();foot();var v=get();if(v==='granted')clarity();else if(!v&&CLARITY_ID)banner()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
