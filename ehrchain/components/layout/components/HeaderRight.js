import styled from "styled-components";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { App } from "../Layout";
import { useContext } from "react";
import Wallet from "./Wallet";

function HeaderRight() {
    
    const ThemeToggler = useContext(App)
    
    return (
        <HeaderRightWrapper>
            <Wallet />
            <ThemeToggle>
            {ThemeToggler.theme === "light" ? <DarkModeIcon onClick = {ThemeToggler.changeTheme} /> : <LightModeIcon onClick = {ThemeToggler.changeTheme}/>}
            </ThemeToggle>
        </HeaderRightWrapper>
    )
}

const HeaderRightWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    height: 50%;
`
const ThemeToggle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.bgDiv};
    height: 100%;
    width: 45px;
    border-radius: 12px;
    cursor: pointer;
`

export default HeaderRight;