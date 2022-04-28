import { React, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
//import { computeFlexColumnsWidth } from "@mui/x-data-grid/hooks/features/columns/gridColumnsUtils";
//import { textAlign } from "@mui/system";
//import { addData } from "../services/data";
import Grid from "../Dashboard/DataGrid/Grid";
const Functionalities = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const addClick = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  //
  const [openEdit, setOpenEdit] = useState(false);
  const editClick = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [editValues, SeteditValues] = useState({});

  //
  const [openAdv, setOpenAdv] = useState(false);
  const advClick = () => setOpenAdv(true);
  const handleCloseAdv = () => setOpenAdv(false);
  const [AdvVal, setAdvVal] = useState({});
  const [advData, setAdvData] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  //getting values from the advanced search

  const handleAdvChange = (e) => {
    const { name, value } = e.target;
    setAdvVal({
      ...AdvVal,
      [name]: value,
    });
  };
  //
  const [openDelete, setOpenDelete] = useState(false);
  const deleteClick = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  //state creatio for add
  const [values, setValues] = useState({});
  //handeler for edit entries
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    SeteditValues({
      ...editValues,
      [name]: value,
    });
  };
  //change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const onclick = () => {
    SeteditValues(" ");
    if (selectedRows > 0) {
      setOpenEdit(true);
    }
  };
  // console.log(AdvVal);

  const addData = async () => {
    await axios.get(
      `http://localhost:8080/hrc_final_prakhar/AddServlet?business_code=${values.business_code}&cust_number=${values.cust_number}&clear_date=${values.clear_date}&buisness_year=${values.buisness_year}&doc_id=${values.doc_id}&posting_date=${values.posting_date}&document_create_date=${values.document_create_date}&due_in_date=${values.due_in_date}&invoice_currency=${values.invoice_currency}&document_type=${values.document_type}&posting_id=${values.posting_id}&total_open_amount=${values.total_open_amount}&baseline_create_date=${values.baseline_create_date}&cust_payment_terms=${values.cust_payment_terms}&invoice_id=${values.invoice_id}`
    );
  };
  // console.log(selectedRows);
  const editData = async () => {
    await axios.get(
      `http://localhost:8080/hrc_final_prakhar/EditServlet?invoice_currency=${editValues.invoice_currency}&cust_payment_terms=${editValues.cust_payment_terms}&sl_no=${selectedRows[0]}`
    );
  };
  // for( i in selectedRows)
  // {
  //   async
  // }
  const delData = async () => {
    for (let i in selectedRows) {
      await axios.get(
        `http://localhost:8080/hrc_final_prakhar/DeleteServlet?sl_no=${selectedRows[i]}`
      );
    }
  };
  const AdvData = async () => {
    let res = await axios.get(
      `http://localhost:8080/hrc_final_prakhar/SearchServlet?doc_id=${AdvVal.doc_id}&invoice_id=${AdvVal.invoice_id}&cust_number=${AdvVal.cust_number}&buisness_year=${AdvVal.buisness_year}`
    );

    let data = res.data.invoices;
    let result = data.map((obj, index) => ({ ...obj, id: index + 1 }));
    setAdvData(result);
    handleShow();
    return data;
  };

  return (
    <>
      <div>
        <Navbar
          addClick={addClick}
          editClick={editClick}
          deleteClick={deleteClick}
          onclick={onclick}
          advClick={advClick}
        />
        <Grid
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          AdvData={advData}
          Show={show}
        />
      </div>
      <Dialog open={openAdd} onClose={handleCloseAdd} maxWidth="lg">
        <DialogTitle
          style={{ backgroundColor: "rgb(45, 66, 80)", color: "white" }}
        >
          Add
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "rgb(45, 66, 80)" }}>
          <TextField
            id="Business Code"
            label="Business Code"
            value={values.business_code}
            onChange={handleInputChange}
            name="business_code"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
              color: "black",
            }}
          />
          <TextField
            id="Customer Number"
            label="Customer Number"
            value={values.cust_number}
            onChange={handleInputChange}
            name="cust_number"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Clear Date"
            label="Clear Date"
            value={values.clear_date}
            onChange={handleInputChange}
            name="clear_date"
            InputLabelProps={{ shrink: true }}
            type="Date"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Business Year"
            label="Business Year"
            onChange={handleInputChange}
            value={values.buisness_year}
            name="buisness_year"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Document id"
            label="Document id"
            onChange={handleInputChange}
            value={values.doc_id}
            name="doc_id"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Posting Date"
            InputLabelProps={{ shrink: true }}
            onChange={handleInputChange}
            value={values.posting_date}
            name="posting_date"
            label="Posting Date"
            type="Date"
            variant="filled"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Document Create Date"
            InputLabelProps={{ shrink: true }}
            label="Document Create Date"
            onChange={handleInputChange}
            value={values.document_create_date}
            name="document_create_date"
            type="Date"
            style={{
              backgroundColor: "white",
              color: "black",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Due Date"
            label="Due Date"
            onChange={handleInputChange}
            value={values.due_in_date}
            name="due_in_date"
            InputLabelProps={{ shrink: true }}
            type="Date"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Invoice Currency"
            label="Invoice Currency"
            onChange={handleInputChange}
            value={values.invoice_currency}
            name="invoice_currency"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Document Type"
            label="Document Type"
            onChange={handleInputChange}
            value={values.document_type}
            name="document_type"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Posting Id"
            label="Posting Id"
            onChange={handleInputChange}
            value={values.posting_id}
            name="posting_id"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Total Open Amount"
            label="Total Open Amount"
            onChange={handleInputChange}
            value={values.total_open_amount}
            name="total_open_amount"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Baseline_Create_Date"
            label="Baseline_Create_Date"
            onChange={handleInputChange}
            value={values.baseline_create_date}
            name="baseline_create_date"
            InputLabelProps={{ shrink: true }}
            type="Date"
            style={{
              backgroundColor: "white",
              verticalAlign: "top",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Cust Payment Terms"
            label="Customer Payment Terms"
            onChange={handleInputChange}
            value={values.cust_payment_terms}
            name="cust_payment_terms"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Invoice Id"
            label="Invoice Id"
            onChange={handleInputChange}
            value={values.invoice_id}
            name="invoice_id"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
        </DialogContent>
        <DialogActions
          style={{
            backgroundColor: "rgb(45, 66, 80)",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            onClick={(e) => {
              handleCloseAdd();
              addData();
            }}
            style={{ color: "white", border: "1px solid white", width: "50%" }}
          >
            Add
          </Button>
          <Button
            onClick={handleCloseAdd}
            style={{ color: "white", border: "1px solid white", width: "50%" }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      {/* for edit button */}
      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle
          style={{ backgroundColor: "rgb(45, 66, 80)", color: "white" }}
        >
          Edit
        </DialogTitle>
        <DialogContent
          style={{ backgroundColor: "rgb(45, 66, 80)", color: "white" }}
        >
          <TextField
            id="Invoice Currency"
            label="Invoice Currency"
            onChange={handleEditChange}
            value={editValues.invoice_currency}
            name="invoice_currency"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Customer Payment Terms"
            label="Customer Payment Terms"
            onChange={handleEditChange}
            value={editValues.cust_payment_terms}
            name="cust_payment_terms"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
        </DialogContent>
        <DialogActions
          style={{ backgroundColor: "rgb(45, 66, 80)", color: "white" }}
        >
          <Button
            onClick={(e) => {
              handleCloseEdit();
              editData();
            }}
            style={{ color: "white", border: "1px solid white", width: "50%" }}
          >
            Edit
          </Button>
          <Button
            onClick={handleCloseEdit}
            style={{ color: "white", border: "1px solid white", width: "50%" }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      {/*for delete button*/}
      <Dialog open={openDelete} onClose={handleCloseDelete}>
        <DialogTitle
          style={{ backgroundColor: "rgb(45, 66, 80)", color: "white" }}
        >
          Delete Records ?
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "rgb(45, 66, 80)" }}>
          <DialogContentText style={{ color: "white" }}>
            Are you sure you want to delete this record[s]?
          </DialogContentText>
        </DialogContent>
        <DialogActions
          style={{ backgroundColor: "rgb(45, 66, 80)", color: "white" }}
        >
          <Button
            onClick={handleCloseDelete}
            style={{ color: "white", border: "1px solid white", width: "50%" }}
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              handleCloseDelete();
              delData();
            }}
            style={{ color: "white", border: "1px solid white", width: "50%" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* for advance search */}
      <Dialog open={openAdv} onClose={handleCloseAdv}>
        <DialogTitle
          style={{ backgroundColor: "rgb(45, 66, 80)", color: "white" }}
        >
          Advance Search
        </DialogTitle>
        <DialogContent
          style={{ backgroundColor: "rgb(45, 66, 80)", color: "white" }}
        >
          <TextField
            id="Document ID"
            label="Document ID"
            onChange={handleAdvChange}
            value={AdvVal.doc_id}
            name="doc_id"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Invoice ID"
            label="Invoice ID"
            onChange={handleAdvChange}
            value={AdvVal.invoice_id}
            name="invoice_id"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Customer Number"
            label="Customer Number"
            onChange={handleAdvChange}
            value={AdvVal.cust_number}
            name="cust_number"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
          <TextField
            id="Business Year"
            label="Business Year"
            onChange={handleAdvChange}
            value={AdvVal.buisness_year}
            name="buisness_year"
            style={{
              backgroundColor: "white",
              margin: 10,
              borderRadius: 5,
              width: 250,
            }}
          />
        </DialogContent>
        <DialogActions
          style={{ backgroundColor: "rgb(45, 66, 80)", color: "white" }}
        >
          <Button
            onClick={(e) => {
              handleCloseAdv();
              AdvData();
            }}
            style={{ color: "white", border: "1px solid white", width: "50%" }}
          >
            Search
          </Button>
          <Button
            onClick={handleCloseAdv}
            style={{ color: "white", border: "1px solid white", width: "50%" }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Functionalities;
