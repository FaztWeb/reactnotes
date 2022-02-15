import { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../config/init";
import "../App.css";

import { Note } from "../components/Note/Note";
import { NoteForm } from "../components/NoteForm/NoteForm";
import { toast } from "react-toastify";

export const HomePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log("cargo");
    const unsub = onSnapshot(
      collection(db, "tasks"),
      (querySnapshot) => {
        setNotes(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      },
      (err) => {
        console.log(err);
      }
    );
    return () => unsub();
  }, []);

  const addNote = async (text) => {
    try {
      const newNote = {
        text,
      };
      const docRef = await addDoc(collection(db, "tasks"), newNote);
      newNote.id = docRef.id;
      setNotes([...notes, newNote]);
    } catch (error) {
      console.error(error);
    }
  };

  const removeNote = async (id) => {
    try {
      await deleteDoc(doc(db, "tasks", id));
      toast("Note removed");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="grid">
      {notes.map((note) => (
        <Note note={note} key={note.id} removeNote={removeNote} />
      ))}
    </section>
  );
};
