(() => {
  if (!/^\/research\/?$/.test(window.location.pathname)) return;
  if (document.querySelector('.tm-math-field')) return;
  const expressions = [
    'W = ⟨s₁, …, sₙ⟩','ℓ(w)','Pₓ,ᵧ(q)','𝒩(W)','uₛuₜ','x ≤ y',
    '∑₍w∈W₎ q^ℓ⁽ʷ⁾','𝓗(W)','θᴺ⁻²ᵏ','Lθ : 𝒩ₖ → 𝒩ₙ₋ₖ',
    'Φ⁺','sᵢsⱼsᵢ','H⁎(G/B)','w₀','Rₓ,ᵧ(q)','∑ cᵥuᵥ',
    'Bₙ','Dₙ','I₂(m)','[e,w]','𝔤','χ(V)'
  ];
  const layer = document.createElement('div');
  layer.className = 'tm-math-field';
  layer.setAttribute('aria-hidden', 'true');
  let seed = 137;
  const rand = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  expressions.forEach((value, i) => {
    const el = document.createElement('span');
    el.textContent = value;
    el.style.setProperty('--x', (3 + rand() * 89).toFixed(2) + '%');
    el.style.setProperty('--y', (4 + rand() * 88).toFixed(2) + '%');
    el.style.setProperty('--size', (17 + rand() * 16).toFixed(1) + 'px');
    el.style.setProperty('--alpha', (0.045 + rand() * 0.065).toFixed(3));
    el.style.setProperty('--duration', (24 + rand() * 27).toFixed(1) + 's');
    el.style.setProperty('--delay', (-rand() * 30).toFixed(1) + 's');
    layer.appendChild(el);
  });
  document.body.prepend(layer);
})();
