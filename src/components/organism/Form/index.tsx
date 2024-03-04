import Base from "../../atom/Base"

interface FormProps {
    onSubmit: () => void;
}

const Form = (props: FormProps) => {
    return (
        <Base>
            <form onSubmit={props.onSubmit}>

            </form>
        </Base>
    )
}

export default Form