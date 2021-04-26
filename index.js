
var oUl = document.getElementsByTagName('ul')[0];
var allwidth = oUl.offsetWidth;
var lis = document.querySelectorAll('ol li');
var css = document.getElementsByTagName('style')[0];
var timer = null;
var n = 0;

function createDom(){
    var num = 100;
    var liWidth = allwidth / num;

    for(var i = 0;i < num;i++){
        var oLi = document.createElement('li');
        oLi.style.width = liWidth + 'px';
        oLi.style.transitionDelay = (i / num * 0.3) + 's';
        for(var j = 0;j < 4;j++){
            var oDiv = document.createElement('div');
            oDiv.style.backgroundPositionX = (-i * liWidth) + 'px';
            oLi.appendChild(oDiv);
        }
        oUl.appendChild(oLi);
    }
    bindEvent()
}
createDom()

function bindEvent(){
    for(let i = 0;i<lis.length;i++){ 
        lis[i].onclick = function(){
            for(let j = 0;j<lis.length;j++){
                lis[j].className = '';
            }
            this.className = 'active';
            css.innerHTML += 'ul li {transform:rotateX('+ (i*90) +'deg);}'
        }
        
    }
}
 

function move(){
    timer = setInterval(function(){
        n++;
        n %= 4;
        for(let j = 0;j<lis.length;j++){
            lis[j].className = '';
        }
        lis[n].className = 'active';
        css.innerHTML += 'ul li {transform:rotateX('+ (n*90) +'deg);}'

    },2000)
}
move();
oUl.addEventListener('mouseenter',function(){
    clearInterval(timer)
})
oUl.addEventListener('mouseleave',function(){
    move();
})
