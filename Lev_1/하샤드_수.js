function solution(x) {  // 12
  let answer = true;
  // x 수를 문자열로 만들고 for문으로 더한다
  let sum = 0;
  let str = x.toString();
  
  for(let i = 0; i < str.length; i++){
      sum += Number(str[i])
  }
  
  if(x % sum === 0){
      return answer;
  }else{
      return false;
  }
}