import styled from 'styled-components'

export const Container = styled.div`

margin:50px;

`
export const Title = styled.h1`
text-align:center;
text-transform:uppercase;
font-size:45px;
margin:0;
margin-bottom:25px;

@media (max-width:400px) {
font-size:35px;
transform: translateX(170px);
}
`

export const Todo = styled.span`
color:rgba(239, 58, 16, 0.98);
`