// hide or remove stuff from users
(function() {
    var tab_perm = $("#tab_perm_settings");
    var subtab_edit_page = $("#subtab_edit_page");
    var admin_tab = $("#mm_adm_tr");
    if(!tab_perm.length && !subtab_edit_page.length && !admin_tab.length){
        // edit buttons
        $(".il_ContainerListItem > .ilFloatRight").remove();
        // repository breadcrumb
        $("#mainscrolldiv > ol.breadcrumb > li:first-child").hide();
        $(".ilMainMenu").hide();
        $("#ilTab").hide();
    }

})();


// open left_nav, remove other course entries and float content to left
(function() {
    var left_nav = $("#left_nav");
    if(!left_nav.length){
        document.getElementById("imgtree").click();
    }
    if(left_nav) {
        var left_nav_lis = left_nav.find("li");
        var course_lis = $("#left_nav div > div ul > li").has("a > img[alt*='Course']");
        course_lis.css("margin-left", "0");
        course_lis.not(":has('.ilHighlighted')").hide();
        var my_course_li = course_lis.has('.ilHighlighted').last();
        my_course_li.addClass("root");
        my_course_li.find("a").show();
        var my_course_level_1_lis = my_course_li.children("ul").children("li");
        course_lis.find("li").has(".ilHighlighted").children('a').children('span').not(":empty").addClass("ilHighlighted");

        my_course_level_1_lis.addClass("col-sm-4");
        my_course_li.children("ul").addClass("row");
        my_course_level_1_lis.addClass("dropdownimucb");
    }
})();


// on hover open js-trees
$(window).load(function(){
    var my_course_level_1_lis = $("#left_nav div > div ul > li").has("a > img[alt*='Course']").has('.ilHighlighted').last().children("ul").children("li");

    // on hover simulate click to get the contents of the dropdownimucb if they are not there
    my_course_level_1_lis.each(function(){
        $(this).hover(
                function(){
                    if($(this).hasClass("jstree-closed")) {
                        $(this).children("ins").click();
                    }
                },
                function(){}
        );
    });


});
