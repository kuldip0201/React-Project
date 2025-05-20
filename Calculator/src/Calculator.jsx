import React, { useState, useRef, useEffect } from 'react'

const Calculator = () => {
    const [data, setData] = useState("");
    const inputRef = useRef(null); 

    useEffect(() => {
        inputRef.current.focus(); 
    }, []);

    const getValue = (event) => {
        console.log(event.target.value);
        setData(data.concat(event.target.value))
    }

    const calculation = () => {
        setData(eval(data).toString())
        // eval is a javascript function that can be used to calculate to string expression
        // .toString() that can be used to continue calculation 
    }

    const back = () => {
        setData(data.slice(0, -1))
        // .slice can help remove last character from string
    }

    const clear = () => {
        setData("")
    }
     
    // it can help to make a input with keybord 
    const handleKeyDown = (event) => {
        const key = event.key;
        if (/[0-9+\-*/%.()]/.test(key)) {
            setData(prev => prev + key);
        } else if (key === 'Enter') {
            calculation();
        } else if (key === 'Backspace') {
            back();
        } else if (key === 'Escape') {
            clear();
        }
    }

    return (
        <>
            <div className="container">
                <input
                    ref={inputRef} 
                    placeholder="0"
                    value={data}
                    onKeyDown={handleKeyDown}
                    onChange={() => { }} // dummy change to avoid warning
                />
                <br /><br />

                <button onClick={getValue} value="(">(</button>
                <button onClick={getValue} value=")">)</button>
                <button onClick={getValue} value="%">%</button>
                <button onClick={clear} value="AC">AC</button>

                <button onClick={getValue} value="7">7</button>
                <button onClick={getValue} value="8">8</button>
                <button onClick={getValue} value="9">9</button>
                <button onClick={getValue} value="*">*</button>

                <button onClick={getValue} value="4">4</button>
                <button onClick={getValue} value="5">5</button>
                <button onClick={getValue} value="6">6</button>
                <button onClick={getValue} value="-">-</button>

                <button onClick={getValue} value="1">1</button>
                <button onClick={getValue} value="2">2</button>
                <button onClick={getValue} value="3">3</button>
                <button onClick={getValue} value="+">+</button>

                <button onClick={getValue} value="0">0</button>
                <button onClick={back} value="Back">Back</button>
                <button onClick={calculation} value="=">=</button>
                <button onClick={getValue} value="/">/</button>
            </div>
        </>
    )
}

export default Calculator
