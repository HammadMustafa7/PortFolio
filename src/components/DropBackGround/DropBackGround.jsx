import styled from 'styled-components';

function DropBg() {
  return (
    <StyledWrapper >

      <div className="lines ">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>

        

      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box !important;
  }

  html,
  body {
    height: 100%;
  }

  body {
    display: table;
    width: 100%;
    height: 100%;
    background-color: #171717;
    color: #000;
    line-height: 1.6;
    position: relative;
    font-family: sans-serif;
    overflow: hidden;
  }

  .lines {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    margin: auto;
    width: 80vw;
    overflow: hidden; /* Hide the lines that are outside */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .line {
    position: relative;
    width: 1.5px;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease; /* Add fade-in transition */
  }

.line:nth-child(1)::after,
.line:nth-child(9)::after,
.line:nth-child(3)::after,
.line:nth-child(7)::after {
  content: '';
  display: block;
  position: absolute;
  height: 15vh;
  width: 100%;
  top: -50%;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    #000000 75%,
    #000000 100%
  );
  animation: dropdown 7s 1.5s infinite;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
}

.line:nth-child(2)::after,
.line:nth-child(8)::after,
.line:nth-child(4)::after,
.line:nth-child(6)::after  {
  content: '';
  display: block;
  position: absolute;
  height: 15vh;
  width: 100%;
  top: -50%;
  left: 0;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0) 0%,
    #000000 75%,
    #000000 100%
  );
  animation: dropup 7s 2s infinite;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
}



.line:nth-child(5)::after {
  content: '';
  display: block;
  position: absolute;
  height: 15vh;
  width: 100%;
  top: -50%;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    #000000 75%,
    #000000 100%
  );
  animation: dropdown 7s 1.5s infinite;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
}

  @keyframes dropdown {
    0% {
      top: -50%;
    }
    100% {
      top: 110%;
    }
  } 
      @keyframes dropup {
    0% {
      top: 110%;
    }
    100% {
      top: -50%;
    }
  }
`;



export default DropBg;