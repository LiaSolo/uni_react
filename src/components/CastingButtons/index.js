import './styles.css';
import { casting } from '../../CastingInfo';

export function CastingButton(faculty) {
    return(
        <div className='button_container'>
        {casting[faculty]['is-open'] ? 
        <btn_casting_enable 
        onClick={() => window.open(casting[faculty]['casting-link'])}>{casting[faculty]['name']}</btn_casting_enable> :
        <btn_casting_disable>{casting[faculty]['name']}
            <div>[Отбор завершён]</div></btn_casting_disable>}
        </div>
    )
}
