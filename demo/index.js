import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import ScaleBox from '../src/index';
import './index.css'

const Test = () => {
  // 测试时使用即可
  const [ container, setContainer ] = useState(null);
  const containerRef = useRef();
  useEffect(() => {
    setContainer(containerRef.current);
  }, []);
  return <div ref={containerRef} className='testBox'>
        <ScaleBox width={1908} height={1000} isFullScreen>
        <div className='testContent'>
            Hello World！
        </div>
      </ScaleBox>
    </div>
};

ReactDOM.render(<Test />, document.getElementById("root"));