function Avatar({ image, onClick }) {
    return (
        <header className="avatar-container">
            <img 
                src={image} 
                alt="Profile" 
                className="avatar-image"
                onClick={onClick}
            />
            <div className="avatar-board"></div>
        </header>
    );
}

export default Avatar;