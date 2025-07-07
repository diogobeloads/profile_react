import { useState, useEffect } from "react"

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);

    useEffect(() => {
        console.log("materia A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC]);    

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Você foi aprovado</p>
            )
        } else {
            return (
                <p>Você foi reprovado</p>
            )
        }
    }



    return (
        <form>
            <ul>
            {[1,2,3,4,5].map(item => <li key={item}>{item}</li>)}
            </ul>
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA (parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={({ target }) => setMateriaB (parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={({ target }) => setMateriaC (parseInt(target.value))}/>
            {renderizaResultado()}
        </form>
    )
}


export default Formulario