import axios from "axios";
export const GetData = async () => {
  let response = await axios.get(
    " http://localhost:8080/hrc_final_prakhar/DataLoading"
  );

  let data = response.data.invoices;
  let res = data.map((obj, index) => ({ ...obj, id: index + 1 }));
  console.log(res);
  return res;
};
