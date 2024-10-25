import React, { useRef, useState } from 'react'
import './TicTokToe.css'
import circle_icon from '../Assetes/circle.png'
import cross_icon from '../Assetes/cross.png'



const TicTokToe = () => {
    let data = ["","","","","","","","",""]
    let [count, setCount] = useState(0)
    let [lock, setLock] = useState(false)
    let titleRef = useRef(null)

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }
        if ((count%2) === 0) {
            e.target.innerHTML = `<img src='${circle_icon}' alt="" />`
            data[num] = "X"
            setCount(++count)
        }
        else{
            e.target.innerHTML = `<img src="${cross_icon}" alt="" />`
            data[num] = "O"
            setCount(++count)
        }
        checkWin()
    }

    const  checkWin = () => {
        if (data[0]===data[1]&&data[1]===data[2]&&data[2]!=="") {
            won(data)
        }
        else if (data[3]===data[4]&&data[4]===data[5]&&data[5]!=="") {
            won(data)
        }
        else if (data[6]===data[7]&&data[7]===data[8]&&data[8]!=="") {
            won(data)
        }
        else if (data[0]===data[3]&&data[3]===data[6]&&data[6]!=="") {
            won(data)
        }
        else if (data[1]===data[4]&&data[4]===data[7]&&data[7]!=="") {
            won(data)
        }
        else if (data[2]===data[5]&&data[5]===data[8]&&data[8]!=="") {
            won(data)
        }
        else if (data[0]===data[4]&&data[4]===data[8]&&data[8]!=="") {
            won(data)
        }
        else if (data[2]===data[4]&&data[4]===data[6]&&data[6]!=="") {
            won(data)
        }


    }


    const won = (winner) => {
        setLock(true)
        if (winner === "X") {
            titleRef.current.innerHTML = `Congratulations: <img src="${cross_icon}`
        }
        else{
            titleRef.current.innerHTML = `Congratulations: <img src="${circle_icon}`
        }
    }

    const box1 = useRef(null)
    const box2 = useRef(null)
    const box3 = useRef(null)
    const box4 = useRef(null)
    const box5 = useRef(null)
    const box6 = useRef(null)
    const box7 = useRef(null)
    const box8 = useRef(null)
    const box9 = useRef(null)

    const box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

    const reset = () => {
        setLock(false)
        setCount(0)
        titleRef.current.innerHTML = "Tic Tok Toe Game In React"
        data = ["","","","","","","","",""]
        box_array.map((item) => {
            item.current.innerHTML = ""
        })

    }

    

  return (
    <div className='container'>
        <h1 ref={titleRef} className="title">Tic Tok Toe Game In <span>React</span></h1>
        <div className="board">
            <div className="row1">
                <div ref={box1} className="boxes" onClick={(e) => {toggle(e, 1)}}></div>
                <div ref={box2} className="boxes" onClick={(e) => {toggle(e, 2)}}></div>
                <div ref={box3} className="boxes" onClick={(e) =>{ toggle(e, 3)}}></div>
            </div>
            <div className="row2">
                <div ref={box4} className="boxes" onClick={(e) => {toggle(e, 4)}}></div>
                <div ref={box5} className="boxes" onClick={(e) => {toggle(e, 5)}}></div>
                <div ref={box6} className="boxes" onClick={(e) => {toggle(e, 6)}}></div>
            </div>
            <div className="row3">
                <div ref={box7} className="boxes" onClick={(e) => {toggle(e, 7)}}></div>
                <div ref={box8} className="boxes" onClick={(e) => {toggle(e, 8)}}></div>
                <div ref={box9} className="boxes" onClick={(e) => {toggle(e, 9)}}></div>
            </div>
        </div>
        <button className="reset" onClick={() => {reset()}}>Reset</button>
    </div>
  )
}

export default TicTokToe