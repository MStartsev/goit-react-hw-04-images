import { Grid } from 'react-loader-spinner';

const Loader = () => (
  <Grid
    height="40"
    width="40"
    color="#a1f2c1"
    ariaLabel="grid-loading"
    radius="12"
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    wrapperClass=""
    visible={true}
  />
);

export default Loader;
