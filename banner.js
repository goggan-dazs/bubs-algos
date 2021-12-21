function printBanner (dashes, writeAbanner) {

    for (let i=0; i<writeAbanner; i++) {

         if (i < writeAbanner.length) {
              console.log('-');
              console.log(writeAbanner)
              console.log('-')
              i++;
         }
    }
    return i;
}
console.log (printBanner('hello people'));
