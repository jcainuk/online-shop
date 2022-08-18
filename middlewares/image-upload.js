const multer = require('multer');

const upload = multer({
  storage: multer.diskStorage({
    destination: 'product-data/images',
    filename: (req, file, cb) => {
      cb();
    },
  }),
});

const configuredMulterMiddleware = upload.single('image');

module.exports = configuredMulterMiddleware;
