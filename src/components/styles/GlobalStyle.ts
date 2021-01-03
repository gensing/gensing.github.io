import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 그밖에 글로벌 스타일 작성하기  */
  a {
		text-decoration: none;
	}
  
`;

export default GlobalStyle