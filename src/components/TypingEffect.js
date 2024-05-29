
import { useEffect,useState } from "react";

function TypingEffect({
    text,
    typingSpeed = 100,
    deletingSpeed = 50
}
){
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const handleTyping = () => {
            if(!isDeleting){
                if(displayText.length < text[index].length){
                    setDisplayText((prev) => prev + text[index].charAt(displayText.length));
                }
                else{
                    setIsDeleting(true);
                }
            }else{
                if(displayText.length !== 0){
                    setDisplayText((prev) => prev.slice(0,-1));
                }else{
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % text.length);
            }
        }};

        const timeout = setTimeout(handleTyping , isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeout);

    }, [displayText, isDeleting, index]);


    return (    
        <h1 style={{ color: 'black', fontWeight: 900 }}>{displayText}</h1>
    );
}

export default TypingEffect;