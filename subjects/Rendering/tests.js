import assert from '../assert'

export function run() {
  const node = document.getElementById('app')
  const html = node.innerHTML

  assert(!!html.match(/Gerichte/), 'gib den Titel aus')
  assert(!!html.match(/Currywurst/), 'gib Currywurst aus')
  assert(!!html.match(/Kässpatzen/), 'gibt Kässpatzen aus')
  assert(!!html.match(/Gemüseauflauf/), 'gib Gemüseauflauf aus')
  assert(!html.match(/Bretzen/), 'zeige nur Gerichte mit einer Bewertung > 3 an')
  assert(html.indexOf('Currywurst') < html.indexOf('Gemüseauflauf'), 'zu erst Currywurst rendern')
  assert(html.indexOf('Gemüseauflauf') < html.indexOf('Kässpatzen'), 'Gemüseauflauf als zweites')
}
