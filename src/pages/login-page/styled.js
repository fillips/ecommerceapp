import styled from 'styled-components'

export const FormContainer = styled.form`
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const LoginContainer  = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%
`;

export const LoginForm  = styled.div`

    height: 60%;
    min-height: 450px;
    width: 60%;
    max-width: 500px;
    max-height: 500px;
    border: 1px solid #d8d8d8;
    border-radius: 5px;

    @media only screen and (max-width: 500px) {
        min-height: 500px;
}
`;

export const SubmitErrorContainer = styled.p`
    margin: 5px 20px;
    color: red;
    font-size: 14px;
    text-align: justify;
`;

export const LoginElementsContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    justify-content: space-between
`;

export const StyledButtonGroup = styled.button`
    width: 70%;
    justify-content: center;
    display: flex;
    align-items: center;
`;

export const ErrorMessage = styled.div`
    color: red;
    margin-left: 10px;
    position: sticky;
`;