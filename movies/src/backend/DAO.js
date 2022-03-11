export default class DAO {
    static async getMovies() {
        const res = await fetch('http://localhost:5000/movies')
        const data = await res.json()
        return data
    }
    static async getMovie(id) {
        const res = await fetch(`http://localhost:5000/movies/${id}`)
        const data = await res.json()
        return data
    }
    static async addMovie(movie) {

        const res = await fetch('http://localhost:5000/movies', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(movie),
        })
        const data = await res.json()
        return data
    }
    static async updateMovie(movie) {

        const res = await fetch(`http://localhost:5000/movies/${movie.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(movie),
        })
        const data = await res.json()
        return data
    }
    static async deleteMovie(id) {
        try {
            const res = await fetch(`http://localhost:5000/movies/${id}`, {
                method: 'DELETE',
            })
         const data = await res.json()
            return {data}
        } catch (error) {
            console.log(error)
            return {error}
        }

    }
}