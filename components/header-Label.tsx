import { useRouter } from 'next/router'
import { useEffect } from "react";
import { useAppDispatch , useAppSelector} from "../store/store";
import { updatePath, pathValueReader } from '../slices/pathSlice';

const HeaderLabel = () => {
    const { route } = useRouter()

    const currentRoute = `${route.slice(1).charAt(0).toUpperCase()}${route.slice(2)}`
        .replace(/_/g, " ");

    const dispatch = useAppDispatch();
    const path = useAppSelector(pathValueReader)

    useEffect( () => {
        dispatch(updatePath(currentRoute))
    },[currentRoute])

    return(
        <>
            <div className="headerer--Label">
                <h1>{path}</h1>
                <section>
                    <h3>Home</h3>
                    <h3>{path}</h3>
                </section>
            </div>
        </>
    );
}
export default HeaderLabel;