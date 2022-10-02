const form = document.querySelector("section.top-banner form")
const input = document.querySelector(".container input")
const msg = document.querySelector("span.msg")
const list = document.querySelector(".ajax-section ul.cities")

// localStorage.setItem('tokenKeyEncrypted', EncryptStringAES("4d8fb5b93d4af21d66a2948710284366"))

localStorage.setItem('tokenKey', 'RAPAIooyOVFdRNn7gPi6i8vUp3OJvy0Np5wgMGgNO0a2a258kya95/arqJmhPrWc')

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    getWeatherDataFromApi();
});

const getWeatherDataFromApi = async () => {
    alert('http request is gone')
    const tokenKey = DecryptStringAES(localStorage.getItem('tokenKey'));
    alert(tokenKey)

    const inputValue = input.value
    const units = 'metric';
    const lang = 'tr';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;


    try {
        const response = await axios(url);
        console.log(response);

        const {main, sys, weather, name} = response.data;

        const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

        


    } catch (error) {
        console.log(error);
        msg.innerText = `404 (City Not Found)`;
        setTimeout(() => {
            msg.innerText = "";
        }, 5000);
    }
    form.reset();
}

