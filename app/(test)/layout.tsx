const TestLayout = ({
    children,
}:{
    children:React.ReactNode;
}) => {
    return(

        <div className="bg-lime-400">
            {children};
        </div>
    )
}

export default TestLayout;