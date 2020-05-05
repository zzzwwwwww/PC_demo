/*
 * @Author: your name
 * @Date: 2020-04-27 10:14:33
 * @LastEditTime: 2020-04-27 10:15:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueCodee:\vulnova\js\index.js
 */
$(function(){
    /*导航下拉菜单*/
    $('.header_list').each(function() {
        var theSpan = $(this);
        var theMenu = theSpan.find(".city_list");
        var tarHeight = theMenu.height();
        theMenu.css({
            height: 0,
            opacity: 0
        });
        theSpan.hover(function() {
            $(this).addClass("selected");
            theMenu.stop().show().animate({
                height: tarHeight,
                opacity: 1
            }, 400);
        }, function() {
            $(this).removeClass("selected");
            theMenu.stop().animate({
                height: 0,
                opacity: 0
            }, 400, function() {
                $(this).css({
                    display: "none"
                });
            });
        });
    });
})