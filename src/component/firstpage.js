import m from 'mithril';
import Nav from './nav';

const FirstPage = {
    /* life cycle https://mithril.js.org/lifecycle-methods.html#usage */
    //oninit
    //oncreate
    //onupdate
    //onbeforeremove
    //onremove
    //onbeforeupdate
    view: function() {
        return [m('div', m(Nav)), m('div', 'Hello first Page')];
    }
};

module.exports = FirstPage;
