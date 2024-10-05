const TestLayout = ({
    children,
}:{
    children:React.ReactNode;
}) => {
    return(

        <div className="bg-lime-400 h-full">
            {children};
        </div>
    )
}

export default TestLayout;