import { useEffect, useState } from "react";
function Modal(serieid: string[]) {

  return (
    <> 
        <div className="absolute flex flex-col bg-zinc-900 backdrop-brightness-95">
          <span>{serieid.thumbnail}</span>
        </div>
    </>
  );
}

export default Modal;
