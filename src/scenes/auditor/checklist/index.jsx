import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
// import { mockDataContacts } from "../../data/mockData";
import Header from "../../../components/Header";
import { useTheme } from "@mui/material";
import CheckList from "../../../components/CheckList";
import UploadIcon from '@mui/icons-material/Upload';

const AuditCheckList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header
        title="CHECKLIST"
        subtitle="Legal & Environmental Compliance Checklist"
      />
      <Box
        m="40px 0 0 0"
        // height="75vh"
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
        <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'right'}
            mb={2}
        >
          <Button
              sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              }}
          >
            <UploadIcon sx={{ mr: "10px" }} />
            Upload Report
          </Button>
        </Box>
        <CheckList />
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        sx={{
          "& .MuiButton-root": {
            fontSize: "14px",
            fontWeight: "bold",
            padding: "5px 10px",
          },
        }}
      >
        <Button 
                // variant="solid"
                sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    // fontSize: "14px",
                    fontWeight: "bold",
                    // padding: "5px 10px",
                    m: 2
                }}
            >
                Cancel
            </Button>
            <Button 
                variant="solid"
                sx={{
                    backgroundColor: colors.greenAccent[700],
                    color: colors.grey[100],
                    // fontSize: "14px",
                    fontWeight: "bold",
                    // padding: "5px 10px",
                }}
            >
                Save
            </Button>
        </Box>
    </Box>
  );
};

export default AuditCheckList;
