import React, {useState} from "react";
import "../styles/lightDarkCandles.css";

export default function LightDarkCandles({}) {
    const [animLight, setAnimLight] = useState(false);

    const handleColorMode = () => {
        setAnimLight(!animLight)
    }


  return (
      <button onClick={handleColorMode}>
        <div className="wrapper">
          <span id="mode">{animLight ? "Light" : "Dark"}</span>
        <div className="candles">
          <div className={`light__wave ${animLight ? "light__waveAnim": ""}`}></div>
          <div className={`candle1 ${animLight ? "": "candle1Anim"}`}>
            <div className="candle1__body">
              <div className="candle1__eyes">
                <span className="candle1__eyes-one"></span>
                <span className="candle1__eyes-two"></span>
              </div>
              <div className={`${animLight ? "": "candle1_mouthAnim"}`}></div>
            </div>
            <div className="candle1__stick"></div>
          </div>

          <div className={`candle2 ${animLight ? "candle2AnimOn": "candle2Anim"}`}>
            <div className="candle2__body">
              <div className="candle2__eyes">
                <div className={`candle2__eyes-one ${animLight ? "candle2__eyes-oneAnimOn": "candle2__eyes-oneAnim"}`}></div>
                <div className={`candle2__eyes-two ${animLight ? "candle2__eyes-twoAnimOn": "candle2__eyes-twoAnim"}`}></div>
              </div>
            </div>
            <div className="candle2__stick"></div>
          </div>
          <div className={`candle2__fire ${animLight ? "candle2__fireAnim": "candle2__fireAnimOut"}`}></div>
          <div className="sparkles-one"></div>
          <div className="sparkles-two"></div>
          <div className={`candle__smoke-one ${animLight ? "": "candle__smoke-oneAnim"}`}></div>
          <div className="candle__smoke-two"></div>
        </div>
      </div>
      </button>
  );
}
