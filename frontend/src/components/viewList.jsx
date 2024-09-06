import { useLocation,useNavigate } from "react-router-dom";

const ViewList=()=>{
    const location=useLocation();
    const obj=location.state?.user||[];
    const data=new Array(obj);
    const fileUrl=obj.fileUrl;
    console.log(data);

const navigate=useNavigate();
const handleNavigate=()=>{
    navigate("/viewPdf",{state:{fileUrl}});
}

    return(
        <>
        {data.length>0?(
            data.map((val,index)=>(
                <div key={index}>
                    <div className="flex justify-start bg-gray-200 p-8 md:p-16 text-xl md:text-3xl font-serif text-center">
        {val.email}
      </div>
                   <div className="m-14 cursor-pointer " onClick={handleNavigate}>
                   <h1 className="">{val.name}</h1>
                   <p>{val.email}</p>
                   </div>
                    
                </div>
            ))
        ):(
            <div>No Data Found</div>
        )
    }
        </>
    )
}
export default ViewList;