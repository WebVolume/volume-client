import { useRef } from "react";
import "./CommentTextArea.scss";

const CommentTextArea = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const autoResizeTextarea = () => {
    if (textAreaRef.current) {
      let fs = document.defaultView
        ?.getComputedStyle(textAreaRef.current!)
        .getPropertyValue("font-size");
      textAreaRef.current!.style.height = "auto";
      let height = textAreaRef.current!.scrollHeight;
      textAreaRef.current!.style.height = `${
        height + parseInt(fs !== undefined ? fs : "0")
      }px`;
    }
  };
  return (
    <textarea
      id="autoTextarea"
      className="music-comment-list__input fc-white"
      maxLength={500}
      onKeyPress={autoResizeTextarea}
      ref={textAreaRef}
    />
  );
};

export default CommentTextArea;
