import React from 'react'
import './header.css'

export default function Header() {
    return (
        <>
            <img className='position-absolute top-0 start-0 ms-2 mt-1' src="../src/assets/Logo-Rede-ANCORA-Institucional_1x.png" alt="Logo Rede Ancora" />
            <div className='d-flex bg-gray'>
                <div className='container-fluid mt-5 d-flex justify-content-center text-center gap-5 ms-5' >
                    <a className='text-decoration-none' href="">
                        <h1 className='text-blue menu-hover fs-3 fw-semibold text-uppercase'>Home</h1>
                    </a>
                    <h1 className='text-blue fs-3 fw-semibold'>|</h1>
                    <a className='text-decoration-none' href="">
                        <h1 className='text-blue menu-hover fs-3 fw-semibold text-uppercase'>Sobre o Projeto</h1>
                    </a>
                    <h1 className='text-blue fs-3 fw-semibold'>|</h1>
                    <a className='text-decoration-none' href="">
                        <h1 className='text-blue menu-hover fs-3 fw-semibold text-uppercase'>Loja Virtual</h1>
                    </a>
                </div>
            </div>
        </>
    )
}