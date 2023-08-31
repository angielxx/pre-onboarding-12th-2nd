import { useNavigate } from 'react-router';
import { styled } from 'styled-components';

export const WantedAdItem = () => {
  const navigate = useNavigate();

  return (
    <AdWrapper onClick={() => navigate('https://www.wanted.co.kr/')}>
      <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" />
    </AdWrapper>
  );
};

const AdWrapper = styled.div`
  cursor: pointer;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
