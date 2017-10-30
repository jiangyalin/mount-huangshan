const express = require('express');
const router = express.Router();

// 公告
router.get('/', function (req, res) {
  res.render('bulletin/bulletin');
});

module.exports = router;