import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ContainerMenu = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`

const MenuItem = styled(Link)`
    text-transform: uppercase;
    color: white;
    display: flex;
    justify-content: space-between ;
    font-weight: 350px;
    padding: 3vw;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    opacity: ${props => props.ativo ? 1 : 0.6};
    letter-spacing: 7px;
    text-decoration: none;

    @media (max-width: 768px) {
        padding: 2vw;
        font-size: 10px;
        letter-spacing: 4px;
    }
`

const HeaderContainer = styled.div`
    width: 60rem;
    height: 5rem;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: rgb(139,0,0);

    @media (max-width: 768px) {
        width: 20rem;
        height: 3rem;
    }
`

const ContainerGeral = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export {ContainerMenu, MenuItem, HeaderContainer, ContainerGeral}