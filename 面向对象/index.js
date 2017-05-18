var screenWidth = document.documentElement.clientWidth||document.body.clentWidth;
var screenHeight = document.documentElement.clientHeight||document.body.clientHeight;
function Leaf(){
	this.width = 100+Math.random()*50;
	this.pos = {
		left:Math.random()*(screenWidth-this.width),
		top:0
	}
	this.speed = 5;
	this.img = new Image();	
	this.img.src="img/"+(Math.floor(Math.random()*4)+1)+".png";
	this.img.style.width = this.width+"px";
	this.img.style.left=this.pos.left+"px";
}
Leaf.prototype.init = function(){
	document.body.appendChild(this.img);
}
Leaf.prototype.fall = function(){
	var _this = this;
	setTimeout(function(){
		_this.timer = setInterval(function(){
			if(_this.img.offsetTop>screenHeight-_this.width){
				clearInterval(timer);
			}else{
				_this.img.style.top = _this.img.offsetTop+_this.speed+"px";
			}
		},20);
	},Math.random()*1000);
}
var aLeaf = [];
for(var i=0;i<7;i++){
	var oLeaf = new Leaf();
	oLeaf.init();
	aLeaf.push(oLeaf);
}
document.onclick=function(){
	for(var i=0;i<aLeaf.length;i++){
		aLeaf[i].fall();
	}
}
