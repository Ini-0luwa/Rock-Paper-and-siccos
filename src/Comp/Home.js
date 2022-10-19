import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";

const Home = ({name}) => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [animation, setAnimation] = useState("")
  // const [animation, setAnimation] = useState("initialState")
  // const [playerChoice, setPlayerChoice] = useState("");
  const [compChoice, setCompChoice] = useState("")
  const [commentry, setCommentry] = useState("hi")
  const [id, setId] = useState(0)
  const [choice, setChoice] = useState("");
  const [choice2, setChoice2] = useState("");
  let [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [score, setScore] = useState(0);
  const [score2, setScore2] = useState(0);
  const comChoice = Math.floor(Math.random() * 3);
  // console.log(computerNum());
  const controlAnime = () => {
    setAnimation("shake");
    // setTimeout(() => {
    //   clearInterval(id);
    //   setAnimation("");
    //   // setState(false);
    // }, 4000)
  }
  const siccos = () => {
    setTimeout(() => {
      setChoice("siccos");
    }, 4000)
      Play();
      setId(setTimeout(controlAnime, 1000));
      clear();
  };
  const clear = () => {
    setTimeout(() => {
      setAnimation("");
      clearTimeout(id);
      // setPlayerChoice("")
      setTimeout(() => {
        // console.log(compChoice, "hello");
        setState(false);
        setChoice("");
        setCompChoice("");
      }, 3000)
    }, 4000)
  }
  const rock = () => {
    // Play()
    setTimeout(() => {
      setChoice("rock");
    }, 4000)
      Play();
      setId(setTimeout(controlAnime, 1000));
      clear();
  };
  const paper = () => {
    setTimeout(() => {
      setChoice("paper");
    }, 4000)
      Play();
      setId(setTimeout(controlAnime, 1000));
      clear();
  };
  const updateHandler = () => {
      setTimeout(() => {
        if (choice.length > 0 && choice2.length > 0) {
          // console.log(choice, "and", choice2); 
          if (choice === choice2) {
            setCommentry("Draw !")
            setTimeout(() => {
              setCommentry("")
            }, 3000);
          } else if(choice === "paper" && choice2 === "rock"){
            setCommentry(`${name} wins !!!`)
            // setUserScore((a) => a + 1);
            setScore(true);
            setTimeout(() => {
              setCommentry("")
              setScore(0);
            }, 3000);
          } else if(choice === "rock" && choice2 === "siccos"){
              setCommentry(`${name} wins !!!`)
              // setUserScore((a) => a + 1);
              setScore(true);
              setTimeout(() => {
                setCommentry("")
                setScore(0)
              }, 3000); 
          }else if(choice === "siccos" && choice2 === "paper"){
            setCommentry(`${name} wins !!!`)
            // setUserScore((a) => a + 1);
            setScore(true);
            setTimeout(() => {
              setScore(0);
              setCommentry("")
            }, 3000); 
          }else if(choice2 === "paper" && choice === "rock"){
            setCommentry("Computeer wins !!!");
            // setCompScore((a) => a + 1);
            setScore2(true)
            // setCompScore(compScore - 1);
            setTimeout(() => {
              setScore2(0);
              setCommentry("");
            }, 3000);
          } else if(choice2 === "rock" && choice === "siccos"){
            setCommentry("Computeer wins !!!");
            // setCompScore(compScore + 1);
            // setCompScore((a) => a + 1);
            setScore2(true);
            // setCompScore(compScore - 1);
            setTimeout(() => {
              setScore2(0)
              setCommentry("");
            }, 3000);
          } else if(choice2 === "siccos" && choice === "paper"){
            setCommentry("Computeer wins !!!");
            // setCompScore(compScore+1);
            // setCompScore((a) => a + 1);
            setScore2(true);
            // setCompScore(compScore-1);
            setTimeout(() => {
              setCommentry("");
              setScore2(0);
            }, 3000);
          }
        }
      }, 2000)
  };
  // console.clear();
  // console.log(score, "score");
  const updateScores = () => {
    if(score){
      setUserScore((a) => a + 1);
    }
    else if(userScore === 5 && userScore < 6){
      setCommentry("You Win !!");
      setTimeout(() => {
        setCommentry("");
        navigate("/");
      }, 3000)
    }
  };
  useEffect(() => {
    updateScores();
  }, [score]);
  const updateScores2 = () => {
    if (score2) {
      setCompScore((a) => a + 1);
    } else if(compScore === 5 && compScore < 6){
      setCommentry("You Lose try again !!");
      setTimeout(() => {
        setCommentry("");
        navigate("/");
      }, 3000)
    }
  };
  useEffect(() => {
    updateScores2();
  }, [score2])
  const welcomeMessage = () => {
      setTimeout(() => {
        setCommentry(`Welcome ${name} !!`)
        setTimeout(() => {
          setCommentry("");
        }, 4000);
      }, 1000);
      setCommentry("")
      setTimeout(() => {
        setCommentry("There are five rounds in this game");
        setTimeout(() => {
          setCommentry("");
        }, 4000);
      }, 6000);
      setCommentry("");
      setTimeout(() => {
        setCommentry("The first Player to win their opponent five times wins.")
        setTimeout(() => {
          setCommentry("")
        }, 4000);
      }, 11000);
      setTimeout(() => {
        setCommentry("Let's Start");
        setTimeout(() => {
          setCommentry("")
        }, 4000);
      }, 16000);
  }
  useEffect(() => {
    welcomeMessage();
  }, [])
  const Play = () => {
    setState(true);
   setTimeout(() => {
    // updateHandler();
    if(comChoice === 0){
      setCompChoice("siccos")
      // console.log(compChoice);
    } else if(comChoice === 1){
      setCompChoice("rock");
      // console.log(compChoice);
    } else if(comChoice === 2){
      setCompChoice("paper")
      // console.log(compChoice);
    }
    // console.log(comChoice, "and", compChoice);
   }, 4000)
  };
  setTimeout(() => {
    // console.log(compChoice,"compp");
    setChoice2(compChoice);
    updateHandler();
  }, 100)
  return (
    <div id='Bbody'>
      <div className='Bbody1'>
        <div className='comentry'>
          <div className='imgDiv'>
          <img 
          alt='per'
          src='images.jpg'
          width={"100%"}
          height="100%"
          style={{borderRadius: "50%"}}
          />
          </div>
          <div className={commentry.length === 0 ? "nonee" : 'message'}> {commentry} !!</div>
        </div>
        <div className='profileBar'>
            <div style={{marginLeft: "20px"}} className='nameTag'>
           <div> <i className='fa fa-user-o'></i></div>
            <small>{name}</small>
            </div>
            <div className='scoreTag'>
              <label>Score</label> 
              <label>{userScore} : {compScore}</label>
            </div>
            <div style={{marginRight: "20px"}} className='nameTag'>
            <div> <i className='fa fa-user-o'></i></div>
            <small>Computer</small>
            </div>
        </div>
       {state ? 
       <div className='gamee'>
          {/* <button onClick={() => setState(!state)}>Switch</button> */}
          <div style={{animationName: animation}} className='handd'>
           {/* {choice} */}
           <img 
                  className='img'
                  alt='.....'
                   src={`${choice}.jpg`}
                    width={"100%"} 
                    height="100%"
                    style={{borderRadius: "50%"}}
                    />
          </div>
          <div  style={{animationName: animation}} className='handd'>
          <img 
                  className='img'
                  alt='.....'
                   src={`${choice2}.jpg`}
                    width={"100%"} 
                    height="100%"
                    style={{borderRadius: "50%"}}
                    />
          </div>
       </div> :  
       <div className='gameBar'>
          <div className='linn'></div>
                <div className='linn' id='linn'></div>
              <div className='tools'>
                <div className='mainTools' onClick={paper}>
                  <img 
                  alt='paper'
                   src='paper.jpg'
                    width={"100%"} 
                    height="100%"
                    style={{borderRadius: "50%"}}
                    />
                </div>
                <div className='mainTools' onClick={siccos}>
                <img 
                  alt='siccos'
                   src='siccos.jpg'
                    width={"100%"} 
                    height="100%"
                    style={{borderRadius: "50%"}}
                    />
                </div>
              </div>
              <div className='tools'>
              <div className='mainTools' onClick={rock}>
                
              <img 
                  alt='rock'
                   src='rock.jpg'
                    width={"100%"} 
                    height="100%"
                    style={{borderRadius: "50%"}}
                    />
              </div>
              </div>
        </div>}
      </div>
    </div>
  )
}

export default Home