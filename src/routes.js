const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
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
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler,
    }

];

module.exports = routes;