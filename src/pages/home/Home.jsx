import React from 'react'
import './home.css'
<<<<<<< HEAD

=======
import Header from '../../components/header/Header'
>>>>>>> e5af0c2340864a5fcb0b69655c6db284cc4eecc0

export default function Home() {
    return (
        <>
            <body>
<<<<<<< HEAD
                {/* <Header3 /> */}
=======
                <Header />
>>>>>>> e5af0c2340864a5fcb0b69655c6db284cc4eecc0
                <Main />
                <PitchVideo />
                <About />
                <Opinions />
            </body>
        </>
    )
}

function Main() {
    return (
        <>
            <div className='bg-image container-fluid m-0 p-0'>
                <div className='row mx-auto d-flex justify-content-between align-items-center'>
                    <div className='bg-blur col-7 mx-auto py-5 my-5 gap-4 rounded-4 d-flex flex-column justify-content-center'>
                        <h2 className='text-white text-center fs-2 text-uppercase fw-semibold'>Sobre o Projeto</h2>
                        <p className='text-white text-center fs-3 fw-normal'> Saiba quem somos e <br /> como o projeto foi <br /> feito!</p>
                        <div className='text-center'>
                            <button className='btn btn-custom px-4 py-2 rounded-5' type='button'><a className='text-decoration-none text-white fs-4' href='/sobre'>Clique e saiba mais &gt;</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function PitchVideo() {
    return (
        <>
            <div className='container-fluid row m-0 p-0'>
                <h2 className='text-blue text-center fs-3 my-3 text-uppercase fw-semibold'>Vídeo pitch</h2>
                <div className='col-10 mx-auto ratio ratio-16x9 w-custom'>
                    <iframe className='' width='' height='' src='https://www.youtube.com/embed/oBXZwNqqWXA?si=1MXs3hVzbOuUdWX1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}

function About() {
    return (
        <>
            <div className='container-fluid row my-5 justify-content-center'>
                <img className='col-5' src='src/assets/07_1x.png' alt='' />
                <div className='col-5'>
                    <h2 className='text-blue fs-3 my-3 text-uppercase fw-semibold mt-0 mb-1'>Sobre a Rede Ancora</h2>
                    <p className='text-black fs-6 m-0'>A Rede ANCORA, uma das maiores distribuidoras do Brasil, é a empresa pioneira em adotar o modelo exclusivo de franquia no segmento de autopeças, oferece uma série de benefícios exclusivos aos seus franqueados. Presente em 15 estados brasileiros, mais o Distrito Federal, tem na sua história, de 25 anos, o resultado de trabalho, conquistas, sucesso e, principalmente, de grandes parcerias dentro do setor de reposição automotiva. Venha fazer parte dessa história de sucesso!</p>
                </div>
            </div>
        </>
    )
}

function Opinions() {
    return (
        <>
            <div className='container-fluid row my-5 justify-content-center'>
                <h2 className='text-blue fs-3 text-uppercase fw-semibold text-center mb-3'>Veja as avaliações de nossos clientes</h2>
                <div className='col-10 p-0 row'>
                    <div className='col-4'>
                        <Opinion name='Bruno Marques' shop='Loja 1 - MG' opinion='É com grande orgulho e graças ao amigo Jorge que hoje faço parte da REDE ANCORA. Foi um início árduo, mas gratificante. Sou grato por ter um grande aliado dentro das maiores fábricas de autopeças do BRASIL!' />
                    </div>
                    <div className='col-4'>
                        <Opinion name='Carlos de Souza' shop='Loja 2 - RJ' opinion='Sou um Franqueado Rede ANCORA com muito orgulho, porque ela me oferece tudo o que um varejo de autopeças precisa para sobreviver em um mercado de alta competitividade.' />
                    </div>
                    <div className='col-4'>
                        <Opinion name='Diego Silva' shop='Loja 3 - SP' opinion='Enquanto a Zeno Autopeças for somando anos à sua existência, queremos permanecer como parte deste time. Obrigado Rede ANCORA, mesmo de longe somos parte disso, somos sócios, parceiros e amigos de pessoas e lojas de todo Brasil.' />
                    </div>
                </div>

            </div>
        </>
    )
}

function Opinion(props) {
    return (
        <>
            <div className='h-100 bg-dark-blue p-3 rounded-3 d-flex flex-column align-items-center'>
                <img className='rounded-circle' src='src/assets/user.png' alt='foto de usuário' />
                <p className='color-red fs-4 fw-semibold mt-3 mb-0'>{props.name}</p>
                <p className='text-white fs-5 fw-light'>{props.shop}</p>
                <p className='text-white fs-6 fw-light'>"{props.opinion}"</p>
            </div>
        </>
    )
}