// **Sample code for reference. Replace with your own implementation.**

interface ButtonGroupProps {
    children: React.ReactNode;
    className?: string;
}

export const ButtonGroup = ({ children, className = '' }: ButtonGroupProps) => {
    return (
        <div className={`flex items-center divide-x divide-border rounded border border-border overflow-hidden ${className}`}>
            {children}
        </div>
    );
};
//
// Usage:
// <ButtonGroup>
//   <Button variant="outline">All</Button>
//   <Button variant="outline">Men</Button>
//   <Button variant="outline">Women</Button>
// </ButtonGroup>
