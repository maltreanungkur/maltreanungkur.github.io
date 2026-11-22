(() => {
  if (!/^\/research\/?$/.test(location.pathname)) return;
  const init = () => {
    const container=document.querySelector('.tm-paper-filters');
    const cards=Array.from(document.querySelectorAll('.research-card'));
    if(!container || !cards.length)return;
    // Capture abstract clicks before the native <summary> default action.
    // A summary click would otherwise toggle <details> a second time.
    document.addEventListener('click', event => {
      const abstract = event.target.closest('button[data-tm-abstract-toggle]');
      if (!abstract) return;
      const card = abstract.closest('details.research-card');
      if (!card) return;
      event.preventDefault();
      event.stopPropagation();
      card.open = !card.open;
    }, true);
    container.addEventListener('click', event=>{
      const button=event.target.closest('button[data-filter]');
      if(!button)return;
      const type=button.dataset.filter;
      cards.forEach(card=>{
        const show=type==='all'||(type==='published'&&card.classList.contains('research-card-published'))||(type==='preprint'&&card.classList.contains('research-card-preprint'));
        card.classList.toggle('tm-filter-hidden',!show);
      });
      container.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    });
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
