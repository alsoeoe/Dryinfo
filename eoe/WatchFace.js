/***********************

[rewrite_local]

^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/alsoeoe/Dryinfo/main/eoe/WatchFace.js

[mitm]

hostname = buy.itunes.apple.com

************************/

var objc = JSON.parse($response.body);

objc = 
{
    "environment" : "Production",
    "receipt" : {
    "receipt_type" : "Production",
        "app_item_id" : 1454621179,
        "receipt_creation_date" : "2022-12-21 09:22:28 Etc/GMT",
        "bundle_id" : "indie.davidwang.WatchWallpaper",
        "original_purchase_date" : "2021-09-07 07:25:39 Etc/GMT",
        "in_app" : [
        {
            "quantity" : "1",
            "purchase_date_ms" : "1671614369000",
            "expires_date" : "2029-12-24 09:19:29 Etc/GMT",
            "expires_date_pst" : "2029-12-29 01:19:29 America/Los_Angeles",
            "is_in_intro_offer_period" : "false",
            "transaction_id" : "90001446855517",
            "is_trial_period" : "true",
            "original_transaction_id" : "90001446855517",
            "purchase_date" : "2022-12-21 09:19:29 Etc/GMT",
            "product_id" : "indie.davidwang.WatchWallpaper.yearsubscriptegold.b",
            "original_purchase_date_pst" : "2022-12-21 01:19:31 America/Los_Angeles",
            "in_app_ownership_type" : "PURCHASED",
            "original_purchase_date_ms" : "1671614371000",
            "web_order_line_item_id" : "90000653741267",
            "expires_date_ms" : "1893172771000",
            "purchase_date_pst" : "2022-12-21 01:19:29 America/Los_Angeles",
            "original_purchase_date" : "2022-12-21 09:19:31 Etc/GMT"
        }
    ],
        "adam_id" : 1454621179,
        "receipt_creation_date_pst" : "2022-12-21 01:22:28 America/Los_Angeles",
        "request_date" : "2022-12-21 09:24:16 Etc/GMT",
        "request_date_pst" : "2022-12-21 01:24:16 America/Los_Angeles",
        "version_external_identifier" : 853918496,
        "request_date_ms" : "1671614656254",
        "original_purchase_date_pst" : "2021-09-07 00:25:39 America/Los_Angeles",
        "application_version" : "822",
        "original_purchase_date_ms" : "1630999539000",
        "receipt_creation_date_ms" : "1671614548000",
        "original_application_version" : "582",
        "download_id" : 501085551895625606
},
    "pending_renewal_info" : [
    {
        "product_id" : "indie.davidwang.WatchWallpaper.yearsubscriptegold.b",
        "original_transaction_id" : "90001446855517",
        "auto_renew_product_id" : "indie.davidwang.WatchWallpaper.yearsubscriptegold.b",
        "auto_renew_status" : "1"
    }
],
    "status" : 0,
    "latest_receipt_info" : [
    {
        "quantity" : "1",
        "purchase_date_ms" : "1671614369000",
        "expires_date" : "2029-12-24 09:19:29 Etc/GMT",
        "expires_date_pst" : "2029-12-29 01:19:29 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "90001446855517",
        "is_trial_period" : "true",
        "original_transaction_id" : "90001446855517",
        "purchase_date" : "2022-12-21 09:19:29 Etc/GMT",
        "product_id" : "indie.davidwang.WatchWallpaper.yearsubscriptegold.b",
        "original_purchase_date_pst" : "2022-12-21 01:19:31 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "subscription_group_identifier" : "20610050",
        "original_purchase_date_ms" : "1671614371000",
        "web_order_line_item_id" : "90000653741267",
        "expires_date_ms" : "1893172771000",
        "purchase_date_pst" : "2022-12-21 01:19:29 America/Los_Angeles",
        "original_purchase_date" : "2022-12-21 09:19:31 Etc/GMT"
    }
],
    "latest_receipt" : "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"
}


$done({body: JSON.stringify(objc)});