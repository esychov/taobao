'use strict';

var apiClient = require('./api/topClient.js').TopClient;
var dingtalkClient = require('./api/dingtalkClient.js').DingTalkClient;
var tmcClient = require('./tmc/tmcClient.js').TmcClient;

module.exports = {
    ApiClient: apiClient,
    TmcClient: tmcClient,
    DingTalkClient: dingtalkClient
};
