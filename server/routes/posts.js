import express from 'express';
const router = express.Router();
const posts = [];

router.post('/', (req, res) => {
    const post = req.body;

    if (post.id) {
        posts.push(post);
        res.json({
            message: 'Post was created successfully',
            posts
        });
    }
    else {
        res.status(401).json({ error: 'Invalid post id' } );
    }
});

router.get('/', (req, res) => {
    res.json({ posts });
});

export default router;