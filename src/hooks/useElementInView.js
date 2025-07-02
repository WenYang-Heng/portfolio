import { useEffect, useRef, useState } from "react"

export const useElementInView = (options) => {
    const [isElementInView, setIsElementInView] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];

            setIsElementInView(entry.isIntersecting);
        }, options)

        if(elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if(elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        }
    }, [options]);

    return [elementRef, isElementInView];
}