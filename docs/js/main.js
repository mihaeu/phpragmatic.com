(function () {
  var i = 0, htmlCollection = document.getElementsByClassName('current-year');
  for (;i < htmlCollection.length; i += 1) {
    htmlCollection.item(i).innerHTML = new Date().getFullYear();
  }
})();
