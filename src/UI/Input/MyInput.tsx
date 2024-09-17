import { MyInputProps } from "./interface";

export default function MyInput(props: MyInputProps) {

    return (
        <input className="my-input"
            {...props}
        />
    );
};