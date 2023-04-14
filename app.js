const button = document.getElementById('button');
document.getElementById('button').addEventListener("click", function(){
    const input = document.getElementById('input').value;
    const tem = document.getElementById('tem');
    const pop = document.getElementById('pop');
    const Fvalues = document.getElementById('fel');
    const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
    const city = document.getElementById('city')
    const windP = document.getElementById('wind');
    const imgIcon = document.getElementById('weather-icon');
    const sun = './images/weather/morning.png';
    const noon = './images/weather/noon.png';
   if(input.length > 2){
    document.getElementById('input-group').style.marginBottom = "0";
    document.getElementById('weather-status').style.display = "block";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const name = data.name;
        const Mvalue = data.main.temp;
        const Fvalue = data.main.feels_like;
        const wind = data.wind.speed;
        windP.innerHTML = wind;
        tem.innerHTML=Mvalue+'&deg;C';
        Fvalues.innerHTML=Fvalue+'&deg;C';
        city.innerHTML=name;
        console.log(data);
        if(Mvalue > 33){
            document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
            imgIcon.setAttribute('src',sun);
        }else if(Mvalue > 20 && value < 33){
            document.body.style.backgroundImage = "url('./images/morning-cloudy.jpg')";
            imgIcon.setAttribute('src',noon);
        }
        // const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
       
    })
    .catch(err => alert("Wrong city name!"));
   }
   else{
    alert('Please enter a valid city name');
}
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const Population = data.city.population;
        pop.innerHTML = Population;
    })
})

