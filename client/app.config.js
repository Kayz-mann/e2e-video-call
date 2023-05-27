import "dotenv/config";

export default ({ config }) => {
    const isProduction = process.env.PRODUCTION === "true";

    return {
        ...config,
        extra: {
            apiUrl: isProduction ? process.env.API_URL : process.env.API_URL,
            isProduction,
            defaultLanguage: process.env.DEFAULT_LANGUAGE,
        }
    }
}