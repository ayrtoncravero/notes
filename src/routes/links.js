const express = require('express');
const router = express.Router();

const pool = require('../../database');

const { isLoggedIn } = require('../lib/auth');

router.get('/add', isLoggedIn, (req, res) => {
   res.render('links/add.handlebars');
});

router.post('/add',  isLoggedIn, async (req, res) => {
   const {title, description} = req.body;
   const newNote = {
      title,
      description,
      user_id: req.user.id
   };

   await pool.query('INSERT INTO notes set ?', [newNote]);

   req.flash('success', 'Note saved successfully');

   res.redirect('/links');
});

router.get('/', isLoggedIn, async (req, res) => {
   const notes = await pool.query('SELECT * FROM notes WHERE user_id = ?', [req.user.id]);

   res.render('links/list', { notes });
});

router.get('/delete/:id', isLoggedIn, async (req, res) => {
   const { id } = req.params;

   await pool.query('DELETE FROM notes WHERE ID = ?', [id]);

   req.flash('success', 'Note removed  successfully');

   res.redirect('/links');
});

router.get('/edit/:id', isLoggedIn, async (req, res) => {
   const { id } = req.params;
   let note = await pool.query('SELECT * FROM notes WHERE ID = ?', [id]);

   res.render('links/edit', {note: note[0]});
})

router.post('/edit/:id', isLoggedIn, async (req, res) => {
   const { id } = req.params;
   const { title, description } = req.body;
   const newNote = {
      title,
      description
   };

   await pool.query('UPDATE notes set ? WHERE id = ?', [newNote, id]);

   req.flash('success', 'Note updated successfully');

   res.redirect('/links');
});

module.exports = router;