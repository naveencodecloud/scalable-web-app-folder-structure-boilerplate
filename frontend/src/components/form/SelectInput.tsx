
// **Sample code for reference. Replace with your own implementation.**

interface SelectOption {
    value: string;
    label: string;
}

interface SelectInputProps {
    label?: string;
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export const SelectInput = ({ label, options, value, onChange, error }: SelectInputProps) => {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm font-medium">{label}</label>}
            <select
                value={value}
                onChange={e => onChange(e.target.value)}
                className="border rounded px-3 py-2 text-sm"
            >
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
};


// USAGE
{/* <SelectInput label="Category" options={[...]} value={category} onChange={setCategory} /> */ }
