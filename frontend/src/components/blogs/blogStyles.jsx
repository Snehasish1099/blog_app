export const dashBoardBlog = {
    container: {
        padding: '2rem',
        background: '#f9f9f9',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
    },
    heading: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    button: {
        padding: '0.5rem 1rem',
        background: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginLeft: '0.5rem',
    },
    createBtn: {
        background: '#28a745',
    },
    blogList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    blogCard: {
        background: '#fff',
        padding: '1rem',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    },
    blogTitle: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    },
    blogAuthor: {
        fontSize: '0.9rem',
        color: '#555',
        marginTop: '0.5rem',
    },
    blogButtons: {
        marginTop: '1rem',
        display: 'flex',
        gap: '0.5rem',
    },
    dangerButton: {
        background: '#dc3545',
    },
};

export const blogFormStyle = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: '#f5f5f5',
    },
    formWrapper: {
        background: '#fff',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '500px',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '1.5rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    input: {
        padding: '0.75rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '1rem',
    },
    textarea: {
        padding: '0.75rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '1rem',
        resize: 'vertical',
    },
    button: {
        padding: '0.75rem',
        borderRadius: '5px',
        border: 'none',
        background: '#007bff',
        color: '#fff',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
    },
}