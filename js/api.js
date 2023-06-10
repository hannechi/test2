var namecontry = document.getElementById("name")
var desc = document.getElementById("desc");
var temp = document.getElementById("temp");

function Search() {
    var input = document.getElementById("contry")

    //appid=b99dc87e0136a04a2c57e8017d82655f

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=50a7aa80fa492fa92e874d23ad061374')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];

            namecontry.innerHTML = nameValue;
            desc.innerHTML = "Desc - " + descValue;
            temp.innerHTML = "Temp - " + tempValue;
            input.value = "";

        })

        .catch(err => alert("Wrong city name!"));
}