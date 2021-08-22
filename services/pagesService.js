const { paginate } = require('../common/util');
const {
    ContentFormat,
    Books,
    BooksAuthors,
    BooksPages
} = require('../database/models');

module.exports = class BasicPagesService {

    async getByPageNumber(bookId, pageNumber, formatId) {
        const result = await BooksPages.findOne({
            where: { bookId: bookId, pageNumber: pageNumber, contentFormat: formatId }
        });

        return result;
    }

    async getByFormat(bookId, formatId, pagination) {
        const result = await BooksPages.findAndCountAll({
            where: { bookId: bookId, contentFormat: formatId },
            offset: pagination.page, limit: pagination.pageSize
        });

        return result;
    }

}
