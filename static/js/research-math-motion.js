(() => {
 if(!/^\/research\/?$/.test(location.pathname))return;
 const formulas=["\\operatorname{Gal}(L/K)","H^{p,q}(X)","P_{x,y}(q)","\\mathcal{D}^{b}(\\mathrm{Coh}\\,X)","\\operatorname{Spec}A","\\operatorname{Ext}^{1}(A,B)","W=\\langle S\\rangle","\\bigoplus_{p+q=n}H^{p,q}","\\mathcal{H}(W)","K_{0}(\\mathcal C)","\\ell(w)","\\mathcal{O}_{X}","\\operatorname{Gal}(\\overline{\\mathbb Q}/\\mathbb Q)","X\\otimes Y","H^{i}(X,\\Omega_X^{j})","s_is_js_i","\\mathrm{IC}_{X}","\\operatorname{Hom}_{\\mathcal C}(X,Y)","h^{p,q}=h^{q,p}","\\Phi^{+}","R\\Gamma(X,\\mathcal F)","G/B","\\Delta(\\lambda)","\\nabla(\\lambda)","\\partial\\bar\\partial","\\operatorname{Pic}(X)","\\mathrm{CH}^{*}(X)","\\mathbb F_{p}","W/W_J","\\mathbb{S}_{\\lambda}","\\mathcal{B}_{w}","\\operatorname{Ind}_{H}^{G}V","\\mathfrak{sl}_{2}","\\mathrm{RHom}(A,B)","L^{n-2k}","\\int_X\\alpha\\wedge\\beta","\\operatorname{Aut}_{K}(L)","\\mathbb{P}^{n}","\\mathcal{O}(1)","\\mathcal{P}erv(X)","R_{x,y}(q)","\\sum_{w\\in W}q^{\\ell(w)}"];
 const init=()=>{
  if(document.querySelector('.tm-math-field'))return;
  const field=document.createElement('div');field.className='tm-math-field';field.setAttribute('aria-hidden','true');
  let seed=281;const rand=()=>{seed=seed*16807%2147483647;return (seed-1)/2147483646};
  formulas.forEach((formula,i)=>{
   const cell=document.createElement('div');cell.className='tm-math-cell';
   const glyph=document.createElement('span');glyph.className='tm-math-glyph';glyph.textContent=formula;
   const angle=rand()*Math.PI*2,amp=7+rand()*12;
   for(let n=1;n<=3;n++){const a=angle+n*1.42;glyph.style.setProperty('--mx'+n,Math.round(Math.cos(a)*amp)+'px');glyph.style.setProperty('--my'+n,Math.round(Math.sin(a)*amp)+'px')}
   glyph.style.setProperty('--motion-time',(17+rand()*14).toFixed(1)+'s');
   glyph.style.setProperty('--motion-delay',(-rand()*30).toFixed(1)+'s');
   glyph.style.setProperty('--glyph-opacity',(.13+rand()*.08).toFixed(2));
   cell.appendChild(glyph);field.appendChild(cell);
  });
  document.body.prepend(field);
  const render=()=>{
   if(!window.katex)return;
   field.querySelectorAll('.tm-math-glyph').forEach((glyph,i)=>{try{window.katex.render(formulas[i],glyph,{throwOnError:false,strict:'ignore',output:'html'})}catch(e){glyph.textContent=formulas[i]}});
  };
  if(window.katex)render();else{const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js';s.onload=render;document.head.appendChild(s)}
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();