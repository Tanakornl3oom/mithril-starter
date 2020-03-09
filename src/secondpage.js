import m from 'mithril';

const SecondPage = {
    view: function(vnode) {
        return m('div', 'Hello 2, ' + vnode.attrs.id);
    }
};

module.exports = SecondPage;
