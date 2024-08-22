import { useCallback } from 'react';
import {
  AiOutlineBold,
  AiOutlineClose,
  AiOutlineEnter,
  AiOutlineItalic,
  AiOutlineOrderedList,
  AiOutlineRedo,
  AiOutlineStrikethrough,
  AiOutlineUndo,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BiParagraph } from "react-icons/bi";
import { FiCode } from "react-icons/fi";
import { MdOutlineLayersClear } from "react-icons/md";
import { PiCodeBlock, PiQuotes, PiImageSquareBold } from "react-icons/pi";
import { TbSpacingVertical } from "react-icons/tb";

const MenuBar = ({ editor }) => {
  const addImage = useCallback(() => {
    const url = window.prompt('URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  const headingLevels = [
    { level: 1, label: 'H1', className: 'font-black' },
    { level: 2, label: 'H2', className: 'font-extrabold' },
    { level: 3, label: 'H3', className: 'font-semibold' },
    { level: 4, label: 'H4', className: 'font-medium' },
    { level: 5, label: 'H5', className: 'font-normal' },
    { level: 6, label: 'H6', className: 'font-normal' }
  ];

  return (
    <div className="border border-slate-300 rounded-lg p-5 sticky top-3 left-0 right-0 bg-white z-10 flex gap-0.5 flex-wrap">
      {headingLevels.map(({ level, label, className }) => (
        <button
          key={level}
          onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
          className={`editor-btn ${className} ${editor.isActive("heading", { level }) ? "active-editor-btn" : ""}`}
        >
          {label}
        </button>
      ))}

      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`editor-btn ${editor.isActive("bold") ? "active-editor-btn" : ""}`}
      >
        <AiOutlineBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`editor-btn ${editor.isActive("italic") ? "active-editor-btn" : ""}`}
      >
        <AiOutlineItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`editor-btn ${editor.isActive("strike") ? "active-editor-btn" : ""}`}
      >
        <AiOutlineStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`editor-btn ${editor.isActive("code") ? "active-editor-btn" : ""}`}
      >
        <FiCode />
      </button>
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="editor-btn"
      >
        <MdOutlineLayersClear />
      </button>
      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className="editor-btn"
      >
        <AiOutlineClose />
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`editor-btn ${editor.isActive("paragraph") ? "active-editor-btn" : ""}`}
      >
        <BiParagraph />
      </button>
      <button onClick={addImage} className='editor-btn'><PiImageSquareBold /></button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`editor-btn ${editor.isActive("bulletList") ? "active-editor-btn" : ""}`}
      >
        <AiOutlineUnorderedList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`editor-btn ${editor.isActive("orderedList") ? "active-editor-btn" : ""}`}
      >
        <AiOutlineOrderedList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`editor-btn ${editor.isActive("codeBlock") ? "active-editor-btn" : ""}`}
      >
        <PiCodeBlock />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`editor-btn ${editor.isActive("blockquote") ? "active-editor-btn" : ""}`}
      >
        <PiQuotes />
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="editor-btn"
      >
        <TbSpacingVertical />
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="editor-btn"
      >
        <AiOutlineEnter />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="editor-btn"
      >
        <AiOutlineUndo />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="editor-btn"
      >
        <AiOutlineRedo />
      </button>
    </div>
  );
};

export default MenuBar;




