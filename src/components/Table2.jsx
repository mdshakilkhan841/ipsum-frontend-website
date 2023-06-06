import React from "react";

export const Table21 = () => {
  const columns = ["Ad name", "Orders", "ROAS"];
  const rows = [
    ["All_25+_Static_split_screen", "12", "3.2"],
    ["M_25+_Static_split_screen_2", "2", "1.5"],
  ];

  return (
    <div className="shadow-lg">
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-center">
          <thead className="bg-[#F1F1F1]">
            <tr>
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  let cellClassName =
                    "px-6 py-4 border-2 bg-[#B4ECD2] hover:bg-[#63B993] border-white rounded-lg";

                  if (cellIndex === 2 && rowIndex === 1) {
                    cellClassName =
                      "px-6 py-4 font-semibold border-2 bg-yellow-200 hover:bg-[#63B993] border-white rounded-lg";
                  }

                  return (
                    <td key={cellIndex} className={cellClassName}>
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

export const Table22 = () => {
    const columns = ["Ad name", "Orders", "ROAS"];
    const rows = [
      ["All_25+_Static_split_screen", "10", "2.8"],
      ["M_25+_Static_split_screen_2", "8", "3"],
    ];
  
    return (
      <div className="shadow-lg">
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-center">
            <thead className="bg-[#F1F1F1]">
              <tr>
                {columns.map((column, index) => (
                  <th key={index} scope="col" className="px-6 py-3">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => {
                    let cellClassName =
                      "px-6 py-4 border-2 bg-[#B4ECD2] hover:bg-[#63B993] border-white rounded-lg";
  
                    if (cellIndex === 2 && rowIndex === 1) {
                      cellClassName =
                        "px-6 py-4 font-semibold border-2 bg-[#63B993] hover:bg-[#63B993] border-white rounded-lg";
                    }
  
                    return (
                      <td key={cellIndex} className={cellClassName}>
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
