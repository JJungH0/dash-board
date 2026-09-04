import DashboardSkeleton, {InvoiceSkeleton} from "@/app/ui/skeletons";

export default function Loading(){
    return (
        <div>
            <DashboardSkeleton/>
            <InvoiceSkeleton/>
        </div>

    )
};