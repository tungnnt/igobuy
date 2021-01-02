const axios = require('axios')

module.exports = async (username, cookie, csrf, ipHeader, password = 'Pa55w0rds') => {
    const headers = {
        'authority': 'igobuy.app',
        'accept': '*/*',
        'x-requested-with': 'XMLHttpRequest',
        'user-token-csrf': csrf,
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://igobuy.app',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://igobuy.app/index/user/login.html',
        'accept-language': 'en-US,en;q=0.9',
        'cookie': cookie,
        ...ipHeader
    }

    const data = `tel=${username}&pwd=${password}&_csrf_=${csrf}&reCAPTCHA=`

    const options = {
        url: 'https://igobuy.app/index/user/do_login.html',
        method: 'POST'
    }

    const response = await axios({ method: options.method || 'GET', url: options.url, headers, data })

    return response.data
}
