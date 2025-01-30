import React from 'react';
import styled from 'styled-components';

function Button1({ txt, link, hide = "hidden" }) {
  return (
    <StyledWrapper>
      <button className="cssbuttons-io font-saira">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span>
            <svg className={`${hide} `} viewBox="0 0 28 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                fill="currentColor"
              />
            </svg>
            {txt}
          </span>
        </a>
      </button>
    </StyledWrapper>
  );
}

Button1.defaultProps = {
  txt: "Click Me",
  link: "#",
};

const StyledWrapper = styled.div`
  .cssbuttons-io {
    position: relative;
    font-family: inherit;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.05em;
    border-radius: 0.8em;
    cursor: none;
    border: none;
    background: linear-gradient(to right, #4a00e0, #dcdfe3);
    color: ghostwhite;
    overflow: hidden;
  }

  .cssbuttons-io svg {
    width: 1.2em;
    height: 1.2em;
    margin-right: 0.5em;
    animation: scaleAnimation 1.5s infinite;

  }

  .cssbuttons-io span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
    display: inline-flex;
    align-items: center;
    padding: 0.8em 1.2em 0.8em 1.05em;
    
  }

  .cssbuttons-io::before,
  .cssbuttons-io::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .cssbuttons-io::before {
    content: "";
    background: #1d4ed8;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }
  .cssbuttons-io:hover {
  color: black; // changes text color on hover
  }
  .cssbuttons-io:hover::before {
    transform: skew(90deg, 0);

  }

  .cssbuttons-io:active {
    transform: scale(0.95);
  }

  @keyframes scaleAnimation {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.15);
  }  
  50% {
    transform: scale(1.25);
  }
  75% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .cssbuttons-io {
    font-size: 16px;
  }

  .cssbuttons-io span {
    padding: 0.8em 1em;
  }

  .cssbuttons-io svg {
    width: 1em;
    height: 1em;
  }
}


@media (max-width: 480px) {
  .cssbuttons-io {
    font-size: 16px;
    padding: 0.5em 0.4em;
  }

  .cssbuttons-io span {
    padding: 0.4em 1em;
  }

  .cssbuttons-io svg {
    width: 0.9em;
    height: 0.9em;
  }
}
@media (max-width: 360px) {
  .cssbuttons-io {
    font-size: 12px;
    padding: 0.4em 0.4em;
  }

  .cssbuttons-io span {
    padding: 0.5em 1em;
  }

  .cssbuttons-io svg {
    width: 0.9em;
    height: 0.9em;
  }
}


`;

export default Button1;

