import React from 'react'
import './header.css'

export default function Header() {
    return (
        <>
            <div className="d-flex bg-gray">
                <img className='mt-2 ms-5' src="../src/assets/Logo-Rede-ANCORA-Institucional_1x.png" alt="Logo Rede Ancora" />
                <div className='container-fluid mt-5 d-flex justify-content-center text-center gap-5' >
                    <h1 className='text-blue fs-2 text-uppercase'>Home</h1>
                    <h1 className='text-blue fs-2'>|</h1>
                    <h1 className='text-blue fs-2 text-uppercase'>Sobre o Projeto</h1>
                    <h1 className='text-blue fs-2'>|</h1>
                    <h1 className='text-blue fs-2 text-uppercase'>Loja Virtual</h1>
                </div>
            </div>
        </>
    )
}