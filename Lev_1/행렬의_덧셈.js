function solution(arr1, arr2) {
  let answer = [];
  
  for(let i = 0; i < arr1.length; i++){
      answer[i] = []; // 더한 결과를 담을 배열
      for(let j = 0; j < arr1[i].length; j++){
          answer[i][j] = arr1[i][j] + arr2[i][j]
      }
  }
  return answer;
}