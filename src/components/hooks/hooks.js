import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import getCarAction from '../redux/carDetails';
import getCarAction from '../../redux/carDetails';

const hooks = () => {
  const dispatch = useDispatch();
  const car = useSelector((state) => state.car);
  useEffect(() => {
    if (!car.length) {
      dispatch(getCarAction());
    }
  }, []);
};
export default hooks;
