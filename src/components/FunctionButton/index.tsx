import { Button } from 'antd';
import { changeScore } from 'app/playerSlice';
import React from 'react'
import { useDispatch } from 'react-redux';
import 'antd/lib/button/style/index.css';
import './index.scss';

interface FunctionButtonProps {
    color: string;
    displayText: string;
    amount: number;
    keyID: string;
}

function FunctionButton(props: FunctionButtonProps) {
    const _dispatch = useDispatch();

    const _handleClick = (e: React.MouseEvent<HTMLElement>) => {
        console.log(props);
        _dispatch(changeScore({key: props.keyID, amount: props.amount}))
    }

    return (
        <Button onClick={_handleClick} className={`fn-btn ${props.color}`} type='dashed'>{props.displayText}</Button>
    )
}

export default FunctionButton;
