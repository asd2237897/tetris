// 启动游戏
//每个正方形30*30,一横10个 竖20个
;
(function (w) {
    function Game(pixel,ros,ver,map,smap){
        //引入大地图
        this.map = map
        //引入小图
        this.smap = smap
        //像素
        this.pixel = pixel;
        //横向个数
        this.ros = ros;
        //竖向个数
        this.ver = ver;
        //保存页面创建的div
        this.bigDiv;
        //保存下一个图形的div
        this.smallDiv;
        //吧7种形状的相对坐标保存在数组里,J L S Z I T O
        var arrForm = ["1,0,1,1,1,2,0,2","0,0,1,0,2,0,2,1","0,1,0,2,1,0,1,1","0,0,0,1,1,1,1,2","0,1,1,1,2,1,3,1","0,1,1,0,1,1,1,2","0,0,0,1,1,0,1,1"]
    }
    w.Game = Game
    Game.prototype.init = function(){
        var bigDiv = document.createElement('div')
        bigDiv.style.width = this.pixel*this.ros + 'px'
        bigDiv.style.height = this.pixel*this.ver + 'px'
        bigDiv.className = 'bigDiv'
        this.map.appendChild(bigDiv)
        this.bigDiv = bigDiv
        for(var i = 0; i < this.ros; i++){
            for(var j = 0; j < this.ver; j++){
                var pxDiv = document.createElement('div');
                pxDiv.style.width = (this.pixel-2) + 'px';
                pxDiv.style.height = (this.pixel-2) + 'px';
                pxDiv.className = 'pxDiv';
                pxDiv.style.left = this.pixel * i + 'px';
                pxDiv.style.top = this.pixel * j + 'px';
                this.bigDiv.appendChild(pxDiv);
            }
        }
    }
    Game.prototype.nextForm = function(){
        var smallDiv = document.createElement('div')
        smallDiv.style.width = this.pixel*this.ros + 'px'
        smallDiv.style.height = this.pixel*this.ver + 'px'
        smallDiv.className = 'bigDiv'
        this.smap.appendChild(smallDiv)
        this.smallDiv = smallDiv
        for(var i = 0; i < this.ros; i++){
            for(var j = 0; j < this.ver; j++){
                var pxDiv = document.createElement('div');
                pxDiv.style.width = (this.pixel-2) + 'px';
                pxDiv.style.height = (this.pixel-2) + 'px';
                pxDiv.className = 'pxDiv';
                pxDiv.style.left = this.pixel * i + 'px';
                pxDiv.style.top = this.pixel * j + 'px';
                this.smallDiv.appendChild(pxDiv);
            }
        }
        
    }
}(window))