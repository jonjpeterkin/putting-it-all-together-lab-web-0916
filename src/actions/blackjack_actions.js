function shuffle(array) {
 var currentIndex = array.length, temporaryValue, randomIndex;

 // While there remain elements to shuffle...
 while (0 !== currentIndex) {

   // Pick a remaining element...
   randomIndex = Math.floor(Math.random() * currentIndex);
   currentIndex -= 1;

   // And swap it with the current element.
   temporaryValue = array[currentIndex];
   array[currentIndex] = array[randomIndex];
   array[randomIndex] = temporaryValue;
 }

 return array;
}

export function fetchDeck() {
	return {type: 'FETCH_DECK'}
}

export function setAICards(deck) {
	let aiDeal = shuffle(deck).splice(0, 2)
	return {type: 'SET_AI_CARDS', payload: aiDeal}
}

export function setUserCards(deck) {
	let userDeal = shuffle(deck).splice(0, 2)
	return {type: 'SET_USER_CARDS', payload: userDeal}
}

export function hitAI(deck) {
	let aiHit = shuffle(deck).shift()
	return {type: 'HIT_AI', payload: aiHit}
}

export function hitUser(deck) {
	let userHit = shuffle(deck).shift()
	return {type: 'HIT_USER', payload: userHit}
}