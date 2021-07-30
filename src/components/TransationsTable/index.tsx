import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransationsTable() {
    useEffect(() => {
        api.get('/transations')
            .then(response => console.log(response.data))
    }, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>R$12.00</td>
                        <td>Desenvolvimento</td>
                        <td>30/07/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>R$12.00</td>
                        <td>Desenvolvimento</td>
                        <td>30/07/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>R$12.00</td>
                        <td>Desenvolvimento</td>
                        <td>30/07/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>R$12.00</td>
                        <td>Desenvolvimento</td>
                        <td>30/07/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}