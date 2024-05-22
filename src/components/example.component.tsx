import ExampleProps from "../interfaces/example.interface";


const Example = ({ title, disabled }: ExampleProps) => {
    return (
        <button disabled={disabled}>{title}</button>
    );
}

export default Example;