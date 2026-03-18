import express from "express";
import Note from "../models/note.model.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // -1 will sort in desc order (newest first)
    if (notes.length === 0) {
      res.status(200).json(notes);
    }
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error(error);
  }
}

export async function getNoteById(req, res) {
  try {
    const searchedNote = await Note.findById(req.params.id);
    if (!searchedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(searchedNote);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error(error);
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error(error);
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true },
    );

    if (!updateNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({
      message: "Note updated successfully",
      updateNote: updatedNote,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error(error);
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successufully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error(error);
  }
}
