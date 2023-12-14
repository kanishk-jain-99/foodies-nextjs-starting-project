import classes from "./loading.module.css";

// To get a default next js loading page just renapme the loading-out.js to loading.js. this will effect all child components as well
export default function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching meals....</p>;
}
