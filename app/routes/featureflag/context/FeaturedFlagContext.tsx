import React, {
    createContext,
    useEffect,
    useState,
    type ReactNode,
    type FC,
} from "react";
import featureFlagsDataServiceCall from "./data";

type Flags = Record<string, any>;

type FeaturedFlagContextValue = {
    loading: boolean;
    flags: Flags;
};

export const FeaturedFlagContext = createContext<FeaturedFlagContextValue>({
    loading: false,
    flags: {},
});

// Provider component
export const FeaturedFlagProvider: FC<{ children?: ReactNode }> = ({
    children,
}) => {
    const [loading, setLoading] = useState(false);
    const [flags, setFlags] = useState<Flags>({});

    async function callapi() {
        setLoading(true);
        const response = await featureFlagsDataServiceCall();
        // validate/cast the API response to Flags before updating state
        if (response && typeof response === "object") {
            setFlags(response as Flags);
        } else {
            setFlags({});
        }
        setLoading(false);
    }

    useEffect(() => {
        callapi();
    }, []);

    return (
        <FeaturedFlagContext.Provider value={{ loading, flags }}>
            {children}
        </FeaturedFlagContext.Provider>
    );
};
