
type Container = {
    className?: string,
    children: React.ReactNode
}

export const Container = ({ className = "", children }: Container) => {
    return (
        <div className={`w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto px-4 lg:px-6 ${className}`}>
            {children}
        </div>
    )
}
