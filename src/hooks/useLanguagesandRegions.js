import { useEffect, useState } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setSearchResultError, setSearchResultsLoading } from "../utils/searchSlice";

const useLanguagesandRegions = () => {
    const dispatch = useDispatch();
    const [languages, setLanguages] = useState([]);
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try{
                dispatch(setSearchResultsLoading(true));

                const languagesResponse = await fetch('https://api.themoviedb.org/3/configuration/languages', API_OPTIONS);
                const regionsResponse = await fetch('https://api.themoviedb.org/3/watch/providers/regions?language=en-US', API_OPTIONS);

                if(!languagesResponse.ok || !regionsResponse.ok){
                    throw new Error("Failed to fetch languages or regions");
                }

                const languagesData = await languagesResponse.json();
                const regionsData = await regionsResponse.json();

                setLanguages(languagesData);
                setRegions(regionsData);
            }catch(error){
                dispatch(setSearchResultError(error.message));
            }finally{
                dispatch(setSearchResultsLoading(false));
            }
        };

        fetchData();
    }, []);

    return {languages, regions};
};

export default useLanguagesandRegions;