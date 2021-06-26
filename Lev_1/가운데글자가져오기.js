function solution(s) {
  let  answer = '';
  
  if(s.length % 2 === 1){ // 홀수일때 => 문자1개
    let letter = Math.floor(s.length / 2); // 2
    answer = s[letter];
  }else{ // 짝수일때 => 문자2개
      let letter = Math.floor(s.length / 2) - 1;
      answer = s[letter] + s[letter + 1];
  }

  return answer;
}