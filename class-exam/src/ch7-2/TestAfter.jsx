import React, {useMemo, useState} from "react";

const TestAfter = () => {
    const [imNum, setImNum] = useState(0)
    const [count, setCount] = useState(0)

    const increase = () => {
        console.log("click 추가 버튼")
        setCount(count+1)
    }

    //오래 걸리는 작업 useMemo 적용
    const calcComValue = useMemo(() => {
        console.log("복잡한 계산 중...")
        return (imNum + 3 * 7 * 99999*9999999)/0.123456
    },[imNum])

    return (
        <div className="App">
            <p>count : {count}</p>
            <button onClick={increase}>
                +1 추가
            </button>
            <p>복잡한 연산 결과값 : {calcComValue}</p>
        </div>

    )
};

export default TestAfter;