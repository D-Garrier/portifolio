import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Projetista Executivo', 'Parceiro Terceirizado', 'Especialista em Montagens'];
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
            <p>Ofereço <strong>serviços terceirizados completos</strong> para lojas de móveis planejados e marcenarias.</p>
            <p>Meu pacote técnico inclui: <strong>medição no local, projeto executivo (Promob, Dinabox) e instalação impecável na casa do cliente.</strong></p>
            <p>Tenho vasta experiência técnica e prática que garantem <strong>solução de problemas, excelência em acabamentos e tranquilidade para o lojista e o cliente final.</strong></p>
            <ButtonA link='https://www.linkedin.com/in/diogo-garrier-9938b9185/' text='Conecte-se comigo!' />
        </div>
    )
}

export default Presentation