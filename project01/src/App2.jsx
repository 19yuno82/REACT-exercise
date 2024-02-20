const App2 = ()=>{
    /*
    (1) 사용자에게 이름을 입력받는다
    (2) 현재 날짜를 가지고 온다
    (3) 조건에 따라 계절을 판별한다
        3~5월 봄
        6~8월 여름
        9~11월 가을
        12~2월 겨울
    (4) 형태에 맞춰서 화면에 보여준다
    <h1>YYYY년 MM월 DD일</h1>
    <hr>
    <h2>OOO님 지금은 OO입니다</h2>
    */
   var inputName = prompt("이름을 입력하세요");
    //console.log(inputName);
    const getCurrentDate=()=>{
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth()+1; //0~11로 반환되기 때문에 +1
        const day = today.getDate();

        //return year+'년'+month+'월'+day+'일';
        return `${year}년 ${month}월 ${day}일`;
    };

    // console.log(getCurrentDate());

    const getSeason=()=>{
        const currentMonth = new Date().getMonth()+1;
        if(currentMonth >= 3 && currentMonth <= 5) {
            return '봄';
        } else if(currentMonth >= 6 && currentMonth <= 8) {
            return '여름';
        } else if(currentMonth >= 9 && currentMonth <= 11) {
            return '가을';
        } else {
           return '겨울';
        }
    };

    // console.log(getSeason());

    return(
        <div>
            <h1>{getCurrentDate()}</h1>
            <hr/>
            <h2>{inputName}님 지금은 {getSeason()} 입니다. </h2>
        </div>
    )
}

export default App2;