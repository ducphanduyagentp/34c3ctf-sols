let prefix = "let eq = (a, b) => {  for (let i = 0; i < 16; ++i)    if (a[i] != b[i])      return false;  return true;};let doit = () => {  let key = aesjs.utils.utf8.toBytes($('#password').val());  if (key.length !== 16)    return false;  for (let i = 0; i < 16; ++i)    if (key[i] < 97 || key[i] > 122)      return false;  let aes = new aesjs.AES(key);  let plain = aesjs.utils.utf8.toBytes(\"hitharyoucanAES?\");  let cipher = [";

let suffix = "];  if (!eq(aes.encrypt(plain), cipher))    return false;  let iv = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];  aes = new aesjs.ModeOfOperation.cbc(iv, iv);  plain = new Uint8Array(64);  for (let i = 0; i < 64; i += 16)    plain.set(key, i);  cipher = aes.encrypt(plain);  let xor = [28,41,44,126,250,34,40,104,231,247,67,229,132,68,163,165,125,34,128,94,106,118,140,7,37,17,115,14,165,216,211,208,204,233,165,29,144,234,133,91,26,24,23,27,224,154,89,14,74,167,73,52,241,253,214,4,241,249,46,35,204,192,144,147];  let flag = '';  for (let i = 0; i < 64; ++i)    flag += String.fromCharCode(xor[i]^cipher[i]);  alert(\"The flag is: \" + flag);  return true;};check = () => {  if (!doit())    alert(\"Wrong password!\");};";

[]["filter"]["constructor"](prefix + ((() => (((_, $, _$, $_, __) => ((_(_$["reduce"](($_, __) => $($_["map"]((_, $) => __[$][_])), __)))["map"]((_, $) => $_[$][_])))(_ => [0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11]["map"](__ => _[__]), ((__, _$, $_, $$) => (_ => [__[_[0]] ^ _$[_[15]] ^ $_[_[10]] ^ $$[_[5]], __[_[5]] ^ _$[_[0]] ^ $_[_[15]] ^ $$[_[10]], __[_[10]] ^ _$[_[5]] ^ $_[_[0]] ^ $$[_[15]], __[_[15]] ^ _$[_[10]] ^ $_[_[5]] ^ $$[_[0]], __[_[4]] ^ _$[_[3]] ^ $_[_[14]] ^ $$[_[9]], __[_[9]] ^ _$[_[4]] ^ $_[_[3]] ^ $$[_[14]], __[_[14]] ^ _$[_[9]] ^ $_[_[4]] ^ $$[_[3]], __[_[3]] ^ _$[_[14]] ^ $_[_[9]] ^ $$[_[4]], __[_[8]] ^ _$[_[7]] ^ $_[_[2]] ^ $$[_[13]], __[_[13]] ^ _$[_[8]] ^ $_[_[7]] ^ $$[_[2]], __[_[2]] ^ _$[_[13]] ^ $_[_[8]] ^ $$[_[7]], __[_[7]] ^ _$[_[2]] ^ $_[_[13]] ^ $$[_[8]], __[_[12]] ^ _$[_[11]] ^ $_[_[6]] ^ $$[_[1]], __[_[1]] ^ _$[_[12]] ^ $_[_[11]] ^ $$[_[6]], __[_[6]] ^ _$[_[1]] ^ $_[_[12]] ^ $$[_[11]], __[_[11]] ^ _$[_[6]] ^ $_[_[1]] ^ $$[_[12]]]))(_ARY1_, _ARY2_, _ARY3_, _ARY4_), _ARY6_, _ARY7_, _ARY5_)["toString"]()))()) + (suffix))()
