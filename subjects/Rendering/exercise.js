/*
 * Aufgabe:
 *
 * - rendere DATA.title in einem <h1>
 * - rendere ein <ul>, bei dem jeder Eintrag in DATA.items ein <li> darstellt
 * - zeige nun nur die Einträge mit einer Bewertung über 4 an
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
import React from 'react'
import ReactDOM from 'react-dom'
import sortBy from 'sort-by'

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
  return (
    <div>
      Öffne deine Browser-Konsole. Du solltest fehlgeschlagene Tests haben.
    </div>
  );
}

ReactDOM.render(<Menu />, document.getElementById('app'), function() {
  require('./tests').run();
});
