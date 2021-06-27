process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    //                 5                3
    let str = '';   // 빈문자열에 별을 입력수만큼 넣음
    let count = 0;
    
    for(let i = 0; i < b; i++){
        for(let j = 0; j < a; j++){
            str += "*";
        }
        str += "\n";
    }
    console.log(str);

});