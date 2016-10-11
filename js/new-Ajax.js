 function FnAjax(url,FnSuss,FnFiled){
            	//1,创建Ajax对象
            	if(window.XMLHttpRequest) {
            		//非IE6
            	    var OAjax=new XMLHttpRequest();
            	}else{
            		//IE6 ActiveXObject->IE6浏览器安装时默认安装的一个插件
            		var OAjax=new ActiveXObject("Microsoft.XMLHTTP"); 
            	}
            	//2,连接到服务器open(方法，文件名，同步/异步传输)
            	OAjax.open('GET',url,true);
            	//3,发送请求
            	OAjax.send();
            	//4,接收返回值 
            	OAjax.onreadystatechange=function(){
            		//OAjax.readystate  浏览器和服务器之间，进行到 
            		if (OAjax.readyState==4) {
            			if (OAjax.status==200) {
            				//alert('成功:'+OAjax.responseText);
                                    //成功函数，里面有一个ajax的响应文件作为函数的参数
                                    FnSuss(OAjax.responseText);
            			}else{
            				//alert('失败'+OAjax.status);
                                    //如果创建的一个Ajax指定了要失败函数，就会有一个含有响应状态码的一个失败函数
                                    if (FnFiled) {
                                         FnFiled(OAjax.status);
                                    }
            			}
            		}
            	}
            }