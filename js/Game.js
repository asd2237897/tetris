// 启动游戏
//每个正方形30*30,一横10个 竖20个
;
(function (w) {
    function Game(poxel,ros,ver,map){
        //引入地图
        this.map = map
        //像素
        this.pixel = poxel;
        //横向个数
        this.ros = ros
        //竖向个数
        this.ver = ver

    }
    w.Game = Game
    Game.prototype.show = function(){
        var bigDiv = document.createElement('div')
        bigDiv.style.width = this.pixel*this.ros + 'px'
        bigDiv.style.height = this.pixel*this.ver + 'px'
        bigDiv.className = 'bigDiv'
        this.map.appendChild(bigDiv)
        for(var i = 0; i < ros; i++){
            for(var j = 0; j < ver; j++){
                var pxDiv = document.createElement('div')
                pxDiv.style.width = (this.pixel-2) + 'px'
                pxDiv.style.height = (this.pixel-2) + 'px'
                pxDiv.className = 'pxDiv'
            }
        }
    }
}(window))