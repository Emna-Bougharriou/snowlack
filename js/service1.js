ok=true
ok1=false
ok2=false
arrows=document.getElementById("arrows")
blabla=document.getElementById("test")

arrows1=document.getElementById("arrows1")
blabla1=document.getElementById("test1")

arrows2=document.getElementById("arrows2")
blabla2=document.getElementById("test2")

blabla1.addEventListener("click",test1)
blabla.addEventListener("click",test)
blabla2.addEventListener("click",test2)
var checkbox = document.getElementById("checkbox");
var text1 = document.getElementsByClassName("text1");
var text2 = document.getElementsByClassName("text2");
checkbox.addEventListener("click",check)
for (var i = 0; i < text1.length; i++)
{
    if (checkbox.checked == true)
    {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
    }
    else if (checkbox.checked == false)
    {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
    }
}

function check()
{

    for (var i = 0; i < text1.length; i++)
    {
        if (checkbox.checked == true)
        {
            text1[i].style.display = "block";
            text2[i].style.display = "none";
        }
        else if (checkbox.checked == false)
        {
            text1[i].style.display = "none";
            text2[i].style.display = "block";
        }
    }

}

function test(){
  if (!ok){
    arrows.style.transform="rotate(-90deg)"
    ok=true
  }
  else{
    arrows.style.transform="rotate(0deg)"
  ok=false
 }
}

function test1(){
  if (!ok1){
    arrows1.style.transform="rotate(-90deg)"
    ok1=true
  }
  else{
    arrows1.style.transform="rotate(0deg)"
  ok1=false
 }
}

function test2(){
  if (!ok2){
    arrows2.style.transform="rotate(-90deg)"
    ok2=true
  }
  else{
    arrows2.style.transform="rotate(0deg)"
  ok2=false
 }
}
