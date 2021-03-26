import { Table } from "antd";
import "antd/lib/table/style/index.css";
import { RootState } from "app/store";
import FunctionButton from "components/FunctionButton";
import React from "react";
import { useSelector } from "react-redux";

function Scoreboard() {
    const _players = useSelector((state: RootState) => state.players);

    const _columns = [
        {
            title: "Name",
            dataIndex: "displayName",
        },
        {
            title: "Score",
            dataIndex: "score",
            sorter: {
                // @ts-ignore
                compare: (a, b) => a.score - b.score,
                tooltip: false
            },
        },{
            dataIndex: 'decrease',
            //@ts-ignore
            render: (text, record) => <FunctionButton keyID={record.key} color="warning" displayText="-" amount={-1} />
        },{
            dataIndex: 'increase',
            //@ts-ignore
            render: (text, record) => <FunctionButton keyID={record.key} color="primary" displayText="+" amount={1} />
        }
    ];

    return <Table columns={_columns} dataSource={_players} pagination={false} showSorterTooltip={false} />;
}

export default Scoreboard;
