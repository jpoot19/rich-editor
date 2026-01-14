
import { useState } from 'react'
import './App.css'
import RichTextEditor from './RichTextEditor/RichTextEditor'

function App() {

  const [content, setContent] = useState<string>("Type your text here...")

  return (
    <>
      <div style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'sans-serif' }}>
        <h1>Editor WYSIWYG React + TS</h1>

        <div style={{ marginBottom: '20px' }}>
          <RichTextEditor
            content={content}
            onChange={(newHtml) => setContent(newHtml)}
            editable={true}
          />
        </div>
      </div>
    </>
  )
}

export default App
