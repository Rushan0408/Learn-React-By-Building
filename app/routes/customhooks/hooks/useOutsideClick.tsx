import { useEffect } from "react"

const useOutsideClick = (ref: any, handler: any) => {

    useEffect(() => {
        function listener(event: any) {
            if (ref.current.contains(event.target) || !ref.current) return;
            else handler();
        }
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        }
    }, [ref, handler])
}
export default useOutsideClick