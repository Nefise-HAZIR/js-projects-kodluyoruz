let userName = prompt("Lütfen isminizi girin:");

let nameSpan = document.getElementById("myName");
nameSpan.innerText = userName;

function showTime() {
    let date = new Date();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = days[date.getDay()];
  
    // Tek haneli saat/dakika/saniyeyi çift hane yap
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
  
    let time = `${hour}:${minute}:${second} ${day}`;
    document.getElementById("myClock").innerText = time;
    
    setTimeout(showTime, 1000); // Her saniye yenile
  }

  showTime();