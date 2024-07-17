import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDataAuditTrails } from "../../../data/mockData";
import Header from "../../../components/Header";
import { useTheme } from "@mui/material";

const History = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "auditorID", headerName: "Investor ID", flex: 0.5 },
    {
      field: "auditorName",
      headerName: "Investor Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
        field: "email",
        headerName: "Email",
        flex: 1,
    },
    {
        field: "project",
        headerName: "Project",
        flex: 1,
        cellClassName: "name-column--cell",
    },
    {
      field: "action",
      headerName: "Action",
      flex: 0.5,
    },        
    {
      field: "description",
      headerName: "Description",
      flex: 1.5,
    },
    {
      field: "date",
      headerName: "Date",
    //   flex: 1,
    },
    {
        field: "time",
        headerName: "Time",
        // flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="INVESTMENT HISTORY"
        subtitle="List of past investments & actions"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataAuditTrails}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default History;
