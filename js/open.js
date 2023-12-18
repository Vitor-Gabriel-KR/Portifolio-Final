function toggleAnimation() {
    var contentContainer = document.getElementById('contentContainer');
    var button = document.getElementById('toggleButton');
  
    if (contentContainer.style.width === '100%') {
      contentContainer.style.width = '20%';
      contentContainer.style.left = '12%';
      button.innerHTML = 'asdadasdad';
      button.appendChild(document.createTextNode('\u2192'));
    } else {
      contentContainer.style.width = '100%';
      contentContainer.style.left = '0';
      button.innerHTML = 'aaaaaaaaaaaaaaa';
      button.appendChild(document.createTextNode('\u2190'));
    }
  }