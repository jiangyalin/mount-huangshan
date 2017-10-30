//选择插件
var opt = (function () {

    //自定义复选
    //参数从至右（元素class，全选区域class，列表的选择区域calss，取消样式，选中样式）
    function cusCheckbox(check,calBtn,listBtn,checkBoxClass1,checkBoxClass2) {

        for (var i = 0; i < $(check).length; i++) {
            if($(check).eq(i).prop('class').indexOf('j-checked') != -1) {
                $(check).eq(i).addClass(checkBoxClass2).removeClass(checkBoxClass1);
            }else {
                $(check).eq(i).addClass(checkBoxClass1).removeClass(checkBoxClass2);
            }
        }

        $(listBtn).click(function () {
            var cl = $(this).find(check).attr("class");
            if(cl.indexOf("j-checked") == -1) {
                $(this).find(check).addClass('j-checked').addClass(checkBoxClass2).removeClass(checkBoxClass1);
            }else {
                $(this).find(check).removeClass('j-checked').addClass(checkBoxClass1).removeClass(checkBoxClass2);
            }
            var thisType = true;
            for(var i = 0; i < $(listBtn).length; i++){
                if($(listBtn).eq(i).find(check).attr("class").indexOf("j-checked") == -1){
                    thisType = false;
                    $(calBtn).find(check).removeClass("j-checked").addClass(checkBoxClass1).removeClass(checkBoxClass2);
                }
            }
            if(thisType == true) {
                $(calBtn).find(check).addClass("j-checked").addClass(checkBoxClass2).removeClass(checkBoxClass1);
            }
        });

        $(calBtn).click(function () {
            var cl = $(this).find(check).attr("class");
            if(cl.indexOf("j-checked") == -1){
                $(calBtn).find(check).addClass("j-checked").addClass(checkBoxClass2).removeClass(checkBoxClass1);
                $(listBtn).find(check).addClass("j-checked").addClass(checkBoxClass2).removeClass(checkBoxClass1);
            }else {
                $(calBtn).find(check).removeClass("j-checked").addClass(checkBoxClass1).removeClass(checkBoxClass2);
                $(listBtn).find(check).removeClass("j-checked").addClass(checkBoxClass1).removeClass(checkBoxClass2);
            }
        })
    }

    //自定义单选
    //参数从至右（祖先class，元素class,列表的选择区域class，取消样式，选中样式）
    function cusRadio(parents,check,listBtn,checkBoxClass1,checkBoxClass2) {

        for (var i = 0; i < $(check).length; i++) {
            if($(check).eq(i).prop('class').indexOf('j-checked') != -1) {
                $(check).eq(i).addClass(checkBoxClass2).removeClass(checkBoxClass1);
            }else {
                $(check).eq(i).addClass(checkBoxClass1).removeClass(checkBoxClass2);
            }
        }

        $(parents).on('click',listBtn,function () {
            for (var i = 0; i < $(listBtn).length; i++) {
                $(listBtn).eq(i).find(check).removeClass("j-checked").addClass(checkBoxClass1)
                    .removeClass(checkBoxClass2);
            }
            $(this).find(check).addClass("j-checked").addClass(checkBoxClass2).removeClass(checkBoxClass1);
        })
    }
    
    //复选
    //参数从至右（列表的class,全选的calss）
    function checkbox(list,cla) {
        $(list).click(function () {
            var thisType = true;
            for(var i = 0; i<$(list).length; i++){
                if(!$(list).eq(i).find("input[type='checkbox']").prop("checked")) {
                    thisType = false;
                    $(cla).find("input[type='checkbox']").prop("checked",false);
                }
            }
            if(thisType == true) {
                $(cla).find("input[type='checkbox']").prop("checked",true);
            }
        });
        $(cla).click(function () {
            $(list).find("input[type='checkbox']").prop("checked",$(this).find("input[type='checkbox']")
                .prop("checked"));
        });
    }
    
    return{
        cusCheckbox : cusCheckbox,
        cusRadio : cusRadio,
        checkbox : checkbox
    }
})();