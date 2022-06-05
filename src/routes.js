const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
} = require('./handler');
const routes = [
    {
        path: '/books',
        method: 'POST',
        handler: addBookHandler
    },
    {
        path: '/books',
        method: 'GET',
        handler: getAllBooksHandler,
    },
    {
        path: '/books/{id}',
        method: 'GET',
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookByIdHandler,
    },
    
];

module.exports = routes;