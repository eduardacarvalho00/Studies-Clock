import style from './Item.module.scss';
import { ITarefa } from '../../../types/tarefa';


interface Props extends ITarefa{
    selecionaTarefa:(tarefaSelecionada: ITarefa) => void;
}

export default function Item(
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa
    }: Props){
    console.log('item atual: ',{ tarefa, tempo, selecionado, completado, id});

        return(
            <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
            onClick={() => !completado && selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id,
                }
            )}>
                <h2> {tarefa}</h2>
                <span>{tempo}</span>
                {completado && <span className={style.concluido} aria-label='tarefa completada'></span>}
            </li>
        )    
}