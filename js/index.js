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
    //3.通过ajax的方法,从php取得一个数据,通过模版引擎解析渲染在页面上
    //参数为index,把参数传到php文件里
    function getIndexData(index){
        //当页面是0,index范围0-9,当页面是1index范围是10-19所以当index>9+index_page*10的时候就不刷新文章了,这样一个页面只加载10篇文章
        // if(index_page==0&&index>9||index_page==1&&index>19)
        if(index>(9+index_page*10)){
            console.log(index);
            return false;
        };
        $.ajax({
            //发送数据到php文件
            url:'./php/getData.php?index='+index,
            //返回成功启动回调函数
            success:function(data){
                if(data==-1){
                    // alert('已经没有文章');
                    console.log('本页文章已经全部加载')
                }else{
                    //调用模板引擎解析data
                    var resultString = template('template01',data);
                    // console.log('模板获取信息一次');
                    // console.log(resultString);
                    $('.mid_div').append(resultString);
                }
            },
            dataType:'json'
        });
        //每次成功渲染主页文章后让文章Index++
        blogContentIndex++;
        // console.log(blogContentIndex)
    }
    //3.1  indexData.js文件内存放了json数据,直接读取
    function getIndexDataOffline(index){
        if(blogContentIndex>=indexData.length){
            return false;
        }
        //当页面是0,index范围0-9,当页面是1index范围是10-19所以当index>9+index_page*10的时候就不刷新文章了,这样一个页面只加载10篇文章
        // if(index_page==0&&index>9||index_page==1&&index>19)
        if(index>(9+index_page*10)){
            return false;
        };
        //从最后一篇文章显示
        var dataIndex = indexData.length - 1 -index
        var resultString = template('template01',indexData[dataIndex]);
        // console.log('模板获取信息一次');
        // console.log(resultString);
        $('.mid_div').append(resultString);
        //每次成功渲染主页文章后让文章Index++
        blogContentIndex++;
        // console.log(blogContentIndex)
    }
    //4.首页文章index设为0,刷新页面加载两篇文章
    var blogContentIndex=0;//全局变量,用来记录主页文章的数量
    getIndexDataOffline(blogContentIndex);
    if(blogContentIndex==1){
        getIndexDataOffline(blogContentIndex);
    }
    //5.当滚动条滚动到屏幕底部,执行加载文章函数方法
    //5.1.当页面滚动除一定距离,让移动端顶部灰色背景栏固定定位,且高度改为200px
    $(window).scroll(function(){
        // console.log('scrollTop=='+$(window).scrollTop());
        // console.log('文本高=='+$(document).height());
        // console.log('window高=='+$(window).height());
        //如果滚动出去的距离>文档的高度-窗口的高度 就说明滚动条滚动到底部了
        if($(window).scrollTop()>=$(document).height()-$(window).height()-150){
            getIndexDataOffline(blogContentIndex);
        };
        //当滚动出去的距离为头部灰色背景的高度的一半,则给此容器和h1标签添加新的样式
        if($(window).scrollTop() >= $('#mid_topDiv').height()/2 ){
            $('#mid_topDiv').addClass("topDivFixed");

        };
        //反之还原
        if($(window).scrollTop() < $('#mid_topDiv').height()/2 ){
            $('#mid_topDiv').removeClass("topDivFixed");
        }
    })
    //6.动态添加主页索引块,并且给第一个li加样式
    for(var i = 0;i<4;i++){
        $('.index_ul').append('<li>'+(i+1)+'</li>');
    }
    $('.index_ul> li:first').addClass("current");
    //7.点击索引块,显示对应的文章页面
    //遍历索引块LI注册点击事件
    var index_page=0;//定义变量存放页面的index值
    $('.index_ul>li').each(function(i){
        $(this).on("click",function(){//点击触发
            //页面的index值等于li的索引
            index_page=i;
            //mid_div里面的所有文章div都删除
            $('.mid_div').children().remove();
            blogContentIndex=10*i;
            //添加一篇文章
            getIndexDataOffline(blogContentIndex);
            //给当前的索引块加样式并移除其他li的样式
            $('.index_ul>li').removeClass("current");
            $(this).addClass('current');
        })
    })
    //8.1点击移动端导航按钮弹出导航菜单
    // $('.nav_btn').on('click',function(){
        // 如果导航菜单的class名为viewer hide 则淡出导航菜单
        // 通过jq对象的[0]可以找到DOM元素,DOM有className属性
        // if($('.viewer')[0].className == "viewer div_hide"){
        //     $('.viewer').removeClass("div_hide");
        //     $('.container-fluid').css('position','fixed');
        // }else{
        //     $('.viewer').addClass("div_hide");
        //     $('.container-fluid').css('position','static');
        // }
    // });
    //8.2 点击导航菜单透明层关闭导航菜单
    // $('.viewer_box_r').on('click',function(){
        // if($('.viewer')[0].className != "viewer div_hide"){
        //     $('.viewer').addClass("div_hide");
        //     $('.container-fluid').css('position','static');
        // }
    // });
    //8.3利用链式编程,不同DOM绑定同一个事件
    $('.nav_btn,.viewer_box_r').on('click',function(){
        //有这个类名就删除,没有就添加
        $('.viewer').toggleClass('div_hide');
    });
});

