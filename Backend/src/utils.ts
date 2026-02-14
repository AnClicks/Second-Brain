export function random(len: number) {
    let options = "qwertyuiopasdfghjklzxcvbnm1234567890";
    const optionsLen = options.length;
    let hash = "";
    for (let i = 0; i < len; i++) {
        let randomNum = Math.floor((Math.random() * optionsLen));
        hash += options.charAt(randomNum);
    }
    return hash;
}