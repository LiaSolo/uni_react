import { useNavigate } from 'react-router-dom';
import './styles.css';


function ShortInfoBlock(faculty) {
    const fstyle = { color: faculty['color'] }
    const navigate = useNavigate()
    const navigateToInterview = () => { navigate(`/parts/${faculty['alias']}`);}

    return(
        <div className='short_info_block' onClick={navigateToInterview}>  
            <div className='photo_container_outer'>
                <div className="photo_inner">
                    <img src={require(`../../pages/assets/photos/${faculty['alias']}.png`)} height='85px'/>      
                </div>              
            </div>
            <div className='faculty_logo'>
                <img src={require(`../../pages/assets/logos/${faculty['alias']}.png`)} height='105%'/>
            </div> 
            <div className='text_container'>
                <div className='name_faculty' style={fstyle}>
                    {faculty['name']}
                </div>
                <div className='singer'>{faculty['singer']}</div>
                <div className='song'>{faculty['song']}</div>
            </div>
                         
        </div>
    )
}

export default ShortInfoBlock;