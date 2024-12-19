import "../Styles/Spinner.css"; // Pastikan path file benar
const MiniSpinner = () => {
	return (
		<div
			className="d-flex justify-content-center align-items-center">
			<div className="spinner-border spinner-custom" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};

export default MiniSpinner;