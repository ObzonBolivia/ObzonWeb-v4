// export function generateUUID() {
//     var d = new Date().getTime();
//     var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[x]/g, function (c) {
//         var r = (d + Math.random() * 16) % 16 | 0;
//         d = Math.floor(d / 16);
//         return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
//     });
//     return uuid
// } 230603






export function generateUUID(activadores) {

    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    let aleatorio = Math.floor((Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000);
    let str = aleatorio.toString().split('').map(i => i != 4 && i != 5 && i != 5 ? arr[i] : i)
    
    var uuid = 'xxxxxxxxxx'.replace(/[x]/g, function (c, i) {
        return c == 'x' &&  i !== 3 &&  i !== 7 ? str[i] : `-${i}`
     })

    if (activadores[uuid] !== undefined) { 
        console.log('volviendo a generar')
        return generateUUID(activadores)
    } else {
        return uuid
    }
}