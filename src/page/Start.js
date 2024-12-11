import '../App.css'
import { Link } from 'react-router'

function Start() {
  return (
    <div className='all bg-black d-grid'>
      <div className='d-flex  justify-content-center align-items-center'
      >
        <div className='start'
        >
          <div className="row g-0">
            <div className="col bg-black d-flex justify-content-center align-items-center ">
              <div className='text-box d-flex justify-content-center align-items-center'>
                TIC
              </div>
            </div>
            <div className="mid-margin col bg-black d-flex justify-content-center align-items-center"
              style={{
                aspectRatio: "1/1",
                width: '100%',
              }}
            >
              <div className=" d-flex justify-content-center align-items-center"
                style={{
                  height: '75%',
                  width: '75%',
                  backgroundColor: '#ED494C',
                  borderRadius: '100px'
                }}
              >
                <div
                  style={{
                    height: '75%',
                    width: '75%',
                    borderRadius: '100px',
                    backgroundColor: 'black'
                  }}>

                </div>

              </div>
            </div>
            <div className="col">
              <div className="bg-black d-flex justify-content-center align-items-center"
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'relative'
                }}
              >
                <div className='left-border-white d-flex justify-content-center align-items-center'>
                </div>
                <div className='right-border-white d-flex justify-content-center align-items-center'
                >
                </div>
                <div className="inside-right-border">
                </div>
                <div className="inside-left-border ">
                </div>

              </div>
            </div>
          </div>
          <div className="row g-0"
            style={{
              marginTop: '30px'
            }}
          >
            <div className="col">
              <div className=" bg-black d-flex justify-content-center align-items-center"
                style={{
                  aspectRatio: "1/1",
                  width: '100%',
                  position: 'relative',
                }}
              >
                <div className='left-border '
                >
                </div>
                <div className='right-border d-flex justify-content-center align-items-center'
                >

                </div>

              </div>
            </div>
            <div className="mid-margin col bg-black d-flex justify-content-center align-items-center"
              style={{
                width: '100%',
              }}
            >
              <div className='text-box d-flex justify-content-center align-items-center'>
                TAC
              </div>
            </div>
            <div className="col bg-black d-flex justify-content-center align-items-center"
              style={{
                aspectRatio: "1/1",
                width: '100%',
              }}
            >
              <div className='d-flex justify-content-center align-items-center'
                style={{
                  height: '75%',
                  width: '75%',
                  borderRadius: '100px',
                  border: '4px #FF6D70 solid'
                }}
              >
                <div
                  style={{
                    height: '75%',
                    width: '75%',
                    borderRadius: '100px',
                    border: '4px #FF6D70 solid'
                  }}
                >

                </div>

              </div>

            </div>
          </div>
          <div className="row g-0"
            style={{
              marginTop: '30px'
            }}
          >
            <div className="col bg-black d-flex justify-content-center align-items-center"
              style={{
                aspectRatio: "1/1",
                width: '160px'
              }}
            >
              <div className='d-flex justify-content-center align-items-center'
                style={{
                  height: '75%',
                  width: '75%',
                  borderRadius: '100px',
                  border: '4px #FF6D70 solid'
                }}
              >
                <div
                  style={{
                    height: '75%',
                    width: '75%',
                    borderRadius: '100px',
                    border: '4px #FF6D70 solid'
                  }}
                >

                </div>

              </div>

            </div>
            <div className="mid-margin col"
              style={{
                aspectRatio: "1/1",
                width: '160px',
                position:"relative",
              }}
            >
              <div className='left-border '
              >
              </div>
              <div className='right-border d-flex justify-content-center align-items-center'
              >
              </div>
            </div>
            <div className="col bg-black d-flex justify-content-center align-items-center"
            >
              <div className='text-box d-flex justify-content-center align-items-center'>
                TOE
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center'
      >
        <Link to='game'
        >
          <button className='start-btn'>START</button>
        </Link>
      </div>
    </div>
  )
}

export default Start