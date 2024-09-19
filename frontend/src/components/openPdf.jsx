import { useLocation } from 'react-router-dom';

const OpenPdf = () => {
    const location = useLocation();
    const fileUrl = location.state?.fileUrl || []; // Default to an empty array if fileUrl is not available
    console.log(fileUrl)
    return (
        <div className="container mx-auto p-4">
            {fileUrl.length > 0 ? (
                fileUrl.map((file, index) => (
                    <div key={index} className="pdf-container my-4 p-4 border border-gray-300 shadow-lg rounded-md">
                        {/* Option 1: Display PDF in iframe */}
                        <iframe
                            src={`http://localhost:3200/${file}`}
                            className="w-full h-96"
                            title={`PDF-${index}`}
                        ></iframe>

                        {/* Option 2: Provide a download link */}
                        <a
                            href={`http://localhost:3200/${file}`}
                            download
                            className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        >
                            Download PDF
                        </a>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">Loading PDF...</p>
            )}
        </div>
    );
};

export default OpenPdf;
