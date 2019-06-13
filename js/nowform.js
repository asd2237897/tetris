//创建新的图形方法
;
(function (w) {
    var list2 = [];
    function NowForm(game) {
        this.game = game;
        
    }
    w.NowForm = NowForm;
    NowForm.prototype.show = function(arrForm,now,pixel,nowColor){
        for (var i = 0; i < list2.length; i++) {
            document.querySelector('.bigDiv').removeChild(list2[i]);
        }
        list2 = [];
        var smallArr = arrForm[now].split(",")
        for (var i = 0; i < 8; i += 2) {
            var nowDiv = document.createElement('div')
            nowDiv.className = 'nextDiv'
            nowDiv.style.width = (pixel - 2) + 'px';
            nowDiv.style.height = (pixel - 2) + 'px';
            nowDiv.style.left = (smallArr[i] * pixel + 90) + 'px';
            nowDiv.style.top = (smallArr[i + 1] * pixel + 30) + 'px';
            nowDiv.style.backgroundColor = nowColor
            // console.log(smallArr[i+1]);
            document.querySelector('.bigDiv').appendChild(nowDiv)
            list2.push(nowDiv)
        }
    }
    NowForm.prototype.moveLeft = function(){
        
    }
}(window))