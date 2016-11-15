const React = require('react');
const ReactDOM = require('react-dom');

/*
 * React Komponenten sind nur Funktionen die Attribute als Argumente
 * entgegen nehmen.
 */
// const element = React.DOM.input({ type: 'text' });
// ReactDOM.render(element, document.getElementById('app'));

/*
 * Als weitere Argumente kannst du Kind-Elemente übergeben.
 */
// const element = React.DOM.select(
//   { value: '2' },
//   React.DOM.option({ value: '1' }, 'eins'),
//   React.DOM.option({ value: '2' }, 'zwei'),
//   React.DOM.option({ value: '3' }, 'drei')
// );
// ReactDOM.render(element, document.getElementById('app'));


/*
 * Und damit komplexere UI bauen
 */
// const element = React.DOM.div(
//   {},
//   React.DOM.h1({ className: 'hot' }, 'Es sind nur Funktionen'),
//   React.DOM.select(
//     { value: '2' },
//     React.DOM.option({ value: '1' }, 'eins'),
//     React.DOM.option({ value: '2' }, 'zwei'),
//     React.DOM.option({ value: '3' }, 'drei')
//   )
// );
// ReactDOM.render(element, document.getElementById('app'));

/*
 * Schauen wir uns das doch mal in der Konsole an
 */
//console.log(element)


/*
 * Wir können Funktionen auch als Event Handler mitgeben
 */
// const element = React.DOM.button(
//   { onClick: function() { alert('geklickt!') } },
//   'alert!'
// );
// ReactDOM.render(element, document.getElementById('app'));


/*
 * So ist`s vielleicht übersichtlicher
 */
// function handleClick() {
//   alert('noch mehr geklickt!');
// }
// const element = React.DOM.button(
//   { onClick: handleClick },
//   'alert!'
// );
// ReactDOM.render(element, document.getElementById('app'));


/*
 * JSX ist im Grunde nur ein anderer Syntax um Funktionen aufzurufen
 */
// const element = (
//   <div className="App">
//     <h1 className="Title">Hallo!</h1>
//     <p>Uhhh, shiny!</p>
//   </div>
// );
// 
// const element = React.DOM.div(
//   { className: "App" },
//   React.DOM.h1({ className: 'Title' }, 'Hallo!'),
//   React.DOM.p({}, 'Uhhh, shiny!')
// );
// 
// ReactDOM.render(element, document.getElementById('app'));


/*
 * Wir brauchen keinen spezielle Template Syntax, oder irgendeine Art von Helpern.
 * Nutzt die internen Array Methoden von JavaScript.
 */
// const meals = [
//   { name: 'Currywurst' },
//   { name: 'Kässpatzen' },
//   { name: 'Brezen' }
// ];
// const items = meals.map(function(meal) {
//   return <li>{meal.name}</li>;
// });
// ReactDOM.render(<ul>{items}</ul>), document.getElementById('app'));


/*
 * Angenommen, wir möchten folgendes HTML abbilen
 * <select name="month">
 *  <option>(01) Januar</option>
 *  <option>(02) Februar</option>
 *  ...
 * </select>
 */

// const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 
//                 'August', 'September', 'Oktober', 'November', 'Dezember'];
// 
// function padMonth(index) {
//   const realIndex = index + 1;
//   return realIndex > 9 ? '' + realIndex : '0' + realIndex;
// }
// 
// ReactDOM.render((
//   <select>
//     {months.map(function(month, index) {
//       return <option>({padMonth(index)}) {month}</option>;
//     })}
//   </select>
// ), document.getElementById('app'));

// ReactDOM.render(
//   React.DOM.select(
//     {},
//     months.map(function(month, index) {
//       return React.DOM.option({}, `(${padMonth(index)}) ${month}`);
//     })
//   )
// , document.getElementById('app'));


/*
 * Weil React, allgemein gesprochen, fast nur ein Haufen von Funktionen ist,
 * und auf JavaScript aufbaut, können wir auf unserem bestehenden JavaScript-
 * Wissen aufbauen.
 */
// function monthOption(month, index) {
//   return <option>({padMonth(index)}) {month})</option>;
// }
// 
// function MonthSelect() {
//   return <select>{months.map(monthOption)}</select>;
// }
// 
// ReactDOM.render(<MonthSelect />, document.getElementById('app'));


/*
 * - Immer neu rendern
 * - Virtual DOM erledigt das für uns effizient
 */
