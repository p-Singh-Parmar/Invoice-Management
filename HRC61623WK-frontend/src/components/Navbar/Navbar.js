import React from "react";
import { Button, TextField } from "@material-ui/core";
import Reload from "./Reload";
const Navbar = (props) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(40,61,74)",
          paddingTop: 18,
          paddingBottom: 18,
          paddingLeft: 18,
          display: "flex",
        }}
      >
        <Button
          variant="contained"
          size="medium"
          style={{
            width: 150,
            height: 40,
            color: "white",
            backgroundColor: "rgb(20,175,241)",
            borderTopRightRadius: 1,
            borderBottomRightRadius: 1,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
        >
          Pridict
        </Button>
        <Button
          variant="outlined"
          style={{
            border: "1px solid #3f51b5",
            display: "flex",
            color: "white",
            fontWeight: 400,
            width: 150,
            height: 40,
            borderTopRightRadius: 1,
            borderBottomRightRadius: 1,
            borderTopLeftRadius: 1,
            borderBottomLeftRadius: 1,
          }}
        >
          Analytics View
        </Button>
        <Button
          variant="outlined"
          onClick={props.advClick}
          style={{
            fontWeight: 400,
            border: "1px solid #3f51b5",
            display: "flex",
            color: "white",
            width: 180,
            height: 40,
            borderTopLeftRadius: 1,
            borderBottomLeftRadius: 1,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          Advanced search
        </Button>
        <Button
          style={{
            border: "1px solid #3f51b5",
            display: "flex",
            width: 20,
            height: 40,
            marginLeft: 8,
            marginRight: 2,
            backgroundColor: "#283D4A",
          }}
        >
          <Reload />
        </Button>

        <div
          style={{
            marginLeft: "2vw",
            width: 200,

            marginRight: 5,
          }}
        >
          <TextField
            style={{
              width: 180,
              height: 50,
              marginRight: 5,
              backgroundColor: "white",
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }}
            label="Search customer id"
            variant="outlined"
          />
        </div>
        <div style={{ marginRight: 15, marginLeft: 3 }}>
          <Button
            variant="outlined"
            onClick={props.addClick}
            style={{
              border: "1px solid #3f51b5",

              color: "white",
              fontWeight: 400,
              width: 150,
              height: 40,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          >
            Add
          </Button>
          <Button
            onClick={(props.editClick, props.onclick)}
            style={{
              fontWeight: 400,
              color: "white",
              width: 140,
              height: 40,
              borderTopLeftRadius: 1,
              borderBottomLeftRadius: 1,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }}
          >
            EDIT
          </Button>
          <Button
            variant="outlined"
            onClick={props.deleteClick}
            style={{
              fontWeight: 400,
              border: "1px solid #3f51b5",

              color: "white",
              width: 150,
              height: 40,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
