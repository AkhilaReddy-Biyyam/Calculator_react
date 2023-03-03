import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [res, setRes] = useState('');
  const handleClick = (e) => {
    setRes(res + e.target.value);
  };
  const Clear = () => {
    setRes('');
  };
  const backspace = () => {
    setRes(res.slice(0, -1));
  };
  const calculate = () => {
    try {
      setRes(eval(res).toString());
    } catch (err) {
      setRes('ERROR');
    }
  };
  return (
    <div>
      <div class="Container">
        <form>
          <input type="text" value={res} />
        </form>
        <div class="Body-Container">
          <button class="highlight" onClick={Clear} id="clear">
            AC
          </button>
          <button class="highlight" onClick={backspace} id="backspace">
            C
          </button>
          <button class="highlight" value="/" onClick={handleClick}>
            &divide;
          </button>
          <button value="7" onClick={handleClick}>
            7
          </button>
          <button value="8" onClick={handleClick}>
            8
          </button>
          <button value="9" onClick={handleClick}>
            9
          </button>
          <button class="highlight" value="*" onClick={handleClick}>
            &times;
          </button>
          <button value="4" onClick={handleClick}>
            4
          </button>
          <button value="5" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick}>
            6
          </button>
          <button class="highlight" value="-" onClick={handleClick}>
            &ndash;
          </button>
          <button value="1" onClick={handleClick}>
            1
          </button>
          <button value="2" onClick={handleClick}>
            2
          </button>
          <button value="3" onClick={handleClick}>
            3
          </button>
          <button class="highlight" value="+" onClick={handleClick}>
            +
          </button>
          <button value="0" onClick={handleClick}>
            0
          </button>
          <button value="." onClick={handleClick}>
            .
          </button>
          <button class="highlight" value="=" onClick={calculate} id="res">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
