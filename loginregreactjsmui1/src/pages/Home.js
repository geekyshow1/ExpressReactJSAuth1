import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

const Home = () => {
  // Getting User Data from Redux Store
  const myData = useSelector(state => state.user)
  console.log("Home", myData)

  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Home Page {myData.name}</h1>
        <hr />
        <p>Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum officiis debitis vel tenetur quos animi vero voluptates reiciendis, omnis sed in libero temporibus deleniti pariatur expedita corporis officia. Odit enim, quasi facere magnam earum officiis ipsa aliquid impedit velit quibusdam dolor ex esse ratione explicabo quod, culpa temporibus? Dolorem deleniti doloremque maxime quas deserunt. Ex aspernatur saepe illo eaque corrupti placeat, aperiam nulla adipisci itaque quos necessitatibus iure at minus non delectus ratione quod ad. Alias dolore perferendis est expedita iure! Nostrum laborum tempore amet commodi voluptas accusamus enim repudiandae, quia odio cumque, laboriosam architecto illo! Aliquid, fuga quis.</p>
      </Grid>
    </Grid>
  </>;
};

export default Home;
