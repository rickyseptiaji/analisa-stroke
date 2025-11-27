import EditPageSolusi from "@/components/features/solusi/edit/page";
import { useParams } from "next/navigation"

export default function Page() {
    const params  = useParams();
    return (
        <EditPageSolusi solusiId={params.id as string}/>
    )
}