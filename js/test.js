// // alert("hello master class")
// // //hello from master class

// // /* hahahahha
// // ahahhahaha
// // ahahahaha
// // */
// // var myvariable;
// // console.log(myvariable);
// // myvariable=10;
// // console.log(myvariable);
// // myvariable=5;
// // console.log(myvariable);
// // myvariable=myvariable+1;
// // console.log(myvariable);
// // myvariable="hello world"
// // console.log(myvariable);
// // var somme;
// // somme=5+"hello";
// // console.log("hello + 5 = "+somme);
// // somme="hello"-5;
// // console.log(somme);//NaN is a non-configurable, non-writable property.
// // somme="hello"/5;
// // console.log(somme);
// // somme="hi"*5;
// // console.log(somme);
// // somme=8;
// // console.log(somme);
// // somme+=8;
// // console.log(somme);
// // somme=somme+8;
// // console.log(somme);
// // somme-=8;
// // console.log(somme);
// // somme/=8;
// // console.log(somme);
// // somme*=8;
// // console.log(somme);
// // somme++;
// // console.log(somme);
// // somme--;
// // console.log(somme);
// // document.write(somme)
// // document.write("<h1>"+somme+"</h1>")

// // test=7==7;
// // // 7=7;//no matjich
// // console.log("7==7 "+test);
// // console.log(7<5);
// // console.log(7>5);
// // console.log(7==5);



// // var b=true;
// // if (b==true)
// // {
// //     console.log("hello world");
// // }
// // else{
// //     console.log("hello master class");
// // }

// // var text ="hello world2";
// // if (text=="hello world")
// // {
// //     document.write("hello world");
// // }
// // else if(text =="hello world2" )
// // {
// //     document.write("hello world2");
// // }
// // else if (text!="hello world2")
// // {
// //     document.write("hello");
// // }
// // var x = 5;
// // var test= x==='5';
// // console.log("x==='5'"+test)
// // var test= x!=='5';
// // console.log("x!=='5'"+test)
// // test = x=='5';
// // console.log("x=='5'"+test)

// // var myAge = 25 ;
// // if (myAge>=18 && myAge<=30)
// // {
// //     console.log("you are handsome");
// // }
// // else
// // {
// //     console.log("you are Beautiful");
// // }
// // if (myAge>=18 || myAge<=30)
// // {
// //     console.log("you are handsome");
// // }
// // else
// // {
// //     console.log("you are Beautiful");
// // }

// // for (i=0;i<10;i++)
// // {
// //     console.log(i+" you are Beautiful");
// // }


// // var age = 5;
// // while (age <10)
// // {
// // console.log("your age is less than 10");
// // age++;
// // }
// // document.write("You are now over 10");

// // for (i=0;i<10;i++)
// // {
// //     console.log(i+" you are Beautiful");
// //     if (i===7)
// //     {
// //         break;
// //     }
// // }
// // var links = document.getElementsByTagName("a");
// // for (i=0;i<links.length;i++)
// // {
// //     links[i].className="link-"+i
// //     console.log(links.length)
// // }

// // function getAverage(a,b)
// // {
// //     var averag = (a+b)/2;
// //     console.log(averag);
// // }
// // getAverage(7,8);
// // getAverage(7,8,9);

// // function getAverage(a,b)
// // {
// //     var averag = (a+b)/2;
// //     console.log(averag);
// //     return averag
// // }
// // var final =getAverage(7,8);
// // console.log(final)

// // // variable Scope
// // // local vs global 

// // var foo = 20 ; //Global
// // function myFunction ()
// // {
// //     var bar = 10 ; //local

// // }

// // var a =6; //var a ="hello world"
// // var b = 9;
// // if (isNaN(a))
// // {
// //     console.log("a is not a number ");

// // }
// // else
// // {
// //     console.log(a*b);
// // }

// // var myString = 'I \'m a "fun" string';
// // console.log(myString);
// // console.log("taille de la chaine est : "+myString.length)
// // console.log(myString.toUpperCase());
// // console.log(myString.indexOf("string"));
// // console.log(myString.indexOf("hello"));
// // if (myString.indexOf("hello")==-1)
// // {
// //     console.log("no there is no hello in our string");
// // }
// // else
// // {
// //     console.log("yes we have hello in our string at position : "+myString.indexOf("hello"));
// // }
// // var string1="abc"
// // var string2="ABC"
// // console.log(string1==string2);
// // console.log(string1.toLowerCase() === string2.toLowerCase())
// // var str = "hello world";
// // console.log(str);
// // var str2 = str.slice(2,9);
// // console.log(str2);
// // var str3 = str.slice(2);
// // console.log(str3);
// // var groupe="chiheb,maned,amine,sara,ibtissem,salma";
// // var taggroupe = groupe.split(",");
// // console.log(taggroupe);
// // var myarray=[];
// // myarray[0]=25;
// // myarray[1]=36;
// // myarray[2]="hello";
// // myarray[3]=5+2;
// // myarray[4]="world";
// // console.log("myarray : "+ myarray);
// // console.log(myarray);
// // var myarray2 = [10,20,'hi',false];
// // console.log(myarray2)

// // var myarray3 = new Array();

// // myarray3[0]=5;
// // myarray3[1]=36;
// // myarray3[2]="hello";
// // myarray3[3]=5+2;
// // console.log(myarray3)
// // var indexsearch =-1;
// // for (let i = 0; i < myarray3.length; i++)
// // {
// //     console.log(myarray3[i]);
// //     if (myarray3[i]=="hello")
// //     {
// //         console.log("found hello at the position : "+i)
// //         indexsearch=i;
// //     }
// // }
// // myarray3.splice(indexsearch,1);
// // console.log(myarray3);
// // myarray3.splice(indexsearch,2);
// // console.log(myarray3);
// // console.log(myarray3.sort());
// // console.log(myarray3.reverse());


