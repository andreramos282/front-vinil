import Disco from "../types/Disco";
import css from "../styles/components/disco.module.css"
import { useState } from "react";
import deleteRequest from "../functions/connection/deleteRequest";
import putRequest from "../functions/connection/putRequest";
import formatDateForInput from "../functions/utils/formatDateForInput";

function DiscoComponent(props: { disco: Disco }) {
    const { disco } = props
    const [titulo, setTitulo] = useState<string>(disco.titulo)
    const [artista, setArtista] = useState<string>(disco.artista)
    const [genero, setGenero] = useState<string>(disco.genero)
    const [formato, setFormato] = useState<string>(disco.formato)
    const [ano, setAno] = useState<string>(formatDateForInput(new Date(disco.ano)))
    const [preco, setPreco] = useState<string>(disco.preco.toString())

    async function editDisco() {
        let numberPreco: number | undefined = Number(preco)
        if (isNaN(numberPreco)) return

        const discoAtt: Disco = { titulo, artista, genero, formato, ano, preco: numberPreco }

        await putRequest("http://localhost:3001/disco/" + disco._id, discoAtt)
        window.location.reload()
    }

    async function deleteDisco() {
        await deleteRequest("http://localhost:3001/disco/" + disco._id)
        window.location.reload()
    }

    return (
        <div className={css.container}>
            <h2>{disco.titulo} | {disco.formato}</h2>
            <h3>{disco.artista} | R$ {disco.preco} </h3>
            <p>Ano: {new Date(disco.ano).toUTCString().split("00:00:00")[0]} - Genero: {disco.genero}</p>
            <hr />
            <div className={css.edit_container}>
                <div className={css.input}>
                    <label>Titulo</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <div className={css.input}>
                    <label>Artista</label>
                    <input
                        type="text"
                        value={artista}
                        onChange={(e) => setArtista(e.target.value)}
                    />
                </div>
                <div className={css.input}>
                    <label>Ano</label>
                    <input
                        type="date"
                        value={ano}
                        onChange={(e) => setAno(e.target.value)}
                    />
                </div>
                <div className={css.input}>
                    <label>Genero</label>
                    <input
                        type="text"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                    />
                </div>
                <div className={css.input}>
                    <label>Formato</label>
                    <select
                        value={formato}
                        onChange={(e) => setFormato(e.target.value)}
                    >
                        <option value="vinil">Vinil</option>
                        <option value="cd">CD</option>
                    </select>
                </div>
                <div className={css.input}>
                    <label>Preço</label>
                    <input
                        type="number"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </div>
                <div className={css.buttons}>
                    <button onClick={editDisco} className={css.edit}>Editar</button>
                    <button onClick={deleteDisco} className={css.delete}>Deletar</button>
                </div>
            </div>
        </div>
    )
}

export default DiscoComponent