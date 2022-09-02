function generateSingleStanza(number) {

    let num = number - 1

    if ((number % 10 > 5 && number % 10 < 10) || (number >= 10 && number <= 20) || (number % 10 === 0)) {
        console.log(`${number} бутылок пива на стене, ${number} бутылок пива!
        Возьми одну, пусти по кругу, ${num} бутылок пива на стене!`);
    }

    else if (number % 10 === 5){
        console.log(`${number} бутылок пива на стене, ${number} бутылок пива!
        Возьми одну, пусти по кругу, ${num} бутылки пива на стене!`);
    }
    else if (number % 10 <= 4 && number % 10 > 2 ) {
        console.log(`${number} бутылки пива на стене, ${number} бутылки пива!
        Возьми одну, пусти по кругу, ${num} бутылки пива на стене!`);
    }
    else if (number % 10 === 2) {
        console.log(`${number} бутылки пива на стене, ${number} бутылки пива!
        Возьми одну, пусти по кругу, ${num} бутылка пива на стене!`);
    }
    else if (number === 1) {
        console.log(`${number} бутылка пива на стене, ${number} бутылка пива!
        Возьми одну, пусти по кругу, нет бутылок пива на стене!`);
    }
    else{
        console.log(`${number} бутылка пива на стене, ${number} бутылка пива!
        Возьми одну, пусти по кругу, ${num} бутылок пива на стене!`);
    }


}
function generateSongText(number) {
    for (let num = number; num >= 1; num--) {
        generateSingleStanza(num);
    }
}
generateSongText(21)
