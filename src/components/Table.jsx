import React from "react";

const Table = () => {

    const columns = ["Source", "Ad", "Cost", "Sales", "First time customers", "Revenue", "ROAS", "CAC", "F.T. ROAS"];
    const rows = [
        ["Youtube", "Male_18+_UGC_Video", "$2,567.00", 120, 90, "$10,800.00", 4.21, "$28.52", 3.16],
        ["Adwords", "US_Generic_Search", "$1,233.00", 98, 71, "$5,880.00", 4.77, "$17.48", 3.43],
        ["Adwords", "SKU2343_shoppong", "$3,120.00", 150, 127, "$14,700.00", 4.71, "$24.55", 3.99],
        ["Facebook", "All_25+_Static_split_screen", "$5,400.00", 145, 111, "$11,600.00", 2.15, "$48.54", 1.65],
        ["Instagram", "W_25+_Static_split_screen", "$3,210.00", 280, 177, "$23,800.00", 7.41, "$18.17", 4.68],
        ["TikTok", "UGS_video_2", "$3,100.00", 120, 110, "$7,080.00", 2.28, "$28.14", 2.10]
    ];

    return (
        <div className="shadow-lg">
            <div className="overflow-x-auto">
                <table className="table-auto w-full text-center">
                    <thead className="bg-[#F1F1F1]">
                        <tr>
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                    scope="col"
                                    className="px-6 py-3"
                                >
                                    {column}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => {
                                    let cellClassName = "px-6 py-4 border-2 bg-[#B4ECD2] hover:bg-[#63B993] border-white rounded-lg";

                                    if ((cellIndex === 6 && (rowIndex === 0 || rowIndex === 1 || rowIndex === 2)) || (cellIndex === 8 && rowIndex === 2)) {
                                        cellClassName = "px-6 py-4 font-semibold border-2 bg-[#92D1B5] hover:bg-[#63B993] border-white rounded-lg";
                                    } else if ((cellIndex === 6 && rowIndex === 4) || (cellIndex === 8 && rowIndex === 4)) {
                                        cellClassName = "px-6 py-4 font-semibold border-2 bg-[#63B993] hover:bg-[#63B993] border-white rounded-lg";
                                    }

                                    return (
                                        <td
                                            key={cellIndex}
                                            className={cellClassName}
                                        >
                                            {cell}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
