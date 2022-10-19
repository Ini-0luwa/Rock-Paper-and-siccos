import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Loadscreen1 = ({ name, setName }) => {
    const [widt, setWidth] = useState(0);
    const [id, setId] = useState(0);
    const [loderSats, setLoaderStats] = useState(false);
    const [loderBtn, setLoaderBtn] = useState("none");
    const [nameFocus, setnameFocus] = useState(false);
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const redirectFun = () => {
        // console.log(link);
        window.location = "https://wrpsa.com/the-official-rules-of-rock-paper-scissors/";
    }
    const contBtn = () => {
        setTimeout(() => {
            setLoaderBtn(loderSats ? "none" : 'loaderBtn')
        }, 10000)
    }
    useEffect(() => {
        if (name.length >= 4) {
            setnameFocus(false);
            // console.log(name,nameFocus);
        }
        else if (name.length === 0) {
            setnameFocus(false);
        }
        else {
            setnameFocus(true);
        }
    }, [name])
    useEffect(() => {
        contBtn();
    })
    const increment = () => {
        setWidth((wit) => wit + 1);
    };
    const toPlayPage = () => {
        // navigate("/home")
        // console.log(widt);
        setTimeout(() => {
            if (widt === 100) {
                // console.log(widt, "time");
                navigate("/home");
            }
        }, 3000)
    };
    // toPlayPage()
    useEffect(() => {
        // console.log(widt, "new");
        toPlayPage();
    }, [widt]);
    // const checkName = () => {

    // };
    const timeHandler = () => {
        if (name.length > 3) {
            setId(setInterval(increment, 100));
            setLoaderStats(true);
            setInterval(() => {
                setLoaderBtn("none");
            }, 100);
            // setLoaderBtn("none")
        }
        else {
            setErr("Oga enter your name jare!!!!")
        }
        // toPlayPage();
    };
    const clearHandler = () => {
        if (widt > 99) {
            clearInterval(id);
        }
    };
    clearHandler();
    return (
        <div className='Bbody'>
            <div className='modal' id='modal'>
                <div>
                    {/* <div className='info0'>Name must be at Least 4 characters</div> */}
                    <h2>Enter Your Name</h2>
                    <form>
                        <input className='Inp'
                            type='text'
                            name="name"
                            required
                            autoFocus
                            onFocus={() => setnameFocus(true)}
                            onBlur={() => setnameFocus(false)}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label className='Label'  >
                            <span className='conText'>Name</span>
                        </label>
                    </form>

                    <a href='/#'>
                        <small className={nameFocus ? 'info0' : "none"}>Name must be at Least 4 characters</small>
                        <button className='Senbtn'>Save</button>
                        <button className='Senbtn'>Cancel</button>
                    </a>
                </div>

            </div>
            <div className='Lbody'>
                <div className='name'>{name.length > 3 && <h2>Welcome back {name} !!!</h2>}</div>
                <div className='line'>
                    <div className='line1'>
                        <label>Rock </label><br />
                        <label style={{ marginLeft: "15px" }}>Paper</label><br />
                        <label style={{ marginLeft: "25px" }}>Siccors</label>
                    </div>
                    <div className='line2'>
                        Un_Known__X
                    </div>
                </div>
                <div className={loderSats ? 'loader' : "none"}>
                    <div style={{ width: `${widt}%` }} className='loader1'>
                        {widt}%
                    </div>
                    <small className='textBlink'>Loading.....</small>
                </div>
                <div className={loderBtn}>
                    <button
                        onClick={timeHandler}
                    >Play</button>
                    <a href='#modal'>
                        <button
                            onClick={() => setErr("")}
                        >Name</button></a>
                    <button
                        onClick={redirectFun}
                    >Rules</button>
                    <button
                    //  onClick={timeHandler}
                    >Exit</button>
                </div>
                <small style={{ color: "red" }}>{err}</small>

            </div>
        </div>
    )
}

export default Loadscreen1