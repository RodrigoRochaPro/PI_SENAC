import Layout from '@/components/template/Layout';
import React, { useState } from 'react';

const CadastroPosto = () => {
    const [posto, setPosto] = useState({
        nome: '',
        endereco: '',
        bandeira: '',
        combustiveis: [],
    });


    return (
        <Layout titulo='Cadatre-se' subtitulo='Cadstre seu posto e seja um parceiro da FuelSearchTool'>
            <form className="max-w-sm mx-auto mt-8">
                <label className="block mb-4">
                    <span className="text-gray-700">Nome do Posto:</span>
                    <input
                        className="form-input mt-1 w-full"
                        type="text"
                        name="nome"
                        value={posto.nome}
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Endereço:</span>
                    <input
                        className="form-input mt-1 w-full"
                        type="text"
                        name="endereco"
                        value={posto.endereco}
                    />
                </label>
                <label className="mb-4">
                    <span className="text-gray-700">Bandeira:</span>
                    <input
                        className="form-input mt-1 block w-full"
                        type="text"
                        name="bandeiras"
                        value={posto.bandeira}
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Combustíveis:</span>
                    <input
                        className="form-input mt-1 block w-full"
                        type="text"
                        name="combustiveis"
                        value={posto.combustiveis}
                    />
                </label>
                <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">
                    Cadastrar Posto
                </button>
            </form>
        </Layout>
    );
};

export default CadastroPosto;