function reSizeTree()
{
	var oBody =	treeFrameDev.document.body;
	treeFrameDev.style.height = oBody.scrollHeight + (oBody.offsetHeight - oBody.clientHeight);
}
function loadTree(){
	$("form").attr("target","treeFrameDev");
	$("form").attr("action","DpiDeviceManageTree.jsp");
	$("form").submit();
}
function loadMain(){
	if($("#targetUrl").val()=="DpiDeviceManageList.jsp")	$("#dpidevcode").val("")
	$("form").attr("target","mainFrameDev");
	$("form").attr("action",$("#targetUrl").val());
	$("form").submit();
}
function init(){
	loadTree();
	loadMain();
}
$(function(){
	myLayout = $("body").layout();
	$("body").resize(function(){reSizeTree();});
	init();
});

function(){}