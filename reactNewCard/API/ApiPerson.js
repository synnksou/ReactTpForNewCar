
export default data = [
    {
        id:1,
        name:"Antoine",
        surname:"Heinrich",
        problemeC:"wolff parkinson white",
        dateNaissance:"18:11:1999"
    },
    {
        id:2,
        name:"Mathis",
        surname:"Kazek",
        problemeC:"NaN",
        dateNaissance:"18:12:1999"
    }
]

const API_TOKEN="?";

export function getItemsByApi (text) {
    const url = 'URL DE LAPI' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
