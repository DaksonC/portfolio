import { RiInformationLine } from "react-icons/ri";
import './styles.css';

export function Information(){
    return(
        <div className="info_container">
            <button className="info">
                <RiInformationLine />
            </button>
        </div>
    )
}