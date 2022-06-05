import styled from "styled-components";
import HeaderLogo from "./components/HeaderLogo";
import HeaderNav from "./components/HeaderNav";
import HeaderRight from "./components/HeaderRight";
import Wallet from "./components/Wallet";


const Header = () => {
  return (
    <HeaderWrapper>
    <HeaderLogo />
    <HeaderNav />
    <HeaderRight />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  width: full;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Header;
