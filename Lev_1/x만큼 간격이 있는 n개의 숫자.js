// x : 증가하는 숫자
// n : 배열의 요소 개수
function solution(x, n) {   // 2, 5
  let answer = [];
  let xnum = x;
  
  for(let i = 0; i < n; i++){
      answer.push(x);
      x += xnum
  }
  return answer;
}