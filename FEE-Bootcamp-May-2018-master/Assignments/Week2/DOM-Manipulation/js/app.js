
function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));
}

function identifyByTag() {
    console.log(document.getElementsByTagName('p'));
}

function changeBackground() {
    var ele = document.getElementById("block1");
    ele.style.background="blue";

}

function increaseFont() {
    var ele = document.getElementById("block2");
    ele.style.fontSize="larger" ;
}

function changeFontColor() {
    document.getElementById("block3").style.color = "green";
    }



function revertColor() {
    document.getElementById("block3").style.color = "black";
}

function hide() {
var block4 = document.getElementById("block4");
block4.style.visibility="hidden";
}


function changeBackColorForAllBox() {
    var box1= document.getElementsByClassName("box1");
    for( var i=0;i<box1.length; i++){
        box1[i].style.background="green";
    }

}

function changeBackColor(color,ele)
{
   var el= document.getElementsByClassName(ele);
   for(var i=0;i<el.length;i++){
          el[i].style.background=color;
   }
}

function checkNumber(event)
{
 var kcode=event.keyCode;
  if(kcode >=48 && kcode <= 57)
   {
       return true;
   }   
   else 
   {
       return false;
   }
}
function addAdjacent() {
    var para2 = document.getElementById("para2");
    para2.innerHTML+="New Paragaraph added";
}

function removePara() {

    var par3=document.getElementById("para3");
    par3.nextElementSibling.remove();

}


function changecase(id)
{
    var ele= document.getElementById(id);
    ele.value =ele.value.toUpperCase();

}

function changetoCamelCase()
{
    var ele= document.getElementById("inputBox3").value;
    
    var str = ele.split(" ");
    var str1="";
    for (  var i=0;i<str.length;i++){
        str1 +=str[i].charAt(0).toUpperCase()+str[i].substr(1,str[i].length-1)+ " ";
        console.log(str1);
    }
    document.getElementById("inputBox3").value= str1;
}

function printBrowser()
{
    var ele = document.getElementById("browsers").selectedIndex;
    console.log(document.getElementsByTagName("option")[ele].value);
}
 
function changeBgColor()
{
    document.getElementById("text1").style.background="yellow";
}

function animatePara() {
    
    var elem = document.getElementById("box5"); 
    elem.style.position ="relative";
    pos = 0 ;
    var timer  = setInterval(frame,5);
    function frame(){
     if(pos==350 )   
        clearInterval(timer);
      else
        {
         pos++;
         elem.style.left = pos + "px";
        }
    }
}
    
function myMove()
{
    var ele =  document.getElementById("box5");
    ele.style.position="relative";

    ele.style.animation="normal";
    ele.style.animationDuration="5s";
    ele.style.left=300+"px";
    ele.style.an
}
