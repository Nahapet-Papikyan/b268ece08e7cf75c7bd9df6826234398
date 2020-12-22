let sha1 = require('js-sha1');

export const getKey = () => {
    let time = new Date()
    let t =  time.getUTCMinutes()-(time.getUTCMinutes()%5) + time.getUTCHours();
    let t1 = t % 10
    let t2 = parseInt(t / 10) + t1
    return sha1(sha1(t.toString()).slice(t1, t2));

}