const download = require('download-git-repo')

function myDownload(url, projectName, { successCB, fallbackCB } = {}) {
  download('direct:' + url, projectName, function (err) {
    if (err) {
      fallbackCB && fallbackCB()
    } else {
      successCB && successCB()
    }
  })
}
module.exports = myDownload