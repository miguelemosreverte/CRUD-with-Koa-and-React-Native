
const production = process.env.REACT_APP_ENVIROMENT == "production"
const productionURL = process.env.REACT_APP_API_URL_PRODUCTION
const developmentURL = process.env.REACT_APP_API_URL_DEVELOPMENT || "http://0.0.0.0:3000"

const REACT_APP_API_URL = production ? productionURL : developmentURL
export default REACT_APP_API_URL
