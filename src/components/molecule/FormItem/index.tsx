import Base from "../../atom/Base";
import BaseInput from "../../atom/BaseInput"
import BaseText from "../../atom/BaseText"

interface FormItemProps {
    labelName: string;
    inputWidth?: string;
    inputType?: string;
    accept?: string;
    inputPlaceholder: string;
    onChange: (value: any) => void;
}

const FormItem = (props: FormItemProps) => {
    return(
    <Base $flexDirection="row">
        <label>
            <BaseText>{props.labelName}</BaseText>
        </label>
        <BaseInput
            $width={props.inputWidth ? props.inputWidth : `90%`} 
            type={props.inputType ? props.inputType : "text"} 
            placeholder={props.inputPlaceholder} 
            onChange={(e) => props.onChange(e.target.value)} 
            accept={props.accept ? props.accept : undefined} 
        />
    </Base>
    )
}

export default FormItem