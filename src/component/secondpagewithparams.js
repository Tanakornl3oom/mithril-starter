import m from 'mithril';
import Nav from './nav';

const Secondpagewithparams = {
    view: function(vnode) {
        return [
            m('div', m(Nav)),
            m('div', 'Hello second page, with params ' + vnode.attrs.id)
        ];
    }
};

module.exports = Secondpagewithparams;
