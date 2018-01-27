function reversString(str) {
    str = str.split("");
    console.log(str);
    for (var i = 0; i < str.length / 2; i++) {
        var placeholder = str[i];
        var endOfString = str.length - 1 - i;
        str[i] = str[endOfString];
        str[endOfString] = placeholder;

    }
    str = str.join("");
    return str;
}
console.log(reversString("hello"));