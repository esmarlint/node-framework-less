const { paginate } = require('../common/util');
const {
    ContentFormat,
    Books,
    BooksAuthors,
    BooksPages
} = require('../database/models');

module.exports = class FormatService {

    async getAll(page, pageSize) {

        const data = await Books.findAndCountAll({ offset: page, limit: pageSize });
        const books = data.rows;
        const count = data.count;

        let result = {
            pagination: {
                total: count,
                page: page,
                pageSize: pageSize
            },
            data: books
        }

        return result;
    }

    async getById(id) {
        let book = await Books.findByPk(id);
        return book;
    }

}
