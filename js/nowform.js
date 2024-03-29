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
        // //像素
        // this.px = px || 30;
        // //横向个数
        // this.ros = ros || 10;
        // //竖向个数
        // this.ver = ver || 20;
        // //记录当前形状的下标
        // this.now;
        // //记录下一个形状的下标
        // this.next;
        // //记录当前形状的颜色
        // this.nowColor;
        // //记录下一个形状的颜色
        // this.nextColor;
        // //吧7种形状的相对坐标保存在数组里,J L S Z I T O
        // this.arrForm = ["2,0,2,1,2,2,1,2", "1,0,1,1,1,2,2,2", "1,1,1,2,2,0,2,1", "1,0,1,1,2,1,2,2", "0,1,1,1,2,1,3,1", "1,1,2,0,2,1,2,2", "1,1,1,2,2,1,2,2"];
        // //彩虹7色
        // this.arrColor = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#8B00FF"]
        this.game = game
    }
    w.NowForm = NowForm;
    //吧新的形状展示在大盒子中
    NowForm.prototype.show = function () {
        // console.log(this.game)
        //计算图形初始坐标的单位
        var startleft = (this.game.ros - 4) / 2;
        this.x = startleft;
        // console.log(this.x);
        var smallArr = this.game.arrForm[this.game.now].split(",");
        this.ref = smallArr;
        for (var i = 0; i < 8; i += 2) {
            var nowDiv = document.createElement('div');
            nowDiv.className = 'nextDiv';
            nowDiv.style.width = (this.game.pixel - 2) + 'px';
            nowDiv.style.height = (this.game.pixel - 2) + 'px';
            nowDiv.style.left = ((parseInt(smallArr[i]) + startleft) * this.game.pixel) + 'px';
            nowDiv.style.top = (parseInt(smallArr[i + 1]) * this.game.pixel) + 'px';
            nowDiv.style.backgroundColor = this.game.nowColor;
            document.querySelector('.bigDiv').appendChild(nowDiv);
            //保存当前图形4个小方块
            this.list2.push(nowDiv);
        }
        // console.log(this.list2);
    }
    //左移动
    NowForm.prototype.moveLeft = function () {
        if (judgeMove(this.ref, this.x, this.y, this.game, 1)) {
            this.x -= 1;
            for (var i = 0; i < this.list2.length; i++) {
                var left = parseInt(this.list2[i].style.left)
                this.list2[i].style.left = (left - this.game.pixel) + 'px'
            }
        }
        // console.log(this.x);

    }
    //右移动
    NowForm.prototype.moveRight = function () {
        console.log((parseInt(this.ref[6]) + this.x));
        if (judgeMove(this.ref, this.x, this.y, this.game, 2)) {
            this.x += 1;
            for (var i = 0; i < this.list2.length; i++) {
                var left = parseInt(this.list2[i].style.left)
                this.list2[i].style.left = (left + this.game.pixel) + 'px'
            }

        }
    }
    //变方向
    NowForm.prototype.moveUp = function () {
        //图形变形的公式
        //小div的2个相对坐标点改变  x = y ; y= 3-x; 比如 （0，1） 变化之后 就是  x=1，y=3-0 -> (1,3)
        //循环4个小div
        for (var i = 0; i < this.list2.length; i++) {
            var temp = this.ref[i * 2];
            this.ref[i * 2] = this.ref[i * 2 + 1];
            this.ref[i * 2 + 1] = 3 - temp
            // console.log(this.x);
            this.list2[i].style.left = ((this.x + parseInt(this.ref[i * 2])) * this.game.pixel) + 'px'
            // console.log(this.list2[i].style.left);
            this.list2[i].style.top = ((this.y + parseInt(this.ref[i * 2 + 1])) * this.game.pixel) + 'px'
        }
    }
    //下移动
    NowForm.prototype.moveDown = function () {
        // console.log((parseInt(this.ref[7]) + this.y));
        if (judgeMove(this.ref, this.x, this.y, this.game, 4)) {
            this.y += 1
            for (var i = 0; i < this.list2.length; i++) {
                var top = parseInt(this.list2[i].style.top)
                this.list2[i].style.top = (top + this.game.pixel) + 'px'
            }
        }
    }
    //瞬间到最下方
    NowForm.prototype.moveBottom = function () {
        
        // if (judgeMove(this.ref, this.x, this.y, this.game, 4)) {
                // for (var i = 0; i < this.list2.length; i++) {
                //     var maxTop = parseInt(this.game.ver) - parseInt(this.ref[7])
                //     console.log(maxTop);
                //     this.list2[i].style.top = (maxTop * this.game.pixel) + 'px'
            // }
        // }
    }
    //预判是否能移动或是变化,case 1为左移,2为右移动,3为上键变换,4位下移动  判断步骤应该在最后做.先把当前形状的上下左右动作做出来
    //注意:
    //通过判断ref的值x是图形左偏移，y是top偏移
    function judgeMove(ref, x, y, g, num) {
        switch (num) {
            case 1:
                for (var i = 0; i < ref.length; i += 2) {
                    //因为是先判断再x-1,所有需要-1来纠正判断
                    if ((parseInt(ref[i]) + x - 1) < 0) {
                        return false;
                    }
                }
                break;
            case 2:
                for (var i = 0; i < ref.length; i += 2) {
                    //因为是先判断再x+1,所有需要先+1来纠正判断
                    if ((parseInt(ref[i]) + x + 1) >= g.ros) {
                        return false;
                    }
                }
                break;
            case 3:
                for (var i = 0; i < ref.length; i += 2) {

                }
                break;
            case 4:
                for (var i = 0; i < ref.length; i += 2) {
                    if ((parseInt(ref[i + 1]) + y + 1) >= g.ver) {
                        return false;
                    }
                }
                break;
        }
        return true;
    }
}(window))