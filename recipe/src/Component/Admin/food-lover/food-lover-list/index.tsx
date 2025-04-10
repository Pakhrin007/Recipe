
interface FoodLoverListProps {
    id?: number;
    name?: string;
    email?: string;
    phone?: string;
    icon?: React.ReactNode;
}
const FoodLoverList = ({id, name, email, phone, icon}: FoodLoverListProps) => {
    return (
        <div className="flex gap-x-[5px] px-[16px]">
            <p className="text-[14px] font-regular font-body leading-[20px] w-[100px] ">{id}</p>
            <p className="text-[14px] font-regular font-body leading-[20px] w-[200px] ">{name}</p>
            <p className="text-[14px] font-regular font-body leading-[20px] w-[300px] ">{email}</p>
            <p className="text-[14px] font-regular font-body leading-[20px] w-[300px] ">{phone}</p>
            <p className="text-[14px] font-regular font-body leading-[20px] w-[50px] ">{icon}</p>
            <button className="bg-red-500 text-white px-[16px] py-[8px] rounded-[8px]">Suspend</button>
        </div>
    )
}   

export default FoodLoverList;
