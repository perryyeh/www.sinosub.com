﻿var Show_Style=3;
var Image_15=new Array();
var Pics="/e/css/image/banner_1.jpg";
var Links="";
var Titles="";
var Alts="";
var Apic15=Pics.split('|');
var ALink15=Links.split('|');
var ATitle15=Titles.split('|');
var AAlts15=Alts.split('|');
var Show_Text=0;
for(i=0;i<Apic15.length;i++)
  {
   Image_15.src = Apic15[i]; 
  }



  var FHTML='<div id="js_slide_focus_15" class="slide_focus focus_style3" style="height:295px">';
  FHTML+='<ul class="inner">';
  for(var i=0;i<Apic15.length;i++)
   {
     if(ALink15.length<(i+1) || ALink15[i]=="")
      {
       ALink15[i]="javascript:void(0)";
      }
     if(AAlts15.length<(i+1))
      {
       AAlts15[i]="";
      }
     if(ATitle15.length<(i+1))
      {
       ATitle15[i]="";
      }
    FHTML+='<li><a href="'+ALink15[i]+'" target="_self" title="'+AAlts15[i]+'"><img src="'+Apic15[i]+'">';
    FHTML+='<em>'+ATitle15[i]+'</em>';
    FHTML+='</a></li>';
   }
 FHTML+='</ul>';
 FHTML+='</div>';
 document.write(FHTML);
$(function(){Slide_Focus("js_slide_focus_15",0,5,1440,295,true);});
