import logoimg from '../../assets/logo.svg'
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