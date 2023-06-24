import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import  { card1, card2 }  from './styles/card.css';

const { div, a, img } = helpers(h);

const card = div({className: card1}, "Content");

export default card;