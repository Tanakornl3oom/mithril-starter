import m from 'mithril';
import FirstPage from './component/firstpage';
import SecondPage from './component/secondpage';
import Secondpagewithparams from './component/secondpagewithparams';
import NotFound from './component/notfound';

m.route.prefix = '';
m.route(document.body, '/404', {
    '/user': SecondPage,
    '/user/:id': Secondpagewithparams,
    '/': FirstPage,
    '/404': NotFound
});
