const Controller = require('./controller');
const Services = require('../services/services');

module.exports = class PagesController extends Controller {

    async getAll(request, response) {
        const { id, format } = super.params(request);
        let { page, pageSize } = super.createValidPagination(
            super.query(request)
        );

        const formatExist = await Services.formatService.getByShortName(format);
        if (formatExist.length <= 0) {
            let result = {
                message: "Invalid parameter",
                errors: [
                    `The format <${format}> do not exists`
                ]
            };

            super.json(response, 400, result);
        }

        const book = await Services.booksService.getById(id);
        if (book == null) {
            let result = {
                message: "Resource not found",
                errors: [
                    `The book with id <${id}> not found`
                ]
            };

            super.json(response, 404, result);
        }

        const data = await Services.pagesService.getByFormat(id, formatExist.id, { page, pageSize });

        const pages = data.rows;
        const count = data.count;

        let result = {
            pagination: {
                total: count,
                page: page,
                pageSize: pageSize
            },
            data: pages
        }

        super.json(response, 200, result);
    }

    async getByPageNumber(request, response) {
        const { id, page, format } = super.params(request);

        const formatExist = await Services.formatService.getByShortName(format);

        if (formatExist == null) {
            let result = {
                message: "Invalid parameter",
                errors: [
                    `The format <${format}> do not exists`
                ]
            };

            super.json(response, 400, result);
        }

        const book = await Services.booksService.getById(id);
        if (book == null) {
            let result = {
                message: "Resource not found",
                errors: [
                    `The book with id <${id}> not found`
                ]
            };

            super.json(response, 404, result);
        }

        const bookPage = await Services.pagesService.getByPageNumber(id, page, formatExist.id)

        if (bookPage == null) {
            let result = {
                message: "Resource not found",
                errors: [
                    `The page number <${page}> for book with id <${id}> not found`
                ]
            };

            super.json(response, 404, result);
        }

        super.json(response, 200, bookPage);
    }
}