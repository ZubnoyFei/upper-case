let string = 'While the above definition is specific fUcK to an asymmetric key  cryptosystem, FUCk it can be sUck FuCk adapted suck to the  suck symmetric case by replacing the public key encryption function with an encryption oracle, which retains the secret encryption key and encrypts arbitrary plaintexts at the adversary'
console.log(1, string);

function filterText(str) {

    let text = str.split(' ');

    const result = text.filter(function (item) {

        if (item.toUpperCase() !== 'FUCK' && item.toUpperCase() !== 'SUCK') {
            return item;

        } 

    });

    return result.join(' ');
}

console.log(filterText(string));