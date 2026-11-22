(() => {
  if (!/^\/research\/?$/.test(location.pathname)) return;
  document.body.classList.add('tm-research-atmosphere');
  if (document.querySelector('.tm-math-field')) return;
  // Research themes: Galois theory, algebraic geometry, Hodge theory,
  // categorical representation theory, and Coxeter combinatorics.
  // Intentionally no nilCoxeter expressions.
  const expressions = [
    'Gal(L/K)', 'Gal(\\overline{K}/K)', 'K ⊂ L', 'Lᴴ', 'Aut(K)',
    '1 → H → G → G/H → 1', '[L:K]', 'Spec K', 'Frobₚ',
    'X → Spec k', '𝒪ₓ', 'Pic(X)', 'CH⁎(X)', 'Dᵇ(Coh X)',
    'Hⁱ(X, Ωʲₓ)', 'Hᵖ,ᑫ(X)', 'Hᵏ(X, ℂ) = ⊕ Hᵖ,ᑫ',
    'hᵖ,ᑫ = hᑫ,ᵖ', 'ω ∈ H¹,¹(X)', 'Lᵏ : Hⁿ⁻ᵏ → Hⁿ⁺ᵏ',
    'Λ ⊣ L', '∂∂̄', '∫ₓ α ∧ β', 'RΓ(X, 𝓕)',
    'IC(X)', 'R f₊ 𝟙ₓ', 'Extⁱ(A,B)', 'Hom𝒞(X,Y)',
    '𝒞 ⊠ 𝒟', 'Rep(G)', '𝒟ᵇ(𝒪)', 'K₀(𝒞)',
    'X ⊗ Y', 'F ⊣ G', '𝟙 → F G', 'End𝒞(X)',
    '𝒞 ≃ 𝒟', '𝔤-mod', 'Δ(λ)', 'L(λ)',
    'W = ⟨S⟩', 'ℓ(w)', 'w₀', 'x ≤ᵦ w', 'Φ⁺',
    'sᵢsⱼsᵢ', 'sᵢ² = 1', '(sᵢsⱼ)ᵐⁱʲ = 1',
    'Pₓ,ᵧ(q)', 'Rₓ,ᵧ(q)', '𝓗(W)', '∑ q^ℓ⁽ʷ⁾',
    '[e,w]', 'Bₙ', 'Dₙ', 'I₂(m)', 'G/B',
    'Schubert varieties', 'Bruhat order', 'KL polynomials',
    'W/Wᴊ', 'Des(w)', 'Inv(w)', '𝔰𝔩₂', 'Gal(ℚ̄/ℚ)', 'H⁎(X,ℚ)', '𝒟-mod', 'Tₛ', '𝒪(1)', '∇(λ)', '𝒫erv(X)', 'Hodge filtration', '∑₍w∈W₎ q^ℓ⁽ʷ⁾', '𝔥⁎', '𝔽ₚ', 'Hodge–Riemann', 'Bott–Samelson', 'Coxeter complex'
  ];
  const layer = document.createElement('div');
  layer.className = 'tm-math-field';
  layer.setAttribute('aria-hidden','true');
  let seed = 137;
  const rand = () => { seed = seed * 16807 % 2147483647; return (seed - 1) / 2147483646; };
  // A taller, document-scrolling field avoids crowding a single viewport.
  layer.style.height = '100vh';
  expressions.forEach((value, i) => {
    const el = document.createElement('span');
    el.textContent = value;
    el.style.setProperty('--x', (2 + rand() * 85).toFixed(2) + '%');
    el.style.setProperty('--y', (rand() * 93).toFixed(2) + '%');
    el.style.setProperty('--size', (15 + rand() * 15).toFixed(1) + 'px');
    el.style.setProperty('--alpha', (0.09 + rand() * 0.09).toFixed(3));
    el.style.setProperty('--duration', (12 + rand() * 15).toFixed(1) + 's');
    el.style.setProperty('--delay', (-rand() * 45).toFixed(1) + 's');
    layer.appendChild(el);
  });
  document.body.prepend(layer);
})();
