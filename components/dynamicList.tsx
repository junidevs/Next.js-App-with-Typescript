import Link from 'next/link'
interface Props {
    names?:string[]
}

// instead of default Props in parent component we can declare double ?? to avoid problems with map on undefined / null array
const DynamicList = ( { names,setOpen }:any) => {
    return(
        <>
            {Object.keys(names ?? []).map((name:string) => <div key={name} onClick={() => setOpen(false)}><Link href={`/${name}`}>{names[name] ?? ''}</Link></div>)}
        </>
    );         }


export default DynamicList;