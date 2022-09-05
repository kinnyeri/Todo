import styled from "styled-components";

const MainPage = () => {
  return (
    <PageContainer>
      <TodoSection></TodoSection>
      <CalendarSection></CalendarSection>
    </PageContainer>
  );
};
const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
const TodoSection = styled.div`
  background: red;
`;
const CalendarSection = styled.div`
  background: blue;
`;
export default MainPage;
