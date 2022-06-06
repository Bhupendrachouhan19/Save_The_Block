import styled from "styled-components";
import FormLeftWrapper from "./Components/FormLeftWrapper";
import FormRightWrapper from './Components/FormRightWrapper';

const Form = () => {
  return (
    <FormWrapper>
        <FormMain>
            <FormTitle>
                Create New Camapaign
            </FormTitle>
            <FormInputsWrapper>
                <FormLeftWrapper />
                <FormRightWrapper />
            </FormInputsWrapper>
        </FormMain>
    </FormWrapper>
  )
}


const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const FormMain = styled.div`
    width: 80%;
`

const FormTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    font-weight: bold;
    color: ${(props) => props.theme.color};
    font-size: 40px;
    font-family: 'poppins';
    margin-top: 45px;
`

const FormInputsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`


export default Form;



























 

































