import styled from 'styled-components';

export const Form = styled.form`
display: flex;
padding: 20px;
justify-content:center;
@media (max-width:400px) {
width:620px;

}
`
export const Input = styled.input`
width:520px;
padding:20px;
text-transform:uppercase;
background-color: white;
border-radius:8px;

@media (max-width:400px) {
width:300px;
border:1px solid black;
border-radius:8px;
}
`
export const Button = styled.button`
width:100px;
margin-left:40px;
text-transform:uppercase;
background-color: rgba(239, 58, 16, 0.98);
border-radius:8px;
font-weight:bolder;
border:none;
@media (max-width:400px) {
margin-left:30px;
width:80px;

}
`