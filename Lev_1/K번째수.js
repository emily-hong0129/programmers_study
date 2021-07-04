function solution(array, commands) {
  let answer = [];
  // commands배열안의 배열형태요소 [i, j, k]
  // i -1 부터 j까지의 배열을 만들어 정렬하고
  // k번째들을 찾고 한 배열로 리턴한다
  
  // array => [1, 5, 2, 6, 3, 7, 4]
  for(let i = 0; i < commands.length; i++){    // [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
      // commnads[0] => [2, 5, 3]
      // let newArr = array.slice(commands[i][0] - 1, commands[i][1]).sort()  // newArr: [2, 3, 5, 6]
      let newArr = array.slice(commands[i][0] - 1, commands[i][1]).sort((a,b) => {return a - b});
      
      answer.push(newArr[commands[i][2] - 1])
  }    
  return answer;
}