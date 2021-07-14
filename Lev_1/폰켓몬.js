function solution(nums) {
  let answer = [];
  // N/2 마리 => 6마리에서 3마리
  let a = nums.length / 2
  
  for(let i = 0; i < nums.length; i++){
      if(answer.length < a){
          if(!answer.includes(nums[i])){
              answer.push(nums[i]);
          }
      }
  }
  return answer.length;
}