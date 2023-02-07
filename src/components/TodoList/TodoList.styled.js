import styled from 'styled-components';

export const ContainerList = styled.div`
width:700px;
margin-left:auto;
margin-right: auto;


`

export const List = styled.ul`
list-style:none;
width:700px;
padding-left:0;
@media (max-width:400px) {
width:450px;
transform: translateX(105px);
}
`
export const TodoItem = styled.li`
display:flex;
border:4px solid rgba(239, 58, 16, 0.98);
justify-content: space-between;
padding:10px;
font-size:20px;
:not(:last-child){
    margin-bottom:20px;
}
`
export const Icon = styled.div`
size:24px;

`