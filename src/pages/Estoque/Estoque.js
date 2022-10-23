import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Navigation/Header/Header'
import './Estoque.css'

const Estoque = () => {

    const getAllCars = async () => {
        axios.get(``)
            .then(response => {
                console.log(response)
            })
            .catch(
                console.log('Erro!')
            )
    }

    useEffect(() => {
        getAllCars()
    }, [])

    return (
        <>
            <Header />
            <section className='estoque'>
                <div className='estoque_filtro'>
                    <p className='estoque_titulo'>Filtrar</p>
                    <div className='estoque_divisao_input'>
                        <label className='estoque_nome_label' htmlFor='input_nome'>Nome</label>
                        <input className='estoque_input' type='text' id='input_nome'></input>
                    </div>
                    <label className='estoque_nome_label'>Cor</label>
                    <div className='estoque_cores'>
                        <div className='estoque_cor cor_vermelho'></div>
                        <div className='estoque_cor cor_laranja'></div>
                        <div className='estoque_cor cor_amarelo'></div>
                        <div className='estoque_cor cor_verde'></div>
                        <div className='estoque_cor cor_azul_claro'></div>
                        <div className='estoque_cor cor_azul_escuro'></div>
                        <div className='estoque_cor cor_roxa'></div>
                        <div className='estoque_cor cor_preto'></div>
                        <div className='estoque_cor cor_prata'></div>
                    </div>
                    <div className='estoque_divisao_input'>
                        <label className='estoque_nome_label' htmlFor='input_marca'>Marca</label>
                        <input className='estoque_input' type='text' id='input_marca'></input>
                    </div>
                    <div className='estoque_divisao_input'>
                        <label className='estoque_nome_label' htmlFor='input_preco'>Preço</label>
                        <input className='estoque_input' type='number' id='input_preco'></input>
                    </div>
                    <div className='estoque_divisao_input'>
                        <label className='estoque_nome_label' htmlFor='input_quilometragem'>Quilometragem</label>
                        <input className='estoque_input' type='number' id='input_quilometragem'></input>
                    </div>
                    <div className='estoque_divisao_input'>
                        <label className='estoque_nome_label' htmlFor='input_ano'>Ano</label>
                        <input className='estoque_input' type='number' id='input_ano'></input>
                    </div>
                </div>
                <div className='estoque_carros'>
                    <div className='estoque_carros_divisao_titulo'>
                        <h2>Estoque</h2>
                        <button className='estoque_btn_cadastrar'>Cadastrar</button>
                    </div>
                    <div className='estoque_divisao_carros'>
                        <div className='estoque_carro'>
                            <div className='estoque_imagem_carro'></div>
                            <div className='estoque_divisao_informacoes'>
                                <div className='estoque_divisao_carro'>
                                    <p className='estoque_nome_carro'>Porsche Taycan</p>
                                    <p className='estoque_ano_carro'>2020</p>
                                </div>
                                <p className='estoque_quilometragem_carro'>7450 km</p>
                                <p className='estoque_preco_carro'>R$ 1.000.000</p>
                                <button className='estoque_btn_detalhes'>Detalhes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Estoque
