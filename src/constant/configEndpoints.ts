let domain = () => {
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV == 'production')
        return "http://www.boss-accounting.com:8005"

    else if (process.env.NODE_ENV == 'development')
        return "http://localhost:3000"
};
const api = "/";

export const baseURL = domain() + api;
