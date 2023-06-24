import h from 'hyperscript';
import helpers from 'hyperscript-helpers';

const { div, a, img } = helpers(h);

const card = div({className: "card-container"}, "Content");

export default card;