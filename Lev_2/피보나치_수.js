function solution(n) {
  let answer = 0;
  let arr = [];
  
  arr[0] = 0;
  arr[1] = 1;
  
  for(let i = 2; i <= n; i++){
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567  ;
  }
  
  answer = arr[n];
  return answer;
}