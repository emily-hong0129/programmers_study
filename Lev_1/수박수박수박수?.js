function solution(n) {
  // n을 2로나눈 몫 만큼 곱하고 나머지가 있으면 '수' 더해라.
  // 1 수
  // 2 수박
  // 3 수박수
  let answer = '';
	let word = '수박';

	// n이 홀수일 때
	if(n % 2 === 1){
			// n = Math.floor(n / 3);  // 7/3 = 2.333333 => 2
			answer = word.repeat(Math.floor(n/2)) + '수';
	}

	// n이 짝수일 때
	if(n % 2 === 0){
			for(let i = 0; i < n/2; i++){
					answer += word;
			}
	}
	return answer;
}
