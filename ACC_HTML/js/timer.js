
//判断月份小于10加0
function Appendzero (obj) {
         if (obj < 10) return "0" + obj; else return obj;
 }

 function GetTime(){
    //先把所有需要的数据给获取到
    this.num=0;
    this.hours=0;
    this.minutes=0;
    this.seconds=0;
    this.timer=null;

  }
  GetTime.prototype={
    start:function(){
      this.timer=setInterval(this.auto.bind(this),1000)
    },

    end:function(){
     clearInterval(this.timer);
      this.num=0;
      document.querySelector('.timeBox').innerHTML='00:00:00';

    },
    getTime:function(){
      return this.num;
    },
    auto:function(){
      this.num++;
      this.writeIn(this.num)
    },

    collectData:function(seconds){
      this.hours=parseInt(seconds/3600);
      this.minutes=parseInt((seconds-this.hours*3600)/60);
      this.seconds=seconds-this.hours*3600-this.minutes*60;
      return Appendzero(this.hours)+':'+Appendzero(this.minutes)+':'+Appendzero(this.seconds)+' ';

    },
    writeIn:function(seconds){
      document.querySelector('.timeBox').innerHTML=this.collectData(seconds)

    }

  }


//调用计时器插件
var temp=new GetTime();
    console.log(temp);
    var startBtn=document.getElementById('call-btn'),
        endBtn=document.getElementById('default-btn'),
        countTimeBth=document.getElementById('countTime');
        startBtn.addEventListener('click',startEvent,false);
        endBtn.addEventListener('click',endEvent,false);
         //countTimeBth.addEventListener('click', countTimeEvent,false);
        function startEvent(){

          temp.start();

        }

         function endEvent(){
           var seconds=temp.getTime();
          alert(temp.collectData(seconds))
           temp.end();    
        }
        /* function countTimeEvent(){
          var seconds=temp.getTime();
          alert(temp.collectData(seconds))
          
        }*/



  
  