const API = `http://localhost:3000`;

export const getAllUser = () => {
    return new Promise((resolve, reject) => {
        return fetch(`${API}/api/users`, {
            method: 'GET',
        }).then(respond => {
            respond.json().then(res => {
                const data = res.data;
                if (res.status == "ok") {
                    console.log('Get All Users SUCCESS', data);
                    resolve(data);
                } else {
                    reject(res);
                    console.error('Get All Users FAILED', res);
                }
            }).catch(error => {
                reject(error);
                console.error('Get All Tables Users FAILED B', error)
            })
        }).catch(error => {
            reject(error);
            console.error('Get All Tables Users FAILED A', error);
        });
    })
}

export const getOneUser = (id) => {
    return new Promise((resolve, reject) => {
        return fetch(`${API}/api/users/${id}`, {
            method: 'GET',
        }).then(respond => {
            respond.json().then(res => {
                const data = res.data;
                if (res.status == "ok") {
                    console.log('Get All Users SUCCESS', data);
                    resolve(data);
                } else {
                    reject(res);
                    console.error('Get All Users FAILED', res);
                }
            }).catch(error => {
                reject(error);
                console.error('Get All Tables Users FAILED B', error)
            })
        }).catch(error => {
            reject(error);
            console.error('Get All Tables Users FAILED A', error);
        });
    })
}

export const createUser = (body) => {
    return new Promise((resolve, reject) => {
        return fetch(`${API}/api/users`, {
            method: 'POST',
            body:JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(respond => {
            respond.json().then(res => {
                if (res.status == "ok") {
                    console.log('Create User SUCCESS', res);
                    resolve(res);
                } else {
                    reject(res);
                    console.error('Create User FAILED', res);
                }
            }).catch(error => {
                reject(error);
                console.error('Create User FAILED B', error)
            })
        }).catch(error => {
            reject(error);
            console.error('Create User FAILED A', error);
        });
    })
}

export const patchUser = (body) => {
    return new Promise((resolve, reject) => {
        return fetch(`${API}/api/users`, {
            method: 'PATCH',
            body:JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(respond => {
            respond.json().then(res => {
                if (res.status == "ok") {
                    console.log('Patch User SUCCESS', res);
                    resolve(res);
                } else {
                    reject(res);
                    console.error('Patch User FAILED', res);
                }
            }).catch(error => {
                reject(error);
                console.error('Patch User FAILED B', error)
            })
        }).catch(error => {
            reject(error);
            console.error('Patch User FAILED A', error);
        });
    })
}