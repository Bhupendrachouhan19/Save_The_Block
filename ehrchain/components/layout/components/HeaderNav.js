import styled from "styled-components";
import { useRouter } from 'next/router';
import Link from "next/link";

 
function HeaderNav() {

    const Router = useRouter() 
    
  return (
    <HeaderNavWrapper>
        <Link href={'/'}>
        <HeaderNavLinks active={Router.pathname == '/' ? true : false}>
            Campaign
        </HeaderNavLinks>
        </Link>
        <Link href={'/createcampaign'}>
        <HeaderNavLinks active={Router.pathname == '/createcampaign' ? true : false}>
            Create Campaign
        </HeaderNavLinks>
        </Link>
        <Link href={'/dashboard'}>
        <HeaderNavLinks active={Router.pathname == '/dashboard' ? true : false}>
            Dashboard
        </HeaderNavLinks>
        </Link>
        <Link href={'/aboutus'}>
        <HeaderNavLinks active={Router.pathname == '/aboutus' ? true : false}>
            About Us
        </HeaderNavLinks>
        </Link>
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
    background-color: ${(props) => props.active ? props.theme.bgSubDiv : props.theme.bgDiv};
    height: 2.2rem;
    border-radius: 10px;
    padding: 0 5px;
    cursor: pointer;
    text-transform: uppercase;
`

export default HeaderNav