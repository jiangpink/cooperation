var BaseURL = 'http://thungghuan.xyz:3000' ;
window.onload=function get(){
var getRequest = new XMLHttpRequest() ;
getRequest.open('GET', BaseURL + '/users')
getRequest.send()
getRequest.onreadystatechange = function(){
    if (getRequest.readyState == 4) {
        if (getRequest.status == 200){
            console.log(getRequest.responseText)
            var x = getRequest.responseText;
            var y = eval("("+x+")")
            var ul ="";
            for (var i=0 ; i < y.length ; i++ ){
                var m = y[i];
                ul += '<li>' + m + '</li>'
            }
            document.getElementById("UL").innerHTML= ul ;
            }
        }
    }
}
function post(){
    var BaseURL = 'http://thungghuan.xyz:3000' ;
    var postRequest = new XMLHttpRequest()
    postRequest.open("POST", BaseURL + '/add')
    var postData = {
        name: document.getElementById("username").value , 
        num: document.getElementById("sn").value
    }
    postRequest.setRequestHeader("Content-type", "application/json")
    postRequest.send(JSON.stringify(postData))
    postRequest.onreadystatechange = function() {
        if (postRequest.readyState == 4) {
            if (postRequest.status == 200) {
                console.log(postRequest.responseText)
            } else { 
                var y = postRequest.responseText;
                document.getElementById("error").innerText= y
            }
        }
    }
}