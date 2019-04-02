const db = require('./../config/index');

module.exports = function (collection) {
    return {
        all: async function (req, res) {
            let reference = db.collection(collection);

            for (const key in req.query) {
                reference = reference.where(key, '==', req.query[key]);
            }

            const snap = await reference.get()
            const data = snap.docs.map(doc => ({ ...doc.data(), id: doc.id }));

            res.json(data);
        },
        get: async function (req, res) {
            const snap = await db.collection(collection).doc(req.params.id).get();
            const data = snap.data();

            res.json({
                id: snap.id,
                ...data
            });
        },
        post: async function (req, res) {
            await db.collection(collection).add(req.body);
            res.status(200).send();
        },
        put: async function (req, res) {
            await db.collection(collection).doc(req.params.id).set(req.body);
            res.status(200).send();
        },
        patch: async function (req, res) {
            const snap = db.collection(collection).doc(req.params.id).get();
            const data = { ...snap.data(), ...req.body }

            db.collection(collection).doc(req.params.id).set(data);
            res.status(200).send();
        },
        delete: async function (req, res) {
            await db.collection(collection).doc(req.params.id).delete();
            res.status(200).send();
        }
    }

}