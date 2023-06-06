import React from "react";

const Table3 = () => {
  const columns = ["Date", "Users", "Week 0", "Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8" ];

  const rows = [
    ["06-17 - 06-23", "1476", "$209", "$219", "$230", "$242", "$254", "$267", "$280", "$294", "$309" ],
    ["06-24 - 06-30", "1678", "$212", "$223", "$234", "$245", "$258", "$271", "$284", "$298" ],
    ["06-31 - 07-06", "1561"," $210",  "$221", "$232", "$243", "$255", "$268", "$281"],
    ["07-07 - 07-14", "2678", "$205", "$215", "$226", "$237", "$249", "$262"],
    ["07-15 - 07-21", "1121", "$211", "$222", "$233", "$244", "$256"],
    ["07-22 - 07-28", "2210", "$220", "$231", "$243", "$255"],
    ["07-29 - 08-04", "1627", "$225", "$236", "$248"],
  ];

  return (
    <div className="shadow-lg">
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-center">
          <thead className="bg-[#CDE3D9]">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-1 py-3 text-lg font-bold"
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
                  let cellClassName =
                    "px-1 py-3 font-semibold border-2 border-white rounded-lg ";

                  if (
                    (cellIndex >= 2 &&
                      cellIndex <= 5 &&
                      [0, 1, 2, 4].includes(rowIndex)) ||
                    (cellIndex === 8 && rowIndex === 2)
                  ) {
                    cellClassName += " bg-[#B4ECD2]";
                  } else if (
                    (cellIndex >= 2 && cellIndex <= 4 && rowIndex === 6) ||
                    (cellIndex === 5 && rowIndex === 5) ||
                    (cellIndex >= 6 &&
                      cellIndex <= 7 &&
                      [1, 4].includes(rowIndex)) ||
                    (cellIndex >= 8 && cellIndex <= 10 && rowIndex === 1)
                  ) {
                    cellClassName += " bg-[#63B993]";
                  } else if (
                    (cellIndex >= 2 && cellIndex <= 4 && rowIndex === 5) ||
                    (cellIndex >= 6 && cellIndex <= 7 && rowIndex === 0) ||
                    (cellIndex >= 6 && cellIndex <= 7 && rowIndex === 2)
                  ) {
                    cellClassName += " bg-[#92D1B5]";
                  }
                  else{
                    cellClassName += "bg-[#E3E3E3]";
                    
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

export default Table3;
