// 禁用选中
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

// 禁用右键
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

// 禁用F12
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

// 禁用图片查看
var imgs = document.getElementsByTagName("img");
for (let i = imgs.length - 1; i >= 0; i--) {
	imgs[i].setAttribute('onclick', 'return false;');
}

// 控制台内容
console.log("%c%c 博客名称 %c Ncuxie's Blog","line-height:28px;","line-height:28px;padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px","color:#3fa9f5;line-height:28px;font-size:16px;");
console.log("%c%c 网站地址 %c ncuxie.github.io","line-height:28px;","line-height:28px;padding:4px;background:#222;color:#fff;font-size:16px;margin-right:15px","color:#ff9900;line-height:28px;font-size:16px;");
console.log("%c%c\
  The fact is that I did not know how to understand anything!\n\
  I ought to have judged by deeds and not by words.\n\
  She cast her fragrance and her radiance over me.\n\
  I ought to never to have run away from her...\n\
  I ought to have guessed all the affection\n\
			that lay behind her poor little stratagems.\n\
  But I was too young to know how to love her...\
","line-height:28px;","line-height:28px;padding:4px 0px;color:#fff;font-size:16px;");
