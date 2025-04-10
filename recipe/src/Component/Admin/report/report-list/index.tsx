
interface ReportListProps {
    id?: number;
    reportedName?: string;
    reportedPhone?: string;
    reportedDate?: string;
    reportedTime?: string;
    reportedReason?: string;
    reportedStatus?: string;
    reportedOn?: string;
}
const ReportList = ({id, reportedName, reportedPhone, reportedDate, reportedTime, reportedReason, reportedStatus, reportedOn}: ReportListProps) => {
    return (
        <div className="flex gap-x-[5px] px-[16px]">
            <p className="text-[14px] font-regular font-body leading-[20px] w-[100px] ">{id}</p>
            <p className="text-[14px] font-regular font-body leading-[20px] w-[200px] ">{reportedName}</p>
            <p className="text-[14px] font-regular font-body leading-[20px] w-[300px] ">{reportedPhone}</p>
            <p className="text-[14px] font-regular font-body leading-[20px] w-[300px] ">{reportedDate}</p>
            <p className="text-[14px] font-regular font-body leading-[20px] w-[50px] ">{reportedTime}</p>
            <p className="text-[14px] font-regular font-body leading-[20px] w-[50px] ">{reportedReason}</p>
            <p className="text-[14px] font-regular font-body leading-[20px] w-[50px] ">{reportedStatus}</p>
            <p className="text-[14px] font-regular font-body leading-[20px] w-[50px] ">{reportedOn}</p>
        </div>
    )
}   

export default ReportList;
