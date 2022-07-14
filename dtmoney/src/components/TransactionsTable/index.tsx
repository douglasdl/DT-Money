import { useEffect } from 'react';
import { api } from '../../services/api';
import {
    Container
} from './styles';

export function TransactionsTable() {

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data));
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Conta de Água</td>
                        <td className="withdraw">-R$100,00</td>
                        <td>Contas</td>
                        <td>10/07/2022</td>
                    </tr>
                    <tr>
                        <td>Salário</td>
                        <td className="deposit">R$1.000,00</td>
                        <td>Contas</td>
                        <td>10/07/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}