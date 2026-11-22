(() => {
  if (!/^\/research\/?$/.test(location.pathname)) return;
  const start = () => {
    if (document.querySelector('.tm-math-field')) return;
    // Mathematical notation only; no named theorems, no nilCoxeter expressions.
    const expressions = [
      'Gal(L/K)', 'Hⁿ(X, ℂ)', 'Pₓ,ᵧ(q)', '𝒟ᵇ(Coh X)',
      'Spec(A)', 'Hᵖ,ᑫ(X)', 'W = ⟨S⟩', 'Ext¹(A,B)',
      'Lᵏ : Hⁿ⁻ᵏ → Hⁿ⁺ᵏ', 'K₀(𝒞)', 'ℓ(w)', '𝒪ₓ',
      'Gal(ℚ̄/ℚ)', '𝓗(W)', 'X ⊗ Y', 'Hⁱ(X, Ωʲₓ)',
      'sᵢsⱼsᵢ', 'IC(X)', 'Hom𝒞(X,Y)', 'hᵖ,ᑫ = hᑫ,ᵖ',
      'Φ⁺', 'RΓ(X,𝓕)', 'G/B', 'Δ(λ)'
    ];
    const layer = document.createElement('div');
    layer.className = 'tm-math-field';
    layer.setAttribute('aria-hidden', 'true');
    // A regular 4-column, 6-row grid keeps expressions in separate lanes.
    // Every item travels rightwards at the same speed and never reverses.
    const columns = 4, rows = 6;
    expressions.forEach((expression, i) => {
      const col = i % columns;
      const row = Math.floor(i / columns);
      const el = document.createElement('span');
      el.textContent = expression;
      el.style.left = (col * 25 + 2) + '%';
      el.style.top = (row * (100 / rows) + 5) + '%';
      el.style.fontSize = (17 + (i % 3) * 2) + 'px';
      el.style.animationDelay = (-((i * 7) % 23)) + 's';
      layer.appendChild(el);
    });
    document.body.prepend(layer);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once:true});
  else start();
})();
