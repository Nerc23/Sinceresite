/* Sincere & Co. — React 18 (loaded from CDN in index.html), no build step needed */
const {useState}=React,h=React.createElement;
// Paths of the site-wide images (product, collection and header image paths are in the Data section below)
const IMAGES={logo:'img/logo.svg',hero:'img/hero.svg',story:'img/story.svg'};
/* ---- Edit these: WhatsApp number (digits only, with country code) and social page links ---- */
const WA='15551234567';
const SOC={ig:['https://www.instagram.com/sincereandco','Instagram','M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5h.01'],fb:['https://www.facebook.com/sincereandco','Facebook','M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z'],tt:['https://www.tiktok.com/@sincereandco','TikTok','M16 3v10.5a4.5 4.5 0 1 1-4.5-4.5M16 3c.3 2.5 2 4 4.5 4.2'],pi:['https://www.pinterest.com/sincereandco','Pinterest','M12 3a9 9 0 1 0 0 18 9 9 0 1 0 0-18zM10.5 20l2-9M9 11c0-2 1.2-3 2.8-3s2.5 1 2.5 2.5c0 1.7-1 2.8-2.3 2.8-.9 0-1.4-.7-1.4-1.3']};
const $=n=>'$'+n.toFixed(2);
const P={ig:'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5h.01',fb:'M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z',tt:'M16 3v10.5a4.5 4.5 0 1 1-4.5-4.5M16 3c.3 2.5 2 4 4.5 4.2',pi:'M12 3a9 9 0 1 0 0 18 9 9 0 1 0 0-18zM10.5 20l2-9M9 11c0-2 1.2-3 2.8-3s2.500 1 2.500 2.500c0 1.700-1 2.800-2.300 2.800-.9 0-1.400-.7-1.400-1.300',
bag:'M6 8h12l1 12H5L6 8zM9 8a3 3 0 0 1 6 0',arrow:'M5 12h14M13 6l6 6-6 6',sparkle:'M12 3l1.800 5.200L19 10l-5.200 1.800L12 17l-1.800-5.200L5 10l5.200-1.800L12 3zM19 16l.8 2.200 2.200.8-2.200.8L19 22l-.8-2.200-2.200-.8 2.200-.8L19 16z',leaf:'M5 19c0-9 5-14 14-14 0 9-5 14-14 14zM5 19l8-8',gift:'M4 10h16v10H4zM3 7h18v3H3zM12 7v13M12 7C9 7 8 3.500 10.500 3.500 12 3.500 12 7 12 7zM12 7c3 0 4-3.500 1.500-3.500C12 3.500 12 7 12 7z',chat:'M21 12a8 8 0 0 1-11.800 7L4 20l1.200-4.600A8 8 0 1 1 21 12z',pin:'M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',mail:'M3 6h18v12H3zM3 7l9 7 9-7',phone:'M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z',clock:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',chev:'M6 9l6 6 6-6',x:'M6 6l12 12M18 6L6 18',trash:'M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3',minus:'M5 12h14',plus:'M12 5v14M5 12h14',menu:'M4 7h16M4 12h16M4 17h16',send:'M21 3L3 10l7 3 3 7 8-17zM10 13l11-10',timer:'M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 9v4l2 2M9 2h6M12 2v3',heart:'M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z'};
const Ic=({n,s=18})=>h('svg',{viewBox:'0 0 24 24',width:s,height:s,fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':true},h('path',{d:P[n]}));
const Logo=()=>h('img',{src:IMAGES.logo,alt:'',width:40,height:28});
/* ---- Data ---- */
const CATS=[
{id:'soaps',n:'Handmade Soaps',t:'Cold-pressed and cured for four weeks',
 d:'Our signature cold-pressed soaps are made in small batches with plant oils and butters, then cured for four weeks for a long-lasting, gentle lather.',
 header:'img/headers/soaps.svg',
 card:'img/collections/soaps.svg'},
{id:'candles',n:'Scented Candles',t:'Hand-poured soy wax, clean burn',
 d:'Hand-poured soy candles with cotton and wooden wicks, blended with premium fragrance oils for a clean, even burn all the way down.',
 header:'img/headers/candles.svg',
 card:'img/collections/candles.svg'},
{id:'diffusers',n:'Diffusers',t:'Fragrance that lingers for months',
 d:'Reed and car diffusers that fill any space with gentle, lasting fragrance — no flame required.',
 header:'img/headers/diffusers.svg',
 card:'img/collections/diffusers.svg'},
{id:'butters',n:'Body Butters',t:'Whipped, rich and fast-absorbing',
 d:'Whipped body butters made with unrefined shea, cocoa and mango butters for deep hydration without the grease.',
 header:'img/headers/butters.svg',
 card:'img/collections/butters.svg'},
{id:'bombs',n:'Bath Bombs',t:'A spa night in your own tub',
 d:'Fizzing, colorful and made with skin-loving oils — turn any bath into a spa night.',
 header:'img/headers/bombs.svg',
 card:'img/collections/bombs.svg'},
{id:'gels',n:'Shower Gels',t:'Gentle lather, honest ingredients',
 d:'Gentle, naturally derived shower gels with real botanical extracts and scents that linger softly on the skin.',
 header:'img/headers/gels.svg',
 card:'img/collections/gels.svg'},
];
const PR=[
{c:'soaps',n:'Lavender & Oat Soap',p:8.5,best:1,img:'img/products/lavender-oat-soap.svg',
 d:'Gentle exfoliating bar with calming lavender and soothing colloidal oatmeal.',m:'4.5 oz · Vegan'},
{c:'soaps',n:'Honey & Oatmeal Soap',p:8.5,best:0,img:'img/products/honey-oatmeal-soap.svg',
 d:'Warm honey and creamy oatmeal in a nourishing, moisture-rich bar.',m:'4.5 oz'},
{c:'soaps',n:'Charcoal Cleansing Bar',p:9,best:0,img:'img/products/charcoal-cleansing-bar.svg',
 d:'Deep-cleansing activated charcoal bar for balanced skin.',m:'4 oz · Vegan'},
{c:'candles',n:'Vanilla Chai Candle',p:22,best:1,img:'img/products/vanilla-chai-candle.svg',
 d:'Cozy vanilla bean spiced with cinnamon and cardamom in an amber jar.',m:'Amber jar · 40 hr burn'},
{c:'candles',n:'Cedar & Sage Candle',p:24,best:0,img:'img/products/cedar-sage-candle.svg',
 d:'Woodsy cedarwood softened with fresh garden sage.',m:'Amber jar · 45 hr burn'},
{c:'candles',n:'Lemongrass Linen Candle',p:20,best:0,img:'img/products/lemongrass-linen-candle.svg',
 d:'Bright lemongrass over clean linen and a touch of white musk.',m:'Cream tin · 35 hr burn'},
{c:'diffusers',n:'Citrus Grove Reed Diffuser',p:26,best:1,img:'img/products/citrus-grove-reed-diffuser.svg',
 d:'Sun-ripened orange and lime with a hint of green leaves.',m:'6 oz · Lasts 3–4 months'},
{c:'diffusers',n:'Lavender Fields Diffuser',p:26,best:0,img:'img/products/lavender-fields-diffuser.svg',
 d:'Soft lavender and chamomile for slow, quiet evenings.',m:'6 oz · Lasts 3–4 months'},
{c:'diffusers',n:'Eucalyptus Mint Diffuser',p:24,best:0,img:'img/products/eucalyptus-mint-diffuser.svg',
 d:'Cool eucalyptus and spearmint to clear the air.',m:'4 oz · Lasts 2–3 months'},
{c:'butters',n:'Whipped Shea Body Butter',p:16,best:1,img:'img/products/whipped-shea-body-butter.svg',
 d:'Fluffy unrefined shea butter whipped light for deep, non-greasy moisture.',m:'8 oz jar'},
{c:'butters',n:'Cocoa Vanilla Body Butter',p:16,best:0,img:'img/products/cocoa-vanilla-body-butter.svg',
 d:'Rich cocoa butter with warm vanilla for lasting softness.',m:'8 oz jar'},
{c:'butters',n:'Coconut Mango Body Butter',p:15,best:0,img:'img/products/coconut-mango-body-butter.svg',
 d:'Tropical, silky and fast-absorbing for an everyday glow.',m:'6 oz jar'},
{c:'bombs',n:'Rose Petal Bath Bomb',p:6.5,best:1,img:'img/products/rose-petal-bath-bomb.svg',
 d:'A blush fizz of rose oil and real dried petals.',m:'5 oz · Single'},
{c:'bombs',n:'Eucalyptus Fizz Bath Bomb',p:6.5,best:0,img:'img/products/eucalyptus-fizz-bath-bomb.svg',
 d:'Cooling eucalyptus and sea salt to melt the day away.',m:'5 oz · Single'},
{c:'bombs',n:'Lavender Dream Bath Bomb',p:6.5,best:0,img:'img/products/lavender-dream-bath-bomb.svg',
 d:'Calming lavender and chamomile for a sleepy soak.',m:'5 oz · Single'},
{c:'gels',n:'Citrus Burst Shower Gel',p:14,best:1,img:'img/products/citrus-burst-shower-gel.svg',
 d:'An energizing wake-up wash of orange, lime and lemongrass.',m:'250 ml'},
{c:'gels',n:'Lavender Calm Shower Gel',p:14,best:0,img:'img/products/lavender-calm-shower-gel.svg',
 d:'A gentle lather with soothing lavender and oat.',m:'250 ml'},
{c:'gels',n:'Mint Eucalyptus Shower Gel',p:14,best:0,img:'img/products/mint-eucalyptus-shower-gel.svg',
 d:'A cool, clean rinse of peppermint and eucalyptus.',m:'250 ml'},
].map((p,i)=>({id:i,...p}));
const FEAT=[['sparkle','Handmade in small batches','Every bar, jar and candle is poured, pressed and packed by hand.'],['leaf','Natural ingredients','Plant oils, butters and real botanicals — no harsh shortcuts.'],['gift','Wrapped with care','Gift-ready packaging on every order, at no extra cost.']];
const STEPS=[['sparkle','Browse & choose','Explore our six handmade collections and pick your favorites.'],['bag','Build your order','Add items and quantities to your order list — prices update as you go.'],['chat','Confirm in WhatsApp','Send your order to us on WhatsApp and we will confirm delivery and payment.']];
const VAL=[['leaf','Honest ingredients','Cold-pressed plant oils, unrefined butters and real botanicals. If it goes on your skin, we can tell you exactly where it came from.'],['timer','Slow by design','Our soaps cure for four weeks and our candles cure for two. Good things take time, and we refuse to rush them.'],['heart','Made by hand, always','Every batch is mixed, poured, cut and wrapped by hand in our little studio — no two bars are ever exactly alike.']];
const ADDR='12 Lavender Lane, Studio 3, Portland, OR 97205',MAIL='hello@sincereandco.com',TEL='+1 (555) 123-4567';
const HRS=[['Monday – Friday','9:00 AM – 6:00 PM'],['Saturday','10:00 AM – 4:00 PM'],['Sunday','Closed']];
/* ---- Components ---- */
const Soc=()=>h('div',{className:'soc'},Object.entries(SOC).map(([key,[url,label,d]])=>h('a',{key,href:url,target:'_blank',rel:'noopener noreferrer','aria-label':label,title:label,'data-net':key},h('svg',{viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':true},h('path',{d})))));
function Card({p,add}){const[q,setQ]=useState(1),[ok,setOk]=useState(false);
return h('article',{className:'card'},p.best?h('span',{className:'tag'},'Best seller'):null,h('img',{src:p.img,alt:p.n,loading:'lazy'}),
h('div',{className:'cb'},h('div',{className:'row'},h('h3',null,p.n),h('span',{className:'price'},$(p.p))),h('p',null,p.d),h('small',null,p.m),
h('div',{className:'row act'},h('div',{className:'qty'},h('button',{'aria-label':'Decrease quantity',onClick:()=>setQ(Math.max(1,q-1))},h(Ic,{n:'minus',s:14})),h('span',null,q),h('button',{'aria-label':'Increase quantity',onClick:()=>setQ(q+1)},h(Ic,{n:'plus',s:14}))),
h('button',{className:'btn',onClick:()=>{add(p.id,q);setOk(true);setTimeout(()=>setOk(false),1300)}},ok?'Added ✓':'Add to order'))))}
const Steps=()=>h('section',{className:'wrap sec'},h('div',{className:'stp'},h('div',{style:{gridColumn:'1/-1'}},h('h2',null,'Ordering is easy'),h('p',{style:{margin:'8px 0 12px'}},'No account needed — your order goes straight to our WhatsApp.')),STEPS.map((s,i)=>h('div',{key:i},h('div',{className:'ci'},h(Ic,{n:s[0],s:20})),h('small',null,'Step '+(i+1)),h('h3',null,s[1]),h('p',null,s[2])))));
function Sub(){const[em,setEm]=useState(''),[ok,setOk]=useState(false);
return h('section',{className:'sub'},h('div',{className:'wrap'},h('span',{className:'eyebrow'},'Exclusive deals & first dibs'),h('h2',null,'Join the Sincere circle'),h('p',null,'Subscribe for new arrivals, seasonal collections and subscriber-only deals — no spam, ever.'),
ok?h('p',{style:{fontWeight:700,opacity:1}},'Thank you — you’re on the list ✓'):h('form',{onSubmit:e=>{e.preventDefault();try{localStorage.setItem('sc-sub',em)}catch(_){}setOk(true)}},h('input',{type:'email',required:true,placeholder:'Your email address',value:em,onChange:e=>setEm(e.target.value),'aria-label':'Email address'}),h('button',{className:'btn ac'},'Subscribe'))))}
function Contact(){const[f,setF]=useState({name:'',email:'',phone:'',subject:'',msg:''}),[ok,setOk]=useState(false);
const u=k=>e=>setF({...f,[k]:e.target.value});
const url=`mailto:${MAIL}?subject=`+encodeURIComponent(f.subject)+'&body='+encodeURIComponent(`${f.msg}\n\n— ${f.name}\nEmail: ${f.email}`+(f.phone?`\nPhone: ${f.phone}`:''));
const info=[['pin','Visit the studio',ADDR],['phone','Call or WhatsApp',TEL],['mail','Email us',MAIL]];
const star=h('span',{style:{color:'var(--acc)'}},' *');
const fld=(l,k,ph,t,req)=>h('label',null,h('span',null,l,req&&star),h('input',{type:t||'text',required:!!req,placeholder:ph,value:f[k],onChange:u(k)}));
return h('main',null,
h('section',{className:'bnr'},h('span',{className:'eyebrow'},'Contact'),h('h1',null,'We’d love to hear from you'),h('p',null,'Questions about an order, a custom gift, or a wholesale order? Send us a message and we’ll reply within one business day.')),
h('div',{className:'wrap cg'},
h('div',{className:'ic'},info.map(r=>h('div',{className:'ibx',key:r[1]},h('div',{className:'ci2'},h(Ic,{n:r[0]})),h('div',null,h('h3',null,r[1]),h('p',null,r[2])))),
h('div',{className:'ibx'},h('div',{className:'ci2'},h(Ic,{n:'clock'})),h('div',null,h('h3',null,'Operating hours'),HRS.map(r=>h('p',{key:r[0]},h('b',null,r[0]+': '),r[1]))))),
h('form',{className:'fc',onSubmit:e=>{e.preventDefault();const a=document.createElement('a');a.href=url;a.click();setOk(true)}},
h('h2',{style:{fontSize:26}},'Send a message'),h('p',{className:'mt'},'Fill in the form below and your email app will open with everything pre-filled — just press send.'),
ok&&h('div',{className:'okm'},'Your email app should now be open with the message ready. ',h('a',{href:url,style:{color:'var(--acc)',textDecoration:'underline'}},'Open it again'),' if not.'),
h('div',{className:'r2'},fld('Name','name','Your full name','text',1),fld('Email','email','you@example.com','email',1)),
h('div',{className:'r2'},fld('Phone (optional)','phone','+1 (555) 000-0000','tel'),fld('Subject','subject','Order question, custom gift...','text',1)),
h('label',null,h('span',null,'Message',star),h('textarea',{required:true,rows:5,placeholder:'How can we help?',value:f.msg,onChange:u('msg')})),
h('button',{className:'btn',style:{justifySelf:'start'}},h(Ic,{n:'send',s:16}),'Send message'))))}
function Drawer({cart,set,close,go}){const[nm,setNm]=useState(''),[nt,setNt]=useState('');
const it=Object.entries(cart).map(([id,q])=>({...PR[id],q})),sub=it.reduce((s,i)=>s+i.p*i.q,0);
const msg=`Hello Sincere & Co.! I’d like to place an order:\n\n`+it.map(i=>`• ${i.q} × ${i.n} — ${$(i.p*i.q)}`).join('\n')+`\n\nSubtotal: ${$(sub)}`+(nm?`\nName: ${nm}`:'')+(nt?`\nNotes: ${nt}`:'');
return h('div',null,h('div',{className:'ov',onClick:close}),h('aside',{className:'dr',role:'dialog','aria-label':'Your order'},h('button',{className:'x',onClick:close,'aria-label':'Close'},h(Ic,{n:'x'})),h('h2',{style:{fontSize:24}},'Your order'),h('p',null,'Review your items, then send the order to us on WhatsApp to confirm.'),
it.length?h('div',null,it.map(i=>h('div',{className:'it',key:i.id},h('div',{className:'th'},h('img',{src:i.img,alt:i.n})),h('div',{style:{flex:1}},h('div',{style:{fontWeight:700,fontSize:15}},i.n),h('small',null,$(i.p)+' each'),h('div',{className:'qty'},h('button',{'aria-label':'Decrease',onClick:()=>set(i.id,i.q-1)},h(Ic,{n:'minus',s:14})),h('span',null,i.q),h('button',{'aria-label':'Increase',onClick:()=>set(i.id,i.q+1)},h(Ic,{n:'plus',s:14})))),h('div',{style:{textAlign:'right'}},h('button',{className:'lk','aria-label':'Remove',style:{textDecoration:'none'},onClick:()=>set(i.id,0)},h(Ic,{n:'trash',s:16})),h('div',{className:'price',style:{fontSize:17}},$(i.p*i.q)))))):
h('div',{className:'em'},h('div',{className:'ci'},h(Ic,{n:'bag',s:24})),h('h3',null,'Your order is empty'),h('p',{style:{color:'var(--mut)'}},'Browse our collections and add something you love.'),h('button',{className:'btn',onClick:()=>go('soaps')},'Browse products')),
it.length>0&&h('div',{style:{display:'grid',gap:12,marginTop:'auto'}},h('div',{className:'sb'},h('span',null,'Subtotal'),h('b',null,$(sub))),h('input',{placeholder:'Your name (optional)',value:nm,onChange:e=>setNm(e.target.value)}),h('textarea',{rows:3,placeholder:'Notes — delivery questions, gift wrapping, etc. (optional)',value:nt,onChange:e=>setNt(e.target.value)}),
h('a',{className:'btn wa',href:`https://wa.me/${WA}?text=`+encodeURIComponent(msg),target:'_blank',rel:'noopener noreferrer'},'Send order via WhatsApp'),h('button',{className:'lk',onClick:()=>it.forEach(i=>set(i.id,0))},'Clear order'))))}
function App(){
const ids=['home','story','contact',...CATS.map(c=>c.id)];
const[pg,setPg]=useState(()=>{const x=(location.hash||'').slice(1);return ids.includes(x)?x:'home'});
const[cart,setCart]=useState({}),[dr,setDr]=useState(false),[mo,setMo]=useState(false),[dd,setDd]=useState(false);
const go=p=>{setPg(p);setMo(false);setDd(false);setDr(false);window.scrollTo(0,0)};
const add=(id,q)=>setCart(c=>({...c,[id]:(c[id]||0)+q}));
const set=(id,q)=>setCart(c=>{const n={...c};if(q<1)delete n[id];else n[id]=q;return n});
const n=Object.values(cart).reduce((a,b)=>a+b,0),tot=Object.entries(cart).reduce((s,[i,q])=>s+PR[i].p*q,0);
const cat=CATS.find(c=>c.id===pg);
const A=(p,t,cls)=>h('a',{key:p,href:'#'+p,className:cls,onClick:e=>{e.preventDefault();go(p)}},t);
const Brand=()=>h('a',{href:'#home',className:'logo',onClick:e=>{e.preventDefault();go('home')}},h(Logo),h('span',null,'Sincere ',h('b',null,'&'),' Co.'));
const grid=l=>h('div',{className:'g3'},l.map(p=>h(Card,{key:p.id,p,add})));
let body;
if(cat){const items=PR.filter(p=>p.c===cat.id);body=h('main',null,
h('section',{className:'hdr'},h('img',{src:cat.header,alt:''}),h('div',{className:'sh'},h('div',{className:'wrap'},h('span',{className:'eyebrow'},'Collection'),h('h1',{style:{fontSize:'clamp(34px,5vw,52px)'}},cat.n),h('i',null,cat.t)))),
h('p',{className:'wrap intro'},cat.d),h('div',{className:'wrap pad'},grid(items)),
h('section',{className:'alt sec',style:{padding:'48px 0'}},h('div',{className:'wrap'},h('h2',{style:{fontSize:26}},'Explore other collections'),h('div',{className:'chips'},CATS.filter(c=>c.id!==cat.id).map(c=>A(c.id,[c.n,' ',h(Ic,{key:1,n:'arrow',s:14})],'')))) ),h(Steps))}
else if(pg==='story'){body=h('main',null,
h('section',{className:'bnr'},h('span',{className:'eyebrow'},'Our story'),h('h1',null,'A small studio with a sincere heart'),h('p',null,'Brought to you by Sincere & Co. — makers of small-batch bath and body treats, crafted for your relaxation in mind.')),
h('section',{className:'wrap sec two'},h('div',{className:'art'},h('img',{src:IMAGES.story,alt:'Soap, candle and body butter on a wooden table'})),
h('div',{className:'stx'},h('h2',null,'It started with one bar of soap'),h('p',null,'In 2019 we mixed our first batch of lavender soap on a secondhand table in a tiny kitchen — a remedy for skin that never agreed with store-bought products. Friends asked for bars. Then their friends did. Soon our kitchen looked like a soap factory, and Sincere & Co. was born.'),h('p',null,'Today our little studio makes six collections: handmade soaps, scented candles, diffusers, whipped body butters, bath bombs and shower gels. Everything is still made the same way — slowly, by hand, in batches small enough to fuss over.'),h('p',null,'We believe self-care should feel like a deep breath. That’s why every product we make carries the same promise it did on day one: honest ingredients, patient craft, and packaging that feels like a gift.'))),
h('section',{className:'alt sec'},h('div',{className:'wrap'},h('h2',{style:{textAlign:'center',marginBottom:32}},'What we stand for'),h('div',{className:'g3'},VAL.map(v=>h('div',{className:'sc',key:v[1]},h('div',{className:'ci'},h(Ic,{n:v[0],s:20})),h('h3',null,v[1]),h('p',null,v[2])))))),
h('section',{className:'wrap',style:{paddingTop:72}},h('div',{className:'cta'},h('h2',null,'“Crafted for your relaxation in mind”'),h('p',null,'Ready to bring a little of the studio home with you?'),h('div',{className:'bt'},h('button',{className:'btn ac',onClick:()=>go('soaps')},'Browse collections ',h(Ic,{n:'arrow',s:16})),h('button',{className:'btn o',onClick:()=>go('contact')},'Get in touch')))))}
else if(pg==='contact')body=h(Contact);
else body=h('main',null,
h('section',{className:'wrap hero'},h('div',null,h('span',{className:'eyebrow'},'Handmade bath & body essentials'),h('h1',null,'Crafted for your ',h('em',null,'relaxation'),' in mind'),h('p',{className:'lead'},'From cold-pressed soaps to hand-poured candles, every Sincere & Co. piece is made slowly, in small batches, with ingredients you can feel good about.'),h('div',{className:'bt'},h('button',{className:'btn',onClick:()=>document.getElementById('col').scrollIntoView({behavior:'smooth'})},'Shop our collection ',h(Ic,{n:'arrow',s:16})),A('story','Our story','btn o'))),
h('div',{className:'art'},h('img',{src:IMAGES.hero,alt:'Handmade soaps, a reed diffuser and a candle'}))),
h('section',{className:'feat'},h('div',{className:'wrap'},FEAT.map(f=>h('div',{className:'fi',key:f[1]},h('div',{className:'ci'},h(Ic,{n:f[0]})),h('div',null,h('h3',null,f[1]),h('p',null,f[2])))))),
h('section',{className:'wrap sec',id:'col'},h('div',{className:'hdg'},h('div',null,h('span',{className:'eyebrow'},'Six ways to unwind'),h('h2',null,'Shop by collection')),h('p',null,'Pick a collection to see everything in it — then build your order and send it to us on WhatsApp.')),
h('div',{className:'g3'},CATS.map(c=>{const it=PR.filter(p=>p.c===c.id);return h('div',{className:'col',key:c.id,role:'link',tabIndex:0,onClick:()=>go(c.id),onKeyDown:e=>e.key==='Enter'&&go(c.id)},h('img',{src:c.card,alt:''}),h('div',null,h('h3',null,c.n),h('span',null,'3 products · '+c.t)))}))),
h('section',{className:'alt sec'},h('div',{className:'wrap'},h('div',{className:'hdg'},h('div',null,h('span',{className:'eyebrow'},'Customer favorites'),h('h2',null,'This week’s bestsellers'))),grid(PR.filter(p=>p.best)))),
h('section',{className:'wrap sec two'},h('div',{className:'art'},h('img',{src:IMAGES.story,alt:'Soap, candle and body butter on a wooden table'})),h('div',null,h('span',{className:'eyebrow'},'Our story'),h('h2',null,'Made slowly, with sincere care'),h('p',null,'Sincere & Co. began in a small home kitchen with one simple belief: the things you use to care for yourself should be made with the same care you give the people you love. Today every soap, candle and butter is still handmade by us, in small batches we’re proud to sign.'),A('story',['Read our story ',h(Ic,{key:1,n:'arrow',s:16})],'btn o'))),
h(Sub),h(Steps));
return h('div',null,
h('div',{className:'top'},h('div',{className:'wrap'},h('i',null,'“Crafted for your relaxation in mind”'),h(Soc))),
h('header',{className:'hd'},h('div',{className:'wrap'},h(Brand),
mo&&h('div',{className:'mov',onClick:()=>setMo(false)}),h('nav',{className:mo?'open':'','aria-label':'Main'},h('div',{className:'mh'},h('h3',null,'Menu'),h('button',{'aria-label':'Close menu',onClick:()=>setMo(false)},h(Ic,{n:'x'}))),A('home','Home',pg==='home'?'on':''),A('story','Our Story',pg==='story'?'on':''),
h('div',{className:'dd',onMouseEnter:()=>setDd(true),onMouseLeave:()=>setDd(false)},h('button',{className:'l'+(cat?' on':''),'aria-expanded':dd,onClick:()=>setDd(!dd)},'Products',h(Ic,{n:'chev',s:16})),(dd||mo)&&h('div',{className:'dm'},CATS.map(c=>A(c.id,c.n,'')))),
A('contact','Contact',pg==='contact'?'on':''),h('div',{className:'ms'},h(Soc))),
h('div',{style:{display:'flex',alignItems:'center'}},h('button',{className:'btn','aria-label':'Open order',onClick:()=>setDr(true)},h(Ic,{n:'bag',s:16}),h('span',{className:'ol'},'Order'),n>0&&h('span',{className:'bd'},n)),h('button',{className:'burger','aria-label':'Open menu',onClick:()=>setMo(true)},h(Ic,{n:'menu',s:22}))))),
body,
h('footer',{className:'ft'},h('div',{className:'wrap'},h('div',{className:'fg'},
h('div',null,h(Brand),h('i',{style:{font:'italic 500 17px var(--sf)'}},'“Crafted for your relaxation in mind”'),h('p',{style:{opacity:.8,fontSize:14,marginTop:8}},'Brought to you by Sincere & Co.'),h(Soc)),
h('div',null,h('h4',null,'Explore'),A('home','Home'),A('story','Our Story'),A('contact','Contact')),
h('div',null,h('h4',null,'Products'),CATS.map(c=>A(c.id,c.n))),
h('div',null,h('h4',null,'Visit us'),h('div',{className:'ib'},h(Ic,{n:'pin',s:16}),ADDR),h('div',{className:'ib'},h(Ic,{n:'mail',s:16}),MAIL),h('div',{className:'ib'},h(Ic,{n:'phone',s:16}),TEL),h('div',{className:'ib'},h(Ic,{n:'clock',s:16}),h('div',null,h('b',null,'Operating hours'),HRS.map(r=>h('div',{key:r[0]},r[0]+': '+r[1]))))) ),
h('div',{className:'fb'},h('span',null,'© 2026 Sincere & Co. All rights reserved.'),h('i',null,'Crafted for your relaxation in mind')))),
n>0&&!dr&&h('button',{className:'btn fl',onClick:()=>setDr(true)},h(Ic,{n:'bag',s:16}),h('span',{style:{marginRight:'auto'}},n+(n>1?' items':' item')+' · '+$(tot)),h('span',{className:'ro'},'Review order')),
dr&&h(Drawer,{cart,set,close:()=>setDr(false),go}))}
ReactDOM.createRoot(document.getElementById('root')).render(h(App));
