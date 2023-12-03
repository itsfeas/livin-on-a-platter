interface BaseLayoutProps {
    children: React.ReactNode,
    title?: string
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
        </main>
    );
};

export default BaseLayout;
