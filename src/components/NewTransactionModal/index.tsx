import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);


    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        const data = {
            title, value, category, type
        }
        api.post('/transactions', data)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close"><img src={close} alt="fecharModal" /></button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioBox type="button" onClick={() => { setType('deposit') }} isActive={type === 'deposit'} activeColor="green">
                        <img src={income} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type="button" onClick={() => { setType('withdraw') }} isActive={type === 'withdraw'} activeColor="red">
                        <img src={outcome} alt="saida" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}