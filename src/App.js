import Chip from '@mui/material/Chip';
import "./App.css";
import { useEffect, useState } from "react";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Image } from "@mui/icons-material";
import Button from '@mui/material/Button';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
function App() {
  const [listData, setListData] = useState([
    {
        id: 1,
        pic: "https://s.alicdn.com/@sc04/kf/H11ce26660d114b4690a6bd71f004adffZ.jpg_300x300.jpg",
        title: "iphone 15 pro",
        price: " 129,999",
        location: "Mirpur khas",
        category:"Electronics"
      },
      {
        id: 2,
        pic: "https://s.alicdn.com/@sc04/kf/Hcf346c54580d46db9b735ae97dd9d2faS.jpg_300x300.jpg",
        title: "Bike sonlik",
        price: " 200,000",
        location: "Karachi",
        category:"Machine"
      },
      {
        id: 3,
        pic: "https://s.alicdn.com/@sc04/kf/Hf39a344b04224155a23ff58d573ad8dcd.jpg_300x300.jpg",
        title: "Dell workstation",
        price: " 120,000",
        location: "Lahore",
        category:"Electronics"
      },
      {
        id: 4,
        pic: "https://s.alicdn.com/@sc04/kf/H78a1ea53b99f421f8661fda71b020e1fG.jpg_300x300.jpg",
        title: "Treadmill Machine",
        price: " 135,000",
        location: "Mirpur khas",
        category:"Electronics"
      },
      {
        id: 5,
        pic: "https://s.alicdn.com/@sc04/kf/Hca8cf645fdfa4aaa8525bcc075d4e1a2Z.jpg_300x300.jpg",
        title: "S 20 lite",
        price: " 15,000",
        location: "Mirpur khas",
        category:"Electronics"
      },
      {
        id: 6,
        pic: "https://s.alicdn.com/@sc04/kf/H23ab725b0f174ecf9afd44e3ea4f590dw.jpg_300x300.jpg",
        title: "knife",
        price: " 950",
        location: "Mirpur khas",
        category:"Crockry"
      },
      {
        id: 7,
        pic: "https://s.alicdn.com/@sc04/kf/Hadd61ee811ef4e69b8bfbe9425beecef6.jpg_300x300.jpg",
        title: "Vivo c21e",
        price: " 43,000",
        location: "Mirpur khas",
        category:"Electronics"
      },
      {
        id: 8,
        pic: "https://s.alicdn.com/@sc04/kf/Hfe75be83f84549fba103a145c35de823H.jpg_300x300.jpg",
        title: "Nikon D3200 lens",
        price: " 18,500",
        location: "Mirpur khas",
        category:"Electronics"
      },
      {
        id: 9,
        pic: "https://s.alicdn.com/@sc04/kf/Hb1811464d50d416099370bdbeff002cde.jpg_300x300.jpg",
        title: "Ps5",
        price: " 100,000",
        location: "Mirpur khas",
        category:"Electronics"
      },
      {
        id: 10,
        pic: "https://s.alicdn.com/@sc04/kf/H13b997a0d52f4dedba996252e8075a9cl.jpg_300x300.jpg",
        title: "Cd playes",
        price: " 3,000",
        location: "Mirpur khas",
        category:"Electronics"
      },
      {
        id: 11,
        pic: "https://s.alicdn.com/@sc04/kf/H34f6be8dd64a4a559e98bb5d223ee0e06.jpg_300x300.jpg",
        title: "Hp laptop",
        price: " 50,000",
        location: "Mirpur khas",
        category:"Electronics"
      },
      {
        id: 12,
        pic: "https://s.alicdn.com/@sc04/kf/Ha7307fd9518744e3a70140765805a02eH.jpg_300x300.jpg",
        title: "S21 Ultra",
        price: " 185,000",
        location: "Mirpur khas",
        category:"Electronics"
      },
      {
        id: 13,
        pic: "https://s.alicdn.com/@sc04/kf/H05e7595b6fee483e83367c8f5b50fb5bX.jpg_300x300.jpg",
        title: "Note 10",
        price: " 30,000",
        location: "Mirpur khas",
        category:"Electronics"
      },
      {
        id: 14,
        pic: "https://s.alicdn.com/@sc04/kf/H39d3991b75aa40c19f176ea8f2600a0cb.jpg_300x300.jpg",
        title: "Nikon Camera",
        price: " 30,000",
        location: "Mirpur khas",
        category:"Electronics"
      },
    
      {
        id: 15,
        pic: "https://s.alicdn.com/@sc04/kf/He75015790a254137a11f7cbcd69649f00.jpg_300x300.jpg",
        title: "GTa 5 Online",
        price: " 2,000",
        location: "Mirpur khas",
        category:"Games"
      },
      {
        id: 16,
        pic: "https://s.alicdn.com/@sc04/kf/H64eef4054e8c4cd49b270043d790dd0eh.jpg_300x300.jpg",
        title: "dishes",
        price: " 500",
        location: "Mirpur khas",
        category:"Crockry"
      },
      {
        id: 17,
        pic: "https://s.alicdn.com/@sc04/kf/Hc519c84a38c54b6c9c95cca694a06cde1.jpg_300x300.jpg",
        title: "spoon",
        price: " 200",
        location: "Mirpur khas",
        category:"Crockry"
      },
      {
        id: 18,
        pic: "https://s.alicdn.com/@sc04/kf/H57fbc472aa854b88b0c22feebf27ec80X.jpg_300x300.jpg",
        title: "glass",
        price: " 750",
        location: "Mirpur khas",
        category:"Crockry"
      },
      {
        id: 19,
        pic: "https://s.alicdn.com/@sc04/kf/H751a3c8af4d94c1280791acdb09fd6dfM.jpg_300x300.jpg",
        title: "Oval Chopper",
        price: " 950",
        location: "Mirpur khas",
        category:"Crockry"
      },
      {
        id: 20,
        pic: "https://s.alicdn.com/@sc04/kf/Hdab4c032687a4cb9933e30e72faed75aB.jpg_300x300.jpg",
        title: "cup",
        price: " 300",
        location: "Mirpur khas",
        category:"Crockry"
      },])
    
  const [allCategories, setAllCategories] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [filterList, setFilterList] = useState([]);
  
  // extracting all categories from main product Array
  let getCategories = () => {
    let li = listData.map((x) => x.category);
    li = [...new Set([...li])];
    setAllCategories([...li]);
  };

  // Render Item By DropDown
  let searchCategoryItem = (val) => {
    setSelectedCategory(val);
    let filteredList = listData.filter((x) => x.category == val);
    setFilterList([...filteredList]);
  };

  // search Item By DropDown and Input
  let searchItem = (val) => {
    let filteredList = listData.filter(
      (x) =>
        x.category == selectedCategory &&
        x.title.toLowerCase().includes(val.toLowerCase())
    );
    setFilterList([...filteredList]);
  };

  // it will run when component initialize ...
  useEffect(() => {
    getCategories();
  }, []);
  
   

  return (
    <div className="App">
       
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant='h5' align='center' sx={{ textDecoration: "underline", fontWeight: "bold", paddingX: "15px", paddingY: "20px" }}>Products</Typography>
            <Typography variant='h5' align='center' sx={{ fontWeight: "bold", paddingX: "15px", paddingY: "20px" }}>Manufacture</Typography>
          </Box>
     
      <Grid container>
        <Grid item md={3}>
        <Box  sx={{ display: "flex", justifyContent: "space-evenly", paddingX: "90px" }}>
        <img width="300px" height="80px" src={require('./img/ali.png')}/>
         
            <Select 
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Category"
              variant="standard"
              fullWidth={true}
              onChange={(e) => searchCategoryItem(e.target.value)}
              value={selectedCategory}
            >


              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {allCategories.map((e, i) => (
                <MenuItem key={i} value={e}>
                  {e}
                </MenuItem>
              ))}
            </Select>
            
          </Box>
        </Grid>
        <Grid item md={9}>
          <Box sx={{ padding: 2 }}>
            <TextField className="im "
              variant="standard"
              fullWidth={true}
              label="what are you looking for ..."
              
              onChange={(e) => searchItem(e.target.value)}
              
            /> 
          </Box>
        </Grid>
<Button variant="contained" click={getCategories}>Electronics<img width="50px" src={require('./img/e.webp')} /></Button>
<Button variant="contained" click={searchCategoryItem}>Machine<img width="50px" src={require('./img/m.webp')} /></Button>
<Button variant="contained" click={searchCategoryItem}>Crockry<img width="50px" src={require('./img/c.webp')} /></Button>
<Button variant="contained" click={searchCategoryItem}>Games<img width="50px" src={require('./img/g.webp')} /></Button>
      </Grid>
      <Grid container>
        {filterList.map((e, i) => (
          <Grid item md={3} xs={12} sm={6} key={i}>
            <Box className="bgLight">
              <Chip label={e.category} />
              <img src={e.pic} width="100%" alt="" />
              <Tooltip title={e.title}>
                <Typography
                  sx={{ height: 60, overflow: "hidden" }}
                  variant="h6"
                >
                  {e.title.slice(0, 30) + (e.title.length > 30 ? "..." : "")}
                </Typography>
              </Tooltip>
              <Typography variant="h5">Rs {e.price}/-</Typography>
              {/* <Typography variant="p">{e.description}</Typography> */}
              <Typography variant="h3" color="text.secondary">
                      {e.location}
                    </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <hr />
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 4, md: 16 }}>
        {listData.map((e, i) => (
          <Grid item xs={2} sm={4} md={4} key={i}>
            <Box  sx={{ flexGrow: 1, padding: "10px",marginTop:"100px"}} className="bgLight">
              <Chip label={e.category} />
              <img src={e.pic} width="100%" alt="" />
              <Tooltip title={e.title}>
                <Typography
                  sx={{ height: 60, overflow: "hidden" }}
                  variant="h6"
                >
                  {e.title.slice(0, 30) + (e.title.length > 30 ? "..." : "")}
                </Typography>
              </Tooltip>
              <Typography variant="h5">Rs {e.price}/-</Typography>
              {/* <Typography variant="p">{e.description}</Typography> */}
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;