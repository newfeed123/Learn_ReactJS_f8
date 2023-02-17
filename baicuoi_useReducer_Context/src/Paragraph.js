import { ThemeContext } from "./ThemeContext";
import { useContext } from "react"

function Paragraph(){
    const context = useContext(ThemeContext)

    return(
        <p className={context.theme}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facilis officia quo accusantium eos porro cum incidunt neque nisi, mollitia consequuntur ipsa nemo atque pariatur? Ad quos numquam fuga ut!
        </p>
    )
}

export default Paragraph