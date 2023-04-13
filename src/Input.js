import React, { useEffect } from 'react'

const Input = ({ windowSize, commoninputSize, maxRow }) => {
    const data = [
        {
            key: "input",
            value: "input",
            InputType: "text",
        },
        {
            key: "input",
            value: "input",
            InputType: "text",
        },
        {
            key: "desc1",
            value: "desc",
            InputType: "textarea",
        },
        {
            key: "desc1",
            value: "desc",
            InputType: "textarea",
        },
        {
            key: "input",
            value: "input",
            InputType: "text",
        },
        {
            key: "desc1",
            value: "desc",
            InputType: "textarea",
        },
        {
            key: "input",
            value: "input",
            InputType: "textarea",
        },
        {
            key: "input",
            value: "input",
            InputType: "textarea",
        },
        {
            key: "input",
            value: "input",
            InputType: "text",
        },
        
        {
            key: "input",
            value: "input",
            InputType: "text",
        },
        {
            key: "desc1",
            value: "desc",
            InputType: "textarea",
        },
        {
            key: "input",
            value: "input",
            InputType: "text",
        },
        {
            key: "desc3",
            value: "desc",
            InputType: "textarea",
        },
        {
            key: "input",
            value: "input",
            InputType: "text",
        },
        {
            key: "input",
            value: "input",
            InputType: "text",
        },
        
        {
            key: "input",
            value: "input",
            InputType: "text",
        },
        {
            key: "desc3",
            value: "desc",
            InputType: "textarea",
        },
        {
            key: "input",
            value: "input",
            InputType: "text",
        },
        {
            key: "input",
            value: "input",
            InputType: "text",
        },
        {
            key: "input",
            value: "input",
            InputType: "text",
        },
        {
            key: "input",
            value: "input",
            InputType: "text",
        },
        {
            key: "desc",
            value: "desc",
            InputType: "text",
        },
    ]

    let desc = false;
    let lastDescIndex = 0;
    let inputLength = 0;
    let lastRowInput = 0;
    let lastInputSize = 0;
    data.forEach((val, i) => {
        if (val.value === "input") inputLength++;
        else {
            desc = true
        }
    });

    const renderCorrectInput = (index) => {
        if (lastDescIndex !== 0) {
            lastDescIndex++
        }
        if ((index - lastDescIndex) % maxRow !== 0) {
            let rem = (index - lastDescIndex) % maxRow;
            lastDescIndex = index;
            lastRowInput = ((data.length - lastDescIndex) % maxRow)-1;
            lastInputSize = windowSize / lastRowInput;
            for (let j = index - 1; j >= index - rem; j--) {
                // console.log("j :" + j + " rem :" + rem + " index :" + index)
                let element = document.getElementById(j);
                if (element) element.classList.add("input" + rem)
            }
        }
    }
    if(!desc) {
        lastRowInput = ((data.length - lastDescIndex) % maxRow);
        lastInputSize = windowSize / lastRowInput;
    }
    
    const setStyles = (i) => {
        let styles = {}
        let index = data.length - lastRowInput;
        // console.log("i " + i + " index :" + index)
        if (index < i+1 ) {
            styles = { width: lastInputSize }
        }
        return styles;
    }

    return (
        <div className='form' style={{ width: windowSize }}>
            {
                data.map((val, i) => (
                    <>
                        {val.value === "input" &&
                            <div key={i}
                                id={i}
                                className={`form__single `}
                                style={setStyles(i)}
                            >
                                <label>{val.key}</label>
                                <input
                                    style={setStyles(i)}
                                    type={val.InputType} />
                            </div>
                        }
                        {val.value !== "input" && renderCorrectInput(i)}
                        {val.value !== "input" &&
                            <div id={i} className='textarea'>
                                <label>{val.key}</label>
                                <textarea></textarea>
                            </div>
                        }
                    </>
                ))
            }
        </div>
    )
}

export default Input
