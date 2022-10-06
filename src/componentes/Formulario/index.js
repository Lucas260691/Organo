import InputText from '../InputText'
import './Formulario.css'


const Formulario = () => {
    return (
        <section>
            <form>
                <InputText label="Nome" placeholder="Digite Seu nome" />
                <InputText label="Cargo" placeholder="Digite seu cargo" />
                <InputText label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario