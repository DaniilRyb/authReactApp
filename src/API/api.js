export const getDataNasaAPI = async () => {
    return await fetch("https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY")

}