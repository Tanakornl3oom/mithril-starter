import m from 'mithril';
import Nav from './nav';

const FirstPage = {
    state: 'test',
    /* life cycle https://mithril.js.org/lifecycle-methods.html#usage */
    //oninit
    //oncreate
    //onupdate
    //onbeforeremove
    //onremove
    //onbeforeupdate
    view: function() {
        return [
            m('div', m(Nav)),
            m('div', 'Hello first Page : state -> ' + this.state),
            m(
                m.route.Link,
                { href: '/user', message: '123' },
                'User with message'
            )
        ];
    }
};

module.exports = FirstPage;

/* 
function FirstPage {
    var state = 'asdfdaf'
    return {
        view: function() {
        return [m('div', m(Nav)), m('div', 'Hello first Page : ' + this.state)];
        }
    }
}
*/
