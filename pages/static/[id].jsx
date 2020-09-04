import React from 'react';
import { openConnection } from '../../db';
import Pokemon from '../../Components/pokemon';

const getMicrophone = async (params) => {
    const db = await openConnection();
    console.log('GET MICROPHONE START');
    return new Promise((resolve) => {
        setTimeout(async() => {
            const microphone = (await db.all('select * from microphone WHERE id=?', params.id.toString()))[0];
            console.log('GET MICROPHONE END');
            resolve(microphone);
        }, 3000);
    })
};

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemon: null,
        }
    }

    async componentDidMount() {
        const randomNumber = Math.floor(Math.random() * 11) + 1;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
        const json = await res.json();

        this.setState({
            pokemon: {
                pokeName: json.name,
                image: json.sprites.front_default
            }
        })
    }

    renderPokemon() {
        const {pokemon} = this.state;

        if (!pokemon) {
            return (
                <div>
                    Pokemon loading...
                </div>
            );
        }

        return (
            <Pokemon image={pokemon.image} pokeName={pokemon.pokeName}/>
        )
    }

    render() {
        return (
            <div className="container">
                <h1>Prezentacja :)</h1>
                <h2>Model: {this.props.model}</h2>
                <p>Brand: {this.props.brand}</p>
                <p>Price: {this.props.price}</p>
                {this.renderPokemon()}
                <Pokemon />
            </div>
        )
    }

}

export const getStaticProps = async ({ params }) => {
    const microphone = await getMicrophone(params);

    return {
        props: {
            ...microphone
        },
        unstable_revalidate: 1 // sek
    }
};

export const getStaticPaths = async (ctx) => {
    const paths = [1,2,3,4,5,6,7,8,9,10].map((id) => ({params: {id: id.toString()}}));

    return {
        paths,
        fallback: true // See the "fallback" section below
    };
};
