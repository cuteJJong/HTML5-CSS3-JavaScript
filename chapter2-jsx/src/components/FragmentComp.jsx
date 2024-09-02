import { Fragment} from 'react';

function FragmentComp() {
  return (
    //fragment는 component조각
    <Fragment>
      <h1>Fragment</h1>
      <>
        This is contents.
      </>
    </Fragment>
  );
}

export default FragmentComp;