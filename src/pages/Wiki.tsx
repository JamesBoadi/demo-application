import React from 'react';
import * as api from '../api/api';
const Wiki = () => {

    const loadPage = () => {

        // Call to server to load page details from database
        api.getPageDetails();

    }


    return (
        <div >
            <header>
                <a>
                    Welcome to the Wiki page
                </a>
            </header>
        </div>
    );
}

export default Wiki;