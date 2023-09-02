import './styles.css';
import Menu from '../../components/Menu';
import { useNavigate } from 'react-router-dom';


function Main(){

  
  const navigate = useNavigate()
  const navigateToParticipants = () => { navigate('/parts');}

    return(
        <div className="App">
          {Menu()}
          <div className='main_content_container'>
            <div className="Uni-logo"></div> 
            <div className='svg_gradientlines_container'>
                    <div className='svg_container'></div>
                </div>     
            <buttonEnable onClick={() => window.open('https://event-spbu.timepad.ru/event/2401344/')}> Билеты на Гранд-Финал</buttonEnable>
            <buttonEnable onClick={navigateToParticipants}>Участники</buttonEnable>
            <buttonDisable>Набор участников
              <div>[Набор закрыт]</div></buttonDisable>
            <buttonDisable>Набор организаторов
              <div>[Набор закрыт]</div></buttonDisable>
            <buttonDisable>Набор артистов и ведущих
              <div>[Набор закрыт]</div></buttonDisable>
            <div className='link_container' onClick={() => window.open('https://vk.com/spbuevent')}>
              <div className='vk_logo'></div>     
              <div>by SPbU Event</div>
          </div>
          
          </div> 
        </div>
        
    )
    
}

export default Main;