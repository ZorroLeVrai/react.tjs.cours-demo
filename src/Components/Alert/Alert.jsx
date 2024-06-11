export default function Alert(props) {
    console.log(props.children);

    return (
        <div className="alert alert-warning alert-dismissible" role="alert">
            {props.children}
        </div>
    );
}
