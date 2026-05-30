import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';

const noteRouter = Router();

noteRouter.get('/notes', getAllNotes);
noteRouter.get('/:noteId', getNoteById);
noteRouter.post('/notes', createNote);
noteRouter.put('/:noteId', updateNote);
noteRouter.delete('/:noteId', deleteNote);

export default noteRouter;
