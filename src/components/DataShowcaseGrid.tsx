import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { placeholderData } from "../hooks/usePlaceholderData";

interface Props {
  data: placeholderData[];
}
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "userId", headerName: "User ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    description: "This is the title of the user",
    sortable: false,
    width: 160,
  },
  {
    field: "body",
    headerName: "Description",
    description: "This is the description of the user",
    sortable: false,
    width: 260,
  },
];

const DataShowcaseGrid = ({ data }: Props) => {
  return (
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  );
};

export default DataShowcaseGrid;
