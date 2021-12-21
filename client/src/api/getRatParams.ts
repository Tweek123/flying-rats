export const getRatParams = (nameOfRat: string) => fetch(`http://localhost:7421/rat/${nameOfRat}`)
                                                    .then(response => response.json())
                                                    .catch(e => console.log(e))