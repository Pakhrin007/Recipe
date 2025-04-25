import Chef from "../../chef";

const ChefList = () => {
    return (
        <div className="flex flex-col gap-y-[16px] px-[70px] py-[16px] w-screen ">
            <h1 className="text-[24px] font-bold font-body leading-[32px]">Chef List</h1>
            <Chef/> 
        </div>
    )
}
export default ChefList;
