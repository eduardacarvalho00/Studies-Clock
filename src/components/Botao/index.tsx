import React,{ InputHTMLAttributes} from 'react';
import style from'./Botao.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: "button" | "reset" | "submit" | undefined;
    onClick?: () => void;
    children?: React.ReactChild;
}

function Botao({onClick, type, children}: InputProps){
    return(
        <button 
            onClick={onClick} 
            type={type} 
            className={style.botao}
            > 
            {children}
        </button>
    )
}



export default Botao;