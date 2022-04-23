var tahmin1 = prompt("Zar Tahmini 1",1);
var tahmin2 = prompt("Zar Tahmini 2",1);
var tahminTamSayi1 = parseInt(tahmin1);
var tahminTamSayi2 = parseInt(tahmin2);
if(0<tahmin1 && tahmin1<7 && 0<tahmin2 && tahmin2<7){
    var totalSayi = tahminTamSayi1 + tahminTamSayi2
    console.log("Total Tahiminiz: " +totalSayi);
    var random1 = Math.random();
    var random2 = Math.random();
    if(random1 < 1){
        random1 = (random1+1) * 6;
        random2 = (random2+1) * 6;
        random1 = Math.floor(random1);
        random2 = Math.floor(random2);
        if(random1 > 6){
            random1 = random1 % 6;
        }
        if(random2 > 6){
            random2 = random2 % 6;
        }
        var zarTotal = random1 + random2;
        console.log("Total Zar: " +zarTotal);
    }
    if(zarTotal == totalSayi){
        console.log("Tebrikler, totali bildiniz");
    }else{
        console.log("Aradaki Sayi Farki: "+(zarTotal - totalSayi).toString());
    }
    document.write("Tahminim: <br>", totalSayi);
    document.write("<br> Zar Toplam Sonucu: <br>", zarTotal);
}else{
    document.write("Hatalı Girdi")
}
