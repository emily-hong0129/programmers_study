function solution(n) {  // 12345
  let answer = [];
  let str = n.toString(); // "12345"
  let arr = str.split("").reverse();  // ["5", "4", "3", "2", "1"]
  
  for(let i = 0; i < arr.length; i++){
      answer.push(Number(arr[i]));
  }
  
  return answer;
}