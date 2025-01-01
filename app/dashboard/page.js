import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";

export const metadata = {
    title: "Moody App · Dashboard",
};
export default function dashboardPage() {
    const isAuthenticated = false;
    let  children  = (<Login />)
    if(isAuthenticated){
        children = (<Dashboard />)
    }
    return (
        <Main>
            {children}
        </Main>
    );
}