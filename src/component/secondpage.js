import m from 'mithril';
import Nav from './nav';

const SecondPage = {
    view: function() {
        return [
            m('div', m(Nav)),
            m('div', 'Hello second page'),
            m('div', m(m.route.Link, { href: '/user/1' }, '- User 1')),
            m('div', m(m.route.Link, { href: '/user/2' }, '- User 2'))
        ];
    }
};

module.exports = SecondPage;
