const router = require('express').Router();
const { copyAllFiles, copySomeFiles } = require('../controllers/copy.controller');
const { moveAllFiles, moveSomeFiles } = require('../controllers/move.controller');
const { getBaseDir, seeAllFiles, seeFileContents } = require('../controllers/index.controller');

router.post('/', seeAllFiles);

router.post('/data', seeFileContents);

router.get('/dir', getBaseDir);

router.post('/copy', copyAllFiles);

router.post('/copy/some', copySomeFiles);

router.post('/move', moveAllFiles);

router.post('/move/some', moveSomeFiles);

module.exports = router;
