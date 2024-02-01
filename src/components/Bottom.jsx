import React, { useState } from 'react';

const Bottom = () => {
  const [isVisible, setIsVisible] = useState(Array(7).fill(false));
  const handleHover = (index) => {
    const newVisibility = Array(7).fill(false);
    console.log(newVisibility);
    newVisibility[index] = true;
    setIsVisible(newVisibility);
  };

  return (
    <div className="bottomCard">
      <div className="topSideBottom">
        <h3>Spending - Last 7 days</h3>
      </div>
      <div className="middleSideBottom">
        <div className="middleSideTotal">
          <div
            className="total"
            style={{ visibility: isVisible[0] ? 'visible' : 'hidden' }}
          >
            $12.21
          </div>
          <div
            className="total"
            style={{ visibility: isVisible[1] ? 'visible' : 'hidden' }}
          >
            $25.36
          </div>
          <div
            className="total"
            style={{ visibility: isVisible[2] ? 'visible' : 'hidden' }}
          >
            $52.11
          </div>
          <div
            className="total"
            style={{ visibility: isVisible[3] ? 'visible' : 'hidden' }}
          >
            $31.12
          </div>
          <div
            className="total"
            style={{ visibility: isVisible[4] ? 'visible' : 'hidden' }}
          >
            $65.25
          </div>
          <div
            className="total"
            style={{ visibility: isVisible[5] ? 'visible' : 'hidden' }}
          >
            $66.23
          </div>
          <div
            className="total"
            style={{ visibility: isVisible[6] ? 'visible' : 'hidden' }}
          >
            $40.11
          </div>
        </div>
        <div className="weekdaysDetails">
          <div className="week">
            <div
              className="chart chart40"
              onMouseEnter={() => handleHover(0)}
            ></div>
            <p className="weekDays">Mon</p>
          </div>
          <div className="week">
            <div
              className="chart chart60"
              onMouseEnter={() => handleHover(1)}
            ></div>
            <p className="weekDays">Tue</p>
          </div>
          <div className="week">
            <div
              className="chart chart100"
              onMouseEnter={() => handleHover(2)}
            ></div>
            <p className="weekDays">Wed</p>
          </div>
          <div className="week ">
            <div
              className="chart chart45"
              onMouseEnter={() => handleHover(3)}
            ></div>
            <p className="weekDays">Thu</p>
          </div>
          <div className="week">
            <div
              className="chart chart80"
              onMouseEnter={() => handleHover(4)}
            ></div>
            <p className="weekDays">Fri</p>
          </div>
          <div className="week">
            <div
              className="chart chart85"
              onMouseEnter={() => handleHover(5)}
            ></div>
            <p className="weekDays">Sat</p>
          </div>
          <div className="week">
            <div
              className="chart chart60"
              onMouseEnter={() => handleHover(6)}
            ></div>
            <p className="weekDays">Sun</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="bottomSideBottom">
        <div className="bottomLeft">
          <p>Total this month</p>
          <h1>$478.33</h1>
        </div>
        <div className="bottomRight">
          <h4>+2.4%</h4>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
