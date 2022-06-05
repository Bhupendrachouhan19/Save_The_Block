import styled from "styled-components"

function HeaderNav() {
  return (
    <HeaderNavWrapper>
        <HeaderNavLinks>
            Campaign
        </HeaderNavLinks>
        <HeaderNavLinks>
            Create Campaign
        </HeaderNavLinks>
        <HeaderNavLinks>
            Dashboard
        </HeaderNavLinks>
        <HeaderNavLinks>
            About Us
        </HeaderNavLinks>
    </HeaderNavWrapper>
  )
}

const HeaderNavWrapper = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.bgDiv};
    padding: 0.8rem;
    border-radius: 10px;
    height: 30%;
`

const HeaderNavLinks = styled.div`
    display: flex; 
    align-items: center;
    font-family: 'Roboto';
    margin: 0.7rem;  
    background-color: ${(props) => props.theme.bgSubDiv};
    height: 2.2rem;
    border-radius: 10px;
    padding: 0 5px;
    cursor: pointer;
    text-transform: uppercase;
`

export default HeaderNav