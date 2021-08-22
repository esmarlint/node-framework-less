const { paginate } = require('../common/util');
const {
    ContentFormat,
    Books,
    BooksAuthors,
    BooksPages
} = require('../database/models');

module.exports = class BasicBooksService {

    async getAll() {
        const result = await ContentFormat.findAll();

        return result;
    }

    async getByShortName(format) {
        const result = await ContentFormat.findOne({
            where: { shortName: format }
        });

        return result;
    }

    async getById(id) {
        let book = await Books.findByPk(id);
        return book;
    }

}
