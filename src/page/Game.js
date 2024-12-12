import { useEffect, useRef, useState } from 'react';

function Game() {
  const markRef = useRef([]);
  const XXwinRef = useRef(null);
  const OOwinRef = useRef(null);
  const drawImageRef = useRef(null);
  const gameZoneRef = useRef(null);
  const [user, setUser] = useState(true);
  const [timesNum, setTimeNum] = useState(0);
  const [dataArr, setDataArr] = useState(new Array(9).fill(null));
  // 生出一個length:9 全是null的陣列 儲存遊戲資料
  const [p1point, setp1point] = useState(0);// player 1 point
  const [p2point, setp2point] = useState(0);

  const arr = Array.from({ length: 9 }, (_, i) => i + 1);
  // 生出一個length:9 [1~9]的陣列 生成九宮格

  const handleClick = (i) => {
    if (timesNum % 2 === 0) { // timesNum初始為0 0跟偶數是o
      if (markRef.current[i].className === '') {// 如果點的地方還沒被點過
        setUser(false);
        markRef.current[i].className = 'bi bi-circle'// 打o
        setTimeNum(timesNum + 1);
        setDataArr((pre) => {// 在陣列中寫入
          const newArr = [...pre];
          newArr[i] = 'o';
          return newArr;
        })
      }
    } else {
      if (markRef.current[i].className === '') {
        setUser(true);
        markRef.current[i].className = 'bi bi-x-lg text-white'// 打x
        setTimeNum(timesNum + 1);
        setDataArr((pre) => {
          const newArr = [...pre];
          newArr[i] = 'x';
          return newArr;
        })
      }
    }
  }
  const reStart = () => {
    for (let i = 0; i < markRef.current.length; i++) {
      markRef.current[i].className = ''; // 清空遊戲畫面
      dataArr[i] = null; // 還原遊戲資料
      setTimeNum(0);// 還原玩家計數器
    }
    XXwinRef.current.style.display = 'none';
    OOwinRef.current.style.display = 'none';
    drawImageRef.current.style.display = 'none';
    // 把3種遊戲結果畫面隱藏 秀出遊戲主畫面
    gameZoneRef.current.style.display = 'flex';
    setUser(true);
  }

  useEffect(() => {
    const checkWin = (indices) => {// 檢查是否有玩家獲勝
      const [a, b, c] = indices; // 勝利的索引位置
      if (dataArr[a] === 'o' && dataArr[b] === 'o' && dataArr[c] === 'o') {
        // 索引位置皆為o或x勝出 秀出該玩家勝利畫面
        OOwinRef.current.style.display = 'flex';
        gameZoneRef.current.style.display = 'none';
        drawImageRef.current.style.display = 'none';
        setp1point(p1point + 1);// 計分
        localStorage.setItem("p1point", p1point + 1);// 存在localStorage
        return true; // 有玩家勝出就中止檢索
      } else if (dataArr[a] === 'x' && dataArr[b] === 'x' && dataArr[c] === 'x') {
        XXwinRef.current.style.display = 'flex';
        gameZoneRef.current.style.display = 'none';
        setp2point(p2point + 1);
        localStorage.setItem("p2point", p2point + 1);
        return true;
      } else {
        if (timesNum === 9) {// 九格畫滿無人勝出即為平手          
          drawImageRef.current.style.display = 'flex';// 秀平手畫面 隱藏遊戲畫面
          gameZoneRef.current.style.display = 'none';
        };
      }
    }
    const winPatterns = [// 規則 以下位置以相同圖案連線即為勝利
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (const pattern of winPatterns) {
      if(checkWin(pattern)){//  有人贏 checkWin會return true 終止檢索
        return;
      }
    }
  }, [dataArr]);



  useEffect(() => {
    setp1point(parseInt(localStorage.getItem("p1point")) || 0);
    setp2point(parseInt(localStorage.getItem("p2point")) || 0);
    // 一開始直接讀取存在localStorage的玩家分數
  }, [])






  return (
    <div className=""
      style={{
        backgroundColor: '#FF6D70',
      }}
    >
      <div className='d-grid'
      >
        <div className="d-flex justify-content-center align-items-end"
          style={{
            marginTop: '9px',
          }}
        >
          <div className='x-box d-flex justify-content-center align-items-center'
            style={{
              backgroundColor: (user ? 'black' : '#ED494C') // 使用者交換 輪到誰 就是#ED494C 
            }}
          >
            <i className="bi bi-x"
              style={{
                fontSize: '64px',
                color: 'white'
              }}
            ></i>
          </div>
          <div className='point-bar d-flex justify-content-center align-items-center'>
            <div className="point-box d-flex justify-content-center align-items-center">
              {p2point}
            </div>
          </div>
          <div className="black-box d-flex justify-content-center align-items-center">
            vs
          </div>
          <div className='point-bar d-flex justify-content-center align-items-center'>
            <div className="point-box d-flex justify-content-center align-items-center">
              {p1point}
            </div>
          </div>
          <div className='o-box d-flex justify-content-center align-items-center'
            style={{
              backgroundColor: (user ? ' #ED494C' : ' black')
            }}
          >
            <i className="bi bi-circle"
              style={{
                fontSize: '36px',
                color: 'white'
              }}
            ></i>
          </div>

        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center' >
        <div className={`your-turn d-flex 
        align-items-center`}
          style={{
            width: '540px',
            justifyContent: (user ? 'end' : 'start') // 切換your turn 顯示位置
          }}
        >
          YOUR TURN!
        </div>
      </div>
      <div className='gameZone  justify-content-center align-items-center'
        ref={gameZoneRef}
        style={{
          marginTop: '24.5px',
          display: 'flex'
        }}>
        <div className="game-zone p-0"
        >
          <div className="row g-0  ">
            {arr.map((_, i) => {// 生成九宮格
              return (
                <div key={i} className="
                game-col
                inside-border d-flex justify-content-center align-items-center"

                  onClick={() => handleClick(i)}
                >
                  <div className='mark-zone d-flex justify-content-center align-items-center'

                  >
                    <i 
                      style={{
                        fontSize: '64px'
                      }}
                      ref={(e) => {
                        markRef.current[i] = e;
                        return markRef.current[i];
                      }}
                    >

                    </i>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='XXwin  justify-content-center align-items-center'
        ref={XXwinRef}
        style={{
          marginTop: '24.5px',
          display: 'none'
        }}
      >
        <div className="win-image-x d-flex justify-content-center align-items-center">

          <div className='win-image-x-left '
          >
          </div>
          <div className='win-image-x-right '
          >
          </div>
          <div className='winner'>
            WINNER!
          </div>

        </div>
      </div>
      <div className='OOwin  justify-content-center align-items-center'
        ref={OOwinRef}
        style={{
          marginTop: '24.5px',
          display: 'none'
        }}
      >
        <div className="win-image-o d-flex justify-content-center align-items-center">

          <div className="back-image-o d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: '#ED494C',
              borderRadius: '100%',
              position: 'absolute'
            }}
          >
            <div
              style={{
                height: '85%',
                width: '85%',
                borderRadius: '100%',
                backgroundColor: '#FF6D70'
              }}>

            </div>

          </div>
          <div className='winner'>
            WINNER!
          </div>

        </div>
      </div>
      <div className='drawImage  justify-content-center align-items-center'
        ref={drawImageRef}
        style={{
          marginTop: '24.5px',
          display: 'none'
        }}
      >
        <div className="draw-box d-flex justify-content-center align-items-center">

          <div className='draw-image-x-left '
          >
          </div>
          <div className='draw-image-x-right '
          >
          </div>
          <div className="draw-image-o-outside d-flex justify-content-center align-items-center"
          >
            <div className="draw-image-o-inside">
            </div>

          </div>
          <div className='draw'>
            DRAW! DRAW! DRAW!
          </div>

        </div>
      </div>

      <div className=" d-flex justify-content-center align-items-center">
        <div className='restart-btn d-flex justify-content-center align-items-center'
          onClick={reStart}
        >
          RESTART
        </div>
      </div>

    </div>
  )
}

export default Game