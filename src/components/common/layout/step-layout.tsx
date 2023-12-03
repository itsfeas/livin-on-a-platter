interface StepLayoutProps {
    prev: string,
    children: React.ReactNode,
    title?: string
}

const StepLayout: React.FC<StepLayoutProps> = ({ children }) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
        </main>
    );
};

export default StepLayout;
