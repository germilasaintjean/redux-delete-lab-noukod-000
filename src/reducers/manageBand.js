export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

    const band = {
           id: Math.random()*10000000000000000,
           text: action.payload.text
         }
         return { bands: state.bands.concat(band) };

       case 'DELETE_BAND':

         return {bands: state.bands.filter(band => band !== action.payload)}

    default:
      return state;
  }
};
