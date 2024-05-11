
import { useForm } from "react-hook-form";
import { FormContainer, Label, Input, SubmitButton, CheckboxWrapper, Checkbox } from "./stylesCadastroForm"; // Adicionando a importação de CheckboxWrapper e Checkbox
import Cliente from "../../dominio/cliente/Cliente";
import { useNavigate } from "react-router-dom";
export default function CadastroForm() {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const {nomeCompleto, email, telefone, cpf, promocoes} = data
        const cliente = new Cliente(nomeCompleto, email, telefone, cpf, promocoes)
        // cliente.salvarNaDataBase()
        navigate("/search")
    };
    
    return (
        <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label htmlFor="nomeCompleto">Nome Completo:</Label>
                    <Input type="text" id="nomeCompleto" {...register("nomeCompleto")} />
                </div>
                <div>
                    <Label htmlFor="email">E-mail:</Label>
                    <Input type="email" id="email" {...register("email" )} />
                </div>
                <div>
                    <Label htmlFor="telefone">Telefone:</Label>
                    <Input type="tel" id="telefone" {...register("telefone",)} />
                </div>
                <div>
                    <Label htmlFor="cpf">CPF:</Label>
                    <Input type="text" id="cpf" {...register("cpf")} />
                </div>
                <div>
                    <CheckboxWrapper>
                        <Checkbox
                            type="checkbox"
                            id="promo"
                            {...register("promocoes")}
                        />
                        <Label htmlFor="promo">Desejo receber promoções por e-mail</Label>
                    </CheckboxWrapper>
                </div>

                <SubmitButton type="submit">Enviar</SubmitButton>
            </form>
        </FormContainer>
    );
}
