import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data));

    }, [country, street, subject])

    useEffect( () => {
        tg.onEvent('mainButtonClicled', onSendData)
        return () => {
            tg.offEvent('mainButtonClicled', onSendData)
        }
    } , [onSendData()])


    useEffect(() => {
        tg.MainButton.setParams({
            text: 'отправить данные'

        })
    }, []);
    useEffect(() => {
        if(!street | !country) {
            tg.MainButton.hide();

        } else {
            tg.MainButton.show();
        }
    }, [country, street]);

    const onChangeCounty = (e) => {
        setCountry(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }




    return (
            <div className={"form"}>
                <input className={'input'} type="text" placeholder={'страна'} value={country} onChange={onChangeCounty}/>
                <input className={'input'} type="text" placeholder={'улица'} value={street} onChange={onChangeStreet}/>
                <select valuse={subject} onChange={onChangeSubject} className={'select'}>
                    <option value={'physical'}>Физ.лицо</option>
                    <option value={'legal'}>юр.лицо</option>
                </select>
            </div>
        );

}

export default Form;