const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const AlbumController = require('../controllers/album');

router.get('/search/:albumTitle', AlbumController.getSearchResults);


router.get('/:albumId', AlbumController.getAlbumInfo);

module.exports = router;