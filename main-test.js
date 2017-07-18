
describe('guess number',() =>{
    // it('guess all num and all position,should print', () => {
    //     let usernum = '1234';
    //     let trueNum = randomNum();
    //     let result = '4A0B';
    //     expect(guessNumTo(usernum,trueNum)).toEqual(result);
    // });
    // it('guess 2 num and 2 position,should print', () => {
    //     let usernum = '1243';
    //     let trueNum = randomNum();
    //     let result = '2A2B';
    //     expect(guessNumTo(usernum,trueNum)).toEqual(result);
    // });
    // it('guess 1 num and 3 position,should print', () => {
    //     let usernum = '1423';
    //     let trueNum = randomNum();
    //     let result = '1A3B';
    //     expect(guessNumTo(usernum,trueNum)).toEqual(result);
    // });
    // it('guess no num and no position,should print', () => {
    //     let usernum = '6789';
    //     let trueNum = randomNum();
    //     let result = '0A0B';
    //     expect(guessNumTo(usernum,trueNum)).toEqual(result);
    // });
    // it('guess no num and no position,should print', () => {
    //     let usernum = '1789';
    //     let trueNum = randomNum();
    //     let result = '1A0B';
    //     expect(guessNumTo(usernum,trueNum)).toEqual(result);
    // });
    it('trueNum,should print', () => {
        let trueNum = randomNum();
        expect(typeof trueNum == 'string').toEqual(true);
    });
    it('trueNum,should print', () => {
        let trueNum = randomNum();
        let arrTrue = trueNum.split("");
        function toExp(arrTrue) {
            for(let i = 0;i < arrTrue.length;i++){
                if(arrTrue[i] == arrTrue[i+1]){
                    return false;
                }else {
                    return true;
                }
            }
        }
        expect(toExp(arrTrue)).toEqual(true);
    });
});