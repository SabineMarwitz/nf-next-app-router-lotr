import { volumes } from "@/lib/data";
import Link from "next/link";


export default function VolumeDetail({ params }: { params: { aslug: string } }) {
    const content = volumes.find(({slug}) => slug === params.aslug);

    if(!content) {
      return <>No Detail Page Content found</>
    }

    return <>
        <Link href="/">All Volumes ...</Link>
        <h1>{ content.title }</h1>
        <p>{ content.description }</p>
        <ul>{content.books.map((b) => <li key={b.ordinal}> {b.ordinal}: {b.title} </li> )}</ul>
    </>
}