import Button from '../../components/Button/Button';
import {  useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    const navigate = useNavigate();
    const navigateToGaleria = () => {
        navigate("/galeria");
    };
    return (
        <article>
            <h1 className="home-title">Bem vindo à <strong>PetFinder!</strong></h1>
            <p>Conectamos você a pets que precisam de um lar.</p>
            <Button onClick={navigateToGaleria} type="button">
                Ver Galeria
            </Button>

        </article>
    )
}

export default Home;