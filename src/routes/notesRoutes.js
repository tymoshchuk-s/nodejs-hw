import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';

import {
  getAllNotesSchema,
  noteIdSchema,
  createNoteSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

import { authenticate } from '../middleware/authenticate.js';

const noteRouter = Router();

noteRouter.use('/notes', authenticate);

noteRouter.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
noteRouter.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
noteRouter.post('/notes', celebrate(createNoteSchema), createNote);
noteRouter.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);
noteRouter.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);

export default noteRouter;
