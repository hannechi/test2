var a = document.getElementById("a");
var b = document.getElementById("b");
var result = document.getElementById("result") 
function add()
{
    
    var valeura = parseInt(a.value);
    var valeurb = parseInt(b.value);
    console.log(typeof(valeura))
    somme= valeura+valeurb;
    alert("somme de deux entiers a et b est : "+somme);
    result.innerText="somme de deux entiers a et b est : "+somme;
}


var listdiv1 = document.getElementsByClassName("div1");
console.log(listdiv1);
var firstdiv = listdiv1[0];
console.log(listdiv1[0]);
var listh1=firstdiv.getElementsByTagName("h1");
console.log(listh1);
var firsth1 = listh1[0];
console.log(listh1[0]);
firsth1.id="maned";
firsth1.className="amine";
var classmaned =firsth1.getAttribute("class");
firsth1.setAttribute("class","chiheb")
console.log("class : "+classmaned)
firsth1.title="sara";
firsth1.style.color="yellow";
firsth1.style.marginLeft="150px";
console.log(firsth1.innerHTML)
console.log(firsth1.innerText)
console.log(firsth1.textContent)

var list =document.getElementById("list");
console.log(list);

var newitem = document.createElement("li");                                //=> <li>newitem 1</li>
newitem.textContent="newitem 1";
console.log(newitem);   
// list.appendChild(newitem); // tajouti fi ekher lista
var listli = list.getElementsByTagName("li")
console.log(listli)
console.log(listli[0])

list.insertBefore(newitem,listli[2])
list.removeChild(listli[0]);

document.getElementById("btn").addEventListener("click",f1)
function f1(num)
{
    alert("hello world from event"+num);
    location.reload();
}


// var firstdiv = listdiv1[0];
// var listh1 = firstdiv.getElementsByTagName("h1");
// console.log(listh1)
// var firsth1=listh1[0];
// firsth1.id="h1maned";
// firsth1.setAttribute("id","h2maned")
// firsth1.className="title";
// firsth1.style.color="red";
// var h1cible=document.getElementById("h1maned");
// console.log(firstdiv.innerHTML)
// // firstdiv.innerHTML="<h1> ibtissem hana badelna kol shy </h1>"
// console.log(firstdiv.innerText)