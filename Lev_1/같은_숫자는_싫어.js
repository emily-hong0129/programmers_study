function solution(arr){ // [1,1,3,3,0,1,1]
  let answer = [];    // 배열
  answer.push(arr[0])
  // for문으로 반복하며 연속 숫자 비교하기
  // answer의 마지막 요소와 arr[i] 비교
  for(let i = 1; i < arr.length; i++){
      if(arr[i - 1] !== arr[i]){
          answer.push(arr[i]);
      }
  }
  return answer;
}
/*
[1, 1, 3, 3, 0, 1, 1]
[1, 3, 0, 1]
*/