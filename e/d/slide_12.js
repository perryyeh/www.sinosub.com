﻿var Show_Style=3;
var Image_12=new Array();
var Pics="/e/css/image/banner1.jpg|/e/css/image/banner2.jpg|/e/css/image/banner3.jpg|/e/css/image/banner4.jpg|/e/css/image/banner5.jpg|/e/css/image/banner6.jpg";
var Links="";
var Titles="";
var Alts="";
var Apic12=Pics.split('|');
var ALink12=Links.split('|');
var ATitle12=Titles.split('|');
var AAlts12=Alts.split('|');
var Show_Text=0;
for(i=0;i<Apic12.length;i++)
  {
   Image_12.src = Apic12[i]; 
  }



  var FHTML='<div id="js_slide_focus_12" class="slide_focus focus_style3" style="height:450px">';
  FHTML+='<ul class="inner">';
  for(var i=0;i<Apic12.length;i++)
   {
     if(ALink12.length<(i+1) || ALink12[i]=="")
      {
       ALink12[i]="javascript:void(0)";
      }
     if(AAlts12.length<(i+1))
      {
       AAlts12[i]="";
      }
     if(ATitle12.length<(i+1))
      {
       ATitle12[i]="";
      }
    FHTML+='<li><a href="'+ALink12[i]+'" target="_self" title="'+AAlts12[i]+'"><img src="'+Apic12[i]+'">';
    FHTML+='<em>'+ATitle12[i]+'</em>';
    FHTML+='</a></li>';
   }
 FHTML+='</ul>';
 FHTML+='</div>';
 document.write(FHTML);
$(function(){Slide_Focus("js_slide_focus_12",1,5,1440,450,true);});
