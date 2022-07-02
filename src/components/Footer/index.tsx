import { AiTwotoneMail } from 'react-icons/ai'
import { ImWhatsapp } from 'react-icons/im'
import './styles.css'

export function Footer(){
    return(
        <>
            <div className="footer">
                <div className="icon_whatsapp">
                    <ImWhatsapp />
                </div>
                <div className="icon_email">
                    <AiTwotoneMail />
                    <h5>daksonc@gmail.com </h5>
                </div>
            </div>
        </>
    )
}