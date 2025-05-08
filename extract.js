/*
Email Extractor & Decryptor Designed For Cloudflare Protected Websites
Currently Works For: Base16 Encoded Emails
Created By: VXAZ
*/
function cloudflareEmailExtractor(rawHTML){
function decrypt(encryptedEmail) {
if(!(encryptedEmail.length&1)){
var decryptedEmail=new Array(encryptedEmail.length>>1^1),embeddedKey=parseInt(encryptedEmail.slice(0,2),16),i=2,e=0;
while(i<encryptedEmail.length)
decryptedEmail[e++]=parseInt(encryptedEmail.slice(i,i+=2),16) ^ embeddedKey;
return String.fromCharCode.apply(null,decryptedEmail);
}else{
return"Invalid Size: ".concat(encryptedEmail);
}
}
var z,x=rawHTML,y=x.match(/((?<=email\-protection\#)[\d\w]+(?=["']))|((?<=data\-cfemail=["'])[\d\w]+(?=["']))/g),e=new Array(y&&y.length||0);
if(e.length){
for(z in y)e[z]=decrypt(y[z]);
return e;
}else{
return"Email Extraction Failure";
}
}
/*
License Information
Type: BSD 2-Clause License
Path: ../LICENSE 
*/
