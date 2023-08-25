import './styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu(){ 
    const [isOpen, setOpen] = useState(false);

    const handleMenuClick = () => {
        setOpen(!isOpen)};

    const navigate = useNavigate()
    const navigateToParticipants = () => { navigate('/parts');}
    const navigateToMain = () => { navigate('/');}
    
    return(
        <div className='BurgerMenu' style={isOpen ? {pointerEvents: 'auto'} : {pointerEvents: 'none'}}>
            <div className='menu_button_container' onClick={handleMenuClick}>
            {!isOpen ?
                <div className='icon_menu_closed'>
                    <div className='icon_menu_line'></div>
                </div> :

                <div className='icon_menu_open'>
                    <div className='icon_menu_line'></div>
                </div>}
            </div>

            <div className="Menu" style={isOpen ? {scale: '5'} : {scale: '0'}}>
                <div className='links_block'>
                    <div onClick={navigateToMain}>Главная</div>
                    <div onClick={navigateToParticipants}>Участники</div>
                </div>
            </div>     
        </div>

        
    )

}

export default Menu