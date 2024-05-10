import './BoxApresentacaoMembros.css'

export default function BoxApresentacaoMembros() {
    return (
        <>
            <div className='container-fluid linear-gradient d-flex justify-content-center'>
                <Member name='Giovana Hatten' function='UX Designer/Front-end Developer' img='../src/assets/Professional Profile - Giovana.png'/>
                <Member name='Guilherme Junqueira' function='Front-end Developer' img='../src/assets/Professional Profile - Guilherme.png'/>
                <Member name='João Brocchi' function='Front-end/Back-end Developer' img='../src/assets/Professional Profile - Joao.png'/>
            </div>
        </>
    );
}

function Member(props) {
    return (
        <>
            <div className='position-relative my-5 mx-4 member-size'>
                <img className='z-1 ms-5 mt-4 position-absolute rounded-circle ' src={props.img} alt={props.name} draggable='false'/>
                <h3 className='z-2 fs-4 text-light text-center position-absolute member-text'><strong>{props.name}</strong> <br/> <span className='fs-6'>{props.function}</span></h3>
                <img className='position-absolute top-0 start-0 z-0 member-svg' src='../src/assets/member2.svg' alt=' ' draggable='false'/>
            </div>
        </>
    )
}