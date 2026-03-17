
type Section = {
    className?: string,
    children: React.ReactNode
}

export const Section = ({ className = "", children }: Section) => {
    return (
        <section className={`relative overflow-hidden ${className}`}>{children}</section>
    )
}
