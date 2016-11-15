/*
 * Aufgabe:
 *
 * - Ändere den Wert `Hallo Welt!` und speicher die Datei
 * - Die Aktualisierung sollte ohne Reload in deinem Browser sichtbar sein
 */
const React = require('react');
const ReactDOM = require('react-dom');

function App() {
  return React.DOM.div(null, 'Hallo Welt');
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
);
