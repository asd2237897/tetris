// 启动游戏
;
(function (w) {
    function Game(nextForm) {
        this.nextForm = nextForm
        this.Form1 = new Form1()
        this.Form2 = new Form2()
        this.Form3 = new Form3()
        this.Form4 = new Form4()
        this.Form5 = new Form5()
        this.Form6 = new Form6()
        this.Form7 = new Form7()
    }
    w.Game = Game;
    Game.prototype.start = function () {
        var num = Math.ceil(Math.random() * 7)
        switch (num) {
            case 1:
                this.Form1.show(this.nextForm);
                break;
            case 2:
                this.Form2.show(this.nextForm)
                break;
            case 3:
                this.Form3.show(this.nextForm)
                break;
            case 4:
                this.Form4.show(this.nextForm)
                break;
            case 5:
                this.Form5.show(this.nextForm)
                break;
            case 6:
                this.Form6.show(this.nextForm)
                break;
            case 7:
                this.Form7.show(this.nextForm)
                break;
        }
        
    }
}(window))