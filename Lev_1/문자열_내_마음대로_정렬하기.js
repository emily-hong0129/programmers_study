function solution(strings, n) {
  let answer = [];
  // sort()
  // n번째 문자기준으로 오름차순
  // n번째 문자를 단어마다 앞에 붙임
  
  for(let i = 0; i < strings.length; i++){
      answer.push(strings[i][n] + strings[i])
  }
  answer = answer.sort();
  
  let result = [];
  for(let i = 0; i < answer.length; i++){
      result.push(answer[i].slice(1))
  }
  return result;
}