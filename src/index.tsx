import './css/style.css'
import game from './game'
const foo = { msg: 'hi' }
// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef
}


game()
// ReactDOM.render(game, document.getElementById('root'));