// // var myArray = new Array();
// // myArray[0]=8;
// // myArray[1]="hello";

// // var myCar = new Object();
// // myCar.maxspeed = 200;
// // myCar.driver = "maned";
// // myCar.drive = function() {console.log("now driving");console.log("now 2 driving");}

// // console.log(myCar);
// // myCar.drive();
// // console.log(myCar.driver);

// // var myCar2 = {
// //     maxSpeed : 200,
// //     driver: "ibtissem",
// //     drive : function(speed,time) {
// //         console.log("now driving by ibtissem with speed "+speed +"/"+time+"hour");
// //         console.log("now driving by ibtissem 2");
// //     }
// // };

// // console.log(myCar2);
// // myCar2.drive(200,1);
// // console.log(myCar2.driver);


// // console.log(this);


// // var myCar3 = {
// //     maxSpeed : 200,
// //     driver: "ibtissem",
// //     drive : function(speed,time) {
// //         console.log("now driving by ibtissem with speed "+speed +"/"+time+"hour");
// //         console.log("now driving by ibtissem 2");
// //     },
// //     test : function()
// //     {
// //         console.log(this);
// //     },
// //     namedriver : function()
// //     {
// //         console.log("name of the driver is :"+this.driver)
// //     }
// // };

// // // var myCar3 = {
// // //     maxSpeed : 200,
// // //     driver: "ibtissem",
// // //     drive : function(speed,time) {
// // //         console.log("now driving by ibtissem with speed "+speed +"/"+time+"hour");
// // //         console.log("now driving by ibtissem 2");
// // //     },
// // //     test : function()
// // //     {
// // //         console.log(myCar3);
// // //     }
    
// // // };

// // // console.log(myCar3);
// // // myCar3.drive(200,1);
// // myCar3.test();
// // myCar3.namedriver();

// // //constructor is a function that create an object
// // // faser eli how bech ta3ebni a chaque fois nesta3mel var mycar3 = var mycar4 = 

// // // var myArray =new Array(); hedha constrcutor

// // // nheb na3mel kifou var myCar = new Car();

// // var Car = function(maxSpeed,driver)
// // {
// //     this.maxSpeed=maxSpeed;
// //     this.driver=driver;
// //     this.drive= function (speed,time)
// //     {
// //         console.log(speed * time)
// //     };
// //     this.logDRiver = function()
// //     {
// //         console.log("driver name is "+this.driver)
// //     };
// // }
// // var myCar1 = new Car(70,"chiheb");
// // var myCar2 = new Car(220,"maned");
// // var myCar3 = new Car(300,"chiheb");
// // var myCar4 = new Car(200,"chiheb");
// // var myCar5 = new Car(21,"chiheb");


// // myCar1.drive(30,5);
// // myCar1.logDRiver();

// class Car {
//     constructor(name,driver,maxSpeed) {
//       this.name = name;
//       this.driver = driver;
//       this.maxSpeed =maxSpeed
//     }
//     logDRiver() {
//         console.log("driver name is "+this.driver)
//     }
//     drive= function (time)
//     {
//         console.log(this.maxSpeed * time)
//     };
//   }
  
//   var myCar1 = new Car("Ford", "maned",200);
//   var myCar2 = new Car("Audi", "ibtissem",300);
//   console.log(myCar1)
//   myCar1.logDRiver();

// var mycontent = document.getElementsByClassName("content");
// console.log(mycontent);
// var mycontent0= mycontent[0];
// console.log(mycontent0);
// var pelement = mycontent0.getElementsByTagName("p")
// console.log(pelement)
// pelement[0].innerHTML= "hello from js";

// var pelement=document.getElementById("ptext");

// var body = document.getElementsByTagName("body");
// console.log(body[0].innerHTML)

// // body[0].innerHTML="<h1> hello from js </h1>";
// var titre3= document.getElementById("titre3");
// console.log(titre3);
// titre3.textContent="titre3 from js";
// console.log(titre3.id)
// titre3.id="hello";
// console.log(titre3.getAttribute("id"))
// titre3.setAttribute("id","nice")
// titre3.title="no hello";
// console.log(titre3.style)
// var titre3style=titre3.style;
// titre3style.color="green";
// titre3style.marginLeft="90px";
// titre3style.backgroundColor="yellow";

// var newli = document.createElement("li");

// newli.textContent="item4"
// console.log(newli)
// var list = document.getElementById("list");
// list.appendChild(newli)

// var newli2 = document.createElement("li");

// newli2.textContent="item0"
// list.insertBefore(newli2,list.getElementsByTagName("li")[0])
// var items = document.getElementsByClassName("items")[0];
// var listparent = items.getElementsByTagName("ul")[0];
// itemslist = listparent.getElementsByTagName("li");
// firstitem=itemslist[0];
// listparent.removeChild(firstitem)

// console.log(firstitem)
// function clickme()
// {
//     alert('hello masterrrrrrrrrrrr');
// }
// document.getElementById("btn").addEventListener("click",clickme)
// var reloadbutton = document.getElementById("reload");
// function f1 ()
// {
//    location.reload();
// }
// reloadbutton.onclick= f1;

function fgetdata()
{
    var nametext = document.getElementById("fname");
    alert(nametext.value)
}
