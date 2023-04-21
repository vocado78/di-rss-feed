// Would go into its own file, and broken down into smaller parts.
const renderHtml = (data) => {
  const containerEl = document.getElementById('results');
  let html = ``;

  data.forEach(item => {
    if (!item.link && !item.title) {
      html += '';
    }
    
    const options = {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    const timeString = item.pubDate ? new Date(item.pubDate).toLocaleString('sv-SE', options) : '';

    let image = '';
    if (item['media:content'] && item['media:content']['@_url'] && item['media:content']['@_type'].includes('image')) {
      image = `<img src="${item['media:content']['@_url']}" alt="${item['media:content']['media:description']}">`;
    }
    // Would need to confirm accessibility.
    html += `
          <a href="${item.link}" target="_blank" rel="noopener">
            <article class="item">
              <div>
                <h2>${item.title}</h2>
                <p>${item.description || 'Ingen beskrivning finns'}</p>
                <footer>
                  <p>Publicerad ${timeString} av ${item['dc:creator'] || 'Okänd'}</p>
                </footer>
              </div>
              ${image}
            </article>
          </a>
        `;
  });

  containerEl.replaceChildren();
  containerEl.insertAdjacentHTML('beforeend', html);
};

const callback = () => {
  const baseUrl = 'http://localhost:3000';
  fetch(`${baseUrl}/rss`)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then(data => {
      if (!data?.length) {
        const containerEl = document.getElementById('results').firstElementChild;
        containerEl.innerHTML = 'Inget innehåll att visa.';
      } else {
        renderHtml(data);
      }
    })
    .catch(() => {
      const containerEl = document.getElementById('results').firstElementChild;
      containerEl.innerHTML = 'Ett fel inträffade, innehållet kunde inte laddas.';
    });
};

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener('DOMContentLoaded', callback);
}
