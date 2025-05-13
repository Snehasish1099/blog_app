export default {
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
        boxShadow: '0 0 15px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '1rem',
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
    button: {
        padding: '0.75rem',
        borderRadius: '5px',
        border: 'none',
        background: '#28a745',
        color: '#fff',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
    },
    error: {
        color: 'red',
        marginTop: '1rem',
        textAlign: 'center',
    },
};