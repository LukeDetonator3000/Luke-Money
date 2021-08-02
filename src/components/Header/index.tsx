import logoimg from '../../assets/Logo.png'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoimg} alt="luke money" />
                <button type="button" onClick={onOpenNewTransactionModal} >
                    nova transação
                </button>
            </Content>
        </Container >
    )
}