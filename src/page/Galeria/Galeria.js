import { useState } from 'react';
import './Galeria.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

function Galeria() {
    const existingPets = [
        { id: 1, nome: "Tobby", especie: "Cachorro", idade: 4 },
        { id: 2, nome: "Mia", especie: "Gato", idade: 2 },
        { id: 3, nome: "Luna", especie: "Cachorro", idade: 1 },
        { id: 4, nome: "Nino", especie: "Gato", idade: 3 },
        { id: 5, nome: "Bolt", especie: "Cachorro", idade: 5 },
        { id: 6, nome: "Frajola", especie: "Gato", idade: 6 },
        { id: 7, nome: "Pipoca", especie: "Cachorro", idade: 2 },
        { id: 8, nome: "Tom", especie: "Gato", idade: 3 },
        { id: 9, nome: "Mel", especie: "Cachorro", idade: 1 },
        { id: 10, nome: "Bidu", especie: "Cachorro", idade: 7 },
        { id: 11, nome: "Salem", especie: "Gato", idade: 2 },
        { id: 12, nome: "Max", especie: "Cachorro", idade: 3 },
        { id: 13, nome: "Amora", especie: "Gato", idade: 5 },
        { id: 14, nome: "Nina", especie: "Cachorro", idade: 4 },
        { id: 15, nome: "Simba", especie: "Gato", idade: 2 }
    ];

    const [pets] = useState(existingPets);

    useEffect(() => {
        console.log("Página da galeria carregada!");
        return () => {
            console.log("Saindo da galeria de pets.");
        };
    }, []);


    return (
        <section >
            <div className="pet-form-container">
                <h2>Galeria de pets</h2>
                <p className="pet-count">Total de pets disponíveis: {pets.length}</p>

                <ul className="pet-list">
                    {pets.map(pet => (
                        <li key={pet.id} className="pet-item">
                            <Card nome={pet.nome} especie={pet.especie} idade={pet.idade} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Galeria;