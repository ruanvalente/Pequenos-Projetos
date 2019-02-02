(function(doc) {
  'use strict';

  var $list = doc.querySelector('ul');
  var $tasks = doc.querySelector('[data-js="input"]');
  var $button = doc.querySelector('[data-js="button"]');

  $tasks.addEventListener('keyup', addKey, false);
  $button.addEventListener('click', addList, false);

  function addList() {
    var item = '<li>' + $tasks.value + '</li>';
    $list.innerHTML += item;
    $tasks.value = '';
    $tasks.focus();
  }

  function addKey(e) {
    if (e.keyCode === 13) {
      addList();
    }
  }
})(document);
