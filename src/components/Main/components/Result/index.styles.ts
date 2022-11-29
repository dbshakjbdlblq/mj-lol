import styled from '@emotion/styled';

export const Container = styled.div`
  width: 60%;
  min-height: 300px;

  background-color: white;
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  padding: 30px 15px;
  margin: 50px 0;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Body = styled.div`
  display: flex;
  gap: 30px;
  justify-content: end;
  font-size: 17px;

  @media (max-width: 875px) {
    font-size: 13px;
  }
`;

export const Name = styled.p`
  font-size: 50px;
  font-weight: 800;

  @media (max-width: 875px) {
    font-size: 5vw;
  }
`;

export const Level = styled.p`
  color: #a6a6a6;
  font-size: 17px;

  @media (max-width: 875px) {
    font-size: 13px;
  }
`;

export const Win = styled.p``;

export const Lose = styled.p``;
