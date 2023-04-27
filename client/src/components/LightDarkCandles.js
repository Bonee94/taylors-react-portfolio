import React, {useState} from "react";
import "../styles/lightDarkCandles.css";

export default function LightDarkCandles({animLight, setAnimLight}) {
  const [startAnim, setStartAnim] = useState(false);

    const handleColorMode = () => {
      if (animLight === true) {
        setStartAnim(false)
        setTimeout(() => {
          setAnimLight(false)
        }, 1770);
      } else {
        setAnimLight(true)
        setStartAnim(true)
      }
     
    }


  return (
      <button onClick={handleColorMode}>
        <div className="wrapper">
          <span id="mode">{startAnim ? "Light" : "Dark"}</span>
        <div className="candles">
          <div className={`light__wave ${startAnim ? "light__waveAnim": ""}`}></div>
          <div className={`candle1 ${startAnim ? "": "candle1Anim"}`}>
            <div className="candle1__body">
              <div className="candle1__eyes">
                <span className="candle1__eyes-one"></span>
                <span className="candle1__eyes-two"></span>
              </div>
              <div className={`${startAnim ? "": "candle1_mouthAnim"}`}></div>
            </div>
            <div className="candle1__stick"></div>
          </div>

          <div className={`candle2 ${startAnim ? "candle2AnimOn": "candle2Anim"}`}>
            <div className="candle2__body">
              <div className="candle2__eyes">
                <div className={`candle2__eyes-one ${startAnim ? "candle2__eyes-oneAnimOn": "candle2__eyes-oneAnim"}`}></div>
                <div className={`candle2__eyes-two ${startAnim ? "candle2__eyes-twoAnimOn": "candle2__eyes-twoAnim"}`}></div>
              </div>
            </div>
            <div className="candle2__stick"></div>
          </div>
          <div className={`candle2__fire ${startAnim ? "candle2__fireAnim": "candle2__fireAnimOut"}`}></div>
          <div className="sparkles-one"></div>
          <div className="sparkles-two"></div>
          <div className={`candle__smoke-one ${startAnim ? "": "candle__smoke-oneAnim"}`}></div>
          <div className="candle__smoke-two"></div>
        </div>
      </div>
      </button>
  );
}
