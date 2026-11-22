(() => {
  if (!/^\/research\/?$/.test(location.pathname)) return;
  const init = () => {
    const cards = Array.from(document.querySelectorAll('.research-card'));
    if (!cards.length || document.querySelector('.tm-paper-filters')) return;
    const first = cards[0];
    const container = document.createElement('nav');
    container.className = 'tm-paper-filters';
    container.setAttribute('aria-label','Filter research papers');
    const types = [
      ['all','All',cards.length],
      ['published','Published',cards.filter(c=>c.classList.contains('research-card-published')).length],
      ['preprint','Preprints',cards.filter(c=>c.classList.contains('research-card-preprint')).length]
    ];
    const apply = type => {
      cards.forEach(card => {
        const show = type === 'all' || (type === 'published' && card.classList.contains('research-card-published')) || (type === 'preprint' && card.classList.contains('research-card-preprint'));
        card.classList.toggle('tm-filter-hidden',!show);
      });
      container.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===type)));
    };
    types.forEach(([type,label,count]) => {
      const button = document.createElement('button');
      button.type='button';
      button.className='tm-paper-filter';
      button.dataset.filter=type;
      button.textContent=label+' ('+count+')';
      button.setAttribute('aria-pressed',String(type==='all'));
      button.addEventListener('click',()=>apply(type));
      container.appendChild(button);
    });
    first.parentNode.insertBefore(container,first);
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
