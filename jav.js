const numbers = [1, 9, 14, 2, 49];
for (let i = 0; i < numbers.length; i++) {
    for (let k = i+1; k < numbers.length; k++) {
        if (numbers[i] > numbers[k]) { // 9 > 1
            let r = numbers[i]; // 9
            numbers[i] = numbers[k] // 14
             numbers[k] = r // 9
             console.log(numbers)
            }
            else{
                continue
            }
        }
    }
