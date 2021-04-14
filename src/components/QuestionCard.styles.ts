import styled from 'styled-components'
type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
transition:all .3s ease;
:hover{
    opacity: 0.8;
}
button {
    user-select:none;
    background: ${({ correct, userClicked }) =>
    correct
      ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
      : !correct && userClicked
      ? 'linear-gradient(90deg, #FF5656, #C16868)'
      : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
}


`;


