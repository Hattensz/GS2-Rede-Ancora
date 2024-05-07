import React from "react";
import { useForm } from "react-hook-form";
import { FormContainer, Label, Input, SubmitButton } from "./stylesCadastroForm";

export default function CadastroForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data); 
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label htmlFor="nomeCompleto">Nome Completo:</Label>
                    <Input type="text" id="nomeCompleto" {...register("nomeCompleto", { required: true })} />
                </div>
                <div>
                    <Label htmlFor="email">E-mail:</Label>
                    <Input type="email" id="email" {...register("email", { required: true })} />
                </div>
                <div>
                    <Label htmlFor="telefone">Telefone:</Label>
                    <Input type="tel" id="telefone" {...register("telefone", { required: true })} />
                </div>
                <div>
                    <Label htmlFor="cpf">CPF:</Label>
                    <Input type="text" id="cpf" {...register("cpf", { required: true })} />
                </div>
                <SubmitButton type="submit">Enviar</SubmitButton>
            </form>
        </FormContainer>
    );
}
