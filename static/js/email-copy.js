/* Copy-email interaction: works on desktop and mobile. */
(function () {
  function showNotice(message) {
    let toast = document.getElementById('tm-copy-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'tm-copy-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('tm-visible');
    clearTimeout(window.tmCopyToastTimer);
    window.tmCopyToastTimer = setTimeout(() => toast.classList.remove('tm-visible'), 2300);
  }
  async function copyEmail(email) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(email);
      return;
    }
    const field = document.createElement('textarea');
    field.value = email;
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    const success = document.execCommand('copy');
    field.remove();
    if (!success) throw new Error('Copy unavailable');
  }
  document.addEventListener('click', async function (event) {
    const button = event.target.closest('.tm-copy-email');
    if (!button) return;
    event.preventDefault();
    try {
      await copyEmail(button.dataset.email || 'trmal@uw.edu');
      showNotice('Email copied to clipboard!');
    } catch (error) {
      showNotice('Could not copy email. Please select the address manually.');
    }
  });
})();
