function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  function simulateEnterKey(inputElement) {
    const event = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true, 
      key: 'Enter', 
      code: 'Enter', 
      keyCode: 13, 
      which: 13, 
    });
    inputElement.dispatchEvent(event); 
  }
  
  window.addEventListener('load', function() {
    const pwdValue = getQueryParameter('pwd');
    const inputElement = document.getElementById('hbePass'); 
    if (pwdValue && inputElement) {
      inputElement.focus();
      inputElement.value = pwdValue; 
      simulateEnterKey(inputElement);
      const url = new URL(window.location.href);
      url.searchParams.delete('pwd');
      window.history.replaceState({}, '', url);
    } else {
    }
  });
  