const express = require('express');
const router = express.Router();
const qiniu = require('qiniu');
const config = {
  AK: 'AK',
  SK: 'SK'
}

const mac = new qiniu.auth.digest.Mac(config.AK, config.SK);

/*换取七牛云token*/
router.get('/', (req, res, next) => {
  const options = {
    scope: 'lzy1043',
    returnBody: '{"key": "${fname}","hash": "${etag}"}',
    persistentOps: 'imageMogr2/format/webp|saveas/' + new Buffer('blog:${fname}').toString('base64'),
    savekey: "${fname}"
  }
  const putPolicy = new qiniu.rs.PutPolicy(options);
  const uploadToken=putPolicy.uploadToken(mac);
  res.json({
    code: 0,
    data: {
      token: uploadToken
    }
  })
})

module.exports = router;