import { Editor } from "@tiptap/react";

export interface MenuBarProps {
    editor: Editor | null;
}

export interface RichTextEditorProps {
    content?: string;
    onChange?: (content: string) => void;
    editable: boolean;
}

