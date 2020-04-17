const filters = {
    searchTerm: ''
}

const getFilters = () => filters

const setFilters = ({ searchTerm }) => {
    if(typeof searchTerm === 'string'){
        filters.searchTerm = searchTerm
    }
}

export { getFilters, setFilters }