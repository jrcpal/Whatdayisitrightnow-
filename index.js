//Header Title to change colors
const letters = document.querySelectorAll('.letter');

randomRGB = () =>  {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256); 
  return `rgb(${r},${g},${b})`
};


const intervalId = setInterval( function(){
for (let letter of letters) {
  letter.style.color = randomRGB();
  }
},1000)

//Gregorian Date
const today = moment().format("[Today is] dddd, MMMM Do YYYY")
document.getElementById("gregorian").innerHTML = today

  
//Islamic Date 
function fetchIslamicData(){
  fetch("http://api.aladhan.com/v1/gToH")
  .then(response => {
    return response.json();
  })
  .then(data => {
    let hDate = `${data.data.hijri.day}, ${data.data.hijri.year} ${data.data.hijri.designation.expanded} ${data.data.hijri.month.ar} ${data.data.hijri.weekday.ar}`
    let iDate = `${data.data.hijri.month.en} ${data.data.hijri.day}, ${data.data.hijri.year} ${data.data.hijri.designation.abbreviated}`
    document.getElementById("arabicDate").innerHTML = hDate;
    document.getElementById("islamicDate").innerHTML = iDate;
  })
}
fetchIslamicData();

//Chinese Lunar Month 
const event = new Date();
console.log(event)

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("chineseDate").innerHTML = `Gregorian date in Chinese: ${event.toLocaleDateString('zh-CN', options)}`;


tyear = Number(moment().lunar().format('YYYY'))
lyear = tyear + 2669

const lDayMonth = moment().lunar().format('dddd, MMMM Do')
document.getElementById("englishLunarDate").innerText = `The Chinese Lunar date is ${lDayMonth}, ${lyear}`




//https://momentjs.com/docs/#/displaying/