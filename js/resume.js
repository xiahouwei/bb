$(function(){
    //页面滚动插件的函数
    $.fn.fullpage({
      slidesColor: ['#eaeaea', '#eaeaea', '#eaeaea', '#333', '#eaeaea'],
      anchors: ['page1', 'page2', 'page3', 'page4'],
      menu: '#menu',
      afterLoad:function(anchorLink, index){
        if( index == 1){
            $(".but01").addClass("active");
            $(".but01").parent().find("span").animate({top: '0'},"fast","linear");
            $(".s01_test01").animate({left: '50px'});
            $(".s01_pic01").animate({right: '50px'});
        }
        if( index == 2){
            $(".but02").addClass("active");
            $(".but02").parent().find("span").animate({top: '0'},"fast","linear");
            $(".s02_test01").animate({left: '20px'});
            $(".s02_pic01").animate({right: '20px'});
            $(".s02_pic02").delay(500).animate({bottom: '20px'});
            $(".s02_pic03").delay(500).animate({top: '40px'});
        }
        if( index == 3){
            $(".but03").addClass("active");
            $(".but03").parent().find("span").animate({top: '0'},"fast","linear");
            $(".s03_test01").fadeIn(1000);
            $(".s03_pic01").animate({bottom: '150px'});
            $(".s03_pic02").delay(100).animate({bottom: '150px'});
            $(".s03_pic03").delay(200).animate({bottom: '150px'});
            $(".s03_pic04").delay(300).animate({bottom: '150px'});
            $(".s03_pic05").delay(400).animate({bottom: '150px'});
            $(".s03_pic06").delay(500).animate({bottom: '150px'});
            $(".s03_pic07").delay(600).animate({bottom: '150px'});
        }
        if( index == 4){
            $(".but04").addClass("active");
            $(".but04").parent().find("span").animate({top: '0'},"fast","linear");
            $(".s04_test01").animate({left: '30px'});
            $(".s04_test02").delay(100).animate({left: '30px'});
            $(".s04_test03").delay(200).animate({left: '30px'});
            $(".s04_test04").delay(300).animate({left: '30px'});
        }
      },
      onLeave:function(index, direction){
        if(index == '1'){
            $(".but01").removeClass("active");
            $(".but01").parent().find("span").animate({top: '-100px'},"slow","swing");
            $(".s01_test01").animate({left: '-2000px'});
            $(".s01_pic01").animate({right: '-2000px'});
        }
        if(index == '2'){
            $(".but02").removeClass("active");
            $(".but02").parent().find("span").animate({top: '-100px'},"slow","swing");
            $(".s02_test01").animate({left: '-2000px'});
            $(".s02_pic01").animate({right: '-2000px'});
            $(".s02_pic02").animate({bottom: '-300px'});
            $(".s02_pic03").animate({top: '-300px'});
        }
        if(index == '3'){
            $(".but03").removeClass("active");
            $(".but03").parent().find("span").animate({top: '-100px'},"slow","swing");
            $(".s03_test01").fadeOut("fast");
            $(".s03_pic01").animate({bottom: '-500px'});
            $(".s03_pic02").delay(50).animate({bottom: '-500px'});
            $(".s03_pic03").delay(100).animate({bottom: '-500px'});
            $(".s03_pic04").delay(150).animate({bottom: '-500px'});
            $(".s03_pic05").delay(300).animate({bottom: '-500px'});
            $(".s03_pic06").delay(450).animate({bottom: '-500px'});
            $(".s03_pic07").delay(600).animate({bottom: '-500px'});
        }
        if(index == '4'){
            $(".but04").removeClass("active");
            $(".but04").parent().find("span").animate({top: '-100px'},"slow","swing");
            $(".s04_test01").delay(300).animate({left: '-1000px'});
            $(".s04_test02").delay(200).animate({left: '-1000px'});
            $(".s04_test03").delay(100).animate({left: '-1000px'});
            $(".s04_test04").animate({left: '-1000px'});
        }
      }
    });
    //初始特效
    $(".but01").parent().find("span").animate({top: '0'});
    $(".s01_test01").animate({left: '50px'});
    $(".s01_pic01").animate({right: '50px'});
});