import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(true); 
        });

        return unsubscribe;
    }, []);

    return { user, isLoading };
};

export default useUser;
