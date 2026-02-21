import axios from "axios";
import { type Note } from "../types/note";

const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const API = axios.create({
    baseURL: "https://notehub-public.goit.study/api",
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
});

export interface FetchNotesResponse {
    notes: Note[];
    totalPages: number;
}

export interface FetchNotesParams {
    search?: string;
    page?: number;
    perPage?: number;
}

export const fetchNotes = async ({
    search = "",
    page = 1,
    perPage = 12,
}: FetchNotesParams): Promise<FetchNotesResponse> => {
    const response = await API.get<FetchNotesResponse>("/notes", {
        params: { search, page, perPage },
    });
    return response.data;
};

export const createNote = async (
    noteData: Omit<Note, "id" | "createdAt" | "updatedAt">,
): Promise<Note> => {
    const response = await API.post<Note>("/notes", noteData);
    return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
    const response = await API.delete<Note>(`/notes/${id}`);
    return response.data;
};
