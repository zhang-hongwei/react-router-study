const ajax = function(method, url, func, data) {
    //创建ajax对象
    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //设置请求方法和目标地址
    xhr.open(method, url);
    //设置请求头信息
    if (data) {
        xhr.setRequestHeader(
            "content-type",
            "multipart/form-data; boundary=${bound}"
        );
    }
    //绑定事件
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            func(xhr.responseText); //函数调用
        }
    };
    //发送请求
    if (data) {
        xhr.send(data);
    } else {
        xhr.send();
    }
};
