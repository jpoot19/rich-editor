import type React from "react";
import type { RichTextEditorProps } from "./types";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import styles from "./styles.module.css"
import MenuBar from "./components/MenuBar";

const RichTextEditor: React.FC<RichTextEditorProps> = ({
    content = "",
    onChange,
    editable = true,
}) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: content,
        editable: editable,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML()
            if (onChange) {
                onChange(html)
            }
        }
    })

    useEffect(() => {
        if (editor && content !== editor.getHTML()) {
            editor.commands.setContent(content)
        }
        editor?.setEditable(editable)
    }, [content, editable, editor])

    return (
        <div className={styles.editorWrapper}>
            {/* Solo mostramos el menú si es editable */}
            {editable && <MenuBar editor={editor} />}

            <div className={styles.editorContent}>
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}

export default RichTextEditor;