import { useEffect, useRef } from "react";

const Dialogue = () => {
    const ref = useRef(null);
    useEffect(() => {
        const modal = ref.current;
        modal.showModal();

        // cleanup is mandatory
        return () => modal.close();
    })
  return (
    <div>
      <dialog ref={ref}>There is a dialogue</dialog>
    </div>
  );
};

export default Dialogue;