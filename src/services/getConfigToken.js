const getConfigToken = () => {
    return {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };
};

export default getConfigToken

