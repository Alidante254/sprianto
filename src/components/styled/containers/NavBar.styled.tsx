import styled from "styled-components";



export const NavBar = styled.nav<{ $isVisible?: boolean }>`
  width: 55vw;
  display: flex;
  align-items: start;
  box-shadow: 1px 2px 5px #000000a7;
  justify-content: start;
  flex-direction: column;
  position: fixed;
  box-sizing: border-box;
  overflow: hidden;
  top: 1vh;
  left: 0;
  background-color: #ffffffb3;
  backdrop-filter: blur(100px);
  height: 98vh;
  border-radius: 0 15px 15px 0;
  transform: ${(props) =>
    props.$isVisible ? "translateX(0%)" : "translateX(-100%)"};
  transition: transform 1s ease-in-out, visibility 1s ease-in-out;
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  &:hover {
    background-color: #0056b3;
  }
  z-index: 101;
`;
