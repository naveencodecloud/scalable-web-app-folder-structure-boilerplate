
// **Sample code for reference. Replace with your own implementation.**

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = ({ label, error, ...props }: InputProps) => {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm font-medium">{label}</label>}
            <input
                className={`border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 ${error ? 'border-red-500' : 'border-gray-300'
                    }`}
                {...props}
            />
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
};


// USAGE
{/* <Input label="Email" type="email" value={email} onChange={...} error={errors.email} /> */ }
