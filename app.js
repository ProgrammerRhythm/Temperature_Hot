const button = document.getElementById('button');
document.getElementById('button').addEventListener("click", function(){
    const input = document.getElementById('input').value;
    const tem = document.getElementById('tem');
    const lead = document.getElementById('lead');
    const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
    const city = document.getElementById('city')
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const name = data.name;
        const value = data.main.temp;
        const up = data.weather[0].main;
        tem.innerHTML=value+'&deg;C';
        lead.innerHTML=up;
        city.innerHTML=name;



        const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const imgIcon = document.getElementById('weather-icon');
        imgIcon.setAttribute('src', url);
    })
    .catch(err => alert('Try Again'))
    
})
