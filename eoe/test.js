/***********************

 [rewrite_local]

 https://frontapi.mhuoba.com/user/wallet/ios/recharge/info url script-response-body https://raw.githubusercontent.com/alsoeoe/Dryinfo/main/eoe/test.js

 [mitm]

 hostname = frontapi.mhuoba.com

 ************************/

var objc = JSON.parse($response.body);

objc =

    {
        "response_data" : {
            "desc" : "1.燃点仅限火把知识平台内使用，苹果app到账可能会有延迟。\n2.燃点暂不支持跨系统使用(苹果app和其他平台充值燃点不可通用)。\n3.充值成功后燃点永久有效，不可进行提现、退款、赠送他人等操作。\n4.若充值后长时间未到账或存在充值失败等情况，您可以联系电话客服：0571-26306860，也可联系“火把知识”微信公众号。",
            "wallet_info" : {
                "frozen" : 0,
                "user_id" : 1522130,
                "balance" : 99999,
                "update_time" : "2021-03-08 11:14:19"
            },
            "prices" : [
                1,
                6,
                18,
                45,
                68,
                118,
                168,
                218,
                488
            ]
        },
        "response_code" : 0,
        "response_message" : ""
    }


$done({body: JSON.stringify(objc)});

