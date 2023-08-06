const config = {
    isProduction: process.env.NODE_ENV === "production",
    socketURI: 
        process.env.NODE_ENV === "production"?process.env.SERVER_URI: `http://localhost:${process.env.SERVER_PORT}/`,
};
export default config;