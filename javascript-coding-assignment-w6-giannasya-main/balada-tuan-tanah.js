/*
====
Balada Tuan Tanah
====
Tuan Postoro adalah tuan tanah dengan aset properti yang sangat banyak yang tersebar di banyak komplek. Kali ini dia menugaskan anak buahnya untuk berkeliling dan menuliskan laporan pendapatan dan pengeluaran dari semua properti nya, per komplek. Sang anak buah memberikan laporan berupa array, dan akunting Tuan Postoro akan mengkompillasi laporan nya.

Angka positif : mendapatkan pembayaran sewa sebesar angka dikali harga sewa properti, yaitu sebesar 100 dollar per properti
Angka negatif : harus membayar pajak sebesar 20 dollar per properti
Angka nol     : semua properti di komplek itu sedang kosong

Contoh :
input = [1, 0, -1]
output :
Tuan Postoro mendapat 100 dollar, harus membayar pajak sebesar 20 dollar, dan ada 1 komplek yang kosong

input = [1, 1, 1]
output :
Tuan Postoro mendapat 300 dollar, harus membayar pajak sebesar 0 dollar, dan ada 0 komplek yang kosong

input = [1, -2, 3, 0, 5]
output :
Tuan Postoro mendapat 900 dollar, harus membayar pajak sebesar 40 dollar, dan ada 1 komplek yang kosong
*/

function baladaTuanTanah(arr) {

}

let input1 = [1, 0, -1];
console.log(baladaTuanTanah(input1)); // "Tuan Postoro mendapat 100 dollar, harus membayar pajak sebesar 20 dollar, dan ada 1 komplek yang kosong"

let input2 = [1, 1, 1];
console.log(baladaTuanTanah(input2)); // "Tuan Postoro mendapat 300 dollar, harus membayar pajak sebesar 0 dollar, dan ada 0 komplek yang kosong"

let input3 = [1, -2, 3, 0, 5];
console.log(baladaTuanTanah(input3)); // "Tuan Postoro mendapat 900 dollar, harus membayar pajak sebesar 40 dollar, dan ada 1 komplek yang kosong"

let input4 = [-2, -5, -1, -3];
console.log(baladaTuanTanah(input4)); // "Tuan Postoro mendapat 0 dollar, harus membayar pajak sebesar 400 dollar, dan ada 0 komplek yang kosong"

let input5 = [0, 0, 0];
console.log(baladaTuanTanah(input5)); // "Tuan Postoro mendapat 0 dollar, harus membayar pajak sebesar 0 dollar, dan ada 3 komplek yang kosong"
