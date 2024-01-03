let BASE_URL = 'http://localhost:3001/'

if(process.env.NODE_ENV === 'production') {
    BASE_URL = 'https://bike-labs-4b05568e3735.herokuapp.com/'
}

export { BASE_URL }

