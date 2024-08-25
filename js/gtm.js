// Copyright 2012 Google Inc. All rights reserved.

(function(w, g) {
  w[g] = w[g] || {};
  w[g].e = function(s) {
    return eval(s);
  };
})(window, 'google_tag_manager');

(function() {

  var data = {
    "resource": {
      "version": "16",

      "macros": [{
        "function": "__e"
      }, {
        "function": "__c",
        "vtp_value": "G-HQ0XF0HFCC"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "ecommerce.items"
      }, {
        "function": "__c",
        "vtp_value": "VND"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "ecommerce.value"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "ecommerce.payment_type"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "ecommerce.shipping_tier"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "ecommerce.transaction_id"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "ecommerce.tax"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "ecommerce.shipping"
      }, {
        "function": "__u",
        "vtp_component": "PATH",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__gas",
        "vtp_cookieDomain": "auto",
        "vtp_doubleClick": false,
        "vtp_setTrackerName": false,
        "vtp_useDebugVersion": false,
        "vtp_useHashAutoLink": false,
        "vtp_decorateFormsAutoLink": false,
        "vtp_enableLinkId": false,
        "vtp_enableEcommerce": false,
        "vtp_trackingId": "UA-120672636-1",
        "vtp_enableRecaptchaOption": false,
        "vtp_enableUaRlsa": false,
        "vtp_enableUseInternalVersion": false,
        "vtp_enableGA4Schema": true
      }, {
        "function": "__dbg"
      }, {
        "function": "__cvt_68686450_13",
        "vtp_variableName": "dlv - ecommerce.impressions",
        "vtp_valueType": "array",
        "vtp_debugMode": ["macro", 12],
        "vtp_dataLayerKey": "ecommerce.impressions",
        "vtp_required": false
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 13], 8, 16], ";return b.map(function(a){return{item_id:a.id,item_variant_id:a.variant_id,item_product_id:a.product_id,index:a.position,item_list_name:a.list,item_list_id:a.list,item_name:a.name,item_brand:a.brand,item_category:a.category,price:a.price}})})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "ecommerce.click.products"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 15], 8, 16], ";return b.map(function(a){return{item_id:a.id,item_variant_id:impression.variant_id,item_product_id:impression.product_id,index:a.position,item_list_name:a.list,item_list_id:a.list,item_name:a.name,item_brand:a.brand,item_category:a.category,price:a.price}})})();"]
      }, {
        "function": "__cvt_68686450_13",
        "vtp_variableName": "dlv - Remove From Cart - Array",
        "vtp_valueType": "array",
        "vtp_debugMode": ["macro", 12],
        "vtp_dataLayerKey": "ecommerce.remove.products",
        "vtp_required": false
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 17], 8, 16], ";return b.map(function(a){return{item_id:a.id,item_variant_id:a.variant_id,item_product_id:a.product_id,item_name:a.name,item_list_name:a.list,item_list_id:a.list,item_brand:a.brand,item_category:a.category,item_variant:a.variant,quantity:a.quantity,price:a.price}})})();"]
      }, {
        "function": "__cvt_68686450_13",
        "vtp_variableName": "dlv - Product View - Details Array",
        "vtp_valueType": "array",
        "vtp_debugMode": ["macro", 12],
        "vtp_dataLayerKey": "ecommerce.detail.products",
        "vtp_required": true
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 19], 8, 16], ";return b.map(function(a){return{item_id:a.id,item_variant_id:a.variant_id,item_product_id:a.product_id,item_name:a.name,item_list_name:a.list,item_list_id:a.list,item_brand:a.brand,item_category:a.category,item_variant:a.variant,price:a.price}})})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "guest",
        "vtp_name": "user_properties.visitor_type"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user_properties.customer_total_spent"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user_properties.customer_order_count"
      }, {
        "function": "__cvt_68686450_13",
        "vtp_variableName": "dlv - Add to Cart - Add Array",
        "vtp_valueType": "array",
        "vtp_debugMode": ["macro", 12],
        "vtp_dataLayerKey": "ecommerce.add.products",
        "vtp_required": true
      }, {
        "function": "__cvt_68686450_13",
        "vtp_variableName": "dlv - Thank You Page - Order Revenue",
        "vtp_valueType": "value",
        "vtp_debugMode": ["macro", 12],
        "vtp_dataLayerKey": "ecommerce.purchase.actionField.revenue",
        "vtp_required": true
      }, {
        "function": "__cvt_68686450_13",
        "vtp_variableName": "dlv - ecommerce.checkout.products",
        "vtp_valueType": "array",
        "vtp_debugMode": ["macro", 12],
        "vtp_dataLayerKey": "ecommerce.checkout.products",
        "vtp_required": false
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 26], 8, 16], ";return b.map(function(a){return{item_id:a.id,item_variant_id:a.variant_id,item_product_id:a.product_id,item_name:a.name,item_list_name:a.list,item_list_id:a.list,item_brand:a.brand,item_category:a.category,item_variant:a.variant,quantity:a.quantity,price:a.price}})})();"]
      }, {
        "function": "__cvt_68686450_13",
        "vtp_variableName": "dlv - Thank You Page - ecommerce.purchase.products",
        "vtp_valueType": "array",
        "vtp_debugMode": ["macro", 12],
        "vtp_dataLayerKey": "ecommerce.purchase.products",
        "vtp_required": true
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "cart_total"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 24], 8, 16], ";return b.map(function(a){return{item_id:a.id,item_variant_id:a.variant_id,item_product_id:a.product_id,item_name:a.name,item_list_name:a.list,item_list_id:a.list,item_brand:a.brand,item_category:a.category,item_variant:a.variant,quantity:a.quantity,price:a.price}})})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "ecommerce.purchase.actionField.shipping"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 13], 8, 16], ";return b.map(function(a){return{item_id:a.id,item_variant_id:a.variant_id,item_product_id:a.product_id,item_name:a.name,item_list_name:a.list,item_list_id:a.list,item_brand:a.brand,item_category:a.category,item_variant:a.variant,quantity:a.quantity,price:a.price}})})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "ecommerce.purchase.actionField.coupon"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 28], 8, 16], ";return b.map(function(a){return{item_id:a.id,item_variant_id:a.variant_id,item_product_id:a.product_id,item_name:a.name,item_list_name:a.list,item_list_id:a.list,item_brand:a.brand,item_category:a.category,item_variant:a.variant,quantity:a.quantity,price:a.price}})})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user_properties.customer_id"
      }, {
        "function": "__u",
        "vtp_component": "URL",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__u",
        "vtp_component": "HOST",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__f",
        "vtp_component": "URL"
      }, {
        "function": "__e"
      }],
      "tags": [{
        "function": "__googtag",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_tagId": ["macro", 1],
        "vtp_configSettingsTable": ["list", ["map", "parameter", "send_page_view", "parameterValue", "true"]],
        "tag_id": 31
      }, {
        "function": "__gaawe",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_sendEcommerceData": false,
        "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 2]], ["map", "parameter", "currency", "parameterValue", ["macro", 3]], ["map", "parameter", "value", "parameterValue", ["macro", 4]]],
        "vtp_eventName": "view_item",
        "vtp_measurementIdOverride": ["macro", 1],
        "vtp_enableUserProperties": true,
        "vtp_enableMoreSettingsOption": true,
        "vtp_enableEuid": false,
        "vtp_migratedToV2": true,
        "vtp_demoV2": false,
        "tag_id": 33
      }, {
        "function": "__paused",
        "vtp_originalTagType": "gaawe",
        "tag_id": 37
      }, {
        "function": "__gaawe",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_sendEcommerceData": false,
        "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 2]], ["map", "parameter", "currency", "parameterValue", ["macro", 3]], ["map", "parameter", "value", "parameterValue", ["macro", 4]]],
        "vtp_eventName": "add_to_cart",
        "vtp_measurementIdOverride": ["macro", 1],
        "vtp_enableUserProperties": true,
        "vtp_enableMoreSettingsOption": true,
        "vtp_enableEuid": false,
        "vtp_migratedToV2": true,
        "vtp_demoV2": false,
        "tag_id": 51
      }, {
        "function": "__gaawe",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_sendEcommerceData": false,
        "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 2]], ["map", "parameter", "currency", "parameterValue", ["macro", 3]], ["map", "parameter", "value", "parameterValue", ["macro", 4]]],
        "vtp_eventName": "remove_from_cart",
        "vtp_measurementIdOverride": ["macro", 1],
        "vtp_enableUserProperties": true,
        "vtp_enableMoreSettingsOption": true,
        "vtp_enableEuid": false,
        "vtp_migratedToV2": true,
        "vtp_demoV2": false,
        "tag_id": 53
      }, {
        "function": "__gaawe",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_sendEcommerceData": false,
        "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 2]], ["map", "parameter", "currency", "parameterValue", ["macro", 3]], ["map", "parameter", "value", "parameterValue", ["macro", 4]], ["map", "parameter", "payment_type", "parameterValue", ["macro", 5]]],
        "vtp_eventName": "add_payment_info",
        "vtp_measurementIdOverride": ["macro", 1],
        "vtp_enableUserProperties": true,
        "vtp_enableMoreSettingsOption": true,
        "vtp_enableEuid": false,
        "vtp_migratedToV2": true,
        "vtp_demoV2": false,
        "tag_id": 56
      }, {
        "function": "__paused",
        "vtp_originalTagType": "gaawe",
        "tag_id": 58
      }, {
        "function": "__gaawe",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_sendEcommerceData": false,
        "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 2]], ["map", "parameter", "currency", "parameterValue", ["macro", 3]], ["map", "parameter", "value", "parameterValue", ["macro", 4]], ["map", "parameter", "shipping_tier", "parameterValue", ["macro", 6]]],
        "vtp_eventName": "add_shipping_info",
        "vtp_measurementIdOverride": ["macro", 1],
        "vtp_enableUserProperties": true,
        "vtp_enableMoreSettingsOption": true,
        "vtp_enableEuid": false,
        "vtp_migratedToV2": true,
        "vtp_demoV2": false,
        "tag_id": 60
      }, {
        "function": "__gaawe",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_sendEcommerceData": false,
        "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 2]], ["map", "parameter", "currency", "parameterValue", ["macro", 3]], ["map", "parameter", "transaction_id", "parameterValue", ["macro", 7]], ["map", "parameter", "value", "parameterValue", ["macro", 4]], ["map", "parameter", "tax", "parameterValue", ["macro", 8]], ["map", "parameter", "shipping", "parameterValue", ["macro", 9]]],
        "vtp_eventName": "purchase",
        "vtp_measurementIdOverride": ["macro", 1],
        "vtp_enableUserProperties": true,
        "vtp_enableMoreSettingsOption": true,
        "vtp_enableEuid": false,
        "vtp_migratedToV2": true,
        "vtp_demoV2": false,
        "tag_id": 66
      }, {
        "function": "__gaawe",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_sendEcommerceData": false,
        "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 2]], ["map", "parameter", "item_list_name", "parameterValue", ["macro", 10]], ["map", "parameter", "item_list_id", "parameterValue", ["macro", 10]]],
        "vtp_eventName": "view_item_list",
        "vtp_measurementIdOverride": ["macro", 1],
        "vtp_enableUserProperties": true,
        "vtp_enableMoreSettingsOption": true,
        "vtp_enableEuid": false,
        "vtp_migratedToV2": true,
        "vtp_demoV2": false,
        "tag_id": 67
      }, {
        "function": "__paused",
        "vtp_originalTagType": "gaawe",
        "tag_id": 69
      }, {
        "function": "__gaawe",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_sendEcommerceData": false,
        "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 2]], ["map", "parameter", "item_list_name", "parameterValue", ["macro", 10]], ["map", "parameter", "item_list_id", "parameterValue", ["macro", 10]]],
        "vtp_eventName": "select_item",
        "vtp_measurementIdOverride": ["macro", 1],
        "vtp_enableUserProperties": true,
        "vtp_enableMoreSettingsOption": true,
        "vtp_enableEuid": false,
        "vtp_migratedToV2": true,
        "vtp_demoV2": false,
        "tag_id": 70
      }, {
        "function": "__gaawe",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_sendEcommerceData": false,
        "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 2]], ["map", "parameter", "currency", "parameterValue", ["macro", 3]], ["map", "parameter", "value", "parameterValue", ["macro", 4]]],
        "vtp_eventName": "view_cart",
        "vtp_measurementIdOverride": ["macro", 1],
        "vtp_enableUserProperties": true,
        "vtp_enableMoreSettingsOption": true,
        "vtp_enableEuid": false,
        "vtp_migratedToV2": true,
        "vtp_demoV2": false,
        "tag_id": 71
      }, {
        "function": "__paused",
        "vtp_originalTagType": "gaawe",
        "tag_id": 74
      }, {
        "function": "__gaawe",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_sendEcommerceData": false,
        "vtp_eventSettingsTable": ["list", ["map", "parameter", "items", "parameterValue", ["macro", 2]], ["map", "parameter", "currency", "parameterValue", ["macro", 3]], ["map", "parameter", "value", "parameterValue", ["macro", 4]]],
        "vtp_eventName": "begin_checkout",
        "vtp_measurementIdOverride": ["macro", 1],
        "vtp_enableUserProperties": true,
        "vtp_enableMoreSettingsOption": true,
        "vtp_enableEuid": false,
        "vtp_migratedToV2": true,
        "vtp_demoV2": false,
        "tag_id": 75
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": "\u003Cmeta name=\"google-adsense-account\" content=\"ca-pub-9697073537239996\"\u003E\n",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 82
      }],
      "predicates": [{
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.js"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "dl_view_item"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "dl_sign_up"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "dl_add_to_cart"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "dl_remove_from_cart"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "dl_add_payment_info"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "dl_login"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "dl_add_shipping_info"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "dl_purchase"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "dl_view_item_list"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "dl_subscribe"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "dl_select_item"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "dl_view_cart"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "dl_search_results"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "dl_begin_checkout"
      }],
      "rules": [[["if", 0], ["add", 0, 15]], [["if", 1], ["add", 1]], [["if", 2], ["add", 2]], [["if", 3], ["add", 3]], [["if", 4], ["add", 4]], [["if", 5], ["add", 5]], [["if", 6], ["add", 6]], [["if", 7], ["add", 7]], [["if", 8], ["add", 8]], [["if", 9], ["add", 9]], [["if", 10], ["add", 10]], [["if", 11], ["add", 11]], [["if", 12], ["add", 12]], [["if", 13], ["add", 13]], [["if", 14], ["add", 14]]]
    },
    "runtime": [[50, "__cvt_68686450_13", [46, "a"], [52, "b", ["require", "logToConsole"]], [52, "c", ["require", "getType"]], [52, "d", ["require", "copyFromDataLayer"]], [52, "e", ["require", "createQueue"]], [52, "f", "1.1"], [52, "g", ["e", "elevar_gtm_errors"]], [52, "h", [51, "", [7, "t", "u"], [36, [2, [2, [15, "u"], "split", [7, "."]], "reduce", [7, [51, "", [7, "v", "w"], [36, [16, [15, "v"], [15, "w"]]]], [15, "t"]]]]]], [52, "i", [51, "", [7, "t", "u", "v", "w"], [36, [51, "", [7, "x", "y", "z"], ["b", "GTM Error: ", [8, "version", [15, "f"], "eventName", [15, "t"], "eventId", [15, "u"], "dataLayerKey", [15, "v"], "variableName", [15, "w"], "error", [8, "value", [15, "x"], "condition", [15, "y"], "conditionValue", [15, "z"]]]], ["g", [8, "version", [15, "f"], "eventName", [15, "t"], "eventId", [15, "u"], "dataLayerKey", [15, "v"], "variableName", [15, "w"], "error", [8, "message", [0, [0, [0, [0, [0, [0, [15, "v"], "="], [15, "x"]], " "], [15, "y"]], " "], [15, "z"]], "value", [15, "x"], "condition", [15, "y"], "conditionValue", [15, "z"]]]]]]]], [52, "j", ["i", ["d", "event"], [17, [15, "a"], "gtmEventId"], [17, [15, "a"], "dataLayerKey"], [17, [15, "a"], "variableName"]]], [52, "k", [51, "", [7, "t", "u", "v"], [38, [15, "u"], [46, "equals", "contains", "startsWith", "endsWith", "notEqual", "notContain", "notStartWith", "notEndWith", "hasLengthOf", "isType", "notType"], [46, [5, [46, [22, [21, [15, "t"], [15, "v"]], [46, [36, false]]], [36, true]]], [5, [46, [22, [21, ["c", [15, "t"]], "string"], [46, [3, "t", [2, [15, "t"], "toString", [7]]]]], [22, [20, [2, [15, "t"], "indexOf", [7, [15, "v"]]], [27, 1]], [46, [36, false]]], [36, true]]], [5, [46, [22, [21, ["c", [15, "t"]], "string"], [46, [3, "t", [2, [15, "t"], "toString", [7]]]]], [22, [21, [2, [15, "t"], "indexOf", [7, [15, "v"]]], 0], [46, [36, false]]], [36, true]]], [5, [46, [22, [21, ["c", [15, "t"]], "string"], [46, [3, "t", [2, [15, "t"], "toString", [7]]]]], [22, [21, [0, [2, [15, "t"], "lastIndexOf", [7, [15, "v"]]], [17, [15, "v"], "length"]], [17, [15, "t"], "length"]], [46, [36, false]]], [36, true]]], [5, [46, [22, [20, [15, "v"], "undefined"], [46, [22, [20, [15, "t"], [44]], [46, [36, false]]]], [46, [22, [20, [15, "t"], [15, "v"]], [46, [36, false]]]]], [36, true]]], [5, [46, [22, [21, ["c", [15, "t"]], "string"], [46, [3, "t", [2, [15, "t"], "toString", [7]]]]], [22, [18, [2, [15, "t"], "indexOf", [7, [15, "v"]]], [27, 1]], [46, [36, false]]], [36, true]]], [5, [46, [22, [21, ["c", [15, "t"]], "string"], [46, [3, "t", [2, [15, "t"], "toString", [7]]]]], [22, [20, [2, [15, "t"], "indexOf", [7, [15, "v"]]], 0], [46, [36, false]]], [36, true]]], [5, [46, [22, [21, ["c", [15, "t"]], "string"], [46, [3, "t", [2, [15, "t"], "toString", [7]]]]], [22, [20, [0, [2, [15, "t"], "lastIndexOf", [7, [15, "v"]]], [17, [15, "v"], "length"]], [17, [15, "t"], "length"]], [46, [36, false]]], [36, true]]], [5, [46, [22, [21, ["c", [15, "t"]], "string"], [46, [3, "t", [2, [15, "t"], "toString", [7]]]]], [22, [21, [17, [15, "t"], "length"], [15, "v"]], [46, [36, false]]], [36, true]]], [5, [46, [22, [21, ["c", [15, "t"]], [15, "v"]], [46, [36, false]]], [36, true]]], [5, [46, [22, [20, ["c", [15, "t"]], [15, "v"]], [46, [36, false]]], [36, true]]], [9, [46, [36, true]]]]]]], [52, "l", [51, "", [7, "t", "u"], [22, [2, [7, "array", "object"], "some", [7, [51, "", [7, "v"], [36, [20, [15, "v"], ["c", [15, "t"]]]]]]], [46, ["j", [15, "t"], "is single value", "string or number"]], [46, [53, [41, "v"], [3, "v", 0], [63, [7, "v"], [23, [15, "v"], [17, [15, "u"], "length"]], [33, [15, "v"], [3, "v", [0, [15, "v"], 1]]], [46, [22, [28, ["k", [15, "t"], [17, [16, [15, "u"], [15, "v"]], "condition"], [17, [16, [15, "u"], [15, "v"]], "conditionValue"]]], [46, ["j", [15, "t"], [17, [16, [15, "u"], [15, "v"]], "condition"], [17, [16, [15, "u"], [15, "v"]], "conditionValue"]]]]]]]]]]], [52, "m", [51, "", [7, "t", "u"], [53, [41, "v"], [3, "v", 0], [63, [7, "v"], [23, [15, "v"], [17, [15, "u"], "length"]], [33, [15, "v"], [3, "v", [0, [15, "v"], 1]]], [46, [22, [28, ["k", [16, [15, "t"], [17, [16, [15, "u"], [15, "v"]], "key"]], [17, [16, [15, "u"], [15, "v"]], "condition"], [17, [16, [15, "u"], [15, "v"]], "conditionValue"]]], [46, ["j", [16, [15, "t"], [17, [16, [15, "u"], [15, "v"]], "key"]], [17, [16, [15, "u"], [15, "v"]], "condition"], [17, [16, [15, "u"], [15, "v"]], "conditionValue"]]]]]]]]], [52, "n", [51, "", [7, "t", "u"], [53, [41, "v"], [3, "v", 0], [63, [7, "v"], [23, [15, "v"], [17, [15, "t"], "length"]], [33, [15, "v"], [3, "v", [0, [15, "v"], 1]]], [46, [22, [20, [40, [16, [15, "t"], [15, "v"]]], "object"], [46, ["m", [16, [15, "t"], [15, "v"]], [15, "u"]]], [46, ["l", [16, [15, "t"], [15, "v"]], [15, "u"]]]]]]]]], [52, "o", [51, "", [7, "t", "u"], [22, [21, [2, [15, "u"], "indexOf", [7, ".0"]], [27, 1]], [46, [53, [52, "v", [2, [15, "u"], "split", [7, ".0"]]], [52, "w", ["t", [16, [15, "v"], 0]]], [22, [28, [15, "w"]], [46, [36, [15, "w"]]]], [36, [2, [2, [15, "v"], "slice", [7, 1]], "reduce", [7, [51, "", [7, "x", "y"], [22, [21, ["c", [15, "x"]], "array"], [46, [36, [44]]]], [22, [28, [15, "y"]], [46, [36, [16, [15, "x"], 0]]]], [36, ["h", [16, [15, "x"], 0], [2, [15, "y"], "slice", [7, 1]]]]], [15, "w"]]]]]]], [36, ["t", [15, "u"]]]]], [52, "p", [17, [15, "a"], "validationTable"]], [52, "q", [17, [15, "a"], "valueType"]], [52, "r", [17, [15, "a"], "debugMode"]], [52, "s", ["o", [15, "d"], [17, [15, "a"], "dataLayerKey"]]], [22, [28, [15, "r"]], [46, [22, [20, [40, [15, "s"]], "undefined"], [46, [22, [20, [17, [15, "a"], "required"], true], [46, ["j", [15, "s"], "required", "true"]]]], [46, [38, [15, "q"], [46, "value", "object", "array"], [46, [5, [46, [22, [28, [15, "p"]], [46, [4]]], ["l", [15, "s"], [15, "p"]], [4]]], [5, [46, [22, [21, ["c", [15, "s"]], "object"], [46, ["j", [15, "s"], "typeOf", "object"]]], [22, [28, [15, "p"]], [46, [4]]], ["m", [15, "s"], [15, "p"]], [4]]], [5, [46, [22, [21, ["c", [15, "s"]], "array"], [46, ["j", [15, "s"], "typeOf", "array"]]], [22, [28, [15, "p"]], [46, [4]]], ["n", [15, "s"], [15, "p"]], [4]]], [9, [46, [4]]]]]]]]], [36, [15, "s"]]]
 , [50, "__c", [46, "a"], [36, [17, [15, "a"], "value"]]]
 , [50, "__dbg", [46, "a"], [36, [17, [13, [41, "$0"], [3, "$0", ["require", "getContainerVersion"]], ["$0"]], "debugMode"]]]
 , [50, "__e", [46, "a"], [36, [13, [41, "$0"], [3, "$0", ["require", "internal.getEventData"]], ["$0", "event"]]]]
 , [50, "__googtag", [46, "a"], [50, "l", [46, "u", "v"], [66, "w", [2, [15, "b"], "keys", [7, [15, "v"]]], [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]]]], [50, "m", [46], [36, [7, [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"], [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"]]]], [50, "n", [46, "u"], [52, "v", ["m"]], [65, "w", [15, "v"], [46, [53, [52, "x", [16, [15, "u"], [15, "w"]]], [22, [15, "x"], [46, [36, [15, "x"]]]]]]], [36, [44]]], [52, "b", ["require", "Object"]], [52, "c", ["require", "createArgumentsQueue"]], [52, "d", [15, "__module_gtag"]], [52, "e", ["require", "internal.gtagConfig"]], [52, "f", ["require", "getType"]], [52, "g", ["require", "internal.loadGoogleTag"]], [52, "h", ["require", "logToConsole"]], [52, "i", ["require", "makeNumber"]], [52, "j", ["require", "makeString"]], [52, "k", ["require", "makeTableMap"]], [52, "o", [30, [17, [15, "a"], "tagId"], ""]], [22, [30, [21, ["f", [15, "o"]], "string"], [24, [2, [15, "o"], "indexOf", [7, "-"]], 0]], [46, ["h", [0, "Invalid Measurement ID for the GA4 Configuration tag: ", [15, "o"]]], [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]], [52, "q", [30, ["k", [30, [17, [15, "a"], "configSettingsTable"], [7]], "parameter", "parameterValue"], [8]]], ["l", [15, "p"], [15, "q"]], [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]], [52, "s", [30, ["k", [30, [17, [15, "a"], "eventSettingsTable"], [7]], "parameter", "parameterValue"], [8]]], ["l", [15, "r"], [15, "s"]], [52, "t", [15, "p"]], ["l", [15, "t"], [15, "r"]], [22, [30, [2, [15, "t"], "hasOwnProperty", [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]]], [17, [15, "a"], "userProperties"]], [46, [53, [52, "u", [30, [16, [15, "t"], [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]], [8]]], ["l", [15, "u"], [30, ["k", [30, [17, [15, "a"], "userProperties"], [7]], "name", "value"], [8]]], [43, [15, "t"], [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"], [15, "u"]]]]], [2, [15, "d"], "convertParameters", [7, [15, "t"], [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"], [51, "", [7, "u"], [36, [39, [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]], false, [28, [28, [15, "u"]]]]]]]], [2, [15, "d"], "convertParameters", [7, [15, "t"], [17, [15, "d"], "GOLD_NUMERIC_FIELDS"], [51, "", [7, "u"], [36, ["i", [15, "u"]]]]]], ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]], ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]], [2, [15, "a"], "gtmOnSuccess", [7]]]
 , [50, "__jsm", [46, "a"], [52, "b", ["require", "internal.executeJavascriptString"]], [22, [20, [17, [15, "a"], "javascript"], [44]], [46, [36]]], [36, ["b", [17, [15, "a"], "javascript"]]]]
 , [50, "__paused", [46, "a"], [2, [15, "a"], "gtmOnFailure", [7]]]
 , [52, "__module_gtag", [13, [41, "$0"], [3, "$0", [51, "", [7], [50, "a", [46], [50, "f", [46, "g", "h", "i"], [65, "j", [15, "h"], [46, [22, [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]], [46, [43, [15, "g"], [15, "j"], ["i", [16, [15, "g"], [15, "j"]]]]]]]]], [52, "b", ["require", "Object"]], [52, "c", [2, [15, "b"], "freeze", [7, [8, "EP_FIRST_PARTY_COLLECTION", "first_party_collection", "EP_SERVER_CONTAINER_URL", "server_container_url", "EP_TRANSPORT_URL", "transport_url", "EP_USER_PROPERTIES", "user_properties"]]]], [52, "d", [2, [15, "b"], "freeze", [7, [7, "allow_ad_personalization_signals", "allow_google_signals", "cookie_update", "ignore_referrer", "update", "first_party_collection", "send_page_view"]]]], [52, "e", [2, [15, "b"], "freeze", [7, [7, "cookie_expires", "event_timeout", "session_duration", "session_engaged_time", "engagement_time_msec"]]]], [36, [8, "SCHEMA", [15, "c"], "GOLD_BOOLEAN_FIELDS", [15, "d"], "GOLD_NUMERIC_FIELDS", [15, "e"], "convertParameters", [15, "f"]]]], [36, ["a"]]]], ["$0"]]]

],
    "entities": {
      "__c": {
        "2": true,
        "4": true
      },
      "__dbg": {
        "2": true
      },
      "__e": {
        "2": true,
        "4": true
      },
      "__googtag": {
        "1": 10
      }


    },
    "blob": {
      "1": "16"
    },
    "permissions": {
      "__cvt_68686450_13": {
        "logging": {
          "environments": "debug"
        },
        "read_data_layer": {
          "keyPatterns": ["ecommerce.*", "user_properties.*", "VariantPrice", "VisitorType", "orderEmail", "CustomerPhone", "CustomerLastName", "CustomerFirstName", "SearchTerms", "CustomerEmail", "visitorId", "visitorType", "CustomerId", "CustomerOrdersCount", "CustomerTotalSpent", "pageType", "cartTotal", "shopifyProductId", "VariantCompareAtPrice", "cartItems", "event", "discountTotalAmount", "discountTotalSavings", "CustomerCity", "CustomerZip", "CustomerAddress1", "CustomerAddress2", "CustomerCountryCode", "CustomerProvince", "CustomerOrdersCount", "cart_total"]
        },
        "access_globals": {
          "keys": [{
            "key": "elevar_gtm_errors",
            "read": true,
            "write": true,
            "execute": false
          }]
        }
      },
      "__c": {},
      "__dbg": {
        "read_container_data": {}
      },
      "__e": {
        "read_event_data": {
          "eventDataAccess": "specific",
          "keyPatterns": ["event"]
        }
      },
      "__googtag": {
        "logging": {
          "environments": "debug"
        },
        "access_globals": {
          "keys": [{
            "key": "gtag",
            "read": true,
            "write": true,
            "execute": true
          }, {
            "key": "dataLayer",
            "read": true,
            "write": true,
            "execute": false
          }]
        },
        "configure_google_tags": {
          "allowedTagIds": "any"
        },
        "load_google_tags": {
          "allowedTagIds": "any",
          "allowFirstPartyUrls": true,
          "allowedFirstPartyUrls": "any"
        }
      },
      "__jsm": {
        "unsafe_run_arbitrary_javascript": {}
      },
      "__paused": {}


    }

    ,
    "sandboxed_scripts": [
"__cvt_68686450_13"

]

      ,
    "security_groups": {
      "customScripts": [
"__jsm"

],
      "google": [
"__c"
,
"__dbg"
,
"__e"
,
"__googtag"

]


    }



  };




  var ca, da = function(a) {
      var b = 0;
      return function() {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        }
      }
    },
    ea = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = c.value;
      return a
    },
    fa = function(a) {
      for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
        var d = b[c];
        if (d && d.Math == Math) return d
      }
      throw Error("Cannot find global object");
    },
    ja = fa(this),
    la = function(a, b) {
      if (b) a: {
        for (var c = ja, d = a.split("."), e = 0; e < d.length - 1; e++) {
          var f = d[e];
          if (!(f in c)) break a;
          c = c[f]
        }
        var g = d[d.length - 1],
          h = c[g],
          m = b(h);m != h && m != null && ea(c, g, {
          configurable: !0,
          writable: !0,
          value: m
        })
      }
    },
    ma = function(a) {
      return a.raw = a
    },
    na = function(a, b) {
      a.raw = b;
      return a
    },
    pa = function(a) {
      var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return {
        next: da(a)
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    qa = function(a) {
      for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
      return c
    },
    ra = function(a) {
      return a instanceof Array ? a : qa(pa(a))
    },
    sa = typeof Object.assign == "function" ? Object.assign : function(a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (d)
          for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
      }
      return a
    };
  la("Object.assign", function(a) {
    return a || sa
  });
  var ta = typeof Object.create == "function" ? Object.create : function(a) {
      var b = function() {};
      b.prototype = a;
      return new b
    },
    ua;
  if (typeof Object.setPrototypeOf == "function") ua = Object.setPrototypeOf;
  else {
    var va;
    a: {
      var wa = {
          a: !0
        },
        xa = {};
      try {
        xa.__proto__ = wa;
        va = xa.a;
        break a
      } catch (a) {}
      va = !1
    }
    ua = va ? function(a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a
    } : null
  }
  var ya = ua,
    za = function(a, b) {
      a.prototype = ta(b.prototype);
      a.prototype.constructor = a;
      if (ya) ya(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d)
            } else a[c] = b[c];
      a.Xn = b.prototype
    },
    Aa = function() {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
      return b
    };
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var Ca = this || self,
    Da = function(a, b, c) {
      return a.call.apply(a.bind, arguments)
    },
    Ea = function(a, b, c) {
      if (!a) throw Error();
      if (arguments.length > 2) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e)
        }
      }
      return function() {
        return a.apply(b, arguments)
      }
    },
    Fa = function(a, b, c) {
      Fa = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Da : Ea;
      return Fa.apply(null, arguments)
    },
    Ga =
    function(a) {
      return a
    };
  var Ha = function(a, b) {
    this.type = a;
    this.data = b
  };
  var Ia = function() {
    this.m = {};
    this.J = {}
  };
  ca = Ia.prototype;
  ca.get = function(a) {
    return this.m["dust." + a]
  };
  ca.set = function(a, b) {
    a = "dust." + a;
    this.J.hasOwnProperty(a) || (this.m[a] = b)
  };
  ca.Rh = function(a, b) {
    this.set(a, b);
    this.J["dust." + a] = !0
  };
  ca.has = function(a) {
    return this.m.hasOwnProperty("dust." + a)
  };
  ca.xf = function(a) {
    a = "dust." + a;
    this.J.hasOwnProperty(a) || delete this.m[a]
  };
  var La = function() {};
  La.prototype.reset = function() {};
  var Ma = function(a, b) {
    this.R = a;
    this.parent = b;
    this.m = this.F = void 0;
    this.M = function(c, d, e) {
      return c.apply(d, e)
    };
    this.values = new Ia
  };
  Ma.prototype.add = function(a, b) {
    Na(this, a, b, !1)
  };
  var Na = function(a, b, c, d) {
    d ? a.values.Rh(b, c) : a.values.set(b, c)
  };
  Ma.prototype.set = function(a, b) {
    !this.values.has(a) && this.parent && this.parent.has(a) ? this.parent.set(a, b) : this.values.set(a, b)
  };
  Ma.prototype.get = function(a) {
    return this.values.has(a) ? this.values.get(a) : this.parent ? this.parent.get(a) : void 0
  };
  Ma.prototype.has = function(a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a))
  };
  var Oa = function(a) {
    var b = new Ma(a.R, a);
    a.F && (b.F = a.F);
    b.M = a.M;
    b.m = a.m;
    return b
  };
  Ma.prototype.J = function() {
    return this.R
  };

  function Pa(a, b) {
    for (var c, d = 0; d < b.length && !(c = Qa(a, b[d]), c instanceof Ha); d++);
    return c
  }

  function Qa(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || typeof c.invoke !== "function") throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)))
    } catch (e) {
      var d = a.F;
      d && d(e, b.context ? {
        id: b[0],
        line: b.context.line
      } : null);
      throw e;
    }
  };
  var Ra = function() {
    this.M = new La;
    this.m = new Ma(this.M)
  };
  Ra.prototype.J = function() {
    return this.M
  };
  Ra.prototype.execute = function(a) {
    var b = Array.prototype.slice.call(arguments, 0);
    return this.F(b)
  };
  Ra.prototype.F = function() {
    for (var a, b = 0; b < arguments.length; b++) a = Qa(this.m, arguments[b]);
    return a
  };
  Ra.prototype.R = function(a) {
    var b = Oa(this.m);
    b.m = a;
    for (var c, d = 1; d < arguments.length; d++) c = Qa(b, arguments[d]);
    return c
  };
  var Sa = function() {
    Ia.call(this);
    this.F = !1
  };
  za(Sa, Ia);
  var Ta = function(a, b) {
    var c = [],
      d;
    for (d in a.m)
      if (a.m.hasOwnProperty(d)) switch (d = d.substr(5), b) {
        case 1:
          c.push(d);
          break;
        case 2:
          c.push(a.get(d));
          break;
        case 3:
          c.push([d, a.get(d)])
      }
    return c
  };
  Sa.prototype.set = function(a, b) {
    this.F || Ia.prototype.set.call(this, a, b)
  };
  Sa.prototype.Rh = function(a, b) {
    this.F || Ia.prototype.Rh.call(this, a, b)
  };
  Sa.prototype.xf = function(a) {
    this.F || Ia.prototype.xf.call(this, a)
  };
  Sa.prototype.Nb = function() {
    this.F = !0
  };
  /*
   jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
  */
  var Ua = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Va = function(a) {
      if (a == null) return String(a);
      var b = Ua.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object"
    },
    Xa = function(a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b)
    },
    Ya = function(a) {
      if (!a || Va(a) != "object" || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !Xa(a, "constructor") && !Xa(a.constructor.prototype, "isPrototypeOf")) return !1
      } catch (c) {
        return !1
      }
      for (var b in a);
      return b === void 0 ||
        Xa(a, b)
    },
    k = function(a, b) {
      var c = b || (Va(a) == "array" ? [] : {}),
        d;
      for (d in a)
        if (Xa(a, d)) {
          var e = a[d];
          Va(e) == "array" ? (Va(c[d]) != "array" && (c[d] = []), c[d] = k(e, c[d])) : Ya(e) ? (Ya(c[d]) || (c[d] = {}), c[d] = k(e, c[d])) : c[d] = e
        } return c
    };

  function Za(a) {
    if (a == void 0 || Array.isArray(a) || Ya(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0
    }
    return !1
  }

  function $a(a) {
    return typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0 || typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a)
  };
  var ab = function(a) {
    this.m = [];
    this.J = !1;
    this.F = new Sa;
    a = a || [];
    for (var b in a) a.hasOwnProperty(b) && ($a(b) ? this.m[Number(b)] = a[Number(b)] : this.F.set(b, a[b]))
  };
  ca = ab.prototype;
  ca.toString = function(a) {
    if (a && a.indexOf(this) >= 0) return "";
    for (var b = [], c = 0; c < this.m.length; c++) {
      var d = this.m[c];
      d === null || d === void 0 ? b.push("") : d instanceof ab ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d))
    }
    return b.join(",")
  };
  ca.set = function(a, b) {
    if (!this.J)
      if (a === "length") {
        if (!$a(b)) throw Error("RangeError: Length property must be a valid integer.");
        this.m.length = Number(b)
      } else $a(a) ? this.m[Number(a)] = b : this.F.set(a, b)
  };
  ca.get = function(a) {
    return a === "length" ? this.length() : $a(a) ? this.m[Number(a)] : this.F.get(a)
  };
  ca.length = function() {
    return this.m.length
  };
  ca.fc = function() {
    for (var a = Ta(this.F, 1), b = 0; b < this.m.length; b++) a.push(b + "");
    return new ab(a)
  };
  var bb = function(a, b) {
    $a(b) ? delete a.m[Number(b)] : a.F.xf(b)
  };
  ca = ab.prototype;
  ca.pop = function() {
    return this.m.pop()
  };
  ca.push = function() {
    return this.m.push.apply(this.m, Array.prototype.slice.call(arguments))
  };
  ca.shift = function() {
    return this.m.shift()
  };
  ca.splice = function(a, b) {
    return new ab(this.m.splice.apply(this.m, arguments))
  };
  ca.unshift = function() {
    return this.m.unshift.apply(this.m, Array.prototype.slice.call(arguments))
  };
  ca.has = function(a) {
    return $a(a) && this.m.hasOwnProperty(a) || this.F.has(a)
  };
  ca.Nb = function() {
    this.J = !0;
    Object.freeze(this.m);
    this.F.Nb()
  };

  function cb(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b
  };
  var db = function() {
    Sa.call(this)
  };
  za(db, Sa);
  db.prototype.fc = function() {
    return new ab(Ta(this, 1))
  };
  var eb = function(a) {
    for (var b = Ta(a, 3), c = new ab, d = 0; d < b.length; d++) {
      var e = new ab(b[d]);
      c.push(e)
    }
    return c
  };

  function fb() {
    for (var a = gb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b
  }

  function hb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + "."
  }
  var gb, ib;

  function jb(a) {
    gb = gb || hb();
    ib = ib || fb();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        h = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = (f & 3) << 4 | g >> 4,
        p = (g & 15) << 2 | h >> 6,
        q = h & 63;
      e || (q = 64, d || (p = 64));
      b.push(gb[m], gb[n], gb[p], gb[q])
    }
    return b.join("")
  }

  function kb(a) {
    function b(m) {
      for (; d < a.length;) {
        var n = a.charAt(d++),
          p = ib[n];
        if (p != null) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
      }
      return m
    }
    gb = gb || hb();
    ib = ib || fb();
    for (var c = "", d = 0;;) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (h === 64 && e === -1) return c;
      c += String.fromCharCode(e << 2 | f >> 4);
      g !== 64 && (c += String.fromCharCode(f << 4 & 240 | g >> 2), h !== 64 && (c += String.fromCharCode(g << 6 & 192 | h)))
    }
  };
  var lb = {};

  function mb(a, b) {
    lb[a] = lb[a] || [];
    lb[a][b] = !0
  }

  function nb(a) {
    var b = lb[a];
    if (!b || b.length === 0) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++) e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
    d > 0 && c.push(String.fromCharCode(d));
    return jb(c.join("")).replace(/\.+$/, "")
  }

  function ob() {
    for (var a = [], b = lb.fdr || [], c = 0; c < b.length; c++) b[c] && a.push(c);
    return a.length > 0 ? a : void 0
  };

  function pb() {}

  function qb(a) {
    return typeof a === "function"
  }

  function l(a) {
    return typeof a === "string"
  }

  function rb(a) {
    return typeof a === "number" && !isNaN(a)
  }

  function sb(a) {
    return Array.isArray(a) ? a : [a]
  }

  function tb(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++)
        if (a[c] && b(a[c])) return a[c]
  }

  function ub(a, b) {
    if (!rb(a) || !rb(b) || a > b) a = 0, b = 2147483647;
    return Math.floor(Math.random() * (b - a + 1) + a)
  }

  function vb(a, b) {
    for (var c = new wb, d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++)
      if (c.get(b[e])) return !0;
    return !1
  }

  function z(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
  }

  function xb(a) {
    return !!a && (Object.prototype.toString.call(a) === "[object Arguments]" || Object.prototype.hasOwnProperty.call(a, "callee"))
  }

  function yb(a) {
    return Math.round(Number(a)) || 0
  }

  function zb(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a
  }

  function Ab(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b
  }

  function Bb(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : ""
  }

  function Cb() {
    return new Date(Date.now())
  }

  function Db() {
    return Cb().getTime()
  }
  var wb = function() {
    this.prefix = "gtm.";
    this.values = {}
  };
  wb.prototype.set = function(a, b) {
    this.values[this.prefix + a] = b
  };
  wb.prototype.get = function(a) {
    return this.values[this.prefix + a]
  };

  function Eb(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c
  }

  function Fb(a) {
    var b = a;
    return function() {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c()
        } catch (d) {}
      }
    }
  }

  function Gb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
  }

  function Hb(a, b) {
    for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c
  }

  function Ib(a, b) {
    return a.substring(0, b.length) === b
  }

  function Jb(a, b) {
    var c = G;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (b.indexOf(d) >= 0) return
    }
    return d
  }

  function Kb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c
  }
  var Lb = /^\w{1,9}$/;

  function Mb(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    z(a, function(d, e) {
      Lb.test(d) && e && c.push(d)
    });
    return c.join(b)
  }

  function Nb(a, b) {
    function c() {
      e && ++d === b && (e(), e = null, c.done = !0)
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c
  }

  function Ob(a) {
    if (a) {
      var b = a.split(",");
      if (b.length === 2 && b[0] === b[1]) return b[0]
    }
    return a
  };
  var Pb, Qb = function() {
    if (Pb === void 0) {
      var a = null,
        b = Ca.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", {
            createHTML: Ga,
            createScript: Ga,
            createScriptURL: Ga
          })
        } catch (c) {
          Ca.console && Ca.console.error(c.message)
        }
        Pb = a
      } else Pb = a
    }
    return Pb
  };
  var Rb = function(a) {
    this.m = a
  };
  Rb.prototype.toString = function() {
    return this.m + ""
  };
  var Sb = function(a) {
      return a instanceof Rb && a.constructor === Rb ? a.m : "type_error:TrustedResourceUrl"
    },
    Tb = {},
    Ub = function(a) {
      var b = a,
        c = Qb(),
        d = c ? c.createScriptURL(b) : b;
      return new Rb(d, Tb)
    };
  /*

   SPDX-License-Identifier: Apache-2.0
  */
  var Vb = ma([""]),
    Wb = na(["\x00"], ["\\0"]),
    Xb = na(["\n"], ["\\n"]),
    Yb = na(["\x00"], ["\\u0000"]);

  function Zb(a) {
    return a.toString().indexOf("`") === -1
  }
  Zb(function(a) {
    return a(Vb)
  }) || Zb(function(a) {
    return a(Wb)
  }) || Zb(function(a) {
    return a(Xb)
  }) || Zb(function(a) {
    return a(Yb)
  });
  var $b = function(a) {
    this.m = a
  };
  $b.prototype.toString = function() {
    return this.m
  };
  var ac = new $b("about:invalid#zClosurez");
  var bc = function(a) {
    this.fm = a
  };

  function cc(a) {
    return new bc(function(b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":"
    })
  }
  var dc = [cc("data"), cc("http"), cc("https"), cc("mailto"), cc("ftp"), new bc(function(a) {
    return /^[^:]*([/?#]|$)/.test(a)
  })];

  function ec(a, b) {
    b = b === void 0 ? dc : b;
    if (a instanceof $b) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof bc && d.fm(a)) return new $b(a)
    }
  }

  function fc(a) {
    var b;
    b = b === void 0 ? dc : b;
    return ec(a, b) || ac
  }
  var gc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

  function hc(a) {
    var b;
    if (a instanceof $b)
      if (a instanceof $b) b = a.m;
      else throw Error("");
    else b = gc.test(a) ? a : void 0;
    return b
  };
  var jc = function() {
    this.m = ic[0].toLowerCase()
  };
  jc.prototype.toString = function() {
    return this.m
  };
  var kc = Array.prototype.indexOf ? function(a, b) {
    return Array.prototype.indexOf.call(a, b, void 0)
  } : function(a, b) {
    if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++)
      if (c in a && a[c] === b) return c;
    return -1
  };
  var lc = {},
    mc = function(a) {
      this.m = a
    };
  mc.prototype.toString = function() {
    return this.m.toString()
  };

  function nc(a, b) {
    var c = [new jc];
    if (c.length === 0) throw Error("");
    var d = c.map(function(f) {
        var g;
        if (f instanceof jc) g = f.m;
        else throw Error("");
        return g
      }),
      e = b.toLowerCase();
    if (d.every(function(f) {
        return e.indexOf(f) !== 0
      })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
    a.setAttribute(b, "true")
  };

  function oc(a, b) {
    var c = hc(b);
    c !== void 0 && (a.action = c)
  };
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);

  function pc(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a
  };
  var G = window,
    H = document,
    qc = navigator,
    rc = function() {
      var a;
      try {
        a = qc.serviceWorker
      } catch (b) {
        return
      }
      return a
    },
    sc = H.currentScript,
    tc = sc && sc.src,
    uc = function(a, b) {
      var c = G[a];
      G[a] = c === void 0 ? b : c;
      return G[a]
    };

  function vc(a) {
    return (qc.userAgent || "").indexOf(a) !== -1
  }
  var wc = function(a, b) {
      b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
        a.readyState in {
          loaded: 1,
          complete: 1
        } && (a.onreadystatechange = null, b())
      })
    },
    xc = {
      async: 1,
      nonce: 1,
      onerror: 1,
      onload: 1,
      src: 1,
      type: 1
    },
    yc = {
      onload: 1,
      src: 1,
      width: 1,
      height: 1,
      style: 1
    };

  function zc(a, b, c) {
    b && z(b, function(d, e) {
      d = d.toLowerCase();
      c.hasOwnProperty(d) || a.setAttribute(d, e)
    })
  }
  var Ac = function(a, b, c, d, e) {
      var f = H.createElement("script");
      zc(f, d, xc);
      f.type = "text/javascript";
      f.async = d && d.async === !1 ? !1 : !0;
      var g;
      g = Ub(pc(a));
      f.src = Sb(g);
      var h, m, n, p = (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) == null ? void 0 : n.call(m, "script[nonce]");
      (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
      wc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = H.getElementsByTagName("script")[0] || H.body || H.head;
        q.parentNode.insertBefore(f,
          q)
      }
      return f
    },
    Bc = function() {
      if (tc) {
        var a = tc.toLowerCase();
        if (a.indexOf("https://") === 0) return 2;
        if (a.indexOf("http://") === 0) return 3
      }
      return 1
    },
    Cc = function(a, b, c, d, e) {
      var f;
      f = f === void 0 ? !0 : f;
      var g = e,
        h = !1;
      g || (g = H.createElement("iframe"), h = !0);
      zc(g, c, yc);
      d && z(d, function(n, p) {
        g.dataset[n] = p
      });
      f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
      a !== void 0 && (g.src = a);
      if (h) {
        var m = H.body && H.body.lastChild || H.body || H.head;
        m.parentNode.insertBefore(g, m)
      }
      wc(g, b);
      return g
    },
    Dc = function(a,
      b, c, d) {
      var e = new Image(1, 1);
      zc(e, d, {});
      e.onload = function() {
        e.onload = null;
        b && b()
      };
      e.onerror = function() {
        e.onerror = null;
        c && c()
      };
      e.src = a;
      return e
    },
    Ec = function(a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    },
    Fc = function(a, b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    },
    I = function(a) {
      G.setTimeout(a, 0)
    },
    Gc = function(a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    },
    Hc = function(a) {
      var b =
        a.innerText || a.textContent || "";
      b && b != " " && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b
    },
    Ic = function(a) {
      var b = H.createElement("div"),
        c = b,
        d, e = pc("A<div>" + a + "</div>"),
        f = Qb(),
        g = f ? f.createHTML(e) : e;
      d = new mc(g, lc);
      if (c.nodeType === 1) {
        var h = c.tagName;
        if (h === "SCRIPT" || h === "STYLE") throw Error("");
      }
      c.innerHTML = d instanceof mc && d.constructor === mc ? d.m : "type_error:SafeHtml";
      b = b.lastChild;
      for (var m = []; b.firstChild;) m.push(b.removeChild(b.firstChild));
      return m
    },
    Jc = function(a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement
      }
      return null
    },
    Kc = function(a) {
      var b;
      try {
        b = qc.sendBeacon && qc.sendBeacon(a)
      } catch (c) {
        mb("TAGGING", 15)
      }
      b || Dc(a)
    },
    Lc = function(a, b) {
      try {
        return qc.sendBeacon(a, b)
      } catch (c) {
        mb("TAGGING", 15)
      }
      return !1
    },
    Mc = {
      cache: "no-store",
      credentials: "include",
      keepalive: !0,
      method: "POST",
      mode: "no-cors",
      redirect: "follow"
    },
    Nc = function(a, b, c) {
      if ("fetch" in G) {
        var d =
          Object.assign({}, Mc);
        b && (d.body = b);
        c && (c.attributionReporting && (d.attributionReporting = c.attributionReporting), c.browsingTopics && (d.browsingTopics = c.browsingTopics));
        try {
          return G.fetch(a, d), !0
        } catch (e) {}
      }
      if (c && c.noFallback) return !1;
      if (b) return Lc(a, b);
      Kc(a);
      return !0
    },
    Oc = function(a, b) {
      var c = a[b];
      c && typeof c.animVal === "string" && (c = c.animVal);
      return c
    },
    Pc = function() {
      var a = G.performance;
      if (a && qb(a.now)) return a.now()
    },
    Qc = function() {
      return G.performance || void 0
    };

  function Rc(a, b) {
    return this.evaluate(a) && this.evaluate(b)
  }

  function Sc(a, b) {
    return this.evaluate(a) === this.evaluate(b)
  }

  function Tc(a, b) {
    return this.evaluate(a) || this.evaluate(b)
  }

  function Uc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    return String(a).indexOf(String(b)) > -1
  }

  function Vc(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d
  }

  function Wc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    switch (a) {
      case "pageLocation":
        var c = G.location.href;
        b instanceof db && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
        return c
    }
  };
  var Xc = function(a, b) {
    Sa.call(this);
    this.M = a;
    this.R = b
  };
  za(Xc, Sa);
  ca = Xc.prototype;
  ca.toString = function() {
    return this.M
  };
  ca.getName = function() {
    return this.M
  };
  ca.fc = function() {
    return new ab(Ta(this, 1))
  };
  ca.invoke = function(a) {
    return this.R.apply(new Yc(this, a), Array.prototype.slice.call(arguments, 1))
  };
  ca.hb = function(a) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0))
    } catch (b) {}
  };
  var Yc = function(a, b) {
    this.m = a;
    this.H = b
  };
  Yc.prototype.evaluate = function(a) {
    var b = this.H;
    return Array.isArray(a) ? Qa(b, a) : a
  };
  Yc.prototype.getName = function() {
    return this.m.getName()
  };
  Yc.prototype.J = function() {
    return this.H.J()
  };
  var Zc = function() {
    this.map = new Map
  };
  Zc.prototype.set = function(a, b) {
    this.map.set(a, b)
  };
  Zc.prototype.get = function(a) {
    return this.map.get(a)
  };
  var $c = function() {
    this.keys = [];
    this.values = []
  };
  $c.prototype.set = function(a, b) {
    this.keys.push(a);
    this.values.push(b)
  };
  $c.prototype.get = function(a) {
    var b = this.keys.indexOf(a);
    if (b > -1) return this.values[b]
  };

  function ad() {
    try {
      return Map ? new Zc : new $c
    } catch (a) {
      return new $c
    }
  };
  var bd = function(a) {
    if (a instanceof bd) return a;
    if (Za(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a
  };
  bd.prototype.getValue = function() {
    return this.value
  };
  bd.prototype.toString = function() {
    return String(this.value)
  };
  var dd = function(a) {
    Sa.call(this);
    this.promise = a;
    this.set("then", cd(this));
    this.set("catch", cd(this, !0));
    this.set("finally", cd(this, !1, !0))
  };
  za(dd, db);
  var cd = function(a, b, c) {
    b = b === void 0 ? !1 : b;
    c = c === void 0 ? !1 : c;
    return new Xc("", function(d, e) {
      b && (e = d, d = void 0);
      c && (e = d);
      d instanceof Xc || (d = void 0);
      e instanceof Xc || (e = void 0);
      var f = Oa(this.H),
        g = function(m) {
          return function(n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n)
          }
        },
        h = a.promise.then(d && g(d), e && g(e));
      return new dd(h)
    })
  };

  function J(a, b, c) {
    var d = ad(),
      e = function(g, h) {
        for (var m = Ta(g, 1), n = 0; n < m.length; n++) h[m[n]] = f(g.get(m[n]))
      },
      f = function(g) {
        var h = d.get(g);
        if (h) return h;
        if (g instanceof ab) {
          var m = [];
          d.set(g, m);
          for (var n = g.fc(), p = 0; p < n.length(); p++) m[n.get(p)] = f(g.get(n.get(p)));
          return m
        }
        if (g instanceof dd) return g.promise;
        if (g instanceof db) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q
        }
        if (g instanceof Xc) {
          var r = function() {
            for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = ed(u[v], b, c);
            var w = new Ma(b ? b.J() :
              new La);
            b && (w.m = b.m);
            return f(g.invoke.apply(g, [w].concat(u)))
          };
          d.set(g, r);
          e(g, r);
          return r
        }
        var t = !1;
        switch (c) {
          case 1:
            t = !0;
            break;
          case 2:
            t = !1;
            break;
          case 3:
            t = !1;
            break;
          default:
        }
        if (g instanceof bd && t) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (g === null) return null
        }
      };
    return f(a)
  }

  function ed(a, b, c) {
    var d = ad(),
      e = function(g, h) {
        for (var m in g) g.hasOwnProperty(m) && h.set(m, f(g[m]))
      },
      f = function(g) {
        var h = d.get(g);
        if (h) return h;
        if (Array.isArray(g) || xb(g)) {
          var m = new ab([]);
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m
        }
        if (Ya(g)) {
          var p = new db;
          d.set(g, p);
          e(g, p);
          return p
        }
        if (typeof g === "function") {
          var q = new Xc("", function() {
            for (var y = Array.prototype.slice.call(arguments, 0), x = 0; x < y.length; x++) y[x] = J(this.evaluate(y[x]), b, c);
            return f((0, this.H.M)(g, g, y))
          });
          d.set(g,
            q);
          e(g, q);
          return q
        }
        var v = typeof g;
        if (g === null || v === "string" || v === "number" || v === "boolean") return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (g !== void 0 && w) return new bd(g)
      };
    return f(a)
  };

  function fd() {
    var a = !1;
    return a
  };
  var gd = {
    supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
    concat: function(a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof ab)
          for (var e = arguments[d], f = 0; f < e.length(); f++) b.push(e.get(f));
        else b.push(arguments[d]);
      return new ab(b)
    },
    every: function(a, b) {
      for (var c = this.length(), d = 0; d < this.length() &&
        d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0
    },
    filter: function(a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new ab(d)
    },
    forEach: function(a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.invoke(a, this.get(d), d, this)
    },
    hasOwnProperty: function(a, b) {
      return this.has(b)
    },
    indexOf: function(a, b, c) {
      var d = this.length(),
        e = c === void 0 ? 0 : Number(c);
      e < 0 && (e = Math.max(d + e, 0));
      for (var f =
          e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1
    },
    join: function(a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b)
    },
    lastIndexOf: function(a, b, c) {
      var d = this.length(),
        e = d - 1;
      c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
      for (var f = e; f >= 0; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1
    },
    map: function(a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new ab(d)
    },
    pop: function() {
      return this.pop()
    },
    push: function(a) {
      return this.push.apply(this,
        Array.prototype.slice.call(arguments, 1))
    },
    reduce: function(a, b, c) {
      var d = this.length(),
        e, f = 0;
      if (c !== void 0) e = c;
      else {
        if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break
          } if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++) this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e
    },
    reduceRight: function(a, b, c) {
      var d = this.length(),
        e, f = d - 1;
      if (c !== void 0) e = c;
      else {
        if (d === 0) throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break
          } if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; h >= 0; h--) this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
      return e
    },
    reverse: function() {
      for (var a = cb(this), b = a.length - 1, c = 0; b >= 0; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : bb(this, c);
      return this
    },
    shift: function() {
      return this.shift()
    },
    slice: function(a, b, c) {
      var d = this.length();
      b === void 0 && (b = 0);
      b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
      c = c === void 0 ? d :
        c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new ab(e)
    },
    some: function(a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1
    },
    sort: function(a, b) {
      var c = cb(this);
      b === void 0 ? c.sort() : c.sort(function(e, f) {
        return Number(b.invoke(a, e, f))
      });
      for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : bb(this, d);
      return this
    },
    splice: function(a, b, c) {
      return this.splice.apply(this, Array.prototype.splice.call(arguments,
        1, arguments.length - 1))
    },
    toString: function() {
      return this.toString()
    },
    unshift: function(a) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
    }
  };
  var hd = function(a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack)
  };
  za(hd, Error);
  var id = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1
    },
    jd = new Ha("break"),
    kd = new Ha("continue");

  function ld(a, b) {
    return this.evaluate(a) + this.evaluate(b)
  }

  function md(a, b) {
    return this.evaluate(a) && this.evaluate(b)
  }

  function nd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof ab)) throw Error("Error: Non-List argument given to Apply instruction.");
    if (a === null || a === void 0) {
      var d = "TypeError: Can't read property " + b + " of " + a + ".";
      if (fd()) throw new hd(d);
      throw Error(d);
    }
    var e = typeof a === "number";
    if (typeof a === "boolean" || e) {
      if (b === "toString") {
        if (e && c.length()) {
          var f = J(c.get(0));
          try {
            return a.toString(f)
          } catch (x) {}
        }
        return a.toString()
      }
      var g = "TypeError: " + a + "." + b + " is not a function.";
      if (fd()) throw new hd(g);
      throw Error(g);
    }
    if (typeof a === "string") {
      if (id.hasOwnProperty(b)) {
        var h = 2;
        h = 1;
        var m = J(c, void 0, h);
        return ed(a[b].apply(a, m), this.H)
      }
      var n = "TypeError: " + b + " is not a function";
      if (fd()) throw new hd(n);
      throw Error(n);
    }
    if (a instanceof ab) {
      if (a.has(b)) {
        var p = a.get(b);
        if (p instanceof Xc) {
          var q = cb(c);
          q.unshift(this.H);
          return p.invoke.apply(p, q)
        }
        var r =
          "TypeError: " + b + " is not a function";
        if (fd()) throw new hd(r);
        throw Error(r);
      }
      if (gd.supportedMethods.indexOf(b) >= 0) {
        var t = cb(c);
        t.unshift(this.H);
        return gd[b].apply(a, t)
      }
    }
    if (a instanceof Xc || a instanceof db) {
      if (a.has(b)) {
        var u = a.get(b);
        if (u instanceof Xc) {
          var v = cb(c);
          v.unshift(this.H);
          return u.invoke.apply(u, v)
        }
        var w = "TypeError: " + b + " is not a function";
        if (fd()) throw new hd(w);
        throw Error(w);
      }
      if (b === "toString") return a instanceof Xc ? a.getName() : a.toString();
      if (b === "hasOwnProperty") return a.has.apply(a,
        cb(c))
    }
    if (a instanceof bd && b === "toString") return a.toString();
    var y = "TypeError: Object has no '" + b + "' property.";
    if (fd()) throw new hd(y);
    throw Error(y);
  }

  function od(a, b) {
    a = this.evaluate(a);
    if (typeof a !== "string") throw Error("Invalid key name given for assignment.");
    var c = this.H;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d
  }

  function pd() {
    var a = Oa(this.H),
      b = Pa(a, Array.prototype.slice.apply(arguments));
    if (b instanceof Ha) return b
  }

  function qd() {
    return jd
  }

  function rd(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof Ha) return d
    }
  }

  function sd() {
    for (var a = this.H, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if (typeof c === "string") {
        var d = this.evaluate(arguments[b + 1]);
        Na(a, c, d, !0)
      }
    }
  }

  function td() {
    return kd
  }

  function ud(a, b) {
    return new Ha(a, this.evaluate(b))
  }

  function vd(a, b) {
    var c = new ab;
    b = this.evaluate(b);
    for (var d = 0; d < b.length; d++) c.push(b[d]);
    var e = [51, a, c].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
    this.H.add(a, this.evaluate(e))
  }

  function wd(a, b) {
    return this.evaluate(a) / this.evaluate(b)
  }

  function xd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    var c = a instanceof bd,
      d = b instanceof bd;
    return c || d ? c && d ? a.getValue() === b.getValue() : !1 : a == b
  }

  function yd() {
    for (var a, b = 0; b < arguments.length; b++) a = this.evaluate(arguments[b]);
    return a
  }

  function zd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Pa(f, d);
      if (g instanceof Ha) {
        if (g.type === "break") break;
        if (g.type === "return") return g
      }
    }
  }

  function Ad(a, b, c) {
    if (typeof b === "string") return zd(a, function() {
      return b.length
    }, function(f) {
      return f
    }, c);
    if (b instanceof db || b instanceof ab || b instanceof Xc) {
      var d = b.fc(),
        e = d.length();
      return zd(a, function() {
        return e
      }, function(f) {
        return d.get(f)
      }, c)
    }
  }

  function Bd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.H;
    return Ad(function(e) {
      d.set(a, e);
      return d
    }, b, c)
  }

  function Cd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.H;
    return Ad(function(e) {
      var f = Oa(d);
      Na(f, a, e, !0);
      return f
    }, b, c)
  }

  function Dd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.H;
    return Ad(function(e) {
      var f = Oa(d);
      f.add(a, e);
      return f
    }, b, c)
  }

  function Ed(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.H;
    return Fd(function(e) {
      d.set(a, e);
      return d
    }, b, c)
  }

  function Gd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.H;
    return Fd(function(e) {
      var f = Oa(d);
      Na(f, a, e, !0);
      return f
    }, b, c)
  }

  function Hd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.H;
    return Fd(function(e) {
      var f = Oa(d);
      f.add(a, e);
      return f
    }, b, c)
  }

  function Fd(a, b, c) {
    if (typeof b === "string") return zd(a, function() {
      return b.length
    }, function(d) {
      return b[d]
    }, c);
    if (b instanceof ab) return zd(a, function() {
      return b.length()
    }, function(d) {
      return b.get(d)
    }, c);
    if (fd()) throw new hd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }

  function Id(a, b, c, d) {
    function e(p, q) {
      for (var r = 0; r < f.length(); r++) {
        var t = f.get(r);
        q.add(t, p.get(t))
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof ab)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.H;
    d = this.evaluate(d);
    var h = Oa(g);
    for (e(g, h); Qa(h, b);) {
      var m = Pa(h, d);
      if (m instanceof Ha) {
        if (m.type === "break") break;
        if (m.type === "return") return m
      }
      var n = Oa(g);
      e(h, n);
      Qa(n, c);
      h = n
    }
  }

  function Jd(a, b) {
    var c = this.H,
      d = this.evaluate(b);
    if (!(d instanceof ab)) throw Error("Error: non-List value given for Fn argument names.");
    var e = Array.prototype.slice.call(arguments, 2);
    return new Xc(a, function() {
      return function(f) {
        var g = Oa(c);
        g.m === void 0 && (g.m = this.H.m);
        for (var h = Array.prototype.slice.call(arguments, 0), m = 0; m < h.length; m++)
          if (h[m] = this.evaluate(h[m]), h[m] instanceof Ha) return h[m];
        for (var n = d.get("length"), p = 0; p < n; p++) p < h.length ? g.add(d.get(p), h[p]) : g.add(d.get(p), void 0);
        g.add("arguments",
          new ab(h));
        var q = Pa(g, e);
        if (q instanceof Ha) return q.type === "return" ? q.data : q
      }
    }())
  }

  function Kd(a) {
    a = this.evaluate(a);
    var b = this.H;
    if (Ld && !b.has(a)) throw new ReferenceError(a + " is not defined.");
    return b.get(a)
  }

  function Md(a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (a === void 0 || a === null) {
      var d = "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
      if (fd()) throw new hd(d);
      throw Error(d);
    }
    if (a instanceof db || a instanceof ab || a instanceof Xc) c = a.get(b);
    else if (typeof a === "string") b === "length" ? c = a.length : $a(b) && (c = a[b]);
    else if (a instanceof bd) return;
    return c
  }

  function Nd(a, b) {
    return this.evaluate(a) > this.evaluate(b)
  }

  function Od(a, b) {
    return this.evaluate(a) >= this.evaluate(b)
  }

  function Pd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    a instanceof bd && (a = a.getValue());
    b instanceof bd && (b = b.getValue());
    return a === b
  }

  function Qd(a, b) {
    return !Pd.call(this, a, b)
  }

  function Rd(a, b, c) {
    var d = [];
    this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
    var e = Pa(this.H, d);
    if (e instanceof Ha) return e
  }
  var Ld = !1;

  function Sd(a, b) {
    return this.evaluate(a) < this.evaluate(b)
  }

  function Td(a, b) {
    return this.evaluate(a) <= this.evaluate(b)
  }

  function Ud() {
    for (var a = new ab, b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c)
    }
    return a
  }

  function Vd() {
    for (var a = new db, b = 0; b < arguments.length - 1; b += 2) {
      var c = this.evaluate(arguments[b]) + "",
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d)
    }
    return a
  }

  function Wd(a, b) {
    return this.evaluate(a) % this.evaluate(b)
  }

  function Xd(a, b) {
    return this.evaluate(a) * this.evaluate(b)
  }

  function Yd(a) {
    return -this.evaluate(a)
  }

  function Zd(a) {
    return !this.evaluate(a)
  }

  function $d(a, b) {
    return !xd.call(this, a, b)
  }

  function ae() {
    return null
  }

  function ce(a, b) {
    return this.evaluate(a) || this.evaluate(b)
  }

  function de(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c
  }

  function ee(a) {
    return this.evaluate(a)
  }

  function fe() {
    return Array.prototype.slice.apply(arguments)
  }

  function ge(a) {
    return new Ha("return", this.evaluate(a))
  }

  function he(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (a === null || a === void 0) {
      var d = "TypeError: Can't set property " + b + " of " + a + ".";
      if (fd()) throw new hd(d);
      throw Error(d);
    }(a instanceof Xc || a instanceof ab || a instanceof db) && a.set(b, c);
    return c
  }

  function ie(a, b) {
    return this.evaluate(a) - this.evaluate(b)
  }

  function je(a, b, c) {
    a = this.evaluate(a);
    var d = this.evaluate(b),
      e = this.evaluate(c);
    if (!Array.isArray(d) || !Array.isArray(e)) throw Error("Error: Malformed switch instruction.");
    for (var f, g = !1, h = 0; h < d.length; h++)
      if (g || a === this.evaluate(d[h]))
        if (f = this.evaluate(e[h]), f instanceof Ha) {
          var m = f.type;
          if (m === "break") return;
          if (m === "return" || m === "continue") return f
        } else g = !0;
    if (e.length === d.length + 1 && (f = this.evaluate(e[e.length - 1]), f instanceof Ha && (f.type === "return" || f.type === "continue"))) return f
  }

  function ke(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
  }

  function le(a) {
    a = this.evaluate(a);
    return a instanceof Xc ? "function" : typeof a
  }

  function me() {
    for (var a = this.H, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      typeof c !== "string" || a.add(c, void 0)
    }
  }

  function ne(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Pa(this.H, e);
      if (f instanceof Ha) {
        if (f.type === "break") return;
        if (f.type === "return") return f
      }
    }
    for (; this.evaluate(a);) {
      var g = Pa(this.H, e);
      if (g instanceof Ha) {
        if (g.type === "break") break;
        if (g.type === "return") return g
      }
      this.evaluate(b)
    }
  }

  function oe(a) {
    return ~Number(this.evaluate(a))
  }

  function pe(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b))
  }

  function qe(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b))
  }

  function re(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b))
  }

  function se(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b))
  }

  function te(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b))
  }

  function ue(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b))
  }

  function ve() {}

  function we(a, b, c, d, e) {
    var f = !0;
    try {
      var g = this.evaluate(c);
      if (g instanceof Ha) return g
    } catch (r) {
      if (!(r instanceof hd && a)) throw f = r instanceof hd, r;
      var h = Oa(this.H),
        m = new bd(r);
      h.add(b, m);
      var n = this.evaluate(d),
        p = Pa(h, n);
      if (p instanceof Ha) return p
    } finally {
      if (f && e !== void 0) {
        var q = this.evaluate(e);
        if (q instanceof Ha) return q
      }
    }
  };
  var ye = function() {
    this.m = new Ra;
    xe(this)
  };
  ye.prototype.execute = function(a) {
    return this.m.F(a)
  };
  var xe = function(a) {
    var b = function(c, d) {
      var e = new Xc(String(c), d);
      e.Nb();
      a.m.m.set(String(c), e)
    };
    b("map", Vd);
    b("and", Rc);
    b("contains", Uc);
    b("equals", Sc);
    b("or", Tc);
    b("startsWith", Vc);
    b("variable", Wc)
  };
  var Ae = function() {
    this.F = !1;
    this.m = new Ra;
    ze(this);
    this.F = !0
  };
  Ae.prototype.execute = function(a) {
    return Be(this.m.F(a))
  };
  var Ce = function(a, b, c) {
      return Be(a.m.R(b, c))
    },
    ze = function(a) {
      var b = function(c, d) {
        var e = String(c),
          f = new Xc(e, d);
        f.Nb();
        a.m.m.set(e, f)
      };
      b(0, ld);
      b(1, md);
      b(2, nd);
      b(3, od);
      b(56, se);
      b(57, pe);
      b(58, oe);
      b(59, ue);
      b(60, qe);
      b(61, re);
      b(62, te);
      b(53, pd);
      b(4, qd);
      b(5, rd);
      b(52, sd);
      b(6, td);
      b(49, ud);
      b(7, Ud);
      b(8, Vd);
      b(9, rd);
      b(50, vd);
      b(10, wd);
      b(12, xd);
      b(13, yd);
      b(51, Jd);
      b(47, Bd);
      b(54, Cd);
      b(55, Dd);
      b(63, Id);
      b(64, Ed);
      b(65, Gd);
      b(66, Hd);
      b(15, Kd);
      b(16, Md);
      b(17, Md);
      b(18, Nd);
      b(19, Od);
      b(20, Pd);
      b(21, Qd);
      b(22, Rd);
      b(23, Sd);
      b(24, Td);
      b(25, Wd);
      b(26, Xd);
      b(27, Yd);
      b(28, Zd);
      b(29, $d);
      b(45, ae);
      b(30, ce);
      b(32, de);
      b(33, de);
      b(34, ee);
      b(35, ee);
      b(46, fe);
      b(36, ge);
      b(43, he);
      b(37, ie);
      b(38, je);
      b(39, ke);
      b(67, we);
      b(40, le);
      b(44, ve);
      b(41, me);
      b(42, ne)
    };
  Ae.prototype.J = function() {
    return this.m.J()
  };

  function Be(a) {
    if (a instanceof Ha || a instanceof Xc || a instanceof ab || a instanceof db || a instanceof bd || a === null || a === void 0 || typeof a === "string" || typeof a === "number" || typeof a === "boolean") return a
  };
  var De = function(a) {
    this.message = a
  };

  function Ee(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a];
    return b === void 0 ? new De("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
  };

  function Fe(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-"
    }
  };
  var Ge = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

  function He(a, b) {
    for (var c = "", d = !0; a > 7;) {
      var e = a & 31;
      a >>= 5;
      d ? d = !1 : e |= 32;
      c = "" + Ee(e) + c
    }
    a <<= 2;
    d || (a |= 32);
    return c = "" + Ee(a | b) + c
  };
  var Ie = function() {
    var a = function(b) {
      return {
        toString: function() {
          return b
        }
      }
    };
    return {
      pk: a("consent"),
      bi: a("convert_case_to"),
      di: a("convert_false_to"),
      ei: a("convert_null_to"),
      fi: a("convert_true_to"),
      gi: a("convert_undefined_to"),
      mn: a("debug_mode_metadata"),
      ra: a("function"),
      Og: a("instance_name"),
      Pk: a("live_only"),
      Qk: a("malware_disabled"),
      Rk: a("metadata"),
      Uk: a("original_activity_id"),
      zn: a("original_vendor_template_id"),
      yn: a("once_on_load"),
      Tk: a("once_per_event"),
      mj: a("once_per_load"),
      Dn: a("priority_override"),
      En: a("respected_consent_types"),
      uj: a("setup_tags"),
      oe: a("tag_id"),
      Aj: a("teardown_tags")
    }
  }();
  var Je = [],
    Ke = {
      "\x00": "&#0;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\v": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      "-": "&#45;",
      "/": "&#47;",
      "=": "&#61;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;"
    },
    Me = function(a) {
      return Ke[a]
    },
    Ne = /[\x00\x22\x26\x27\x3c\x3e]/g;
  var Re = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
    Se = {
      "\x00": "\\x00",
      "\b": "\\x08",
      "\t": "\\t",
      "\n": "\\n",
      "\v": "\\x0b",
      "\f": "\\f",
      "\r": "\\r",
      '"': "\\x22",
      "&": "\\x26",
      "'": "\\x27",
      "/": "\\/",
      "<": "\\x3c",
      "=": "\\x3d",
      ">": "\\x3e",
      "\\": "\\\\",
      "\u0085": "\\x85",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
      $: "\\x24",
      "(": "\\x28",
      ")": "\\x29",
      "*": "\\x2a",
      "+": "\\x2b",
      ",": "\\x2c",
      "-": "\\x2d",
      ".": "\\x2e",
      ":": "\\x3a",
      "?": "\\x3f",
      "[": "\\x5b",
      "]": "\\x5d",
      "^": "\\x5e",
      "{": "\\x7b",
      "|": "\\x7c",
      "}": "\\x7d"
    },
    Te = function(a) {
      return Se[a]
    };
  Je[8] = function(a) {
    if (a == null) return " null ";
    switch (typeof a) {
      case "boolean":
      case "number":
        return " " + a + " ";
      default:
        return "'" + String(String(a)).replace(Re, Te) + "'"
    }
  };
  var af = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    bf = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\v": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD"
    },
    cf = function(a) {
      return bf[a]
    };
  Je[16] = function(a) {
    return a
  };
  var ef;
  var ff = [],
    gf = [],
    hf = [],
    jf = [],
    kf = [],
    lf = {},
    mf, nf;

  function of(a) {
    nf = nf || a
  }

  function pf(a) {}
  var qf, rf = [],
    sf = [];

  function tf(a, b) {
    var c = {};
    c[Ie.ra] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c
  }

  function uf(a, b, c) {
    try {
      return mf(vf(a, b, c))
    } catch (d) {
      JSON.stringify(a)
    }
    return 2
  }

  function wf(a) {
    var b = a[Ie.ra];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!lf[b]
  }
  var vf = function(a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = xf(a[e], b, c));
      return d
    },
    xf = function(a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(xf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = ff[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var h = String(g[Ie.Og]);
            try {
              var m = vf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = yf(m, {
                event: b,
                index: f,
                type: 2,
                name: h
              });
              qf && (d = qf.pl(d, m))
            } catch (x) {
              b.logMacroError && b.logMacroError(x, Number(f), h), d = !1
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2) d[xf(a[n], b, c)] = xf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = xf(a[q], b, c);
              nf && (p = p || nf.am(r));
              d.push(r)
            }
            return nf && p ? nf.sl(d) : d.join("");
          case "escape":
            d = xf(a[1], b, c);
            if (nf && Array.isArray(a[1]) && a[1][0] === "macro" && nf.bm(a)) return nf.Bm(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Je[a[t]] && (d = Je[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!jf[u]) throw Error("Unable to resolve tag reference " + u + ".");
            return {
              Jj: a[2], index: u
            };
          case "zb":
            var v = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5]
            };
            v[Ie.ra] = a[1];
            var w = uf(v, b, c),
              y = !!a[4];
            return y || w !== 2 ? y !== (w === 1) : null;
          default:
            throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
        }
      }
      return a
    },
    yf = function(a, b) {
      var c = a[Ie.ra],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = lf[c],
        f = b && b.type === 2 && (d == null ? void 0 : d.reportMacroDiscrepancy) &&
        e && rf.indexOf(c) !== -1,
        g = {},
        h = {},
        m;
      for (m in a) a.hasOwnProperty(m) && m.indexOf("vtp_") === 0 && (e && (g[m] = a[m]), !e || f) && (h[m.substring(4)] = a[m]);
      e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (b.name == null) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (q == null) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = ff[q];
                  break;
                case 1:
                  r = jf[q];
                  break;
                default:
                  n = "";
                  break a
              }
              var t = r && r[Ie.Og];
              n = t ? String(t) : ""
            }
          }
          b.name = n
        }
        e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
      }
      var u, v, w;
      if (f && sf.indexOf(c) ===
        -1) {
        sf.push(c);
        var y = Db();
        u = e(g);
        var x = Db() - y,
          B = Db();
        v = ef(c, h, b);
        w = x - (Db() - B)
      } else if (e && (u = e(g)), !e || f) v = ef(c, h, b);
      f && d && (d.reportMacroDiscrepancy(d.id, c, void 0, !0), Za(u) ? (Array.isArray(u) ? Array.isArray(v) : Ya(u) ? Ya(v) : typeof u === "function" ? typeof v === "function" : u === v) || d.reportMacroDiscrepancy(d.id, c) : u !== v && d.reportMacroDiscrepancy(d.id, c), w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? u : v
    };
  var zf = function(a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError"
  };
  za(zf, Error);

  function Af(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", {
        value: {
          line: b[0]
        }
      });
      for (var c = 1; c < a.length; c++) Af(a[c], b[c])
    }
  };
  var Bf = function(a, b) {
    var c;
    c = Error.call(this, "Wrapped error for Dust debugging. Original error message: " + a.message);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.vm = a;
    this.F = b;
    this.m = []
  };
  za(Bf, Error);
  var Df = function() {
    return function(a, b) {
      a instanceof Bf || (a = new Bf(a, Cf));
      b && a.m.push(b);
      throw a;
    }
  };

  function Cf(a) {
    if (!a.length) return a;
    a.push({
      id: "main",
      line: 0
    });
    for (var b = a.length - 1; b > 0; b--) rb(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a
  };
  var Gf = function(a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0
      }
      for (var c = [], d = [], e = Ef(a), f = 0; f < gf.length; f++) {
        var g = gf[f],
          h = Ff(g, e);
        if (h) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || [])
        } else h === null && b(g.block || []);
      }
      for (var p = [], q = 0; q < jf.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p
    },
    Ff = function(a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (e === 0) return !1;
        if (e === 2) return null
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (h === 2) return null;
        if (h === 1) return !1
      }
      return !0
    },
    Ef = function(a) {
      var b = [];
      return function(c) {
        b[c] === void 0 && (b[c] = uf(hf[c], a));
        return b[c]
      }
    };
  var Hf = {
    pl: function(a, b) {
      b[Ie.bi] && typeof a === "string" && (a = b[Ie.bi] == 1 ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Ie.ei) && a === null && (a = b[Ie.ei]);
      b.hasOwnProperty(Ie.gi) && a === void 0 && (a = b[Ie.gi]);
      b.hasOwnProperty(Ie.fi) && a === !0 && (a = b[Ie.fi]);
      b.hasOwnProperty(Ie.di) && a === !1 && (a = b[Ie.di]);
      return a
    }
  };
  var If = function() {
      this.m = {}
    },
    Kf = function(a, b) {
      var c = Jf.F,
        d;
      (d = c.m)[a] != null || (d[a] = []);
      c.m[a].push(function() {
        return b.apply(null, ra(Aa.apply(0, arguments)))
      })
    };

  function Lf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          f = a[e](b, c, d), g += "."
        } catch (h) {
          g = typeof h === "string" ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
        }
        if (!f) throw new zf(c, d, g);
      }
  }

  function Mf(a, b, c) {
    return function() {
      var d = arguments[0];
      if (d) {
        var e = a.m[d],
          f = a.m.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Lf(e, b, d, g);
          Lf(f, b, d, g)
        }
      }
    }
  };
  var Qf = function() {
      var a = data.permissions || {},
        b = Nf.ctid,
        c = this;
      this.F = new If;
      this.m = {};
      var d = {},
        e = {},
        f = Mf(this.F, b, function() {
          var g = arguments[0];
          return g && d[g] ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
        });
      z(a, function(g, h) {
        var m = {};
        z(h, function(p, q) {
          var r = Of(p, q);
          m[p] = r.assert;
          d[p] || (d[p] = r.O);
          r.Ej && !e[p] && (e[p] = r.Ej)
        });
        var n = function(p) {
          var q = Aa.apply(1, arguments);
          if (!m[p]) throw Pf(p, {}, "The requested additional permission " + p + " is not configured.");
          f.apply(null, [p].concat(ra(q)))
        };
        c.m[g] = function(p, q) {
          var r = m[p];
          if (!r) throw Pf(p, {}, "The requested permission " + p + " is not configured.");
          var t = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, t);
          f.apply(void 0, t);
          var u = e[p];
          u && u.apply(null, [n].concat(ra(t.slice(1))))
        }
      })
    },
    Tf = function(a) {
      return Jf.m[a] || function() {}
    };

  function Of(a, b) {
    var c = tf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Pf;
    try {
      return yf(c)
    } catch (d) {
      return {
        assert: function(e) {
          throw new zf(e, {}, "Permission " + e + " is unknown.");
        },
        O: function() {
          throw new zf(a, {}, "Permission " + a + " is unknown.");
        }
      }
    }
  }

  function Pf(a, b, c) {
    return new zf(a, b, c)
  };
  var Uf = !1;
  var Vf = {};
  Vf.dn = zb('');
  Vf.wl = zb('');
  var Wf = Uf,
    Xf = Vf.wl,
    Yf = Vf.dn;
  var fg = {},
    gg = (fg.uaa = !0, fg.uab = !0, fg.uafvl = !0, fg.uamb = !0, fg.uam = !0, fg.uap = !0, fg.uapv = !0, fg.uaw = !0, fg);
  var kg = /^[a-z$_][\w$]*$/i,
    lg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i,
    mg = function(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!lg.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = f !== -1 && f === e.length - 2,
          h = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (d.length === 0) m = !1;
          else {
            for (var n = d.split("."), p = 0; p < n.length; p++)
              if (!kg.exec(n[p])) {
                m = !1;
                break a
              } m = !0
          }
        if (!m || h.length > d.length || !g && d.length != e.length ? 0 : g ? d.indexOf(h) === 0 && (d === h || d.charAt(h.length) == ".") : d === h) return !0
      }
      return !1
    };
  var ng = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

  function og(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return c >= 0 && a.indexOf(b, c) === c
  }
  var pg = new wb;

  function qg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = pg.get(e);
      f || (f = new RegExp(b, d), pg.set(e, f));
      return f.test(a)
    } catch (g) {
      return !1
    }
  }

  function rg(a, b) {
    return String(a).indexOf(String(b)) >= 0
  }

  function sg(a, b) {
    return String(a) === String(b)
  }

  function tg(a, b) {
    return Number(a) >= Number(b)
  }

  function ug(a, b) {
    return Number(a) <= Number(b)
  }

  function vg(a, b) {
    return Number(a) > Number(b)
  }

  function wg(a, b) {
    return Number(a) < Number(b)
  }

  function xg(a, b) {
    return String(a).indexOf(String(b)) === 0
  };
  var Eg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Fg = {
      Fn: "function",
      PixieMap: "Object",
      List: "Array"
    },
    K = function(a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Eg.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = e[2] === "!",
          h = e[3],
          m = c[d];
        if (m == null) {
          if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
        } else if (h !== "*") {
          var n = typeof m;
          m instanceof Xc ? n = "Fn" : m instanceof ab ? n = "List" : m instanceof db ? n = "PixieMap" : m instanceof bd && (n =
            "OpaqueValue");
          if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (Fg[n] || n) + ", which does not match required type " + (Fg[h] || h) + ".");
        }
      }
    };

  function Gg(a) {
    return "" + a
  }

  function Hg(a, b) {
    var c = [];
    return c
  };

  function Ig(a, b) {
    var c = new Xc(a, function() {
      for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d)
      } catch (g) {
        if (fd()) throw new hd(g.message);
        throw g;
      }
    });
    c.Nb();
    return c
  }

  function Jg(a, b) {
    var c = new db,
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        qb(e) ? c.set(d, Ig(a + "_" + d, e)) : Ya(e) ? c.set(d, Jg(a + "_" + d, e)) : (rb(e) || l(e) || typeof e === "boolean") && c.set(d, e)
      } c.Nb();
    return c
  };
  var Kg = function(a, b) {
    K(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new db;
    return d = Jg("AssertApiSubject", c)
  };
  var Lg = function(a, b) {
    K(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof dd) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
    var c = {},
      d = new db;
    return d = Jg("AssertThatSubject", c)
  };

  function Mg(a) {
    return function() {
      for (var b = [], c = this.H, d = 0; d < arguments.length; ++d) b.push(J(arguments[d], c));
      return ed(a.apply(null, b))
    }
  }
  var Og = function() {
    for (var a = Math, b = Ng, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Mg(a[e].bind(a)))
    }
    return c
  };
  var Pg = function(a) {
    var b;
    return b
  };
  var Qg = function(a) {
    var b;
    return b
  };
  var Rg = function(a) {
    try {
      return encodeURI(a)
    } catch (b) {}
  };
  var Sg = function(a) {
    try {
      return encodeURIComponent(a)
    } catch (b) {}
  };

  function Tg(a, b) {
    var c = !1;
    return c
  }
  Tg.K = "internal.evaluateBooleanExpression";
  var Yg = function(a) {
    K(this.getName(), ["message:?string"], arguments);
  };
  var Zg = function(a, b) {
    K(this.getName(), ["min:!number", "max:!number"], arguments);
    return ub(a, b)
  };
  var $g = function() {
    return (new Date).getTime()
  };
  var ah = function(a) {
    if (a === null) return "null";
    if (a instanceof ab) return "array";
    if (a instanceof Xc) return "function";
    if (a instanceof bd) {
      a = a.getValue();
      if (a.constructor === void 0 || a.constructor.name === void 0) {
        var b = String(a);
        return b.substring(8, b.length - 1)
      }
      return String(a.constructor.name)
    }
    return typeof a
  };
  var bh = function(a) {
    function b(c) {
      return function(d) {
        try {
          return c(d)
        } catch (e) {
          (Wf || Yf) && a.call(this, e.message)
        }
      }
    }
    return {
      parse: b(function(c) {
        return ed(JSON.parse(c))
      }),
      stringify: b(function(c) {
        return JSON.stringify(J(c))
      })
    }
  };
  var ch = function(a) {
    return yb(J(a, this.H))
  };
  var dh = function(a) {
    return Number(J(a, this.H))
  };
  var eh = function(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a.toString()
  };
  var fh = function(a, b, c) {
    var d = null,
      e = !1;
    K(this.getName(), ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"], arguments);
    d = new db;
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof db && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0)
    }
    return e ? d : null
  };
  var Ng = "floor ceil round max min abs pow sqrt".split(" ");
  var gh = function() {
      var a = {};
      return {
        Gl: function(b) {
          return a.hasOwnProperty(b) ? a[b] : void 0
        },
        ek: function(b, c) {
          a[b] = c
        },
        reset: function() {
          a = {}
        }
      }
    },
    hh = function(a, b) {
      return function() {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return Xc.prototype.invoke.apply(a, c)
      }
    },
    ih = function(a, b) {
      K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
    },
    jh = function(a, b) {
      K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
    };
  var kh = {};
  var lh = function(a) {
    var b = new db;
    if (a instanceof ab)
      for (var c = a.fc(), d = 0; d < c.length(); d++) {
        var e = c.get(d);
        a.has(e) && b.set(e, a.get(e))
      } else if (a instanceof Xc)
        for (var f = Ta(a, 1), g = 0; g < f.length; g++) {
          var h = f[g];
          b.set(h, a.get(h))
        } else
          for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b
  };
  kh.keys = function(a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof ab || a instanceof Xc || typeof a === "string") a = lh(a);
    if (a instanceof db) return a.fc();
    return new ab
  };
  kh.values = function(a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof ab || a instanceof Xc || typeof a === "string") a = lh(a);
    if (a instanceof db) return new ab(Ta(a, 2));
    return new ab
  };
  kh.entries = function(a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof ab || a instanceof Xc || typeof a === "string") a = lh(a);
    if (a instanceof db) return eb(a);
    return new ab
  };
  kh.freeze = function(a) {
    (a instanceof db || a instanceof ab || a instanceof Xc) && a.Nb();
    return a
  };
  kh.delete = function(a, b) {
    if (a instanceof db && !a.F) return a.xf(b), !0;
    return !1
  };
  var N = function(a, b, c) {
    var d = a.H.m;
    if (!d) throw Error("Missing program state.");
    if (d.Hm) {
      try {
        d.Fj.apply(null, Array.prototype.slice.call(arguments, 1))
      } catch (e) {
        throw mb("TAGGING", 21), e;
      }
      return
    }
    d.Fj.apply(null, Array.prototype.slice.call(arguments, 1))
  };
  var mh = function() {
    this.m = {};
    this.F = {};
  };
  mh.prototype.get = function(a, b) {
    var c = this.m.hasOwnProperty(a) ? this.m[a] : void 0;
    return c
  };
  mh.prototype.add = function(a, b, c) {
    if (this.m.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
    if (this.F.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
    this.m[a] = c ? void 0 : qb(b) ? Ig(a, b) : Jg(a, b)
  };

  function nh(a, b) {
    var c = void 0;
    return c
  };

  function oh() {
    var a = {};
    return a
  };

  function ph(a) {
    return qh ? H.querySelectorAll(a) : null
  }

  function rh(a, b) {
    if (!qh) return null;
    if (Element.prototype.closest) try {
      return a.closest(b)
    } catch (e) {
      return null
    }
    var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
      d = a;
    if (!H.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d
      } catch (e) {
        break
      }
      d = d.parentElement || d.parentNode
    } while (d !== null && d.nodeType === 1);
    return null
  }
  var sh = !1;
  if (H.querySelectorAll) try {
    var wh = H.querySelectorAll(":root");
    wh && wh.length == 1 && wh[0] == H.documentElement && (sh = !0)
  } catch (a) {}
  var qh = sh;
  var xh = /^[0-9A-Fa-f]{64}$/;

  function yh(a) {
    try {
      return (new TextEncoder).encode(a)
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d < 128 ? b.push(d) : d < 2048 ? b.push(192 | d >> 6, 128 | d & 63) : d < 55296 || d >= 57344 ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63) : (d = 65536 + ((d & 1023) << 10 | a.charCodeAt(++c) & 1023), b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63))
      }
      return new Uint8Array(b)
    }
  }

  function zh(a) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    var b;
    if ((b = G.crypto) == null ? 0 : b.subtle) {
      if (xh.test(a)) return Promise.resolve(a);
      try {
        var c = yh(a);
        return G.crypto.subtle.digest("SHA-256", c).then(function(d) {
          var e = Array.from(new Uint8Array(d)).map(function(f) {
            return String.fromCharCode(f)
          }).join("");
          return G.btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
        }).catch(function() {
          return "e2"
        })
      } catch (d) {
        return Promise.resolve("e2")
      }
    } else return Promise.resolve("e1")
  };

  function P(a) {
    mb("GTM", a)
  };
  var Q = {
      g: {
        Aa: "ad_personalization",
        T: "ad_storage",
        P: "ad_user_data",
        W: "analytics_storage",
        nc: "region",
        Rb: "consent_updated",
        Se: "wait_for_update",
        ii: "app_remove",
        ji: "app_store_refund",
        ki: "app_store_subscription_cancel",
        li: "app_store_subscription_convert",
        mi: "app_store_subscription_renew",
        sk: "consent_update",
        Wf: "add_payment_info",
        Xf: "add_shipping_info",
        oc: "add_to_cart",
        qc: "remove_from_cart",
        Yf: "view_cart",
        Sb: "begin_checkout",
        rc: "select_item",
        ib: "view_item_list",
        Db: "select_promotion",
        jb: "view_promotion",
        Ja: "purchase",
        sc: "refund",
        Na: "view_item",
        Zf: "add_to_wishlist",
        tk: "exception",
        ni: "first_open",
        oi: "first_visit",
        da: "gtag.config",
        Ta: "gtag.get",
        ri: "in_app_purchase",
        Tb: "page_view",
        uk: "screen_view",
        si: "session_start",
        vk: "timing_complete",
        wk: "track_social",
        Nc: "user_engagement",
        xk: "user_id_update",
        kb: "gclgb",
        Ua: "gclid",
        ui: "gclgs",
        vi: "gclst",
        ja: "ads_data_redaction",
        wi: "gad_source",
        Gd: "gclid_url",
        xi: "gclsrc",
        cg: "gbraid",
        Te: "wbraid",
        oa: "allow_ad_personalization_signals",
        Ue: "allow_custom_scripts",
        Ve: "allow_display_features",
        Hd: "allow_enhanced_conversions",
        lb: "allow_google_signals",
        Ea: "allow_interest_groups",
        yk: "app_id",
        zk: "app_installer_id",
        Ak: "app_name",
        Bk: "app_version",
        Eb: "auid",
        yi: "auto_detection_enabled",
        Ub: "aw_remarketing",
        We: "aw_remarketing_only",
        Id: "discount",
        Jd: "aw_feed_country",
        Kd: "aw_feed_language",
        fa: "items",
        Ld: "aw_merchant_id",
        dg: "aw_basket_type",
        Oc: "campaign_content",
        Pc: "campaign_id",
        Qc: "campaign_medium",
        Rc: "campaign_name",
        Sc: "campaign",
        Tc: "campaign_source",
        Uc: "campaign_term",
        nb: "client_id",
        zi: "rnd",
        eg: "consent_update_type",
        Ai: "content_group",
        Bi: "content_type",
        ab: "conversion_cookie_prefix",
        Vc: "conversion_id",
        wa: "conversion_linker",
        Ci: "conversion_linker_disabled",
        Vb: "conversion_api",
        Xe: "cookie_deprecation",
        Va: "cookie_domain",
        Wa: "cookie_expires",
        cb: "cookie_flags",
        uc: "cookie_name",
        Fb: "cookie_path",
        Oa: "cookie_prefix",
        vc: "cookie_update",
        wc: "country",
        Ba: "currency",
        Md: "customer_lifetime_value",
        Wc: "custom_map",
        fg: "gcldc",
        Nd: "dclid",
        Di: "debug_mode",
        la: "developer_id",
        Ei: "disable_merchant_reported_purchases",
        Xc: "dc_custom_params",
        Fi: "dc_natural_search",
        gg: "dynamic_event_settings",
        hg: "affiliation",
        Od: "checkout_option",
        Ye: "checkout_step",
        ig: "coupon",
        Yc: "item_list_name",
        Ze: "list_name",
        Gi: "promotions",
        Zc: "shipping",
        af: "tax",
        Pd: "engagement_time_msec",
        Qd: "enhanced_client_id",
        Rd: "enhanced_conversions",
        jg: "enhanced_conversions_automatic_settings",
        Sd: "estimated_delivery_date",
        bf: "euid_logged_in_state",
        bd: "event_callback",
        Ck: "event_category",
        pb: "event_developer_id_string",
        Dk: "event_label",
        xc: "event",
        Td: "event_settings",
        Ud: "event_timeout",
        Ek: "description",
        Fk: "fatal",
        Hi: "experiments",
        cf: "firebase_id",
        yc: "first_party_collection",
        Vd: "_x_20",
        qb: "_x_19",
        Ii: "fledge_drop_reason",
        kg: "fledge",
        lg: "flight_error_code",
        mg: "flight_error_message",
        Ji: "fl_activity_category",
        Ki: "fl_activity_group",
        ng: "fl_advertiser_id",
        Li: "fl_ar_dedupe",
        og: "match_id",
        Mi: "fl_random_number",
        Ni: "tran",
        Oi: "u",
        Wd: "gac_gclid",
        zc: "gac_wbraid",
        pg: "gac_wbraid_multiple_conversions",
        qg: "ga_restrict_domain",
        rg: "ga_temp_client_id",
        Ac: "gdpr_applies",
        sg: "geo_granularity",
        Gb: "value_callback",
        rb: "value_key",
        Gk: "google_ng",
        Hk: "google_ono",
        Wb: "google_signals",
        ug: "google_tld",
        Xd: "groups",
        vg: "gsa_experiment_id",
        Pi: "gtm_up",
        Hb: "iframe_state",
        dd: "ignore_referrer",
        df: "internal_traffic_results",
        Xb: "is_legacy_converted",
        Ib: "is_legacy_loaded",
        Yd: "is_passthrough",
        ed: "_lps",
        Pa: "language",
        Zd: "legacy_developer_id_string",
        xa: "linker",
        Bc: "accept_incoming",
        tb: "decorate_forms",
        X: "domains",
        Jb: "url_position",
        wg: "method",
        Ik: "name",
        fd: "new_customer",
        xg: "non_interaction",
        Qi: "optimize_id",
        Ri: "page_hostname",
        gd: "page_path",
        Fa: "page_referrer",
        Kb: "page_title",
        yg: "passengers",
        zg: "phone_conversion_callback",
        Si: "phone_conversion_country_code",
        Ag: "phone_conversion_css_class",
        Ti: "phone_conversion_ids",
        Bg: "phone_conversion_number",
        Cg: "phone_conversion_options",
        Dg: "_protected_audience_enabled",
        hd: "quantity",
        ae: "redact_device_info",
        ef: "referral_exclusion_definition",
        Yb: "restricted_data_processing",
        Ui: "retoken",
        Jk: "sample_rate",
        ff: "screen_name",
        Lb: "screen_resolution",
        Vi: "search_term",
        Ka: "send_page_view",
        Zb: "send_to",
        jd: "server_container_url",
        kd: "session_duration",
        be: "session_engaged",
        hf: "session_engaged_time",
        ub: "session_id",
        ce: "session_number",
        jf: "_shared_user_id",
        ld: "delivery_postal_code",
        Kk: "temporary_client_id",
        kf: "topmost_url",
        Wi: "tracking_id",
        lf: "traffic_type",
        Ca: "transaction_id",
        Mb: "transport_url",
        Eg: "trip_type",
        ac: "update",
        Xa: "url_passthrough",
        nf: "_user_agent_architecture",
        pf: "_user_agent_bitness",
        qf: "_user_agent_full_version_list",
        rf: "_user_agent_mobile",
        tf: "_user_agent_model",
        uf: "_user_agent_platform",
        vf: "_user_agent_platform_version",
        wf: "_user_agent_wow64",
        Ga: "user_data",
        Fg: "user_data_auto_latency",
        Gg: "user_data_auto_meta",
        Hg: "user_data_auto_multi",
        Ig: "user_data_auto_selectors",
        Jg: "user_data_auto_status",
        md: "user_data_mode",
        de: "user_data_settings",
        Da: "user_id",
        eb: "user_properties",
        Xi: "_user_region",
        ee: "us_privacy_string",
        qa: "value",
        Kg: "wbraid_multiple_conversions",
        fj: "_host_name",
        gj: "_in_page_command",
        ij: "_is_passthrough_cid",
        Ob: "non_personalized_ads",
        me: "_sst_parameters",
        ob: "conversion_label",
        ya: "page_location",
        sb: "global_developer_id_string",
        Cc: "tc_privacy_string"
      }
    },
    Xh = {},
    Yh = Object.freeze((Xh[Q.g.oa] = 1, Xh[Q.g.Ve] = 1, Xh[Q.g.Hd] = 1, Xh[Q.g.lb] = 1, Xh[Q.g.fa] = 1, Xh[Q.g.Va] = 1, Xh[Q.g.Wa] = 1, Xh[Q.g.cb] = 1, Xh[Q.g.uc] = 1, Xh[Q.g.Fb] = 1, Xh[Q.g.Oa] = 1, Xh[Q.g.vc] = 1, Xh[Q.g.Wc] = 1, Xh[Q.g.la] = 1, Xh[Q.g.gg] = 1, Xh[Q.g.bd] = 1, Xh[Q.g.Td] = 1, Xh[Q.g.Ud] = 1, Xh[Q.g.yc] = 1, Xh[Q.g.qg] = 1, Xh[Q.g.Wb] = 1, Xh[Q.g.ug] = 1, Xh[Q.g.Xd] = 1, Xh[Q.g.df] = 1, Xh[Q.g.Xb] = 1, Xh[Q.g.Ib] = 1, Xh[Q.g.xa] = 1, Xh[Q.g.ef] = 1, Xh[Q.g.Yb] = 1, Xh[Q.g.Ka] = 1, Xh[Q.g.Zb] =
      1, Xh[Q.g.jd] = 1, Xh[Q.g.kd] = 1, Xh[Q.g.hf] = 1, Xh[Q.g.ld] = 1, Xh[Q.g.Mb] = 1, Xh[Q.g.ac] = 1, Xh[Q.g.de] = 1, Xh[Q.g.eb] = 1, Xh[Q.g.me] = 1, Xh));
  Object.freeze([Q.g.ya, Q.g.Fa, Q.g.Kb, Q.g.Pa, Q.g.ff, Q.g.Da, Q.g.cf, Q.g.Ai]);
  var Zh = {},
    $h = Object.freeze((Zh[Q.g.ii] = 1, Zh[Q.g.ji] = 1, Zh[Q.g.ki] = 1, Zh[Q.g.li] = 1, Zh[Q.g.mi] = 1, Zh[Q.g.ni] = 1, Zh[Q.g.oi] = 1, Zh[Q.g.ri] = 1, Zh[Q.g.si] = 1, Zh[Q.g.Nc] = 1, Zh)),
    ai = {},
    bi = Object.freeze((ai[Q.g.Wf] = 1, ai[Q.g.Xf] = 1, ai[Q.g.oc] = 1, ai[Q.g.qc] = 1, ai[Q.g.Yf] = 1, ai[Q.g.Sb] = 1, ai[Q.g.rc] = 1, ai[Q.g.ib] = 1, ai[Q.g.Db] = 1, ai[Q.g.jb] = 1, ai[Q.g.Ja] = 1, ai[Q.g.sc] = 1, ai[Q.g.Na] = 1, ai[Q.g.Zf] = 1, ai)),
    ci = Object.freeze([Q.g.oa, Q.g.lb, Q.g.vc, Q.g.yc, Q.g.dd, Q.g.Ka, Q.g.ac]),
    di = Object.freeze([].concat(ra(ci))),
    ei = Object.freeze([Q.g.Wa,
Q.g.Ud, Q.g.kd, Q.g.hf, Q.g.Pd]),
    fi = Object.freeze([].concat(ra(ei))),
    gi = {},
    hi = (gi[Q.g.T] = "1", gi[Q.g.W] = "2", gi[Q.g.P] = "3", gi[Q.g.Aa] = "4", gi),
    ii = {},
    ji = Object.freeze((ii[Q.g.oa] = 1, ii[Q.g.Hd] = 1, ii[Q.g.Ea] = 1, ii[Q.g.Ub] = 1, ii[Q.g.We] = 1, ii[Q.g.Id] = 1, ii[Q.g.Jd] = 1, ii[Q.g.Kd] = 1, ii[Q.g.fa] = 1, ii[Q.g.Ld] = 1, ii[Q.g.ab] = 1, ii[Q.g.wa] = 1, ii[Q.g.Va] = 1, ii[Q.g.Wa] = 1, ii[Q.g.cb] = 1, ii[Q.g.Oa] = 1, ii[Q.g.Ba] = 1, ii[Q.g.Md] = 1, ii[Q.g.la] = 1, ii[Q.g.Ei] = 1, ii[Q.g.Rd] = 1, ii[Q.g.Sd] = 1, ii[Q.g.cf] = 1, ii[Q.g.yc] = 1, ii[Q.g.Xb] = 1, ii[Q.g.Ib] = 1, ii[Q.g.Pa] =
      1, ii[Q.g.fd] = 1, ii[Q.g.ya] = 1, ii[Q.g.Fa] = 1, ii[Q.g.zg] = 1, ii[Q.g.Ag] = 1, ii[Q.g.Bg] = 1, ii[Q.g.Cg] = 1, ii[Q.g.Yb] = 1, ii[Q.g.Ka] = 1, ii[Q.g.Zb] = 1, ii[Q.g.jd] = 1, ii[Q.g.ld] = 1, ii[Q.g.Ca] = 1, ii[Q.g.Mb] = 1, ii[Q.g.ac] = 1, ii[Q.g.Xa] = 1, ii[Q.g.Ga] = 1, ii[Q.g.Da] = 1, ii[Q.g.qa] = 1, ii)),
    ki = {},
    li = Object.freeze((ki.search = "s", ki.youtube = "y", ki.playstore = "p", ki.shopping = "h", ki.ads = "a", ki.maps = "m", ki));
  Object.freeze(Q.g);
  var mi = {},
    ni = G.google_tag_manager = G.google_tag_manager || {};
  mi.Pg = "46c0";
  mi.ke = Number("0") || 0;
  mi.Za = "dataLayer";
  mi.kn = "ChEI8LGqswYQ+Kf4vfGkl9fkARIkAHxDt9Gv/FDj8Ke1p39GkZdd69WZcwi1PFPOOocnT7vN724bGgKW1A\x3d\x3d";
  var oi = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1
    },
    pi = {
      __paused: 1,
      __tg: 1
    },
    qi;
  for (qi in oi) oi.hasOwnProperty(qi) && (pi[qi] = 1);
  var ri = zb(""),
    si, ti = !1;
  si = ti;
  var ui, vi = !1;
  ui = vi;
  var wi, xi = !1;
  wi = xi;
  mi.Fd = "www.googletagmanager.com";
  var yi = "" + mi.Fd + (si ? "/gtag/js" : "/gtm.js"),
    zi = null,
    Ai = null,
    Bi = {},
    Ci = {};

  function Di() {
    var a = ni.sequence || 1;
    ni.sequence = a + 1;
    return a
  }
  mi.qk = "";
  var Ei = "";
  mi.Bf = Ei;
  var Fi = new function() {
    this.m = "";
    this.M = this.F = !1;
    this.Qa = this.R = this.aa = this.J = ""
  };

  function Gi() {
    var a = Fi.J.length;
    return Fi.J[a - 1] === "/" ? Fi.J.substring(0, a - 1) : Fi.J
  }

  function Hi(a) {
    for (var b = {}, c = pa(a.split("|")), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
    return b
  }
  var Ii = new wb,
    Ji = {},
    Ki = {},
    Ni = {
      name: mi.Za,
      set: function(a, b) {
        k(Kb(a, b), Ji);
        Li()
      },
      get: function(a) {
        return Mi(a, 2)
      },
      reset: function() {
        Ii = new wb;
        Ji = {};
        Li()
      }
    };

  function Mi(a, b) {
    return b != 2 ? Ii.get(a) : Oi(a)
  }

  function Oi(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = Ji, e = 0; e < c.length; e++) {
      if (d === null) return !1;
      if (d === void 0) break;
      d = d[c[e]];
      if (b.indexOf(d) !== -1) return
    }
    return d
  }

  function Pi(a, b) {
    Ki.hasOwnProperty(a) || (Ii.set(a, b), k(Kb(a, b), Ji), Li())
  }

  function Qi() {
    for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
      var c = a[b],
        d = Mi(c, 1);
      if (Array.isArray(d) || Ya(d)) d = k(d);
      Ki[c] = d
    }
  }

  function Li(a) {
    z(Ki, function(b, c) {
      Ii.set(b, c);
      k(Kb(b), Ji);
      k(Kb(b, c), Ji);
      a && delete Ki[b]
    })
  }

  function Ri(a, b) {
    var c, d = (b === void 0 ? 2 : b) !== 1 ? Oi(a) : Ii.get(a);
    Va(d) === "array" || Va(d) === "object" ? c = k(d) : c = d;
    return c
  };

  function Vi(a, b) {
    if (a === "") return b;
    var c = Number(a);
    return isNaN(c) ? b : c
  };
  var Wi = [],
    Xi = {};

  function Yi(a) {
    return Wi[a] === void 0 ? !1 : Wi[a]
  };
  var Zi = [];

  function $i(a) {
    switch (a) {
      case 0:
        return 0;
      case 29:
        return 7;
      case 37:
        return 1;
      case 38:
        return 2;
      case 49:
        return 3;
      case 57:
        return 6;
      case 60:
        return 9;
      case 69:
        return 4;
      case 74:
        return 5;
      case 79:
        return 8
    }
  }

  function T(a) {
    Zi[a] = !0;
    var b = $i(a);
    b !== void 0 && (Wi[b] = !0)
  }
  T(26);
  T(22);
  T(23);
  T(24);
  T(25);
  T(39);
  T(63);
  T(47);
  T(59);
  T(28);
  T(14);
  T(82);
  T(13);
  T(87);
  T(81);
  T(50);
  T(70);
  T(6);
  T(40);
  T(4);
  T(67);
  T(77);
  T(56);
  T(53);
  T(68);
  T(91);
  T(88);
  T(69);
  T(5);
  T(74);
  Zi[54] = !0;
  Xi[1] = Vi('1', 6E4);
  Xi[3] = Vi('10', 1);
  Xi[2] = Vi('', 50);
  T(11);
  T(52);
  T(85);
  T(78);
  T(29);


  T(43);
  T(66);

  function U(a) {
    return !!Zi[a]
  }
  var dj = /:[0-9]+$/,
    ej = /^\d+\.fls\.doubleclick\.net$/,
    fj = function(a, b, c, d) {
      for (var e = [], f = pa(a.split("&")), g = f.next(); !g.done; g = f.next()) {
        var h = pa(g.value.split("=")),
          m = h.next().value,
          n = qa(h);
        if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
          var p = n.join("=");
          if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
          e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")))
        }
      }
      return c ? e : void 0
    },
    ij = function(a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if (b === "protocol" || b === "port") a.protocol = gj(a.protocol) || gj(G.location.protocol);
      b === "port" ? a.port = String(Number(a.hostname ? a.port : G.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")) : b === "host" && (a.hostname = (a.hostname || G.location.hostname).replace(dj, "").toLowerCase());
      return hj(a, b, c, d, e)
    },
    hj = function(a, b, c, d, e) {
      var f, g = gj(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = jj(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(dj, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length))
          }
          break;
        case "port":
          f = String(Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : ""));
          break;
        case "path":
          a.pathname || a.hostname || mb("TAGGING", 1);
          f = a.pathname.substr(0, 1) === "/" ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = fj(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = n.length > 1 ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f =
            a && a.href
      }
      return f
    },
    gj = function(a) {
      return a ? a.replace(":", "").toLowerCase() : ""
    },
    jj = function(a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = c < 0 ? a.href : a.href.substr(0, c)
      }
      return b
    },
    kj = {},
    lj = 0,
    V = function(a) {
      var b = kj[a];
      if (!b) {
        var c = H.createElement("a");
        a && (c.href = a);
        var d = c.pathname;
        d[0] !== "/" && (a || mb("TAGGING", 1), d = "/" + d);
        var e = c.hostname.replace(dj, "");
        b = {
          href: c.href,
          protocol: c.protocol,
          host: c.host,
          hostname: e,
          pathname: d,
          search: c.search,
          hash: c.hash,
          port: c.port
        };
        lj < 5 && (kj[a] = b, lj++)
      }
      return b
    },
    mj = function(a) {
      function b(n) {
        var p = n.split("=")[0];
        return d.indexOf(p) < 0 ? n : p + "=0"
      }

      function c(n) {
        return n.split("&").map(b).filter(function(p) {
          return p !== void 0
        }).join("&")
      }
      var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
        e = V(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      g[0] === "?" && (g = g.substring(1));
      h[0] === "#" && (h = h.substring(1));
      g = c(g);
      h = c(h);
      g !== "" && (g = "?" + g);
      h !== "" && (h = "#" + h);
      var m = "" + f + g + h;
      m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
      return m
    },
    nj = function(a) {
      var b =
        V(G.location.href),
        c = ij(b, "host", !1);
      if (c && c.match(ej)) {
        var d = ij(b, "path").split(a + "=");
        if (d.length > 1) return d[1].split(";")[0].split("?")[0]
      }
    };
  var oj = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs"
  };

  function pj(a, b) {
    if (a) {
      var c = "" + a;
      c.indexOf("http://") !== 0 && c.indexOf("https://") !== 0 && (c = "https://" + c);
      c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
      return V("" + c + b).href
    }
  }

  function qj() {
    return Fi.F || ui
  }

  function rj() {
    return !!mi.Bf && mi.Bf.split("@@").join("") !== "SGTM_TOKEN"
  }

  function sj(a) {
    for (var b = pa([Q.g.jd, Q.g.Mb]), c = b.next(); !c.done; c = b.next()) {
      var d = W(a, c.value);
      if (d) return d
    }
  }

  function tj(a, b) {
    return Fi.F ? "" + Gi() + (b ? oj[a] || "" : "") : a
  };

  function uj(a) {
    var b = String(a[Ie.ra] || "").replace(/_/g, "");
    b.indexOf("cvt") === 0 && (b = "cvt");
    return b
  }
  var vj = G.location.search.indexOf("?gtm_latency=") >= 0 || G.location.search.indexOf("&gtm_latency=") >= 0;
  var wj = {
    sampleRate: "0.005000",
    lk: "",
    hn: ""
  };

  function xj() {
    var a = wj.sampleRate;
    return Number(a)
  }
  var yj = Math.random(),
    zj = vj || yj < xj(),
    Aj = vj || !U(42) && zj || U(42) && !zj && yj < xj() + Number(wj.hn);

  function Bj(a, b) {
    var c = Cj();
    c.pending || (c.pending = []);
    tb(c.pending, function(d) {
      return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
    }) || c.pending.push({
      target: a,
      onLoad: b
    })
  }
  var Dj = function() {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = []
  };

  function Cj() {
    var a = uc("google_tag_data", {}),
      b = a.tidr;
    b || (b = new Dj, a.tidr = b);
    return b
  };
  var Ej = {},
    Fj = !1,
    Nf = {
      ctid: "GTM-KR3JKWP",
      canonicalContainerId: "68686450",
      Sj: "GTM-KR3JKWP",
      Tj: "GTM-KR3JKWP"
    };
  Ej.he = zb("");

  function Gj() {
    var a = Hj();
    return Fj ? a.map(Ij) : a
  }

  function Jj() {
    var a = Kj();
    return Fj ? a.map(Ij) : a
  }

  function Lj() {
    return Mj(Nf.ctid)
  }

  function Nj() {
    return Mj(Nf.canonicalContainerId || "_" + Nf.ctid)
  }

  function Hj() {
    return Nf.Sj ? Nf.Sj.split("|") : [Nf.ctid]
  }

  function Kj() {
    return Nf.Tj ? Nf.Tj.split("|") : []
  }

  function Oj() {
    var a = Pj(Qj()),
      b = a && a.parent;
    if (b) return Pj(b)
  }

  function Xj() {
    var a = Pj(Qj());
    if (a) {
      for (; a.parent;) {
        var b = Pj(a.parent);
        if (!b) break;
        a = b
      }
      return a
    }
  }

  function Pj(a) {
    var b = Cj();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
  }

  function Mj(a) {
    return Fj ? Ij(a) : a
  }

  function Ij(a) {
    return "siloed_" + a
  }

  function Yj(a) {
    return Fj ? Zj(a) : a
  }

  function Zj(a) {
    a = String(a);
    return a.indexOf("siloed_") === 0 ? a.substring(7) : a
  }

  function ak() {
    var a = !1;
    if (a) {
      var b = Cj();
      if (b.siloed) {
        for (var c = [], d = Hj().map(Ij), e = Kj().map(Ij), f = {}, g = 0; g < b.siloed.length; f = {
            Ff: void 0
          }, g++) f.Ff = b.siloed[g], !Fj && tb(f.Ff.isDestination ? e : d, function(h) {
          return function(m) {
            return m === h.Ff.ctid
          }
        }(f)) ? Fj = !0 : c.push(f.Ff);
        b.siloed = c
      }
    }
  }

  function bk() {
    var a = Cj();
    if (a.pending) {
      for (var b, c = [], d = !1, e = Gj(), f = Jj(), g = {}, h = 0; h < a.pending.length; g = {
          Me: void 0
        }, h++) g.Me = a.pending[h], tb(g.Me.target.isDestination ? f : e, function(m) {
        return function(n) {
          return n === m.Me.target.ctid
        }
      }(g)) ? d || (b = g.Me.onLoad, d = !0) : c.push(g.Me);
      a.pending = c;
      if (b) try {
        b(Nj())
      } catch (m) {}
    }
  }

  function ck() {
    for (var a = Nf.ctid, b = Gj(), c = Jj(), d = function(n, p) {
        var q = {
          canonicalContainerId: Nf.canonicalContainerId,
          scriptContainerId: a,
          state: 2,
          containers: b.slice(),
          destinations: c.slice()
        };
        sc && (q.scriptElement = sc);
        tc && (q.scriptSource = tc);
        var r = p ? e.destination : e.container,
          t = r[n];
        t ? (p && t.state === 0 && P(93), Object.assign(t, q)) : r[n] = q
      }, e = Cj(), f = pa(b), g = f.next(); !g.done; g = f.next()) d(g.value, !1);
    for (var h = pa(c), m = h.next(); !m.done; m = h.next()) d(m.value, !0);
    e.canonical[Nj()] = {};
    bk()
  }

  function dk(a) {
    return !!Cj().container[a]
  }

  function ek(a) {
    var b = Cj().destination[a];
    return !!b && !!b.state
  }

  function Qj() {
    return {
      ctid: Lj(),
      isDestination: Ej.he
    }
  }

  function fk(a) {
    var b = Cj();
    (b.siloed = b.siloed || []).push(a)
  }

  function gk() {
    var a = Cj().container,
      b;
    for (b in a)
      if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
    return !1
  }

  function hk() {
    var a = {};
    z(Cj().destination, function(b, c) {
      c.state === 0 && (a[Zj(b)] = c)
    });
    return a
  }

  function ik(a) {
    return !!(a && a.parent && a.context && a.context.source === 1 && a.parent.ctid.indexOf("GTM-") !== 0)
  }
  var jk = {
      kk: Number("5"),
      Yn: Number("")
    },
    kk = [],
    lk = [];

  function mk(a) {
    kk.push(a)
  }
  var nk = !1,
    ok = "?id=" + Nf.ctid,
    pk = void 0,
    qk = {},
    rk = void 0,
    sk = new function() {
      var a = 5;
      jk.kk > 0 && (a = jk.kk);
      this.F = a;
      this.m = 0;
      this.J = []
    },
    tk = 1E3;

  function uk(a, b, c, d) {
    var e = pk;
    if (e === void 0)
      if (a) e = 0;
      else if (c) e = Di();
    else return "";
    for (var f = [tj("https://www.googletagmanager.com"), a ? "/td" : "/a", ok], g = pa(a ? lk : kk), h = g.next(); !h.done; h = g.next())
      for (var m = h.value, n = m({
          eventId: e,
          Ya: !!b,
          Ij: !!d,
          Kc: function() {
            nk = !0
          }
        }), p = pa(n), q = p.next(); !q.done; q = p.next()) {
        var r = pa(q.value),
          t = r.next().value,
          u = r.next().value;
        f.push("&" + t + "=" + u)
      }
    f.push("&z=0");
    return f.join("")
  }

  function vk() {
    if (Aj) {
      var a = uk(!0, !0);
      nk && (Dc(a), nk = !1)
    }
  }

  function wk() {
    rk && (G.clearTimeout(rk), rk = void 0);
    if (pk !== void 0 && xk) {
      U(43) || vk();
      var a;
      (a = qk[pk]) || (a = sk.m < sk.F ? !1 : Db() - sk.J[sk.m % sk.F] < 1E3);
      if (a || tk-- <= 0) P(1), qk[pk] = !0;
      else {
        var b = sk.m++ % sk.F;
        sk.J[b] = Db();
        var c = uk(!1, !0);
        Dc(c);
        xk = nk = !1
      }
    }
  }

  function yk() {
    if (Aj) {
      var a = uk(!0, !0, !0, !0);
      nk && (Nc(a), nk = !1)
    }
  }
  var xk = !1;

  function zk(a) {
    qk[a] && !U(43) ? vk() : (a !== pk && (wk(), pk = a), xk = !0, rk || (rk = G.setTimeout(wk, 500)), uk(!1).length >= 2022 && wk())
  }
  var Ak = ub();

  function Bk() {
    Ak = ub()
  }

  function Ck() {
    return [["v", "3"], ["t", "t"], ["pid", String(Ak)]]
  }
  var Dk = "https://www.googletagmanager.com/td?id=" + Nf.ctid,
    Ek = ["v", "t", "pid", "dl", "tdp"],
    Fk = {},
    Gk = {};

  function Hk(a, b) {
    Gk[a] = b;
    Fk[a] === void 0 && (Fk[a] = !0)
  }

  function Ik() {
    var a = Object.keys(Fk).filter(function(b) {
      return Fk[b] === !0 && Gk[b] !== void 0
    }).map(function(b) {
      var c = Gk[b];
      typeof c === "function" && (c = c());
      return c ? "&" + b + "=" + c : ""
    }).join("");
    return "" + Dk + a + "&z=0"
  }

  function Jk() {
    Object.keys(Fk).forEach(function(a) {
      Ek.indexOf(a) < 0 && (Fk[a] = !1)
    })
  }

  function Kk() {
    Aj && U(43) && (U(41) ? (Dc(Ik()), Jk()) : vk())
  }
  var Lk = ub();

  function Mk() {
    Lk = ub()
  }

  function Nk() {
    Aj && (U(41) ? (Hk("v", "3"), Hk("t", "t"), Hk("pid", function() {
      return String(Lk)
    }), G.setInterval(Mk, 864E5)) : lk.push(Ck))
  }
  var Ok = function(a, b) {
      var c = function() {};
      c.prototype = a.prototype;
      var d = new c;
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d
    },
    Pk = function(a) {
      var b = a;
      return function() {
        if (b) {
          var c = b;
          b = null;
          c()
        }
      }
    };
  var Qk = function(a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1)
    },
    Rk = function(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1)
    };
  var Sk, Tk;
  a: {
    for (var Uk = ["CLOSURE_FLAGS"], Vk = Ca, Wk = 0; Wk < Uk.length; Wk++)
      if (Vk = Vk[Uk[Wk]], Vk == null) {
        Tk = null;
        break a
      } Tk = Vk
  }
  var Xk = Tk && Tk[610401301];
  Sk = Xk != null ? Xk : !1;

  function Yk() {
    var a = Ca.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b
    }
    return ""
  }
  var Zk, $k = Ca.navigator;
  Zk = $k ? $k.userAgentData || null : null;

  function al(a) {
    return Sk ? Zk ? Zk.brands.some(function(b) {
      var c;
      return (c = b.brand) && c.indexOf(a) != -1
    }) : !1 : !1
  }

  function bl(a) {
    return Yk().indexOf(a) != -1
  };

  function cl() {
    return Sk ? !!Zk && Zk.brands.length > 0 : !1
  }

  function dl() {
    return cl() ? !1 : bl("Opera")
  }

  function el() {
    return bl("Firefox") || bl("FxiOS")
  }

  function fl() {
    return cl() ? al("Chromium") : (bl("Chrome") || bl("CriOS")) && !(cl() ? 0 : bl("Edge")) || bl("Silk")
  };

  function gl() {
    return Sk ? !!Zk && !!Zk.platform : !1
  }

  function hl() {
    return bl("iPhone") && !bl("iPod") && !bl("iPad")
  }

  function il() {
    hl() || bl("iPad") || bl("iPod")
  };
  var jl = function(a) {
    jl[" "](a);
    return a
  };
  jl[" "] = function() {};
  dl();
  cl() || bl("Trident") || bl("MSIE");
  bl("Edge");
  !bl("Gecko") || Yk().toLowerCase().indexOf("webkit") != -1 && !bl("Edge") || bl("Trident") || bl("MSIE") || bl("Edge");
  Yk().toLowerCase().indexOf("webkit") != -1 && !bl("Edge") && bl("Mobile");
  gl() || bl("Macintosh");
  gl() || bl("Windows");
  (gl() ? Zk.platform === "Linux" : bl("Linux")) || gl() || bl("CrOS");
  gl() || bl("Android");
  hl();
  bl("iPad");
  bl("iPod");
  il();
  Yk().toLowerCase().indexOf("kaios");
  var kl = function(a, b, c, d) {
      for (var e = b, f = c.length;
        (e = a.indexOf(c, e)) >= 0 && e < d;) {
        var g = a.charCodeAt(e - 1);
        if (g == 38 || g == 63) {
          var h = a.charCodeAt(e + f);
          if (!h || h == 61 || h == 38 || h == 35) return e
        }
        e += f + 1
      }
      return -1
    },
    ll = /#|$/,
    ml = function(a, b) {
      var c = a.search(ll),
        d = kl(a, 0, b, c);
      if (d < 0) return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
    },
    nl = /[?&]($|#)/,
    ol = function(a, b, c) {
      for (var d, e = a.search(ll), f = 0, g, h = [];
        (g = kl(a, f, b, e)) >= 0;) h.push(a.substring(f,
        g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
      h.push(a.slice(f));
      d = h.join("").replace(nl, "$1");
      var m, n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q, r = d.indexOf("#");
        r < 0 && (r = d.length);
        var t = d.indexOf("?"),
          u;
        t < 0 || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? v ? v + "&" + p : p : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
      } else m = d;
      return m
    };
  var pl = function(a) {
      try {
        var b;
        if (b = !!a && a.location.href != null) a: {
          try {
            jl(a.foo);
            b = !0;
            break a
          } catch (c) {}
          b = !1
        }
        return b
      } catch (c) {
        return !1
      }
    },
    ql = function(a, b) {
      if (a)
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };

  function rl(a) {
    if (!a || !H.head) return null;
    var b = sl("META");
    H.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b
  }
  var tl = function(a) {
      if (G.top == G) return 0;
      if (a === void 0 ? 0 : a) {
        var b = G.location.ancestorOrigins;
        if (b) return b[b.length - 1] == G.location.origin ? 1 : 2
      }
      return pl(G.top) ? 1 : 2
    },
    sl = function(a, b) {
      b = b === void 0 ? document : b;
      return b.createElement(String(a).toLowerCase())
    };
  var ul = "",
    vl, wl = [],
    xl = !1;

  function yl() {
    var a = V(G.location.href);
    return a.hostname + a.pathname
  }

  function zl() {
    var a = [];
    ul && a.push(["dl", encodeURIComponent(ul)]);
    wl.length > 0 && a.push(["tdp", wl.join(".")]);
    vl !== void 0 && a.push(["frm", String(vl)]);
    return a
  }
  var Al = function(a) {
    var b = xl ? [] : zl();
    !xl && a.Ya && (xl = !0, b.length && a.Kc());
    return b
  };

  function Bl() {
    if (U(41)) {
      var a = yl();
      a && Hk("dl", encodeURIComponent(a));
      Hk("tdp", function() {
        return wl.length > 0 ? wl.join(".") : void 0
      });
      var b = tl(!0);
      b !== void 0 && Hk("frm", String(b))
    } else lk.push(Al)
  };
  var Cl = [],
    Dl = [];

  function El(a) {
    if (U(41)) Hk(a, "1");
    else {
      if (Dl.indexOf(a) !== -1) return;
      Cl.push(a);
      Dl.push(a)
    }
    Kk()
  }

  function Fl(a) {
    if (!Cl.length) return [];
    for (var b = zl(), c = pa(Cl), d = c.next(); !d.done; d = c.next()) b.push([d.value, "1"]);
    a.Ya && (a.Kc(), Cl.length = 0);
    return b
  };

  function Gl(a) {
    mb("HEALTH", a)
  };
  var Hl;
  try {
    Hl = JSON.parse(kb("eyIwIjoiR0IiLCIxIjoiIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUuY28udWsiLCI0IjoicmVnaW9uMSIsIjUiOmZhbHNlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"))
  } catch (a) {
    P(123), Gl(2), Hl = {}
  }

  function Il() {
    return Hl["0"] || ""
  }

  function Jl() {
    return Hl["1"] || ""
  }

  function Kl() {
    var a = !1;
    return a
  }

  function Ll() {
    return Hl["6"] !== !1
  }

  function Ml() {
    var a = "";
    return a
  }

  function Nl() {
    var a = !1;
    return a
  }

  function Ol() {
    var a = "";
    return a
  }
  var Pl = new function(a, b) {
    this.m = a;
    this.defaultValue = b === void 0 ? !1 : b
  }(1933);

  function Ql() {
    var a = uc("google_tag_data", {});
    return a.ics = a.ics || new Rl
  }
  var Rl = function() {
    this.entries = {};
    this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
    this.m = []
  };
  Rl.prototype.default = function(a, b, c, d, e, f, g) {
    this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    mb("TAGGING", 19);
    b == null ? mb("TAGGING", 18) : Sl(this, a, b === "granted", c, d, e, f, g)
  };
  Rl.prototype.waitForUpdate = function(a, b, c) {
    for (var d = 0; d < a.length; d++) Sl(this, a[d], void 0, void 0, "", "", b, c)
  };
  var Sl = function(a, b, c, d, e, f, g, h) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && l(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && g > 0 && n.update === void 0),
        t = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: c !== void 0 ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r
        };
      if (e !== "" || n.default !== !1) m[b] = t;
      r && G.setTimeout(function() {
        m[b] === t && t.quiet && (mb("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0, h),
          a.notifyListeners())
      }, g)
    }
  };
  ca = Rl.prototype;
  ca.clearTimeout = function(a, b, c) {
    var d = [a],
      e = (c == null ? void 0 : c.delegatedConsentTypes) || {},
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      h = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = pa(d), n = m.next(); !n.done; n = m.next()) Tl(this, n.value)
    } else if (b !== void 0 && h !== b)
      for (var p = pa(d), q = p.next(); !q.done; q = p.next()) Tl(this, q.value)
  };
  ca.update = function(a, b, c) {
    this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (b != null) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = b === "granted";
      this.clearTimeout(a, d, c)
    }
  };
  ca.declare = function(a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      h = g.declare_region,
      m = c && l(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (d === "" || m === e || (m === d ? h !== e : !m && !h)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: b === "granted",
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet
      };
      if (d !== "" || g.declare !== !1) f[a] = n
    }
  };
  ca.implicit = function(a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = c[a] = c[a] || {};
    d.implicit !== !1 && (d.implicit = b === "granted")
  };
  ca.getConsentState = function(a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (e !== void 0) return e ? 1 : 2;
    e = d.default;
    if (e !== void 0) return e ? 1 : 2;
    if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var f = c[b.delegatedConsentTypes[a]] || {};
      e = f.update;
      if (e !== void 0) return e ? 1 : 2;
      e = f.default;
      if (e !== void 0) return e ? 1 : 2
    }
    e = d.declare;
    if (e !== void 0) return e ? 1 : 2;
    e = d.implicit;
    return e !== void 0 ? e ? 3 : 4 : 0
  };
  ca.addListener = function(a, b) {
    this.m.push({
      consentTypes: a,
      Bl: b
    })
  };
  var Tl = function(a, b) {
    for (var c = 0; c < a.m.length; ++c) {
      var d = a.m[c];
      Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.Uj = !0)
    }
  };
  Rl.prototype.notifyListeners = function(a, b) {
    for (var c = 0; c < this.m.length; ++c) {
      var d = this.m[c];
      if (d.Uj) {
        d.Uj = !1;
        try {
          d.Bl({
            consentEventId: a,
            consentPriorityId: b
          })
        } catch (e) {}
      }
    }
  };
  var Vl = function() {
    var a = Ul,
      b = "th";
    if (a.th && a.hasOwnProperty(b)) return a.th;
    var c = new a;
    return a.th = c
  };
  var Ul = function() {
    var a = {};
    this.m = function() {
      var b = Pl.m,
        c = Pl.defaultValue;
      return a[b] != null ? a[b] : c
    };
    this.F = function() {
      a[Pl.m] = !0
    }
  };
  var Wl = !1,
    Xl = !1,
    Yl = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1
    },
    Zl = function(a) {
      var b = Ql();
      b.accessedAny = !0;
      return (l(a) ? [a] : a).every(function(c) {
        switch (b.getConsentState(c, Yl)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0
        }
      })
    },
    $l = function(a) {
      var b = Ql();
      b.accessedAny = !0;
      return b.getConsentState(a, Yl)
    },
    am = function(a) {
      for (var b = {}, c = pa(a), d = c.next(); !d.done; d = c.next()) {
        var e = d.value;
        b[e] = Yl.corePlatformServices[e] !== !1
      }
      return b
    },
    bm = function(a) {
      var b =
        Ql();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet
    },
    cm = function() {
      if (!Vl().m()) return !1;
      var a = Ql();
      a.accessedAny = !0;
      return a.active
    },
    dm = function(a, b) {
      Ql().addListener(a, b)
    },
    em = function(a, b) {
      Ql().notifyListeners(a, b)
    },
    fm = function(a, b) {
      function c() {
        for (var e = 0; e < b.length; e++)
          if (!bm(b[e])) return !0;
        return !1
      }
      if (c()) {
        var d = !1;
        dm(b, function(e) {
          d || c() || (d = !0, a(e))
        })
      } else a({})
    },
    gm = function(a, b) {
      function c() {
        for (var h = [], m = 0; m < e.length; m++) {
          var n = e[m];
          Zl(n) && !f[n] && h.push(n)
        }
        return h
      }

      function d(h) {
        for (var m =
            0; m < h.length; m++) f[h[m]] = !0
      }
      var e = l(b) ? [b] : b,
        f = {},
        g = c();
      g.length !== e.length && (d(g), dm(e, function(h) {
        function m(q) {
          q.length !== 0 && (d(q), h.consentTypes = q, a(h))
        }
        var n = c();
        if (n.length !== 0) {
          var p = Object.keys(f).length;
          n.length + p >= e.length ? m(n) : G.setTimeout(function() {
            m(c())
          }, 500)
        }
      }))
    };
  var hm = [Q.g.T, Q.g.W, Q.g.P, Q.g.Aa],
    im, jm;

  function km(a) {
    for (var b = a[Q.g.nc], c = Array.isArray(b) ? b : [b], d = {
        Ce: 0
      }; d.Ce < c.length; d = {
        Ce: d.Ce
      }, ++d.Ce) z(a, function(e) {
      return function(f, g) {
        if (f !== Q.g.nc) {
          var h = c[e.Ce],
            m = Il(),
            n = Jl();
          Xl = !0;
          Wl && mb("TAGGING", 20);
          Ql().declare(f, g, h, m, n)
        }
      }
    }(d))
  }

  function lm(a) {
    !jm && im && El("crc");
    jm = !0;
    var b = a[Q.g.nc];
    b && P(40);
    var c = a[Q.g.Se];
    c && P(41);
    for (var d = Array.isArray(b) ? b : [b], e = {
        De: 0
      }; e.De < d.length; e = {
        De: e.De
      }, ++e.De) z(a, function(f) {
      return function(g, h) {
        if (g !== Q.g.nc && g !== Q.g.Se) {
          var m = d[f.De],
            n = Number(c),
            p = Il(),
            q = Jl();
          n = n === void 0 ? 0 : n;
          Wl = !0;
          Xl && mb("TAGGING", 20);
          Ql().default(g, h, m, p, q, n, Yl)
        }
      }
    }(e))
  }

  function mm(a, b) {
    im = !0;
    z(a, function(c, d) {
      Wl = !0;
      Xl && mb("TAGGING", 20);
      Ql().update(c, d, Yl)
    });
    em(b.eventId, b.priorityId)
  }

  function nm(a) {
    a.hasOwnProperty("all") && z(li, function(b) {
      Yl.corePlatformServices[b] = a.all === "granted";
      Yl.usedCorePlatformServices = !0
    });
    z(a, function(b, c) {
      b !== "all" && (Yl.corePlatformServices[b] = c === "granted", Yl.usedCorePlatformServices = !0)
    })
  }

  function X(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function(b) {
      return Zl(b)
    })
  }

  function om(a, b) {
    dm(a, b)
  }

  function pm(a, b) {
    gm(a, b)
  }

  function qm(a, b) {
    fm(a, b)
  }

  function rm() {
    var a = [Q.g.T, Q.g.Aa, Q.g.P];
    Ql().waitForUpdate(a, 500, Yl)
  }

  function sm(a) {
    for (var b = pa(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      Ql().clearTimeout(d, void 0, Yl)
    }
    em()
  }
  var tm = function() {
    if (ni.pscdl === void 0) {
      var a = function(b) {
        ni.pscdl = b
      };
      try {
        "cookieDeprecationLabel" in qc ? (a("pending"), qc.cookieDeprecationLabel.getValue().then(a)) : a("noapi")
      } catch (b) {
        a("error")
      }
    }
  };
  var um = /[A-Z]+/,
    vm = /\s/;

  function wm(a, b) {
    if (l(a)) {
      a = Bb(a);
      var c = a.indexOf("-");
      if (!(c < 0)) {
        var d = a.substring(0, c);
        if (um.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function(n) {
              var p = n.indexOf("/");
              return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)]
            };
            f = g(e);
            if (d === "DC" && f.length === 2) {
              var h = g(f[1]);
              h.length === 2 && (f[1] = h[0], f.push(h[1]))
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || vm.test(f[m]) && (d !== "AW" || m !== 1)) return
          }
          return {
            id: a,
            prefix: d,
            ka: d + "-" + f[0],
            ma: f
          }
        }
      }
    }
  }

  function xm(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = wm(a[d], b);
      e && (c[e.id] = e)
    }
    ym(c);
    var f = [];
    z(c, function(g, h) {
      f.push(h)
    });
    return f
  }

  function ym(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        d.prefix === "AW" && d.ma[zm[2]] && b.push(d.ka)
      } for (var e = 0; e < b.length; ++e) delete a[b[e]]
  }
  var Am = {},
    zm = (Am[0] = 0, Am[1] = 0, Am[2] = 1, Am[3] = 0, Am[4] = 1, Am[5] = 2, Am[6] = 0, Am[7] = 0, Am[8] = 0, Am);
  var Bm = Number('') || 500,
    Cm = [],
    Dm = {},
    Em = {},
    Fm = {
      initialized: 11,
      complete: 12,
      interactive: 13
    },
    Gm = {},
    Hm = Object.freeze((Gm[Q.g.Ka] = !0, Gm)),
    Im = H.location.search.indexOf("?gtm_diagnostics=") >= 0 || H.location.search.indexOf("&gtm_diagnostics=") >= 0,
    Jm = void 0;

  function Km(a, b) {
    if (b.length && Aj)
      if (U(43)) {
        var c;
        (c = Dm)[a] != null || (c[a] = []);
        Em[a] != null || (Em[a] = []);
        var d = b.filter(function(e) {
          return !Em[a].includes(e)
        });
        Dm[a].push.apply(Dm[a], ra(d));
        Em[a].push.apply(Em[a], ra(d));
        !Jm && d.length > 0 && (Ec(G, "pagehide", Lm), Jm = G.setTimeout(function() {
          Fc(G, "pagehide", Lm);
          Kk();
          Cm.length = 0;
          Dm = {};
          Jm = void 0
        }, Bm))
      } else Cm.push(a + "*" + b.join("."))
  }

  function Mm(a, b, c) {
    if (Aj && a === "config") {
      var d, e = (d = wm(b)) == null ? void 0 : d.ma;
      if (!(e && e.length > 1)) {
        var f, g = uc("google_tag_data", {});
        g.td || (g.td = {});
        f = g.td;
        var h = k(c.M);
        k(c.m, h);
        var m = [],
          n;
        for (n in f)
          if (f.hasOwnProperty(n)) {
            var p = Nm(f[n], h);
            p.length && (Im && console.log(p), m.push(n))
          } m.length && (Km(b, m), mb("TAGGING", Fm[H.readyState] || 14));
        f[b] = h
      }
    }
  }

  function Om(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c
  }

  function Nm(a, b, c, d) {
    c = c === void 0 ? {} : c;
    d = d === void 0 ? "" : d;
    if (a === b) return [];
    var e = function(r, t) {
        var u;
        Va(t) === "object" ? u = t[r] : Va(t) === "array" && (u = t[r]);
        return u === void 0 ? Hm[r] : u
      },
      f = Om(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var h = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = Va(m) === "object" || Va(m) === "array",
          q = Va(n) === "object" || Va(n) === "array";
        if (p && q) Nm(m, n, c, h);
        else if (p || q || m !== n) c[h] = !0
      } return Object.keys(c)
  }

  function Pm(a) {
    var b = [];
    if (U(43)) {
      if (Object.keys(Dm).length === 0) return [];
      for (var c in Dm) Dm.hasOwnProperty(c) && b.push(c + "*" + Dm[c].join("."))
    } else {
      if (!Cm.length) return [];
      b = Cm
    }
    var d = [["tdc", b.join("!")]];
    a.Ya && (a.Kc(), Cm.length = 0);
    return d
  }

  function Lm() {
    Object.keys(Dm).length !== 0 && (G.clearTimeout(Jm), yk())
  };
  var Qm = function(a, b, c, d, e, f, g, h, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.m = c;
      this.R = d;
      this.J = e;
      this.M = f;
      this.F = g;
      this.eventMetadata = h;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p
    },
    Rm = function(a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.m);
          c.push(a.R);
          c.push(a.J);
          c.push(a.M);
          c.push(a.F);
          break;
        case 2:
          c.push(a.m);
          break;
        case 1:
          c.push(a.R);
          c.push(a.J);
          c.push(a.M);
          c.push(a.F);
          break;
        case 4:
          c.push(a.m), c.push(a.R), c.push(a.J), c.push(a.M)
      }
      return c
    },
    W = function(a, b, c, d) {
      for (var e = pa(Rm(a, d === void 0 ? 3 :
          d)), f = e.next(); !f.done; f = e.next()) {
        var g = f.value;
        if (g[b] !== void 0) return g[b]
      }
      return c
    },
    Sm = function(a) {
      for (var b = {}, c = Rm(a, 4), d = pa(c), e = d.next(); !e.done; e = d.next())
        for (var f = Object.keys(e.value), g = pa(f), h = g.next(); !h.done; h = g.next()) b[h.value] = 1;
      return Object.keys(b)
    },
    Tm = function(a, b, c) {
      function d(n) {
        Ya(n) && z(n, function(p, q) {
          f = !0;
          e[p] = q
        })
      }
      var e = {},
        f = !1,
        g = Rm(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var h = pa(g), m = h.next(); !m.done; m = h.next()) d(m.value[b]);
      return f ? e : void 0
    },
    Um = function(a) {
      for (var b = [Q.g.Sc,
Q.g.Oc, Q.g.Pc, Q.g.Qc, Q.g.Rc, Q.g.Tc, Q.g.Uc], c = Rm(a, 3), d = pa(c), e = d.next(); !e.done; e = d.next()) {
        for (var f = e.value, g = {}, h = !1, m = pa(b), n = m.next(); !n.done; n = m.next()) {
          var p = n.value;
          f[p] !== void 0 && (g[p] = f[p], h = !0)
        }
        var q = h ? g : void 0;
        if (q) return q
      }
      return {}
    },
    Vm = function(a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.F = {};
      this.R = {};
      this.m = {};
      this.J = {};
      this.aa = {};
      this.M = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function() {};
      this.onFailure = function() {}
    },
    Wm = function(a, b) {
      a.F = b;
      return a
    },
    Xm = function(a,
      b) {
      a.R = b;
      return a
    },
    Ym = function(a, b) {
      a.m = b;
      return a
    },
    Zm = function(a, b) {
      a.J = b;
      return a
    },
    $m = function(a, b) {
      a.aa = b;
      return a
    },
    an = function(a, b) {
      a.M = b;
      return a
    },
    bn = function(a, b) {
      a.eventMetadata = b || {};
      return a
    },
    cn = function(a, b) {
      a.onSuccess = b;
      return a
    },
    dn = function(a, b) {
      a.onFailure = b;
      return a
    },
    en = function(a, b) {
      a.isGtmEvent = b;
      return a
    },
    fn = function(a) {
      return new Qm(a.eventId, a.priorityId, a.F, a.R, a.m, a.J, a.M, a.eventMetadata, a.onSuccess, a.onFailure, a.isGtmEvent)
    };
  var gn = {};

  function hn(a, b, c) {
    zj && a !== void 0 && (gn[a] = gn[a] || [], gn[a].push(c + b), zk(a))
  }

  function jn(a) {
    var b = a.eventId,
      c = a.Ya,
      d = [],
      e = gn[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete gn[b];
    return d
  };

  function kn(a, b) {
    var c = wm(Mj(a), !0);
    c && ln.register(c, b)
  }

  function mn(a, b, c, d) {
    var e = wm(c, d.isGtmEvent);
    e && ln.push("event", [b, a], e, d)
  }

  function nn(a, b, c, d) {
    var e = wm(c, d.isGtmEvent);
    e && ln.push("get", [a, b], e, d)
  }

  function on(a) {
    var b = wm(Mj(a), !0),
      c;
    b ? c = pn(ln, b).m : c = {};
    return c
  }

  function qn(a, b) {
    var c = wm(Mj(a), !0);
    if (c) {
      var d = ln,
        e = k(b, null);
      k(pn(d, c).m, e);
      pn(d, c).m = e
    }
  }
  var rn = function() {
      this.R = {};
      this.m = {};
      this.F = {};
      this.aa = null;
      this.M = {};
      this.J = !1;
      this.status = 1
    },
    sn = function(a, b, c, d) {
      this.F = Db();
      this.m = b;
      this.args = c;
      this.messageContext = d;
      this.type = a
    },
    tn = function() {
      this.destinations = {};
      this.F = {};
      this.m = []
    },
    pn = function(a, b) {
      var c = b.ka;
      return a.destinations[c] = a.destinations[c] || new rn
    },
    un = function(a, b, c, d) {
      if (d.m) {
        var e = pn(a, d.m),
          f = e.aa;
        if (f) {
          var g = k(c, null),
            h = k(e.R[d.m.id], null),
            m = k(e.M, null),
            n = k(e.m, null),
            p = k(a.F, null),
            q = {};
          if (zj) try {
            q = k(Ji)
          } catch (v) {
            P(72)
          }
          var r =
            d.m.prefix,
            t = function(v) {
              hn(d.messageContext.eventId, r, v)
            },
            u = fn(en(dn(cn(bn($m(Zm(an(Ym(Xm(Wm(new Vm(d.messageContext.eventId, d.messageContext.priorityId), g), h), m), n), p), q), d.messageContext.eventMetadata), function() {
              if (t) {
                var v = t;
                t = void 0;
                v("2");
                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
              }
            }), function() {
              if (t) {
                var v = t;
                t = void 0;
                v("3");
                if (d.messageContext.onFailure) d.messageContext.onFailure()
              }
            }), !!d.messageContext.isGtmEvent));
          try {
            hn(d.messageContext.eventId, r, "1"), Mm(d.type, d.m.id, u),
              f(d.m.id, b, d.F, u)
          } catch (v) {
            hn(d.messageContext.eventId, r, "4")
          }
        }
      }
    };
  tn.prototype.register = function(a, b, c) {
    var d = pn(this, a);
    d.status !== 3 && (d.aa = b, d.status = 3, c && (k(d.m, c), d.m = c), this.flush())
  };
  tn.prototype.push = function(a, b, c, d) {
    c !== void 0 && (pn(this, c).status === 1 && (pn(this, c).status = 2, this.push("require", [{}], c, {})), pn(this, c).J && (d.deferrable = !1));
    this.m.push(new sn(a, c, b, d));
    d.deferrable || this.flush()
  };
  tn.prototype.flush = function(a) {
    for (var b = this, c = [], d = !1, e = {}; this.m.length; e = {
        Dc: void 0,
        jh: void 0
      }) {
      var f = this.m[0],
        g = f.m;
      if (f.messageContext.deferrable) !g || pn(this, g).J ? (f.messageContext.deferrable = !1, this.m.push(f)) : c.push(f), this.m.shift();
      else {
        switch (f.type) {
          case "require":
            if (pn(this, g).status !== 3 && !a) {
              this.m.push.apply(this.m, c);
              return
            }
            break;
          case "set":
            z(f.args[0], function(r, t) {
              k(Kb(r, t), b.F)
            });
            break;
          case "config":
            var h = pn(this, g);
            e.Dc = {};
            z(f.args[0], function(r) {
              return function(t, u) {
                k(Kb(t, u),
                  r.Dc)
              }
            }(e));
            var m = !!e.Dc[Q.g.ac];
            delete e.Dc[Q.g.ac];
            var n = g.ka === g.id;
            m || (n ? h.M = {} : h.R[g.id] = {});
            h.J && m || un(this, Q.g.da, e.Dc, f);
            h.J = !0;
            n ? k(e.Dc, h.M) : (k(e.Dc, h.R[g.id]), P(70));
            d = !0;
            break;
          case "event":
            e.jh = {};
            z(f.args[0], function(r) {
              return function(t, u) {
                k(Kb(t, u), r.jh)
              }
            }(e));
            un(this, f.args[1], e.jh, f);
            break;
          case "get":
            var p = {},
              q = (p[Q.g.rb] = f.args[0], p[Q.g.Gb] = f.args[1], p);
            un(this, Q.g.Ta, q, f)
        }
        this.m.shift();
        vn(this, f)
      }
    }
    this.m.push.apply(this.m, c);
    d && this.flush()
  };
  var vn = function(a, b) {
      if (b.type !== "require")
        if (b.m)
          for (var c = pn(a, b.m).F[b.type] || [], d = 0; d < c.length; d++) c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.F)
                for (var g = f.F[b.type] || [], h = 0; h < g.length; h++) g[h]()
            }
    },
    ln = new tn;

  function wn(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = sl("IMG", a.document);
    if (c) {
      var f = function() {
        if (c) {
          var g = a.google_image_requests,
            h = kc(g, e);
          h >= 0 && Array.prototype.splice.call(g, h, 1)
        }
        Rk(e, "load", f);
        Rk(e, "error", f)
      };
      Qk(e, "load", f);
      Qk(e, "error", f)
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e)
  }
  var yn = function(a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      ql(a, function(d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d)
      });
      xn(c, b)
    },
    xn = function(a, b) {
      var c = window,
        d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors"
        };
        d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
            eventSourceEligible: "true",
            triggerEligible: "false"
          } :
          e.headers = {
            "Attribution-Reporting-Eligible": "event-source"
          });
        c.fetch(a, e)
      } else wn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d)
    };
  var zn = function() {
    this.R = this.R;
    this.F = this.F
  };
  zn.prototype.R = !1;
  zn.prototype.dispose = function() {
    this.R || (this.R = !0, this.Qa())
  };
  zn.prototype.addOnDisposeCallback = function(a, b) {
    this.R ? b !== void 0 ? a.call(b) : a() : (this.F || (this.F = []), this.F.push(b !== void 0 ? Fa(a, b) : a))
  };
  zn.prototype.Qa = function() {
    if (this.F)
      for (; this.F.length;) this.F.shift()()
  };
  var An = function(a) {
      a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
      a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
      return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    },
    Bn = function(a, b) {
      b = b === void 0 ? {} : b;
      zn.call(this);
      this.J = a;
      this.m = null;
      this.aa = {};
      this.od = 0;
      var c;
      this.hc = (c = b.Xm) != null ? c : 500;
      var d;
      this.bc = (d = b.Mn) != null ? d : !1;
      this.M =
        null
    };
  za(Bn, zn);
  Bn.prototype.Qa = function() {
    this.aa = {};
    this.M && (Rk(this.J, "message", this.M), delete this.M);
    delete this.aa;
    delete this.J;
    delete this.m;
    zn.prototype.Qa.call(this)
  };
  var Dn = function(a) {
    return typeof a.J.__tcfapi === "function" || Cn(a) != null
  };
  Bn.prototype.addEventListener = function(a) {
    var b = this,
      c = {
        internalBlockOnErrors: this.bc
      },
      d = Pk(function() {
        return a(c)
      }),
      e = 0;
    this.hc !== -1 && (e = setTimeout(function() {
      c.tcString = "tcunavailable";
      c.internalErrorState = 1;
      d()
    }, this.hc));
    var f = function(g, h) {
      clearTimeout(e);
      g ? (c = g, c.internalErrorState = An(c), c.internalBlockOnErrors = b.bc, h && c.internalErrorState === 0 || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
      a(c)
    };
    try {
      En(this, "addEventListener", f)
    } catch (g) {
      c.tcString =
        "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
    }
  };
  Bn.prototype.removeEventListener = function(a) {
    a && a.listenerId && En(this, "removeEventListener", null, a.listenerId)
  };
  var Gn = function(a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (f !== void 0) {
            e = f[d === void 0 ? "755" : d];
            break a
          }
        }
        e = void 0
      }
      var g = e;
      if (g === 0) return !1;
      var h = c;
      c === 2 ? (h = 0, g === 2 && (h = 1)) : c === 3 && (h = 1, g === 1 && (h = 0));
      var m;
      if (h === 0)
        if (a.purpose && a.vendor) {
          var n = Fn(a.vendor.consents, d === void 0 ? "755" : d);
          m = n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : n && Fn(a.purpose.consents, b)
        } else m = !0;
      else m = h === 1 ? a.purpose && a.vendor ? Fn(a.purpose.legitimateInterests,
        b) && Fn(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
      return m
    },
    Fn = function(a, b) {
      return !(!a || !a[b])
    },
    En = function(a, b, c, d) {
      c || (c = function() {});
      if (typeof a.J.__tcfapi === "function") {
        var e = a.J.__tcfapi;
        e(b, 2, c, d)
      } else if (Cn(a)) {
        Hn(a);
        var f = ++a.od;
        a.aa[f] = c;
        if (a.m) {
          var g = {};
          a.m.postMessage((g.__tcfapiCall = {
            command: b,
            version: 2,
            callId: f,
            parameter: d
          }, g), "*")
        }
      } else c({}, !1)
    },
    Cn = function(a) {
      if (a.m) return a.m;
      var b;
      a: {
        for (var c = a.J, d = 0; d < 50; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator)
          } catch (h) {
            e = !1
          }
          if (e) {
            b = c;
            break a
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b
              }
            } catch (h) {}
            f = null
          }
          if (!(c = f)) break
        }
        b = null
      }
      a.m = b;
      return a.m
    },
    Hn = function(a) {
      a.M || (a.M = function(b) {
        try {
          var c;
          c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.aa[c.callId](c.returnValue, c.success)
        } catch (d) {}
      }, Qk(a.J, "message", a.M))
    },
    In = function(a) {
      if (a.gdprApplies === !1) return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = An(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ?
        (yn({
          e: String(a.internalErrorState)
        }), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    };
  var Jn = {
    1: 0,
    3: 0,
    4: 0,
    7: 3,
    9: 3,
    10: 3
  };

  function Kn() {
    var a = ni.tcf || {};
    return ni.tcf = a
  }
  var Ln = function() {
      return new Bn(G, {
        Xm: -1
      })
    },
    Rn = function() {
      var a = Kn(),
        b = Ln();
      Dn(b) && !Mn() && !Nn() && P(124);
      if (!a.active && Dn(b)) {
        Mn() && (a.active = !0, a.mc = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, Ql().active = !0, a.tcString = "tcunavailable");
        rm();
        try {
          b.addEventListener(function(c) {
            if (c.internalErrorState !== 0) On(a), sm([Q.g.T, Q.g.Aa, Q.g.P]), Ql().active = !0;
            else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, Nn() && (a.active = !0), !Pn(c) || Mn() || Nn()) {
              a.tcfPolicyVersion =
                c.tcfPolicyVersion;
              var d;
              if (c.gdprApplies === !1) {
                var e = {},
                  f;
                for (f in Jn) Jn.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c)
              } else if (Pn(c)) {
                var g = {},
                  h;
                for (h in Jn)
                  if (Jn.hasOwnProperty(h))
                    if (h === "1") {
                      var m, n = c,
                        p = {
                          Fl: !0
                        };
                      p = p === void 0 ? {} : p;
                      m = In(n) ? n.gdprApplies === !1 ? !0 : n.tcString === "tcunavailable" ? !p.Mj : (p.Mj || n.gdprApplies !== void 0 || p.Fl) && (p.Mj || typeof n.tcString === "string" && n.tcString.length) ? Gn(n, "1", 0) : !0 : !1;
                      g["1"] = m
                    } else g[h] = Gn(c, h, Jn[h]);
                d = g
              }
              if (d) {
                a.tcString = c.tcString || "tcempty";
                a.mc =
                  d;
                var q = {},
                  r = (q[Q.g.T] = a.mc["1"] ? "granted" : "denied", q);
                a.gdprApplies !== !0 ? (sm([Q.g.T, Q.g.Aa, Q.g.P]), Ql().active = !0) : (r[Q.g.Aa] = a.mc["3"] && a.mc["4"] ? "granted" : "denied", typeof a.tcfPolicyVersion === "number" && a.tcfPolicyVersion >= 4 ? r[Q.g.P] = a.mc["1"] && a.mc["7"] ? "granted" : "denied" : sm([Q.g.P]), mm(r, {
                  eventId: 0
                }, {
                  gdprApplies: a ? a.gdprApplies : void 0,
                  tcString: Qn() || ""
                }))
              }
            } else sm([Q.g.T, Q.g.Aa, Q.g.P])
          })
        } catch (c) {
          On(a), sm([Q.g.T, Q.g.Aa, Q.g.P]), Ql().active = !0
        }
      }
    };

  function On(a) {
    a.type = "e";
    a.tcString = "tcunavailable"
  }

  function Pn(a) {
    return a.eventStatus === "tcloaded" || a.eventStatus === "useractioncomplete" || a.eventStatus === "cmpuishown"
  }
  var Mn = function() {
    return G.gtag_enable_tcf_support === !0
  };

  function Nn() {
    return Kn().enableAdvertiserConsentMode === !0
  }
  var Qn = function() {
      var a = Kn();
      if (a.active) return a.tcString
    },
    bo = function() {
      var a = Kn();
      if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0"
    },
    co = function(a) {
      if (!Jn.hasOwnProperty(String(a))) return !0;
      var b = Kn();
      return b.active && b.mc ? !!b.mc[String(a)] : !0
    };
  var eo = [Q.g.T, Q.g.W, Q.g.P, Q.g.Aa],
    fo = {},
    go = (fo[Q.g.T] = 1, fo[Q.g.W] = 2, fo);

  function ho(a) {
    if (a === void 0) return 0;
    switch (W(a, Q.g.oa)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2
    }
  }
  var io = function(a) {
      if (U(60) && Jl() === "US-CO" && qc.globalPrivacyControl === !0) return !1;
      var b = ho(a);
      if (b === 3) return !1;
      switch ($l(Q.g.Aa)) {
        case 1:
        case 3:
          return !0;
        case 2:
          return !1;
        case 4:
          return b === 2;
        case 0:
          return !0;
        default:
          return !1
      }
    },
    jo = function() {
      return cm() || !Zl(Q.g.T) || !Zl(Q.g.W)
    },
    ko = function() {
      var a = {},
        b;
      for (b in go) go.hasOwnProperty(b) && (a[go[b]] = $l(b));
      return "G1" + Fe(a[1] || 0) + Fe(a[2] || 0)
    },
    lo = {},
    mo = (lo[Q.g.T] = 0, lo[Q.g.W] = 1, lo[Q.g.P] = 2, lo[Q.g.Aa] = 3, lo);

  function no(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0
    }
  }
  var oo = function(a) {
      for (var b = "1", c = 0; c < eo.length; c++) {
        var d = b,
          e, f = eo[c],
          g = Yl.delegatedConsentTypes[f];
        e = g === void 0 ? 0 : mo.hasOwnProperty(g) ? 12 | mo[g] : 8;
        var h = Ql();
        h.accessedAny = !0;
        var m = h.entries[f] || {};
        e = e << 2 | no(m.implicit);
        b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [no(m.declare) << 4 | no(m.default) << 2 | no(m.update)])
      }
      var n = b,
        p;
      p = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [(cm() ?
        1 : 0) << 2 | ho(a)];
      return n + p
    },
    po = function() {
      if (!Zl(Q.g.P)) return "-";
      for (var a = Object.keys(li), b = am(a), c = "", d = pa(a), e = d.next(); !e.done; e = d.next()) {
        var f = e.value;
        b[f] && (c += li[f])
      }
      return c || "-"
    },
    qo = function() {
      return Ll() || (Mn() || Nn()) && bo() === "1" ? "1" : "0"
    },
    ro = function() {
      return (Ll() ? !0 : !(!Mn() && !Nn()) && bo() === "1") || !Zl(Q.g.P)
    },
    so = function() {
      var a = "0",
        b = "0",
        c;
      var d = Kn();
      c = d.active ? d.cmpId : void 0;
      typeof c === "number" && c >= 0 && c <= 4095 && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 &
63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
      var e = "0",
        f;
      var g = Kn();
      f = g.active ? g.tcfPolicyVersion : void 0;
      typeof f === "number" && f >= 0 && f <= 63 && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
      var h = 0;
      Ll() && (h |= 1);
      bo() === "1" && (h |= 2);
      Mn() && (h |= 4);
      var m;
      var n = Kn();
      m = n.enableAdvertiserConsentMode !== void 0 ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
      m === "1" && (h |= 8);
      Ql().waitPeriodTimedOut && (h |= 16);
      return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [h]
    };

  function to() {
    var a = !1;
    return a
  };
  var uo = {
    UA: 1,
    AW: 2,
    DC: 3,
    G: 4,
    GF: 5,
    GT: 12,
    GTM: 14,
    HA: 6,
    MC: 7
  };

  function vo(a) {
    a = a === void 0 ? {} : a;
    var b = Nf.ctid.split("-")[0].toUpperCase(),
      c = {};
    c.ctid = Nf.ctid;
    c.Gm = mi.ke;
    c.Km = mi.Pg;
    c.gm = Ej.he ? 2 : 1;
    c.Rm = a.dk;
    c.te = Nf.canonicalContainerId;
    c.te !== a.za && (c.za = a.za);
    var d = Oj();
    c.wm = d ? d.canonicalContainerId : void 0;
    si ? (c.Of = uo[b], c.Of || (c.Of = 0)) : c.Of = wi ? 13 : 10;
    Fi.M ? (c.Lf = 0, c.kl = 2) : ui ? c.Lf = 1 : to() ? c.Lf = 2 : c.Lf = 3;
    var e = {};
    e[6] = Fj;
    c.ol = e;
    var f = a.Ef,
      g;
    var h = c.Of,
      m = c.Lf;
    h === void 0 ? g = "" : (m || (m = 0), g = "" + He(1, 1) + Ee(h << 2 | m));
    var n = c.kl,
      p = "4" + g + (n ? "" + He(2, 1) + Ee(n) : ""),
      q, r = c.Km;
    q = r &&
      Ge.test(r) ? "" + He(3, 2) + r : "";
    var t, u = c.Gm;
    t = u ? "" + He(4, 1) + Ee(u) : "";
    var v;
    var w = c.ctid;
    if (w && f) {
      var y = w.split("-"),
        x = y[0].toUpperCase();
      if (x !== "GTM" && x !== "OPT") v = "";
      else {
        var B = y[1];
        v = "" + He(5, 3) + Ee(1 + B.length) + (c.gm || 0) + B
      }
    } else v = "";
    var A = c.Rm,
      D = c.te,
      E = c.za,
      C = c.Wn,
      F = p + q + t + v + (A ? "" + He(6, 1) + Ee(A) : "") + (D ? "" + He(7, 3) + Ee(D.length) + D : "") + (E ? "" + He(8, 3) + Ee(E.length) + E : "") + (C ? "" + He(9, 3) + Ee(C.length) + C : ""),
      M;
    var L = c.ol;
    L = L === void 0 ? {} : L;
    for (var O = [], S = pa(Object.keys(L)), ba = S.next(); !ba.done; ba = S.next()) {
      var aa = ba.value;
      O[Number(aa)] = L[aa]
    }
    if (O.length) {
      var R = He(10, 3),
        oa;
      if (O.length === 0) oa = Ee(0);
      else {
        for (var ka = [], ha = 0, ia = !1, Ja = 0; Ja < O.length; Ja++) {
          ia = !0;
          var Ba = Ja % 6;
          O[Ja] && (ha |= 1 << Ba);
          Ba === 5 && (ka.push(Ee(ha)), ha = 0, ia = !1)
        }
        ia && ka.push(Ee(ha));
        oa = ka.join("")
      }
      var Ka = oa;
      M = "" + R + Ee(Ka.length) + Ka
    } else M = "";
    var Wa = c.wm;
    return F + M + (Wa ? "" + He(11, 3) + Ee(Wa.length) + Wa : "")
  };
  var wo = {
      tj: "service_worker_endpoint",
      Qg: "shared_user_id",
      Rg: "shared_user_id_requested",
      ne: "shared_user_id_source"
    },
    xo;

  function yo(a) {
    if (!xo) {
      xo = {};
      for (var b = pa(Object.keys(wo)), c = b.next(); !c.done; c = b.next()) xo[wo[c.value]] = !0
    }
    return !!xo[a]
  }

  function zo(a, b) {
    b = b === void 0 ? !1 : b;
    if (yo(a)) {
      var c, d, e = (d = (c = uc("google_tag_data", {})).xcd) != null ? d : c.xcd = {};
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          h = {},
          m = {
            set: function(n) {
              f = n;
              m.notify()
            },
            get: function() {
              return f
            },
            subscribe: function(n) {
              h[String(g)] = n;
              return g++
            },
            unsubscribe: function(n) {
              var p = String(n);
              return h.hasOwnProperty(p) ? (delete h[p], !0) : !1
            },
            notify: function() {
              for (var n = pa(Object.keys(h)), p = n.next(); !p.done; p = n.next()) {
                var q = p.value;
                try {
                  h[q](a, f)
                } catch (r) {}
              }
            }
          };
        return e[a] = m
      }
    }
  }

  function Ao(a, b) {
    var c = zo(a, !0);
    c && c.set(b)
  }

  function Bo(a) {
    var b;
    return (b = zo(a)) == null ? void 0 : b.get()
  }

  function Co(a, b) {
    if (typeof b === "function") {
      var c;
      return (c = zo(a, !0)) == null ? void 0 : c.subscribe(b)
    }
  }

  function Do(a, b) {
    var c = zo(a);
    return c ? c.unsubscribe(b) : !1
  };

  function Eo(a) {
    return a.origin !== "null"
  };

  function Fo(a, b, c, d) {
    var e;
    if (Go(d)) {
      for (var f = [], g = String(b || Ho()).split(";"), h = 0; h < g.length; h++) {
        var m = g[h].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m.slice(1).join("=").replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p)
        }
      }
      e = f
    } else e = [];
    return e
  }

  function Io(a, b, c, d, e) {
    if (Go(e)) {
      var f = Jo(a, d, e);
      if (f.length === 1) return f[0].id;
      if (f.length !== 0) {
        f = Ko(f, function(g) {
          return g.vl
        }, b);
        if (f.length === 1) return f[0].id;
        f = Ko(f, function(g) {
          return g.ym
        }, c);
        return f[0] ? f[0].id : void 0
      }
    }
  }

  function Lo(a, b, c, d) {
    var e = Ho(),
      f = window;
    Eo(f) && (f.document.cookie = a);
    var g = Ho();
    return e !== g || c !== void 0 && Fo(b, g, !1, d).indexOf(c) >= 0
  }

  function Mo(a, b, c, d) {
    function e(w, y, x) {
      if (x == null) return delete h[y], w;
      h[y] = x;
      return w + "; " + y + "=" + x
    }

    function f(w, y) {
      if (y == null) return w;
      h[y] = !0;
      return w + "; " + y
    }
    if (!Go(c.Bb)) return 2;
    var g;
    b == null ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = No(b), g = a + "=" + b);
    var h = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date ? m = c.expires.toUTCString() : c.expires != null && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.km);
    g = e(g, "samesite", c.Lm);
    c.Mm && (g = f(g,
      "secure"));
    var n = c.domain;
    if (n && n.toLowerCase() === "auto") {
      for (var p = Oo(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
        var u = p[t] !== "none" ? p[t] : void 0,
          v = e(g, "domain", u);
        v = f(v, c.flags);
        try {
          d && d(a, h)
        } catch (w) {
          q = w;
          continue
        }
        r = !0;
        if (!Po(u, c.path) && Lo(v, a, b, c.Bb)) return 0
      }
      if (q && !r) throw q;
      return 1
    }
    n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, h);
    return Po(n, c.path) ? 1 : Lo(g, a, b, c.Bb) ? 0 : 1
  }

  function Qo(a, b, c) {
    c.path == null && (c.path = "/");
    c.domain || (c.domain = "auto");
    return Mo(a, b, c)
  }

  function Ko(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        m = b(h);
      m === c ? d.push(h) : f === void 0 || m < f ? (e = [h], f = m) : m === f && e.push(h)
    }
    return d.length > 0 ? d : e
  }

  function Jo(a, b, c) {
    for (var d = [], e = Fo(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || !h || b.indexOf(h) !== -1) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            vl: Number(n[0]) || 1,
            ym: Number(n[1]) || 1
          })
        }
      }
    }
    return d
  }

  function No(a) {
    a && a.length > 1200 && (a = a.substring(0, 1200));
    return a
  }
  var Ro = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    So = /(^|\.)doubleclick\.net$/i;

  function Po(a, b) {
    return a !== void 0 && (So.test(window.document.location.hostname) || b === "/" && Ro.test(a))
  }

  function To(a) {
    if (!a) return 1;
    a = a.indexOf(".") === 0 ? a.substring(1) : a;
    return a.split(".").length
  }

  function Uo(a) {
    if (!a || a === "/") return 1;
    a[0] !== "/" && (a = "/" + a);
    a[a.length - 1] !== "/" && (a += "/");
    return a.split("/").length - 1
  }

  function Vo(a, b) {
    var c = "" + To(a),
      d = Uo(b);
    d > 1 && (c += "-" + d);
    return c
  }
  var Ho = function() {
      return Eo(window) ? window.document.cookie : ""
    },
    Go = function(a) {
      return a && Vl().m() ? (Array.isArray(a) ? a : [a]).every(function(b) {
        return bm(b) && Zl(b)
      }) : !0
    },
    Oo = function() {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (b.length === 4) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"]
      }
      for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      So.test(e) || Ro.test(e) || a.push("none");
      return a
    };

  function Wo(a) {
    var b = Math.round(Math.random() * 2147483647),
      c;
    if (a) {
      var d = 1,
        e, f, g;
      if (a)
        for (d = 0, f = a.length - 1; f >= 0; f--) g = a.charCodeAt(f), d = (d << 6 & 268435455) + g + (g << 14), e = d & 266338304, d = e !== 0 ? d ^ e >> 21 : d;
      c = String(b ^ d & 2147483647)
    } else c = String(b);
    return c
  }

  function Xo(a) {
    return [Wo(a), Math.round(Db() / 1E3)].join(".")
  }

  function Yo(a, b, c, d, e) {
    var f = To(b);
    return Io(a, f, Uo(c), d, e)
  }

  function Zo(a, b, c, d) {
    return [b, Vo(c, d), a].join(".")
  };

  function $o(a, b, c, d) {
    var e, f = Number(a.Ab != null ? a.Ab : void 0);
    f !== 0 && (e = new Date((b || Db()) + 1E3 * (f || 7776E3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Bb: d
    }
  };
  var ap;

  function bp() {
    function a(g) {
      c(g.target || g.srcElement || {})
    }

    function b(g) {
      d(g.target || g.srcElement || {})
    }
    var c = cp,
      d = dp,
      e = ep();
    if (!e.init) {
      Ec(H, "mousedown", a);
      Ec(H, "keyup", a);
      Ec(H, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function() {
        d(this);
        f.call(this)
      };
      e.init = !0
    }
  }

  function fp(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: c === 2,
      placement: c,
      forms: d,
      sameHost: e
    };
    ep().decorators.push(f)
  }

  function gp(a, b, c) {
    for (var d = ep().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        h;
      if (h = !c || g.forms) a: {
        var m = g.domains,
          n = a,
          p = !!g.sameHost;
        if (m && (p || n !== H.location.hostname))
          for (var q = 0; q < m.length; q++)
            if (m[q] instanceof RegExp) {
              if (m[q].test(n)) {
                h = !0;
                break a
              }
            } else if (n.indexOf(m[q]) >= 0 || p && m[q].indexOf(n) >= 0) {
          h = !0;
          break a
        }
        h = !1
      }
      if (h) {
        var r = g.placement;
        r === void 0 && (r = g.fragment ? 2 : 1);
        r === b && Gb(e, g.callback())
      }
    }
    return e
  }

  function ep() {
    var a = uc("google_tag_data", {}),
      b = a.gl;
    b && b.decorators || (b = {
      decorators: []
    }, a.gl = b);
    return b
  };
  var hp = /(.*?)\*(.*?)\*(.*)/,
    ip = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    jp = /^(?:www\.|m\.|amp\.)+/,
    kp = /([^?#]+)(\?[^#]*)?(#.*)?/;

  function lp(a) {
    var b = kp.exec(a);
    if (b) return {
      Hh: b[1],
      query: b[2],
      fragment: b[3]
    }
  }

  function mp(a, b) {
    var c = [qc.userAgent, (new Date).getTimezoneOffset(), qc.userLanguage || qc.language, Math.floor(Db() / 60 / 1E3) - (b === void 0 ? 0 : b), a].join("*"),
      d;
    if (!(d = ap)) {
      for (var e = Array(256), f = 0; f < 256; f++) {
        for (var g = f, h = 0; h < 8; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
        e[f] = g
      }
      d = e
    }
    ap = d;
    for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ ap[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36)
  }

  function np() {
    return function(a) {
      var b = V(G.location.href),
        c = b.search.replace("?", ""),
        d = fj(c, "_gl", !1, !0) || "";
      a.query = op(d) || {};
      var e = ij(b, "fragment"),
        f;
      var g = -1;
      if (Ib(e, "_gl=")) g = 4;
      else {
        var h = e.indexOf("&_gl=");
        h > 0 && (g = h + 3 + 2)
      }
      if (g < 0) f = void 0;
      else {
        var m = e.indexOf("&", g);
        f = m < 0 ? e.substring(g) : e.substring(g, m)
      }
      a.fragment = op(f || "") || {}
    }
  }

  function pp(a) {
    var b = np(),
      c = ep();
    c.data || (c.data = {
      query: {},
      fragment: {}
    }, b(c.data));
    var d = {},
      e = c.data;
    e && (Gb(d, e.query), a && Gb(d, e.fragment));
    return d
  }
  var op = function(a) {
    try {
      var b = qp(a, 3);
      if (b !== void 0) {
        for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
          var f = d[e],
            g = kb(d[e + 1]);
          c[f] = g
        }
        mb("TAGGING", 6);
        return c
      }
    } catch (h) {
      mb("TAGGING", 8)
    }
  };

  function qp(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; e < 3; ++e) {
          var f = hp.exec(d);
          if (f) {
            c = f;
            break a
          }
          d = decodeURIComponent(d)
        }
        c = void 0
      }
      var g = c;
      if (g && g[1] === "1") {
        var h = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === mp(h, p)) {
              m = !0;
              break a
            } m = !1
        }
        if (m) return h;
        mb("TAGGING", 7)
      }
    }
  }

  function rp(a, b, c, d, e) {
    function f(p) {
      var q = p,
        r = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q),
        t = q;
      if (r) {
        var u = r[2],
          v = r[4];
        t = r[1];
        v && (t = t + u + v)
      }
      p = t;
      var w = p.charAt(p.length - 1);
      p && w !== "&" && (p += "&");
      return p + n
    }
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var g = lp(c);
    if (!g) return "";
    var h = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d ? m.substring(1).length !== 0 && e || (m = "#" + f(m.substring(1))) : h = "?" + f(h.substring(1));
    return "" + g.Hh + h + m
  }

  function sp(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var t in n)
          if (n.hasOwnProperty(t)) {
            r = !0;
            break a
          } r = !1
      }
      if (r) {
        var u, v = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var y = n[w];
            y !== void 0 && y === y && y !== null && y.toString() !== "[object Object]" && (v.push(w), v.push(jb(String(y))))
          } var x = v.join("*");
        u = ["1", mp(x), x].join("*");
        d ? (Yi(3) || Yi(1) || !p) && tp("_gl", u, a, p, q) : up("_gl", u, a, p, q)
      }
    }
    var d = (a.tagName || "").toUpperCase() === "FORM",
      e = gp(b, 1, d),
      f = gp(b, 2, d),
      g = gp(b, 4, d),
      h = gp(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Yi(1) && c(g, !0, !0);
    for (var m in h) h.hasOwnProperty(m) &&
      vp(m, h[m], a)
  }

  function vp(a, b, c) {
    c.tagName.toLowerCase() === "a" ? up(a, b, c) : c.tagName.toLowerCase() === "form" && tp(a, b, c)
  }

  function up(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var f;
    if (f = c.href) {
      var g;
      if (!(g = !Yi(4) || d)) {
        var h = G.location.href,
          m = lp(c.href),
          n = lp(h);
        g = !(m && n && m.Hh === n.Hh && m.query === n.query && m.fragment)
      }
      f = g
    }
    if (f) {
      var p = rp(a, b, c.href, d, e);
      gc.test(p) && (c.href = p)
    }
  }

  function tp(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if (f !== "get" || d) {
        if (f === "get" || f === "post") {
          var g = rp(a, b, c.action, d, e);
          gc.test(g) && (c.action = g)
        }
      } else {
        for (var h = c.childNodes || [], m = !1, n = 0; n < h.length; n++) {
          var p = h[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break
          }
        }
        if (!m) {
          var q = H.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q)
        }
      }
    }
  }

  function cp(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && d > 0;) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a
          }
          c = c.parentNode;
          d--
        }
        b = null
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        f !== "http:" && f !== "https:" || sp(e, e.hostname)
      }
    } catch (g) {}
  }

  function dp(a) {
    try {
      if (a.action) {
        var b = ij(V(a.action), "host");
        sp(a, b)
      }
    } catch (c) {}
  }

  function wp(a, b, c, d) {
    bp();
    var e = c === "fragment" ? 2 : 1;
    d = !!d;
    fp(a, b, e, d, !1);
    e === 2 && mb("TAGGING", 23);
    d && mb("TAGGING", 24)
  }

  function xp(a, b) {
    bp();
    fp(a, [hj(G.location, "host", !0)], b, !0, !0)
  }

  function yp() {
    var a = H.location.hostname,
      b = ip.exec(H.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g)
    } else if (d) {
      if (d.indexOf("xn--") === 0) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-")
    }
    var h = a.replace(jp, ""),
      m = e.replace(jp, ""),
      n;
    if (!(n = h === m)) {
      var p = "." + m;
      n = h.substring(h.length - p.length, h.length) === p
    }
    return n
  }

  function zp(a, b) {
    return a === !1 ? !1 : a || b || yp()
  };
  var Ap = ["1"],
    Bp = {},
    Cp = {};

  function Dp(a, b) {
    b = b === void 0 ? !0 : b;
    var c = Ep(a.prefix);
    if (!Bp[c])
      if (Fp(c, a.path, a.domain)) {
        var d = Cp[Ep(a.prefix)];
        Gp(a, d ? d.id : void 0, d ? d.Bh : void 0)
      } else {
        var e = nj("auiddc");
        if (e) mb("TAGGING", 17), Bp[c] = e;
        else if (b) {
          var f = Ep(a.prefix),
            g = Xo();
          Hp(f, g, a);
          Fp(c, a.path, a.domain)
        }
      }
  }

  function Gp(a, b, c) {
    var d = Ep(a.prefix),
      e = Bp[d];
    if (e) {
      var f = e.split(".");
      if (f.length === 2) {
        var g = Number(f[1]) || 0;
        if (g) {
          var h = e;
          b && (h = e + "." + b + "." + (c ? c : Math.floor(Db() / 1E3)));
          Hp(d, h, a, g * 1E3)
        }
      }
    }
  }

  function Hp(a, b, c, d) {
    var e = Zo(b, "1", c.domain, c.path),
      f = $o(c, d);
    f.Bb = Ip();
    Qo(a, e, f)
  }

  function Fp(a, b, c) {
    var d = Yo(a, b, c, Ap, Ip());
    if (!d) return !1;
    Jp(a, d);
    return !0
  }

  function Jp(a, b) {
    var c = b.split(".");
    c.length === 5 ? (Bp[a] = c.slice(0, 2).join("."), Cp[a] = {
      id: c.slice(2, 4).join("."),
      Bh: Number(c[4]) || 0
    }) : c.length === 3 ? Cp[a] = {
      id: c.slice(0, 2).join("."),
      Bh: Number(c[2]) || 0
    } : Bp[a] = b
  }

  function Ep(a) {
    return (a || "_gcl") + "_au"
  }

  function Kp(a) {
    function b() {
      Zl(c) && a()
    }
    var c = Ip();
    fm(function() {
      b();
      Zl(c) || gm(b, c)
    }, c)
  }

  function Lp(a) {
    var b = pp(!0),
      c = Ep(a.prefix);
    Kp(function() {
      var d = b[c];
      if (d) {
        Jp(c, d);
        var e = Number(Bp[c].split(".")[1]) * 1E3;
        if (e) {
          mb("TAGGING", 16);
          var f = $o(a, e);
          f.Bb = Ip();
          var g = Zo(d, "1", a.domain, a.path);
          Qo(c, g, f)
        }
      }
    })
  }

  function Mp(a, b, c, d, e) {
    e = e || {};
    var f = function() {
      var g = {},
        h = Yo(a, e.path, e.domain, Ap, Ip());
      h && (g[a] = h);
      return g
    };
    Kp(function() {
      wp(f, b, c, d)
    })
  }

  function Ip() {
    return ["ad_storage", "ad_user_data"]
  };

  function Np(a) {
    for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({
        Uh: f[1],
        value: f[2],
        timestamp: Number(f[2].split(".")[1]) || 0
      })
    }
    b.sort(function(g, h) {
      return h.timestamp - g.timestamp
    });
    return b
  }

  function Op(a, b) {
    var c = Np(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (!(f[0] !== "1" || b && f.length < 3 || !b && f.length !== 3) && Number(f[1])) {
        d[c[e].Uh] || (d[c[e].Uh] = []);
        var g = {
          version: f[0],
          timestamp: Number(f[1]) * 1E3,
          ba: f[2]
        };
        b && f.length > 3 && (g.labels = f.slice(3));
        d[c[e].Uh].push(g)
      }
    }
    return d
  };
  var Pp = {},
    Qp = (Pp.k = {
      Ma: /^[\w-]+$/
    }, Pp.b = {
      Ma: /^[\w-]+$/,
      Oh: !0
    }, Pp.i = {
      Ma: /^[1-9]\d*$/
    }, Pp);
  var Rp = {},
    Up = (Rp[5] = {
      mk: {
        2: Sp
      },
      Yg: ["k", "i", "b"]
    }, Rp[4] = {
      mk: {
        2: Sp,
        GCL: Tp
      },
      Yg: ["k", "i", "b"]
    }, Rp);

  function Vp(a) {
    var b = Up[5];
    if (b) {
      var c = a.split(".")[0];
      if (c) {
        var d = b.mk[c];
        if (d) return d(a, 5)
      }
    }
  }

  function Sp(a, b) {
    var c = a.split(".");
    if (c.length === 3) {
      var d = {},
        e = Up[b];
      if (e) {
        for (var f = e.Yg, g = pa(c[2].split("$")), h = g.next(); !h.done; h = g.next()) {
          var m = h.value,
            n = m[0];
          if (f.indexOf(n) !== -1) try {
            var p = decodeURIComponent(m.substring(1)),
              q = Qp[n];
            q && (q.Oh ? (d[n] = d[n] || [], d[n].push(p)) : d[n] = p)
          } catch (r) {}
        }
        return d
      }
    }
  }

  function Wp(a, b) {
    var c = Up[5];
    if (c) {
      for (var d = [], e = pa(c.Yg), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          h = Qp[g];
        if (h) {
          var m = a[g];
          if (m !== void 0)
            if (h.Oh && Array.isArray(m))
              for (var n = pa(m), p = n.next(); !p.done; p = n.next()) d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m))
        }
      }
      return ["2", b || "1", d.join("$")].join(".")
    }
  }

  function Tp(a) {
    var b = a.split(".");
    b.shift();
    var c = b.shift(),
      d = b.shift(),
      e = {};
    return e.k = d, e.i = c, e.b = b, e
  };
  var Xp = new Map([[5, "ad_storage"], [4, ["ad_storage", "ad_user_data"]]]);

  function Yp(a) {
    if (Up[5]) {
      for (var b = [], c = Fo(a, void 0, void 0, Xp.get(5)), d = pa(c), e = d.next(); !e.done; e = d.next()) {
        var f = Vp(e.value);
        f && (Zp(f), b.push(f))
      }
      return b
    }
  }

  function $p(a, b, c, d) {
    c = c || {};
    var e = Vo(c.domain, c.path),
      f = Wp(b, e);
    if (f) {
      var g = $o(c, d, void 0, Xp.get(5));
      Qo(a, f, g)
    }
  }

  function aq(a, b) {
    var c = b.Ma;
    return typeof c === "function" ? c(a) : c.test(a)
  }

  function Zp(a) {
    for (var b = pa(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
        ve: void 0
      }, c = b.next()) {
      var e = c.value,
        f = a[e];
      d.ve = Qp[e];
      d.ve ? d.ve.Oh ? a[e] = Array.isArray(f) ? f.filter(function(g) {
        return function(h) {
          return aq(h, g.ve)
        }
      }(d)) : void 0 : typeof f === "string" && aq(f, d.ve) || (a[e] = void 0) : a[e] = void 0
    }
  };
  var bq = /^\w+$/,
    cq = /^[\w-]+$/,
    dq = {},
    eq = (dq.aw = "_aw", dq.dc = "_dc", dq.gf = "_gf", dq.gp = "_gp", dq.gs = "_gs", dq.ha = "_ha", dq.ag = "_ag", dq.gb = "_gb", dq);

  function fq() {
    return ["ad_storage", "ad_user_data"]
  }

  function gq(a) {
    return !Vl().m() || Zl(a)
  }

  function hq(a, b) {
    function c() {
      var d = gq(b);
      d && a();
      return d
    }
    fm(function() {
      c() || gm(c, b)
    }, b)
  }

  function iq(a) {
    return jq(a).map(function(b) {
      return b.ba
    })
  }

  function kq(a) {
    return lq(a).filter(function(b) {
      return b.ba
    }).map(function(b) {
      return b.ba
    })
  }

  function lq(a) {
    var b = mq(a.prefix),
      c = nq("gb", b),
      d = nq("ag", b);
    if (!d || !c) return [];
    var e = function(h) {
        return function(m) {
          m.type = h;
          return m
        }
      },
      f = jq(c).map(e("gb")),
      g = (Yi(6) ? oq(d) : []).map(e("ag"));
    return f.concat(g).sort(function(h, m) {
      return m.timestamp - h.timestamp
    })
  }

  function pq(a, b, c, d, e) {
    var f = tb(a, function(g) {
      return g.ba === c
    });
    f ? (f.timestamp = Math.max(f.timestamp, d), f.labels = qq(f.labels || [], e || [])) : a.push({
      version: b,
      ba: c,
      timestamp: d,
      labels: e
    })
  }

  function oq(a) {
    for (var b = Yp(a) || [], c = [], d = pa(b), e = d.next(); !e.done; e = d.next()) {
      var f = e.value,
        g = f,
        h = rq(f);
      h && pq(c, "2", g.k, h, g.b || [])
    }
    return c.sort(function(m, n) {
      return n.timestamp - m.timestamp
    })
  }

  function jq(a) {
    for (var b = [], c = Fo(a, H.cookie, void 0, fq()), d = pa(c), e = d.next(); !e.done; e = d.next()) {
      var f = sq(e.value);
      if (f != null) {
        var g = f;
        pq(b, g.version, g.ba, g.timestamp, g.labels)
      }
    }
    b.sort(function(h, m) {
      return m.timestamp - h.timestamp
    });
    return tq(b)
  }

  function qq(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function(d) {
      return c.hasOwnProperty(d) ? !1 : c[d] = !0
    })
  }

  function mq(a) {
    return a && typeof a === "string" && a.match(bq) ? a : "_gcl"
  }

  function uq(a, b) {
    var c = Yi(6),
      d = Yi(7),
      e = V(a),
      f = ij(e, "query", !1, void 0, "gclid"),
      g = ij(e, "query", !1, void 0, "gclsrc"),
      h = ij(e, "query", !1, void 0, "wbraid");
    Yi(8) && (h = Ob(h));
    var m;
    c && (m = ij(e, "query", !1, void 0, "gbraid"));
    var n;
    d && (n = ij(e, "query", !1, void 0, "gad_source"));
    var p = ij(e, "query", !1, void 0, "dclid");
    if (b && (!f || !g || !h || c && !m)) {
      var q = e.hash.replace("#", "");
      f = f || fj(q, "gclid", !1);
      g = g || fj(q, "gclsrc", !1);
      h = h || fj(q, "wbraid", !1);
      c && (m = m || fj(q, "gbraid", !1));
      d && (n = n || fj(q, "gad_source", !1))
    }
    return vq(f, g, p, h,
      m, n)
  }

  function wq() {
    return uq(G.location.href, !0)
  }

  function vq(a, b, c, d, e, f) {
    var g = {},
      h = function(m, n) {
        g[n] || (g[n] = []);
        g[n].push(m)
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (a !== void 0 && a.match(cq)) switch (b) {
      case void 0:
        h(a, "aw");
        break;
      case "aw.ds":
        h(a, "aw");
        h(a, "dc");
        break;
      case "ds":
        h(a, "dc");
        break;
      case "3p.ds":
        h(a, "dc");
        break;
      case "gf":
        h(a, "gf");
        break;
      case "ha":
        h(a, "ha")
    }
    c && h(c, "dc");
    d !== void 0 && cq.test(d) && (g.wbraid = d, h(d, "gb"));
    Yi(6) && e !== void 0 && cq.test(e) && (g.gbraid = e, h(e, "ag"));
    Yi(7) && f !== void 0 && cq.test(f) && (g.gad_source = f, h(f, "gs"));
    return g
  }

  function xq(a) {
    var b = wq();
    if (Yi(5)) {
      for (var c = !0, d = pa(Object.keys(b)), e = d.next(); !e.done; e = d.next())
        if (b[e.value] !== void 0) {
          c = !1;
          break
        } c && (b = uq(G.document.referrer, !1))
    }
    yq(b, !1, a)
  }

  function yq(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = mq(c.prefix),
      g = d || Db(),
      h = Math.round(g / 1E3),
      m = fq(),
      n = !1,
      p = !1,
      q = function() {
        if (gq(m)) {
          var r = $o(c, g, !0);
          r.Bb = m;
          for (var t = function(F, M) {
              var L = nq(F, f);
              L && (Qo(L, M, r), F !== "gb" && (n = !0))
            }, u = function(F) {
              var M = ["GCL", h, F];
              e.length > 0 && M.push(e.join("."));
              return M.join(".")
            }, v = pa(["aw", "dc", "gf", "ha", "gp"]), w = v.next(); !w.done; w = v.next()) {
            var y = w.value;
            a[y] && t(y, u(a[y][0]))
          }
          if (!n && a.gb) {
            var x = a.gb[0],
              B = nq("gb", f);
            !b && jq(B).some(function(F) {
              return F.ba === x && F.labels &&
                F.labels.length > 0
            }) || t("gb", u(x))
          }
        }
        if (!p && Yi(6) && a.gbraid && gq("ad_storage") && (p = !0, !n)) {
          var A = a.gbraid,
            D = nq("ag", f);
          if (b || !(Yi(6) ? oq(D) : []).some(function(F) {
              return F.ba === A && F.labels && F.labels.length > 0
            })) {
            var E = {},
              C = (E.k = A, E.i = "" + h, E.b = e, E);
            $p(D, C, c, g)
          }
        }
        zq(a, f, g, c)
      };
    fm(function() {
      q();
      gq(m) || gm(q, m)
    }, m)
  }

  function zq(a, b, c, d) {
    if (Yi(7) && a.gad_source !== void 0 && gq("ad_storage")) {
      var e = nq("gs", b);
      if (e) {
        var f = Math.round((Db() - (Pc() || 0)) / 1E3),
          g = {},
          h = (g.k = a.gad_source, g.i = "" + f, g);
        $p(e, h, d, c)
      }
    }
  }

  function Aq(a, b) {
    var c = pp(!0);
    hq(function() {
      for (var d = mq(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (eq[f] !== void 0) {
          var g = nq(f, d),
            h = c[g];
          if (h) {
            var m = Math.min(Bq(h), Db()),
              n;
            b: {
              for (var p = m, q = Fo(g, H.cookie, void 0, fq()), r = 0; r < q.length; ++r)
                if (Bq(q[r]) > p) {
                  n = !0;
                  break b
                } n = !1
            }
            if (!n) {
              var t = $o(b, m, !0);
              t.Bb = fq();
              Qo(g, h, t)
            }
          }
        }
      }
      yq(vq(c.gclid, c.gclsrc), !1, b)
    }, fq())
  }

  function Cq(a) {
    var b = [];
    Yi(6) && b.push("ag");
    if (b.length !== 0) {
      var c = pp(!0),
        d = mq(a.prefix);
      hq(function() {
        for (var e = 0; e < b.length; ++e) {
          var f = nq(b[e], d);
          if (f) {
            var g = c[f];
            if (g) {
              var h = Vp(g);
              if (h) {
                var m = rq(h);
                m || (m = Db());
                var n;
                a: {
                  for (var p = m, q = Yp(f), r = 0; r < q.length; ++r)
                    if (rq(q[r]) > p) {
                      n = !0;
                      break a
                    } n = !1
                }
                if (n) break;
                h.i = "" + Math.round(m / 1E3);
                $p(f, h, a, m)
              }
            }
          }
        }
      }, ["ad_storage"])
    }
  }

  function nq(a, b) {
    var c = eq[a];
    if (c !== void 0) return b + c
  }

  function Bq(a) {
    return Dq(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1E3 : 0
  }

  function rq(a) {
    return a ? (Number(a.i) || 0) * 1E3 : 0
  }

  function sq(a) {
    var b = Dq(a.split("."));
    return b.length === 0 ? null : {
      version: b[0],
      ba: b[2],
      timestamp: (Number(b[1]) || 0) * 1E3,
      labels: b.slice(3)
    }
  }

  function Dq(a) {
    return a.length < 3 || a[0] !== "GCL" && a[0] !== "1" || !/^\d+$/.test(a[1]) || !cq.test(a[2]) ? [] : a
  }

  function Eq(a, b, c, d, e) {
    if (Array.isArray(b) && Eo(G)) {
      var f = mq(e),
        g = function() {
          for (var h = {}, m = 0; m < a.length; ++m) {
            var n = nq(a[m], f);
            if (n) {
              var p = Fo(n, H.cookie, void 0, fq());
              p.length && (h[n] = p.sort()[p.length - 1])
            }
          }
          return h
        };
      hq(function() {
        wp(g, b, c, d)
      }, fq())
    }
  }

  function Fq(a, b, c, d) {
    if (Array.isArray(a) && Eo(G)) {
      var e = [];
      Yi(6) && e.push("ag");
      if (e.length !== 0) {
        var f = mq(d),
          g = function() {
            for (var h = {}, m = 0; m < e.length; ++m) {
              var n = nq(e[m], f);
              if (!n) return {};
              var p = Yp(n);
              if (p.length) {
                var q = p.sort(function(r, t) {
                  return rq(t) - rq(r)
                })[0];
                h[n] = Wp(q)
              }
            }
            return h
          };
        hq(function() {
          wp(g, a, b, c)
        }, ["ad_storage"])
      }
    }
  }

  function tq(a) {
    return a.filter(function(b) {
      return cq.test(b.ba)
    })
  }

  function Gq(a, b) {
    if (Eo(G)) {
      for (var c = mq(b.prefix), d = {}, e = 0; e < a.length; e++) eq[a[e]] && (d[a[e]] = eq[a[e]]);
      hq(function() {
        z(d, function(f, g) {
          var h = Fo(c + g, H.cookie, void 0, fq());
          h.sort(function(t, u) {
            return Bq(u) - Bq(t)
          });
          if (h.length) {
            var m = h[0],
              n = Bq(m),
              p = Dq(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = Dq(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
            q[f] = [r];
            yq(q, !0, b, n, p)
          }
        })
      }, fq())
    }
  }

  function Hq(a) {
    var b = [],
      c = [];
    Yi(6) && (b.push("ag"), c.push("gbraid"));
    b.length !== 0 && hq(function() {
      for (var d = mq(a.prefix), e = 0; e < b.length; ++e) {
        var f = nq(b[e], d);
        if (!f) break;
        var g = Yp(f);
        if (g.length) {
          var h = g.sort(function(q, r) {
              return rq(r) - rq(q)
            })[0],
            m = rq(h),
            n = h.b,
            p = {};
          p[c[e]] = h.k;
          yq(p, !0, a, m, n)
        }
      }
    }, ["ad_storage"])
  }

  function Iq(a, b) {
    for (var c = 0; c < b.length; ++c)
      if (a[b[c]]) return !0;
    return !1
  }

  function Jq(a) {
    function b(e, f, g) {
      g && (e[f] = g)
    }
    if (cm()) {
      var c = wq();
      if (Iq(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.wbraid);
        Yi(6) && b(d, "gbraid", c.gbraid);
        xp(function() {
          return d
        }, 3);
        xp(function() {
          var e = {};
          return e._up = "1", e
        }, 1)
      }
    }
  }

  function Kq(a) {
    if (!Yi(1)) return null;
    var b = pp(!0).gad_source;
    if (b != null) return G.location.hash = "", b;
    if (Yi(2)) {
      var c = V(G.location.href);
      b = ij(c, "query", !1, void 0, "gad_source");
      if (b != null) return b;
      var d = wq();
      if (Iq(d, a)) return "0"
    }
    return null
  }

  function Lq(a) {
    var b = Kq(a);
    b != null && xp(function() {
      var c = {};
      return c.gad_source = b, c
    }, 4)
  }

  function Mq(a, b, c) {
    var d = [];
    if (b.length === 0) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        h = g.type ? g.type : "gcl";
      (g.labels || []).indexOf(c) === -1 ? (a.push(0), e[h] || d.push(g)) : a.push(1);
      e[h] = !0
    }
    return d
  }

  function Nq(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!gq(fq())) return e;
    var f = jq(a),
      g = Mq(e, f, b);
    if (g.length && !d)
      for (var h = pa(g), m = h.next(); !m.done; m = h.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1E3), n.ba].concat(n.labels || [], [b]).join("."),
          r = $o(c, p, !0);
        r.Bb = fq();
        Qo(a, q, r)
      }
    return e
  }

  function Oq(a, b) {
    var c = [];
    b = b || {};
    var d = lq(b),
      e = Mq(c, d, a);
    if (e.length)
      for (var f = pa(e), g = f.next(); !g.done; g = f.next()) {
        var h = g.value,
          m = mq(b.prefix),
          n = nq(h.type, m);
        if (!n) break;
        var p = h,
          q = p.version,
          r = p.ba,
          t = p.labels,
          u = p.timestamp,
          v = Math.round(u / 1E3);
        if (h.type === "ag") {
          var w = {},
            y = (w.k = r, w.i = "" + v, w.b = (t || []).concat([a]), w);
          $p(n, y, b, u)
        } else if (h.type === "gb") {
          var x = [q, v, r].concat(t || [], [a]).join("."),
            B = $o(b, u, !0);
          B.Bb = fq();
          Qo(n, x, B)
        }
      }
    return c
  }

  function Pq(a, b) {
    var c = mq(b),
      d = nq(a, c);
    if (!d) return 0;
    var e;
    e = a === "ag" ? Yi(6) ? oq(d) : [] : jq(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f
  }

  function Qq(a) {
    for (var b = 0, c = pa(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++) b = Math.max(b, Number(e[f].timestamp));
    return b
  }

  function Rq(a, b) {
    var c = Math.max(Pq("aw", a), Qq(gq(fq()) ? Op() : {})),
      d = Math.max(Pq("gb", a), Qq(gq(fq()) ? Op("_gac_gb", !0) : {}));
    Yi(6) && b && (d = Math.max(d, Pq("ag", a)));
    return d > c
  };
  var er, fr = !1;

  function gr() {
    fr = !0;
    er = er || {}
  }

  function hr(a) {
    fr || gr();
    return er[a]
  }
  var ir = function(a, b, c) {
    this.eventName = b;
    this.o = c;
    this.C = {};
    this.isAborted = !1;
    this.target = a;
    this.metadata = k(c.eventMetadata || {}, {})
  };
  ir.prototype.copyToHitData = function(a, b, c) {
    var d = W(this.o, a);
    d === void 0 && (d = b);
    if (d !== void 0 && c !== void 0 && l(d) && U(53)) try {
      d = c(d)
    } catch (e) {}
    d !== void 0 && (this.C[a] = d)
  };
  var jr = function(a, b, c) {
    var d = hr(a.target.ka);
    return d && d[b] !== void 0 ? d[b] : c
  };

  function kr() {
    ni.dedupe_gclid || (ni.dedupe_gclid = Xo());
    return ni.dedupe_gclid
  };
  var lr = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    mr = /^www.googleadservices.com$/;

  function nr(a) {
    a || (a = or());
    return a.fn ? !1 : a.Ql || a.Rl || a.Tl || a.Sl || a.rh || a.lh || a.El || a.Il ? !0 : !1
  }

  function or() {
    var a = {},
      b = pp(!0);
    a.fn = !!b._up;
    var c = wq();
    a.Ql = c.aw !== void 0;
    a.Rl = c.dc !== void 0;
    a.Tl = c.wbraid !== void 0;
    a.Sl = c.gbraid !== void 0;
    var d = V(G.location.href),
      e = ij(d, "query", !1, void 0, "gad");
    a.rh = e !== void 0;
    if (!a.rh) {
      var f = d.hash.replace("#", ""),
        g = fj(f, "gad", !1);
      a.rh = g !== void 0
    }
    a.lh = ij(d, "query", !1, void 0, "gad_source");
    if (a.lh === void 0) {
      var h = d.hash.replace("#", ""),
        m = fj(h, "gad_source", !1);
      a.lh = m
    }
    var n = H.referrer ? ij(V(H.referrer), "host") : "";
    a.Il = lr.test(n);
    a.El = mr.test(n);
    return a
  };
  var pr = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
    qr = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    rr = /^\d+\.fls\.doubleclick\.net$/,
    sr = /;gac=([^;?]+)/,
    tr = /;gacgb=([^;?]+)/;

  function ur(a, b) {
    if (rr.test(H.location.host)) {
      var c = H.location.href.match(b);
      return c && c.length === 2 && c[1].match(pr) ? decodeURIComponent(c[1]) : ""
    }
    for (var d = [], e = pa(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
      for (var g = f.value, h = [], m = a[g], n = 0; n < m.length; n++) h.push(m[n].ba);
      d.push(g + ":" + h.join(","))
    }
    return d.length > 0 ? d.join(";") : ""
  }

  function vr(a, b, c) {
    for (var d = gq(fq()) ? Op("_gac_gb", !0) : {}, e = [], f = !1, g = pa(Object.keys(d)), h = g.next(); !h.done; h = g.next()) {
      var m = h.value,
        n = Nq("_gac_gb_" + m, a, b, c);
      f = f || n.length !== 0 && n.some(function(p) {
        return p === 1
      });
      e.push(m + ":" + n.join(","))
    }
    return {
      Dl: f ? e.join(";") : "",
      Cl: ur(d, tr)
    }
  }

  function wr(a) {
    var b = H.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && b.length === 2 && b[1].match(qr) ? b[1] : void 0
  }

  function xr(a) {
    var b = {
        mh: void 0,
        nh: void 0
      },
      c, d;
    rr.test(H.location.host) && (c = wr("gclgs"), d = wr("gclst"));
    if (c && d) b.mh = c, b.nh = d;
    else {
      var e = Db(),
        f = oq((a || "_gcl") + "_gs"),
        g = f.map(function(m) {
          return m.ba
        }),
        h = f.map(function(m) {
          return e - m.timestamp
        });
      g.length > 0 && h.length > 0 && (b.mh = g.join("."), b.nh = h.join("."))
    }
    return b
  }

  function yr(a, b, c) {
    if (rr.test(H.location.host)) {
      var d = wr(c);
      if (d) return [{
        ba: d
      }]
    } else {
      if (b === "gclid") return jq((a || "_gcl") + "_aw");
      if (b === "wbraid") return jq((a || "_gcl") + "_gb");
      if (b === "braids") return lq({
        prefix: a
      })
    }
    return []
  }

  function zr(a) {
    return yr(a, "gclid", "gclaw").map(function(b) {
      return b.ba
    }).join(".")
  }

  function Ar(a) {
    return yr(a, "wbraid", "gclgb").map(function(b) {
      return b.ba
    }).join(".")
  }

  function Br(a) {
    return yr(a, "braids", "gclgb").map(function(b) {
      return b.ba
    }).join(".")
  }

  function Cr(a, b) {
    return rr.test(H.location.host) ? !(wr("gclaw") || wr("gac")) : Rq(a, b)
  }

  function Dr(a, b, c) {
    var d;
    d = c ? Oq(a, b) : Nq((b && b.prefix || "_gcl") + "_gb", a, b);
    return d.length === 0 || d.every(function(e) {
      return e === 0
    }) ? "" : d.join(".")
  };
  var Er = function() {
    if (qb(G.__uspapi)) {
      var a = "";
      try {
        G.__uspapi("getUSPData", 1, function(b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
          }
        })
      } catch (b) {}
      return a
    }
  };

  function Mr(a) {
    var b = W(a.o, Q.g.Ib),
      c = W(a.o, Q.g.Xb);
    b && !c ? (a.eventName !== Q.g.da && a.eventName !== Q.g.Nc && P(131), a.isAborted = !0) : !b && c && (P(132), a.isAborted = !0)
  }

  function Nr(a) {
    var b = X(Q.g.T) ? ni.pscdl : "denied";
    b != null && (a.C[Q.g.Xe] = b)
  }

  function Or(a) {
    var b = tl(!0);
    a.C[Q.g.Hb] = b
  };

  function Vr(a, b, c, d) {
    var e = Bc(),
      f;
    if (e === 1) a: {
      var g = yi;g = g.toLowerCase();
      for (var h = "https://" + g, m = "http://" + g, n = 1, p = H.getElementsByTagName("script"), q = 0; q < p.length && q < 100; q++) {
        var r = p[q].src;
        if (r) {
          r = r.toLowerCase();
          if (r.indexOf(m) === 0) {
            f = 3;
            break a
          }
          n === 1 && r.indexOf(h) === 0 && (n = 2)
        }
      }
      f = n
    }
    else f = e;
    return (f === 2 || d || "http:" != G.location.protocol ? a : b) + c
  };

  function hs(a) {
    return {
      getDestinationId: function() {
        return a.target.ka
      },
      getEventName: function() {
        return a.eventName
      },
      setEventName: function(b) {
        a.eventName = b
      },
      getHitData: function(b) {
        return a.C[b]
      },
      setHitData: function(b, c) {
        a.C[b] = c
      },
      setHitDataIfNotDefined: function(b, c) {
        a.C[b] === void 0 && (a.C[b] = c)
      },
      copyToHitData: function(b, c) {
        a.copyToHitData(b, c)
      },
      getMetadata: function(b) {
        return a.metadata[b]
      },
      setMetadata: function(b, c) {
        a.metadata[b] = c
      },
      isAborted: function() {
        return a.isAborted
      },
      abort: function() {
        a.isAborted = !0
      },
      getFromEventContext: function(b) {
        return W(a.o, b)
      },
      Kj: function() {
        return a
      },
      getHitKeys: function() {
        return Object.keys(a.C)
      }
    }
  };

  function os() {
    var a = G.screen;
    return {
      width: a ? a.width : 0,
      height: a ? a.height : 0
    }
  }

  function ps(a) {
    if (H.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !G.getComputedStyle) return !0;
    var c = G.getComputedStyle(a, null);
    if (c.visibility === "hidden") return !0;
    for (var d = a, e = c; d;) {
      if (e.display === "none") return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var h = g.indexOf("opacity(");
        h >= 0 && (g = g.substring(h + 8, g.indexOf(")", h)), g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)), f = String(Math.min(Number(g), Number(f))))
      }
      if (f !== void 0 && Number(f) <= 0) return !0;
      (d = d.parentElement) &&
      (e = G.getComputedStyle(d, null))
    }
    return !1
  }
  var pt = Number('') || 5,
    qt = Number('') || 50,
    rt = ub();
  var wt = {
    Xk: Number('') || 500,
    Mk: Number('') || 5E3,
    jj: Number('20') || 10,
    rk: Number('') || 5E3
  };

  function xt(a) {
    return a.performance && a.performance.now() || Date.now()
  }
  var zt = function(a, b) {
    var c;
    return c
  };
  var At = "https://" + mi.Fd + "/gtm/static/",
    Bt;

  function Gt(a, b) {}

  function Ht(a, b, c, d) {}

  function It(a, b, c, d) {}

  function Jt(a, b, c, d) {}
  var Kt = void 0;

  function Lt(a) {
    var b = [];
    return b
  };
  var Mt = function(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
    }
    return b
  };
  el();
  hl() || bl("iPod");
  bl("iPad");
  !bl("Android") || fl() || el() || dl() || bl("Silk");
  fl();
  !bl("Safari") || fl() || (cl() ? 0 : bl("Coast")) || dl() || (cl() ? 0 : bl("Edge")) || (cl() ? al("Microsoft Edge") : bl("Edg/")) || (cl() ? al("Opera") : bl("OPR")) || el() || bl("Silk") || bl("Android") || il();
  var Nt = {},
    Ot = null,
    Pt = function(a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e > 255 && (b[c++] = e & 255, e >>= 8);
        b[c++] = e
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!Ot) {
        Ot = {};
        for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; m < 5; m++) {
          var n = g.concat(h[m].split(""));
          Nt[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            Ot[q] === void 0 && (Ot[q] = p)
          }
        }
      }
      for (var r = Nt[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
        var y = b[v],
          x = b[v + 1],
          B = b[v + 2],
          A = r[y >> 2],
          D = r[(y & 3) << 4 | x >> 4],
          E = r[(x & 15) << 2 | B >> 6],
          C = r[B & 63];
        t[w++] = "" + A + D + E + C
      }
      var F = 0,
        M = u;
      switch (b.length - v) {
        case 2:
          F = b[v + 1], M = r[(F & 15) << 2] || u;
        case 1:
          var L = b[v];
          t[w] = "" + r[L >> 2] + r[(L & 3) << 4 | F >> 4] + M + u
      }
      return t.join("")
    };
  var Qt = function() {};
  Object.freeze(new function() {});
  Object.freeze(new Qt);
  Object.freeze(new Qt);
  Object.freeze({});
  var Rt = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

  function St(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
  }

  function Tt() {
    var a = G.google_tag_data,
      b;
    if (a != null && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d
    } else b = null;
    return b
  }

  function Ut() {
    var a, b;
    return (b = (a = G.google_tag_data) == null ? void 0 : a.uach_promise) != null ? b : null
  }

  function Vt(a) {
    var b, c;
    return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
  }

  function Wt() {
    var a = G;
    if (!Vt(a)) return null;
    var b = St(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData.getHighEntropyValues(Rt).then(function(d) {
      b.uach != null || (b.uach = d);
      return d
    });
    return b.uach_promise = c
  };
  var Xt, Yt = function() {
      if (Vt(G) && (Xt = Db(), !Ut())) {
        var a = Wt();
        a && (a.then(function() {
          P(95);
        }), a.catch(function() {
          P(96)
        }))
      }
    },
    $t = function(a) {
      var b = Zt.bn,
        c = function(g, h) {
          try {
            a(g, h)
          } catch (m) {}
        },
        d = Tt();
      if (d) c(d);
      else {
        var e = Ut();
        if (e) {
          b =
            Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
          var f = G.setTimeout(function() {
            c.Ge || (c.Ge = !0, P(106), c(null, Error("Timeout")))
          }, b);
          e.then(function(g) {
            c.Ge || (c.Ge = !0, P(104), G.clearTimeout(f), c(g))
          }).catch(function(g) {
            c.Ge || (c.Ge = !0, P(105), G.clearTimeout(f), c(null, g))
          })
        } else c(null)
      }
    },
    au = function(a, b) {
      a && (b.C[Q.g.nf] = a.architecture, b.C[Q.g.pf] = a.bitness, a.fullVersionList && (b.C[Q.g.qf] = a.fullVersionList.map(function(c) {
          return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
        }).join("|")),
        b.C[Q.g.rf] = a.mobile ? "1" : "0", b.C[Q.g.tf] = a.model, b.C[Q.g.uf] = a.platform, b.C[Q.g.vf] = a.platformVersion, b.C[Q.g.wf] = a.wow64 ? "1" : "0")
    };

  function bu(a) {
    var b;
    b = b === void 0 ? document : b;
    var c;
    return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
  };
  var cu = !1;

  function du() {
    if (bu("join-ad-interest-group") && qb(qc.joinAdInterestGroup)) return !0;
    cu || (rl(''), cu = !0);
    return bu("join-ad-interest-group") && qb(qc.joinAdInterestGroup)
  }

  function eu(a, b) {
    var c = Xi[3] === void 0 ? 1 : Xi[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (c === 1) {
        var f = H.querySelector(d);
        f && (e = [f])
      } else e = Array.from(H.querySelectorAll(d))
    } catch (q) {}
    var g;
    a: {
      try {
        g = H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]');
        break a
      } catch (q) {}
      g = void 0
    }
    var h = g,
      m = ((h == null ? void 0 : h.length) || 0) >= (Xi[2] === void 0 ? 50 : Xi[2]),
      n;
    if (n = e.length >= 1) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p !== void 0 && Db() - p < (Xi[1] === void 0 ? 6E4 : Xi[1]) ? (mb("TAGGING",
        9), n = !0) : n = !1
    }
    if (!n) {
      if (c === 1)
        if (e.length >= 1) fu(e[0]);
        else {
          if (m) {
            mb("TAGGING", 10);
            return
          }
        }
      else e.length >= c ? fu(e[0]) : m && fu(h[0]);
      Cc(a, void 0, {
        allow: "join-ad-interest-group"
      }, {
        taggingId: b,
        loadTime: Db()
      })
    }
  }

  function fu(a) {
    try {
      a.parentNode.removeChild(a)
    } catch (b) {}
  }

  function gu() {
    return "https://td.doubleclick.net"
  };
  var bv = {
    N: {
      Wh: "ads_conversion_hit",
      Ed: "container_execute_start",
      Zh: "container_setup_end",
      Tf: "container_setup_start",
      Xh: "container_blocking_end",
      Yh: "container_execute_end",
      ai: "container_yield_end",
      Uf: "container_yield_start",
      Zi: "event_execute_end",
      Yi: "event_evaluation_end",
      Lg: "event_evaluation_start",
      aj: "event_setup_end",
      fe: "event_setup_start",
      cj: "ga4_conversion_hit",
      ie: "page_load",
      An: "pageview",
      ic: "snippet_load",
      wj: "tag_callback_error",
      xj: "tag_callback_failure",
      yj: "tag_callback_success",
      zj: "tag_execute_end",
      pd: "tag_execute_start"
    }
  };

  function cv() {
    function a(c, d) {
      var e = nb(d);
      e && b.push([c, e])
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b
  };
  var dv = !1;
  var Mv = function(a, b) {},
    Nv = function(a, b) {},
    Ov = function(a, b) {},
    Pv = function(a, b) {},
    Qv = function() {
      var a = {};
      return a
    },
    Dv = function(a) {
      a = a === void 0 ? !0 : a;
      var b = {};
      return b
    },
    Rv = function() {},
    Sv = function(a, b) {},
    Tv = function(a, b, c) {},
    Uv = function() {};

  function Vv(a, b) {
    var c = G,
      d, e = c.GooglebQhCsO;
    e || (e = {}, c.GooglebQhCsO = e);
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0
  };
  var Wv = function(a, b, c) {
    var d = ml(a, "fmt");
    if (b) {
      var e = ml(a, "random"),
        f = ml(a, "label") || "";
      if (!e) return !1;
      var g = Pt(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
      if (!Vv(g, b)) return !1
    }
    d && d != 4 && (a = ol(a, "rfmt", d));
    var h = ol(a, "fmt", 4);
    Ac(h, function() {
      G.google_noFurtherRedirects && b && b.call && (G.google_noFurtherRedirects = null, b())
    }, void 0, c, H.getElementsByTagName("script")[0].parentElement || void 0);
    return !0
  };

  function nw(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b]
    }
  };

  function ow(a, b, c) {
    c = c === void 0 ? !1 : c;
    pw().addRestriction(0, a, b, c)
  }

  function qw(a, b, c) {
    c = c === void 0 ? !1 : c;
    pw().addRestriction(1, a, b, c)
  }

  function rw() {
    var a = Nj();
    return pw().getRestrictions(1, a)
  }
  var sw = function() {
      this.m = {};
      this.F = {}
    },
    tw = function(a, b) {
      var c = a.m[b];
      c || (c = {
        _entity: {
          internal: [],
          external: []
        },
        _event: {
          internal: [],
          external: []
        }
      }, a.m[b] = c);
      return c
    };
  sw.prototype.addRestriction = function(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!d || !this.F[b]) {
      var e = tw(this, b);
      a === 0 ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : a === 1 && (d ? e._event.external.push(c) : e._event.internal.push(c))
    }
  };
  sw.prototype.getRestrictions = function(a, b) {
    var c = tw(this, b);
    if (a === 0) {
      var d, e;
      return [].concat(ra((c == null ? void 0 : (d = c._entity) == null ? void 0 : d.internal) || []), ra((c == null ? void 0 : (e = c._entity) == null ? void 0 : e.external) || []))
    }
    if (a === 1) {
      var f, g;
      return [].concat(ra((c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) || []), ra((c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) || []))
    }
    return []
  };
  sw.prototype.getExternalRestrictions = function(a, b) {
    var c = tw(this, b),
      d, e;
    return a === 0 ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) || [] : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) || []
  };
  sw.prototype.removeExternalRestrictions = function(a) {
    var b = tw(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.F[a] = !0
  };

  function pw() {
    var a = ni.r;
    a || (a = new sw, ni.r = a);
    return a
  };
  var uw = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    vw = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"]
    },
    ww = {
      cl: ["ecl"],
      customPixels: ["customScripts",
"html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    },
    xw = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");

  function yw() {
    var a = Mi("gtm.allowlist") || Mi("gtm.whitelist");
    a && P(9);
    si && (a = ["google", "gtagfl", "lcl", "zone"]);
    uw.test(G.location && G.location.hostname) && (si ? P(116) : (P(117), zw && (a = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
    var b = a && Hb(Ab(a), vw),
      c = Mi("gtm.blocklist") || Mi("gtm.blacklist");
    c || (c = Mi("tagTypeBlacklist")) && P(3);
    c ? P(8) : c = [];
    uw.test(G.location && G.location.hostname) && (c = Ab(c), c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    Ab(c).indexOf("google") >= 0 && P(2);
    var d = c && Hb(Ab(c), ww),
      e = {};
    return function(f) {
      var g = f && f[Ie.ra];
      if (!g || typeof g !== "string") return !0;
      g = g.replace(/^_*/, "");
      if (e[g] !== void 0) return e[g];
      var h = Ci[g] || [],
        m = !0;
      if (a) {
        var n;
        if (n = m) a: {
          if (b.indexOf(g) < 0)
            if (h && h.length > 0)
              for (var p = 0; p < h.length; p++) {
                if (b.indexOf(h[p]) < 0) {
                  P(11);
                  n = !1;
                  break a
                }
              } else {
                n = !1;
                break a
              }
          n = !0
        }
        m = n
      }
      var q = !1;
      if (c) {
        var r = d.indexOf(g) >= 0;
        if (r) q = r;
        else {
          var t = vb(d, h || []);
          t && P(10);
          q = t
        }
      }
      var u = !m || q;
      u || !(h.indexOf("sandboxedScripts") >= 0) || b && b.indexOf("sandboxedScripts") !==
        -1 || (u = vb(d, xw));
      return e[g] = u
    }
  }
  var zw = !1;
  zw = !0;

  function Aw() {
    Fj && ow(Nj(), function(a) {
      var b = tf(a.entityId),
        c;
      if (wf(b)) {
        var d = b[Ie.ra];
        if (!d) throw Error("Error: No function name given for function call.");
        var e = lf[d];
        c = !!e && !!e.runInSiloedMode
      } else c = !!nw(b[Ie.ra], 4);
      return c
    })
  }
  var Cw = function(a, b, c, d, e) {
      if (!Bw()) {
        var f = d.siloed ? Ij(a) : a;
        if (!dk(f)) {
          var g = "?id=" + encodeURIComponent(a) + "&l=" + mi.Za,
            h = a.indexOf("GTM-") === 0;
          h || (g += "&cx=c");
          U(61) && (g += "&gtm=" + vo());
          var m = rj();
          m && (g += "&sign=" + mi.Bf);
          var n = c ? "/gtag/js" : "/gtm.js",
            p = qj() ? pj(b, n + g) : void 0;
          if (!p) {
            var q = mi.Fd + n;
            m && tc && h ? (q = tc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0], p = Vr("https://", "http://", q + g)) : p = Fi.F ? Gi() + n + g : Vr("https://", "http://", q + g)
          }
          d.siloed && fk({
            ctid: f,
            isDestination: !1
          });
          var r = Qj();
          Cj().container[f] = {
            state: 1,
            context: d,
            parent: r
          };
          Bj({
            ctid: f,
            isDestination: !1
          }, e);
          Ac(p)
        }
      }
    },
    Dw = function(a, b, c, d) {
      if (!Bw()) {
        var e = c.siloed ? Ij(a) : a;
        if (!ek(e))
          if (!c.siloed && gk()) Cj().destination[e] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: Qj()
          }, Bj({
            ctid: e,
            isDestination: !0
          }, d), P(91);
          else {
            var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + mi.Za + "&cx=c";
            U(61) && (f += "&gtm=" + vo());
            rj() && (f += "&sign=" + mi.Bf);
            var g = qj() ? pj(b, f) : void 0;
            g || (g = Fi.F ? Gi() + f : Vr("https://", "http://", mi.Fd + f));
            c.siloed && fk({
              ctid: e,
              isDestination: !0
            });
            Cj().destination[e] = {
              state: 1,
              context: c,
              parent: Qj()
            };
            Bj({
              ctid: e,
              isDestination: !0
            }, d);
            Ac(g)
          }
      }
    };

  function Bw() {
    if (to()) {
      return !0
    }
    return !1
  };
  var Ew = !1,
    Fw = 0,
    Gw = [];

  function Hw(a) {
    if (!Ew) {
      var b = H.createEventObject,
        c = H.readyState === "complete",
        d = H.readyState === "interactive";
      if (!a || a.type !== "readystatechange" || c || !b && d) {
        Ew = !0;
        for (var e = 0; e < Gw.length; e++) I(Gw[e])
      }
      Gw.push = function() {
        for (var f = Aa.apply(0, arguments), g = 0; g < f.length; g++) I(f[g]);
        return 0
      }
    }
  }

  function Iw() {
    if (!Ew && Fw < 140) {
      Fw++;
      try {
        var a, b;
        (b = (a = H.documentElement).doScroll) == null || b.call(a, "left");
        Hw()
      } catch (c) {
        G.setTimeout(Iw, 50)
      }
    }
  }

  function Jw(a) {
    Ew ? a() : Gw.push(a)
  };

  function Lw(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Lj()
    }
  };
  var Nw = function(a, b) {
      this.m = !1;
      this.M = [];
      this.eventData = {
        tags: []
      };
      this.R = !1;
      this.F = this.J = 0;
      Mw(this, a, b)
    },
    Ow = function(a, b, c, d) {
      if (pi.hasOwnProperty(b) || b === "__zone") return -1;
      var e = {};
      Ya(d) && (e = k(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1
    },
    Pw = function(a, b, c, d) {
      var e = a.eventData.tags[b];
      e && (e.status = c, e.executionTime = d)
    },
    mx = function(a) {
      if (!a.m) {
        for (var b = a.M, c = 0; c < b.length; c++) b[c]();
        a.m = !0;
        a.M.length = 0
      }
    },
    Mw = function(a, b, c) {
      b !== void 0 && a.pe(b);
      c && G.setTimeout(function() {
          mx(a)
        },
        Number(c))
    };
  Nw.prototype.pe = function(a) {
    var b = this,
      c = Fb(function() {
        I(function() {
          a(Lj(), b.eventData)
        })
      });
    this.m ? c() : this.M.push(c)
  };
  var sx = function(a) {
      a.J++;
      return Fb(function() {
        a.F++;
        a.R && a.F >= a.J && mx(a)
      })
    },
    tx = function(a) {
      a.R = !0;
      a.F >= a.J && mx(a)
    };
  var ux = {},
    wx = function() {
      return G[vx()]
    };

  function vx() {
    return G.GoogleAnalyticsObject || "ga"
  }
  var zx = function() {
      var a = Lj();
    },
    Ax = function(a, b) {
      return function() {
        var c = wx(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function(f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              m = g.indexOf("&tid=" + b) < 0;
            m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
            e(f);
            m && (f.set("hitPayload", g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
          })
        }
      }
    };
  var Fx = ["es", "1"],
    Gx = {},
    Hx = {};

  function Ix(a, b) {
    if (zj) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Gx[a] = [["e", c], ["eid", a]];
      zk(a)
    }
  }

  function Jx(a) {
    var b = a.eventId,
      c = a.Ya;
    if (!Gx[b]) return [];
    var d = [];
    Hx[b] || d.push(Fx);
    d.push.apply(d, ra(Gx[b]));
    c && (Hx[b] = !0);
    return d
  };
  var Kx = {},
    Lx = {},
    Mx = {};

  function Nx(a, b, c, d) {
    zj && U(70) && ((d === void 0 ? 0 : d) ? (Mx[b] = Mx[b] || 0, ++Mx[b]) : c !== void 0 ? (Lx[a] = Lx[a] || {}, Lx[a][b] = Math.round(c)) : (Kx[a] = Kx[a] || {}, Kx[a][b] = (Kx[a][b] || 0) + 1))
  }

  function Ox(a) {
    var b = a.eventId,
      c = a.Ya,
      d = Kx[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Kx[b];
    return e.length ? [["md", e.join(".")]] : []
  }

  function Px(a) {
    var b = a.eventId,
      c = a.Ya,
      d = Lx[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Lx[b];
    return e.length ? [["mtd", e.join(".")]] : []
  }

  function Qx() {
    for (var a = [], b = pa(Object.keys(Mx)), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      a.push("" + d + Mx[d])
    }
    return a.length ? [["mec", a.join(".")]] : []
  };
  var Rx = {},
    Sx = {};

  function Tx(a, b, c) {
    if (zj && b) {
      var d = uj(b);
      Rx[a] = Rx[a] || [];
      Rx[a].push(c + d);
      var e = (wf(b) ? "1" : "2") + d;
      Sx[a] = Sx[a] || [];
      Sx[a].push(e);
      zk(a)
    }
  }

  function Ux(a) {
    var b = a.eventId,
      c = a.Ya,
      d = [],
      e = Rx[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = Sx[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete Rx[b], delete Sx[b]);
    return d
  };

  function Vx(a, b, c, d) {
    var e = jf[a],
      f = Wx(a, b, c, d);
    if (!f) return null;
    var g = xf(e[Ie.uj], c, []);
    if (g && g.length) {
      var h = g[0];
      f = Vx(h.index, {
        onSuccess: f,
        onFailure: h.Jj === 1 ? b.terminate : f,
        terminate: b.terminate
      }, c, d)
    }
    return f
  }

  function Wx(a, b, c, d) {
    function e() {
      if (f[Ie.Qk]) h();
      else {
        var w = vf(f, c, []),
          y = w[Ie.pk];
        if (y != null)
          for (var x = 0; x < y.length; x++)
            if (!X(y[x])) {
              h();
              return
            } var B = Ow(c.jc, String(f[Ie.ra]), Number(f[Ie.oe]), w[Ie.Rk]),
          A = !1;
        w.vtp_gtmOnSuccess = function() {
          if (!A) {
            A = !0;
            var C = Db() - E;
            Tx(c.id, jf[a], "5");
            Pw(c.jc, B, "success", C);
            U(62) && Tv(c, f, bv.N.yj);
            g()
          }
        };
        w.vtp_gtmOnFailure = function() {
          if (!A) {
            A = !0;
            var C = Db() - E;
            Tx(c.id, jf[a], "6");
            Pw(c.jc, B, "failure", C);
            U(62) && Tv(c, f, bv.N.xj);
            h()
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId =
          c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        Tx(c.id, f, "1");
        var D = function() {
          Gl(3);
          var C = Db() - E;
          Tx(c.id, f, "7");
          Pw(c.jc, B, "exception", C);
          U(62) && Tv(c, f, bv.N.wj);
          A || (A = !0, h())
        };
        U(62) && Sv(c, f);
        var E = Db();
        try {
          yf(w, {
            event: c,
            index: a,
            type: 1
          })
        } catch (C) {
          D(C)
        }
        U(62) && Tv(c, f, bv.N.zj)
      }
    }
    var f = jf[a],
      g = b.onSuccess,
      h = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = xf(f[Ie.Aj], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Vx(p.index, {
          onSuccess: g,
          onFailure: h,
          terminate: m
        }, c, d);
      if (!q) return null;
      g = q;
      h = p.Jj ===
        2 ? m : q
    }
    if (f[Ie.mj] || f[Ie.Tk]) {
      var r = f[Ie.mj] ? kf : c.Sm,
        t = g,
        u = h;
      if (!r[a]) {
        e = Fb(e);
        var v = Xx(a, r, e);
        g = v.onSuccess;
        h = v.onFailure
      }
      return function() {
        r[a](t, u)
      }
    }
    return e
  }

  function Xx(a, b, c) {
    var d = [],
      e = [];
    b[a] = Yx(d, e, c);
    return {
      onSuccess: function() {
        b[a] = Zx;
        for (var f = 0; f < d.length; f++) d[f]()
      },
      onFailure: function() {
        b[a] = $x;
        for (var f = 0; f < e.length; f++) e[f]()
      }
    }
  }

  function Yx(a, b, c) {
    return function(d, e) {
      a.push(d);
      b.push(e);
      c()
    }
  }

  function Zx(a) {
    a()
  }

  function $x(a, b) {
    b()
  };
  var cy = function(a, b) {
    for (var c = [], d = 0; d < jf.length; d++)
      if (a[d]) {
        var e = jf[d];
        var f = sx(b.jc);
        try {
          var g = Vx(d, {
            onSuccess: f,
            onFailure: f,
            terminate: f
          }, b, d);
          if (g) {
            var h = e[Ie.ra];
            if (!h) throw Error("Error: No function name given for function call.");
            var m = lf[h];
            c.push({
              gk: d,
              Vj: (m ? m.priorityOverride || 0 : 0) || nw(e[Ie.ra], 1) || 0,
              execute: g
            })
          } else ay(d, b), f()
        } catch (p) {
          f()
        }
      } c.sort(by);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return c.length >
      0
  };

  function by(a, b) {
    var c, d = b.Vj,
      e = a.Vj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (c !== 0) f = c;
    else {
      var g = a.gk,
        h = b.gk;
      f = g > h ? 1 : g < h ? -1 : 0
    }
    return f
  }

  function ay(a, b) {
    if (zj) {
      var c = function(d) {
        var e = b.isBlocked(jf[d]) ? "3" : "4",
          f = xf(jf[d][Ie.uj], b, []);
        f && f.length && c(f[0].index);
        Tx(b.id, jf[d], e);
        var g = xf(jf[d][Ie.Aj], b, []);
        g && g.length && c(g[0].index)
      };
      c(a)
    }
  }
  var fy = !1,
    dy;
  var ly = function(a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (U(62)) {}
    if (d === "gtm.js") {
      if (fy) return !1;
      fy = !0
    }
    var e = !1,
      f = rw(),
      g = k(a);
    if (!f.every(function(t) {
        return t({
          originalEventData: g
        })
      })) {
      if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent") return !1;
      e = !0
    }
    Ix(b, d);
    var h = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: hy(g, e),
        Sm: [],
        logMacroError: function() {
          P(6);
          Gl(0)
        },
        cachedModelValues: iy(),
        jc: new Nw(function() {
          if (U(62)) {}
          h &&
            h.apply(h, [].slice.call(arguments, 0))
        }, m),
        originalEventData: g
      };
    U(70) && zj && (n.reportMacroDiscrepancy = Nx);
    U(62) && Ov(n.id, n.name);
    var p = Gf(n);
    U(62) && Pv(n.id, n.name);
    e && (p = jy(p));
    if (U(62)) {}
    var q = cy(p, n),
      r = !1;
    tx(n.jc);
    d !== "gtm.js" && d !== "gtm.sync" || zx();
    return ky(p, q) || r
  };

  function iy() {
    var a = {};
    a.event = Ri("event", 1);
    a.ecommerce = Ri("ecommerce", 1);
    a.gtm = Ri("gtm");
    a.eventModel = Ri("eventModel");
    return a
  }

  function hy(a, b) {
    var c = yw();
    return function(d) {
      if (c(d)) return !0;
      var e = d && d[Ie.ra];
      if (!e || typeof e != "string") return !0;
      e = e.replace(/^_*/, "");
      var f, g = Nj();
      f = pw().getRestrictions(0, g);
      var h = a;
      b && (h = k(a), h["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
      for (var m = Ci[e] || [], n = pa(f), p = n.next(); !p.done; p = n.next()) {
        var q = p.value;
        try {
          if (!q({
              entityId: e,
              securityGroups: m,
              originalEventData: h
            })) return !0
        } catch (r) {
          return !0
        }
      }
      return !1
    }
  }

  function jy(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(jf[c][Ie.ra]);
        if (oi[d] || jf[c][Ie.Uk] !== void 0 || nw(d, 2)) b[c] = !0
      } return b
  }

  function ky(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && jf[c] && !pi[String(jf[c][Ie.ra])]) return !0;
    return !1
  }
  var my = 0;

  function ny() {
    my === 1 && yk()
  }
  var oy = function(a) {
    if (!a.Ij || my !== 1) return [];
    a.Kc();
    var b = zl();
    b.push(["mcc", "1"]);
    my = 3;
    return b
  };

  function py(a, b) {
    return arguments.length === 1 ? qy("set", a) : qy("set", a, b)
  }

  function ry(a, b) {
    return arguments.length === 1 ? qy("config", a) : qy("config", a, b)
  }

  function sy(a, b, c) {
    c = c || {};
    c[Q.g.Zb] = a;
    return qy("event", b, c)
  }

  function qy() {
    return arguments
  };
  var ty = function() {
    this.messages = [];
    this.m = []
  };
  ty.prototype.enqueue = function(a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0
      }),
      f = {
        message: a,
        notBeforeEventId: b,
        priorityId: d,
        messageContext: e
      };
    this.messages.push(f);
    for (var g = 0; g < this.m.length; g++) try {
      this.m[g](f)
    } catch (h) {}
  };
  ty.prototype.listen = function(a) {
    this.m.push(a)
  };
  ty.prototype.get = function() {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || (d = [], a[c.notBeforeEventId] = d);
      d.push(c)
    }
    return a
  };
  ty.prototype.prune = function(a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e)
    }
    this.messages = c;
    return b
  };

  function uy(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = Nf.canonicalContainerId;
    vy().enqueue(a, b, c)
  }

  function wy() {
    var a = xy;
    vy().listen(a)
  }

  function vy() {
    var a = ni.mb;
    a || (a = new ty, ni.mb = a);
    return a
  };
  var Jf;
  var yy = {},
    zy = {};

  function Ay(a, b) {
    for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
        Jh: void 0,
        qh: void 0
      }, f++) {
      var g = a[f];
      if (g.indexOf("-") >= 0) {
        if (e.Jh = wm(g, b), e.Jh) {
          var h = Jj();
          tb(h, function(r) {
            return function(t) {
              return r.Jh.ka === t
            }
          }(e)) ? c.push(g) : d.push(g)
        }
      } else {
        var m = yy[g] || [];
        e.qh = {};
        m.forEach(function(r) {
          return function(t) {
            r.qh[t] = !0
          }
        }(e));
        for (var n = Gj(), p = 0; p < n.length; p++)
          if (e.qh[n[p]]) {
            c = c.concat(Jj());
            break
          } var q = zy[g] || [];
        q.length && (c = c.concat(q))
      }
    }
    return {
      im: c,
      lm: d
    }
  }

  function By(a) {
    z(yy, function(b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1)
    })
  }

  function Cy(a) {
    z(zy, function(b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1)
    })
  }
  var Dy = "HA GF G UA AW DC MC".split(" "),
    Ey = !1,
    Fy = !1,
    Gy = !1,
    Hy = !1;

  function Iy(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
      value: Di()
    });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return {
      eventId: b.eventId,
      priorityId: b.priorityId
    }
  }
  var Jy = void 0,
    Ky = void 0;

  function Ly(a, b, c) {
    var d = k(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function(f) {
      return b[f] !== void 0
    }) && P(136);
    var e = k(b);
    k(c, e);
    uy(ry(Gj()[0], e), a.eventId, d)
  }

  function My(a) {
    for (var b = pa([Q.g.jd, Q.g.Mb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = a && a[d] || ln.F[d];
      if (e) return e
    }
  }
  var Ny = [Q.g.jd, Q.g.Mb, Q.g.yc, Q.g.nb, Q.g.ub, Q.g.Da, Q.g.xa, Q.g.Oa, Q.g.Va, Q.g.Fb],
    Oy = {
      config: function(a, b) {
        var c = Iy(a, b);
        if (!(a.length < 2) && l(a[1])) {
          var d = {};
          if (a.length > 2) {
            if (a[2] != void 0 && !Ya(a[2]) || a.length > 3) return;
            d = a[2]
          }
          var e = wm(a[1], b.isGtmEvent);
          if (e) {
            var f, g, h;
            a: {
              if (!Ej.he) {
                var m = Pj(Qj());
                if (ik(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  h = {
                    xm: Pj(n),
                    hm: p
                  };
                  break a
                }
              }
              h = void 0
            }
            var q = h;
            q && (f = q.xm, g = q.hm);
            Ix(c.eventId, "gtag.config");
            var r = e.ka,
              t = e.id !== r;
            if (t ? Jj().indexOf(r) === -1 : Gj().indexOf(r) === -1) {
              if (!b.inheritParentConfig &&
                !d[Q.g.Ib]) {
                var u = My(d);
                if (t) Dw(r, u, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });
                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                  var v = d;
                  Jy ? Ly(b, v, Jy) : Ky || (Ky = k(v))
                } else Cw(r, u, !0, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                })
              }
            } else {
              if (f && (P(128), g && P(130), b.inheritParentConfig)) {
                var w;
                var y = d;
                Ky ? (Ly(b, Ky, y), w = !1) : (!y[Q.g.ac] && ri && Jy || (Jy = k(y)), w = !0);
                w && f.containers && f.containers.join(",");
                return
              }
              var x = d;
              if (!Gy && (Gy = !0, Fy))
                for (var B = pa(Ny), A = B.next(); !A.done; A = B.next())
                  if (x.hasOwnProperty(A.value)) {
                    El("erc");
                    break
                  } Aj && !Fj && (my === 1 && Fc(G, "pagehide", ny), my = 2);
              if (ri && !t && !d[Q.g.ac]) {
                var D = Hy;
                Hy = !0;
                if (D) return
              }
              Ey || P(43);
              if (!b.noTargetGroup)
                if (t) {
                  Cy(e.id);
                  var E = e.id,
                    C = d[Q.g.Xd] || "default";
                  C = String(C).split(",");
                  for (var F = 0; F < C.length; F++) {
                    var M = zy[C[F]] || [];
                    zy[C[F]] = M;
                    M.indexOf(E) < 0 && M.push(E)
                  }
                } else {
                  By(e.id);
                  var L = e.id,
                    O = d[Q.g.Xd] || "default";
                  O = O.toString().split(",");
                  for (var S = 0; S < O.length; S++) {
                    var ba = yy[O[S]] || [];
                    yy[O[S]] = ba;
                    ba.indexOf(L) < 0 && ba.push(L)
                  }
                } delete d[Q.g.Xd];
              var aa = b.eventMetadata || {};
              aa.hasOwnProperty("is_external_event") ||
                (aa.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = aa;
              delete d[Q.g.bd];
              for (var R = t ? [e.id] : Jj(), oa = 0; oa < R.length; oa++) {
                var ka = d,
                  ha = R[oa],
                  ia = k(b),
                  Ja = wm(ha, ia.isGtmEvent);
                Ja && ln.push("config", [ka], Ja, ia)
              }
            }
          }
        }
      },
      consent: function(a, b) {
        if (a.length === 3) {
          P(39);
          var c = Iy(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[Q.g.P] && P(139), e[Q.g.Aa] && P(140));
          d === "default" ? lm(e) : d === "update" ? mm(e, c) : d === "declare" && b.fromContainerExecution && km(e)
        }
      },
      event: function(a, b) {
        var c = a[1];
        if (!(a.length < 2) && l(c)) {
          var d;
          if (a.length > 2) {
            if (!Ya(a[2]) && a[2] != void 0 || a.length > 3) return;
            d = a[2]
          }
          var e = d,
            f = {},
            g = (f.event = c, f);
          e && (g.eventModel = k(e), e[Q.g.bd] && (g.eventCallback = e[Q.g.bd]), e[Q.g.Ud] && (g.eventTimeout = e[Q.g.Ud]));
          var h = Iy(a, b),
            m = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if (c === "optimize.callback") return g.eventModel = g.eventModel || {}, g;
          var p;
          var q = d,
            r = q && q[Q.g.Zb];
          r === void 0 && (r = Mi(Q.g.Zb, 2), r === void 0 && (r = "default"));
          if (l(r) || Array.isArray(r)) {
            var t;
            t = b.isGtmEvent ? l(r) ? [r] : r : r.toString().replace(/\s+/g,
              "").split(",");
            var u = Ay(t, b.isGtmEvent),
              v = u.im,
              w = u.lm;
            if (w.length)
              for (var y = My(q), x = 0; x < w.length; x++) {
                var B = wm(w[x], b.isGtmEvent);
                B && Dw(B.ka, y, {
                  source: 3,
                  fromContainerExecution: b.fromContainerExecution
                })
              }
            p = xm(v, b.isGtmEvent)
          } else p = void 0;
          var A = p;
          if (A) {
            var D;
            !A.length || ((D = b.eventMetadata) == null ? 0 : D.em_event) || (Fy = !0);
            Ix(m, c);
            for (var E = [], C = 0; C < A.length; C++) {
              var F = A[C],
                M = k(b);
              if (Dy.indexOf(Yj(F.prefix)) !== -1) {
                var L = k(d),
                  O = M.eventMetadata || {};
                O.hasOwnProperty("is_external_event") || (O.is_external_event = !M.fromContainerExecution);
                M.eventMetadata = O;
                delete L[Q.g.bd];
                mn(c, L, F.id, M);
                Aj && !Fj && my === 0 && (Ec(G, "pagehide", ny), my = 1)
              }
              E.push(F.id)
            }
            g.eventModel = g.eventModel || {};
            A.length > 0 ? g.eventModel[Q.g.Zb] = E.join() : delete g.eventModel[Q.g.Zb];
            Ey || P(43);
            b.noGtmEvent === void 0 && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
            g.eventModel[Q.g.Xb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g
          }
        }
      },
      get: function(a, b) {
        P(53);
        if (a.length === 4 && l(a[1]) && l(a[2]) && qb(a[3])) {
          var c = wm(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Ey || P(43);
            var f = My();
            if (!tb(Jj(), function(h) {
                return c.ka === h
              })) Dw(c.ka, f, {
              source: 4,
              fromContainerExecution: b.fromContainerExecution
            });
            else if (Dy.indexOf(Yj(c.prefix)) !== -1) {
              Iy(a, b);
              var g = {};
              k((g[Q.g.rb] = d, g[Q.g.Gb] = e, g));
              nn(d, function(h) {
                I(function() {
                  return e(h)
                })
              }, c.id, b)
            }
          }
        }
      },
      js: function(a, b) {
        if (a.length == 2 && a[1].getTime) {
          Ey = !0;
          var c = Iy(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
        }
      },
      policy: function(a) {
        if (a.length ===
          3 && l(a[1]) && qb(a[2])) {
          if (Kf(a[1], a[2]), P(74), a[1] === "all") {
            P(75);
            var b = !1;
            try {
              b = a[2](Lj(), "unknown", {})
            } catch (c) {}
            b || P(76)
          }
        } else P(73)
      },
      set: function(a, b) {
        var c;
        a.length == 2 && Ya(a[1]) ? c = k(a[1]) : a.length == 3 && l(a[1]) && (c = {}, Ya(a[2]) || Array.isArray(a[2]) ? c[a[1]] = k(a[2]) : c[a[1]] = a[2]);
        if (c) {
          var d = Iy(a, b),
            e = d.eventId,
            f = d.priorityId;
          k(c);
          var g = k(c);
          ln.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c
        }
      }
    },
    Py = {
      policy: !0
    };
  var Ry = function(a) {
    if (Qy(a)) return a;
    this.value = a
  };
  Ry.prototype.getUntrustedMessageValue = function() {
    return this.value
  };
  var Qy = function(a) {
    return !a || Va(a) !== "object" || Ya(a) ? !1 : "getUntrustedMessageValue" in a
  };
  Ry.prototype.getUntrustedMessageValue = Ry.prototype.getUntrustedMessageValue;
  var Sy = !1,
    Ty = [];

  function Uy() {
    if (!Sy) {
      Sy = !0;
      for (var a = 0; a < Ty.length; a++) I(Ty[a])
    }
  }

  function Vy(a) {
    Sy ? I(a) : Ty.push(a)
  };
  var Wy = 0,
    Xy = {},
    Yy = [],
    Zy = [],
    $y = !1,
    az = !1;

  function bz(a, b) {
    return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
  }
  var cz = function(a) {
      return G[mi.Za].push(a)
    },
    dz = function(a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return cz(a)
    },
    ez = function(a, b) {
      if (!rb(b) || b < 0) b = 0;
      var c = ni[mi.Za],
        d = 0,
        e = !1,
        f = void 0;
      f = G.setTimeout(function() {
        e || (e = !0, a());
        f = void 0
      }, b);
      return function() {
        var g = c ? c.subscribers : 1;
        ++d === g && (f && (G.clearTimeout(f), f = void 0), e || (a(), e = !0))
      }
    };

  function fz(a, b) {
    var c = a._clear || b.overwriteModelFields;
    z(a, function(e, f) {
      e !== "_clear" && (c && Pi(e), Pi(e, f))
    });
    zi || (zi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    typeof d !== "number" && (d = Di(), a["gtm.uniqueEventId"] = d, Pi("gtm.uniqueEventId", d));
    return ly(a)
  }

  function gz(a) {
    if (a == null || typeof a !== "object") return !1;
    if (a.event) return !0;
    if (xb(a)) {
      var b = a[0];
      if (b === "config" || b === "event" || b === "js" || b === "get") return !0
    }
    return !1
  }

  function hz() {
    var a;
    if (Zy.length) a = Zy.shift();
    else if (Yy.length) a = Yy.shift();
    else return;
    var b;
    var c = a;
    if ($y || !gz(c.message)) b = c;
    else {
      $y = !0;
      var d = c.message["gtm.uniqueEventId"];
      typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = Di());
      var e = {},
        f = {
          message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
          messageContext: {
            eventId: d - 2
          }
        },
        g = {},
        h = {
          message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
          messageContext: {
            eventId: d - 1
          }
        };
      Yy.unshift(h, c);
      if (Aj) {
        var m = Nf.ctid;
        if (m) {
          var n, p = Pj(Qj());
          n = p && p.context;
          var q = tl(!0),
            r = Nf.canonicalContainerId,
            t = yl(),
            u = n && n.fromContainerExecution,
            v = Ej.he,
            w = n && n.source;
          ul || (ul = t);
          wl.push(m + ";" + r + ";" + (u ? 1 : 0) + ";" + (w || 0) + ";" + (v ? 1 : 0));
          vl = q;
          Kk()
        }
      }
      b = f
    }
    return b
  }

  function iz() {
    for (var a = !1, b; !az && (b = hz());) {
      az = !0;
      delete Ji.eventModel;
      Li();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (d == null) az = !1;
      else {
        e.fromContainerExecution && Qi();
        try {
          if (qb(d)) try {
            d.call(Ni)
          } catch (v) {} else if (Array.isArray(d)) {
            var f = d;
            if (l(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                m = f.slice(1),
                n = Mi(g.join("."), 2);
              if (n != null) try {
                n[h].apply(n, m)
              } catch (v) {}
            }
          } else {
            var p = void 0;
            if (xb(d)) a: {
              if (d.length && l(d[0])) {
                var q = Oy[d[0]];
                if (q && (!e.fromContainerExecution || !Py[d[0]])) {
                  p = q(d, e);
                  break a
                }
              }
              p = void 0
            }
            else p =
              d;
            p && (a = fz(p, e) || a)
          }
        } finally {
          e.fromContainerExecution && Li(!0);
          var r = d["gtm.uniqueEventId"];
          if (typeof r === "number") {
            for (var t = Xy[String(r)] || [], u = 0; u < t.length; u++) Zy.push(jz(t[u]));
            t.length && Zy.sort(bz);
            delete Xy[String(r)];
            r > Wy && (Wy = r)
          }
          az = !1
        }
      }
    }
    return !a
  }

  function kz() {
    if (U(62)) {
      var a = lz();
    }
    var b = iz();
    if (U(62)) {}
    try {
      var c = Lj(),
        d = G[mi.Za].hide;
      if (d && d[c] !== void 0 && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && d[f] ===
            !0) {
            e = !1;
            break
          } e && (d.end(), d.end = null)
      }
    } catch (g) {}
    return b
  }

  function xy(a) {
    if (Wy < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Xy[b] = Xy[b] || [];
      Xy[b].push(a)
    } else Zy.push(jz(a)), Zy.sort(bz), I(function() {
      az || iz()
    })
  }

  function jz(a) {
    return {
      message: a.message,
      messageContext: a.messageContext
    }
  }
  var mz = function() {
      function a(f) {
        var g = {};
        if (Qy(f)) {
          var h = f;
          f = Qy(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0
        }
        return {
          message: f,
          messageContext: g
        }
      }
      var b = uc(mi.Za, []),
        c = ni[mi.Za] = ni[mi.Za] || {};
      c.pruned === !0 && P(83);
      Xy = vy().get();
      wy();
      Jw(function() {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push((f.event = "gtm.dom", f))
        }
      });
      Vy(function() {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push((f.event = "gtm.load", f))
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function() {
        var f;
        if (ni.SANDBOXED_JS_SEMAPHORE >
          0) {
          f = [];
          for (var g = 0; g < arguments.length; g++) f[g] = new Ry(arguments[g])
        } else f = [].slice.call(arguments, 0);
        var h = f.map(function(q) {
          return a(q)
        });
        Yy.push.apply(Yy, h);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (P(4), c.pruned = !0; this.length > n;) this.shift();
        var p = typeof m !== "boolean" || m;
        return iz() && p
      };
      var e = b.slice(0).map(function(f) {
        return a(f)
      });
      Yy.push.apply(Yy, e);
      if (lz()) {
        if (U(62)) {}
        I(kz)
      }
    },
    lz = function() {
      var a = !0;
      return a
    };

  function nz(a) {
    if (a == null || a.length === 0) return !1;
    var b = Number(a),
      c = Db();
    return b < c + 3E5 && b > c - 9E5
  }

  function oz(a) {
    return a && a.indexOf("pending:") === 0 ? nz(a.substr(8)) : !1
  };
  var pz = !1;

  function qz() {
    var a = Oj();
    if (a) {
      var b;
      return a.canonicalContainerId || "_" + (a.scriptContainerId || ((b = a.destinations) == null ? void 0 : b[0]))
    }
  }
  var rz = function(a) {
    if (pz) return [];
    var b = [],
      c = qz();
    c && b.push(["pcid", c]);
    a.Ya && (pz = !0, b.length && a.Kc());
    return b
  };
  var sz = /gtag[.\/]js/,
    tz = /gtm[.\/]js/,
    uz = !1;

  function vz(a) {
    if (a.scriptSource) {
      var b;
      try {
        var c;
        b = (c = Qc()) == null ? void 0 : c.getEntriesByType("resource")
      } catch (h) {}
      if (b) {
        for (var d = {}, e = 0; e < b.length; ++e) {
          var f = b[e],
            g = f.initiatorType;
          if (g === "script" && f.name === a.scriptSource) return {
            Im: e,
            Jm: d
          };
          d[g] = 1 + (d[g] || 0)
        }
        P(146)
      } else P(145)
    }
  }

  function wz(a) {
    if (uz) return "1";
    var b = a.scriptSource;
    if (b) {
      if (sz.test(b)) return "3";
      if (tz.test(b)) return "2"
    }
    return "0"
  }

  function xz() {
    if (Aj) {
      var a = Xj();
      if (!a) P(144);
      else if (a.canonicalContainerId) {
        var b = vz(a);
        if (b) {
          var c = !1;
          lk.push(function(d) {
            if (c) return [];
            d.Ya && (c = !0);
            d.Kc();
            var e = [["rtg", String(a.canonicalContainerId)], ["rlo", String(b.Im)], ["slo", String(b.Jm.script || "0")]];
            if (U(66)) {
              var f = e.push,
                g;
              a: {
                if ((a.scriptContainerId || "").indexOf("GTM-") >= 0) {
                  var h;
                  b: {
                    if (a.scriptSource) {
                      for (var m = Fi.M, n = V(a.scriptSource), p = m ? n.pathname : "" + n.hostname + n.pathname, q = H.scripts, r = "", t = 0; t < q.length; ++t) {
                        var u = q[t];
                        if (!(u.innerHTML.length ===
                            0 || !m && u.innerHTML.indexOf(a.scriptContainerId || "SHOULD_NOT_BE_SET") < 0 || u.innerHTML.indexOf(p) < 0)) {
                          if (u.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                            h = String(t);
                            break b
                          }
                          r = String(t)
                        }
                      }
                      if (r) {
                        h = r;
                        break b
                      }
                    }
                    h = void 0
                  }
                  var v = h;
                  if (v) {
                    uz = !0;
                    g = v;
                    break a
                  }
                }
                var w = [].slice.call(document.scripts);g = a.scriptElement ? String(w.indexOf(a.scriptElement)) : "-1"
              }
              f.call(e, ["hlo", g]);
              e.push(["lst", wz(a)])
            }
            return e
          })
        }
      }
    }
  }
  var Sz = function() {};
  var Tz = function() {};
  Tz.prototype.toString = function() {
    return "undefined"
  };
  var Uz = new Tz;
  var Wz = function() {
      (ni.rm = ni.rm || {})[Nj()] = function(a) {
        if (Vz.hasOwnProperty(a)) return Vz[a]
      }
    },
    Zz = function(a, b, c) {
      if (a instanceof Xz) {
        var d = a,
          e = d.resolve,
          f = b,
          g = String(Di());
        Yz[g] = [f, c];
        a = e.call(d, g);
        b = pb
      }
      return {
        Lj: a,
        onSuccess: b
      }
    },
    $z = function(a) {
      var b = a ? 0 : 1;
      return function(c) {
        P(a ? 134 : 135);
        var d = Yz[c];
        if (d && typeof d[b] === "function") d[b]();
        Yz[c] = void 0
      }
    },
    Xz = function(a) {
      this.valueOf = this.toString;
      this.resolve = function(b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Uz ? b : a[d]);
        return c.join("")
      }
    };
  Xz.prototype.toString =
    function() {
      return this.resolve("undefined")
    };
  var Vz = {},
    Yz = {};

  function aA(a, b) {
    function c(g) {
      var h = V(g),
        m = ij(h, "protocol"),
        n = ij(h, "host", !0),
        p = ij(h, "port"),
        q = ij(h, "path").toLowerCase().replace(/\/$/, "");
      if (m === void 0 || m === "http" && p === "80" || m === "https" && p === "443") m = "web", p = "default";
      return [m, n, p, q]
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0
  }

  function bA(a) {
    return cA(a) ? 1 : 0
  }

  function cA(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = k(a, {});
        k({
          arg1: c[d],
          any_of: void 0
        }, e);
        if (bA(e)) return !0
      }
      return !1
    }
    switch (a["function"]) {
      case "_cn":
        return rg(b, c);
      case "_css":
        var f;
        a: {
          if (b) try {
            for (var g = 0; g < ng.length; g++) {
              var h = ng[g];
              if (b[h]) {
                f = b[h](c);
                break a
              }
            }
          } catch (m) {}
          f = !1
        }
        return f;
      case "_ew":
        return og(b, c);
      case "_eq":
        return sg(b, c);
      case "_ge":
        return tg(b, c);
      case "_gt":
        return vg(b, c);
      case "_lc":
        return String(b).split(",").indexOf(String(c)) >=
          0;
      case "_le":
        return ug(b, c);
      case "_lt":
        return wg(b, c);
      case "_re":
        return qg(b, c, a.ignore_case);
      case "_sw":
        return xg(b, c);
      case "_um":
        return aA(b, c)
    }
    return !1
  };

  function dA() {
    var a;
    a = a === void 0 ? "" : a;
    var b, c;
    return ((b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)) ? String(data.blob[1]) : a
  };

  function eA() {
    var a = [["cv", U(78) ? dA() : "16"], ["rv", mi.Pg], ["tc", jf.filter(function(b) {
      return b
    }).length]];
    mi.ke && a.push(["x", mi.ke]);
    Fi.m && a.push(["tag_exp", Fi.m]);
    return a
  };

  function fA() {
    var a = Il();
    return a.length ? [["exp_geo", a]] : []
  }
  var gA;

  function hA() {
    try {
      gA != null || (gA = (new Intl.DateTimeFormat).resolvedOptions().timeZone)
    } catch (b) {}
    var a;
    return ((a = gA) == null ? 0 : a.length) ? [["exp_tz", gA]] : []
  };

  function iA() {
    return !1
  }

  function jA() {
    var a = {};
    return function(b, c, d) {}
  };

  function kA() {
    var a = lA;
    return function(b, c, d) {
      var e = d && d.event;
      mA(c);
      var f = b.indexOf("__cvt_") === 0 ? void 0 : 1,
        g = new db;
      z(c, function(r, t) {
        var u = ed(t, void 0, f);
        u === void 0 && t !== void 0 && P(44);
        g.set(r, u)
      });
      a.m.m.F = Df();
      var h = {
        Fj: Tf(b),
        eventId: e == null ? void 0 : e.id,
        priorityId: e !== void 0 ? e.priorityId : void 0,
        pe: e !== void 0 ? function(r) {
          e.jc.pe(r)
        } : void 0,
        xb: function() {
          return b
        },
        log: function() {},
        Al: {
          index: d == null ? void 0 : d.index,
          type: d == null ? void 0 : d.type,
          name: d == null ? void 0 : d.name
        },
        Hm: !!nw(b, 3),
        originalEventData: e ==
          null ? void 0 : e.originalEventData
      };
      e && e.cachedModelValues && (h.cachedModelValues = {
        gtm: e.cachedModelValues.gtm,
        ecommerce: e.cachedModelValues.ecommerce
      });
      if (iA()) {
        var m = jA(),
          n, p;
        h.Sa = {
          Th: [],
          qe: {},
          yb: function(r, t, u) {
            t === 1 && (n = r);
            t === 7 && (p = u);
            m(r, t, u)
          },
          Mf: gh()
        };
        h.log = function(r) {
          var t = Aa.apply(1, arguments);
          n && m(n, 4, {
            level: r,
            source: p,
            message: t
          })
        }
      }
      var q = Ce(a, h, [b, g]);
      a.m.m.F = void 0;
      q instanceof Ha && q.type === "return" && (q = q.data);
      return J(q, void 0, f)
    }
  }

  function mA(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    qb(b) && (a.gtmOnSuccess = function() {
      I(b)
    });
    qb(c) && (a.gtmOnFailure = function() {
      I(c)
    })
  };

  function nA(a, b) {
    var c = this;
  }
  nA.U = "addConsentListener";
  var oA = !1;

  function pA(a) {
    for (var b = 0; b < a.length; ++b)
      if (oA) try {
        a[b]()
      } catch (c) {
        P(77)
      } else a[b]()
  }

  function qA(a, b, c) {
    var d = this,
      e;
    return e
  }
  qA.K = "internal.addDataLayerEventListener";

  function rA(a, b, c) {}
  rA.U = "addDocumentEventListener";

  function sA(a, b, c, d) {}
  sA.U = "addElementEventListener";

  function tA(a) {
    return a.H.m
  };

  function uA(a) {}
  uA.U = "addEventCallback";

  function KA(a) {}
  KA.K = "internal.addFormAbandonmentListener";

  function LA(a, b, c, d) {}
  LA.K = "internal.addFormData";
  var MA = {},
    NA = [],
    OA = {},
    PA = 0,
    QA = 0;

  function XA(a, b) {}
  XA.K = "internal.addFormInteractionListener";

  function dB(a, b) {}
  dB.K = "internal.addFormSubmitListener";

  function iB(a) {}
  iB.K = "internal.addGaSendListener";

  function jB(a) {
    if (!a) return {};
    var b = a.Al;
    return Lw(b.type, b.index, b.name)
  }

  function kB(a) {
    return a ? {
      originatingEntity: jB(a)
    } : {}
  };
  var mB = function(a, b, c) {
      lB().updateZone(a, b, c)
    },
    oB = function(a, b, c, d, e, f) {
      var g = lB();
      c = c && Hb(c, nB);
      for (var h = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, Lj(), h)) {
          var p = n,
            q = a,
            r = d,
            t = e,
            u = f;
          if (p.indexOf("GTM-") === 0) Cw(p, void 0, !1, {
            source: 1,
            fromContainerExecution: !0
          });
          else {
            var v = qy("js", Cb());
            Cw(p, void 0, !0, {
              source: 1,
              fromContainerExecution: !0
            });
            var w = {
              originatingEntity: t,
              inheritParentConfig: u
            };
            U(84) || uy(v, q, w);
            uy(ry(p, r), q, w)
          }
        }
      }
      return h
    },
    lB = function() {
      var a = ni.zones;
      a ||
        (a = ni.zones = new pB);
      return a
    },
    qB = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1
    },
    nB = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"]
    },
    pB = function() {
      this.m = {};
      this.F = {};
      this.J = 0
    };
  ca = pB.prototype;
  ca.isActive = function(a, b) {
    for (var c, d = 0; d < a.length && !(c = this.m[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.Ih], b)) return !1;
    for (var e = 0; e < c.Re.length; e++)
      if (this.F[c.Re[e]].ud(b)) return !0;
    return !1
  };
  ca.getIsAllowedFn = function(a, b) {
    if (!this.isActive(a, b)) return function() {
      return !1
    };
    for (var c, d = 0; d < a.length && !(c = this.m[a[d]]); d++);
    if (!c) return function() {
      return !0
    };
    for (var e = [], f = 0; f < c.Re.length; f++) {
      var g = this.F[c.Re[f]];
      g.ud(b) && e.push(g)
    }
    if (!e.length) return function() {
      return !1
    };
    var h = this.getIsAllowedFn([c.Ih], b);
    return function(m, n) {
      n = n || [];
      if (!h(m, n)) return !1;
      for (var p = 0; p < e.length; ++p)
        if (e[p].Xl(m, n)) return !0;
      return !1
    }
  };
  ca.unregisterChild = function(a) {
    for (var b = 0; b < a.length; b++) delete this.m[a[b]]
  };
  ca.createZone = function(a, b) {
    var c = String(++this.J);
    this.F[c] = new rB(a, b);
    return c
  };
  ca.updateZone = function(a, b, c) {
    var d = this.F[a];
    d && d.J(b, c)
  };
  ca.registerChild = function(a, b, c) {
    var d = this.m[a];
    if (!d && ni[a] || !d && dk(a) || d && d.Ih !== b) return !1;
    if (d) return d.Re.push(c), !1;
    this.m[a] = {
      Ih: b,
      Re: [c]
    };
    return !0
  };
  var rB = function(a, b) {
    this.F = null;
    this.m = [{
      eventId: a,
      ud: !0
    }];
    if (b) {
      this.F = {};
      for (var c = 0; c < b.length; c++) this.F[b[c]] = !0
    }
  };
  rB.prototype.J = function(a, b) {
    var c = this.m[this.m.length - 1];
    a <= c.eventId || c.ud !== b && this.m.push({
      eventId: a,
      ud: b
    })
  };
  rB.prototype.ud = function(a) {
    for (var b = this.m.length -
        1; b >= 0; b--)
      if (this.m[b].eventId <= a) return this.m[b].ud;
    return !1
  };
  rB.prototype.Xl = function(a, b) {
    b = b || [];
    if (!this.F || qB[a] || this.F[a]) return !0;
    for (var c = 0; c < b.length; ++c)
      if (this.F[b[c]]) return !0;
    return !1
  };

  function sB(a) {
    var b = ni.zones;
    return b ? b.getIsAllowedFn(Gj(), a) : function() {
      return !0
    }
  }

  function tB() {
    qw(Nj(), function(a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = ni.zones;
      return c ? c.isActive(Gj(), b) : !0
    });
    ow(Nj(), function(a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return sB(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
    })
  };
  var uB = function(a, b) {
    this.tagId = a;
    this.te = b
  };

  function vB(a, b) {
    var c = this,
      d;
    var e = function(v) {
      ow(v, function(w) {
        for (var y = pw().getExternalRestrictions(0, Nj()), x = pa(y), B = x.next(); !B.done; B = x.next()) {
          var A = B.value;
          if (!A(w)) return !1
        }
        return !0
      }, !0);
      qw(v, function(w) {
        for (var y = pw().getExternalRestrictions(1, Nj()), x = pa(y), B = x.next(); !B.done; B = x.next()) {
          var A = B.value;
          if (!A(w)) return !1
        }
        return !0
      }, !0);
      h && h(new uB(a, v))
    };
    K(this.getName(), ["tagId:!string", "options:?PixieMap"], arguments);
    var f = J(b,
        this.H, 1) || {},
      g = f.firstPartyUrl,
      h = f.onLoad,
      m = f.loadByDestination === !0,
      n = f.isGtmEvent === !0,
      p = f.siloed === !0;
    pA([function() {
      return N(c, "load_google_tags", a, g)
    }]);
    if (m) {
      if (ek(a)) return
    } else if (dk(a)) return;
    var q = 6,
      r = tA(this);
    n && (q = 7);
    r.xb() === "__zone" && (q = 1);
    var t = {
      source: q,
      fromContainerExecution: !0,
      siloed: p
    };
    if (m) Dw(a, g, t, e);
    else {
      var u = a.indexOf("GTM-") === 0;
      Cw(a, g, !u, t, e)
    }
    h && r.xb() === "__zone" && oB(Number.MIN_SAFE_INTEGER, [a], null, {}, jB(tA(this)));
    d = p ? Ij(a) : a;
    return d
  }
  vB.K = "internal.loadGoogleTag";

  function wB(a) {
    return new Xc("", function(b) {
      var c = this.evaluate(b);
      if (c instanceof Xc) return new Xc("", function() {
        var d = Aa.apply(0, arguments),
          e = this,
          f = k(tA(this), null);
        f.eventId = a.eventId;
        f.priorityId = a.priorityId;
        f.originalEventData = a.originalEventData;
        var g = d.map(function(m) {
            return e.evaluate(m)
          }),
          h = Oa(this.H);
        h.m = f;
        return c.hb.apply(c, [h].concat(ra(g)))
      })
    })
  };

  function xB(a, b, c) {
    var d = this;
  }
  xB.K = "internal.addGoogleTagRestriction";
  var yB = {},
    zB = [];

  function GB(a, b) {}
  GB.K = "internal.addHistoryChangeListener";

  function HB(a, b, c) {}
  HB.U = "addWindowEventListener";

  function IB(a, b) {
    return !0
  }
  IB.U = "aliasInWindow";

  function JB(a, b, c) {}
  JB.K = "internal.appendRemoteConfigParameter";

  function KB(a) {
    var b;
    return b
  }
  KB.U = "callInWindow";

  function LB(a) {}
  LB.U = "callLater";

  function MB(a) {}
  MB.K = "callOnDomReady";

  function NB(a) {}
  NB.K = "callOnWindowLoad";

  function OB(a, b) {
    var c;
    return c
  }
  OB.K = "internal.computeGtmParameter";

  function PB(a) {
    var b;
    return b
  }
  PB.K = "internal.copyFromCrossContainerData";

  function QB(a, b) {
    var c;
    K(this.getName(), ["key:!string", "dataLayerVersion:?number"], arguments), N(this, "read_data_layer", a), c = (b || 2) !== 2 ? Mi(a, 1) : Oi(a, [G, H]);
    var d = tA(this).xb().indexOf("__cvt_") === 0 ? 2 : 1,
      e = ed(c, this.H, d);
    e === void 0 && c !== void 0 && P(45);
    return e
  }
  QB.U = "copyFromDataLayer";

  function RB(a) {
    var b = void 0;
    return b
  }
  RB.K = "internal.copyFromDataLayerCache";

  function SB(a) {
    var b;
    return b
  }
  SB.U = "copyFromWindow";

  function TB(a) {
    var b = void 0;
    return ed(b, this.H, 1)
  }
  TB.K = "internal.copyKeyFromWindow";

  function UB(a, b) {
    var c;
    return c
  }
  UB.K = "internal.copyPreHit";

  function VB(a, b) {
    var c = null;
    K(this.getName(), ["functionPath:!string", "arrayPath:!string"], arguments);
    N(this, "access_globals", "readwrite", a);
    N(this, "access_globals", "readwrite", b);
    var d = [G, H],
      e = a.split("."),
      f = Jb(e, d),
      g = e[e.length - 1];
    if (f === void 0) throw Error("Path " + a + " does not exist.");
    var h = f[g];
    if (h && !qb(h)) return null;
    if (h) return ed(h, this.H, 2);
    var m;
    h = function() {
      if (!qb(m.push)) throw Error("Object at " + b + " in window is not an array.");
      m.push.call(m, arguments)
    };
    f[g] = h;
    var n = b.split("."),
      p = Jb(n, d),
      q = n[n.length - 1];
    if (p === void 0) throw Error("Path " + n + " does not exist.");
    m = p[q];
    m === void 0 && (m = [], p[q] = m);
    c = function() {
      h.apply(h, Array.prototype.slice.call(arguments, 0))
    };
    return ed(c, this.H, 2)
  }
  VB.U = "createArgumentsQueue";

  function WB(a) {
    return ed(function(c) {
      var d = wx();
      if (typeof c === "function") d(function() {
        c(function(f, g, h) {
          var m = wx(),
            n = m && m.getByName &&
            m.getByName(f);
          return Ok(G.gaplugins.Linker, n).decorate(g, h)
        })
      });
      else if (Array.isArray(c)) {
        var e = String(c[0]).split(".");
        b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c)
      } else if (c === "isLoaded") return !!d.loaded
    }, this.H, 1)
  }
  WB.K = "internal.createGaCommandQueue";

  function XB(a) {
    K(this.getName(), ["path:!string"], arguments);
    N(this, "access_globals", "readwrite", a);
    var b = a.split("."),
      c = Jb(b, [G, H]),
      d = b[b.length - 1];
    if (!c) throw Error("Path " + a + " does not exist.");
    var e = c[d];
    e === void 0 && (e = [], c[d] = e);
    var f = tA(this).xb().indexOf("__cvt_") === 0 ? 2 : 1;
    return ed(function() {
      if (!qb(e.push)) throw Error("Object at " + a + " in window is not an array.");
      e.push.apply(e, Array.prototype.slice.call(arguments,
        0))
    }, this.H, f)
  }
  XB.U = "createQueue";

  function YB(a, b) {
    var c = null;
    return c
  }
  YB.K = "internal.createRegex";

  function ZB() {
    var a = {};
    return a
  };

  function $B(a) {}
  $B.K = "internal.declareConsentState";

  function aC(a) {
    var b = "";
    return b
  }
  aC.K = "internal.decodeUrlHtmlEntities";

  function bC(a, b, c) {
    var d;
    return d
  }
  bC.K = "internal.decorateUrlWithGaCookies";

  function cC(a) {
    var b;
    return b
  }
  cC.K = "internal.detectUserProvidedData";

  function gC(a, b) {
    return b
  }
  gC.K = "internal.enableAutoEventOnClick";

  function pC(a, b) {
    return b
  }
  pC.K = "internal.enableAutoEventOnElementVisibility";

  function qC() {}
  qC.K = "internal.enableAutoEventOnError";
  var rC = {},
    sC = [],
    tC = {},
    uC = 0,
    vC = 0;

  function BC(a, b) {
    var c = this;
    return b
  }
  BC.K = "internal.enableAutoEventOnFormInteraction";

  function GC(a, b) {
    var c = this;
    return b
  }
  GC.K = "internal.enableAutoEventOnFormSubmit";

  function LC() {
    var a = this;
  }
  LC.K = "internal.enableAutoEventOnGaSend";
  var MC = {},
    NC = [];

  function UC(a, b) {
    var c = this;
    return b
  }
  UC.K = "internal.enableAutoEventOnHistoryChange";
  var VC = ["http://", "https://", "javascript:", "file://"];

  function ZC(a, b) {
    var c = this;
    return b
  }
  ZC.K = "internal.enableAutoEventOnLinkClick";
  var $C, aD;

  function lD(a, b) {
    var c = this;
    return b
  }
  lD.K = "internal.enableAutoEventOnScroll";

  function mD(a) {
    return function() {
      if (a.Ch && a.Eh >= a.Ch) a.Kf && G.clearInterval(a.Kf);
      else {
        a.Eh++;
        var b = Db();
        cz({
          event: a.eventName,
          "gtm.timerId": a.Kf,
          "gtm.timerEventNumber": a.Eh,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.Ch,
          "gtm.timerStartTime": a.fk,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.fk,
          "gtm.triggers": a.Zm
        })
      }
    }
  }

  function nD(a, b) {
    return b
  }
  nD.K = "internal.enableAutoEventOnTimer";
  var ic = ma(["data-gtm-yt-inspected-"]),
    pD = ["www.youtube.com", "www.youtube-nocookie.com"],
    qD, rD = !1;

  function BD(a, b) {
    var c = this;
    return b
  }
  BD.K = "internal.enableAutoEventOnYouTubeActivity";
  var CD;

  function DD(a) {
    var b = !1;
    return b
  }
  DD.K = "internal.evaluateMatchingRules";
  var lE = function() {
    var a = !0;
    co(7) && co(9) && co(10) || (a = !1);
    return a
  };

  function gF(a, b, c, d) {}
  gF.K = "internal.executeEventProcessor";

  function hF(a) {
    var b;
    K(this.getName(), ["javascript:!string"], arguments);
    N(this, "unsafe_run_arbitrary_javascript");
    try {
      var c = G.google_tag_manager;
      c && typeof c.e === "function" && (b = c.e(a))
    } catch (d) {}
    return ed(b, this.H, 1)
  }
  hF.K = "internal.executeJavascriptString";

  function iF(a) {
    var b;
    return b
  };
  var jF = null;

  function kF() {
    var a = new db;
    N(this, "read_container_data"), U(36) && jF ? a = jF : (a.set("containerId", 'GTM-KR3JKWP'), a.set("version", '16'), a.set("environmentName", ''), a.set("debugMode", Wf), a.set("previewMode", Yf), a.set("environmentMode", Xf), a.set("firstPartyServing", qj()), a.set("containerUrl", tc), a.Nb(), U(36) && (jF = a));
    return a
  }
  kF.U = "getContainerVersion";

  function lF(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c
  }
  lF.U = "getCookieValues";

  function mF() {
    return Il()
  }
  mF.K = "internal.getCountryCode";

  function nF() {
    var a = [];
    return ed(a)
  }
  nF.K = "internal.getDestinationIds";

  function oF(a, b) {
    var c = null;
    return c
  }
  oF.K = "internal.getElementAttribute";

  function pF(a) {
    var b = null;
    return b
  }
  pF.K = "internal.getElementById";

  function qF(a) {
    var b = "";
    return b
  }
  qF.K = "internal.getElementInnerText";

  function rF(a, b) {
    var c = null;
    return c
  }
  rF.K = "internal.getElementProperty";

  function sF(a) {
    var b;
    return b
  }
  sF.K = "internal.getElementValue";

  function tF(a) {
    var b = 0;
    return b
  }
  tF.K = "internal.getElementVisibilityRatio";

  function uF(a) {
    var b = null;
    return b
  }
  uF.K = "internal.getElementsByCssSelector";

  function vF(a) {
    var b;
    K(this.getName(), ["keyPath:!string"], arguments);
    N(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = tA(this).originalEventData;
      if (e) {
        for (var f = e, g = {}, h = {}, m = {}, n = [], p = d.split("\\\\"), q = 0; q < p.length; q++) {
          for (var r = p[q].split("\\."), t = 0; t < r.length; t++) {
            for (var u = r[t].split("."), v = 0; v < u.length; v++) n.push(u[v]), v !== u.length - 1 && n.push(m);
            t !== r.length - 1 && n.push(h)
          }
          q !== p.length - 1 && n.push(g)
        }
        for (var w = [], y = "", x = pa(n), B = x.next(); !B.done; B =
          x.next()) {
          var A = B.value;
          A === m ? (w.push(y), y = "") : y = A === g ? y + "\\" : A === h ? y + "." : y + A
        }
        y && w.push(y);
        for (var D = pa(w), E = D.next(); !E.done; E = D.next()) {
          if (f == null) {
            c = void 0;
            break a
          }
          f = f[E.value]
        }
        c = f
      } else c = void 0
    }
    b = ed(c, this.H, 1);
    return b
  }
  vF.K = "internal.getEventData";
  var wF = {};
  wF.enableAWFledge = U(22);
  wF.enableAdsConversionValidation = U(13);
  wF.enableAutoPiiOnPhoneAndAddress = U(21);
  wF.enableCachedEcommerceData = U(27);
  wF.enableCcdPreAutoPiiDetection = U(28);
  wF.enableCloudRecommentationsErrorLogging = U(30);
  wF.enableCloudRecommentationsSchemaIngestion = U(31);
  wF.enableCloudRetailInjectPurchaseMetadata = U(33);
  wF.enableCloudRetailLogging = U(32);
  wF.enableCloudRetailPageCategories = U(34);
  wF.enableConsentDisclosureActivity = U(35);
  wF.enableDCFledge = U(39);
  wF.enableDecodeUri = U(53);
  wF.enableDeferAllEnhancedMeasurement = U(40);
  wF.enableEuidAutoMode = U(47);
  wF.enableFormSkipValidation = U(50);
  wF.enableUrlDecodeEventUsage = U(77);
  wF.enableZoneConfigInChildContainers = U(80);
  wF.ignoreServerMacroInGoogleSignal = U(83);
  wF.renameOnoToNonGaiaRemarketing = U(85);
  wF.useEnableAutoEventOnFormApis = U(89);
  wF.autoPiiEligible = Nl();

  function xF() {
    return ed(wF)
  }
  xF.K = "internal.getFlags";

  function yF() {
    return new bd(Uz)
  }
  yF.K = "internal.getHtmlId";

  function zF(a, b) {
    var c;
    return c
  }
  zF.K = "internal.getProductSettingsParameter";

  function AF(a, b) {
    var c;
    return c
  }
  AF.U = "getQueryParameters";

  function BF(a, b) {
    var c;
    return c
  }
  BF.U = "getReferrerQueryParameters";

  function CF(a) {
    var b = "";
    return b
  }
  CF.U = "getReferrerUrl";

  function DF() {
    return Jl()
  }
  DF.K = "internal.getRegionCode";

  function EF(a, b) {
    var c;
    return c
  }
  EF.K = "internal.getRemoteConfigParameter";

  function FF(a) {
    var b = "";
    return b
  }
  FF.U = "getUrl";

  function GF() {
    N(this, "get_user_agent");
    return qc.userAgent
  }
  GF.K = "internal.getUserAgent";

  function NF() {
    return G.gaGlobal = G.gaGlobal || {}
  }
  var OF = function() {
      var a = NF();
      a.hid = a.hid || ub();
      return a.hid
    },
    PF = function(a, b) {
      var c = NF();
      if (c.vid == void 0 || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };
  var wG = function(a) {
      this.F = a;
      this.J = "";
      this.m = this.F
    },
    xG = function(a, b) {
      a.m = b;
      return a
    },
    yG = function(a, b) {
      a.M = b;
      return a
    };

  function zG(a) {
    var b = a.search;
    return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
  }

  function AG(a, b, c) {
    if (a) {
      var d = a || [];
      if (Array.isArray(d))
        for (var e = Ya(b) ? b : {}, f = pa(d), g = f.next(); !g.done; g = f.next()) c(g.value, e)
    }
  };
  var QG = window,
    RG = document,
    SG = function(a) {
      var b = QG._gaUserPrefs;
      if (b && b.ioo && b.ioo() || RG.documentElement.hasAttribute("data-google-analytics-opt-out") || a && QG["ga-disable-" + a] === !0) return !0;
      try {
        var c = QG.external;
        if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0
      } catch (p) {}
      for (var d = [], e = String(RG.cookie).split(";"), f = 0; f < e.length; f++) {
        var g = e[f].split("="),
          h = g[0].replace(/^\s*|\s*$/g, "");
        if (h && h == "AMP_TOKEN") {
          var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m)
        }
      }
      for (var n =
          0; n < d.length; n++)
        if (d[n] == "$OPT_OUT") return !0;
      return RG.getElementById("__gaOptOutExtension") ? !0 : !1
    };

  function cH(a) {
    z(a, function(c) {
      c.charAt(0) === "_" && delete a[c]
    });
    var b = a[Q.g.eb] || {};
    z(b, function(c) {
      c.charAt(0) === "_" && delete b[c]
    })
  };
  var kH = function(a, b) {};

  function jH(a, b) {
    var c = function() {};
    return c
  }

  function lH(a, b, c) {};
  var mH = jH;
  var nH = function(a, b, c) {
    for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]))
  };

  function oH(a, b, c) {
    var d = this;
    K(this.getName(), ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"], arguments);
    var e = b ? J(b) : {};
    pA([function() {
      return N(d, "configure_google_tags", a, e)
    }]);
    var f = c ? J(c) : {},
      g = tA(this);
    f.originatingEntity = jB(g);
    uy(ry(a, e), g.eventId, f);
  }
  oH.K = "internal.gtagConfig";

  function pH() {
    var a = {};
    return a
  };

  function rH(a, b) {}
  rH.U = "gtagSet";

  function sH(a, b) {}
  sH.U = "injectHiddenIframe";

  function tH(a, b, c, d, e) {}
  tH.K = "internal.injectHtml";
  var xH = {};

  function zH(a, b, c, d) {}
  var AH = {
      dl: 1,
      id: 1
    },
    BH = {};

  function CH(a, b, c, d) {}
  zH.U = "injectScript";
  CH.K = "internal.injectScript";

  function DH(a) {
    var b = !0;
    return b
  }
  DH.U = "isConsentGranted";

  function EH() {
    return Ll()
  }
  EH.K = "internal.isDmaRegion";

  function FH(a) {
    var b = !1;
    return b
  }
  FH.K = "internal.isEntityInfrastructure";

  function GH() {
    var a = bh(function(b) {
      tA(this).log("error", b)
    });
    a.U = "JSON";
    return a
  };

  function HH(a) {
    var b = void 0;
    return ed(b)
  }
  HH.K = "internal.legacyParseUrl";

  function IH() {
    return !1
  }
  var JH = {
    getItem: function(a) {
      var b = null;
      return b
    },
    setItem: function(a, b) {
      return !1
    },
    removeItem: function(a) {}
  };

  function KH() {
    try {
      N(this, "logging")
    } catch (c) {
      return
    }
    if (!console) return;
    for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) a[b] = J(a[b], this.H);
    console.log.apply(console, a);
  }
  KH.U = "logToConsole";

  function LH(a, b) {}
  LH.K = "internal.mergeRemoteConfig";

  function MH(a, b, c) {
    c = c === void 0 ? !0 : c;
    var d = [];
    return ed(d)
  }
  MH.K = "internal.parseCookieValuesFromString";

  function NH(a) {
    var b = void 0;
    return b
  }
  NH.U = "parseUrl";

  function OH(a) {}
  OH.K = "internal.processAsNewEvent";

  function PH(a, b, c) {
    var d;
    return d
  }
  PH.K = "internal.pushToDataLayer";

  function QH(a) {
    var b = !1;
    return b
  }
  QH.U = "queryPermission";

  function RH() {
    var a = "";
    return a
  }
  RH.U = "readCharacterSet";

  function SH() {
    return mi.Za
  }
  SH.K = "internal.readDataLayerName";

  function TH() {
    var a = "";
    return a
  }
  TH.U = "readTitle";

  function UH(a, b) {
    var c = this;
  }
  UH.K = "internal.registerCcdCallback";

  function VH(a) {
    return !0
  }
  VH.K = "internal.registerDestination";
  var WH = ["config", "event", "get", "set"];

  function XH(a, b, c) {}
  XH.K = "internal.registerGtagCommandListener";

  function YH(a, b) {
    var c = !1;
    return c
  }
  YH.K = "internal.removeDataLayerEventListener";

  function ZH(a, b) {}
  ZH.K = "internal.removeFormData";

  function $H() {}
  $H.U = "resetDataLayer";

  function aI(a, b, c, d) {}
  aI.K = "internal.sendGtagEvent";

  function bI(a, b, c) {}
  bI.U = "sendPixel";

  function cI(a, b) {}
  cI.K = "internal.setAnchorHref";

  function dI(a, b, c, d) {
    var e = this;
    d = d === void 0 ? !0 : d;
    var f = !1;
    return f
  }
  dI.U = "setCookie";

  function eI(a) {}
  eI.K = "internal.setCorePlatformServices";

  function fI(a, b) {}
  fI.K = "internal.setDataLayerValue";

  function gI(a) {}
  gI.U = "setDefaultConsentState";

  function hI(a, b) {}
  hI.K = "internal.setDelegatedConsentType";

  function iI(a, b) {}
  iI.K = "internal.setFormAction";

  function jI(a, b, c) {}
  jI.K = "internal.setInCrossContainerData";

  function kI(a, b, c) {
    return !1
  }
  kI.U = "setInWindow";

  function lI(a, b, c) {}
  lI.K = "internal.setProductSettingsParameter";

  function mI(a, b, c) {}
  mI.K = "internal.setRemoteConfigParameter";

  function nI(a, b, c, d) {
    var e = this;
  }
  nI.U = "sha256";

  function oI(a, b, c) {}
  oI.K = "internal.sortRemoteConfigParameters";

  function pI(a, b) {
    var c = void 0;
    return c
  }
  pI.K = "internal.subscribeToCrossContainerData";
  var qI = {},
    rI = {};
  qI.getItem = function(a) {
    var b = null;
    return b
  };
  qI.setItem = function(a, b) {};
  qI.removeItem = function(a) {};
  qI.clear = function() {};
  qI.U = "templateStorage";

  function sI(a, b) {
    var c = !1;
    return c
  }
  sI.K = "internal.testRegex";

  function tI(a) {
    var b;
    return b
  };

  function uI(a) {
    var b;
    return b
  }
  uI.K = "internal.unsiloId";

  function vI(a, b) {
    var c;
    return c
  }
  vI.K = "internal.unsubscribeFromCrossContainerData";

  function wI(a) {}
  wI.U = "updateConsentState";
  var xI;

  function yI(a, b, c) {
    xI = xI || new mh;
    xI.add(a, b, c)
  }

  function zI(a, b) {
    var c = xI = xI || new mh;
    if (c.F.hasOwnProperty(a)) throw "Attempting to add a private function which already exists: " + a + ".";
    if (c.m.hasOwnProperty(a)) throw "Attempting to add a private function with an existing API name: " + a + ".";
    c.F[a] = qb(b) ? Ig(a, b) : Jg(a, b)
  }

  function AI() {
    return function(a) {
      var b;
      var c = xI;
      if (c.m.hasOwnProperty(a)) b = c.get(a, this);
      else {
        var d;
        if (d = c.F.hasOwnProperty(a)) {
          var e = !1,
            f = this.H.m;
          if (f) {
            var g = f.xb();
            if (g) {
              g.indexOf("__cvt_") !== 0 && (e = !0);
            }
          } else e = !0;
          d = e
        }
        if (d) {
          var h = c.F.hasOwnProperty(a) ? c.F[a] : void 0;
          b = h
        } else throw Error(a + " is not a valid API name.");
      }
      return b
    }
  };
  var BI = function() {
    var a = function(c) {
        return zI(c.K, c)
      },
      b = function(c) {
        return yI(c.U, c)
      };
    b(nA);
    b(uA);
    b(IB);
    b(KB);
    b(LB);
    b(QB);
    b(SB);
    b(VB);
    b(XB);
    b(kF);
    b(lF);
    b(AF);
    b(BF);
    b(CF);
    b(FF);
    b(rH);
    b(sH);
    b(zH);
    b(DH);
    b(KH);
    b(NH);
    b(QH);
    b(RH);
    b(TH);
    b(bI);
    b(dI);
    b(gI);
    b(kI);
    b(nI);
    b(qI);
    b(wI);
    b(GH());
    yI("Math", Og());
    yI("Object", kh);
    yI("TestHelper", oh());
    yI("assertApi", Kg);
    yI("assertThat", Lg);
    yI("decodeUri", Pg);
    yI("decodeUriComponent", Qg);
    yI("encodeUri", Rg);
    yI("encodeUriComponent", Sg);
    yI("fail", Yg);
    yI("generateRandom",
      Zg);
    yI("getTimestamp", $g);
    yI("getTimestampMillis", $g);
    yI("getType", ah);
    yI("makeInteger", ch);
    yI("makeNumber", dh);
    yI("makeString", eh);
    yI("makeTableMap", fh);
    yI("mock", ih);
    yI("fromBase64", iF, !("atob" in G));
    yI("localStorage", JH, !IH());
    yI("toBase64", tI, !("btoa" in G));
    a(qA);
    a(LA);
    a(XA);
    a(dB);
    a(iB);
    a(xB);
    a(GB);
    a(JB);
    a(MB);
    a(NB);
    a(PB);
    a(RB);
    a(TB);
    a(UB);
    a(WB);
    a(YB);
    a($B);
    a(aC);
    a(bC);
    a(cC);
    a(gC);
    a(pC);
    a(qC);
    a(BC);
    a(GC);
    a(LC);
    a(UC);
    a(ZC);
    a(lD);
    a(nD);
    a(BD);
    a(Tg);
    a(DD);
    a(gF);
    a(hF);
    a(mF);
    a(nF);
    a(oF);
    a(pF);
    a(qF);
    a(rF);
    a(sF);
    a(tF);
    a(uF);
    a(vF);
    a(xF);
    a(yF);
    a(zF);
    a(DF);
    a(EF);
    a(oH);
    a(tH);
    a(CH);
    a(EH);
    a(FH);
    a(HH);
    a(vB);
    a(LH);
    a(MH);
    a(OH);
    a(PH);
    a(SH);
    a(UH);
    a(VH);
    a(XH);
    a(YH);
    a(ZH);
    a(aI);
    a(cI);
    a(eI);
    a(fI);
    a(hI);
    a(iI);
    a(jI);
    a(lI);
    a(mI);
    a(oI);
    a(pI);
    a(sI);
    a(uI);
    a(vI);
    zI("internal.CrossContainerSchema", ZB());
    zI("internal.GtagSchema", pH());
    a(OB);
    yI("mockObject", jh);
    return AI()
  };
  var lA;

  function CI() {
    lA.m.m.M = function(a, b, c) {
      ni.SANDBOXED_JS_SEMAPHORE = ni.SANDBOXED_JS_SEMAPHORE || 0;
      ni.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c)
      } finally {
        ni.SANDBOXED_JS_SEMAPHORE--
      }
    }
  }

  function DI(a) {
    a && z(a, function(b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c[d].replace(/^_*/, "");
        Ci[e] = Ci[e] || [];
        Ci[e].push(b)
      }
    })
  };
  var EI = encodeURI,
    Y = encodeURIComponent,
    FI = Array.isArray,
    GI = function(a, b, c) {
      Dc(a, b, c)
    },
    HI = function(a, b) {
      if (!a) return !1;
      var c = ij(V(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          f > 0 && e.charAt(0) != "." && (f--, e = "." + e);
          if (f >= 0 && c.indexOf(e, f) == f) return !0
        }
      }
      return !1
    },
    II = function(a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] &&
        a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
      return e ? d : null
    };
  var fJ = G.clearTimeout,
    gJ = G.setTimeout,
    hJ = function(a, b, c) {
      if (to()) {
        b && I(b)
      } else return Ac(a, b, c)
    },
    iJ = function() {
      return G.location.href
    },
    jJ = function(a) {
      return ij(V(a), "fragment")
    },
    kJ = function(a, b) {
      return Mi(a, b || 2)
    },
    lJ = function(a, b, c) {
      return b ? dz(a, b, c) : cz(a)
    },
    mJ = function(a, b) {
      G[a] = b
    },
    nJ = function(a, b, c) {
      b && (G[a] === void 0 || c && !G[a]) && (G[a] = b);
      return G[a]
    },
    oJ = function(a, b) {
      if (to()) {
        b && I(b)
      } else Cc(a, b)
    },
    pJ = function(a) {
      return !!wA(a, "init", !1)
    },
    qJ = function(a) {
      xA(a, "init", !0)
    };

  var rJ = {};
  var Z = {
    securityGroups: {}
  };
  Z.securityGroups.f = ["google"], Z.__f = function(a) {
    var b = kJ("gtm.referrer", 1) || H.referrer;
    return b ? a.vtp_component && a.vtp_component != "URL" ? ij(V(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : jj(V(String(b))) : String(b)
  }, Z.__f.D = "f", Z.__f.isVendorTemplate = !0, Z.__f.priorityOverride = 0, Z.__f.isInfrastructure = !0, Z.__f.runInSiloedMode = !1;

  Z.securityGroups.access_globals = ["google"],
    function() {
      function a(b, c, d) {
        var e = {
          key: d,
          read: !1,
          write: !1,
          execute: !1
        };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e
      }(function(b) {
        Z.__access_globals = b;
        Z.__access_globals.D = "access_globals";
        Z.__access_globals.isVendorTemplate = !0;
        Z.__access_globals.priorityOverride = 0;
        Z.__access_globals.isInfrastructure = !1;
        Z.__access_globals.runInSiloedMode = !1
      })(function(b) {
        for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], h = 0; h < c.length; h++) {
          var m = c[h],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n)
        }
        return {
          assert: function(p, q, r) {
            if (!l(r)) throw d(p, {}, "Key must be a string.");
            if (q === "read") {
              if (e.indexOf(r) > -1) return
            } else if (q === "write") {
              if (f.indexOf(r) > -1) return
            } else if (q === "readwrite") {
              if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return
            } else if (q === "execute") {
              if (g.indexOf(r) > -1) return
            } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " + q);
            throw d(p, {}, "Prohibited " + q + " on global variable: " + r + ".");
          },
          O: a
        }
      })
    }();
  Z.securityGroups.u = ["google"],
    function() {
      var a = function(b) {
        return {
          toString: function() {
            return b
          }
        }
      };
      (function(b) {
        Z.__u = b;
        Z.__u.D = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !0;
        Z.__u.runInSiloedMode = !1
      })(function(b) {
        var c;
        c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : kJ("gtm.url", 1)) || iJ();
        var d = b[a("vtp_component")];
        if (!d || d == "URL") return jj(V(String(c)));
        var e = V(String(c)),
          f;
        if (d === "QUERY") a: {
          var g = b[a("vtp_multiQueryKeys").toString()],
            h = b[a("vtp_queryKey").toString()] ||
            "",
            m = b[a("vtp_ignoreEmptyQueryParam").toString()],
            n;n = g ? Array.isArray(h) ? h : String(h).replace(/\s+/g, "").split(",") : [String(h)];
          for (var p = 0; p < n.length; p++) {
            var q = ij(e, "QUERY", void 0, void 0, n[p]);
            if (q != void 0 && (!m || q !== "")) {
              f = q;
              break a
            }
          }
          f = void 0
        }
        else f = ij(e, d, d == "HOST" ? b[a("vtp_stripWww")] : void 0, d == "PATH" ? b[a("vtp_defaultPages")] : void 0);
        return f
      })
    }();
  Z.securityGroups.v = ["google"], Z.__v = function(a) {
    var b = a.vtp_name;
    if (!b || !b.replace) return !1;
    var c = kJ(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
    return c !== void 0 ? c : a.vtp_defaultValue
  }, Z.__v.D = "v", Z.__v.isVendorTemplate = !0, Z.__v.priorityOverride = 0, Z.__v.isInfrastructure = !0, Z.__v.runInSiloedMode = !1;

  Z.securityGroups.read_event_data = ["google"],
    function() {
      function a(b, c) {
        return {
          key: c
        }
      }(function(b) {
        Z.__read_event_data = b;
        Z.__read_event_data.D = "read_event_data";
        Z.__read_event_data.isVendorTemplate = !0;
        Z.__read_event_data.priorityOverride = 0;
        Z.__read_event_data.isInfrastructure = !1;
        Z.__read_event_data.runInSiloedMode = !1
      })(function(b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function(f, g) {
            if (g != null && !l(g)) throw e(f, {
              key: g
            }, "Key must be a string.");
            if (c !== "any") {
              try {
                if (c === "specific" && g != null && mg(g, d)) return
              } catch (h) {
                throw e(f, {
                  key: g
                }, "Invalid key filter.");
              }
              throw e(f, {
                key: g
              }, "Prohibited read from event data.");
            }
          },
          O: a
        }
      })
    }();

  Z.securityGroups.read_data_layer = ["google"],
    function() {
      function a(b, c) {
        return {
          key: c
        }
      }(function(b) {
        Z.__read_data_layer = b;
        Z.__read_data_layer.D = "read_data_layer";
        Z.__read_data_layer.isVendorTemplate = !0;
        Z.__read_data_layer.priorityOverride = 0;
        Z.__read_data_layer.isInfrastructure = !1;
        Z.__read_data_layer.runInSiloedMode = !1
      })(function(b) {
        var c = b.vtp_allowedKeys || "specific",
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function(f, g) {
            if (!l(g)) throw e(f, {}, "Keys must be strings.");
            if (c !==
              "any") {
              try {
                if (mg(g, d)) return
              } catch (h) {
                throw e(f, {}, "Invalid key filter.");
              }
              throw e(f, {}, "Prohibited read from data layer variable: " + g + ".");
            }
          },
          O: a
        }
      })
    }();



  Z.securityGroups.gaawe = ["google"],
    function() {
      function a(f, g, h) {
        for (var m = 0; m < g.length; m++) f.hasOwnProperty(g[m]) && (f[g[m]] = h(f[g[m]]))
      }

      function b(f, g, h) {
        var m = {},
          n = function(u, v) {
            m[u] = m[u] || v
          },
          p = function(u, v, w) {
            w = w === void 0 ? !1 : w;
            c.push(6);
            if (u) {
              m.items = m.items || [];
              for (var y = {}, x = 0; x < u.length; y = {
                  Le: void 0
                }, x++) y.Le = {}, z(u[x], function(A) {
                return function(D, E) {
                  w && D === "id" ? A.Le.promotion_id = E : w && D === "name" ? A.Le.promotion_name = E : A.Le[D] = E
                }
              }(y)), m.items.push(y.Le)
            }
            if (v)
              for (var B in v) d.hasOwnProperty(B) ? n(d[B],
                v[B]) : n(B, v[B])
          },
          q;
        f.vtp_getEcommerceDataFrom === "dataLayer" ? (q = f.vtp_gtmCachedValues.eventModel) || (q = f.vtp_gtmCachedValues.ecommerce) : (q = f.vtp_ecommerceMacroData, Ya(q) && q.ecommerce && !q.items && (q = q.ecommerce));
        if (Ya(q)) {
          var r = !1,
            t;
          for (t in q) q.hasOwnProperty(t) && (r || (c.push(5), r = !0), t === "currencyCode" ? n("currency", q.currencyCode) : t === "impressions" && g === Q.g.ib ? p(q.impressions, null) : t === "promoClick" && g === Q.g.Db ? p(q.promoClick.promotions, q.promoClick.actionField, !0) : t === "promoView" && g === Q.g.jb ? p(q.promoView.promotions,
            q.promoView.actionField, !0) : e.hasOwnProperty(t) ? g === e[t] && p(q[t].products, q[t].actionField) : m[t] = q[t]);
          k(m, h)
        }
      }
      var c = [],
        d = {
          id: "transaction_id",
          revenue: "value",
          list: "item_list_name"
        },
        e = {
          click: "select_item",
          detail: "view_item",
          add: "add_to_cart",
          remove: "remove_from_cart",
          checkout: "begin_checkout",
          checkout_option: "checkout_option",
          purchase: "purchase",
          refund: "refund"
        };
      (function(f) {
        Z.__gaawe = f;
        Z.__gaawe.D = "gaawe";
        Z.__gaawe.isVendorTemplate = !0;
        Z.__gaawe.priorityOverride = 0;
        Z.__gaawe.isInfrastructure = !1;
        Z.__gaawe.runInSiloedMode = !1
      })(function(f) {
        var g;
        g = f.vtp_migratedToV2 ? String(f.vtp_measurementIdOverride) : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
        if (l(g) && g.indexOf("G-") === 0) {
          var h = String(f.vtp_eventName),
            m = {};
          c = [];
          f.vtp_sendEcommerceData && (bi.hasOwnProperty(h) || h === "checkout_option") && b(f, h, m);
          var n = f.vtp_eventSettingsVariable;
          if (n)
            for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
          if (f.vtp_eventSettingsTable) {
            var q = II(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
              r;
            for (r in q) m[r] = q[r]
          }
          var t = II(f.vtp_eventParameters,
              "name", "value"),
            u;
          for (u in t) t.hasOwnProperty(u) && (m[u] = t[u]);
          var v = f.vtp_userDataVariable;
          v && (m[Q.g.Ga] = v);
          if (m.hasOwnProperty(Q.g.eb) || f.vtp_userProperties) {
            var w = m[Q.g.eb] || {};
            k(II(f.vtp_userProperties, "name", "value"), w);
            m[Q.g.eb] = w
          }
          var y = {
            originatingEntity: Lw(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName)
          };
          if (c.length > 0) {
            var x = {};
            y.eventMetadata = (x.event_usage = c, x)
          }
          a(m, ci, function(A) {
            return zb(A)
          });
          a(m, ei, function(A) {
            return Number(A)
          });
          var B = f.vtp_gtmEventId;
          y.noGtmEvent = !0;
          uy(sy(g, h, m), B, y);
          I(f.vtp_gtmOnSuccess)
        } else I(f.vtp_gtmOnFailure)
      })
    }();



  Z.securityGroups.load_google_tags = ["google"],
    function() {
      function a(b, c, d) {
        return {
          tagId: c,
          firstPartyUrl: d
        }
      }(function(b) {
        Z.__load_google_tags = b;
        Z.__load_google_tags.D = "load_google_tags";
        Z.__load_google_tags.isVendorTemplate = !0;
        Z.__load_google_tags.priorityOverride = 0;
        Z.__load_google_tags.isInfrastructure = !1;
        Z.__load_google_tags.runInSiloedMode = !1
      })(function(b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          h = b.vtp_createPermissionError;
        return {
          assert: function(m, n, p) {
            (function(q) {
              if (!l(q)) throw h(m, {}, "Tag ID must be a string.");
              if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1)) throw h(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function(q) {
              if (q !== void 0) {
                if (!l(q)) throw h(m, {}, "First party URL must be a string.");
                if (d) {
                  if (e === "any") return;
                  if (e === "specific") try {
                    if (Dg(V(q), f)) return
                  } catch (r) {
                    throw h(m, {}, "Invalid first party URL filter.");
                  }
                }
                throw h(m, {}, "Prohibited first party URL: " + q);
              }
            })(p)
          },
          O: a
        }
      })
    }();
  Z.securityGroups.read_container_data = ["google"], Z.__read_container_data = function() {
    return {
      assert: function() {},
      O: function() {
        return {}
      }
    }
  }, Z.__read_container_data.D = "read_container_data", Z.__read_container_data.isVendorTemplate = !0, Z.__read_container_data.priorityOverride = 0, Z.__read_container_data.isInfrastructure = !1, Z.__read_container_data.runInSiloedMode = !1;



  Z.securityGroups.unsafe_run_arbitrary_javascript = ["google"],
    function() {
      function a() {
        return {}
      }(function(b) {
        Z.__unsafe_run_arbitrary_javascript = b;
        Z.__unsafe_run_arbitrary_javascript.D = "unsafe_run_arbitrary_javascript";
        Z.__unsafe_run_arbitrary_javascript.isVendorTemplate = !0;
        Z.__unsafe_run_arbitrary_javascript.priorityOverride = 0;
        Z.__unsafe_run_arbitrary_javascript.isInfrastructure = !1;
        Z.__unsafe_run_arbitrary_javascript.runInSiloedMode = !1
      })(function() {
        return {
          assert: function() {},
          O: a
        }
      })
    }();

  Z.securityGroups.gas = ["google"], Z.__gas = function(a) {
    var b = k(a),
      c = b;
    c[Ie.ra] = null;
    c[Ie.Og] = null;
    var d = b = c;
    d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
    var e = d.vtp_cookieDomain;
    e !== void 0 && (d.vtp_fieldsToSet.push({
      fieldName: "cookieDomain",
      value: e
    }), delete d.vtp_cookieDomain);
    return b
  }, Z.__gas.D = "gas", Z.__gas.isVendorTemplate = !0, Z.__gas.priorityOverride = 0, Z.__gas.isInfrastructure = !1, Z.__gas.runInSiloedMode = !1;



  Z.securityGroups.logging = ["google"],
    function() {
      function a() {
        return {}
      }(function(b) {
        Z.__logging = b;
        Z.__logging.D = "logging";
        Z.__logging.isVendorTemplate = !0;
        Z.__logging.priorityOverride = 0;
        Z.__logging.isInfrastructure = !1;
        Z.__logging.runInSiloedMode = !1
      })(function(b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function(e) {
            var f;
            if (f = c !== "all" && !0) {
              var g = !1;
              f = !g
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          O: a
        }
      })
    }();

  Z.securityGroups.configure_google_tags = ["google"],
    function() {
      function a(b, c, d) {
        return {
          tagId: c,
          configuration: d
        }
      }(function(b) {
        Z.__configure_google_tags = b;
        Z.__configure_google_tags.D = "configure_google_tags";
        Z.__configure_google_tags.isVendorTemplate = !0;
        Z.__configure_google_tags.priorityOverride = 0;
        Z.__configure_google_tags.isInfrastructure = !1;
        Z.__configure_google_tags.runInSiloedMode = !1
      })(function(b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function(f,
            g) {
            if (!l(g)) throw e(f, {}, "Tag ID must be a string.");
            if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1)) throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          O: a
        }
      })
    }();

  Z.securityGroups.html = ["customScripts"],
    function() {
      function a(d, e, f, g) {
        return function() {
          try {
            if (e.length > 0) {
              var h = e.shift(),
                m = a(d, e, f, g);
              if (String(h.nodeName).toUpperCase() == "SCRIPT" && h.type == "text/gtmscript") {
                var n = H.createElement("script");
                n.async = !1;
                n.type = "text/javascript";
                n.id = h.id;
                n.text = h.text || h.textContent || h.innerHTML || "";
                h.charset && (n.charset = h.charset);
                var p = h.getAttribute("data-gtmsrc");
                p && (n.src = p, wc(n, m));
                d.insertBefore(n, null);
                p || m()
              } else if (h.innerHTML && h.innerHTML.toLowerCase().indexOf("<script") >=
                0) {
                for (var q = []; h.firstChild;) q.push(h.removeChild(h.firstChild));
                d.insertBefore(h, null);
                a(h, q, m, g)()
              } else d.insertBefore(h, null), m()
            } else f()
          } catch (r) {
            I(g)
          }
        }
      }

      function b(d) {
        if (H.body) {
          var e = d.vtp_gtmOnFailure,
            f = Zz(d.vtp_html, d.vtp_gtmOnSuccess, e),
            g = f.Lj,
            h = f.onSuccess;
          if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(g, h, e) : a(H.body, Ic(g), h, e)()
        } else gJ(function() {
          b(d)
        }, 200)
      }
      Z.__html = b;
      Z.__html.D =
        "html";
      Z.__html.isVendorTemplate = !0;
      Z.__html.priorityOverride = 0;
      Z.__html.isInfrastructure = !1;
      Z.__html.runInSiloedMode = !1
    }();


  var sJ = {};
  sJ.onHtmlSuccess = $z(!0), sJ.onHtmlFailure = $z(!1);
  sJ.dataLayer = Ni;
  sJ.callback = function(a) {
    Bi.hasOwnProperty(a) && qb(Bi[a]) && Bi[a]();
    delete Bi[a]
  };
  sJ.bootstrap = 0;
  sJ._spx = !1;

  function tJ() {
    ni[Lj()] = ni[Lj()] || sJ;
    ck();
    gk() || z(hk(), function(d, e) {
      Dw(d, e.transportUrl, e.context);
      P(92)
    });
    Gb(Ci, Z.securityGroups);
    var a = Pj(Qj()),
      b, c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
    c !== 2 && c !== 4 && c !== 3 || P(142);
    Wz(), of({
      am: function(d) {
        return d === Uz
      },
      sl: function(d) {
        return new Xz(d)
      },
      bm: function(d) {
        for (var e = !1, f = !1, g = 2; g < d.length; g++) e = e || d[g] === 8, f = f || d[g] === 16;
        return e && f
      },
      Bm: function(d) {
        var e;
        if (d === Uz) e = d;
        else {
          var f = Di();
          Vz[f] = d;
          e = 'google_tag_manager["rm"]["' +
            Nj() + '"](' + f + ")"
        }
        return e
      }
    });
    qf = Hf
  }
  (function(a) {
    function b() {
      n = H.documentElement.getAttribute("data-tag-assistant-present");
      nz(n) && (m = h.bj)
    }

    function c() {
      m && tc ? g(m) : a()
    }
    if (!G["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (H.referrer) {
        var e = V(H.referrer);
        d = hj(e, "host") === "cct.google"
      }
      if (!d) {
        var f = Fo("googTaggyReferrer");
        d = !(!f.length || !f[0].length)
      }
      d && (G["__TAGGY_INSTALLED"] = !0, Ac("https://cct.google/taggy/agent.js"))
    }
    var g = function(u) {
        var v = "GTM",
          w = "GTM";
        si && (v = "OGT", w = "GTAG");
        var y = G["google.tagmanager.debugui2.queue"];
        y || (y = [], G["google.tagmanager.debugui2.queue"] = y, Ac("https://" + mi.Fd + "/debug/bootstrap?id=" + Nf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + vo()));
        var x = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: tc,
            containerProduct: v,
            debug: !1,
            id: Nf.ctid,
            targetRef: {
              ctid: Nf.ctid,
              isDestination: Ej.he
            },
            aliases: Hj(),
            destinations: Kj()
          }
        };
        x.data.resume = function() {
          a()
        };
        mi.qk && (x.data.initialPublish = !0);
        y.push(x)
      },
      h = {
        Lk: 1,
        dj: 2,
        rj: 3,
        hi: 4,
        bj: 5
      };
    h[h.Lk] = "GTM_DEBUG_LEGACY_PARAM";
    h[h.dj] = "GTM_DEBUG_PARAM";
    h[h.rj] = "REFERRER";
    h[h.hi] = "COOKIE";
    h[h.bj] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = ij(G.location, "query", !1, void 0, "gtm_debug");
    nz(p) && (m = h.dj);
    if (!m && H.referrer) {
      var q = V(H.referrer);
      hj(q, "host") === "tagassistant.google.com" && (m = h.rj)
    }
    if (!m) {
      var r = Fo("__TAG_ASSISTANT");
      r.length && r[0].length && (m = h.hi)
    }
    m || b();
    if (!m && oz(n)) {
      var t = !1;
      Ec(H, "TADebugSignal", function() {
        t || (t = !0, b(), c())
      }, !1);
      G.setTimeout(function() {
        t || (t = !0, b(), c())
      }, 200)
    } else c()
  })(function() {
    try {
      ak();
      if (U(62)) {}
      Vl().F();
      Rn();
      tm();
      var a = Nj();
      if (Cj().canonical[a]) {
        var b = ni.zones;
        b && b.unregisterChild(Gj());
        pw().removeExternalRestrictions(Nj());
      } else {
        Yt();
        a: {}
        Fi.m =
          "0";
        Fi.F = Fi.M;
        Fi.J = "";
        Fi.aa = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
        Fi.R = "ad_storage|analytics_storage|ad_user_data";
        Fi.Qa = "";
        Aw();
        for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) ff.push(d[e]);
        for (var f = c.tags || [], g = 0; g < f.length; g++) jf.push(f[g]);
        for (var h = c.predicates || [], m = 0; m < h.length; m++) hf.push(h[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
            var u = q[t][0];
            r[u] = Array.prototype.slice.call(q[t], 1);
            u !== "if" && u !== "unless" || pf(r[u])
          }
          gf.push(r)
        }
        lf = Z;
        mf = bA;
        Jf = new Qf;
        var v = data.sandboxed_scripts,
          w = data.security_groups;
        a: {
          var y = data.runtime || [],
            x = data.runtime_lines;lA = new Ae;CI();ef = kA();
          var B = lA,
            A = BI(),
            D = new Xc("require",
              A);D.Nb();B.m.m.set("require", D);
          for (var E = [], C = 0; C < y.length; C++) {
            var F = y[C];
            if (!Array.isArray(F) || F.length < 3) {
              if (F.length === 0) continue;
              break a
            }
            x && x[C] && x[C].length && Af(F, x[C]);
            try {
              lA.execute(F), U(70) && zj && F[0] === 50 && E.push(F[1])
            } catch (Ba) {}
          }
          U(70) && (rf = E)
        }
        if (v && v.length)
          for (var M = ["sandboxedScripts"], L = 0; L < v.length; L++) {
            var O = v[L].replace(/^_*/, "");
            Ci[O] = M
          }
        DI(w);
        tJ();
        if (!wi)
          for (var S = Ll() ? Hi(Fi.R) : Hi(Fi.aa), ba = 0; ba < hm.length; ba++) {
            var aa = hm[ba],
              R = aa,
              oa = S[aa] ? "granted" : "denied";
            Ql().implicit(R, oa)
          }
        mz();
        Ew = !1;
        Fw = 0;
        if (H.readyState === "interactive" && !H.createEventObject || H.readyState === "complete") Hw();
        else {
          Ec(H, "DOMContentLoaded", Hw);
          Ec(H, "readystatechange", Hw);
          if (H.createEventObject && H.documentElement.doScroll) {
            var ka = !0;
            try {
              ka = !G.frameElement
            } catch (Ba) {}
            ka && Iw()
          }
          Ec(G, "load", Hw)
        }
        Sy = !1;
        H.readyState === "complete" ? Uy() : Ec(G, "load", Uy);
        zj && (mk(Ck),
          G.setInterval(Bk, 864E5));
        Nk();
        mk(eA);
        mk(Jx);
        mk(cv);
        mk(jn);
        mk(Ux);
        lk.push(Pm);
        mk(Lt);
        Bl();
        U(70) && (mk(Ox), mk(Px), mk(Qx));
        zj && U(58) && (mk(fA), mk(hA));
        xz();
        U(41) || lk.push(Fl);
        lk.push(oy);
        if (U(41)) {
          var ia = qz();
          ia && Hk("pcid", ia)
        } else lk.push(rz);
        Sz();
        Gl(1);
        tB();
        Ai = Db();
        sJ.bootstrap = Ai;
        if (U(62)) {}
      }
    } catch (Ba) {
      if (Gl(4), zj) {
        var Ja = uk(!1, !0, !0);
        Dc(Ja)
      }
    }
  });

})()