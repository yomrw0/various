function* generator() {
    yield 1;
    yield '2';
    yield [3];
    yield {4:4};
    return 5;
}

let gen = generator()

// let one = gen.next()
// let two = gen.next()
// 중간에 gen.next()를 이용하여 순차적으로 yield값을 가져올수 있다.
// yield값을 가져온 뒤 for문을 사용하면 중간에 가져간 값 외의 값이 나온다.

for(let value of gen) {
    console.log(value)
}
