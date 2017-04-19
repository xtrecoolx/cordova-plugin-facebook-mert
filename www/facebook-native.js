var exec = require('cordova/exec')

exports.getLoginStatus = function getLoginStatus (s, f) {
  exec(s, f, 'FacebookSDKPlugin', 'getLoginStatus', [])
}

exports.showDialog = function showDialog (options, s, f) {
  exec(s, f, 'FacebookSDKPlugin', 'showDialog', [options])
}

exports.login = function login (permissions, s, f) {
  exec(s, f, 'FacebookSDKPlugin', 'login', permissions)
}

exports.logEvent = function logEvent (name, params, valueToSum, s, f) {
  // Prevent NSNulls getting into iOS, messes up our [command.argument count]
  if (!params && !valueToSum) {
    exec(s, f, 'FacebookSDKPlugin', 'logEvent', [name])
  } else if (params && !valueToSum) {
    exec(s, f, 'FacebookSDKPlugin', 'logEvent', [name, params])
  } else if (params && valueToSum) {
    exec(s, f, 'FacebookSDKPlugin', 'logEvent', [name, params, valueToSum])
  } else {
    f('Invalid arguments')
  }
}

exports.logPurchase = function logPurchase (value, currency, s, f) {
  exec(s, f, 'FacebookSDKPlugin', 'logPurchase', [value, currency])
}

exports.getAccessToken = function getAccessToken (s, f) {
  exec(s, f, 'FacebookSDKPlugin', 'getAccessToken', [])
}

exports.logout = function logout (s, f) {
  exec(s, f, 'FacebookSDKPlugin', 'logout', [])
}

exports.api = function api (graphPath, permissions, s, f) {
  permissions = permissions || []
  exec(s, f, 'FacebookSDKPlugin', 'graphApi', [graphPath, permissions])
}

exports.appInvite = function appLinks (options, s, f) {
  options = options || {}
  exec(s, f, 'FacebookSDKPlugin', 'appInvite', [options])
}

exports.getDeferredApplink = function (s, f) {
  exec(s, f, 'FacebookSDKPlugin', 'getDeferredApplink', [])
}

exports.activateApp = function (s, f) {
  exec(s, f, 'FacebookSDKPlugin', 'activateApp', [])
}
