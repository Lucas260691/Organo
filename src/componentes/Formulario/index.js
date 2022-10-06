import Botao from '../Botao'
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
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText obrigatorio={true} label="Nome" placeholder="Digite Seu nome" />
                <InputText  obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <InputText  obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa  obrigatorio={true} label ="Time" itens={times} />
                <Botao> 
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario