async function showActiveTab() {
  const title = document.querySelector<HTMLElement>('#title');
  const url = document.querySelector<HTMLElement>('#url');
  const [tab] = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });

  if (title) {
    title.textContent = tab?.title || 'No active tab';
  }

  if (url) {
    url.textContent = tab?.url || '';
  }
}

void showActiveTab();
