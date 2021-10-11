var angkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 8;

while(angkot <= angkotBeroperasi){
    console.log('Angkot No. ' + angkot + ' beroperasi dengan baik');
    angkot++;
}

for(angkot = angkotBeroperasi + 1; angkot <= jmlAngkot; angkot++){
    console.log('Angkot No. ' + angkot + ' tidak beroperasi dengan baik');
}