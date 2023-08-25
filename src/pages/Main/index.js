import './styles.css';
import logo from '../assets/uni_logo.png'
import vk from '../assets/vk_logo.png' 
import Menu from '../../components/Menu';
import { useNavigate } from 'react-router-dom';


function Main(){

  
  const navigate = useNavigate()
  const navigateToParticipants = () => { navigate('/parts');}

    return(
        <div className="App">
          {Menu()}
          <img src={logo} className="Uni-logo" alt="logo" />       
          <buttonEnable onClick={() => window.open('https://event-spbu.timepad.ru/event/2401344/')}> Билеты на Гранд-Финал</buttonEnable>
          <buttonEnable onClick={navigateToParticipants}>Участники</buttonEnable>
          <buttonDisable>Набор участников
            <div>[Набор закрыт]</div></buttonDisable>
          <buttonDisable>Набор организаторов
            <div>[Набор закрыт]</div></buttonDisable>
          <buttonDisable>Набор артистов и ведущих
            <div>[Набор закрыт]</div></buttonDisable>
          <div className='link_container' onClick={() => window.open('https://vk.com/spbuevent')}>
            <img src={vk} width='100' height='100' alt='vk'/>      
            <div>by SPbU Event</div>
          </div> 
        </div>
        
    )
    
}

export default Main;