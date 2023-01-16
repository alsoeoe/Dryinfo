/***********************

[rewrite_local]

https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/alsoeoe/Dryinfo/main/eoe/Nicegram.js

[mitm]

hostname = api.revenuecat.com

************************/


var also =
{
    "data": {
    "premiumAccess": true
}
}

$done({body: JSON.stringify(also)});