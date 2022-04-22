
import styled from 'styled-components/macro'

const devices = {
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
  };

export const Container = styled.div`
    display: flex;
	align-items: center;
	flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
`
 export const ChildContainer = styled.div`
 margin: 0 20px;
 font-size: 10px;

 @media ${devices.tablet} {
    width: 50%;
  }
  @media ${devices.desktop} {
    width: 50%;
  }

 `
 export const MazeCardText = styled.div`
  margin-bottom: 3rem;
 `
