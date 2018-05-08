import React, { Component } from 'react';


function deleteData(item, url) {
    return fetch(url + '/' + item, {
        method: 'delete'
    })
        .then(response => response.json());
}

export default deleteData;