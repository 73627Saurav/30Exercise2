// Create Snake, Water & Gun game in JavaScript.
// The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare win or loss using alert
// Use alert, prompt and confirm whereever required!

const systemChar = ['s', 'w', 'g']
let again = true

while (again) {
    let randomNum = Math.floor(Math.random() * systemChar.length)
    // console.log(systemChar[randomNum])
    let userChar = prompt('Enter the symbol')

    if (!systemChar.includes(userChar))
        alert('Enter valid symbol')

    else {
        userChar = userChar.toLowerCase()
        console.log(userChar)
        if (userChar === 's' && systemChar[randomNum] === 'w')
            console.log('you win')
        else if (userChar === 's' && systemChar[randomNum] === 'g')
            console.log('you lose')
        else if (userChar === 'w' && systemChar[randomNum] === 's')
            console.log('you lose')
        else if (userChar === 'w' && systemChar[randomNum] === 'g')
            console.log('you win')
        else if (userChar === 'g' && systemChar[randomNum] === 's')
            console.log('you win')
        else if (userChar === 'g' && systemChar[randomNum] === 'w')
            console.log('you lose')
        else if (userChar === 'g' && systemChar[randomNum] === 'g')
            console.log('you lose')
        else if (userChar === 's' && systemChar[randomNum] === 's')
            console.log('you lose')
        else if (userChar === 'w' && systemChar[randomNum] === 'w')
            console.log('you lose')

        again = confirm('you want to play again?')
    }
}