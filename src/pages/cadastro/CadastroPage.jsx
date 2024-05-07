import CadastroForm from "../../components/cadastro/CadastroForm";
import Header3 from "../../components/header3/Header3";
import {CenteredHeading} from "./stylesCadastroPage"

export default function CadastroPage() {
    return (
        <div>
            <Header3 />
            <div className="centraliza">
                <CenteredHeading>Cadastro</CenteredHeading>
                <CadastroForm />
            </div>
        </div>
    );
}
