// ==UserScript==
// @name         rexread
// @namespace    http://techstreet404.blogspot.com
// @version      1.0
// @description  For educational purposes only! Using this script as well as the consequences of using it are user's own resonsibility.
// @author       rishb_rex
// @match        https://www.geeksforgeeks.org/*
// @match        https://www.geeksforgeeks.org/*
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $=jQuery;
    $(document).ready(function() {
    $('#content').before('<div id="readmode" style="float:left; background-color:black;">&#127769;</div>');
    });
})();



$("#readmode").click(function() {
        $=jQuery;
        if(document.getElementById("readmode").style.color == 'gray'){
            $('.leftSideBarParent').css('display','inline');
            $('.site-content').css('margin', '0px 0px 0px 0px');
            $('.site-content').css('width', '52%');
            $('#main').css('background-color','white');
            $('#site-navigation').css('display','inline');
            $('#page').css('display','inline');
            $('.author_info_box').css('display', 'inline');
            $('.AdsParent').css('display', 'inline');
            $('.entry-meta').css('display', 'inline');
            $('.plugins').css('display', 'inline');
            $('hr').next().css('display', 'inline');
            $('hr').next().next().css('display', 'inline');
            $('#secondary').css('display','inline');
            $('#readmode').css('color','yellow');
            $('#readmode').html('&#127769;');
        }
	else{
            $('#readmode').html('&#9788;');
            $('#secondary').css('display','none');
            $('.leftSideBarParent').css('display','none');
            $('.site-content').css('margin', '0px 30px 0px 30px');
                $('.site-content').css('width', '90%');
            $('#main').css('background-color','black');
            $('#content').css('background-color','white');
            $('#site-navigation').css('display','none');
            $('#page').css('display','none');
            $('.author_info_box').css('display', 'none');
            $('.AdsParent').css('display', 'none');
            $('.entry-meta').css('display', 'none');
            $('.plugins').css('display', 'none');
            $('hr').next().css('display', 'none');
            $('hr').next().next().css('display', 'none');
            $('#readmode').css('color','gray');
        }
});
