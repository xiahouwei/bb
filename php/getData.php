<?php 
    //获取前台数据
    $index=$_GET['index'];
    header('content-type:text/html;charset=utf-8');
    //读取json文件
    $jsonString=file_get_contents('../data/indexData.json');
    //把$jsonString转化为数组
    $contentArr=json_decode($jsonString);//将字符串转为php对象
    //如果$index小于$contentArr数组的长度 则返回正常值,否则返回一个-1
    //如果$index小于10 则返回正常值,否则返回一个-1,这样让页面只显示10个文章
    //因为在页面已经做判断了 所以不需要这个判断条件了
    // if($index<20){
        //按照索引值返回对应的数据,注意从后向前输出
        $currentObj=$contentArr[count($contentArr)-1-$index];
        //返回给浏览器 
        echo json_encode($currentObj);//将php对象转为字符串
    // }else{
        // print_r(-1);
    // }
 ?>