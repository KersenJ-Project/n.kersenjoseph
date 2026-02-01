import { useState, useEffect, useRef } from 'react';

const useTypewriter = (text, speed = 50) => {
    const [displayedText, setDisplayedText] = useState('');
    const indexRef = useRef(0);

    useEffect(() => {
        if (!text) return;

        indexRef.current = 0;
        setDisplayedText('');

        const timer = setInterval(() => {
        if (indexRef.current < text.length) {
            const nextChar = text.charAt(indexRef.current);
            setDisplayedText((prev) => prev + nextChar);
            indexRef.current += 1;
        } else {
            clearInterval(timer);
        }
        }, speed);

        return () => {
        clearInterval(timer);
        };
    }, [text, speed]);

    return displayedText;
};

export default useTypewriter;