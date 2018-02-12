    const runes = [
        {name: "El", power: 28, dont:"Ort"},
        {name: "Eld", power: 33, dont:"Sur"},
        {name: "Tir", power: 9, dont:"Eth"},
        {name: "Nef", power: 7, dont:"Ist"},
        {name: "Eth", power: 31, dont:"Tir"},
        {name: "Ith", power: 22, dont:"Pul"},
        {name: "Tal", power: 8, dont:"Io"},
        {name: "Ral", power: 25, dont:"Um"},
        {name: "Ort", power: 18, dont:"El"},
        {name: "Thul", power: 13, dont:"Sol"},
        {name: "Amn", power: 6, dont:"Fal"},
        {name: "Sol", power: 10, dont:"Thul"},
        {name: "Shael", power: 17, dont:"Lem"},
        {name: "Dol", power: 11, dont:"Hel"},
        {name: "Hel", power: 12, dont:"Dol"},
        {name: "Io", power: 20, dont:"Tal"},
        {name: "Lum", power: 32, dont:"Gul"},
        {name: "Ko", power: 27, dont:"Mal"},
        {name: "Fal", power: 14, dont:"Amn"},
        {name: "Lem", power: 26, dont:"Shall"},
        {name: "Pul", power: 15, dont:"Ith"},
        {name: "Um", power: 16, dont:"Ral"},
        {name: "Mal", power: 21, dont:"Ko"},
        {name: "Ist", power: 4, dont:"Nef"},
        {name: "Gul", power: 23, dont:"Lum"},
        {name: "Vex", power: 24, dont:"Ohm"},
        {name: "Ohm", power: 1, dont:"Vex"},
        {name: "Lo", power: 2, dont:"Cham"},
        {name: "Sur", power: 30, dont:"Eld"},
        {name: "Ber", power: 3, dont:""},
        {name: "Jah", power: 5, dont:"Zod"},
        {name: "Cham", power: 29, dont:"Lo"},
        {name: "Zod", power: 19, dont:"Jah"},
    ]


    const findMostPowerfulRune = (inputRunes) => {
        return inputRunes.reduce((reducer,el)=>(
            reducer = el.power > reducer.power ? el : reducer
        ),{name:'', power:0, dont:''})
    }


    const generateRunicWord = (runesArr) => {
       const runicWord = {name:'',power:0}
        runesArr.forEach((el,i,arr)=>{
            runicWord.name += el.name
            runicWord.power += el.power
            if (i < arr.length-1) {
                runicWord.name += '-'
            }
        })
        runicWord.power -= runesArr.length
        return runicWord
    }


    const generateRunicWords = (runesCount) => {
        if(typeof runesCount !== 'number') return Error ('Argument is not a number')
        if(runesCount === 0) return Error ('Argument must be > 0')

        let inputRunes = []
        let outputRunicWords = []
        let maxPowerRune;
        let n = 0
        inputRunes = inputRunes.concat(runes)
        do{
            let runicWordArr = []
            for (let i=0; i < runesCount; i++){
                    maxPowerRune = findMostPowerfulRune(inputRunes)
                    inputRunes.splice(inputRunes.indexOf(maxPowerRune),1)
                    runicWordArr[i] = maxPowerRune
            }
            outputRunicWords[n]= generateRunicWord(runicWordArr)
            ++n;
        } while ((inputRunes.length > runesCount) && (n < 10))
        return outputRunicWords
    }


    const checkRunicWord = (runicWord) => {
        if(typeof runicWord !== 'string') return Error ('Argument is not a string')
        
        let inputRunes = []
        let output = 0
        inputRunes = inputRunes.concat(runes)
        runicWordArr = runicWord.split('-')
        for (let i=0; i < runicWordArr.length; i++){
            for (let j=0; j < inputRunes.length; j++){
                if (runicWordArr[i] === inputRunes[j].name ){
                    output += inputRunes[j].power
                }
            }
        }
        output -= runicWordArr.length
        return output
    }


    //---- TEST OUTPUT
    console.log('generateRunicWords: ', generateRunicWords(3))
    console.log('checkRunicWord: ', checkRunicWord('Amn-Jah-Ist'))
    





//------------------ TRASH but still to keep ------------------------------------

// const runes = [
//     {name: "El", power: 28},
//     {name: "Eld", power: 33},
//     {name: "Tir", power: 9},
//     {name: "Nef", power: 7},
//     {name: "Eth", power: 31},
//     {name: "Ith", power: 22},
//     {name: "Tal", power: 8},
//     {name: "Ral", power: 25},
//     {name: "Ort", power: 18},
//     {name: "Thul", power: 13},
//     {name: "Amn", power: 6},
//     {name: "Sol", power: 10},
//     {name: "Shael", power: 17},
//     {name: "Dol", power: 11},
//     {name: "Hel", power: 12},
//     {name: "Io", power: 20},
//     {name: "Lum", power: 32},
//     {name: "Ko", power: 27},
//     {name: "Fal", power: 14},
//     {name: "Lem", power: 26},
//     {name: "Pul", power: 15},
//     {name: "Um", power: 16},
//     {name: "Mal", power: 21},
//     {name: "Ist", power: 4},
//     {name: "Gul", power: 23},
//     {name: "Vex", power: 24},
//     {name: "Ohm", power: 1},
//     {name: "Lo", power: 2},
//     {name: "Sur", power: 30},
//     {name: "Ber", power: 3},
//     {name: "Jah", power: 5},
//     {name: "Cham", power: 29},
//     {name: "Zod", power: 19},
// ]


// const findMostPowerfulRunes = (inputRunes, runesCount) => {
    //     let inputArr = []
    //     let outputRunes = []
    //     let maxPowerRune;
    //     let n = 0
    //     inputArr = inputArr.concat(inputRunes)

    //     do{
    //         let outputArr = []
    //         for (let i=0; i < runesCount; i++){
    //             maxPowerRune = findMostPowerfulRune(inputArr)
    //             inputArr.splice(inputArr.indexOf(maxPowerRune),1)
    //             outputArr[i] = maxPowerRune;
    //         }
    //         outputRunes[n]=outputArr
    //         ++n;
    //         console.log('restInput',inputArr)
    //     } while (inputArr.length > runesCount)
    //     return outputRunes
    // }