module.exports = {
    getFlashcard: async (req, res) => {
        const topic_id = +req.params.topic_id;
        const db = req.app.get('db');
        const cardGet = await db.cards.get_cards(topic_id);
        res.status(200).send(cardGet);
    }, 
    addFlashcard: async (req, res) => {
        const {description} = req.body; 
        const topic_id = +req.params.topic_id;
        const db = req.app.get('db');
        await db.cards.add_cards(topic_id, description)
            .then(cards => {
                res.status(200).json(cards);
            })
            .catch(err => {
                res.status(409).send(`Please provide a description`)
            });
    },
    editFlashcard: async (req, res) => {
        const {topic_id, card_id, description} = req.body;
        const db = req.app.get('db');
        const cardUpdate = await db.cards.edit_card([topic_id, card_id, description]);
        res.status(200).send(cards);
    },
    deleteFlashcard: async (req, res) => {
        // const {topic_id, card_id} = req.body;
        const card_id = +req.params.card_id;
        const topic_id = +req.body.topic_id;
        console.log(req.params);
        // const {user_id} = req.session.user;
        const db = req.app.get('db');
        const cardDestroyer = await db.cards.delete_card(topic_id, card_id); //sql $1, $2
        res.status(200).send(cards);        
    }
};