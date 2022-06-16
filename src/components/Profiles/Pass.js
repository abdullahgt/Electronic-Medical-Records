import DemoForm from "./Passwords";

function Pass(props) {

    return <div>
        <DemoForm />
        
            {props.children}
    </div>
}

export default Pass;