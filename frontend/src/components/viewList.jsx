import { useLocation,useNavigate } from "react-router-dom";

const ViewList=()=>{
    const location=useLocation();
    const obj=location.state?.user||[];
    const data = Array.isArray(obj) ? obj : [obj];
    //console.log("i am data in view list", obj);
    const fileUrl=data[0]['fileUrl'];
   // console.log("heelo view list", fileUrl)
const navigate=useNavigate();
const handleNavigate=()=>{
    navigate("/viewPdf",{state:{fileUrl}});
}

    return(
        <>
        {data.length>0?(
            data.map((val,index)=>(
                <div key={index}>
                    <div className="  m-14 bg-gray-200 p-8 px-16 md:p-16 text-xl md:text-3xl font-serif ">
        {val.department}
      </div>
                   <div className="m-14 cursor-pointer flex-col items-center px-16 " onClick={handleNavigate}>
                   <h1 className="font-bold">{val.name}</h1>
                   <p>{val.department}</p>
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