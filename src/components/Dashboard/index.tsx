import { Container } from "./styles";
import { Sumary } from "../Summary";
import { TransationsTable } from "../TransationsTable";

export function Dashboard() {
    return (
        <Container>
            <Sumary />
            <TransationsTable />
        </Container>
    );
}