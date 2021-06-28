function solution(participant, completion) {
  let answer = '';
  // 먼저 요소 정렬
  participant.sort();
  completion.sort();
  
  for (let i = 0; i < participant.length; i++){
      if(participant[i] !== completion[i]){
          answer += participant[i];
          return answer;
      }
  }   
}