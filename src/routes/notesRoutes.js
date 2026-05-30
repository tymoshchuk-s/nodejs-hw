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
noteRouter.get('/notes/:noteId', getNoteById);
noteRouter.post('/notes', createNote);
noteRouter.put('/notes/:noteId', updateNote);
noteRouter.delete('/notes/:noteId', deleteNote);

export default noteRouter;
