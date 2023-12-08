
import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

interface NavigationBarProps {
    redirectPage: (index: number) => void;
}

const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: '1'
    },
    {
        label: 'Wiki',
        key: '2',
    },
    {
        label: 'Contact',
        key: '3',
    }
];

function NavigationBar({ redirectPage }: NavigationBarProps) {

    
    const onClick: MenuProps['onClick'] = (e) => {
        const key = parseInt(e.key);
        redirectPage(key);
    };

    return (
        <div className="home-page">

            <Menu
                mode="horizontal"
                style={{
                    position: 'absolute', 
                    left: 0, 
                    top: 0,
                    width: '100vw',
                    color: 'wheat',
                    backgroundColor: 'rgb(40,40,40)',
                    fontSize: '20px',
                }}
                
                items={items}
                onClick={onClick}
            >
            </Menu>
        </div>
    );
}

export default NavigationBar;





