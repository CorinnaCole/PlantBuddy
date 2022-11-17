import styled from "styled-components";

const CardWrapper = styled.div`
  display: grid;
  margin: 25px;
  grid-template-columns: 375px;
  grid-template-rows: 210px 300px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  svg {
    visibility: hidden;
  }
  &: hover {
    svg {
      visibility: visible;
      stroke: #333;
      stroke-width: 20px;
      fill: white;
      font-size: 2em;
      margin: 6px;
  }
  }
`;
// { background: string }
// background-image: url(${({ background }) => background});
const CardImage = styled.img`
  max-width: 100%;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const CardDelete = styled.div`
grid-area: image;
z-index: 2;
margin-left: auto;
`;

const CardImageDiv = styled.div`
  grid-area: image;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

const CardTextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const CardTextBody = styled.p`
  color: black;
  font-size: 15px;
  font-weight: 300;
`;

const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #417154;
  font-size: 1em;
`;

const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`;

const LinkText = styled.a`
font-family: 'MuseoModerno', cursive;
  color: #fff;
  text-decoration: none;
`;



export {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText,
  CardImageDiv,
  CardDelete
}