import './styles.css';
import { CastingButton } from '../../components/CastingButtons';
import Menu from '../../components/Menu';
import { useNavigate } from 'react-router-dom';

function Casting() {
    const navigate = useNavigate()
    const navigateToMain = () => { navigate('/');}

    return(
        <div className='App'>
            {Menu()}
            <div className='main_content_container'>
                <button onClick={navigateToMain}>На главную</button>
                <div className='svg_lines_container'>
                    <div className='svg_container'></div>
                </div>
                {CastingButton('bio')}
                {CastingButton('vostok')}
                {CastingButton('jourfac')}
                {CastingButton('hsm')}
                {CastingButton('inoz')}
                {CastingButton('inyaz')}
                {CastingButton('irkiar')}
            </div>
            
        </div>
    )
}

export default Casting
