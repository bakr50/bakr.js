let city=[
{
    ar:"تعز",
    en:"Taiz"
},


]
let arrCity=[
    {
        ar:"تعز",
        er:"Tāʻizz"
    },
{
    ar:"ابين",
    er:"Abyan"
},
{
    ar:"الجوف",
    er:"Al Jawf"
},
{
    ar:"المهره",
    er:"Al Mahrah"
},
{
    ar:"عدن",
    er:"‘Adan"
},
{
    ar:"صنعاء",
    er:"Şanʻā’"
}

]
let pa={
    country:"YE",
    city:"Taiz"
}
window.onload=()=>{
    getTime(pa.country,pa.city);
}
for( city of  arrCity){
    document.getElementById("city").innerHTML+=`
           <option> ${city.ar}</option>
    `
}
document.getElementById("city").addEventListener("change",function(){
    document.getElementById("country").innerHTML=this.value;
arrCity.forEach(( city)=>{
    if(city.ar==this.value){
        pa.city=city.er;
        getTime(pa.country,pa.city);
    }
 
})
})

function getTime(country,city){
    fetch(`https://api.aladhan.com/v1/timingsByCity?country=${country}&city=${encodeURIComponent(city)}`)

    .then(res => res.json())
    .then(athan => 
    {
        console.log(athan);
         document.getElementById("readable").innerHTML=athan.data.date.readable;
    document.querySelector(".box1 #mo").innerHTML=athan.data.date.gregorian.month.number;
    document.getElementById("hj").innerHTML=athan.data.date.hijri.date;
    document.getElementById("month").innerHTML=athan.data.date.hijri.month.ar;
    document.getElementById("numberMonth").innerHTML=athan.data.date.hijri.month.number;
    fun("Fajr",athan.data.timings.Fajr);
    fun("Sunrise",athan.data.timings.Sunrise);
    fun("Dhuhr",athan.data.timings.Dhuhr);
    fun("Asr",athan.data.timings.Asr);
    fun("Maghrib",athan.data.timings.Maghrib);
    fun("Isha",athan.data.timings.Isha);

    
    }
    
    
    );


}
function fun(id,con){
    document.getElementById(id).innerHTML=con
}