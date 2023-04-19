import Navbar from './navbar'
type RequireAuthenticationProps = {
    children: React.ReactNode
};
export default function Layout({ children }: RequireAuthenticationProps) {
    return (
        <div className='h-full font-akshar'>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}