class T1  {
    constructor(name, lane, age) {
        this.name = name;
        this.lane = lane;
        this.age = age;
    }

    practice() {
        alert("솔랭을 한다..")
    }

    scrim() {
        alert("연습경기를 한다.")
    }

    hobby() {
        alert("다른게임을 한다.")
    }
}

class T1Challengers extends T1 {
    constructor(name, lane, age) {
      super(name, lane, age); // 부모의 생성자를 호출한다.
      super.hoddy(); // 부모의 클래스에 있는 hobby 함수를 호출한다.
    }
}