function telValidator(str) {
    let strLengthWithNumbers = str.length
    let strLengthWithoutNumbers = str.replace(/[0-9]/g, "").length
    let strArray = str.split("")
    let lengthDifference = strLengthWithNumbers - strLengthWithoutNumbers
    let strArrayX = []

    if (lengthDifference < 11) {
        for (let i = 0; i < strArray.length; i++) {
            let newElement = strArray[i].replace(/[0-9]/g, "X");
            strArrayX.push(newElement)
        }
    }
    else if (lengthDifference >= 11) {
        let firstElement = strArray[0]
        strArrayX.push(firstElement)
        for (let i = 1; i < strArray.length; i++) {
            let newElement = strArray[i].replace(/[0-9]/g, "X");
            strArrayX.push(newElement)
        }
    }

    let goodFormats = [
        "555-555-5555",
        '(555)555-5555',
        '(555) 555-5555',
        '555 555 5555',
        '5555555555',
        '1 555 555 5555',
        "555-555-5555",
        "1 555-555-5555",
        "1 (555) 555-5555",
        "5555555555",
        "555-555-5555",
        "(555)555-5555",
        "1(555)555-5555",
        "1 555 555 5555",
        "1 456 789 4444"
    ]
    let goodFormatsX = []
    let firstCharacter = ""
    let newString = ""

    for (let i = 0; i < goodFormats.length; i++) {
        let lengthWithNumbers = goodFormats[i].length
        let lengthWithoutNumbers = goodFormats[i].replace(/[0-9]/g, "").length
        let lengthDifference = lengthWithNumbers - lengthWithoutNumbers

        if (lengthDifference < 11) {
            newString = goodFormats[i] = goodFormats[i].replace(/[0-9]/g, "X");
            goodFormatsX.push(newString)
            newString = ""
        }

        else if (lengthDifference >= 11) {
            goodFormats[i] = goodFormats[i].replace(/[0-9]/g, "X");
            newString = goodFormats[i].replace(goodFormats[i][0], "1")
            goodFormatsX.push(newString)
            newString = ""
            //console.log(goodFormats)
        }
    }

    //console.log(goodFormatsX)

    //console.log(strLengthWithNumbers)
    //console.log(strLengthWithoutNumbers)
    //console.log(lengthDifference)
    //console.log(strArray)
    //console.log(strArrayX)
    //console.log(goodFormats)

    let goodFormatsXArray = [];

    for (let i = 0; i < goodFormatsX.length; i++) {
        goodFormatsXArray.push(goodFormatsX[i].split(""))
    }
    //console.log(goodFormatsXArray[6])
    //console.log("----------------")
    //console.log(strArrayX)
    //let result = ''

    for (let i = 0; i < goodFormatsXArray.length; i++) {

        if (goodFormatsXArray[i].join() === strArrayX.join()) {
            //result = true
            //console.log(result)
            return true
        }
    }
    return false
}

telValidator("555-555-5555");
