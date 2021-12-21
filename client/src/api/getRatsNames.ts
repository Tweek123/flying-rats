export const getRats = () => fetch('http://localhost:7421/rat-names')
                                .then(response => response.json())
                                .catch(e => console.log(e))