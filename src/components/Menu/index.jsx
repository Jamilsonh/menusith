import { useState } from "react";
import { ContainerMenu, MenuItem, HeaderContainer, ContainerGeral } from './styles';

const Menu = (props) => {
    const [menuAtivo, setMenuAtivo] = useState(0);

    return <ContainerGeral>
        <HeaderContainer>
        <ContainerMenu>
            {props.menuItems.map((item, index) =>
                <MenuItem
                    to={'/' + item.path}
                    onClick={() => setMenuAtivo(index)}
                    ativo={menuAtivo === index}>{item.name}</MenuItem>
            )}
        </ContainerMenu>
    </HeaderContainer>
    </ContainerGeral>
}

export default Menu