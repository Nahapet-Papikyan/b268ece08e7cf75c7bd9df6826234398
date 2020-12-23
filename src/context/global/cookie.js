
let sha1 = require('js-sha1');
export const user = {
    set: id => {
        let d = new Date();
        d.setTime(d.getTime() + (60 * 60 * 1000))
        let expires = "expires=" + d.toUTCString()
        id = id.toString()
        while (id.length < 10) id = `0${id}`
        let _id = ""
        for (let i = 0; i < id.length; i++)
            _id += sha1(id[i])

        document.cookie = `${sha1("mtaca")}=${_id}; ${expires} ;path=/`;


    },
    out: () => {
        let d = new Date();
        d.setTime(d.getTime() - (60 * 60 * 1000))
        let expires = "expires=" + d.toUTCString()
        document.cookie = `${sha1("mtaca")}=""; ${expires} ;path=/`
    },
    get: () => {
        let res = {
            id: "",
            status: false
        };
        decodeURIComponent(document.cookie)
            .split('; ')
            .map(async c => {
                let [name, val] = c.split("=")
                if (name === sha1("mtaca")) {
                    val = val.match(new RegExp('.{1,40}', 'g')).map(item=>  ["b6589fc6ab0dc82cf12099d1c2d40ab994e8410c", "356a192b7913b04c54574d18c28d46e6395428ab", "da4b9237bacccdf19c0760cab7aec4a8359010b0",
                        "77de68daecd823babbb58edb1c8e14d7106e83bb",
                        "1b6453892473a467d07372d45eb05abc2031647a",
                        "ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4",
                        "c1dfd96eea8cc2b62785275bca38ac261256e278",
                        "902ba3cda1883801594b6e1b452790cc53948fda",
                        "fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f",
                        "0ade7c2cf97f75d009975f4d720d1fa6c19f4897"
                        ].indexOf(item)
                           ).reverse();

                    let k = 0,
                    p =1
                     val.map(item =>{
                        k+= item*p;p*=10
                    })
                    res.id = k
                    res.status=true;
                }
            })

        return res

    }
}