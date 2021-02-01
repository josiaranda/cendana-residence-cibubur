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