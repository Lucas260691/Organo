import InputText from '../InputText'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = () => {
    
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText label="Nome" placeholder="Digite Seu nome" />
                <InputText label="Cargo" placeholder="Digite seu cargo" />
                <InputText label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa itens={times} />
            </form>
        </section>
    )
}

export default Formulario