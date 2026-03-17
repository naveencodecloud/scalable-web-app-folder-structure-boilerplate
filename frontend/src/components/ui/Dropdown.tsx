// **Sample code for reference. Replace with your own implementation.**

import { useState } from 'react';

interface DropdownItem {
    label: string;
    onClick: () => void;
}

interface DropdownProps {
    trigger: React.ReactNode;
    items: DropdownItem[];
}

export const Dropdown = ({ trigger, items }: DropdownProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <div onClick={() => setOpen(!open)}>{trigger}</div>
            {open && (
                <ul className="absolute top-full right-0 bg-white border rounded shadow-md z-10 min-w-40">
                    {items.map((item, i) => (
                        <li key={i}>
                            <button
                                onClick={() => { item.onClick(); setOpen(false); }}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
