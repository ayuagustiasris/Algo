var item = prompt('nasi, daging, sayur, es, mie');

switch (item){
    case 'nasi' :
    case 'daging' :
    case 'sayur' :
        alert(item + ' makanan sehat');
        break;
    case 'es' :
        alert(item + ' minuman tidak sehat');
        break;
    case 'mie' :
        alert(item + ' makanan tidak sehat');
        break;
    default :
        alert('makanan/ minuman yang anda masukan salah!');
        break;
}