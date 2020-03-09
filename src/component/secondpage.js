import m from 'mithril';
import Nav from './nav';

const SecondPage = {
    Users: [],
    getUsers: function() {
        return m
            .request({
                method: 'GET',
                url: 'https://rem-rest-api.herokuapp.com/api/users',
                withCredentials: true
            })
            .then(function(result) {
                SecondPage.Users = result.data;
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    oninit: function() {
        this.getUsers();
    },
    view: function() {
        return [
            m('div', m(Nav)),
            m('div', 'Hello second page list of user'),
            this.Users.map(user => {
                return m(
                    'div',
                    m(
                        m.route.Link,
                        { href: `/user/${user.id}` },
                        `${user.firstName} ${user.lastName}`
                    )
                );
            })
        ];
    }
};

module.exports = SecondPage;
