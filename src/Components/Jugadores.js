import React from 'react';
import { connect } from 'react-redux';


let imgURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdi3-9dIAH6OQgEiCKbLMdsiDkelJGdmOS7w&usqp=CAU';


const Jugadores = (jugadores) =>  {


    return (
        <section className="PlayersContainer">

            <h2>Jugadores</h2>

            <div className="PlayerBox">

                {jugadores.map( j => (

                    <article className="PlayerCard">

                        <img src={imgURL} alt=""/>
                        <p>Nombre Jugador</p>
                        <button>Titular</button>
                        <button>Suplente</button>

                    </article>             


                ))}


            </div>

            
        </section>
    )
}

const mapStateToProps = (state) => ({jugadores: state.jugadores})

export default connect(mapStateToProps, mapDispatchToProps) (Jugadores); 
