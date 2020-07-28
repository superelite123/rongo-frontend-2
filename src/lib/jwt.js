import * as CryptoJS from './hmac-sha256'
import * as encodedSource from './enc-base64-min.js'
<script src="//cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha256.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"></script>
export const jwtGenerator = (secret,data) =>
{
    var header = {
        "alg": "HS256",
        "typ": "JWT"
      };
    var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    var encodedHeader = base64url(stringifiedHeader);
    document.getElementById("header").innerText = encodedHeader;
    
    var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
    var encodedData = base64url(stringifiedData);
    document.getElementById("payload").innerText = encodedData;
    
    var signature = encodedHeader + "." + encodedData;
    signature = CryptoJS.HmacSHA256(signature, secret);
    signature = base64url(signature);
    
    document.getElementById("signature").innerText = signature;
}

function base64url(source) {
    // Encode in classical base64
    encodedSource = CryptoJS.enc.Base64.stringify(source);
    
    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '');
    
    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');
    
    return encodedSource;
}