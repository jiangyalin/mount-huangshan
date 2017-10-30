const express = require('express');
const router = express.Router();

// 公告
router.use('/', require('./bulletin'));

module.exports = router;
