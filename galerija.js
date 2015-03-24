//TODO fix different pic width sliding
$(document).ready(function(){
      var visibleScreenH = $(window).height();
      $("#loader").css('margin-top',(visibleScreenH-500)/2);
	  var opts = {
	  lines: 13, // The number of lines to draw
	  length: 7, // The length of each line
	  width: 4, // The line thickness
	  radius: 10, // The radius of the inner circle
	  corners: 1, // Corner roundness (0..1)
	  rotate: 0, // The rotation offset
	  color: '#000', // #rgb or #rrggbb
	  speed: 1, // Rounds per second
	  trail: 60, // Afterglow percentage
	  shadow: false, // Whether to render a shadow
	  hwaccel: false, // Whether to use hardware acceleration
	  className: 'spinner', // The CSS class to assign to the spinner
	  zIndex: 2e9, // The z-index (defaults to 2000000000)
	  top: 'auto', // Top position relative to parent in px
	  left: 'auto' // Left position relative to parent in px
  };
  var target = document.getElementById('loader');
  var spinner = new Spinner(opts).spin(target);
});
function zazeniGalerijo(){
  $("#loader").remove();
  $("#galerija").show();
  var arrayPicWidths = new Array();
  //count all pics
  var numPics = $("#galerija ul").children().size();
  var leftPics = Math.floor(numPics/2);
  var rightPics = numPics-leftPics;
  var visibleScreenH = $(window).height();
  $("#galerija").css('margin-top',(visibleScreenH-500)/2);
  var i;
  //$("h2").text($("#galerija ul li").eq(3).find("img").width());
  var sestevek=0;
  for(i=0; i<numPics; i++){
	arrayPicWidths.push($("#galerija ul li").eq(i).find("img").width());
	sestevek=sestevek+$("#galerija ul li").eq(i).find("img").width();
  }
  //arrayPicWidths.shift();
  $("h2").text(arrayPicWidths.length);
  var leftPicsW=0;
  
  
  //append left class
  for(i=0; i<leftPics; i++){
	//arrayPicWidths.push($("#galerija ul li").eq(i).find("img"));
	$("#galerija ul li").eq(i).find("img").addClass("leftPic");
	leftPicsW = leftPicsW + arrayPicWidths[i];
  }
  //append center class
  $(".innT").text($("#galerija ul li").eq(leftPics).find("img").attr("alt"));
  $("#galerija ul li").eq(leftPics).find("img").addClass("centerPic");
  $(".centerPic").wrap("<a href='#' rel='#' alt='' />");
  //append right class
  for(i=leftPics+1; i<numPics; i++){
	$("#galerija ul li").eq(i).find("img").addClass("rightPic");
  }
  //$("h2").text(Math.floor(numPics/2));
  
  var screenW = $("#wrapper").width();
  var screenWhalf = screenW/2;
  
  //leftPicsW = leftPics*530;
  var centerPicW = arrayPicWidths[leftPics]*1.667;
    
  var centerPicWhalf = centerPicW/2;
  //$("h2").text(centerPicW);
  var leftOffset = leftPicsW + centerPicWhalf - screenWhalf;
  $("#galerija").css('left', -(leftOffset+40));
  //$("h2").text(screenWhalf);
  //$("h2").text(leftOffset);
  
  //$(".innerTxt").css("marginLeft",$(window).width()/2);
  //var html_org = $(".innerTxt p").html();
  //var html_calc = '<span>'+html_org+'</span>';
  var widthPicTxt = $(".innerTxt p").find('span:first').width();
  $(".innerTxt").css("marginLeft", ($(window).width()/2-widthPicTxt/2));
  //$(".innerTxt").css("marginLeft", $(window).width()/2);
  
  $(window).resize(function(){
	  var numPics = $("#galerija ul").children().size();
	  var leftPics = Math.floor(numPics/2);
	  var rightPics = numPics-leftPics;
	  var visibleScreenH = $(window).height();
	  $("#galerija").css('margin-top',(visibleScreenH-500)/2);  
	  var screenW = $("#wrapper").width();
	  var screenWhalf = screenW/2;
	  
	  //var leftPicsW = leftPics*530;
	  //var centerPicW = 885;
	  
	  //var centerPicWhalf = centerPicW/2;
	  
	  var leftOffset = leftPicsW + centerPicWhalf - screenWhalf;
	  $("#galerija").css('left', -(leftOffset+40));
	  
	  var widthPicTxt = $(".innerTxt p").find('span:first').width();
	  $(".innerTxt").css("marginLeft", ($(window).width()/2-widthPicTxt/2));
  });
  //left
  $(document).on("click", ".leftPic", function(){
	var arrayMaxRight = arrayPicWidths.pop();
	arrayPicWidths.unshift(arrayMaxRight);
	leftPicsW=0;
	for(i=0; i<leftPics; i++){
	  leftPicsW = leftPicsW + arrayPicWidths[i];
    }
	centerPicW = arrayPicWidths[leftPics]*1.667;
    centerPicWhalf = centerPicW/2;
	leftOffset = leftPicsW + centerPicWhalf - screenWhalf;
	$("#galerija").css('left', -(leftOffset+40));
	//$("h2").text("center pic widht:" + centerPicW + " offset left:" + leftOffset+40);
	var tabela= "";
	for(i=0; i<numPics; i++){
		tabela = tabela+ " " + arrayPicWidths[i]; 
	}
	//$("h1").text(tabela);
	///////////////////////////////
	//var clickedIndex = $(this).parent().index();
	var indexCenter = $(".centerPic").parent().parent().index();
	var clickedIndex = indexCenter-1;
	var contentCenter;
	var picName;
	contentCenter = $(".centerPic").parent().html();
	$(".centerPic").parent().parent().html(contentCenter);
	///////////////////////////////	
	var maxRight = $("#galerija ul li").eq(-1).html();
	$("#galerija ul li").eq(0).before("<li>" + maxRight + "</li>");	
	$("#galerija ul li img").eq(0).addClass("leftPic").removeClass("rightPic");	
	$(".centerPic").addClass("rightPic").removeClass("centerPic");
	//TODO
	//TODO
	//TODO
	//$(this).addClass("centerPic").removeClass("leftPic");	
	//TODO
	//TODO
	//TODO
	
	$("#galerija ul li").eq(indexCenter).find("img").addClass("centerPic").removeClass("leftPic");
	////////////////////////////////////
	$("#galerija ul li").eq(-1).remove();
	
	picName = $(".centerPic").attr("src");
	contentCenter = $(".centerPic").parent().html();
	//$(".centerPic").parent().html("<a href='" + picName + "' rel='#'>" + contentCenter + "</a>");
	$(".centerPic").parent().html("<a href='#' rel='#'>" + contentCenter + "</a>");
	
	$(".innT").text($("#galerija ul li").eq(leftPics).find("img").attr("alt"));
	var widthPicTxt = $(".innerTxt p").find('span:first').width();
	$(".innerTxt").css("marginLeft", ($(window).width()/2-widthPicTxt/2));
	
	//$(".innT").text(clickedIndex);
	//$(".innT").text(indexCenter);
	$("#galerija").css('left','-='+ 350 +'px');
	$("#galerija").animate({
		left:"+="+ 350 +"px"
	}, "fast");
  });
  //right
  $(document).on("click", ".rightPic", function(){
    var arrayMaxLeft = arrayPicWidths.shift();
	arrayPicWidths.push(arrayMaxLeft);
	leftPicsW=0;
	for(i=0; i<leftPics; i++){
	  leftPicsW = leftPicsW + arrayPicWidths[i];
    }
	centerPicW = arrayPicWidths[leftPics]*1.667;
    centerPicWhalf = centerPicW/2;
	leftOffset = leftPicsW + centerPicWhalf - screenWhalf;
	$("#galerija").css('left', -(leftOffset+40));
	//$("h2").text("center pic widht:" + centerPicW + " offset left:" + leftOffset+40);
	var tabela= "";
	for(i=0; i<numPics; i++){
		tabela = tabela+ " " + arrayPicWidths[i]; 
	}
	//$("h1").text(tabela);
	///////////////////////////////
	var indexCenter = $(".centerPic").parent().parent().index();
	var clickedIndex = indexCenter+1;
	var contentCenter;
	var picName;
	contentCenter = $(".centerPic").parent().html();
	$(".centerPic").parent().parent().html(contentCenter);
	///////////////////////////////	
	var maxLeft = $("#galerija ul li").eq(0).html();
	$("#galerija ul li").eq(-1).after("<li>" + maxLeft + "</li>");
	$("#galerija ul li img").eq(-1).addClass("rightPic").removeClass("leftPic");
	$(".centerPic").addClass("leftPic").removeClass("centerPic");
	//TODO
	//TODO
	//TODO
	//$(this).addClass("centerPic").removeClass("rightPic");
	//TODO
	//TODO
	//TODO
	
	$("#galerija ul li").eq(indexCenter+1).find("img").addClass("centerPic").removeClass("rightPic");
	
	$("#galerija ul li").eq(0).remove();
	
	picName = $(".centerPic").attr("src");
	contentCenter = $(".centerPic").parent().html();
	$(".centerPic").parent().html("<a href='#' rel='#'>" + contentCenter + "</a>");
	//$(".centerPic").parent().html("<a href='" + picName + "' rel='#'>" + contentCenter + "</a>");
	
	$(".innT").text($("#galerija ul li").eq(leftPics).find("img").attr("alt"));
	var widthPicTxt = $(".innerTxt p").find('span:first').width();
	$(".innerTxt").css("marginLeft", ($(window).width()/2-widthPicTxt/2));
	$("#galerija").css('left','+='+ 350 +'px');
	$("#galerija").animate({
		left:"-="+ 350 +"px"
	}, "fast");
  });
}