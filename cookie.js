function setCookie(name,value,iday){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iday);
    document.cookie=name+'='+value+';expires='+oDate;
}
function getCookie(name){
    var arr=document.cookie.split('; ');
    for(var i=0;i<arr.length;i++){
        var arr1=arr[i].split('=');
        if(arr1[0]==name){
            return arr1[1];
        }
    }
    return '';
}
function removeCookie(name){
    setCookie(name,1,-1);
}