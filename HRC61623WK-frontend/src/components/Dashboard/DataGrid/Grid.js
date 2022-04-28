import React from "react";
import { GetData } from "../../services/data";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
function Grid({ setSelectedRows, selectedRows, AdvData, Show }) {
  const [pageSize, setPageSize] = useState();

  const columns = [
    {
      editable: true,
      field: "sl_no",
      headerName: `sl_no`,
      width: 100,
    },
    {
      editable: true,
      field: "business_code",
      headerName: "business_code",
      width: 125,
    },
    {
      editable: true,
      field: "clear_date",
      headerName: "clear_date",
      width: 100,
    },
    {
      editable: true,
      field: "buisness_year",
      headerName: "buisness_year",
      width: 110,
    },
    {
      editable: true,
      field: "cust_number",
      headerName: "cust_number",
      width: 125,
    },
    { editable: true, field: "doc_id", headerName: "document_id", width: 120 },
    {
      editable: true,
      field: "posting_date",
      headerName: "posting_date",
      width: 100,
    },
    {
      editable: true,
      field: "document_create_date",
      headerName: "document_create_date",
      width: 170,
    },
    {
      editable: true,
      field: "due_in_date",
      headerName: "due_in_date",
      width: 100,
    },
    {
      editable: true,
      field: "invoice_currency",
      headerName: "invoice_currency",
      width: 120,
    },
    {
      editable: true,
      field: "document_type",
      headerName: "document_type",
      width: 115,
    },
    {
      editable: true,
      field: "posting_id",
      headerName: "posting_id",
      width: 100,
    },
    {
      editable: true,
      field: "total_open_amount",
      headerName: "total_open_amount",
      width: 130,
    },
    {
      editable: true,
      field: "baseline_create_date",
      headerName: "baseline_create_date",
      width: 150,
    },
    {
      editable: true,
      field: "cust_payment_terms",
      headerName: "cust_payment_terms",
      width: 150,
    },
    {
      editable: true,
      field: "invoice_id",
      headerName: "invoice_id",
      width: 130,
    },
  ];

  const [row, setRow] = useState([]);
  //useEffect(async () => {}, []);

  useEffect(() => {
    if (Show === true) {
      setRow(AdvData);
    } else {
      async function fetchData() {
        setRow(await GetData());
      }
      fetchData();
    }
  }, [Show]);
  return (
    <div
      style={{
        height: 650,
        width: "100%",

        backgroundColor: "rgb(45, 66, 80)",
        color: "white",
      }}
    >
      {/*
        
      
        
      /> */}

      <DataGrid
        rows={row}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        rowsPerPageOptions={[10, 20, 50]}
        //pageSize={10}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        pagination
        onSelectionModelChange={setSelectedRows}
        style={{
          backgroundColor: "rgb(40,61,74)",
          color: "white",
        }}
        sx={{
          border: 0,
          "& .MuiDatGrid-cellCheckbox": {
            color: "white",
          },
          "& .MuiDataGrid-cellCheckboxInput": {
            color: "white",
          },
          "&.MuiDataGrid-columnHeaderTitle": {
            whiteSpace: "break-spaces",
            lineHeight: 1,
          },
          "& .MuiTablePagination-root": {
            color: "white",
          },
          "& . MuiDataGrid-iconSeparator": {
            color: "#2D4250",
          },

          "& .MuiButtonBase-root-MuiIconButton-root": {
            color: "white",
          },

          color: "white",
        }}
      />
    </div>
  );
}
export default Grid;
