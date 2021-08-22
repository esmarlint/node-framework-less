const BasicBookService = require('./booksService');
const BasicPagesService = require('./pagesService');
const FormatService = require('./formatService');

const services = {
    booksService: new BasicBookService(),
    pagesService: new BasicPagesService(),
    formatService: new FormatService(),
}

module.exports = services;