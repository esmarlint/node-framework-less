const Controller = require('./controller');
const Services = require('../services/services');
const { paginate } = require('../common/util');

module.exports = class BooksController extends Controller {

    async getAll(request, response) {
        let { page, pageSize } = super.createValidPagination(
            super.query(request)
        );

        const pagination = paginate(page, pageSize);

        const result = await Services.booksService.getAll(
            pagination.page,
            pagination.pageSize
        );

        super.json(response, 200, result)
    }

    async getById(request, response) {
        const { id } = super.params(request);

        const book = await Services.booksService.getById(id);

        if (book == null) {
            let result = {
                message: "Resource not found",
                errors: [
                    `The book with id ${id} not found`
                ]
            };
            super.json(response, 404, result)
        }

        super.json(response, 200, book);
    }

    async getFormats(request, response) {
        const formats = await Services.formatService.getAll();

        super.json(response, 200, formats);
    }
}