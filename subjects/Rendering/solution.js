/*
 * Aufgabe:
 *
 * - rendere DATA.title in einem <h1>
 * - rendere ein <ul>, bei dem jeder Eintrag in DATA.items ein <li> darstellt
 * - zeige nun nur die Einträge mit einer Bewertung über 3 an
 *   (Hinweis: benutze DATA.items.filter(...))
 * - sortiere die Einträge nach ihrem Namen in alphabetischer Reihenfolge
 *   (Hinweis: Benutzer sort-by https://github.com/staygrimm/sort-by#example)
 *
 * Schon schneller fertig?
 * - Füge ein Dropdown hinzu, um das Filtern nach `rating` dynamisch zu gestalten
 * - Füge einen Button hinzu, um die Sortierreihenfolge zu ändern
 *   (Hinweis: Du wirst einen `updateThePage` Funktion benötigen, die `ReactDOM.render`
 *    aufruf, welche aus dem Event-Handler deiner Form-Komponente aufgerufen wird)
 */
 const React = require('react');
 const ReactDOM = require('react-dom');
 const sortBy = require('sort-by');

const DATA = {
  title: 'Gerichte',
  items: [
    { id: 1, name: 'Currywurst', rating: 5 },
    { id: 2, name: 'Kässpatzen', rating: 4 },
    { id: 3, name: 'Bretzen', rating: 3 },
    { id: 4, name: 'Nudeln in Tomatensauce', rating: 1 },
    { id: 5, name: 'Schnitzel mit Pommes', rating: 2 },
    { id: 6, name: 'Gemüseauflauf', rating: 4 }
  ]
}

function Menu() {
  const items = DATA.items
    .filter(function(item) { return item.rating > 3; })
    .sort(sortBy('name'));
    
  return (
    <div>
      <h1>{DATA.title}</h1>
      <ul>
        {items.map(function(item) { return <li key={item.id}>{item.name}</li>; })}
      </ul>
    </div>
  );
}

ReactDOM.render(<Menu />, document.getElementById('app'), function() {
  require('./tests').run();
});
