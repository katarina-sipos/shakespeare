cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-sqlite.SQLitePlugin",
    "file": "plugins/cordova-plugin-sqlite/www/SQLitePlugin.js",
    "pluginId": "cordova-plugin-sqlite",
    "clobbers": [
      "window.sqlitePlugin",
      "cordova.plugins.sqlitePlugin"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-document-scanner.scan",
    "file": "plugins/cordova-plugin-document-scanner/www/scan.js",
    "pluginId": "cordova-plugin-document-scanner",
    "clobbers": [
      "scan"
    ]
  },
  {
    "id": "cordova-plugin-mobile-ocr.rectext",
    "file": "plugins/cordova-plugin-mobile-ocr/www/rectext.js",
    "pluginId": "cordova-plugin-mobile-ocr",
    "clobbers": [
      "textocr"
    ]
  },
  {
    "id": "cordova-plugin-network-information.network",
    "file": "plugins/cordova-plugin-network-information/www/network.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "navigator.connection",
      "navigator.network.connection"
    ]
  },
  {
    "id": "cordova-plugin-network-information.Connection",
    "file": "plugins/cordova-plugin-network-information/www/Connection.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "Connection"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.4",
  "cordova-plugin-sqlite": "1.0.3",
  "cordova-plugin-device": "2.0.3",
  "cordova-plugin-document-scanner": "4.2.1",
  "cordova-plugin-mobile-ocr": "3.1.1",
  "cordova-plugin-network-information": "2.0.2",
  "cordova-plugin-dialogs": "2.0.2"
};
// BOTTOM OF METADATA
});