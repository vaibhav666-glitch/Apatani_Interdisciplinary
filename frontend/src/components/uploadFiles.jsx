import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UploadFiles=()=>{

    const [name,setName]=useState('');
    const [files, setFileUrl] = useState([]);
    const [department,setDepartment]=useState('');
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('department', department);
         // Append all files to formData
         Array.from(files).forEach((file) => {
            formData.append('fileUrl', file);
        });

        try{
            const response=await axios.post('https://apatani-interdisciplinary-back.onrender.com/api/users/add', formData, {
                headers:{
                    'Content-Type': 'multipart/form-data',
                },
            })
            console.log("file uploaded successfully:", response.data)
            navigate('/');
           
        }
        catch(err){
            console.log("Error in uploading file: ",err);

        }
    }
    return(
        <>
       <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
    <h1 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Upload Files</h1>
    <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Write Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>

        <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Write Department</label>
            <input
                type="text"
                id="department"
                name="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>

        <div>
            <label htmlFor="uploadDocuments" className="block text-sm font-medium text-gray-700">Upload Documents</label>
            <input
                type="file"
                id="uploadDocuments"
                name="uploadDocuments"
                multiple
                onChange={(e) => setFileUrl(e.target.files)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
        </div>

        <div className="flex justify-center">
            <button
                type="submit"
                className="w-full sm:w-auto bg-indigo-600 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                
            >
                
                
            </button>
        </div>
    </form>
</div>

        </>
    )
}

export default UploadFiles;