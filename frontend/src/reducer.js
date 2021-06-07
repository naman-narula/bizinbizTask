export default function reducer(state, action) {
    switch (action.type) {
        case 'FETCH': {
            return {
                ...state, aggregate: [...action.payload], filterList: [...action.payload]
            }
        }
        case 'SEARCH': {
            return {
                ...state, searchTerm: action.payload,searchMode:true
            }
        }
        case 'FILTER': {
            const query = new RegExp(state.searchTerm, 'i');
            const filteredCountry = state.aggregate.filter((country) => {
                const temp = country.name.match(query);
                const { input } = temp === null ? '' : temp;
                return country.name === input;
            });
            return {
                ...state,filterList:[...filteredCountry]
            }
        }
        case 'TOGGLE-VIEW':
            {
                return {
                    ...state,primaryView:!state.primaryView,searchMode:false
                }
            }
       

        default: throw Error('no matching action')
    }

}