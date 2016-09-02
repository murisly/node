
var common = require('./controller/common');

module.exports = function(app) {
	app.get('/common', common.mul);
}