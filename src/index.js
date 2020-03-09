import m from 'mithril';
import FirstPage from './firstpage';
import SecondPage from './secondpage';
import NotFound from './notfound';

m.route.prefix = '';
m.route(document.body, '/404', {
    '/test/:id': SecondPage,
    '/': FirstPage,
    '/404': NotFound
});
