import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from './store'
import App from './components/app'
import blackjackReducer from './reducers/blackjack_reducer'


const store = createStore(blackjackReducer)

function render(){
	if(typeof window != 'undefined') {
		ReactDOM.render(<App store={store}/>, document.getElementById('container'))
	}
}
render()

store.subscribe(render)
store.dispatch(fetchDeck())
store.dispatch(setAICards(store.getState()))
store.dispatch(setUserCards(store.getState()))

require('../test/index-test.js')  // Leave this in!
