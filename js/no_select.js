//禁用选中
document.onselectstart = function (event){
	if(window.event){
		event = window.event;
	}try{
		var the = event.srcElement;
		if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
			return false;
		}
		return true;
	} catch (e) {
		return false;
	}
}

//禁用右键
document.oncontextmenu = function (event){
	if(window.event){
		event = window.event;
	}try{
		var the = event.srcElement;
		if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
			return false;
		}
		return true;
	}catch (e){
		return false;
	}
}

//禁用F12
document.onkeydown = function(){
    if(window.event && window.event.keyCode == 123) {
        alert("唉~~,天天F12,被抓到了吧~~");
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 13) {
        window.event.keyCode = 505;
    }
    if(window.event && window.event.keyCode == 8) {
        alert(str+"\n");
        window.event.returnValue=false;
    }
}

console.log("%c%c博客名称%c Ncuxie's Blog","line-height:28px;","line-height:28px;padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px","color:#3fa9f5;line-height:28px;font-size:16px;");
console.log("%c%c网站地址%c ncuxie.github.io","line-height:28px;","line-height:28px;padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px","color:#ff9900;line-height:28px;font-size:16px;");
console.log("%c%c企鹅号码%c 想什么呢？怎么可能告诉你啊喂！","line-height:28px;","line-height:28px;padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px","color:#008000;line-height:28px;font-size:16px;");
console.log("%c%cThere should be something here.","line-height:28px;","line-height:28px;padding:4px 0px;color:#fff;font-size:16px;background-image:-webkit-gradient(linear,left top,right top,color-stop(0,#ff22ff),color-stop(1,#5500ff));-webkit-background-clip:text;");
