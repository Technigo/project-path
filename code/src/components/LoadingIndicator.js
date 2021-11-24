import React from "react";
import { useSelector } from "react-redux";

import Lottie from "react-lottie";
import animationData from "../animations/83694-loading-double.json"; 
import styled from 'styled-components'; 

export const LoadingIndicator = () => {
  const loading = useSelector((state) => state.ui.isLoading);

  const defaultOptions = {
    loop: true,
    autoplay: true,
		animationData,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
  };

return (
  <> 
  {loading && 
      <Div>
				<Text>Loading ...</Text>
        <Lottie options={defaultOptions} height={400} width={400} />
      </Div>
  }
  </>
);
};

const Div = styled.div`
	background: #294380;
	height: 100vh;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Text = styled.p`
	color: #ffffff;
	font-size: 20px;
`