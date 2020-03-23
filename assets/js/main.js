let data = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


function transcription() {
    let x = ""
    let input = document.getElementById("text").value
    let input1 = input.toLowerCase()
    let input2 = input1.split("")
    let key = document.getElementById("key").value * 1
    let i
    let j
    let k
    let n

    for (j = 0; j < input2.length; j++) {
        for (i = 0; i < data.length; i++) {
            if (input2[j] == data[i]) {
                function radio() {
                    if (document.getElementById("decoder").checked) {
                        k = i + key
                        n = i + key - data.length
                        if (k < data.length) {
                            x += `${data[k].toUpperCase()}`
                        } else {
                            x += `${data[n].toUpperCase()}`
                        }
                    } else {
                        k = i - key
                        n = i - key + data.length
                        if (k >= 0) {
                            x += `${data[k].toUpperCase()}`
                        } else {
                            x += `${data[n].toUpperCase()}`
                        }
                    }
                }
                radio()

            }
        }
    }
    document.getElementById("result").innerHTML = x

}
transcription()
