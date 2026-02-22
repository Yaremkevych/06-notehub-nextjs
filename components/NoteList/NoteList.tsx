import css from "./NoteList.module.css";

import { type Note } from "@/types/note";
import Link from "next/link";

interface NoteListProps {
    noteList: Note[];
}

export default function NoteList({ noteList }: NoteListProps) {
    return (
        <ul className={css.list}>
            {noteList.map((note) => (
                <li key={note.id} className={css.listItem}>
                    <h2 className={css.title}>{note.title}</h2>
                    <p className={css.content}>{note.content}</p>

                    <div className={css.footer}>
                        <span className={css.tag}>{note.tag}</span>

                        <Link className={css.link} href={`/notes/${note.id}`}>
                            View details
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    );
}
