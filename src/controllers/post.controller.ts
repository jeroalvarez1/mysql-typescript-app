import { Request, Response } from "express";
import { connect } from "../database";
import { Post } from "../interface/post.interface";

export async function getPosts(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts;');
    return res.json(posts[0]);
};

export async function createPost(req: Request, res: Response): Promise<Response> {
    const newPost: Post = req.body; //consulta el body de la petición POST
    const conn = await connect();
    await conn.query('INSERT INTO posts SET ?', [newPost]);
    return res.json({
        message: 'Post created successfully'
    });
};

export async function getPost(req: Request, res: Response): Promise<Response> {
    const id = req.params.postId;
    const conn = await connect();
    const post = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
    return res.json(post[0]);
};

export async function deletePost(req: Request, res: Response): Promise<Response> {
    const id = req.params.postId;
    const conn = await connect();
    const query = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
    if (!('' + query[0])) {
        return res.json({
            message: 'Post was not deleted successfully, because it dont exist'
        })
    } else {
        await conn.query('DELETE FROM posts WHERE id = ?', id);
        return res.json({
            message: 'Post was deleted successfully'
        })
    }    
}

export async function updatePost(req: Request, res: Response): Promise<Response> {
    const id = req.params.postId;
    const updatedPost: Post = req.body;
    const conn = await connect();
    await conn.query('UPDATE posts SET ? WHERE id = ?', [updatedPost, id]);
    return res.json({
        message: 'Post updated successfully'
    })

}