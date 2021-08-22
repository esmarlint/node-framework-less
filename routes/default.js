const Router = require('router');
const router = new Router();
const BooksController = require('../controllers/booksController');
const PagesController = require('../controllers/pagesController');

module.exports = router;

router.get('/api/v1/books', new BooksController().getAll);
router.get('/api/v1/books/:id', new BooksController().getById);
router.get('/api/v1/formats/', new BooksController().getFormats);

router.get('/api/v1/books/:id/pages/:format', new PagesController().getAll);
router.get('/api/v1/books/:id/pages/:page/:format', new PagesController().getByPageNumber);

