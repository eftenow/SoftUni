function notify(message) {
  const notificationElement = document.getElementById('notification');
  
  notificationElement.addEventListener('click', onClickHide);
  notificationElement.textContent = message;
  notificationElement.style.display = 'block';

  function onClickHide (){
    notificationElement.style.display = 'none';
  }
}