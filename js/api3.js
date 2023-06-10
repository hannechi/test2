var namecontry = document.getElementById("name")
var desc = document.getElementById("desc");
var temp = document.getElementById("temp");

function search()
{
    var contry = document.getElementById("contry");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${contry.value}&appid=50a7aa80fa492fa92e874d23ad061374`)
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp'];
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description'];
        namecontry.innerHTML = nameValue;
        desc.innerHTML = "Desc - " + descValue;
        temp.innerHTML = "Temp - " + tempValue;
        contry.value = "";
    })
}