import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addPlayer } from "app/playerSlice";
import { nanoid } from "nanoid";

import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import 'antd/lib/tooltip/style/index.css';
import "./index.scss";

function InputPlayer() {
    const [_text, _setText] = useState<string>("");
    const dispatch = useDispatch();
    const _handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        _setText(e.target.value);
    };

    const _handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (_text) {
            dispatch(addPlayer({key: nanoid(5),  displayName: _text }));
        }
        _setText("");
    };

    return (
        <form onSubmit={_handleSubmit} className="input-player">
            <Input.Group compact>
                <Input
                    onChange={_handleInputChange}
                    value={_text}
                    placeholder="player name"
                    prefix={<UserOutlined />}
                />
                <Button htmlType="submit" type="primary">
                    ADD
                </Button>
            </Input.Group>
        </form>
    );
}

export default InputPlayer;
