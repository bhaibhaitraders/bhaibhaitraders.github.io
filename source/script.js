// Ensure the DOM is fully loaded before running
window.addEventListener('load', () => {

  // Function to toggle account number visibility
  function toggleAccount(btn) {
    const targetId = btn.dataset.target;
    const target = document.getElementById(targetId);
    const bankCard = btn.closest('.bank-card');
    const fullAccount = bankCard.dataset.fullAccount;

    if (target.textContent.includes('XXXX')) {
      target.textContent = fullAccount; // Show full account
      btn.textContent = 'Hide';
    } else {
      target.textContent = 'XXXX-XXXX-' + fullAccount.slice(-4); // Hide account
      btn.textContent = 'Show';
    }
  }

  // Function to copy text to clipboard
  async function copyToClipboard(val, btn) {
    try {
      await navigator.clipboard.writeText(val);
      btn.textContent = 'Copied';
      setTimeout(() => {
        btn.textContent = 'Copy';
      }, 1200);
    } catch (err) {
      alert('Copy failed!');
    }
  }

  // Attach click events for Show/Hide buttons
  const showBtns = document.querySelectorAll('.show-toggle');
  showBtns.forEach(btn => {
    btn.addEventListener('click', () => toggleAccount(btn));
  });

  // Attach click events for Copy buttons (Bank & Email)
  const copyBtns = document.querySelectorAll('.btn-copy');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.copy;
      copyToClipboard(val, btn);
    });
  });

});
