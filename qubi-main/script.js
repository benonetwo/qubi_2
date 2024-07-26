// script.js

document.addEventListener('DOMContentLoaded', () => {
  const categoryButtons = document.querySelectorAll('aside button');
  const itemLists = document.querySelectorAll('.list');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('onclick').match(/'([^']+)'/)[1];
      showCategory(targetId);
    });
  });

  function showCategory(targetId) {
    itemLists.forEach(list => {
      list.classList.add('hidden');
    });

    const targetList = document.getElementById(targetId);

    if (targetList) {
      targetList.classList.remove('hidden');
    }
  }
});
