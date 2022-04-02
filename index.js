const fetch = require('node-fetch');
const readlineSync = require('readline-sync');


const githubAccount = () => {
    const getAccount = (username) => new Promise((resolve, reject) => {
        fetch('https://api.github.com/users/' + username)
            .then(result => result.json())
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            })
    })

    const sendResult = async () => {
        console.log('Github user information')
        const username = readlineSync.question('Masukkan username : ')
        // console.log(username)
        const dataInfo = await getAccount(username);
        if (dataInfo['message']) {
            console.log('username tidak ditemukan');
        } else {
            // console.log(dataInfo);
            console.log('Hasil dari user ' + dataInfo['html_url']);
            console.log('Nama : ' + dataInfo['name']);
            console.log('Bio : ' + dataInfo['bio']);
            console.log('Dibuat tanggal : ' + dataInfo['created_at'])
        }

    }
    sendResult()
}
githubAccount();
