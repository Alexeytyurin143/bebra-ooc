import React, { useState } from 'react'
import { Alert, Calendar, theme } from 'antd';
import dayjs from 'dayjs';


const EventCalendar = () => {
    const { token } = theme.useToken();
    const [value, setValue] = useState(() => dayjs('2023-04-15'));
    const [selectedValue, setSelectedValue] = useState(() => dayjs('2023-04-15'));
    const onSelect = (newValue) => {
        setValue(newValue);
        setSelectedValue(newValue);
    };
    const onPanelChange = (newValue) => {
        setValue(newValue);
    };

    const wrapperStyle = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    return (
        <div style={wrapperStyle}>
            <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
            <Calendar fullscreen={false} value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
        </div>
    )
}

export default EventCalendar