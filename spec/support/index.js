/** Variaveis de ambiente */
const path =  require('path');
process.env.rootDir = path.join(__dirname, '');

var Jasmine = require('jasmine');
var jasmine = new Jasmine();

var { sequelize } = require('../..//modules/orm/sequelize');
sequelize.sync();

var CustomReporter = require('./myCustomReporter');
jasmine.addReporter(CustomReporter);
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();