/**
 * Configuration variables. These can be overridden in the per-system config file 
 */

var log = require('winston');
var winstonSNS = require('winston-sns');

var settings = {
  // Port that the web server will bind to
  web_port: 8081,
  
  // Database settings
  db_user: 'echoprintdb',
  db_pass: 'ech2ech2',
  db_database: 'ebdb',
  db_host: 'aa18ws93tmlyzm3.cluajokydo8o.us-east-1.rds.amazonaws.com',
  db_port: '3306',
  
  // Set this to a system username to drop root privileges
  run_as_user: '',
  
  // Filename to log to
  log_path: __dirname + '/logs/echoprint.log',
  // Log level. Valid values are debug, info, warn, error
  log_level: 'debug',
  
  // Minimum number of codes that must be matched to consider a fingerprint
  // match valid
  code_threshold: 10,
  
  // Supported version of echoprint-codegen codes
  codever: '4.12'
};


// Now that we've dropped root privileges (if requested), setup file logging
// NOTE: Any messages logged before this will go to the console only

  //log.add(log.transports.File, { level: 'debug', filename: __dirname + '/logs/echoprint.log' }); 
  //log.remove(log.transports.Console);

// Override default settings with any local settings


module.exports = settings;
