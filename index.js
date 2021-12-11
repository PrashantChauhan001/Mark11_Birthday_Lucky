const getDateSum = () => {
    const dob = document.getElementById("dob").value;
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        let x = parseInt(dob[i])
        if (!isNaN(x)) sum += x;
    }
    return sum
}

const isLucky = () => {
    const lnum = parseInt(document.getElementById("lnum").value),
        sum = getDateSum(),
        ot_txt = document.getElementById("ot_txt");
    if (!lnum || !document.getElementById("dob").value) {
        ot_txt.innerText = "Please fill empty field"
        ot_txt.style.color = "red"
    }
    else if ((sum % lnum) === 0) {
        ot_txt.innerText = "Hurray, your number is the lucky one for you..."
        ot_txt.style.color = "green"
    } else {
        ot_txt.innerText = "OOPS, your number is not that lucky for you."
        ot_txt.style.color = "orange"
    }
}

document.getElementById("btn").addEventListener("click", () => isLucky())