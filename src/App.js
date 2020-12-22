import React from 'react';
import {DB} from "./context/db/DbState";
import {Content} from './content/content'
import {Global} from "./context/global/GlobalState";

export const App = () => {
    return (
        <DB>

            <Global>

                <Content/>

            </Global>

        </DB>
    );
}