// 游戏规则
//每个正方形30*30,一横10个 竖20个
;
(function (w) {
    function Game(map, smap, pixel, ros, ver) {
        //引入大地图
        this.map = map;
        //引入小图
        this.smap = smap;
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
        this.arrForm = ["2,0,2,1,2,2,1,2", "1,0,1,1,1,2,2,2", "1,1,1,2,2,0,2,1", "1,0,1,1,2,1,2,2", "0,1,1,1,2,1,3,1", "1,1,2,0,2,1,2,2", "1,1,1,2,2,1,2,2"];
        //彩虹7色
        this.arrColor = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#8B00FF"]
        //记录所在位置是否有div
        this.place = [];
        //当前图形构造函数
        // this.
    };
    w.Game = Game;
    //初始化游戏
    Game.prototype.init = function () {
        //创建大盒子来装游戏
        var bigDiv = document.createElement('div');
        bigDiv.style.width = this.pixel * this.ros + 'px';
        bigDiv.style.height = this.pixel * this.ver + 'px';
        bigDiv.className = 'bigDiv';
        this.map.appendChild(bigDiv);
        this.bigDiv = bigDiv;
        for (var i = 0; i < this.ros; i++) {
            for (var j = 0; j < this.ver; j++) {
                var pxDiv = document.createElement('div');
                pxDiv.style.width = (this.pixel - 2) + 'px';
                pxDiv.style.height = (this.pixel - 2) + 'px';
                pxDiv.className = 'pxDiv';
                pxDiv.style.left = this.pixel * i + 'px';
                pxDiv.style.top = this.pixel * j + 'px';
                this.bigDiv.appendChild(pxDiv);
                this.place.push(0)
            }
        };
        this.next = Math.floor(Math.random() * this.arrForm.length);
        this.nextColor = this.arrColor[Math.floor(Math.random() * this.arrColor.length)];
        // console.log(this.next);
        game.show();
        
    }
    Game.prototype.show = function () {
        //保存下一个图形的下标和颜色到当前
        this.now = this.next;
        this.nowColor = this.nextColor
        this.nowForm = new NowForm()
        //引入当前图形构造函数并展示
        this.nowForm.show()
        //刷新下一个图形下标和颜色
        this.next = Math.floor(Math.random() * this.arrForm.length);
        this.nextColor = this.arrColor[Math.floor(Math.random() * this.arrColor.length)];
        game.nextForm();
    }
    var list = []
    // var list2 = []
    //实体化下一个形状.放到小地图里
    Game.prototype.nextForm = function () {
        // var clearDiv = document.getElementsByClassName('.nextDiv')
        for (var i = 0; i < list.length; i++) {
            this.smap.removeChild(list[i]);
        }
        list = [];
        var smallArr = this.arrForm[this.next].split(",")
        // console.log(smallArr);
        for (var i = 0; i < 8; i += 2) {
            var nextDiv = document.createElement('div')
            nextDiv.className = 'nextDiv'
            nextDiv.style.width = (this.pixel - 2) + 'px';
            nextDiv.style.height = (this.pixel - 2) + 'px';
            nextDiv.style.left = (smallArr[i] * this.pixel + 30) + 'px';
            nextDiv.style.top = (smallArr[i + 1] * this.pixel + 30) + 'px';
            nextDiv.style.backgroundColor = this.nextColor
            // console.log(smallArr[i+1]);
            this.smap.appendChild(nextDiv)
            list.push(nextDiv)
        }
    }

    //创建当前图形
    // Game.prototype.nowForm = function () {
    //     for (var i = 0; i < list2.length; i++) {
    //         document.querySelector('.bigDiv').removeChild(list2[i]);
    //     }
    //     list2 = [];
    //     var smallArr = this.arrForm[this.now].split(",")
    //     for (var i = 0; i < 8; i += 2) {
    //         var nowDiv = document.createElement('div')
    //         nowDiv.className = 'nextDiv'
    //         nowDiv.style.width = (this.pixel - 2) + 'px';
    //         nowDiv.style.height = (this.pixel - 2) + 'px';
    //         nowDiv.style.left = (smallArr[i] * this.pixel + 90) + 'px';
    //         nowDiv.style.top = (smallArr[i + 1] * this.pixel + 30) + 'px';
    //         nowDiv.style.backgroundColor = this.nowColor
    //         // console.log(smallArr[i+1]);
    //         document.querySelector('.bigDiv').appendChild(nowDiv)
    //         list2.push(nowDiv)
    //     }
    // }
}(window))