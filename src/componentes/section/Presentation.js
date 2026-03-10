import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Marceneiro!', 'Projetista Executivo', 'Supervisor'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100
    const [delta, setDelta] = useState(100)

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1)
        }

    }

    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
            <p>Sou um profissional apaixonado por Marcenaria.</p>
            <p>Tenho experiência contínua e prática em marcenaria, projetos executivos e supervisão de produção.</p>
            <p>Destaco-me na <strong>solução de problemas, excelência em acabamentos, manuseio seguro de ferramentas e comunicação eficaz</strong> em obras e com clientes.</p>
            <ButtonA link='https://www.linkedin.com/in/diogo-garrier-9938b9185/' text='Conecte-se comigo!' />
        </div>
    )
}

export default Presentation