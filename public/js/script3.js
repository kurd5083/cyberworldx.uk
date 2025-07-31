(function() {
  const searchParams = document.location.search.substr(1);
  if (!searchParams) return;

  function updateLinks(container = document) {
    for (let a of container.querySelectorAll('a[href]')) {
      if (
        !a.dataset._searchAppended && // не обрабатывать повторно
        !a.href.startsWith('javascript:') &&
        !a.href.startsWith('#')
      ) {
        a.href += (a.href.includes("?") ? "&" : "?") + searchParams;
        a.dataset._searchAppended = 'true';
      }
    }
  }

  // Обновить текущие ссылки
  updateLinks();

  // Следить за добавлением новых ссылок
  const observer = new MutationObserver(mutations => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (node.nodeType === 1) {
          if (node.matches?.('a[href]')) {
            updateLinks(node);
          } else {
            updateLinks(node);
          }
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();