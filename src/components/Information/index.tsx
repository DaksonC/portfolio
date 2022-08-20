import { useState } from "react";
import { RiInformationLine } from "react-icons/ri";
import { Modal } from "../Modal";
import './styles.css';

export function Information(){
    const [ isModalVisible, setIsModalVisible ] = useState(false);


    return(
        <>
            {
                isModalVisible ? (
                    <Modal onClose={() => setIsModalVisible(false)} >
                        <h1>Modal</h1>
                    </Modal> 
                ): null
            }
            <div className="info_container">
                <button 
                    className="info"
                    onClick={() => setIsModalVisible(true)}
                >
                    <RiInformationLine />
                </button>
            </div>
        </>
    )
}