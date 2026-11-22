(() => {
  if (!/^\/research\/?$/.test(location.pathname)) return;
  const init = () => {
    const container=document.querySelector('.tm-paper-filters');
    const cards=Array.from(document.querySelectorAll('.research-card'));
    if(!container || !cards.length)return;
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
