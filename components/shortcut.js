const html = require('choo/html')

module.exports = shortcut => {
  return html`
    <a href="${shortcut.url}" target="_blank" title="${shortcut.description}" class="black no-underline pa2 w-100 w-25-l w-33-m">
      <div class="center outline pa3 h4">
        <h1 class="f4">${shortcut.title}</h1>
        <div>
          ${shortcut.description}
        </div>
      </div>
    </a>
  `
}
