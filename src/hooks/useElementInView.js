import { useEffect, useRef, useState } from "react"

export const useElementInView = ({
    once = false,
    root = null,
    rootMargin = "0px",
    threshold = 0,
} = {}) => {
    const [isElementInView, setIsElementInView] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        if(!element) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];

            if(entry.isIntersecting) {
                setIsElementInView(true);

                if(once) {
                    observer.unobserve(entry.target);
                }
            } else if(!once) {
                setIsElementInView(false);
            }
        }, { root, rootMargin, threshold })

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        }
    }, [once, root, rootMargin, threshold]);

    return [elementRef, isElementInView];
}
