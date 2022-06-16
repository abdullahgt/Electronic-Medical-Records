import NativePickers from "./NativePickers";

function DOB(props) {

    return <main>
        <NativePickers />
        
            {props.children}
    </main>
}

export default DOB;