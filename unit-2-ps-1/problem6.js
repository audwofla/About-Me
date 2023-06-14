function count(arr, value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
            if (arr[i] < value) {
                count++;
            }
        }
    return count;
}

function arrMake() {
    let arr = [3, 55, 30, 28, 9, 12];   
    document.getElementById("countLess").innerHTML = count(arr, 10);
}
arrMake();
