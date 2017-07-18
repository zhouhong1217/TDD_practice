function guessNumTo(usernum,trueNum) {
    // let trueNum = '1234';
    let arrTrue = trueNum.split("");
    console.log(arrTrue);
    let userNum = usernum.split("");
    console.log(userNum);
    let countNum = 0;
    for(let value of arrTrue){
        for(let item of userNum){
            if(value === item){
                countNum++;
            }
        }
    }
    console.log(countNum);
    let countPos = 0;
    for(let i = 0;i < arrTrue.length;i++){
        if(userNum[i] === arrTrue[i]){
            countPos++;
        }
    }
    console.log(countPos);
    return `${countPos}A${countNum-countPos}B`
}
function randomNum() {
    let trueNum = "";
    let i = 0;
    // let randomnum = 0;
    while(i < 4){
        let s = Math.floor(Math.random()*10);
        if(trueNum.indexOf(s) === -1){
            trueNum += s;
            i++;
        }
    }
    console.log(trueNum);
    return trueNum;
}