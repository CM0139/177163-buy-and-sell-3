'use strict';

const { Router } = require(`express`);

const offersRoutes = new Router();

offersRoutes.get(`/category/:id`,
    (req, res) => res.send(`/offers/category/:id`));
offersRoutes.get(`/add`, (req, res) => res.send(`/offers/add`));
offersRoutes.get(`/edit/:id`, (req, res) => res.send(`/offers/edit/:id`));
offersRoutes.get(`/:id`, (req, res) => res.send(`/offers/:id`));

module.exports = offersRoutes;