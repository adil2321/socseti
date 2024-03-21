import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type PropsTypeDialogItems = {
    id: number
    name: string
}
type PropsTypeDialogMessage = {
    message: string
}


const DialogItems: React.FC<PropsTypeDialogItems> = ({id, name}) => {
    let path = '/Dialogs/' + id
    return <div className={s.dialog}><NavLink to={path}>{name}</NavLink></div>

}


const DialogMessage: React.FC<PropsTypeDialogMessage> = ({message}) => {

    return <div className={s.message}>{message}</div>

}


export const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>

                <div className={s.dialogItems}>
                    <DialogItems id={1} name={'света'}/>
                    <DialogItems id={2} name={'настя'}/>
                    <DialogItems id={3} name={'петя'}/>
                    <DialogItems id={4} name={'мавлюда'}/>
                </div>


                <div className={s.messages}>
                    <DialogMessage message={'КАК дела'}/>
                    <DialogMessage message={'как здвровье'}/>
                    <DialogMessage message={'все хорошо ?'}/>
                </div>


            </div>

        </div>
    );
};





