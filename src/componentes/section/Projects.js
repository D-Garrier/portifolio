import styles from './Projects.module.css'
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../Image/projects/portifolio/IMG-20230828-WA0011.jpeg'
import img2 from '../../Image/projects/portifolio/IMG_20200606_094152.jpg'
import img3 from '../../Image/projects/portifolio/IMG_20210415_165500.jpg'
import img4 from '../../Image/projects/portifolio/IMG_20211214_101008.jpg'
import img5 from '../../Image/projects/portifolio/IMG_20220429_164341.jpg'
import img6 from '../../Image/projects/portifolio/IMG_20220429_164413.jpg'
import img7 from '../../Image/projects/portifolio/IMG_20230816_200012.jpg'
import img8 from '../../Image/projects/portifolio/IMG_20230816_200030.jpg'
import img9 from '../../Image/projects/portifolio/IMG_20230829_170058.jpg'
import img10 from '../../Image/projects/portifolio/IMG_20231002_120436.jpg'
import img11 from '../../Image/projects/portifolio/IMG_20231002_155722.jpg'
import img12 from '../../Image/projects/portifolio/IMG_20231113_110534.jpg'
import img13 from '../../Image/projects/portifolio/Obra Sergio 0.jpg'
import img14 from '../../Image/projects/portifolio/Obra Sergio 1.jpg'
import img15 from '../../Image/projects/portifolio/Obra Sergio 2.jpg'
import img16 from '../../Image/projects/portifolio/Obra Sergio 3.jpg'

function Projects() {
    return (
        <div className={styles.projects} id="Projects">
            <h1>Projetos e Obras</h1>
            <Carousel className={styles.carouselContainer}>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img1} alt="Projeto 1" /></Carousel.Item>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img2} alt="Projeto 2" /></Carousel.Item>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img3} alt="Projeto 3" /></Carousel.Item>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img4} alt="Projeto 4" /></Carousel.Item>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img5} alt="Projeto 5" /></Carousel.Item>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img6} alt="Projeto 6" /></Carousel.Item>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img7} alt="Projeto 7" /></Carousel.Item>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img8} alt="Projeto 8" /></Carousel.Item>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img9} alt="Projeto 9" /></Carousel.Item>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img10} alt="Projeto 10" /></Carousel.Item>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img11} alt="Projeto 11" /></Carousel.Item>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img12} alt="Projeto 12" /></Carousel.Item>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img13} alt="Projeto 13" /></Carousel.Item>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img14} alt="Projeto 14" /></Carousel.Item>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img15} alt="Projeto 15" /></Carousel.Item>
                <Carousel.Item><img className={"d-block w-100 " + styles.carouselImage} src={img16} alt="Projeto 16" /></Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Projects