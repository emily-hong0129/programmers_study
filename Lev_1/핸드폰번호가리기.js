function solution(phone_number) {   // '12345678'
    let answer = '';
    let end = phone_number.slice(-4, phone_number.length);  // 5678
    
    for(let i = 0; i < phone_number.length - 4; i++){
        answer += '*';
    }
    answer += end;
    return answer;
}