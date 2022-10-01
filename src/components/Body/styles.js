import styled from 'styled-components'

const ContainerGlobal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const ContainerMain = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(15, 1, 0);
    flex-direction: column;
    width: 60rem;
    height: 40rem;
    margin-top: 5rem;

    @media (max-width: 768px) {
        display: flex;
        width: 20rem;
        height: 40rem;
    }
`

const SubContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 50rem;
    height: 30rem;
    background-color: white;

    @media (max-width: 768px) {
        display: flex;
        width: 20rem;
        height: 40rem;
    }
`

const ContainerTitulo = styled.div`
    display:flex;
    width: 100%;
    height: 7rem;
    align-items: center;
    background-color: green;
`

const Titulo = styled.div`
    color: black;
    font-size: 3rem;
    background-color: rgb(139,0,0);
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: 'Orelega One', cursive;
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto Serif', serif;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`

const ContainerImgText = styled.div`
    display: flex;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        font-size: 60%;
        justify-content: space-around;
    }


`

const SithText = styled.div`
    background-color: rgb(139,0,0);
    border-radius: 15px;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    height: 25rem;
    width: 40rem;
    font-family: 'Orelega One', cursive;
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto Serif', serif;

    @media (max-width: 768px){
        width: 18rem;
        height: 20rem;
        margin-bottom: 2rem;
    }
`

const MenuImage = styled.div`
    width: 15rem;
    height: 25rem;
    border-radius: 15px;
    background-image: url(${props => props.sithImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 768px){
        width: 18rem;
        height: 10rem;
        margin-top: 2rem;
        background-position: 50% 15%;
        background-size: 100%;
    }
`



export {
    ContainerGlobal,
    ContainerMain,
    SubContainer,
    ContainerTitulo,
    Titulo,
    ContainerImgText,
    SithText,
    MenuImage
}