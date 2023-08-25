import './styles.css';
import ShortInfoBlock from '../../components/ShortInfoBlock/index';
import { faculties } from '../../Faculties';
import Menu from '../../components/Menu';

function Participants(){  
    const bio_block = ShortInfoBlock(faculties['bio'])
    const vostok_block = ShortInfoBlock(faculties['vostok'])
    const jourfac_block = ShortInfoBlock(faculties['jourfac'])
    const hsm_block = ShortInfoBlock(faculties['hsm'])
    const inoz_block = ShortInfoBlock(faculties['inoz'])
    const inyaz_block = ShortInfoBlock(faculties['inyaz'])
    const irkiar_block = ShortInfoBlock(faculties['irkiar'])
    const arts_block = ShortInfoBlock(faculties['arts'])
    const hist_block = ShortInfoBlock(faculties['hist'])

    return(
        <div className="App">
            {Menu()}
            <h2>Участники</h2>

            
            <div className='line_container'>
                <div className='vinyl_icon_container'></div>
            </div>
            <div className='people_container'>
               {bio_block}
               {vostok_block} 
               {jourfac_block}
               {hsm_block}
               {inoz_block}
               {inyaz_block}
               {irkiar_block}
               {arts_block}
               {hist_block}
               {irkiar_block}
               {arts_block}
               {hist_block}
            </div>
    
        </div>
        
    )
}

export default Participants;