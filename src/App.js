import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList,PostEdit,PostCreate,PostIcon } from './posts';
import { UserList } from './users';

import authProvider from './authProvider';


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('X-Custom-Header', 'foobar');
    return fetchUtils.fetchJson(url, options);
}
//const dataProvider = jsonServerProvider('http://localhost:3008', httpClient);
const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/IharOknorp/JsonServer', httpClient);

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider} title="Example Admin">
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
