import React, {useState} from 'react';
import s from "./Post.module.css";


type PropsType = {
    message:string
    count:number
}
export const Post:React.FC<PropsType> = ({message,count}) => {

    let[schet,setSchet]=useState(0)



    return (
            <div className={s.item}>
                <img src={'https://kartinki.pics/uploads/posts/2022-02/1646021470_2-kartinkin-net-p-krasivie-kartinki-na-avu-estetika-2.jpg'}/>
                {message}
                <div>
                    <span onClick={()=>setSchet(schet +1)}>{schet} like</span>

                </div>
            </div>


    );
};

