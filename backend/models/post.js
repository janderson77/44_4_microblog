const db = require("../db")

class Post {
    static async newPost(data) {
        const res = await db.query(
            `
            INSERT INTO posts
            (title, description, body)
            VALUES ($1, $2, $3)
            RETURNING id, title, description, body
            `,
            [
                data.title,
                data.description,
                data.body
            ]
        );
        return res.rows[0]
    }

    static async getAll() {
        const res = await db.query(`
            SELECT * FROM posts
            ORDER BY id
        `)

        return res.rows
    }

    static async remove(id, title) {
        const res = await db.query(`
            DELETE FROM posts
            WHERE id = $1
            RETURNING title
        `,
        [id])

        if (res.rows.length === 0) {
            let notFound = new Error(`The post titled ${title} does not exist`)
            notFound.status = 404;
            throw notFound
        }
    }
}

module.exports = Post