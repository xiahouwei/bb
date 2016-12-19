$(function(){
    // 1.鼠标移入下拉导航按钮显示下拉菜单
    $('#switch_btn_icon').on('mouseover',function(){
        $('#innerUl').show();
        $(this).on('mouseout',function(){
            $('#innerUl').hide();
        })
    });
    $('#innerUl').on('mouseover',function(){
        $(this).show().on('mouseout',function(){
            $(this).hide();
        })
    });
    //2.点击下拉菜单的li显示对应的分页,并且关闭当前的下拉菜单
    $('#innerUl>li').on("click",function(){
        // console.log($(this).index());
        $('#switch_wrap').animate({left:-228*$(this).index()});
        $(this).parent().hide();
    })
    //8点击移动端导航按钮弹出导航菜单,利用链式编程,不同DOM绑定同一个事件
    $('.nav_btn,.viewer_box_r').on('click',function(){
        //有这个类名就删除,没有就添加
        $('.viewer').toggleClass('div_hide');
    });
});
//遍历indexData里的数组,渲染在页面上
angular.module("mainApp",[])
    .controller('mainController',function($scope){
        //倒序排列文章列表
        $scope.dataList=indexData.reverse();

    });
//把pages去掉,遍历,用正则处理
// $scope.dataList.forEach(function(v){
//     var exp = /\/pages/;
//     v.address.replace(exp,"");
// });
/*var urls = [{path:'./pages/p11'},{path:'./pages/p22'},{path:'./pages/p33'}];
var newUrl = urls.map(function(item,index){
        return item.path.replace(/\/\pages/,'')
    });
    console.log(newUrl);
});*/
