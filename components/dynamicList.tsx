import Link from 'next/link'
interface Props {
    names?:string[]
}

// instead of default Props in parent component we can declare double ?? to avoid problems with map on undefined / null array
const DynamicList = ( { names }:any) => {
    return(
        <>
            {Object.keys(names ?? []).map((name:string) => <Link href={`/${name}`} key={name}>{names[name] ?? ''}</Link>)}
        </>
    );         }


export default DynamicList;