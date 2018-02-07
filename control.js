var s;
var a=5;
var b= 10;
var y = (a<b);
if(5<10 || 5 !== 4 ){
    s = '<hr> AAA';
}else if(a>b && b>0){

}
else{
     s = '<hr>BBB';
}
document.write(s);
// switch

ad = 'tunay';
//aD = 'tunay';
switch (a){
    case 'selim':
        str = 'SaLAN SELIM';
        break;
    case 'salim':
        str = 'SaLAN SELIM';
        break;
    default:
        str = 'tapilmadi';
}
document.write(str);