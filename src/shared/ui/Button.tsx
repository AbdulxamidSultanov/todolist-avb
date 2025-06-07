import React from "react";

const Button = ({ content, onClick }: { content: string, onClick: any }) => {
  return (
    <button
      className={`px-4 py-2 ${
        content.toLowerCase() == "delate"
          ? "bg-red-500 hover:bg-red-400"
          : "bg-blue-600 hover:bg-blue-400"
      } text-white rounded-md`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
