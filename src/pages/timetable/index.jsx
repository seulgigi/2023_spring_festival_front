import { useCallback, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const primaryColor = "#FC8CAE";
const secondaryColor = "#525252";

const Landing = keyframes`
  from {
    transform: translate(-100%);
  } to {
    transform: translate(0%);
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const DateSection = styled.section`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 30px;
`;

const DateBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: 900;
  color: ${(props) => (props.date ? `${primaryColor}` : `${secondaryColor}`)};
  cursor: pointer;
`;

const DateNum = styled.span`
  font-size: 36px;
  text-shadow: 2px 2px 0px #ffffff, 5px 4px 0px rgba(0, 0, 0, 0.15);
  font-family: "yg-jalnan";
`;

const DateWeek = styled.span`
  font-size: 14px;
  font-family: "yg-jalnan";
`;

const IconBox = styled.section`
  margin: 0 10px;
  font-size: 24px;
`;

const ToggleHeader = styled.section`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  font-family: "yg-jalnan";
`;

const ToggleBox = styled.section`
  width: 100%;
  height: ${(props) => (props.isOpen ? "45vh" : "60px")};
  display: flex;
  box-shadow: 3px 3px 20px -10px rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  background-color: #fff;
  color: ${primaryColor};
  font-weight: 700;
  padding-left: 15px;
  animation: ${Landing} 1s ease;
  animation-delay: ${(props) => (props.delay ? `1s` : ``)};
  display: ${(props) => (props.delay ? "none" : "")};
  transition: all 0.5s;
  cursor: pointer;
`;

export default function TimeTable() {
  // State 관리----------------------------------------
  const [firstDate, setFirstDate] = useState(true);
  const [secondDate, setSecondDate] = useState(false);
  const [performance, setPerformance] = useState(false);
  const [specialGuest, setSpecialGuest] = useState(true);
  const [mount, setMount] = useState(true);

  // Function 관리-------------------------------------
  const handleFirstDate = useCallback(() => {
    if (!firstDate) {
      setFirstDate(true);
      setSecondDate(false);
    }
  }, [firstDate]);

  const handleSecondDate = useCallback(() => {
    if (!secondDate) {
      setFirstDate(false);
      setSecondDate(true);
    }
  }, [secondDate]);

  const handleShrink = useCallback(() => {
    setPerformance(!performance);
  }, [performance]);

  const handleGrow = useCallback(() => {
    setSpecialGuest(!specialGuest);
  }, [specialGuest]);

  // ComponentDidMount--------------------------------
  useEffect(() => {
    setTimeout(() => setMount(!mount), 500);
  }, []);

  //
  return (
    <>
      <Container>
        <DateSection>
          <DateBox date={firstDate} onClick={handleFirstDate}>
            <DateNum>24</DateNum>
            <DateWeek>WED.</DateWeek>
          </DateBox>
          <DateBox date={secondDate} onClick={handleSecondDate}>
            <DateNum>25</DateNum>
            <DateWeek>THR.</DateWeek>
          </DateBox>
        </DateSection>
        <br /> <br />
        <ToggleBox isOpen={performance} onClick={handleShrink}>
          <ToggleHeader>
            <IconBox>{performance ? "▼" : "▶"} </IconBox>
            PERFORMANCE
          </ToggleHeader>
        </ToggleBox>
        <br />
        <ToggleBox isOpen={specialGuest} delay={mount} onClick={handleGrow}>
          <ToggleHeader>
            <IconBox>{specialGuest ? "▼" : "▶"}</IconBox>
            SPECIAL GUEST
          </ToggleHeader>
        </ToggleBox>
      </Container>
      <style jsx>{`
        * {
          font-family: "yg-jalnan";
        }
      `}</style>
    </>
  );
}
