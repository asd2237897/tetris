// 启动游戏
//每个正方形30*30,一横10个 竖20个
;
(function (w) {
    function Game(map, smap,pixel, ros, ver) {
        //引入大地图
        this.map = map
        //引入小图
        this.smap = smap
        //像素
        this.pixel = pixel || 30;
        //横向个数
        this.ros = ros || 10;
        //竖向个数
        this.ver = ver || 20;
        //保存页面创建的div
        this.bigDiv;
        //保存下一个图形的div
        this.smallDiv;
        //记录当前形状的下标
        this.now;
        //记录下一个形状的下标
        this.next;
        //记录当前形状的颜色
        this.nowColor;
        //记录下一个形状的颜色
        this.nextColor;
        //吧7种形状的相对坐标保存在数组里,J L S Z I T O
        this.arrForm = ["2,0,2,1,2,2,1,2", "1,0,1,1,1,2,2,2", "1,1,1,2,2,0,2,1", "1,0,1,1,2,1,2,2", "0,1,1,1,2,1,3,1", "1,1,2,0,2,1,2,2", "1,0,1,1,2,0,2,1"]
    }
    w.Game = Game
    //初始化游戏
    Game.prototype.init = function () {
        var bigDiv = document.createElement('div')
        bigDiv.style.width = this.pixel * this.ros + 'px'
        bigDiv.style.height = this.pixel * this.ver + 'px'
        bigDiv.className = 'bigDiv'
        this.map.appendChild(bigDiv)
        this.bigDiv = bigDiv
        for (var i = 0; i < this.ros; i++) {
            for (var j = 0; j < this.ver; j++) {
                var pxDiv = document.createElement('div');
                pxDiv.style.width = (this.pixel - 2) + 'px';
                pxDiv.style.height = (this.pixel - 2) + 'px';
                pxDiv.className = 'pxDiv';
                pxDiv.style.left = this.pixel * i + 'px';
                pxDiv.style.top = this.pixel * j + 'px';
                this.bigDiv.appendChild(pxDiv);
            }
        }
        this.next = Math.floor(Math.random() * this.arrForm.length)
        console.log(this.next);
        game.nextForm()

    }
    //实体化下一个形状
    Game.prototype.nextForm = function () {
        var smallArr = this.arrForm[this.next].split(",")
        console.log(smallArr);
        for (var i = 0; i < 8; i+= 2) {
            var nextDiv = document.createElement('div')
            nextDiv.className = 'nextDiv'
            nextDiv.style.width = (this.pixel - 2) + 'px';
            nextDiv.style.height = (this.pixel - 2) + 'px';
            nextDiv.style.left = (smallArr[i] * this.pixel + 30) + 'px';
            nextDiv.style.top = (smallArr[i+1] * this.pixel + 30) + 'px';
            console.log(smallArr[i+1]);
            
            this.smap.appendChild(nextDiv)
        }
    }
}(window))