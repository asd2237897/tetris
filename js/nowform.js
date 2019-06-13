//创建新的图形方法
;
(function (w) {
    function NowForm() {
        //偏移坐标x,y
        this.x = 0;
        this.y = 0;
        //保存当前图形4个小方块的数组
        this.list2 = [];
        //记录每次新图形的坐标
        this.ref = [];
    }
    w.NowForm = NowForm;
    NowForm.prototype.show = function(arrForm,now,pixel,nowColor){
        var smallArr = arrForm[now].split(",");
        this.ref = smallArr;
        for (var i = 0; i < 8; i += 2) {
            var nowDiv = document.createElement('div');
            nowDiv.className = 'nextDiv';
            nowDiv.style.width = (pixel - 2) + 'px';
            nowDiv.style.height = (pixel - 2) + 'px';
            nowDiv.style.left = (smallArr[i] * pixel + 90) + 'px';
            nowDiv.style.top = (smallArr[i + 1] * pixel + 30) + 'px';
            nowDiv.style.backgroundColor = nowColor;
            // console.log(smallArr[i+1]);
            document.querySelector('.bigDiv').appendChild(nowDiv);
            this.list2.push(nowDiv);
            
        }
        console.log(this.list2);
    }
    NowForm.prototype.moveLeft = function(){
        this.x -=1;
        if(){
            for(var i = 0; i < this.list2.length; i++){
                var left = parseInt(this.list2[i].style.left)
                this.list2[i].style.left = (left - 30) +'px'
            }
        }else{
            break;
        }
    }
    NowForm.prototype.moveRight = function(){
        this.x +=1;
        for(var i = 0; i < this.list2.length; i++){
            var left = parseInt(this.list2[i].style.left)
            this.list2[i].style.left = (left + 30) +'px'
        }
    }

}(window))