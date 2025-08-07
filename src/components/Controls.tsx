import '../styles/Controls.css';

interface ControlsProps {
    onOpen: () => void;
}

export function Controls({ onOpen }: ControlsProps) {
    return (
        <div className='controls'>
            <button onClick={onOpen}>Open Modal</button>
        </div>
    )
}