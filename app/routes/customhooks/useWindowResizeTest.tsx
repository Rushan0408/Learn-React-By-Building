import useWindowResize from "./hooks/useWindowResize";

const useWindowResizeTest = () => {
    const {width,height} = useWindowResize();
    return (
        <div>
            <h1>Window Resize custom hook Test:</h1>
            <p>Width : {width}</p>
            <p>Height : {height}</p>
        </div>
    )
}
export default useWindowResizeTest