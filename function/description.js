// function? 함수란 입력값을 받은 후 함수 안의 프로그램에서 특정 작업을 수행하는 것을 뜻합니다.

// 아래 함수에서 x,y,z같이 정의된 값을 인자(parameter)라고 부릅니다.
function func_1(x, y, z) { return x, y, z }
// 아래 함수의 호출에서 1,2,3같이 전달해주는 값을 인수(argument)라고 부릅니다.
func_1(1, 2, 3)

// 일반적인 함수의 실행 흐름은 다음과 같습니다.
/*
1. 호출한 코드에 있는 인수가 함수 정의문의 인자에 대입된다.
2. 함수 정의문의 중괄호 안에 작성된 프로그램이 순차적으로 실행된다.
3. return 문이 실행되면 호출한 코드로 돌아간다. return 문의 값은 함수의 반환값이 된다.
4. return 문이 실행되지 않은 상태로 마지막 문장이 실행되면, 호출한 코드로 돌아간 후에 undefined가 함수의 반환값이 된다.
*/


// 객체의 프로퍼티들 중 아래의 area와 같이 함수를 담고있는 프로퍼티를 메서드라고 한다.

const circle = {
    center: { x: 1.0, y: 2.0 },
    radius: 2.5,
    area: function () {
        return Math.PI * this.radius * this.radius;
    }
};


// 배열의 특정 인덱스의 요소는 대괄호 연산자를 이용해 읽거나 쓸 수 있습니다.
array[3] // 인덱스가 3. 즉 4번 째 요소이다.

7 / 2 // -> 3.5 자바스크립트는 소수점도 가능합니다.