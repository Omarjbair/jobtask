"use client";

import { Post } from "@/app/page";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface TableProps{
    data: Post[],
    rowsPerPage: number
}

const Table =  ({ data, rowsPerPage }:  TableProps ) => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const pageCount = Math.ceil(data.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentData = data.slice(startIndex, startIndex + rowsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= pageCount) {
            setCurrentPage(page);
        }
    };

    const rows = currentData.map((item) => (
        <tr key={item.id}>
            <td style={{padding: "0px 20px"}}>{item.id}</td>
            <td style={{padding: "0px 20px"}}>{item.userId}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td className="actions-buttons">
                <button className="update-button" onClick={() => router.push(`/update/${item.id}`)}>Update</button>
                <button className="delete-button" onClick={() => router.push(`/delete/${item.id}`)}>Delete</button>
            </td>
        </tr>
    ));


    return (
        <>
            <section className="table_section">
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>userId</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </section>
            <div className="pagination">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>
                    Previous  
                </button>
                {Array.from({ length: pageCount }, (_, index) => (
                    <button  
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= pageCount}>
                    Next  
                </button>
            </div>
        </>
    );
}

export default Table
