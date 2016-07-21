$(function(){
    //注册弹出框
    $('#register').popover({})
    //回到顶部
    var OnTop = document.getElementById('onTop');
    window.onscroll = function (){
        if(document.body.scrollTop>200){
            OnTop.style.display="block";
        }else{
            OnTop.style.display="none";
        }
    }
    var clientHeight = document.body.clientHeight;
    OnTop.onclick = function(){
        var timer = setInterval(function(){
            if(document.body.scrollTop>0){
                document.body.scrollTop-=(clientHeight-document.body.scrollTop)/30
            }else{
                clearInterval(timer)
            }
        },10)
    }
})
//Ajax
function Ajax(url,fnSucc,fnError){
    // 1创建Ajax对象
    if(window.XMLHttpRequest){
        var oAjax = new XMLHttpRequest();
    }else{
        var oAjax = new ActiveXObject(Microsoft.XMLHTTP);
    }
    // 2服务器建立连接
    oAjax.open('get',url+'?t='+new Date().getTime(),true);
    // 3发送请求
    oAjax.send();
    //4接受数据
    oAjax.onreadystatechange = function(){
        if(oAjax.readyState == 4 && oAjax.status == 200){
            fnSucc(oAjax.responseText);
        }else{
            if(fnError){
                fnError();
            }
        }
    }
}