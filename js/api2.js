v1 = document.getElementById("fname");
v2 = document.getElementById("lname");
v3 = document.getElementById("email");
v4 = document.getElementById("mob");
v5 = document.getElementById("job");
v6 = document.getElementById("ans");
var listsexe = document.getElementsByName("sexe");
var full= document.getElementById("full-stack");
var front= document.getElementById("frontend");
function showinformations()
{
    var Joblist= new Array()
    
    alert("fname = "+v1.value+"\n"+"lname = "+v2.value);
    for(i = 0; i < listsexe.length; i++) {
        if(listsexe[i].checked)
        {
        console.log(listsexe[i].value)
    }}
    if (full.checked == true)
    {
        Joblist.push(full.value);
    }

    if (front.checked==true)
    {
        Joblist.push(front.value);
    }
    console.log(Joblist)

}
