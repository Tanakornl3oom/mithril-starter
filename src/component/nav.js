import m from 'mithril';

const Nav = {
    view: function() {
        return [
            m('ul', [
                m('li', m(m.route.Link, { href: '/' }, 'Home')),
                m('li', m(m.route.Link, { href: '/user' }, 'User'))
            ])
        ];
    }
};

module.exports = Nav;
