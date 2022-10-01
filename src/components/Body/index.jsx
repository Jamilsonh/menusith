import { ContainerGlobal, ContainerMain, ContainerTitulo, Titulo, ContainerImgText, SithText, MenuImage } from "./styles"

const Body = (props) => {
    return (
        <ContainerGlobal>
            <ContainerMain>
                <Titulo>{props.titulo}</Titulo>
                <ContainerImgText>
                    <MenuImage sithImg={props.sithImg}></MenuImage>
                    <SithText>{props.sithText}</SithText>
                 </ContainerImgText>  
            </ContainerMain>                     
        </ContainerGlobal>       
    )
}

export default Body