const html = require('choo/html')

module.exports = shortcut => {
  return html`
    <div class="center ba w-33-ns pa3 mr2 br3 mt3">
      <h1 class="f4">${shortcut.title}</h1>
      <div>
        ${shortcut.description}
      </div>
    </div>
  `
}
