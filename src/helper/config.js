const configEnv = (env) => {
    let BASE_URI, PORT, DATABASE;
    PORT=3000;
    if(env.ENV == "dev"){
        BASE_URI=`http://localhost:${PORT}`;
        DATABASE=env.MONGODB_LOCAL;
    }else if(env.ENV == "prod"){
        DATABASE = env.MONGODB_URI;
    }
    return {DATABASE, BASE_URI, PORT};
}

module.exports = {configEnv};