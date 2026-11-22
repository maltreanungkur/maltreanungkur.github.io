(() => {
  if (!/^\/research\/?$/.test(location.pathname)) return;
  const init = () => {
    if (document.querySelector('.tm-math-field')) return;
    // Mathematical notation only; no named theorems or nilCoxeter expressions.
    const symbols = [
      'Gal(L/K)', 'Hⁿ(X,ℂ)', 'Pₓ,ᵧ(q)', '𝒟ᵇ(𝒞)', 'Spec A',
      'Hᵖ,ᑫ(X)', 'W=⟨S⟩', 'Ext¹(A,B)', 'Lᵏ', 'K₀(𝒞)',
      'ℓ(w)', '𝒪ₓ', 'Gal(ℚ̄/ℚ)', '𝓗(W)', 'X⊗Y',
      'Hⁱ(X,Ωʲ)', 'sᵢsⱼsᵢ', 'IC(X)', 'Hom𝒞(X,Y)', 'hᵖ,ᑫ',
      'Φ⁺', 'RΓ(X,𝓕)', 'G/B', 'Δ(λ)', '∇(λ)',
      '∂∂̄', 'Pic(X)', 'CH⁎(X)', '𝔽ₚ', 'W/Wᴊ'
    ];
    const field = document.createElement('div');
    field.className = 'tm-math-field';
    field.setAttribute('aria-hidden','true');
    // Each symbol occupies its own clipped cell, so paths cannot intersect.
    // Motion direction and phase differ per cell, with no straight-line marching.
    let seed=193;
    const rand=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646};
    symbols.forEach((symbol,i)=>{
      const cell=document.createElement('div');
      cell.className='tm-math-cell';
      const glyph=document.createElement('span');
      glyph.textContent=symbol;
      const angle=rand()*Math.PI*2;
      const radius=8+rand()*12;
      glyph.style.setProperty('--dx1',(Math.cos(angle)*radius).toFixed(1)+'px');
      glyph.style.setProperty('--dy1',(Math.sin(angle)*radius).toFixed(1)+'px');
      glyph.style.setProperty('--dx2',(Math.cos(angle+1.7)*radius).toFixed(1)+'px');
      glyph.style.setProperty('--dy2',(Math.sin(angle+1.7)*radius).toFixed(1)+'px');
      glyph.style.setProperty('--dx3',(Math.cos(angle+3.5)*radius).toFixed(1)+'px');
      glyph.style.setProperty('--dy3',(Math.sin(angle+3.5)*radius).toFixed(1)+'px');
      glyph.style.animationDuration=(18+rand()*12).toFixed(1)+'s';
      glyph.style.animationDelay=(-rand()*24).toFixed(1)+'s';
      glyph.style.opacity=(.11+rand()*.07).toFixed(2);
      glyph.style.fontSize=(15+rand()*6).toFixed(0)+'px';
      cell.appendChild(glyph);
      field.appendChild(cell);
    });
    document.body.prepend(field);
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
